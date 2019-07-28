/*! For license information please see chunk.7e9a71fd0865a642b66f.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [110],
  {
    149: function(e, t) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function() {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function() {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    650: function(e, t, n) {
      (function(e) {
        var n;
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
        !(function(t, n) {
          "use strict";
          "object" === i(e) && "object" === i(e.exports)
            ? (e.exports = t.document
                ? n(t, !0)
                : function(e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function(r, o) {
          "use strict";
          var s = [],
            a = r.document,
            l = Object.getPrototypeOf,
            u = s.slice,
            c = s.concat,
            d = s.push,
            h = s.indexOf,
            p = {},
            f = p.toString,
            g = p.hasOwnProperty,
            v = g.toString,
            m = v.call(Object),
            y = {},
            b = function(e) {
              return "function" == typeof e && "number" != typeof e.nodeType;
            },
            _ = function(e) {
              return null != e && e === e.window;
            },
            x = { type: !0, src: !0, noModule: !0 };
          function w(e, t, n) {
            var i,
              r = (t = t || a).createElement("script");
            if (((r.text = e), n)) for (i in x) n[i] && (r[i] = n[i]);
            t.head.appendChild(r).parentNode.removeChild(r);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" === i(e) || "function" == typeof e
              ? p[f.call(e)] || "object"
              : i(e);
          }
          var S = function e(t, n) {
              return new e.fn.init(t, n);
            },
            C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          function k(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !b(e) &&
              !_(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (S.fn = S.prototype = {
            jquery: "3.3.1",
            constructor: S,
            length: 0,
            toArray: function() {
              return u.call(this);
            },
            get: function(e) {
              return null == e
                ? u.call(this)
                : e < 0
                ? this[e + this.length]
                : this[e];
            },
            pushStack: function(e) {
              var t = S.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function(e) {
              return S.each(this, e);
            },
            map: function(e) {
              return this.pushStack(
                S.map(this, function(t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function() {
              return this.pushStack(u.apply(this, arguments));
            },
            first: function() {
              return this.eq(0);
            },
            last: function() {
              return this.eq(-1);
            },
            eq: function(e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function() {
              return this.prevObject || this.constructor();
            },
            push: d,
            sort: s.sort,
            splice: s.splice,
          }),
            (S.extend = S.fn.extend = function() {
              var e,
                t,
                n,
                r,
                o,
                s,
                a = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
              for (
                "boolean" == typeof a &&
                  ((c = a), (a = arguments[l] || {}), l++),
                  "object" === i(a) || b(a) || (a = {}),
                  l === u && ((a = this), l--);
                l < u;
                l++
              )
                if (null != (e = arguments[l]))
                  for (t in e)
                    (n = a[t]),
                      a !== (r = e[t]) &&
                        (c &&
                        r &&
                        (S.isPlainObject(r) || (o = Array.isArray(r)))
                          ? (o
                              ? ((o = !1), (s = n && Array.isArray(n) ? n : []))
                              : (s = n && S.isPlainObject(n) ? n : {}),
                            (a[t] = S.extend(c, s, r)))
                          : void 0 !== r && (a[t] = r));
              return a;
            }),
            S.extend({
              expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function(e) {
                throw new Error(e);
              },
              noop: function() {},
              isPlainObject: function(e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== f.call(e)) &&
                  (!(t = l(e)) ||
                    ("function" ==
                      typeof (n = g.call(t, "constructor") && t.constructor) &&
                      v.call(n) === m))
                );
              },
              isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function(e) {
                w(e);
              },
              each: function(e, t) {
                var n,
                  i = 0;
                if (k(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              trim: function(e) {
                return null == e ? "" : (e + "").replace(C, "");
              },
              makeArray: function(e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (k(Object(e))
                      ? S.merge(n, "string" == typeof e ? [e] : e)
                      : d.call(n, e)),
                  n
                );
              },
              inArray: function(e, t, n) {
                return null == t ? -1 : h.call(t, e, n);
              },
              merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                  e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function(e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                  !t(e[r], r) !== s && i.push(e[r]);
                return i;
              },
              map: function(e, t, n) {
                var i,
                  r,
                  o = 0,
                  s = [];
                if (k(e))
                  for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && s.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return c.apply([], s);
              },
              guid: 1,
              support: y,
            }),
            "function" == typeof Symbol &&
              (S.fn[Symbol.iterator] = s[Symbol.iterator]),
            S.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function(e, t) {
                p["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var A = (function(e) {
            var t,
              n,
              i,
              r,
              o,
              s,
              a,
              l,
              u,
              c,
              d,
              h,
              p,
              f,
              g,
              v,
              m,
              y,
              b,
              _ = "sizzle" + 1 * new Date(),
              x = e.document,
              w = 0,
              T = 0,
              S = se(),
              C = se(),
              k = se(),
              A = function(e, t) {
                return e === t && (d = !0), 0;
              },
              E = {}.hasOwnProperty,
              D = [],
              N = D.pop,
              O = D.push,
              j = D.push,
              q = D.slice,
              H = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              L =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              R = "[\\x20\\t\\r\\n\\f]",
              $ = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
              P =
                "\\[" +
                R +
                "*(" +
                $ +
                ")(?:" +
                R +
                "*([*^$|!~]?=)" +
                R +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                $ +
                "))|)" +
                R +
                "*\\]",
              F =
                ":(" +
                $ +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                P +
                ")*)|.*)\\)|)",
              M = new RegExp(R + "+", "g"),
              I = new RegExp(
                "^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$",
                "g"
              ),
              B = new RegExp("^" + R + "*," + R + "*"),
              V = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
              z = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
              W = new RegExp(F),
              U = new RegExp("^" + $ + "$"),
              X = {
                ID: new RegExp("^#(" + $ + ")"),
                CLASS: new RegExp("^\\.(" + $ + ")"),
                TAG: new RegExp("^(" + $ + "|[*])"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    R +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    R +
                    "*(?:([+-]|)" +
                    R +
                    "*(\\d+)|))" +
                    R +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    R +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    R +
                    "*((?:-\\d)?\\d*)" +
                    R +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              K = /^(?:input|select|textarea|button)$/i,
              Y = /^h\d$/i,
              G = /^[^{]+\{\s*\[native \w/,
              Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              J = /[+~]/,
              Z = new RegExp(
                "\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)",
                "ig"
              ),
              ee = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n
                  ? t
                  : i < 0
                  ? String.fromCharCode(i + 65536)
                  : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
              },
              te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ne = function(e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              ie = function() {
                h();
              },
              re = ye(
                function(e) {
                  return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              j.apply((D = q.call(x.childNodes)), x.childNodes),
                D[x.childNodes.length].nodeType;
            } catch (Te) {
              j = {
                apply: D.length
                  ? function(e, t) {
                      O.apply(e, q.call(t));
                    }
                  : function(e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function oe(e, t, i, r) {
              var o,
                a,
                u,
                c,
                d,
                f,
                m,
                y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
              )
                return i;
              if (
                !r &&
                ((t ? t.ownerDocument || t : x) !== p && h(t), (t = t || p), g)
              ) {
                if (11 !== w && (d = Q.exec(e)))
                  if ((o = d[1])) {
                    if (9 === w) {
                      if (!(u = t.getElementById(o))) return i;
                      if (u.id === o) return i.push(u), i;
                    } else if (
                      y &&
                      (u = y.getElementById(o)) &&
                      b(t, u) &&
                      u.id === o
                    )
                      return i.push(u), i;
                  } else {
                    if (d[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                    if (
                      (o = d[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return j.apply(i, t.getElementsByClassName(o)), i;
                  }
                if (n.qsa && !k[e + " "] && (!v || !v.test(e))) {
                  if (1 !== w) (y = t), (m = e);
                  else if ("object" !== t.nodeName.toLowerCase()) {
                    for (
                      (c = t.getAttribute("id"))
                        ? (c = c.replace(te, ne))
                        : t.setAttribute("id", (c = _)),
                        a = (f = s(e)).length;
                      a--;

                    )
                      f[a] = "#" + c + " " + me(f[a]);
                    (m = f.join(",")),
                      (y = (J.test(e) && ge(t.parentNode)) || t);
                  }
                  if (m)
                    try {
                      return j.apply(i, y.querySelectorAll(m)), i;
                    } catch (T) {
                    } finally {
                      c === _ && t.removeAttribute("id");
                    }
                }
              }
              return l(e.replace(I, "$1"), t, i, r);
            }
            function se() {
              var e = [];
              return function t(n, r) {
                return (
                  e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                  (t[n + " "] = r)
                );
              };
            }
            function ae(e) {
              return (e[_] = !0), e;
            }
            function le(e) {
              var t = p.createElement("fieldset");
              try {
                return !!e(t);
              } catch (Te) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ue(e, t) {
              for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t;
            }
            function ce(e, t) {
              var n = t && e,
                i =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function de(e) {
              return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function pe(e) {
              return function(t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && re(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function fe(e) {
              return ae(function(t) {
                return (
                  (t = +t),
                  ae(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                      n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function ge(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = oe.support = {}),
            (o = oe.isXML = function(e) {
              var t = e && (e.ownerDocument || e).documentElement;
              return !!t && "HTML" !== t.nodeName;
            }),
            (h = oe.setDocument = function(e) {
              var t,
                r,
                s = e ? e.ownerDocument || e : x;
              return s !== p && 9 === s.nodeType && s.documentElement
                ? ((f = (p = s).documentElement),
                  (g = !o(p)),
                  x !== p &&
                    (r = p.defaultView) &&
                    r.top !== r &&
                    (r.addEventListener
                      ? r.addEventListener("unload", ie, !1)
                      : r.attachEvent && r.attachEvent("onunload", ie)),
                  (n.attributes = le(function(e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = le(function(e) {
                    return (
                      e.appendChild(p.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = G.test(p.getElementsByClassName)),
                  (n.getById = le(function(e) {
                    return (
                      (f.appendChild(e).id = _),
                      !p.getElementsByName || !p.getElementsByName(_).length
                    );
                  })),
                  n.getById
                    ? ((i.filter.ID = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (i.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((i.filter.ID = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (i.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n,
                            i,
                            r,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              r = t.getElementsByName(e), i = 0;
                              (o = r[i++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (i.find.TAG = n.getElementsByTagName
                    ? function(e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function(e, t) {
                        var n,
                          i = [],
                          r = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                          return i;
                        }
                        return o;
                      }),
                  (i.find.CLASS =
                    n.getElementsByClassName &&
                    function(e, t) {
                      if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (m = []),
                  (v = []),
                  (n.qsa = G.test(p.querySelectorAll)) &&
                    (le(function(e) {
                      (f.appendChild(e).innerHTML =
                        "<a id='" +
                        _ +
                        "'></a><select id='" +
                        _ +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push("[*^$]=" + R + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          v.push("\\[" + R + "*(?:value|" + L + ")"),
                        e.querySelectorAll("[id~=" + _ + "-]").length ||
                          v.push("~="),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked"),
                        e.querySelectorAll("a#" + _ + "+*").length ||
                          v.push(".#.+[+~]");
                    }),
                    le(function(e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = p.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          v.push("name" + R + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          v.push(":enabled", ":disabled"),
                        (f.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (n.matchesSelector = G.test(
                    (y =
                      f.matches ||
                      f.webkitMatchesSelector ||
                      f.mozMatchesSelector ||
                      f.oMatchesSelector ||
                      f.msMatchesSelector)
                  )) &&
                    le(function(e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        m.push("!=", F);
                    }),
                  (v = v.length && new RegExp(v.join("|"))),
                  (m = m.length && new RegExp(m.join("|"))),
                  (t = G.test(f.compareDocumentPosition)),
                  (b =
                    t || G.test(f.contains)
                      ? function(e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                          return (
                            e === i ||
                            !(
                              !i ||
                              1 !== i.nodeType ||
                              !(n.contains
                                ? n.contains(i)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(i))
                            )
                          );
                        }
                      : function(e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (A = t
                    ? function(e, t) {
                        if (e === t) return (d = !0), 0;
                        var i =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          i ||
                          (1 &
                            (i =
                              (e.ownerDocument || e) === (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === i)
                            ? e === p || (e.ownerDocument === x && b(x, e))
                              ? -1
                              : t === p || (t.ownerDocument === x && b(x, t))
                              ? 1
                              : c
                              ? H(c, e) - H(c, t)
                              : 0
                            : 4 & i
                            ? -1
                            : 1)
                        );
                      }
                    : function(e, t) {
                        if (e === t) return (d = !0), 0;
                        var n,
                          i = 0,
                          r = e.parentNode,
                          o = t.parentNode,
                          s = [e],
                          a = [t];
                        if (!r || !o)
                          return e === p
                            ? -1
                            : t === p
                            ? 1
                            : r
                            ? -1
                            : o
                            ? 1
                            : c
                            ? H(c, e) - H(c, t)
                            : 0;
                        if (r === o) return ce(e, t);
                        for (n = e; (n = n.parentNode); ) s.unshift(n);
                        for (n = t; (n = n.parentNode); ) a.unshift(n);
                        for (; s[i] === a[i]; ) i++;
                        return i
                          ? ce(s[i], a[i])
                          : s[i] === x
                          ? -1
                          : a[i] === x
                          ? 1
                          : 0;
                      }),
                  p)
                : p;
            }),
            (oe.matches = function(e, t) {
              return oe(e, null, null, t);
            }),
            (oe.matchesSelector = function(e, t) {
              if (
                ((e.ownerDocument || e) !== p && h(e),
                (t = t.replace(z, "='$1']")),
                n.matchesSelector &&
                  g &&
                  !k[t + " "] &&
                  (!m || !m.test(t)) &&
                  (!v || !v.test(t)))
              )
                try {
                  var i = y.call(e, t);
                  if (
                    i ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (Te) {}
              return oe(t, p, null, [e]).length > 0;
            }),
            (oe.contains = function(e, t) {
              return (e.ownerDocument || e) !== p && h(e), b(e, t);
            }),
            (oe.attr = function(e, t) {
              (e.ownerDocument || e) !== p && h(e);
              var r = i.attrHandle[t.toLowerCase()],
                o =
                  r && E.call(i.attrHandle, t.toLowerCase())
                    ? r(e, t, !g)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !g
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (oe.escape = function(e) {
              return (e + "").replace(te, ne);
            }),
            (oe.error = function(e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (oe.uniqueSort = function(e) {
              var t,
                i = [],
                r = 0,
                o = 0;
              if (
                ((d = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(A),
                d)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                for (; r--; ) e.splice(i[r], 1);
              }
              return (c = null), e;
            }),
            (r = oe.getText = function(e) {
              var t,
                n = "",
                i = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[i++]); ) n += r(t);
              return n;
            }),
            ((i = oe.selectors = {
              cacheLength: 50,
              createPseudo: ae,
              match: X,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function(e) {
                  return (
                    (e[1] = e[1].replace(Z, ee)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function(e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || oe.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && oe.error(e[0]),
                    e
                  );
                },
                PSEUDO: function(e) {
                  var t,
                    n = !e[6] && e[2];
                  return X.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          W.test(n) &&
                          (t = s(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function(e) {
                  var t = e.replace(Z, ee).toLowerCase();
                  return "*" === e
                    ? function() {
                        return !0;
                      }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function(e) {
                  var t = S[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                      S(e, function(e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function(e, t, n) {
                  return function(i) {
                    var r = oe.attr(i, e);
                    return null == r
                      ? "!=" === t
                      : !t ||
                          ((r += ""),
                          "=" === t
                            ? r === n
                            : "!=" === t
                            ? r !== n
                            : "^=" === t
                            ? n && 0 === r.indexOf(n)
                            : "*=" === t
                            ? n && r.indexOf(n) > -1
                            : "$=" === t
                            ? n && r.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + r.replace(M, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (r === n ||
                                r.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function(e, t, n, i, r) {
                  var o = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    a = "of-type" === t;
                  return 1 === i && 0 === r
                    ? function(e) {
                        return !!e.parentNode;
                      }
                    : function(t, n, l) {
                        var u,
                          c,
                          d,
                          h,
                          p,
                          f,
                          g = o !== s ? "nextSibling" : "previousSibling",
                          v = t.parentNode,
                          m = a && t.nodeName.toLowerCase(),
                          y = !l && !a,
                          b = !1;
                        if (v) {
                          if (o) {
                            for (; g; ) {
                              for (h = t; (h = h[g]); )
                                if (
                                  a
                                    ? h.nodeName.toLowerCase() === m
                                    : 1 === h.nodeType
                                )
                                  return !1;
                              f = g = "only" === e && !f && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((f = [s ? v.firstChild : v.lastChild]), s && y)
                          ) {
                            for (
                              b =
                                (p =
                                  (u =
                                    (c =
                                      (d = (h = v)[_] || (h[_] = {}))[
                                        h.uniqueID
                                      ] || (d[h.uniqueID] = {}))[e] ||
                                    [])[0] === w && u[1]) && u[2],
                                h = p && v.childNodes[p];
                              (h =
                                (++p && h && h[g]) || (b = p = 0) || f.pop());

                            )
                              if (1 === h.nodeType && ++b && h === t) {
                                c[e] = [w, p, b];
                                break;
                              }
                          } else if (
                            (y &&
                              (b = p =
                                (u =
                                  (c =
                                    (d = (h = t)[_] || (h[_] = {}))[
                                      h.uniqueID
                                    ] || (d[h.uniqueID] = {}))[e] || [])[0] ===
                                  w && u[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (h =
                                (++p && h && h[g]) || (b = p = 0) || f.pop()) &&
                              ((a
                                ? h.nodeName.toLowerCase() !== m
                                : 1 !== h.nodeType) ||
                                !++b ||
                                (y &&
                                  ((c =
                                    (d = h[_] || (h[_] = {}))[h.uniqueID] ||
                                    (d[h.uniqueID] = {}))[e] = [w, b]),
                                h !== t));

                            );
                          return (b -= r) === i || (b % i == 0 && b / i >= 0);
                        }
                      };
                },
                PSEUDO: function(e, t) {
                  var n,
                    r =
                      i.pseudos[e] ||
                      i.setFilters[e.toLowerCase()] ||
                      oe.error("unsupported pseudo: " + e);
                  return r[_]
                    ? r(t)
                    : r.length > 1
                    ? ((n = [e, e, "", t]),
                      i.setFilters.hasOwnProperty(e.toLowerCase())
                        ? ae(function(e, n) {
                            for (var i, o = r(e, t), s = o.length; s--; )
                              e[(i = H(e, o[s]))] = !(n[i] = o[s]);
                          })
                        : function(e) {
                            return r(e, 0, n);
                          })
                    : r;
                },
              },
              pseudos: {
                not: ae(function(e) {
                  var t = [],
                    n = [],
                    i = a(e.replace(I, "$1"));
                  return i[_]
                    ? ae(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--; )
                          (o = s[a]) && (e[a] = !(t[a] = o));
                      })
                    : function(e, r, o) {
                        return (
                          (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: ae(function(e) {
                  return function(t) {
                    return oe(e, t).length > 0;
                  };
                }),
                contains: ae(function(e) {
                  return (
                    (e = e.replace(Z, ee)),
                    function(t) {
                      return (
                        (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                      );
                    }
                  );
                }),
                lang: ae(function(e) {
                  return (
                    U.test(e || "") || oe.error("unsupported lang: " + e),
                    (e = e.replace(Z, ee).toLowerCase()),
                    function(t) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function(t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function(e) {
                  return e === f;
                },
                focus: function(e) {
                  return (
                    e === p.activeElement &&
                    (!p.hasFocus || p.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function(e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function(e) {
                  return !i.pseudos.empty(e);
                },
                header: function(e) {
                  return Y.test(e.nodeName);
                },
                input: function(e) {
                  return K.test(e.nodeName);
                },
                button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function(e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: fe(function() {
                  return [0];
                }),
                last: fe(function(e, t) {
                  return [t - 1];
                }),
                eq: fe(function(e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: fe(function(e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: fe(function(e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: fe(function(e, t, n) {
                  for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
                  return e;
                }),
                gt: fe(function(e, t, n) {
                  for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                  return e;
                }),
              },
            }).pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              i.pseudos[t] = de(t);
            for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
            function ve() {}
            function me(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function ye(e, t, n) {
              var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = T++;
              return t.first
                ? function(t, n, r) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || s) return e(t, n, r);
                    return !1;
                  }
                : function(t, n, l) {
                    var u,
                      c,
                      d,
                      h = [w, a];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || s)
                          if (
                            ((c =
                              (d = t[_] || (t[_] = {}))[t.uniqueID] ||
                              (d[t.uniqueID] = {})),
                            r && r === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
                          else {
                            if ((u = c[o]) && u[0] === w && u[1] === a)
                              return (h[2] = u[2]);
                            if (((c[o] = h), (h[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function be(e) {
              return e.length > 1
                ? function(t, n, i) {
                    for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function _e(e, t, n, i, r) {
              for (
                var o, s = [], a = 0, l = e.length, u = null != t;
                a < l;
                a++
              )
                (o = e[a]) &&
                  ((n && !n(o, i, r)) || (s.push(o), u && t.push(a)));
              return s;
            }
            function xe(e, t, n, i, r, o) {
              return (
                i && !i[_] && (i = xe(i)),
                r && !r[_] && (r = xe(r, o)),
                ae(function(o, s, a, l) {
                  var u,
                    c,
                    d,
                    h = [],
                    p = [],
                    f = s.length,
                    g =
                      o ||
                      (function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++)
                          oe(e, t[i], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || (!o && t) ? g : _e(g, h, e, a, l),
                    m = n ? (r || (o ? e : f || i) ? [] : s) : v;
                  if ((n && n(v, m, a, l), i))
                    for (u = _e(m, p), i(u, [], a, l), c = u.length; c--; )
                      (d = u[c]) && (m[p[c]] = !(v[p[c]] = d));
                  if (o) {
                    if (r || e) {
                      if (r) {
                        for (u = [], c = m.length; c--; )
                          (d = m[c]) && u.push((v[c] = d));
                        r(null, (m = []), u, l);
                      }
                      for (c = m.length; c--; )
                        (d = m[c]) &&
                          (u = r ? H(o, d) : h[c]) > -1 &&
                          (o[u] = !(s[u] = d));
                    }
                  } else (m = _e(m === s ? m.splice(f, m.length) : m)), r ? r(null, s, m, l) : j.apply(s, m);
                })
              );
            }
            function we(e) {
              for (
                var t,
                  n,
                  r,
                  o = e.length,
                  s = i.relative[e[0].type],
                  a = s || i.relative[" "],
                  l = s ? 1 : 0,
                  c = ye(
                    function(e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  d = ye(
                    function(e) {
                      return H(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  h = [
                    function(e, n, i) {
                      var r =
                        (!s && (i || n !== u)) ||
                        ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
                      return (t = null), r;
                    },
                  ];
                l < o;
                l++
              )
                if ((n = i.relative[e[l].type])) h = [ye(be(h), n)];
                else {
                  if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                    for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                    return xe(
                      l > 1 && be(h),
                      l > 1 &&
                        me(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(I, "$1"),
                      n,
                      l < r && we(e.slice(l, r)),
                      r < o && we((e = e.slice(r))),
                      r < o && me(e)
                    );
                  }
                  h.push(n);
                }
              return be(h);
            }
            return (
              (ve.prototype = i.filters = i.pseudos),
              (i.setFilters = new ve()),
              (s = oe.tokenize = function(e, t) {
                var n,
                  r,
                  o,
                  s,
                  a,
                  l,
                  u,
                  c = C[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (a = e, l = [], u = i.preFilter; a; ) {
                  for (s in ((n && !(r = B.exec(a))) ||
                    (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                  (n = !1),
                  (r = V.exec(a)) &&
                    ((n = r.shift()),
                    o.push({ value: n, type: r[0].replace(I, " ") }),
                    (a = a.slice(n.length))),
                  i.filter))
                    !(r = X[s].exec(a)) ||
                      (u[s] && !(r = u[s](r))) ||
                      ((n = r.shift()),
                      o.push({ value: n, type: s, matches: r }),
                      (a = a.slice(n.length)));
                  if (!n) break;
                }
                return t ? a.length : a ? oe.error(e) : C(e, l).slice(0);
              }),
              (a = oe.compile = function(e, t) {
                var n,
                  r = [],
                  o = [],
                  a = k[e + " "];
                if (!a) {
                  for (t || (t = s(e)), n = t.length; n--; )
                    (a = we(t[n]))[_] ? r.push(a) : o.push(a);
                  (a = k(
                    e,
                    (function(e, t) {
                      var n = t.length > 0,
                        r = e.length > 0,
                        o = function(o, s, a, l, c) {
                          var d,
                            f,
                            v,
                            m = 0,
                            y = "0",
                            b = o && [],
                            _ = [],
                            x = u,
                            T = o || (r && i.find.TAG("*", c)),
                            S = (w += null == x ? 1 : Math.random() || 0.1),
                            C = T.length;
                          for (
                            c && (u = s === p || s || c);
                            y !== C && null != (d = T[y]);
                            y++
                          ) {
                            if (r && d) {
                              for (
                                f = 0,
                                  s ||
                                    d.ownerDocument === p ||
                                    (h(d), (a = !g));
                                (v = e[f++]);

                              )
                                if (v(d, s || p, a)) {
                                  l.push(d);
                                  break;
                                }
                              c && (w = S);
                            }
                            n && ((d = !v && d) && m--, o && b.push(d));
                          }
                          if (((m += y), n && y !== m)) {
                            for (f = 0; (v = t[f++]); ) v(b, _, s, a);
                            if (o) {
                              if (m > 0)
                                for (; y--; )
                                  b[y] || _[y] || (_[y] = N.call(l));
                              _ = _e(_);
                            }
                            j.apply(l, _),
                              c &&
                                !o &&
                                _.length > 0 &&
                                m + t.length > 1 &&
                                oe.uniqueSort(l);
                          }
                          return c && ((w = S), (u = x)), b;
                        };
                      return n ? ae(o) : o;
                    })(o, r)
                  )).selector = e;
                }
                return a;
              }),
              (l = oe.select = function(e, t, n, r) {
                var o,
                  l,
                  u,
                  c,
                  d,
                  h = "function" == typeof e && e,
                  p = !r && s((e = h.selector || e));
                if (((n = n || []), 1 === p.length)) {
                  if (
                    (l = p[0] = p[0].slice(0)).length > 2 &&
                    "ID" === (u = l[0]).type &&
                    9 === t.nodeType &&
                    g &&
                    i.relative[l[1].type]
                  ) {
                    if (
                      !(t = (i.find.ID(u.matches[0].replace(Z, ee), t) ||
                        [])[0])
                    )
                      return n;
                    h && (t = t.parentNode),
                      (e = e.slice(l.shift().value.length));
                  }
                  for (
                    o = X.needsContext.test(e) ? 0 : l.length;
                    o-- && ((u = l[o]), !i.relative[(c = u.type)]);

                  )
                    if (
                      (d = i.find[c]) &&
                      (r = d(
                        u.matches[0].replace(Z, ee),
                        (J.test(l[0].type) && ge(t.parentNode)) || t
                      ))
                    ) {
                      if ((l.splice(o, 1), !(e = r.length && me(l))))
                        return j.apply(n, r), n;
                      break;
                    }
                }
                return (
                  (h || a(e, p))(
                    r,
                    t,
                    !g,
                    n,
                    !t || (J.test(e) && ge(t.parentNode)) || t
                  ),
                  n
                );
              }),
              (n.sortStable =
                _.split("")
                  .sort(A)
                  .join("") === _),
              (n.detectDuplicates = !!d),
              h(),
              (n.sortDetached = le(function(e) {
                return (
                  1 & e.compareDocumentPosition(p.createElement("fieldset"))
                );
              })),
              le(function(e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                ue("type|href|height|width", function(e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                le(function(e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                ue("value", function(e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              le(function(e) {
                return null == e.getAttribute("disabled");
              }) ||
                ue(L, function(e, t, n) {
                  var i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              oe
            );
          })(r);
          (S.find = A),
            (S.expr = A.selectors),
            (S.expr[":"] = S.expr.pseudos),
            (S.uniqueSort = S.unique = A.uniqueSort),
            (S.text = A.getText),
            (S.isXMLDoc = A.isXML),
            (S.contains = A.contains),
            (S.escapeSelector = A.escape);
          var E = function(e, t, n) {
              for (
                var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (r && S(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            D = function(e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            N = S.expr.match.needsContext;
          function O(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function q(e, t, n) {
            return b(t)
              ? S.grep(e, function(e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? S.grep(e, function(e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? S.grep(e, function(e) {
                  return h.call(t, e) > -1 !== n;
                })
              : S.filter(t, e, n);
          }
          (S.filter = function(e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? S.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : S.find.matches(
                    e,
                    S.grep(t, function(e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            S.fn.extend({
              find: function(e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    S(e).filter(function() {
                      for (t = 0; t < i; t++)
                        if (S.contains(r[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  S.find(e, r[t], n);
                return i > 1 ? S.uniqueSort(n) : n;
              },
              filter: function(e) {
                return this.pushStack(q(this, e || [], !1));
              },
              not: function(e) {
                return this.pushStack(q(this, e || [], !0));
              },
              is: function(e) {
                return !!q(
                  this,
                  "string" == typeof e && N.test(e) ? S(e) : e || [],
                  !1
                ).length;
              },
            });
          var H,
            L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((S.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || H), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : L.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof S ? t[0] : t),
                  S.merge(
                    this,
                    S.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : a,
                      !0
                    )
                  ),
                  j.test(i[1]) && S.isPlainObject(t))
                )
                  for (i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = a.getElementById(i[2])) &&
                  ((this[0] = r), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : b(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(S)
              : S.makeArray(e, this);
          }).prototype = S.fn),
            (H = S(a));
          var R = /^(?:parents|prev(?:Until|All))/,
            $ = { children: !0, contents: !0, next: !0, prev: !0 };
          function P(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          S.fn.extend({
            has: function(e) {
              var t = S(e, this),
                n = t.length;
              return this.filter(function() {
                for (var e = 0; e < n; e++)
                  if (S.contains(this, t[e])) return !0;
              });
            },
            closest: function(e, t) {
              var n,
                i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && S(e);
              if (!N.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (s
                        ? s.index(n) > -1
                        : 1 === n.nodeType && S.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o);
            },
            index: function(e) {
              return e
                ? "string" == typeof e
                  ? h.call(S(e), this[0])
                  : h.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function(e, t) {
              return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
            },
            addBack: function(e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            S.each(
              {
                parent: function(e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                  return E(e, "parentNode");
                },
                parentsUntil: function(e, t, n) {
                  return E(e, "parentNode", n);
                },
                next: function(e) {
                  return P(e, "nextSibling");
                },
                prev: function(e) {
                  return P(e, "previousSibling");
                },
                nextAll: function(e) {
                  return E(e, "nextSibling");
                },
                prevAll: function(e) {
                  return E(e, "previousSibling");
                },
                nextUntil: function(e, t, n) {
                  return E(e, "nextSibling", n);
                },
                prevUntil: function(e, t, n) {
                  return E(e, "previousSibling", n);
                },
                siblings: function(e) {
                  return D((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                  return D(e.firstChild);
                },
                contents: function(e) {
                  return O(e, "iframe")
                    ? e.contentDocument
                    : (O(e, "template") && (e = e.content || e),
                      S.merge([], e.childNodes));
                },
              },
              function(e, t) {
                S.fn[e] = function(n, i) {
                  var r = S.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = S.filter(i, r)),
                    this.length > 1 &&
                      ($[e] || S.uniqueSort(r), R.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              }
            );
          var F = /[^\x20\t\r\n\f]+/g;
          function M(e) {
            return e;
          }
          function I(e) {
            throw e;
          }
          function B(e, t, n, i) {
            var r;
            try {
              e && b((r = e.promise))
                ? r
                    .call(e)
                    .done(t)
                    .fail(n)
                : e && b((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (S.Callbacks = function(e) {
            e =
              "string" == typeof e
                ? (function(e) {
                    var t = {};
                    return (
                      S.each(e.match(F) || [], function(e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : S.extend({}, e);
            var t,
              n,
              i,
              r,
              o = [],
              s = [],
              a = -1,
              l = function() {
                for (r = r || e.once, i = t = !0; s.length; a = -1)
                  for (n = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
              },
              u = {
                add: function() {
                  return (
                    o &&
                      (n && !t && ((a = o.length - 1), s.push(n)),
                      (function t(n) {
                        S.each(n, function(n, i) {
                          b(i)
                            ? (e.unique && u.has(i)) || o.push(i)
                            : i && i.length && "string" !== T(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function() {
                  return (
                    S.each(arguments, function(e, t) {
                      for (var n; (n = S.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function(e) {
                  return e ? S.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function() {
                  return o && (o = []), this;
                },
                disable: function() {
                  return (r = s = []), (o = n = ""), this;
                },
                disabled: function() {
                  return !o;
                },
                lock: function() {
                  return (r = s = []), n || t || (o = n = ""), this;
                },
                locked: function() {
                  return !!r;
                },
                fireWith: function(e, n) {
                  return (
                    r ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      s.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function() {
                  return u.fireWith(this, arguments), this;
                },
                fired: function() {
                  return !!i;
                },
              };
            return u;
          }),
            S.extend({
              Deferred: function(e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      S.Callbacks("memory"),
                      S.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  o = {
                    state: function() {
                      return n;
                    },
                    always: function() {
                      return s.done(arguments).fail(arguments), this;
                    },
                    catch: function(e) {
                      return o.then(null, e);
                    },
                    pipe: function() {
                      var e = arguments;
                      return S.Deferred(function(n) {
                        S.each(t, function(t, i) {
                          var r = b(e[i[4]]) && e[i[4]];
                          s[i[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && b(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, r ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function(e, n, o) {
                      var s = 0;
                      function a(e, t, n, o) {
                        return function() {
                          var l = this,
                            u = arguments,
                            c = function() {
                              var r, c;
                              if (!(e < s)) {
                                if ((r = n.apply(l, u)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  r &&
                                  ("object" === i(r) ||
                                    "function" == typeof r) &&
                                  r.then),
                                  b(c)
                                    ? o
                                      ? c.call(r, a(s, t, M, o), a(s, t, I, o))
                                      : (s++,
                                        c.call(
                                          r,
                                          a(s, t, M, o),
                                          a(s, t, I, o),
                                          a(s, t, M, t.notifyWith)
                                        ))
                                    : (n !== M && ((l = void 0), (u = [r])),
                                      (o || t.resolveWith)(l, u));
                              }
                            },
                            d = o
                              ? c
                              : function() {
                                  try {
                                    c();
                                  } catch (i) {
                                    S.Deferred.exceptionHook &&
                                      S.Deferred.exceptionHook(i, d.stackTrace),
                                      e + 1 >= s &&
                                        (n !== I && ((l = void 0), (u = [i])),
                                        t.rejectWith(l, u));
                                  }
                                };
                          e
                            ? d()
                            : (S.Deferred.getStackHook &&
                                (d.stackTrace = S.Deferred.getStackHook()),
                              r.setTimeout(d));
                        };
                      }
                      return S.Deferred(function(i) {
                        t[0][3].add(a(0, i, b(o) ? o : M, i.notifyWith)),
                          t[1][3].add(a(0, i, b(e) ? e : M)),
                          t[2][3].add(a(0, i, b(n) ? n : I));
                      }).promise();
                    },
                    promise: function(e) {
                      return null != e ? S.extend(e, o) : o;
                    },
                  },
                  s = {};
                return (
                  S.each(t, function(e, i) {
                    var r = i[2],
                      a = i[5];
                    (o[i[1]] = r.add),
                      a &&
                        r.add(
                          function() {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      r.add(i[3].fire),
                      (s[i[0]] = function() {
                        return (
                          s[i[0] + "With"](
                            this === s ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (s[i[0] + "With"] = r.fireWith);
                  }),
                  o.promise(s),
                  e && e.call(s, s),
                  s
                );
              },
              when: function(e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  r = u.call(arguments),
                  o = S.Deferred(),
                  s = function(e) {
                    return function(n) {
                      (i[e] = this),
                        (r[e] = arguments.length > 1 ? u.call(arguments) : n),
                        --t || o.resolveWith(i, r);
                    };
                  };
                if (
                  t <= 1 &&
                  (B(e, o.done(s(n)).resolve, o.reject, !t),
                  "pending" === o.state() || b(r[n] && r[n].then))
                )
                  return o.then();
                for (; n--; ) B(r[n], s(n), o.reject);
                return o.promise();
              },
            });
          var V = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (S.Deferred.exceptionHook = function(e, t) {
            r.console &&
              r.console.warn &&
              e &&
              V.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (S.readyException = function(e) {
              r.setTimeout(function() {
                throw e;
              });
            });
          var z = S.Deferred();
          function W() {
            a.removeEventListener("DOMContentLoaded", W),
              r.removeEventListener("load", W),
              S.ready();
          }
          (S.fn.ready = function(e) {
            return (
              z.then(e).catch(function(e) {
                S.readyException(e);
              }),
              this
            );
          }),
            S.extend({
              isReady: !1,
              readyWait: 1,
              ready: function(e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                  ((S.isReady = !0),
                  (!0 !== e && --S.readyWait > 0) || z.resolveWith(a, [S]));
              },
            }),
            (S.ready.then = z.then),
            "complete" === a.readyState ||
            ("loading" !== a.readyState && !a.documentElement.doScroll)
              ? r.setTimeout(S.ready)
              : (a.addEventListener("DOMContentLoaded", W),
                r.addEventListener("load", W));
          var U = function e(t, n, i, r, o, s, a) {
              var l = 0,
                u = t.length,
                c = null == i;
              if ("object" === T(i))
                for (l in ((o = !0), i)) e(t, n, l, i[l], !0, s, a);
              else if (
                void 0 !== r &&
                ((o = !0),
                b(r) || (a = !0),
                c &&
                  (a
                    ? (n.call(t, r), (n = null))
                    : ((c = n),
                      (n = function(e, t, n) {
                        return c.call(S(e), n);
                      }))),
                n)
              )
                for (; l < u; l++)
                  n(t[l], i, a ? r : r.call(t[l], l, n(t[l], i)));
              return o ? t : c ? n.call(t) : u ? n(t[0], i) : s;
            },
            X = /^-ms-/,
            K = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function G(e) {
            return e.replace(X, "ms-").replace(K, Y);
          }
          var Q = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function J() {
            this.expando = S.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache: function(e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function(e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[G(t)] = n;
                else for (i in t) r[G(i)] = t[i];
                return r;
              },
              get: function(e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][G(t)];
              },
              access: function(e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function(e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(G)
                      : (t = G(t)) in i
                      ? [t]
                      : t.match(F) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || S.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
              },
            });
          var Z = new J(),
            ee = new J(),
            te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ne = /[A-Z]/g;
          function ie(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(ne, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function(e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : te.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (r) {}
                ee.set(e, t, n);
              } else n = void 0;
            return n;
          }
          S.extend({
            hasData: function(e) {
              return ee.hasData(e) || Z.hasData(e);
            },
            data: function(e, t, n) {
              return ee.access(e, t, n);
            },
            removeData: function(e, t) {
              ee.remove(e, t);
            },
            _data: function(e, t, n) {
              return Z.access(e, t, n);
            },
            _removeData: function(e, t) {
              Z.remove(e, t);
            },
          }),
            S.fn.extend({
              data: function(e, t) {
                var n,
                  r,
                  o,
                  s = this[0],
                  a = s && s.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((o = ee.get(s)),
                    1 === s.nodeType && !Z.get(s, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = G(r.slice(5))), ie(s, r, o[r]));
                    Z.set(s, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return "object" === i(e)
                  ? this.each(function() {
                      ee.set(this, e);
                    })
                  : U(
                      this,
                      function(t) {
                        var n;
                        if (s && void 0 === t)
                          return void 0 !== (n = ee.get(s, e))
                            ? n
                            : void 0 !== (n = ie(s, e))
                            ? n
                            : void 0;
                        this.each(function() {
                          ee.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function(e) {
                return this.each(function() {
                  ee.remove(this, e);
                });
              },
            }),
            S.extend({
              queue: function(e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = Z.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = Z.access(e, t, S.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function(e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  o = S._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(
                      e,
                      function() {
                        S.dequeue(e, t);
                      },
                      o
                    )),
                  !i && o && o.empty.fire();
              },
              _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return (
                  Z.get(e, n) ||
                  Z.access(e, n, {
                    empty: S.Callbacks("once memory").add(function() {
                      Z.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            S.fn.extend({
              queue: function(e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? S.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function() {
                        var n = S.queue(this, e, t);
                        S._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            S.dequeue(this, e);
                      })
                );
              },
              dequeue: function(e) {
                return this.each(function() {
                  S.dequeue(this, e);
                });
              },
              clearQueue: function(e) {
                return this.queue(e || "fx", []);
              },
              promise: function(e, t) {
                var n,
                  i = 1,
                  r = S.Deferred(),
                  o = this,
                  s = this.length,
                  a = function() {
                    --i || r.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  s--;

                )
                  (n = Z.get(o[s], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(a));
                return a(), r.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            se = ["Top", "Right", "Bottom", "Left"],
            ae = function(e, t) {
              return (
                "none" === (e = t || e).style.display ||
                ("" === e.style.display &&
                  S.contains(e.ownerDocument, e) &&
                  "none" === S.css(e, "display"))
              );
            },
            le = function(e, t, n, i) {
              var r,
                o,
                s = {};
              for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
              for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
              return r;
            };
          function ue(e, t, n, i) {
            var r,
              o,
              s = 20,
              a = i
                ? function() {
                    return i.cur();
                  }
                : function() {
                    return S.css(e, t, "");
                  },
              l = a(),
              u = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
              c =
                (S.cssNumber[t] || ("px" !== u && +l)) && oe.exec(S.css(e, t));
            if (c && c[3] !== u) {
              for (l /= 2, u = u || c[3], c = +l || 1; s--; )
                S.style(e, t, c + u),
                  (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                  (c /= o);
              (c *= 2), S.style(e, t, c + u), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +l || 0),
                (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = u), (i.start = c), (i.end = r))),
              r
            );
          }
          var ce = {};
          function de(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = ce[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = S.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (ce[i] = r),
              r)
            );
          }
          function he(e, t) {
            for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
              (i = e[o]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((r[o] = Z.get(i, "display") || null),
                      r[o] || (i.style.display = "")),
                    "" === i.style.display && ae(i) && (r[o] = de(i)))
                  : "none" !== n && ((r[o] = "none"), Z.set(i, "display", n)));
            for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
            return e;
          }
          S.fn.extend({
            show: function() {
              return he(this, !0);
            },
            hide: function() {
              return he(this);
            },
            toggle: function(e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function() {
                    ae(this) ? S(this).show() : S(this).hide();
                  });
            },
          });
          var pe = /^(?:checkbox|radio)$/i,
            fe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            ge = /^$|^module$|\/(?:java|ecma)script/i,
            ve = {
              option: [1, "<select multiple='multiple'>", "</select>"],
              thead: [1, "<table>", "</table>"],
              col: [2, "<table><colgroup>", "</colgroup></table>"],
              tr: [2, "<table><tbody>", "</tbody></table>"],
              td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
              _default: [0, "", ""],
            };
          function me(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && O(e, t)) ? S.merge([e], n) : n
            );
          }
          function ye(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
          }
          (ve.optgroup = ve.option),
            (ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead),
            (ve.th = ve.td);
          var be,
            _e,
            xe = /<|&#?\w+;/;
          function we(e, t, n, i, r) {
            for (
              var o,
                s,
                a,
                l,
                u,
                c,
                d = t.createDocumentFragment(),
                h = [],
                p = 0,
                f = e.length;
              p < f;
              p++
            )
              if ((o = e[p]) || 0 === o)
                if ("object" === T(o)) S.merge(h, o.nodeType ? [o] : o);
                else if (xe.test(o)) {
                  for (
                    s = s || d.appendChild(t.createElement("div")),
                      a = (fe.exec(o) || ["", ""])[1].toLowerCase(),
                      l = ve[a] || ve._default,
                      s.innerHTML = l[1] + S.htmlPrefilter(o) + l[2],
                      c = l[0];
                    c--;

                  )
                    s = s.lastChild;
                  S.merge(h, s.childNodes),
                    ((s = d.firstChild).textContent = "");
                } else h.push(t.createTextNode(o));
            for (d.textContent = "", p = 0; (o = h[p++]); )
              if (i && S.inArray(o, i) > -1) r && r.push(o);
              else if (
                ((u = S.contains(o.ownerDocument, o)),
                (s = me(d.appendChild(o), "script")),
                u && ye(s),
                n)
              )
                for (c = 0; (o = s[c++]); ) ge.test(o.type || "") && n.push(o);
            return d;
          }
          (be = a.createDocumentFragment().appendChild(a.createElement("div"))),
            (_e = a.createElement("input")).setAttribute("type", "radio"),
            _e.setAttribute("checked", "checked"),
            _e.setAttribute("name", "t"),
            be.appendChild(_e),
            (y.checkClone = be.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (be.innerHTML = "<textarea>x</textarea>"),
            (y.noCloneChecked = !!be.cloneNode(!0).lastChild.defaultValue);
          var Te = a.documentElement,
            Se = /^key/,
            Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ke = /^([^.]*)(?:\.(.+)|)/;
          function Ae() {
            return !0;
          }
          function Ee() {
            return !1;
          }
          function De() {
            try {
              return a.activeElement;
            } catch (e) {}
          }
          function Ne(e, t, n, r, o, s) {
            var a, l;
            if ("object" === i(t)) {
              for (l in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                Ne(e, l, n, r, t[l], s);
              return e;
            }
            if (
              (null == r && null == o
                ? ((o = n), (r = n = void 0))
                : null == o &&
                  ("string" == typeof n
                    ? ((o = r), (r = void 0))
                    : ((o = r), (r = n), (n = void 0))),
              !1 === o)
            )
              o = Ee;
            else if (!o) return e;
            return (
              1 === s &&
                ((a = o),
                ((o = function(e) {
                  return S().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = S.guid++))),
              e.each(function() {
                S.event.add(this, t, o, r, n);
              })
            );
          }
          (S.event = {
            global: {},
            add: function(e, t, n, i, r) {
              var o,
                s,
                a,
                l,
                u,
                c,
                d,
                h,
                p,
                f,
                g,
                v = Z.get(e);
              if (v)
                for (
                  n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && S.find.matchesSelector(Te, r),
                    n.guid || (n.guid = S.guid++),
                    (l = v.events) || (l = v.events = {}),
                    (s = v.handle) ||
                      (s = v.handle = function(t) {
                        return void 0 !== S && S.event.triggered !== t.type
                          ? S.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                    u = (t = (t || "").match(F) || [""]).length;
                  u--;

                )
                  (p = g = (a = ke.exec(t[u]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    p &&
                      ((d = S.event.special[p] || {}),
                      (p = (r ? d.delegateType : d.bindType) || p),
                      (d = S.event.special[p] || {}),
                      (c = S.extend(
                        {
                          type: p,
                          origType: g,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && S.expr.match.needsContext.test(r),
                          namespace: f.join("."),
                        },
                        o
                      )),
                      (h = l[p]) ||
                        (((h = l[p] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, i, f, s)) ||
                          (e.addEventListener && e.addEventListener(p, s))),
                      d.add &&
                        (d.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                      (S.event.global[p] = !0));
            },
            remove: function(e, t, n, i, r) {
              var o,
                s,
                a,
                l,
                u,
                c,
                d,
                h,
                p,
                f,
                g,
                v = Z.hasData(e) && Z.get(e);
              if (v && (l = v.events)) {
                for (u = (t = (t || "").match(F) || [""]).length; u--; )
                  if (
                    ((p = g = (a = ke.exec(t[u]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    p)
                  ) {
                    for (
                      d = S.event.special[p] || {},
                        h =
                          l[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        s = o = h.length;
                      o--;

                    )
                      (c = h[o]),
                        (!r && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (a && !a.test(c.namespace)) ||
                          (i &&
                            i !== c.selector &&
                            ("**" !== i || !c.selector)) ||
                          (h.splice(o, 1),
                          c.selector && h.delegateCount--,
                          d.remove && d.remove.call(e, c));
                    s &&
                      !h.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, f, v.handle)) ||
                        S.removeEvent(e, p, v.handle),
                      delete l[p]);
                  } else for (p in l) S.event.remove(e, p + t[u], n, i, !0);
                S.isEmptyObject(l) && Z.remove(e, "handle events");
              }
            },
            dispatch: function(e) {
              var t,
                n,
                i,
                r,
                o,
                s,
                a = S.event.fix(e),
                l = new Array(arguments.length),
                u = (Z.get(this, "events") || {})[a.type] || [],
                c = S.event.special[a.type] || {};
              for (l[0] = a, t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
              if (
                ((a.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, a))
              ) {
                for (
                  s = S.event.handlers.call(this, a, u), t = 0;
                  (r = s[t++]) && !a.isPropagationStopped();

                )
                  for (
                    a.currentTarget = r.elem, n = 0;
                    (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();

                  )
                    (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                      ((a.handleObj = o),
                      (a.data = o.data),
                      void 0 !==
                        (i = (
                          (S.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(r.elem, l)) &&
                        !1 === (a.result = i) &&
                        (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result;
              }
            },
            handlers: function(e, t) {
              var n,
                i,
                r,
                o,
                s,
                a = [],
                l = t.delegateCount,
                u = e.target;
              if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                  if (
                    1 === u.nodeType &&
                    ("click" !== e.type || !0 !== u.disabled)
                  ) {
                    for (o = [], s = {}, n = 0; n < l; n++)
                      void 0 === s[(r = (i = t[n]).selector + " ")] &&
                        (s[r] = i.needsContext
                          ? S(r, this).index(u) > -1
                          : S.find(r, this, null, [u]).length),
                        s[r] && o.push(i);
                    o.length && a.push({ elem: u, handlers: o });
                  }
              return (
                (u = this),
                l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function(e, t) {
              Object.defineProperty(S.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: b(t)
                  ? function() {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function() {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function(t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function(e) {
              return e[S.expando] ? e : new S.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              focus: {
                trigger: function() {
                  if (this !== De() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
              },
              blur: {
                trigger: function() {
                  if (this === De() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
              },
              click: {
                trigger: function() {
                  if (
                    "checkbox" === this.type &&
                    this.click &&
                    O(this, "input")
                  )
                    return this.click(), !1;
                },
                _default: function(e) {
                  return O(e.target, "a");
                },
              },
              beforeunload: {
                postDispatch: function(e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (S.removeEvent = function(e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (S.Event = function(e, t) {
              if (!(this instanceof S.Event)) return new S.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ae
                      : Ee),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
            }),
            (S.Event.prototype = {
              constructor: S.Event,
              isDefaultPrevented: Ee,
              isPropagationStopped: Ee,
              isImmediatePropagationStopped: Ee,
              isSimulated: !1,
              preventDefault: function() {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ae),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function() {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ae),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function() {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ae),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            S.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                  var t = e.button;
                  return null == e.which && Se.test(e.type)
                    ? null != e.charCode
                      ? e.charCode
                      : e.keyCode
                    : !e.which && void 0 !== t && Ce.test(e.type)
                    ? 1 & t
                      ? 1
                      : 2 & t
                      ? 3
                      : 4 & t
                      ? 2
                      : 0
                    : e.which;
                },
              },
              S.event.addProp
            ),
            S.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function(e, t) {
                S.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function(e) {
                    var n,
                      i = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (i && (i === this || S.contains(this, i))) ||
                        ((e.type = r.origType),
                        (n = r.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            S.fn.extend({
              on: function(e, t, n, i) {
                return Ne(this, e, t, n, i);
              },
              one: function(e, t, n, i) {
                return Ne(this, e, t, n, i, 1);
              },
              off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    S(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" === i(e)) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Ee),
                  this.each(function() {
                    S.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            je = /<script|<style|<link/i,
            qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Le(e, t) {
            return (
              (O(e, "table") &&
                O(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                S(e).children("tbody")[0]) ||
              e
            );
          }
          function Re(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function $e(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Pe(e, t) {
            var n, i, r, o, s, a, l, u;
            if (1 === t.nodeType) {
              if (
                Z.hasData(e) &&
                ((o = Z.access(e)), (s = Z.set(t, o)), (u = o.events))
              )
                for (r in (delete s.handle, (s.events = {}), u))
                  for (n = 0, i = u[r].length; n < i; n++)
                    S.event.add(t, r, u[r][n]);
              ee.hasData(e) &&
                ((a = ee.access(e)), (l = S.extend({}, a)), ee.set(t, l));
            }
          }
          function Fe(e, t, n, i) {
            t = c.apply([], t);
            var r,
              o,
              s,
              a,
              l,
              u,
              d = 0,
              h = e.length,
              p = h - 1,
              f = t[0],
              g = b(f);
            if (
              g ||
              (h > 1 && "string" == typeof f && !y.checkClone && qe.test(f))
            )
              return e.each(function(r) {
                var o = e.eq(r);
                g && (t[0] = f.call(this, r, o.html())), Fe(o, t, n, i);
              });
            if (
              h &&
              ((o = (r = we(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === r.childNodes.length && (r = o),
              o || i)
            ) {
              for (a = (s = S.map(me(r, "script"), Re)).length; d < h; d++)
                (l = r),
                  d !== p &&
                    ((l = S.clone(l, !0, !0)),
                    a && S.merge(s, me(l, "script"))),
                  n.call(e[d], l, d);
              if (a)
                for (
                  u = s[s.length - 1].ownerDocument, S.map(s, $e), d = 0;
                  d < a;
                  d++
                )
                  (l = s[d]),
                    ge.test(l.type || "") &&
                      !Z.access(l, "globalEval") &&
                      S.contains(u, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? S._evalUrl && S._evalUrl(l.src)
                        : w(l.textContent.replace(He, ""), u, l));
            }
            return e;
          }
          function Me(e, t, n) {
            for (
              var i, r = t ? S.filter(t, e) : e, o = 0;
              null != (i = r[o]);
              o++
            )
              n || 1 !== i.nodeType || S.cleanData(me(i)),
                i.parentNode &&
                  (n && S.contains(i.ownerDocument, i) && ye(me(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          S.extend({
            htmlPrefilter: function(e) {
              return e.replace(Oe, "<$1></$2>");
            },
            clone: function(e, t, n) {
              var i,
                r,
                o,
                s,
                a,
                l,
                u,
                c = e.cloneNode(!0),
                d = S.contains(e.ownerDocument, e);
              if (
                !(
                  y.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  S.isXMLDoc(e)
                )
              )
                for (s = me(c), i = 0, r = (o = me(e)).length; i < r; i++)
                  (a = o[i]),
                    (l = s[i]),
                    (u = void 0),
                    "input" === (u = l.nodeName.toLowerCase()) &&
                    pe.test(a.type)
                      ? (l.checked = a.checked)
                      : ("input" !== u && "textarea" !== u) ||
                        (l.defaultValue = a.defaultValue);
              if (t)
                if (n)
                  for (
                    o = o || me(e), s = s || me(c), i = 0, r = o.length;
                    i < r;
                    i++
                  )
                    Pe(o[i], s[i]);
                else Pe(e, c);
              return (
                (s = me(c, "script")).length > 0 &&
                  ye(s, !d && me(e, "script")),
                c
              );
            },
            cleanData: function(e) {
              for (
                var t, n, i, r = S.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (Q(n)) {
                  if ((t = n[Z.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i]
                          ? S.event.remove(n, i)
                          : S.removeEvent(n, i, t.handle);
                    n[Z.expando] = void 0;
                  }
                  n[ee.expando] && (n[ee.expando] = void 0);
                }
            },
          }),
            S.fn.extend({
              detach: function(e) {
                return Me(this, e, !0);
              },
              remove: function(e) {
                return Me(this, e);
              },
              text: function(e) {
                return U(
                  this,
                  function(e) {
                    return void 0 === e
                      ? S.text(this)
                      : this.empty().each(function() {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function() {
                return Fe(this, arguments, function(e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Le(this, e).appendChild(e);
                });
              },
              prepend: function() {
                return Fe(this, arguments, function(e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function() {
                return Fe(this, arguments, function(e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function() {
                return Fe(this, arguments, function(e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (S.cleanData(me(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function(e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function() {
                    return S.clone(this, e, t);
                  })
                );
              },
              html: function(e) {
                return U(
                  this,
                  function(e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !je.test(e) &&
                      !ve[(fe.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = S.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (S.cleanData(me(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (r) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function() {
                var e = [];
                return Fe(
                  this,
                  arguments,
                  function(t) {
                    var n = this.parentNode;
                    S.inArray(this, e) < 0 &&
                      (S.cleanData(me(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            S.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function(e, t) {
                S.fn[e] = function(e) {
                  for (
                    var n, i = [], r = S(e), o = r.length - 1, s = 0;
                    s <= o;
                    s++
                  )
                    (n = s === o ? this : this.clone(!0)),
                      S(r[s])[t](n),
                      d.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var Ie = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            Be = function(e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            Ve = new RegExp(se.join("|"), "i");
          function ze(e, t, n) {
            var i,
              r,
              o,
              s,
              a = e.style;
            return (
              (n = n || Be(e)) &&
                ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                  S.contains(e.ownerDocument, e) ||
                  (s = S.style(e, t)),
                !y.pixelBoxStyles() &&
                  Ie.test(s) &&
                  Ve.test(t) &&
                  ((i = a.width),
                  (r = a.minWidth),
                  (o = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = s),
                  (s = n.width),
                  (a.width = i),
                  (a.minWidth = r),
                  (a.maxWidth = o))),
              void 0 !== s ? s + "" : s
            );
          }
          function We(e, t) {
            return {
              get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function() {
            function e() {
              if (c) {
                (u.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  Te.appendChild(u).appendChild(c);
                var e = r.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (s = 36 === t(e.right)),
                  (i = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (o = 36 === c.offsetWidth || "absolute"),
                  Te.removeChild(u),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              i,
              o,
              s,
              l,
              u = a.createElement("div"),
              c = a.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (y.clearCloneStyle = "content-box" === c.style.backgroundClip),
              S.extend(y, {
                boxSizingReliable: function() {
                  return e(), i;
                },
                pixelBoxStyles: function() {
                  return e(), s;
                },
                pixelPosition: function() {
                  return e(), n;
                },
                reliableMarginLeft: function() {
                  return e(), l;
                },
                scrollboxSize: function() {
                  return e(), o;
                },
              }));
          })();
          var Ue = /^(none|table(?!-c[ea]).+)/,
            Xe = /^--/,
            Ke = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ye = { letterSpacing: "0", fontWeight: "400" },
            Ge = ["Webkit", "Moz", "ms"],
            Qe = a.createElement("div").style;
          function Je(e) {
            var t = S.cssProps[e];
            return (
              t ||
                (t = S.cssProps[e] =
                  (function(e) {
                    if (e in Qe) return e;
                    for (
                      var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                      n--;

                    )
                      if ((e = Ge[n] + t) in Qe) return e;
                  })(e) || e),
              t
            );
          }
          function Ze(e, t, n) {
            var i = oe.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function et(e, t, n, i, r, o) {
            var s = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2)
              "margin" === n && (l += S.css(e, n + se[s], !0, r)),
                i
                  ? ("content" === n &&
                      (l -= S.css(e, "padding" + se[s], !0, r)),
                    "margin" !== n &&
                      (l -= S.css(e, "border" + se[s] + "Width", !0, r)))
                  : ((l += S.css(e, "padding" + se[s], !0, r)),
                    "padding" !== n
                      ? (l += S.css(e, "border" + se[s] + "Width", !0, r))
                      : (a += S.css(e, "border" + se[s] + "Width", !0, r)));
            return (
              !i &&
                o >= 0 &&
                (l += Math.max(
                  0,
                  Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      o -
                      l -
                      a -
                      0.5
                  )
                )),
              l
            );
          }
          function tt(e, t, n) {
            var i = Be(e),
              r = ze(e, t, i),
              o = "border-box" === S.css(e, "boxSizing", !1, i),
              s = o;
            if (Ie.test(r)) {
              if (!n) return r;
              r = "auto";
            }
            return (
              (s = s && (y.boxSizingReliable() || r === e.style[t])),
              ("auto" === r ||
                (!parseFloat(r) && "inline" === S.css(e, "display", !1, i))) &&
                ((r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
              (r = parseFloat(r) || 0) +
                et(e, t, n || (o ? "border" : "content"), s, i, r) +
                "px"
            );
          }
          function nt(e, t, n, i, r) {
            return new nt.prototype.init(e, t, n, i, r);
          }
          S.extend({
            cssHooks: {
              opacity: {
                get: function(e, t) {
                  if (t) {
                    var n = ze(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function(e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  s,
                  a,
                  l = G(t),
                  u = Xe.test(t),
                  c = e.style;
                if (
                  (u || (t = Je(l)),
                  (a = S.cssHooks[t] || S.cssHooks[l]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (o = a.get(e, !1, r))
                    ? o
                    : c[t];
                "string" === (s = i(n)) &&
                  (o = oe.exec(n)) &&
                  o[1] &&
                  ((n = ue(e, t, o)), (s = "number")),
                  null != n &&
                    n == n &&
                    ("number" === s &&
                      (n += (o && o[3]) || (S.cssNumber[l] ? "" : "px")),
                    y.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function(e, t, n, i) {
              var r,
                o,
                s,
                a = G(t);
              return (
                Xe.test(t) || (t = Je(a)),
                (s = S.cssHooks[t] || S.cssHooks[a]) &&
                  "get" in s &&
                  (r = s.get(e, !0, n)),
                void 0 === r && (r = ze(e, t, i)),
                "normal" === r && t in Ye && (r = Ye[t]),
                "" === n || n
                  ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
                  : r
              );
            },
          }),
            S.each(["height", "width"], function(e, t) {
              S.cssHooks[t] = {
                get: function(e, n, i) {
                  if (n)
                    return !Ue.test(S.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? tt(e, t, i)
                      : le(e, Ke, function() {
                          return tt(e, t, i);
                        });
                },
                set: function(e, n, i) {
                  var r,
                    o = Be(e),
                    s = "border-box" === S.css(e, "boxSizing", !1, o),
                    a = i && et(e, t, i, s, o);
                  return (
                    s &&
                      y.scrollboxSize() === o.position &&
                      (a -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          et(e, t, "border", !1, o) -
                          0.5
                      )),
                    a &&
                      (r = oe.exec(n)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[t] = n), (n = S.css(e, t))),
                    Ze(0, n, a)
                  );
                },
              };
            }),
            (S.cssHooks.marginLeft = We(y.reliableMarginLeft, function(e, t) {
              if (t)
                return (
                  (parseFloat(ze(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      le(e, { marginLeft: 0 }, function() {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            S.each({ margin: "", padding: "", border: "Width" }, function(
              e,
              t
            ) {
              (S.cssHooks[e + t] = {
                expand: function(n) {
                  for (
                    var i = 0,
                      r = {},
                      o = "string" == typeof n ? n.split(" ") : [n];
                    i < 4;
                    i++
                  )
                    r[e + se[i] + t] = o[i] || o[i - 2] || o[0];
                  return r;
                },
              }),
                "margin" !== e && (S.cssHooks[e + t].set = Ze);
            }),
            S.fn.extend({
              css: function(e, t) {
                return U(
                  this,
                  function(e, t, n) {
                    var i,
                      r,
                      o = {},
                      s = 0;
                    if (Array.isArray(t)) {
                      for (i = Be(e), r = t.length; s < r; s++)
                        o[t[s]] = S.css(e, t[s], !1, i);
                      return o;
                    }
                    return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (S.Tween = nt),
            (nt.prototype = {
              constructor: nt,
              init: function(e, t, n, i, r, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || S.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = o || (S.cssNumber[n] ? "" : "px"));
              },
              cur: function() {
                var e = nt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : nt.propHooks._default.get(this);
              },
              run: function(e) {
                var t,
                  n = nt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t = S.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (nt.prototype.init.prototype = nt.prototype),
            (nt.propHooks = {
              _default: {
                get: function(e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function(e) {
                  S.fx.step[e.prop]
                    ? S.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (null == e.elem.style[S.cssProps[e.prop]] &&
                        !S.cssHooks[e.prop])
                    ? (e.elem[e.prop] = e.now)
                    : S.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
              set: function(e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
            (S.easing = {
              linear: function(e) {
                return e;
              },
              swing: function(e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (S.fx = nt.prototype.init),
            (S.fx.step = {});
          var it,
            rt,
            ot = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;
          function at() {
            rt &&
              (!1 === a.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(at)
                : r.setTimeout(at, S.fx.interval),
              S.fx.tick());
          }
          function lt() {
            return (
              r.setTimeout(function() {
                it = void 0;
              }),
              (it = Date.now())
            );
          }
          function ut(e, t) {
            var n,
              i = 0,
              r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r["margin" + (n = se[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function ct(e, t, n) {
            for (
              var i,
                r = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
                o = 0,
                s = r.length;
              o < s;
              o++
            )
              if ((i = r[o].call(n, t, e))) return i;
          }
          function dt(e, t, n) {
            var i,
              r,
              o = 0,
              s = dt.prefilters.length,
              a = S.Deferred().always(function() {
                delete l.elem;
              }),
              l = function() {
                if (r) return !1;
                for (
                  var t = it || lt(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    i = 1 - (n / u.duration || 0),
                    o = 0,
                    s = u.tweens.length;
                  o < s;
                  o++
                )
                  u.tweens[o].run(i);
                return (
                  a.notifyWith(e, [u, i, n]),
                  i < 1 && s
                    ? n
                    : (s || a.notifyWith(e, [u, 1, 0]),
                      a.resolveWith(e, [u]),
                      !1)
                );
              },
              u = a.promise({
                elem: e,
                props: S.extend({}, t),
                opts: S.extend(
                  !0,
                  { specialEasing: {}, easing: S.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: it || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                  var i = S.Tween(
                    e,
                    u.opts,
                    t,
                    n,
                    u.opts.specialEasing[t] || u.opts.easing
                  );
                  return u.tweens.push(i), i;
                },
                stop: function(t) {
                  var n = 0,
                    i = t ? u.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) u.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
                      : a.rejectWith(e, [u, t]),
                    this
                  );
                },
              }),
              c = u.props;
            for (
              !(function(e, t) {
                var n, i, r, o, s;
                for (n in e)
                  if (
                    ((r = t[(i = G(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                    n !== i && ((e[i] = o), delete e[n]),
                    (s = S.cssHooks[i]) && ("expand" in s))
                  )
                    for (n in ((o = s.expand(o)), delete e[i], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = r));
                  else t[i] = r;
              })(c, u.opts.specialEasing);
              o < s;
              o++
            )
              if ((i = dt.prefilters[o].call(u, e, c, u.opts)))
                return (
                  b(i.stop) &&
                    (S._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              S.map(c, ct, u),
              b(u.opts.start) && u.opts.start.call(e, u),
              u
                .progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always),
              S.fx.timer(
                S.extend(l, { elem: e, anim: u, queue: u.opts.queue })
              ),
              u
            );
          }
          (S.Animation = S.extend(dt, {
            tweeners: {
              "*": [
                function(e, t) {
                  var n = this.createTween(e, t);
                  return ue(n.elem, e, oe.exec(t), n), n;
                },
              ],
            },
            tweener: function(e, t) {
              b(e) ? ((t = e), (e = ["*"])) : (e = e.match(F));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (dt.tweeners[n] = dt.tweeners[n] || []),
                  dt.tweeners[n].unshift(t);
            },
            prefilters: [
              function(e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  u,
                  c,
                  d = "width" in t || "height" in t,
                  h = this,
                  p = {},
                  f = e.style,
                  g = e.nodeType && ae(e),
                  v = Z.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (s = S._queueHooks(e, "fx")).unqueued &&
                    ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function() {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  h.always(function() {
                    h.always(function() {
                      s.unqueued--, S.queue(e, "fx").length || s.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), ot.test(r))) {
                    if (
                      (delete t[i],
                      (o = o || "toggle" === r),
                      r === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== r || !v || void 0 === v[i]) continue;
                      g = !0;
                    }
                    p[i] = (v && v[i]) || S.style(e, i);
                  }
                if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(p))
                  for (i in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                    null == (u = v && v.display) && (u = Z.get(e, "display")),
                    "none" === (c = S.css(e, "display")) &&
                      (u
                        ? (c = u)
                        : (he([e], !0),
                          (u = e.style.display || u),
                          (c = S.css(e, "display")),
                          he([e]))),
                    ("inline" === c || ("inline-block" === c && null != u)) &&
                      "none" === S.css(e, "float") &&
                      (l ||
                        (h.done(function() {
                          f.display = u;
                        }),
                        null == u &&
                          ((c = f.display), (u = "none" === c ? "" : c))),
                      (f.display = "inline-block"))),
                  n.overflow &&
                    ((f.overflow = "hidden"),
                    h.always(function() {
                      (f.overflow = n.overflow[0]),
                        (f.overflowX = n.overflow[1]),
                        (f.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  p))
                    l ||
                      (v
                        ? "hidden" in v && (g = v.hidden)
                        : (v = Z.access(e, "fxshow", { display: u })),
                      o && (v.hidden = !g),
                      g && he([e], !0),
                      h.done(function() {
                        for (i in (g || he([e]), Z.remove(e, "fxshow"), p))
                          S.style(e, i, p[i]);
                      })),
                      (l = ct(g ? v[i] : 0, i, h)),
                      i in v ||
                        ((v[i] = l.start),
                        g && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function(e, t) {
              t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
            },
          })),
            (S.speed = function(e, t, n) {
              var r =
                e && "object" === i(e)
                  ? S.extend({}, e)
                  : {
                      complete: n || (!n && t) || (b(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !b(t) && t),
                    };
              return (
                S.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in S.fx.speeds
                      ? (r.duration = S.fx.speeds[r.duration])
                      : (r.duration = S.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function() {
                  b(r.old) && r.old.call(this),
                    r.queue && S.dequeue(this, r.queue);
                }),
                r
              );
            }),
            S.fn.extend({
              fadeTo: function(e, t, n, i) {
                return this.filter(ae)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function(e, t, n, i) {
                var r = S.isEmptyObject(e),
                  o = S.speed(t, n, i),
                  s = function() {
                    var t = dt(this, S.extend({}, e), o);
                    (r || Z.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (s.finish = s),
                  r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                );
              },
              stop: function(e, t, n) {
                var i = function(e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && !1 !== e && this.queue(e || "fx", []),
                  this.each(function() {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      o = S.timers,
                      s = Z.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                      for (r in s) s[r] && s[r].stop && st.test(r) && i(s[r]);
                    for (r = o.length; r--; )
                      o[r].elem !== this ||
                        (null != e && o[r].queue !== e) ||
                        (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                    (!t && n) || S.dequeue(this, e);
                  })
                );
              },
              finish: function(e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function() {
                    var t,
                      n = Z.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      o = S.timers,
                      s = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        S.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            S.each(["toggle", "show", "hide"], function(e, t) {
              var n = S.fn[t];
              S.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ut(t, !0), e, i, r);
              };
            }),
            S.each(
              {
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function(e, t) {
                S.fn[e] = function(e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (S.timers = []),
            (S.fx.tick = function() {
              var e,
                t = 0,
                n = S.timers;
              for (it = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || S.fx.stop(), (it = void 0);
            }),
            (S.fx.timer = function(e) {
              S.timers.push(e), S.fx.start();
            }),
            (S.fx.interval = 13),
            (S.fx.start = function() {
              rt || ((rt = !0), at());
            }),
            (S.fx.stop = function() {
              rt = null;
            }),
            (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (S.fn.delay = function(e, t) {
              return (
                (e = (S.fx && S.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function(t, n) {
                  var i = r.setTimeout(t, e);
                  n.stop = function() {
                    r.clearTimeout(i);
                  };
                })
              );
            }),
            (function() {
              var e = a.createElement("input"),
                t = a
                  .createElement("select")
                  .appendChild(a.createElement("option"));
              (e.type = "checkbox"),
                (y.checkOn = "" !== e.value),
                (y.optSelected = t.selected),
                ((e = a.createElement("input")).value = "t"),
                (e.type = "radio"),
                (y.radioValue = "t" === e.value);
            })();
          var ht,
            pt = S.expr.attrHandle;
          S.fn.extend({
            attr: function(e, t) {
              return U(this, S.attr, e, t, arguments.length > 1);
            },
            removeAttr: function(e) {
              return this.each(function() {
                S.removeAttr(this, e);
              });
            },
          }),
            S.extend({
              attr: function(e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? S.prop(e, t, n)
                    : ((1 === o && S.isXMLDoc(e)) ||
                        (r =
                          S.attrHooks[t.toLowerCase()] ||
                          (S.expr.match.bool.test(t) ? ht : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void S.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = S.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function(e, t) {
                    if (!y.radioValue && "radio" === t && O(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function(e, t) {
                var n,
                  i = 0,
                  r = t && t.match(F);
                if (r && 1 === e.nodeType)
                  for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (ht = {
              set: function(e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
              var n = pt[t] || S.find.attr;
              pt[t] = function(e, t, i) {
                var r,
                  o,
                  s = t.toLowerCase();
                return (
                  i ||
                    ((o = pt[s]),
                    (pt[s] = r),
                    (r = null != n(e, t, i) ? s : null),
                    (pt[s] = o)),
                  r
                );
              };
            });
          var ft = /^(?:input|select|textarea|button)$/i,
            gt = /^(?:a|area)$/i;
          function vt(e) {
            return (e.match(F) || []).join(" ");
          }
          function mt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function yt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(F)) || [];
          }
          S.fn.extend({
            prop: function(e, t) {
              return U(this, S.prop, e, t, arguments.length > 1);
            },
            removeProp: function(e) {
              return this.each(function() {
                delete this[S.propFix[e] || e];
              });
            },
          }),
            S.extend({
              prop: function(e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && S.isXMLDoc(e)) ||
                      ((t = S.propFix[t] || t), (r = S.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : ft.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            y.optSelected ||
              (S.propHooks.selected = {
                get: function(e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function(e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            S.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function() {
                S.propFix[this.toLowerCase()] = this;
              }
            ),
            S.fn.extend({
              addClass: function(e) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  l = 0;
                if (b(e))
                  return this.each(function(t) {
                    S(this).addClass(e.call(this, t, mt(this)));
                  });
                if ((t = yt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = mt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (s = 0; (o = t[s++]); )
                        i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function(e) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  l = 0;
                if (b(e))
                  return this.each(function(t) {
                    S(this).removeClass(e.call(this, t, mt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = yt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = mt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (s = 0; (o = t[s++]); )
                        for (; i.indexOf(" " + o + " ") > -1; )
                          i = i.replace(" " + o + " ", " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function(e, t) {
                var n = i(e),
                  r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : b(e)
                  ? this.each(function(n) {
                      S(this).toggleClass(e.call(this, n, mt(this), t), t);
                    })
                  : this.each(function() {
                      var t, i, o, s;
                      if (r)
                        for (i = 0, o = S(this), s = yt(e); (t = s[i++]); )
                          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = mt(this)) && Z.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : Z.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function(e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + vt(mt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var bt = /\r/g;
          S.fn.extend({
            val: function(e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = b(e)),
                  this.each(function(n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, S(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = S.map(r, function(e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        S.valHooks[this.type] ||
                        S.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                ? (t =
                    S.valHooks[r.type] ||
                    S.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                  ? n.replace(bt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            S.extend({
              valHooks: {
                option: {
                  get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e));
                  },
                },
                select: {
                  get: function(e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      o = e.selectedIndex,
                      s = "select-one" === e.type,
                      a = s ? null : [],
                      l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                      if (
                        ((n = r[i]).selected || i === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))
                      ) {
                        if (((t = S(n).val()), s)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function(e, t) {
                    for (
                      var n, i, r = e.options, o = S.makeArray(t), s = r.length;
                      s--;

                    )
                      ((i = r[s]).selected =
                        S.inArray(S.valHooks.option.get(i), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            S.each(["radio", "checkbox"], function() {
              (S.valHooks[this] = {
                set: function(e, t) {
                  if (Array.isArray(t))
                    return (e.checked = S.inArray(S(e).val(), t) > -1);
                },
              }),
                y.checkOn ||
                  (S.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (y.focusin = "onfocusin" in r);
          var _t = /^(?:focusinfocus|focusoutblur)$/,
            xt = function(e) {
              e.stopPropagation();
            };
          S.extend(S.event, {
            trigger: function(e, t, n, o) {
              var s,
                l,
                u,
                c,
                d,
                h,
                p,
                f,
                v = [n || a],
                m = g.call(e, "type") ? e.type : e,
                y = g.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((l = f = u = n = n || a),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !_t.test(m + S.event.triggered) &&
                  (m.indexOf(".") > -1 &&
                    ((y = m.split(".")), (m = y.shift()), y.sort()),
                  (d = m.indexOf(":") < 0 && "on" + m),
                  ((e = e[S.expando]
                    ? e
                    : new S.Event(m, "object" === i(e) && e)).isTrigger = o
                    ? 2
                    : 3),
                  (e.namespace = y.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : S.makeArray(t, [e])),
                  (p = S.event.special[m] || {}),
                  o || !p.trigger || !1 !== p.trigger.apply(n, t)))
              ) {
                if (!o && !p.noBubble && !_(n)) {
                  for (
                    c = p.delegateType || m,
                      _t.test(c + m) || (l = l.parentNode);
                    l;
                    l = l.parentNode
                  )
                    v.push(l), (u = l);
                  u === (n.ownerDocument || a) &&
                    v.push(u.defaultView || u.parentWindow || r);
                }
                for (s = 0; (l = v[s++]) && !e.isPropagationStopped(); )
                  (f = l),
                    (e.type = s > 1 ? c : p.bindType || m),
                    (h =
                      (Z.get(l, "events") || {})[e.type] &&
                      Z.get(l, "handle")) && h.apply(l, t),
                    (h = d && l[d]) &&
                      h.apply &&
                      Q(l) &&
                      ((e.result = h.apply(l, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = m),
                  o ||
                    e.isDefaultPrevented() ||
                    (p._default && !1 !== p._default.apply(v.pop(), t)) ||
                    !Q(n) ||
                    (d &&
                      b(n[m]) &&
                      !_(n) &&
                      ((u = n[d]) && (n[d] = null),
                      (S.event.triggered = m),
                      e.isPropagationStopped() && f.addEventListener(m, xt),
                      n[m](),
                      e.isPropagationStopped() && f.removeEventListener(m, xt),
                      (S.event.triggered = void 0),
                      u && (n[d] = u))),
                  e.result
                );
              }
            },
            simulate: function(e, t, n) {
              var i = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
              S.event.trigger(i, null, t);
            },
          }),
            S.fn.extend({
              trigger: function(e, t) {
                return this.each(function() {
                  S.event.trigger(e, t, this);
                });
              },
              triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
              },
            }),
            y.focusin ||
              S.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
                var n = function(e) {
                  S.event.simulate(t, e.target, S.event.fix(e));
                };
                S.event.special[t] = {
                  setup: function() {
                    var i = this.ownerDocument || this,
                      r = Z.access(i, t);
                    r || i.addEventListener(e, n, !0),
                      Z.access(i, t, (r || 0) + 1);
                  },
                  teardown: function() {
                    var i = this.ownerDocument || this,
                      r = Z.access(i, t) - 1;
                    r
                      ? Z.access(i, t, r)
                      : (i.removeEventListener(e, n, !0), Z.remove(i, t));
                  },
                };
              });
          var wt = r.location,
            Tt = Date.now(),
            St = /\?/;
          S.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (n) {
              t = void 0;
            }
            return (
              (t && !t.getElementsByTagName("parsererror").length) ||
                S.error("Invalid XML: " + e),
              t
            );
          };
          var Ct = /\[\]$/,
            kt = /\r?\n/g,
            At = /^(?:submit|button|image|reset|file)$/i,
            Et = /^(?:input|select|textarea|keygen)/i;
          function Dt(e, t, n, r) {
            var o;
            if (Array.isArray(t))
              S.each(t, function(t, o) {
                n || Ct.test(e)
                  ? r(e, o)
                  : Dt(
                      e + "[" + ("object" === i(o) && null != o ? t : "") + "]",
                      o,
                      n,
                      r
                    );
              });
            else if (n || "object" !== T(t)) r(e, t);
            else for (o in t) Dt(e + "[" + o + "]", t[o], n, r);
          }
          (S.param = function(e, t) {
            var n,
              i = [],
              r = function(e, t) {
                var n = b(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
              S.each(e, function() {
                r(this.name, this.value);
              });
            else for (n in e) Dt(n, e[n], t, r);
            return i.join("&");
          }),
            S.fn.extend({
              serialize: function() {
                return S.param(this.serializeArray());
              },
              serializeArray: function() {
                return this.map(function() {
                  var e = S.prop(this, "elements");
                  return e ? S.makeArray(e) : this;
                })
                  .filter(function() {
                    var e = this.type;
                    return (
                      this.name &&
                      !S(this).is(":disabled") &&
                      Et.test(this.nodeName) &&
                      !At.test(e) &&
                      (this.checked || !pe.test(e))
                    );
                  })
                  .map(function(e, t) {
                    var n = S(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? S.map(n, function(e) {
                          return { name: t.name, value: e.replace(kt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(kt, "\r\n") };
                  })
                  .get();
              },
            });
          var Nt = /%20/g,
            Ot = /#.*$/,
            jt = /([?&])_=[^&]*/,
            qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ht = /^(?:GET|HEAD)$/,
            Lt = /^\/\//,
            Rt = {},
            $t = {},
            Pt = "*/".concat("*"),
            Ft = a.createElement("a");
          function Mt(e) {
            return function(t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                o = t.toLowerCase().match(F) || [];
              if (b(n))
                for (; (i = o[r++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function It(e, t, n, i) {
            var r = {},
              o = e === $t;
            function s(a) {
              var l;
              return (
                (r[a] = !0),
                S.each(e[a] || [], function(e, a) {
                  var u = a(t, n, i);
                  return "string" != typeof u || o || r[u]
                    ? o
                      ? !(l = u)
                      : void 0
                    : (t.dataTypes.unshift(u), s(u), !1);
                }),
                l
              );
            }
            return s(t.dataTypes[0]) || (!r["*"] && s("*"));
          }
          function Bt(e, t) {
            var n,
              i,
              r = S.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && S.extend(!0, e, i), e;
          }
          (Ft.href = wt.href),
            S.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: wt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  wt.protocol
                ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Pt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": S.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function(e, t) {
                return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e);
              },
              ajaxPrefilter: Mt(Rt),
              ajaxTransport: Mt($t),
              ajax: function(e, t) {
                "object" === i(e) && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  o,
                  s,
                  l,
                  u,
                  c,
                  d,
                  h,
                  p,
                  f,
                  g = S.ajaxSetup({}, t),
                  v = g.context || g,
                  m = g.context && (v.nodeType || v.jquery) ? S(v) : S.event,
                  y = S.Deferred(),
                  b = S.Callbacks("once memory"),
                  _ = g.statusCode || {},
                  x = {},
                  w = {},
                  T = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                      var t;
                      if (d) {
                        if (!l)
                          for (l = {}; (t = qt.exec(s)); )
                            l[t[1].toLowerCase()] = t[2];
                        t = l[e.toLowerCase()];
                      }
                      return null == t ? null : t;
                    },
                    getAllResponseHeaders: function() {
                      return d ? s : null;
                    },
                    setRequestHeader: function(e, t) {
                      return (
                        null == d &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (x[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function(e) {
                      return null == d && (g.mimeType = e), this;
                    },
                    statusCode: function(e) {
                      var t;
                      if (e)
                        if (d) C.always(e[C.status]);
                        else for (t in e) _[t] = [_[t], e[t]];
                      return this;
                    },
                    abort: function(e) {
                      var t = e || T;
                      return n && n.abort(t), k(0, t), this;
                    },
                  };
                if (
                  (y.promise(C),
                  (g.url = ((e || g.url || wt.href) + "").replace(
                    Lt,
                    wt.protocol + "//"
                  )),
                  (g.type = t.method || t.type || g.method || g.type),
                  (g.dataTypes = (g.dataType || "*").toLowerCase().match(F) || [
                    "",
                  ]),
                  null == g.crossDomain)
                ) {
                  c = a.createElement("a");
                  try {
                    (c.href = g.url),
                      (c.href = c.href),
                      (g.crossDomain =
                        Ft.protocol + "//" + Ft.host !=
                        c.protocol + "//" + c.host);
                  } catch (A) {
                    g.crossDomain = !0;
                  }
                }
                if (
                  (g.data &&
                    g.processData &&
                    "string" != typeof g.data &&
                    (g.data = S.param(g.data, g.traditional)),
                  It(Rt, g, t, C),
                  d)
                )
                  return C;
                for (p in ((h = S.event && g.global) &&
                  0 == S.active++ &&
                  S.event.trigger("ajaxStart"),
                (g.type = g.type.toUpperCase()),
                (g.hasContent = !Ht.test(g.type)),
                (o = g.url.replace(Ot, "")),
                g.hasContent
                  ? g.data &&
                    g.processData &&
                    0 ===
                      (g.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (g.data = g.data.replace(Nt, "+"))
                  : ((f = g.url.slice(o.length)),
                    g.data &&
                      (g.processData || "string" == typeof g.data) &&
                      ((o += (St.test(o) ? "&" : "?") + g.data), delete g.data),
                    !1 === g.cache &&
                      ((o = o.replace(jt, "$1")),
                      (f = (St.test(o) ? "&" : "?") + "_=" + Tt++ + f)),
                    (g.url = o + f)),
                g.ifModified &&
                  (S.lastModified[o] &&
                    C.setRequestHeader("If-Modified-Since", S.lastModified[o]),
                  S.etag[o] && C.setRequestHeader("If-None-Match", S.etag[o])),
                ((g.data && g.hasContent && !1 !== g.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", g.contentType),
                C.setRequestHeader(
                  "Accept",
                  g.dataTypes[0] && g.accepts[g.dataTypes[0]]
                    ? g.accepts[g.dataTypes[0]] +
                        ("*" !== g.dataTypes[0] ? ", " + Pt + "; q=0.01" : "")
                    : g.accepts["*"]
                ),
                g.headers))
                  C.setRequestHeader(p, g.headers[p]);
                if (g.beforeSend && (!1 === g.beforeSend.call(v, C, g) || d))
                  return C.abort();
                if (
                  ((T = "abort"),
                  b.add(g.complete),
                  C.done(g.success),
                  C.fail(g.error),
                  (n = It($t, g, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), h && m.trigger("ajaxSend", [C, g]), d)
                  )
                    return C;
                  g.async &&
                    g.timeout > 0 &&
                    (u = r.setTimeout(function() {
                      C.abort("timeout");
                    }, g.timeout));
                  try {
                    (d = !1), n.send(x, k);
                  } catch (A) {
                    if (d) throw A;
                    k(-1, A);
                  }
                } else k(-1, "No Transport");
                function k(e, t, i, a) {
                  var l,
                    c,
                    p,
                    f,
                    x,
                    w = t;
                  d ||
                    ((d = !0),
                    u && r.clearTimeout(u),
                    (n = void 0),
                    (s = a || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (l = (e >= 200 && e < 300) || 304 === e),
                    i &&
                      (f = (function(e, t, n) {
                        for (
                          var i, r, o, s, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in a)
                            if (a[r] && a[r].test(i)) {
                              l.unshift(r);
                              break;
                            }
                        if (l[0] in n) o = l[0];
                        else {
                          for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                              o = r;
                              break;
                            }
                            s || (s = r);
                          }
                          o = o || s;
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o];
                      })(g, C, i)),
                    (f = (function(e, t, n, i) {
                      var r,
                        o,
                        s,
                        a,
                        l,
                        u = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (s in e.converters)
                          u[s.toLowerCase()] = e.converters[s];
                      for (o = c.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = o),
                          (o = c.shift()))
                        )
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                            if (!(s = u[l + " " + o] || u["* " + o]))
                              for (r in u)
                                if (
                                  (a = r.split(" "))[1] === o &&
                                  (s = u[l + " " + a[0]] || u["* " + a[0]])
                                ) {
                                  !0 === s
                                    ? (s = u[r])
                                    : !0 !== u[r] &&
                                      ((o = a[0]), c.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (A) {
                                  return {
                                    state: "parsererror",
                                    error: s
                                      ? A
                                      : "No conversion from " + l + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(g, f, C, l)),
                    l
                      ? (g.ifModified &&
                          ((x = C.getResponseHeader("Last-Modified")) &&
                            (S.lastModified[o] = x),
                          (x = C.getResponseHeader("etag")) && (S.etag[o] = x)),
                        204 === e || "HEAD" === g.type
                          ? (w = "nocontent")
                          : 304 === e
                          ? (w = "notmodified")
                          : ((w = f.state), (c = f.data), (l = !(p = f.error))))
                      : ((p = w),
                        (!e && w) || ((w = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || w) + ""),
                    l
                      ? y.resolveWith(v, [c, w, C])
                      : y.rejectWith(v, [C, w, p]),
                    C.statusCode(_),
                    (_ = void 0),
                    h &&
                      m.trigger(l ? "ajaxSuccess" : "ajaxError", [
                        C,
                        g,
                        l ? c : p,
                      ]),
                    b.fireWith(v, [C, w]),
                    h &&
                      (m.trigger("ajaxComplete", [C, g]),
                      --S.active || S.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function(e, t, n) {
                return S.get(e, t, n, "json");
              },
              getScript: function(e, t) {
                return S.get(e, void 0, t, "script");
              },
            }),
            S.each(["get", "post"], function(e, t) {
              S[t] = function(e, n, i, r) {
                return (
                  b(n) && ((r = r || i), (i = n), (n = void 0)),
                  S.ajax(
                    S.extend(
                      { url: e, type: t, dataType: r, data: n, success: i },
                      S.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            (S._evalUrl = function(e) {
              return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0,
              });
            }),
            S.fn.extend({
              wrapAll: function(e) {
                var t;
                return (
                  this[0] &&
                    (b(e) && (e = e.call(this[0])),
                    (t = S(e, this[0].ownerDocument)
                      .eq(0)
                      .clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function() {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function(e) {
                return b(e)
                  ? this.each(function(t) {
                      S(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function() {
                      var t = S(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function(e) {
                var t = b(e);
                return this.each(function(n) {
                  S(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function(e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function() {
                      S(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (S.expr.pseudos.hidden = function(e) {
              return !S.expr.pseudos.visible(e);
            }),
            (S.expr.pseudos.visible = function(e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (S.ajaxSettings.xhr = function() {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var Vt = { 0: 200, 1223: 204 },
            zt = S.ajaxSettings.xhr();
          (y.cors = !!zt && "withCredentials" in zt),
            (y.ajax = zt = !!zt),
            S.ajaxTransport(function(e) {
              var t, n;
              if (y.cors || (zt && !e.crossDomain))
                return {
                  send: function(i, o) {
                    var s,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      a.setRequestHeader(s, i[s]);
                    (t = function(e) {
                      return function() {
                        t &&
                          ((t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? o(0, "error")
                              : o(a.status, a.statusText)
                            : o(
                                Vt[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function() {
                            4 === a.readyState &&
                              r.setTimeout(function() {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (l) {
                      if (t) throw l;
                    }
                  },
                  abort: function() {
                    t && t();
                  },
                };
            }),
            S.ajaxPrefilter(function(e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            S.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function(e) {
                  return S.globalEval(e), e;
                },
              },
            }),
            S.ajaxPrefilter("script", function(e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            S.ajaxTransport("script", function(e) {
              var t, n;
              if (e.crossDomain)
                return {
                  send: function(i, r) {
                    (t = S("<script>")
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function(e) {
                          t.remove(),
                            (n = null),
                            e && r("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      a.head.appendChild(t[0]);
                  },
                  abort: function() {
                    n && n();
                  },
                };
            });
          var Wt,
            Ut = [],
            Xt = /(=)\?(?=&|$)|\?\?/;
          S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
              var e = Ut.pop() || S.expando + "_" + Tt++;
              return (this[e] = !0), e;
            },
          }),
            S.ajaxPrefilter("json jsonp", function(e, t, n) {
              var i,
                o,
                s,
                a =
                  !1 !== e.jsonp &&
                  (Xt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Xt.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback = b(e.jsonpCallback)
                    ? e.jsonpCallback()
                    : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Xt, "$1" + i))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function() {
                    return s || S.error(i + " was not called"), s[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = r[i]),
                  (r[i] = function() {
                    s = arguments;
                  }),
                  n.always(function() {
                    void 0 === o ? S(r).removeProp(i) : (r[i] = o),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), Ut.push(i)),
                      s && b(o) && o(s[0]),
                      (s = o = void 0);
                  }),
                  "script"
                );
            }),
            (y.createHTMLDocument = (((Wt = a.implementation.createHTMLDocument(
              ""
            ).body).innerHTML = "<form></form><form></form>"),
            2 === Wt.childNodes.length)),
            (S.parseHTML = function(e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (y.createHTMLDocument
                      ? (((i = (t = a.implementation.createHTMLDocument(
                          ""
                        )).createElement("base")).href = a.location.href),
                        t.head.appendChild(i))
                      : (t = a)),
                  (o = !n && []),
                  (r = j.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = we([e], t, o)),
                      o && o.length && S(o).remove(),
                      S.merge([], r.childNodes)));
              var i, r, o;
            }),
            (S.fn.load = function(e, t, n) {
              var r,
                o,
                s,
                a = this,
                l = e.indexOf(" ");
              return (
                l > -1 && ((r = vt(e.slice(l))), (e = e.slice(0, l))),
                b(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" === i(t) && (o = "POST"),
                a.length > 0 &&
                  S.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function(e) {
                      (s = arguments),
                        a.html(
                          r
                            ? S("<div>")
                                .append(S.parseHTML(e))
                                .find(r)
                            : e
                        );
                    })
                    .always(
                      n &&
                        function(e, t) {
                          a.each(function() {
                            n.apply(this, s || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            S.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function(e, t) {
                S.fn[t] = function(e) {
                  return this.on(t, e);
                };
              }
            ),
            (S.expr.pseudos.animated = function(e) {
              return S.grep(S.timers, function(t) {
                return e === t.elem;
              }).length;
            }),
            (S.offset = {
              setOffset: function(e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  u = S.css(e, "position"),
                  c = S(e),
                  d = {};
                "static" === u && (e.style.position = "relative"),
                  (a = c.offset()),
                  (o = S.css(e, "top")),
                  (l = S.css(e, "left")),
                  ("absolute" === u || "fixed" === u) &&
                  (o + l).indexOf("auto") > -1
                    ? ((s = (i = c.position()).top), (r = i.left))
                    : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                  b(t) && (t = t.call(e, n, S.extend({}, a))),
                  null != t.top && (d.top = t.top - a.top + s),
                  null != t.left && (d.left = t.left - a.left + r),
                  "using" in t ? t.using.call(e, d) : c.css(d);
              },
            }),
            S.fn.extend({
              offset: function(e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function(t) {
                        S.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function() {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = { top: 0, left: 0 };
                  if ("fixed" === S.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === S.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = S(e).offset()).top += S.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (r.left += S.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - r.top - S.css(i, "marginTop", !0),
                    left: t.left - r.left - S.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function() {
                return this.map(function() {
                  for (
                    var e = this.offsetParent;
                    e && "static" === S.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || Te;
                });
              },
            }),
            S.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function(e, t) {
                var n = "pageYOffset" === t;
                S.fn[e] = function(i) {
                  return U(
                    this,
                    function(e, i, r) {
                      var o;
                      if (
                        (_(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === r)
                      )
                        return o ? o[t] : e[i];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : r,
                            n ? r : o.pageYOffset
                          )
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            S.each(["top", "left"], function(e, t) {
              S.cssHooks[t] = We(y.pixelPosition, function(e, n) {
                if (n)
                  return (
                    (n = ze(e, t)), Ie.test(n) ? S(e).position()[t] + "px" : n
                  );
              });
            }),
            S.each({ Height: "height", Width: "width" }, function(e, t) {
              S.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function(n, i) {
                  S.fn[i] = function(r, o) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                      a = n || (!0 === r || !0 === o ? "margin" : "border");
                    return U(
                      this,
                      function(t, n, r) {
                        var o;
                        return _(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : void 0 === r
                          ? S.css(t, n, a)
                          : S.style(t, n, r, a);
                      },
                      t,
                      s ? r : void 0,
                      s
                    );
                  };
                }
              );
            }),
            S.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function(e, t) {
                S.fn[t] = function(e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            ),
            S.fn.extend({
              hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            S.fn.extend({
              bind: function(e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function(e, t) {
                return this.off(e, null, t);
              },
              delegate: function(e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function(e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
            }),
            (S.proxy = function(e, t) {
              var n, i, r;
              if (
                ("string" == typeof t && ((n = e[t]), (t = e), (e = n)), b(e))
              )
                return (
                  (i = u.call(arguments, 2)),
                  ((r = function() {
                    return e.apply(t || this, i.concat(u.call(arguments)));
                  }).guid = e.guid = e.guid || S.guid++),
                  r
                );
            }),
            (S.holdReady = function(e) {
              e ? S.readyWait++ : S.ready(!0);
            }),
            (S.isArray = Array.isArray),
            (S.parseJSON = JSON.parse),
            (S.nodeName = O),
            (S.isFunction = b),
            (S.isWindow = _),
            (S.camelCase = G),
            (S.type = T),
            (S.now = Date.now),
            (S.isNumeric = function(e) {
              var t = S.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            void 0 ===
              (n = function() {
                return S;
              }.apply(t, [])) || (e.exports = n);
          var Kt = r.jQuery,
            Yt = r.$;
          return (
            (S.noConflict = function(e) {
              return (
                r.$ === S && (r.$ = Yt),
                e && r.jQuery === S && (r.jQuery = Kt),
                S
              );
            }),
            o || (r.jQuery = r.$ = S),
            S
          );
        });
      }.call(this, n(149)(e)));
    },
    651: function(module, exports) {
      function _typeof(e) {
        return (_typeof =
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
      !(function($, window, undefined) {
        "use strict";
        function RoundSlider(e, t) {
          (this.id = e.id),
            (this.control = $(e)),
            (this.options = $.extend({}, this.defaults, t));
        }
        function CreateRoundSlider(e, t) {
          for (var n, i, r, o = 0; o < this.length; o++)
            if (((n = this[o]), (i = $.data(n, pluginName)))) {
              if ($.isPlainObject(e))
                "function" == typeof i.option
                  ? i.option(e)
                  : n.id &&
                    window[n.id] &&
                    "function" == typeof window[n.id].option &&
                    window[n.id].option(e);
              else if ("string" == typeof e && "function" == typeof i[e]) {
                if (
                  ("option" === e || 0 === e.indexOf("get")) &&
                  t[2] === undefined
                )
                  return i[e](t[1]);
                i[e](t[1], t[2]);
              }
            } else
              (r = new RoundSlider(n, e))._saveInstanceOnElement(),
                r._saveInstanceOnID(),
                !1 !== r._raise("beforeCreate")
                  ? (r._init(), r._raise("create"))
                  : r._removeData();
          return this;
        }
        var pluginName = "roundSlider";
        ($.fn[pluginName] = function(e) {
          return CreateRoundSlider.call(this, e, arguments);
        }),
          (RoundSlider.prototype = {
            pluginName: pluginName,
            version: "1.3.3",
            options: {},
            control: null,
            defaults: {
              min: 0,
              max: 100,
              step: 1,
              value: null,
              radius: 85,
              width: 18,
              handleSize: "+0",
              startAngle: 0,
              endAngle: "+360",
              animation: !0,
              showTooltip: !0,
              editableTooltip: !0,
              readOnly: !1,
              disabled: !1,
              keyboardAction: !0,
              mouseScrollAction: !1,
              lineCap: "square",
              sliderType: "default",
              circleShape: "full",
              handleShape: "round",
              beforeCreate: null,
              create: null,
              start: null,
              drag: null,
              change: null,
              stop: null,
              tooltipFormat: null,
            },
            keys: { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 },
            _props: function() {
              return {
                numberType: [
                  "min",
                  "max",
                  "step",
                  "radius",
                  "width",
                  "startAngle",
                ],
                booleanType: [
                  "animation",
                  "showTooltip",
                  "editableTooltip",
                  "readOnly",
                  "disabled",
                  "keyboardAction",
                  "mouseScrollAction",
                ],
                stringType: [
                  "sliderType",
                  "circleShape",
                  "handleShape",
                  "lineCap",
                ],
              };
            },
            _init: function() {
              var e, t;
              (this._isBrowserSupport = this._isBrowserSupported()),
                (this._isKO = !1),
                (this._isAngular = !1),
                this.control.is("input") &&
                  ((this._isInputType = !0),
                  (this._hiddenField = this.control),
                  (this.control = this.$createElement("div")),
                  this.control.insertAfter(this._hiddenField),
                  (this.options.value =
                    this._hiddenField.val() || this.options.value),
                  (e = this),
                  this._checkKO() &&
                    setTimeout(function() {
                      e._checkKO();
                    }, 1),
                  this._checkAngular()),
                (this._bindOnDrag = !1),
                "string" ==
                typeof (t = this._dataElement().attr("data-updateon"))
                  ? "drag" == t && (this._bindOnDrag = !0)
                  : this._isAngular && (this._bindOnDrag = !0),
                this._onInit();
            },
            _onInit: function() {
              this._initialize(), this._update(), this._render();
            },
            _initialize: function() {
              var e = (this.browserName = this.getBrowserName());
              e && this.control.addClass("rs-" + e),
                this._isBrowserSupport &&
                  ((this._isReadOnly = !1),
                  this._checkDataType(),
                  this._refreshCircleShape());
            },
            _render: function() {
              if (
                ((this.container = this.$createElement("div.rs-container")),
                (this.innerContainer = this.$createElement(
                  "div.rs-inner-container"
                )),
                (this.block = this.$createElement(
                  "div.rs-block rs-outer rs-border"
                )),
                this.container.append(this.innerContainer.append(this.block)),
                this.control
                  .addClass("rs-control")
                  .empty()
                  .append(this.container),
                this._setRadius(),
                this._isBrowserSupport)
              )
                this._createLayers(),
                  this._setProperties(),
                  this._setValue(),
                  this._updateTooltipPos(),
                  this._bindControlEvents("_bind");
              else {
                var e = this.$createElement("div.rs-msg");
                e.html(
                  "function" == typeof this._throwError
                    ? this._throwError()
                    : this._throwError
                ),
                  this.control
                    .empty()
                    .addClass("rs-error")
                    .append(e),
                  this._isInputType && this.control.append(this._dataElement());
              }
            },
            _update: function() {
              this._validateSliderType(),
                this._updateStartEnd(),
                this._validateStartEnd(),
                (this._handle1 = this._handle2 = this._handleDefaults()),
                this._analyzeModelValue(),
                this._validateModelValue();
            },
            _createLayers: function() {
              var e,
                t = this.options.width,
                n = this._start;
              (e = this.$createElement("div.rs-path rs-transition")),
                this._rangeSlider || this._showRange
                  ? ((this.block1 = e
                      .clone()
                      .addClass("rs-range-color")
                      .rsRotate(n)),
                    (this.block2 = e
                      .clone()
                      .addClass("rs-range-color")
                      .css("opacity", "0")
                      .rsRotate(n)),
                    (this.block3 = e
                      .clone()
                      .addClass("rs-path-color")
                      .rsRotate(n)),
                    (this.block4 = e
                      .addClass("rs-path-color")
                      .css({ opacity: "1", "z-index": "1" })
                      .rsRotate(n - 180)),
                    this.block
                      .append(
                        this.block1,
                        this.block2,
                        this.block3,
                        this.block4
                      )
                      .addClass("rs-split"))
                  : this.block.append(e.addClass("rs-path-color")),
                (this.lastBlock = this.$createElement("span.rs-block").css({
                  padding: t,
                })),
                (this.innerBlock = this.$createElement(
                  "div.rs-inner rs-bg-color rs-border"
                )),
                this.lastBlock.append(this.innerBlock),
                this.block.append(this.lastBlock),
                this._appendHandle(),
                this._appendOverlay(),
                this._appendHiddenField();
            },
            _setProperties: function() {
              this._updatePre(),
                this._setHandleShape(),
                this._addAnimation(),
                this._appendTooltip(),
                this.options.showTooltip || this._removeTooltip(),
                this.options.disabled
                  ? this.disable()
                  : this.options.readOnly && this._readOnly(!0),
                this.options.mouseScrollAction &&
                  this._bindScrollEvents("_bind");
            },
            _updatePre: function() {
              this._prechange = this._predrag = this.options.value;
            },
            _setValue: function() {
              if (this._rangeSlider)
                this._setHandleValue(1), this._setHandleValue(2);
              else {
                this._showRange && this._setHandleValue(1);
                var e =
                  "default" == this.options.sliderType
                    ? this._active || 1
                    : parseFloat(this.bar.children().attr("index"));
                this._setHandleValue(e);
              }
            },
            _appendTooltip: function() {
              0 === this.container.children(".rs-tooltip").length &&
                ((this.tooltip = this.$createElement(
                  "span.rs-tooltip rs-tooltip-text"
                )),
                this.container.append(this.tooltip),
                this._tooltipEditable(),
                this._updateTooltip());
            },
            _removeTooltip: function() {
              0 != this.container.children(".rs-tooltip").length &&
                this.tooltip &&
                this.tooltip.remove();
            },
            _tooltipEditable: function() {
              var e,
                t = this.options,
                n = this.tooltip;
              n &&
                t.showTooltip &&
                (t.editableTooltip
                  ? (n.addClass("edit"), (e = "_bind"))
                  : (n.removeClass("edit"), (e = "_unbind")),
                this[e](n, "click", this._editTooltip));
            },
            _editTooltip: function() {
              var e,
                t,
                n = this.tooltip;
              n.hasClass("edit") &&
                !this._isReadOnly &&
                ((e = 2 * parseFloat(n.css("border-left-width"))),
                (t = this.input = this.$createElement(
                  "input.rs-input rs-tooltip-text"
                ).css({
                  height: n.outerHeight() - e,
                  width: n.outerWidth() - e,
                })),
                n
                  .html(t)
                  .removeClass("edit")
                  .addClass("hover"),
                t.focus().val(this._getTooltipValue(!0)),
                this._bind(t, "blur", this._focusOut),
                this._bind(t, "change", this._focusOut));
            },
            _focusOut: function(e) {
              if ("change" == e.type) {
                var t = this.input.val().replace("-", ",");
                "," == t[0] && (t = "-" + t.slice(1).replace("-", ",")),
                  (this.options.value = t),
                  this._analyzeModelValue(),
                  this._validateModelValue(),
                  this._setValue(),
                  this.input.val(this._getTooltipValue(!0));
              } else
                this.tooltip.addClass("edit").removeClass("hover"),
                  this._updateTooltip();
              this._raiseEvent("change");
            },
            _setHandleShape: function() {
              var e = this.options.handleShape,
                t = this._handles();
              t.removeClass("rs-handle-dot rs-handle-square"),
                "dot" == e
                  ? t.addClass("rs-handle-dot")
                  : "square" == e
                  ? t.addClass("rs-handle-square")
                  : (this.options.handleShape = "round");
            },
            _setHandleValue: function(e) {
              this._active = e;
              var t = this["_handle" + e];
              "min-range" != this.options.sliderType &&
                (this.bar = this._activeHandleBar()),
                this._changeSliderValue(t.value, t.angle);
            },
            _setAnimation: function() {
              this.options.animation
                ? this._addAnimation()
                : this._removeAnimation();
            },
            _addAnimation: function() {
              this.options.animation && this.control.addClass("rs-animation");
            },
            _removeAnimation: function() {
              this.control.removeClass("rs-animation");
            },
            _setRadius: function() {
              var e,
                t,
                n = this.options.radius,
                i = 2 * n,
                r = this.options.circleShape,
                o = i,
                s = i;
              if (
                (this.container.removeClass().addClass("rs-container"),
                0 === r.indexOf("half"))
              ) {
                switch (r) {
                  case "half-top":
                  case "half-bottom":
                    (o = n), (s = i);
                    break;
                  case "half-left":
                  case "half-right":
                    (o = i), (s = n);
                }
                this.container.addClass(r.replace("half-", "") + " half");
              } else
                0 === r.indexOf("quarter")
                  ? ((o = s = n),
                    (e = r.split("-")),
                    this.container.addClass(e[0] + " " + e[1] + " " + e[2]))
                  : this.container.addClass("full " + r);
              (t = { height: o, width: s }),
                this.control.css(t),
                this.container.css(t);
            },
            _border: function(e) {
              return e
                ? parseFloat(
                    this._startLine.children().css("border-bottom-width")
                  )
                : 2 * parseFloat(this.block.css("border-top-width"));
            },
            _appendHandle: function() {
              (this._rangeSlider || !this._showRange) && this._createHandle(1),
                (this._rangeSlider || this._showRange) && this._createHandle(2),
                (this._startLine = this._addSeperator(this._start, "rs-start")),
                (this._endLine = this._addSeperator(
                  this._start + this._end,
                  "rs-end"
                )),
                this._refreshSeperator();
            },
            _addSeperator: function(e, t) {
              var n = this.$createElement("span.rs-seperator rs-border"),
                i = (this.options.width,
                this._border(),
                this.$createElement("span.rs-bar rs-transition " + t)
                  .append(n)
                  .rsRotate(e));
              return this.container.append(i), i;
            },
            _refreshSeperator: function() {
              var e = this._startLine.add(this._endLine),
                t = e.children().removeAttr("style"),
                n = this.options,
                i = n.width + this._border();
              "round" == n.lineCap && "full" != n.circleShape
                ? (e.addClass("rs-rounded"),
                  t.css({ width: i, height: i / 2 + 1 }),
                  this._startLine
                    .children()
                    .css("margin-top", -1)
                    .addClass(
                      "min-range" == n.sliderType
                        ? "rs-range-color"
                        : "rs-path-color"
                    ),
                  this._endLine
                    .children()
                    .css("margin-top", i / -2)
                    .addClass("rs-path-color"))
                : (e.removeClass("rs-rounded"),
                  t
                    .css({ width: i, "margin-top": this._border(!0) / -2 })
                    .removeClass("rs-range-color rs-path-color"));
            },
            _updateSeperator: function() {
              this._startLine.rsRotate(this._start),
                this._endLine.rsRotate(this._start + this._end);
            },
            _createHandle: function(e) {
              var t,
                n,
                i = this.$createElement("div.rs-handle rs-move"),
                r = this.options;
              "round" != (t = r.handleShape) && i.addClass("rs-handle-" + t),
                i.attr({ index: e, tabIndex: "0" });
              var o,
                s =
                  (o = (o = this._dataElement()[0].id) ? o + "_" : "") +
                  "handle" +
                  ("range" == r.sliderType
                    ? "_" + (1 == e ? "start" : "end")
                    : "");
              return (
                i.attr({ role: "slider", "aria-label": s }),
                (n = this.$createElement("div.rs-bar rs-transition")
                  .css("z-index", "7")
                  .append(i)
                  .rsRotate(this._start)).addClass(
                  "range" == r.sliderType && 2 == e ? "rs-second" : "rs-first"
                ),
                this.container.append(n),
                this._refreshHandle(),
                (this.bar = n),
                (this._active = e),
                1 != e &&
                  2 != e &&
                  (this["_handle" + e] = this._handleDefaults()),
                this._bind(i, "focus", this._handleFocus),
                this._bind(i, "blur", this._handleBlur),
                i
              );
            },
            _refreshHandle: function _refreshHandle() {
              var o = this.options,
                hSize = o.handleSize,
                width = o.width,
                h,
                w,
                isSquare = !0,
                isNumber = this.isNumber,
                s,
                diff;
              if ("string" == typeof hSize && isNumber(hSize))
                if ("+" === hSize.charAt(0) || "-" === hSize.charAt(0))
                  try {
                    hSize = eval(
                      width + hSize.charAt(0) + Math.abs(parseFloat(hSize))
                    );
                  } catch (e) {
                    console.warn(e);
                  }
                else
                  hSize.indexOf(",") &&
                    ((s = hSize.split(",")),
                    isNumber(s[0]) &&
                      isNumber(s[1]) &&
                      ((w = parseFloat(s[0])),
                      (h = parseFloat(s[1])),
                      (isSquare = !1)));
              isSquare && (h = w = isNumber(hSize) ? parseFloat(hSize) : width),
                (diff = (width + this._border() - w) / 2),
                this._handles().css({
                  height: h,
                  width: w,
                  margin: -h / 2 + "px 0 0 " + diff + "px",
                });
            },
            _handleDefaults: function() {
              var e = this.options.min;
              return { angle: this._valueToAngle(e), value: e };
            },
            _handles: function() {
              return this.container.children("div.rs-bar").find(".rs-handle");
            },
            _activeHandleBar: function(e) {
              return (
                (e = e != undefined ? e : this._active),
                $(this.container.children("div.rs-bar")[e - 1])
              );
            },
            _handleArgs: function(e) {
              var t = this["_handle" + (e = e != undefined ? e : this._active)];
              return {
                element: this._activeHandleBar(e).children(),
                index: e,
                isActive: e == this._active,
                value: t ? t.value : null,
                angle: t ? t.angle : null,
              };
            },
            _dataElement: function() {
              return this._isInputType ? this._hiddenField : this.control;
            },
            _raiseEvent: function(e) {
              var t = this["_pre" + e],
                n = this.options.value;
              if (t !== n)
                return (
                  (this["_pre" + e] = n),
                  "change" == e && this._updatePre(),
                  this._updateTooltip(),
                  ("change" == e || (this._bindOnDrag && "drag" == e)) &&
                    this._updateHidden(),
                  this._raise(e, {
                    value: n,
                    preValue: t,
                    handle: this._handleArgs(),
                  })
                );
            },
            _elementDown: function(e) {
              var t, n, i, r;
              if (!this._isReadOnly)
                if ($(e.target).hasClass("rs-handle")) this._handleDown(e);
                else {
                  var o = this._getXY(e),
                    s = this._getCenterPoint(),
                    a = this._getDistance(o, s),
                    l = this.block.outerWidth() / 2;
                  a >= l - (this.options.width + this._border()) &&
                    a <= l &&
                    (e.preventDefault(),
                    (t = this.control.find(".rs-handle.rs-focus")),
                    this.control
                      .attr("tabindex", "0")
                      .focus()
                      .removeAttr("tabindex"),
                    (n = (r = this._getAngleValue(o, s)).angle),
                    (i = r.value),
                    this._rangeSlider &&
                      ((t = this.control.find(".rs-handle.rs-focus")),
                      (this._active =
                        1 == t.length
                          ? parseFloat(t.attr("index"))
                          : this._handle2.value - i < i - this._handle1.value
                          ? 2
                          : 1),
                      (this.bar = this._activeHandleBar())),
                    this._changeSliderValue(i, n),
                    this._raiseEvent("change"));
                }
            },
            _handleDown: function(e) {
              e.preventDefault();
              var t = $(e.target);
              t.focus(),
                this._removeAnimation(),
                this._bindMouseEvents("_bind"),
                (this.bar = t.parent()),
                (this._active = parseFloat(t.attr("index"))),
                this._handles().removeClass("rs-move"),
                this._raise("start", {
                  value: this.options.value,
                  handle: this._handleArgs(),
                });
            },
            _handleMove: function(e) {
              e.preventDefault();
              var t,
                n,
                i = this._getXY(e),
                r = this._getCenterPoint(),
                o = this._getAngleValue(i, r, !0);
              (t = o.angle),
                (n = o.value),
                this._changeSliderValue(n, t),
                this._raiseEvent("drag");
            },
            _handleUp: function() {
              this._handles().addClass("rs-move"),
                this._bindMouseEvents("_unbind"),
                this._addAnimation(),
                this._raiseEvent("change"),
                this._raise("stop", {
                  value: this.options.value,
                  handle: this._handleArgs(),
                });
            },
            _handleFocus: function(e) {
              if (!this._isReadOnly) {
                var t = $(e.target);
                this._handles().removeClass("rs-focus"),
                  t.addClass("rs-focus"),
                  (this.bar = t.parent()),
                  (this._active = parseFloat(t.attr("index"))),
                  this.options.keyboardAction &&
                    (this._bindKeyboardEvents("_unbind"),
                    this._bindKeyboardEvents("_bind")),
                  this.control.find("div.rs-bar").css("z-index", "7"),
                  this.bar.css("z-index", "8");
              }
            },
            _handleBlur: function() {
              this._handles().removeClass("rs-focus"),
                this.options.keyboardAction &&
                  this._bindKeyboardEvents("_unbind");
            },
            _handleKeyDown: function(e) {
              var t, n, i, r, o;
              this._isReadOnly ||
                ((t = e.keyCode),
                (n = this.keys),
                27 == t && this._handles().blur(),
                t >= 35 &&
                  t <= 40 &&
                  (t >= 37 && t <= 40 && this._removeAnimation(),
                  (i = this["_handle" + this._active]),
                  e.preventDefault(),
                  t == n.UP || t == n.RIGHT
                    ? (r = this._round(
                        this._limitValue(i.value + this.options.step)
                      ))
                    : t == n.DOWN || t == n.LEFT
                    ? (r = this._round(
                        this._limitValue(i.value - this._getMinusStep(i.value))
                      ))
                    : 36 == t
                    ? (r = this._getKeyValue("Home"))
                    : 35 == t && (r = this._getKeyValue("End")),
                  (o = this._valueToAngle(r)),
                  this._changeSliderValue(r, o),
                  this._raiseEvent("drag")));
            },
            _handleKeyUp: function() {
              this._addAnimation(), this._raiseEvent("change");
            },
            _getMinusStep: function(e) {
              var t,
                n = this.options,
                i = n.min,
                r = n.max,
                o = n.step;
              return e == r ? (0 == (t = (r - i) % o) ? o : t) : o;
            },
            _getKeyValue: function(e) {
              var t = this.options,
                n = t.min,
                i = t.max;
              return this._rangeSlider
                ? "Home" == e
                  ? 1 == this._active
                    ? n
                    : this._handle1.value
                  : 1 == this._active
                  ? this._handle2.value
                  : i
                : "Home" == e
                ? n
                : i;
            },
            _elementScroll: function(e) {
              if (!this._isReadOnly) {
                e.preventDefault();
                var t,
                  n,
                  i,
                  r,
                  o = e.originalEvent || e;
                0 !=
                  (r = o.wheelDelta
                    ? o.wheelDelta / 60
                    : o.detail
                    ? -o.detail / 2
                    : 0) &&
                  (this._updateActiveHandle(e),
                  (n =
                    (t = this["_handle" + this._active]).value +
                    (r > 0 ? this.options.step : -this._getMinusStep(t.value))),
                  (n = this._limitValue(n)),
                  (i = this._valueToAngle(n)),
                  this._removeAnimation(),
                  this._changeSliderValue(n, i),
                  this._raiseEvent("change"),
                  this._addAnimation());
              }
            },
            _updateActiveHandle: function(e) {
              var t = $(e.target);
              t.hasClass("rs-handle") &&
                t.parent().parent()[0] == this.control[0] &&
                ((this.bar = t.parent()),
                (this._active = parseFloat(t.attr("index")))),
                this.bar.find(".rs-handle").hasClass("rs-focus") ||
                  this.bar.find(".rs-handle").focus();
            },
            _bindControlEvents: function(e) {
              this[e](this.control, "mousedown", this._elementDown),
                this[e](this.control, "touchstart", this._elementDown);
            },
            _bindScrollEvents: function(e) {
              this[e](this.control, "mousewheel", this._elementScroll),
                this[e](this.control, "DOMMouseScroll", this._elementScroll);
            },
            _bindMouseEvents: function(e) {
              this[e]($(document), "mousemove", this._handleMove),
                this[e]($(document), "mouseup", this._handleUp),
                this[e]($(document), "mouseleave", this._handleUp),
                this[e]($(document), "touchmove", this._handleMove),
                this[e]($(document), "touchend", this._handleUp),
                this[e]($(document), "touchcancel", this._handleUp);
            },
            _bindKeyboardEvents: function(e) {
              this[e]($(document), "keydown", this._handleKeyDown),
                this[e]($(document), "keyup", this._handleKeyUp);
            },
            _changeSliderValue: function(e, t) {
              var n = this._oriAngle(t),
                i = this._limitAngle(t);
              if (this._rangeSlider || this._showRange) {
                if (
                  (1 == this._active &&
                    n <= this._oriAngle(this._handle2.angle)) ||
                  (2 == this._active &&
                    n >= this._oriAngle(this._handle1.angle)) ||
                  this._invertRange
                ) {
                  (this["_handle" + this._active] = { angle: t, value: e }),
                    (this.options.value = this._rangeSlider
                      ? this._handle1.value + "," + this._handle2.value
                      : e),
                    this.bar.rsRotate(i),
                    this._updateARIA(e);
                  var r =
                      this._oriAngle(this._handle2.angle) -
                      this._oriAngle(this._handle1.angle),
                    o = "1",
                    s = "0";
                  r <= 180 && !(r < 0 && r > -180) && ((o = "0"), (s = "1")),
                    this.block2.css("opacity", o),
                    this.block3.css("opacity", s),
                    (1 == this._active ? this.block4 : this.block2).rsRotate(
                      i - 180
                    ),
                    (1 == this._active ? this.block1 : this.block3).rsRotate(i);
                }
              } else
                (this["_handle" + this._active] = { angle: t, value: e }),
                  (this.options.value = e),
                  this.bar.rsRotate(i),
                  this._updateARIA(e);
            },
            _updateARIA: function(e) {
              var t,
                n = this.options,
                i = n.min,
                r = n.max;
              this.bar.children().attr({ "aria-valuenow": e }),
                "range" == n.sliderType
                  ? ((t = this._handles()).eq(0).attr({ "aria-valuemin": i }),
                    t.eq(1).attr({ "aria-valuemax": r }),
                    1 == this._active
                      ? t.eq(1).attr({ "aria-valuemin": e })
                      : t.eq(0).attr({ "aria-valuemax": e }))
                  : this.bar
                      .children()
                      .attr({ "aria-valuemin": i, "aria-valuemax": r });
            },
            _checkKO: function() {
              var e,
                t,
                n,
                i,
                r,
                o = this._dataElement().data("bind");
              if (
                "string" == typeof o &&
                "object" ==
                  ("undefined" == typeof ko ? "undefined" : _typeof(ko))
              ) {
                if (void 0 === (e = ko.dataFor(this._dataElement()[0])))
                  return !0;
                for (t = o.split(","), i = 0; i < t.length; i++)
                  if (((r = t[i].split(":")), "value" == $.trim(r[0]))) {
                    n = $.trim(r[1]);
                    break;
                  }
                n &&
                  ((this._isKO = !0),
                  ko.computed(function() {
                    this.option("value", e[n]());
                  }, this));
              }
            },
            _checkAngular: function() {
              if (
                "object" ==
                  ("undefined" == typeof angular
                    ? "undefined"
                    : _typeof(angular)) &&
                "function" == typeof angular.element &&
                ((this._ngName = this._dataElement().attr("ng-model")),
                "string" == typeof this._ngName)
              ) {
                this._isAngular = !0;
                var e = this;
                this._scope().$watch(this._ngName, function(t) {
                  e.option("value", t);
                });
              }
            },
            _scope: function() {
              return angular.element(this._dataElement()).scope();
            },
            _getDistance: function(e, t) {
              return Math.sqrt(
                (e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y)
              );
            },
            _getXY: function(e) {
              return (
                -1 == e.type.indexOf("mouse") &&
                  (e = (e.originalEvent || e).changedTouches[0]),
                { x: e.pageX, y: e.pageY }
              );
            },
            _getCenterPoint: function() {
              var e = this.block.offset();
              return {
                x: e.left + this.block.outerWidth() / 2,
                y: e.top + this.block.outerHeight() / 2,
              };
            },
            _getAngleValue: function(e, t, n) {
              var i = -Math.atan2(e.y - t.y, t.x - e.x) / (Math.PI / 180);
              return (
                i < this._start && (i += 360),
                (i = this._checkAngle(i, n)),
                this._processStepByAngle(i)
              );
            },
            _checkAngle: function(e, t) {
              var n,
                i = this._oriAngle(e),
                r = this["_handle" + this._active].angle,
                o = this._oriAngle(r);
              if (i > this._end) {
                if (!t) return r;
                e = this._start + (o <= this._end - o ? 0 : this._end);
              } else if (
                t &&
                ((n = this._handleDragDistance),
                this.isNumber(n) && Math.abs(i - o) > n)
              )
                return r;
              return e;
            },
            _processStepByAngle: function(e) {
              var t = this._angleToValue(e);
              return this._processStepByValue(t);
            },
            _processStepByValue: function(e) {
              var t,
                n,
                i,
                r,
                o = this.options,
                s = o.min,
                a = o.max,
                l = o.step,
                u = s > a;
              return (
                (t = e - ((e - s) % (l = u ? -l : l))),
                (n = this._limitValue(t + l)),
                (i = this._limitValue(t - l)),
                (r = u
                  ? e <= t
                    ? t - e < e - n
                      ? t
                      : n
                    : e - t > i - e
                    ? t
                    : i
                  : e >= t
                  ? e - t < n - e
                    ? t
                    : n
                  : t - e > e - i
                  ? t
                  : i),
                { value: (r = this._round(r)), angle: this._valueToAngle(r) }
              );
            },
            _round: function(e) {
              var t = this.options.step.toString().split(".");
              return t[1] ? parseFloat(e.toFixed(t[1].length)) : Math.round(e);
            },
            _oriAngle: function(e) {
              var t = e - this._start;
              return t < 0 && (t += 360), t;
            },
            _limitAngle: function(e) {
              return (
                e > 360 + this._start && (e -= 360),
                e < this._start && (e += 360),
                e
              );
            },
            _limitValue: function(e) {
              var t = this.options,
                n = t.min,
                i = t.max,
                r = n > i;
              return (
                ((!r && e < n) || (r && e > n)) && (e = n),
                ((!r && e > i) || (r && e < i)) && (e = i),
                e
              );
            },
            _angleToValue: function(e) {
              var t = this.options,
                n = t.min,
                i = t.max;
              return (this._oriAngle(e) / this._end) * (i - n) + n;
            },
            _valueToAngle: function(e) {
              var t = this.options,
                n = t.min;
              return ((e - n) / (t.max - n)) * this._end + this._start;
            },
            _appendHiddenField: function() {
              (this._hiddenField =
                this._hiddenField || this.$createElement("input")),
                this._hiddenField.attr({
                  type: "hidden",
                  name: this._dataElement()[0].id || "",
                }),
                this.control.append(this._hiddenField),
                this._updateHidden();
            },
            _updateHidden: function() {
              var e = this.options.value;
              this._hiddenField.val(e),
                (this._isKO || this._isAngular) &&
                  this._hiddenField.trigger("change"),
                this._isAngular && (this._scope()[this._ngName] = e);
            },
            _updateTooltip: function() {
              this.tooltip &&
                !this.tooltip.hasClass("hover") &&
                this.tooltip.html(this._getTooltipValue()),
                this._updateTooltipPos();
            },
            _updateTooltipPos: function() {
              this.tooltip && this.tooltip.css(this._getTooltipPos());
            },
            _getTooltipPos: function() {
              var e,
                t = this.options.circleShape,
                n = this.tooltip.outerHeight(),
                i = this.tooltip.outerWidth();
              if ("full" == t || "pie" == t || 0 === t.indexOf("custom"))
                return { "margin-top": -n / 2, "margin-left": -i / 2 };
              if (-1 != t.indexOf("half")) {
                switch (t) {
                  case "half-top":
                  case "half-bottom":
                    e = { "margin-left": -i / 2 };
                    break;
                  case "half-left":
                  case "half-right":
                    e = { "margin-top": -n / 2 };
                }
                return e;
              }
              return {};
            },
            _getTooltipValue: function(e) {
              var t,
                n = this.options.value;
              return this._rangeSlider
                ? ((t = n.split(",")),
                  e
                    ? t[0] + " - " + t[1]
                    : this._tooltipValue(t[0], 1) +
                      " - " +
                      this._tooltipValue(t[1], 2))
                : e
                ? n
                : this._tooltipValue(n);
            },
            _tooltipValue: function(e, t) {
              var n = this._raise("tooltipFormat", {
                value: e,
                handle: this._handleArgs(t),
              });
              return null != n && "boolean" != typeof n ? n : e;
            },
            _validateStartAngle: function() {
              var e = this.options.startAngle;
              return (
                (e = (this.isNumber(e) ? parseFloat(e) : 0) % 360) < 0 &&
                  (e += 360),
                (this.options.startAngle = e),
                e
              );
            },
            _validateEndAngle: function _validateEndAngle() {
              var o = this.options,
                start = o.startAngle,
                end = o.endAngle;
              if (
                "string" == typeof end &&
                this.isNumber(end) &&
                ("+" === end.charAt(0) || "-" === end.charAt(0))
              )
                try {
                  end = eval(start + end.charAt(0) + Math.abs(parseFloat(end)));
                } catch (e) {
                  console.warn(e);
                }
              return (
                (end = (this.isNumber(end) ? parseFloat(end) : 360) % 360),
                end <= start && (end += 360),
                end
              );
            },
            _refreshCircleShape: function() {
              var e,
                t = this.options.circleShape,
                n = [
                  "half-top",
                  "half-bottom",
                  "half-left",
                  "half-right",
                  "quarter-top-left",
                  "quarter-top-right",
                  "quarter-bottom-right",
                  "quarter-bottom-left",
                  "pie",
                  "custom-half",
                  "custom-quarter",
                ];
              -1 == n.indexOf(t) &&
                (t =
                  -1 !=
                  (e = [
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "q1",
                    "q2",
                    "q3",
                    "q4",
                    "3/4",
                    "ch",
                    "cq",
                  ].indexOf(t))
                    ? n[e]
                    : "half" == t
                    ? "half-top"
                    : "quarter" == t
                    ? "quarter-top-left"
                    : "full"),
                (this.options.circleShape = t);
            },
            _appendOverlay: function() {
              var e = this.options.circleShape;
              "pie" == e
                ? this._checkOverlay(".rs-overlay", 270)
                : ("custom-half" == e || "custom-quarter" == e) &&
                  (this._checkOverlay(".rs-overlay1", 180),
                  "custom-quarter" == e &&
                    this._checkOverlay(".rs-overlay2", this._end));
            },
            _checkOverlay: function(e, t) {
              var n = this.container.children(e);
              0 == n.length &&
                ((n = this.$createElement(
                  "div" + e + " rs-transition rs-bg-color"
                )),
                this.container.append(n)),
                n.rsRotate(this._start + t);
            },
            _checkDataType: function() {
              var e,
                t,
                n,
                i = this.options,
                r = this._props();
              for (e in r.numberType)
                (n = i[(t = r.numberType[e])]),
                  (i[t] = this.isNumber(n) ? parseFloat(n) : this.defaults[t]);
              for (e in r.booleanType)
                (n = i[(t = r.booleanType[e])]), (i[t] = "false" != n && !!n);
              for (e in r.stringType)
                (n = i[(t = r.stringType[e])]), (i[t] = ("" + n).toLowerCase());
            },
            _validateSliderType: function() {
              var e = this.options.sliderType.toLowerCase();
              (this._rangeSlider = this._showRange = !1),
                "range" == e
                  ? (this._rangeSlider = this._showRange = !0)
                  : -1 != e.indexOf("min")
                  ? ((this._showRange = !0), (e = "min-range"))
                  : (e = "default"),
                (this.options.sliderType = e);
            },
            _updateStartEnd: function() {
              var e = this.options,
                t = e.circleShape,
                n = e.startAngle,
                i = e.endAngle;
              "full" != t &&
                (-1 != t.indexOf("quarter")
                  ? (i = "+90")
                  : -1 != t.indexOf("half")
                  ? (i = "+180")
                  : "pie" == t && (i = "+270"),
                (this.options.endAngle = i),
                "quarter-top-left" == t || "half-top" == t
                  ? (n = 0)
                  : "quarter-top-right" == t || "half-right" == t
                  ? (n = 90)
                  : "quarter-bottom-right" == t || "half-bottom" == t
                  ? (n = 180)
                  : ("quarter-bottom-left" == t || "half-left" == t) &&
                    (n = 270),
                (this.options.startAngle = n));
            },
            _validateStartEnd: function() {
              (this._start = this._validateStartAngle()),
                (this._end = this._validateEndAngle());
              var e = this._start < this._end ? 0 : 360;
              this._end += e - this._start;
            },
            _analyzeModelValue: function() {
              var e,
                t,
                n,
                i = this.options,
                r = i.value,
                o = i.min,
                s = i.max,
                a = this.isNumber,
                l = "string" == typeof r;
              r instanceof Array && (r = r.toString()),
                (n = l ? r.split(",") : [r]),
                this._rangeSlider
                  ? (t = l
                      ? n.length >= 2
                        ? (a(n[0]) ? n[0] : o) + "," + (a(n[1]) ? n[1] : s)
                        : a(n[0])
                        ? o + "," + n[0]
                        : o + "," + o
                      : a(r)
                      ? o + "," + r
                      : o + "," + o)
                  : l
                  ? (t = a((e = n.pop())) ? parseFloat(e) : o)
                  : (t = a(r) ? parseFloat(r) : o),
                (this.options.value = t);
            },
            _validateModelValue: function() {
              var e,
                t = this.options.value;
              if (this._rangeSlider) {
                var n = t.split(","),
                  i = parseFloat(n[0]),
                  r = parseFloat(n[1]);
                (i = this._limitValue(i)),
                  (r = this._limitValue(r)),
                  this._invertRange || (i > r && (r = i)),
                  (this._handle1 = this._processStepByValue(i)),
                  (this._handle2 = this._processStepByValue(r)),
                  (this.options.value =
                    this._handle1.value + "," + this._handle2.value);
              } else
                (this[
                  "_handle" + (e = this._showRange ? 2 : this._active || 1)
                ] = this._processStepByValue(this._limitValue(t))),
                  this._showRange && (this._handle1 = this._handleDefaults()),
                  (this.options.value = this["_handle" + e].value);
            },
            $createElement: function(e) {
              var t = e.split(".");
              return $(document.createElement(t[0])).addClass(t[1] || "");
            },
            isNumber: function(e) {
              return "number" == typeof (e = parseFloat(e)) && !isNaN(e);
            },
            getBrowserName: function() {
              var e = "",
                t = window.navigator.userAgent;
              return (
                (window.opr && opr.addons) ||
                window.opera ||
                t.indexOf(" OPR/") >= 0
                  ? (e = "opera")
                  : "undefined" != typeof InstallTrigger
                  ? (e = "firefox")
                  : t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0
                  ? (e = "ie")
                  : window.StyleMedia
                  ? (e = "edge")
                  : -1 != t.indexOf("Safari") && -1 == t.indexOf("Chrome")
                  ? (e = "safari")
                  : ((!window.chrome || !window.chrome.webstore) &&
                      -1 == t.indexOf("Chrome")) ||
                    (e = "chrome"),
                e
              );
            },
            _isBrowserSupported: function() {
              for (
                var e = [
                    "borderRadius",
                    "WebkitBorderRadius",
                    "MozBorderRadius",
                    "OBorderRadius",
                    "msBorderRadius",
                    "KhtmlBorderRadius",
                  ],
                  t = 0;
                t < e.length;
                t++
              )
                if (document.body.style[e[t]] !== undefined) return !0;
            },
            _throwError: function() {
              return "This browser doesn't support the border-radious property.";
            },
            _raise: function(e, t) {
              var n = this.options,
                i = n[e],
                r = !0;
              return (
                ((t = t || { value: n.value }).id = this.id),
                (t.control = this.control),
                (t.options = n),
                i &&
                  ((t.type = e),
                  "string" == typeof i && (i = window[i]),
                  $.isFunction(i) && (r = !1 !== (r = i.call(this, t)) && r)),
                this.control.trigger($.Event(e, t)),
                r
              );
            },
            _bind: function(e, t, n) {
              $(e).bind(t, $.proxy(n, this));
            },
            _unbind: function(e, t, n) {
              $(e).unbind(t, $.proxy(n, this));
            },
            _getInstance: function() {
              return $.data(this._dataElement()[0], pluginName);
            },
            _saveInstanceOnElement: function() {
              $.data(this.control[0], pluginName, this);
            },
            _saveInstanceOnID: function() {
              var e = this.id;
              e && void 0 !== window[e] && (window[e] = this);
            },
            _removeData: function() {
              var e = this._dataElement()[0];
              $.removeData && $.removeData(e, pluginName),
                e.id &&
                  "function" == typeof window[e.id]._init &&
                  delete window[e.id];
            },
            _destroyControl: function() {
              this._isInputType &&
                this._dataElement()
                  .insertAfter(this.control)
                  .attr("type", "text"),
                this.control
                  .empty()
                  .removeClass("rs-control")
                  .height("")
                  .width(""),
                this._removeAnimation(),
                this._bindControlEvents("_unbind");
            },
            _updateWidth: function() {
              this.lastBlock.css("padding", this.options.width),
                this._refreshHandle();
            },
            _readOnly: function(e) {
              (this._isReadOnly = e),
                this.container.removeClass("rs-readonly"),
                e && this.container.addClass("rs-readonly");
            },
            _get: function(e) {
              return this.options[e];
            },
            _set: function(e, t) {
              var n = this._props();
              if (-1 != $.inArray(e, n.numberType)) {
                if (!this.isNumber(t)) return;
                t = parseFloat(t);
              } else
                -1 != $.inArray(e, n.booleanType)
                  ? (t = "false" != t && !!t)
                  : -1 != $.inArray(e, n.stringType) && (t = t.toLowerCase());
              if (this.options[e] != t) {
                switch (((this.options[e] = t), e)) {
                  case "startAngle":
                  case "endAngle":
                    this._validateStartEnd(),
                      this._updateSeperator(),
                      this._appendOverlay();
                  case "min":
                  case "max":
                  case "step":
                  case "value":
                    this._analyzeModelValue(),
                      this._validateModelValue(),
                      this._setValue(),
                      this._updatePre(),
                      this._updateHidden(),
                      this._updateTooltip();
                    break;
                  case "radius":
                    this._setRadius(), this._updateTooltipPos();
                    break;
                  case "width":
                    this._removeAnimation(),
                      this._updateWidth(),
                      this._updateTooltipPos(),
                      this._addAnimation(),
                      this._refreshSeperator();
                    break;
                  case "handleSize":
                    this._refreshHandle();
                    break;
                  case "handleShape":
                    this._setHandleShape();
                    break;
                  case "animation":
                    this._setAnimation();
                    break;
                  case "showTooltip":
                    this.options.showTooltip
                      ? this._appendTooltip()
                      : this._removeTooltip();
                    break;
                  case "editableTooltip":
                    this._tooltipEditable(), this._updateTooltipPos();
                    break;
                  case "disabled":
                    this.options.disabled ? this.disable() : this.enable();
                    break;
                  case "readOnly":
                    this.options.readOnly
                      ? this._readOnly(!0)
                      : !this.options.disabled && this._readOnly(!1);
                    break;
                  case "mouseScrollAction":
                    this._bindScrollEvents(
                      this.options.mouseScrollAction ? "_bind" : "_unbind"
                    );
                    break;
                  case "lineCap":
                    this._refreshSeperator();
                    break;
                  case "circleShape":
                    this._refreshCircleShape(),
                      "full" == this.options.circleShape &&
                        ((this.options.startAngle = 0),
                        (this.options.endAngle = "+360"));
                  case "sliderType":
                    this._destroyControl(), this._onInit();
                }
                return this;
              }
            },
            option: function(e, t) {
              if (this._getInstance() && this._isBrowserSupport) {
                if ($.isPlainObject(e))
                  for (var n in ((e.min !== undefined || e.max !== undefined) &&
                    (e.min !== undefined &&
                      ((this.options.min = e.min), delete e.min),
                    e.max !== undefined &&
                      ((this.options.max = e.max), delete e.max),
                    e.value == undefined &&
                      this._set("value", this.options.value)),
                  e))
                    this._set(n, e[n]);
                else if (e && "string" == typeof e) {
                  if (t === undefined) return this._get(e);
                  this._set(e, t);
                }
                return this;
              }
            },
            getValue: function(e) {
              if ("range" == this.options.sliderType && this.isNumber(e)) {
                var t = parseFloat(e);
                if (1 == t || 2 == t) return this["_handle" + t].value;
              }
              return this._get("value");
            },
            setValue: function(e, t) {
              var n, i, r;
              this.isNumber(e) &&
                (this.isNumber(t) &&
                  ("range" == (n = this.options.sliderType)
                    ? ((i = parseFloat(t)),
                      (r = parseFloat(e)),
                      1 == i
                        ? (e = r + "," + this._handle2.value)
                        : 2 == i && (e = this._handle1.value + "," + r))
                    : "default" == n && (this._active = t)),
                this._set("value", e));
            },
            disable: function() {
              (this.options.disabled = !0),
                this.container.addClass("rs-disabled"),
                this._readOnly(!0);
            },
            enable: function() {
              (this.options.disabled = !1),
                this.container.removeClass("rs-disabled"),
                this.options.readOnly || this._readOnly(!1);
            },
            destroy: function() {
              this._getInstance() &&
                (this._destroyControl(),
                this._removeData(),
                this._isInputType && this.control.remove());
            },
          }),
          ($.fn.rsRotate = function(e) {
            var t = this,
              n = "rotate(" + e + "deg)";
            return (
              t.css("-webkit-transform", n),
              t.css("-moz-transform", n),
              t.css("-ms-transform", n),
              t.css("-o-transform", n),
              t.css("transform", n),
              t
            );
          }),
          ($.fn[pluginName].prototype = RoundSlider.prototype);
      })(jQuery, window);
    },
    652: function(e, t, n) {
      "use strict";
      t.a =
        '/*! roundSlider v1.3.3 | (c) 2015-2019, Soundar | MIT license | http://roundsliderui.com/licence.html */\r\n.rs-ie,.rs-edge{-ms-touch-action:none;touch-action:none}.rs-control{position:relative;outline:0 none}.rs-container{position:relative}.rs-control *,.rs-control *:before,.rs-control *:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.rs-animation .rs-transition{-webkit-transition:all .5s linear 0s;-moz-transition:all .5s linear 0s;-o-transition:all .5s linear 0s;transition:all .5s linear 0s}.rs-bar{-webkit-transform-origin:100% 50%;-moz-transform-origin:100% 50%;-ms-transform-origin:100% 50%;-o-transform-origin:100% 50%;transform-origin:100% 50%}.rs-control .rs-split .rs-path,.rs-control .rs-overlay1,.rs-control .rs-overlay2{-webkit-transform-origin:50% 100%;-moz-transform-origin:50% 100%;-ms-transform-origin:50% 100%;-o-transform-origin:50% 100%;transform-origin:50% 100%}.rs-control .rs-overlay{-webkit-transform-origin:100% 100%;-moz-transform-origin:100% 100%;-ms-transform-origin:100% 100%;-o-transform-origin:100% 100%;transform-origin:100% 100%}.rs-rounded .rs-seperator,.rs-split .rs-path{-webkit-background-clip:padding-box;-moz-background-clip:padding;background-clip:padding-box}.rs-control.rs-error{border:1px dotted;text-align:center}.rs-readonly{height:100%;width:100%;top:0;position:absolute;z-index:100}.rs-disabled{opacity:.35}.rs-inner-container{height:100%;width:100%;position:relative;overflow:hidden}.quarter div.rs-block{height:200%;width:200%}.half.top div.rs-block,.half.bottom div.rs-block{height:200%;width:100%}.half.left div.rs-block,.half.right div.rs-block{height:100%;width:200%}.bottom>.rs-inner-container>.rs-block{top:auto;bottom:0}.right .rs-inner-container>.rs-block{right:0}div.rs-block{-webkit-border-radius:1000px;border-radius:1000px}.rs-block{height:100%;width:100%;display:block;position:absolute;top:0;overflow:hidden;z-index:3}.rs-block .rs-inner{-webkit-border-radius:1000px;border-radius:1000px;display:block;height:100%;width:100%;position:relative}.rs-overlay{width:50%}.rs-overlay1,.rs-overlay2{width:100%}.rs-overlay,.rs-overlay1,.rs-overlay2{position:absolute;background-color:#fff;z-index:3;top:0;height:50%}.rs-bar{display:block;position:absolute;height:0;z-index:10}.rs-bar.rs-rounded{z-index:5}.rs-bar .rs-seperator{height:0;display:block;float:left}.rs-bar:not(.rs-rounded) .rs-seperator{border-left:none;border-right:none}.rs-bar.rs-start .rs-seperator{border-top:none}.rs-bar.rs-end .rs-seperator{border-bottom:none}.rs-bar.rs-start.rs-rounded .rs-seperator{border-radius:0 0 1000px 1000px}.rs-bar.rs-end.rs-rounded .rs-seperator{border-radius:1000px 1000px 0 0}.full .rs-bar,.half .rs-bar{width:50%}.half.left .rs-bar,.half.right .rs-bar,.quarter .rs-bar{width:100%}.full .rs-bar,.half.left .rs-bar,.half.right .rs-bar{top:50%}.bottom .rs-bar{top:0}.half.right .rs-bar,.quarter.right .rs-bar{right:100%}.rs-handle.rs-move{cursor:move}.rs-readonly .rs-handle.rs-move{cursor:default}.rs-path{display:block;height:100%;width:100%}.rs-split .rs-path{-webkit-border-radius:1000px 1000px 0 0;border-radius:1000px 1000px 0 0;overflow:hidden;height:50%;position:absolute;top:0;z-index:2}.rs-tooltip{position:absolute;cursor:default;border:1px solid transparent;z-index:10}.full .rs-tooltip{top:50%;left:50%}.bottom .rs-tooltip{top:0}.top .rs-tooltip{bottom:0}.right .rs-tooltip{left:0}.left .rs-tooltip{right:0}.half.top .rs-tooltip,.half.bottom .rs-tooltip{left:50%}.half.left .rs-tooltip,.half.right .rs-tooltip{top:50%}.rs-tooltip .rs-input{outline:0 none;border:none;background:transparent}.rs-tooltip-text{font-family:verdana;font-size:13px;border-radius:7px;text-align:center}.rs-tooltip.edit,.rs-tooltip .rs-input{padding:5px 8px}.rs-tooltip.hover,.rs-tooltip.edit:hover{border:1px solid #aaa;cursor:pointer}.rs-readonly .rs-tooltip.edit:hover{border-color:transparent;cursor:default}.rs-handle{border-radius:1000px;outline:0 none;float:left}.rs-handle.rs-handle-square{border-radius:0}.rs-handle-dot{border:1px solid #aaa;padding:6px}.rs-handle-dot:after{display:block;content:"";border:1px solid #aaa;height:100%;width:100%;border-radius:1000px}.rs-seperator{border:1px solid #aaa}.rs-border{border:1px solid #aaa}.rs-path-color{background-color:#fff}.rs-range-color{background-color:#54bbe0}.rs-bg-color{background-color:#fff}.rs-handle{background-color:#838383}.rs-handle-dot{background-color:#fff}.rs-handle-dot:after{background-color:#838383}';
    },
  },
]);
//# sourceMappingURL=chunk.7e9a71fd0865a642b66f.js.map
