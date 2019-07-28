/*! For license information please see chunk.d01a18f6f3b3c80c4850.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    223: function(e, t, n) {
      "use strict";
      var r = n(329),
        i = [
          "kind",
          "resolve",
          "construct",
          "instanceOf",
          "predicate",
          "represent",
          "defaultStyle",
          "styleAliases",
        ],
        o = ["scalar", "sequence", "mapping"];
      e.exports = function(e, t) {
        var n, s;
        if (
          ((t = t || {}),
          Object.keys(t).forEach(function(t) {
            if (-1 === i.indexOf(t))
              throw new r(
                'Unknown option "' +
                  t +
                  '" is met in definition of "' +
                  e +
                  '" YAML type.'
              );
          }),
          (this.tag = e),
          (this.kind = t.kind || null),
          (this.resolve =
            t.resolve ||
            function() {
              return !0;
            }),
          (this.construct =
            t.construct ||
            function(e) {
              return e;
            }),
          (this.instanceOf = t.instanceOf || null),
          (this.predicate = t.predicate || null),
          (this.represent = t.represent || null),
          (this.defaultStyle = t.defaultStyle || null),
          (this.styleAliases = ((n = t.styleAliases || null),
          (s = {}),
          null !== n &&
            Object.keys(n).forEach(function(e) {
              n[e].forEach(function(t) {
                s[String(t)] = e;
              });
            }),
          s)),
          -1 === o.indexOf(this.kind))
        )
          throw new r(
            'Unknown kind "' +
              this.kind +
              '" is specified for "' +
              e +
              '" YAML type.'
          );
      };
    },
    302: function(e, t, n) {
      "use strict";
      function r(e) {
        return null == e;
      }
      (e.exports.isNothing = r),
        (e.exports.isObject = function(e) {
          return "object" == typeof e && null !== e;
        }),
        (e.exports.toArray = function(e) {
          return Array.isArray(e) ? e : r(e) ? [] : [e];
        }),
        (e.exports.repeat = function(e, t) {
          var n,
            r = "";
          for (n = 0; n < t; n += 1) r += e;
          return r;
        }),
        (e.exports.isNegativeZero = function(e) {
          return 0 === e && Number.NEGATIVE_INFINITY === 1 / e;
        }),
        (e.exports.extend = function(e, t) {
          var n, r, i, o;
          if (t)
            for (n = 0, r = (o = Object.keys(t)).length; n < r; n += 1)
              e[(i = o[n])] = t[i];
          return e;
        });
    },
    303: function(e, t, n) {
      "use strict";
      var r = n(302),
        i = n(329),
        o = n(223);
      function s(e, t, n) {
        var r = [];
        return (
          e.include.forEach(function(e) {
            n = s(e, t, n);
          }),
          e[t].forEach(function(e) {
            n.forEach(function(t, n) {
              t.tag === e.tag && t.kind === e.kind && r.push(n);
            }),
              n.push(e);
          }),
          n.filter(function(e, t) {
            return -1 === r.indexOf(t);
          })
        );
      }
      function a(e) {
        (this.include = e.include || []),
          (this.implicit = e.implicit || []),
          (this.explicit = e.explicit || []),
          this.implicit.forEach(function(e) {
            if (e.loadKind && "scalar" !== e.loadKind)
              throw new i(
                "There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported."
              );
          }),
          (this.compiledImplicit = s(this, "implicit", [])),
          (this.compiledExplicit = s(this, "explicit", [])),
          (this.compiledTypeMap = (function() {
            var e,
              t,
              n = { scalar: {}, sequence: {}, mapping: {}, fallback: {} };
            function r(e) {
              n[e.kind][e.tag] = n.fallback[e.tag] = e;
            }
            for (e = 0, t = arguments.length; e < t; e += 1)
              arguments[e].forEach(r);
            return n;
          })(this.compiledImplicit, this.compiledExplicit));
      }
      (a.DEFAULT = null),
        (a.create = function() {
          var e, t;
          switch (arguments.length) {
            case 1:
              (e = a.DEFAULT), (t = arguments[0]);
              break;
            case 2:
              (e = arguments[0]), (t = arguments[1]);
              break;
            default:
              throw new i(
                "Wrong number of arguments for Schema.create function"
              );
          }
          if (
            ((e = r.toArray(e)),
            (t = r.toArray(t)),
            !e.every(function(e) {
              return e instanceof a;
            }))
          )
            throw new i(
              "Specified list of super schemas (or a single Schema object) contains a non-Schema object."
            );
          if (
            !t.every(function(e) {
              return e instanceof o;
            })
          )
            throw new i(
              "Specified list of YAML types (or a single Type object) contains a non-Type object."
            );
          return new a({ include: e, explicit: t });
        }),
        (e.exports = a);
    },
    307: function(e, t) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    329: function(e, t, n) {
      "use strict";
      function r(e, t) {
        Error.call(this),
          (this.name = "YAMLException"),
          (this.reason = e),
          (this.mark = t),
          (this.message =
            (this.reason || "(unknown reason)") +
            (this.mark ? " " + this.mark.toString() : "")),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack || "");
      }
      (r.prototype = Object.create(Error.prototype)),
        (r.prototype.constructor = r),
        (r.prototype.toString = function(e) {
          var t = this.name + ": ";
          return (
            (t += this.reason || "(unknown reason)"),
            !e && this.mark && (t += " " + this.mark.toString()),
            t
          );
        }),
        (e.exports = r);
    },
    330: function(e, t, n) {
      "use strict";
      var r = n(303);
      e.exports = new r({
        include: [n(452)],
        implicit: [n(633), n(634)],
        explicit: [n(635), n(640), n(641), n(642)],
      });
    },
    352: function(e, t, n) {
      "use strict";
      var r = n(303);
      e.exports = r.DEFAULT = new r({
        include: [n(330)],
        explicit: [n(643), n(644), n(645)],
      });
    },
    401: function(e, t, n) {
      "use strict";
      var r = n(303);
      e.exports = new r({ explicit: [n(626), n(627), n(628)] });
    },
    403: function(e, t, n) {
      e.exports = (function() {
        "use strict";
        var e = navigator.userAgent,
          t = navigator.platform,
          n = /gecko\/\d/i.test(e),
          r = /MSIE \d/.test(e),
          i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
          o = /Edge\/(\d+)/.exec(e),
          s = r || i || o,
          a = s && (r ? document.documentMode || 6 : +(o || i)[1]),
          u = !o && /WebKit\//.test(e),
          l = u && /Qt\/\d+\.\d+/.test(e),
          c = !o && /Chrome\//.test(e),
          h = /Opera\//.test(e),
          p = /Apple Computer/.test(navigator.vendor),
          f = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
          d = /PhantomJS/.test(e),
          m = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
          g = /Android/.test(e),
          v =
            m ||
            g ||
            /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
          y = m || /Mac/.test(t),
          x = /\bCrOS\b/.test(e),
          D = /win/i.test(t),
          C = h && e.match(/Version\/(\d*\.\d*)/);
        C && (C = Number(C[1])), C && C >= 15 && ((h = !1), (u = !0));
        var w = y && (l || (h && (null == C || C < 12.11))),
          b = n || (s && a >= 9);
        function S(e) {
          return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
        }
        var A,
          E = function(e, t) {
            var n = e.className,
              r = S(t).exec(n);
            if (r) {
              var i = n.slice(r.index + r[0].length);
              e.className = n.slice(0, r.index) + (i ? r[1] + i : "");
            }
          };
        function k(e) {
          for (var t = e.childNodes.length; t > 0; --t)
            e.removeChild(e.firstChild);
          return e;
        }
        function F(e, t) {
          return k(e).appendChild(t);
        }
        function T(e, t, n, r) {
          var i = document.createElement(e);
          if (
            (n && (i.className = n),
            r && (i.style.cssText = r),
            "string" == typeof t)
          )
            i.appendChild(document.createTextNode(t));
          else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
          return i;
        }
        function M(e, t, n, r) {
          var i = T(e, t, n, r);
          return i.setAttribute("role", "presentation"), i;
        }
        function B(e, t) {
          if ((3 == t.nodeType && (t = t.parentNode), e.contains))
            return e.contains(t);
          do {
            if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
          } while ((t = t.parentNode));
        }
        function L() {
          var e;
          try {
            e = document.activeElement;
          } catch (Dt) {
            e = document.body || null;
          }
          for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
            e = e.shadowRoot.activeElement;
          return e;
        }
        function N(e, t) {
          var n = e.className;
          S(t).test(n) || (e.className += (n ? " " : "") + t);
        }
        function I(e, t) {
          for (var n = e.split(" "), r = 0; r < n.length; r++)
            n[r] && !S(n[r]).test(t) && (t += " " + n[r]);
          return t;
        }
        A = document.createRange
          ? function(e, t, n, r) {
              var i = document.createRange();
              return i.setEnd(r || e, n), i.setStart(e, t), i;
            }
          : function(e, t, n) {
              var r = document.body.createTextRange();
              try {
                r.moveToElementText(e.parentNode);
              } catch (Dt) {
                return r;
              }
              return (
                r.collapse(!0),
                r.moveEnd("character", n),
                r.moveStart("character", t),
                r
              );
            };
        var P = function(e) {
          e.select();
        };
        function O(e) {
          var t = Array.prototype.slice.call(arguments, 1);
          return function() {
            return e.apply(null, t);
          };
        }
        function R(e, t, n) {
          for (var r in (t || (t = {}), e))
            !e.hasOwnProperty(r) ||
              (!1 === n && t.hasOwnProperty(r)) ||
              (t[r] = e[r]);
          return t;
        }
        function z(e, t, n, r, i) {
          null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
          for (var o = r || 0, s = i || 0; ; ) {
            var a = e.indexOf("\t", o);
            if (a < 0 || a >= t) return s + (t - o);
            (s += a - o), (s += n - (s % n)), (o = a + 1);
          }
        }
        m
          ? (P = function(e) {
              (e.selectionStart = 0), (e.selectionEnd = e.value.length);
            })
          : s &&
            (P = function(e) {
              try {
                e.select();
              } catch (t) {}
            });
        var U = function() {
          this.id = null;
        };
        function W(e, t) {
          for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
          return -1;
        }
        U.prototype.set = function(e, t) {
          clearTimeout(this.id), (this.id = setTimeout(t, e));
        };
        var H = 30,
          X = {
            toString: function() {
              return "CodeMirror.Pass";
            },
          },
          J = { scroll: !1 },
          _ = { origin: "*mouse" },
          j = { origin: "+move" };
        function K(e, t, n) {
          for (var r = 0, i = 0; ; ) {
            var o = e.indexOf("\t", r);
            -1 == o && (o = e.length);
            var s = o - r;
            if (o == e.length || i + s >= t) return r + Math.min(s, t - i);
            if (((i += o - r), (r = o + 1), (i += n - (i % n)) >= t)) return r;
          }
        }
        var Y = [""];
        function G(e) {
          for (; Y.length <= e; ) Y.push(V(Y) + " ");
          return Y[e];
        }
        function V(e) {
          return e[e.length - 1];
        }
        function q(e, t) {
          for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
          return n;
        }
        function $() {}
        function Z(e, t) {
          var n;
          return (
            Object.create
              ? (n = Object.create(e))
              : (($.prototype = e), (n = new $())),
            t && R(t, n),
            n
          );
        }
        var Q = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
        function ee(e) {
          return (
            /\w/.test(e) ||
            (e > "" && (e.toUpperCase() != e.toLowerCase() || Q.test(e)))
          );
        }
        function te(e, t) {
          return t
            ? !!(t.source.indexOf("\\w") > -1 && ee(e)) || t.test(e)
            : ee(e);
        }
        function ne(e) {
          for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
          return !0;
        }
        var re = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
        function ie(e) {
          return e.charCodeAt(0) >= 768 && re.test(e);
        }
        function oe(e, t, n) {
          for (; (n < 0 ? t > 0 : t < e.length) && ie(e.charAt(t)); ) t += n;
          return t;
        }
        function se(e, t, n) {
          for (var r = t > n ? -1 : 1; ; ) {
            if (t == n) return t;
            var i = (t + n) / 2,
              o = r < 0 ? Math.ceil(i) : Math.floor(i);
            if (o == t) return e(o) ? t : n;
            e(o) ? (n = o) : (t = o + r);
          }
        }
        function ae(e, t, r) {
          var i = this;
          (this.input = r),
            (i.scrollbarFiller = T("div", null, "CodeMirror-scrollbar-filler")),
            i.scrollbarFiller.setAttribute("cm-not-content", "true"),
            (i.gutterFiller = T("div", null, "CodeMirror-gutter-filler")),
            i.gutterFiller.setAttribute("cm-not-content", "true"),
            (i.lineDiv = M("div", null, "CodeMirror-code")),
            (i.selectionDiv = T(
              "div",
              null,
              null,
              "position: relative; z-index: 1"
            )),
            (i.cursorDiv = T("div", null, "CodeMirror-cursors")),
            (i.measure = T("div", null, "CodeMirror-measure")),
            (i.lineMeasure = T("div", null, "CodeMirror-measure")),
            (i.lineSpace = M(
              "div",
              [
                i.measure,
                i.lineMeasure,
                i.selectionDiv,
                i.cursorDiv,
                i.lineDiv,
              ],
              null,
              "position: relative; outline: none"
            ));
          var o = M("div", [i.lineSpace], "CodeMirror-lines");
          (i.mover = T("div", [o], null, "position: relative")),
            (i.sizer = T("div", [i.mover], "CodeMirror-sizer")),
            (i.sizerWidth = null),
            (i.heightForcer = T(
              "div",
              null,
              null,
              "position: absolute; height: " + H + "px; width: 1px;"
            )),
            (i.gutters = T("div", null, "CodeMirror-gutters")),
            (i.lineGutter = null),
            (i.scroller = T(
              "div",
              [i.sizer, i.heightForcer, i.gutters],
              "CodeMirror-scroll"
            )),
            i.scroller.setAttribute("tabIndex", "-1"),
            (i.wrapper = T(
              "div",
              [i.scrollbarFiller, i.gutterFiller, i.scroller],
              "CodeMirror"
            )),
            s &&
              a < 8 &&
              ((i.gutters.style.zIndex = -1),
              (i.scroller.style.paddingRight = 0)),
            u || (n && v) || (i.scroller.draggable = !0),
            e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)),
            (i.viewFrom = i.viewTo = t.first),
            (i.reportedViewFrom = i.reportedViewTo = t.first),
            (i.view = []),
            (i.renderedView = null),
            (i.externalMeasured = null),
            (i.viewOffset = 0),
            (i.lastWrapHeight = i.lastWrapWidth = 0),
            (i.updateLineNumbers = null),
            (i.nativeBarWidth = i.barHeight = i.barWidth = 0),
            (i.scrollbarsClipped = !1),
            (i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null),
            (i.alignWidgets = !1),
            (i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
            (i.maxLine = null),
            (i.maxLineLength = 0),
            (i.maxLineChanged = !1),
            (i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null),
            (i.shift = !1),
            (i.selForContextMenu = null),
            (i.activeTouch = null),
            r.init(i);
        }
        function ue(e, t) {
          if ((t -= e.first) < 0 || t >= e.size)
            throw new Error(
              "There is no line " + (t + e.first) + " in the document."
            );
          for (var n = e; !n.lines; )
            for (var r = 0; ; ++r) {
              var i = n.children[r],
                o = i.chunkSize();
              if (t < o) {
                n = i;
                break;
              }
              t -= o;
            }
          return n.lines[t];
        }
        function le(e, t, n) {
          var r = [],
            i = t.line;
          return (
            e.iter(t.line, n.line + 1, function(e) {
              var o = e.text;
              i == n.line && (o = o.slice(0, n.ch)),
                i == t.line && (o = o.slice(t.ch)),
                r.push(o),
                ++i;
            }),
            r
          );
        }
        function ce(e, t, n) {
          var r = [];
          return (
            e.iter(t, n, function(e) {
              r.push(e.text);
            }),
            r
          );
        }
        function he(e, t) {
          var n = t - e.height;
          if (n) for (var r = e; r; r = r.parent) r.height += n;
        }
        function pe(e) {
          if (null == e.parent) return null;
          for (
            var t = e.parent, n = W(t.lines, e), r = t.parent;
            r;
            t = r, r = r.parent
          )
            for (var i = 0; r.children[i] != t; ++i)
              n += r.children[i].chunkSize();
          return n + t.first;
        }
        function fe(e, t) {
          var n = e.first;
          e: do {
            for (var r = 0; r < e.children.length; ++r) {
              var i = e.children[r],
                o = i.height;
              if (t < o) {
                e = i;
                continue e;
              }
              (t -= o), (n += i.chunkSize());
            }
            return n;
          } while (!e.lines);
          for (var s = 0; s < e.lines.length; ++s) {
            var a = e.lines[s],
              u = a.height;
            if (t < u) break;
            t -= u;
          }
          return n + s;
        }
        function de(e, t) {
          return t >= e.first && t < e.first + e.size;
        }
        function me(e, t) {
          return String(e.lineNumberFormatter(t + e.firstLineNumber));
        }
        function ge(e, t, n) {
          if ((void 0 === n && (n = null), !(this instanceof ge)))
            return new ge(e, t, n);
          (this.line = e), (this.ch = t), (this.sticky = n);
        }
        function ve(e, t) {
          return e.line - t.line || e.ch - t.ch;
        }
        function ye(e, t) {
          return e.sticky == t.sticky && 0 == ve(e, t);
        }
        function xe(e) {
          return ge(e.line, e.ch);
        }
        function De(e, t) {
          return ve(e, t) < 0 ? t : e;
        }
        function Ce(e, t) {
          return ve(e, t) < 0 ? e : t;
        }
        function we(e, t) {
          return Math.max(e.first, Math.min(t, e.first + e.size - 1));
        }
        function be(e, t) {
          if (t.line < e.first) return ge(e.first, 0);
          var n = e.first + e.size - 1;
          return t.line > n
            ? ge(n, ue(e, n).text.length)
            : (function(e, t) {
                var n = e.ch;
                return null == n || n > t
                  ? ge(e.line, t)
                  : n < 0
                  ? ge(e.line, 0)
                  : e;
              })(t, ue(e, t.line).text.length);
        }
        function Se(e, t) {
          for (var n = [], r = 0; r < t.length; r++) n[r] = be(e, t[r]);
          return n;
        }
        var Ae = !1,
          Ee = !1;
        function ke(e, t, n) {
          (this.marker = e), (this.from = t), (this.to = n);
        }
        function Fe(e, t) {
          if (e)
            for (var n = 0; n < e.length; ++n) {
              var r = e[n];
              if (r.marker == t) return r;
            }
        }
        function Te(e, t) {
          for (var n, r = 0; r < e.length; ++r)
            e[r] != t && (n || (n = [])).push(e[r]);
          return n;
        }
        function Me(e, t) {
          if (t.full) return null;
          var n = de(e, t.from.line) && ue(e, t.from.line).markedSpans,
            r = de(e, t.to.line) && ue(e, t.to.line).markedSpans;
          if (!n && !r) return null;
          var i = t.from.ch,
            o = t.to.ch,
            s = 0 == ve(t.from, t.to),
            a = (function(e, t, n) {
              var r;
              if (e)
                for (var i = 0; i < e.length; ++i) {
                  var o = e[i],
                    s = o.marker,
                    a =
                      null == o.from ||
                      (s.inclusiveLeft ? o.from <= t : o.from < t);
                  if (
                    a ||
                    (o.from == t &&
                      "bookmark" == s.type &&
                      (!n || !o.marker.insertLeft))
                  ) {
                    var u =
                      null == o.to || (s.inclusiveRight ? o.to >= t : o.to > t);
                    (r || (r = [])).push(new ke(s, o.from, u ? null : o.to));
                  }
                }
              return r;
            })(n, i, s),
            u = (function(e, t, n) {
              var r;
              if (e)
                for (var i = 0; i < e.length; ++i) {
                  var o = e[i],
                    s = o.marker,
                    a =
                      null == o.to || (s.inclusiveRight ? o.to >= t : o.to > t);
                  if (
                    a ||
                    (o.from == t &&
                      "bookmark" == s.type &&
                      (!n || o.marker.insertLeft))
                  ) {
                    var u =
                      null == o.from ||
                      (s.inclusiveLeft ? o.from <= t : o.from < t);
                    (r || (r = [])).push(
                      new ke(
                        s,
                        u ? null : o.from - t,
                        null == o.to ? null : o.to - t
                      )
                    );
                  }
                }
              return r;
            })(r, o, s),
            l = 1 == t.text.length,
            c = V(t.text).length + (l ? i : 0);
          if (a)
            for (var h = 0; h < a.length; ++h) {
              var p = a[h];
              if (null == p.to) {
                var f = Fe(u, p.marker);
                f ? l && (p.to = null == f.to ? null : f.to + c) : (p.to = i);
              }
            }
          if (u)
            for (var d = 0; d < u.length; ++d) {
              var m = u[d];
              if ((null != m.to && (m.to += c), null == m.from)) {
                var g = Fe(a, m.marker);
                g || ((m.from = c), l && (a || (a = [])).push(m));
              } else (m.from += c), l && (a || (a = [])).push(m);
            }
          a && (a = Be(a)), u && u != a && (u = Be(u));
          var v = [a];
          if (!l) {
            var y,
              x = t.text.length - 2;
            if (x > 0 && a)
              for (var D = 0; D < a.length; ++D)
                null == a[D].to &&
                  (y || (y = [])).push(new ke(a[D].marker, null, null));
            for (var C = 0; C < x; ++C) v.push(y);
            v.push(u);
          }
          return v;
        }
        function Be(e) {
          for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            null != n.from &&
              n.from == n.to &&
              !1 !== n.marker.clearWhenEmpty &&
              e.splice(t--, 1);
          }
          return e.length ? e : null;
        }
        function Le(e) {
          var t = e.markedSpans;
          if (t) {
            for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
            e.markedSpans = null;
          }
        }
        function Ne(e, t) {
          if (t) {
            for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
            e.markedSpans = t;
          }
        }
        function Ie(e) {
          return e.inclusiveLeft ? -1 : 0;
        }
        function Pe(e) {
          return e.inclusiveRight ? 1 : 0;
        }
        function Oe(e, t) {
          var n = e.lines.length - t.lines.length;
          if (0 != n) return n;
          var r = e.find(),
            i = t.find(),
            o = ve(r.from, i.from) || Ie(e) - Ie(t);
          if (o) return -o;
          var s = ve(r.to, i.to) || Pe(e) - Pe(t);
          return s || t.id - e.id;
        }
        function Re(e, t) {
          var n,
            r = Ee && e.markedSpans;
          if (r)
            for (var i = void 0, o = 0; o < r.length; ++o)
              (i = r[o]).marker.collapsed &&
                null == (t ? i.from : i.to) &&
                (!n || Oe(n, i.marker) < 0) &&
                (n = i.marker);
          return n;
        }
        function ze(e) {
          return Re(e, !0);
        }
        function Ue(e) {
          return Re(e, !1);
        }
        function We(e, t) {
          var n,
            r = Ee && e.markedSpans;
          if (r)
            for (var i = 0; i < r.length; ++i) {
              var o = r[i];
              o.marker.collapsed &&
                (null == o.from || o.from < t) &&
                (null == o.to || o.to > t) &&
                (!n || Oe(n, o.marker) < 0) &&
                (n = o.marker);
            }
          return n;
        }
        function He(e, t, n, r, i) {
          var o = ue(e, t),
            s = Ee && o.markedSpans;
          if (s)
            for (var a = 0; a < s.length; ++a) {
              var u = s[a];
              if (u.marker.collapsed) {
                var l = u.marker.find(0),
                  c = ve(l.from, n) || Ie(u.marker) - Ie(i),
                  h = ve(l.to, r) || Pe(u.marker) - Pe(i);
                if (
                  !((c >= 0 && h <= 0) || (c <= 0 && h >= 0)) &&
                  ((c <= 0 &&
                    (u.marker.inclusiveRight && i.inclusiveLeft
                      ? ve(l.to, n) >= 0
                      : ve(l.to, n) > 0)) ||
                    (c >= 0 &&
                      (u.marker.inclusiveRight && i.inclusiveLeft
                        ? ve(l.from, r) <= 0
                        : ve(l.from, r) < 0)))
                )
                  return !0;
              }
            }
        }
        function Xe(e) {
          for (var t; (t = ze(e)); ) e = t.find(-1, !0).line;
          return e;
        }
        function Je(e, t) {
          var n = ue(e, t),
            r = Xe(n);
          return n == r ? t : pe(r);
        }
        function _e(e, t) {
          if (t > e.lastLine()) return t;
          var n,
            r = ue(e, t);
          if (!je(e, r)) return t;
          for (; (n = Ue(r)); ) r = n.find(1, !0).line;
          return pe(r) + 1;
        }
        function je(e, t) {
          var n = Ee && t.markedSpans;
          if (n)
            for (var r = void 0, i = 0; i < n.length; ++i)
              if ((r = n[i]).marker.collapsed) {
                if (null == r.from) return !0;
                if (
                  !r.marker.widgetNode &&
                  0 == r.from &&
                  r.marker.inclusiveLeft &&
                  Ke(e, t, r)
                )
                  return !0;
              }
        }
        function Ke(e, t, n) {
          if (null == n.to) {
            var r = n.marker.find(1, !0);
            return Ke(e, r.line, Fe(r.line.markedSpans, n.marker));
          }
          if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
          for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
            if (
              (i = t.markedSpans[o]).marker.collapsed &&
              !i.marker.widgetNode &&
              i.from == n.to &&
              (null == i.to || i.to != n.from) &&
              (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
              Ke(e, t, i)
            )
              return !0;
        }
        function Ye(e) {
          e = Xe(e);
          for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
            var i = n.lines[r];
            if (i == e) break;
            t += i.height;
          }
          for (var o = n.parent; o; o = (n = o).parent)
            for (var s = 0; s < o.children.length; ++s) {
              var a = o.children[s];
              if (a == n) break;
              t += a.height;
            }
          return t;
        }
        function Ge(e) {
          if (0 == e.height) return 0;
          for (var t, n = e.text.length, r = e; (t = ze(r)); ) {
            var i = t.find(0, !0);
            (r = i.from.line), (n += i.from.ch - i.to.ch);
          }
          for (r = e; (t = Ue(r)); ) {
            var o = t.find(0, !0);
            (n -= r.text.length - o.from.ch),
              (r = o.to.line),
              (n += r.text.length - o.to.ch);
          }
          return n;
        }
        function Ve(e) {
          var t = e.display,
            n = e.doc;
          (t.maxLine = ue(n, n.first)),
            (t.maxLineLength = Ge(t.maxLine)),
            (t.maxLineChanged = !0),
            n.iter(function(e) {
              var n = Ge(e);
              n > t.maxLineLength && ((t.maxLineLength = n), (t.maxLine = e));
            });
        }
        var qe = null;
        function $e(e, t, n) {
          var r;
          qe = null;
          for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t) return i;
            o.to == t && (o.from != o.to && "before" == n ? (r = i) : (qe = i)),
              o.from == t &&
                (o.from != o.to && "before" != n ? (r = i) : (qe = i));
          }
          return null != r ? r : qe;
        }
        var Ze = (function() {
          var e =
              "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
            t =
              "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
          var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
            r = /[stwN]/,
            i = /[LRr]/,
            o = /[Lb1n]/,
            s = /[1n]/;
          function a(e, t, n) {
            (this.level = e), (this.from = t), (this.to = n);
          }
          return function(u, l) {
            var c,
              h = "ltr" == l ? "L" : "R";
            if (0 == u.length || ("ltr" == l && !n.test(u))) return !1;
            for (var p = u.length, f = [], d = 0; d < p; ++d)
              f.push(
                (c = u.charCodeAt(d)) <= 247
                  ? e.charAt(c)
                  : 1424 <= c && c <= 1524
                  ? "R"
                  : 1536 <= c && c <= 1785
                  ? t.charAt(c - 1536)
                  : 1774 <= c && c <= 2220
                  ? "r"
                  : 8192 <= c && c <= 8203
                  ? "w"
                  : 8204 == c
                  ? "b"
                  : "L"
              );
            for (var m = 0, g = h; m < p; ++m) {
              var v = f[m];
              "m" == v ? (f[m] = g) : (g = v);
            }
            for (var y = 0, x = h; y < p; ++y) {
              var D = f[y];
              "1" == D && "r" == x
                ? (f[y] = "n")
                : i.test(D) && ((x = D), "r" == D && (f[y] = "R"));
            }
            for (var C = 1, w = f[0]; C < p - 1; ++C) {
              var b = f[C];
              "+" == b && "1" == w && "1" == f[C + 1]
                ? (f[C] = "1")
                : "," != b ||
                  w != f[C + 1] ||
                  ("1" != w && "n" != w) ||
                  (f[C] = w),
                (w = b);
            }
            for (var S = 0; S < p; ++S) {
              var A = f[S];
              if ("," == A) f[S] = "N";
              else if ("%" == A) {
                var E = void 0;
                for (E = S + 1; E < p && "%" == f[E]; ++E);
                for (
                  var k =
                      (S && "!" == f[S - 1]) || (E < p && "1" == f[E])
                        ? "1"
                        : "N",
                    F = S;
                  F < E;
                  ++F
                )
                  f[F] = k;
                S = E - 1;
              }
            }
            for (var T = 0, M = h; T < p; ++T) {
              var B = f[T];
              "L" == M && "1" == B ? (f[T] = "L") : i.test(B) && (M = B);
            }
            for (var L = 0; L < p; ++L)
              if (r.test(f[L])) {
                var N = void 0;
                for (N = L + 1; N < p && r.test(f[N]); ++N);
                for (
                  var I = "L" == (L ? f[L - 1] : h),
                    P = "L" == (N < p ? f[N] : h),
                    O = I == P ? (I ? "L" : "R") : h,
                    R = L;
                  R < N;
                  ++R
                )
                  f[R] = O;
                L = N - 1;
              }
            for (var z, U = [], W = 0; W < p; )
              if (o.test(f[W])) {
                var H = W;
                for (++W; W < p && o.test(f[W]); ++W);
                U.push(new a(0, H, W));
              } else {
                var X = W,
                  J = U.length;
                for (++W; W < p && "L" != f[W]; ++W);
                for (var _ = X; _ < W; )
                  if (s.test(f[_])) {
                    X < _ && U.splice(J, 0, new a(1, X, _));
                    var j = _;
                    for (++_; _ < W && s.test(f[_]); ++_);
                    U.splice(J, 0, new a(2, j, _)), (X = _);
                  } else ++_;
                X < W && U.splice(J, 0, new a(1, X, W));
              }
            return (
              "ltr" == l &&
                (1 == U[0].level &&
                  (z = u.match(/^\s+/)) &&
                  ((U[0].from = z[0].length),
                  U.unshift(new a(0, 0, z[0].length))),
                1 == V(U).level &&
                  (z = u.match(/\s+$/)) &&
                  ((V(U).to -= z[0].length),
                  U.push(new a(0, p - z[0].length, p)))),
              "rtl" == l ? U.reverse() : U
            );
          };
        })();
        function Qe(e, t) {
          var n = e.order;
          return null == n && (n = e.order = Ze(e.text, t)), n;
        }
        var et = [],
          tt = function(e, t, n) {
            if (e.addEventListener) e.addEventListener(t, n, !1);
            else if (e.attachEvent) e.attachEvent("on" + t, n);
            else {
              var r = e._handlers || (e._handlers = {});
              r[t] = (r[t] || et).concat(n);
            }
          };
        function nt(e, t) {
          return (e._handlers && e._handlers[t]) || et;
        }
        function rt(e, t, n) {
          if (e.removeEventListener) e.removeEventListener(t, n, !1);
          else if (e.detachEvent) e.detachEvent("on" + t, n);
          else {
            var r = e._handlers,
              i = r && r[t];
            if (i) {
              var o = W(i, n);
              o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
            }
          }
        }
        function it(e, t) {
          var n = nt(e, t);
          if (n.length)
            for (
              var r = Array.prototype.slice.call(arguments, 2), i = 0;
              i < n.length;
              ++i
            )
              n[i].apply(null, r);
        }
        function ot(e, t, n) {
          return (
            "string" == typeof t &&
              (t = {
                type: t,
                preventDefault: function() {
                  this.defaultPrevented = !0;
                },
              }),
            it(e, n || t.type, e, t),
            ht(t) || t.codemirrorIgnore
          );
        }
        function st(e) {
          var t = e._handlers && e._handlers.cursorActivity;
          if (t)
            for (
              var n =
                  e.curOp.cursorActivityHandlers ||
                  (e.curOp.cursorActivityHandlers = []),
                r = 0;
              r < t.length;
              ++r
            )
              -1 == W(n, t[r]) && n.push(t[r]);
        }
        function at(e, t) {
          return nt(e, t).length > 0;
        }
        function ut(e) {
          (e.prototype.on = function(e, t) {
            tt(this, e, t);
          }),
            (e.prototype.off = function(e, t) {
              rt(this, e, t);
            });
        }
        function lt(e) {
          e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        }
        function ct(e) {
          e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
        }
        function ht(e) {
          return null != e.defaultPrevented
            ? e.defaultPrevented
            : 0 == e.returnValue;
        }
        function pt(e) {
          lt(e), ct(e);
        }
        function ft(e) {
          return e.target || e.srcElement;
        }
        function dt(e) {
          var t = e.which;
          return (
            null == t &&
              (1 & e.button
                ? (t = 1)
                : 2 & e.button
                ? (t = 3)
                : 4 & e.button && (t = 2)),
            y && e.ctrlKey && 1 == t && (t = 3),
            t
          );
        }
        var mt,
          gt,
          vt = (function() {
            if (s && a < 9) return !1;
            var e = T("div");
            return "draggable" in e || "dragDrop" in e;
          })();
        function yt(e) {
          if (null == mt) {
            var t = T("span", "​");
            F(e, T("span", [t, document.createTextNode("x")])),
              0 != e.firstChild.offsetHeight &&
                (mt =
                  t.offsetWidth <= 1 && t.offsetHeight > 2 && !(s && a < 8));
          }
          var n = mt
            ? T("span", "​")
            : T(
                "span",
                " ",
                null,
                "display: inline-block; width: 1px; margin-right: -1px"
              );
          return n.setAttribute("cm-text", ""), n;
        }
        function xt(e) {
          if (null != gt) return gt;
          var t = F(e, document.createTextNode("AخA")),
            n = A(t, 0, 1).getBoundingClientRect(),
            r = A(t, 1, 2).getBoundingClientRect();
          return (
            k(e), !(!n || n.left == n.right) && (gt = r.right - n.right < 3)
          );
        }
        var Dt,
          Ct =
            3 != "\n\nb".split(/\n/).length
              ? function(e) {
                  for (var t = 0, n = [], r = e.length; t <= r; ) {
                    var i = e.indexOf("\n", t);
                    -1 == i && (i = e.length);
                    var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                      s = o.indexOf("\r");
                    -1 != s
                      ? (n.push(o.slice(0, s)), (t += s + 1))
                      : (n.push(o), (t = i + 1));
                  }
                  return n;
                }
              : function(e) {
                  return e.split(/\r\n?|\n/);
                },
          wt = window.getSelection
            ? function(e) {
                try {
                  return e.selectionStart != e.selectionEnd;
                } catch (Dt) {
                  return !1;
                }
              }
            : function(e) {
                var t;
                try {
                  t = e.ownerDocument.selection.createRange();
                } catch (Dt) {}
                return (
                  !(!t || t.parentElement() != e) &&
                  0 != t.compareEndPoints("StartToEnd", t)
                );
              },
          bt =
            "oncopy" in (Dt = T("div")) ||
            (Dt.setAttribute("oncopy", "return;"),
            "function" == typeof Dt.oncopy),
          St = null,
          At = {},
          Et = {};
        function kt(e) {
          if ("string" == typeof e && Et.hasOwnProperty(e)) e = Et[e];
          else if (
            e &&
            "string" == typeof e.name &&
            Et.hasOwnProperty(e.name)
          ) {
            var t = Et[e.name];
            "string" == typeof t && (t = { name: t }),
              ((e = Z(t, e)).name = t.name);
          } else {
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
              return kt("application/xml");
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
              return kt("application/json");
          }
          return "string" == typeof e ? { name: e } : e || { name: "null" };
        }
        function Ft(e, t) {
          t = kt(t);
          var n = At[t.name];
          if (!n) return Ft(e, "text/plain");
          var r = n(e, t);
          if (Tt.hasOwnProperty(t.name)) {
            var i = Tt[t.name];
            for (var o in i)
              i.hasOwnProperty(o) &&
                (r.hasOwnProperty(o) && (r["_" + o] = r[o]), (r[o] = i[o]));
          }
          if (
            ((r.name = t.name),
            t.helperType && (r.helperType = t.helperType),
            t.modeProps)
          )
            for (var s in t.modeProps) r[s] = t.modeProps[s];
          return r;
        }
        var Tt = {};
        function Mt(e, t) {
          var n = Tt.hasOwnProperty(e) ? Tt[e] : (Tt[e] = {});
          R(t, n);
        }
        function Bt(e, t) {
          if (!0 === t) return t;
          if (e.copyState) return e.copyState(t);
          var n = {};
          for (var r in t) {
            var i = t[r];
            i instanceof Array && (i = i.concat([])), (n[r] = i);
          }
          return n;
        }
        function Lt(e, t) {
          for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; )
            (t = n.state), (e = n.mode);
          return n || { mode: e, state: t };
        }
        function Nt(e, t, n) {
          return !e.startState || e.startState(t, n);
        }
        var It = function(e, t, n) {
          (this.pos = this.start = 0),
            (this.string = e),
            (this.tabSize = t || 8),
            (this.lastColumnPos = this.lastColumnValue = 0),
            (this.lineStart = 0),
            (this.lineOracle = n);
        };
        (It.prototype.eol = function() {
          return this.pos >= this.string.length;
        }),
          (It.prototype.sol = function() {
            return this.pos == this.lineStart;
          }),
          (It.prototype.peek = function() {
            return this.string.charAt(this.pos) || void 0;
          }),
          (It.prototype.next = function() {
            if (this.pos < this.string.length)
              return this.string.charAt(this.pos++);
          }),
          (It.prototype.eat = function(e) {
            var t = this.string.charAt(this.pos);
            if (
              "string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))
            )
              return ++this.pos, t;
          }),
          (It.prototype.eatWhile = function(e) {
            for (var t = this.pos; this.eat(e); );
            return this.pos > t;
          }),
          (It.prototype.eatSpace = function() {
            for (
              var e = this.pos;
              /[\s\u00a0]/.test(this.string.charAt(this.pos));

            )
              ++this.pos;
            return this.pos > e;
          }),
          (It.prototype.skipToEnd = function() {
            this.pos = this.string.length;
          }),
          (It.prototype.skipTo = function(e) {
            var t = this.string.indexOf(e, this.pos);
            if (t > -1) return (this.pos = t), !0;
          }),
          (It.prototype.backUp = function(e) {
            this.pos -= e;
          }),
          (It.prototype.column = function() {
            return (
              this.lastColumnPos < this.start &&
                ((this.lastColumnValue = z(
                  this.string,
                  this.start,
                  this.tabSize,
                  this.lastColumnPos,
                  this.lastColumnValue
                )),
                (this.lastColumnPos = this.start)),
              this.lastColumnValue -
                (this.lineStart
                  ? z(this.string, this.lineStart, this.tabSize)
                  : 0)
            );
          }),
          (It.prototype.indentation = function() {
            return (
              z(this.string, null, this.tabSize) -
              (this.lineStart
                ? z(this.string, this.lineStart, this.tabSize)
                : 0)
            );
          }),
          (It.prototype.match = function(e, t, n) {
            if ("string" != typeof e) {
              var r = this.string.slice(this.pos).match(e);
              return r && r.index > 0
                ? null
                : (r && !1 !== t && (this.pos += r[0].length), r);
            }
            var i = function(e) {
                return n ? e.toLowerCase() : e;
              },
              o = this.string.substr(this.pos, e.length);
            if (i(o) == i(e)) return !1 !== t && (this.pos += e.length), !0;
          }),
          (It.prototype.current = function() {
            return this.string.slice(this.start, this.pos);
          }),
          (It.prototype.hideFirstChars = function(e, t) {
            this.lineStart += e;
            try {
              return t();
            } finally {
              this.lineStart -= e;
            }
          }),
          (It.prototype.lookAhead = function(e) {
            var t = this.lineOracle;
            return t && t.lookAhead(e);
          }),
          (It.prototype.baseToken = function() {
            var e = this.lineOracle;
            return e && e.baseToken(this.pos);
          });
        var Pt = function(e, t) {
            (this.state = e), (this.lookAhead = t);
          },
          Ot = function(e, t, n, r) {
            (this.state = t),
              (this.doc = e),
              (this.line = n),
              (this.maxLookAhead = r || 0),
              (this.baseTokens = null),
              (this.baseTokenPos = 1);
          };
        function Rt(e, t, n, r) {
          var i = [e.state.modeGen],
            o = {};
          Kt(
            e,
            t.text,
            e.doc.mode,
            n,
            function(e, t) {
              return i.push(e, t);
            },
            o,
            r
          );
          for (
            var s = n.state,
              a = function(r) {
                n.baseTokens = i;
                var a = e.state.overlays[r],
                  u = 1,
                  l = 0;
                (n.state = !0),
                  Kt(
                    e,
                    t.text,
                    a.mode,
                    n,
                    function(e, t) {
                      for (var n = u; l < e; ) {
                        var r = i[u];
                        r > e && i.splice(u, 1, e, i[u + 1], r),
                          (u += 2),
                          (l = Math.min(e, r));
                      }
                      if (t)
                        if (a.opaque)
                          i.splice(n, u - n, e, "overlay " + t), (u = n + 2);
                        else
                          for (; n < u; n += 2) {
                            var o = i[n + 1];
                            i[n + 1] = (o ? o + " " : "") + "overlay " + t;
                          }
                    },
                    o
                  ),
                  (n.state = s),
                  (n.baseTokens = null),
                  (n.baseTokenPos = 1);
              },
              u = 0;
            u < e.state.overlays.length;
            ++u
          )
            a(u);
          return { styles: i, classes: o.bgClass || o.textClass ? o : null };
        }
        function zt(e, t, n) {
          if (!t.styles || t.styles[0] != e.state.modeGen) {
            var r = Ut(e, pe(t)),
              i =
                t.text.length > e.options.maxHighlightLength &&
                Bt(e.doc.mode, r.state),
              o = Rt(e, t, r);
            i && (r.state = i),
              (t.stateAfter = r.save(!i)),
              (t.styles = o.styles),
              o.classes
                ? (t.styleClasses = o.classes)
                : t.styleClasses && (t.styleClasses = null),
              n === e.doc.highlightFrontier &&
                (e.doc.modeFrontier = Math.max(
                  e.doc.modeFrontier,
                  ++e.doc.highlightFrontier
                ));
          }
          return t.styles;
        }
        function Ut(e, t, n) {
          var r = e.doc,
            i = e.display;
          if (!r.mode.startState) return new Ot(r, !0, t);
          var o = (function(e, t, n) {
              for (
                var r,
                  i,
                  o = e.doc,
                  s = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
                  a = t;
                a > s;
                --a
              ) {
                if (a <= o.first) return o.first;
                var u = ue(o, a - 1),
                  l = u.stateAfter;
                if (
                  l &&
                  (!n ||
                    a + (l instanceof Pt ? l.lookAhead : 0) <= o.modeFrontier)
                )
                  return a;
                var c = z(u.text, null, e.options.tabSize);
                (null == i || r > c) && ((i = a - 1), (r = c));
              }
              return i;
            })(e, t, n),
            s = o > r.first && ue(r, o - 1).stateAfter,
            a = s ? Ot.fromSaved(r, s, o) : new Ot(r, Nt(r.mode), o);
          return (
            r.iter(o, t, function(n) {
              Wt(e, n.text, a);
              var r = a.line;
              (n.stateAfter =
                r == t - 1 || r % 5 == 0 || (r >= i.viewFrom && r < i.viewTo)
                  ? a.save()
                  : null),
                a.nextLine();
            }),
            n && (r.modeFrontier = a.line),
            a
          );
        }
        function Wt(e, t, n, r) {
          var i = e.doc.mode,
            o = new It(t, e.options.tabSize, n);
          for (o.start = o.pos = r || 0, "" == t && Ht(i, n.state); !o.eol(); )
            Xt(i, o, n.state), (o.start = o.pos);
        }
        function Ht(e, t) {
          if (e.blankLine) return e.blankLine(t);
          if (e.innerMode) {
            var n = Lt(e, t);
            return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
          }
        }
        function Xt(e, t, n, r) {
          for (var i = 0; i < 10; i++) {
            r && (r[0] = Lt(e, n).mode);
            var o = e.token(t, n);
            if (t.pos > t.start) return o;
          }
          throw new Error("Mode " + e.name + " failed to advance stream.");
        }
        (Ot.prototype.lookAhead = function(e) {
          var t = this.doc.getLine(this.line + e);
          return (
            null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
          );
        }),
          (Ot.prototype.baseToken = function(e) {
            if (!this.baseTokens) return null;
            for (; this.baseTokens[this.baseTokenPos] <= e; )
              this.baseTokenPos += 2;
            var t = this.baseTokens[this.baseTokenPos + 1];
            return {
              type: t && t.replace(/( |^)overlay .*/, ""),
              size: this.baseTokens[this.baseTokenPos] - e,
            };
          }),
          (Ot.prototype.nextLine = function() {
            this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
          }),
          (Ot.fromSaved = function(e, t, n) {
            return t instanceof Pt
              ? new Ot(e, Bt(e.mode, t.state), n, t.lookAhead)
              : new Ot(e, Bt(e.mode, t), n);
          }),
          (Ot.prototype.save = function(e) {
            var t = !1 !== e ? Bt(this.doc.mode, this.state) : this.state;
            return this.maxLookAhead > 0 ? new Pt(t, this.maxLookAhead) : t;
          });
        var Jt = function(e, t, n) {
          (this.start = e.start),
            (this.end = e.pos),
            (this.string = e.current()),
            (this.type = t || null),
            (this.state = n);
        };
        function _t(e, t, n, r) {
          var i,
            o = e.doc,
            s = o.mode;
          t = be(o, t);
          var a,
            u = ue(o, t.line),
            l = Ut(e, t.line, n),
            c = new It(u.text, e.options.tabSize, l);
          for (r && (a = []); (r || c.pos < t.ch) && !c.eol(); )
            (c.start = c.pos),
              (i = Xt(s, c, l.state)),
              r && a.push(new Jt(c, i, Bt(o.mode, l.state)));
          return r ? a : new Jt(c, i, l.state);
        }
        function jt(e, t) {
          if (e)
            for (;;) {
              var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
              if (!n) break;
              e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
              var r = n[1] ? "bgClass" : "textClass";
              null == t[r]
                ? (t[r] = n[2])
                : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) ||
                  (t[r] += " " + n[2]);
            }
          return e;
        }
        function Kt(e, t, n, r, i, o, s) {
          var a = n.flattenSpans;
          null == a && (a = e.options.flattenSpans);
          var u,
            l = 0,
            c = null,
            h = new It(t, e.options.tabSize, r),
            p = e.options.addModeClass && [null];
          for ("" == t && jt(Ht(n, r.state), o); !h.eol(); ) {
            if (
              (h.pos > e.options.maxHighlightLength
                ? ((a = !1),
                  s && Wt(e, t, r, h.pos),
                  (h.pos = t.length),
                  (u = null))
                : (u = jt(Xt(n, h, r.state, p), o)),
              p)
            ) {
              var f = p[0].name;
              f && (u = "m-" + (u ? f + " " + u : f));
            }
            if (!a || c != u) {
              for (; l < h.start; ) (l = Math.min(h.start, l + 5e3)), i(l, c);
              c = u;
            }
            h.start = h.pos;
          }
          for (; l < h.pos; ) {
            var d = Math.min(h.pos, l + 5e3);
            i(d, c), (l = d);
          }
        }
        var Yt = function(e, t, n) {
          (this.text = e), Ne(this, t), (this.height = n ? n(this) : 1);
        };
        function Gt(e) {
          (e.parent = null), Le(e);
        }
        (Yt.prototype.lineNo = function() {
          return pe(this);
        }),
          ut(Yt);
        var Vt = {},
          qt = {};
        function $t(e, t) {
          if (!e || /^\s*$/.test(e)) return null;
          var n = t.addModeClass ? qt : Vt;
          return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
        }
        function Zt(e, t) {
          var n = M("span", null, null, u ? "padding-right: .1px" : null),
            r = {
              pre: M("pre", [n], "CodeMirror-line"),
              content: n,
              col: 0,
              pos: 0,
              cm: e,
              trailingSpace: !1,
              splitSpaces: e.getOption("lineWrapping"),
            };
          t.measure = {};
          for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line,
              s = void 0;
            (r.pos = 0),
              (r.addToken = en),
              xt(e.display.measure) &&
                (s = Qe(o, e.doc.direction)) &&
                (r.addToken = tn(r.addToken, s)),
              (r.map = []);
            var a = t != e.display.externalMeasured && pe(o);
            rn(o, r, zt(e, o, a)),
              o.styleClasses &&
                (o.styleClasses.bgClass &&
                  (r.bgClass = I(o.styleClasses.bgClass, r.bgClass || "")),
                o.styleClasses.textClass &&
                  (r.textClass = I(
                    o.styleClasses.textClass,
                    r.textClass || ""
                  ))),
              0 == r.map.length &&
                r.map.push(0, 0, r.content.appendChild(yt(e.display.measure))),
              0 == i
                ? ((t.measure.map = r.map), (t.measure.cache = {}))
                : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                  (t.measure.caches || (t.measure.caches = [])).push({}));
          }
          if (u) {
            var l = r.content.lastChild;
            (/\bcm-tab\b/.test(l.className) ||
              (l.querySelector && l.querySelector(".cm-tab"))) &&
              (r.content.className = "cm-tab-wrap-hack");
          }
          return (
            it(e, "renderLine", e, t.line, r.pre),
            r.pre.className &&
              (r.textClass = I(r.pre.className, r.textClass || "")),
            r
          );
        }
        function Qt(e) {
          var t = T("span", "•", "cm-invalidchar");
          return (
            (t.title = "\\u" + e.charCodeAt(0).toString(16)),
            t.setAttribute("aria-label", t.title),
            t
          );
        }
        function en(e, t, n, r, i, o, u) {
          if (t) {
            var l,
              c = e.splitSpaces
                ? (function(e, t) {
                    if (e.length > 1 && !/  /.test(e)) return e;
                    for (var n = t, r = "", i = 0; i < e.length; i++) {
                      var o = e.charAt(i);
                      " " != o ||
                        !n ||
                        (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) ||
                        (o = " "),
                        (r += o),
                        (n = " " == o);
                    }
                    return r;
                  })(t, e.trailingSpace)
                : t,
              h = e.cm.state.specialChars,
              p = !1;
            if (h.test(t)) {
              l = document.createDocumentFragment();
              for (var f = 0; ; ) {
                h.lastIndex = f;
                var d = h.exec(t),
                  m = d ? d.index - f : t.length - f;
                if (m) {
                  var g = document.createTextNode(c.slice(f, f + m));
                  s && a < 9 ? l.appendChild(T("span", [g])) : l.appendChild(g),
                    e.map.push(e.pos, e.pos + m, g),
                    (e.col += m),
                    (e.pos += m);
                }
                if (!d) break;
                f += m + 1;
                var v = void 0;
                if ("\t" == d[0]) {
                  var y = e.cm.options.tabSize,
                    x = y - (e.col % y);
                  (v = l.appendChild(T("span", G(x), "cm-tab"))).setAttribute(
                    "role",
                    "presentation"
                  ),
                    v.setAttribute("cm-text", "\t"),
                    (e.col += x);
                } else
                  "\r" == d[0] || "\n" == d[0]
                    ? ((v = l.appendChild(
                        T("span", "\r" == d[0] ? "␍" : "␤", "cm-invalidchar")
                      )).setAttribute("cm-text", d[0]),
                      (e.col += 1))
                    : ((v = e.cm.options.specialCharPlaceholder(
                        d[0]
                      )).setAttribute("cm-text", d[0]),
                      s && a < 9
                        ? l.appendChild(T("span", [v]))
                        : l.appendChild(v),
                      (e.col += 1));
                e.map.push(e.pos, e.pos + 1, v), e.pos++;
              }
            } else
              (e.col += t.length),
                (l = document.createTextNode(c)),
                e.map.push(e.pos, e.pos + t.length, l),
                s && a < 9 && (p = !0),
                (e.pos += t.length);
            if (
              ((e.trailingSpace = 32 == c.charCodeAt(t.length - 1)),
              n || r || i || p || o)
            ) {
              var D = n || "";
              r && (D += r), i && (D += i);
              var C = T("span", [l], D, o);
              if (u)
                for (var w in u)
                  u.hasOwnProperty(w) &&
                    "style" != w &&
                    "class" != w &&
                    C.setAttribute(w, u[w]);
              return e.content.appendChild(C);
            }
            e.content.appendChild(l);
          }
        }
        function tn(e, t) {
          return function(n, r, i, o, s, a, u) {
            i = i ? i + " cm-force-border" : "cm-force-border";
            for (var l = n.pos, c = l + r.length; ; ) {
              for (
                var h = void 0, p = 0;
                p < t.length && !((h = t[p]).to > l && h.from <= l);
                p++
              );
              if (h.to >= c) return e(n, r, i, o, s, a, u);
              e(n, r.slice(0, h.to - l), i, o, null, a, u),
                (o = null),
                (r = r.slice(h.to - l)),
                (l = h.to);
            }
          };
        }
        function nn(e, t, n, r) {
          var i = !r && n.widgetNode;
          i && e.map.push(e.pos, e.pos + t, i),
            !r &&
              e.cm.display.input.needsContentAttribute &&
              (i || (i = e.content.appendChild(document.createElement("span"))),
              i.setAttribute("cm-marker", n.id)),
            i &&
              (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
            (e.pos += t),
            (e.trailingSpace = !1);
        }
        function rn(e, t, n) {
          var r = e.markedSpans,
            i = e.text,
            o = 0;
          if (r)
            for (
              var s,
                a,
                u,
                l,
                c,
                h,
                p,
                f = i.length,
                d = 0,
                m = 1,
                g = "",
                v = 0;
              ;

            ) {
              if (v == d) {
                (u = l = c = a = ""), (p = null), (h = null), (v = 1 / 0);
                for (var y = [], x = void 0, D = 0; D < r.length; ++D) {
                  var C = r[D],
                    w = C.marker;
                  if ("bookmark" == w.type && C.from == d && w.widgetNode)
                    y.push(w);
                  else if (
                    C.from <= d &&
                    (null == C.to ||
                      C.to > d ||
                      (w.collapsed && C.to == d && C.from == d))
                  ) {
                    if (
                      (null != C.to &&
                        C.to != d &&
                        v > C.to &&
                        ((v = C.to), (l = "")),
                      w.className && (u += " " + w.className),
                      w.css && (a = (a ? a + ";" : "") + w.css),
                      w.startStyle && C.from == d && (c += " " + w.startStyle),
                      w.endStyle &&
                        C.to == v &&
                        (x || (x = [])).push(w.endStyle, C.to),
                      w.title && ((p || (p = {})).title = w.title),
                      w.attributes)
                    )
                      for (var b in w.attributes)
                        (p || (p = {}))[b] = w.attributes[b];
                    w.collapsed && (!h || Oe(h.marker, w) < 0) && (h = C);
                  } else C.from > d && v > C.from && (v = C.from);
                }
                if (x)
                  for (var S = 0; S < x.length; S += 2)
                    x[S + 1] == v && (l += " " + x[S]);
                if (!h || h.from == d)
                  for (var A = 0; A < y.length; ++A) nn(t, 0, y[A]);
                if (h && (h.from || 0) == d) {
                  if (
                    (nn(
                      t,
                      (null == h.to ? f + 1 : h.to) - d,
                      h.marker,
                      null == h.from
                    ),
                    null == h.to)
                  )
                    return;
                  h.to == d && (h = !1);
                }
              }
              if (d >= f) break;
              for (var E = Math.min(f, v); ; ) {
                if (g) {
                  var k = d + g.length;
                  if (!h) {
                    var F = k > E ? g.slice(0, E - d) : g;
                    t.addToken(
                      t,
                      F,
                      s ? s + u : u,
                      c,
                      d + F.length == v ? l : "",
                      a,
                      p
                    );
                  }
                  if (k >= E) {
                    (g = g.slice(E - d)), (d = E);
                    break;
                  }
                  (d = k), (c = "");
                }
                (g = i.slice(o, (o = n[m++]))), (s = $t(n[m++], t.cm.options));
              }
            }
          else
            for (var T = 1; T < n.length; T += 2)
              t.addToken(t, i.slice(o, (o = n[T])), $t(n[T + 1], t.cm.options));
        }
        function on(e, t, n) {
          (this.line = t),
            (this.rest = (function(e) {
              for (var t, n; (t = Ue(e)); )
                (e = t.find(1, !0).line), (n || (n = [])).push(e);
              return n;
            })(t)),
            (this.size = this.rest ? pe(V(this.rest)) - n + 1 : 1),
            (this.node = this.text = null),
            (this.hidden = je(e, t));
        }
        function sn(e, t, n) {
          for (var r, i = [], o = t; o < n; o = r) {
            var s = new on(e.doc, ue(e.doc, o), o);
            (r = o + s.size), i.push(s);
          }
          return i;
        }
        var an = null,
          un = null;
        function ln(e, t) {
          var n = nt(e, t);
          if (n.length) {
            var r,
              i = Array.prototype.slice.call(arguments, 2);
            an
              ? (r = an.delayedCallbacks)
              : un
              ? (r = un)
              : ((r = un = []), setTimeout(cn, 0));
            for (
              var o = function(e) {
                  r.push(function() {
                    return n[e].apply(null, i);
                  });
                },
                s = 0;
              s < n.length;
              ++s
            )
              o(s);
          }
        }
        function cn() {
          var e = un;
          un = null;
          for (var t = 0; t < e.length; ++t) e[t]();
        }
        function hn(e, t, n, r) {
          for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            "text" == o
              ? dn(e, t)
              : "gutter" == o
              ? gn(e, t, n, r)
              : "class" == o
              ? mn(e, t)
              : "widget" == o && vn(e, t, r);
          }
          t.changes = null;
        }
        function pn(e) {
          return (
            e.node == e.text &&
              ((e.node = T("div", null, null, "position: relative")),
              e.text.parentNode &&
                e.text.parentNode.replaceChild(e.node, e.text),
              e.node.appendChild(e.text),
              s && a < 8 && (e.node.style.zIndex = 2)),
            e.node
          );
        }
        function fn(e, t) {
          var n = e.display.externalMeasured;
          return n && n.line == t.line
            ? ((e.display.externalMeasured = null),
              (t.measure = n.measure),
              n.built)
            : Zt(e, t);
        }
        function dn(e, t) {
          var n = t.text.className,
            r = fn(e, t);
          t.text == t.node && (t.node = r.pre),
            t.text.parentNode.replaceChild(r.pre, t.text),
            (t.text = r.pre),
            r.bgClass != t.bgClass || r.textClass != t.textClass
              ? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), mn(e, t))
              : n && (t.text.className = n);
        }
        function mn(e, t) {
          !(function(e, t) {
            var n = t.bgClass
              ? t.bgClass + " " + (t.line.bgClass || "")
              : t.line.bgClass;
            if ((n && (n += " CodeMirror-linebackground"), t.background))
              n
                ? (t.background.className = n)
                : (t.background.parentNode.removeChild(t.background),
                  (t.background = null));
            else if (n) {
              var r = pn(t);
              (t.background = r.insertBefore(T("div", null, n), r.firstChild)),
                e.display.input.setUneditable(t.background);
            }
          })(e, t),
            t.line.wrapClass
              ? (pn(t).className = t.line.wrapClass)
              : t.node != t.text && (t.node.className = "");
          var n = t.textClass
            ? t.textClass + " " + (t.line.textClass || "")
            : t.line.textClass;
          t.text.className = n || "";
        }
        function gn(e, t, n, r) {
          if (
            (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
            t.gutterBackground &&
              (t.node.removeChild(t.gutterBackground),
              (t.gutterBackground = null)),
            t.line.gutterClass)
          ) {
            var i = pn(t);
            (t.gutterBackground = T(
              "div",
              null,
              "CodeMirror-gutter-background " + t.line.gutterClass,
              "left: " +
                (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                "px; width: " +
                r.gutterTotalWidth +
                "px"
            )),
              e.display.input.setUneditable(t.gutterBackground),
              i.insertBefore(t.gutterBackground, t.text);
          }
          var o = t.line.gutterMarkers;
          if (e.options.lineNumbers || o) {
            var s = pn(t),
              a = (t.gutter = T(
                "div",
                null,
                "CodeMirror-gutter-wrapper",
                "left: " +
                  (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                  "px"
              ));
            if (
              (e.display.input.setUneditable(a),
              s.insertBefore(a, t.text),
              t.line.gutterClass && (a.className += " " + t.line.gutterClass),
              !e.options.lineNumbers ||
                (o && o["CodeMirror-linenumbers"]) ||
                (t.lineNumber = a.appendChild(
                  T(
                    "div",
                    me(e.options, n),
                    "CodeMirror-linenumber CodeMirror-gutter-elt",
                    "left: " +
                      r.gutterLeft["CodeMirror-linenumbers"] +
                      "px; width: " +
                      e.display.lineNumInnerWidth +
                      "px"
                  )
                )),
              o)
            )
              for (var u = 0; u < e.options.gutters.length; ++u) {
                var l = e.options.gutters[u],
                  c = o.hasOwnProperty(l) && o[l];
                c &&
                  a.appendChild(
                    T(
                      "div",
                      [c],
                      "CodeMirror-gutter-elt",
                      "left: " +
                        r.gutterLeft[l] +
                        "px; width: " +
                        r.gutterWidth[l] +
                        "px"
                    )
                  );
              }
          }
        }
        function vn(e, t, n) {
          t.alignable && (t.alignable = null);
          for (var r = t.node.firstChild, i = void 0; r; r = i)
            (i = r.nextSibling),
              "CodeMirror-linewidget" == r.className && t.node.removeChild(r);
          xn(e, t, n);
        }
        function yn(e, t, n, r) {
          var i = fn(e, t);
          return (
            (t.text = t.node = i.pre),
            i.bgClass && (t.bgClass = i.bgClass),
            i.textClass && (t.textClass = i.textClass),
            mn(e, t),
            gn(e, t, n, r),
            xn(e, t, r),
            t.node
          );
        }
        function xn(e, t, n) {
          if ((Dn(e, t.line, t, n, !0), t.rest))
            for (var r = 0; r < t.rest.length; r++) Dn(e, t.rest[r], t, n, !1);
        }
        function Dn(e, t, n, r, i) {
          if (t.widgets)
            for (var o = pn(n), s = 0, a = t.widgets; s < a.length; ++s) {
              var u = a[s],
                l = T("div", [u.node], "CodeMirror-linewidget");
              u.handleMouseEvents || l.setAttribute("cm-ignore-events", "true"),
                Cn(u, l, n, r),
                e.display.input.setUneditable(l),
                i && u.above
                  ? o.insertBefore(l, n.gutter || n.text)
                  : o.appendChild(l),
                ln(u, "redraw");
            }
        }
        function Cn(e, t, n, r) {
          if (e.noHScroll) {
            (n.alignable || (n.alignable = [])).push(t);
            var i = r.wrapperWidth;
            (t.style.left = r.fixedPos + "px"),
              e.coverGutter ||
                ((i -= r.gutterTotalWidth),
                (t.style.paddingLeft = r.gutterTotalWidth + "px")),
              (t.style.width = i + "px");
          }
          e.coverGutter &&
            ((t.style.zIndex = 5),
            (t.style.position = "relative"),
            e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
        }
        function wn(e) {
          if (null != e.height) return e.height;
          var t = e.doc.cm;
          if (!t) return 0;
          if (!B(document.body, e.node)) {
            var n = "position: relative;";
            e.coverGutter &&
              (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
              e.noHScroll &&
                (n += "width: " + t.display.wrapper.clientWidth + "px;"),
              F(t.display.measure, T("div", [e.node], null, n));
          }
          return (e.height = e.node.parentNode.offsetHeight);
        }
        function bn(e, t) {
          for (var n = ft(t); n != e.wrapper; n = n.parentNode)
            if (
              !n ||
              (1 == n.nodeType &&
                "true" == n.getAttribute("cm-ignore-events")) ||
              (n.parentNode == e.sizer && n != e.mover)
            )
              return !0;
        }
        function Sn(e) {
          return e.lineSpace.offsetTop;
        }
        function An(e) {
          return e.mover.offsetHeight - e.lineSpace.offsetHeight;
        }
        function En(e) {
          if (e.cachedPaddingH) return e.cachedPaddingH;
          var t = F(e.measure, T("pre", "x")),
            n = window.getComputedStyle
              ? window.getComputedStyle(t)
              : t.currentStyle,
            r = {
              left: parseInt(n.paddingLeft),
              right: parseInt(n.paddingRight),
            };
          return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
        }
        function kn(e) {
          return H - e.display.nativeBarWidth;
        }
        function Fn(e) {
          return e.display.scroller.clientWidth - kn(e) - e.display.barWidth;
        }
        function Tn(e) {
          return e.display.scroller.clientHeight - kn(e) - e.display.barHeight;
        }
        function Mn(e, t, n) {
          if (e.line == t)
            return { map: e.measure.map, cache: e.measure.cache };
          for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == t)
              return { map: e.measure.maps[r], cache: e.measure.caches[r] };
          for (var i = 0; i < e.rest.length; i++)
            if (pe(e.rest[i]) > n)
              return {
                map: e.measure.maps[i],
                cache: e.measure.caches[i],
                before: !0,
              };
        }
        function Bn(e, t, n, r) {
          return In(e, Nn(e, t), n, r);
        }
        function Ln(e, t) {
          if (t >= e.display.viewFrom && t < e.display.viewTo)
            return e.display.view[lr(e, t)];
          var n = e.display.externalMeasured;
          return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
        }
        function Nn(e, t) {
          var n = pe(t),
            r = Ln(e, n);
          r && !r.text
            ? (r = null)
            : r &&
              r.changes &&
              (hn(e, r, n, ir(e)), (e.curOp.forceUpdate = !0)),
            r ||
              (r = (function(e, t) {
                var n = pe((t = Xe(t))),
                  r = (e.display.externalMeasured = new on(e.doc, t, n));
                r.lineN = n;
                var i = (r.built = Zt(e, r));
                return (r.text = i.pre), F(e.display.lineMeasure, i.pre), r;
              })(e, t));
          var i = Mn(r, t, n);
          return {
            line: t,
            view: r,
            rect: null,
            map: i.map,
            cache: i.cache,
            before: i.before,
            hasHeights: !1,
          };
        }
        function In(e, t, n, r, i) {
          t.before && (n = -1);
          var o,
            u = n + (r || "");
          return (
            t.cache.hasOwnProperty(u)
              ? (o = t.cache[u])
              : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                t.hasHeights ||
                  ((function(e, t, n) {
                    var r = e.options.lineWrapping,
                      i = r && Fn(e);
                    if (!t.measure.heights || (r && t.measure.width != i)) {
                      var o = (t.measure.heights = []);
                      if (r) {
                        t.measure.width = i;
                        for (
                          var s = t.text.firstChild.getClientRects(), a = 0;
                          a < s.length - 1;
                          a++
                        ) {
                          var u = s[a],
                            l = s[a + 1];
                          Math.abs(u.bottom - l.bottom) > 2 &&
                            o.push((u.bottom + l.top) / 2 - n.top);
                        }
                      }
                      o.push(n.bottom - n.top);
                    }
                  })(e, t.view, t.rect),
                  (t.hasHeights = !0)),
                (o = (function(e, t, n, r) {
                  var i,
                    o = Rn(t.map, n, r),
                    u = o.node,
                    l = o.start,
                    c = o.end,
                    h = o.collapse;
                  if (3 == u.nodeType) {
                    for (var p = 0; p < 4; p++) {
                      for (; l && ie(t.line.text.charAt(o.coverStart + l)); )
                        --l;
                      for (
                        ;
                        o.coverStart + c < o.coverEnd &&
                        ie(t.line.text.charAt(o.coverStart + c));

                      )
                        ++c;
                      if (
                        (i =
                          s && a < 9 && 0 == l && c == o.coverEnd - o.coverStart
                            ? u.parentNode.getBoundingClientRect()
                            : zn(A(u, l, c).getClientRects(), r)).left ||
                        i.right ||
                        0 == l
                      )
                        break;
                      (c = l), (l -= 1), (h = "right");
                    }
                    s &&
                      a < 11 &&
                      (i = (function(e, t) {
                        if (
                          !window.screen ||
                          null == screen.logicalXDPI ||
                          screen.logicalXDPI == screen.deviceXDPI ||
                          !(function(e) {
                            if (null != St) return St;
                            var t = F(e, T("span", "x")),
                              n = t.getBoundingClientRect(),
                              r = A(t, 0, 1).getBoundingClientRect();
                            return (St = Math.abs(n.left - r.left) > 1);
                          })(e)
                        )
                          return t;
                        var n = screen.logicalXDPI / screen.deviceXDPI,
                          r = screen.logicalYDPI / screen.deviceYDPI;
                        return {
                          left: t.left * n,
                          right: t.right * n,
                          top: t.top * r,
                          bottom: t.bottom * r,
                        };
                      })(e.display.measure, i));
                  } else {
                    var f;
                    l > 0 && (h = r = "right"),
                      (i =
                        e.options.lineWrapping &&
                        (f = u.getClientRects()).length > 1
                          ? f["right" == r ? f.length - 1 : 0]
                          : u.getBoundingClientRect());
                  }
                  if (s && a < 9 && !l && (!i || (!i.left && !i.right))) {
                    var d = u.parentNode.getClientRects()[0];
                    i = d
                      ? {
                          left: d.left,
                          right: d.left + rr(e.display),
                          top: d.top,
                          bottom: d.bottom,
                        }
                      : On;
                  }
                  for (
                    var m = i.top - t.rect.top,
                      g = i.bottom - t.rect.top,
                      v = (m + g) / 2,
                      y = t.view.measure.heights,
                      x = 0;
                    x < y.length - 1 && !(v < y[x]);
                    x++
                  );
                  var D = x ? y[x - 1] : 0,
                    C = y[x],
                    w = {
                      left: ("right" == h ? i.right : i.left) - t.rect.left,
                      right: ("left" == h ? i.left : i.right) - t.rect.left,
                      top: D,
                      bottom: C,
                    };
                  return (
                    i.left || i.right || (w.bogus = !0),
                    e.options.singleCursorHeightPerLine ||
                      ((w.rtop = m), (w.rbottom = g)),
                    w
                  );
                })(e, t, n, r)).bogus || (t.cache[u] = o)),
            {
              left: o.left,
              right: o.right,
              top: i ? o.rtop : o.top,
              bottom: i ? o.rbottom : o.bottom,
            }
          );
        }
        var Pn,
          On = { left: 0, right: 0, top: 0, bottom: 0 };
        function Rn(e, t, n) {
          for (var r, i, o, s, a, u, l = 0; l < e.length; l += 3)
            if (
              ((a = e[l]),
              (u = e[l + 1]),
              t < a
                ? ((i = 0), (o = 1), (s = "left"))
                : t < u
                ? (o = 1 + (i = t - a))
                : (l == e.length - 3 || (t == u && e[l + 3] > t)) &&
                  ((i = (o = u - a) - 1), t >= u && (s = "right")),
              null != i)
            ) {
              if (
                ((r = e[l + 2]),
                a == u && n == (r.insertLeft ? "left" : "right") && (s = n),
                "left" == n && 0 == i)
              )
                for (; l && e[l - 2] == e[l - 3] && e[l - 1].insertLeft; )
                  (r = e[2 + (l -= 3)]), (s = "left");
              if ("right" == n && i == u - a)
                for (
                  ;
                  l < e.length - 3 &&
                  e[l + 3] == e[l + 4] &&
                  !e[l + 5].insertLeft;

                )
                  (r = e[(l += 3) + 2]), (s = "right");
              break;
            }
          return {
            node: r,
            start: i,
            end: o,
            collapse: s,
            coverStart: a,
            coverEnd: u,
          };
        }
        function zn(e, t) {
          var n = On;
          if ("left" == t)
            for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
          else
            for (
              var i = e.length - 1;
              i >= 0 && (n = e[i]).left == n.right;
              i--
            );
          return n;
        }
        function Un(e) {
          if (
            e.measure &&
            ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
          )
            for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
        }
        function Wn(e) {
          (e.display.externalMeasure = null), k(e.display.lineMeasure);
          for (var t = 0; t < e.display.view.length; t++) Un(e.display.view[t]);
        }
        function Hn(e) {
          Wn(e),
            (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
            e.options.lineWrapping || (e.display.maxLineChanged = !0),
            (e.display.lineNumChars = null);
        }
        function Xn() {
          return c && g
            ? -(
                document.body.getBoundingClientRect().left -
                parseInt(getComputedStyle(document.body).marginLeft)
              )
            : window.pageXOffset ||
                (document.documentElement || document.body).scrollLeft;
        }
        function Jn() {
          return c && g
            ? -(
                document.body.getBoundingClientRect().top -
                parseInt(getComputedStyle(document.body).marginTop)
              )
            : window.pageYOffset ||
                (document.documentElement || document.body).scrollTop;
        }
        function _n(e) {
          var t = 0;
          if (e.widgets)
            for (var n = 0; n < e.widgets.length; ++n)
              e.widgets[n].above && (t += wn(e.widgets[n]));
          return t;
        }
        function jn(e, t, n, r, i) {
          if (!i) {
            var o = _n(t);
            (n.top += o), (n.bottom += o);
          }
          if ("line" == r) return n;
          r || (r = "local");
          var s = Ye(t);
          if (
            ("local" == r ? (s += Sn(e.display)) : (s -= e.display.viewOffset),
            "page" == r || "window" == r)
          ) {
            var a = e.display.lineSpace.getBoundingClientRect();
            s += a.top + ("window" == r ? 0 : Jn());
            var u = a.left + ("window" == r ? 0 : Xn());
            (n.left += u), (n.right += u);
          }
          return (n.top += s), (n.bottom += s), n;
        }
        function Kn(e, t, n) {
          if ("div" == n) return t;
          var r = t.left,
            i = t.top;
          if ("page" == n) (r -= Xn()), (i -= Jn());
          else if ("local" == n || !n) {
            var o = e.display.sizer.getBoundingClientRect();
            (r += o.left), (i += o.top);
          }
          var s = e.display.lineSpace.getBoundingClientRect();
          return { left: r - s.left, top: i - s.top };
        }
        function Yn(e, t, n, r, i) {
          return r || (r = ue(e.doc, t.line)), jn(e, r, Bn(e, r, t.ch, i), n);
        }
        function Gn(e, t, n, r, i, o) {
          function s(t, s) {
            var a = In(e, i, t, s ? "right" : "left", o);
            return s ? (a.left = a.right) : (a.right = a.left), jn(e, r, a, n);
          }
          (r = r || ue(e.doc, t.line)), i || (i = Nn(e, r));
          var a = Qe(r, e.doc.direction),
            u = t.ch,
            l = t.sticky;
          if (
            (u >= r.text.length
              ? ((u = r.text.length), (l = "before"))
              : u <= 0 && ((u = 0), (l = "after")),
            !a)
          )
            return s("before" == l ? u - 1 : u, "before" == l);
          function c(e, t, n) {
            var r = a[t],
              i = 1 == r.level;
            return s(n ? e - 1 : e, i != n);
          }
          var h = $e(a, u, l),
            p = qe,
            f = c(u, h, "before" == l);
          return null != p && (f.other = c(u, p, "before" != l)), f;
        }
        function Vn(e, t) {
          var n = 0;
          (t = be(e.doc, t)),
            e.options.lineWrapping || (n = rr(e.display) * t.ch);
          var r = ue(e.doc, t.line),
            i = Ye(r) + Sn(e.display);
          return { left: n, right: n, top: i, bottom: i + r.height };
        }
        function qn(e, t, n, r, i) {
          var o = ge(e, t, n);
          return (o.xRel = i), r && (o.outside = !0), o;
        }
        function $n(e, t, n) {
          var r = e.doc;
          if ((n += e.display.viewOffset) < 0)
            return qn(r.first, 0, null, !0, -1);
          var i = fe(r, n),
            o = r.first + r.size - 1;
          if (i > o)
            return qn(r.first + r.size - 1, ue(r, o).text.length, null, !0, 1);
          t < 0 && (t = 0);
          for (var s = ue(r, i); ; ) {
            var a = tr(e, s, i, t, n),
              u = We(s, a.ch + (a.xRel > 0 ? 1 : 0));
            if (!u) return a;
            var l = u.find(1);
            if (l.line == i) return l;
            s = ue(r, (i = l.line));
          }
        }
        function Zn(e, t, n, r) {
          r -= _n(t);
          var i = t.text.length,
            o = se(
              function(t) {
                return In(e, n, t - 1).bottom <= r;
              },
              i,
              0
            );
          return (
            (i = se(
              function(t) {
                return In(e, n, t).top > r;
              },
              o,
              i
            )),
            { begin: o, end: i }
          );
        }
        function Qn(e, t, n, r) {
          n || (n = Nn(e, t));
          var i = jn(e, t, In(e, n, r), "line").top;
          return Zn(e, t, n, i);
        }
        function er(e, t, n, r) {
          return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
        }
        function tr(e, t, n, r, i) {
          i -= Ye(t);
          var o = Nn(e, t),
            s = _n(t),
            a = 0,
            u = t.text.length,
            l = !0,
            c = Qe(t, e.doc.direction);
          if (c) {
            var h = (e.options.lineWrapping
              ? function(e, t, n, r, i, o, s) {
                  var a = Zn(e, t, r, s),
                    u = a.begin,
                    l = a.end;
                  /\s/.test(t.text.charAt(l - 1)) && l--;
                  for (var c = null, h = null, p = 0; p < i.length; p++) {
                    var f = i[p];
                    if (!(f.from >= l || f.to <= u)) {
                      var d = 1 != f.level,
                        m = In(
                          e,
                          r,
                          d ? Math.min(l, f.to) - 1 : Math.max(u, f.from)
                        ).right,
                        g = m < o ? o - m + 1e9 : m - o;
                      (!c || h > g) && ((c = f), (h = g));
                    }
                  }
                  return (
                    c || (c = i[i.length - 1]),
                    c.from < u && (c = { from: u, to: c.to, level: c.level }),
                    c.to > l && (c = { from: c.from, to: l, level: c.level }),
                    c
                  );
                }
              : function(e, t, n, r, i, o, s) {
                  var a = se(
                      function(a) {
                        var u = i[a],
                          l = 1 != u.level;
                        return er(
                          Gn(
                            e,
                            ge(n, l ? u.to : u.from, l ? "before" : "after"),
                            "line",
                            t,
                            r
                          ),
                          o,
                          s,
                          !0
                        );
                      },
                      0,
                      i.length - 1
                    ),
                    u = i[a];
                  if (a > 0) {
                    var l = 1 != u.level,
                      c = Gn(
                        e,
                        ge(n, l ? u.from : u.to, l ? "after" : "before"),
                        "line",
                        t,
                        r
                      );
                    er(c, o, s, !0) && c.top > s && (u = i[a - 1]);
                  }
                  return u;
                })(e, t, n, o, c, r, i);
            (l = 1 != h.level),
              (a = l ? h.from : h.to - 1),
              (u = l ? h.to : h.from - 1);
          }
          var p,
            f,
            d = null,
            m = null,
            g = se(
              function(t) {
                var n = In(e, o, t);
                return (
                  (n.top += s),
                  (n.bottom += s),
                  !!er(n, r, i, !1) &&
                    (n.top <= i && n.left <= r && ((d = t), (m = n)), !0)
                );
              },
              a,
              u
            ),
            v = !1;
          if (m) {
            var y = r - m.left < m.right - r,
              x = y == l;
            (g = d + (x ? 0 : 1)),
              (f = x ? "after" : "before"),
              (p = y ? m.left : m.right);
          } else {
            l || (g != u && g != a) || g++,
              (f =
                0 == g
                  ? "after"
                  : g == t.text.length
                  ? "before"
                  : In(e, o, g - (l ? 1 : 0)).bottom + s <= i == l
                  ? "after"
                  : "before");
            var D = Gn(e, ge(n, g, f), "line", t, o);
            (p = D.left), (v = i < D.top || i >= D.bottom);
          }
          return (g = oe(t.text, g, 1)), qn(n, g, f, v, r - p);
        }
        function nr(e) {
          if (null != e.cachedTextHeight) return e.cachedTextHeight;
          if (null == Pn) {
            Pn = T("pre");
            for (var t = 0; t < 49; ++t)
              Pn.appendChild(document.createTextNode("x")),
                Pn.appendChild(T("br"));
            Pn.appendChild(document.createTextNode("x"));
          }
          F(e.measure, Pn);
          var n = Pn.offsetHeight / 50;
          return n > 3 && (e.cachedTextHeight = n), k(e.measure), n || 1;
        }
        function rr(e) {
          if (null != e.cachedCharWidth) return e.cachedCharWidth;
          var t = T("span", "xxxxxxxxxx"),
            n = T("pre", [t]);
          F(e.measure, n);
          var r = t.getBoundingClientRect(),
            i = (r.right - r.left) / 10;
          return i > 2 && (e.cachedCharWidth = i), i || 10;
        }
        function ir(e) {
          for (
            var t = e.display,
              n = {},
              r = {},
              i = t.gutters.clientLeft,
              o = t.gutters.firstChild,
              s = 0;
            o;
            o = o.nextSibling, ++s
          )
            (n[e.options.gutters[s]] = o.offsetLeft + o.clientLeft + i),
              (r[e.options.gutters[s]] = o.clientWidth);
          return {
            fixedPos: or(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: n,
            gutterWidth: r,
            wrapperWidth: t.wrapper.clientWidth,
          };
        }
        function or(e) {
          return (
            e.scroller.getBoundingClientRect().left -
            e.sizer.getBoundingClientRect().left
          );
        }
        function sr(e) {
          var t = nr(e.display),
            n = e.options.lineWrapping,
            r =
              n &&
              Math.max(5, e.display.scroller.clientWidth / rr(e.display) - 3);
          return function(i) {
            if (je(e.doc, i)) return 0;
            var o = 0;
            if (i.widgets)
              for (var s = 0; s < i.widgets.length; s++)
                i.widgets[s].height && (o += i.widgets[s].height);
            return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
          };
        }
        function ar(e) {
          var t = e.doc,
            n = sr(e);
          t.iter(function(e) {
            var t = n(e);
            t != e.height && he(e, t);
          });
        }
        function ur(e, t, n, r) {
          var i = e.display;
          if (!n && "true" == ft(t).getAttribute("cm-not-content")) return null;
          var o,
            s,
            a = i.lineSpace.getBoundingClientRect();
          try {
            (o = t.clientX - a.left), (s = t.clientY - a.top);
          } catch (t) {
            return null;
          }
          var u,
            l = $n(e, o, s);
          if (r && 1 == l.xRel && (u = ue(e.doc, l.line).text).length == l.ch) {
            var c = z(u, u.length, e.options.tabSize) - u.length;
            l = ge(
              l.line,
              Math.max(
                0,
                Math.round((o - En(e.display).left) / rr(e.display)) - c
              )
            );
          }
          return l;
        }
        function lr(e, t) {
          if (t >= e.display.viewTo) return null;
          if ((t -= e.display.viewFrom) < 0) return null;
          for (var n = e.display.view, r = 0; r < n.length; r++)
            if ((t -= n[r].size) < 0) return r;
        }
        function cr(e) {
          e.display.input.showSelection(e.display.input.prepareSelection());
        }
        function hr(e, t) {
          void 0 === t && (t = !0);
          for (
            var n = e.doc,
              r = {},
              i = (r.cursors = document.createDocumentFragment()),
              o = (r.selection = document.createDocumentFragment()),
              s = 0;
            s < n.sel.ranges.length;
            s++
          )
            if (t || s != n.sel.primIndex) {
              var a = n.sel.ranges[s];
              if (
                !(
                  a.from().line >= e.display.viewTo ||
                  a.to().line < e.display.viewFrom
                )
              ) {
                var u = a.empty();
                (u || e.options.showCursorWhenSelecting) && pr(e, a.head, i),
                  u || dr(e, a, o);
              }
            }
          return r;
        }
        function pr(e, t, n) {
          var r = Gn(
              e,
              t,
              "div",
              null,
              null,
              !e.options.singleCursorHeightPerLine
            ),
            i = n.appendChild(T("div", " ", "CodeMirror-cursor"));
          if (
            ((i.style.left = r.left + "px"),
            (i.style.top = r.top + "px"),
            (i.style.height =
              Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px"),
            r.other)
          ) {
            var o = n.appendChild(
              T("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor")
            );
            (o.style.display = ""),
              (o.style.left = r.other.left + "px"),
              (o.style.top = r.other.top + "px"),
              (o.style.height = 0.85 * (r.other.bottom - r.other.top) + "px");
          }
        }
        function fr(e, t) {
          return e.top - t.top || e.left - t.left;
        }
        function dr(e, t, n) {
          var r = e.display,
            i = e.doc,
            o = document.createDocumentFragment(),
            s = En(e.display),
            a = s.left,
            u = Math.max(r.sizerWidth, Fn(e) - r.sizer.offsetLeft) - s.right,
            l = "ltr" == i.direction;
          function c(e, t, n, r) {
            t < 0 && (t = 0),
              (t = Math.round(t)),
              (r = Math.round(r)),
              o.appendChild(
                T(
                  "div",
                  null,
                  "CodeMirror-selected",
                  "position: absolute; left: " +
                    e +
                    "px;\n                             top: " +
                    t +
                    "px; width: " +
                    (null == n ? u - e : n) +
                    "px;\n                             height: " +
                    (r - t) +
                    "px"
                )
              );
          }
          function h(t, n, r) {
            var o,
              s,
              h = ue(i, t),
              p = h.text.length;
            function f(n, r) {
              return Yn(e, ge(t, n), "div", h, r);
            }
            function d(t, n, r) {
              var i = Qn(e, h, null, t),
                o = ("ltr" == n) == ("after" == r) ? "left" : "right",
                s =
                  "after" == r
                    ? i.begin
                    : i.end - (/\s/.test(h.text.charAt(i.end - 1)) ? 2 : 1);
              return f(s, o)[o];
            }
            var m = Qe(h, i.direction);
            return (
              (function(e, t, n, r) {
                if (!e) return r(t, n, "ltr", 0);
                for (var i = !1, o = 0; o < e.length; ++o) {
                  var s = e[o];
                  ((s.from < n && s.to > t) || (t == n && s.to == t)) &&
                    (r(
                      Math.max(s.from, t),
                      Math.min(s.to, n),
                      1 == s.level ? "rtl" : "ltr",
                      o
                    ),
                    (i = !0));
                }
                i || r(t, n, "ltr");
              })(m, n || 0, null == r ? p : r, function(e, t, i, h) {
                var g = "ltr" == i,
                  v = f(e, g ? "left" : "right"),
                  y = f(t - 1, g ? "right" : "left"),
                  x = null == n && 0 == e,
                  D = null == r && t == p,
                  C = 0 == h,
                  w = !m || h == m.length - 1;
                if (y.top - v.top <= 3) {
                  var b = (l ? x : D) && C,
                    S = (l ? D : x) && w,
                    A = b ? a : (g ? v : y).left,
                    E = S ? u : (g ? y : v).right;
                  c(A, v.top, E - A, v.bottom);
                } else {
                  var k, F, T, M;
                  g
                    ? ((k = l && x && C ? a : v.left),
                      (F = l ? u : d(e, i, "before")),
                      (T = l ? a : d(t, i, "after")),
                      (M = l && D && w ? u : y.right))
                    : ((k = l ? d(e, i, "before") : a),
                      (F = !l && x && C ? u : v.right),
                      (T = !l && D && w ? a : y.left),
                      (M = l ? d(t, i, "after") : u)),
                    c(k, v.top, F - k, v.bottom),
                    v.bottom < y.top && c(a, v.bottom, null, y.top),
                    c(T, y.top, M - T, y.bottom);
                }
                (!o || fr(v, o) < 0) && (o = v),
                  fr(y, o) < 0 && (o = y),
                  (!s || fr(v, s) < 0) && (s = v),
                  fr(y, s) < 0 && (s = y);
              }),
              { start: o, end: s }
            );
          }
          var p = t.from(),
            f = t.to();
          if (p.line == f.line) h(p.line, p.ch, f.ch);
          else {
            var d = ue(i, p.line),
              m = ue(i, f.line),
              g = Xe(d) == Xe(m),
              v = h(p.line, p.ch, g ? d.text.length + 1 : null).end,
              y = h(f.line, g ? 0 : null, f.ch).start;
            g &&
              (v.top < y.top - 2
                ? (c(v.right, v.top, null, v.bottom),
                  c(a, y.top, y.left, y.bottom))
                : c(v.right, v.top, y.left - v.right, v.bottom)),
              v.bottom < y.top && c(a, v.bottom, null, y.top);
          }
          n.appendChild(o);
        }
        function mr(e) {
          if (e.state.focused) {
            var t = e.display;
            clearInterval(t.blinker);
            var n = !0;
            (t.cursorDiv.style.visibility = ""),
              e.options.cursorBlinkRate > 0
                ? (t.blinker = setInterval(function() {
                    return (t.cursorDiv.style.visibility = (n = !n)
                      ? ""
                      : "hidden");
                  }, e.options.cursorBlinkRate))
                : e.options.cursorBlinkRate < 0 &&
                  (t.cursorDiv.style.visibility = "hidden");
          }
        }
        function gr(e) {
          e.state.focused || (e.display.input.focus(), yr(e));
        }
        function vr(e) {
          (e.state.delayingBlurEvent = !0),
            setTimeout(function() {
              e.state.delayingBlurEvent &&
                ((e.state.delayingBlurEvent = !1), xr(e));
            }, 100);
        }
        function yr(e, t) {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
            "nocursor" != e.options.readOnly &&
              (e.state.focused ||
                (it(e, "focus", e, t),
                (e.state.focused = !0),
                N(e.display.wrapper, "CodeMirror-focused"),
                e.curOp ||
                  e.display.selForContextMenu == e.doc.sel ||
                  (e.display.input.reset(),
                  u &&
                    setTimeout(function() {
                      return e.display.input.reset(!0);
                    }, 20)),
                e.display.input.receivedFocus()),
              mr(e));
        }
        function xr(e, t) {
          e.state.delayingBlurEvent ||
            (e.state.focused &&
              (it(e, "blur", e, t),
              (e.state.focused = !1),
              E(e.display.wrapper, "CodeMirror-focused")),
            clearInterval(e.display.blinker),
            setTimeout(function() {
              e.state.focused || (e.display.shift = !1);
            }, 150));
        }
        function Dr(e) {
          for (
            var t = e.display, n = t.lineDiv.offsetTop, r = 0;
            r < t.view.length;
            r++
          ) {
            var i = t.view[r],
              o = e.options.lineWrapping,
              u = void 0,
              l = 0;
            if (!i.hidden) {
              if (s && a < 8) {
                var c = i.node.offsetTop + i.node.offsetHeight;
                (u = c - n), (n = c);
              } else {
                var h = i.node.getBoundingClientRect();
                (u = h.bottom - h.top),
                  !o &&
                    i.text.firstChild &&
                    (l =
                      i.text.firstChild.getBoundingClientRect().right -
                      h.left -
                      1);
              }
              var p = i.line.height - u;
              if (
                (p > 0.005 || p < -0.005) &&
                (he(i.line, u), Cr(i.line), i.rest)
              )
                for (var f = 0; f < i.rest.length; f++) Cr(i.rest[f]);
              if (l > e.display.sizerWidth) {
                var d = Math.ceil(l / rr(e.display));
                d > e.display.maxLineLength &&
                  ((e.display.maxLineLength = d),
                  (e.display.maxLine = i.line),
                  (e.display.maxLineChanged = !0));
              }
            }
          }
        }
        function Cr(e) {
          if (e.widgets)
            for (var t = 0; t < e.widgets.length; ++t) {
              var n = e.widgets[t],
                r = n.node.parentNode;
              r && (n.height = r.offsetHeight);
            }
        }
        function wr(e, t, n) {
          var r =
            n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
          r = Math.floor(r - Sn(e));
          var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
            o = fe(t, r),
            s = fe(t, i);
          if (n && n.ensure) {
            var a = n.ensure.from.line,
              u = n.ensure.to.line;
            a < o
              ? ((o = a), (s = fe(t, Ye(ue(t, a)) + e.wrapper.clientHeight)))
              : Math.min(u, t.lastLine()) >= s &&
                ((o = fe(t, Ye(ue(t, u)) - e.wrapper.clientHeight)), (s = u));
          }
          return { from: o, to: Math.max(s, o + 1) };
        }
        function br(e) {
          var t = e.display,
            n = t.view;
          if (
            t.alignWidgets ||
            (t.gutters.firstChild && e.options.fixedGutter)
          ) {
            for (
              var r = or(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
                i = t.gutters.offsetWidth,
                o = r + "px",
                s = 0;
              s < n.length;
              s++
            )
              if (!n[s].hidden) {
                e.options.fixedGutter &&
                  (n[s].gutter && (n[s].gutter.style.left = o),
                  n[s].gutterBackground &&
                    (n[s].gutterBackground.style.left = o));
                var a = n[s].alignable;
                if (a) for (var u = 0; u < a.length; u++) a[u].style.left = o;
              }
            e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
          }
        }
        function Sr(e) {
          if (!e.options.lineNumbers) return !1;
          var t = e.doc,
            n = me(e.options, t.first + t.size - 1),
            r = e.display;
          if (n.length != r.lineNumChars) {
            var i = r.measure.appendChild(
                T(
                  "div",
                  [T("div", n)],
                  "CodeMirror-linenumber CodeMirror-gutter-elt"
                )
              ),
              o = i.firstChild.offsetWidth,
              s = i.offsetWidth - o;
            return (
              (r.lineGutter.style.width = ""),
              (r.lineNumInnerWidth =
                Math.max(o, r.lineGutter.offsetWidth - s) + 1),
              (r.lineNumWidth = r.lineNumInnerWidth + s),
              (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
              (r.lineGutter.style.width = r.lineNumWidth + "px"),
              li(e),
              !0
            );
          }
          return !1;
        }
        function Ar(e, t) {
          var n = e.display,
            r = nr(e.display);
          t.top < 0 && (t.top = 0);
          var i =
              e.curOp && null != e.curOp.scrollTop
                ? e.curOp.scrollTop
                : n.scroller.scrollTop,
            o = Tn(e),
            s = {};
          t.bottom - t.top > o && (t.bottom = t.top + o);
          var a = e.doc.height + An(n),
            u = t.top < r,
            l = t.bottom > a - r;
          if (t.top < i) s.scrollTop = u ? 0 : t.top;
          else if (t.bottom > i + o) {
            var c = Math.min(t.top, (l ? a : t.bottom) - o);
            c != i && (s.scrollTop = c);
          }
          var h =
              e.curOp && null != e.curOp.scrollLeft
                ? e.curOp.scrollLeft
                : n.scroller.scrollLeft,
            p = Fn(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0),
            f = t.right - t.left > p;
          return (
            f && (t.right = t.left + p),
            t.left < 10
              ? (s.scrollLeft = 0)
              : t.left < h
              ? (s.scrollLeft = Math.max(0, t.left - (f ? 0 : 10)))
              : t.right > p + h - 3 &&
                (s.scrollLeft = t.right + (f ? 0 : 10) - p),
            s
          );
        }
        function Er(e, t) {
          null != t &&
            (Tr(e),
            (e.curOp.scrollTop =
              (null == e.curOp.scrollTop
                ? e.doc.scrollTop
                : e.curOp.scrollTop) + t));
        }
        function kr(e) {
          Tr(e);
          var t = e.getCursor();
          e.curOp.scrollToPos = {
            from: t,
            to: t,
            margin: e.options.cursorScrollMargin,
          };
        }
        function Fr(e, t, n) {
          (null == t && null == n) || Tr(e),
            null != t && (e.curOp.scrollLeft = t),
            null != n && (e.curOp.scrollTop = n);
        }
        function Tr(e) {
          var t = e.curOp.scrollToPos;
          if (t) {
            e.curOp.scrollToPos = null;
            var n = Vn(e, t.from),
              r = Vn(e, t.to);
            Mr(e, n, r, t.margin);
          }
        }
        function Mr(e, t, n, r) {
          var i = Ar(e, {
            left: Math.min(t.left, n.left),
            top: Math.min(t.top, n.top) - r,
            right: Math.max(t.right, n.right),
            bottom: Math.max(t.bottom, n.bottom) + r,
          });
          Fr(e, i.scrollLeft, i.scrollTop);
        }
        function Br(e, t) {
          Math.abs(e.doc.scrollTop - t) < 2 ||
            (n || ui(e, { top: t }), Lr(e, t, !0), n && ui(e), ri(e, 100));
        }
        function Lr(e, t, n) {
          (t = Math.min(
            e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
            t
          )),
            (e.display.scroller.scrollTop != t || n) &&
              ((e.doc.scrollTop = t),
              e.display.scrollbars.setScrollTop(t),
              e.display.scroller.scrollTop != t &&
                (e.display.scroller.scrollTop = t));
        }
        function Nr(e, t, n, r) {
          (t = Math.min(
            t,
            e.display.scroller.scrollWidth - e.display.scroller.clientWidth
          )),
            ((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) &&
              !r) ||
              ((e.doc.scrollLeft = t),
              br(e),
              e.display.scroller.scrollLeft != t &&
                (e.display.scroller.scrollLeft = t),
              e.display.scrollbars.setScrollLeft(t));
        }
        function Ir(e) {
          var t = e.display,
            n = t.gutters.offsetWidth,
            r = Math.round(e.doc.height + An(e.display));
          return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? n : 0,
            docHeight: r,
            scrollHeight: r + kn(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: n,
          };
        }
        var Pr = function(e, t, n) {
          this.cm = n;
          var r = (this.vert = T(
              "div",
              [T("div", null, null, "min-width: 1px")],
              "CodeMirror-vscrollbar"
            )),
            i = (this.horiz = T(
              "div",
              [T("div", null, null, "height: 100%; min-height: 1px")],
              "CodeMirror-hscrollbar"
            ));
          (r.tabIndex = i.tabIndex = -1),
            e(r),
            e(i),
            tt(r, "scroll", function() {
              r.clientHeight && t(r.scrollTop, "vertical");
            }),
            tt(i, "scroll", function() {
              i.clientWidth && t(i.scrollLeft, "horizontal");
            }),
            (this.checkedZeroWidth = !1),
            s &&
              a < 8 &&
              (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
        };
        (Pr.prototype.update = function(e) {
          var t = e.scrollWidth > e.clientWidth + 1,
            n = e.scrollHeight > e.clientHeight + 1,
            r = e.nativeBarWidth;
          if (n) {
            (this.vert.style.display = "block"),
              (this.vert.style.bottom = t ? r + "px" : "0");
            var i = e.viewHeight - (t ? r : 0);
            this.vert.firstChild.style.height =
              Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
          } else
            (this.vert.style.display = ""),
              (this.vert.firstChild.style.height = "0");
          if (t) {
            (this.horiz.style.display = "block"),
              (this.horiz.style.right = n ? r + "px" : "0"),
              (this.horiz.style.left = e.barLeft + "px");
            var o = e.viewWidth - e.barLeft - (n ? r : 0);
            this.horiz.firstChild.style.width =
              Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
          } else
            (this.horiz.style.display = ""),
              (this.horiz.firstChild.style.width = "0");
          return (
            !this.checkedZeroWidth &&
              e.clientHeight > 0 &&
              (0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
            { right: n ? r : 0, bottom: t ? r : 0 }
          );
        }),
          (Pr.prototype.setScrollLeft = function(e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
              this.disableHoriz &&
                this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
          }),
          (Pr.prototype.setScrollTop = function(e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e),
              this.disableVert &&
                this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
          }),
          (Pr.prototype.zeroWidthHack = function() {
            var e = y && !f ? "12px" : "18px";
            (this.horiz.style.height = this.vert.style.width = e),
              (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
                "none"),
              (this.disableHoriz = new U()),
              (this.disableVert = new U());
          }),
          (Pr.prototype.enableZeroWidthBar = function(e, t, n) {
            (e.style.pointerEvents = "auto"),
              t.set(1e3, function r() {
                var i = e.getBoundingClientRect(),
                  o =
                    "vert" == n
                      ? document.elementFromPoint(
                          i.right - 1,
                          (i.top + i.bottom) / 2
                        )
                      : document.elementFromPoint(
                          (i.right + i.left) / 2,
                          i.bottom - 1
                        );
                o != e ? (e.style.pointerEvents = "none") : t.set(1e3, r);
              });
          }),
          (Pr.prototype.clear = function() {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz), e.removeChild(this.vert);
          });
        var Or = function() {};
        function Rr(e, t) {
          t || (t = Ir(e));
          var n = e.display.barWidth,
            r = e.display.barHeight;
          zr(e, t);
          for (
            var i = 0;
            (i < 4 && n != e.display.barWidth) || r != e.display.barHeight;
            i++
          )
            n != e.display.barWidth && e.options.lineWrapping && Dr(e),
              zr(e, Ir(e)),
              (n = e.display.barWidth),
              (r = e.display.barHeight);
        }
        function zr(e, t) {
          var n = e.display,
            r = n.scrollbars.update(t);
          (n.sizer.style.paddingRight = (n.barWidth = r.right) + "px"),
            (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px"),
            (n.heightForcer.style.borderBottom =
              r.bottom + "px solid transparent"),
            r.right && r.bottom
              ? ((n.scrollbarFiller.style.display = "block"),
                (n.scrollbarFiller.style.height = r.bottom + "px"),
                (n.scrollbarFiller.style.width = r.right + "px"))
              : (n.scrollbarFiller.style.display = ""),
            r.bottom &&
            e.options.coverGutterNextToScrollbar &&
            e.options.fixedGutter
              ? ((n.gutterFiller.style.display = "block"),
                (n.gutterFiller.style.height = r.bottom + "px"),
                (n.gutterFiller.style.width = t.gutterWidth + "px"))
              : (n.gutterFiller.style.display = "");
        }
        (Or.prototype.update = function() {
          return { bottom: 0, right: 0 };
        }),
          (Or.prototype.setScrollLeft = function() {}),
          (Or.prototype.setScrollTop = function() {}),
          (Or.prototype.clear = function() {});
        var Ur = { native: Pr, null: Or };
        function Wr(e) {
          e.display.scrollbars &&
            (e.display.scrollbars.clear(),
            e.display.scrollbars.addClass &&
              E(e.display.wrapper, e.display.scrollbars.addClass)),
            (e.display.scrollbars = new Ur[e.options.scrollbarStyle](
              function(t) {
                e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                  tt(t, "mousedown", function() {
                    e.state.focused &&
                      setTimeout(function() {
                        return e.display.input.focus();
                      }, 0);
                  }),
                  t.setAttribute("cm-not-content", "true");
              },
              function(t, n) {
                "horizontal" == n ? Nr(e, t) : Br(e, t);
              },
              e
            )),
            e.display.scrollbars.addClass &&
              N(e.display.wrapper, e.display.scrollbars.addClass);
        }
        var Hr = 0;
        function Xr(e) {
          var t;
          (e.curOp = {
            cm: e,
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++Hr,
          }),
            (t = e.curOp),
            an
              ? an.ops.push(t)
              : (t.ownsGroup = an = { ops: [t], delayedCallbacks: [] });
        }
        function Jr(e) {
          var t = e.curOp;
          t &&
            (function(e, t) {
              var n = e.ownsGroup;
              if (n)
                try {
                  !(function(e) {
                    var t = e.delayedCallbacks,
                      n = 0;
                    do {
                      for (; n < t.length; n++) t[n].call(null);
                      for (var r = 0; r < e.ops.length; r++) {
                        var i = e.ops[r];
                        if (i.cursorActivityHandlers)
                          for (
                            ;
                            i.cursorActivityCalled <
                            i.cursorActivityHandlers.length;

                          )
                            i.cursorActivityHandlers[
                              i.cursorActivityCalled++
                            ].call(null, i.cm);
                      }
                    } while (n < t.length);
                  })(n);
                } finally {
                  (an = null), t(n);
                }
            })(t, function(e) {
              for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
              !(function(e) {
                for (var t = e.ops, n = 0; n < t.length; n++) _r(t[n]);
                for (var r = 0; r < t.length; r++)
                  (i = t[r]).updatedDisplay =
                    i.mustUpdate && si(i.cm, i.update);
                for (var i, o = 0; o < t.length; o++) jr(t[o]);
                for (var s = 0; s < t.length; s++) Kr(t[s]);
                for (var a = 0; a < t.length; a++) Yr(t[a]);
              })(e);
            });
        }
        function _r(e) {
          var t = e.cm,
            n = t.display;
          !(function(e) {
            var t = e.display;
            !t.scrollbarsClipped &&
              t.scroller.offsetWidth &&
              ((t.nativeBarWidth =
                t.scroller.offsetWidth - t.scroller.clientWidth),
              (t.heightForcer.style.height = kn(e) + "px"),
              (t.sizer.style.marginBottom = -t.nativeBarWidth + "px"),
              (t.sizer.style.borderRightWidth = kn(e) + "px"),
              (t.scrollbarsClipped = !0));
          })(t),
            e.updateMaxLine && Ve(t),
            (e.mustUpdate =
              e.viewChanged ||
              e.forceUpdate ||
              null != e.scrollTop ||
              (e.scrollToPos &&
                (e.scrollToPos.from.line < n.viewFrom ||
                  e.scrollToPos.to.line >= n.viewTo)) ||
              (n.maxLineChanged && t.options.lineWrapping)),
            (e.update =
              e.mustUpdate &&
              new oi(
                t,
                e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
                e.forceUpdate
              ));
        }
        function jr(e) {
          var t = e.cm,
            n = t.display;
          e.updatedDisplay && Dr(t),
            (e.barMeasure = Ir(t)),
            n.maxLineChanged &&
              !t.options.lineWrapping &&
              ((e.adjustWidthTo =
                Bn(t, n.maxLine, n.maxLine.text.length).left + 3),
              (t.display.sizerWidth = e.adjustWidthTo),
              (e.barMeasure.scrollWidth = Math.max(
                n.scroller.clientWidth,
                n.sizer.offsetLeft +
                  e.adjustWidthTo +
                  kn(t) +
                  t.display.barWidth
              )),
              (e.maxScrollLeft = Math.max(
                0,
                n.sizer.offsetLeft + e.adjustWidthTo - Fn(t)
              ))),
            (e.updatedDisplay || e.selectionChanged) &&
              (e.preparedSelection = n.input.prepareSelection());
        }
        function Kr(e) {
          var t = e.cm;
          null != e.adjustWidthTo &&
            ((t.display.sizer.style.minWidth = e.adjustWidthTo + "px"),
            e.maxScrollLeft < t.doc.scrollLeft &&
              Nr(
                t,
                Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft),
                !0
              ),
            (t.display.maxLineChanged = !1));
          var n = e.focus && e.focus == L();
          e.preparedSelection &&
            t.display.input.showSelection(e.preparedSelection, n),
            (e.updatedDisplay || e.startHeight != t.doc.height) &&
              Rr(t, e.barMeasure),
            e.updatedDisplay && ci(t, e.barMeasure),
            e.selectionChanged && mr(t),
            t.state.focused && e.updateInput && t.display.input.reset(e.typing),
            n && gr(e.cm);
        }
        function Yr(e) {
          var t = e.cm,
            n = t.display,
            r = t.doc;
          if (
            (e.updatedDisplay && ai(t, e.update),
            null == n.wheelStartX ||
              (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
              (n.wheelStartX = n.wheelStartY = null),
            null != e.scrollTop && Lr(t, e.scrollTop, e.forceScroll),
            null != e.scrollLeft && Nr(t, e.scrollLeft, !0, !0),
            e.scrollToPos)
          ) {
            var i = (function(e, t, n, r) {
              var i;
              null == r && (r = 0),
                e.options.lineWrapping ||
                  t != n ||
                  ((t = t.ch
                    ? ge(
                        t.line,
                        "before" == t.sticky ? t.ch - 1 : t.ch,
                        "after"
                      )
                    : t),
                  (n =
                    "before" == t.sticky ? ge(t.line, t.ch + 1, "before") : t));
              for (var o = 0; o < 5; o++) {
                var s = !1,
                  a = Gn(e, t),
                  u = n && n != t ? Gn(e, n) : a;
                i = {
                  left: Math.min(a.left, u.left),
                  top: Math.min(a.top, u.top) - r,
                  right: Math.max(a.left, u.left),
                  bottom: Math.max(a.bottom, u.bottom) + r,
                };
                var l = Ar(e, i),
                  c = e.doc.scrollTop,
                  h = e.doc.scrollLeft;
                if (
                  (null != l.scrollTop &&
                    (Br(e, l.scrollTop),
                    Math.abs(e.doc.scrollTop - c) > 1 && (s = !0)),
                  null != l.scrollLeft &&
                    (Nr(e, l.scrollLeft),
                    Math.abs(e.doc.scrollLeft - h) > 1 && (s = !0)),
                  !s)
                )
                  break;
              }
              return i;
            })(
              t,
              be(r, e.scrollToPos.from),
              be(r, e.scrollToPos.to),
              e.scrollToPos.margin
            );
            !(function(e, t) {
              if (!ot(e, "scrollCursorIntoView")) {
                var n = e.display,
                  r = n.sizer.getBoundingClientRect(),
                  i = null;
                if (
                  (t.top + r.top < 0
                    ? (i = !0)
                    : t.bottom + r.top >
                        (window.innerHeight ||
                          document.documentElement.clientHeight) && (i = !1),
                  null != i && !d)
                ) {
                  var o = T(
                    "div",
                    "​",
                    null,
                    "position: absolute;\n                         top: " +
                      (t.top - n.viewOffset - Sn(e.display)) +
                      "px;\n                         height: " +
                      (t.bottom - t.top + kn(e) + n.barHeight) +
                      "px;\n                         left: " +
                      t.left +
                      "px; width: " +
                      Math.max(2, t.right - t.left) +
                      "px;"
                  );
                  e.display.lineSpace.appendChild(o),
                    o.scrollIntoView(i),
                    e.display.lineSpace.removeChild(o);
                }
              }
            })(t, i);
          }
          var o = e.maybeHiddenMarkers,
            s = e.maybeUnhiddenMarkers;
          if (o)
            for (var a = 0; a < o.length; ++a)
              o[a].lines.length || it(o[a], "hide");
          if (s)
            for (var u = 0; u < s.length; ++u)
              s[u].lines.length && it(s[u], "unhide");
          n.wrapper.offsetHeight &&
            (r.scrollTop = t.display.scroller.scrollTop),
            e.changeObjs && it(t, "changes", t, e.changeObjs),
            e.update && e.update.finish();
        }
        function Gr(e, t) {
          if (e.curOp) return t();
          Xr(e);
          try {
            return t();
          } finally {
            Jr(e);
          }
        }
        function Vr(e, t) {
          return function() {
            if (e.curOp) return t.apply(e, arguments);
            Xr(e);
            try {
              return t.apply(e, arguments);
            } finally {
              Jr(e);
            }
          };
        }
        function qr(e) {
          return function() {
            if (this.curOp) return e.apply(this, arguments);
            Xr(this);
            try {
              return e.apply(this, arguments);
            } finally {
              Jr(this);
            }
          };
        }
        function $r(e) {
          return function() {
            var t = this.cm;
            if (!t || t.curOp) return e.apply(this, arguments);
            Xr(t);
            try {
              return e.apply(this, arguments);
            } finally {
              Jr(t);
            }
          };
        }
        function Zr(e, t, n, r) {
          null == t && (t = e.doc.first),
            null == n && (n = e.doc.first + e.doc.size),
            r || (r = 0);
          var i = e.display;
          if (
            (r &&
              n < i.viewTo &&
              (null == i.updateLineNumbers || i.updateLineNumbers > t) &&
              (i.updateLineNumbers = t),
            (e.curOp.viewChanged = !0),
            t >= i.viewTo)
          )
            Ee && Je(e.doc, t) < i.viewTo && ei(e);
          else if (n <= i.viewFrom)
            Ee && _e(e.doc, n + r) > i.viewFrom
              ? ei(e)
              : ((i.viewFrom += r), (i.viewTo += r));
          else if (t <= i.viewFrom && n >= i.viewTo) ei(e);
          else if (t <= i.viewFrom) {
            var o = ti(e, n, n + r, 1);
            o
              ? ((i.view = i.view.slice(o.index)),
                (i.viewFrom = o.lineN),
                (i.viewTo += r))
              : ei(e);
          } else if (n >= i.viewTo) {
            var s = ti(e, t, t, -1);
            s
              ? ((i.view = i.view.slice(0, s.index)), (i.viewTo = s.lineN))
              : ei(e);
          } else {
            var a = ti(e, t, t, -1),
              u = ti(e, n, n + r, 1);
            a && u
              ? ((i.view = i.view
                  .slice(0, a.index)
                  .concat(sn(e, a.lineN, u.lineN))
                  .concat(i.view.slice(u.index))),
                (i.viewTo += r))
              : ei(e);
          }
          var l = i.externalMeasured;
          l &&
            (n < l.lineN
              ? (l.lineN += r)
              : t < l.lineN + l.size && (i.externalMeasured = null));
        }
        function Qr(e, t, n) {
          e.curOp.viewChanged = !0;
          var r = e.display,
            i = e.display.externalMeasured;
          if (
            (i &&
              t >= i.lineN &&
              t < i.lineN + i.size &&
              (r.externalMeasured = null),
            !(t < r.viewFrom || t >= r.viewTo))
          ) {
            var o = r.view[lr(e, t)];
            if (null != o.node) {
              var s = o.changes || (o.changes = []);
              -1 == W(s, n) && s.push(n);
            }
          }
        }
        function ei(e) {
          (e.display.viewFrom = e.display.viewTo = e.doc.first),
            (e.display.view = []),
            (e.display.viewOffset = 0);
        }
        function ti(e, t, n, r) {
          var i,
            o = lr(e, t),
            s = e.display.view;
          if (!Ee || n == e.doc.first + e.doc.size)
            return { index: o, lineN: n };
          for (var a = e.display.viewFrom, u = 0; u < o; u++) a += s[u].size;
          if (a != t) {
            if (r > 0) {
              if (o == s.length - 1) return null;
              (i = a + s[o].size - t), o++;
            } else i = a - t;
            (t += i), (n += i);
          }
          for (; Je(e.doc, n) != n; ) {
            if (o == (r < 0 ? 0 : s.length - 1)) return null;
            (n += r * s[o - (r < 0 ? 1 : 0)].size), (o += r);
          }
          return { index: o, lineN: n };
        }
        function ni(e) {
          for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
            var i = t[r];
            i.hidden || (i.node && !i.changes) || ++n;
          }
          return n;
        }
        function ri(e, t) {
          e.doc.highlightFrontier < e.display.viewTo &&
            e.state.highlight.set(t, O(ii, e));
        }
        function ii(e) {
          var t = e.doc;
          if (!(t.highlightFrontier >= e.display.viewTo)) {
            var n = +new Date() + e.options.workTime,
              r = Ut(e, t.highlightFrontier),
              i = [];
            t.iter(
              r.line,
              Math.min(t.first + t.size, e.display.viewTo + 500),
              function(o) {
                if (r.line >= e.display.viewFrom) {
                  var s = o.styles,
                    a =
                      o.text.length > e.options.maxHighlightLength
                        ? Bt(t.mode, r.state)
                        : null,
                    u = Rt(e, o, r, !0);
                  a && (r.state = a), (o.styles = u.styles);
                  var l = o.styleClasses,
                    c = u.classes;
                  c ? (o.styleClasses = c) : l && (o.styleClasses = null);
                  for (
                    var h =
                        !s ||
                        s.length != o.styles.length ||
                        (l != c &&
                          (!l ||
                            !c ||
                            l.bgClass != c.bgClass ||
                            l.textClass != c.textClass)),
                      p = 0;
                    !h && p < s.length;
                    ++p
                  )
                    h = s[p] != o.styles[p];
                  h && i.push(r.line), (o.stateAfter = r.save()), r.nextLine();
                } else
                  o.text.length <= e.options.maxHighlightLength &&
                    Wt(e, o.text, r),
                    (o.stateAfter = r.line % 5 == 0 ? r.save() : null),
                    r.nextLine();
                if (+new Date() > n) return ri(e, e.options.workDelay), !0;
              }
            ),
              (t.highlightFrontier = r.line),
              (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
              i.length &&
                Gr(e, function() {
                  for (var t = 0; t < i.length; t++) Qr(e, i[t], "text");
                });
          }
        }
        var oi = function(e, t, n) {
          var r = e.display;
          (this.viewport = t),
            (this.visible = wr(r, e.doc, t)),
            (this.editorIsHidden = !r.wrapper.offsetWidth),
            (this.wrapperHeight = r.wrapper.clientHeight),
            (this.wrapperWidth = r.wrapper.clientWidth),
            (this.oldDisplayWidth = Fn(e)),
            (this.force = n),
            (this.dims = ir(e)),
            (this.events = []);
        };
        function si(e, t) {
          var n = e.display,
            r = e.doc;
          if (t.editorIsHidden) return ei(e), !1;
          if (
            !t.force &&
            t.visible.from >= n.viewFrom &&
            t.visible.to <= n.viewTo &&
            (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
            n.renderedView == n.view &&
            0 == ni(e)
          )
            return !1;
          Sr(e) && (ei(e), (t.dims = ir(e)));
          var i = r.first + r.size,
            o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
            s = Math.min(i, t.visible.to + e.options.viewportMargin);
          n.viewFrom < o &&
            o - n.viewFrom < 20 &&
            (o = Math.max(r.first, n.viewFrom)),
            n.viewTo > s && n.viewTo - s < 20 && (s = Math.min(i, n.viewTo)),
            Ee && ((o = Je(e.doc, o)), (s = _e(e.doc, s)));
          var a =
            o != n.viewFrom ||
            s != n.viewTo ||
            n.lastWrapHeight != t.wrapperHeight ||
            n.lastWrapWidth != t.wrapperWidth;
          !(function(e, t, n) {
            var r = e.display;
            0 == r.view.length || t >= r.viewTo || n <= r.viewFrom
              ? ((r.view = sn(e, t, n)), (r.viewFrom = t))
              : (r.viewFrom > t
                  ? (r.view = sn(e, t, r.viewFrom).concat(r.view))
                  : r.viewFrom < t && (r.view = r.view.slice(lr(e, t))),
                (r.viewFrom = t),
                r.viewTo < n
                  ? (r.view = r.view.concat(sn(e, r.viewTo, n)))
                  : r.viewTo > n && (r.view = r.view.slice(0, lr(e, n)))),
              (r.viewTo = n);
          })(e, o, s),
            (n.viewOffset = Ye(ue(e.doc, n.viewFrom))),
            (e.display.mover.style.top = n.viewOffset + "px");
          var l = ni(e);
          if (
            !a &&
            0 == l &&
            !t.force &&
            n.renderedView == n.view &&
            (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
          )
            return !1;
          var c = (function(e) {
            if (e.hasFocus()) return null;
            var t = L();
            if (!t || !B(e.display.lineDiv, t)) return null;
            var n = { activeElt: t };
            if (window.getSelection) {
              var r = window.getSelection();
              r.anchorNode &&
                r.extend &&
                B(e.display.lineDiv, r.anchorNode) &&
                ((n.anchorNode = r.anchorNode),
                (n.anchorOffset = r.anchorOffset),
                (n.focusNode = r.focusNode),
                (n.focusOffset = r.focusOffset));
            }
            return n;
          })(e);
          return (
            l > 4 && (n.lineDiv.style.display = "none"),
            (function(e, t, n) {
              var r = e.display,
                i = e.options.lineNumbers,
                o = r.lineDiv,
                s = o.firstChild;
              function a(t) {
                var n = t.nextSibling;
                return (
                  u && y && e.display.currentWheelTarget == t
                    ? (t.style.display = "none")
                    : t.parentNode.removeChild(t),
                  n
                );
              }
              for (var l = r.view, c = r.viewFrom, h = 0; h < l.length; h++) {
                var p = l[h];
                if (p.hidden);
                else if (p.node && p.node.parentNode == o) {
                  for (; s != p.node; ) s = a(s);
                  var f = i && null != t && t <= c && p.lineNumber;
                  p.changes &&
                    (W(p.changes, "gutter") > -1 && (f = !1), hn(e, p, c, n)),
                    f &&
                      (k(p.lineNumber),
                      p.lineNumber.appendChild(
                        document.createTextNode(me(e.options, c))
                      )),
                    (s = p.node.nextSibling);
                } else {
                  var d = yn(e, p, c, n);
                  o.insertBefore(d, s);
                }
                c += p.size;
              }
              for (; s; ) s = a(s);
            })(e, n.updateLineNumbers, t.dims),
            l > 4 && (n.lineDiv.style.display = ""),
            (n.renderedView = n.view),
            (function(e) {
              if (
                e &&
                e.activeElt &&
                e.activeElt != L() &&
                (e.activeElt.focus(),
                e.anchorNode &&
                  B(document.body, e.anchorNode) &&
                  B(document.body, e.focusNode))
              ) {
                var t = window.getSelection(),
                  n = document.createRange();
                n.setEnd(e.anchorNode, e.anchorOffset),
                  n.collapse(!1),
                  t.removeAllRanges(),
                  t.addRange(n),
                  t.extend(e.focusNode, e.focusOffset);
              }
            })(c),
            k(n.cursorDiv),
            k(n.selectionDiv),
            (n.gutters.style.height = n.sizer.style.minHeight = 0),
            a &&
              ((n.lastWrapHeight = t.wrapperHeight),
              (n.lastWrapWidth = t.wrapperWidth),
              ri(e, 400)),
            (n.updateLineNumbers = null),
            !0
          );
        }
        function ai(e, t) {
          for (
            var n = t.viewport, r = !0;
            ((r && e.options.lineWrapping && t.oldDisplayWidth != Fn(e)) ||
              (n &&
                null != n.top &&
                (n = {
                  top: Math.min(e.doc.height + An(e.display) - Tn(e), n.top),
                }),
              (t.visible = wr(e.display, e.doc, n)),
              !(
                t.visible.from >= e.display.viewFrom &&
                t.visible.to <= e.display.viewTo
              ))) &&
            si(e, t);
            r = !1
          ) {
            Dr(e);
            var i = Ir(e);
            cr(e), Rr(e, i), ci(e, i), (t.force = !1);
          }
          t.signal(e, "update", e),
            (e.display.viewFrom == e.display.reportedViewFrom &&
              e.display.viewTo == e.display.reportedViewTo) ||
              (t.signal(
                e,
                "viewportChange",
                e,
                e.display.viewFrom,
                e.display.viewTo
              ),
              (e.display.reportedViewFrom = e.display.viewFrom),
              (e.display.reportedViewTo = e.display.viewTo));
        }
        function ui(e, t) {
          var n = new oi(e, t);
          if (si(e, n)) {
            Dr(e), ai(e, n);
            var r = Ir(e);
            cr(e), Rr(e, r), ci(e, r), n.finish();
          }
        }
        function li(e) {
          var t = e.display.gutters.offsetWidth;
          e.display.sizer.style.marginLeft = t + "px";
        }
        function ci(e, t) {
          (e.display.sizer.style.minHeight = t.docHeight + "px"),
            (e.display.heightForcer.style.top = t.docHeight + "px"),
            (e.display.gutters.style.height =
              t.docHeight + e.display.barHeight + kn(e) + "px");
        }
        function hi(e) {
          var t = e.display.gutters,
            n = e.options.gutters;
          k(t);
          for (var r = 0; r < n.length; ++r) {
            var i = n[r],
              o = t.appendChild(T("div", null, "CodeMirror-gutter " + i));
            "CodeMirror-linenumbers" == i &&
              ((e.display.lineGutter = o),
              (o.style.width = (e.display.lineNumWidth || 1) + "px"));
          }
          (t.style.display = r ? "" : "none"), li(e);
        }
        function pi(e) {
          var t = W(e.gutters, "CodeMirror-linenumbers");
          -1 == t && e.lineNumbers
            ? (e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]))
            : t > -1 &&
              !e.lineNumbers &&
              ((e.gutters = e.gutters.slice(0)), e.gutters.splice(t, 1));
        }
        (oi.prototype.signal = function(e, t) {
          at(e, t) && this.events.push(arguments);
        }),
          (oi.prototype.finish = function() {
            for (var e = 0; e < this.events.length; e++)
              it.apply(null, this.events[e]);
          });
        var fi = 0,
          di = null;
        function mi(e) {
          var t = e.wheelDeltaX,
            n = e.wheelDeltaY;
          return (
            null == t &&
              e.detail &&
              e.axis == e.HORIZONTAL_AXIS &&
              (t = e.detail),
            null == n && e.detail && e.axis == e.VERTICAL_AXIS
              ? (n = e.detail)
              : null == n && (n = e.wheelDelta),
            { x: t, y: n }
          );
        }
        function gi(e) {
          var t = mi(e);
          return (t.x *= di), (t.y *= di), t;
        }
        function vi(e, t) {
          var r = mi(t),
            i = r.x,
            o = r.y,
            s = e.display,
            a = s.scroller,
            l = a.scrollWidth > a.clientWidth,
            c = a.scrollHeight > a.clientHeight;
          if ((i && l) || (o && c)) {
            if (o && y && u)
              e: for (var p = t.target, f = s.view; p != a; p = p.parentNode)
                for (var d = 0; d < f.length; d++)
                  if (f[d].node == p) {
                    e.display.currentWheelTarget = p;
                    break e;
                  }
            if (i && !n && !h && null != di)
              return (
                o && c && Br(e, Math.max(0, a.scrollTop + o * di)),
                Nr(e, Math.max(0, a.scrollLeft + i * di)),
                (!o || (o && c)) && lt(t),
                void (s.wheelStartX = null)
              );
            if (o && null != di) {
              var m = o * di,
                g = e.doc.scrollTop,
                v = g + s.wrapper.clientHeight;
              m < 0
                ? (g = Math.max(0, g + m - 50))
                : (v = Math.min(e.doc.height, v + m + 50)),
                ui(e, { top: g, bottom: v });
            }
            fi < 20 &&
              (null == s.wheelStartX
                ? ((s.wheelStartX = a.scrollLeft),
                  (s.wheelStartY = a.scrollTop),
                  (s.wheelDX = i),
                  (s.wheelDY = o),
                  setTimeout(function() {
                    if (null != s.wheelStartX) {
                      var e = a.scrollLeft - s.wheelStartX,
                        t = a.scrollTop - s.wheelStartY,
                        n =
                          (t && s.wheelDY && t / s.wheelDY) ||
                          (e && s.wheelDX && e / s.wheelDX);
                      (s.wheelStartX = s.wheelStartY = null),
                        n && ((di = (di * fi + n) / (fi + 1)), ++fi);
                    }
                  }, 200))
                : ((s.wheelDX += i), (s.wheelDY += o)));
          }
        }
        s ? (di = -0.53) : n ? (di = 15) : c ? (di = -0.7) : p && (di = -1 / 3);
        var yi = function(e, t) {
          (this.ranges = e), (this.primIndex = t);
        };
        (yi.prototype.primary = function() {
          return this.ranges[this.primIndex];
        }),
          (yi.prototype.equals = function(e) {
            if (e == this) return !0;
            if (
              e.primIndex != this.primIndex ||
              e.ranges.length != this.ranges.length
            )
              return !1;
            for (var t = 0; t < this.ranges.length; t++) {
              var n = this.ranges[t],
                r = e.ranges[t];
              if (!ye(n.anchor, r.anchor) || !ye(n.head, r.head)) return !1;
            }
            return !0;
          }),
          (yi.prototype.deepCopy = function() {
            for (var e = [], t = 0; t < this.ranges.length; t++)
              e[t] = new xi(xe(this.ranges[t].anchor), xe(this.ranges[t].head));
            return new yi(e, this.primIndex);
          }),
          (yi.prototype.somethingSelected = function() {
            for (var e = 0; e < this.ranges.length; e++)
              if (!this.ranges[e].empty()) return !0;
            return !1;
          }),
          (yi.prototype.contains = function(e, t) {
            t || (t = e);
            for (var n = 0; n < this.ranges.length; n++) {
              var r = this.ranges[n];
              if (ve(t, r.from()) >= 0 && ve(e, r.to()) <= 0) return n;
            }
            return -1;
          });
        var xi = function(e, t) {
          (this.anchor = e), (this.head = t);
        };
        function Di(e, t, n) {
          var r = e && e.options.selectionsMayTouch,
            i = t[n];
          t.sort(function(e, t) {
            return ve(e.from(), t.from());
          }),
            (n = W(t, i));
          for (var o = 1; o < t.length; o++) {
            var s = t[o],
              a = t[o - 1],
              u = ve(a.to(), s.from());
            if (r && !s.empty() ? u > 0 : u >= 0) {
              var l = Ce(a.from(), s.from()),
                c = De(a.to(), s.to()),
                h = a.empty() ? s.from() == s.head : a.from() == a.head;
              o <= n && --n, t.splice(--o, 2, new xi(h ? c : l, h ? l : c));
            }
          }
          return new yi(t, n);
        }
        function Ci(e, t) {
          return new yi([new xi(e, t || e)], 0);
        }
        function wi(e) {
          return e.text
            ? ge(
                e.from.line + e.text.length - 1,
                V(e.text).length + (1 == e.text.length ? e.from.ch : 0)
              )
            : e.to;
        }
        function bi(e, t) {
          if (ve(e, t.from) < 0) return e;
          if (ve(e, t.to) <= 0) return wi(t);
          var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
            r = e.ch;
          return e.line == t.to.line && (r += wi(t).ch - t.to.ch), ge(n, r);
        }
        function Si(e, t) {
          for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
            var i = e.sel.ranges[r];
            n.push(new xi(bi(i.anchor, t), bi(i.head, t)));
          }
          return Di(e.cm, n, e.sel.primIndex);
        }
        function Ai(e, t, n) {
          return e.line == t.line
            ? ge(n.line, e.ch - t.ch + n.ch)
            : ge(n.line + (e.line - t.line), e.ch);
        }
        function Ei(e) {
          (e.doc.mode = Ft(e.options, e.doc.modeOption)), ki(e);
        }
        function ki(e) {
          e.doc.iter(function(e) {
            e.stateAfter && (e.stateAfter = null),
              e.styles && (e.styles = null);
          }),
            (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
            ri(e, 100),
            e.state.modeGen++,
            e.curOp && Zr(e);
        }
        function Fi(e, t) {
          return (
            0 == t.from.ch &&
            0 == t.to.ch &&
            "" == V(t.text) &&
            (!e.cm || e.cm.options.wholeLineUpdateBefore)
          );
        }
        function Ti(e, t, n, r) {
          function i(e) {
            return n ? n[e] : null;
          }
          function o(e, n, i) {
            !(function(e, t, n, r) {
              (e.text = t),
                e.stateAfter && (e.stateAfter = null),
                e.styles && (e.styles = null),
                null != e.order && (e.order = null),
                Le(e),
                Ne(e, n);
              var i = r ? r(e) : 1;
              i != e.height && he(e, i);
            })(e, n, i, r),
              ln(e, "change", e, t);
          }
          function s(e, t) {
            for (var n = [], o = e; o < t; ++o) n.push(new Yt(l[o], i(o), r));
            return n;
          }
          var a = t.from,
            u = t.to,
            l = t.text,
            c = ue(e, a.line),
            h = ue(e, u.line),
            p = V(l),
            f = i(l.length - 1),
            d = u.line - a.line;
          if (t.full)
            e.insert(0, s(0, l.length)), e.remove(l.length, e.size - l.length);
          else if (Fi(e, t)) {
            var m = s(0, l.length - 1);
            o(h, h.text, f),
              d && e.remove(a.line, d),
              m.length && e.insert(a.line, m);
          } else if (c == h)
            if (1 == l.length)
              o(c, c.text.slice(0, a.ch) + p + c.text.slice(u.ch), f);
            else {
              var g = s(1, l.length - 1);
              g.push(new Yt(p + c.text.slice(u.ch), f, r)),
                o(c, c.text.slice(0, a.ch) + l[0], i(0)),
                e.insert(a.line + 1, g);
            }
          else if (1 == l.length)
            o(c, c.text.slice(0, a.ch) + l[0] + h.text.slice(u.ch), i(0)),
              e.remove(a.line + 1, d);
          else {
            o(c, c.text.slice(0, a.ch) + l[0], i(0)),
              o(h, p + h.text.slice(u.ch), f);
            var v = s(1, l.length - 1);
            d > 1 && e.remove(a.line + 1, d - 1), e.insert(a.line + 1, v);
          }
          ln(e, "change", e, t);
        }
        function Mi(e, t, n) {
          !(function e(r, i, o) {
            if (r.linked)
              for (var s = 0; s < r.linked.length; ++s) {
                var a = r.linked[s];
                if (a.doc != i) {
                  var u = o && a.sharedHist;
                  (n && !u) || (t(a.doc, u), e(a.doc, r, u));
                }
              }
          })(e, null, !0);
        }
        function Bi(e, t) {
          if (t.cm) throw new Error("This document is already in use.");
          (e.doc = t),
            (t.cm = e),
            ar(e),
            Ei(e),
            Li(e),
            e.options.lineWrapping || Ve(e),
            (e.options.mode = t.modeOption),
            Zr(e);
        }
        function Li(e) {
          ("rtl" == e.doc.direction ? N : E)(
            e.display.lineDiv,
            "CodeMirror-rtl"
          );
        }
        function Ni(e) {
          (this.done = []),
            (this.undone = []),
            (this.undoDepth = 1 / 0),
            (this.lastModTime = this.lastSelTime = 0),
            (this.lastOp = this.lastSelOp = null),
            (this.lastOrigin = this.lastSelOrigin = null),
            (this.generation = this.maxGeneration = e || 1);
        }
        function Ii(e, t) {
          var n = { from: xe(t.from), to: wi(t), text: le(e, t.from, t.to) };
          return (
            Ui(e, n, t.from.line, t.to.line + 1),
            Mi(
              e,
              function(e) {
                return Ui(e, n, t.from.line, t.to.line + 1);
              },
              !0
            ),
            n
          );
        }
        function Pi(e) {
          for (; e.length; ) {
            var t = V(e);
            if (!t.ranges) break;
            e.pop();
          }
        }
        function Oi(e, t, n, r) {
          var i = e.history;
          i.undone.length = 0;
          var o,
            s,
            a = +new Date();
          if (
            (i.lastOp == r ||
              (i.lastOrigin == t.origin &&
                t.origin &&
                (("+" == t.origin.charAt(0) &&
                  i.lastModTime >
                    a - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                  "*" == t.origin.charAt(0)))) &&
            (o = (function(e, t) {
              return t
                ? (Pi(e.done), V(e.done))
                : e.done.length && !V(e.done).ranges
                ? V(e.done)
                : e.done.length > 1 && !e.done[e.done.length - 2].ranges
                ? (e.done.pop(), V(e.done))
                : void 0;
            })(i, i.lastOp == r))
          )
            (s = V(o.changes)),
              0 == ve(t.from, t.to) && 0 == ve(t.from, s.to)
                ? (s.to = wi(t))
                : o.changes.push(Ii(e, t));
          else {
            var u = V(i.done);
            for (
              (u && u.ranges) || zi(e.sel, i.done),
                o = { changes: [Ii(e, t)], generation: i.generation },
                i.done.push(o);
              i.done.length > i.undoDepth;

            )
              i.done.shift(), i.done[0].ranges || i.done.shift();
          }
          i.done.push(n),
            (i.generation = ++i.maxGeneration),
            (i.lastModTime = i.lastSelTime = a),
            (i.lastOp = i.lastSelOp = r),
            (i.lastOrigin = i.lastSelOrigin = t.origin),
            s || it(e, "historyAdded");
        }
        function Ri(e, t, n, r) {
          var i = e.history,
            o = r && r.origin;
          n == i.lastSelOp ||
          (o &&
            i.lastSelOrigin == o &&
            ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
              (function(e, t, n, r) {
                var i = t.charAt(0);
                return (
                  "*" == i ||
                  ("+" == i &&
                    n.ranges.length == r.ranges.length &&
                    n.somethingSelected() == r.somethingSelected() &&
                    new Date() - e.history.lastSelTime <=
                      (e.cm ? e.cm.options.historyEventDelay : 500))
                );
              })(e, o, V(i.done), t)))
            ? (i.done[i.done.length - 1] = t)
            : zi(t, i.done),
            (i.lastSelTime = +new Date()),
            (i.lastSelOrigin = o),
            (i.lastSelOp = n),
            r && !1 !== r.clearRedo && Pi(i.undone);
        }
        function zi(e, t) {
          var n = V(t);
          (n && n.ranges && n.equals(e)) || t.push(e);
        }
        function Ui(e, t, n, r) {
          var i = t["spans_" + e.id],
            o = 0;
          e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(
            n
          ) {
            n.markedSpans &&
              ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans),
              ++o;
          });
        }
        function Wi(e) {
          if (!e) return null;
          for (var t, n = 0; n < e.length; ++n)
            e[n].marker.explicitlyCleared
              ? t || (t = e.slice(0, n))
              : t && t.push(e[n]);
          return t ? (t.length ? t : null) : e;
        }
        function Hi(e, t) {
          var n = (function(e, t) {
              var n = t["spans_" + e.id];
              if (!n) return null;
              for (var r = [], i = 0; i < t.text.length; ++i) r.push(Wi(n[i]));
              return r;
            })(e, t),
            r = Me(e, t);
          if (!n) return r;
          if (!r) return n;
          for (var i = 0; i < n.length; ++i) {
            var o = n[i],
              s = r[i];
            if (o && s)
              e: for (var a = 0; a < s.length; ++a) {
                for (var u = s[a], l = 0; l < o.length; ++l)
                  if (o[l].marker == u.marker) continue e;
                o.push(u);
              }
            else s && (n[i] = s);
          }
          return n;
        }
        function Xi(e, t, n) {
          for (var r = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges) r.push(n ? yi.prototype.deepCopy.call(o) : o);
            else {
              var s = o.changes,
                a = [];
              r.push({ changes: a });
              for (var u = 0; u < s.length; ++u) {
                var l = s[u],
                  c = void 0;
                if ((a.push({ from: l.from, to: l.to, text: l.text }), t))
                  for (var h in l)
                    (c = h.match(/^spans_(\d+)$/)) &&
                      W(t, Number(c[1])) > -1 &&
                      ((V(a)[h] = l[h]), delete l[h]);
              }
            }
          }
          return r;
        }
        function Ji(e, t, n, r) {
          if (r) {
            var i = e.anchor;
            if (n) {
              var o = ve(t, i) < 0;
              o != ve(n, i) < 0
                ? ((i = t), (t = n))
                : o != ve(t, n) < 0 && (t = n);
            }
            return new xi(i, t);
          }
          return new xi(n || t, t);
        }
        function _i(e, t, n, r, i) {
          null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
            Vi(e, new yi([Ji(e.sel.primary(), t, n, i)], 0), r);
        }
        function ji(e, t, n) {
          for (
            var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
            o < e.sel.ranges.length;
            o++
          )
            r[o] = Ji(e.sel.ranges[o], t[o], null, i);
          var s = Di(e.cm, r, e.sel.primIndex);
          Vi(e, s, n);
        }
        function Ki(e, t, n, r) {
          var i = e.sel.ranges.slice(0);
          (i[t] = n), Vi(e, Di(e.cm, i, e.sel.primIndex), r);
        }
        function Yi(e, t, n, r) {
          Vi(e, Ci(t, n), r);
        }
        function Gi(e, t, n) {
          var r = e.history.done,
            i = V(r);
          i && i.ranges ? ((r[r.length - 1] = t), qi(e, t, n)) : Vi(e, t, n);
        }
        function Vi(e, t, n) {
          qi(e, t, n), Ri(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
        }
        function qi(e, t, n) {
          (at(e, "beforeSelectionChange") ||
            (e.cm && at(e.cm, "beforeSelectionChange"))) &&
            (t = (function(e, t, n) {
              var r = {
                ranges: t.ranges,
                update: function(t) {
                  this.ranges = [];
                  for (var n = 0; n < t.length; n++)
                    this.ranges[n] = new xi(
                      be(e, t[n].anchor),
                      be(e, t[n].head)
                    );
                },
                origin: n && n.origin,
              };
              return (
                it(e, "beforeSelectionChange", e, r),
                e.cm && it(e.cm, "beforeSelectionChange", e.cm, r),
                r.ranges != t.ranges
                  ? Di(e.cm, r.ranges, r.ranges.length - 1)
                  : t
              );
            })(e, t, n));
          var r =
            (n && n.bias) ||
            (ve(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
          $i(e, Qi(e, t, r, !0)), (n && !1 === n.scroll) || !e.cm || kr(e.cm);
        }
        function $i(e, t) {
          t.equals(e.sel) ||
            ((e.sel = t),
            e.cm &&
              ((e.cm.curOp.updateInput = 1),
              (e.cm.curOp.selectionChanged = !0),
              st(e.cm)),
            ln(e, "cursorActivity", e));
        }
        function Zi(e) {
          $i(e, Qi(e, e.sel, null, !1));
        }
        function Qi(e, t, n, r) {
          for (var i, o = 0; o < t.ranges.length; o++) {
            var s = t.ranges[o],
              a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
              u = to(e, s.anchor, a && a.anchor, n, r),
              l = to(e, s.head, a && a.head, n, r);
            (i || u != s.anchor || l != s.head) &&
              (i || (i = t.ranges.slice(0, o)), (i[o] = new xi(u, l)));
          }
          return i ? Di(e.cm, i, t.primIndex) : t;
        }
        function eo(e, t, n, r, i) {
          var o = ue(e, t.line);
          if (o.markedSpans)
            for (var s = 0; s < o.markedSpans.length; ++s) {
              var a = o.markedSpans[s],
                u = a.marker;
              if (
                (null == a.from ||
                  (u.inclusiveLeft ? a.from <= t.ch : a.from < t.ch)) &&
                (null == a.to ||
                  (u.inclusiveRight ? a.to >= t.ch : a.to > t.ch))
              ) {
                if (i && (it(u, "beforeCursorEnter"), u.explicitlyCleared)) {
                  if (o.markedSpans) {
                    --s;
                    continue;
                  }
                  break;
                }
                if (!u.atomic) continue;
                if (n) {
                  var l = u.find(r < 0 ? 1 : -1),
                    c = void 0;
                  if (
                    ((r < 0 ? u.inclusiveRight : u.inclusiveLeft) &&
                      (l = no(e, l, -r, l && l.line == t.line ? o : null)),
                    l &&
                      l.line == t.line &&
                      (c = ve(l, n)) &&
                      (r < 0 ? c < 0 : c > 0))
                  )
                    return eo(e, l, t, r, i);
                }
                var h = u.find(r < 0 ? -1 : 1);
                return (
                  (r < 0 ? u.inclusiveLeft : u.inclusiveRight) &&
                    (h = no(e, h, r, h.line == t.line ? o : null)),
                  h ? eo(e, h, t, r, i) : null
                );
              }
            }
          return t;
        }
        function to(e, t, n, r, i) {
          var o = r || 1,
            s =
              eo(e, t, n, o, i) ||
              (!i && eo(e, t, n, o, !0)) ||
              eo(e, t, n, -o, i) ||
              (!i && eo(e, t, n, -o, !0));
          return s || ((e.cantEdit = !0), ge(e.first, 0));
        }
        function no(e, t, n, r) {
          return n < 0 && 0 == t.ch
            ? t.line > e.first
              ? be(e, ge(t.line - 1))
              : null
            : n > 0 && t.ch == (r || ue(e, t.line)).text.length
            ? t.line < e.first + e.size - 1
              ? ge(t.line + 1, 0)
              : null
            : new ge(t.line, t.ch + n);
        }
        function ro(e) {
          e.setSelection(ge(e.firstLine(), 0), ge(e.lastLine()), J);
        }
        function io(e, t, n) {
          var r = {
            canceled: !1,
            from: t.from,
            to: t.to,
            text: t.text,
            origin: t.origin,
            cancel: function() {
              return (r.canceled = !0);
            },
          };
          return (
            n &&
              (r.update = function(t, n, i, o) {
                t && (r.from = be(e, t)),
                  n && (r.to = be(e, n)),
                  i && (r.text = i),
                  void 0 !== o && (r.origin = o);
              }),
            it(e, "beforeChange", e, r),
            e.cm && it(e.cm, "beforeChange", e.cm, r),
            r.canceled
              ? (e.cm && (e.cm.curOp.updateInput = 2), null)
              : { from: r.from, to: r.to, text: r.text, origin: r.origin }
          );
        }
        function oo(e, t, n) {
          if (e.cm) {
            if (!e.cm.curOp) return Vr(e.cm, oo)(e, t, n);
            if (e.cm.state.suppressEdits) return;
          }
          if (
            !(at(e, "beforeChange") || (e.cm && at(e.cm, "beforeChange"))) ||
            (t = io(e, t, !0))
          ) {
            var r =
              Ae &&
              !n &&
              (function(e, t, n) {
                var r = null;
                if (
                  (e.iter(t.line, n.line + 1, function(e) {
                    if (e.markedSpans)
                      for (var t = 0; t < e.markedSpans.length; ++t) {
                        var n = e.markedSpans[t].marker;
                        !n.readOnly ||
                          (r && -1 != W(r, n)) ||
                          (r || (r = [])).push(n);
                      }
                  }),
                  !r)
                )
                  return null;
                for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
                  for (var s = r[o], a = s.find(0), u = 0; u < i.length; ++u) {
                    var l = i[u];
                    if (!(ve(l.to, a.from) < 0 || ve(l.from, a.to) > 0)) {
                      var c = [u, 1],
                        h = ve(l.from, a.from),
                        p = ve(l.to, a.to);
                      (h < 0 || (!s.inclusiveLeft && !h)) &&
                        c.push({ from: l.from, to: a.from }),
                        (p > 0 || (!s.inclusiveRight && !p)) &&
                          c.push({ from: a.to, to: l.to }),
                        i.splice.apply(i, c),
                        (u += c.length - 3);
                    }
                  }
                return i;
              })(e, t.from, t.to);
            if (r)
              for (var i = r.length - 1; i >= 0; --i)
                so(e, {
                  from: r[i].from,
                  to: r[i].to,
                  text: i ? [""] : t.text,
                  origin: t.origin,
                });
            else so(e, t);
          }
        }
        function so(e, t) {
          if (1 != t.text.length || "" != t.text[0] || 0 != ve(t.from, t.to)) {
            var n = Si(e, t);
            Oi(e, t, n, e.cm ? e.cm.curOp.id : NaN), lo(e, t, n, Me(e, t));
            var r = [];
            Mi(e, function(e, n) {
              n ||
                -1 != W(r, e.history) ||
                (fo(e.history, t), r.push(e.history)),
                lo(e, t, null, Me(e, t));
            });
          }
        }
        function ao(e, t, n) {
          var r = e.cm && e.cm.state.suppressEdits;
          if (!r || n) {
            for (
              var i,
                o = e.history,
                s = e.sel,
                a = "undo" == t ? o.done : o.undone,
                u = "undo" == t ? o.undone : o.done,
                l = 0;
              l < a.length &&
              ((i = a[l]), n ? !i.ranges || i.equals(e.sel) : i.ranges);
              l++
            );
            if (l != a.length) {
              for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                if (!(i = a.pop()).ranges) {
                  if (r) return void a.push(i);
                  break;
                }
                if ((zi(i, u), n && !i.equals(e.sel)))
                  return void Vi(e, i, { clearRedo: !1 });
                s = i;
              }
              var c = [];
              zi(s, u),
                u.push({ changes: c, generation: o.generation }),
                (o.generation = i.generation || ++o.maxGeneration);
              for (
                var h =
                    at(e, "beforeChange") || (e.cm && at(e.cm, "beforeChange")),
                  p = function(n) {
                    var r = i.changes[n];
                    if (((r.origin = t), h && !io(e, r, !1)))
                      return (a.length = 0), {};
                    c.push(Ii(e, r));
                    var o = n ? Si(e, r) : V(a);
                    lo(e, r, o, Hi(e, r)),
                      !n &&
                        e.cm &&
                        e.cm.scrollIntoView({ from: r.from, to: wi(r) });
                    var s = [];
                    Mi(e, function(e, t) {
                      t ||
                        -1 != W(s, e.history) ||
                        (fo(e.history, r), s.push(e.history)),
                        lo(e, r, null, Hi(e, r));
                    });
                  },
                  f = i.changes.length - 1;
                f >= 0;
                --f
              ) {
                var d = p(f);
                if (d) return d.v;
              }
            }
          }
        }
        function uo(e, t) {
          if (
            0 != t &&
            ((e.first += t),
            (e.sel = new yi(
              q(e.sel.ranges, function(e) {
                return new xi(
                  ge(e.anchor.line + t, e.anchor.ch),
                  ge(e.head.line + t, e.head.ch)
                );
              }),
              e.sel.primIndex
            )),
            e.cm)
          ) {
            Zr(e.cm, e.first, e.first - t, t);
            for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
              Qr(e.cm, r, "gutter");
          }
        }
        function lo(e, t, n, r) {
          if (e.cm && !e.cm.curOp) return Vr(e.cm, lo)(e, t, n, r);
          if (t.to.line < e.first)
            uo(e, t.text.length - 1 - (t.to.line - t.from.line));
          else if (!(t.from.line > e.lastLine())) {
            if (t.from.line < e.first) {
              var i = t.text.length - 1 - (e.first - t.from.line);
              uo(e, i),
                (t = {
                  from: ge(e.first, 0),
                  to: ge(t.to.line + i, t.to.ch),
                  text: [V(t.text)],
                  origin: t.origin,
                });
            }
            var o = e.lastLine();
            t.to.line > o &&
              (t = {
                from: t.from,
                to: ge(o, ue(e, o).text.length),
                text: [t.text[0]],
                origin: t.origin,
              }),
              (t.removed = le(e, t.from, t.to)),
              n || (n = Si(e, t)),
              e.cm
                ? (function(e, t, n) {
                    var r = e.doc,
                      i = e.display,
                      o = t.from,
                      s = t.to,
                      a = !1,
                      u = o.line;
                    e.options.lineWrapping ||
                      ((u = pe(Xe(ue(r, o.line)))),
                      r.iter(u, s.line + 1, function(e) {
                        if (e == i.maxLine) return (a = !0), !0;
                      })),
                      r.sel.contains(t.from, t.to) > -1 && st(e),
                      Ti(r, t, n, sr(e)),
                      e.options.lineWrapping ||
                        (r.iter(u, o.line + t.text.length, function(e) {
                          var t = Ge(e);
                          t > i.maxLineLength &&
                            ((i.maxLine = e),
                            (i.maxLineLength = t),
                            (i.maxLineChanged = !0),
                            (a = !1));
                        }),
                        a && (e.curOp.updateMaxLine = !0)),
                      (function(e, t) {
                        if (
                          ((e.modeFrontier = Math.min(e.modeFrontier, t)),
                          !(e.highlightFrontier < t - 10))
                        ) {
                          for (var n = e.first, r = t - 1; r > n; r--) {
                            var i = ue(e, r).stateAfter;
                            if (
                              i &&
                              (!(i instanceof Pt) || r + i.lookAhead < t)
                            ) {
                              n = r + 1;
                              break;
                            }
                          }
                          e.highlightFrontier = Math.min(
                            e.highlightFrontier,
                            n
                          );
                        }
                      })(r, o.line),
                      ri(e, 400);
                    var l = t.text.length - (s.line - o.line) - 1;
                    t.full
                      ? Zr(e)
                      : o.line != s.line || 1 != t.text.length || Fi(e.doc, t)
                      ? Zr(e, o.line, s.line + 1, l)
                      : Qr(e, o.line, "text");
                    var c = at(e, "changes"),
                      h = at(e, "change");
                    if (h || c) {
                      var p = {
                        from: o,
                        to: s,
                        text: t.text,
                        removed: t.removed,
                        origin: t.origin,
                      };
                      h && ln(e, "change", e, p),
                        c &&
                          (
                            e.curOp.changeObjs || (e.curOp.changeObjs = [])
                          ).push(p);
                    }
                    e.display.selForContextMenu = null;
                  })(e.cm, t, r)
                : Ti(e, t, r),
              qi(e, n, J);
          }
        }
        function co(e, t, n, r, i) {
          var o;
          r || (r = n),
            ve(r, n) < 0 && ((n = (o = [r, n])[0]), (r = o[1])),
            "string" == typeof t && (t = e.splitLines(t)),
            oo(e, { from: n, to: r, text: t, origin: i });
        }
        function ho(e, t, n, r) {
          n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
        }
        function po(e, t, n, r) {
          for (var i = 0; i < e.length; ++i) {
            var o = e[i],
              s = !0;
            if (o.ranges) {
              o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
              for (var a = 0; a < o.ranges.length; a++)
                ho(o.ranges[a].anchor, t, n, r), ho(o.ranges[a].head, t, n, r);
            } else {
              for (var u = 0; u < o.changes.length; ++u) {
                var l = o.changes[u];
                if (n < l.from.line)
                  (l.from = ge(l.from.line + r, l.from.ch)),
                    (l.to = ge(l.to.line + r, l.to.ch));
                else if (t <= l.to.line) {
                  s = !1;
                  break;
                }
              }
              s || (e.splice(0, i + 1), (i = 0));
            }
          }
        }
        function fo(e, t) {
          var n = t.from.line,
            r = t.to.line,
            i = t.text.length - (r - n) - 1;
          po(e.done, n, r, i), po(e.undone, n, r, i);
        }
        function mo(e, t, n, r) {
          var i = t,
            o = t;
          return (
            "number" == typeof t ? (o = ue(e, we(e, t))) : (i = pe(t)),
            null == i ? null : (r(o, i) && e.cm && Qr(e.cm, i, n), o)
          );
        }
        function go(e) {
          (this.lines = e), (this.parent = null);
          for (var t = 0, n = 0; n < e.length; ++n)
            (e[n].parent = this), (t += e[n].height);
          this.height = t;
        }
        function vo(e) {
          this.children = e;
          for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
            var i = e[r];
            (t += i.chunkSize()), (n += i.height), (i.parent = this);
          }
          (this.size = t), (this.height = n), (this.parent = null);
        }
        (xi.prototype.from = function() {
          return Ce(this.anchor, this.head);
        }),
          (xi.prototype.to = function() {
            return De(this.anchor, this.head);
          }),
          (xi.prototype.empty = function() {
            return (
              this.head.line == this.anchor.line &&
              this.head.ch == this.anchor.ch
            );
          }),
          (go.prototype = {
            chunkSize: function() {
              return this.lines.length;
            },
            removeInner: function(e, t) {
              for (var n = e, r = e + t; n < r; ++n) {
                var i = this.lines[n];
                (this.height -= i.height), Gt(i), ln(i, "delete");
              }
              this.lines.splice(e, t);
            },
            collapse: function(e) {
              e.push.apply(e, this.lines);
            },
            insertInner: function(e, t, n) {
              (this.height += n),
                (this.lines = this.lines
                  .slice(0, e)
                  .concat(t)
                  .concat(this.lines.slice(e)));
              for (var r = 0; r < t.length; ++r) t[r].parent = this;
            },
            iterN: function(e, t, n) {
              for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
            },
          }),
          (vo.prototype = {
            chunkSize: function() {
              return this.size;
            },
            removeInner: function(e, t) {
              this.size -= t;
              for (var n = 0; n < this.children.length; ++n) {
                var r = this.children[n],
                  i = r.chunkSize();
                if (e < i) {
                  var o = Math.min(t, i - e),
                    s = r.height;
                  if (
                    (r.removeInner(e, o),
                    (this.height -= s - r.height),
                    i == o && (this.children.splice(n--, 1), (r.parent = null)),
                    0 == (t -= o))
                  )
                    break;
                  e = 0;
                } else e -= i;
              }
              if (
                this.size - t < 25 &&
                (this.children.length > 1 || !(this.children[0] instanceof go))
              ) {
                var a = [];
                this.collapse(a),
                  (this.children = [new go(a)]),
                  (this.children[0].parent = this);
              }
            },
            collapse: function(e) {
              for (var t = 0; t < this.children.length; ++t)
                this.children[t].collapse(e);
            },
            insertInner: function(e, t, n) {
              (this.size += t.length), (this.height += n);
              for (var r = 0; r < this.children.length; ++r) {
                var i = this.children[r],
                  o = i.chunkSize();
                if (e <= o) {
                  if (
                    (i.insertInner(e, t, n), i.lines && i.lines.length > 50)
                  ) {
                    for (
                      var s = (i.lines.length % 25) + 25, a = s;
                      a < i.lines.length;

                    ) {
                      var u = new go(i.lines.slice(a, (a += 25)));
                      (i.height -= u.height),
                        this.children.splice(++r, 0, u),
                        (u.parent = this);
                    }
                    (i.lines = i.lines.slice(0, s)), this.maybeSpill();
                  }
                  break;
                }
                e -= o;
              }
            },
            maybeSpill: function() {
              if (!(this.children.length <= 10)) {
                var e = this;
                do {
                  var t = e.children.splice(e.children.length - 5, 5),
                    n = new vo(t);
                  if (e.parent) {
                    (e.size -= n.size), (e.height -= n.height);
                    var r = W(e.parent.children, e);
                    e.parent.children.splice(r + 1, 0, n);
                  } else {
                    var i = new vo(e.children);
                    (i.parent = e), (e.children = [i, n]), (e = i);
                  }
                  n.parent = e.parent;
                } while (e.children.length > 10);
                e.parent.maybeSpill();
              }
            },
            iterN: function(e, t, n) {
              for (var r = 0; r < this.children.length; ++r) {
                var i = this.children[r],
                  o = i.chunkSize();
                if (e < o) {
                  var s = Math.min(t, o - e);
                  if (i.iterN(e, s, n)) return !0;
                  if (0 == (t -= s)) break;
                  e = 0;
                } else e -= o;
              }
            },
          });
        var yo = function(e, t, n) {
          if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
          (this.doc = e), (this.node = t);
        };
        function xo(e, t, n) {
          Ye(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) &&
            Er(e, n);
        }
        (yo.prototype.clear = function() {
          var e = this.doc.cm,
            t = this.line.widgets,
            n = this.line,
            r = pe(n);
          if (null != r && t) {
            for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
            t.length || (n.widgets = null);
            var o = wn(this);
            he(n, Math.max(0, n.height - o)),
              e &&
                (Gr(e, function() {
                  xo(e, n, -o), Qr(e, r, "widget");
                }),
                ln(e, "lineWidgetCleared", e, this, r));
          }
        }),
          (yo.prototype.changed = function() {
            var e = this,
              t = this.height,
              n = this.doc.cm,
              r = this.line;
            this.height = null;
            var i = wn(this) - t;
            i &&
              (je(this.doc, r) || he(r, r.height + i),
              n &&
                Gr(n, function() {
                  (n.curOp.forceUpdate = !0),
                    xo(n, r, i),
                    ln(n, "lineWidgetChanged", n, e, pe(r));
                }));
          }),
          ut(yo);
        var Do = 0,
          Co = function(e, t) {
            (this.lines = []),
              (this.type = t),
              (this.doc = e),
              (this.id = ++Do);
          };
        function wo(e, t, n, r, i) {
          if (r && r.shared)
            return (function(e, t, n, r, i) {
              (r = R(r)).shared = !1;
              var o = [wo(e, t, n, r, i)],
                s = o[0],
                a = r.widgetNode;
              return (
                Mi(e, function(e) {
                  a && (r.widgetNode = a.cloneNode(!0)),
                    o.push(wo(e, be(e, t), be(e, n), r, i));
                  for (var u = 0; u < e.linked.length; ++u)
                    if (e.linked[u].isParent) return;
                  s = V(o);
                }),
                new bo(o, s)
              );
            })(e, t, n, r, i);
          if (e.cm && !e.cm.curOp) return Vr(e.cm, wo)(e, t, n, r, i);
          var o = new Co(e, i),
            s = ve(t, n);
          if ((r && R(r, o, !1), s > 0 || (0 == s && !1 !== o.clearWhenEmpty)))
            return o;
          if (
            (o.replacedWith &&
              ((o.collapsed = !0),
              (o.widgetNode = M("span", [o.replacedWith], "CodeMirror-widget")),
              r.handleMouseEvents ||
                o.widgetNode.setAttribute("cm-ignore-events", "true"),
              r.insertLeft && (o.widgetNode.insertLeft = !0)),
            o.collapsed)
          ) {
            if (
              He(e, t.line, t, n, o) ||
              (t.line != n.line && He(e, n.line, t, n, o))
            )
              throw new Error(
                "Inserting collapsed marker partially overlapping an existing one"
              );
            Ee = !0;
          }
          o.addToHistory &&
            Oi(e, { from: t, to: n, origin: "markText" }, e.sel, NaN);
          var a,
            u = t.line,
            l = e.cm;
          if (
            (e.iter(u, n.line + 1, function(e) {
              l &&
                o.collapsed &&
                !l.options.lineWrapping &&
                Xe(e) == l.display.maxLine &&
                (a = !0),
                o.collapsed && u != t.line && he(e, 0),
                (function(e, t) {
                  (e.markedSpans = e.markedSpans
                    ? e.markedSpans.concat([t])
                    : [t]),
                    t.marker.attachLine(e);
                })(
                  e,
                  new ke(
                    o,
                    u == t.line ? t.ch : null,
                    u == n.line ? n.ch : null
                  )
                ),
                ++u;
            }),
            o.collapsed &&
              e.iter(t.line, n.line + 1, function(t) {
                je(e, t) && he(t, 0);
              }),
            o.clearOnEnter &&
              tt(o, "beforeCursorEnter", function() {
                return o.clear();
              }),
            o.readOnly &&
              ((Ae = !0),
              (e.history.done.length || e.history.undone.length) &&
                e.clearHistory()),
            o.collapsed && ((o.id = ++Do), (o.atomic = !0)),
            l)
          ) {
            if ((a && (l.curOp.updateMaxLine = !0), o.collapsed))
              Zr(l, t.line, n.line + 1);
            else if (
              o.className ||
              o.startStyle ||
              o.endStyle ||
              o.css ||
              o.attributes ||
              o.title
            )
              for (var c = t.line; c <= n.line; c++) Qr(l, c, "text");
            o.atomic && Zi(l.doc), ln(l, "markerAdded", l, o);
          }
          return o;
        }
        (Co.prototype.clear = function() {
          if (!this.explicitlyCleared) {
            var e = this.doc.cm,
              t = e && !e.curOp;
            if ((t && Xr(e), at(this, "clear"))) {
              var n = this.find();
              n && ln(this, "clear", n.from, n.to);
            }
            for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
              var s = this.lines[o],
                a = Fe(s.markedSpans, this);
              e && !this.collapsed
                ? Qr(e, pe(s), "text")
                : e &&
                  (null != a.to && (i = pe(s)), null != a.from && (r = pe(s))),
                (s.markedSpans = Te(s.markedSpans, a)),
                null == a.from &&
                  this.collapsed &&
                  !je(this.doc, s) &&
                  e &&
                  he(s, nr(e.display));
            }
            if (e && this.collapsed && !e.options.lineWrapping)
              for (var u = 0; u < this.lines.length; ++u) {
                var l = Xe(this.lines[u]),
                  c = Ge(l);
                c > e.display.maxLineLength &&
                  ((e.display.maxLine = l),
                  (e.display.maxLineLength = c),
                  (e.display.maxLineChanged = !0));
              }
            null != r && e && this.collapsed && Zr(e, r, i + 1),
              (this.lines.length = 0),
              (this.explicitlyCleared = !0),
              this.atomic &&
                this.doc.cantEdit &&
                ((this.doc.cantEdit = !1), e && Zi(e.doc)),
              e && ln(e, "markerCleared", e, this, r, i),
              t && Jr(e),
              this.parent && this.parent.clear();
          }
        }),
          (Co.prototype.find = function(e, t) {
            var n, r;
            null == e && "bookmark" == this.type && (e = 1);
            for (var i = 0; i < this.lines.length; ++i) {
              var o = this.lines[i],
                s = Fe(o.markedSpans, this);
              if (null != s.from && ((n = ge(t ? o : pe(o), s.from)), -1 == e))
                return n;
              if (null != s.to && ((r = ge(t ? o : pe(o), s.to)), 1 == e))
                return r;
            }
            return n && { from: n, to: r };
          }),
          (Co.prototype.changed = function() {
            var e = this,
              t = this.find(-1, !0),
              n = this,
              r = this.doc.cm;
            t &&
              r &&
              Gr(r, function() {
                var i = t.line,
                  o = pe(t.line),
                  s = Ln(r, o);
                if (
                  (s &&
                    (Un(s),
                    (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
                  (r.curOp.updateMaxLine = !0),
                  !je(n.doc, i) && null != n.height)
                ) {
                  var a = n.height;
                  n.height = null;
                  var u = wn(n) - a;
                  u && he(i, i.height + u);
                }
                ln(r, "markerChanged", r, e);
              });
          }),
          (Co.prototype.attachLine = function(e) {
            if (!this.lines.length && this.doc.cm) {
              var t = this.doc.cm.curOp;
              (t.maybeHiddenMarkers && -1 != W(t.maybeHiddenMarkers, this)) ||
                (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
                  this
                );
            }
            this.lines.push(e);
          }),
          (Co.prototype.detachLine = function(e) {
            if (
              (this.lines.splice(W(this.lines, e), 1),
              !this.lines.length && this.doc.cm)
            ) {
              var t = this.doc.cm.curOp;
              (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
            }
          }),
          ut(Co);
        var bo = function(e, t) {
          (this.markers = e), (this.primary = t);
          for (var n = 0; n < e.length; ++n) e[n].parent = this;
        };
        function So(e) {
          return e.findMarks(
            ge(e.first, 0),
            e.clipPos(ge(e.lastLine())),
            function(e) {
              return e.parent;
            }
          );
        }
        function Ao(e) {
          for (
            var t = function(t) {
                var n = e[t],
                  r = [n.primary.doc];
                Mi(n.primary.doc, function(e) {
                  return r.push(e);
                });
                for (var i = 0; i < n.markers.length; i++) {
                  var o = n.markers[i];
                  -1 == W(r, o.doc) &&
                    ((o.parent = null), n.markers.splice(i--, 1));
                }
              },
              n = 0;
            n < e.length;
            n++
          )
            t(n);
        }
        (bo.prototype.clear = function() {
          if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var e = 0; e < this.markers.length; ++e)
              this.markers[e].clear();
            ln(this, "clear");
          }
        }),
          (bo.prototype.find = function(e, t) {
            return this.primary.find(e, t);
          }),
          ut(bo);
        var Eo = 0,
          ko = function(e, t, n, r, i) {
            if (!(this instanceof ko)) return new ko(e, t, n, r, i);
            null == n && (n = 0),
              vo.call(this, [new go([new Yt("", null)])]),
              (this.first = n),
              (this.scrollTop = this.scrollLeft = 0),
              (this.cantEdit = !1),
              (this.cleanGeneration = 1),
              (this.modeFrontier = this.highlightFrontier = n);
            var o = ge(n, 0);
            (this.sel = Ci(o)),
              (this.history = new Ni(null)),
              (this.id = ++Eo),
              (this.modeOption = t),
              (this.lineSep = r),
              (this.direction = "rtl" == i ? "rtl" : "ltr"),
              (this.extend = !1),
              "string" == typeof e && (e = this.splitLines(e)),
              Ti(this, { from: o, to: o, text: e }),
              Vi(this, Ci(o), J);
          };
        (ko.prototype = Z(vo.prototype, {
          constructor: ko,
          iter: function(e, t, n) {
            n
              ? this.iterN(e - this.first, t - e, n)
              : this.iterN(this.first, this.first + this.size, e);
          },
          insert: function(e, t) {
            for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
            this.insertInner(e - this.first, t, n);
          },
          remove: function(e, t) {
            this.removeInner(e - this.first, t);
          },
          getValue: function(e) {
            var t = ce(this, this.first, this.first + this.size);
            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          setValue: $r(function(e) {
            var t = ge(this.first, 0),
              n = this.first + this.size - 1;
            oo(
              this,
              {
                from: t,
                to: ge(n, ue(this, n).text.length),
                text: this.splitLines(e),
                origin: "setValue",
                full: !0,
              },
              !0
            ),
              this.cm && Fr(this.cm, 0, 0),
              Vi(this, Ci(t), J);
          }),
          replaceRange: function(e, t, n, r) {
            (t = be(this, t)), (n = n ? be(this, n) : t), co(this, e, t, n, r);
          },
          getRange: function(e, t, n) {
            var r = le(this, be(this, e), be(this, t));
            return !1 === n ? r : r.join(n || this.lineSeparator());
          },
          getLine: function(e) {
            var t = this.getLineHandle(e);
            return t && t.text;
          },
          getLineHandle: function(e) {
            if (de(this, e)) return ue(this, e);
          },
          getLineNumber: function(e) {
            return pe(e);
          },
          getLineHandleVisualStart: function(e) {
            return "number" == typeof e && (e = ue(this, e)), Xe(e);
          },
          lineCount: function() {
            return this.size;
          },
          firstLine: function() {
            return this.first;
          },
          lastLine: function() {
            return this.first + this.size - 1;
          },
          clipPos: function(e) {
            return be(this, e);
          },
          getCursor: function(e) {
            var t = this.sel.primary();
            return null == e || "head" == e
              ? t.head
              : "anchor" == e
              ? t.anchor
              : "end" == e || "to" == e || !1 === e
              ? t.to()
              : t.from();
          },
          listSelections: function() {
            return this.sel.ranges;
          },
          somethingSelected: function() {
            return this.sel.somethingSelected();
          },
          setCursor: $r(function(e, t, n) {
            Yi(
              this,
              be(this, "number" == typeof e ? ge(e, t || 0) : e),
              null,
              n
            );
          }),
          setSelection: $r(function(e, t, n) {
            Yi(this, be(this, e), be(this, t || e), n);
          }),
          extendSelection: $r(function(e, t, n) {
            _i(this, be(this, e), t && be(this, t), n);
          }),
          extendSelections: $r(function(e, t) {
            ji(this, Se(this, e), t);
          }),
          extendSelectionsBy: $r(function(e, t) {
            var n = q(this.sel.ranges, e);
            ji(this, Se(this, n), t);
          }),
          setSelections: $r(function(e, t, n) {
            if (e.length) {
              for (var r = [], i = 0; i < e.length; i++)
                r[i] = new xi(be(this, e[i].anchor), be(this, e[i].head));
              null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
                Vi(this, Di(this.cm, r, t), n);
            }
          }),
          addSelection: $r(function(e, t, n) {
            var r = this.sel.ranges.slice(0);
            r.push(new xi(be(this, e), be(this, t || e))),
              Vi(this, Di(this.cm, r, r.length - 1), n);
          }),
          getSelection: function(e) {
            for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
              var i = le(this, n[r].from(), n[r].to());
              t = t ? t.concat(i) : i;
            }
            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          getSelections: function(e) {
            for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
              var i = le(this, n[r].from(), n[r].to());
              !1 !== e && (i = i.join(e || this.lineSeparator())), (t[r] = i);
            }
            return t;
          },
          replaceSelection: function(e, t, n) {
            for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
            this.replaceSelections(r, t, n || "+input");
          },
          replaceSelections: $r(function(e, t, n) {
            for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
              var s = i.ranges[o];
              r[o] = {
                from: s.from(),
                to: s.to(),
                text: this.splitLines(e[o]),
                origin: n,
              };
            }
            for (
              var a =
                  t &&
                  "end" != t &&
                  (function(e, t, n) {
                    for (
                      var r = [], i = ge(e.first, 0), o = i, s = 0;
                      s < t.length;
                      s++
                    ) {
                      var a = t[s],
                        u = Ai(a.from, i, o),
                        l = Ai(wi(a), i, o);
                      if (((i = a.to), (o = l), "around" == n)) {
                        var c = e.sel.ranges[s],
                          h = ve(c.head, c.anchor) < 0;
                        r[s] = new xi(h ? l : u, h ? u : l);
                      } else r[s] = new xi(u, u);
                    }
                    return new yi(r, e.sel.primIndex);
                  })(this, r, t),
                u = r.length - 1;
              u >= 0;
              u--
            )
              oo(this, r[u]);
            a ? Gi(this, a) : this.cm && kr(this.cm);
          }),
          undo: $r(function() {
            ao(this, "undo");
          }),
          redo: $r(function() {
            ao(this, "redo");
          }),
          undoSelection: $r(function() {
            ao(this, "undo", !0);
          }),
          redoSelection: $r(function() {
            ao(this, "redo", !0);
          }),
          setExtending: function(e) {
            this.extend = e;
          },
          getExtending: function() {
            return this.extend;
          },
          historySize: function() {
            for (
              var e = this.history, t = 0, n = 0, r = 0;
              r < e.done.length;
              r++
            )
              e.done[r].ranges || ++t;
            for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
            return { undo: t, redo: n };
          },
          clearHistory: function() {
            this.history = new Ni(this.history.maxGeneration);
          },
          markClean: function() {
            this.cleanGeneration = this.changeGeneration(!0);
          },
          changeGeneration: function(e) {
            return (
              e &&
                (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
              this.history.generation
            );
          },
          isClean: function(e) {
            return this.history.generation == (e || this.cleanGeneration);
          },
          getHistory: function() {
            return {
              done: Xi(this.history.done),
              undone: Xi(this.history.undone),
            };
          },
          setHistory: function(e) {
            var t = (this.history = new Ni(this.history.maxGeneration));
            (t.done = Xi(e.done.slice(0), null, !0)),
              (t.undone = Xi(e.undone.slice(0), null, !0));
          },
          setGutterMarker: $r(function(e, t, n) {
            return mo(this, e, "gutter", function(e) {
              var r = e.gutterMarkers || (e.gutterMarkers = {});
              return (r[t] = n), !n && ne(r) && (e.gutterMarkers = null), !0;
            });
          }),
          clearGutter: $r(function(e) {
            var t = this;
            this.iter(function(n) {
              n.gutterMarkers &&
                n.gutterMarkers[e] &&
                mo(t, n, "gutter", function() {
                  return (
                    (n.gutterMarkers[e] = null),
                    ne(n.gutterMarkers) && (n.gutterMarkers = null),
                    !0
                  );
                });
            });
          }),
          lineInfo: function(e) {
            var t;
            if ("number" == typeof e) {
              if (!de(this, e)) return null;
              if (((t = e), !(e = ue(this, e)))) return null;
            } else if (null == (t = pe(e))) return null;
            return {
              line: t,
              handle: e,
              text: e.text,
              gutterMarkers: e.gutterMarkers,
              textClass: e.textClass,
              bgClass: e.bgClass,
              wrapClass: e.wrapClass,
              widgets: e.widgets,
            };
          },
          addLineClass: $r(function(e, t, n) {
            return mo(this, e, "gutter" == t ? "gutter" : "class", function(e) {
              var r =
                "text" == t
                  ? "textClass"
                  : "background" == t
                  ? "bgClass"
                  : "gutter" == t
                  ? "gutterClass"
                  : "wrapClass";
              if (e[r]) {
                if (S(n).test(e[r])) return !1;
                e[r] += " " + n;
              } else e[r] = n;
              return !0;
            });
          }),
          removeLineClass: $r(function(e, t, n) {
            return mo(this, e, "gutter" == t ? "gutter" : "class", function(e) {
              var r =
                  "text" == t
                    ? "textClass"
                    : "background" == t
                    ? "bgClass"
                    : "gutter" == t
                    ? "gutterClass"
                    : "wrapClass",
                i = e[r];
              if (!i) return !1;
              if (null == n) e[r] = null;
              else {
                var o = i.match(S(n));
                if (!o) return !1;
                var s = o.index + o[0].length;
                e[r] =
                  i.slice(0, o.index) +
                    (o.index && s != i.length ? " " : "") +
                    i.slice(s) || null;
              }
              return !0;
            });
          }),
          addLineWidget: $r(function(e, t, n) {
            return (function(e, t, n, r) {
              var i = new yo(e, n, r),
                o = e.cm;
              return (
                o && i.noHScroll && (o.display.alignWidgets = !0),
                mo(e, t, "widget", function(t) {
                  var n = t.widgets || (t.widgets = []);
                  if (
                    (null == i.insertAt
                      ? n.push(i)
                      : n.splice(
                          Math.min(n.length - 1, Math.max(0, i.insertAt)),
                          0,
                          i
                        ),
                    (i.line = t),
                    o && !je(e, t))
                  ) {
                    var r = Ye(t) < e.scrollTop;
                    he(t, t.height + wn(i)),
                      r && Er(o, i.height),
                      (o.curOp.forceUpdate = !0);
                  }
                  return !0;
                }),
                o &&
                  ln(
                    o,
                    "lineWidgetAdded",
                    o,
                    i,
                    "number" == typeof t ? t : pe(t)
                  ),
                i
              );
            })(this, e, t, n);
          }),
          removeLineWidget: function(e) {
            e.clear();
          },
          markText: function(e, t, n) {
            return wo(
              this,
              be(this, e),
              be(this, t),
              n,
              (n && n.type) || "range"
            );
          },
          setBookmark: function(e, t) {
            var n = {
              replacedWith: t && (null == t.nodeType ? t.widget : t),
              insertLeft: t && t.insertLeft,
              clearWhenEmpty: !1,
              shared: t && t.shared,
              handleMouseEvents: t && t.handleMouseEvents,
            };
            return wo(this, (e = be(this, e)), e, n, "bookmark");
          },
          findMarksAt: function(e) {
            e = be(this, e);
            var t = [],
              n = ue(this, e.line).markedSpans;
            if (n)
              for (var r = 0; r < n.length; ++r) {
                var i = n[r];
                (null == i.from || i.from <= e.ch) &&
                  (null == i.to || i.to >= e.ch) &&
                  t.push(i.marker.parent || i.marker);
              }
            return t;
          },
          findMarks: function(e, t, n) {
            (e = be(this, e)), (t = be(this, t));
            var r = [],
              i = e.line;
            return (
              this.iter(e.line, t.line + 1, function(o) {
                var s = o.markedSpans;
                if (s)
                  for (var a = 0; a < s.length; a++) {
                    var u = s[a];
                    (null != u.to && i == e.line && e.ch >= u.to) ||
                      (null == u.from && i != e.line) ||
                      (null != u.from && i == t.line && u.from >= t.ch) ||
                      (n && !n(u.marker)) ||
                      r.push(u.marker.parent || u.marker);
                  }
                ++i;
              }),
              r
            );
          },
          getAllMarks: function() {
            var e = [];
            return (
              this.iter(function(t) {
                var n = t.markedSpans;
                if (n)
                  for (var r = 0; r < n.length; ++r)
                    null != n[r].from && e.push(n[r].marker);
              }),
              e
            );
          },
          posFromIndex: function(e) {
            var t,
              n = this.first,
              r = this.lineSeparator().length;
            return (
              this.iter(function(i) {
                var o = i.text.length + r;
                if (o > e) return (t = e), !0;
                (e -= o), ++n;
              }),
              be(this, ge(n, t))
            );
          },
          indexFromPos: function(e) {
            var t = (e = be(this, e)).ch;
            if (e.line < this.first || e.ch < 0) return 0;
            var n = this.lineSeparator().length;
            return (
              this.iter(this.first, e.line, function(e) {
                t += e.text.length + n;
              }),
              t
            );
          },
          copy: function(e) {
            var t = new ko(
              ce(this, this.first, this.first + this.size),
              this.modeOption,
              this.first,
              this.lineSep,
              this.direction
            );
            return (
              (t.scrollTop = this.scrollTop),
              (t.scrollLeft = this.scrollLeft),
              (t.sel = this.sel),
              (t.extend = !1),
              e &&
                ((t.history.undoDepth = this.history.undoDepth),
                t.setHistory(this.getHistory())),
              t
            );
          },
          linkedDoc: function(e) {
            e || (e = {});
            var t = this.first,
              n = this.first + this.size;
            null != e.from && e.from > t && (t = e.from),
              null != e.to && e.to < n && (n = e.to);
            var r = new ko(
              ce(this, t, n),
              e.mode || this.modeOption,
              t,
              this.lineSep,
              this.direction
            );
            return (
              e.sharedHist && (r.history = this.history),
              (this.linked || (this.linked = [])).push({
                doc: r,
                sharedHist: e.sharedHist,
              }),
              (r.linked = [
                { doc: this, isParent: !0, sharedHist: e.sharedHist },
              ]),
              (function(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n],
                    i = r.find(),
                    o = e.clipPos(i.from),
                    s = e.clipPos(i.to);
                  if (ve(o, s)) {
                    var a = wo(e, o, s, r.primary, r.primary.type);
                    r.markers.push(a), (a.parent = r);
                  }
                }
              })(r, So(this)),
              r
            );
          },
          unlinkDoc: function(e) {
            if ((e instanceof Ss && (e = e.doc), this.linked))
              for (var t = 0; t < this.linked.length; ++t) {
                var n = this.linked[t];
                if (n.doc == e) {
                  this.linked.splice(t, 1), e.unlinkDoc(this), Ao(So(this));
                  break;
                }
              }
            if (e.history == this.history) {
              var r = [e.id];
              Mi(
                e,
                function(e) {
                  return r.push(e.id);
                },
                !0
              ),
                (e.history = new Ni(null)),
                (e.history.done = Xi(this.history.done, r)),
                (e.history.undone = Xi(this.history.undone, r));
            }
          },
          iterLinkedDocs: function(e) {
            Mi(this, e);
          },
          getMode: function() {
            return this.mode;
          },
          getEditor: function() {
            return this.cm;
          },
          splitLines: function(e) {
            return this.lineSep ? e.split(this.lineSep) : Ct(e);
          },
          lineSeparator: function() {
            return this.lineSep || "\n";
          },
          setDirection: $r(function(e) {
            var t;
            "rtl" != e && (e = "ltr"),
              e != this.direction &&
                ((this.direction = e),
                this.iter(function(e) {
                  return (e.order = null);
                }),
                this.cm &&
                  Gr((t = this.cm), function() {
                    Li(t), Zr(t);
                  }));
          }),
        })),
          (ko.prototype.eachLine = ko.prototype.iter);
        var Fo = 0;
        function To(e) {
          var t = this;
          if ((Mo(t), !ot(t, e) && !bn(t.display, e))) {
            lt(e), s && (Fo = +new Date());
            var n = ur(t, e, !0),
              r = e.dataTransfer.files;
            if (n && !t.isReadOnly())
              if (r && r.length && window.FileReader && window.File)
                for (
                  var i = r.length,
                    o = Array(i),
                    a = 0,
                    u = function(e, r) {
                      if (
                        !t.options.allowDropFileTypes ||
                        -1 != W(t.options.allowDropFileTypes, e.type)
                      ) {
                        var s = new FileReader();
                        (s.onload = Vr(t, function() {
                          var e = s.result;
                          if (
                            (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""),
                            (o[r] = e),
                            ++a == i)
                          ) {
                            var u = {
                              from: (n = be(t.doc, n)),
                              to: n,
                              text: t.doc.splitLines(
                                o.join(t.doc.lineSeparator())
                              ),
                              origin: "paste",
                            };
                            oo(t.doc, u), Gi(t.doc, Ci(n, wi(u)));
                          }
                        })),
                          s.readAsText(e);
                      }
                    },
                    l = 0;
                  l < i;
                  ++l
                )
                  u(r[l], l);
              else {
                if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                  return (
                    t.state.draggingText(e),
                    void setTimeout(function() {
                      return t.display.input.focus();
                    }, 20)
                  );
                try {
                  var c = e.dataTransfer.getData("Text");
                  if (c) {
                    var h;
                    if (
                      (t.state.draggingText &&
                        !t.state.draggingText.copy &&
                        (h = t.listSelections()),
                      qi(t.doc, Ci(n, n)),
                      h)
                    )
                      for (var p = 0; p < h.length; ++p)
                        co(t.doc, "", h[p].anchor, h[p].head, "drag");
                    t.replaceSelection(c, "around", "paste"),
                      t.display.input.focus();
                  }
                } catch (e) {}
              }
          }
        }
        function Mo(e) {
          e.display.dragCursor &&
            (e.display.lineSpace.removeChild(e.display.dragCursor),
            (e.display.dragCursor = null));
        }
        function Bo(e) {
          if (document.getElementsByClassName) {
            for (
              var t = document.getElementsByClassName("CodeMirror"),
                n = [],
                r = 0;
              r < t.length;
              r++
            ) {
              var i = t[r].CodeMirror;
              i && n.push(i);
            }
            n.length &&
              n[0].operation(function() {
                for (var t = 0; t < n.length; t++) e(n[t]);
              });
          }
        }
        var Lo = !1;
        function No() {
          var e;
          Lo ||
            (tt(window, "resize", function() {
              null == e &&
                (e = setTimeout(function() {
                  (e = null), Bo(Io);
                }, 100));
            }),
            tt(window, "blur", function() {
              return Bo(xr);
            }),
            (Lo = !0));
        }
        function Io(e) {
          var t = e.display;
          (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
            (t.scrollbarsClipped = !1),
            e.setSize();
        }
        for (
          var Po = {
              3: "Pause",
              8: "Backspace",
              9: "Tab",
              13: "Enter",
              16: "Shift",
              17: "Ctrl",
              18: "Alt",
              19: "Pause",
              20: "CapsLock",
              27: "Esc",
              32: "Space",
              33: "PageUp",
              34: "PageDown",
              35: "End",
              36: "Home",
              37: "Left",
              38: "Up",
              39: "Right",
              40: "Down",
              44: "PrintScrn",
              45: "Insert",
              46: "Delete",
              59: ";",
              61: "=",
              91: "Mod",
              92: "Mod",
              93: "Mod",
              106: "*",
              107: "=",
              109: "-",
              110: ".",
              111: "/",
              127: "Delete",
              145: "ScrollLock",
              173: "-",
              186: ";",
              187: "=",
              188: ",",
              189: "-",
              190: ".",
              191: "/",
              192: "`",
              219: "[",
              220: "\\",
              221: "]",
              222: "'",
              63232: "Up",
              63233: "Down",
              63234: "Left",
              63235: "Right",
              63272: "Delete",
              63273: "Home",
              63275: "End",
              63276: "PageUp",
              63277: "PageDown",
              63302: "Insert",
            },
            Oo = 0;
          Oo < 10;
          Oo++
        )
          Po[Oo + 48] = Po[Oo + 96] = String(Oo);
        for (var Ro = 65; Ro <= 90; Ro++) Po[Ro] = String.fromCharCode(Ro);
        for (var zo = 1; zo <= 12; zo++)
          Po[zo + 111] = Po[zo + 63235] = "F" + zo;
        var Uo = {};
        function Wo(e) {
          var t,
            n,
            r,
            i,
            o = e.split(/-(?!$)/);
          e = o[o.length - 1];
          for (var s = 0; s < o.length - 1; s++) {
            var a = o[s];
            if (/^(cmd|meta|m)$/i.test(a)) i = !0;
            else if (/^a(lt)?$/i.test(a)) t = !0;
            else if (/^(c|ctrl|control)$/i.test(a)) n = !0;
            else {
              if (!/^s(hift)?$/i.test(a))
                throw new Error("Unrecognized modifier name: " + a);
              r = !0;
            }
          }
          return (
            t && (e = "Alt-" + e),
            n && (e = "Ctrl-" + e),
            i && (e = "Cmd-" + e),
            r && (e = "Shift-" + e),
            e
          );
        }
        function Ho(e) {
          var t = {};
          for (var n in e)
            if (e.hasOwnProperty(n)) {
              var r = e[n];
              if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
              if ("..." == r) {
                delete e[n];
                continue;
              }
              for (var i = q(n.split(" "), Wo), o = 0; o < i.length; o++) {
                var s = void 0,
                  a = void 0;
                o == i.length - 1
                  ? ((a = i.join(" ")), (s = r))
                  : ((a = i.slice(0, o + 1).join(" ")), (s = "..."));
                var u = t[a];
                if (u) {
                  if (u != s) throw new Error("Inconsistent bindings for " + a);
                } else t[a] = s;
              }
              delete e[n];
            }
          for (var l in t) e[l] = t[l];
          return e;
        }
        function Xo(e, t, n, r) {
          var i = (t = Ko(t)).call ? t.call(e, r) : t[e];
          if (!1 === i) return "nothing";
          if ("..." === i) return "multi";
          if (null != i && n(i)) return "handled";
          if (t.fallthrough) {
            if (
              "[object Array]" != Object.prototype.toString.call(t.fallthrough)
            )
              return Xo(e, t.fallthrough, n, r);
            for (var o = 0; o < t.fallthrough.length; o++) {
              var s = Xo(e, t.fallthrough[o], n, r);
              if (s) return s;
            }
          }
        }
        function Jo(e) {
          var t = "string" == typeof e ? e : Po[e.keyCode];
          return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
        }
        function _o(e, t, n) {
          var r = e;
          return (
            t.altKey && "Alt" != r && (e = "Alt-" + e),
            (w ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e),
            (w ? t.ctrlKey : t.metaKey) && "Cmd" != r && (e = "Cmd-" + e),
            !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e),
            e
          );
        }
        function jo(e, t) {
          if (h && 34 == e.keyCode && e.char) return !1;
          var n = Po[e.keyCode];
          return (
            null != n &&
            !e.altGraphKey &&
            (3 == e.keyCode && e.code && (n = e.code), _o(n, e, t))
          );
        }
        function Ko(e) {
          return "string" == typeof e ? Uo[e] : e;
        }
        function Yo(e, t) {
          for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
            for (var o = t(n[i]); r.length && ve(o.from, V(r).to) <= 0; ) {
              var s = r.pop();
              if (ve(s.from, o.from) < 0) {
                o.from = s.from;
                break;
              }
            }
            r.push(o);
          }
          Gr(e, function() {
            for (var t = r.length - 1; t >= 0; t--)
              co(e.doc, "", r[t].from, r[t].to, "+delete");
            kr(e);
          });
        }
        function Go(e, t, n) {
          var r = oe(e.text, t + n, n);
          return r < 0 || r > e.text.length ? null : r;
        }
        function Vo(e, t, n) {
          var r = Go(e, t.ch, n);
          return null == r
            ? null
            : new ge(t.line, r, n < 0 ? "after" : "before");
        }
        function qo(e, t, n, r, i) {
          if (e) {
            var o = Qe(n, t.doc.direction);
            if (o) {
              var s,
                a = i < 0 ? V(o) : o[0],
                u = i < 0 == (1 == a.level),
                l = u ? "after" : "before";
              if (a.level > 0 || "rtl" == t.doc.direction) {
                var c = Nn(t, n);
                s = i < 0 ? n.text.length - 1 : 0;
                var h = In(t, c, s).top;
                (s = se(
                  function(e) {
                    return In(t, c, e).top == h;
                  },
                  i < 0 == (1 == a.level) ? a.from : a.to - 1,
                  s
                )),
                  "before" == l && (s = Go(n, s, 1));
              } else s = i < 0 ? a.to : a.from;
              return new ge(r, s, l);
            }
          }
          return new ge(
            r,
            i < 0 ? n.text.length : 0,
            i < 0 ? "before" : "after"
          );
        }
        (Uo.basic = {
          Left: "goCharLeft",
          Right: "goCharRight",
          Up: "goLineUp",
          Down: "goLineDown",
          End: "goLineEnd",
          Home: "goLineStartSmart",
          PageUp: "goPageUp",
          PageDown: "goPageDown",
          Delete: "delCharAfter",
          Backspace: "delCharBefore",
          "Shift-Backspace": "delCharBefore",
          Tab: "defaultTab",
          "Shift-Tab": "indentAuto",
          Enter: "newlineAndIndent",
          Insert: "toggleOverwrite",
          Esc: "singleSelection",
        }),
          (Uo.pcDefault = {
            "Ctrl-A": "selectAll",
            "Ctrl-D": "deleteLine",
            "Ctrl-Z": "undo",
            "Shift-Ctrl-Z": "redo",
            "Ctrl-Y": "redo",
            "Ctrl-Home": "goDocStart",
            "Ctrl-End": "goDocEnd",
            "Ctrl-Up": "goLineUp",
            "Ctrl-Down": "goLineDown",
            "Ctrl-Left": "goGroupLeft",
            "Ctrl-Right": "goGroupRight",
            "Alt-Left": "goLineStart",
            "Alt-Right": "goLineEnd",
            "Ctrl-Backspace": "delGroupBefore",
            "Ctrl-Delete": "delGroupAfter",
            "Ctrl-S": "save",
            "Ctrl-F": "find",
            "Ctrl-G": "findNext",
            "Shift-Ctrl-G": "findPrev",
            "Shift-Ctrl-F": "replace",
            "Shift-Ctrl-R": "replaceAll",
            "Ctrl-[": "indentLess",
            "Ctrl-]": "indentMore",
            "Ctrl-U": "undoSelection",
            "Shift-Ctrl-U": "redoSelection",
            "Alt-U": "redoSelection",
            fallthrough: "basic",
          }),
          (Uo.emacsy = {
            "Ctrl-F": "goCharRight",
            "Ctrl-B": "goCharLeft",
            "Ctrl-P": "goLineUp",
            "Ctrl-N": "goLineDown",
            "Alt-F": "goWordRight",
            "Alt-B": "goWordLeft",
            "Ctrl-A": "goLineStart",
            "Ctrl-E": "goLineEnd",
            "Ctrl-V": "goPageDown",
            "Shift-Ctrl-V": "goPageUp",
            "Ctrl-D": "delCharAfter",
            "Ctrl-H": "delCharBefore",
            "Alt-D": "delWordAfter",
            "Alt-Backspace": "delWordBefore",
            "Ctrl-K": "killLine",
            "Ctrl-T": "transposeChars",
            "Ctrl-O": "openLine",
          }),
          (Uo.macDefault = {
            "Cmd-A": "selectAll",
            "Cmd-D": "deleteLine",
            "Cmd-Z": "undo",
            "Shift-Cmd-Z": "redo",
            "Cmd-Y": "redo",
            "Cmd-Home": "goDocStart",
            "Cmd-Up": "goDocStart",
            "Cmd-End": "goDocEnd",
            "Cmd-Down": "goDocEnd",
            "Alt-Left": "goGroupLeft",
            "Alt-Right": "goGroupRight",
            "Cmd-Left": "goLineLeft",
            "Cmd-Right": "goLineRight",
            "Alt-Backspace": "delGroupBefore",
            "Ctrl-Alt-Backspace": "delGroupAfter",
            "Alt-Delete": "delGroupAfter",
            "Cmd-S": "save",
            "Cmd-F": "find",
            "Cmd-G": "findNext",
            "Shift-Cmd-G": "findPrev",
            "Cmd-Alt-F": "replace",
            "Shift-Cmd-Alt-F": "replaceAll",
            "Cmd-[": "indentLess",
            "Cmd-]": "indentMore",
            "Cmd-Backspace": "delWrappedLineLeft",
            "Cmd-Delete": "delWrappedLineRight",
            "Cmd-U": "undoSelection",
            "Shift-Cmd-U": "redoSelection",
            "Ctrl-Up": "goDocStart",
            "Ctrl-Down": "goDocEnd",
            fallthrough: ["basic", "emacsy"],
          }),
          (Uo.default = y ? Uo.macDefault : Uo.pcDefault);
        var $o = {
          selectAll: ro,
          singleSelection: function(e) {
            return e.setSelection(
              e.getCursor("anchor"),
              e.getCursor("head"),
              J
            );
          },
          killLine: function(e) {
            return Yo(e, function(t) {
              if (t.empty()) {
                var n = ue(e.doc, t.head.line).text.length;
                return t.head.ch == n && t.head.line < e.lastLine()
                  ? { from: t.head, to: ge(t.head.line + 1, 0) }
                  : { from: t.head, to: ge(t.head.line, n) };
              }
              return { from: t.from(), to: t.to() };
            });
          },
          deleteLine: function(e) {
            return Yo(e, function(t) {
              return {
                from: ge(t.from().line, 0),
                to: be(e.doc, ge(t.to().line + 1, 0)),
              };
            });
          },
          delLineLeft: function(e) {
            return Yo(e, function(e) {
              return { from: ge(e.from().line, 0), to: e.from() };
            });
          },
          delWrappedLineLeft: function(e) {
            return Yo(e, function(t) {
              var n = e.charCoords(t.head, "div").top + 5,
                r = e.coordsChar({ left: 0, top: n }, "div");
              return { from: r, to: t.from() };
            });
          },
          delWrappedLineRight: function(e) {
            return Yo(e, function(t) {
              var n = e.charCoords(t.head, "div").top + 5,
                r = e.coordsChar(
                  { left: e.display.lineDiv.offsetWidth + 100, top: n },
                  "div"
                );
              return { from: t.from(), to: r };
            });
          },
          undo: function(e) {
            return e.undo();
          },
          redo: function(e) {
            return e.redo();
          },
          undoSelection: function(e) {
            return e.undoSelection();
          },
          redoSelection: function(e) {
            return e.redoSelection();
          },
          goDocStart: function(e) {
            return e.extendSelection(ge(e.firstLine(), 0));
          },
          goDocEnd: function(e) {
            return e.extendSelection(ge(e.lastLine()));
          },
          goLineStart: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return Zo(e, t.head.line);
              },
              { origin: "+move", bias: 1 }
            );
          },
          goLineStartSmart: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return Qo(e, t.head);
              },
              { origin: "+move", bias: 1 }
            );
          },
          goLineEnd: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return (function(e, t) {
                  var n = ue(e.doc, t),
                    r = (function(e) {
                      for (var t; (t = Ue(e)); ) e = t.find(1, !0).line;
                      return e;
                    })(n);
                  return r != n && (t = pe(r)), qo(!0, e, n, t, -1);
                })(e, t.head.line);
              },
              { origin: "+move", bias: -1 }
            );
          },
          goLineRight: function(e) {
            return e.extendSelectionsBy(function(t) {
              var n = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar(
                { left: e.display.lineDiv.offsetWidth + 100, top: n },
                "div"
              );
            }, j);
          },
          goLineLeft: function(e) {
            return e.extendSelectionsBy(function(t) {
              var n = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar({ left: 0, top: n }, "div");
            }, j);
          },
          goLineLeftSmart: function(e) {
            return e.extendSelectionsBy(function(t) {
              var n = e.cursorCoords(t.head, "div").top + 5,
                r = e.coordsChar({ left: 0, top: n }, "div");
              return r.ch < e.getLine(r.line).search(/\S/) ? Qo(e, t.head) : r;
            }, j);
          },
          goLineUp: function(e) {
            return e.moveV(-1, "line");
          },
          goLineDown: function(e) {
            return e.moveV(1, "line");
          },
          goPageUp: function(e) {
            return e.moveV(-1, "page");
          },
          goPageDown: function(e) {
            return e.moveV(1, "page");
          },
          goCharLeft: function(e) {
            return e.moveH(-1, "char");
          },
          goCharRight: function(e) {
            return e.moveH(1, "char");
          },
          goColumnLeft: function(e) {
            return e.moveH(-1, "column");
          },
          goColumnRight: function(e) {
            return e.moveH(1, "column");
          },
          goWordLeft: function(e) {
            return e.moveH(-1, "word");
          },
          goGroupRight: function(e) {
            return e.moveH(1, "group");
          },
          goGroupLeft: function(e) {
            return e.moveH(-1, "group");
          },
          goWordRight: function(e) {
            return e.moveH(1, "word");
          },
          delCharBefore: function(e) {
            return e.deleteH(-1, "char");
          },
          delCharAfter: function(e) {
            return e.deleteH(1, "char");
          },
          delWordBefore: function(e) {
            return e.deleteH(-1, "word");
          },
          delWordAfter: function(e) {
            return e.deleteH(1, "word");
          },
          delGroupBefore: function(e) {
            return e.deleteH(-1, "group");
          },
          delGroupAfter: function(e) {
            return e.deleteH(1, "group");
          },
          indentAuto: function(e) {
            return e.indentSelection("smart");
          },
          indentMore: function(e) {
            return e.indentSelection("add");
          },
          indentLess: function(e) {
            return e.indentSelection("subtract");
          },
          insertTab: function(e) {
            return e.replaceSelection("\t");
          },
          insertSoftTab: function(e) {
            for (
              var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0;
              i < n.length;
              i++
            ) {
              var o = n[i].from(),
                s = z(e.getLine(o.line), o.ch, r);
              t.push(G(r - (s % r)));
            }
            e.replaceSelections(t);
          },
          defaultTab: function(e) {
            e.somethingSelected()
              ? e.indentSelection("add")
              : e.execCommand("insertTab");
          },
          transposeChars: function(e) {
            return Gr(e, function() {
              for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                if (t[r].empty()) {
                  var i = t[r].head,
                    o = ue(e.doc, i.line).text;
                  if (o)
                    if (
                      (i.ch == o.length && (i = new ge(i.line, i.ch - 1)),
                      i.ch > 0)
                    )
                      (i = new ge(i.line, i.ch + 1)),
                        e.replaceRange(
                          o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                          ge(i.line, i.ch - 2),
                          i,
                          "+transpose"
                        );
                    else if (i.line > e.doc.first) {
                      var s = ue(e.doc, i.line - 1).text;
                      s &&
                        ((i = new ge(i.line, 1)),
                        e.replaceRange(
                          o.charAt(0) +
                            e.doc.lineSeparator() +
                            s.charAt(s.length - 1),
                          ge(i.line - 1, s.length - 1),
                          i,
                          "+transpose"
                        ));
                    }
                  n.push(new xi(i, i));
                }
              e.setSelections(n);
            });
          },
          newlineAndIndent: function(e) {
            return Gr(e, function() {
              for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
                e.replaceRange(
                  e.doc.lineSeparator(),
                  t[n].anchor,
                  t[n].head,
                  "+input"
                );
              t = e.listSelections();
              for (var r = 0; r < t.length; r++)
                e.indentLine(t[r].from().line, null, !0);
              kr(e);
            });
          },
          openLine: function(e) {
            return e.replaceSelection("\n", "start");
          },
          toggleOverwrite: function(e) {
            return e.toggleOverwrite();
          },
        };
        function Zo(e, t) {
          var n = ue(e.doc, t),
            r = Xe(n);
          return r != n && (t = pe(r)), qo(!0, e, r, t, 1);
        }
        function Qo(e, t) {
          var n = Zo(e, t.line),
            r = ue(e.doc, n.line),
            i = Qe(r, e.doc.direction);
          if (!i || 0 == i[0].level) {
            var o = Math.max(0, r.text.search(/\S/)),
              s = t.line == n.line && t.ch <= o && t.ch;
            return ge(n.line, s ? 0 : o, n.sticky);
          }
          return n;
        }
        function es(e, t, n) {
          if ("string" == typeof t && !(t = $o[t])) return !1;
          e.display.input.ensurePolled();
          var r = e.display.shift,
            i = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0),
              n && (e.display.shift = !1),
              (i = t(e) != X);
          } finally {
            (e.display.shift = r), (e.state.suppressEdits = !1);
          }
          return i;
        }
        var ts = new U();
        function ns(e, t, n, r) {
          var i = e.state.keySeq;
          if (i) {
            if (Jo(t)) return "handled";
            if (
              (/\'$/.test(t)
                ? (e.state.keySeq = null)
                : ts.set(50, function() {
                    e.state.keySeq == i &&
                      ((e.state.keySeq = null), e.display.input.reset());
                  }),
              rs(e, i + " " + t, n, r))
            )
              return !0;
          }
          return rs(e, t, n, r);
        }
        function rs(e, t, n, r) {
          var i = (function(e, t, n) {
            for (var r = 0; r < e.state.keyMaps.length; r++) {
              var i = Xo(t, e.state.keyMaps[r], n, e);
              if (i) return i;
            }
            return (
              (e.options.extraKeys && Xo(t, e.options.extraKeys, n, e)) ||
              Xo(t, e.options.keyMap, n, e)
            );
          })(e, t, r);
          return (
            "multi" == i && (e.state.keySeq = t),
            "handled" == i && ln(e, "keyHandled", e, t, n),
            ("handled" != i && "multi" != i) || (lt(n), mr(e)),
            !!i
          );
        }
        function is(e, t) {
          var n = jo(t, !0);
          return (
            !!n &&
            (t.shiftKey && !e.state.keySeq
              ? ns(e, "Shift-" + n, t, function(t) {
                  return es(e, t, !0);
                }) ||
                ns(e, n, t, function(t) {
                  if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion)
                    return es(e, t);
                })
              : ns(e, n, t, function(t) {
                  return es(e, t);
                }))
          );
        }
        var os = null;
        function ss(e) {
          var t = this;
          if (((t.curOp.focus = L()), !ot(t, e))) {
            s && a < 11 && 27 == e.keyCode && (e.returnValue = !1);
            var n = e.keyCode;
            t.display.shift = 16 == n || e.shiftKey;
            var r = is(t, e);
            h &&
              ((os = r ? n : null),
              !r &&
                88 == n &&
                !bt &&
                (y ? e.metaKey : e.ctrlKey) &&
                t.replaceSelection("", null, "cut")),
              18 != n ||
                /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
                (function(e) {
                  var t = e.display.lineDiv;
                  function n(e) {
                    (18 != e.keyCode && e.altKey) ||
                      (E(t, "CodeMirror-crosshair"),
                      rt(document, "keyup", n),
                      rt(document, "mouseover", n));
                  }
                  N(t, "CodeMirror-crosshair"),
                    tt(document, "keyup", n),
                    tt(document, "mouseover", n);
                })(t);
          }
        }
        function as(e) {
          16 == e.keyCode && (this.doc.sel.shift = !1), ot(this, e);
        }
        function us(e) {
          var t = this;
          if (
            !(
              bn(t.display, e) ||
              ot(t, e) ||
              (e.ctrlKey && !e.altKey) ||
              (y && e.metaKey)
            )
          ) {
            var n = e.keyCode,
              r = e.charCode;
            if (h && n == os) return (os = null), void lt(e);
            if (!h || (e.which && !(e.which < 10)) || !is(t, e)) {
              var i = String.fromCharCode(null == r ? n : r);
              "\b" != i &&
                ((function(e, t, n) {
                  return ns(e, "'" + n + "'", t, function(t) {
                    return es(e, t, !0);
                  });
                })(t, e, i) ||
                  t.display.input.onKeyPress(e));
            }
          }
        }
        var ls,
          cs,
          hs = function(e, t, n) {
            (this.time = e), (this.pos = t), (this.button = n);
          };
        function ps(e) {
          var t = this,
            n = t.display;
          if (!(ot(t, e) || (n.activeTouch && n.input.supportsTouch())))
            if ((n.input.ensurePolled(), (n.shift = e.shiftKey), bn(n, e)))
              u ||
                ((n.scroller.draggable = !1),
                setTimeout(function() {
                  return (n.scroller.draggable = !0);
                }, 100));
            else if (!ms(t, e)) {
              var r = ur(t, e),
                i = dt(e),
                o = r
                  ? (function(e, t) {
                      var n = +new Date();
                      return cs && cs.compare(n, e, t)
                        ? ((ls = cs = null), "triple")
                        : ls && ls.compare(n, e, t)
                        ? ((cs = new hs(n, e, t)), (ls = null), "double")
                        : ((ls = new hs(n, e, t)), (cs = null), "single");
                    })(r, i)
                  : "single";
              window.focus(),
                1 == i && t.state.selectingText && t.state.selectingText(e),
                (r &&
                  (function(e, t, n, r, i) {
                    var o = "Click";
                    return (
                      "double" == r
                        ? (o = "Double" + o)
                        : "triple" == r && (o = "Triple" + o),
                      ns(
                        e,
                        _o(
                          (o =
                            (1 == t ? "Left" : 2 == t ? "Middle" : "Right") +
                            o),
                          i
                        ),
                        i,
                        function(t) {
                          if (("string" == typeof t && (t = $o[t]), !t))
                            return !1;
                          var r = !1;
                          try {
                            e.isReadOnly() && (e.state.suppressEdits = !0),
                              (r = t(e, n) != X);
                          } finally {
                            e.state.suppressEdits = !1;
                          }
                          return r;
                        }
                      )
                    );
                  })(t, i, r, o, e)) ||
                  (1 == i
                    ? r
                      ? (function(e, t, n, r) {
                          s ? setTimeout(O(gr, e), 0) : (e.curOp.focus = L());
                          var i,
                            o = (function(e, t, n) {
                              var r = e.getOption("configureMouse"),
                                i = r ? r(e, t, n) : {};
                              if (null == i.unit) {
                                var o = x ? n.shiftKey && n.metaKey : n.altKey;
                                i.unit = o
                                  ? "rectangle"
                                  : "single" == t
                                  ? "char"
                                  : "double" == t
                                  ? "word"
                                  : "line";
                              }
                              return (
                                (null == i.extend || e.doc.extend) &&
                                  (i.extend = e.doc.extend || n.shiftKey),
                                null == i.addNew &&
                                  (i.addNew = y ? n.metaKey : n.ctrlKey),
                                null == i.moveOnDrag &&
                                  (i.moveOnDrag = !(y ? n.altKey : n.ctrlKey)),
                                i
                              );
                            })(e, n, r),
                            l = e.doc.sel;
                          e.options.dragDrop &&
                          vt &&
                          !e.isReadOnly() &&
                          "single" == n &&
                          (i = l.contains(t)) > -1 &&
                          (ve((i = l.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
                          (ve(i.to(), t) > 0 || t.xRel < 0)
                            ? (function(e, t, n, r) {
                                var i = e.display,
                                  o = !1,
                                  l = Vr(e, function(t) {
                                    u && (i.scroller.draggable = !1),
                                      (e.state.draggingText = !1),
                                      rt(i.wrapper.ownerDocument, "mouseup", l),
                                      rt(
                                        i.wrapper.ownerDocument,
                                        "mousemove",
                                        c
                                      ),
                                      rt(i.scroller, "dragstart", h),
                                      rt(i.scroller, "drop", l),
                                      o ||
                                        (lt(t),
                                        r.addNew ||
                                          _i(e.doc, n, null, null, r.extend),
                                        u || (s && 9 == a)
                                          ? setTimeout(function() {
                                              i.wrapper.ownerDocument.body.focus(),
                                                i.input.focus();
                                            }, 20)
                                          : i.input.focus());
                                  }),
                                  c = function(e) {
                                    o =
                                      o ||
                                      Math.abs(t.clientX - e.clientX) +
                                        Math.abs(t.clientY - e.clientY) >=
                                        10;
                                  },
                                  h = function() {
                                    return (o = !0);
                                  };
                                u && (i.scroller.draggable = !0),
                                  (e.state.draggingText = l),
                                  (l.copy = !r.moveOnDrag),
                                  i.scroller.dragDrop && i.scroller.dragDrop(),
                                  tt(i.wrapper.ownerDocument, "mouseup", l),
                                  tt(i.wrapper.ownerDocument, "mousemove", c),
                                  tt(i.scroller, "dragstart", h),
                                  tt(i.scroller, "drop", l),
                                  vr(e),
                                  setTimeout(function() {
                                    return i.input.focus();
                                  }, 20);
                              })(e, r, t, o)
                            : (function(e, t, n, r) {
                                var i = e.display,
                                  o = e.doc;
                                lt(t);
                                var s,
                                  a,
                                  u = o.sel,
                                  l = u.ranges;
                                if (
                                  (r.addNew && !r.extend
                                    ? ((a = o.sel.contains(n)),
                                      (s = a > -1 ? l[a] : new xi(n, n)))
                                    : ((s = o.sel.primary()),
                                      (a = o.sel.primIndex)),
                                  "rectangle" == r.unit)
                                )
                                  r.addNew || (s = new xi(n, n)),
                                    (n = ur(e, t, !0, !0)),
                                    (a = -1);
                                else {
                                  var c = fs(e, n, r.unit);
                                  s = r.extend
                                    ? Ji(s, c.anchor, c.head, r.extend)
                                    : c;
                                }
                                r.addNew
                                  ? -1 == a
                                    ? ((a = l.length),
                                      Vi(o, Di(e, l.concat([s]), a), {
                                        scroll: !1,
                                        origin: "*mouse",
                                      }))
                                    : l.length > 1 &&
                                      l[a].empty() &&
                                      "char" == r.unit &&
                                      !r.extend
                                    ? (Vi(
                                        o,
                                        Di(
                                          e,
                                          l.slice(0, a).concat(l.slice(a + 1)),
                                          0
                                        ),
                                        { scroll: !1, origin: "*mouse" }
                                      ),
                                      (u = o.sel))
                                    : Ki(o, a, s, _)
                                  : ((a = 0),
                                    Vi(o, new yi([s], 0), _),
                                    (u = o.sel));
                                var h = n;
                                function p(t) {
                                  if (0 != ve(h, t))
                                    if (((h = t), "rectangle" == r.unit)) {
                                      for (
                                        var i = [],
                                          l = e.options.tabSize,
                                          c = z(ue(o, n.line).text, n.ch, l),
                                          p = z(ue(o, t.line).text, t.ch, l),
                                          f = Math.min(c, p),
                                          d = Math.max(c, p),
                                          m = Math.min(n.line, t.line),
                                          g = Math.min(
                                            e.lastLine(),
                                            Math.max(n.line, t.line)
                                          );
                                        m <= g;
                                        m++
                                      ) {
                                        var v = ue(o, m).text,
                                          y = K(v, f, l);
                                        f == d
                                          ? i.push(new xi(ge(m, y), ge(m, y)))
                                          : v.length > y &&
                                            i.push(
                                              new xi(
                                                ge(m, y),
                                                ge(m, K(v, d, l))
                                              )
                                            );
                                      }
                                      i.length || i.push(new xi(n, n)),
                                        Vi(
                                          o,
                                          Di(
                                            e,
                                            u.ranges.slice(0, a).concat(i),
                                            a
                                          ),
                                          { origin: "*mouse", scroll: !1 }
                                        ),
                                        e.scrollIntoView(t);
                                    } else {
                                      var x,
                                        D = s,
                                        C = fs(e, t, r.unit),
                                        w = D.anchor;
                                      ve(C.anchor, w) > 0
                                        ? ((x = C.head),
                                          (w = Ce(D.from(), C.anchor)))
                                        : ((x = C.anchor),
                                          (w = De(D.to(), C.head)));
                                      var b = u.ranges.slice(0);
                                      (b[a] = (function(e, t) {
                                        var n = t.anchor,
                                          r = t.head,
                                          i = ue(e.doc, n.line);
                                        if (
                                          0 == ve(n, r) &&
                                          n.sticky == r.sticky
                                        )
                                          return t;
                                        var o = Qe(i);
                                        if (!o) return t;
                                        var s = $e(o, n.ch, n.sticky),
                                          a = o[s];
                                        if (a.from != n.ch && a.to != n.ch)
                                          return t;
                                        var u,
                                          l =
                                            s +
                                            ((a.from == n.ch) == (1 != a.level)
                                              ? 0
                                              : 1);
                                        if (0 == l || l == o.length) return t;
                                        if (r.line != n.line)
                                          u =
                                            (r.line - n.line) *
                                              ("ltr" == e.doc.direction
                                                ? 1
                                                : -1) >
                                            0;
                                        else {
                                          var c = $e(o, r.ch, r.sticky),
                                            h =
                                              c - s ||
                                              (r.ch - n.ch) *
                                                (1 == a.level ? -1 : 1);
                                          u =
                                            c == l - 1 || c == l
                                              ? h < 0
                                              : h > 0;
                                        }
                                        var p = o[l + (u ? -1 : 0)],
                                          f = u == (1 == p.level),
                                          d = f ? p.from : p.to,
                                          m = f ? "after" : "before";
                                        return n.ch == d && n.sticky == m
                                          ? t
                                          : new xi(new ge(n.line, d, m), r);
                                      })(e, new xi(be(o, w), x))),
                                        Vi(o, Di(e, b, a), _);
                                    }
                                }
                                var f = i.wrapper.getBoundingClientRect(),
                                  d = 0;
                                function m(t) {
                                  (e.state.selectingText = !1),
                                    (d = 1 / 0),
                                    lt(t),
                                    i.input.focus(),
                                    rt(i.wrapper.ownerDocument, "mousemove", g),
                                    rt(i.wrapper.ownerDocument, "mouseup", v),
                                    (o.history.lastSelOrigin = null);
                                }
                                var g = Vr(e, function(t) {
                                    0 !== t.buttons && dt(t)
                                      ? (function t(n) {
                                          var s = ++d,
                                            a = ur(
                                              e,
                                              n,
                                              !0,
                                              "rectangle" == r.unit
                                            );
                                          if (a)
                                            if (0 != ve(a, h)) {
                                              (e.curOp.focus = L()), p(a);
                                              var u = wr(i, o);
                                              (a.line >= u.to ||
                                                a.line < u.from) &&
                                                setTimeout(
                                                  Vr(e, function() {
                                                    d == s && t(n);
                                                  }),
                                                  150
                                                );
                                            } else {
                                              var l =
                                                n.clientY < f.top
                                                  ? -20
                                                  : n.clientY > f.bottom
                                                  ? 20
                                                  : 0;
                                              l &&
                                                setTimeout(
                                                  Vr(e, function() {
                                                    d == s &&
                                                      ((i.scroller.scrollTop += l),
                                                      t(n));
                                                  }),
                                                  50
                                                );
                                            }
                                        })(t)
                                      : m(t);
                                  }),
                                  v = Vr(e, m);
                                (e.state.selectingText = v),
                                  tt(i.wrapper.ownerDocument, "mousemove", g),
                                  tt(i.wrapper.ownerDocument, "mouseup", v);
                              })(e, r, t, o);
                        })(t, r, o, e)
                      : ft(e) == n.scroller && lt(e)
                    : 2 == i
                    ? (r && _i(t.doc, r),
                      setTimeout(function() {
                        return n.input.focus();
                      }, 20))
                    : 3 == i && (b ? t.display.input.onContextMenu(e) : vr(t)));
            }
        }
        function fs(e, t, n) {
          if ("char" == n) return new xi(t, t);
          if ("word" == n) return e.findWordAt(t);
          if ("line" == n)
            return new xi(ge(t.line, 0), be(e.doc, ge(t.line + 1, 0)));
          var r = n(e, t);
          return new xi(r.from, r.to);
        }
        function ds(e, t, n, r) {
          var i, o;
          if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
          else
            try {
              (i = t.clientX), (o = t.clientY);
            } catch (t) {
              return !1;
            }
          if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
            return !1;
          r && lt(t);
          var s = e.display,
            a = s.lineDiv.getBoundingClientRect();
          if (o > a.bottom || !at(e, n)) return ht(t);
          o -= a.top - s.viewOffset;
          for (var u = 0; u < e.options.gutters.length; ++u) {
            var l = s.gutters.childNodes[u];
            if (l && l.getBoundingClientRect().right >= i) {
              var c = fe(e.doc, o),
                h = e.options.gutters[u];
              return it(e, n, e, c, h, t), ht(t);
            }
          }
        }
        function ms(e, t) {
          return ds(e, t, "gutterClick", !0);
        }
        function gs(e, t) {
          bn(e.display, t) ||
            (function(e, t) {
              return (
                !!at(e, "gutterContextMenu") &&
                ds(e, t, "gutterContextMenu", !1)
              );
            })(e, t) ||
            ot(e, t, "contextmenu") ||
            b ||
            e.display.input.onContextMenu(t);
        }
        function vs(e) {
          (e.display.wrapper.className =
            e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
            e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
            Hn(e);
        }
        hs.prototype.compare = function(e, t, n) {
          return (
            this.time + 400 > e && 0 == ve(t, this.pos) && n == this.button
          );
        };
        var ys = {
            toString: function() {
              return "CodeMirror.Init";
            },
          },
          xs = {},
          Ds = {};
        function Cs(e) {
          hi(e), Zr(e), br(e);
        }
        function ws(e, t, n) {
          var r = n && n != ys;
          if (!t != !r) {
            var i = e.display.dragFunctions,
              o = t ? tt : rt;
            o(e.display.scroller, "dragstart", i.start),
              o(e.display.scroller, "dragenter", i.enter),
              o(e.display.scroller, "dragover", i.over),
              o(e.display.scroller, "dragleave", i.leave),
              o(e.display.scroller, "drop", i.drop);
          }
        }
        function bs(e) {
          e.options.lineWrapping
            ? (N(e.display.wrapper, "CodeMirror-wrap"),
              (e.display.sizer.style.minWidth = ""),
              (e.display.sizerWidth = null))
            : (E(e.display.wrapper, "CodeMirror-wrap"), Ve(e)),
            ar(e),
            Zr(e),
            Hn(e),
            setTimeout(function() {
              return Rr(e);
            }, 100);
        }
        function Ss(e, t) {
          var n = this;
          if (!(this instanceof Ss)) return new Ss(e, t);
          (this.options = t = t ? R(t) : {}), R(xs, t, !1), pi(t);
          var r = t.value;
          "string" == typeof r
            ? (r = new ko(r, t.mode, null, t.lineSeparator, t.direction))
            : t.mode && (r.modeOption = t.mode),
            (this.doc = r);
          var i = new Ss.inputStyles[t.inputStyle](this),
            o = (this.display = new ae(e, r, i));
          for (var l in ((o.wrapper.CodeMirror = this),
          hi(this),
          vs(this),
          t.lineWrapping &&
            (this.display.wrapper.className += " CodeMirror-wrap"),
          Wr(this),
          (this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: -1,
            cutIncoming: -1,
            selectingText: !1,
            draggingText: !1,
            highlight: new U(),
            keySeq: null,
            specialChars: null,
          }),
          t.autofocus && !v && o.input.focus(),
          s &&
            a < 11 &&
            setTimeout(function() {
              return n.display.input.reset(!0);
            }, 20),
          (function(e) {
            var t = e.display;
            tt(t.scroller, "mousedown", Vr(e, ps)),
              tt(
                t.scroller,
                "dblclick",
                s && a < 11
                  ? Vr(e, function(t) {
                      if (!ot(e, t)) {
                        var n = ur(e, t);
                        if (n && !ms(e, t) && !bn(e.display, t)) {
                          lt(t);
                          var r = e.findWordAt(n);
                          _i(e.doc, r.anchor, r.head);
                        }
                      }
                    })
                  : function(t) {
                      return ot(e, t) || lt(t);
                    }
              ),
              tt(t.scroller, "contextmenu", function(t) {
                return gs(e, t);
              });
            var n,
              r = { end: 0 };
            function i() {
              t.activeTouch &&
                ((n = setTimeout(function() {
                  return (t.activeTouch = null);
                }, 1e3)),
                ((r = t.activeTouch).end = +new Date()));
            }
            function o(e, t) {
              if (null == t.left) return !0;
              var n = t.left - e.left,
                r = t.top - e.top;
              return n * n + r * r > 400;
            }
            tt(t.scroller, "touchstart", function(i) {
              if (
                !ot(e, i) &&
                !(function(e) {
                  if (1 != e.touches.length) return !1;
                  var t = e.touches[0];
                  return t.radiusX <= 1 && t.radiusY <= 1;
                })(i) &&
                !ms(e, i)
              ) {
                t.input.ensurePolled(), clearTimeout(n);
                var o = +new Date();
                (t.activeTouch = {
                  start: o,
                  moved: !1,
                  prev: o - r.end <= 300 ? r : null,
                }),
                  1 == i.touches.length &&
                    ((t.activeTouch.left = i.touches[0].pageX),
                    (t.activeTouch.top = i.touches[0].pageY));
              }
            }),
              tt(t.scroller, "touchmove", function() {
                t.activeTouch && (t.activeTouch.moved = !0);
              }),
              tt(t.scroller, "touchend", function(n) {
                var r = t.activeTouch;
                if (
                  r &&
                  !bn(t, n) &&
                  null != r.left &&
                  !r.moved &&
                  new Date() - r.start < 300
                ) {
                  var s,
                    a = e.coordsChar(t.activeTouch, "page");
                  (s =
                    !r.prev || o(r, r.prev)
                      ? new xi(a, a)
                      : !r.prev.prev || o(r, r.prev.prev)
                      ? e.findWordAt(a)
                      : new xi(ge(a.line, 0), be(e.doc, ge(a.line + 1, 0)))),
                    e.setSelection(s.anchor, s.head),
                    e.focus(),
                    lt(n);
                }
                i();
              }),
              tt(t.scroller, "touchcancel", i),
              tt(t.scroller, "scroll", function() {
                t.scroller.clientHeight &&
                  (Br(e, t.scroller.scrollTop),
                  Nr(e, t.scroller.scrollLeft, !0),
                  it(e, "scroll", e));
              }),
              tt(t.scroller, "mousewheel", function(t) {
                return vi(e, t);
              }),
              tt(t.scroller, "DOMMouseScroll", function(t) {
                return vi(e, t);
              }),
              tt(t.wrapper, "scroll", function() {
                return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
              }),
              (t.dragFunctions = {
                enter: function(t) {
                  ot(e, t) || pt(t);
                },
                over: function(t) {
                  ot(e, t) ||
                    ((function(e, t) {
                      var n = ur(e, t);
                      if (n) {
                        var r = document.createDocumentFragment();
                        pr(e, n, r),
                          e.display.dragCursor ||
                            ((e.display.dragCursor = T(
                              "div",
                              null,
                              "CodeMirror-cursors CodeMirror-dragcursors"
                            )),
                            e.display.lineSpace.insertBefore(
                              e.display.dragCursor,
                              e.display.cursorDiv
                            )),
                          F(e.display.dragCursor, r);
                      }
                    })(e, t),
                    pt(t));
                },
                start: function(t) {
                  return (function(e, t) {
                    if (s && (!e.state.draggingText || +new Date() - Fo < 100))
                      pt(t);
                    else if (
                      !ot(e, t) &&
                      !bn(e.display, t) &&
                      (t.dataTransfer.setData("Text", e.getSelection()),
                      (t.dataTransfer.effectAllowed = "copyMove"),
                      t.dataTransfer.setDragImage && !p)
                    ) {
                      var n = T(
                        "img",
                        null,
                        null,
                        "position: fixed; left: 0; top: 0;"
                      );
                      (n.src =
                        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                        h &&
                          ((n.width = n.height = 1),
                          e.display.wrapper.appendChild(n),
                          (n._top = n.offsetTop)),
                        t.dataTransfer.setDragImage(n, 0, 0),
                        h && n.parentNode.removeChild(n);
                    }
                  })(e, t);
                },
                drop: Vr(e, To),
                leave: function(t) {
                  ot(e, t) || Mo(e);
                },
              });
            var u = t.input.getField();
            tt(u, "keyup", function(t) {
              return as.call(e, t);
            }),
              tt(u, "keydown", Vr(e, ss)),
              tt(u, "keypress", Vr(e, us)),
              tt(u, "focus", function(t) {
                return yr(e, t);
              }),
              tt(u, "blur", function(t) {
                return xr(e, t);
              });
          })(this),
          No(),
          Xr(this),
          (this.curOp.forceUpdate = !0),
          Bi(this, r),
          (t.autofocus && !v) || this.hasFocus()
            ? setTimeout(O(yr, this), 20)
            : xr(this),
          Ds))
            Ds.hasOwnProperty(l) && Ds[l](n, t[l], ys);
          Sr(this), t.finishInit && t.finishInit(this);
          for (var c = 0; c < As.length; ++c) As[c](n);
          Jr(this),
            u &&
              t.lineWrapping &&
              "optimizelegibility" ==
                getComputedStyle(o.lineDiv).textRendering &&
              (o.lineDiv.style.textRendering = "auto");
        }
        (Ss.defaults = xs), (Ss.optionHandlers = Ds);
        var As = [];
        function Es(e, t, n, r) {
          var i,
            o = e.doc;
          null == n && (n = "add"),
            "smart" == n &&
              (o.mode.indent ? (i = Ut(e, t).state) : (n = "prev"));
          var s = e.options.tabSize,
            a = ue(o, t),
            u = z(a.text, null, s);
          a.stateAfter && (a.stateAfter = null);
          var l,
            c = a.text.match(/^\s*/)[0];
          if (r || /\S/.test(a.text)) {
            if (
              "smart" == n &&
              ((l = o.mode.indent(i, a.text.slice(c.length), a.text)) == X ||
                l > 150)
            ) {
              if (!r) return;
              n = "prev";
            }
          } else (l = 0), (n = "not");
          "prev" == n
            ? (l = t > o.first ? z(ue(o, t - 1).text, null, s) : 0)
            : "add" == n
            ? (l = u + e.options.indentUnit)
            : "subtract" == n
            ? (l = u - e.options.indentUnit)
            : "number" == typeof n && (l = u + n),
            (l = Math.max(0, l));
          var h = "",
            p = 0;
          if (e.options.indentWithTabs)
            for (var f = Math.floor(l / s); f; --f) (p += s), (h += "\t");
          if ((p < l && (h += G(l - p)), h != c))
            return (
              co(o, h, ge(t, 0), ge(t, c.length), "+input"),
              (a.stateAfter = null),
              !0
            );
          for (var d = 0; d < o.sel.ranges.length; d++) {
            var m = o.sel.ranges[d];
            if (m.head.line == t && m.head.ch < c.length) {
              var g = ge(t, c.length);
              Ki(o, d, new xi(g, g));
              break;
            }
          }
        }
        Ss.defineInitHook = function(e) {
          return As.push(e);
        };
        var ks = null;
        function Fs(e) {
          ks = e;
        }
        function Ts(e, t, n, r, i) {
          var o = e.doc;
          (e.display.shift = !1), r || (r = o.sel);
          var s = +new Date() - 200,
            a = "paste" == i || e.state.pasteIncoming > s,
            u = Ct(t),
            l = null;
          if (a && r.ranges.length > 1)
            if (ks && ks.text.join("\n") == t) {
              if (r.ranges.length % ks.text.length == 0) {
                l = [];
                for (var c = 0; c < ks.text.length; c++)
                  l.push(o.splitLines(ks.text[c]));
              }
            } else
              u.length == r.ranges.length &&
                e.options.pasteLinesPerSelection &&
                (l = q(u, function(e) {
                  return [e];
                }));
          for (
            var h = e.curOp.updateInput, p = r.ranges.length - 1;
            p >= 0;
            p--
          ) {
            var f = r.ranges[p],
              d = f.from(),
              m = f.to();
            f.empty() &&
              (n && n > 0
                ? (d = ge(d.line, d.ch - n))
                : e.state.overwrite && !a
                ? (m = ge(
                    m.line,
                    Math.min(ue(o, m.line).text.length, m.ch + V(u).length)
                  ))
                : a &&
                  ks &&
                  ks.lineWise &&
                  ks.text.join("\n") == t &&
                  (d = m = ge(d.line, 0)));
            var g = {
              from: d,
              to: m,
              text: l ? l[p % l.length] : u,
              origin:
                i || (a ? "paste" : e.state.cutIncoming > s ? "cut" : "+input"),
            };
            oo(e.doc, g), ln(e, "inputRead", e, g);
          }
          t && !a && Bs(e, t),
            kr(e),
            e.curOp.updateInput < 2 && (e.curOp.updateInput = h),
            (e.curOp.typing = !0),
            (e.state.pasteIncoming = e.state.cutIncoming = -1);
        }
        function Ms(e, t) {
          var n = e.clipboardData && e.clipboardData.getData("Text");
          if (n)
            return (
              e.preventDefault(),
              t.isReadOnly() ||
                t.options.disableInput ||
                Gr(t, function() {
                  return Ts(t, n, 0, null, "paste");
                }),
              !0
            );
        }
        function Bs(e, t) {
          if (e.options.electricChars && e.options.smartIndent)
            for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
              var i = n.ranges[r];
              if (
                !(
                  i.head.ch > 100 ||
                  (r && n.ranges[r - 1].head.line == i.head.line)
                )
              ) {
                var o = e.getModeAt(i.head),
                  s = !1;
                if (o.electricChars) {
                  for (var a = 0; a < o.electricChars.length; a++)
                    if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                      s = Es(e, i.head.line, "smart");
                      break;
                    }
                } else
                  o.electricInput &&
                    o.electricInput.test(
                      ue(e.doc, i.head.line).text.slice(0, i.head.ch)
                    ) &&
                    (s = Es(e, i.head.line, "smart"));
                s && ln(e, "electricInput", e, i.head.line);
              }
            }
        }
        function Ls(e) {
          for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
            var i = e.doc.sel.ranges[r].head.line,
              o = { anchor: ge(i, 0), head: ge(i + 1, 0) };
            n.push(o), t.push(e.getRange(o.anchor, o.head));
          }
          return { text: t, ranges: n };
        }
        function Ns(e, t, n, r) {
          e.setAttribute("autocorrect", !!n),
            e.setAttribute("autocapitalize", !!r),
            e.setAttribute("spellcheck", !!t);
        }
        function Is() {
          var e = T(
              "textarea",
              null,
              null,
              "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"
            ),
            t = T(
              "div",
              [e],
              null,
              "overflow: hidden; position: relative; width: 3px; height: 0px;"
            );
          return (
            u ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"),
            m && (e.style.border = "1px solid black"),
            Ns(e),
            t
          );
        }
        function Ps(e, t, n, r, i) {
          var o = t,
            s = n,
            a = ue(e, t.line);
          function u(r) {
            var o, s;
            if (
              null ==
              (o = i
                ? (function(e, t, n, r) {
                    var i = Qe(t, e.doc.direction);
                    if (!i) return Vo(t, n, r);
                    n.ch >= t.text.length
                      ? ((n.ch = t.text.length), (n.sticky = "before"))
                      : n.ch <= 0 && ((n.ch = 0), (n.sticky = "after"));
                    var o = $e(i, n.ch, n.sticky),
                      s = i[o];
                    if (
                      "ltr" == e.doc.direction &&
                      s.level % 2 == 0 &&
                      (r > 0 ? s.to > n.ch : s.from < n.ch)
                    )
                      return Vo(t, n, r);
                    var a,
                      u = function(e, n) {
                        return Go(t, e instanceof ge ? e.ch : e, n);
                      },
                      l = function(n) {
                        return e.options.lineWrapping
                          ? ((a = a || Nn(e, t)), Qn(e, t, a, n))
                          : { begin: 0, end: t.text.length };
                      },
                      c = l("before" == n.sticky ? u(n, -1) : n.ch);
                    if ("rtl" == e.doc.direction || 1 == s.level) {
                      var h = (1 == s.level) == r < 0,
                        p = u(n, h ? 1 : -1);
                      if (
                        null != p &&
                        (h
                          ? p <= s.to && p <= c.end
                          : p >= s.from && p >= c.begin)
                      ) {
                        var f = h ? "before" : "after";
                        return new ge(n.line, p, f);
                      }
                    }
                    var d = function(e, t, r) {
                        for (
                          var o = function(e, t) {
                            return t
                              ? new ge(n.line, u(e, 1), "before")
                              : new ge(n.line, e, "after");
                          };
                          e >= 0 && e < i.length;
                          e += t
                        ) {
                          var s = i[e],
                            a = t > 0 == (1 != s.level),
                            l = a ? r.begin : u(r.end, -1);
                          if (s.from <= l && l < s.to) return o(l, a);
                          if (
                            ((l = a ? s.from : u(s.to, -1)),
                            r.begin <= l && l < r.end)
                          )
                            return o(l, a);
                        }
                      },
                      m = d(o + r, r, c);
                    if (m) return m;
                    var g = r > 0 ? c.end : u(c.begin, -1);
                    return null == g ||
                      (r > 0 && g == t.text.length) ||
                      !(m = d(r > 0 ? 0 : i.length - 1, r, l(g)))
                      ? null
                      : m;
                  })(e.cm, a, t, n)
                : Vo(a, t, n))
            ) {
              if (
                r ||
                ((s = t.line + n) < e.first ||
                  s >= e.first + e.size ||
                  ((t = new ge(s, t.ch, t.sticky)), !(a = ue(e, s))))
              )
                return !1;
              t = qo(i, e.cm, a, t.line, n);
            } else t = o;
            return !0;
          }
          if ("char" == r) u();
          else if ("column" == r) u(!0);
          else if ("word" == r || "group" == r)
            for (
              var l = null,
                c = "group" == r,
                h = e.cm && e.cm.getHelper(t, "wordChars"),
                p = !0;
              !(n < 0) || u(!p);
              p = !1
            ) {
              var f = a.text.charAt(t.ch) || "\n",
                d = te(f, h)
                  ? "w"
                  : c && "\n" == f
                  ? "n"
                  : !c || /\s/.test(f)
                  ? null
                  : "p";
              if ((!c || p || d || (d = "s"), l && l != d)) {
                n < 0 && ((n = 1), u(), (t.sticky = "after"));
                break;
              }
              if ((d && (l = d), n > 0 && !u(!p))) break;
            }
          var m = to(e, t, o, s, !0);
          return ye(o, m) && (m.hitSide = !0), m;
        }
        function Os(e, t, n, r) {
          var i,
            o,
            s = e.doc,
            a = t.left;
          if ("page" == r) {
            var u = Math.min(
                e.display.wrapper.clientHeight,
                window.innerHeight || document.documentElement.clientHeight
              ),
              l = Math.max(u - 0.5 * nr(e.display), 3);
            i = (n > 0 ? t.bottom : t.top) + n * l;
          } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
          for (; (o = $n(e, a, i)).outside; ) {
            if (n < 0 ? i <= 0 : i >= s.height) {
              o.hitSide = !0;
              break;
            }
            i += 5 * n;
          }
          return o;
        }
        var Rs = function(e) {
          (this.cm = e),
            (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
            (this.polling = new U()),
            (this.composing = null),
            (this.gracePeriod = !1),
            (this.readDOMTimeout = null);
        };
        function zs(e, t) {
          var n = Ln(e, t.line);
          if (!n || n.hidden) return null;
          var r = ue(e.doc, t.line),
            i = Mn(n, r, t.line),
            o = Qe(r, e.doc.direction),
            s = "left";
          if (o) {
            var a = $e(o, t.ch);
            s = a % 2 ? "right" : "left";
          }
          var u = Rn(i.map, t.ch, s);
          return (u.offset = "right" == u.collapse ? u.end : u.start), u;
        }
        function Us(e, t) {
          return t && (e.bad = !0), e;
        }
        function Ws(e, t, n) {
          var r;
          if (t == e.display.lineDiv) {
            if (!(r = e.display.lineDiv.childNodes[n]))
              return Us(e.clipPos(ge(e.display.viewTo - 1)), !0);
            (t = null), (n = 0);
          } else
            for (r = t; ; r = r.parentNode) {
              if (!r || r == e.display.lineDiv) return null;
              if (r.parentNode && r.parentNode == e.display.lineDiv) break;
            }
          for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == r) return Hs(o, t, n);
          }
        }
        function Hs(e, t, n) {
          var r = e.text.firstChild,
            i = !1;
          if (!t || !B(r, t)) return Us(ge(pe(e.line), 0), !0);
          if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
            var o = e.rest ? V(e.rest) : e.line;
            return Us(ge(pe(o), o.text.length), i);
          }
          var s = 3 == t.nodeType ? t : null,
            a = t;
          for (
            s ||
            1 != t.childNodes.length ||
            3 != t.firstChild.nodeType ||
            ((s = t.firstChild), n && (n = s.nodeValue.length));
            a.parentNode != r;

          )
            a = a.parentNode;
          var u = e.measure,
            l = u.maps;
          function c(t, n, r) {
            for (var i = -1; i < (l ? l.length : 0); i++)
              for (var o = i < 0 ? u.map : l[i], s = 0; s < o.length; s += 3) {
                var a = o[s + 2];
                if (a == t || a == n) {
                  var c = pe(i < 0 ? e.line : e.rest[i]),
                    h = o[s] + r;
                  return (
                    (r < 0 || a != t) && (h = o[s + (r ? 1 : 0)]), ge(c, h)
                  );
                }
              }
          }
          var h = c(s, a, n);
          if (h) return Us(h, i);
          for (
            var p = a.nextSibling, f = s ? s.nodeValue.length - n : 0;
            p;
            p = p.nextSibling
          ) {
            if ((h = c(p, p.firstChild, 0))) return Us(ge(h.line, h.ch - f), i);
            f += p.textContent.length;
          }
          for (var d = a.previousSibling, m = n; d; d = d.previousSibling) {
            if ((h = c(d, d.firstChild, -1)))
              return Us(ge(h.line, h.ch + m), i);
            m += d.textContent.length;
          }
        }
        (Rs.prototype.init = function(e) {
          var t = this,
            n = this,
            r = n.cm,
            i = (n.div = e.lineDiv);
          function o(e) {
            if (!ot(r, e)) {
              if (r.somethingSelected())
                Fs({ lineWise: !1, text: r.getSelections() }),
                  "cut" == e.type && r.replaceSelection("", null, "cut");
              else {
                if (!r.options.lineWiseCopyCut) return;
                var t = Ls(r);
                Fs({ lineWise: !0, text: t.text }),
                  "cut" == e.type &&
                    r.operation(function() {
                      r.setSelections(t.ranges, 0, J),
                        r.replaceSelection("", null, "cut");
                    });
              }
              if (e.clipboardData) {
                e.clipboardData.clearData();
                var o = ks.text.join("\n");
                if (
                  (e.clipboardData.setData("Text", o),
                  e.clipboardData.getData("Text") == o)
                )
                  return void e.preventDefault();
              }
              var s = Is(),
                a = s.firstChild;
              r.display.lineSpace.insertBefore(
                s,
                r.display.lineSpace.firstChild
              ),
                (a.value = ks.text.join("\n"));
              var u = document.activeElement;
              P(a),
                setTimeout(function() {
                  r.display.lineSpace.removeChild(s),
                    u.focus(),
                    u == i && n.showPrimarySelection();
                }, 50);
            }
          }
          Ns(
            i,
            r.options.spellcheck,
            r.options.autocorrect,
            r.options.autocapitalize
          ),
            tt(i, "paste", function(e) {
              ot(r, e) ||
                Ms(e, r) ||
                (a <= 11 &&
                  setTimeout(
                    Vr(r, function() {
                      return t.updateFromDOM();
                    }),
                    20
                  ));
            }),
            tt(i, "compositionstart", function(e) {
              t.composing = { data: e.data, done: !1 };
            }),
            tt(i, "compositionupdate", function(e) {
              t.composing || (t.composing = { data: e.data, done: !1 });
            }),
            tt(i, "compositionend", function(e) {
              t.composing &&
                (e.data != t.composing.data && t.readFromDOMSoon(),
                (t.composing.done = !0));
            }),
            tt(i, "touchstart", function() {
              return n.forceCompositionEnd();
            }),
            tt(i, "input", function() {
              t.composing || t.readFromDOMSoon();
            }),
            tt(i, "copy", o),
            tt(i, "cut", o);
        }),
          (Rs.prototype.prepareSelection = function() {
            var e = hr(this.cm, !1);
            return (e.focus = this.cm.state.focused), e;
          }),
          (Rs.prototype.showSelection = function(e, t) {
            e &&
              this.cm.display.view.length &&
              ((e.focus || t) && this.showPrimarySelection(),
              this.showMultipleSelections(e));
          }),
          (Rs.prototype.getSelection = function() {
            return this.cm.display.wrapper.ownerDocument.getSelection();
          }),
          (Rs.prototype.showPrimarySelection = function() {
            var e = this.getSelection(),
              t = this.cm,
              r = t.doc.sel.primary(),
              i = r.from(),
              o = r.to();
            if (
              t.display.viewTo == t.display.viewFrom ||
              i.line >= t.display.viewTo ||
              o.line < t.display.viewFrom
            )
              e.removeAllRanges();
            else {
              var s = Ws(t, e.anchorNode, e.anchorOffset),
                a = Ws(t, e.focusNode, e.focusOffset);
              if (
                !s ||
                s.bad ||
                !a ||
                a.bad ||
                0 != ve(Ce(s, a), i) ||
                0 != ve(De(s, a), o)
              ) {
                var u = t.display.view,
                  l = (i.line >= t.display.viewFrom && zs(t, i)) || {
                    node: u[0].measure.map[2],
                    offset: 0,
                  },
                  c = o.line < t.display.viewTo && zs(t, o);
                if (!c) {
                  var h = u[u.length - 1].measure,
                    p = h.maps ? h.maps[h.maps.length - 1] : h.map;
                  c = {
                    node: p[p.length - 1],
                    offset: p[p.length - 2] - p[p.length - 3],
                  };
                }
                if (l && c) {
                  var f,
                    d = e.rangeCount && e.getRangeAt(0);
                  try {
                    f = A(l.node, l.offset, c.offset, c.node);
                  } catch (Dt) {}
                  f &&
                    (!n && t.state.focused
                      ? (e.collapse(l.node, l.offset),
                        f.collapsed || (e.removeAllRanges(), e.addRange(f)))
                      : (e.removeAllRanges(), e.addRange(f)),
                    d && null == e.anchorNode
                      ? e.addRange(d)
                      : n && this.startGracePeriod()),
                    this.rememberSelection();
                } else e.removeAllRanges();
              }
            }
          }),
          (Rs.prototype.startGracePeriod = function() {
            var e = this;
            clearTimeout(this.gracePeriod),
              (this.gracePeriod = setTimeout(function() {
                (e.gracePeriod = !1),
                  e.selectionChanged() &&
                    e.cm.operation(function() {
                      return (e.cm.curOp.selectionChanged = !0);
                    });
              }, 20));
          }),
          (Rs.prototype.showMultipleSelections = function(e) {
            F(this.cm.display.cursorDiv, e.cursors),
              F(this.cm.display.selectionDiv, e.selection);
          }),
          (Rs.prototype.rememberSelection = function() {
            var e = this.getSelection();
            (this.lastAnchorNode = e.anchorNode),
              (this.lastAnchorOffset = e.anchorOffset),
              (this.lastFocusNode = e.focusNode),
              (this.lastFocusOffset = e.focusOffset);
          }),
          (Rs.prototype.selectionInEditor = function() {
            var e = this.getSelection();
            if (!e.rangeCount) return !1;
            var t = e.getRangeAt(0).commonAncestorContainer;
            return B(this.div, t);
          }),
          (Rs.prototype.focus = function() {
            "nocursor" != this.cm.options.readOnly &&
              (this.selectionInEditor() ||
                this.showSelection(this.prepareSelection(), !0),
              this.div.focus());
          }),
          (Rs.prototype.blur = function() {
            this.div.blur();
          }),
          (Rs.prototype.getField = function() {
            return this.div;
          }),
          (Rs.prototype.supportsTouch = function() {
            return !0;
          }),
          (Rs.prototype.receivedFocus = function() {
            var e = this;
            this.selectionInEditor()
              ? this.pollSelection()
              : Gr(this.cm, function() {
                  return (e.cm.curOp.selectionChanged = !0);
                }),
              this.polling.set(this.cm.options.pollInterval, function t() {
                e.cm.state.focused &&
                  (e.pollSelection(),
                  e.polling.set(e.cm.options.pollInterval, t));
              });
          }),
          (Rs.prototype.selectionChanged = function() {
            var e = this.getSelection();
            return (
              e.anchorNode != this.lastAnchorNode ||
              e.anchorOffset != this.lastAnchorOffset ||
              e.focusNode != this.lastFocusNode ||
              e.focusOffset != this.lastFocusOffset
            );
          }),
          (Rs.prototype.pollSelection = function() {
            if (
              null == this.readDOMTimeout &&
              !this.gracePeriod &&
              this.selectionChanged()
            ) {
              var e = this.getSelection(),
                t = this.cm;
              if (
                g &&
                c &&
                this.cm.options.gutters.length &&
                (function(e) {
                  for (var t = e; t; t = t.parentNode)
                    if (/CodeMirror-gutter-wrapper/.test(t.className))
                      return !0;
                  return !1;
                })(e.anchorNode)
              )
                return (
                  this.cm.triggerOnKeyDown({
                    type: "keydown",
                    keyCode: 8,
                    preventDefault: Math.abs,
                  }),
                  this.blur(),
                  void this.focus()
                );
              if (!this.composing) {
                this.rememberSelection();
                var n = Ws(t, e.anchorNode, e.anchorOffset),
                  r = Ws(t, e.focusNode, e.focusOffset);
                n &&
                  r &&
                  Gr(t, function() {
                    Vi(t.doc, Ci(n, r), J),
                      (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
                  });
              }
            }
          }),
          (Rs.prototype.pollContent = function() {
            null != this.readDOMTimeout &&
              (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
            var e,
              t,
              n,
              r = this.cm,
              i = r.display,
              o = r.doc.sel.primary(),
              s = o.from(),
              a = o.to();
            if (
              (0 == s.ch &&
                s.line > r.firstLine() &&
                (s = ge(s.line - 1, ue(r.doc, s.line - 1).length)),
              a.ch == ue(r.doc, a.line).text.length &&
                a.line < r.lastLine() &&
                (a = ge(a.line + 1, 0)),
              s.line < i.viewFrom || a.line > i.viewTo - 1)
            )
              return !1;
            s.line == i.viewFrom || 0 == (e = lr(r, s.line))
              ? ((t = pe(i.view[0].line)), (n = i.view[0].node))
              : ((t = pe(i.view[e].line)),
                (n = i.view[e - 1].node.nextSibling));
            var u,
              l,
              c = lr(r, a.line);
            if (
              (c == i.view.length - 1
                ? ((u = i.viewTo - 1), (l = i.lineDiv.lastChild))
                : ((u = pe(i.view[c + 1].line) - 1),
                  (l = i.view[c + 1].node.previousSibling)),
              !n)
            )
              return !1;
            for (
              var h = r.doc.splitLines(
                  (function(e, t, n, r, i) {
                    var o = "",
                      s = !1,
                      a = e.doc.lineSeparator(),
                      u = !1;
                    function l() {
                      s && ((o += a), u && (o += a), (s = u = !1));
                    }
                    function c(e) {
                      e && (l(), (o += e));
                    }
                    function h(t) {
                      if (1 == t.nodeType) {
                        var n = t.getAttribute("cm-text");
                        if (n) return void c(n);
                        var o,
                          p = t.getAttribute("cm-marker");
                        if (p) {
                          var f = e.findMarks(
                            ge(r, 0),
                            ge(i + 1, 0),
                            ((g = +p),
                            function(e) {
                              return e.id == g;
                            })
                          );
                          return void (
                            f.length &&
                            (o = f[0].find(0)) &&
                            c(le(e.doc, o.from, o.to).join(a))
                          );
                        }
                        if ("false" == t.getAttribute("contenteditable"))
                          return;
                        var d = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                        if (
                          !/^br$/i.test(t.nodeName) &&
                          0 == t.textContent.length
                        )
                          return;
                        d && l();
                        for (var m = 0; m < t.childNodes.length; m++)
                          h(t.childNodes[m]);
                        /^(pre|p)$/i.test(t.nodeName) && (u = !0),
                          d && (s = !0);
                      } else
                        3 == t.nodeType &&
                          c(
                            t.nodeValue
                              .replace(/\u200b/g, "")
                              .replace(/\u00a0/g, " ")
                          );
                      var g;
                    }
                    for (; h(t), t != n; ) (t = t.nextSibling), (u = !1);
                    return o;
                  })(r, n, l, t, u)
                ),
                p = le(r.doc, ge(t, 0), ge(u, ue(r.doc, u).text.length));
              h.length > 1 && p.length > 1;

            )
              if (V(h) == V(p)) h.pop(), p.pop(), u--;
              else {
                if (h[0] != p[0]) break;
                h.shift(), p.shift(), t++;
              }
            for (
              var f = 0,
                d = 0,
                m = h[0],
                g = p[0],
                v = Math.min(m.length, g.length);
              f < v && m.charCodeAt(f) == g.charCodeAt(f);

            )
              ++f;
            for (
              var y = V(h),
                x = V(p),
                D = Math.min(
                  y.length - (1 == h.length ? f : 0),
                  x.length - (1 == p.length ? f : 0)
                );
              d < D &&
              y.charCodeAt(y.length - d - 1) == x.charCodeAt(x.length - d - 1);

            )
              ++d;
            if (1 == h.length && 1 == p.length && t == s.line)
              for (
                ;
                f &&
                f > s.ch &&
                y.charCodeAt(y.length - d - 1) ==
                  x.charCodeAt(x.length - d - 1);

              )
                f--, d++;
            (h[h.length - 1] = y
              .slice(0, y.length - d)
              .replace(/^\u200b+/, "")),
              (h[0] = h[0].slice(f).replace(/\u200b+$/, ""));
            var C = ge(t, f),
              w = ge(u, p.length ? V(p).length - d : 0);
            return h.length > 1 || h[0] || ve(C, w)
              ? (co(r.doc, h, C, w, "+input"), !0)
              : void 0;
          }),
          (Rs.prototype.ensurePolled = function() {
            this.forceCompositionEnd();
          }),
          (Rs.prototype.reset = function() {
            this.forceCompositionEnd();
          }),
          (Rs.prototype.forceCompositionEnd = function() {
            this.composing &&
              (clearTimeout(this.readDOMTimeout),
              (this.composing = null),
              this.updateFromDOM(),
              this.div.blur(),
              this.div.focus());
          }),
          (Rs.prototype.readFromDOMSoon = function() {
            var e = this;
            null == this.readDOMTimeout &&
              (this.readDOMTimeout = setTimeout(function() {
                if (((e.readDOMTimeout = null), e.composing)) {
                  if (!e.composing.done) return;
                  e.composing = null;
                }
                e.updateFromDOM();
              }, 80));
          }),
          (Rs.prototype.updateFromDOM = function() {
            var e = this;
            (!this.cm.isReadOnly() && this.pollContent()) ||
              Gr(this.cm, function() {
                return Zr(e.cm);
              });
          }),
          (Rs.prototype.setUneditable = function(e) {
            e.contentEditable = "false";
          }),
          (Rs.prototype.onKeyPress = function(e) {
            0 == e.charCode ||
              this.composing ||
              (e.preventDefault(),
              this.cm.isReadOnly() ||
                Vr(this.cm, Ts)(
                  this.cm,
                  String.fromCharCode(
                    null == e.charCode ? e.keyCode : e.charCode
                  ),
                  0
                ));
          }),
          (Rs.prototype.readOnlyChanged = function(e) {
            this.div.contentEditable = String("nocursor" != e);
          }),
          (Rs.prototype.onContextMenu = function() {}),
          (Rs.prototype.resetPosition = function() {}),
          (Rs.prototype.needsContentAttribute = !0);
        var Xs = function(e) {
          (this.cm = e),
            (this.prevInput = ""),
            (this.pollingFast = !1),
            (this.polling = new U()),
            (this.hasSelection = !1),
            (this.composing = null);
        };
        (Xs.prototype.init = function(e) {
          var t = this,
            n = this,
            r = this.cm;
          this.createField(e);
          var i = this.textarea;
          function o(e) {
            if (!ot(r, e)) {
              if (r.somethingSelected())
                Fs({ lineWise: !1, text: r.getSelections() });
              else {
                if (!r.options.lineWiseCopyCut) return;
                var t = Ls(r);
                Fs({ lineWise: !0, text: t.text }),
                  "cut" == e.type
                    ? r.setSelections(t.ranges, null, J)
                    : ((n.prevInput = ""), (i.value = t.text.join("\n")), P(i));
              }
              "cut" == e.type && (r.state.cutIncoming = +new Date());
            }
          }
          e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
            m && (i.style.width = "0px"),
            tt(i, "input", function() {
              s && a >= 9 && t.hasSelection && (t.hasSelection = null),
                n.poll();
            }),
            tt(i, "paste", function(e) {
              ot(r, e) ||
                Ms(e, r) ||
                ((r.state.pasteIncoming = +new Date()), n.fastPoll());
            }),
            tt(i, "cut", o),
            tt(i, "copy", o),
            tt(e.scroller, "paste", function(t) {
              if (!bn(e, t) && !ot(r, t)) {
                if (!i.dispatchEvent)
                  return (r.state.pasteIncoming = +new Date()), void n.focus();
                var o = new Event("paste");
                (o.clipboardData = t.clipboardData), i.dispatchEvent(o);
              }
            }),
            tt(e.lineSpace, "selectstart", function(t) {
              bn(e, t) || lt(t);
            }),
            tt(i, "compositionstart", function() {
              var e = r.getCursor("from");
              n.composing && n.composing.range.clear(),
                (n.composing = {
                  start: e,
                  range: r.markText(e, r.getCursor("to"), {
                    className: "CodeMirror-composing",
                  }),
                });
            }),
            tt(i, "compositionend", function() {
              n.composing &&
                (n.poll(), n.composing.range.clear(), (n.composing = null));
            });
        }),
          (Xs.prototype.createField = function(e) {
            (this.wrapper = Is()), (this.textarea = this.wrapper.firstChild);
          }),
          (Xs.prototype.prepareSelection = function() {
            var e = this.cm,
              t = e.display,
              n = e.doc,
              r = hr(e);
            if (e.options.moveInputWithCursor) {
              var i = Gn(e, n.sel.primary().head, "div"),
                o = t.wrapper.getBoundingClientRect(),
                s = t.lineDiv.getBoundingClientRect();
              (r.teTop = Math.max(
                0,
                Math.min(t.wrapper.clientHeight - 10, i.top + s.top - o.top)
              )),
                (r.teLeft = Math.max(
                  0,
                  Math.min(t.wrapper.clientWidth - 10, i.left + s.left - o.left)
                ));
            }
            return r;
          }),
          (Xs.prototype.showSelection = function(e) {
            var t = this.cm,
              n = t.display;
            F(n.cursorDiv, e.cursors),
              F(n.selectionDiv, e.selection),
              null != e.teTop &&
                ((this.wrapper.style.top = e.teTop + "px"),
                (this.wrapper.style.left = e.teLeft + "px"));
          }),
          (Xs.prototype.reset = function(e) {
            if (!this.contextMenuPending && !this.composing) {
              var t = this.cm;
              if (t.somethingSelected()) {
                this.prevInput = "";
                var n = t.getSelection();
                (this.textarea.value = n),
                  t.state.focused && P(this.textarea),
                  s && a >= 9 && (this.hasSelection = n);
              } else
                e ||
                  ((this.prevInput = this.textarea.value = ""),
                  s && a >= 9 && (this.hasSelection = null));
            }
          }),
          (Xs.prototype.getField = function() {
            return this.textarea;
          }),
          (Xs.prototype.supportsTouch = function() {
            return !1;
          }),
          (Xs.prototype.focus = function() {
            if (
              "nocursor" != this.cm.options.readOnly &&
              (!v || L() != this.textarea)
            )
              try {
                this.textarea.focus();
              } catch (Dt) {}
          }),
          (Xs.prototype.blur = function() {
            this.textarea.blur();
          }),
          (Xs.prototype.resetPosition = function() {
            this.wrapper.style.top = this.wrapper.style.left = 0;
          }),
          (Xs.prototype.receivedFocus = function() {
            this.slowPoll();
          }),
          (Xs.prototype.slowPoll = function() {
            var e = this;
            this.pollingFast ||
              this.polling.set(this.cm.options.pollInterval, function() {
                e.poll(), e.cm.state.focused && e.slowPoll();
              });
          }),
          (Xs.prototype.fastPoll = function() {
            var e = !1,
              t = this;
            (t.pollingFast = !0),
              t.polling.set(20, function n() {
                var r = t.poll();
                r || e
                  ? ((t.pollingFast = !1), t.slowPoll())
                  : ((e = !0), t.polling.set(60, n));
              });
          }),
          (Xs.prototype.poll = function() {
            var e = this,
              t = this.cm,
              n = this.textarea,
              r = this.prevInput;
            if (
              this.contextMenuPending ||
              !t.state.focused ||
              (wt(n) && !r && !this.composing) ||
              t.isReadOnly() ||
              t.options.disableInput ||
              t.state.keySeq
            )
              return !1;
            var i = n.value;
            if (i == r && !t.somethingSelected()) return !1;
            if (
              (s && a >= 9 && this.hasSelection === i) ||
              (y && /[\uf700-\uf7ff]/.test(i))
            )
              return t.display.input.reset(), !1;
            if (t.doc.sel == t.display.selForContextMenu) {
              var o = i.charCodeAt(0);
              if ((8203 != o || r || (r = "​"), 8666 == o))
                return this.reset(), this.cm.execCommand("undo");
            }
            for (
              var u = 0, l = Math.min(r.length, i.length);
              u < l && r.charCodeAt(u) == i.charCodeAt(u);

            )
              ++u;
            return (
              Gr(t, function() {
                Ts(
                  t,
                  i.slice(u),
                  r.length - u,
                  null,
                  e.composing ? "*compose" : null
                ),
                  i.length > 1e3 || i.indexOf("\n") > -1
                    ? (n.value = e.prevInput = "")
                    : (e.prevInput = i),
                  e.composing &&
                    (e.composing.range.clear(),
                    (e.composing.range = t.markText(
                      e.composing.start,
                      t.getCursor("to"),
                      { className: "CodeMirror-composing" }
                    )));
              }),
              !0
            );
          }),
          (Xs.prototype.ensurePolled = function() {
            this.pollingFast && this.poll() && (this.pollingFast = !1);
          }),
          (Xs.prototype.onKeyPress = function() {
            s && a >= 9 && (this.hasSelection = null), this.fastPoll();
          }),
          (Xs.prototype.onContextMenu = function(e) {
            var t = this,
              n = t.cm,
              r = n.display,
              i = t.textarea;
            t.contextMenuPending && t.contextMenuPending();
            var o = ur(n, e),
              l = r.scroller.scrollTop;
            if (o && !h) {
              var c = n.options.resetSelectionOnContextMenu;
              c && -1 == n.doc.sel.contains(o) && Vr(n, Vi)(n.doc, Ci(o), J);
              var p,
                f = i.style.cssText,
                d = t.wrapper.style.cssText,
                m = t.wrapper.offsetParent.getBoundingClientRect();
              if (
                ((t.wrapper.style.cssText = "position: static"),
                (i.style.cssText =
                  "position: absolute; width: 30px; height: 30px;\n      top: " +
                  (e.clientY - m.top - 5) +
                  "px; left: " +
                  (e.clientX - m.left - 5) +
                  "px;\n      z-index: 1000; background: " +
                  (s ? "rgba(255, 255, 255, .05)" : "transparent") +
                  ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"),
                u && (p = window.scrollY),
                r.input.focus(),
                u && window.scrollTo(null, p),
                r.input.reset(),
                n.somethingSelected() || (i.value = t.prevInput = " "),
                (t.contextMenuPending = y),
                (r.selForContextMenu = n.doc.sel),
                clearTimeout(r.detectingSelectAll),
                s && a >= 9 && v(),
                b)
              ) {
                pt(e);
                var g = function() {
                  rt(window, "mouseup", g), setTimeout(y, 20);
                };
                tt(window, "mouseup", g);
              } else setTimeout(y, 50);
            }
            function v() {
              if (null != i.selectionStart) {
                var e = n.somethingSelected(),
                  o = "​" + (e ? i.value : "");
                (i.value = "⇚"),
                  (i.value = o),
                  (t.prevInput = e ? "" : "​"),
                  (i.selectionStart = 1),
                  (i.selectionEnd = o.length),
                  (r.selForContextMenu = n.doc.sel);
              }
            }
            function y() {
              if (
                t.contextMenuPending == y &&
                ((t.contextMenuPending = !1),
                (t.wrapper.style.cssText = d),
                (i.style.cssText = f),
                s &&
                  a < 9 &&
                  r.scrollbars.setScrollTop((r.scroller.scrollTop = l)),
                null != i.selectionStart)
              ) {
                (!s || (s && a < 9)) && v();
                var e = 0,
                  o = function() {
                    r.selForContextMenu == n.doc.sel &&
                    0 == i.selectionStart &&
                    i.selectionEnd > 0 &&
                    "​" == t.prevInput
                      ? Vr(n, ro)(n)
                      : e++ < 10
                      ? (r.detectingSelectAll = setTimeout(o, 500))
                      : ((r.selForContextMenu = null), r.input.reset());
                  };
                r.detectingSelectAll = setTimeout(o, 200);
              }
            }
          }),
          (Xs.prototype.readOnlyChanged = function(e) {
            e || this.reset(), (this.textarea.disabled = "nocursor" == e);
          }),
          (Xs.prototype.setUneditable = function() {}),
          (Xs.prototype.needsContentAttribute = !1),
          (function(e) {
            var t = e.optionHandlers;
            function n(n, r, i, o) {
              (e.defaults[n] = r),
                i &&
                  (t[n] = o
                    ? function(e, t, n) {
                        n != ys && i(e, t, n);
                      }
                    : i);
            }
            (e.defineOption = n),
              (e.Init = ys),
              n(
                "value",
                "",
                function(e, t) {
                  return e.setValue(t);
                },
                !0
              ),
              n(
                "mode",
                null,
                function(e, t) {
                  (e.doc.modeOption = t), Ei(e);
                },
                !0
              ),
              n("indentUnit", 2, Ei, !0),
              n("indentWithTabs", !1),
              n("smartIndent", !0),
              n(
                "tabSize",
                4,
                function(e) {
                  ki(e), Hn(e), Zr(e);
                },
                !0
              ),
              n("lineSeparator", null, function(e, t) {
                if (((e.doc.lineSep = t), t)) {
                  var n = [],
                    r = e.doc.first;
                  e.doc.iter(function(e) {
                    for (var i = 0; ; ) {
                      var o = e.text.indexOf(t, i);
                      if (-1 == o) break;
                      (i = o + t.length), n.push(ge(r, o));
                    }
                    r++;
                  });
                  for (var i = n.length - 1; i >= 0; i--)
                    co(e.doc, t, n[i], ge(n[i].line, n[i].ch + t.length));
                }
              }),
              n(
                "specialChars",
                /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,
                function(e, t, n) {
                  (e.state.specialChars = new RegExp(
                    t.source + (t.test("\t") ? "" : "|\t"),
                    "g"
                  )),
                    n != ys && e.refresh();
                }
              ),
              n(
                "specialCharPlaceholder",
                Qt,
                function(e) {
                  return e.refresh();
                },
                !0
              ),
              n("electricChars", !0),
              n(
                "inputStyle",
                v ? "contenteditable" : "textarea",
                function() {
                  throw new Error(
                    "inputStyle can not (yet) be changed in a running editor"
                  );
                },
                !0
              ),
              n(
                "spellcheck",
                !1,
                function(e, t) {
                  return (e.getInputField().spellcheck = t);
                },
                !0
              ),
              n(
                "autocorrect",
                !1,
                function(e, t) {
                  return (e.getInputField().autocorrect = t);
                },
                !0
              ),
              n(
                "autocapitalize",
                !1,
                function(e, t) {
                  return (e.getInputField().autocapitalize = t);
                },
                !0
              ),
              n("rtlMoveVisually", !D),
              n("wholeLineUpdateBefore", !0),
              n(
                "theme",
                "default",
                function(e) {
                  vs(e), Cs(e);
                },
                !0
              ),
              n("keyMap", "default", function(e, t, n) {
                var r = Ko(t),
                  i = n != ys && Ko(n);
                i && i.detach && i.detach(e, r),
                  r.attach && r.attach(e, i || null);
              }),
              n("extraKeys", null),
              n("configureMouse", null),
              n("lineWrapping", !1, bs, !0),
              n(
                "gutters",
                [],
                function(e) {
                  pi(e.options), Cs(e);
                },
                !0
              ),
              n(
                "fixedGutter",
                !0,
                function(e, t) {
                  (e.display.gutters.style.left = t
                    ? or(e.display) + "px"
                    : "0"),
                    e.refresh();
                },
                !0
              ),
              n(
                "coverGutterNextToScrollbar",
                !1,
                function(e) {
                  return Rr(e);
                },
                !0
              ),
              n(
                "scrollbarStyle",
                "native",
                function(e) {
                  Wr(e),
                    Rr(e),
                    e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                    e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
                },
                !0
              ),
              n(
                "lineNumbers",
                !1,
                function(e) {
                  pi(e.options), Cs(e);
                },
                !0
              ),
              n("firstLineNumber", 1, Cs, !0),
              n(
                "lineNumberFormatter",
                function(e) {
                  return e;
                },
                Cs,
                !0
              ),
              n("showCursorWhenSelecting", !1, cr, !0),
              n("resetSelectionOnContextMenu", !0),
              n("lineWiseCopyCut", !0),
              n("pasteLinesPerSelection", !0),
              n("selectionsMayTouch", !1),
              n("readOnly", !1, function(e, t) {
                "nocursor" == t && (xr(e), e.display.input.blur()),
                  e.display.input.readOnlyChanged(t);
              }),
              n(
                "disableInput",
                !1,
                function(e, t) {
                  t || e.display.input.reset();
                },
                !0
              ),
              n("dragDrop", !0, ws),
              n("allowDropFileTypes", null),
              n("cursorBlinkRate", 530),
              n("cursorScrollMargin", 0),
              n("cursorHeight", 1, cr, !0),
              n("singleCursorHeightPerLine", !0, cr, !0),
              n("workTime", 100),
              n("workDelay", 100),
              n("flattenSpans", !0, ki, !0),
              n("addModeClass", !1, ki, !0),
              n("pollInterval", 100),
              n("undoDepth", 200, function(e, t) {
                return (e.doc.history.undoDepth = t);
              }),
              n("historyEventDelay", 1250),
              n(
                "viewportMargin",
                10,
                function(e) {
                  return e.refresh();
                },
                !0
              ),
              n("maxHighlightLength", 1e4, ki, !0),
              n("moveInputWithCursor", !0, function(e, t) {
                t || e.display.input.resetPosition();
              }),
              n("tabindex", null, function(e, t) {
                return (e.display.input.getField().tabIndex = t || "");
              }),
              n("autofocus", null),
              n(
                "direction",
                "ltr",
                function(e, t) {
                  return e.doc.setDirection(t);
                },
                !0
              ),
              n("phrases", null);
          })(Ss),
          (function(e) {
            var t = e.optionHandlers,
              n = (e.helpers = {});
            (e.prototype = {
              constructor: e,
              focus: function() {
                window.focus(), this.display.input.focus();
              },
              setOption: function(e, n) {
                var r = this.options,
                  i = r[e];
                (r[e] == n && "mode" != e) ||
                  ((r[e] = n),
                  t.hasOwnProperty(e) && Vr(this, t[e])(this, n, i),
                  it(this, "optionChange", this, e));
              },
              getOption: function(e) {
                return this.options[e];
              },
              getDoc: function() {
                return this.doc;
              },
              addKeyMap: function(e, t) {
                this.state.keyMaps[t ? "push" : "unshift"](Ko(e));
              },
              removeKeyMap: function(e) {
                for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                  if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
              },
              addOverlay: qr(function(t, n) {
                var r = t.token ? t : e.getMode(this.options, t);
                if (r.startState)
                  throw new Error("Overlays may not be stateful.");
                !(function(e, t, n) {
                  for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++;
                  e.splice(r, 0, t);
                })(
                  this.state.overlays,
                  {
                    mode: r,
                    modeSpec: t,
                    opaque: n && n.opaque,
                    priority: (n && n.priority) || 0,
                  },
                  function(e) {
                    return e.priority;
                  }
                ),
                  this.state.modeGen++,
                  Zr(this);
              }),
              removeOverlay: qr(function(e) {
                for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                  var r = t[n].modeSpec;
                  if (r == e || ("string" == typeof e && r.name == e))
                    return t.splice(n, 1), this.state.modeGen++, void Zr(this);
                }
              }),
              indentLine: qr(function(e, t, n) {
                "string" != typeof t &&
                  "number" != typeof t &&
                  (t =
                    null == t
                      ? this.options.smartIndent
                        ? "smart"
                        : "prev"
                      : t
                      ? "add"
                      : "subtract"),
                  de(this.doc, e) && Es(this, e, t, n);
              }),
              indentSelection: qr(function(e) {
                for (
                  var t = this.doc.sel.ranges, n = -1, r = 0;
                  r < t.length;
                  r++
                ) {
                  var i = t[r];
                  if (i.empty())
                    i.head.line > n &&
                      (Es(this, i.head.line, e, !0),
                      (n = i.head.line),
                      r == this.doc.sel.primIndex && kr(this));
                  else {
                    var o = i.from(),
                      s = i.to(),
                      a = Math.max(n, o.line);
                    n = Math.min(this.lastLine(), s.line - (s.ch ? 0 : 1)) + 1;
                    for (var u = a; u < n; ++u) Es(this, u, e);
                    var l = this.doc.sel.ranges;
                    0 == o.ch &&
                      t.length == l.length &&
                      l[r].from().ch > 0 &&
                      Ki(this.doc, r, new xi(o, l[r].to()), J);
                  }
                }
              }),
              getTokenAt: function(e, t) {
                return _t(this, e, t);
              },
              getLineTokens: function(e, t) {
                return _t(this, ge(e), t, !0);
              },
              getTokenTypeAt: function(e) {
                e = be(this.doc, e);
                var t,
                  n = zt(this, ue(this.doc, e.line)),
                  r = 0,
                  i = (n.length - 1) / 2,
                  o = e.ch;
                if (0 == o) t = n[2];
                else
                  for (;;) {
                    var s = (r + i) >> 1;
                    if ((s ? n[2 * s - 1] : 0) >= o) i = s;
                    else {
                      if (!(n[2 * s + 1] < o)) {
                        t = n[2 * s + 2];
                        break;
                      }
                      r = s + 1;
                    }
                  }
                var a = t ? t.indexOf("overlay ") : -1;
                return a < 0 ? t : 0 == a ? null : t.slice(0, a - 1);
              },
              getModeAt: function(t) {
                var n = this.doc.mode;
                return n.innerMode
                  ? e.innerMode(n, this.getTokenAt(t).state).mode
                  : n;
              },
              getHelper: function(e, t) {
                return this.getHelpers(e, t)[0];
              },
              getHelpers: function(e, t) {
                var r = [];
                if (!n.hasOwnProperty(t)) return r;
                var i = n[t],
                  o = this.getModeAt(e);
                if ("string" == typeof o[t]) i[o[t]] && r.push(i[o[t]]);
                else if (o[t])
                  for (var s = 0; s < o[t].length; s++) {
                    var a = i[o[t][s]];
                    a && r.push(a);
                  }
                else
                  o.helperType && i[o.helperType]
                    ? r.push(i[o.helperType])
                    : i[o.name] && r.push(i[o.name]);
                for (var u = 0; u < i._global.length; u++) {
                  var l = i._global[u];
                  l.pred(o, this) && -1 == W(r, l.val) && r.push(l.val);
                }
                return r;
              },
              getStateAfter: function(e, t) {
                var n = this.doc;
                return Ut(
                  this,
                  (e = we(n, null == e ? n.first + n.size - 1 : e)) + 1,
                  t
                ).state;
              },
              cursorCoords: function(e, t) {
                var n = this.doc.sel.primary();
                return Gn(
                  this,
                  null == e
                    ? n.head
                    : "object" == typeof e
                    ? be(this.doc, e)
                    : e
                    ? n.from()
                    : n.to(),
                  t || "page"
                );
              },
              charCoords: function(e, t) {
                return Yn(this, be(this.doc, e), t || "page");
              },
              coordsChar: function(e, t) {
                return $n(this, (e = Kn(this, e, t || "page")).left, e.top);
              },
              lineAtHeight: function(e, t) {
                return (
                  (e = Kn(this, { top: e, left: 0 }, t || "page").top),
                  fe(this.doc, e + this.display.viewOffset)
                );
              },
              heightAtLine: function(e, t, n) {
                var r,
                  i = !1;
                if ("number" == typeof e) {
                  var o = this.doc.first + this.doc.size - 1;
                  e < this.doc.first
                    ? (e = this.doc.first)
                    : e > o && ((e = o), (i = !0)),
                    (r = ue(this.doc, e));
                } else r = e;
                return (
                  jn(this, r, { top: 0, left: 0 }, t || "page", n || i).top +
                  (i ? this.doc.height - Ye(r) : 0)
                );
              },
              defaultTextHeight: function() {
                return nr(this.display);
              },
              defaultCharWidth: function() {
                return rr(this.display);
              },
              getViewport: function() {
                return { from: this.display.viewFrom, to: this.display.viewTo };
              },
              addWidget: function(e, t, n, r, i) {
                var o,
                  s,
                  a,
                  u = this.display,
                  l = (e = Gn(this, be(this.doc, e))).bottom,
                  c = e.left;
                if (
                  ((t.style.position = "absolute"),
                  t.setAttribute("cm-ignore-events", "true"),
                  this.display.input.setUneditable(t),
                  u.sizer.appendChild(t),
                  "over" == r)
                )
                  l = e.top;
                else if ("above" == r || "near" == r) {
                  var h = Math.max(u.wrapper.clientHeight, this.doc.height),
                    p = Math.max(u.sizer.clientWidth, u.lineSpace.clientWidth);
                  ("above" == r || e.bottom + t.offsetHeight > h) &&
                  e.top > t.offsetHeight
                    ? (l = e.top - t.offsetHeight)
                    : e.bottom + t.offsetHeight <= h && (l = e.bottom),
                    c + t.offsetWidth > p && (c = p - t.offsetWidth);
                }
                (t.style.top = l + "px"),
                  (t.style.left = t.style.right = ""),
                  "right" == i
                    ? ((c = u.sizer.clientWidth - t.offsetWidth),
                      (t.style.right = "0px"))
                    : ("left" == i
                        ? (c = 0)
                        : "middle" == i &&
                          (c = (u.sizer.clientWidth - t.offsetWidth) / 2),
                      (t.style.left = c + "px")),
                  n &&
                    ((o = this),
                    (s = {
                      left: c,
                      top: l,
                      right: c + t.offsetWidth,
                      bottom: l + t.offsetHeight,
                    }),
                    null != (a = Ar(o, s)).scrollTop && Br(o, a.scrollTop),
                    null != a.scrollLeft && Nr(o, a.scrollLeft));
              },
              triggerOnKeyDown: qr(ss),
              triggerOnKeyPress: qr(us),
              triggerOnKeyUp: as,
              triggerOnMouseDown: qr(ps),
              execCommand: function(e) {
                if ($o.hasOwnProperty(e)) return $o[e].call(null, this);
              },
              triggerElectric: qr(function(e) {
                Bs(this, e);
              }),
              findPosH: function(e, t, n, r) {
                var i = 1;
                t < 0 && ((i = -1), (t = -t));
                for (
                  var o = be(this.doc, e), s = 0;
                  s < t && !(o = Ps(this.doc, o, i, n, r)).hitSide;
                  ++s
                );
                return o;
              },
              moveH: qr(function(e, t) {
                var n = this;
                this.extendSelectionsBy(function(r) {
                  return n.display.shift || n.doc.extend || r.empty()
                    ? Ps(n.doc, r.head, e, t, n.options.rtlMoveVisually)
                    : e < 0
                    ? r.from()
                    : r.to();
                }, j);
              }),
              deleteH: qr(function(e, t) {
                var n = this.doc.sel,
                  r = this.doc;
                n.somethingSelected()
                  ? r.replaceSelection("", null, "+delete")
                  : Yo(this, function(n) {
                      var i = Ps(r, n.head, e, t, !1);
                      return e < 0
                        ? { from: i, to: n.head }
                        : { from: n.head, to: i };
                    });
              }),
              findPosV: function(e, t, n, r) {
                var i = 1,
                  o = r;
                t < 0 && ((i = -1), (t = -t));
                for (var s = be(this.doc, e), a = 0; a < t; ++a) {
                  var u = Gn(this, s, "div");
                  if (
                    (null == o ? (o = u.left) : (u.left = o),
                    (s = Os(this, u, i, n)).hitSide)
                  )
                    break;
                }
                return s;
              },
              moveV: qr(function(e, t) {
                var n = this,
                  r = this.doc,
                  i = [],
                  o =
                    !this.display.shift &&
                    !r.extend &&
                    r.sel.somethingSelected();
                if (
                  (r.extendSelectionsBy(function(s) {
                    if (o) return e < 0 ? s.from() : s.to();
                    var a = Gn(n, s.head, "div");
                    null != s.goalColumn && (a.left = s.goalColumn),
                      i.push(a.left);
                    var u = Os(n, a, e, t);
                    return (
                      "page" == t &&
                        s == r.sel.primary() &&
                        Er(n, Yn(n, u, "div").top - a.top),
                      u
                    );
                  }, j),
                  i.length)
                )
                  for (var s = 0; s < r.sel.ranges.length; s++)
                    r.sel.ranges[s].goalColumn = i[s];
              }),
              findWordAt: function(e) {
                var t = this.doc,
                  n = ue(t, e.line).text,
                  r = e.ch,
                  i = e.ch;
                if (n) {
                  var o = this.getHelper(e, "wordChars");
                  ("before" != e.sticky && i != n.length) || !r ? ++i : --r;
                  for (
                    var s = n.charAt(r),
                      a = te(s, o)
                        ? function(e) {
                            return te(e, o);
                          }
                        : /\s/.test(s)
                        ? function(e) {
                            return /\s/.test(e);
                          }
                        : function(e) {
                            return !/\s/.test(e) && !te(e);
                          };
                    r > 0 && a(n.charAt(r - 1));

                  )
                    --r;
                  for (; i < n.length && a(n.charAt(i)); ) ++i;
                }
                return new xi(ge(e.line, r), ge(e.line, i));
              },
              toggleOverwrite: function(e) {
                (null != e && e == this.state.overwrite) ||
                  ((this.state.overwrite = !this.state.overwrite)
                    ? N(this.display.cursorDiv, "CodeMirror-overwrite")
                    : E(this.display.cursorDiv, "CodeMirror-overwrite"),
                  it(this, "overwriteToggle", this, this.state.overwrite));
              },
              hasFocus: function() {
                return this.display.input.getField() == L();
              },
              isReadOnly: function() {
                return !(!this.options.readOnly && !this.doc.cantEdit);
              },
              scrollTo: qr(function(e, t) {
                Fr(this, e, t);
              }),
              getScrollInfo: function() {
                var e = this.display.scroller;
                return {
                  left: e.scrollLeft,
                  top: e.scrollTop,
                  height: e.scrollHeight - kn(this) - this.display.barHeight,
                  width: e.scrollWidth - kn(this) - this.display.barWidth,
                  clientHeight: Tn(this),
                  clientWidth: Fn(this),
                };
              },
              scrollIntoView: qr(function(e, t) {
                null == e
                  ? ((e = { from: this.doc.sel.primary().head, to: null }),
                    null == t && (t = this.options.cursorScrollMargin))
                  : "number" == typeof e
                  ? (e = { from: ge(e, 0), to: null })
                  : null == e.from && (e = { from: e, to: null }),
                  e.to || (e.to = e.from),
                  (e.margin = t || 0),
                  null != e.from.line
                    ? (function(e, t) {
                        Tr(e), (e.curOp.scrollToPos = t);
                      })(this, e)
                    : Mr(this, e.from, e.to, e.margin);
              }),
              setSize: qr(function(e, t) {
                var n = this,
                  r = function(e) {
                    return "number" == typeof e || /^\d+$/.test(String(e))
                      ? e + "px"
                      : e;
                  };
                null != e && (this.display.wrapper.style.width = r(e)),
                  null != t && (this.display.wrapper.style.height = r(t)),
                  this.options.lineWrapping && Wn(this);
                var i = this.display.viewFrom;
                this.doc.iter(i, this.display.viewTo, function(e) {
                  if (e.widgets)
                    for (var t = 0; t < e.widgets.length; t++)
                      if (e.widgets[t].noHScroll) {
                        Qr(n, i, "widget");
                        break;
                      }
                  ++i;
                }),
                  (this.curOp.forceUpdate = !0),
                  it(this, "refresh", this);
              }),
              operation: function(e) {
                return Gr(this, e);
              },
              startOperation: function() {
                return Xr(this);
              },
              endOperation: function() {
                return Jr(this);
              },
              refresh: qr(function() {
                var e = this.display.cachedTextHeight;
                Zr(this),
                  (this.curOp.forceUpdate = !0),
                  Hn(this),
                  Fr(this, this.doc.scrollLeft, this.doc.scrollTop),
                  li(this),
                  (null == e || Math.abs(e - nr(this.display)) > 0.5) &&
                    ar(this),
                  it(this, "refresh", this);
              }),
              swapDoc: qr(function(e) {
                var t = this.doc;
                return (
                  (t.cm = null),
                  Bi(this, e),
                  Hn(this),
                  this.display.input.reset(),
                  Fr(this, e.scrollLeft, e.scrollTop),
                  (this.curOp.forceScroll = !0),
                  ln(this, "swapDoc", this, t),
                  t
                );
              }),
              phrase: function(e) {
                var t = this.options.phrases;
                return t && Object.prototype.hasOwnProperty.call(t, e)
                  ? t[e]
                  : e;
              },
              getInputField: function() {
                return this.display.input.getField();
              },
              getWrapperElement: function() {
                return this.display.wrapper;
              },
              getScrollerElement: function() {
                return this.display.scroller;
              },
              getGutterElement: function() {
                return this.display.gutters;
              },
            }),
              ut(e),
              (e.registerHelper = function(t, r, i) {
                n.hasOwnProperty(t) || (n[t] = e[t] = { _global: [] }),
                  (n[t][r] = i);
              }),
              (e.registerGlobalHelper = function(t, r, i, o) {
                e.registerHelper(t, r, o),
                  n[t]._global.push({ pred: i, val: o });
              });
          })(Ss);
        var Js = "iter insert remove copy getEditor constructor".split(" ");
        for (var _s in ko.prototype)
          ko.prototype.hasOwnProperty(_s) &&
            W(Js, _s) < 0 &&
            (Ss.prototype[_s] = (function(e) {
              return function() {
                return e.apply(this.doc, arguments);
              };
            })(ko.prototype[_s]));
        return (
          ut(ko),
          (Ss.inputStyles = { textarea: Xs, contenteditable: Rs }),
          (Ss.defineMode = function(e) {
            Ss.defaults.mode || "null" == e || (Ss.defaults.mode = e),
              function(e, t) {
                arguments.length > 2 &&
                  (t.dependencies = Array.prototype.slice.call(arguments, 2)),
                  (At[e] = t);
              }.apply(this, arguments);
          }),
          (Ss.defineMIME = function(e, t) {
            Et[e] = t;
          }),
          Ss.defineMode("null", function() {
            return {
              token: function(e) {
                return e.skipToEnd();
              },
            };
          }),
          Ss.defineMIME("text/plain", "null"),
          (Ss.defineExtension = function(e, t) {
            Ss.prototype[e] = t;
          }),
          (Ss.defineDocExtension = function(e, t) {
            ko.prototype[e] = t;
          }),
          (Ss.fromTextArea = function(e, t) {
            if (
              (((t = t ? R(t) : {}).value = e.value),
              !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
              !t.placeholder &&
                e.placeholder &&
                (t.placeholder = e.placeholder),
              null == t.autofocus)
            ) {
              var n = L();
              t.autofocus =
                n == e ||
                (null != e.getAttribute("autofocus") && n == document.body);
            }
            function r() {
              e.value = a.getValue();
            }
            var i;
            if (
              e.form &&
              (tt(e.form, "submit", r), !t.leaveSubmitMethodAlone)
            ) {
              var o = e.form;
              i = o.submit;
              try {
                var s = (o.submit = function() {
                  r(), (o.submit = i), o.submit(), (o.submit = s);
                });
              } catch (Dt) {}
            }
            (t.finishInit = function(t) {
              (t.save = r),
                (t.getTextArea = function() {
                  return e;
                }),
                (t.toTextArea = function() {
                  (t.toTextArea = isNaN),
                    r(),
                    e.parentNode.removeChild(t.getWrapperElement()),
                    (e.style.display = ""),
                    e.form &&
                      (rt(e.form, "submit", r),
                      "function" == typeof e.form.submit &&
                        (e.form.submit = i));
                });
            }),
              (e.style.display = "none");
            var a = Ss(function(t) {
              return e.parentNode.insertBefore(t, e.nextSibling);
            }, t);
            return a;
          }),
          (function(e) {
            (e.off = rt),
              (e.on = tt),
              (e.wheelEventPixels = gi),
              (e.Doc = ko),
              (e.splitLines = Ct),
              (e.countColumn = z),
              (e.findColumn = K),
              (e.isWordChar = ee),
              (e.Pass = X),
              (e.signal = it),
              (e.Line = Yt),
              (e.changeEnd = wi),
              (e.scrollbarModel = Ur),
              (e.Pos = ge),
              (e.cmpPos = ve),
              (e.modes = At),
              (e.mimeModes = Et),
              (e.resolveMode = kt),
              (e.getMode = Ft),
              (e.modeExtensions = Tt),
              (e.extendMode = Mt),
              (e.copyState = Bt),
              (e.startState = Nt),
              (e.innerMode = Lt),
              (e.commands = $o),
              (e.keyMap = Uo),
              (e.keyName = jo),
              (e.isModifierKey = Jo),
              (e.lookupKey = Xo),
              (e.normalizeKeyMap = Ho),
              (e.StringStream = It),
              (e.SharedTextMarker = bo),
              (e.TextMarker = Co),
              (e.LineWidget = yo),
              (e.e_preventDefault = lt),
              (e.e_stopPropagation = ct),
              (e.e_stop = pt),
              (e.addClass = N),
              (e.contains = B),
              (e.rmClass = E),
              (e.keyNames = Po);
          })(Ss),
          (Ss.version = "5.45.0"),
          Ss
        );
      })();
    },
    451: function(e, t, n) {
      "use strict";
      var r = n(623);
      e.exports = r;
    },
    452: function(e, t, n) {
      "use strict";
      var r = n(303);
      e.exports = new r({ include: [n(453)] });
    },
    453: function(e, t, n) {
      "use strict";
      var r = n(303);
      e.exports = new r({
        include: [n(401)],
        implicit: [n(629), n(630), n(631), n(632)],
      });
    },
    454: function(e, t, n) {
      !(function(e) {
        "use strict";
        e.defineMode("yaml", function() {
          var e = new RegExp(
            "\\b((" +
              ["true", "false", "on", "off", "yes", "no"].join(")|(") +
              "))$",
            "i"
          );
          return {
            token: function(t, n) {
              var r = t.peek(),
                i = n.escaped;
              if (
                ((n.escaped = !1),
                "#" == r &&
                  (0 == t.pos || /\s/.test(t.string.charAt(t.pos - 1))))
              )
                return t.skipToEnd(), "comment";
              if (t.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/)) return "string";
              if (n.literal && t.indentation() > n.keyCol)
                return t.skipToEnd(), "string";
              if ((n.literal && (n.literal = !1), t.sol())) {
                if (
                  ((n.keyCol = 0),
                  (n.pair = !1),
                  (n.pairStart = !1),
                  t.match(/---/))
                )
                  return "def";
                if (t.match(/\.\.\./)) return "def";
                if (t.match(/\s*-\s+/)) return "meta";
              }
              if (t.match(/^(\{|\}|\[|\])/))
                return (
                  "{" == r
                    ? n.inlinePairs++
                    : "}" == r
                    ? n.inlinePairs--
                    : "[" == r
                    ? n.inlineList++
                    : n.inlineList--,
                  "meta"
                );
              if (n.inlineList > 0 && !i && "," == r) return t.next(), "meta";
              if (n.inlinePairs > 0 && !i && "," == r)
                return (
                  (n.keyCol = 0),
                  (n.pair = !1),
                  (n.pairStart = !1),
                  t.next(),
                  "meta"
                );
              if (n.pairStart) {
                if (t.match(/^\s*(\||\>)\s*/)) return (n.literal = !0), "meta";
                if (t.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i)) return "variable-2";
                if (0 == n.inlinePairs && t.match(/^\s*-?[0-9\.\,]+\s?$/))
                  return "number";
                if (
                  n.inlinePairs > 0 &&
                  t.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/)
                )
                  return "number";
                if (t.match(e)) return "keyword";
              }
              return !n.pair &&
                t.match(
                  /^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/
                )
                ? ((n.pair = !0), (n.keyCol = t.indentation()), "atom")
                : n.pair && t.match(/^:\s*/)
                ? ((n.pairStart = !0), "meta")
                : ((n.pairStart = !1), (n.escaped = "\\" == r), t.next(), null);
            },
            startState: function() {
              return {
                pair: !1,
                pairStart: !1,
                keyCol: 0,
                inlinePairs: 0,
                inlineList: 0,
                literal: !1,
                escaped: !1,
              };
            },
            lineComment: "#",
            fold: "indent",
          };
        }),
          e.defineMIME("text/x-yaml", "yaml"),
          e.defineMIME("text/yaml", "yaml");
      })(n(403));
    },
    455: function(e, t, n) {
      "use strict";
      t.a =
        "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n";
    },
    623: function(e, t, n) {
      "use strict";
      var r = n(624),
        i = n(647);
      function o(e) {
        return function() {
          throw new Error(
            "Function " + e + " is deprecated and cannot be used."
          );
        };
      }
      (e.exports.Type = n(223)),
        (e.exports.Schema = n(303)),
        (e.exports.FAILSAFE_SCHEMA = n(401)),
        (e.exports.JSON_SCHEMA = n(453)),
        (e.exports.CORE_SCHEMA = n(452)),
        (e.exports.DEFAULT_SAFE_SCHEMA = n(330)),
        (e.exports.DEFAULT_FULL_SCHEMA = n(352)),
        (e.exports.load = r.load),
        (e.exports.loadAll = r.loadAll),
        (e.exports.safeLoad = r.safeLoad),
        (e.exports.safeLoadAll = r.safeLoadAll),
        (e.exports.dump = i.dump),
        (e.exports.safeDump = i.safeDump),
        (e.exports.YAMLException = n(329)),
        (e.exports.MINIMAL_SCHEMA = n(401)),
        (e.exports.SAFE_SCHEMA = n(330)),
        (e.exports.DEFAULT_SCHEMA = n(352)),
        (e.exports.scan = o("scan")),
        (e.exports.parse = o("parse")),
        (e.exports.compose = o("compose")),
        (e.exports.addConstructor = o("addConstructor"));
    },
    624: function(e, t, n) {
      "use strict";
      var r = n(302),
        i = n(329),
        o = n(625),
        s = n(330),
        a = n(352),
        u = Object.prototype.hasOwnProperty,
        l = 1,
        c = 2,
        h = 3,
        p = 4,
        f = 1,
        d = 2,
        m = 3,
        g = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
        v = /[\x85\u2028\u2029]/,
        y = /[,\[\]\{\}]/,
        x = /^(?:!|!!|![a-z\-]+!)$/i,
        D = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
      function C(e) {
        return 10 === e || 13 === e;
      }
      function w(e) {
        return 9 === e || 32 === e;
      }
      function b(e) {
        return 9 === e || 32 === e || 10 === e || 13 === e;
      }
      function S(e) {
        return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e;
      }
      function A(e) {
        var t;
        return 48 <= e && e <= 57
          ? e - 48
          : 97 <= (t = 32 | e) && t <= 102
          ? t - 97 + 10
          : -1;
      }
      function E(e) {
        return 48 === e
          ? "\0"
          : 97 === e
          ? ""
          : 98 === e
          ? "\b"
          : 116 === e
          ? "\t"
          : 9 === e
          ? "\t"
          : 110 === e
          ? "\n"
          : 118 === e
          ? "\v"
          : 102 === e
          ? "\f"
          : 114 === e
          ? "\r"
          : 101 === e
          ? ""
          : 32 === e
          ? " "
          : 34 === e
          ? '"'
          : 47 === e
          ? "/"
          : 92 === e
          ? "\\"
          : 78 === e
          ? ""
          : 95 === e
          ? " "
          : 76 === e
          ? "\u2028"
          : 80 === e
          ? "\u2029"
          : "";
      }
      function k(e) {
        return e <= 65535
          ? String.fromCharCode(e)
          : String.fromCharCode(
              55296 + ((e - 65536) >> 10),
              56320 + ((e - 65536) & 1023)
            );
      }
      for (var F = new Array(256), T = new Array(256), M = 0; M < 256; M++)
        (F[M] = E(M) ? 1 : 0), (T[M] = E(M));
      function B(e, t) {
        (this.input = e),
          (this.filename = t.filename || null),
          (this.schema = t.schema || a),
          (this.onWarning = t.onWarning || null),
          (this.legacy = t.legacy || !1),
          (this.json = t.json || !1),
          (this.listener = t.listener || null),
          (this.implicitTypes = this.schema.compiledImplicit),
          (this.typeMap = this.schema.compiledTypeMap),
          (this.length = e.length),
          (this.position = 0),
          (this.line = 0),
          (this.lineStart = 0),
          (this.lineIndent = 0),
          (this.documents = []);
      }
      function L(e, t) {
        return new i(
          t,
          new o(
            e.filename,
            e.input,
            e.position,
            e.line,
            e.position - e.lineStart
          )
        );
      }
      function N(e, t) {
        throw L(e, t);
      }
      function I(e, t) {
        e.onWarning && e.onWarning.call(null, L(e, t));
      }
      var P = {
        YAML: function(e, t, n) {
          var r, i, o;
          null !== e.version && N(e, "duplication of %YAML directive"),
            1 !== n.length &&
              N(e, "YAML directive accepts exactly one argument"),
            null === (r = /^([0-9]+)\.([0-9]+)$/.exec(n[0])) &&
              N(e, "ill-formed argument of the YAML directive"),
            (i = parseInt(r[1], 10)),
            (o = parseInt(r[2], 10)),
            1 !== i && N(e, "unacceptable YAML version of the document"),
            (e.version = n[0]),
            (e.checkLineBreaks = o < 2),
            1 !== o &&
              2 !== o &&
              I(e, "unsupported YAML version of the document");
        },
        TAG: function(e, t, n) {
          var r, i;
          2 !== n.length && N(e, "TAG directive accepts exactly two arguments"),
            (r = n[0]),
            (i = n[1]),
            x.test(r) ||
              N(
                e,
                "ill-formed tag handle (first argument) of the TAG directive"
              ),
            u.call(e.tagMap, r) &&
              N(
                e,
                'there is a previously declared suffix for "' +
                  r +
                  '" tag handle'
              ),
            D.test(i) ||
              N(
                e,
                "ill-formed tag prefix (second argument) of the TAG directive"
              ),
            (e.tagMap[r] = i);
        },
      };
      function O(e, t, n, r) {
        var i, o, s, a;
        if (t < n) {
          if (((a = e.input.slice(t, n)), r))
            for (i = 0, o = a.length; i < o; i += 1)
              9 === (s = a.charCodeAt(i)) ||
                (32 <= s && s <= 1114111) ||
                N(e, "expected valid JSON character");
          else
            g.test(a) && N(e, "the stream contains non-printable characters");
          e.result += a;
        }
      }
      function R(e, t, n, i) {
        var o, s, a, l;
        for (
          r.isObject(n) ||
            N(
              e,
              "cannot merge mappings; the provided source object is unacceptable"
            ),
            a = 0,
            l = (o = Object.keys(n)).length;
          a < l;
          a += 1
        )
          (s = o[a]), u.call(t, s) || ((t[s] = n[s]), (i[s] = !0));
      }
      function z(e, t, n, r, i, o, s, a) {
        var l, c;
        if (Array.isArray(i))
          for (l = 0, c = i.length; l < c; l += 1)
            Array.isArray(i[l]) &&
              N(e, "nested arrays are not supported inside keys");
        if (
          ((i = String(i)),
          null === t && (t = {}),
          "tag:yaml.org,2002:merge" === r)
        )
          if (Array.isArray(o))
            for (l = 0, c = o.length; l < c; l += 1) R(e, t, o[l], n);
          else R(e, t, o, n);
        else
          e.json ||
            u.call(n, i) ||
            !u.call(t, i) ||
            ((e.line = s || e.line),
            (e.position = a || e.position),
            N(e, "duplicated mapping key")),
            (t[i] = o),
            delete n[i];
        return t;
      }
      function U(e) {
        var t;
        10 === (t = e.input.charCodeAt(e.position))
          ? e.position++
          : 13 === t
          ? (e.position++,
            10 === e.input.charCodeAt(e.position) && e.position++)
          : N(e, "a line break is expected"),
          (e.line += 1),
          (e.lineStart = e.position);
      }
      function W(e, t, n) {
        for (var r = 0, i = e.input.charCodeAt(e.position); 0 !== i; ) {
          for (; w(i); ) i = e.input.charCodeAt(++e.position);
          if (t && 35 === i)
            do {
              i = e.input.charCodeAt(++e.position);
            } while (10 !== i && 13 !== i && 0 !== i);
          if (!C(i)) break;
          for (
            U(e), i = e.input.charCodeAt(e.position), r++, e.lineIndent = 0;
            32 === i;

          )
            e.lineIndent++, (i = e.input.charCodeAt(++e.position));
        }
        return (
          -1 !== n &&
            0 !== r &&
            e.lineIndent < n &&
            I(e, "deficient indentation"),
          r
        );
      }
      function H(e) {
        var t,
          n = e.position;
        return !(
          (45 !== (t = e.input.charCodeAt(n)) && 46 !== t) ||
          t !== e.input.charCodeAt(n + 1) ||
          t !== e.input.charCodeAt(n + 2) ||
          ((n += 3), 0 !== (t = e.input.charCodeAt(n)) && !b(t))
        );
      }
      function X(e, t) {
        1 === t
          ? (e.result += " ")
          : t > 1 && (e.result += r.repeat("\n", t - 1));
      }
      function J(e, t) {
        var n,
          r,
          i = e.tag,
          o = e.anchor,
          s = [],
          a = !1;
        for (
          null !== e.anchor && (e.anchorMap[e.anchor] = s),
            r = e.input.charCodeAt(e.position);
          0 !== r && 45 === r && b(e.input.charCodeAt(e.position + 1));

        )
          if (((a = !0), e.position++, W(e, !0, -1) && e.lineIndent <= t))
            s.push(null), (r = e.input.charCodeAt(e.position));
          else if (
            ((n = e.line),
            K(e, t, h, !1, !0),
            s.push(e.result),
            W(e, !0, -1),
            (r = e.input.charCodeAt(e.position)),
            (e.line === n || e.lineIndent > t) && 0 !== r)
          )
            N(e, "bad indentation of a sequence entry");
          else if (e.lineIndent < t) break;
        return (
          !!a &&
          ((e.tag = i),
          (e.anchor = o),
          (e.kind = "sequence"),
          (e.result = s),
          !0)
        );
      }
      function _(e) {
        var t,
          n,
          r,
          i,
          o = !1,
          s = !1;
        if (33 !== (i = e.input.charCodeAt(e.position))) return !1;
        if (
          (null !== e.tag && N(e, "duplication of a tag property"),
          60 === (i = e.input.charCodeAt(++e.position))
            ? ((o = !0), (i = e.input.charCodeAt(++e.position)))
            : 33 === i
            ? ((s = !0), (n = "!!"), (i = e.input.charCodeAt(++e.position)))
            : (n = "!"),
          (t = e.position),
          o)
        ) {
          do {
            i = e.input.charCodeAt(++e.position);
          } while (0 !== i && 62 !== i);
          e.position < e.length
            ? ((r = e.input.slice(t, e.position)),
              (i = e.input.charCodeAt(++e.position)))
            : N(e, "unexpected end of the stream within a verbatim tag");
        } else {
          for (; 0 !== i && !b(i); )
            33 === i &&
              (s
                ? N(e, "tag suffix cannot contain exclamation marks")
                : ((n = e.input.slice(t - 1, e.position + 1)),
                  x.test(n) ||
                    N(e, "named tag handle cannot contain such characters"),
                  (s = !0),
                  (t = e.position + 1))),
              (i = e.input.charCodeAt(++e.position));
          (r = e.input.slice(t, e.position)),
            y.test(r) &&
              N(e, "tag suffix cannot contain flow indicator characters");
        }
        return (
          r &&
            !D.test(r) &&
            N(e, "tag name cannot contain such characters: " + r),
          o
            ? (e.tag = r)
            : u.call(e.tagMap, n)
            ? (e.tag = e.tagMap[n] + r)
            : "!" === n
            ? (e.tag = "!" + r)
            : "!!" === n
            ? (e.tag = "tag:yaml.org,2002:" + r)
            : N(e, 'undeclared tag handle "' + n + '"'),
          !0
        );
      }
      function j(e) {
        var t, n;
        if (38 !== (n = e.input.charCodeAt(e.position))) return !1;
        for (
          null !== e.anchor && N(e, "duplication of an anchor property"),
            n = e.input.charCodeAt(++e.position),
            t = e.position;
          0 !== n && !b(n) && !S(n);

        )
          n = e.input.charCodeAt(++e.position);
        return (
          e.position === t &&
            N(e, "name of an anchor node must contain at least one character"),
          (e.anchor = e.input.slice(t, e.position)),
          !0
        );
      }
      function K(e, t, n, i, o) {
        var s,
          a,
          g,
          v,
          y,
          x,
          D,
          E,
          M = 1,
          B = !1,
          L = !1;
        if (
          (null !== e.listener && e.listener("open", e),
          (e.tag = null),
          (e.anchor = null),
          (e.kind = null),
          (e.result = null),
          (s = a = g = p === n || h === n),
          i &&
            W(e, !0, -1) &&
            ((B = !0),
            e.lineIndent > t
              ? (M = 1)
              : e.lineIndent === t
              ? (M = 0)
              : e.lineIndent < t && (M = -1)),
          1 === M)
        )
          for (; _(e) || j(e); )
            W(e, !0, -1)
              ? ((B = !0),
                (g = s),
                e.lineIndent > t
                  ? (M = 1)
                  : e.lineIndent === t
                  ? (M = 0)
                  : e.lineIndent < t && (M = -1))
              : (g = !1);
        if (
          (g && (g = B || o),
          (1 !== M && p !== n) ||
            ((D = l === n || c === n ? t : t + 1),
            (E = e.position - e.lineStart),
            1 === M
              ? (g &&
                  (J(e, E) ||
                    (function(e, t, n) {
                      var r,
                        i,
                        o,
                        s,
                        a,
                        u = e.tag,
                        l = e.anchor,
                        h = {},
                        f = {},
                        d = null,
                        m = null,
                        g = null,
                        v = !1,
                        y = !1;
                      for (
                        null !== e.anchor && (e.anchorMap[e.anchor] = h),
                          a = e.input.charCodeAt(e.position);
                        0 !== a;

                      ) {
                        if (
                          ((r = e.input.charCodeAt(e.position + 1)),
                          (o = e.line),
                          (s = e.position),
                          (63 !== a && 58 !== a) || !b(r))
                        ) {
                          if (!K(e, n, c, !1, !0)) break;
                          if (e.line === o) {
                            for (a = e.input.charCodeAt(e.position); w(a); )
                              a = e.input.charCodeAt(++e.position);
                            if (58 === a)
                              b((a = e.input.charCodeAt(++e.position))) ||
                                N(
                                  e,
                                  "a whitespace character is expected after the key-value separator within a block mapping"
                                ),
                                v &&
                                  (z(e, h, f, d, m, null), (d = m = g = null)),
                                (y = !0),
                                (v = !1),
                                (i = !1),
                                (d = e.tag),
                                (m = e.result);
                            else {
                              if (!y) return (e.tag = u), (e.anchor = l), !0;
                              N(
                                e,
                                "can not read an implicit mapping pair; a colon is missed"
                              );
                            }
                          } else {
                            if (!y) return (e.tag = u), (e.anchor = l), !0;
                            N(
                              e,
                              "can not read a block mapping entry; a multiline key may not be an implicit key"
                            );
                          }
                        } else
                          63 === a
                            ? (v &&
                                (z(e, h, f, d, m, null), (d = m = g = null)),
                              (y = !0),
                              (v = !0),
                              (i = !0))
                            : v
                            ? ((v = !1), (i = !0))
                            : N(
                                e,
                                "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"
                              ),
                            (e.position += 1),
                            (a = r);
                        if (
                          ((e.line === o || e.lineIndent > t) &&
                            (K(e, t, p, !0, i) &&
                              (v ? (m = e.result) : (g = e.result)),
                            v ||
                              (z(e, h, f, d, m, g, o, s), (d = m = g = null)),
                            W(e, !0, -1),
                            (a = e.input.charCodeAt(e.position))),
                          e.lineIndent > t && 0 !== a)
                        )
                          N(e, "bad indentation of a mapping entry");
                        else if (e.lineIndent < t) break;
                      }
                      return (
                        v && z(e, h, f, d, m, null),
                        y &&
                          ((e.tag = u),
                          (e.anchor = l),
                          (e.kind = "mapping"),
                          (e.result = h)),
                        y
                      );
                    })(e, E, D))) ||
                (function(e, t) {
                  var n,
                    r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    c,
                    h,
                    p,
                    f = !0,
                    d = e.tag,
                    m = e.anchor,
                    g = {};
                  if (91 === (p = e.input.charCodeAt(e.position)))
                    (i = 93), (a = !1), (r = []);
                  else {
                    if (123 !== p) return !1;
                    (i = 125), (a = !0), (r = {});
                  }
                  for (
                    null !== e.anchor && (e.anchorMap[e.anchor] = r),
                      p = e.input.charCodeAt(++e.position);
                    0 !== p;

                  ) {
                    if (
                      (W(e, !0, t), (p = e.input.charCodeAt(e.position)) === i)
                    )
                      return (
                        e.position++,
                        (e.tag = d),
                        (e.anchor = m),
                        (e.kind = a ? "mapping" : "sequence"),
                        (e.result = r),
                        !0
                      );
                    f || N(e, "missed comma between flow collection entries"),
                      (h = null),
                      (o = s = !1),
                      63 === p &&
                        b(e.input.charCodeAt(e.position + 1)) &&
                        ((o = s = !0), e.position++, W(e, !0, t)),
                      (n = e.line),
                      K(e, t, l, !1, !0),
                      (c = e.tag),
                      (u = e.result),
                      W(e, !0, t),
                      (p = e.input.charCodeAt(e.position)),
                      (!s && e.line !== n) ||
                        58 !== p ||
                        ((o = !0),
                        (p = e.input.charCodeAt(++e.position)),
                        W(e, !0, t),
                        K(e, t, l, !1, !0),
                        (h = e.result)),
                      a
                        ? z(e, r, g, c, u, h)
                        : o
                        ? r.push(z(e, null, g, c, u, h))
                        : r.push(u),
                      W(e, !0, t),
                      44 === (p = e.input.charCodeAt(e.position))
                        ? ((f = !0), (p = e.input.charCodeAt(++e.position)))
                        : (f = !1);
                  }
                  N(e, "unexpected end of the stream within a flow collection");
                })(e, D)
                ? (L = !0)
                : ((a &&
                    (function(e, t) {
                      var n,
                        i,
                        o,
                        s,
                        a,
                        u = f,
                        l = !1,
                        c = !1,
                        h = t,
                        p = 0,
                        g = !1;
                      if (124 === (s = e.input.charCodeAt(e.position))) i = !1;
                      else {
                        if (62 !== s) return !1;
                        i = !0;
                      }
                      for (e.kind = "scalar", e.result = ""; 0 !== s; )
                        if (
                          43 === (s = e.input.charCodeAt(++e.position)) ||
                          45 === s
                        )
                          f === u
                            ? (u = 43 === s ? m : d)
                            : N(e, "repeat of a chomping mode identifier");
                        else {
                          if (
                            !((o = 48 <= (a = s) && a <= 57 ? a - 48 : -1) >= 0)
                          )
                            break;
                          0 === o
                            ? N(
                                e,
                                "bad explicit indentation width of a block scalar; it cannot be less than one"
                              )
                            : c
                            ? N(e, "repeat of an indentation width identifier")
                            : ((h = t + o - 1), (c = !0));
                        }
                      if (w(s)) {
                        do {
                          s = e.input.charCodeAt(++e.position);
                        } while (w(s));
                        if (35 === s)
                          do {
                            s = e.input.charCodeAt(++e.position);
                          } while (!C(s) && 0 !== s);
                      }
                      for (; 0 !== s; ) {
                        for (
                          U(e),
                            e.lineIndent = 0,
                            s = e.input.charCodeAt(e.position);
                          (!c || e.lineIndent < h) && 32 === s;

                        )
                          e.lineIndent++,
                            (s = e.input.charCodeAt(++e.position));
                        if (
                          (!c && e.lineIndent > h && (h = e.lineIndent), C(s))
                        )
                          p++;
                        else {
                          if (e.lineIndent < h) {
                            u === m
                              ? (e.result += r.repeat("\n", l ? 1 + p : p))
                              : u === f && l && (e.result += "\n");
                            break;
                          }
                          for (
                            i
                              ? w(s)
                                ? ((g = !0),
                                  (e.result += r.repeat("\n", l ? 1 + p : p)))
                                : g
                                ? ((g = !1),
                                  (e.result += r.repeat("\n", p + 1)))
                                : 0 === p
                                ? l && (e.result += " ")
                                : (e.result += r.repeat("\n", p))
                              : (e.result += r.repeat("\n", l ? 1 + p : p)),
                              l = !0,
                              c = !0,
                              p = 0,
                              n = e.position;
                            !C(s) && 0 !== s;

                          )
                            s = e.input.charCodeAt(++e.position);
                          O(e, n, e.position, !1);
                        }
                      }
                      return !0;
                    })(e, D)) ||
                  (function(e, t) {
                    var n, r, i;
                    if (39 !== (n = e.input.charCodeAt(e.position))) return !1;
                    for (
                      e.kind = "scalar",
                        e.result = "",
                        e.position++,
                        r = i = e.position;
                      0 !== (n = e.input.charCodeAt(e.position));

                    )
                      if (39 === n) {
                        if (
                          (O(e, r, e.position, !0),
                          39 !== (n = e.input.charCodeAt(++e.position)))
                        )
                          return !0;
                        (r = e.position), e.position++, (i = e.position);
                      } else
                        C(n)
                          ? (O(e, r, i, !0),
                            X(e, W(e, !1, t)),
                            (r = i = e.position))
                          : e.position === e.lineStart && H(e)
                          ? N(
                              e,
                              "unexpected end of the document within a single quoted scalar"
                            )
                          : (e.position++, (i = e.position));
                    N(
                      e,
                      "unexpected end of the stream within a single quoted scalar"
                    );
                  })(e, D) ||
                  (function(e, t) {
                    var n, r, i, o, s, a, u;
                    if (34 !== (a = e.input.charCodeAt(e.position))) return !1;
                    for (
                      e.kind = "scalar",
                        e.result = "",
                        e.position++,
                        n = r = e.position;
                      0 !== (a = e.input.charCodeAt(e.position));

                    ) {
                      if (34 === a)
                        return O(e, n, e.position, !0), e.position++, !0;
                      if (92 === a) {
                        if (
                          (O(e, n, e.position, !0),
                          C((a = e.input.charCodeAt(++e.position))))
                        )
                          W(e, !1, t);
                        else if (a < 256 && F[a])
                          (e.result += T[a]), e.position++;
                        else if (
                          (s =
                            120 === (u = a)
                              ? 2
                              : 117 === u
                              ? 4
                              : 85 === u
                              ? 8
                              : 0) > 0
                        ) {
                          for (i = s, o = 0; i > 0; i--)
                            (s = A((a = e.input.charCodeAt(++e.position)))) >= 0
                              ? (o = (o << 4) + s)
                              : N(e, "expected hexadecimal character");
                          (e.result += k(o)), e.position++;
                        } else N(e, "unknown escape sequence");
                        n = r = e.position;
                      } else
                        C(a)
                          ? (O(e, n, r, !0),
                            X(e, W(e, !1, t)),
                            (n = r = e.position))
                          : e.position === e.lineStart && H(e)
                          ? N(
                              e,
                              "unexpected end of the document within a double quoted scalar"
                            )
                          : (e.position++, (r = e.position));
                    }
                    N(
                      e,
                      "unexpected end of the stream within a double quoted scalar"
                    );
                  })(e, D)
                    ? (L = !0)
                    : !(function(e) {
                        var t, n, r;
                        if (42 !== (r = e.input.charCodeAt(e.position)))
                          return !1;
                        for (
                          r = e.input.charCodeAt(++e.position), t = e.position;
                          0 !== r && !b(r) && !S(r);

                        )
                          r = e.input.charCodeAt(++e.position);
                        return (
                          e.position === t &&
                            N(
                              e,
                              "name of an alias node must contain at least one character"
                            ),
                          (n = e.input.slice(t, e.position)),
                          e.anchorMap.hasOwnProperty(n) ||
                            N(e, 'unidentified alias "' + n + '"'),
                          (e.result = e.anchorMap[n]),
                          W(e, !0, -1),
                          !0
                        );
                      })(e)
                    ? (function(e, t, n) {
                        var r,
                          i,
                          o,
                          s,
                          a,
                          u,
                          l,
                          c,
                          h = e.kind,
                          p = e.result;
                        if (
                          b((c = e.input.charCodeAt(e.position))) ||
                          S(c) ||
                          35 === c ||
                          38 === c ||
                          42 === c ||
                          33 === c ||
                          124 === c ||
                          62 === c ||
                          39 === c ||
                          34 === c ||
                          37 === c ||
                          64 === c ||
                          96 === c
                        )
                          return !1;
                        if (
                          (63 === c || 45 === c) &&
                          (b((r = e.input.charCodeAt(e.position + 1))) ||
                            (n && S(r)))
                        )
                          return !1;
                        for (
                          e.kind = "scalar",
                            e.result = "",
                            i = o = e.position,
                            s = !1;
                          0 !== c;

                        ) {
                          if (58 === c) {
                            if (
                              b((r = e.input.charCodeAt(e.position + 1))) ||
                              (n && S(r))
                            )
                              break;
                          } else if (35 === c) {
                            if (b(e.input.charCodeAt(e.position - 1))) break;
                          } else {
                            if (
                              (e.position === e.lineStart && H(e)) ||
                              (n && S(c))
                            )
                              break;
                            if (C(c)) {
                              if (
                                ((a = e.line),
                                (u = e.lineStart),
                                (l = e.lineIndent),
                                W(e, !1, -1),
                                e.lineIndent >= t)
                              ) {
                                (s = !0), (c = e.input.charCodeAt(e.position));
                                continue;
                              }
                              (e.position = o),
                                (e.line = a),
                                (e.lineStart = u),
                                (e.lineIndent = l);
                              break;
                            }
                          }
                          s &&
                            (O(e, i, o, !1),
                            X(e, e.line - a),
                            (i = o = e.position),
                            (s = !1)),
                            w(c) || (o = e.position + 1),
                            (c = e.input.charCodeAt(++e.position));
                        }
                        return (
                          O(e, i, o, !1),
                          !!e.result || ((e.kind = h), (e.result = p), !1)
                        );
                      })(e, D, l === n) &&
                      ((L = !0), null === e.tag && (e.tag = "?"))
                    : ((L = !0),
                      (null === e.tag && null === e.anchor) ||
                        N(e, "alias node should not have any properties")),
                  null !== e.anchor && (e.anchorMap[e.anchor] = e.result))
              : 0 === M && (L = g && J(e, E))),
          null !== e.tag && "!" !== e.tag)
        )
          if ("?" === e.tag) {
            for (v = 0, y = e.implicitTypes.length; v < y; v += 1)
              if ((x = e.implicitTypes[v]).resolve(e.result)) {
                (e.result = x.construct(e.result)),
                  (e.tag = x.tag),
                  null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
                break;
              }
          } else
            u.call(e.typeMap[e.kind || "fallback"], e.tag)
              ? ((x = e.typeMap[e.kind || "fallback"][e.tag]),
                null !== e.result &&
                  x.kind !== e.kind &&
                  N(
                    e,
                    "unacceptable node kind for !<" +
                      e.tag +
                      '> tag; it should be "' +
                      x.kind +
                      '", not "' +
                      e.kind +
                      '"'
                  ),
                x.resolve(e.result)
                  ? ((e.result = x.construct(e.result)),
                    null !== e.anchor && (e.anchorMap[e.anchor] = e.result))
                  : N(
                      e,
                      "cannot resolve a node with !<" + e.tag + "> explicit tag"
                    ))
              : N(e, "unknown tag !<" + e.tag + ">");
        return (
          null !== e.listener && e.listener("close", e),
          null !== e.tag || null !== e.anchor || L
        );
      }
      function Y(e) {
        var t,
          n,
          r,
          i,
          o = e.position,
          s = !1;
        for (
          e.version = null,
            e.checkLineBreaks = e.legacy,
            e.tagMap = {},
            e.anchorMap = {};
          0 !== (i = e.input.charCodeAt(e.position)) &&
          (W(e, !0, -1),
          (i = e.input.charCodeAt(e.position)),
          !(e.lineIndent > 0 || 37 !== i));

        ) {
          for (
            s = !0, i = e.input.charCodeAt(++e.position), t = e.position;
            0 !== i && !b(i);

          )
            i = e.input.charCodeAt(++e.position);
          for (
            r = [],
              (n = e.input.slice(t, e.position)).length < 1 &&
                N(
                  e,
                  "directive name must not be less than one character in length"
                );
            0 !== i;

          ) {
            for (; w(i); ) i = e.input.charCodeAt(++e.position);
            if (35 === i) {
              do {
                i = e.input.charCodeAt(++e.position);
              } while (0 !== i && !C(i));
              break;
            }
            if (C(i)) break;
            for (t = e.position; 0 !== i && !b(i); )
              i = e.input.charCodeAt(++e.position);
            r.push(e.input.slice(t, e.position));
          }
          0 !== i && U(e),
            u.call(P, n)
              ? P[n](e, n, r)
              : I(e, 'unknown document directive "' + n + '"');
        }
        W(e, !0, -1),
          0 === e.lineIndent &&
          45 === e.input.charCodeAt(e.position) &&
          45 === e.input.charCodeAt(e.position + 1) &&
          45 === e.input.charCodeAt(e.position + 2)
            ? ((e.position += 3), W(e, !0, -1))
            : s && N(e, "directives end mark is expected"),
          K(e, e.lineIndent - 1, p, !1, !0),
          W(e, !0, -1),
          e.checkLineBreaks &&
            v.test(e.input.slice(o, e.position)) &&
            I(e, "non-ASCII line breaks are interpreted as content"),
          e.documents.push(e.result),
          e.position === e.lineStart && H(e)
            ? 46 === e.input.charCodeAt(e.position) &&
              ((e.position += 3), W(e, !0, -1))
            : e.position < e.length - 1 &&
              N(e, "end of the stream or a document separator is expected");
      }
      function G(e, t) {
        (t = t || {}),
          0 !== (e = String(e)).length &&
            (10 !== e.charCodeAt(e.length - 1) &&
              13 !== e.charCodeAt(e.length - 1) &&
              (e += "\n"),
            65279 === e.charCodeAt(0) && (e = e.slice(1)));
        var n = new B(e, t);
        for (n.input += "\0"; 32 === n.input.charCodeAt(n.position); )
          (n.lineIndent += 1), (n.position += 1);
        for (; n.position < n.length - 1; ) Y(n);
        return n.documents;
      }
      function V(e, t, n) {
        var r,
          i,
          o = G(e, n);
        if ("function" != typeof t) return o;
        for (r = 0, i = o.length; r < i; r += 1) t(o[r]);
      }
      function q(e, t) {
        var n = G(e, t);
        if (0 !== n.length) {
          if (1 === n.length) return n[0];
          throw new i(
            "expected a single document in the stream, but found more"
          );
        }
      }
      (e.exports.loadAll = V),
        (e.exports.load = q),
        (e.exports.safeLoadAll = function(e, t, n) {
          if ("function" != typeof t) return V(e, r.extend({ schema: s }, n));
          V(e, t, r.extend({ schema: s }, n));
        }),
        (e.exports.safeLoad = function(e, t) {
          return q(e, r.extend({ schema: s }, t));
        });
    },
    625: function(e, t, n) {
      "use strict";
      var r = n(302);
      function i(e, t, n, r, i) {
        (this.name = e),
          (this.buffer = t),
          (this.position = n),
          (this.line = r),
          (this.column = i);
      }
      (i.prototype.getSnippet = function(e, t) {
        var n, i, o, s, a;
        if (!this.buffer) return null;
        for (
          e = e || 4, t = t || 75, n = "", i = this.position;
          i > 0 &&
          -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(i - 1));

        )
          if (((i -= 1), this.position - i > t / 2 - 1)) {
            (n = " ... "), (i += 5);
            break;
          }
        for (
          o = "", s = this.position;
          s < this.buffer.length &&
          -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(s));

        )
          if ((s += 1) - this.position > t / 2 - 1) {
            (o = " ... "), (s -= 5);
            break;
          }
        return (
          (a = this.buffer.slice(i, s)),
          r.repeat(" ", e) +
            n +
            a +
            o +
            "\n" +
            r.repeat(" ", e + this.position - i + n.length) +
            "^"
        );
      }),
        (i.prototype.toString = function(e) {
          var t,
            n = "";
          return (
            this.name && (n += 'in "' + this.name + '" '),
            (n +=
              "at line " + (this.line + 1) + ", column " + (this.column + 1)),
            e || ((t = this.getSnippet()) && (n += ":\n" + t)),
            n
          );
        }),
        (e.exports = i);
    },
    626: function(e, t, n) {
      "use strict";
      var r = n(223);
      e.exports = new r("tag:yaml.org,2002:str", {
        kind: "scalar",
        construct: function(e) {
          return null !== e ? e : "";
        },
      });
    },
    627: function(e, t, n) {
      "use strict";
      var r = n(223);
      e.exports = new r("tag:yaml.org,2002:seq", {
        kind: "sequence",
        construct: function(e) {
          return null !== e ? e : [];
        },
      });
    },
    628: function(e, t, n) {
      "use strict";
      var r = n(223);
      e.exports = new r("tag:yaml.org,2002:map", {
        kind: "mapping",
        construct: function(e) {
          return null !== e ? e : {};
        },
      });
    },
    629: function(e, t, n) {
      "use strict";
      var r = n(223);
      e.exports = new r("tag:yaml.org,2002:null", {
        kind: "scalar",
        resolve: function(e) {
          if (null === e) return !0;
          var t = e.length;
          return (
            (1 === t && "~" === e) ||
            (4 === t && ("null" === e || "Null" === e || "NULL" === e))
          );
        },
        construct: function() {
          return null;
        },
        predicate: function(e) {
          return null === e;
        },
        represent: {
          canonical: function() {
            return "~";
          },
          lowercase: function() {
            return "null";
          },
          uppercase: function() {
            return "NULL";
          },
          camelcase: function() {
            return "Null";
          },
        },
        defaultStyle: "lowercase",
      });
    },
    630: function(e, t, n) {
      "use strict";
      var r = n(223);
      e.exports = new r("tag:yaml.org,2002:bool", {
        kind: "scalar",
        resolve: function(e) {
          if (null === e) return !1;
          var t = e.length;
          return (
            (4 === t && ("true" === e || "True" === e || "TRUE" === e)) ||
            (5 === t && ("false" === e || "False" === e || "FALSE" === e))
          );
        },
        construct: function(e) {
          return "true" === e || "True" === e || "TRUE" === e;
        },
        predicate: function(e) {
          return "[object Boolean]" === Object.prototype.toString.call(e);
        },
        represent: {
          lowercase: function(e) {
            return e ? "true" : "false";
          },
          uppercase: function(e) {
            return e ? "TRUE" : "FALSE";
          },
          camelcase: function(e) {
            return e ? "True" : "False";
          },
        },
        defaultStyle: "lowercase",
      });
    },
    631: function(e, t, n) {
      "use strict";
      var r = n(302),
        i = n(223);
      function o(e) {
        return 48 <= e && e <= 55;
      }
      function s(e) {
        return 48 <= e && e <= 57;
      }
      e.exports = new i("tag:yaml.org,2002:int", {
        kind: "scalar",
        resolve: function(e) {
          if (null === e) return !1;
          var t,
            n,
            r = e.length,
            i = 0,
            a = !1;
          if (!r) return !1;
          if ((("-" !== (t = e[i]) && "+" !== t) || (t = e[++i]), "0" === t)) {
            if (i + 1 === r) return !0;
            if ("b" === (t = e[++i])) {
              for (i++; i < r; i++)
                if ("_" !== (t = e[i])) {
                  if ("0" !== t && "1" !== t) return !1;
                  a = !0;
                }
              return a && "_" !== t;
            }
            if ("x" === t) {
              for (i++; i < r; i++)
                if ("_" !== (t = e[i])) {
                  if (
                    !(
                      (48 <= (n = e.charCodeAt(i)) && n <= 57) ||
                      (65 <= n && n <= 70) ||
                      (97 <= n && n <= 102)
                    )
                  )
                    return !1;
                  a = !0;
                }
              return a && "_" !== t;
            }
            for (; i < r; i++)
              if ("_" !== (t = e[i])) {
                if (!o(e.charCodeAt(i))) return !1;
                a = !0;
              }
            return a && "_" !== t;
          }
          if ("_" === t) return !1;
          for (; i < r; i++)
            if ("_" !== (t = e[i])) {
              if (":" === t) break;
              if (!s(e.charCodeAt(i))) return !1;
              a = !0;
            }
          return (
            !(!a || "_" === t) &&
            (":" !== t || /^(:[0-5]?[0-9])+$/.test(e.slice(i)))
          );
        },
        construct: function(e) {
          var t,
            n,
            r = e,
            i = 1,
            o = [];
          return (
            -1 !== r.indexOf("_") && (r = r.replace(/_/g, "")),
            ("-" !== (t = r[0]) && "+" !== t) ||
              ("-" === t && (i = -1), (t = (r = r.slice(1))[0])),
            "0" === r
              ? 0
              : "0" === t
              ? "b" === r[1]
                ? i * parseInt(r.slice(2), 2)
                : "x" === r[1]
                ? i * parseInt(r, 16)
                : i * parseInt(r, 8)
              : -1 !== r.indexOf(":")
              ? (r.split(":").forEach(function(e) {
                  o.unshift(parseInt(e, 10));
                }),
                (r = 0),
                (n = 1),
                o.forEach(function(e) {
                  (r += e * n), (n *= 60);
                }),
                i * r)
              : i * parseInt(r, 10)
          );
        },
        predicate: function(e) {
          return (
            "[object Number]" === Object.prototype.toString.call(e) &&
            e % 1 == 0 &&
            !r.isNegativeZero(e)
          );
        },
        represent: {
          binary: function(e) {
            return e >= 0
              ? "0b" + e.toString(2)
              : "-0b" + e.toString(2).slice(1);
          },
          octal: function(e) {
            return e >= 0 ? "0" + e.toString(8) : "-0" + e.toString(8).slice(1);
          },
          decimal: function(e) {
            return e.toString(10);
          },
          hexadecimal: function(e) {
            return e >= 0
              ? "0x" + e.toString(16).toUpperCase()
              : "-0x" +
                  e
                    .toString(16)
                    .toUpperCase()
                    .slice(1);
          },
        },
        defaultStyle: "decimal",
        styleAliases: {
          binary: [2, "bin"],
          octal: [8, "oct"],
          decimal: [10, "dec"],
          hexadecimal: [16, "hex"],
        },
      });
    },
    632: function(e, t, n) {
      "use strict";
      var r = n(302),
        i = n(223),
        o = new RegExp(
          "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
        );
      var s = /^[-+]?[0-9]+e/;
      e.exports = new i("tag:yaml.org,2002:float", {
        kind: "scalar",
        resolve: function(e) {
          return null !== e && !(!o.test(e) || "_" === e[e.length - 1]);
        },
        construct: function(e) {
          var t, n, r, i;
          return (
            (n = "-" === (t = e.replace(/_/g, "").toLowerCase())[0] ? -1 : 1),
            (i = []),
            "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)),
            ".inf" === t
              ? 1 === n
                ? Number.POSITIVE_INFINITY
                : Number.NEGATIVE_INFINITY
              : ".nan" === t
              ? NaN
              : t.indexOf(":") >= 0
              ? (t.split(":").forEach(function(e) {
                  i.unshift(parseFloat(e, 10));
                }),
                (t = 0),
                (r = 1),
                i.forEach(function(e) {
                  (t += e * r), (r *= 60);
                }),
                n * t)
              : n * parseFloat(t, 10)
          );
        },
        predicate: function(e) {
          return (
            "[object Number]" === Object.prototype.toString.call(e) &&
            (e % 1 != 0 || r.isNegativeZero(e))
          );
        },
        represent: function(e, t) {
          var n;
          if (isNaN(e))
            switch (t) {
              case "lowercase":
                return ".nan";
              case "uppercase":
                return ".NAN";
              case "camelcase":
                return ".NaN";
            }
          else if (Number.POSITIVE_INFINITY === e)
            switch (t) {
              case "lowercase":
                return ".inf";
              case "uppercase":
                return ".INF";
              case "camelcase":
                return ".Inf";
            }
          else if (Number.NEGATIVE_INFINITY === e)
            switch (t) {
              case "lowercase":
                return "-.inf";
              case "uppercase":
                return "-.INF";
              case "camelcase":
                return "-.Inf";
            }
          else if (r.isNegativeZero(e)) return "-0.0";
          return (n = e.toString(10)), s.test(n) ? n.replace("e", ".e") : n;
        },
        defaultStyle: "lowercase",
      });
    },
    633: function(e, t, n) {
      "use strict";
      var r = n(223),
        i = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
        o = new RegExp(
          "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
        );
      e.exports = new r("tag:yaml.org,2002:timestamp", {
        kind: "scalar",
        resolve: function(e) {
          return null !== e && (null !== i.exec(e) || null !== o.exec(e));
        },
        construct: function(e) {
          var t,
            n,
            r,
            s,
            a,
            u,
            l,
            c,
            h = 0,
            p = null;
          if ((null === (t = i.exec(e)) && (t = o.exec(e)), null === t))
            throw new Error("Date resolve error");
          if (((n = +t[1]), (r = +t[2] - 1), (s = +t[3]), !t[4]))
            return new Date(Date.UTC(n, r, s));
          if (((a = +t[4]), (u = +t[5]), (l = +t[6]), t[7])) {
            for (h = t[7].slice(0, 3); h.length < 3; ) h += "0";
            h = +h;
          }
          return (
            t[9] &&
              ((p = 6e4 * (60 * +t[10] + +(t[11] || 0))),
              "-" === t[9] && (p = -p)),
            (c = new Date(Date.UTC(n, r, s, a, u, l, h))),
            p && c.setTime(c.getTime() - p),
            c
          );
        },
        instanceOf: Date,
        represent: function(e) {
          return e.toISOString();
        },
      });
    },
    634: function(e, t, n) {
      "use strict";
      var r = n(223);
      e.exports = new r("tag:yaml.org,2002:merge", {
        kind: "scalar",
        resolve: function(e) {
          return "<<" === e || null === e;
        },
      });
    },
    635: function(e, t, n) {
      "use strict";
      var r;
      try {
        r = n(636).Buffer;
      } catch (s) {}
      var i = n(223),
        o =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
      e.exports = new i("tag:yaml.org,2002:binary", {
        kind: "scalar",
        resolve: function(e) {
          if (null === e) return !1;
          var t,
            n,
            r = 0,
            i = e.length,
            s = o;
          for (n = 0; n < i; n++)
            if (!((t = s.indexOf(e.charAt(n))) > 64)) {
              if (t < 0) return !1;
              r += 6;
            }
          return r % 8 == 0;
        },
        construct: function(e) {
          var t,
            n,
            i = e.replace(/[\r\n=]/g, ""),
            s = i.length,
            a = o,
            u = 0,
            l = [];
          for (t = 0; t < s; t++)
            t % 4 == 0 &&
              t &&
              (l.push((u >> 16) & 255),
              l.push((u >> 8) & 255),
              l.push(255 & u)),
              (u = (u << 6) | a.indexOf(i.charAt(t)));
          return (
            0 == (n = (s % 4) * 6)
              ? (l.push((u >> 16) & 255),
                l.push((u >> 8) & 255),
                l.push(255 & u))
              : 18 === n
              ? (l.push((u >> 10) & 255), l.push((u >> 2) & 255))
              : 12 === n && l.push((u >> 4) & 255),
            r ? (r.from ? r.from(l) : new r(l)) : l
          );
        },
        predicate: function(e) {
          return r && r.isBuffer(e);
        },
        represent: function(e) {
          var t,
            n,
            r = "",
            i = 0,
            s = e.length,
            a = o;
          for (t = 0; t < s; t++)
            t % 3 == 0 &&
              t &&
              ((r += a[(i >> 18) & 63]),
              (r += a[(i >> 12) & 63]),
              (r += a[(i >> 6) & 63]),
              (r += a[63 & i])),
              (i = (i << 8) + e[t]);
          return (
            0 == (n = s % 3)
              ? ((r += a[(i >> 18) & 63]),
                (r += a[(i >> 12) & 63]),
                (r += a[(i >> 6) & 63]),
                (r += a[63 & i]))
              : 2 === n
              ? ((r += a[(i >> 10) & 63]),
                (r += a[(i >> 4) & 63]),
                (r += a[(i << 2) & 63]),
                (r += a[64]))
              : 1 === n &&
                ((r += a[(i >> 2) & 63]),
                (r += a[(i << 4) & 63]),
                (r += a[64]),
                (r += a[64])),
            r
          );
        },
      });
    },
    636: function(e, t, n) {
      "use strict";
      (function(e) {
        var r = n(637),
          i = n(638),
          o = n(639);
        function s() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(e, t) {
          if (s() < t) throw new RangeError("Invalid typed array length");
          return (
            u.TYPED_ARRAY_SUPPORT
              ? ((e = new Uint8Array(t)).__proto__ = u.prototype)
              : (null === e && (e = new u(t)), (e.length = t)),
            e
          );
        }
        function u(e, t, n) {
          if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
            return new u(e, t, n);
          if ("number" == typeof e) {
            if ("string" == typeof t)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return h(this, e);
          }
          return l(this, e, t, n);
        }
        function l(e, t, n, r) {
          if ("number" == typeof t)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
            ? (function(e, t, n, r) {
                if ((t.byteLength, n < 0 || t.byteLength < n))
                  throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0))
                  throw new RangeError("'length' is out of bounds");
                t =
                  void 0 === n && void 0 === r
                    ? new Uint8Array(t)
                    : void 0 === r
                    ? new Uint8Array(t, n)
                    : new Uint8Array(t, n, r);
                u.TYPED_ARRAY_SUPPORT
                  ? ((e = t).__proto__ = u.prototype)
                  : (e = p(e, t));
                return e;
              })(e, t, n, r)
            : "string" == typeof t
            ? (function(e, t, n) {
                ("string" == typeof n && "" !== n) || (n = "utf8");
                if (!u.isEncoding(n))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var r = 0 | d(t, n),
                  i = (e = a(e, r)).write(t, n);
                i !== r && (e = e.slice(0, i));
                return e;
              })(e, t, n)
            : (function(e, t) {
                if (u.isBuffer(t)) {
                  var n = 0 | f(t.length);
                  return 0 === (e = a(e, n)).length
                    ? e
                    : (t.copy(e, 0, 0, n), e);
                }
                if (t) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      t.buffer instanceof ArrayBuffer) ||
                    "length" in t
                  )
                    return "number" != typeof t.length || (r = t.length) != r
                      ? a(e, 0)
                      : p(e, t);
                  if ("Buffer" === t.type && o(t.data)) return p(e, t.data);
                }
                var r;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(e, t);
        }
        function c(e) {
          if ("number" != typeof e)
            throw new TypeError('"size" argument must be a number');
          if (e < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function h(e, t) {
          if ((c(t), (e = a(e, t < 0 ? 0 : 0 | f(t))), !u.TYPED_ARRAY_SUPPORT))
            for (var n = 0; n < t; ++n) e[n] = 0;
          return e;
        }
        function p(e, t) {
          var n = t.length < 0 ? 0 : 0 | f(t.length);
          e = a(e, n);
          for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
          return e;
        }
        function f(e) {
          if (e >= s())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                s().toString(16) +
                " bytes"
            );
          return 0 | e;
        }
        function d(e, t) {
          if (u.isBuffer(e)) return e.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
          )
            return e.byteLength;
          "string" != typeof e && (e = "" + e);
          var n = e.length;
          if (0 === n) return 0;
          for (var r = !1; ; )
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return n;
              case "utf8":
              case "utf-8":
              case void 0:
                return W(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n;
              case "hex":
                return n >>> 1;
              case "base64":
                return H(e).length;
              default:
                if (r) return W(e).length;
                (t = ("" + t).toLowerCase()), (r = !0);
            }
        }
        function m(e, t, n) {
          var r = e[t];
          (e[t] = e[n]), (e[n] = r);
        }
        function g(e, t, n, r, i) {
          if (0 === e.length) return -1;
          if (
            ("string" == typeof n
              ? ((r = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = i ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length)
          ) {
            if (i) return -1;
            n = e.length - 1;
          } else if (n < 0) {
            if (!i) return -1;
            n = 0;
          }
          if (("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)))
            return 0 === t.length ? -1 : v(e, t, n, r, i);
          if ("number" == typeof t)
            return (
              (t &= 255),
              u.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(e, t, n)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                : v(e, [t], n, r, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function v(e, t, n, r, i) {
          var o,
            s = 1,
            a = e.length,
            u = t.length;
          if (
            void 0 !== r &&
            ("ucs2" === (r = String(r).toLowerCase()) ||
              "ucs-2" === r ||
              "utf16le" === r ||
              "utf-16le" === r)
          ) {
            if (e.length < 2 || t.length < 2) return -1;
            (s = 2), (a /= 2), (u /= 2), (n /= 2);
          }
          function l(e, t) {
            return 1 === s ? e[t] : e.readUInt16BE(t * s);
          }
          if (i) {
            var c = -1;
            for (o = n; o < a; o++)
              if (l(e, o) === l(t, -1 === c ? 0 : o - c)) {
                if ((-1 === c && (c = o), o - c + 1 === u)) return c * s;
              } else -1 !== c && (o -= o - c), (c = -1);
          } else
            for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
              for (var h = !0, p = 0; p < u; p++)
                if (l(e, o + p) !== l(t, p)) {
                  h = !1;
                  break;
                }
              if (h) return o;
            }
          return -1;
        }
        function y(e, t, n, r) {
          n = Number(n) || 0;
          var i = e.length - n;
          r ? (r = Number(r)) > i && (r = i) : (r = i);
          var o = t.length;
          if (o % 2 != 0) throw new TypeError("Invalid hex string");
          r > o / 2 && (r = o / 2);
          for (var s = 0; s < r; ++s) {
            var a = parseInt(t.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            e[n + s] = a;
          }
          return s;
        }
        function x(e, t, n, r) {
          return X(W(t, e.length - n), e, n, r);
        }
        function D(e, t, n, r) {
          return X(
            (function(e) {
              for (var t = [], n = 0; n < e.length; ++n)
                t.push(255 & e.charCodeAt(n));
              return t;
            })(t),
            e,
            n,
            r
          );
        }
        function C(e, t, n, r) {
          return D(e, t, n, r);
        }
        function w(e, t, n, r) {
          return X(H(t), e, n, r);
        }
        function b(e, t, n, r) {
          return X(
            (function(e, t) {
              for (
                var n, r, i, o = [], s = 0;
                s < e.length && !((t -= 2) < 0);
                ++s
              )
                (n = e.charCodeAt(s)),
                  (r = n >> 8),
                  (i = n % 256),
                  o.push(i),
                  o.push(r);
              return o;
            })(t, e.length - n),
            e,
            n,
            r
          );
        }
        function S(e, t, n) {
          return 0 === t && n === e.length
            ? r.fromByteArray(e)
            : r.fromByteArray(e.slice(t, n));
        }
        function A(e, t, n) {
          n = Math.min(e.length, n);
          for (var r = [], i = t; i < n; ) {
            var o,
              s,
              a,
              u,
              l = e[i],
              c = null,
              h = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
            if (i + h <= n)
              switch (h) {
                case 1:
                  l < 128 && (c = l);
                  break;
                case 2:
                  128 == (192 & (o = e[i + 1])) &&
                    (u = ((31 & l) << 6) | (63 & o)) > 127 &&
                    (c = u);
                  break;
                case 3:
                  (o = e[i + 1]),
                    (s = e[i + 2]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      (u = ((15 & l) << 12) | ((63 & o) << 6) | (63 & s)) >
                        2047 &&
                      (u < 55296 || u > 57343) &&
                      (c = u);
                  break;
                case 4:
                  (o = e[i + 1]),
                    (s = e[i + 2]),
                    (a = e[i + 3]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      128 == (192 & a) &&
                      (u =
                        ((15 & l) << 18) |
                        ((63 & o) << 12) |
                        ((63 & s) << 6) |
                        (63 & a)) > 65535 &&
                      u < 1114112 &&
                      (c = u);
              }
            null === c
              ? ((c = 65533), (h = 1))
              : c > 65535 &&
                ((c -= 65536),
                r.push(((c >>> 10) & 1023) | 55296),
                (c = 56320 | (1023 & c))),
              r.push(c),
              (i += h);
          }
          return (function(e) {
            var t = e.length;
            if (t <= E) return String.fromCharCode.apply(String, e);
            var n = "",
              r = 0;
            for (; r < t; )
              n += String.fromCharCode.apply(String, e.slice(r, (r += E)));
            return n;
          })(r);
        }
        (t.Buffer = u),
          (t.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return u.alloc(+e);
          }),
          (t.INSPECT_MAX_BYTES = 50),
          (u.TYPED_ARRAY_SUPPORT =
            void 0 !== e.TYPED_ARRAY_SUPPORT
              ? e.TYPED_ARRAY_SUPPORT
              : (function() {
                  try {
                    var e = new Uint8Array(1);
                    return (
                      (e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                          return 42;
                        },
                      }),
                      42 === e.foo() &&
                        "function" == typeof e.subarray &&
                        0 === e.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (t.kMaxLength = s()),
          (u.poolSize = 8192),
          (u._augment = function(e) {
            return (e.__proto__ = u.prototype), e;
          }),
          (u.from = function(e, t, n) {
            return l(null, e, t, n);
          }),
          u.TYPED_ARRAY_SUPPORT &&
            ((u.prototype.__proto__ = Uint8Array.prototype),
            (u.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              u[Symbol.species] === u &&
              Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (u.alloc = function(e, t, n) {
            return (function(e, t, n, r) {
              return (
                c(t),
                t <= 0
                  ? a(e, t)
                  : void 0 !== n
                  ? "string" == typeof r
                    ? a(e, t).fill(n, r)
                    : a(e, t).fill(n)
                  : a(e, t)
              );
            })(null, e, t, n);
          }),
          (u.allocUnsafe = function(e) {
            return h(null, e);
          }),
          (u.allocUnsafeSlow = function(e) {
            return h(null, e);
          }),
          (u.isBuffer = function(e) {
            return !(null == e || !e._isBuffer);
          }),
          (u.compare = function(e, t) {
            if (!u.isBuffer(e) || !u.isBuffer(t))
              throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (
              var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
              i < o;
              ++i
            )
              if (e[i] !== t[i]) {
                (n = e[i]), (r = t[i]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (u.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function(e, t) {
            if (!o(e))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === e.length) return u.alloc(0);
            var n;
            if (void 0 === t)
              for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = u.allocUnsafe(t),
              i = 0;
            for (n = 0; n < e.length; ++n) {
              var s = e[n];
              if (!u.isBuffer(s))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              s.copy(r, i), (i += s.length);
            }
            return r;
          }),
          (u.byteLength = d),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) m(this, t, t + 1);
            return this;
          }),
          (u.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
              m(this, t, t + 3), m(this, t + 1, t + 2);
            return this;
          }),
          (u.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
              m(this, t, t + 7),
                m(this, t + 1, t + 6),
                m(this, t + 2, t + 5),
                m(this, t + 3, t + 4);
            return this;
          }),
          (u.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e
              ? ""
              : 0 === arguments.length
              ? A(this, 0, e)
              : function(e, t, n) {
                  var r = !1;
                  if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                    return "";
                  if (
                    ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0)
                  )
                    return "";
                  if ((n >>>= 0) <= (t >>>= 0)) return "";
                  for (e || (e = "utf8"); ; )
                    switch (e) {
                      case "hex":
                        return T(this, t, n);
                      case "utf8":
                      case "utf-8":
                        return A(this, t, n);
                      case "ascii":
                        return k(this, t, n);
                      case "latin1":
                      case "binary":
                        return F(this, t, n);
                      case "base64":
                        return S(this, t, n);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return M(this, t, n);
                      default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        (e = (e + "").toLowerCase()), (r = !0);
                    }
                }.apply(this, arguments);
          }),
          (u.prototype.equals = function(e) {
            if (!u.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === u.compare(this, e);
          }),
          (u.prototype.inspect = function() {
            var e = "",
              n = t.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((e = this.toString("hex", 0, n)
                  .match(/.{2}/g)
                  .join(" ")),
                this.length > n && (e += " ... ")),
              "<Buffer " + e + ">"
            );
          }),
          (u.prototype.compare = function(e, t, n, r, i) {
            if (!u.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === t && (t = 0),
              void 0 === n && (n = e ? e.length : 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = this.length),
              t < 0 || n > e.length || r < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (r >= i && t >= n) return 0;
            if (r >= i) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (
              var o = (i >>>= 0) - (r >>>= 0),
                s = (n >>>= 0) - (t >>>= 0),
                a = Math.min(o, s),
                l = this.slice(r, i),
                c = e.slice(t, n),
                h = 0;
              h < a;
              ++h
            )
              if (l[h] !== c[h]) {
                (o = l[h]), (s = c[h]);
                break;
              }
            return o < s ? -1 : s < o ? 1 : 0;
          }),
          (u.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n);
          }),
          (u.prototype.indexOf = function(e, t, n) {
            return g(this, e, t, n, !0);
          }),
          (u.prototype.lastIndexOf = function(e, t, n) {
            return g(this, e, t, n, !1);
          }),
          (u.prototype.write = function(e, t, n, r) {
            if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
            else if (void 0 === n && "string" == typeof t)
              (r = t), (n = this.length), (t = 0);
            else {
              if (!isFinite(t))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (t |= 0),
                isFinite(n)
                  ? ((n |= 0), void 0 === r && (r = "utf8"))
                  : ((r = n), (n = void 0));
            }
            var i = this.length - t;
            if (
              ((void 0 === n || n > i) && (n = i),
              (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1; ; )
              switch (r) {
                case "hex":
                  return y(this, e, t, n);
                case "utf8":
                case "utf-8":
                  return x(this, e, t, n);
                case "ascii":
                  return D(this, e, t, n);
                case "latin1":
                case "binary":
                  return C(this, e, t, n);
                case "base64":
                  return w(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return b(this, e, t, n);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + r);
                  (r = ("" + r).toLowerCase()), (o = !0);
              }
          }),
          (u.prototype.toJSON = function() {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        var E = 4096;
        function k(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);
          for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
          return r;
        }
        function F(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);
          for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
          return r;
        }
        function T(e, t, n) {
          var r = e.length;
          (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
          for (var i = "", o = t; o < n; ++o) i += U(e[o]);
          return i;
        }
        function M(e, t, n) {
          for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2)
            i += String.fromCharCode(r[o] + 256 * r[o + 1]);
          return i;
        }
        function B(e, t, n) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > n)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function L(e, t, n, r, i, o) {
          if (!u.isBuffer(e))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > i || t < o)
            throw new RangeError('"value" argument is out of bounds');
          if (n + r > e.length) throw new RangeError("Index out of range");
        }
        function N(e, t, n, r) {
          t < 0 && (t = 65535 + t + 1);
          for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
            e[n + i] =
              (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
        }
        function I(e, t, n, r) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
            e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
        }
        function P(e, t, n, r, i, o) {
          if (n + r > e.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }
        function O(e, t, n, r, o) {
          return o || P(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
        }
        function R(e, t, n, r, o) {
          return o || P(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
        }
        (u.prototype.slice = function(e, t) {
          var n,
            r = this.length;
          if (
            ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            (t = void 0 === t ? r : ~~t) < 0
              ? (t += r) < 0 && (t = 0)
              : t > r && (t = r),
            t < e && (t = e),
            u.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(e, t)).__proto__ = u.prototype;
          else {
            var i = t - e;
            n = new u(i, void 0);
            for (var o = 0; o < i; ++o) n[o] = this[o + e];
          }
          return n;
        }),
          (u.prototype.readUIntLE = function(e, t, n) {
            (e |= 0), (t |= 0), n || B(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
              r += this[e + o] * i;
            return r;
          }),
          (u.prototype.readUIntBE = function(e, t, n) {
            (e |= 0), (t |= 0), n || B(e, t, this.length);
            for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
              r += this[e + --t] * i;
            return r;
          }),
          (u.prototype.readUInt8 = function(e, t) {
            return t || B(e, 1, this.length), this[e];
          }),
          (u.prototype.readUInt16LE = function(e, t) {
            return t || B(e, 2, this.length), this[e] | (this[e + 1] << 8);
          }),
          (u.prototype.readUInt16BE = function(e, t) {
            return t || B(e, 2, this.length), (this[e] << 8) | this[e + 1];
          }),
          (u.prototype.readUInt32LE = function(e, t) {
            return (
              t || B(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
          (u.prototype.readUInt32BE = function(e, t) {
            return (
              t || B(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
          (u.prototype.readIntLE = function(e, t, n) {
            (e |= 0), (t |= 0), n || B(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
              r += this[e + o] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
          }),
          (u.prototype.readIntBE = function(e, t, n) {
            (e |= 0), (t |= 0), n || B(e, t, this.length);
            for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); )
              o += this[e + --r] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
          }),
          (u.prototype.readInt8 = function(e, t) {
            return (
              t || B(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            );
          }),
          (u.prototype.readInt16LE = function(e, t) {
            t || B(e, 2, this.length);
            var n = this[e] | (this[e + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt16BE = function(e, t) {
            t || B(e, 2, this.length);
            var n = this[e + 1] | (this[e] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt32LE = function(e, t) {
            return (
              t || B(e, 4, this.length),
              this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function(e, t) {
            return (
              t || B(e, 4, this.length),
              (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
            );
          }),
          (u.prototype.readFloatLE = function(e, t) {
            return t || B(e, 4, this.length), i.read(this, e, !0, 23, 4);
          }),
          (u.prototype.readFloatBE = function(e, t) {
            return t || B(e, 4, this.length), i.read(this, e, !1, 23, 4);
          }),
          (u.prototype.readDoubleLE = function(e, t) {
            return t || B(e, 8, this.length), i.read(this, e, !0, 52, 8);
          }),
          (u.prototype.readDoubleBE = function(e, t) {
            return t || B(e, 8, this.length), i.read(this, e, !1, 52, 8);
          }),
          (u.prototype.writeUIntLE = function(e, t, n, r) {
            ((e = +e), (t |= 0), (n |= 0), r) ||
              L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1,
              o = 0;
            for (this[t] = 255 & e; ++o < n && (i *= 256); )
              this[t + o] = (e / i) & 255;
            return t + n;
          }),
          (u.prototype.writeUIntBE = function(e, t, n, r) {
            ((e = +e), (t |= 0), (n |= 0), r) ||
              L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1,
              o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
              this[t + i] = (e / o) & 255;
            return t + n;
          }),
          (u.prototype.writeUInt8 = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 1, 255, 0),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (u.prototype.writeUInt16LE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : N(this, e, t, !0),
              t + 2
            );
          }),
          (u.prototype.writeUInt16BE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : N(this, e, t, !1),
              t + 2
            );
          }),
          (u.prototype.writeUInt32LE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e))
                : I(this, e, t, !0),
              t + 4
            );
          }),
          (u.prototype.writeUInt32BE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : I(this, e, t, !1),
              t + 4
            );
          }),
          (u.prototype.writeIntLE = function(e, t, n, r) {
            if (((e = +e), (t |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              L(this, e, t, n, i - 1, -i);
            }
            var o = 0,
              s = 1,
              a = 0;
            for (this[t] = 255 & e; ++o < n && (s *= 256); )
              e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
                (this[t + o] = (((e / s) >> 0) - a) & 255);
            return t + n;
          }),
          (u.prototype.writeIntBE = function(e, t, n, r) {
            if (((e = +e), (t |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              L(this, e, t, n, i - 1, -i);
            }
            var o = n - 1,
              s = 1,
              a = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
              e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
                (this[t + o] = (((e / s) >> 0) - a) & 255);
            return t + n;
          }),
          (u.prototype.writeInt8 = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 1, 127, -128),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (u.prototype.writeInt16LE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : N(this, e, t, !0),
              t + 2
            );
          }),
          (u.prototype.writeInt16BE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : N(this, e, t, !1),
              t + 2
            );
          }),
          (u.prototype.writeInt32LE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  (this[t + 2] = e >>> 16),
                  (this[t + 3] = e >>> 24))
                : I(this, e, t, !0),
              t + 4
            );
          }),
          (u.prototype.writeInt32BE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : I(this, e, t, !1),
              t + 4
            );
          }),
          (u.prototype.writeFloatLE = function(e, t, n) {
            return O(this, e, t, !0, n);
          }),
          (u.prototype.writeFloatBE = function(e, t, n) {
            return O(this, e, t, !1, n);
          }),
          (u.prototype.writeDoubleLE = function(e, t, n) {
            return R(this, e, t, !0, n);
          }),
          (u.prototype.writeDoubleBE = function(e, t, n) {
            return R(this, e, t, !1, n);
          }),
          (u.prototype.copy = function(e, t, n, r) {
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              r > 0 && r < n && (r = n),
              r === n)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
              e.length - t < r - n && (r = e.length - t + n);
            var i,
              o = r - n;
            if (this === e && n < t && t < r)
              for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
            else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < o; ++i) e[i + t] = this[i + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
            return o;
          }),
          (u.prototype.fill = function(e, t, n, r) {
            if ("string" == typeof e) {
              if (
                ("string" == typeof t
                  ? ((r = t), (t = 0), (n = this.length))
                  : "string" == typeof n && ((r = n), (n = this.length)),
                1 === e.length)
              ) {
                var i = e.charCodeAt(0);
                i < 256 && (e = i);
              }
              if (void 0 !== r && "string" != typeof r)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof r && !u.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r);
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n)
              throw new RangeError("Out of range index");
            if (n <= t) return this;
            var o;
            if (
              ((t >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              e || (e = 0),
              "number" == typeof e)
            )
              for (o = t; o < n; ++o) this[o] = e;
            else {
              var s = u.isBuffer(e) ? e : W(new u(e, r).toString()),
                a = s.length;
              for (o = 0; o < n - t; ++o) this[o + t] = s[o % a];
            }
            return this;
          });
        var z = /[^+\/0-9A-Za-z-_]/g;
        function U(e) {
          return e < 16 ? "0" + e.toString(16) : e.toString(16);
        }
        function W(e, t) {
          var n;
          t = t || 1 / 0;
          for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
            if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
              if (!i) {
                if (n > 56319) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === r) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = n;
                continue;
              }
              if (n < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
                continue;
              }
              n = 65536 + (((i - 55296) << 10) | (n - 56320));
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), n < 128)) {
              if ((t -= 1) < 0) break;
              o.push(n);
            } else if (n < 2048) {
              if ((t -= 2) < 0) break;
              o.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((t -= 3) < 0) break;
              o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              o.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128
              );
            }
          }
          return o;
        }
        function H(e) {
          return r.toByteArray(
            (function(e) {
              if (
                (e = (function(e) {
                  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                })(e).replace(z, "")).length < 2
              )
                return "";
              for (; e.length % 4 != 0; ) e += "=";
              return e;
            })(e)
          );
        }
        function X(e, t, n, r) {
          for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
            t[i + n] = e[i];
          return i;
        }
      }.call(this, n(307)));
    },
    637: function(e, t, n) {
      "use strict";
      (t.byteLength = function(e) {
        var t = l(e),
          n = t[0],
          r = t[1];
        return (3 * (n + r)) / 4 - r;
      }),
        (t.toByteArray = function(e) {
          for (
            var t,
              n = l(e),
              r = n[0],
              s = n[1],
              a = new o(
                (function(e, t, n) {
                  return (3 * (t + n)) / 4 - n;
                })(0, r, s)
              ),
              u = 0,
              c = s > 0 ? r - 4 : r,
              h = 0;
            h < c;
            h += 4
          )
            (t =
              (i[e.charCodeAt(h)] << 18) |
              (i[e.charCodeAt(h + 1)] << 12) |
              (i[e.charCodeAt(h + 2)] << 6) |
              i[e.charCodeAt(h + 3)]),
              (a[u++] = (t >> 16) & 255),
              (a[u++] = (t >> 8) & 255),
              (a[u++] = 255 & t);
          2 === s &&
            ((t = (i[e.charCodeAt(h)] << 2) | (i[e.charCodeAt(h + 1)] >> 4)),
            (a[u++] = 255 & t));
          1 === s &&
            ((t =
              (i[e.charCodeAt(h)] << 10) |
              (i[e.charCodeAt(h + 1)] << 4) |
              (i[e.charCodeAt(h + 2)] >> 2)),
            (a[u++] = (t >> 8) & 255),
            (a[u++] = 255 & t));
          return a;
        }),
        (t.fromByteArray = function(e) {
          for (
            var t, n = e.length, i = n % 3, o = [], s = 0, a = n - i;
            s < a;
            s += 16383
          )
            o.push(c(e, s, s + 16383 > a ? a : s + 16383));
          1 === i
            ? ((t = e[n - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
            : 2 === i &&
              ((t = (e[n - 2] << 8) + e[n - 1]),
              o.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="));
          return o.join("");
        });
      for (
        var r = [],
          i = [],
          o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          s =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0,
          u = s.length;
        a < u;
        ++a
      )
        (r[a] = s[a]), (i[s.charCodeAt(a)] = a);
      function l(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
      }
      function c(e, t, n) {
        for (var i, o, s = [], a = t; a < n; a += 3)
          (i =
            ((e[a] << 16) & 16711680) +
            ((e[a + 1] << 8) & 65280) +
            (255 & e[a + 2])),
            s.push(
              r[((o = i) >> 18) & 63] +
                r[(o >> 12) & 63] +
                r[(o >> 6) & 63] +
                r[63 & o]
            );
        return s.join("");
      }
      (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
    },
    638: function(e, t) {
      (t.read = function(e, t, n, r, i) {
        var o,
          s,
          a = 8 * i - r - 1,
          u = (1 << a) - 1,
          l = u >> 1,
          c = -7,
          h = n ? i - 1 : 0,
          p = n ? -1 : 1,
          f = e[t + h];
        for (
          h += p, o = f & ((1 << -c) - 1), f >>= -c, c += a;
          c > 0;
          o = 256 * o + e[t + h], h += p, c -= 8
        );
        for (
          s = o & ((1 << -c) - 1), o >>= -c, c += r;
          c > 0;
          s = 256 * s + e[t + h], h += p, c -= 8
        );
        if (0 === o) o = 1 - l;
        else {
          if (o === u) return s ? NaN : (1 / 0) * (f ? -1 : 1);
          (s += Math.pow(2, r)), (o -= l);
        }
        return (f ? -1 : 1) * s * Math.pow(2, o - r);
      }),
        (t.write = function(e, t, n, r, i, o) {
          var s,
            a,
            u,
            l = 8 * o - i - 1,
            c = (1 << l) - 1,
            h = c >> 1,
            p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            f = r ? 0 : o - 1,
            d = r ? 1 : -1,
            m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((a = isNaN(t) ? 1 : 0), (s = c))
                : ((s = Math.floor(Math.log(t) / Math.LN2)),
                  t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                  (t += s + h >= 1 ? p / u : p * Math.pow(2, 1 - h)) * u >= 2 &&
                    (s++, (u /= 2)),
                  s + h >= c
                    ? ((a = 0), (s = c))
                    : s + h >= 1
                    ? ((a = (t * u - 1) * Math.pow(2, i)), (s += h))
                    : ((a = t * Math.pow(2, h - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            e[n + f] = 255 & a, f += d, a /= 256, i -= 8
          );
          for (
            s = (s << i) | a, l += i;
            l > 0;
            e[n + f] = 255 & s, f += d, s /= 256, l -= 8
          );
          e[n + f - d] |= 128 * m;
        });
    },
    639: function(e, t) {
      var n = {}.toString;
      e.exports =
        Array.isArray ||
        function(e) {
          return "[object Array]" == n.call(e);
        };
    },
    640: function(e, t, n) {
      "use strict";
      var r = n(223),
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.toString;
      e.exports = new r("tag:yaml.org,2002:omap", {
        kind: "sequence",
        resolve: function(e) {
          if (null === e) return !0;
          var t,
            n,
            r,
            s,
            a,
            u = [],
            l = e;
          for (t = 0, n = l.length; t < n; t += 1) {
            if (((r = l[t]), (a = !1), "[object Object]" !== o.call(r)))
              return !1;
            for (s in r)
              if (i.call(r, s)) {
                if (a) return !1;
                a = !0;
              }
            if (!a) return !1;
            if (-1 !== u.indexOf(s)) return !1;
            u.push(s);
          }
          return !0;
        },
        construct: function(e) {
          return null !== e ? e : [];
        },
      });
    },
    641: function(e, t, n) {
      "use strict";
      var r = n(223),
        i = Object.prototype.toString;
      e.exports = new r("tag:yaml.org,2002:pairs", {
        kind: "sequence",
        resolve: function(e) {
          if (null === e) return !0;
          var t,
            n,
            r,
            o,
            s,
            a = e;
          for (s = new Array(a.length), t = 0, n = a.length; t < n; t += 1) {
            if (((r = a[t]), "[object Object]" !== i.call(r))) return !1;
            if (1 !== (o = Object.keys(r)).length) return !1;
            s[t] = [o[0], r[o[0]]];
          }
          return !0;
        },
        construct: function(e) {
          if (null === e) return [];
          var t,
            n,
            r,
            i,
            o,
            s = e;
          for (o = new Array(s.length), t = 0, n = s.length; t < n; t += 1)
            (r = s[t]), (i = Object.keys(r)), (o[t] = [i[0], r[i[0]]]);
          return o;
        },
      });
    },
    642: function(e, t, n) {
      "use strict";
      var r = n(223),
        i = Object.prototype.hasOwnProperty;
      e.exports = new r("tag:yaml.org,2002:set", {
        kind: "mapping",
        resolve: function(e) {
          if (null === e) return !0;
          var t,
            n = e;
          for (t in n) if (i.call(n, t) && null !== n[t]) return !1;
          return !0;
        },
        construct: function(e) {
          return null !== e ? e : {};
        },
      });
    },
    643: function(e, t, n) {
      "use strict";
      var r = n(223);
      e.exports = new r("tag:yaml.org,2002:js/undefined", {
        kind: "scalar",
        resolve: function() {
          return !0;
        },
        construct: function() {},
        predicate: function(e) {
          return void 0 === e;
        },
        represent: function() {
          return "";
        },
      });
    },
    644: function(e, t, n) {
      "use strict";
      var r = n(223);
      e.exports = new r("tag:yaml.org,2002:js/regexp", {
        kind: "scalar",
        resolve: function(e) {
          if (null === e) return !1;
          if (0 === e.length) return !1;
          var t = e,
            n = /\/([gim]*)$/.exec(e),
            r = "";
          if ("/" === t[0]) {
            if ((n && (r = n[1]), r.length > 3)) return !1;
            if ("/" !== t[t.length - r.length - 1]) return !1;
          }
          return !0;
        },
        construct: function(e) {
          var t = e,
            n = /\/([gim]*)$/.exec(e),
            r = "";
          return (
            "/" === t[0] &&
              (n && (r = n[1]), (t = t.slice(1, t.length - r.length - 1))),
            new RegExp(t, r)
          );
        },
        predicate: function(e) {
          return "[object RegExp]" === Object.prototype.toString.call(e);
        },
        represent: function(e) {
          var t = "/" + e.source + "/";
          return (
            e.global && (t += "g"),
            e.multiline && (t += "m"),
            e.ignoreCase && (t += "i"),
            t
          );
        },
      });
    },
    645: function(e, t, n) {
      "use strict";
      var r;
      try {
        r = n(646);
      } catch (o) {
        "undefined" != typeof window && (r = window.esprima);
      }
      var i = n(223);
      e.exports = new i("tag:yaml.org,2002:js/function", {
        kind: "scalar",
        resolve: function(e) {
          if (null === e) return !1;
          try {
            var t = "(" + e + ")",
              n = r.parse(t, { range: !0 });
            return (
              "Program" === n.type &&
              1 === n.body.length &&
              "ExpressionStatement" === n.body[0].type &&
              ("ArrowFunctionExpression" === n.body[0].expression.type ||
                "FunctionExpression" === n.body[0].expression.type)
            );
          } catch (i) {
            return !1;
          }
        },
        construct: function(e) {
          var t,
            n = "(" + e + ")",
            i = r.parse(n, { range: !0 }),
            o = [];
          if (
            "Program" !== i.type ||
            1 !== i.body.length ||
            "ExpressionStatement" !== i.body[0].type ||
            ("ArrowFunctionExpression" !== i.body[0].expression.type &&
              "FunctionExpression" !== i.body[0].expression.type)
          )
            throw new Error("Failed to resolve function");
          return (
            i.body[0].expression.params.forEach(function(e) {
              o.push(e.name);
            }),
            (t = i.body[0].expression.body.range),
            "BlockStatement" === i.body[0].expression.body.type
              ? new Function(o, n.slice(t[0] + 1, t[1] - 1))
              : new Function(o, "return " + n.slice(t[0], t[1]))
          );
        },
        predicate: function(e) {
          return "[object Function]" === Object.prototype.toString.call(e);
        },
        represent: function(e) {
          return e.toString();
        },
      });
    },
    646: function(e, t, n) {
      var r;
      (r = function() {
        return (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var i = (t[r] = { exports: {}, id: r, loaded: !1 });
            return (
              e[r].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports
            );
          }
          return (n.m = e), (n.c = t), (n.p = ""), n(0);
        })([
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = n(1),
              i = n(3),
              o = n(8),
              s = n(15);
            function a(e, t, n) {
              var s = null,
                a = function(e, t) {
                  n && n(e, t), s && s.visit(e, t);
                },
                u = "function" == typeof n ? a : null,
                l = !1;
              if (t) {
                l = "boolean" == typeof t.comment && t.comment;
                var c = "boolean" == typeof t.attachComment && t.attachComment;
                (l || c) &&
                  (((s = new r.CommentHandler()).attach = c),
                  (t.comment = !0),
                  (u = a));
              }
              var h,
                p = !1;
              t &&
                "string" == typeof t.sourceType &&
                (p = "module" === t.sourceType),
                (h =
                  t && "boolean" == typeof t.jsx && t.jsx
                    ? new i.JSXParser(e, t, u)
                    : new o.Parser(e, t, u));
              var f = p ? h.parseModule() : h.parseScript();
              return (
                l && s && (f.comments = s.comments),
                h.config.tokens && (f.tokens = h.tokens),
                h.config.tolerant && (f.errors = h.errorHandler.errors),
                f
              );
            }
            (t.parse = a),
              (t.parseModule = function(e, t, n) {
                var r = t || {};
                return (r.sourceType = "module"), a(e, r, n);
              }),
              (t.parseScript = function(e, t, n) {
                var r = t || {};
                return (r.sourceType = "script"), a(e, r, n);
              }),
              (t.tokenize = function(e, t, n) {
                var r,
                  i = new s.Tokenizer(e, t);
                r = [];
                try {
                  for (;;) {
                    var o = i.getNextToken();
                    if (!o) break;
                    n && (o = n(o)), r.push(o);
                  }
                } catch (a) {
                  i.errorHandler.tolerate(a);
                }
                return i.errorHandler.tolerant && (r.errors = i.errors()), r;
              });
            var u = n(2);
            (t.Syntax = u.Syntax), (t.version = "4.0.1");
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = n(2),
              i = (function() {
                function e() {
                  (this.attach = !1),
                    (this.comments = []),
                    (this.stack = []),
                    (this.leading = []),
                    (this.trailing = []);
                }
                return (
                  (e.prototype.insertInnerComments = function(e, t) {
                    if (
                      e.type === r.Syntax.BlockStatement &&
                      0 === e.body.length
                    ) {
                      for (
                        var n = [], i = this.leading.length - 1;
                        i >= 0;
                        --i
                      ) {
                        var o = this.leading[i];
                        t.end.offset >= o.start &&
                          (n.unshift(o.comment),
                          this.leading.splice(i, 1),
                          this.trailing.splice(i, 1));
                      }
                      n.length && (e.innerComments = n);
                    }
                  }),
                  (e.prototype.findTrailingComments = function(e) {
                    var t = [];
                    if (this.trailing.length > 0) {
                      for (var n = this.trailing.length - 1; n >= 0; --n) {
                        var r = this.trailing[n];
                        r.start >= e.end.offset && t.unshift(r.comment);
                      }
                      return (this.trailing.length = 0), t;
                    }
                    var i = this.stack[this.stack.length - 1];
                    if (i && i.node.trailingComments) {
                      var o = i.node.trailingComments[0];
                      o &&
                        o.range[0] >= e.end.offset &&
                        ((t = i.node.trailingComments),
                        delete i.node.trailingComments);
                    }
                    return t;
                  }),
                  (e.prototype.findLeadingComments = function(e) {
                    for (var t, n = []; this.stack.length > 0; ) {
                      if (
                        !(
                          (o = this.stack[this.stack.length - 1]) &&
                          o.start >= e.start.offset
                        )
                      )
                        break;
                      (t = o.node), this.stack.pop();
                    }
                    if (t) {
                      for (
                        var r =
                          (t.leadingComments ? t.leadingComments.length : 0) -
                          1;
                        r >= 0;
                        --r
                      ) {
                        var i = t.leadingComments[r];
                        i.range[1] <= e.start.offset &&
                          (n.unshift(i), t.leadingComments.splice(r, 1));
                      }
                      return (
                        t.leadingComments &&
                          0 === t.leadingComments.length &&
                          delete t.leadingComments,
                        n
                      );
                    }
                    for (r = this.leading.length - 1; r >= 0; --r) {
                      var o;
                      (o = this.leading[r]).start <= e.start.offset &&
                        (n.unshift(o.comment), this.leading.splice(r, 1));
                    }
                    return n;
                  }),
                  (e.prototype.visitNode = function(e, t) {
                    if (!(e.type === r.Syntax.Program && e.body.length > 0)) {
                      this.insertInnerComments(e, t);
                      var n = this.findTrailingComments(t),
                        i = this.findLeadingComments(t);
                      i.length > 0 && (e.leadingComments = i),
                        n.length > 0 && (e.trailingComments = n),
                        this.stack.push({ node: e, start: t.start.offset });
                    }
                  }),
                  (e.prototype.visitComment = function(e, t) {
                    var n = "L" === e.type[0] ? "Line" : "Block",
                      r = { type: n, value: e.value };
                    if (
                      (e.range && (r.range = e.range),
                      e.loc && (r.loc = e.loc),
                      this.comments.push(r),
                      this.attach)
                    ) {
                      var i = {
                        comment: {
                          type: n,
                          value: e.value,
                          range: [t.start.offset, t.end.offset],
                        },
                        start: t.start.offset,
                      };
                      e.loc && (i.comment.loc = e.loc),
                        (e.type = n),
                        this.leading.push(i),
                        this.trailing.push(i);
                    }
                  }),
                  (e.prototype.visit = function(e, t) {
                    "LineComment" === e.type
                      ? this.visitComment(e, t)
                      : "BlockComment" === e.type
                      ? this.visitComment(e, t)
                      : this.attach && this.visitNode(e, t);
                  }),
                  e
                );
              })();
            t.CommentHandler = i;
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Syntax = {
                AssignmentExpression: "AssignmentExpression",
                AssignmentPattern: "AssignmentPattern",
                ArrayExpression: "ArrayExpression",
                ArrayPattern: "ArrayPattern",
                ArrowFunctionExpression: "ArrowFunctionExpression",
                AwaitExpression: "AwaitExpression",
                BlockStatement: "BlockStatement",
                BinaryExpression: "BinaryExpression",
                BreakStatement: "BreakStatement",
                CallExpression: "CallExpression",
                CatchClause: "CatchClause",
                ClassBody: "ClassBody",
                ClassDeclaration: "ClassDeclaration",
                ClassExpression: "ClassExpression",
                ConditionalExpression: "ConditionalExpression",
                ContinueStatement: "ContinueStatement",
                DoWhileStatement: "DoWhileStatement",
                DebuggerStatement: "DebuggerStatement",
                EmptyStatement: "EmptyStatement",
                ExportAllDeclaration: "ExportAllDeclaration",
                ExportDefaultDeclaration: "ExportDefaultDeclaration",
                ExportNamedDeclaration: "ExportNamedDeclaration",
                ExportSpecifier: "ExportSpecifier",
                ExpressionStatement: "ExpressionStatement",
                ForStatement: "ForStatement",
                ForOfStatement: "ForOfStatement",
                ForInStatement: "ForInStatement",
                FunctionDeclaration: "FunctionDeclaration",
                FunctionExpression: "FunctionExpression",
                Identifier: "Identifier",
                IfStatement: "IfStatement",
                ImportDeclaration: "ImportDeclaration",
                ImportDefaultSpecifier: "ImportDefaultSpecifier",
                ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
                ImportSpecifier: "ImportSpecifier",
                Literal: "Literal",
                LabeledStatement: "LabeledStatement",
                LogicalExpression: "LogicalExpression",
                MemberExpression: "MemberExpression",
                MetaProperty: "MetaProperty",
                MethodDefinition: "MethodDefinition",
                NewExpression: "NewExpression",
                ObjectExpression: "ObjectExpression",
                ObjectPattern: "ObjectPattern",
                Program: "Program",
                Property: "Property",
                RestElement: "RestElement",
                ReturnStatement: "ReturnStatement",
                SequenceExpression: "SequenceExpression",
                SpreadElement: "SpreadElement",
                Super: "Super",
                SwitchCase: "SwitchCase",
                SwitchStatement: "SwitchStatement",
                TaggedTemplateExpression: "TaggedTemplateExpression",
                TemplateElement: "TemplateElement",
                TemplateLiteral: "TemplateLiteral",
                ThisExpression: "ThisExpression",
                ThrowStatement: "ThrowStatement",
                TryStatement: "TryStatement",
                UnaryExpression: "UnaryExpression",
                UpdateExpression: "UpdateExpression",
                VariableDeclaration: "VariableDeclaration",
                VariableDeclarator: "VariableDeclarator",
                WhileStatement: "WhileStatement",
                WithStatement: "WithStatement",
                YieldExpression: "YieldExpression",
              });
          },
          function(e, t, n) {
            "use strict";
            var r,
              i =
                (this && this.__extends) ||
                ((r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function(e, t) {
                      e.__proto__ = t;
                    }) ||
                  function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                  }),
                function(e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  r(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = n(4),
              s = n(5),
              a = n(6),
              u = n(7),
              l = n(8),
              c = n(13),
              h = n(14);
            function p(e) {
              var t;
              switch (e.type) {
                case a.JSXSyntax.JSXIdentifier:
                  t = e.name;
                  break;
                case a.JSXSyntax.JSXNamespacedName:
                  var n = e;
                  t = p(n.namespace) + ":" + p(n.name);
                  break;
                case a.JSXSyntax.JSXMemberExpression:
                  var r = e;
                  t = p(r.object) + "." + p(r.property);
              }
              return t;
            }
            (c.TokenName[100] = "JSXIdentifier"),
              (c.TokenName[101] = "JSXText");
            var f = (function(e) {
              function t(t, n, r) {
                return e.call(this, t, n, r) || this;
              }
              return (
                i(t, e),
                (t.prototype.parsePrimaryExpression = function() {
                  return this.match("<")
                    ? this.parseJSXRoot()
                    : e.prototype.parsePrimaryExpression.call(this);
                }),
                (t.prototype.startJSX = function() {
                  (this.scanner.index = this.startMarker.index),
                    (this.scanner.lineNumber = this.startMarker.line),
                    (this.scanner.lineStart =
                      this.startMarker.index - this.startMarker.column);
                }),
                (t.prototype.finishJSX = function() {
                  this.nextToken();
                }),
                (t.prototype.reenterJSX = function() {
                  this.startJSX(),
                    this.expectJSX("}"),
                    this.config.tokens && this.tokens.pop();
                }),
                (t.prototype.createJSXNode = function() {
                  return (
                    this.collectComments(),
                    {
                      index: this.scanner.index,
                      line: this.scanner.lineNumber,
                      column: this.scanner.index - this.scanner.lineStart,
                    }
                  );
                }),
                (t.prototype.createJSXChildNode = function() {
                  return {
                    index: this.scanner.index,
                    line: this.scanner.lineNumber,
                    column: this.scanner.index - this.scanner.lineStart,
                  };
                }),
                (t.prototype.scanXHTMLEntity = function(e) {
                  for (
                    var t = "&", n = !0, r = !1, i = !1, s = !1;
                    !this.scanner.eof() && n && !r;

                  ) {
                    var a = this.scanner.source[this.scanner.index];
                    if (a === e) break;
                    if (((r = ";" === a), (t += a), ++this.scanner.index, !r))
                      switch (t.length) {
                        case 2:
                          i = "#" === a;
                          break;
                        case 3:
                          i &&
                            ((n =
                              (s = "x" === a) ||
                              o.Character.isDecimalDigit(a.charCodeAt(0))),
                            (i = i && !s));
                          break;
                        default:
                          n =
                            (n =
                              n &&
                              !(
                                i &&
                                !o.Character.isDecimalDigit(a.charCodeAt(0))
                              )) &&
                            !(s && !o.Character.isHexDigit(a.charCodeAt(0)));
                      }
                  }
                  if (n && r && t.length > 2) {
                    var u = t.substr(1, t.length - 2);
                    i && u.length > 1
                      ? (t = String.fromCharCode(parseInt(u.substr(1), 10)))
                      : s && u.length > 2
                      ? (t = String.fromCharCode(
                          parseInt("0" + u.substr(1), 16)
                        ))
                      : i ||
                        s ||
                        !h.XHTMLEntities[u] ||
                        (t = h.XHTMLEntities[u]);
                  }
                  return t;
                }),
                (t.prototype.lexJSX = function() {
                  var e = this.scanner.source.charCodeAt(this.scanner.index);
                  if (
                    60 === e ||
                    62 === e ||
                    47 === e ||
                    58 === e ||
                    61 === e ||
                    123 === e ||
                    125 === e
                  )
                    return {
                      type: 7,
                      value: (a = this.scanner.source[this.scanner.index++]),
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start: this.scanner.index - 1,
                      end: this.scanner.index,
                    };
                  if (34 === e || 39 === e) {
                    for (
                      var t = this.scanner.index,
                        n = this.scanner.source[this.scanner.index++],
                        r = "";
                      !this.scanner.eof();

                    ) {
                      if ((u = this.scanner.source[this.scanner.index++]) === n)
                        break;
                      r += "&" === u ? this.scanXHTMLEntity(n) : u;
                    }
                    return {
                      type: 8,
                      value: r,
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start: t,
                      end: this.scanner.index,
                    };
                  }
                  if (46 === e) {
                    var i = this.scanner.source.charCodeAt(
                        this.scanner.index + 1
                      ),
                      s = this.scanner.source.charCodeAt(
                        this.scanner.index + 2
                      ),
                      a = 46 === i && 46 === s ? "..." : ".";
                    t = this.scanner.index;
                    return (
                      (this.scanner.index += a.length),
                      {
                        type: 7,
                        value: a,
                        lineNumber: this.scanner.lineNumber,
                        lineStart: this.scanner.lineStart,
                        start: t,
                        end: this.scanner.index,
                      }
                    );
                  }
                  if (96 === e)
                    return {
                      type: 10,
                      value: "",
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start: this.scanner.index,
                      end: this.scanner.index,
                    };
                  if (o.Character.isIdentifierStart(e) && 92 !== e) {
                    t = this.scanner.index;
                    for (++this.scanner.index; !this.scanner.eof(); ) {
                      var u = this.scanner.source.charCodeAt(
                        this.scanner.index
                      );
                      if (o.Character.isIdentifierPart(u) && 92 !== u)
                        ++this.scanner.index;
                      else {
                        if (45 !== u) break;
                        ++this.scanner.index;
                      }
                    }
                    return {
                      type: 100,
                      value: this.scanner.source.slice(t, this.scanner.index),
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start: t,
                      end: this.scanner.index,
                    };
                  }
                  return this.scanner.lex();
                }),
                (t.prototype.nextJSXToken = function() {
                  this.collectComments(),
                    (this.startMarker.index = this.scanner.index),
                    (this.startMarker.line = this.scanner.lineNumber),
                    (this.startMarker.column =
                      this.scanner.index - this.scanner.lineStart);
                  var e = this.lexJSX();
                  return (
                    (this.lastMarker.index = this.scanner.index),
                    (this.lastMarker.line = this.scanner.lineNumber),
                    (this.lastMarker.column =
                      this.scanner.index - this.scanner.lineStart),
                    this.config.tokens &&
                      this.tokens.push(this.convertToken(e)),
                    e
                  );
                }),
                (t.prototype.nextJSXText = function() {
                  (this.startMarker.index = this.scanner.index),
                    (this.startMarker.line = this.scanner.lineNumber),
                    (this.startMarker.column =
                      this.scanner.index - this.scanner.lineStart);
                  for (
                    var e = this.scanner.index, t = "";
                    !this.scanner.eof();

                  ) {
                    var n = this.scanner.source[this.scanner.index];
                    if ("{" === n || "<" === n) break;
                    ++this.scanner.index,
                      (t += n),
                      o.Character.isLineTerminator(n.charCodeAt(0)) &&
                        (++this.scanner.lineNumber,
                        "\r" === n &&
                          "\n" === this.scanner.source[this.scanner.index] &&
                          ++this.scanner.index,
                        (this.scanner.lineStart = this.scanner.index));
                  }
                  (this.lastMarker.index = this.scanner.index),
                    (this.lastMarker.line = this.scanner.lineNumber),
                    (this.lastMarker.column =
                      this.scanner.index - this.scanner.lineStart);
                  var r = {
                    type: 101,
                    value: t,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: e,
                    end: this.scanner.index,
                  };
                  return (
                    t.length > 0 &&
                      this.config.tokens &&
                      this.tokens.push(this.convertToken(r)),
                    r
                  );
                }),
                (t.prototype.peekJSXToken = function() {
                  var e = this.scanner.saveState();
                  this.scanner.scanComments();
                  var t = this.lexJSX();
                  return this.scanner.restoreState(e), t;
                }),
                (t.prototype.expectJSX = function(e) {
                  var t = this.nextJSXToken();
                  (7 === t.type && t.value === e) ||
                    this.throwUnexpectedToken(t);
                }),
                (t.prototype.matchJSX = function(e) {
                  var t = this.peekJSXToken();
                  return 7 === t.type && t.value === e;
                }),
                (t.prototype.parseJSXIdentifier = function() {
                  var e = this.createJSXNode(),
                    t = this.nextJSXToken();
                  return (
                    100 !== t.type && this.throwUnexpectedToken(t),
                    this.finalize(e, new s.JSXIdentifier(t.value))
                  );
                }),
                (t.prototype.parseJSXElementName = function() {
                  var e = this.createJSXNode(),
                    t = this.parseJSXIdentifier();
                  if (this.matchJSX(":")) {
                    var n = t;
                    this.expectJSX(":");
                    var r = this.parseJSXIdentifier();
                    t = this.finalize(e, new s.JSXNamespacedName(n, r));
                  } else if (this.matchJSX("."))
                    for (; this.matchJSX("."); ) {
                      var i = t;
                      this.expectJSX(".");
                      var o = this.parseJSXIdentifier();
                      t = this.finalize(e, new s.JSXMemberExpression(i, o));
                    }
                  return t;
                }),
                (t.prototype.parseJSXAttributeName = function() {
                  var e,
                    t = this.createJSXNode(),
                    n = this.parseJSXIdentifier();
                  if (this.matchJSX(":")) {
                    var r = n;
                    this.expectJSX(":");
                    var i = this.parseJSXIdentifier();
                    e = this.finalize(t, new s.JSXNamespacedName(r, i));
                  } else e = n;
                  return e;
                }),
                (t.prototype.parseJSXStringLiteralAttribute = function() {
                  var e = this.createJSXNode(),
                    t = this.nextJSXToken();
                  8 !== t.type && this.throwUnexpectedToken(t);
                  var n = this.getTokenRaw(t);
                  return this.finalize(e, new u.Literal(t.value, n));
                }),
                (t.prototype.parseJSXExpressionAttribute = function() {
                  var e = this.createJSXNode();
                  this.expectJSX("{"),
                    this.finishJSX(),
                    this.match("}") &&
                      this.tolerateError(
                        "JSX attributes must only be assigned a non-empty expression"
                      );
                  var t = this.parseAssignmentExpression();
                  return (
                    this.reenterJSX(),
                    this.finalize(e, new s.JSXExpressionContainer(t))
                  );
                }),
                (t.prototype.parseJSXAttributeValue = function() {
                  return this.matchJSX("{")
                    ? this.parseJSXExpressionAttribute()
                    : this.matchJSX("<")
                    ? this.parseJSXElement()
                    : this.parseJSXStringLiteralAttribute();
                }),
                (t.prototype.parseJSXNameValueAttribute = function() {
                  var e = this.createJSXNode(),
                    t = this.parseJSXAttributeName(),
                    n = null;
                  return (
                    this.matchJSX("=") &&
                      (this.expectJSX("="),
                      (n = this.parseJSXAttributeValue())),
                    this.finalize(e, new s.JSXAttribute(t, n))
                  );
                }),
                (t.prototype.parseJSXSpreadAttribute = function() {
                  var e = this.createJSXNode();
                  this.expectJSX("{"), this.expectJSX("..."), this.finishJSX();
                  var t = this.parseAssignmentExpression();
                  return (
                    this.reenterJSX(),
                    this.finalize(e, new s.JSXSpreadAttribute(t))
                  );
                }),
                (t.prototype.parseJSXAttributes = function() {
                  for (
                    var e = [];
                    !this.matchJSX("/") && !this.matchJSX(">");

                  ) {
                    var t = this.matchJSX("{")
                      ? this.parseJSXSpreadAttribute()
                      : this.parseJSXNameValueAttribute();
                    e.push(t);
                  }
                  return e;
                }),
                (t.prototype.parseJSXOpeningElement = function() {
                  var e = this.createJSXNode();
                  this.expectJSX("<");
                  var t = this.parseJSXElementName(),
                    n = this.parseJSXAttributes(),
                    r = this.matchJSX("/");
                  return (
                    r && this.expectJSX("/"),
                    this.expectJSX(">"),
                    this.finalize(e, new s.JSXOpeningElement(t, r, n))
                  );
                }),
                (t.prototype.parseJSXBoundaryElement = function() {
                  var e = this.createJSXNode();
                  if ((this.expectJSX("<"), this.matchJSX("/"))) {
                    this.expectJSX("/");
                    var t = this.parseJSXElementName();
                    return (
                      this.expectJSX(">"),
                      this.finalize(e, new s.JSXClosingElement(t))
                    );
                  }
                  var n = this.parseJSXElementName(),
                    r = this.parseJSXAttributes(),
                    i = this.matchJSX("/");
                  return (
                    i && this.expectJSX("/"),
                    this.expectJSX(">"),
                    this.finalize(e, new s.JSXOpeningElement(n, i, r))
                  );
                }),
                (t.prototype.parseJSXEmptyExpression = function() {
                  var e = this.createJSXChildNode();
                  return (
                    this.collectComments(),
                    (this.lastMarker.index = this.scanner.index),
                    (this.lastMarker.line = this.scanner.lineNumber),
                    (this.lastMarker.column =
                      this.scanner.index - this.scanner.lineStart),
                    this.finalize(e, new s.JSXEmptyExpression())
                  );
                }),
                (t.prototype.parseJSXExpressionContainer = function() {
                  var e,
                    t = this.createJSXNode();
                  return (
                    this.expectJSX("{"),
                    this.matchJSX("}")
                      ? ((e = this.parseJSXEmptyExpression()),
                        this.expectJSX("}"))
                      : (this.finishJSX(),
                        (e = this.parseAssignmentExpression()),
                        this.reenterJSX()),
                    this.finalize(t, new s.JSXExpressionContainer(e))
                  );
                }),
                (t.prototype.parseJSXChildren = function() {
                  for (var e = []; !this.scanner.eof(); ) {
                    var t = this.createJSXChildNode(),
                      n = this.nextJSXText();
                    if (n.start < n.end) {
                      var r = this.getTokenRaw(n),
                        i = this.finalize(t, new s.JSXText(n.value, r));
                      e.push(i);
                    }
                    if ("{" !== this.scanner.source[this.scanner.index]) break;
                    var o = this.parseJSXExpressionContainer();
                    e.push(o);
                  }
                  return e;
                }),
                (t.prototype.parseComplexJSXElement = function(e) {
                  for (var t = []; !this.scanner.eof(); ) {
                    e.children = e.children.concat(this.parseJSXChildren());
                    var n = this.createJSXChildNode(),
                      r = this.parseJSXBoundaryElement();
                    if (r.type === a.JSXSyntax.JSXOpeningElement) {
                      var i = r;
                      if (i.selfClosing) {
                        var o = this.finalize(n, new s.JSXElement(i, [], null));
                        e.children.push(o);
                      } else
                        t.push(e),
                          (e = {
                            node: n,
                            opening: i,
                            closing: null,
                            children: [],
                          });
                    }
                    if (r.type === a.JSXSyntax.JSXClosingElement) {
                      e.closing = r;
                      var u = p(e.opening.name);
                      if (
                        (u !== p(e.closing.name) &&
                          this.tolerateError(
                            "Expected corresponding JSX closing tag for %0",
                            u
                          ),
                        !(t.length > 0))
                      )
                        break;
                      o = this.finalize(
                        e.node,
                        new s.JSXElement(e.opening, e.children, e.closing)
                      );
                      (e = t[t.length - 1]).children.push(o), t.pop();
                    }
                  }
                  return e;
                }),
                (t.prototype.parseJSXElement = function() {
                  var e = this.createJSXNode(),
                    t = this.parseJSXOpeningElement(),
                    n = [],
                    r = null;
                  if (!t.selfClosing) {
                    var i = this.parseComplexJSXElement({
                      node: e,
                      opening: t,
                      closing: r,
                      children: n,
                    });
                    (n = i.children), (r = i.closing);
                  }
                  return this.finalize(e, new s.JSXElement(t, n, r));
                }),
                (t.prototype.parseJSXRoot = function() {
                  this.config.tokens && this.tokens.pop(), this.startJSX();
                  var e = this.parseJSXElement();
                  return this.finishJSX(), e;
                }),
                (t.prototype.isStartOfExpression = function() {
                  return (
                    e.prototype.isStartOfExpression.call(this) ||
                    this.match("<")
                  );
                }),
                t
              );
            })(l.Parser);
            t.JSXParser = f;
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = {
              NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
              NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
            };
            t.Character = {
              fromCodePoint: function(e) {
                return e < 65536
                  ? String.fromCharCode(e)
                  : String.fromCharCode(55296 + ((e - 65536) >> 10)) +
                      String.fromCharCode(56320 + ((e - 65536) & 1023));
              },
              isWhiteSpace: function(e) {
                return (
                  32 === e ||
                  9 === e ||
                  11 === e ||
                  12 === e ||
                  160 === e ||
                  (e >= 5760 &&
                    [
                      5760,
                      8192,
                      8193,
                      8194,
                      8195,
                      8196,
                      8197,
                      8198,
                      8199,
                      8200,
                      8201,
                      8202,
                      8239,
                      8287,
                      12288,
                      65279,
                    ].indexOf(e) >= 0)
                );
              },
              isLineTerminator: function(e) {
                return 10 === e || 13 === e || 8232 === e || 8233 === e;
              },
              isIdentifierStart: function(e) {
                return (
                  36 === e ||
                  95 === e ||
                  (e >= 65 && e <= 90) ||
                  (e >= 97 && e <= 122) ||
                  92 === e ||
                  (e >= 128 &&
                    n.NonAsciiIdentifierStart.test(
                      t.Character.fromCodePoint(e)
                    ))
                );
              },
              isIdentifierPart: function(e) {
                return (
                  36 === e ||
                  95 === e ||
                  (e >= 65 && e <= 90) ||
                  (e >= 97 && e <= 122) ||
                  (e >= 48 && e <= 57) ||
                  92 === e ||
                  (e >= 128 &&
                    n.NonAsciiIdentifierPart.test(t.Character.fromCodePoint(e)))
                );
              },
              isDecimalDigit: function(e) {
                return e >= 48 && e <= 57;
              },
              isHexDigit: function(e) {
                return (
                  (e >= 48 && e <= 57) ||
                  (e >= 65 && e <= 70) ||
                  (e >= 97 && e <= 102)
                );
              },
              isOctalDigit: function(e) {
                return e >= 48 && e <= 55;
              },
            };
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = n(6),
              i = (function() {
                return function(e) {
                  (this.type = r.JSXSyntax.JSXClosingElement), (this.name = e);
                };
              })();
            t.JSXClosingElement = i;
            var o = (function() {
              return function(e, t, n) {
                (this.type = r.JSXSyntax.JSXElement),
                  (this.openingElement = e),
                  (this.children = t),
                  (this.closingElement = n);
              };
            })();
            t.JSXElement = o;
            var s = (function() {
              return function() {
                this.type = r.JSXSyntax.JSXEmptyExpression;
              };
            })();
            t.JSXEmptyExpression = s;
            var a = (function() {
              return function(e) {
                (this.type = r.JSXSyntax.JSXExpressionContainer),
                  (this.expression = e);
              };
            })();
            t.JSXExpressionContainer = a;
            var u = (function() {
              return function(e) {
                (this.type = r.JSXSyntax.JSXIdentifier), (this.name = e);
              };
            })();
            t.JSXIdentifier = u;
            var l = (function() {
              return function(e, t) {
                (this.type = r.JSXSyntax.JSXMemberExpression),
                  (this.object = e),
                  (this.property = t);
              };
            })();
            t.JSXMemberExpression = l;
            var c = (function() {
              return function(e, t) {
                (this.type = r.JSXSyntax.JSXAttribute),
                  (this.name = e),
                  (this.value = t);
              };
            })();
            t.JSXAttribute = c;
            var h = (function() {
              return function(e, t) {
                (this.type = r.JSXSyntax.JSXNamespacedName),
                  (this.namespace = e),
                  (this.name = t);
              };
            })();
            t.JSXNamespacedName = h;
            var p = (function() {
              return function(e, t, n) {
                (this.type = r.JSXSyntax.JSXOpeningElement),
                  (this.name = e),
                  (this.selfClosing = t),
                  (this.attributes = n);
              };
            })();
            t.JSXOpeningElement = p;
            var f = (function() {
              return function(e) {
                (this.type = r.JSXSyntax.JSXSpreadAttribute),
                  (this.argument = e);
              };
            })();
            t.JSXSpreadAttribute = f;
            var d = (function() {
              return function(e, t) {
                (this.type = r.JSXSyntax.JSXText),
                  (this.value = e),
                  (this.raw = t);
              };
            })();
            t.JSXText = d;
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.JSXSyntax = {
                JSXAttribute: "JSXAttribute",
                JSXClosingElement: "JSXClosingElement",
                JSXElement: "JSXElement",
                JSXEmptyExpression: "JSXEmptyExpression",
                JSXExpressionContainer: "JSXExpressionContainer",
                JSXIdentifier: "JSXIdentifier",
                JSXMemberExpression: "JSXMemberExpression",
                JSXNamespacedName: "JSXNamespacedName",
                JSXOpeningElement: "JSXOpeningElement",
                JSXSpreadAttribute: "JSXSpreadAttribute",
                JSXText: "JSXText",
              });
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = n(2),
              i = (function() {
                return function(e) {
                  (this.type = r.Syntax.ArrayExpression), (this.elements = e);
                };
              })();
            t.ArrayExpression = i;
            var o = (function() {
              return function(e) {
                (this.type = r.Syntax.ArrayPattern), (this.elements = e);
              };
            })();
            t.ArrayPattern = o;
            var s = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.ArrowFunctionExpression),
                  (this.id = null),
                  (this.params = e),
                  (this.body = t),
                  (this.generator = !1),
                  (this.expression = n),
                  (this.async = !1);
              };
            })();
            t.ArrowFunctionExpression = s;
            var a = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.AssignmentExpression),
                  (this.operator = e),
                  (this.left = t),
                  (this.right = n);
              };
            })();
            t.AssignmentExpression = a;
            var u = (function() {
              return function(e, t) {
                (this.type = r.Syntax.AssignmentPattern),
                  (this.left = e),
                  (this.right = t);
              };
            })();
            t.AssignmentPattern = u;
            var l = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.ArrowFunctionExpression),
                  (this.id = null),
                  (this.params = e),
                  (this.body = t),
                  (this.generator = !1),
                  (this.expression = n),
                  (this.async = !0);
              };
            })();
            t.AsyncArrowFunctionExpression = l;
            var c = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.FunctionDeclaration),
                  (this.id = e),
                  (this.params = t),
                  (this.body = n),
                  (this.generator = !1),
                  (this.expression = !1),
                  (this.async = !0);
              };
            })();
            t.AsyncFunctionDeclaration = c;
            var h = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.FunctionExpression),
                  (this.id = e),
                  (this.params = t),
                  (this.body = n),
                  (this.generator = !1),
                  (this.expression = !1),
                  (this.async = !0);
              };
            })();
            t.AsyncFunctionExpression = h;
            var p = (function() {
              return function(e) {
                (this.type = r.Syntax.AwaitExpression), (this.argument = e);
              };
            })();
            t.AwaitExpression = p;
            var f = (function() {
              return function(e, t, n) {
                var i = "||" === e || "&&" === e;
                (this.type = i
                  ? r.Syntax.LogicalExpression
                  : r.Syntax.BinaryExpression),
                  (this.operator = e),
                  (this.left = t),
                  (this.right = n);
              };
            })();
            t.BinaryExpression = f;
            var d = (function() {
              return function(e) {
                (this.type = r.Syntax.BlockStatement), (this.body = e);
              };
            })();
            t.BlockStatement = d;
            var m = (function() {
              return function(e) {
                (this.type = r.Syntax.BreakStatement), (this.label = e);
              };
            })();
            t.BreakStatement = m;
            var g = (function() {
              return function(e, t) {
                (this.type = r.Syntax.CallExpression),
                  (this.callee = e),
                  (this.arguments = t);
              };
            })();
            t.CallExpression = g;
            var v = (function() {
              return function(e, t) {
                (this.type = r.Syntax.CatchClause),
                  (this.param = e),
                  (this.body = t);
              };
            })();
            t.CatchClause = v;
            var y = (function() {
              return function(e) {
                (this.type = r.Syntax.ClassBody), (this.body = e);
              };
            })();
            t.ClassBody = y;
            var x = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.ClassDeclaration),
                  (this.id = e),
                  (this.superClass = t),
                  (this.body = n);
              };
            })();
            t.ClassDeclaration = x;
            var D = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.ClassExpression),
                  (this.id = e),
                  (this.superClass = t),
                  (this.body = n);
              };
            })();
            t.ClassExpression = D;
            var C = (function() {
              return function(e, t) {
                (this.type = r.Syntax.MemberExpression),
                  (this.computed = !0),
                  (this.object = e),
                  (this.property = t);
              };
            })();
            t.ComputedMemberExpression = C;
            var w = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.ConditionalExpression),
                  (this.test = e),
                  (this.consequent = t),
                  (this.alternate = n);
              };
            })();
            t.ConditionalExpression = w;
            var b = (function() {
              return function(e) {
                (this.type = r.Syntax.ContinueStatement), (this.label = e);
              };
            })();
            t.ContinueStatement = b;
            var S = (function() {
              return function() {
                this.type = r.Syntax.DebuggerStatement;
              };
            })();
            t.DebuggerStatement = S;
            var A = (function() {
              return function(e, t) {
                (this.type = r.Syntax.ExpressionStatement),
                  (this.expression = e),
                  (this.directive = t);
              };
            })();
            t.Directive = A;
            var E = (function() {
              return function(e, t) {
                (this.type = r.Syntax.DoWhileStatement),
                  (this.body = e),
                  (this.test = t);
              };
            })();
            t.DoWhileStatement = E;
            var k = (function() {
              return function() {
                this.type = r.Syntax.EmptyStatement;
              };
            })();
            t.EmptyStatement = k;
            var F = (function() {
              return function(e) {
                (this.type = r.Syntax.ExportAllDeclaration), (this.source = e);
              };
            })();
            t.ExportAllDeclaration = F;
            var T = (function() {
              return function(e) {
                (this.type = r.Syntax.ExportDefaultDeclaration),
                  (this.declaration = e);
              };
            })();
            t.ExportDefaultDeclaration = T;
            var M = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.ExportNamedDeclaration),
                  (this.declaration = e),
                  (this.specifiers = t),
                  (this.source = n);
              };
            })();
            t.ExportNamedDeclaration = M;
            var B = (function() {
              return function(e, t) {
                (this.type = r.Syntax.ExportSpecifier),
                  (this.exported = t),
                  (this.local = e);
              };
            })();
            t.ExportSpecifier = B;
            var L = (function() {
              return function(e) {
                (this.type = r.Syntax.ExpressionStatement),
                  (this.expression = e);
              };
            })();
            t.ExpressionStatement = L;
            var N = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.ForInStatement),
                  (this.left = e),
                  (this.right = t),
                  (this.body = n),
                  (this.each = !1);
              };
            })();
            t.ForInStatement = N;
            var I = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.ForOfStatement),
                  (this.left = e),
                  (this.right = t),
                  (this.body = n);
              };
            })();
            t.ForOfStatement = I;
            var P = (function() {
              return function(e, t, n, i) {
                (this.type = r.Syntax.ForStatement),
                  (this.init = e),
                  (this.test = t),
                  (this.update = n),
                  (this.body = i);
              };
            })();
            t.ForStatement = P;
            var O = (function() {
              return function(e, t, n, i) {
                (this.type = r.Syntax.FunctionDeclaration),
                  (this.id = e),
                  (this.params = t),
                  (this.body = n),
                  (this.generator = i),
                  (this.expression = !1),
                  (this.async = !1);
              };
            })();
            t.FunctionDeclaration = O;
            var R = (function() {
              return function(e, t, n, i) {
                (this.type = r.Syntax.FunctionExpression),
                  (this.id = e),
                  (this.params = t),
                  (this.body = n),
                  (this.generator = i),
                  (this.expression = !1),
                  (this.async = !1);
              };
            })();
            t.FunctionExpression = R;
            var z = (function() {
              return function(e) {
                (this.type = r.Syntax.Identifier), (this.name = e);
              };
            })();
            t.Identifier = z;
            var U = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.IfStatement),
                  (this.test = e),
                  (this.consequent = t),
                  (this.alternate = n);
              };
            })();
            t.IfStatement = U;
            var W = (function() {
              return function(e, t) {
                (this.type = r.Syntax.ImportDeclaration),
                  (this.specifiers = e),
                  (this.source = t);
              };
            })();
            t.ImportDeclaration = W;
            var H = (function() {
              return function(e) {
                (this.type = r.Syntax.ImportDefaultSpecifier), (this.local = e);
              };
            })();
            t.ImportDefaultSpecifier = H;
            var X = (function() {
              return function(e) {
                (this.type = r.Syntax.ImportNamespaceSpecifier),
                  (this.local = e);
              };
            })();
            t.ImportNamespaceSpecifier = X;
            var J = (function() {
              return function(e, t) {
                (this.type = r.Syntax.ImportSpecifier),
                  (this.local = e),
                  (this.imported = t);
              };
            })();
            t.ImportSpecifier = J;
            var _ = (function() {
              return function(e, t) {
                (this.type = r.Syntax.LabeledStatement),
                  (this.label = e),
                  (this.body = t);
              };
            })();
            t.LabeledStatement = _;
            var j = (function() {
              return function(e, t) {
                (this.type = r.Syntax.Literal),
                  (this.value = e),
                  (this.raw = t);
              };
            })();
            t.Literal = j;
            var K = (function() {
              return function(e, t) {
                (this.type = r.Syntax.MetaProperty),
                  (this.meta = e),
                  (this.property = t);
              };
            })();
            t.MetaProperty = K;
            var Y = (function() {
              return function(e, t, n, i, o) {
                (this.type = r.Syntax.MethodDefinition),
                  (this.key = e),
                  (this.computed = t),
                  (this.value = n),
                  (this.kind = i),
                  (this.static = o);
              };
            })();
            t.MethodDefinition = Y;
            var G = (function() {
              return function(e) {
                (this.type = r.Syntax.Program),
                  (this.body = e),
                  (this.sourceType = "module");
              };
            })();
            t.Module = G;
            var V = (function() {
              return function(e, t) {
                (this.type = r.Syntax.NewExpression),
                  (this.callee = e),
                  (this.arguments = t);
              };
            })();
            t.NewExpression = V;
            var q = (function() {
              return function(e) {
                (this.type = r.Syntax.ObjectExpression), (this.properties = e);
              };
            })();
            t.ObjectExpression = q;
            var $ = (function() {
              return function(e) {
                (this.type = r.Syntax.ObjectPattern), (this.properties = e);
              };
            })();
            t.ObjectPattern = $;
            var Z = (function() {
              return function(e, t, n, i, o, s) {
                (this.type = r.Syntax.Property),
                  (this.key = t),
                  (this.computed = n),
                  (this.value = i),
                  (this.kind = e),
                  (this.method = o),
                  (this.shorthand = s);
              };
            })();
            t.Property = Z;
            var Q = (function() {
              return function(e, t, n, i) {
                (this.type = r.Syntax.Literal),
                  (this.value = e),
                  (this.raw = t),
                  (this.regex = { pattern: n, flags: i });
              };
            })();
            t.RegexLiteral = Q;
            var ee = (function() {
              return function(e) {
                (this.type = r.Syntax.RestElement), (this.argument = e);
              };
            })();
            t.RestElement = ee;
            var te = (function() {
              return function(e) {
                (this.type = r.Syntax.ReturnStatement), (this.argument = e);
              };
            })();
            t.ReturnStatement = te;
            var ne = (function() {
              return function(e) {
                (this.type = r.Syntax.Program),
                  (this.body = e),
                  (this.sourceType = "script");
              };
            })();
            t.Script = ne;
            var re = (function() {
              return function(e) {
                (this.type = r.Syntax.SequenceExpression),
                  (this.expressions = e);
              };
            })();
            t.SequenceExpression = re;
            var ie = (function() {
              return function(e) {
                (this.type = r.Syntax.SpreadElement), (this.argument = e);
              };
            })();
            t.SpreadElement = ie;
            var oe = (function() {
              return function(e, t) {
                (this.type = r.Syntax.MemberExpression),
                  (this.computed = !1),
                  (this.object = e),
                  (this.property = t);
              };
            })();
            t.StaticMemberExpression = oe;
            var se = (function() {
              return function() {
                this.type = r.Syntax.Super;
              };
            })();
            t.Super = se;
            var ae = (function() {
              return function(e, t) {
                (this.type = r.Syntax.SwitchCase),
                  (this.test = e),
                  (this.consequent = t);
              };
            })();
            t.SwitchCase = ae;
            var ue = (function() {
              return function(e, t) {
                (this.type = r.Syntax.SwitchStatement),
                  (this.discriminant = e),
                  (this.cases = t);
              };
            })();
            t.SwitchStatement = ue;
            var le = (function() {
              return function(e, t) {
                (this.type = r.Syntax.TaggedTemplateExpression),
                  (this.tag = e),
                  (this.quasi = t);
              };
            })();
            t.TaggedTemplateExpression = le;
            var ce = (function() {
              return function(e, t) {
                (this.type = r.Syntax.TemplateElement),
                  (this.value = e),
                  (this.tail = t);
              };
            })();
            t.TemplateElement = ce;
            var he = (function() {
              return function(e, t) {
                (this.type = r.Syntax.TemplateLiteral),
                  (this.quasis = e),
                  (this.expressions = t);
              };
            })();
            t.TemplateLiteral = he;
            var pe = (function() {
              return function() {
                this.type = r.Syntax.ThisExpression;
              };
            })();
            t.ThisExpression = pe;
            var fe = (function() {
              return function(e) {
                (this.type = r.Syntax.ThrowStatement), (this.argument = e);
              };
            })();
            t.ThrowStatement = fe;
            var de = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.TryStatement),
                  (this.block = e),
                  (this.handler = t),
                  (this.finalizer = n);
              };
            })();
            t.TryStatement = de;
            var me = (function() {
              return function(e, t) {
                (this.type = r.Syntax.UnaryExpression),
                  (this.operator = e),
                  (this.argument = t),
                  (this.prefix = !0);
              };
            })();
            t.UnaryExpression = me;
            var ge = (function() {
              return function(e, t, n) {
                (this.type = r.Syntax.UpdateExpression),
                  (this.operator = e),
                  (this.argument = t),
                  (this.prefix = n);
              };
            })();
            t.UpdateExpression = ge;
            var ve = (function() {
              return function(e, t) {
                (this.type = r.Syntax.VariableDeclaration),
                  (this.declarations = e),
                  (this.kind = t);
              };
            })();
            t.VariableDeclaration = ve;
            var ye = (function() {
              return function(e, t) {
                (this.type = r.Syntax.VariableDeclarator),
                  (this.id = e),
                  (this.init = t);
              };
            })();
            t.VariableDeclarator = ye;
            var xe = (function() {
              return function(e, t) {
                (this.type = r.Syntax.WhileStatement),
                  (this.test = e),
                  (this.body = t);
              };
            })();
            t.WhileStatement = xe;
            var De = (function() {
              return function(e, t) {
                (this.type = r.Syntax.WithStatement),
                  (this.object = e),
                  (this.body = t);
              };
            })();
            t.WithStatement = De;
            var Ce = (function() {
              return function(e, t) {
                (this.type = r.Syntax.YieldExpression),
                  (this.argument = e),
                  (this.delegate = t);
              };
            })();
            t.YieldExpression = Ce;
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = n(9),
              i = n(10),
              o = n(11),
              s = n(7),
              a = n(12),
              u = n(2),
              l = n(13),
              c = (function() {
                function e(e, t, n) {
                  void 0 === t && (t = {}),
                    (this.config = {
                      range: "boolean" == typeof t.range && t.range,
                      loc: "boolean" == typeof t.loc && t.loc,
                      source: null,
                      tokens: "boolean" == typeof t.tokens && t.tokens,
                      comment: "boolean" == typeof t.comment && t.comment,
                      tolerant: "boolean" == typeof t.tolerant && t.tolerant,
                    }),
                    this.config.loc &&
                      t.source &&
                      null !== t.source &&
                      (this.config.source = String(t.source)),
                    (this.delegate = n),
                    (this.errorHandler = new i.ErrorHandler()),
                    (this.errorHandler.tolerant = this.config.tolerant),
                    (this.scanner = new a.Scanner(e, this.errorHandler)),
                    (this.scanner.trackComment = this.config.comment),
                    (this.operatorPrecedence = {
                      ")": 0,
                      ";": 0,
                      ",": 0,
                      "=": 0,
                      "]": 0,
                      "||": 1,
                      "&&": 2,
                      "|": 3,
                      "^": 4,
                      "&": 5,
                      "==": 6,
                      "!=": 6,
                      "===": 6,
                      "!==": 6,
                      "<": 7,
                      ">": 7,
                      "<=": 7,
                      ">=": 7,
                      "<<": 8,
                      ">>": 8,
                      ">>>": 8,
                      "+": 9,
                      "-": 9,
                      "*": 11,
                      "/": 11,
                      "%": 11,
                    }),
                    (this.lookahead = {
                      type: 2,
                      value: "",
                      lineNumber: this.scanner.lineNumber,
                      lineStart: 0,
                      start: 0,
                      end: 0,
                    }),
                    (this.hasLineTerminator = !1),
                    (this.context = {
                      isModule: !1,
                      await: !1,
                      allowIn: !0,
                      allowStrictDirective: !0,
                      allowYield: !0,
                      firstCoverInitializedNameError: null,
                      isAssignmentTarget: !1,
                      isBindingElement: !1,
                      inFunctionBody: !1,
                      inIteration: !1,
                      inSwitch: !1,
                      labelSet: {},
                      strict: !1,
                    }),
                    (this.tokens = []),
                    (this.startMarker = {
                      index: 0,
                      line: this.scanner.lineNumber,
                      column: 0,
                    }),
                    (this.lastMarker = {
                      index: 0,
                      line: this.scanner.lineNumber,
                      column: 0,
                    }),
                    this.nextToken(),
                    (this.lastMarker = {
                      index: this.scanner.index,
                      line: this.scanner.lineNumber,
                      column: this.scanner.index - this.scanner.lineStart,
                    });
                }
                return (
                  (e.prototype.throwError = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    var i = Array.prototype.slice.call(arguments, 1),
                      o = e.replace(/%(\d)/g, function(e, t) {
                        return (
                          r.assert(
                            t < i.length,
                            "Message reference must be in range"
                          ),
                          i[t]
                        );
                      }),
                      s = this.lastMarker.index,
                      a = this.lastMarker.line,
                      u = this.lastMarker.column + 1;
                    throw this.errorHandler.createError(s, a, u, o);
                  }),
                  (e.prototype.tolerateError = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    var i = Array.prototype.slice.call(arguments, 1),
                      o = e.replace(/%(\d)/g, function(e, t) {
                        return (
                          r.assert(
                            t < i.length,
                            "Message reference must be in range"
                          ),
                          i[t]
                        );
                      }),
                      s = this.lastMarker.index,
                      a = this.scanner.lineNumber,
                      u = this.lastMarker.column + 1;
                    this.errorHandler.tolerateError(s, a, u, o);
                  }),
                  (e.prototype.unexpectedTokenError = function(e, t) {
                    var n,
                      r = t || o.Messages.UnexpectedToken;
                    if (
                      (e
                        ? (t ||
                            ((r =
                              2 === e.type
                                ? o.Messages.UnexpectedEOS
                                : 3 === e.type
                                ? o.Messages.UnexpectedIdentifier
                                : 6 === e.type
                                ? o.Messages.UnexpectedNumber
                                : 8 === e.type
                                ? o.Messages.UnexpectedString
                                : 10 === e.type
                                ? o.Messages.UnexpectedTemplate
                                : o.Messages.UnexpectedToken),
                            4 === e.type &&
                              (this.scanner.isFutureReservedWord(e.value)
                                ? (r = o.Messages.UnexpectedReserved)
                                : this.context.strict &&
                                  this.scanner.isStrictModeReservedWord(
                                    e.value
                                  ) &&
                                  (r = o.Messages.StrictReservedWord))),
                          (n = e.value))
                        : (n = "ILLEGAL"),
                      (r = r.replace("%0", n)),
                      e && "number" == typeof e.lineNumber)
                    ) {
                      var i = e.start,
                        s = e.lineNumber,
                        a = this.lastMarker.index - this.lastMarker.column,
                        u = e.start - a + 1;
                      return this.errorHandler.createError(i, s, u, r);
                    }
                    (i = this.lastMarker.index),
                      (s = this.lastMarker.line),
                      (u = this.lastMarker.column + 1);
                    return this.errorHandler.createError(i, s, u, r);
                  }),
                  (e.prototype.throwUnexpectedToken = function(e, t) {
                    throw this.unexpectedTokenError(e, t);
                  }),
                  (e.prototype.tolerateUnexpectedToken = function(e, t) {
                    this.errorHandler.tolerate(this.unexpectedTokenError(e, t));
                  }),
                  (e.prototype.collectComments = function() {
                    if (this.config.comment) {
                      var e = this.scanner.scanComments();
                      if (e.length > 0 && this.delegate)
                        for (var t = 0; t < e.length; ++t) {
                          var n = e[t],
                            r = void 0;
                          (r = {
                            type: n.multiLine ? "BlockComment" : "LineComment",
                            value: this.scanner.source.slice(
                              n.slice[0],
                              n.slice[1]
                            ),
                          }),
                            this.config.range && (r.range = n.range),
                            this.config.loc && (r.loc = n.loc);
                          var i = {
                            start: {
                              line: n.loc.start.line,
                              column: n.loc.start.column,
                              offset: n.range[0],
                            },
                            end: {
                              line: n.loc.end.line,
                              column: n.loc.end.column,
                              offset: n.range[1],
                            },
                          };
                          this.delegate(r, i);
                        }
                    } else this.scanner.scanComments();
                  }),
                  (e.prototype.getTokenRaw = function(e) {
                    return this.scanner.source.slice(e.start, e.end);
                  }),
                  (e.prototype.convertToken = function(e) {
                    var t = {
                      type: l.TokenName[e.type],
                      value: this.getTokenRaw(e),
                    };
                    if (
                      (this.config.range && (t.range = [e.start, e.end]),
                      this.config.loc &&
                        (t.loc = {
                          start: {
                            line: this.startMarker.line,
                            column: this.startMarker.column,
                          },
                          end: {
                            line: this.scanner.lineNumber,
                            column: this.scanner.index - this.scanner.lineStart,
                          },
                        }),
                      9 === e.type)
                    ) {
                      var n = e.pattern,
                        r = e.flags;
                      t.regex = { pattern: n, flags: r };
                    }
                    return t;
                  }),
                  (e.prototype.nextToken = function() {
                    var e = this.lookahead;
                    (this.lastMarker.index = this.scanner.index),
                      (this.lastMarker.line = this.scanner.lineNumber),
                      (this.lastMarker.column =
                        this.scanner.index - this.scanner.lineStart),
                      this.collectComments(),
                      this.scanner.index !== this.startMarker.index &&
                        ((this.startMarker.index = this.scanner.index),
                        (this.startMarker.line = this.scanner.lineNumber),
                        (this.startMarker.column =
                          this.scanner.index - this.scanner.lineStart));
                    var t = this.scanner.lex();
                    return (
                      (this.hasLineTerminator = e.lineNumber !== t.lineNumber),
                      t &&
                        this.context.strict &&
                        3 === t.type &&
                        this.scanner.isStrictModeReservedWord(t.value) &&
                        (t.type = 4),
                      (this.lookahead = t),
                      this.config.tokens &&
                        2 !== t.type &&
                        this.tokens.push(this.convertToken(t)),
                      e
                    );
                  }),
                  (e.prototype.nextRegexToken = function() {
                    this.collectComments();
                    var e = this.scanner.scanRegExp();
                    return (
                      this.config.tokens &&
                        (this.tokens.pop(),
                        this.tokens.push(this.convertToken(e))),
                      (this.lookahead = e),
                      this.nextToken(),
                      e
                    );
                  }),
                  (e.prototype.createNode = function() {
                    return {
                      index: this.startMarker.index,
                      line: this.startMarker.line,
                      column: this.startMarker.column,
                    };
                  }),
                  (e.prototype.startNode = function(e, t) {
                    void 0 === t && (t = 0);
                    var n = e.start - e.lineStart,
                      r = e.lineNumber;
                    return (
                      n < 0 && ((n += t), r--),
                      { index: e.start, line: r, column: n }
                    );
                  }),
                  (e.prototype.finalize = function(e, t) {
                    if (
                      (this.config.range &&
                        (t.range = [e.index, this.lastMarker.index]),
                      this.config.loc &&
                        ((t.loc = {
                          start: { line: e.line, column: e.column },
                          end: {
                            line: this.lastMarker.line,
                            column: this.lastMarker.column,
                          },
                        }),
                        this.config.source &&
                          (t.loc.source = this.config.source)),
                      this.delegate)
                    ) {
                      var n = {
                        start: {
                          line: e.line,
                          column: e.column,
                          offset: e.index,
                        },
                        end: {
                          line: this.lastMarker.line,
                          column: this.lastMarker.column,
                          offset: this.lastMarker.index,
                        },
                      };
                      this.delegate(t, n);
                    }
                    return t;
                  }),
                  (e.prototype.expect = function(e) {
                    var t = this.nextToken();
                    (7 === t.type && t.value === e) ||
                      this.throwUnexpectedToken(t);
                  }),
                  (e.prototype.expectCommaSeparator = function() {
                    if (this.config.tolerant) {
                      var e = this.lookahead;
                      7 === e.type && "," === e.value
                        ? this.nextToken()
                        : 7 === e.type && ";" === e.value
                        ? (this.nextToken(), this.tolerateUnexpectedToken(e))
                        : this.tolerateUnexpectedToken(
                            e,
                            o.Messages.UnexpectedToken
                          );
                    } else this.expect(",");
                  }),
                  (e.prototype.expectKeyword = function(e) {
                    var t = this.nextToken();
                    (4 === t.type && t.value === e) ||
                      this.throwUnexpectedToken(t);
                  }),
                  (e.prototype.match = function(e) {
                    return (
                      7 === this.lookahead.type && this.lookahead.value === e
                    );
                  }),
                  (e.prototype.matchKeyword = function(e) {
                    return (
                      4 === this.lookahead.type && this.lookahead.value === e
                    );
                  }),
                  (e.prototype.matchContextualKeyword = function(e) {
                    return (
                      3 === this.lookahead.type && this.lookahead.value === e
                    );
                  }),
                  (e.prototype.matchAssign = function() {
                    if (7 !== this.lookahead.type) return !1;
                    var e = this.lookahead.value;
                    return (
                      "=" === e ||
                      "*=" === e ||
                      "**=" === e ||
                      "/=" === e ||
                      "%=" === e ||
                      "+=" === e ||
                      "-=" === e ||
                      "<<=" === e ||
                      ">>=" === e ||
                      ">>>=" === e ||
                      "&=" === e ||
                      "^=" === e ||
                      "|=" === e
                    );
                  }),
                  (e.prototype.isolateCoverGrammar = function(e) {
                    var t = this.context.isBindingElement,
                      n = this.context.isAssignmentTarget,
                      r = this.context.firstCoverInitializedNameError;
                    (this.context.isBindingElement = !0),
                      (this.context.isAssignmentTarget = !0),
                      (this.context.firstCoverInitializedNameError = null);
                    var i = e.call(this);
                    return (
                      null !== this.context.firstCoverInitializedNameError &&
                        this.throwUnexpectedToken(
                          this.context.firstCoverInitializedNameError
                        ),
                      (this.context.isBindingElement = t),
                      (this.context.isAssignmentTarget = n),
                      (this.context.firstCoverInitializedNameError = r),
                      i
                    );
                  }),
                  (e.prototype.inheritCoverGrammar = function(e) {
                    var t = this.context.isBindingElement,
                      n = this.context.isAssignmentTarget,
                      r = this.context.firstCoverInitializedNameError;
                    (this.context.isBindingElement = !0),
                      (this.context.isAssignmentTarget = !0),
                      (this.context.firstCoverInitializedNameError = null);
                    var i = e.call(this);
                    return (
                      (this.context.isBindingElement =
                        this.context.isBindingElement && t),
                      (this.context.isAssignmentTarget =
                        this.context.isAssignmentTarget && n),
                      (this.context.firstCoverInitializedNameError =
                        r || this.context.firstCoverInitializedNameError),
                      i
                    );
                  }),
                  (e.prototype.consumeSemicolon = function() {
                    this.match(";")
                      ? this.nextToken()
                      : this.hasLineTerminator ||
                        (2 === this.lookahead.type ||
                          this.match("}") ||
                          this.throwUnexpectedToken(this.lookahead),
                        (this.lastMarker.index = this.startMarker.index),
                        (this.lastMarker.line = this.startMarker.line),
                        (this.lastMarker.column = this.startMarker.column));
                  }),
                  (e.prototype.parsePrimaryExpression = function() {
                    var e,
                      t,
                      n,
                      r = this.createNode();
                    switch (this.lookahead.type) {
                      case 3:
                        (this.context.isModule || this.context.await) &&
                          "await" === this.lookahead.value &&
                          this.tolerateUnexpectedToken(this.lookahead),
                          (e = this.matchAsyncFunction()
                            ? this.parseFunctionExpression()
                            : this.finalize(
                                r,
                                new s.Identifier(this.nextToken().value)
                              ));
                        break;
                      case 6:
                      case 8:
                        this.context.strict &&
                          this.lookahead.octal &&
                          this.tolerateUnexpectedToken(
                            this.lookahead,
                            o.Messages.StrictOctalLiteral
                          ),
                          (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1),
                          (t = this.nextToken()),
                          (n = this.getTokenRaw(t)),
                          (e = this.finalize(r, new s.Literal(t.value, n)));
                        break;
                      case 1:
                        (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1),
                          (t = this.nextToken()),
                          (n = this.getTokenRaw(t)),
                          (e = this.finalize(
                            r,
                            new s.Literal("true" === t.value, n)
                          ));
                        break;
                      case 5:
                        (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1),
                          (t = this.nextToken()),
                          (n = this.getTokenRaw(t)),
                          (e = this.finalize(r, new s.Literal(null, n)));
                        break;
                      case 10:
                        e = this.parseTemplateLiteral();
                        break;
                      case 7:
                        switch (this.lookahead.value) {
                          case "(":
                            (this.context.isBindingElement = !1),
                              (e = this.inheritCoverGrammar(
                                this.parseGroupExpression
                              ));
                            break;
                          case "[":
                            e = this.inheritCoverGrammar(
                              this.parseArrayInitializer
                            );
                            break;
                          case "{":
                            e = this.inheritCoverGrammar(
                              this.parseObjectInitializer
                            );
                            break;
                          case "/":
                          case "/=":
                            (this.context.isAssignmentTarget = !1),
                              (this.context.isBindingElement = !1),
                              (this.scanner.index = this.startMarker.index),
                              (t = this.nextRegexToken()),
                              (n = this.getTokenRaw(t)),
                              (e = this.finalize(
                                r,
                                new s.RegexLiteral(
                                  t.regex,
                                  n,
                                  t.pattern,
                                  t.flags
                                )
                              ));
                            break;
                          default:
                            e = this.throwUnexpectedToken(this.nextToken());
                        }
                        break;
                      case 4:
                        !this.context.strict &&
                        this.context.allowYield &&
                        this.matchKeyword("yield")
                          ? (e = this.parseIdentifierName())
                          : !this.context.strict && this.matchKeyword("let")
                          ? (e = this.finalize(
                              r,
                              new s.Identifier(this.nextToken().value)
                            ))
                          : ((this.context.isAssignmentTarget = !1),
                            (this.context.isBindingElement = !1),
                            this.matchKeyword("function")
                              ? (e = this.parseFunctionExpression())
                              : this.matchKeyword("this")
                              ? (this.nextToken(),
                                (e = this.finalize(r, new s.ThisExpression())))
                              : (e = this.matchKeyword("class")
                                  ? this.parseClassExpression()
                                  : this.throwUnexpectedToken(
                                      this.nextToken()
                                    )));
                        break;
                      default:
                        e = this.throwUnexpectedToken(this.nextToken());
                    }
                    return e;
                  }),
                  (e.prototype.parseSpreadElement = function() {
                    var e = this.createNode();
                    this.expect("...");
                    var t = this.inheritCoverGrammar(
                      this.parseAssignmentExpression
                    );
                    return this.finalize(e, new s.SpreadElement(t));
                  }),
                  (e.prototype.parseArrayInitializer = function() {
                    var e = this.createNode(),
                      t = [];
                    for (this.expect("["); !this.match("]"); )
                      if (this.match(",")) this.nextToken(), t.push(null);
                      else if (this.match("...")) {
                        var n = this.parseSpreadElement();
                        this.match("]") ||
                          ((this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1),
                          this.expect(",")),
                          t.push(n);
                      } else
                        t.push(
                          this.inheritCoverGrammar(
                            this.parseAssignmentExpression
                          )
                        ),
                          this.match("]") || this.expect(",");
                    return (
                      this.expect("]"),
                      this.finalize(e, new s.ArrayExpression(t))
                    );
                  }),
                  (e.prototype.parsePropertyMethod = function(e) {
                    (this.context.isAssignmentTarget = !1),
                      (this.context.isBindingElement = !1);
                    var t = this.context.strict,
                      n = this.context.allowStrictDirective;
                    this.context.allowStrictDirective = e.simple;
                    var r = this.isolateCoverGrammar(
                      this.parseFunctionSourceElements
                    );
                    return (
                      this.context.strict &&
                        e.firstRestricted &&
                        this.tolerateUnexpectedToken(
                          e.firstRestricted,
                          e.message
                        ),
                      this.context.strict &&
                        e.stricted &&
                        this.tolerateUnexpectedToken(e.stricted, e.message),
                      (this.context.strict = t),
                      (this.context.allowStrictDirective = n),
                      r
                    );
                  }),
                  (e.prototype.parsePropertyMethodFunction = function() {
                    var e = this.createNode(),
                      t = this.context.allowYield;
                    this.context.allowYield = !0;
                    var n = this.parseFormalParameters(),
                      r = this.parsePropertyMethod(n);
                    return (
                      (this.context.allowYield = t),
                      this.finalize(
                        e,
                        new s.FunctionExpression(null, n.params, r, !1)
                      )
                    );
                  }),
                  (e.prototype.parsePropertyMethodAsyncFunction = function() {
                    var e = this.createNode(),
                      t = this.context.allowYield,
                      n = this.context.await;
                    (this.context.allowYield = !1), (this.context.await = !0);
                    var r = this.parseFormalParameters(),
                      i = this.parsePropertyMethod(r);
                    return (
                      (this.context.allowYield = t),
                      (this.context.await = n),
                      this.finalize(
                        e,
                        new s.AsyncFunctionExpression(null, r.params, i)
                      )
                    );
                  }),
                  (e.prototype.parseObjectPropertyKey = function() {
                    var e,
                      t = this.createNode(),
                      n = this.nextToken();
                    switch (n.type) {
                      case 8:
                      case 6:
                        this.context.strict &&
                          n.octal &&
                          this.tolerateUnexpectedToken(
                            n,
                            o.Messages.StrictOctalLiteral
                          );
                        var r = this.getTokenRaw(n);
                        e = this.finalize(t, new s.Literal(n.value, r));
                        break;
                      case 3:
                      case 1:
                      case 5:
                      case 4:
                        e = this.finalize(t, new s.Identifier(n.value));
                        break;
                      case 7:
                        "[" === n.value
                          ? ((e = this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            )),
                            this.expect("]"))
                          : (e = this.throwUnexpectedToken(n));
                        break;
                      default:
                        e = this.throwUnexpectedToken(n);
                    }
                    return e;
                  }),
                  (e.prototype.isPropertyKey = function(e, t) {
                    return (
                      (e.type === u.Syntax.Identifier && e.name === t) ||
                      (e.type === u.Syntax.Literal && e.value === t)
                    );
                  }),
                  (e.prototype.parseObjectProperty = function(e) {
                    var t,
                      n = this.createNode(),
                      r = this.lookahead,
                      i = null,
                      a = null,
                      u = !1,
                      l = !1,
                      c = !1,
                      h = !1;
                    if (3 === r.type) {
                      var p = r.value;
                      this.nextToken(),
                        (u = this.match("[")),
                        (i = (h = !(
                          this.hasLineTerminator ||
                          "async" !== p ||
                          this.match(":") ||
                          this.match("(") ||
                          this.match("*") ||
                          this.match(",")
                        ))
                          ? this.parseObjectPropertyKey()
                          : this.finalize(n, new s.Identifier(p)));
                    } else
                      this.match("*")
                        ? this.nextToken()
                        : ((u = this.match("[")),
                          (i = this.parseObjectPropertyKey()));
                    var f = this.qualifiedPropertyName(this.lookahead);
                    if (3 === r.type && !h && "get" === r.value && f)
                      (t = "get"),
                        (u = this.match("[")),
                        (i = this.parseObjectPropertyKey()),
                        (this.context.allowYield = !1),
                        (a = this.parseGetterMethod());
                    else if (3 === r.type && !h && "set" === r.value && f)
                      (t = "set"),
                        (u = this.match("[")),
                        (i = this.parseObjectPropertyKey()),
                        (a = this.parseSetterMethod());
                    else if (7 === r.type && "*" === r.value && f)
                      (t = "init"),
                        (u = this.match("[")),
                        (i = this.parseObjectPropertyKey()),
                        (a = this.parseGeneratorMethod()),
                        (l = !0);
                    else if (
                      (i || this.throwUnexpectedToken(this.lookahead),
                      (t = "init"),
                      this.match(":") && !h)
                    )
                      !u &&
                        this.isPropertyKey(i, "__proto__") &&
                        (e.value &&
                          this.tolerateError(o.Messages.DuplicateProtoProperty),
                        (e.value = !0)),
                        this.nextToken(),
                        (a = this.inheritCoverGrammar(
                          this.parseAssignmentExpression
                        ));
                    else if (this.match("("))
                      (a = h
                        ? this.parsePropertyMethodAsyncFunction()
                        : this.parsePropertyMethodFunction()),
                        (l = !0);
                    else if (3 === r.type) {
                      p = this.finalize(n, new s.Identifier(r.value));
                      if (this.match("=")) {
                        (this.context.firstCoverInitializedNameError = this.lookahead),
                          this.nextToken(),
                          (c = !0);
                        var d = this.isolateCoverGrammar(
                          this.parseAssignmentExpression
                        );
                        a = this.finalize(n, new s.AssignmentPattern(p, d));
                      } else (c = !0), (a = p);
                    } else this.throwUnexpectedToken(this.nextToken());
                    return this.finalize(n, new s.Property(t, i, u, a, l, c));
                  }),
                  (e.prototype.parseObjectInitializer = function() {
                    var e = this.createNode();
                    this.expect("{");
                    for (var t = [], n = { value: !1 }; !this.match("}"); )
                      t.push(this.parseObjectProperty(n)),
                        this.match("}") || this.expectCommaSeparator();
                    return (
                      this.expect("}"),
                      this.finalize(e, new s.ObjectExpression(t))
                    );
                  }),
                  (e.prototype.parseTemplateHead = function() {
                    r.assert(
                      this.lookahead.head,
                      "Template literal must start with a template head"
                    );
                    var e = this.createNode(),
                      t = this.nextToken(),
                      n = t.value,
                      i = t.cooked;
                    return this.finalize(
                      e,
                      new s.TemplateElement({ raw: n, cooked: i }, t.tail)
                    );
                  }),
                  (e.prototype.parseTemplateElement = function() {
                    10 !== this.lookahead.type && this.throwUnexpectedToken();
                    var e = this.createNode(),
                      t = this.nextToken(),
                      n = t.value,
                      r = t.cooked;
                    return this.finalize(
                      e,
                      new s.TemplateElement({ raw: n, cooked: r }, t.tail)
                    );
                  }),
                  (e.prototype.parseTemplateLiteral = function() {
                    var e = this.createNode(),
                      t = [],
                      n = [],
                      r = this.parseTemplateHead();
                    for (n.push(r); !r.tail; )
                      t.push(this.parseExpression()),
                        (r = this.parseTemplateElement()),
                        n.push(r);
                    return this.finalize(e, new s.TemplateLiteral(n, t));
                  }),
                  (e.prototype.reinterpretExpressionAsPattern = function(e) {
                    switch (e.type) {
                      case u.Syntax.Identifier:
                      case u.Syntax.MemberExpression:
                      case u.Syntax.RestElement:
                      case u.Syntax.AssignmentPattern:
                        break;
                      case u.Syntax.SpreadElement:
                        (e.type = u.Syntax.RestElement),
                          this.reinterpretExpressionAsPattern(e.argument);
                        break;
                      case u.Syntax.ArrayExpression:
                        e.type = u.Syntax.ArrayPattern;
                        for (var t = 0; t < e.elements.length; t++)
                          null !== e.elements[t] &&
                            this.reinterpretExpressionAsPattern(e.elements[t]);
                        break;
                      case u.Syntax.ObjectExpression:
                        e.type = u.Syntax.ObjectPattern;
                        for (t = 0; t < e.properties.length; t++)
                          this.reinterpretExpressionAsPattern(
                            e.properties[t].value
                          );
                        break;
                      case u.Syntax.AssignmentExpression:
                        (e.type = u.Syntax.AssignmentPattern),
                          delete e.operator,
                          this.reinterpretExpressionAsPattern(e.left);
                    }
                  }),
                  (e.prototype.parseGroupExpression = function() {
                    var e;
                    if ((this.expect("("), this.match(")")))
                      this.nextToken(),
                        this.match("=>") || this.expect("=>"),
                        (e = {
                          type: "ArrowParameterPlaceHolder",
                          params: [],
                          async: !1,
                        });
                    else {
                      var t = this.lookahead,
                        n = [];
                      if (this.match("..."))
                        (e = this.parseRestElement(n)),
                          this.expect(")"),
                          this.match("=>") || this.expect("=>"),
                          (e = {
                            type: "ArrowParameterPlaceHolder",
                            params: [e],
                            async: !1,
                          });
                      else {
                        var r = !1;
                        if (
                          ((this.context.isBindingElement = !0),
                          (e = this.inheritCoverGrammar(
                            this.parseAssignmentExpression
                          )),
                          this.match(","))
                        ) {
                          var i = [];
                          for (
                            this.context.isAssignmentTarget = !1, i.push(e);
                            2 !== this.lookahead.type && this.match(",");

                          ) {
                            if ((this.nextToken(), this.match(")"))) {
                              this.nextToken();
                              for (var o = 0; o < i.length; o++)
                                this.reinterpretExpressionAsPattern(i[o]);
                              (r = !0),
                                (e = {
                                  type: "ArrowParameterPlaceHolder",
                                  params: i,
                                  async: !1,
                                });
                            } else if (this.match("...")) {
                              this.context.isBindingElement ||
                                this.throwUnexpectedToken(this.lookahead),
                                i.push(this.parseRestElement(n)),
                                this.expect(")"),
                                this.match("=>") || this.expect("=>"),
                                (this.context.isBindingElement = !1);
                              for (o = 0; o < i.length; o++)
                                this.reinterpretExpressionAsPattern(i[o]);
                              (r = !0),
                                (e = {
                                  type: "ArrowParameterPlaceHolder",
                                  params: i,
                                  async: !1,
                                });
                            } else
                              i.push(
                                this.inheritCoverGrammar(
                                  this.parseAssignmentExpression
                                )
                              );
                            if (r) break;
                          }
                          r ||
                            (e = this.finalize(
                              this.startNode(t),
                              new s.SequenceExpression(i)
                            ));
                        }
                        if (!r) {
                          if (
                            (this.expect(")"),
                            this.match("=>") &&
                              (e.type === u.Syntax.Identifier &&
                                "yield" === e.name &&
                                ((r = !0),
                                (e = {
                                  type: "ArrowParameterPlaceHolder",
                                  params: [e],
                                  async: !1,
                                })),
                              !r))
                          ) {
                            if (
                              (this.context.isBindingElement ||
                                this.throwUnexpectedToken(this.lookahead),
                              e.type === u.Syntax.SequenceExpression)
                            )
                              for (o = 0; o < e.expressions.length; o++)
                                this.reinterpretExpressionAsPattern(
                                  e.expressions[o]
                                );
                            else this.reinterpretExpressionAsPattern(e);
                            e = {
                              type: "ArrowParameterPlaceHolder",
                              params:
                                e.type === u.Syntax.SequenceExpression
                                  ? e.expressions
                                  : [e],
                              async: !1,
                            };
                          }
                          this.context.isBindingElement = !1;
                        }
                      }
                    }
                    return e;
                  }),
                  (e.prototype.parseArguments = function() {
                    this.expect("(");
                    var e = [];
                    if (!this.match(")"))
                      for (;;) {
                        var t = this.match("...")
                          ? this.parseSpreadElement()
                          : this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            );
                        if ((e.push(t), this.match(")"))) break;
                        if ((this.expectCommaSeparator(), this.match(")")))
                          break;
                      }
                    return this.expect(")"), e;
                  }),
                  (e.prototype.isIdentifierName = function(e) {
                    return (
                      3 === e.type ||
                      4 === e.type ||
                      1 === e.type ||
                      5 === e.type
                    );
                  }),
                  (e.prototype.parseIdentifierName = function() {
                    var e = this.createNode(),
                      t = this.nextToken();
                    return (
                      this.isIdentifierName(t) || this.throwUnexpectedToken(t),
                      this.finalize(e, new s.Identifier(t.value))
                    );
                  }),
                  (e.prototype.parseNewExpression = function() {
                    var e,
                      t = this.createNode(),
                      n = this.parseIdentifierName();
                    if (
                      (r.assert(
                        "new" === n.name,
                        "New expression must start with `new`"
                      ),
                      this.match("."))
                    )
                      if (
                        (this.nextToken(),
                        3 === this.lookahead.type &&
                          this.context.inFunctionBody &&
                          "target" === this.lookahead.value)
                      ) {
                        var i = this.parseIdentifierName();
                        e = new s.MetaProperty(n, i);
                      } else this.throwUnexpectedToken(this.lookahead);
                    else {
                      var o = this.isolateCoverGrammar(
                          this.parseLeftHandSideExpression
                        ),
                        a = this.match("(") ? this.parseArguments() : [];
                      (e = new s.NewExpression(o, a)),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                    }
                    return this.finalize(t, e);
                  }),
                  (e.prototype.parseAsyncArgument = function() {
                    var e = this.parseAssignmentExpression();
                    return (
                      (this.context.firstCoverInitializedNameError = null), e
                    );
                  }),
                  (e.prototype.parseAsyncArguments = function() {
                    this.expect("(");
                    var e = [];
                    if (!this.match(")"))
                      for (;;) {
                        var t = this.match("...")
                          ? this.parseSpreadElement()
                          : this.isolateCoverGrammar(this.parseAsyncArgument);
                        if ((e.push(t), this.match(")"))) break;
                        if ((this.expectCommaSeparator(), this.match(")")))
                          break;
                      }
                    return this.expect(")"), e;
                  }),
                  (e.prototype.parseLeftHandSideExpressionAllowCall = function() {
                    var e,
                      t = this.lookahead,
                      n = this.matchContextualKeyword("async"),
                      r = this.context.allowIn;
                    for (
                      this.context.allowIn = !0,
                        this.matchKeyword("super") &&
                        this.context.inFunctionBody
                          ? ((e = this.createNode()),
                            this.nextToken(),
                            (e = this.finalize(e, new s.Super())),
                            this.match("(") ||
                              this.match(".") ||
                              this.match("[") ||
                              this.throwUnexpectedToken(this.lookahead))
                          : (e = this.inheritCoverGrammar(
                              this.matchKeyword("new")
                                ? this.parseNewExpression
                                : this.parsePrimaryExpression
                            ));
                      ;

                    )
                      if (this.match(".")) {
                        (this.context.isBindingElement = !1),
                          (this.context.isAssignmentTarget = !0),
                          this.expect(".");
                        var i = this.parseIdentifierName();
                        e = this.finalize(
                          this.startNode(t),
                          new s.StaticMemberExpression(e, i)
                        );
                      } else if (this.match("(")) {
                        var o = n && t.lineNumber === this.lookahead.lineNumber;
                        (this.context.isBindingElement = !1),
                          (this.context.isAssignmentTarget = !1);
                        var a = o
                          ? this.parseAsyncArguments()
                          : this.parseArguments();
                        if (
                          ((e = this.finalize(
                            this.startNode(t),
                            new s.CallExpression(e, a)
                          )),
                          o && this.match("=>"))
                        ) {
                          for (var u = 0; u < a.length; ++u)
                            this.reinterpretExpressionAsPattern(a[u]);
                          e = {
                            type: "ArrowParameterPlaceHolder",
                            params: a,
                            async: !0,
                          };
                        }
                      } else if (this.match("[")) {
                        (this.context.isBindingElement = !1),
                          (this.context.isAssignmentTarget = !0),
                          this.expect("[");
                        i = this.isolateCoverGrammar(this.parseExpression);
                        this.expect("]"),
                          (e = this.finalize(
                            this.startNode(t),
                            new s.ComputedMemberExpression(e, i)
                          ));
                      } else {
                        if (10 !== this.lookahead.type || !this.lookahead.head)
                          break;
                        var l = this.parseTemplateLiteral();
                        e = this.finalize(
                          this.startNode(t),
                          new s.TaggedTemplateExpression(e, l)
                        );
                      }
                    return (this.context.allowIn = r), e;
                  }),
                  (e.prototype.parseSuper = function() {
                    var e = this.createNode();
                    return (
                      this.expectKeyword("super"),
                      this.match("[") ||
                        this.match(".") ||
                        this.throwUnexpectedToken(this.lookahead),
                      this.finalize(e, new s.Super())
                    );
                  }),
                  (e.prototype.parseLeftHandSideExpression = function() {
                    r.assert(
                      this.context.allowIn,
                      "callee of new expression always allow in keyword."
                    );
                    for (
                      var e = this.startNode(this.lookahead),
                        t =
                          this.matchKeyword("super") &&
                          this.context.inFunctionBody
                            ? this.parseSuper()
                            : this.inheritCoverGrammar(
                                this.matchKeyword("new")
                                  ? this.parseNewExpression
                                  : this.parsePrimaryExpression
                              );
                      ;

                    )
                      if (this.match("[")) {
                        (this.context.isBindingElement = !1),
                          (this.context.isAssignmentTarget = !0),
                          this.expect("[");
                        var n = this.isolateCoverGrammar(this.parseExpression);
                        this.expect("]"),
                          (t = this.finalize(
                            e,
                            new s.ComputedMemberExpression(t, n)
                          ));
                      } else if (this.match(".")) {
                        (this.context.isBindingElement = !1),
                          (this.context.isAssignmentTarget = !0),
                          this.expect(".");
                        n = this.parseIdentifierName();
                        t = this.finalize(
                          e,
                          new s.StaticMemberExpression(t, n)
                        );
                      } else {
                        if (10 !== this.lookahead.type || !this.lookahead.head)
                          break;
                        var i = this.parseTemplateLiteral();
                        t = this.finalize(
                          e,
                          new s.TaggedTemplateExpression(t, i)
                        );
                      }
                    return t;
                  }),
                  (e.prototype.parseUpdateExpression = function() {
                    var e,
                      t = this.lookahead;
                    if (this.match("++") || this.match("--")) {
                      var n = this.startNode(t),
                        r = this.nextToken();
                      (e = this.inheritCoverGrammar(this.parseUnaryExpression)),
                        this.context.strict &&
                          e.type === u.Syntax.Identifier &&
                          this.scanner.isRestrictedWord(e.name) &&
                          this.tolerateError(o.Messages.StrictLHSPrefix),
                        this.context.isAssignmentTarget ||
                          this.tolerateError(o.Messages.InvalidLHSInAssignment);
                      var i = !0;
                      (e = this.finalize(
                        n,
                        new s.UpdateExpression(r.value, e, i)
                      )),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                    } else if (
                      ((e = this.inheritCoverGrammar(
                        this.parseLeftHandSideExpressionAllowCall
                      )),
                      !this.hasLineTerminator &&
                        7 === this.lookahead.type &&
                        (this.match("++") || this.match("--")))
                    ) {
                      this.context.strict &&
                        e.type === u.Syntax.Identifier &&
                        this.scanner.isRestrictedWord(e.name) &&
                        this.tolerateError(o.Messages.StrictLHSPostfix),
                        this.context.isAssignmentTarget ||
                          this.tolerateError(o.Messages.InvalidLHSInAssignment),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                      var a = this.nextToken().value;
                      i = !1;
                      e = this.finalize(
                        this.startNode(t),
                        new s.UpdateExpression(a, e, i)
                      );
                    }
                    return e;
                  }),
                  (e.prototype.parseAwaitExpression = function() {
                    var e = this.createNode();
                    this.nextToken();
                    var t = this.parseUnaryExpression();
                    return this.finalize(e, new s.AwaitExpression(t));
                  }),
                  (e.prototype.parseUnaryExpression = function() {
                    var e;
                    if (
                      this.match("+") ||
                      this.match("-") ||
                      this.match("~") ||
                      this.match("!") ||
                      this.matchKeyword("delete") ||
                      this.matchKeyword("void") ||
                      this.matchKeyword("typeof")
                    ) {
                      var t = this.startNode(this.lookahead),
                        n = this.nextToken();
                      (e = this.inheritCoverGrammar(this.parseUnaryExpression)),
                        (e = this.finalize(
                          t,
                          new s.UnaryExpression(n.value, e)
                        )),
                        this.context.strict &&
                          "delete" === e.operator &&
                          e.argument.type === u.Syntax.Identifier &&
                          this.tolerateError(o.Messages.StrictDelete),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                    } else
                      e =
                        this.context.await &&
                        this.matchContextualKeyword("await")
                          ? this.parseAwaitExpression()
                          : this.parseUpdateExpression();
                    return e;
                  }),
                  (e.prototype.parseExponentiationExpression = function() {
                    var e = this.lookahead,
                      t = this.inheritCoverGrammar(this.parseUnaryExpression);
                    if (
                      t.type !== u.Syntax.UnaryExpression &&
                      this.match("**")
                    ) {
                      this.nextToken(),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                      var n = t,
                        r = this.isolateCoverGrammar(
                          this.parseExponentiationExpression
                        );
                      t = this.finalize(
                        this.startNode(e),
                        new s.BinaryExpression("**", n, r)
                      );
                    }
                    return t;
                  }),
                  (e.prototype.binaryPrecedence = function(e) {
                    var t = e.value;
                    return 7 === e.type
                      ? this.operatorPrecedence[t] || 0
                      : 4 === e.type &&
                        ("instanceof" === t ||
                          (this.context.allowIn && "in" === t))
                      ? 7
                      : 0;
                  }),
                  (e.prototype.parseBinaryExpression = function() {
                    var e = this.lookahead,
                      t = this.inheritCoverGrammar(
                        this.parseExponentiationExpression
                      ),
                      n = this.lookahead,
                      r = this.binaryPrecedence(n);
                    if (r > 0) {
                      this.nextToken(),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                      for (
                        var i = [e, this.lookahead],
                          o = t,
                          a = this.isolateCoverGrammar(
                            this.parseExponentiationExpression
                          ),
                          u = [o, n.value, a],
                          l = [r];
                        !((r = this.binaryPrecedence(this.lookahead)) <= 0);

                      ) {
                        for (; u.length > 2 && r <= l[l.length - 1]; ) {
                          a = u.pop();
                          var c = u.pop();
                          l.pop(), (o = u.pop()), i.pop();
                          var h = this.startNode(i[i.length - 1]);
                          u.push(
                            this.finalize(h, new s.BinaryExpression(c, o, a))
                          );
                        }
                        u.push(this.nextToken().value),
                          l.push(r),
                          i.push(this.lookahead),
                          u.push(
                            this.isolateCoverGrammar(
                              this.parseExponentiationExpression
                            )
                          );
                      }
                      var p = u.length - 1;
                      t = u[p];
                      for (var f = i.pop(); p > 1; ) {
                        var d = i.pop(),
                          m = f && f.lineStart;
                        (h = this.startNode(d, m)), (c = u[p - 1]);
                        (t = this.finalize(
                          h,
                          new s.BinaryExpression(c, u[p - 2], t)
                        )),
                          (p -= 2),
                          (f = d);
                      }
                    }
                    return t;
                  }),
                  (e.prototype.parseConditionalExpression = function() {
                    var e = this.lookahead,
                      t = this.inheritCoverGrammar(this.parseBinaryExpression);
                    if (this.match("?")) {
                      this.nextToken();
                      var n = this.context.allowIn;
                      this.context.allowIn = !0;
                      var r = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      );
                      (this.context.allowIn = n), this.expect(":");
                      var i = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      );
                      (t = this.finalize(
                        this.startNode(e),
                        new s.ConditionalExpression(t, r, i)
                      )),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                    }
                    return t;
                  }),
                  (e.prototype.checkPatternParam = function(e, t) {
                    switch (t.type) {
                      case u.Syntax.Identifier:
                        this.validateParam(e, t, t.name);
                        break;
                      case u.Syntax.RestElement:
                        this.checkPatternParam(e, t.argument);
                        break;
                      case u.Syntax.AssignmentPattern:
                        this.checkPatternParam(e, t.left);
                        break;
                      case u.Syntax.ArrayPattern:
                        for (var n = 0; n < t.elements.length; n++)
                          null !== t.elements[n] &&
                            this.checkPatternParam(e, t.elements[n]);
                        break;
                      case u.Syntax.ObjectPattern:
                        for (n = 0; n < t.properties.length; n++)
                          this.checkPatternParam(e, t.properties[n].value);
                    }
                    e.simple = e.simple && t instanceof s.Identifier;
                  }),
                  (e.prototype.reinterpretAsCoverFormalsList = function(e) {
                    var t,
                      n = [e],
                      r = !1;
                    switch (e.type) {
                      case u.Syntax.Identifier:
                        break;
                      case "ArrowParameterPlaceHolder":
                        (n = e.params), (r = e.async);
                        break;
                      default:
                        return null;
                    }
                    t = { simple: !0, paramSet: {} };
                    for (var i = 0; i < n.length; ++i) {
                      (s = n[i]).type === u.Syntax.AssignmentPattern
                        ? s.right.type === u.Syntax.YieldExpression &&
                          (s.right.argument &&
                            this.throwUnexpectedToken(this.lookahead),
                          (s.right.type = u.Syntax.Identifier),
                          (s.right.name = "yield"),
                          delete s.right.argument,
                          delete s.right.delegate)
                        : r &&
                          s.type === u.Syntax.Identifier &&
                          "await" === s.name &&
                          this.throwUnexpectedToken(this.lookahead),
                        this.checkPatternParam(t, s),
                        (n[i] = s);
                    }
                    if (this.context.strict || !this.context.allowYield)
                      for (i = 0; i < n.length; ++i) {
                        var s;
                        (s = n[i]).type === u.Syntax.YieldExpression &&
                          this.throwUnexpectedToken(this.lookahead);
                      }
                    if (t.message === o.Messages.StrictParamDupe) {
                      var a = this.context.strict
                        ? t.stricted
                        : t.firstRestricted;
                      this.throwUnexpectedToken(a, t.message);
                    }
                    return {
                      simple: t.simple,
                      params: n,
                      stricted: t.stricted,
                      firstRestricted: t.firstRestricted,
                      message: t.message,
                    };
                  }),
                  (e.prototype.parseAssignmentExpression = function() {
                    var e;
                    if (!this.context.allowYield && this.matchKeyword("yield"))
                      e = this.parseYieldExpression();
                    else {
                      var t = this.lookahead,
                        n = t;
                      if (
                        ((e = this.parseConditionalExpression()),
                        3 === n.type &&
                          n.lineNumber === this.lookahead.lineNumber &&
                          "async" === n.value &&
                          (3 === this.lookahead.type ||
                            this.matchKeyword("yield")))
                      ) {
                        var r = this.parsePrimaryExpression();
                        this.reinterpretExpressionAsPattern(r),
                          (e = {
                            type: "ArrowParameterPlaceHolder",
                            params: [r],
                            async: !0,
                          });
                      }
                      if (
                        "ArrowParameterPlaceHolder" === e.type ||
                        this.match("=>")
                      ) {
                        (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1);
                        var i = e.async,
                          a = this.reinterpretAsCoverFormalsList(e);
                        if (a) {
                          this.hasLineTerminator &&
                            this.tolerateUnexpectedToken(this.lookahead),
                            (this.context.firstCoverInitializedNameError = null);
                          var l = this.context.strict,
                            c = this.context.allowStrictDirective;
                          this.context.allowStrictDirective = a.simple;
                          var h = this.context.allowYield,
                            p = this.context.await;
                          (this.context.allowYield = !0),
                            (this.context.await = i);
                          var f = this.startNode(t);
                          this.expect("=>");
                          var d = void 0;
                          if (this.match("{")) {
                            var m = this.context.allowIn;
                            (this.context.allowIn = !0),
                              (d = this.parseFunctionSourceElements()),
                              (this.context.allowIn = m);
                          } else
                            d = this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            );
                          var g = d.type !== u.Syntax.BlockStatement;
                          this.context.strict &&
                            a.firstRestricted &&
                            this.throwUnexpectedToken(
                              a.firstRestricted,
                              a.message
                            ),
                            this.context.strict &&
                              a.stricted &&
                              this.tolerateUnexpectedToken(
                                a.stricted,
                                a.message
                              ),
                            (e = i
                              ? this.finalize(
                                  f,
                                  new s.AsyncArrowFunctionExpression(
                                    a.params,
                                    d,
                                    g
                                  )
                                )
                              : this.finalize(
                                  f,
                                  new s.ArrowFunctionExpression(a.params, d, g)
                                )),
                            (this.context.strict = l),
                            (this.context.allowStrictDirective = c),
                            (this.context.allowYield = h),
                            (this.context.await = p);
                        }
                      } else if (this.matchAssign()) {
                        if (
                          (this.context.isAssignmentTarget ||
                            this.tolerateError(
                              o.Messages.InvalidLHSInAssignment
                            ),
                          this.context.strict && e.type === u.Syntax.Identifier)
                        ) {
                          var v = e;
                          this.scanner.isRestrictedWord(v.name) &&
                            this.tolerateUnexpectedToken(
                              n,
                              o.Messages.StrictLHSAssignment
                            ),
                            this.scanner.isStrictModeReservedWord(v.name) &&
                              this.tolerateUnexpectedToken(
                                n,
                                o.Messages.StrictReservedWord
                              );
                        }
                        this.match("=")
                          ? this.reinterpretExpressionAsPattern(e)
                          : ((this.context.isAssignmentTarget = !1),
                            (this.context.isBindingElement = !1));
                        var y = (n = this.nextToken()).value,
                          x = this.isolateCoverGrammar(
                            this.parseAssignmentExpression
                          );
                        (e = this.finalize(
                          this.startNode(t),
                          new s.AssignmentExpression(y, e, x)
                        )),
                          (this.context.firstCoverInitializedNameError = null);
                      }
                    }
                    return e;
                  }),
                  (e.prototype.parseExpression = function() {
                    var e = this.lookahead,
                      t = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      );
                    if (this.match(",")) {
                      var n = [];
                      for (
                        n.push(t);
                        2 !== this.lookahead.type && this.match(",");

                      )
                        this.nextToken(),
                          n.push(
                            this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            )
                          );
                      t = this.finalize(
                        this.startNode(e),
                        new s.SequenceExpression(n)
                      );
                    }
                    return t;
                  }),
                  (e.prototype.parseStatementListItem = function() {
                    var e;
                    if (
                      ((this.context.isAssignmentTarget = !0),
                      (this.context.isBindingElement = !0),
                      4 === this.lookahead.type)
                    )
                      switch (this.lookahead.value) {
                        case "export":
                          this.context.isModule ||
                            this.tolerateUnexpectedToken(
                              this.lookahead,
                              o.Messages.IllegalExportDeclaration
                            ),
                            (e = this.parseExportDeclaration());
                          break;
                        case "import":
                          this.context.isModule ||
                            this.tolerateUnexpectedToken(
                              this.lookahead,
                              o.Messages.IllegalImportDeclaration
                            ),
                            (e = this.parseImportDeclaration());
                          break;
                        case "const":
                          e = this.parseLexicalDeclaration({ inFor: !1 });
                          break;
                        case "function":
                          e = this.parseFunctionDeclaration();
                          break;
                        case "class":
                          e = this.parseClassDeclaration();
                          break;
                        case "let":
                          e = this.isLexicalDeclaration()
                            ? this.parseLexicalDeclaration({ inFor: !1 })
                            : this.parseStatement();
                          break;
                        default:
                          e = this.parseStatement();
                      }
                    else e = this.parseStatement();
                    return e;
                  }),
                  (e.prototype.parseBlock = function() {
                    var e = this.createNode();
                    this.expect("{");
                    for (var t = []; !this.match("}"); )
                      t.push(this.parseStatementListItem());
                    return (
                      this.expect("}"),
                      this.finalize(e, new s.BlockStatement(t))
                    );
                  }),
                  (e.prototype.parseLexicalBinding = function(e, t) {
                    var n = this.createNode(),
                      r = this.parsePattern([], e);
                    this.context.strict &&
                      r.type === u.Syntax.Identifier &&
                      this.scanner.isRestrictedWord(r.name) &&
                      this.tolerateError(o.Messages.StrictVarName);
                    var i = null;
                    return (
                      "const" === e
                        ? this.matchKeyword("in") ||
                          this.matchContextualKeyword("of") ||
                          (this.match("=")
                            ? (this.nextToken(),
                              (i = this.isolateCoverGrammar(
                                this.parseAssignmentExpression
                              )))
                            : this.throwError(
                                o.Messages.DeclarationMissingInitializer,
                                "const"
                              ))
                        : ((!t.inFor && r.type !== u.Syntax.Identifier) ||
                            this.match("=")) &&
                          (this.expect("="),
                          (i = this.isolateCoverGrammar(
                            this.parseAssignmentExpression
                          ))),
                      this.finalize(n, new s.VariableDeclarator(r, i))
                    );
                  }),
                  (e.prototype.parseBindingList = function(e, t) {
                    for (
                      var n = [this.parseLexicalBinding(e, t)];
                      this.match(",");

                    )
                      this.nextToken(), n.push(this.parseLexicalBinding(e, t));
                    return n;
                  }),
                  (e.prototype.isLexicalDeclaration = function() {
                    var e = this.scanner.saveState();
                    this.scanner.scanComments();
                    var t = this.scanner.lex();
                    return (
                      this.scanner.restoreState(e),
                      3 === t.type ||
                        (7 === t.type && "[" === t.value) ||
                        (7 === t.type && "{" === t.value) ||
                        (4 === t.type && "let" === t.value) ||
                        (4 === t.type && "yield" === t.value)
                    );
                  }),
                  (e.prototype.parseLexicalDeclaration = function(e) {
                    var t = this.createNode(),
                      n = this.nextToken().value;
                    r.assert(
                      "let" === n || "const" === n,
                      "Lexical declaration must be either let or const"
                    );
                    var i = this.parseBindingList(n, e);
                    return (
                      this.consumeSemicolon(),
                      this.finalize(t, new s.VariableDeclaration(i, n))
                    );
                  }),
                  (e.prototype.parseBindingRestElement = function(e, t) {
                    var n = this.createNode();
                    this.expect("...");
                    var r = this.parsePattern(e, t);
                    return this.finalize(n, new s.RestElement(r));
                  }),
                  (e.prototype.parseArrayPattern = function(e, t) {
                    var n = this.createNode();
                    this.expect("[");
                    for (var r = []; !this.match("]"); )
                      if (this.match(",")) this.nextToken(), r.push(null);
                      else {
                        if (this.match("...")) {
                          r.push(this.parseBindingRestElement(e, t));
                          break;
                        }
                        r.push(this.parsePatternWithDefault(e, t)),
                          this.match("]") || this.expect(",");
                      }
                    return (
                      this.expect("]"), this.finalize(n, new s.ArrayPattern(r))
                    );
                  }),
                  (e.prototype.parsePropertyPattern = function(e, t) {
                    var n,
                      r,
                      i = this.createNode(),
                      o = !1,
                      a = !1;
                    if (3 === this.lookahead.type) {
                      var u = this.lookahead;
                      n = this.parseVariableIdentifier();
                      var l = this.finalize(i, new s.Identifier(u.value));
                      if (this.match("=")) {
                        e.push(u), (a = !0), this.nextToken();
                        var c = this.parseAssignmentExpression();
                        r = this.finalize(
                          this.startNode(u),
                          new s.AssignmentPattern(l, c)
                        );
                      } else
                        this.match(":")
                          ? (this.expect(":"),
                            (r = this.parsePatternWithDefault(e, t)))
                          : (e.push(u), (a = !0), (r = l));
                    } else
                      (o = this.match("[")),
                        (n = this.parseObjectPropertyKey()),
                        this.expect(":"),
                        (r = this.parsePatternWithDefault(e, t));
                    return this.finalize(
                      i,
                      new s.Property("init", n, o, r, !1, a)
                    );
                  }),
                  (e.prototype.parseObjectPattern = function(e, t) {
                    var n = this.createNode(),
                      r = [];
                    for (this.expect("{"); !this.match("}"); )
                      r.push(this.parsePropertyPattern(e, t)),
                        this.match("}") || this.expect(",");
                    return (
                      this.expect("}"), this.finalize(n, new s.ObjectPattern(r))
                    );
                  }),
                  (e.prototype.parsePattern = function(e, t) {
                    var n;
                    return (
                      this.match("[")
                        ? (n = this.parseArrayPattern(e, t))
                        : this.match("{")
                        ? (n = this.parseObjectPattern(e, t))
                        : (!this.matchKeyword("let") ||
                            ("const" !== t && "let" !== t) ||
                            this.tolerateUnexpectedToken(
                              this.lookahead,
                              o.Messages.LetInLexicalBinding
                            ),
                          e.push(this.lookahead),
                          (n = this.parseVariableIdentifier(t))),
                      n
                    );
                  }),
                  (e.prototype.parsePatternWithDefault = function(e, t) {
                    var n = this.lookahead,
                      r = this.parsePattern(e, t);
                    if (this.match("=")) {
                      this.nextToken();
                      var i = this.context.allowYield;
                      this.context.allowYield = !0;
                      var o = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      );
                      (this.context.allowYield = i),
                        (r = this.finalize(
                          this.startNode(n),
                          new s.AssignmentPattern(r, o)
                        ));
                    }
                    return r;
                  }),
                  (e.prototype.parseVariableIdentifier = function(e) {
                    var t = this.createNode(),
                      n = this.nextToken();
                    return (
                      4 === n.type && "yield" === n.value
                        ? this.context.strict
                          ? this.tolerateUnexpectedToken(
                              n,
                              o.Messages.StrictReservedWord
                            )
                          : this.context.allowYield ||
                            this.throwUnexpectedToken(n)
                        : 3 !== n.type
                        ? this.context.strict &&
                          4 === n.type &&
                          this.scanner.isStrictModeReservedWord(n.value)
                          ? this.tolerateUnexpectedToken(
                              n,
                              o.Messages.StrictReservedWord
                            )
                          : (this.context.strict ||
                              "let" !== n.value ||
                              "var" !== e) &&
                            this.throwUnexpectedToken(n)
                        : (this.context.isModule || this.context.await) &&
                          3 === n.type &&
                          "await" === n.value &&
                          this.tolerateUnexpectedToken(n),
                      this.finalize(t, new s.Identifier(n.value))
                    );
                  }),
                  (e.prototype.parseVariableDeclaration = function(e) {
                    var t = this.createNode(),
                      n = this.parsePattern([], "var");
                    this.context.strict &&
                      n.type === u.Syntax.Identifier &&
                      this.scanner.isRestrictedWord(n.name) &&
                      this.tolerateError(o.Messages.StrictVarName);
                    var r = null;
                    return (
                      this.match("=")
                        ? (this.nextToken(),
                          (r = this.isolateCoverGrammar(
                            this.parseAssignmentExpression
                          )))
                        : n.type === u.Syntax.Identifier ||
                          e.inFor ||
                          this.expect("="),
                      this.finalize(t, new s.VariableDeclarator(n, r))
                    );
                  }),
                  (e.prototype.parseVariableDeclarationList = function(e) {
                    var t = { inFor: e.inFor },
                      n = [];
                    for (
                      n.push(this.parseVariableDeclaration(t));
                      this.match(",");

                    )
                      this.nextToken(),
                        n.push(this.parseVariableDeclaration(t));
                    return n;
                  }),
                  (e.prototype.parseVariableStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("var");
                    var t = this.parseVariableDeclarationList({ inFor: !1 });
                    return (
                      this.consumeSemicolon(),
                      this.finalize(e, new s.VariableDeclaration(t, "var"))
                    );
                  }),
                  (e.prototype.parseEmptyStatement = function() {
                    var e = this.createNode();
                    return (
                      this.expect(";"), this.finalize(e, new s.EmptyStatement())
                    );
                  }),
                  (e.prototype.parseExpressionStatement = function() {
                    var e = this.createNode(),
                      t = this.parseExpression();
                    return (
                      this.consumeSemicolon(),
                      this.finalize(e, new s.ExpressionStatement(t))
                    );
                  }),
                  (e.prototype.parseIfClause = function() {
                    return (
                      this.context.strict &&
                        this.matchKeyword("function") &&
                        this.tolerateError(o.Messages.StrictFunction),
                      this.parseStatement()
                    );
                  }),
                  (e.prototype.parseIfStatement = function() {
                    var e,
                      t = this.createNode(),
                      n = null;
                    this.expectKeyword("if"), this.expect("(");
                    var r = this.parseExpression();
                    return (
                      !this.match(")") && this.config.tolerant
                        ? (this.tolerateUnexpectedToken(this.nextToken()),
                          (e = this.finalize(
                            this.createNode(),
                            new s.EmptyStatement()
                          )))
                        : (this.expect(")"),
                          (e = this.parseIfClause()),
                          this.matchKeyword("else") &&
                            (this.nextToken(), (n = this.parseIfClause()))),
                      this.finalize(t, new s.IfStatement(r, e, n))
                    );
                  }),
                  (e.prototype.parseDoWhileStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("do");
                    var t = this.context.inIteration;
                    this.context.inIteration = !0;
                    var n = this.parseStatement();
                    (this.context.inIteration = t),
                      this.expectKeyword("while"),
                      this.expect("(");
                    var r = this.parseExpression();
                    return (
                      !this.match(")") && this.config.tolerant
                        ? this.tolerateUnexpectedToken(this.nextToken())
                        : (this.expect(")"),
                          this.match(";") && this.nextToken()),
                      this.finalize(e, new s.DoWhileStatement(n, r))
                    );
                  }),
                  (e.prototype.parseWhileStatement = function() {
                    var e,
                      t = this.createNode();
                    this.expectKeyword("while"), this.expect("(");
                    var n = this.parseExpression();
                    if (!this.match(")") && this.config.tolerant)
                      this.tolerateUnexpectedToken(this.nextToken()),
                        (e = this.finalize(
                          this.createNode(),
                          new s.EmptyStatement()
                        ));
                    else {
                      this.expect(")");
                      var r = this.context.inIteration;
                      (this.context.inIteration = !0),
                        (e = this.parseStatement()),
                        (this.context.inIteration = r);
                    }
                    return this.finalize(t, new s.WhileStatement(n, e));
                  }),
                  (e.prototype.parseForStatement = function() {
                    var e,
                      t,
                      n,
                      r = null,
                      i = null,
                      a = null,
                      l = !0,
                      c = this.createNode();
                    if (
                      (this.expectKeyword("for"),
                      this.expect("("),
                      this.match(";"))
                    )
                      this.nextToken();
                    else if (this.matchKeyword("var")) {
                      (r = this.createNode()), this.nextToken();
                      var h = this.context.allowIn;
                      this.context.allowIn = !1;
                      var p = this.parseVariableDeclarationList({ inFor: !0 });
                      if (
                        ((this.context.allowIn = h),
                        1 === p.length && this.matchKeyword("in"))
                      ) {
                        var f = p[0];
                        f.init &&
                          (f.id.type === u.Syntax.ArrayPattern ||
                            f.id.type === u.Syntax.ObjectPattern ||
                            this.context.strict) &&
                          this.tolerateError(
                            o.Messages.ForInOfLoopInitializer,
                            "for-in"
                          ),
                          (r = this.finalize(
                            r,
                            new s.VariableDeclaration(p, "var")
                          )),
                          this.nextToken(),
                          (e = r),
                          (t = this.parseExpression()),
                          (r = null);
                      } else
                        1 === p.length &&
                        null === p[0].init &&
                        this.matchContextualKeyword("of")
                          ? ((r = this.finalize(
                              r,
                              new s.VariableDeclaration(p, "var")
                            )),
                            this.nextToken(),
                            (e = r),
                            (t = this.parseAssignmentExpression()),
                            (r = null),
                            (l = !1))
                          : ((r = this.finalize(
                              r,
                              new s.VariableDeclaration(p, "var")
                            )),
                            this.expect(";"));
                    } else if (
                      this.matchKeyword("const") ||
                      this.matchKeyword("let")
                    ) {
                      r = this.createNode();
                      var d = this.nextToken().value;
                      if (
                        this.context.strict ||
                        "in" !== this.lookahead.value
                      ) {
                        h = this.context.allowIn;
                        this.context.allowIn = !1;
                        p = this.parseBindingList(d, { inFor: !0 });
                        (this.context.allowIn = h),
                          1 === p.length &&
                          null === p[0].init &&
                          this.matchKeyword("in")
                            ? ((r = this.finalize(
                                r,
                                new s.VariableDeclaration(p, d)
                              )),
                              this.nextToken(),
                              (e = r),
                              (t = this.parseExpression()),
                              (r = null))
                            : 1 === p.length &&
                              null === p[0].init &&
                              this.matchContextualKeyword("of")
                            ? ((r = this.finalize(
                                r,
                                new s.VariableDeclaration(p, d)
                              )),
                              this.nextToken(),
                              (e = r),
                              (t = this.parseAssignmentExpression()),
                              (r = null),
                              (l = !1))
                            : (this.consumeSemicolon(),
                              (r = this.finalize(
                                r,
                                new s.VariableDeclaration(p, d)
                              )));
                      } else
                        (r = this.finalize(r, new s.Identifier(d))),
                          this.nextToken(),
                          (e = r),
                          (t = this.parseExpression()),
                          (r = null);
                    } else {
                      var m = this.lookahead;
                      h = this.context.allowIn;
                      if (
                        ((this.context.allowIn = !1),
                        (r = this.inheritCoverGrammar(
                          this.parseAssignmentExpression
                        )),
                        (this.context.allowIn = h),
                        this.matchKeyword("in"))
                      )
                        (this.context.isAssignmentTarget &&
                          r.type !== u.Syntax.AssignmentExpression) ||
                          this.tolerateError(o.Messages.InvalidLHSInForIn),
                          this.nextToken(),
                          this.reinterpretExpressionAsPattern(r),
                          (e = r),
                          (t = this.parseExpression()),
                          (r = null);
                      else if (this.matchContextualKeyword("of"))
                        (this.context.isAssignmentTarget &&
                          r.type !== u.Syntax.AssignmentExpression) ||
                          this.tolerateError(o.Messages.InvalidLHSInForLoop),
                          this.nextToken(),
                          this.reinterpretExpressionAsPattern(r),
                          (e = r),
                          (t = this.parseAssignmentExpression()),
                          (r = null),
                          (l = !1);
                      else {
                        if (this.match(",")) {
                          for (var g = [r]; this.match(","); )
                            this.nextToken(),
                              g.push(
                                this.isolateCoverGrammar(
                                  this.parseAssignmentExpression
                                )
                              );
                          r = this.finalize(
                            this.startNode(m),
                            new s.SequenceExpression(g)
                          );
                        }
                        this.expect(";");
                      }
                    }
                    if (
                      (void 0 === e &&
                        (this.match(";") || (i = this.parseExpression()),
                        this.expect(";"),
                        this.match(")") || (a = this.parseExpression())),
                      !this.match(")") && this.config.tolerant)
                    )
                      this.tolerateUnexpectedToken(this.nextToken()),
                        (n = this.finalize(
                          this.createNode(),
                          new s.EmptyStatement()
                        ));
                    else {
                      this.expect(")");
                      var v = this.context.inIteration;
                      (this.context.inIteration = !0),
                        (n = this.isolateCoverGrammar(this.parseStatement)),
                        (this.context.inIteration = v);
                    }
                    return void 0 === e
                      ? this.finalize(c, new s.ForStatement(r, i, a, n))
                      : l
                      ? this.finalize(c, new s.ForInStatement(e, t, n))
                      : this.finalize(c, new s.ForOfStatement(e, t, n));
                  }),
                  (e.prototype.parseContinueStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("continue");
                    var t = null;
                    if (3 === this.lookahead.type && !this.hasLineTerminator) {
                      var n = this.parseVariableIdentifier();
                      t = n;
                      var r = "$" + n.name;
                      Object.prototype.hasOwnProperty.call(
                        this.context.labelSet,
                        r
                      ) || this.throwError(o.Messages.UnknownLabel, n.name);
                    }
                    return (
                      this.consumeSemicolon(),
                      null !== t ||
                        this.context.inIteration ||
                        this.throwError(o.Messages.IllegalContinue),
                      this.finalize(e, new s.ContinueStatement(t))
                    );
                  }),
                  (e.prototype.parseBreakStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("break");
                    var t = null;
                    if (3 === this.lookahead.type && !this.hasLineTerminator) {
                      var n = this.parseVariableIdentifier(),
                        r = "$" + n.name;
                      Object.prototype.hasOwnProperty.call(
                        this.context.labelSet,
                        r
                      ) || this.throwError(o.Messages.UnknownLabel, n.name),
                        (t = n);
                    }
                    return (
                      this.consumeSemicolon(),
                      null !== t ||
                        this.context.inIteration ||
                        this.context.inSwitch ||
                        this.throwError(o.Messages.IllegalBreak),
                      this.finalize(e, new s.BreakStatement(t))
                    );
                  }),
                  (e.prototype.parseReturnStatement = function() {
                    this.context.inFunctionBody ||
                      this.tolerateError(o.Messages.IllegalReturn);
                    var e = this.createNode();
                    this.expectKeyword("return");
                    var t =
                      (!this.match(";") &&
                        !this.match("}") &&
                        !this.hasLineTerminator &&
                        2 !== this.lookahead.type) ||
                      8 === this.lookahead.type ||
                      10 === this.lookahead.type
                        ? this.parseExpression()
                        : null;
                    return (
                      this.consumeSemicolon(),
                      this.finalize(e, new s.ReturnStatement(t))
                    );
                  }),
                  (e.prototype.parseWithStatement = function() {
                    this.context.strict &&
                      this.tolerateError(o.Messages.StrictModeWith);
                    var e,
                      t = this.createNode();
                    this.expectKeyword("with"), this.expect("(");
                    var n = this.parseExpression();
                    return (
                      !this.match(")") && this.config.tolerant
                        ? (this.tolerateUnexpectedToken(this.nextToken()),
                          (e = this.finalize(
                            this.createNode(),
                            new s.EmptyStatement()
                          )))
                        : (this.expect(")"), (e = this.parseStatement())),
                      this.finalize(t, new s.WithStatement(n, e))
                    );
                  }),
                  (e.prototype.parseSwitchCase = function() {
                    var e,
                      t = this.createNode();
                    this.matchKeyword("default")
                      ? (this.nextToken(), (e = null))
                      : (this.expectKeyword("case"),
                        (e = this.parseExpression())),
                      this.expect(":");
                    for (
                      var n = [];
                      !(
                        this.match("}") ||
                        this.matchKeyword("default") ||
                        this.matchKeyword("case")
                      );

                    )
                      n.push(this.parseStatementListItem());
                    return this.finalize(t, new s.SwitchCase(e, n));
                  }),
                  (e.prototype.parseSwitchStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("switch"), this.expect("(");
                    var t = this.parseExpression();
                    this.expect(")");
                    var n = this.context.inSwitch;
                    this.context.inSwitch = !0;
                    var r = [],
                      i = !1;
                    for (this.expect("{"); !this.match("}"); ) {
                      var a = this.parseSwitchCase();
                      null === a.test &&
                        (i &&
                          this.throwError(o.Messages.MultipleDefaultsInSwitch),
                        (i = !0)),
                        r.push(a);
                    }
                    return (
                      this.expect("}"),
                      (this.context.inSwitch = n),
                      this.finalize(e, new s.SwitchStatement(t, r))
                    );
                  }),
                  (e.prototype.parseLabelledStatement = function() {
                    var e,
                      t = this.createNode(),
                      n = this.parseExpression();
                    if (n.type === u.Syntax.Identifier && this.match(":")) {
                      this.nextToken();
                      var r = n,
                        i = "$" + r.name;
                      Object.prototype.hasOwnProperty.call(
                        this.context.labelSet,
                        i
                      ) &&
                        this.throwError(
                          o.Messages.Redeclaration,
                          "Label",
                          r.name
                        ),
                        (this.context.labelSet[i] = !0);
                      var a = void 0;
                      if (this.matchKeyword("class"))
                        this.tolerateUnexpectedToken(this.lookahead),
                          (a = this.parseClassDeclaration());
                      else if (this.matchKeyword("function")) {
                        var l = this.lookahead,
                          c = this.parseFunctionDeclaration();
                        this.context.strict
                          ? this.tolerateUnexpectedToken(
                              l,
                              o.Messages.StrictFunction
                            )
                          : c.generator &&
                            this.tolerateUnexpectedToken(
                              l,
                              o.Messages.GeneratorInLegacyContext
                            ),
                          (a = c);
                      } else a = this.parseStatement();
                      delete this.context.labelSet[i],
                        (e = new s.LabeledStatement(r, a));
                    } else
                      this.consumeSemicolon(),
                        (e = new s.ExpressionStatement(n));
                    return this.finalize(t, e);
                  }),
                  (e.prototype.parseThrowStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("throw"),
                      this.hasLineTerminator &&
                        this.throwError(o.Messages.NewlineAfterThrow);
                    var t = this.parseExpression();
                    return (
                      this.consumeSemicolon(),
                      this.finalize(e, new s.ThrowStatement(t))
                    );
                  }),
                  (e.prototype.parseCatchClause = function() {
                    var e = this.createNode();
                    this.expectKeyword("catch"),
                      this.expect("("),
                      this.match(")") &&
                        this.throwUnexpectedToken(this.lookahead);
                    for (
                      var t = [], n = this.parsePattern(t), r = {}, i = 0;
                      i < t.length;
                      i++
                    ) {
                      var a = "$" + t[i].value;
                      Object.prototype.hasOwnProperty.call(r, a) &&
                        this.tolerateError(
                          o.Messages.DuplicateBinding,
                          t[i].value
                        ),
                        (r[a] = !0);
                    }
                    this.context.strict &&
                      n.type === u.Syntax.Identifier &&
                      this.scanner.isRestrictedWord(n.name) &&
                      this.tolerateError(o.Messages.StrictCatchVariable),
                      this.expect(")");
                    var l = this.parseBlock();
                    return this.finalize(e, new s.CatchClause(n, l));
                  }),
                  (e.prototype.parseFinallyClause = function() {
                    return this.expectKeyword("finally"), this.parseBlock();
                  }),
                  (e.prototype.parseTryStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("try");
                    var t = this.parseBlock(),
                      n = this.matchKeyword("catch")
                        ? this.parseCatchClause()
                        : null,
                      r = this.matchKeyword("finally")
                        ? this.parseFinallyClause()
                        : null;
                    return (
                      n || r || this.throwError(o.Messages.NoCatchOrFinally),
                      this.finalize(e, new s.TryStatement(t, n, r))
                    );
                  }),
                  (e.prototype.parseDebuggerStatement = function() {
                    var e = this.createNode();
                    return (
                      this.expectKeyword("debugger"),
                      this.consumeSemicolon(),
                      this.finalize(e, new s.DebuggerStatement())
                    );
                  }),
                  (e.prototype.parseStatement = function() {
                    var e;
                    switch (this.lookahead.type) {
                      case 1:
                      case 5:
                      case 6:
                      case 8:
                      case 10:
                      case 9:
                        e = this.parseExpressionStatement();
                        break;
                      case 7:
                        var t = this.lookahead.value;
                        e =
                          "{" === t
                            ? this.parseBlock()
                            : "(" === t
                            ? this.parseExpressionStatement()
                            : ";" === t
                            ? this.parseEmptyStatement()
                            : this.parseExpressionStatement();
                        break;
                      case 3:
                        e = this.matchAsyncFunction()
                          ? this.parseFunctionDeclaration()
                          : this.parseLabelledStatement();
                        break;
                      case 4:
                        switch (this.lookahead.value) {
                          case "break":
                            e = this.parseBreakStatement();
                            break;
                          case "continue":
                            e = this.parseContinueStatement();
                            break;
                          case "debugger":
                            e = this.parseDebuggerStatement();
                            break;
                          case "do":
                            e = this.parseDoWhileStatement();
                            break;
                          case "for":
                            e = this.parseForStatement();
                            break;
                          case "function":
                            e = this.parseFunctionDeclaration();
                            break;
                          case "if":
                            e = this.parseIfStatement();
                            break;
                          case "return":
                            e = this.parseReturnStatement();
                            break;
                          case "switch":
                            e = this.parseSwitchStatement();
                            break;
                          case "throw":
                            e = this.parseThrowStatement();
                            break;
                          case "try":
                            e = this.parseTryStatement();
                            break;
                          case "var":
                            e = this.parseVariableStatement();
                            break;
                          case "while":
                            e = this.parseWhileStatement();
                            break;
                          case "with":
                            e = this.parseWithStatement();
                            break;
                          default:
                            e = this.parseExpressionStatement();
                        }
                        break;
                      default:
                        e = this.throwUnexpectedToken(this.lookahead);
                    }
                    return e;
                  }),
                  (e.prototype.parseFunctionSourceElements = function() {
                    var e = this.createNode();
                    this.expect("{");
                    var t = this.parseDirectivePrologues(),
                      n = this.context.labelSet,
                      r = this.context.inIteration,
                      i = this.context.inSwitch,
                      o = this.context.inFunctionBody;
                    for (
                      this.context.labelSet = {},
                        this.context.inIteration = !1,
                        this.context.inSwitch = !1,
                        this.context.inFunctionBody = !0;
                      2 !== this.lookahead.type && !this.match("}");

                    )
                      t.push(this.parseStatementListItem());
                    return (
                      this.expect("}"),
                      (this.context.labelSet = n),
                      (this.context.inIteration = r),
                      (this.context.inSwitch = i),
                      (this.context.inFunctionBody = o),
                      this.finalize(e, new s.BlockStatement(t))
                    );
                  }),
                  (e.prototype.validateParam = function(e, t, n) {
                    var r = "$" + n;
                    this.context.strict
                      ? (this.scanner.isRestrictedWord(n) &&
                          ((e.stricted = t),
                          (e.message = o.Messages.StrictParamName)),
                        Object.prototype.hasOwnProperty.call(e.paramSet, r) &&
                          ((e.stricted = t),
                          (e.message = o.Messages.StrictParamDupe)))
                      : e.firstRestricted ||
                        (this.scanner.isRestrictedWord(n)
                          ? ((e.firstRestricted = t),
                            (e.message = o.Messages.StrictParamName))
                          : this.scanner.isStrictModeReservedWord(n)
                          ? ((e.firstRestricted = t),
                            (e.message = o.Messages.StrictReservedWord))
                          : Object.prototype.hasOwnProperty.call(
                              e.paramSet,
                              r
                            ) &&
                            ((e.stricted = t),
                            (e.message = o.Messages.StrictParamDupe))),
                      "function" == typeof Object.defineProperty
                        ? Object.defineProperty(e.paramSet, r, {
                            value: !0,
                            enumerable: !0,
                            writable: !0,
                            configurable: !0,
                          })
                        : (e.paramSet[r] = !0);
                  }),
                  (e.prototype.parseRestElement = function(e) {
                    var t = this.createNode();
                    this.expect("...");
                    var n = this.parsePattern(e);
                    return (
                      this.match("=") &&
                        this.throwError(o.Messages.DefaultRestParameter),
                      this.match(")") ||
                        this.throwError(o.Messages.ParameterAfterRestParameter),
                      this.finalize(t, new s.RestElement(n))
                    );
                  }),
                  (e.prototype.parseFormalParameter = function(e) {
                    for (
                      var t = [],
                        n = this.match("...")
                          ? this.parseRestElement(t)
                          : this.parsePatternWithDefault(t),
                        r = 0;
                      r < t.length;
                      r++
                    )
                      this.validateParam(e, t[r], t[r].value);
                    (e.simple = e.simple && n instanceof s.Identifier),
                      e.params.push(n);
                  }),
                  (e.prototype.parseFormalParameters = function(e) {
                    var t;
                    if (
                      ((t = { simple: !0, params: [], firstRestricted: e }),
                      this.expect("("),
                      !this.match(")"))
                    )
                      for (
                        t.paramSet = {};
                        2 !== this.lookahead.type &&
                        (this.parseFormalParameter(t), !this.match(")")) &&
                        (this.expect(","), !this.match(")"));

                      );
                    return (
                      this.expect(")"),
                      {
                        simple: t.simple,
                        params: t.params,
                        stricted: t.stricted,
                        firstRestricted: t.firstRestricted,
                        message: t.message,
                      }
                    );
                  }),
                  (e.prototype.matchAsyncFunction = function() {
                    var e = this.matchContextualKeyword("async");
                    if (e) {
                      var t = this.scanner.saveState();
                      this.scanner.scanComments();
                      var n = this.scanner.lex();
                      this.scanner.restoreState(t),
                        (e =
                          t.lineNumber === n.lineNumber &&
                          4 === n.type &&
                          "function" === n.value);
                    }
                    return e;
                  }),
                  (e.prototype.parseFunctionDeclaration = function(e) {
                    var t = this.createNode(),
                      n = this.matchContextualKeyword("async");
                    n && this.nextToken(), this.expectKeyword("function");
                    var r,
                      i = !n && this.match("*");
                    i && this.nextToken();
                    var a = null,
                      u = null;
                    if (!e || !this.match("(")) {
                      var l = this.lookahead;
                      (a = this.parseVariableIdentifier()),
                        this.context.strict
                          ? this.scanner.isRestrictedWord(l.value) &&
                            this.tolerateUnexpectedToken(
                              l,
                              o.Messages.StrictFunctionName
                            )
                          : this.scanner.isRestrictedWord(l.value)
                          ? ((u = l), (r = o.Messages.StrictFunctionName))
                          : this.scanner.isStrictModeReservedWord(l.value) &&
                            ((u = l), (r = o.Messages.StrictReservedWord));
                    }
                    var c = this.context.await,
                      h = this.context.allowYield;
                    (this.context.await = n), (this.context.allowYield = !i);
                    var p = this.parseFormalParameters(u),
                      f = p.params,
                      d = p.stricted;
                    (u = p.firstRestricted), p.message && (r = p.message);
                    var m = this.context.strict,
                      g = this.context.allowStrictDirective;
                    this.context.allowStrictDirective = p.simple;
                    var v = this.parseFunctionSourceElements();
                    return (
                      this.context.strict &&
                        u &&
                        this.throwUnexpectedToken(u, r),
                      this.context.strict &&
                        d &&
                        this.tolerateUnexpectedToken(d, r),
                      (this.context.strict = m),
                      (this.context.allowStrictDirective = g),
                      (this.context.await = c),
                      (this.context.allowYield = h),
                      n
                        ? this.finalize(
                            t,
                            new s.AsyncFunctionDeclaration(a, f, v)
                          )
                        : this.finalize(
                            t,
                            new s.FunctionDeclaration(a, f, v, i)
                          )
                    );
                  }),
                  (e.prototype.parseFunctionExpression = function() {
                    var e = this.createNode(),
                      t = this.matchContextualKeyword("async");
                    t && this.nextToken(), this.expectKeyword("function");
                    var n,
                      r = !t && this.match("*");
                    r && this.nextToken();
                    var i,
                      a = null,
                      u = this.context.await,
                      l = this.context.allowYield;
                    if (
                      ((this.context.await = t),
                      (this.context.allowYield = !r),
                      !this.match("("))
                    ) {
                      var c = this.lookahead;
                      (a =
                        this.context.strict || r || !this.matchKeyword("yield")
                          ? this.parseVariableIdentifier()
                          : this.parseIdentifierName()),
                        this.context.strict
                          ? this.scanner.isRestrictedWord(c.value) &&
                            this.tolerateUnexpectedToken(
                              c,
                              o.Messages.StrictFunctionName
                            )
                          : this.scanner.isRestrictedWord(c.value)
                          ? ((i = c), (n = o.Messages.StrictFunctionName))
                          : this.scanner.isStrictModeReservedWord(c.value) &&
                            ((i = c), (n = o.Messages.StrictReservedWord));
                    }
                    var h = this.parseFormalParameters(i),
                      p = h.params,
                      f = h.stricted;
                    (i = h.firstRestricted), h.message && (n = h.message);
                    var d = this.context.strict,
                      m = this.context.allowStrictDirective;
                    this.context.allowStrictDirective = h.simple;
                    var g = this.parseFunctionSourceElements();
                    return (
                      this.context.strict &&
                        i &&
                        this.throwUnexpectedToken(i, n),
                      this.context.strict &&
                        f &&
                        this.tolerateUnexpectedToken(f, n),
                      (this.context.strict = d),
                      (this.context.allowStrictDirective = m),
                      (this.context.await = u),
                      (this.context.allowYield = l),
                      t
                        ? this.finalize(
                            e,
                            new s.AsyncFunctionExpression(a, p, g)
                          )
                        : this.finalize(e, new s.FunctionExpression(a, p, g, r))
                    );
                  }),
                  (e.prototype.parseDirective = function() {
                    var e = this.lookahead,
                      t = this.createNode(),
                      n = this.parseExpression(),
                      r =
                        n.type === u.Syntax.Literal
                          ? this.getTokenRaw(e).slice(1, -1)
                          : null;
                    return (
                      this.consumeSemicolon(),
                      this.finalize(
                        t,
                        r ? new s.Directive(n, r) : new s.ExpressionStatement(n)
                      )
                    );
                  }),
                  (e.prototype.parseDirectivePrologues = function() {
                    for (var e = null, t = []; ; ) {
                      var n = this.lookahead;
                      if (8 !== n.type) break;
                      var r = this.parseDirective();
                      t.push(r);
                      var i = r.directive;
                      if ("string" != typeof i) break;
                      "use strict" === i
                        ? ((this.context.strict = !0),
                          e &&
                            this.tolerateUnexpectedToken(
                              e,
                              o.Messages.StrictOctalLiteral
                            ),
                          this.context.allowStrictDirective ||
                            this.tolerateUnexpectedToken(
                              n,
                              o.Messages.IllegalLanguageModeDirective
                            ))
                        : !e && n.octal && (e = n);
                    }
                    return t;
                  }),
                  (e.prototype.qualifiedPropertyName = function(e) {
                    switch (e.type) {
                      case 3:
                      case 8:
                      case 1:
                      case 5:
                      case 6:
                      case 4:
                        return !0;
                      case 7:
                        return "[" === e.value;
                    }
                    return !1;
                  }),
                  (e.prototype.parseGetterMethod = function() {
                    var e = this.createNode(),
                      t = this.context.allowYield;
                    this.context.allowYield = !0;
                    var n = this.parseFormalParameters();
                    n.params.length > 0 &&
                      this.tolerateError(o.Messages.BadGetterArity);
                    var r = this.parsePropertyMethod(n);
                    return (
                      (this.context.allowYield = t),
                      this.finalize(
                        e,
                        new s.FunctionExpression(null, n.params, r, !1)
                      )
                    );
                  }),
                  (e.prototype.parseSetterMethod = function() {
                    var e = this.createNode(),
                      t = this.context.allowYield;
                    this.context.allowYield = !0;
                    var n = this.parseFormalParameters();
                    1 !== n.params.length
                      ? this.tolerateError(o.Messages.BadSetterArity)
                      : n.params[0] instanceof s.RestElement &&
                        this.tolerateError(o.Messages.BadSetterRestParameter);
                    var r = this.parsePropertyMethod(n);
                    return (
                      (this.context.allowYield = t),
                      this.finalize(
                        e,
                        new s.FunctionExpression(null, n.params, r, !1)
                      )
                    );
                  }),
                  (e.prototype.parseGeneratorMethod = function() {
                    var e = this.createNode(),
                      t = this.context.allowYield;
                    this.context.allowYield = !0;
                    var n = this.parseFormalParameters();
                    this.context.allowYield = !1;
                    var r = this.parsePropertyMethod(n);
                    return (
                      (this.context.allowYield = t),
                      this.finalize(
                        e,
                        new s.FunctionExpression(null, n.params, r, !0)
                      )
                    );
                  }),
                  (e.prototype.isStartOfExpression = function() {
                    var e = !0,
                      t = this.lookahead.value;
                    switch (this.lookahead.type) {
                      case 7:
                        e =
                          "[" === t ||
                          "(" === t ||
                          "{" === t ||
                          "+" === t ||
                          "-" === t ||
                          "!" === t ||
                          "~" === t ||
                          "++" === t ||
                          "--" === t ||
                          "/" === t ||
                          "/=" === t;
                        break;
                      case 4:
                        e =
                          "class" === t ||
                          "delete" === t ||
                          "function" === t ||
                          "let" === t ||
                          "new" === t ||
                          "super" === t ||
                          "this" === t ||
                          "typeof" === t ||
                          "void" === t ||
                          "yield" === t;
                    }
                    return e;
                  }),
                  (e.prototype.parseYieldExpression = function() {
                    var e = this.createNode();
                    this.expectKeyword("yield");
                    var t = null,
                      n = !1;
                    if (!this.hasLineTerminator) {
                      var r = this.context.allowYield;
                      (this.context.allowYield = !1),
                        (n = this.match("*"))
                          ? (this.nextToken(),
                            (t = this.parseAssignmentExpression()))
                          : this.isStartOfExpression() &&
                            (t = this.parseAssignmentExpression()),
                        (this.context.allowYield = r);
                    }
                    return this.finalize(e, new s.YieldExpression(t, n));
                  }),
                  (e.prototype.parseClassElement = function(e) {
                    var t = this.lookahead,
                      n = this.createNode(),
                      r = "",
                      i = null,
                      a = null,
                      u = !1,
                      l = !1,
                      c = !1,
                      h = !1;
                    if (this.match("*")) this.nextToken();
                    else if (
                      ((u = this.match("[")),
                      "static" === (i = this.parseObjectPropertyKey()).name &&
                        (this.qualifiedPropertyName(this.lookahead) ||
                          this.match("*")) &&
                        ((t = this.lookahead),
                        (c = !0),
                        (u = this.match("[")),
                        this.match("*")
                          ? this.nextToken()
                          : (i = this.parseObjectPropertyKey())),
                      3 === t.type &&
                        !this.hasLineTerminator &&
                        "async" === t.value)
                    ) {
                      var p = this.lookahead.value;
                      ":" !== p &&
                        "(" !== p &&
                        "*" !== p &&
                        ((h = !0),
                        (t = this.lookahead),
                        (i = this.parseObjectPropertyKey()),
                        3 === t.type &&
                          "constructor" === t.value &&
                          this.tolerateUnexpectedToken(
                            t,
                            o.Messages.ConstructorIsAsync
                          ));
                    }
                    var f = this.qualifiedPropertyName(this.lookahead);
                    return (
                      3 === t.type
                        ? "get" === t.value && f
                          ? ((r = "get"),
                            (u = this.match("[")),
                            (i = this.parseObjectPropertyKey()),
                            (this.context.allowYield = !1),
                            (a = this.parseGetterMethod()))
                          : "set" === t.value &&
                            f &&
                            ((r = "set"),
                            (u = this.match("[")),
                            (i = this.parseObjectPropertyKey()),
                            (a = this.parseSetterMethod()))
                        : 7 === t.type &&
                          "*" === t.value &&
                          f &&
                          ((r = "init"),
                          (u = this.match("[")),
                          (i = this.parseObjectPropertyKey()),
                          (a = this.parseGeneratorMethod()),
                          (l = !0)),
                      !r &&
                        i &&
                        this.match("(") &&
                        ((r = "init"),
                        (a = h
                          ? this.parsePropertyMethodAsyncFunction()
                          : this.parsePropertyMethodFunction()),
                        (l = !0)),
                      r || this.throwUnexpectedToken(this.lookahead),
                      "init" === r && (r = "method"),
                      u ||
                        (c &&
                          this.isPropertyKey(i, "prototype") &&
                          this.throwUnexpectedToken(
                            t,
                            o.Messages.StaticPrototype
                          ),
                        !c &&
                          this.isPropertyKey(i, "constructor") &&
                          (("method" !== r || !l || (a && a.generator)) &&
                            this.throwUnexpectedToken(
                              t,
                              o.Messages.ConstructorSpecialMethod
                            ),
                          e.value
                            ? this.throwUnexpectedToken(
                                t,
                                o.Messages.DuplicateConstructor
                              )
                            : (e.value = !0),
                          (r = "constructor"))),
                      this.finalize(n, new s.MethodDefinition(i, u, a, r, c))
                    );
                  }),
                  (e.prototype.parseClassElementList = function() {
                    var e = [],
                      t = { value: !1 };
                    for (this.expect("{"); !this.match("}"); )
                      this.match(";")
                        ? this.nextToken()
                        : e.push(this.parseClassElement(t));
                    return this.expect("}"), e;
                  }),
                  (e.prototype.parseClassBody = function() {
                    var e = this.createNode(),
                      t = this.parseClassElementList();
                    return this.finalize(e, new s.ClassBody(t));
                  }),
                  (e.prototype.parseClassDeclaration = function(e) {
                    var t = this.createNode(),
                      n = this.context.strict;
                    (this.context.strict = !0), this.expectKeyword("class");
                    var r =
                        e && 3 !== this.lookahead.type
                          ? null
                          : this.parseVariableIdentifier(),
                      i = null;
                    this.matchKeyword("extends") &&
                      (this.nextToken(),
                      (i = this.isolateCoverGrammar(
                        this.parseLeftHandSideExpressionAllowCall
                      )));
                    var o = this.parseClassBody();
                    return (
                      (this.context.strict = n),
                      this.finalize(t, new s.ClassDeclaration(r, i, o))
                    );
                  }),
                  (e.prototype.parseClassExpression = function() {
                    var e = this.createNode(),
                      t = this.context.strict;
                    (this.context.strict = !0), this.expectKeyword("class");
                    var n =
                        3 === this.lookahead.type
                          ? this.parseVariableIdentifier()
                          : null,
                      r = null;
                    this.matchKeyword("extends") &&
                      (this.nextToken(),
                      (r = this.isolateCoverGrammar(
                        this.parseLeftHandSideExpressionAllowCall
                      )));
                    var i = this.parseClassBody();
                    return (
                      (this.context.strict = t),
                      this.finalize(e, new s.ClassExpression(n, r, i))
                    );
                  }),
                  (e.prototype.parseModule = function() {
                    (this.context.strict = !0),
                      (this.context.isModule = !0),
                      (this.scanner.isModule = !0);
                    for (
                      var e = this.createNode(),
                        t = this.parseDirectivePrologues();
                      2 !== this.lookahead.type;

                    )
                      t.push(this.parseStatementListItem());
                    return this.finalize(e, new s.Module(t));
                  }),
                  (e.prototype.parseScript = function() {
                    for (
                      var e = this.createNode(),
                        t = this.parseDirectivePrologues();
                      2 !== this.lookahead.type;

                    )
                      t.push(this.parseStatementListItem());
                    return this.finalize(e, new s.Script(t));
                  }),
                  (e.prototype.parseModuleSpecifier = function() {
                    var e = this.createNode();
                    8 !== this.lookahead.type &&
                      this.throwError(o.Messages.InvalidModuleSpecifier);
                    var t = this.nextToken(),
                      n = this.getTokenRaw(t);
                    return this.finalize(e, new s.Literal(t.value, n));
                  }),
                  (e.prototype.parseImportSpecifier = function() {
                    var e,
                      t,
                      n = this.createNode();
                    return (
                      3 === this.lookahead.type
                        ? ((t = e = this.parseVariableIdentifier()),
                          this.matchContextualKeyword("as") &&
                            (this.nextToken(),
                            (t = this.parseVariableIdentifier())))
                        : ((t = e = this.parseIdentifierName()),
                          this.matchContextualKeyword("as")
                            ? (this.nextToken(),
                              (t = this.parseVariableIdentifier()))
                            : this.throwUnexpectedToken(this.nextToken())),
                      this.finalize(n, new s.ImportSpecifier(t, e))
                    );
                  }),
                  (e.prototype.parseNamedImports = function() {
                    this.expect("{");
                    for (var e = []; !this.match("}"); )
                      e.push(this.parseImportSpecifier()),
                        this.match("}") || this.expect(",");
                    return this.expect("}"), e;
                  }),
                  (e.prototype.parseImportDefaultSpecifier = function() {
                    var e = this.createNode(),
                      t = this.parseIdentifierName();
                    return this.finalize(e, new s.ImportDefaultSpecifier(t));
                  }),
                  (e.prototype.parseImportNamespaceSpecifier = function() {
                    var e = this.createNode();
                    this.expect("*"),
                      this.matchContextualKeyword("as") ||
                        this.throwError(o.Messages.NoAsAfterImportNamespace),
                      this.nextToken();
                    var t = this.parseIdentifierName();
                    return this.finalize(e, new s.ImportNamespaceSpecifier(t));
                  }),
                  (e.prototype.parseImportDeclaration = function() {
                    this.context.inFunctionBody &&
                      this.throwError(o.Messages.IllegalImportDeclaration);
                    var e,
                      t = this.createNode();
                    this.expectKeyword("import");
                    var n = [];
                    if (8 === this.lookahead.type)
                      e = this.parseModuleSpecifier();
                    else {
                      if (
                        (this.match("{")
                          ? (n = n.concat(this.parseNamedImports()))
                          : this.match("*")
                          ? n.push(this.parseImportNamespaceSpecifier())
                          : this.isIdentifierName(this.lookahead) &&
                            !this.matchKeyword("default")
                          ? (n.push(this.parseImportDefaultSpecifier()),
                            this.match(",") &&
                              (this.nextToken(),
                              this.match("*")
                                ? n.push(this.parseImportNamespaceSpecifier())
                                : this.match("{")
                                ? (n = n.concat(this.parseNamedImports()))
                                : this.throwUnexpectedToken(this.lookahead)))
                          : this.throwUnexpectedToken(this.nextToken()),
                        !this.matchContextualKeyword("from"))
                      ) {
                        var r = this.lookahead.value
                          ? o.Messages.UnexpectedToken
                          : o.Messages.MissingFromClause;
                        this.throwError(r, this.lookahead.value);
                      }
                      this.nextToken(), (e = this.parseModuleSpecifier());
                    }
                    return (
                      this.consumeSemicolon(),
                      this.finalize(t, new s.ImportDeclaration(n, e))
                    );
                  }),
                  (e.prototype.parseExportSpecifier = function() {
                    var e = this.createNode(),
                      t = this.parseIdentifierName(),
                      n = t;
                    return (
                      this.matchContextualKeyword("as") &&
                        (this.nextToken(), (n = this.parseIdentifierName())),
                      this.finalize(e, new s.ExportSpecifier(t, n))
                    );
                  }),
                  (e.prototype.parseExportDeclaration = function() {
                    this.context.inFunctionBody &&
                      this.throwError(o.Messages.IllegalExportDeclaration);
                    var e,
                      t = this.createNode();
                    if (
                      (this.expectKeyword("export"),
                      this.matchKeyword("default"))
                    )
                      if ((this.nextToken(), this.matchKeyword("function"))) {
                        var n = this.parseFunctionDeclaration(!0);
                        e = this.finalize(t, new s.ExportDefaultDeclaration(n));
                      } else if (this.matchKeyword("class")) {
                        n = this.parseClassDeclaration(!0);
                        e = this.finalize(t, new s.ExportDefaultDeclaration(n));
                      } else if (this.matchContextualKeyword("async")) {
                        n = this.matchAsyncFunction()
                          ? this.parseFunctionDeclaration(!0)
                          : this.parseAssignmentExpression();
                        e = this.finalize(t, new s.ExportDefaultDeclaration(n));
                      } else {
                        this.matchContextualKeyword("from") &&
                          this.throwError(
                            o.Messages.UnexpectedToken,
                            this.lookahead.value
                          );
                        n = this.match("{")
                          ? this.parseObjectInitializer()
                          : this.match("[")
                          ? this.parseArrayInitializer()
                          : this.parseAssignmentExpression();
                        this.consumeSemicolon(),
                          (e = this.finalize(
                            t,
                            new s.ExportDefaultDeclaration(n)
                          ));
                      }
                    else if (this.match("*")) {
                      if (
                        (this.nextToken(), !this.matchContextualKeyword("from"))
                      ) {
                        var r = this.lookahead.value
                          ? o.Messages.UnexpectedToken
                          : o.Messages.MissingFromClause;
                        this.throwError(r, this.lookahead.value);
                      }
                      this.nextToken();
                      var i = this.parseModuleSpecifier();
                      this.consumeSemicolon(),
                        (e = this.finalize(t, new s.ExportAllDeclaration(i)));
                    } else if (4 === this.lookahead.type) {
                      n = void 0;
                      switch (this.lookahead.value) {
                        case "let":
                        case "const":
                          n = this.parseLexicalDeclaration({ inFor: !1 });
                          break;
                        case "var":
                        case "class":
                        case "function":
                          n = this.parseStatementListItem();
                          break;
                        default:
                          this.throwUnexpectedToken(this.lookahead);
                      }
                      e = this.finalize(
                        t,
                        new s.ExportNamedDeclaration(n, [], null)
                      );
                    } else if (this.matchAsyncFunction()) {
                      n = this.parseFunctionDeclaration();
                      e = this.finalize(
                        t,
                        new s.ExportNamedDeclaration(n, [], null)
                      );
                    } else {
                      var a = [],
                        u = null,
                        l = !1;
                      for (this.expect("{"); !this.match("}"); )
                        (l = l || this.matchKeyword("default")),
                          a.push(this.parseExportSpecifier()),
                          this.match("}") || this.expect(",");
                      if (
                        (this.expect("}"), this.matchContextualKeyword("from"))
                      )
                        this.nextToken(),
                          (u = this.parseModuleSpecifier()),
                          this.consumeSemicolon();
                      else if (l) {
                        r = this.lookahead.value
                          ? o.Messages.UnexpectedToken
                          : o.Messages.MissingFromClause;
                        this.throwError(r, this.lookahead.value);
                      } else this.consumeSemicolon();
                      e = this.finalize(
                        t,
                        new s.ExportNamedDeclaration(null, a, u)
                      );
                    }
                    return e;
                  }),
                  e
                );
              })();
            t.Parser = c;
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.assert = function(e, t) {
                if (!e) throw new Error("ASSERT: " + t);
              });
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function() {
              function e() {
                (this.errors = []), (this.tolerant = !1);
              }
              return (
                (e.prototype.recordError = function(e) {
                  this.errors.push(e);
                }),
                (e.prototype.tolerate = function(e) {
                  if (!this.tolerant) throw e;
                  this.recordError(e);
                }),
                (e.prototype.constructError = function(e, t) {
                  var n = new Error(e);
                  try {
                    throw n;
                  } catch (r) {
                    Object.create &&
                      Object.defineProperty &&
                      ((n = Object.create(r)),
                      Object.defineProperty(n, "column", { value: t }));
                  }
                  return n;
                }),
                (e.prototype.createError = function(e, t, n, r) {
                  var i = "Line " + t + ": " + r,
                    o = this.constructError(i, n);
                  return (
                    (o.index = e), (o.lineNumber = t), (o.description = r), o
                  );
                }),
                (e.prototype.throwError = function(e, t, n, r) {
                  throw this.createError(e, t, n, r);
                }),
                (e.prototype.tolerateError = function(e, t, n, r) {
                  var i = this.createError(e, t, n, r);
                  if (!this.tolerant) throw i;
                  this.recordError(i);
                }),
                e
              );
            })();
            t.ErrorHandler = n;
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Messages = {
                BadGetterArity: "Getter must not have any formal parameters",
                BadSetterArity: "Setter must have exactly one formal parameter",
                BadSetterRestParameter:
                  "Setter function argument must not be a rest parameter",
                ConstructorIsAsync:
                  "Class constructor may not be an async method",
                ConstructorSpecialMethod:
                  "Class constructor may not be an accessor",
                DeclarationMissingInitializer:
                  "Missing initializer in %0 declaration",
                DefaultRestParameter: "Unexpected token =",
                DuplicateBinding: "Duplicate binding %0",
                DuplicateConstructor: "A class may only have one constructor",
                DuplicateProtoProperty:
                  "Duplicate __proto__ fields are not allowed in object literals",
                ForInOfLoopInitializer:
                  "%0 loop variable declaration may not have an initializer",
                GeneratorInLegacyContext:
                  "Generator declarations are not allowed in legacy contexts",
                IllegalBreak: "Illegal break statement",
                IllegalContinue: "Illegal continue statement",
                IllegalExportDeclaration: "Unexpected token",
                IllegalImportDeclaration: "Unexpected token",
                IllegalLanguageModeDirective:
                  "Illegal 'use strict' directive in function with non-simple parameter list",
                IllegalReturn: "Illegal return statement",
                InvalidEscapedReservedWord:
                  "Keyword must not contain escaped characters",
                InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
                InvalidLHSInAssignment: "Invalid left-hand side in assignment",
                InvalidLHSInForIn: "Invalid left-hand side in for-in",
                InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
                InvalidModuleSpecifier: "Unexpected token",
                InvalidRegExp: "Invalid regular expression",
                LetInLexicalBinding:
                  "let is disallowed as a lexically bound name",
                MissingFromClause: "Unexpected token",
                MultipleDefaultsInSwitch:
                  "More than one default clause in switch statement",
                NewlineAfterThrow: "Illegal newline after throw",
                NoAsAfterImportNamespace: "Unexpected token",
                NoCatchOrFinally: "Missing catch or finally after try",
                ParameterAfterRestParameter:
                  "Rest parameter must be last formal parameter",
                Redeclaration: "%0 '%1' has already been declared",
                StaticPrototype:
                  "Classes may not have static property named prototype",
                StrictCatchVariable:
                  "Catch variable may not be eval or arguments in strict mode",
                StrictDelete:
                  "Delete of an unqualified identifier in strict mode.",
                StrictFunction:
                  "In strict mode code, functions can only be declared at top level or inside a block",
                StrictFunctionName:
                  "Function name may not be eval or arguments in strict mode",
                StrictLHSAssignment:
                  "Assignment to eval or arguments is not allowed in strict mode",
                StrictLHSPostfix:
                  "Postfix increment/decrement may not have eval or arguments operand in strict mode",
                StrictLHSPrefix:
                  "Prefix increment/decrement may not have eval or arguments operand in strict mode",
                StrictModeWith:
                  "Strict mode code may not include a with statement",
                StrictOctalLiteral:
                  "Octal literals are not allowed in strict mode.",
                StrictParamDupe:
                  "Strict mode function may not have duplicate parameter names",
                StrictParamName:
                  "Parameter name eval or arguments is not allowed in strict mode",
                StrictReservedWord:
                  "Use of future reserved word in strict mode",
                StrictVarName:
                  "Variable name may not be eval or arguments in strict mode",
                TemplateOctalLiteral:
                  "Octal literals are not allowed in template strings.",
                UnexpectedEOS: "Unexpected end of input",
                UnexpectedIdentifier: "Unexpected identifier",
                UnexpectedNumber: "Unexpected number",
                UnexpectedReserved: "Unexpected reserved word",
                UnexpectedString: "Unexpected string",
                UnexpectedTemplate: "Unexpected quasi %0",
                UnexpectedToken: "Unexpected token %0",
                UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
                UnknownLabel: "Undefined label '%0'",
                UnterminatedRegExp: "Invalid regular expression: missing /",
              });
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = n(9),
              i = n(4),
              o = n(11);
            function s(e) {
              return "0123456789abcdef".indexOf(e.toLowerCase());
            }
            function a(e) {
              return "01234567".indexOf(e);
            }
            var u = (function() {
              function e(e, t) {
                (this.source = e),
                  (this.errorHandler = t),
                  (this.trackComment = !1),
                  (this.isModule = !1),
                  (this.length = e.length),
                  (this.index = 0),
                  (this.lineNumber = e.length > 0 ? 1 : 0),
                  (this.lineStart = 0),
                  (this.curlyStack = []);
              }
              return (
                (e.prototype.saveState = function() {
                  return {
                    index: this.index,
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                  };
                }),
                (e.prototype.restoreState = function(e) {
                  (this.index = e.index),
                    (this.lineNumber = e.lineNumber),
                    (this.lineStart = e.lineStart);
                }),
                (e.prototype.eof = function() {
                  return this.index >= this.length;
                }),
                (e.prototype.throwUnexpectedToken = function(e) {
                  return (
                    void 0 === e && (e = o.Messages.UnexpectedTokenIllegal),
                    this.errorHandler.throwError(
                      this.index,
                      this.lineNumber,
                      this.index - this.lineStart + 1,
                      e
                    )
                  );
                }),
                (e.prototype.tolerateUnexpectedToken = function(e) {
                  void 0 === e && (e = o.Messages.UnexpectedTokenIllegal),
                    this.errorHandler.tolerateError(
                      this.index,
                      this.lineNumber,
                      this.index - this.lineStart + 1,
                      e
                    );
                }),
                (e.prototype.skipSingleLineComment = function(e) {
                  var t,
                    n,
                    r = [];
                  for (
                    this.trackComment &&
                    ((r = []),
                    (t = this.index - e),
                    (n = {
                      start: {
                        line: this.lineNumber,
                        column: this.index - this.lineStart - e,
                      },
                      end: {},
                    }));
                    !this.eof();

                  ) {
                    var o = this.source.charCodeAt(this.index);
                    if ((++this.index, i.Character.isLineTerminator(o))) {
                      if (this.trackComment) {
                        n.end = {
                          line: this.lineNumber,
                          column: this.index - this.lineStart - 1,
                        };
                        var s = {
                          multiLine: !1,
                          slice: [t + e, this.index - 1],
                          range: [t, this.index - 1],
                          loc: n,
                        };
                        r.push(s);
                      }
                      return (
                        13 === o &&
                          10 === this.source.charCodeAt(this.index) &&
                          ++this.index,
                        ++this.lineNumber,
                        (this.lineStart = this.index),
                        r
                      );
                    }
                  }
                  if (this.trackComment) {
                    n.end = {
                      line: this.lineNumber,
                      column: this.index - this.lineStart,
                    };
                    s = {
                      multiLine: !1,
                      slice: [t + e, this.index],
                      range: [t, this.index],
                      loc: n,
                    };
                    r.push(s);
                  }
                  return r;
                }),
                (e.prototype.skipMultiLineComment = function() {
                  var e,
                    t,
                    n = [];
                  for (
                    this.trackComment &&
                    ((n = []),
                    (e = this.index - 2),
                    (t = {
                      start: {
                        line: this.lineNumber,
                        column: this.index - this.lineStart - 2,
                      },
                      end: {},
                    }));
                    !this.eof();

                  ) {
                    var r = this.source.charCodeAt(this.index);
                    if (i.Character.isLineTerminator(r))
                      13 === r &&
                        10 === this.source.charCodeAt(this.index + 1) &&
                        ++this.index,
                        ++this.lineNumber,
                        ++this.index,
                        (this.lineStart = this.index);
                    else if (42 === r) {
                      if (47 === this.source.charCodeAt(this.index + 1)) {
                        if (((this.index += 2), this.trackComment)) {
                          t.end = {
                            line: this.lineNumber,
                            column: this.index - this.lineStart,
                          };
                          var o = {
                            multiLine: !0,
                            slice: [e + 2, this.index - 2],
                            range: [e, this.index],
                            loc: t,
                          };
                          n.push(o);
                        }
                        return n;
                      }
                      ++this.index;
                    } else ++this.index;
                  }
                  if (this.trackComment) {
                    t.end = {
                      line: this.lineNumber,
                      column: this.index - this.lineStart,
                    };
                    o = {
                      multiLine: !0,
                      slice: [e + 2, this.index],
                      range: [e, this.index],
                      loc: t,
                    };
                    n.push(o);
                  }
                  return this.tolerateUnexpectedToken(), n;
                }),
                (e.prototype.scanComments = function() {
                  var e;
                  this.trackComment && (e = []);
                  for (var t = 0 === this.index; !this.eof(); ) {
                    var n = this.source.charCodeAt(this.index);
                    if (i.Character.isWhiteSpace(n)) ++this.index;
                    else if (i.Character.isLineTerminator(n))
                      ++this.index,
                        13 === n &&
                          10 === this.source.charCodeAt(this.index) &&
                          ++this.index,
                        ++this.lineNumber,
                        (this.lineStart = this.index),
                        (t = !0);
                    else if (47 === n)
                      if (47 === (n = this.source.charCodeAt(this.index + 1))) {
                        this.index += 2;
                        var r = this.skipSingleLineComment(2);
                        this.trackComment && (e = e.concat(r)), (t = !0);
                      } else {
                        if (42 !== n) break;
                        this.index += 2;
                        r = this.skipMultiLineComment();
                        this.trackComment && (e = e.concat(r));
                      }
                    else if (t && 45 === n) {
                      if (
                        45 !== this.source.charCodeAt(this.index + 1) ||
                        62 !== this.source.charCodeAt(this.index + 2)
                      )
                        break;
                      this.index += 3;
                      r = this.skipSingleLineComment(3);
                      this.trackComment && (e = e.concat(r));
                    } else {
                      if (60 !== n || this.isModule) break;
                      if (
                        "!--" !==
                        this.source.slice(this.index + 1, this.index + 4)
                      )
                        break;
                      this.index += 4;
                      r = this.skipSingleLineComment(4);
                      this.trackComment && (e = e.concat(r));
                    }
                  }
                  return e;
                }),
                (e.prototype.isFutureReservedWord = function(e) {
                  switch (e) {
                    case "enum":
                    case "export":
                    case "import":
                    case "super":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (e.prototype.isStrictModeReservedWord = function(e) {
                  switch (e) {
                    case "implements":
                    case "interface":
                    case "package":
                    case "private":
                    case "protected":
                    case "public":
                    case "static":
                    case "yield":
                    case "let":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (e.prototype.isRestrictedWord = function(e) {
                  return "eval" === e || "arguments" === e;
                }),
                (e.prototype.isKeyword = function(e) {
                  switch (e.length) {
                    case 2:
                      return "if" === e || "in" === e || "do" === e;
                    case 3:
                      return (
                        "var" === e ||
                        "for" === e ||
                        "new" === e ||
                        "try" === e ||
                        "let" === e
                      );
                    case 4:
                      return (
                        "this" === e ||
                        "else" === e ||
                        "case" === e ||
                        "void" === e ||
                        "with" === e ||
                        "enum" === e
                      );
                    case 5:
                      return (
                        "while" === e ||
                        "break" === e ||
                        "catch" === e ||
                        "throw" === e ||
                        "const" === e ||
                        "yield" === e ||
                        "class" === e ||
                        "super" === e
                      );
                    case 6:
                      return (
                        "return" === e ||
                        "typeof" === e ||
                        "delete" === e ||
                        "switch" === e ||
                        "export" === e ||
                        "import" === e
                      );
                    case 7:
                      return (
                        "default" === e || "finally" === e || "extends" === e
                      );
                    case 8:
                      return (
                        "function" === e || "continue" === e || "debugger" === e
                      );
                    case 10:
                      return "instanceof" === e;
                    default:
                      return !1;
                  }
                }),
                (e.prototype.codePointAt = function(e) {
                  var t = this.source.charCodeAt(e);
                  if (t >= 55296 && t <= 56319) {
                    var n = this.source.charCodeAt(e + 1);
                    if (n >= 56320 && n <= 57343)
                      t = 1024 * (t - 55296) + n - 56320 + 65536;
                  }
                  return t;
                }),
                (e.prototype.scanHexEscape = function(e) {
                  for (var t = "u" === e ? 4 : 2, n = 0, r = 0; r < t; ++r) {
                    if (
                      this.eof() ||
                      !i.Character.isHexDigit(
                        this.source.charCodeAt(this.index)
                      )
                    )
                      return null;
                    n = 16 * n + s(this.source[this.index++]);
                  }
                  return String.fromCharCode(n);
                }),
                (e.prototype.scanUnicodeCodePointEscape = function() {
                  var e = this.source[this.index],
                    t = 0;
                  for (
                    "}" === e && this.throwUnexpectedToken();
                    !this.eof() &&
                    ((e = this.source[this.index++]),
                    i.Character.isHexDigit(e.charCodeAt(0)));

                  )
                    t = 16 * t + s(e);
                  return (
                    (t > 1114111 || "}" !== e) && this.throwUnexpectedToken(),
                    i.Character.fromCodePoint(t)
                  );
                }),
                (e.prototype.getIdentifier = function() {
                  for (var e = this.index++; !this.eof(); ) {
                    var t = this.source.charCodeAt(this.index);
                    if (92 === t)
                      return (this.index = e), this.getComplexIdentifier();
                    if (t >= 55296 && t < 57343)
                      return (this.index = e), this.getComplexIdentifier();
                    if (!i.Character.isIdentifierPart(t)) break;
                    ++this.index;
                  }
                  return this.source.slice(e, this.index);
                }),
                (e.prototype.getComplexIdentifier = function() {
                  var e,
                    t = this.codePointAt(this.index),
                    n = i.Character.fromCodePoint(t);
                  for (
                    this.index += n.length,
                      92 === t &&
                        (117 !== this.source.charCodeAt(this.index) &&
                          this.throwUnexpectedToken(),
                        ++this.index,
                        "{" === this.source[this.index]
                          ? (++this.index,
                            (e = this.scanUnicodeCodePointEscape()))
                          : (null !== (e = this.scanHexEscape("u")) &&
                              "\\" !== e &&
                              i.Character.isIdentifierStart(e.charCodeAt(0))) ||
                            this.throwUnexpectedToken(),
                        (n = e));
                    !this.eof() &&
                    ((t = this.codePointAt(this.index)),
                    i.Character.isIdentifierPart(t));

                  )
                    (n += e = i.Character.fromCodePoint(t)),
                      (this.index += e.length),
                      92 === t &&
                        ((n = n.substr(0, n.length - 1)),
                        117 !== this.source.charCodeAt(this.index) &&
                          this.throwUnexpectedToken(),
                        ++this.index,
                        "{" === this.source[this.index]
                          ? (++this.index,
                            (e = this.scanUnicodeCodePointEscape()))
                          : (null !== (e = this.scanHexEscape("u")) &&
                              "\\" !== e &&
                              i.Character.isIdentifierPart(e.charCodeAt(0))) ||
                            this.throwUnexpectedToken(),
                        (n += e));
                  return n;
                }),
                (e.prototype.octalToDecimal = function(e) {
                  var t = "0" !== e,
                    n = a(e);
                  return (
                    !this.eof() &&
                      i.Character.isOctalDigit(
                        this.source.charCodeAt(this.index)
                      ) &&
                      ((t = !0),
                      (n = 8 * n + a(this.source[this.index++])),
                      "0123".indexOf(e) >= 0 &&
                        !this.eof() &&
                        i.Character.isOctalDigit(
                          this.source.charCodeAt(this.index)
                        ) &&
                        (n = 8 * n + a(this.source[this.index++]))),
                    { code: n, octal: t }
                  );
                }),
                (e.prototype.scanIdentifier = function() {
                  var e,
                    t = this.index,
                    n =
                      92 === this.source.charCodeAt(t)
                        ? this.getComplexIdentifier()
                        : this.getIdentifier();
                  if (
                    3 !==
                      (e =
                        1 === n.length
                          ? 3
                          : this.isKeyword(n)
                          ? 4
                          : "null" === n
                          ? 5
                          : "true" === n || "false" === n
                          ? 1
                          : 3) &&
                    t + n.length !== this.index
                  ) {
                    var r = this.index;
                    (this.index = t),
                      this.tolerateUnexpectedToken(
                        o.Messages.InvalidEscapedReservedWord
                      ),
                      (this.index = r);
                  }
                  return {
                    type: e,
                    value: n,
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start: t,
                    end: this.index,
                  };
                }),
                (e.prototype.scanPunctuator = function() {
                  var e = this.index,
                    t = this.source[this.index];
                  switch (t) {
                    case "(":
                    case "{":
                      "{" === t && this.curlyStack.push("{"), ++this.index;
                      break;
                    case ".":
                      ++this.index,
                        "." === this.source[this.index] &&
                          "." === this.source[this.index + 1] &&
                          ((this.index += 2), (t = "..."));
                      break;
                    case "}":
                      ++this.index, this.curlyStack.pop();
                      break;
                    case ")":
                    case ";":
                    case ",":
                    case "[":
                    case "]":
                    case ":":
                    case "?":
                    case "~":
                      ++this.index;
                      break;
                    default:
                      ">>>=" === (t = this.source.substr(this.index, 4))
                        ? (this.index += 4)
                        : "===" === (t = t.substr(0, 3)) ||
                          "!==" === t ||
                          ">>>" === t ||
                          "<<=" === t ||
                          ">>=" === t ||
                          "**=" === t
                        ? (this.index += 3)
                        : "&&" === (t = t.substr(0, 2)) ||
                          "||" === t ||
                          "==" === t ||
                          "!=" === t ||
                          "+=" === t ||
                          "-=" === t ||
                          "*=" === t ||
                          "/=" === t ||
                          "++" === t ||
                          "--" === t ||
                          "<<" === t ||
                          ">>" === t ||
                          "&=" === t ||
                          "|=" === t ||
                          "^=" === t ||
                          "%=" === t ||
                          "<=" === t ||
                          ">=" === t ||
                          "=>" === t ||
                          "**" === t
                        ? (this.index += 2)
                        : ((t = this.source[this.index]),
                          "<>=!+-*%&|^/".indexOf(t) >= 0 && ++this.index);
                  }
                  return (
                    this.index === e && this.throwUnexpectedToken(),
                    {
                      type: 7,
                      value: t,
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: e,
                      end: this.index,
                    }
                  );
                }),
                (e.prototype.scanHexLiteral = function(e) {
                  for (
                    var t = "";
                    !this.eof() &&
                    i.Character.isHexDigit(this.source.charCodeAt(this.index));

                  )
                    t += this.source[this.index++];
                  return (
                    0 === t.length && this.throwUnexpectedToken(),
                    i.Character.isIdentifierStart(
                      this.source.charCodeAt(this.index)
                    ) && this.throwUnexpectedToken(),
                    {
                      type: 6,
                      value: parseInt("0x" + t, 16),
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: e,
                      end: this.index,
                    }
                  );
                }),
                (e.prototype.scanBinaryLiteral = function(e) {
                  for (
                    var t, n = "";
                    !this.eof() &&
                    ("0" === (t = this.source[this.index]) || "1" === t);

                  )
                    n += this.source[this.index++];
                  return (
                    0 === n.length && this.throwUnexpectedToken(),
                    this.eof() ||
                      ((t = this.source.charCodeAt(this.index)),
                      (i.Character.isIdentifierStart(t) ||
                        i.Character.isDecimalDigit(t)) &&
                        this.throwUnexpectedToken()),
                    {
                      type: 6,
                      value: parseInt(n, 2),
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: e,
                      end: this.index,
                    }
                  );
                }),
                (e.prototype.scanOctalLiteral = function(e, t) {
                  var n = "",
                    r = !1;
                  for (
                    i.Character.isOctalDigit(e.charCodeAt(0))
                      ? ((r = !0), (n = "0" + this.source[this.index++]))
                      : ++this.index;
                    !this.eof() &&
                    i.Character.isOctalDigit(
                      this.source.charCodeAt(this.index)
                    );

                  )
                    n += this.source[this.index++];
                  return (
                    r || 0 !== n.length || this.throwUnexpectedToken(),
                    (i.Character.isIdentifierStart(
                      this.source.charCodeAt(this.index)
                    ) ||
                      i.Character.isDecimalDigit(
                        this.source.charCodeAt(this.index)
                      )) &&
                      this.throwUnexpectedToken(),
                    {
                      type: 6,
                      value: parseInt(n, 8),
                      octal: r,
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: t,
                      end: this.index,
                    }
                  );
                }),
                (e.prototype.isImplicitOctalLiteral = function() {
                  for (var e = this.index + 1; e < this.length; ++e) {
                    var t = this.source[e];
                    if ("8" === t || "9" === t) return !1;
                    if (!i.Character.isOctalDigit(t.charCodeAt(0))) return !0;
                  }
                  return !0;
                }),
                (e.prototype.scanNumericLiteral = function() {
                  var e = this.index,
                    t = this.source[e];
                  r.assert(
                    i.Character.isDecimalDigit(t.charCodeAt(0)) || "." === t,
                    "Numeric literal must start with a decimal digit or a decimal point"
                  );
                  var n = "";
                  if ("." !== t) {
                    if (
                      ((n = this.source[this.index++]),
                      (t = this.source[this.index]),
                      "0" === n)
                    ) {
                      if ("x" === t || "X" === t)
                        return ++this.index, this.scanHexLiteral(e);
                      if ("b" === t || "B" === t)
                        return ++this.index, this.scanBinaryLiteral(e);
                      if ("o" === t || "O" === t)
                        return this.scanOctalLiteral(t, e);
                      if (
                        t &&
                        i.Character.isOctalDigit(t.charCodeAt(0)) &&
                        this.isImplicitOctalLiteral()
                      )
                        return this.scanOctalLiteral(t, e);
                    }
                    for (
                      ;
                      i.Character.isDecimalDigit(
                        this.source.charCodeAt(this.index)
                      );

                    )
                      n += this.source[this.index++];
                    t = this.source[this.index];
                  }
                  if ("." === t) {
                    for (
                      n += this.source[this.index++];
                      i.Character.isDecimalDigit(
                        this.source.charCodeAt(this.index)
                      );

                    )
                      n += this.source[this.index++];
                    t = this.source[this.index];
                  }
                  if ("e" === t || "E" === t)
                    if (
                      ((n += this.source[this.index++]),
                      ("+" !== (t = this.source[this.index]) && "-" !== t) ||
                        (n += this.source[this.index++]),
                      i.Character.isDecimalDigit(
                        this.source.charCodeAt(this.index)
                      ))
                    )
                      for (
                        ;
                        i.Character.isDecimalDigit(
                          this.source.charCodeAt(this.index)
                        );

                      )
                        n += this.source[this.index++];
                    else this.throwUnexpectedToken();
                  return (
                    i.Character.isIdentifierStart(
                      this.source.charCodeAt(this.index)
                    ) && this.throwUnexpectedToken(),
                    {
                      type: 6,
                      value: parseFloat(n),
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: e,
                      end: this.index,
                    }
                  );
                }),
                (e.prototype.scanStringLiteral = function() {
                  var e = this.index,
                    t = this.source[e];
                  r.assert(
                    "'" === t || '"' === t,
                    "String literal must starts with a quote"
                  ),
                    ++this.index;
                  for (var n = !1, s = ""; !this.eof(); ) {
                    var a = this.source[this.index++];
                    if (a === t) {
                      t = "";
                      break;
                    }
                    if ("\\" === a)
                      if (
                        (a = this.source[this.index++]) &&
                        i.Character.isLineTerminator(a.charCodeAt(0))
                      )
                        ++this.lineNumber,
                          "\r" === a &&
                            "\n" === this.source[this.index] &&
                            ++this.index,
                          (this.lineStart = this.index);
                      else
                        switch (a) {
                          case "u":
                            if ("{" === this.source[this.index])
                              ++this.index,
                                (s += this.scanUnicodeCodePointEscape());
                            else {
                              var u = this.scanHexEscape(a);
                              null === u && this.throwUnexpectedToken(),
                                (s += u);
                            }
                            break;
                          case "x":
                            var l = this.scanHexEscape(a);
                            null === l &&
                              this.throwUnexpectedToken(
                                o.Messages.InvalidHexEscapeSequence
                              ),
                              (s += l);
                            break;
                          case "n":
                            s += "\n";
                            break;
                          case "r":
                            s += "\r";
                            break;
                          case "t":
                            s += "\t";
                            break;
                          case "b":
                            s += "\b";
                            break;
                          case "f":
                            s += "\f";
                            break;
                          case "v":
                            s += "\v";
                            break;
                          case "8":
                          case "9":
                            (s += a), this.tolerateUnexpectedToken();
                            break;
                          default:
                            if (
                              a &&
                              i.Character.isOctalDigit(a.charCodeAt(0))
                            ) {
                              var c = this.octalToDecimal(a);
                              (n = c.octal || n),
                                (s += String.fromCharCode(c.code));
                            } else s += a;
                        }
                    else {
                      if (i.Character.isLineTerminator(a.charCodeAt(0))) break;
                      s += a;
                    }
                  }
                  return (
                    "" !== t && ((this.index = e), this.throwUnexpectedToken()),
                    {
                      type: 8,
                      value: s,
                      octal: n,
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: e,
                      end: this.index,
                    }
                  );
                }),
                (e.prototype.scanTemplate = function() {
                  var e = "",
                    t = !1,
                    n = this.index,
                    r = "`" === this.source[n],
                    s = !1,
                    a = 2;
                  for (++this.index; !this.eof(); ) {
                    var u = this.source[this.index++];
                    if ("`" === u) {
                      (a = 1), (s = !0), (t = !0);
                      break;
                    }
                    if ("$" === u) {
                      if ("{" === this.source[this.index]) {
                        this.curlyStack.push("${"), ++this.index, (t = !0);
                        break;
                      }
                      e += u;
                    } else if ("\\" === u)
                      if (
                        ((u = this.source[this.index++]),
                        i.Character.isLineTerminator(u.charCodeAt(0)))
                      )
                        ++this.lineNumber,
                          "\r" === u &&
                            "\n" === this.source[this.index] &&
                            ++this.index,
                          (this.lineStart = this.index);
                      else
                        switch (u) {
                          case "n":
                            e += "\n";
                            break;
                          case "r":
                            e += "\r";
                            break;
                          case "t":
                            e += "\t";
                            break;
                          case "u":
                            if ("{" === this.source[this.index])
                              ++this.index,
                                (e += this.scanUnicodeCodePointEscape());
                            else {
                              var l = this.index,
                                c = this.scanHexEscape(u);
                              null !== c
                                ? (e += c)
                                : ((this.index = l), (e += u));
                            }
                            break;
                          case "x":
                            var h = this.scanHexEscape(u);
                            null === h &&
                              this.throwUnexpectedToken(
                                o.Messages.InvalidHexEscapeSequence
                              ),
                              (e += h);
                            break;
                          case "b":
                            e += "\b";
                            break;
                          case "f":
                            e += "\f";
                            break;
                          case "v":
                            e += "\v";
                            break;
                          default:
                            "0" === u
                              ? (i.Character.isDecimalDigit(
                                  this.source.charCodeAt(this.index)
                                ) &&
                                  this.throwUnexpectedToken(
                                    o.Messages.TemplateOctalLiteral
                                  ),
                                (e += "\0"))
                              : i.Character.isOctalDigit(u.charCodeAt(0))
                              ? this.throwUnexpectedToken(
                                  o.Messages.TemplateOctalLiteral
                                )
                              : (e += u);
                        }
                    else
                      i.Character.isLineTerminator(u.charCodeAt(0))
                        ? (++this.lineNumber,
                          "\r" === u &&
                            "\n" === this.source[this.index] &&
                            ++this.index,
                          (this.lineStart = this.index),
                          (e += "\n"))
                        : (e += u);
                  }
                  return (
                    t || this.throwUnexpectedToken(),
                    r || this.curlyStack.pop(),
                    {
                      type: 10,
                      value: this.source.slice(n + 1, this.index - a),
                      cooked: e,
                      head: r,
                      tail: s,
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: n,
                      end: this.index,
                    }
                  );
                }),
                (e.prototype.testRegExp = function(e, t) {
                  var n = e,
                    r = this;
                  t.indexOf("u") >= 0 &&
                    (n = n
                      .replace(
                        /\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,
                        function(e, t, n) {
                          var i = parseInt(t || n, 16);
                          return (
                            i > 1114111 &&
                              r.throwUnexpectedToken(o.Messages.InvalidRegExp),
                            i <= 65535 ? String.fromCharCode(i) : "￿"
                          );
                        }
                      )
                      .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "￿"));
                  try {
                    RegExp(n);
                  } catch (i) {
                    this.throwUnexpectedToken(o.Messages.InvalidRegExp);
                  }
                  try {
                    return new RegExp(e, t);
                  } catch (s) {
                    return null;
                  }
                }),
                (e.prototype.scanRegExpBody = function() {
                  var e = this.source[this.index];
                  r.assert(
                    "/" === e,
                    "Regular expression literal must start with a slash"
                  );
                  for (
                    var t = this.source[this.index++], n = !1, s = !1;
                    !this.eof();

                  )
                    if (((t += e = this.source[this.index++]), "\\" === e))
                      (e = this.source[this.index++]),
                        i.Character.isLineTerminator(e.charCodeAt(0)) &&
                          this.throwUnexpectedToken(
                            o.Messages.UnterminatedRegExp
                          ),
                        (t += e);
                    else if (i.Character.isLineTerminator(e.charCodeAt(0)))
                      this.throwUnexpectedToken(o.Messages.UnterminatedRegExp);
                    else if (n) "]" === e && (n = !1);
                    else {
                      if ("/" === e) {
                        s = !0;
                        break;
                      }
                      "[" === e && (n = !0);
                    }
                  return (
                    s ||
                      this.throwUnexpectedToken(o.Messages.UnterminatedRegExp),
                    t.substr(1, t.length - 2)
                  );
                }),
                (e.prototype.scanRegExpFlags = function() {
                  for (var e = ""; !this.eof(); ) {
                    var t = this.source[this.index];
                    if (!i.Character.isIdentifierPart(t.charCodeAt(0))) break;
                    if ((++this.index, "\\" !== t || this.eof())) (e += t), t;
                    else if ("u" === (t = this.source[this.index])) {
                      ++this.index;
                      var n = this.index,
                        r = this.scanHexEscape("u");
                      if (null !== r)
                        for (e += r, "\\u"; n < this.index; ++n) this.source[n];
                      else (this.index = n), (e += "u"), "\\u";
                      this.tolerateUnexpectedToken();
                    } else "\\", this.tolerateUnexpectedToken();
                  }
                  return e;
                }),
                (e.prototype.scanRegExp = function() {
                  var e = this.index,
                    t = this.scanRegExpBody(),
                    n = this.scanRegExpFlags();
                  return {
                    type: 9,
                    value: "",
                    pattern: t,
                    flags: n,
                    regex: this.testRegExp(t, n),
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start: e,
                    end: this.index,
                  };
                }),
                (e.prototype.lex = function() {
                  if (this.eof())
                    return {
                      type: 2,
                      value: "",
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: this.index,
                      end: this.index,
                    };
                  var e = this.source.charCodeAt(this.index);
                  return i.Character.isIdentifierStart(e)
                    ? this.scanIdentifier()
                    : 40 === e || 41 === e || 59 === e
                    ? this.scanPunctuator()
                    : 39 === e || 34 === e
                    ? this.scanStringLiteral()
                    : 46 === e
                    ? i.Character.isDecimalDigit(
                        this.source.charCodeAt(this.index + 1)
                      )
                      ? this.scanNumericLiteral()
                      : this.scanPunctuator()
                    : i.Character.isDecimalDigit(e)
                    ? this.scanNumericLiteral()
                    : 96 === e ||
                      (125 === e &&
                        "${" === this.curlyStack[this.curlyStack.length - 1])
                    ? this.scanTemplate()
                    : e >= 55296 &&
                      e < 57343 &&
                      i.Character.isIdentifierStart(
                        this.codePointAt(this.index)
                      )
                    ? this.scanIdentifier()
                    : this.scanPunctuator();
                }),
                e
              );
            })();
            t.Scanner = u;
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.TokenName = {}),
              (t.TokenName[1] = "Boolean"),
              (t.TokenName[2] = "<end>"),
              (t.TokenName[3] = "Identifier"),
              (t.TokenName[4] = "Keyword"),
              (t.TokenName[5] = "Null"),
              (t.TokenName[6] = "Numeric"),
              (t.TokenName[7] = "Punctuator"),
              (t.TokenName[8] = "String"),
              (t.TokenName[9] = "RegularExpression"),
              (t.TokenName[10] = "Template");
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.XHTMLEntities = {
                quot: '"',
                amp: "&",
                apos: "'",
                gt: ">",
                nbsp: " ",
                iexcl: "¡",
                cent: "¢",
                pound: "£",
                curren: "¤",
                yen: "¥",
                brvbar: "¦",
                sect: "§",
                uml: "¨",
                copy: "©",
                ordf: "ª",
                laquo: "«",
                not: "¬",
                shy: "­",
                reg: "®",
                macr: "¯",
                deg: "°",
                plusmn: "±",
                sup2: "²",
                sup3: "³",
                acute: "´",
                micro: "µ",
                para: "¶",
                middot: "·",
                cedil: "¸",
                sup1: "¹",
                ordm: "º",
                raquo: "»",
                frac14: "¼",
                frac12: "½",
                frac34: "¾",
                iquest: "¿",
                Agrave: "À",
                Aacute: "Á",
                Acirc: "Â",
                Atilde: "Ã",
                Auml: "Ä",
                Aring: "Å",
                AElig: "Æ",
                Ccedil: "Ç",
                Egrave: "È",
                Eacute: "É",
                Ecirc: "Ê",
                Euml: "Ë",
                Igrave: "Ì",
                Iacute: "Í",
                Icirc: "Î",
                Iuml: "Ï",
                ETH: "Ð",
                Ntilde: "Ñ",
                Ograve: "Ò",
                Oacute: "Ó",
                Ocirc: "Ô",
                Otilde: "Õ",
                Ouml: "Ö",
                times: "×",
                Oslash: "Ø",
                Ugrave: "Ù",
                Uacute: "Ú",
                Ucirc: "Û",
                Uuml: "Ü",
                Yacute: "Ý",
                THORN: "Þ",
                szlig: "ß",
                agrave: "à",
                aacute: "á",
                acirc: "â",
                atilde: "ã",
                auml: "ä",
                aring: "å",
                aelig: "æ",
                ccedil: "ç",
                egrave: "è",
                eacute: "é",
                ecirc: "ê",
                euml: "ë",
                igrave: "ì",
                iacute: "í",
                icirc: "î",
                iuml: "ï",
                eth: "ð",
                ntilde: "ñ",
                ograve: "ò",
                oacute: "ó",
                ocirc: "ô",
                otilde: "õ",
                ouml: "ö",
                divide: "÷",
                oslash: "ø",
                ugrave: "ù",
                uacute: "ú",
                ucirc: "û",
                uuml: "ü",
                yacute: "ý",
                thorn: "þ",
                yuml: "ÿ",
                OElig: "Œ",
                oelig: "œ",
                Scaron: "Š",
                scaron: "š",
                Yuml: "Ÿ",
                fnof: "ƒ",
                circ: "ˆ",
                tilde: "˜",
                Alpha: "Α",
                Beta: "Β",
                Gamma: "Γ",
                Delta: "Δ",
                Epsilon: "Ε",
                Zeta: "Ζ",
                Eta: "Η",
                Theta: "Θ",
                Iota: "Ι",
                Kappa: "Κ",
                Lambda: "Λ",
                Mu: "Μ",
                Nu: "Ν",
                Xi: "Ξ",
                Omicron: "Ο",
                Pi: "Π",
                Rho: "Ρ",
                Sigma: "Σ",
                Tau: "Τ",
                Upsilon: "Υ",
                Phi: "Φ",
                Chi: "Χ",
                Psi: "Ψ",
                Omega: "Ω",
                alpha: "α",
                beta: "β",
                gamma: "γ",
                delta: "δ",
                epsilon: "ε",
                zeta: "ζ",
                eta: "η",
                theta: "θ",
                iota: "ι",
                kappa: "κ",
                lambda: "λ",
                mu: "μ",
                nu: "ν",
                xi: "ξ",
                omicron: "ο",
                pi: "π",
                rho: "ρ",
                sigmaf: "ς",
                sigma: "σ",
                tau: "τ",
                upsilon: "υ",
                phi: "φ",
                chi: "χ",
                psi: "ψ",
                omega: "ω",
                thetasym: "ϑ",
                upsih: "ϒ",
                piv: "ϖ",
                ensp: " ",
                emsp: " ",
                thinsp: " ",
                zwnj: "‌",
                zwj: "‍",
                lrm: "‎",
                rlm: "‏",
                ndash: "–",
                mdash: "—",
                lsquo: "‘",
                rsquo: "’",
                sbquo: "‚",
                ldquo: "“",
                rdquo: "”",
                bdquo: "„",
                dagger: "†",
                Dagger: "‡",
                bull: "•",
                hellip: "…",
                permil: "‰",
                prime: "′",
                Prime: "″",
                lsaquo: "‹",
                rsaquo: "›",
                oline: "‾",
                frasl: "⁄",
                euro: "€",
                image: "ℑ",
                weierp: "℘",
                real: "ℜ",
                trade: "™",
                alefsym: "ℵ",
                larr: "←",
                uarr: "↑",
                rarr: "→",
                darr: "↓",
                harr: "↔",
                crarr: "↵",
                lArr: "⇐",
                uArr: "⇑",
                rArr: "⇒",
                dArr: "⇓",
                hArr: "⇔",
                forall: "∀",
                part: "∂",
                exist: "∃",
                empty: "∅",
                nabla: "∇",
                isin: "∈",
                notin: "∉",
                ni: "∋",
                prod: "∏",
                sum: "∑",
                minus: "−",
                lowast: "∗",
                radic: "√",
                prop: "∝",
                infin: "∞",
                ang: "∠",
                and: "∧",
                or: "∨",
                cap: "∩",
                cup: "∪",
                int: "∫",
                there4: "∴",
                sim: "∼",
                cong: "≅",
                asymp: "≈",
                ne: "≠",
                equiv: "≡",
                le: "≤",
                ge: "≥",
                sub: "⊂",
                sup: "⊃",
                nsub: "⊄",
                sube: "⊆",
                supe: "⊇",
                oplus: "⊕",
                otimes: "⊗",
                perp: "⊥",
                sdot: "⋅",
                lceil: "⌈",
                rceil: "⌉",
                lfloor: "⌊",
                rfloor: "⌋",
                loz: "◊",
                spades: "♠",
                clubs: "♣",
                hearts: "♥",
                diams: "♦",
                lang: "⟨",
                rang: "⟩",
              });
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = n(10),
              i = n(12),
              o = n(13),
              s = (function() {
                function e() {
                  (this.values = []), (this.curly = this.paren = -1);
                }
                return (
                  (e.prototype.beforeFunctionExpression = function(e) {
                    return (
                      [
                        "(",
                        "{",
                        "[",
                        "in",
                        "typeof",
                        "instanceof",
                        "new",
                        "return",
                        "case",
                        "delete",
                        "throw",
                        "void",
                        "=",
                        "+=",
                        "-=",
                        "*=",
                        "**=",
                        "/=",
                        "%=",
                        "<<=",
                        ">>=",
                        ">>>=",
                        "&=",
                        "|=",
                        "^=",
                        ",",
                        "+",
                        "-",
                        "*",
                        "**",
                        "/",
                        "%",
                        "++",
                        "--",
                        "<<",
                        ">>",
                        ">>>",
                        "&",
                        "|",
                        "^",
                        "!",
                        "~",
                        "&&",
                        "||",
                        "?",
                        ":",
                        "===",
                        "==",
                        ">=",
                        "<=",
                        "<",
                        ">",
                        "!=",
                        "!==",
                      ].indexOf(e) >= 0
                    );
                  }),
                  (e.prototype.isRegexStart = function() {
                    var e = this.values[this.values.length - 1],
                      t = null !== e;
                    switch (e) {
                      case "this":
                      case "]":
                        t = !1;
                        break;
                      case ")":
                        var n = this.values[this.paren - 1];
                        t =
                          "if" === n ||
                          "while" === n ||
                          "for" === n ||
                          "with" === n;
                        break;
                      case "}":
                        if (
                          ((t = !1), "function" === this.values[this.curly - 3])
                        )
                          t =
                            !!(r = this.values[this.curly - 4]) &&
                            !this.beforeFunctionExpression(r);
                        else if ("function" === this.values[this.curly - 4]) {
                          var r;
                          t =
                            !(r = this.values[this.curly - 5]) ||
                            !this.beforeFunctionExpression(r);
                        }
                    }
                    return t;
                  }),
                  (e.prototype.push = function(e) {
                    7 === e.type || 4 === e.type
                      ? ("{" === e.value
                          ? (this.curly = this.values.length)
                          : "(" === e.value &&
                            (this.paren = this.values.length),
                        this.values.push(e.value))
                      : this.values.push(null);
                  }),
                  e
                );
              })(),
              a = (function() {
                function e(e, t) {
                  (this.errorHandler = new r.ErrorHandler()),
                    (this.errorHandler.tolerant =
                      !!t && ("boolean" == typeof t.tolerant && t.tolerant)),
                    (this.scanner = new i.Scanner(e, this.errorHandler)),
                    (this.scanner.trackComment =
                      !!t && ("boolean" == typeof t.comment && t.comment)),
                    (this.trackRange =
                      !!t && ("boolean" == typeof t.range && t.range)),
                    (this.trackLoc =
                      !!t && ("boolean" == typeof t.loc && t.loc)),
                    (this.buffer = []),
                    (this.reader = new s());
                }
                return (
                  (e.prototype.errors = function() {
                    return this.errorHandler.errors;
                  }),
                  (e.prototype.getNextToken = function() {
                    if (0 === this.buffer.length) {
                      var e = this.scanner.scanComments();
                      if (this.scanner.trackComment)
                        for (var t = 0; t < e.length; ++t) {
                          var n = e[t],
                            r = this.scanner.source.slice(
                              n.slice[0],
                              n.slice[1]
                            ),
                            i = {
                              type: n.multiLine
                                ? "BlockComment"
                                : "LineComment",
                              value: r,
                            };
                          this.trackRange && (i.range = n.range),
                            this.trackLoc && (i.loc = n.loc),
                            this.buffer.push(i);
                        }
                      if (!this.scanner.eof()) {
                        var s = void 0;
                        this.trackLoc &&
                          (s = {
                            start: {
                              line: this.scanner.lineNumber,
                              column:
                                this.scanner.index - this.scanner.lineStart,
                            },
                            end: {},
                          });
                        var a =
                          "/" === this.scanner.source[this.scanner.index] &&
                          this.reader.isRegexStart()
                            ? this.scanner.scanRegExp()
                            : this.scanner.lex();
                        this.reader.push(a);
                        var u = {
                          type: o.TokenName[a.type],
                          value: this.scanner.source.slice(a.start, a.end),
                        };
                        if (
                          (this.trackRange && (u.range = [a.start, a.end]),
                          this.trackLoc &&
                            ((s.end = {
                              line: this.scanner.lineNumber,
                              column:
                                this.scanner.index - this.scanner.lineStart,
                            }),
                            (u.loc = s)),
                          9 === a.type)
                        ) {
                          var l = a.pattern,
                            c = a.flags;
                          u.regex = { pattern: l, flags: c };
                        }
                        this.buffer.push(u);
                      }
                    }
                    return this.buffer.shift();
                  }),
                  e
                );
              })();
            t.Tokenizer = a;
          },
        ]);
      }),
        (e.exports = r());
    },
    647: function(e, t, n) {
      "use strict";
      var r = n(302),
        i = n(329),
        o = n(352),
        s = n(330),
        a = Object.prototype.toString,
        u = Object.prototype.hasOwnProperty,
        l = 9,
        c = 10,
        h = 32,
        p = 33,
        f = 34,
        d = 35,
        m = 37,
        g = 38,
        v = 39,
        y = 42,
        x = 44,
        D = 45,
        C = 58,
        w = 62,
        b = 63,
        S = 64,
        A = 91,
        E = 93,
        k = 96,
        F = 123,
        T = 124,
        M = 125,
        B = {
          0: "\\0",
          7: "\\a",
          8: "\\b",
          9: "\\t",
          10: "\\n",
          11: "\\v",
          12: "\\f",
          13: "\\r",
          27: "\\e",
          34: '\\"',
          92: "\\\\",
          133: "\\N",
          160: "\\_",
          8232: "\\L",
          8233: "\\P",
        },
        L = [
          "y",
          "Y",
          "yes",
          "Yes",
          "YES",
          "on",
          "On",
          "ON",
          "n",
          "N",
          "no",
          "No",
          "NO",
          "off",
          "Off",
          "OFF",
        ];
      function N(e) {
        var t, n, o;
        if (((t = e.toString(16).toUpperCase()), e <= 255)) (n = "x"), (o = 2);
        else if (e <= 65535) (n = "u"), (o = 4);
        else {
          if (!(e <= 4294967295))
            throw new i(
              "code point within a string may not be greater than 0xFFFFFFFF"
            );
          (n = "U"), (o = 8);
        }
        return "\\" + n + r.repeat("0", o - t.length) + t;
      }
      function I(e) {
        (this.schema = e.schema || o),
          (this.indent = Math.max(1, e.indent || 2)),
          (this.noArrayIndent = e.noArrayIndent || !1),
          (this.skipInvalid = e.skipInvalid || !1),
          (this.flowLevel = r.isNothing(e.flowLevel) ? -1 : e.flowLevel),
          (this.styleMap = (function(e, t) {
            var n, r, i, o, s, a, l;
            if (null === t) return {};
            for (n = {}, i = 0, o = (r = Object.keys(t)).length; i < o; i += 1)
              (s = r[i]),
                (a = String(t[s])),
                "!!" === s.slice(0, 2) &&
                  (s = "tag:yaml.org,2002:" + s.slice(2)),
                (l = e.compiledTypeMap.fallback[s]) &&
                  u.call(l.styleAliases, a) &&
                  (a = l.styleAliases[a]),
                (n[s] = a);
            return n;
          })(this.schema, e.styles || null)),
          (this.sortKeys = e.sortKeys || !1),
          (this.lineWidth = e.lineWidth || 80),
          (this.noRefs = e.noRefs || !1),
          (this.noCompatMode = e.noCompatMode || !1),
          (this.condenseFlow = e.condenseFlow || !1),
          (this.implicitTypes = this.schema.compiledImplicit),
          (this.explicitTypes = this.schema.compiledExplicit),
          (this.tag = null),
          (this.result = ""),
          (this.duplicates = []),
          (this.usedDuplicates = null);
      }
      function P(e, t) {
        for (
          var n, i = r.repeat(" ", t), o = 0, s = -1, a = "", u = e.length;
          o < u;

        )
          -1 === (s = e.indexOf("\n", o))
            ? ((n = e.slice(o)), (o = u))
            : ((n = e.slice(o, s + 1)), (o = s + 1)),
            n.length && "\n" !== n && (a += i),
            (a += n);
        return a;
      }
      function O(e, t) {
        return "\n" + r.repeat(" ", e.indent * t);
      }
      function R(e) {
        return e === h || e === l;
      }
      function z(e) {
        return (
          (32 <= e && e <= 126) ||
          (161 <= e && e <= 55295 && 8232 !== e && 8233 !== e) ||
          (57344 <= e && e <= 65533 && 65279 !== e) ||
          (65536 <= e && e <= 1114111)
        );
      }
      function U(e) {
        return (
          z(e) &&
          65279 !== e &&
          e !== x &&
          e !== A &&
          e !== E &&
          e !== F &&
          e !== M &&
          e !== C &&
          e !== d
        );
      }
      function W(e) {
        return /^\n* /.test(e);
      }
      var H = 1,
        X = 2,
        J = 3,
        _ = 4,
        j = 5;
      function K(e, t, n, r, i) {
        var o,
          s,
          a,
          u = !1,
          l = !1,
          h = -1 !== r,
          B = -1,
          L =
            z((a = e.charCodeAt(0))) &&
            65279 !== a &&
            !R(a) &&
            a !== D &&
            a !== b &&
            a !== C &&
            a !== x &&
            a !== A &&
            a !== E &&
            a !== F &&
            a !== M &&
            a !== d &&
            a !== g &&
            a !== y &&
            a !== p &&
            a !== T &&
            a !== w &&
            a !== v &&
            a !== f &&
            a !== m &&
            a !== S &&
            a !== k &&
            !R(e.charCodeAt(e.length - 1));
        if (t)
          for (o = 0; o < e.length; o++) {
            if (!z((s = e.charCodeAt(o)))) return j;
            L = L && U(s);
          }
        else {
          for (o = 0; o < e.length; o++) {
            if ((s = e.charCodeAt(o)) === c)
              (u = !0),
                h && ((l = l || (o - B - 1 > r && " " !== e[B + 1])), (B = o));
            else if (!z(s)) return j;
            L = L && U(s);
          }
          l = l || (h && o - B - 1 > r && " " !== e[B + 1]);
        }
        return u || l ? (n > 9 && W(e) ? j : l ? _ : J) : L && !i(e) ? H : X;
      }
      function Y(e, t, n, r) {
        e.dump = (function() {
          if (0 === t.length) return "''";
          if (!e.noCompatMode && -1 !== L.indexOf(t)) return "'" + t + "'";
          var o = e.indent * Math.max(1, n),
            s =
              -1 === e.lineWidth
                ? -1
                : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o),
            a = r || (e.flowLevel > -1 && n >= e.flowLevel);
          switch (
            K(t, a, e.indent, s, function(t) {
              return (function(e, t) {
                var n, r;
                for (n = 0, r = e.implicitTypes.length; n < r; n += 1)
                  if (e.implicitTypes[n].resolve(t)) return !0;
                return !1;
              })(e, t);
            })
          ) {
            case H:
              return t;
            case X:
              return "'" + t.replace(/'/g, "''") + "'";
            case J:
              return "|" + G(t, e.indent) + V(P(t, o));
            case _:
              return (
                ">" +
                G(t, e.indent) +
                V(
                  P(
                    (function(e, t) {
                      var n,
                        r,
                        i = /(\n+)([^\n]*)/g,
                        o = ((a = e.indexOf("\n")),
                        (a = -1 !== a ? a : e.length),
                        (i.lastIndex = a),
                        q(e.slice(0, a), t)),
                        s = "\n" === e[0] || " " === e[0];
                      var a;
                      for (; (r = i.exec(e)); ) {
                        var u = r[1],
                          l = r[2];
                        (n = " " === l[0]),
                          (o += u + (s || n || "" === l ? "" : "\n") + q(l, t)),
                          (s = n);
                      }
                      return o;
                    })(t, s),
                    o
                  )
                )
              );
            case j:
              return (
                '"' +
                (function(e) {
                  for (var t, n, r, i = "", o = 0; o < e.length; o++)
                    (t = e.charCodeAt(o)) >= 55296 &&
                    t <= 56319 &&
                    (n = e.charCodeAt(o + 1)) >= 56320 &&
                    n <= 57343
                      ? ((i += N(1024 * (t - 55296) + n - 56320 + 65536)), o++)
                      : ((r = B[t]), (i += !r && z(t) ? e[o] : r || N(t)));
                  return i;
                })(t) +
                '"'
              );
            default:
              throw new i("impossible error: invalid scalar style");
          }
        })();
      }
      function G(e, t) {
        var n = W(e) ? String(t) : "",
          r = "\n" === e[e.length - 1];
        return (
          n +
          (r && ("\n" === e[e.length - 2] || "\n" === e) ? "+" : r ? "" : "-") +
          "\n"
        );
      }
      function V(e) {
        return "\n" === e[e.length - 1] ? e.slice(0, -1) : e;
      }
      function q(e, t) {
        if ("" === e || " " === e[0]) return e;
        for (
          var n, r, i = / [^ ]/g, o = 0, s = 0, a = 0, u = "";
          (n = i.exec(e));

        )
          (a = n.index) - o > t &&
            ((r = s > o ? s : a), (u += "\n" + e.slice(o, r)), (o = r + 1)),
            (s = a);
        return (
          (u += "\n"),
          e.length - o > t && s > o
            ? (u += e.slice(o, s) + "\n" + e.slice(s + 1))
            : (u += e.slice(o)),
          u.slice(1)
        );
      }
      function $(e, t, n) {
        var r, o, s, l, c, h;
        for (
          s = 0, l = (o = n ? e.explicitTypes : e.implicitTypes).length;
          s < l;
          s += 1
        )
          if (
            ((c = o[s]).instanceOf || c.predicate) &&
            (!c.instanceOf ||
              ("object" == typeof t && t instanceof c.instanceOf)) &&
            (!c.predicate || c.predicate(t))
          ) {
            if (((e.tag = n ? c.tag : "?"), c.represent)) {
              if (
                ((h = e.styleMap[c.tag] || c.defaultStyle),
                "[object Function]" === a.call(c.represent))
              )
                r = c.represent(t, h);
              else {
                if (!u.call(c.represent, h))
                  throw new i(
                    "!<" +
                      c.tag +
                      '> tag resolver accepts not "' +
                      h +
                      '" style'
                  );
                r = c.represent[h](t, h);
              }
              e.dump = r;
            }
            return !0;
          }
        return !1;
      }
      function Z(e, t, n, r, o, s) {
        (e.tag = null), (e.dump = n), $(e, n, !1) || $(e, n, !0);
        var u = a.call(e.dump);
        r && (r = e.flowLevel < 0 || e.flowLevel > t);
        var l,
          h,
          p = "[object Object]" === u || "[object Array]" === u;
        if (
          (p && (h = -1 !== (l = e.duplicates.indexOf(n))),
          ((null !== e.tag && "?" !== e.tag) ||
            h ||
            (2 !== e.indent && t > 0)) &&
            (o = !1),
          h && e.usedDuplicates[l])
        )
          e.dump = "*ref_" + l;
        else {
          if (
            (p && h && !e.usedDuplicates[l] && (e.usedDuplicates[l] = !0),
            "[object Object]" === u)
          )
            r && 0 !== Object.keys(e.dump).length
              ? (!(function(e, t, n, r) {
                  var o,
                    s,
                    a,
                    u,
                    l,
                    h,
                    p = "",
                    f = e.tag,
                    d = Object.keys(n);
                  if (!0 === e.sortKeys) d.sort();
                  else if ("function" == typeof e.sortKeys) d.sort(e.sortKeys);
                  else if (e.sortKeys)
                    throw new i("sortKeys must be a boolean or a function");
                  for (o = 0, s = d.length; o < s; o += 1)
                    (h = ""),
                      (r && 0 === o) || (h += O(e, t)),
                      (u = n[(a = d[o])]),
                      Z(e, t + 1, a, !0, !0, !0) &&
                        ((l =
                          (null !== e.tag && "?" !== e.tag) ||
                          (e.dump && e.dump.length > 1024)) &&
                          (e.dump && c === e.dump.charCodeAt(0)
                            ? (h += "?")
                            : (h += "? ")),
                        (h += e.dump),
                        l && (h += O(e, t)),
                        Z(e, t + 1, u, !0, l) &&
                          (e.dump && c === e.dump.charCodeAt(0)
                            ? (h += ":")
                            : (h += ": "),
                          (p += h += e.dump)));
                  (e.tag = f), (e.dump = p || "{}");
                })(e, t, e.dump, o),
                h && (e.dump = "&ref_" + l + e.dump))
              : (!(function(e, t, n) {
                  var r,
                    i,
                    o,
                    s,
                    a,
                    u = "",
                    l = e.tag,
                    c = Object.keys(n);
                  for (r = 0, i = c.length; r < i; r += 1)
                    (a = e.condenseFlow ? '"' : ""),
                      0 !== r && (a += ", "),
                      (s = n[(o = c[r])]),
                      Z(e, t, o, !1, !1) &&
                        (e.dump.length > 1024 && (a += "? "),
                        (a +=
                          e.dump +
                          (e.condenseFlow ? '"' : "") +
                          ":" +
                          (e.condenseFlow ? "" : " ")),
                        Z(e, t, s, !1, !1) && (u += a += e.dump));
                  (e.tag = l), (e.dump = "{" + u + "}");
                })(e, t, e.dump),
                h && (e.dump = "&ref_" + l + " " + e.dump));
          else if ("[object Array]" === u) {
            var f = e.noArrayIndent && t > 0 ? t - 1 : t;
            r && 0 !== e.dump.length
              ? (!(function(e, t, n, r) {
                  var i,
                    o,
                    s = "",
                    a = e.tag;
                  for (i = 0, o = n.length; i < o; i += 1)
                    Z(e, t + 1, n[i], !0, !0) &&
                      ((r && 0 === i) || (s += O(e, t)),
                      e.dump && c === e.dump.charCodeAt(0)
                        ? (s += "-")
                        : (s += "- "),
                      (s += e.dump));
                  (e.tag = a), (e.dump = s || "[]");
                })(e, f, e.dump, o),
                h && (e.dump = "&ref_" + l + e.dump))
              : (!(function(e, t, n) {
                  var r,
                    i,
                    o = "",
                    s = e.tag;
                  for (r = 0, i = n.length; r < i; r += 1)
                    Z(e, t, n[r], !1, !1) &&
                      (0 !== r && (o += "," + (e.condenseFlow ? "" : " ")),
                      (o += e.dump));
                  (e.tag = s), (e.dump = "[" + o + "]");
                })(e, f, e.dump),
                h && (e.dump = "&ref_" + l + " " + e.dump));
          } else {
            if ("[object String]" !== u) {
              if (e.skipInvalid) return !1;
              throw new i("unacceptable kind of an object to dump " + u);
            }
            "?" !== e.tag && Y(e, e.dump, t, s);
          }
          null !== e.tag &&
            "?" !== e.tag &&
            (e.dump = "!<" + e.tag + "> " + e.dump);
        }
        return !0;
      }
      function Q(e, t) {
        var n,
          r,
          i = [],
          o = [];
        for (
          (function e(t, n, r) {
            var i, o, s;
            if (null !== t && "object" == typeof t)
              if (-1 !== (o = n.indexOf(t))) -1 === r.indexOf(o) && r.push(o);
              else if ((n.push(t), Array.isArray(t)))
                for (o = 0, s = t.length; o < s; o += 1) e(t[o], n, r);
              else
                for (i = Object.keys(t), o = 0, s = i.length; o < s; o += 1)
                  e(t[i[o]], n, r);
          })(e, i, o),
            n = 0,
            r = o.length;
          n < r;
          n += 1
        )
          t.duplicates.push(i[o[n]]);
        t.usedDuplicates = new Array(r);
      }
      function ee(e, t) {
        var n = new I((t = t || {}));
        return n.noRefs || Q(e, n), Z(n, 0, e, !0, !0) ? n.dump + "\n" : "";
      }
      (e.exports.dump = ee),
        (e.exports.safeDump = function(e, t) {
          return ee(e, r.extend({ schema: s }, t));
        });
    },
  },
]);
//# sourceMappingURL=chunk.d01a18f6f3b3c80c4850.js.map
