(window.webpackJsonp = window.webpackJsonp || []).push([
  [119],
  {
    660: function(t, e) {
      var i, n, r, a;
      (i = (function() {
        return this;
      })()),
        (r = {}),
        (a = {}),
        (function(t, e) {
          function i() {
            (this._delay = 0),
              (this._endDelay = 0),
              (this._fill = "none"),
              (this._iterationStart = 0),
              (this._iterations = 1),
              (this._duration = 0),
              (this._playbackRate = 1),
              (this._direction = "normal"),
              (this._easing = "linear"),
              (this._easingFunction = h);
          }
          function n() {
            return t.isDeprecated(
              "Invalid timing inputs",
              "2016-03-02",
              "TypeError exceptions will be thrown instead.",
              !0
            );
          }
          function r(e, n, r) {
            var a = new i();
            return (
              n && ((a.fill = "both"), (a.duration = "auto")),
              "number" != typeof e || isNaN(e)
                ? void 0 !== e &&
                  Object.getOwnPropertyNames(e).forEach(function(i) {
                    if ("auto" != e[i]) {
                      if (
                        ("number" == typeof a[i] || "duration" == i) &&
                        ("number" != typeof e[i] || isNaN(e[i]))
                      )
                        return;
                      if ("fill" == i && -1 == l.indexOf(e[i])) return;
                      if ("direction" == i && -1 == f.indexOf(e[i])) return;
                      if (
                        "playbackRate" == i &&
                        1 !== e[i] &&
                        t.isDeprecated(
                          "AnimationEffectTiming.playbackRate",
                          "2014-11-28",
                          "Use Animation.playbackRate instead."
                        )
                      )
                        return;
                      a[i] = e[i];
                    }
                  })
                : (a.duration = e),
              a
            );
          }
          function a(t, e, i, n) {
            return t < 0 || t > 1 || i < 0 || i > 1
              ? h
              : function(r) {
                  function a(t, e, i) {
                    return (
                      3 * t * (1 - i) * (1 - i) * i +
                      3 * e * (1 - i) * i * i +
                      i * i * i
                    );
                  }
                  if (r <= 0) {
                    var o = 0;
                    return (
                      t > 0 ? (o = e / t) : !e && i > 0 && (o = n / i), o * r
                    );
                  }
                  if (r >= 1) {
                    var s = 0;
                    return (
                      i < 1
                        ? (s = (n - 1) / (i - 1))
                        : 1 == i && t < 1 && (s = (e - 1) / (t - 1)),
                      1 + s * (r - 1)
                    );
                  }
                  for (var u = 0, c = 1; u < c; ) {
                    var l = (u + c) / 2,
                      f = a(t, i, l);
                    if (Math.abs(r - f) < 1e-5) return a(e, n, l);
                    f < r ? (u = l) : (c = l);
                  }
                  return a(e, n, l);
                };
          }
          function o(t, e) {
            return function(i) {
              if (i >= 1) return 1;
              var n = 1 / t;
              return (i += e * n) - (i % n);
            };
          }
          function s(t) {
            g || (g = document.createElement("div").style),
              (g.animationTimingFunction = ""),
              (g.animationTimingFunction = t);
            var e = g.animationTimingFunction;
            if ("" == e && n())
              throw new TypeError(t + " is not a valid value for easing");
            return e;
          }
          function u(t) {
            if ("linear" == t) return h;
            var e = y.exec(t);
            if (e) return a.apply(this, e.slice(1).map(Number));
            var i = b.exec(t);
            return i
              ? o(Number(i[1]), { start: m, middle: d, end: p }[i[2]])
              : _[t] || h;
          }
          function c(t, e, i) {
            if (null == e) return w;
            var n = i.delay + t + i.endDelay;
            return e < Math.min(i.delay, n)
              ? T
              : e >= Math.min(i.delay + t, n)
              ? x
              : E;
          }
          var l = "backwards|forwards|both|none".split("|"),
            f = "reverse|alternate|alternate-reverse".split("|"),
            h = function(t) {
              return t;
            };
          i.prototype = {
            _setMember: function(e, i) {
              (this["_" + e] = i),
                this._effect &&
                  ((this._effect._timingInput[e] = i),
                  (this._effect._timing = t.normalizeTimingInput(
                    this._effect._timingInput
                  )),
                  (this._effect.activeDuration = t.calculateActiveDuration(
                    this._effect._timing
                  )),
                  this._effect._animation &&
                    this._effect._animation._rebuildUnderlyingAnimation());
            },
            get playbackRate() {
              return this._playbackRate;
            },
            set delay(t) {
              this._setMember("delay", t);
            },
            get delay() {
              return this._delay;
            },
            set endDelay(t) {
              this._setMember("endDelay", t);
            },
            get endDelay() {
              return this._endDelay;
            },
            set fill(t) {
              this._setMember("fill", t);
            },
            get fill() {
              return this._fill;
            },
            set iterationStart(t) {
              if ((isNaN(t) || t < 0) && n())
                throw new TypeError(
                  "iterationStart must be a non-negative number, received: " +
                    timing.iterationStart
                );
              this._setMember("iterationStart", t);
            },
            get iterationStart() {
              return this._iterationStart;
            },
            set duration(t) {
              if ("auto" != t && (isNaN(t) || t < 0) && n())
                throw new TypeError(
                  "duration must be non-negative or auto, received: " + t
                );
              this._setMember("duration", t);
            },
            get duration() {
              return this._duration;
            },
            set direction(t) {
              this._setMember("direction", t);
            },
            get direction() {
              return this._direction;
            },
            set easing(t) {
              (this._easingFunction = u(s(t))), this._setMember("easing", t);
            },
            get easing() {
              return this._easing;
            },
            set iterations(t) {
              if ((isNaN(t) || t < 0) && n())
                throw new TypeError(
                  "iterations must be non-negative, received: " + t
                );
              this._setMember("iterations", t);
            },
            get iterations() {
              return this._iterations;
            },
          };
          var m = 1,
            d = 0.5,
            p = 0,
            _ = {
              ease: a(0.25, 0.1, 0.25, 1),
              "ease-in": a(0.42, 0, 1, 1),
              "ease-out": a(0, 0, 0.58, 1),
              "ease-in-out": a(0.42, 0, 0.58, 1),
              "step-start": o(1, m),
              "step-middle": o(1, d),
              "step-end": o(1, p),
            },
            g = null,
            v = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
            y = new RegExp(
              "cubic-bezier\\(" + v + "," + v + "," + v + "," + v + "\\)"
            ),
            b = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,
            w = 0,
            T = 1,
            x = 2,
            E = 3;
          (t.cloneTimingInput = function(t) {
            if ("number" == typeof t) return t;
            var e = {};
            for (var i in t) e[i] = t[i];
            return e;
          }),
            (t.makeTiming = r),
            (t.numericTimingToObject = function(t) {
              return (
                "number" == typeof t &&
                  (t = isNaN(t) ? { duration: 0 } : { duration: t }),
                t
              );
            }),
            (t.normalizeTimingInput = function(e, i) {
              return r((e = t.numericTimingToObject(e)), i);
            }),
            (t.calculateActiveDuration = function(t) {
              return Math.abs(
                (function(t) {
                  return 0 === t.duration || 0 === t.iterations
                    ? 0
                    : t.duration * t.iterations;
                })(t) / t.playbackRate
              );
            }),
            (t.calculateIterationProgress = function(t, e, i) {
              var n = c(t, e, i),
                r = (function(t, e, i, n, r) {
                  switch (n) {
                    case T:
                      return "backwards" == e || "both" == e ? 0 : null;
                    case E:
                      return i - r;
                    case x:
                      return "forwards" == e || "both" == e ? t : null;
                    case w:
                      return null;
                  }
                })(t, i.fill, e, n, i.delay);
              if (null === r) return null;
              var a = (function(t, e, i, n, r) {
                  var a = r;
                  return 0 === t ? e !== T && (a += i) : (a += n / t), a;
                })(i.duration, n, i.iterations, r, i.iterationStart),
                o = (function(t, e, i, n, r, a) {
                  var o = t === 1 / 0 ? e % 1 : t % 1;
                  return (
                    0 !== o ||
                      i !== x ||
                      0 === n ||
                      (0 === r && 0 !== a) ||
                      (o = 1),
                    o
                  );
                })(a, i.iterationStart, n, i.iterations, r, i.duration),
                s = (function(t, e, i, n) {
                  return t === x && e === 1 / 0
                    ? 1 / 0
                    : 1 === i
                    ? Math.floor(n) - 1
                    : Math.floor(n);
                })(n, i.iterations, o, a),
                u = (function(t, e, i) {
                  var n = t;
                  if ("normal" !== t && "reverse" !== t) {
                    var r = e;
                    "alternate-reverse" === t && (r += 1),
                      (n = "normal"),
                      r !== 1 / 0 && r % 2 != 0 && (n = "reverse");
                  }
                  return "normal" === n ? i : 1 - i;
                })(i.direction, s, o);
              return i._easingFunction(u);
            }),
            (t.calculatePhase = c),
            (t.normalizeEasing = s),
            (t.parseEasingFunction = u);
        })((n = {})),
        (function(t, e) {
          function i(t, e) {
            return (t in u && u[t][e]) || e;
          }
          function n(t, e, n) {
            if (
              !(function(t) {
                return (
                  "display" === t ||
                  0 === t.lastIndexOf("animation", 0) ||
                  0 === t.lastIndexOf("transition", 0)
                );
              })(t)
            ) {
              var r = a[t];
              if (r)
                for (var s in ((o.style[t] = e), r)) {
                  var u = r[s],
                    c = o.style[u];
                  n[u] = i(u, c);
                }
              else n[t] = i(t, e);
            }
          }
          function r(t) {
            var e = [];
            for (var i in t)
              if (!(i in ["easing", "offset", "composite"])) {
                var n = t[i];
                Array.isArray(n) || (n = [n]);
                for (var r, a = n.length, o = 0; o < a; o++)
                  ((r = {}).offset =
                    "offset" in t ? t.offset : 1 == a ? 1 : o / (a - 1)),
                    "easing" in t && (r.easing = t.easing),
                    "composite" in t && (r.composite = t.composite),
                    (r[i] = n[o]),
                    e.push(r);
              }
            return (
              e.sort(function(t, e) {
                return t.offset - e.offset;
              }),
              e
            );
          }
          var a = {
              background: [
                "backgroundImage",
                "backgroundPosition",
                "backgroundSize",
                "backgroundRepeat",
                "backgroundAttachment",
                "backgroundOrigin",
                "backgroundClip",
                "backgroundColor",
              ],
              border: [
                "borderTopColor",
                "borderTopStyle",
                "borderTopWidth",
                "borderRightColor",
                "borderRightStyle",
                "borderRightWidth",
                "borderBottomColor",
                "borderBottomStyle",
                "borderBottomWidth",
                "borderLeftColor",
                "borderLeftStyle",
                "borderLeftWidth",
              ],
              borderBottom: [
                "borderBottomWidth",
                "borderBottomStyle",
                "borderBottomColor",
              ],
              borderColor: [
                "borderTopColor",
                "borderRightColor",
                "borderBottomColor",
                "borderLeftColor",
              ],
              borderLeft: [
                "borderLeftWidth",
                "borderLeftStyle",
                "borderLeftColor",
              ],
              borderRadius: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomRightRadius",
                "borderBottomLeftRadius",
              ],
              borderRight: [
                "borderRightWidth",
                "borderRightStyle",
                "borderRightColor",
              ],
              borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
              borderWidth: [
                "borderTopWidth",
                "borderRightWidth",
                "borderBottomWidth",
                "borderLeftWidth",
              ],
              flex: ["flexGrow", "flexShrink", "flexBasis"],
              font: [
                "fontFamily",
                "fontSize",
                "fontStyle",
                "fontVariant",
                "fontWeight",
                "lineHeight",
              ],
              margin: [
                "marginTop",
                "marginRight",
                "marginBottom",
                "marginLeft",
              ],
              outline: ["outlineColor", "outlineStyle", "outlineWidth"],
              padding: [
                "paddingTop",
                "paddingRight",
                "paddingBottom",
                "paddingLeft",
              ],
            },
            o = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
            s = { thin: "1px", medium: "3px", thick: "5px" },
            u = {
              borderBottomWidth: s,
              borderLeftWidth: s,
              borderRightWidth: s,
              borderTopWidth: s,
              fontSize: {
                "xx-small": "60%",
                "x-small": "75%",
                small: "89%",
                medium: "100%",
                large: "120%",
                "x-large": "150%",
                "xx-large": "200%",
              },
              fontWeight: { normal: "400", bold: "700" },
              outlineWidth: s,
              textShadow: { none: "0px 0px 0px transparent" },
              boxShadow: { none: "0px 0px 0px 0px transparent" },
            };
          (t.convertToArrayForm = r),
            (t.normalizeKeyframes = function(e) {
              if (null == e) return [];
              window.Symbol &&
                Symbol.iterator &&
                Array.prototype.from &&
                e[Symbol.iterator] &&
                (e = Array.from(e)),
                Array.isArray(e) || (e = r(e));
              for (
                var i = e.map(function(e) {
                    var i = {};
                    for (var r in e) {
                      var a = e[r];
                      if ("offset" == r) {
                        if (null != a) {
                          if (((a = Number(a)), !isFinite(a)))
                            throw new TypeError(
                              "Keyframe offsets must be numbers."
                            );
                          if (a < 0 || a > 1)
                            throw new TypeError(
                              "Keyframe offsets must be between 0 and 1."
                            );
                        }
                      } else if ("composite" == r) {
                        if ("add" == a || "accumulate" == a)
                          throw {
                            type: DOMException.NOT_SUPPORTED_ERR,
                            name: "NotSupportedError",
                            message: "add compositing is not supported",
                          };
                        if ("replace" != a)
                          throw new TypeError(
                            "Invalid composite mode " + a + "."
                          );
                      } else a = "easing" == r ? t.normalizeEasing(a) : "" + a;
                      n(r, a, i);
                    }
                    return (
                      null == i.offset && (i.offset = null),
                      null == i.easing && (i.easing = "linear"),
                      i
                    );
                  }),
                  a = !0,
                  o = -1 / 0,
                  s = 0;
                s < i.length;
                s++
              ) {
                var u = i[s].offset;
                if (null != u) {
                  if (u < o)
                    throw new TypeError(
                      "Keyframes are not loosely sorted by offset. Sort or specify offsets."
                    );
                  o = u;
                } else a = !1;
              }
              return (
                (i = i.filter(function(t) {
                  return t.offset >= 0 && t.offset <= 1;
                })),
                a ||
                  (function() {
                    var t = i.length;
                    null == i[t - 1].offset && (i[t - 1].offset = 1),
                      t > 1 && null == i[0].offset && (i[0].offset = 0);
                    for (var e = 0, n = i[0].offset, r = 1; r < t; r++) {
                      var a = i[r].offset;
                      if (null != a) {
                        for (var o = 1; o < r - e; o++)
                          i[e + o].offset = n + ((a - n) * o) / (r - e);
                        (e = r), (n = a);
                      }
                    }
                  })(),
                i
              );
            });
        })(n),
        (function(t) {
          var e = {};
          (t.isDeprecated = function(t, i, n, r) {
            var a = r ? "are" : "is",
              o = new Date(),
              s = new Date(i);
            return (
              s.setMonth(s.getMonth() + 3),
              !(
                o < s &&
                (t in e ||
                  console.warn(
                    "Web Animations: " +
                      t +
                      " " +
                      a +
                      " deprecated and will stop working on " +
                      s.toDateString() +
                      ". " +
                      n
                  ),
                (e[t] = !0),
                1)
              )
            );
          }),
            (t.deprecated = function(e, i, n, r) {
              var a = r ? "are" : "is";
              if (t.isDeprecated(e, i, n, r))
                throw new Error(e + " " + a + " no longer supported. " + n);
            });
        })(n),
        (function() {
          if (document.documentElement.animate) {
            var t = document.documentElement.animate([], 0),
              e = !0;
            if (
              (t &&
                ((e = !1),
                "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState"
                  .split("|")
                  .forEach(function(i) {
                    void 0 === t[i] && (e = !0);
                  })),
              !e)
            )
              return;
          }
          !(function(t, e, i) {
            e.convertEffectInput = function(i) {
              var n = (function(t) {
                  for (var e = {}, i = 0; i < t.length; i++)
                    for (var n in t[i])
                      if ("offset" != n && "easing" != n && "composite" != n) {
                        var r = {
                          offset: t[i].offset,
                          easing: t[i].easing,
                          value: t[i][n],
                        };
                        (e[n] = e[n] || []), e[n].push(r);
                      }
                  for (var a in e) {
                    var o = e[a];
                    if (0 != o[0].offset || 1 != o[o.length - 1].offset)
                      throw {
                        type: DOMException.NOT_SUPPORTED_ERR,
                        name: "NotSupportedError",
                        message: "Partial keyframes are not supported",
                      };
                  }
                  return e;
                })(t.normalizeKeyframes(i)),
                r = (function(i) {
                  var n = [];
                  for (var r in i)
                    for (var a = i[r], o = 0; o < a.length - 1; o++) {
                      var s = o,
                        u = o + 1,
                        c = a[s].offset,
                        l = a[u].offset,
                        f = c,
                        h = l;
                      0 == o && ((f = -1 / 0), 0 == l && (u = s)),
                        o == a.length - 2 && ((h = 1 / 0), 1 == c && (s = u)),
                        n.push({
                          applyFrom: f,
                          applyTo: h,
                          startOffset: a[s].offset,
                          endOffset: a[u].offset,
                          easingFunction: t.parseEasingFunction(a[s].easing),
                          property: r,
                          interpolation: e.propertyInterpolation(
                            r,
                            a[s].value,
                            a[u].value
                          ),
                        });
                    }
                  return (
                    n.sort(function(t, e) {
                      return t.startOffset - e.startOffset;
                    }),
                    n
                  );
                })(n);
              return function(t, i) {
                if (null != i)
                  r.filter(function(t) {
                    return i >= t.applyFrom && i < t.applyTo;
                  }).forEach(function(n) {
                    var r = i - n.startOffset,
                      a = n.endOffset - n.startOffset,
                      o = 0 == a ? 0 : n.easingFunction(r / a);
                    e.apply(t, n.property, n.interpolation(o));
                  });
                else
                  for (var a in n)
                    "offset" != a &&
                      "easing" != a &&
                      "composite" != a &&
                      e.clear(t, a);
              };
            };
          })(n, r),
            (function(t, e, i) {
              function n(t) {
                return t.replace(/-(.)/g, function(t, e) {
                  return e.toUpperCase();
                });
              }
              function r(t, e, i) {
                (a[i] = a[i] || []), a[i].push([t, e]);
              }
              var a = {};
              e.addPropertiesHandler = function(t, e, i) {
                for (var a = 0; a < i.length; a++) r(t, e, n(i[a]));
              };
              var o = {
                backgroundColor: "transparent",
                backgroundPosition: "0% 0%",
                borderBottomColor: "currentColor",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                borderBottomWidth: "3px",
                borderLeftColor: "currentColor",
                borderLeftWidth: "3px",
                borderRightColor: "currentColor",
                borderRightWidth: "3px",
                borderSpacing: "2px",
                borderTopColor: "currentColor",
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
                borderTopWidth: "3px",
                bottom: "auto",
                clip: "rect(0px, 0px, 0px, 0px)",
                color: "black",
                fontSize: "100%",
                fontWeight: "400",
                height: "auto",
                left: "auto",
                letterSpacing: "normal",
                lineHeight: "120%",
                marginBottom: "0px",
                marginLeft: "0px",
                marginRight: "0px",
                marginTop: "0px",
                maxHeight: "none",
                maxWidth: "none",
                minHeight: "0px",
                minWidth: "0px",
                opacity: "1.0",
                outlineColor: "invert",
                outlineOffset: "0px",
                outlineWidth: "3px",
                paddingBottom: "0px",
                paddingLeft: "0px",
                paddingRight: "0px",
                paddingTop: "0px",
                right: "auto",
                strokeDasharray: "none",
                strokeDashoffset: "0px",
                textIndent: "0px",
                textShadow: "0px 0px 0px transparent",
                top: "auto",
                transform: "",
                verticalAlign: "0px",
                visibility: "visible",
                width: "auto",
                wordSpacing: "normal",
                zIndex: "auto",
              };
              e.propertyInterpolation = function(i, r, s) {
                var u = i;
                /-/.test(i) &&
                  !t.isDeprecated(
                    "Hyphenated property names",
                    "2016-03-22",
                    "Use camelCase instead.",
                    !0
                  ) &&
                  (u = n(i)),
                  ("initial" != r && "initial" != s) ||
                    ("initial" == r && (r = o[u]),
                    "initial" == s && (s = o[u]));
                for (
                  var c = r == s ? [] : a[u], l = 0;
                  c && l < c.length;
                  l++
                ) {
                  var f = c[l][0](r),
                    h = c[l][0](s);
                  if (void 0 !== f && void 0 !== h) {
                    var m = c[l][1](f, h);
                    if (m) {
                      var d = e.Interpolation.apply(null, m);
                      return function(t) {
                        return 0 == t ? r : 1 == t ? s : d(t);
                      };
                    }
                  }
                }
                return e.Interpolation(!1, !0, function(t) {
                  return t ? s : r;
                });
              };
            })(n, r),
            (function(t, e, i) {
              e.KeyframeEffect = function(i, n, r, a) {
                var o,
                  s = (function(e) {
                    var i = t.calculateActiveDuration(e),
                      n = function(n) {
                        return t.calculateIterationProgress(i, n, e);
                      };
                    return (n._totalDuration = e.delay + i + e.endDelay), n;
                  })(t.normalizeTimingInput(r)),
                  u = e.convertEffectInput(n),
                  c = function() {
                    u(i, o);
                  };
                return (
                  (c._update = function(t) {
                    return null !== (o = s(t));
                  }),
                  (c._clear = function() {
                    u(i, null);
                  }),
                  (c._hasSameTarget = function(t) {
                    return i === t;
                  }),
                  (c._target = i),
                  (c._totalDuration = s._totalDuration),
                  (c._id = a),
                  c
                );
              };
            })(n, r),
            (function(t, e) {
              (t.apply = function(e, i, n) {
                e.style[t.propertyName(i)] = n;
              }),
                (t.clear = function(e, i) {
                  e.style[t.propertyName(i)] = "";
                });
            })(r),
            (function(t) {
              window.Element.prototype.animate = function(e, i) {
                var n = "";
                return (
                  i && i.id && (n = i.id),
                  t.timeline._play(t.KeyframeEffect(this, e, i, n))
                );
              };
            })(r),
            (r.Interpolation = function(t, e, i) {
              return function(n) {
                return i(
                  (function t(e, i, n) {
                    if ("number" == typeof e && "number" == typeof i)
                      return e * (1 - n) + i * n;
                    if ("boolean" == typeof e && "boolean" == typeof i)
                      return n < 0.5 ? e : i;
                    if (e.length == i.length) {
                      for (var r = [], a = 0; a < e.length; a++)
                        r.push(t(e[a], i[a], n));
                      return r;
                    }
                    throw "Mismatched interpolation arguments " + e + ":" + i;
                  })(t, e, n)
                );
              };
            }),
            (function(t, e, i) {
              t.sequenceNumber = 0;
              var n = function(t, e, i) {
                (this.target = t),
                  (this.currentTime = e),
                  (this.timelineTime = i),
                  (this.type = "finish"),
                  (this.bubbles = !1),
                  (this.cancelable = !1),
                  (this.currentTarget = t),
                  (this.defaultPrevented = !1),
                  (this.eventPhase = Event.AT_TARGET),
                  (this.timeStamp = Date.now());
              };
              (e.Animation = function(e) {
                (this.id = ""),
                  e && e._id && (this.id = e._id),
                  (this._sequenceNumber = t.sequenceNumber++),
                  (this._currentTime = 0),
                  (this._startTime = null),
                  (this._paused = !1),
                  (this._playbackRate = 1),
                  (this._inTimeline = !0),
                  (this._finishedFlag = !0),
                  (this.onfinish = null),
                  (this._finishHandlers = []),
                  (this._effect = e),
                  (this._inEffect = this._effect._update(0)),
                  (this._idle = !0),
                  (this._currentTimePending = !1);
              }),
                (e.Animation.prototype = {
                  _ensureAlive: function() {
                    this.playbackRate < 0 && 0 === this.currentTime
                      ? (this._inEffect = this._effect._update(-1))
                      : (this._inEffect = this._effect._update(
                          this.currentTime
                        )),
                      this._inTimeline ||
                        (!this._inEffect && this._finishedFlag) ||
                        ((this._inTimeline = !0),
                        e.timeline._animations.push(this));
                  },
                  _tickCurrentTime: function(t, e) {
                    t != this._currentTime &&
                      ((this._currentTime = t),
                      this._isFinished &&
                        !e &&
                        (this._currentTime =
                          this._playbackRate > 0 ? this._totalDuration : 0),
                      this._ensureAlive());
                  },
                  get currentTime() {
                    return this._idle || this._currentTimePending
                      ? null
                      : this._currentTime;
                  },
                  set currentTime(t) {
                    (t = +t),
                      isNaN(t) ||
                        (e.restart(),
                        this._paused ||
                          null == this._startTime ||
                          (this._startTime =
                            this._timeline.currentTime -
                            t / this._playbackRate),
                        (this._currentTimePending = !1),
                        this._currentTime != t &&
                          (this._idle &&
                            ((this._idle = !1), (this._paused = !0)),
                          this._tickCurrentTime(t, !0),
                          e.applyDirtiedAnimation(this)));
                  },
                  get startTime() {
                    return this._startTime;
                  },
                  set startTime(t) {
                    (t = +t),
                      isNaN(t) ||
                        this._paused ||
                        this._idle ||
                        ((this._startTime = t),
                        this._tickCurrentTime(
                          (this._timeline.currentTime - this._startTime) *
                            this.playbackRate
                        ),
                        e.applyDirtiedAnimation(this));
                  },
                  get playbackRate() {
                    return this._playbackRate;
                  },
                  set playbackRate(t) {
                    if (t != this._playbackRate) {
                      var i = this.currentTime;
                      (this._playbackRate = t),
                        (this._startTime = null),
                        "paused" != this.playState &&
                          "idle" != this.playState &&
                          ((this._finishedFlag = !1),
                          (this._idle = !1),
                          this._ensureAlive(),
                          e.applyDirtiedAnimation(this)),
                        null != i && (this.currentTime = i);
                    }
                  },
                  get _isFinished() {
                    return (
                      !this._idle &&
                      ((this._playbackRate > 0 &&
                        this._currentTime >= this._totalDuration) ||
                        (this._playbackRate < 0 && this._currentTime <= 0))
                    );
                  },
                  get _totalDuration() {
                    return this._effect._totalDuration;
                  },
                  get playState() {
                    return this._idle
                      ? "idle"
                      : (null == this._startTime &&
                          !this._paused &&
                          0 != this.playbackRate) ||
                        this._currentTimePending
                      ? "pending"
                      : this._paused
                      ? "paused"
                      : this._isFinished
                      ? "finished"
                      : "running";
                  },
                  _rewind: function() {
                    if (this._playbackRate >= 0) this._currentTime = 0;
                    else {
                      if (!(this._totalDuration < 1 / 0))
                        throw new DOMException(
                          "Unable to rewind negative playback rate animation with infinite duration",
                          "InvalidStateError"
                        );
                      this._currentTime = this._totalDuration;
                    }
                  },
                  play: function() {
                    (this._paused = !1),
                      (this._isFinished || this._idle) &&
                        (this._rewind(), (this._startTime = null)),
                      (this._finishedFlag = !1),
                      (this._idle = !1),
                      this._ensureAlive(),
                      e.applyDirtiedAnimation(this);
                  },
                  pause: function() {
                    this._isFinished || this._paused || this._idle
                      ? this._idle && (this._rewind(), (this._idle = !1))
                      : (this._currentTimePending = !0),
                      (this._startTime = null),
                      (this._paused = !0);
                  },
                  finish: function() {
                    this._idle ||
                      ((this.currentTime =
                        this._playbackRate > 0 ? this._totalDuration : 0),
                      (this._startTime =
                        this._totalDuration - this.currentTime),
                      (this._currentTimePending = !1),
                      e.applyDirtiedAnimation(this));
                  },
                  cancel: function() {
                    this._inEffect &&
                      ((this._inEffect = !1),
                      (this._idle = !0),
                      (this._paused = !1),
                      (this._isFinished = !0),
                      (this._finishedFlag = !0),
                      (this._currentTime = 0),
                      (this._startTime = null),
                      this._effect._update(null),
                      e.applyDirtiedAnimation(this));
                  },
                  reverse: function() {
                    (this.playbackRate *= -1), this.play();
                  },
                  addEventListener: function(t, e) {
                    "function" == typeof e &&
                      "finish" == t &&
                      this._finishHandlers.push(e);
                  },
                  removeEventListener: function(t, e) {
                    if ("finish" == t) {
                      var i = this._finishHandlers.indexOf(e);
                      i >= 0 && this._finishHandlers.splice(i, 1);
                    }
                  },
                  _fireEvents: function(t) {
                    if (this._isFinished) {
                      if (!this._finishedFlag) {
                        var e = new n(this, this._currentTime, t),
                          i = this._finishHandlers.concat(
                            this.onfinish ? [this.onfinish] : []
                          );
                        setTimeout(function() {
                          i.forEach(function(t) {
                            t.call(e.target, e);
                          });
                        }, 0),
                          (this._finishedFlag = !0);
                      }
                    } else this._finishedFlag = !1;
                  },
                  _tick: function(t, e) {
                    this._idle ||
                      this._paused ||
                      (null == this._startTime
                        ? e &&
                          (this.startTime =
                            t - this._currentTime / this.playbackRate)
                        : this._isFinished ||
                          this._tickCurrentTime(
                            (t - this._startTime) * this.playbackRate
                          )),
                      e &&
                        ((this._currentTimePending = !1), this._fireEvents(t));
                  },
                  get _needsTick() {
                    return (
                      this.playState in { pending: 1, running: 1 } ||
                      !this._finishedFlag
                    );
                  },
                  _targetAnimations: function() {
                    var t = this._effect._target;
                    return (
                      t._activeAnimations || (t._activeAnimations = []),
                      t._activeAnimations
                    );
                  },
                  _markTarget: function() {
                    var t = this._targetAnimations();
                    -1 === t.indexOf(this) && t.push(this);
                  },
                  _unmarkTarget: function() {
                    var t = this._targetAnimations(),
                      e = t.indexOf(this);
                    -1 !== e && t.splice(e, 1);
                  },
                });
            })(n, r),
            (function(t, e, i) {
              function n(t) {
                var e = c;
                (c = []),
                  t < p.currentTime && (t = p.currentTime),
                  p._animations.sort(r),
                  (p._animations = s(t, !0, p._animations)[0]),
                  e.forEach(function(e) {
                    e[1](t);
                  }),
                  o();
              }
              function r(t, e) {
                return t._sequenceNumber - e._sequenceNumber;
              }
              function a() {
                (this._animations = []),
                  (this.currentTime =
                    window.performance && performance.now
                      ? performance.now()
                      : 0);
              }
              function o() {
                m.forEach(function(t) {
                  t();
                }),
                  (m.length = 0);
              }
              function s(t, i, n) {
                (d = !0), (h = !1), (e.timeline.currentTime = t), (f = !1);
                var r = [],
                  a = [],
                  o = [],
                  s = [];
                return (
                  n.forEach(function(e) {
                    e._tick(t, i),
                      e._inEffect
                        ? (a.push(e._effect), e._markTarget())
                        : (r.push(e._effect), e._unmarkTarget()),
                      e._needsTick && (f = !0);
                    var n = e._inEffect || e._needsTick;
                    (e._inTimeline = n), n ? o.push(e) : s.push(e);
                  }),
                  m.push.apply(m, r),
                  m.push.apply(m, a),
                  f && requestAnimationFrame(function() {}),
                  (d = !1),
                  [o, s]
                );
              }
              var u = window.requestAnimationFrame,
                c = [],
                l = 0;
              (window.requestAnimationFrame = function(t) {
                var e = l++;
                return 0 == c.length && u(n), c.push([e, t]), e;
              }),
                (window.cancelAnimationFrame = function(t) {
                  c.forEach(function(e) {
                    e[0] == t && (e[1] = function() {});
                  });
                }),
                (a.prototype = {
                  _play: function(i) {
                    i._timing = t.normalizeTimingInput(i.timing);
                    var n = new e.Animation(i);
                    return (
                      (n._idle = !1),
                      (n._timeline = this),
                      this._animations.push(n),
                      e.restart(),
                      e.applyDirtiedAnimation(n),
                      n
                    );
                  },
                });
              var f = !1,
                h = !1;
              (e.restart = function() {
                return (
                  f ||
                    ((f = !0), requestAnimationFrame(function() {}), (h = !0)),
                  h
                );
              }),
                (e.applyDirtiedAnimation = function(t) {
                  if (!d) {
                    t._markTarget();
                    var i = t._targetAnimations();
                    i.sort(r),
                      s(e.timeline.currentTime, !1, i.slice())[1].forEach(
                        function(t) {
                          var e = p._animations.indexOf(t);
                          -1 !== e && p._animations.splice(e, 1);
                        }
                      ),
                      o();
                  }
                });
              var m = [],
                d = !1,
                p = new a();
              e.timeline = p;
            })(n, r),
            (function(t) {
              function e(t, e) {
                var i = t.exec(e);
                if (i)
                  return [
                    (i = t.ignoreCase ? i[0].toLowerCase() : i[0]),
                    e.substr(i.length),
                  ];
              }
              function i(t, e) {
                var i = t((e = e.replace(/^\s*/, "")));
                if (i) return [i[0], i[1].replace(/^\s*/, "")];
              }
              function n(t, e, i, n, r) {
                for (
                  var a = [],
                    o = [],
                    s = [],
                    u = (function(t, e) {
                      for (var i = t, n = e; i && n; )
                        i > n ? (i %= n) : (n %= i);
                      return (t * e) / (i + n);
                    })(n.length, r.length),
                    c = 0;
                  c < u;
                  c++
                ) {
                  var l = e(n[c % n.length], r[c % r.length]);
                  if (!l) return;
                  a.push(l[0]), o.push(l[1]), s.push(l[2]);
                }
                return [
                  a,
                  o,
                  function(e) {
                    var n = e
                      .map(function(t, e) {
                        return s[e](t);
                      })
                      .join(i);
                    return t ? t(n) : n;
                  },
                ];
              }
              (t.consumeToken = e),
                (t.consumeTrimmed = i),
                (t.consumeRepeated = function(t, n, r) {
                  t = i.bind(null, t);
                  for (var a = []; ; ) {
                    var o = t(r);
                    if (!o) return [a, r];
                    if ((a.push(o[0]), !(o = e(n, (r = o[1]))) || "" == o[1]))
                      return [a, r];
                    r = o[1];
                  }
                }),
                (t.consumeParenthesised = function(t, e) {
                  for (
                    var i = 0, n = 0;
                    n < e.length && (!/\s|,/.test(e[n]) || 0 != i);
                    n++
                  )
                    if ("(" == e[n]) i++;
                    else if (")" == e[n] && (0 == --i && n++, i <= 0)) break;
                  var r = t(e.substr(0, n));
                  return null == r ? void 0 : [r, e.substr(n)];
                }),
                (t.ignore = function(t) {
                  return function(e) {
                    var i = t(e);
                    return i && (i[0] = void 0), i;
                  };
                }),
                (t.optional = function(t, e) {
                  return function(i) {
                    return t(i) || [e, i];
                  };
                }),
                (t.consumeList = function(e, i) {
                  for (var n = [], r = 0; r < e.length; r++) {
                    var a = t.consumeTrimmed(e[r], i);
                    if (!a || "" == a[0]) return;
                    void 0 !== a[0] && n.push(a[0]), (i = a[1]);
                  }
                  if ("" == i) return n;
                }),
                (t.mergeNestedRepeated = n.bind(null, null)),
                (t.mergeWrappedNestedRepeated = n),
                (t.mergeList = function(t, e, i) {
                  for (
                    var n = [], r = [], a = [], o = 0, s = 0;
                    s < i.length;
                    s++
                  )
                    if ("function" == typeof i[s]) {
                      var u = i[s](t[o], e[o++]);
                      n.push(u[0]), r.push(u[1]), a.push(u[2]);
                    } else
                      !(function(t) {
                        n.push(!1),
                          r.push(!1),
                          a.push(function() {
                            return i[t];
                          });
                      })(s);
                  return [
                    n,
                    r,
                    function(t) {
                      for (var e = "", i = 0; i < t.length; i++)
                        e += a[i](t[i]);
                      return e;
                    },
                  ];
                });
            })(r),
            (function(t) {
              function e(e) {
                var i = { inset: !1, lengths: [], color: null },
                  n = t.consumeRepeated(
                    function(e) {
                      var n;
                      return (n = t.consumeToken(/^inset/i, e))
                        ? ((i.inset = !0), n)
                        : (n = t.consumeLengthOrPercent(e))
                        ? (i.lengths.push(n[0]), n)
                        : (n = t.consumeColor(e))
                        ? ((i.color = n[0]), n)
                        : void 0;
                    },
                    /^/,
                    e
                  );
                if (n && n[0].length) return [i, n[1]];
              }
              var i = function(e, i, n, r) {
                function a(t) {
                  return {
                    inset: t,
                    color: [0, 0, 0, 0],
                    lengths: [{ px: 0 }, { px: 0 }, { px: 0 }, { px: 0 }],
                  };
                }
                for (
                  var o = [], s = [], u = 0;
                  u < n.length || u < r.length;
                  u++
                ) {
                  var c = n[u] || a(r[u].inset),
                    l = r[u] || a(n[u].inset);
                  o.push(c), s.push(l);
                }
                return t.mergeNestedRepeated(e, i, o, s);
              }.bind(
                null,
                function(e, i) {
                  for (
                    ;
                    e.lengths.length <
                    Math.max(e.lengths.length, i.lengths.length);

                  )
                    e.lengths.push({ px: 0 });
                  for (
                    ;
                    i.lengths.length <
                    Math.max(e.lengths.length, i.lengths.length);

                  )
                    i.lengths.push({ px: 0 });
                  if (e.inset == i.inset && !!e.color == !!i.color) {
                    for (
                      var n, r = [], a = [[], 0], o = [[], 0], s = 0;
                      s < e.lengths.length;
                      s++
                    ) {
                      var u = t.mergeDimensions(
                        e.lengths[s],
                        i.lengths[s],
                        2 == s
                      );
                      a[0].push(u[0]), o[0].push(u[1]), r.push(u[2]);
                    }
                    if (e.color && i.color) {
                      var c = t.mergeColors(e.color, i.color);
                      (a[1] = c[0]), (o[1] = c[1]), (n = c[2]);
                    }
                    return [
                      a,
                      o,
                      function(t) {
                        for (
                          var i = e.inset ? "inset " : " ", a = 0;
                          a < r.length;
                          a++
                        )
                          i += r[a](t[0][a]) + " ";
                        return n && (i += n(t[1])), i;
                      },
                    ];
                  }
                },
                ", "
              );
              t.addPropertiesHandler(
                function(i) {
                  var n = t.consumeRepeated(e, /^,/, i);
                  if (n && "" == n[1]) return n[0];
                },
                i,
                ["box-shadow", "text-shadow"]
              );
            })(r),
            (function(t, e) {
              function i(t) {
                return t
                  .toFixed(3)
                  .replace(/0+$/, "")
                  .replace(/\.$/, "");
              }
              function n(t, e, i) {
                return Math.min(e, Math.max(t, i));
              }
              function r(t) {
                if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(t)) return Number(t);
              }
              function a(t, e) {
                return function(r, a) {
                  return [
                    r,
                    a,
                    function(r) {
                      return i(n(t, e, r));
                    },
                  ];
                };
              }
              function o(t) {
                var e = t.trim().split(/\s*[\s,]\s*/);
                if (0 !== e.length) {
                  for (var i = [], n = 0; n < e.length; n++) {
                    var a = r(e[n]);
                    if (void 0 === a) return;
                    i.push(a);
                  }
                  return i;
                }
              }
              (t.clamp = n),
                t.addPropertiesHandler(
                  o,
                  function(t, e) {
                    if (t.length == e.length)
                      return [
                        t,
                        e,
                        function(t) {
                          return t.map(i).join(" ");
                        },
                      ];
                  },
                  ["stroke-dasharray"]
                ),
                t.addPropertiesHandler(r, a(0, 1 / 0), [
                  "border-image-width",
                  "line-height",
                ]),
                t.addPropertiesHandler(r, a(0, 1), [
                  "opacity",
                  "shape-image-threshold",
                ]),
                t.addPropertiesHandler(
                  r,
                  function(t, e) {
                    if (0 != t) return a(0, 1 / 0)(t, e);
                  },
                  ["flex-grow", "flex-shrink"]
                ),
                t.addPropertiesHandler(
                  r,
                  function(t, e) {
                    return [
                      t,
                      e,
                      function(t) {
                        return Math.round(n(1, 1 / 0, t));
                      },
                    ];
                  },
                  ["orphans", "widows"]
                ),
                t.addPropertiesHandler(
                  r,
                  function(t, e) {
                    return [t, e, Math.round];
                  },
                  ["z-index"]
                ),
                (t.parseNumber = r),
                (t.parseNumberList = o),
                (t.mergeNumbers = function(t, e) {
                  return [t, e, i];
                }),
                (t.numberToString = i);
            })(r),
            r.addPropertiesHandler(
              String,
              function(t, e) {
                if ("visible" == t || "visible" == e)
                  return [
                    0,
                    1,
                    function(i) {
                      return i <= 0 ? t : i >= 1 ? e : "visible";
                    },
                  ];
              },
              ["visibility"]
            ),
            (function(t, e) {
              function i(t) {
                (t = t.trim()), (a.fillStyle = "#000"), (a.fillStyle = t);
                var e = a.fillStyle;
                if (
                  ((a.fillStyle = "#fff"), (a.fillStyle = t), e == a.fillStyle)
                ) {
                  a.fillRect(0, 0, 1, 1);
                  var i = a.getImageData(0, 0, 1, 1).data;
                  a.clearRect(0, 0, 1, 1);
                  var n = i[3] / 255;
                  return [i[0] * n, i[1] * n, i[2] * n, n];
                }
              }
              function n(e, i) {
                return [
                  e,
                  i,
                  function(e) {
                    function i(t) {
                      return Math.max(0, Math.min(255, t));
                    }
                    if (e[3])
                      for (var n = 0; n < 3; n++)
                        e[n] = Math.round(i(e[n] / e[3]));
                    return (
                      (e[3] = t.numberToString(t.clamp(0, 1, e[3]))),
                      "rgba(" + e.join(",") + ")"
                    );
                  },
                ];
              }
              var r = document.createElementNS(
                "http://www.w3.org/1999/xhtml",
                "canvas"
              );
              r.width = r.height = 1;
              var a = r.getContext("2d");
              t.addPropertiesHandler(i, n, [
                "background-color",
                "border-bottom-color",
                "border-left-color",
                "border-right-color",
                "border-top-color",
                "color",
                "fill",
                "flood-color",
                "lighting-color",
                "outline-color",
                "stop-color",
                "stroke",
                "text-decoration-color",
              ]),
                (t.consumeColor = t.consumeParenthesised.bind(null, i)),
                (t.mergeColors = n);
            })(r),
            (function(t, e) {
              function i(t) {
                function e() {
                  var e = o.exec(t);
                  a = e ? e[0] : void 0;
                }
                function i() {
                  if ("(" !== a)
                    return (function() {
                      var t = Number(a);
                      return e(), t;
                    })();
                  e();
                  var t = r();
                  return ")" !== a ? NaN : (e(), t);
                }
                function n() {
                  for (var t = i(); "*" === a || "/" === a; ) {
                    var n = a;
                    e();
                    var r = i();
                    "*" === n ? (t *= r) : (t /= r);
                  }
                  return t;
                }
                function r() {
                  for (var t = n(); "+" === a || "-" === a; ) {
                    var i = a;
                    e();
                    var r = n();
                    "+" === i ? (t += r) : (t -= r);
                  }
                  return t;
                }
                var a,
                  o = /([\+\-\w\.]+|[\(\)\*\/])/g;
                return e(), r();
              }
              function n(t, e) {
                if ("0" == (e = e.trim().toLowerCase()) && "px".search(t) >= 0)
                  return { px: 0 };
                if (/^[^(]*$|^calc/.test(e)) {
                  e = e.replace(/calc\(/g, "(");
                  var n = {};
                  e = e.replace(t, function(t) {
                    return (n[t] = null), "U" + t;
                  });
                  for (
                    var r = "U(" + t.source + ")",
                      a = e
                        .replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N")
                        .replace(new RegExp("N" + r, "g"), "D")
                        .replace(/\s[+-]\s/g, "O")
                        .replace(/\s/g, ""),
                      o = [
                        /N\*(D)/g,
                        /(N|D)[*\/]N/g,
                        /(N|D)O\1/g,
                        /\((N|D)\)/g,
                      ],
                      s = 0;
                    s < o.length;

                  )
                    o[s].test(a) ? ((a = a.replace(o[s], "$1")), (s = 0)) : s++;
                  if ("D" == a) {
                    for (var u in n) {
                      var c = i(
                        e
                          .replace(new RegExp("U" + u, "g"), "")
                          .replace(new RegExp(r, "g"), "*0")
                      );
                      if (!isFinite(c)) return;
                      n[u] = c;
                    }
                    return n;
                  }
                }
              }
              function r(t, e) {
                return a(t, e, !0);
              }
              function a(e, i, n) {
                var r,
                  a = [];
                for (r in e) a.push(r);
                for (r in i) a.indexOf(r) < 0 && a.push(r);
                return (
                  (e = a.map(function(t) {
                    return e[t] || 0;
                  })),
                  (i = a.map(function(t) {
                    return i[t] || 0;
                  })),
                  [
                    e,
                    i,
                    function(e) {
                      var i = e
                        .map(function(i, r) {
                          return (
                            1 == e.length && n && (i = Math.max(i, 0)),
                            t.numberToString(i) + a[r]
                          );
                        })
                        .join(" + ");
                      return e.length > 1 ? "calc(" + i + ")" : i;
                    },
                  ]
                );
              }
              var o = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
                s = n.bind(null, new RegExp(o, "g")),
                u = n.bind(null, new RegExp(o + "|%", "g")),
                c = n.bind(null, /deg|rad|grad|turn/g);
              (t.parseLength = s),
                (t.parseLengthOrPercent = u),
                (t.consumeLengthOrPercent = t.consumeParenthesised.bind(
                  null,
                  u
                )),
                (t.parseAngle = c),
                (t.mergeDimensions = a);
              var l = t.consumeParenthesised.bind(null, s),
                f = t.consumeRepeated.bind(void 0, l, /^/),
                h = t.consumeRepeated.bind(void 0, f, /^,/);
              t.consumeSizePairList = h;
              var m = t.mergeNestedRepeated.bind(void 0, r, " "),
                d = t.mergeNestedRepeated.bind(void 0, m, ",");
              (t.mergeNonNegativeSizePair = m),
                t.addPropertiesHandler(
                  function(t) {
                    var e = h(t);
                    if (e && "" == e[1]) return e[0];
                  },
                  d,
                  ["background-size"]
                ),
                t.addPropertiesHandler(u, r, [
                  "border-bottom-width",
                  "border-image-width",
                  "border-left-width",
                  "border-right-width",
                  "border-top-width",
                  "flex-basis",
                  "font-size",
                  "height",
                  "line-height",
                  "max-height",
                  "max-width",
                  "outline-width",
                  "width",
                ]),
                t.addPropertiesHandler(u, a, [
                  "border-bottom-left-radius",
                  "border-bottom-right-radius",
                  "border-top-left-radius",
                  "border-top-right-radius",
                  "bottom",
                  "left",
                  "letter-spacing",
                  "margin-bottom",
                  "margin-left",
                  "margin-right",
                  "margin-top",
                  "min-height",
                  "min-width",
                  "outline-offset",
                  "padding-bottom",
                  "padding-left",
                  "padding-right",
                  "padding-top",
                  "perspective",
                  "right",
                  "shape-margin",
                  "stroke-dashoffset",
                  "text-indent",
                  "top",
                  "vertical-align",
                  "word-spacing",
                ]);
            })(r),
            (function(t, e) {
              function i(e) {
                return (
                  t.consumeLengthOrPercent(e) || t.consumeToken(/^auto/, e)
                );
              }
              function n(e) {
                var n = t.consumeList(
                  [
                    t.ignore(t.consumeToken.bind(null, /^rect/)),
                    t.ignore(t.consumeToken.bind(null, /^\(/)),
                    t.consumeRepeated.bind(null, i, /^,/),
                    t.ignore(t.consumeToken.bind(null, /^\)/)),
                  ],
                  e
                );
                if (n && 4 == n[0].length) return n[0];
              }
              var r = t.mergeWrappedNestedRepeated.bind(
                null,
                function(t) {
                  return "rect(" + t + ")";
                },
                function(e, i) {
                  return "auto" == e || "auto" == i
                    ? [
                        !0,
                        !1,
                        function(n) {
                          var r = n ? e : i;
                          if ("auto" == r) return "auto";
                          var a = t.mergeDimensions(r, r);
                          return a[2](a[0]);
                        },
                      ]
                    : t.mergeDimensions(e, i);
                },
                ", "
              );
              (t.parseBox = n),
                (t.mergeBoxes = r),
                t.addPropertiesHandler(n, r, ["clip"]);
            })(r),
            (function(t, e) {
              function i(t) {
                return function(e) {
                  var i = 0;
                  return t.map(function(t) {
                    return t === c ? e[i++] : t;
                  });
                };
              }
              function n(t) {
                return t;
              }
              function r(e) {
                if ("none" == (e = e.toLowerCase().trim())) return [];
                for (
                  var i, n = /\s*(\w+)\(([^)]*)\)/g, r = [], a = 0;
                  (i = n.exec(e));

                ) {
                  if (i.index != a) return;
                  a = i.index + i[0].length;
                  var o = i[1],
                    s = h[o];
                  if (!s) return;
                  var u = i[2].split(","),
                    c = s[0];
                  if (c.length < u.length) return;
                  for (var m = [], d = 0; d < c.length; d++) {
                    var p,
                      _ = u[d],
                      g = c[d];
                    if (
                      void 0 ===
                      (p = _
                        ? {
                            A: function(e) {
                              return "0" == e.trim() ? f : t.parseAngle(e);
                            },
                            N: t.parseNumber,
                            T: t.parseLengthOrPercent,
                            L: t.parseLength,
                          }[g.toUpperCase()](_)
                        : { a: f, n: m[0], t: l }[g])
                    )
                      return;
                    m.push(p);
                  }
                  if ((r.push({ t: o, d: m }), n.lastIndex == e.length))
                    return r;
                }
              }
              function a(t) {
                return t.toFixed(6).replace(".000000", "");
              }
              function o(e, i) {
                if (e.decompositionPair !== i) {
                  e.decompositionPair = i;
                  var n = t.makeMatrixDecomposition(e);
                }
                if (i.decompositionPair !== e) {
                  i.decompositionPair = e;
                  var r = t.makeMatrixDecomposition(i);
                }
                return null == n[0] || null == r[0]
                  ? [
                      [!1],
                      [!0],
                      function(t) {
                        return t ? i[0].d : e[0].d;
                      },
                    ]
                  : (n[0].push(0),
                    r[0].push(1),
                    [
                      n,
                      r,
                      function(e) {
                        var i = t.quat(n[0][3], r[0][3], e[5]);
                        return t
                          .composeMatrix(e[0], e[1], e[2], i, e[4])
                          .map(a)
                          .join(",");
                      },
                    ]);
              }
              function s(t) {
                return t.replace(/[xy]/, "");
              }
              function u(t) {
                return t.replace(/(x|y|z|3d)?$/, "3d");
              }
              var c = null,
                l = { px: 0 },
                f = { deg: 0 },
                h = {
                  matrix: [
                    "NNNNNN",
                    [c, c, 0, 0, c, c, 0, 0, 0, 0, 1, 0, c, c, 0, 1],
                    n,
                  ],
                  matrix3d: ["NNNNNNNNNNNNNNNN", n],
                  rotate: ["A"],
                  rotatex: ["A"],
                  rotatey: ["A"],
                  rotatez: ["A"],
                  rotate3d: ["NNNA"],
                  perspective: ["L"],
                  scale: ["Nn", i([c, c, 1]), n],
                  scalex: ["N", i([c, 1, 1]), i([c, 1])],
                  scaley: ["N", i([1, c, 1]), i([1, c])],
                  scalez: ["N", i([1, 1, c])],
                  scale3d: ["NNN", n],
                  skew: ["Aa", null, n],
                  skewx: ["A", null, i([c, f])],
                  skewy: ["A", null, i([f, c])],
                  translate: ["Tt", i([c, c, l]), n],
                  translatex: ["T", i([c, l, l]), i([c, l])],
                  translatey: ["T", i([l, c, l]), i([l, c])],
                  translatez: ["L", i([l, l, c])],
                  translate3d: ["TTL", n],
                };
              t.addPropertiesHandler(
                r,
                function(e, i) {
                  var n = t.makeMatrixDecomposition && !0,
                    r = !1;
                  if (!e.length || !i.length) {
                    e.length || ((r = !0), (e = i), (i = []));
                    for (var a = 0; a < e.length; a++) {
                      var c = e[a].t,
                        l = e[a].d,
                        f = "scale" == c.substr(0, 5) ? 1 : 0;
                      i.push({
                        t: c,
                        d: l.map(function(t) {
                          if ("number" == typeof t) return f;
                          var e = {};
                          for (var i in t) e[i] = f;
                          return e;
                        }),
                      });
                    }
                  }
                  var m = function(t, e) {
                      return (
                        ("perspective" == t && "perspective" == e) ||
                        (("matrix" == t || "matrix3d" == t) &&
                          ("matrix" == e || "matrix3d" == e))
                      );
                    },
                    d = [],
                    p = [],
                    _ = [];
                  if (e.length != i.length) {
                    if (!n) return;
                    (d = [(x = o(e, i))[0]]),
                      (p = [x[1]]),
                      (_ = [["matrix", [x[2]]]]);
                  } else
                    for (a = 0; a < e.length; a++) {
                      var g = e[a].t,
                        v = i[a].t,
                        y = e[a].d,
                        b = i[a].d,
                        w = h[g],
                        T = h[v];
                      if (m(g, v)) {
                        if (!n) return;
                        var x = o([e[a]], [i[a]]);
                        d.push(x[0]), p.push(x[1]), _.push(["matrix", [x[2]]]);
                      } else {
                        if (g == v) c = g;
                        else if (w[2] && T[2] && s(g) == s(v))
                          (c = s(g)), (y = w[2](y)), (b = T[2](b));
                        else {
                          if (!w[1] || !T[1] || u(g) != u(v)) {
                            if (!n) return;
                            (d = [(x = o(e, i))[0]]),
                              (p = [x[1]]),
                              (_ = [["matrix", [x[2]]]]);
                            break;
                          }
                          (c = u(g)), (y = w[1](y)), (b = T[1](b));
                        }
                        for (
                          var E = [], A = [], P = [], k = 0;
                          k < y.length;
                          k++
                        )
                          (x = ("number" == typeof y[k]
                            ? t.mergeNumbers
                            : t.mergeDimensions)(y[k], b[k])),
                            (E[k] = x[0]),
                            (A[k] = x[1]),
                            P.push(x[2]);
                        d.push(E), p.push(A), _.push([c, P]);
                      }
                    }
                  if (r) {
                    var R = d;
                    (d = p), (p = R);
                  }
                  return [
                    d,
                    p,
                    function(t) {
                      return t
                        .map(function(t, e) {
                          var i = t
                            .map(function(t, i) {
                              return _[e][1][i](t);
                            })
                            .join(",");
                          return (
                            "matrix" == _[e][0] &&
                              16 == i.split(",").length &&
                              (_[e][0] = "matrix3d"),
                            _[e][0] + "(" + i + ")"
                          );
                        })
                        .join(" ");
                    },
                  ];
                },
                ["transform"]
              ),
                (t.transformToSvgMatrix = function(e) {
                  var i = t.transformListToMatrix(r(e));
                  return (
                    "matrix(" +
                    a(i[0]) +
                    " " +
                    a(i[1]) +
                    " " +
                    a(i[4]) +
                    " " +
                    a(i[5]) +
                    " " +
                    a(i[12]) +
                    " " +
                    a(i[13]) +
                    ")"
                  );
                });
            })(r),
            (function(t, e) {
              function i(t, e) {
                e.concat([t]).forEach(function(e) {
                  e in document.documentElement.style && (n[t] = e), (r[e] = t);
                });
              }
              var n = {},
                r = {};
              i("transform", ["webkitTransform", "msTransform"]),
                i("transformOrigin", ["webkitTransformOrigin"]),
                i("perspective", ["webkitPerspective"]),
                i("perspectiveOrigin", ["webkitPerspectiveOrigin"]),
                (t.propertyName = function(t) {
                  return n[t] || t;
                }),
                (t.unprefixedPropertyName = function(t) {
                  return r[t] || t;
                });
            })(r);
        })(),
        (function() {
          if (void 0 === document.createElement("div").animate([]).oncancel) {
            if (window.performance && performance.now)
              var t = function() {
                return performance.now();
              };
            else
              t = function() {
                return Date.now();
              };
            var e = function(t, e, i) {
                (this.target = t),
                  (this.currentTime = e),
                  (this.timelineTime = i),
                  (this.type = "cancel"),
                  (this.bubbles = !1),
                  (this.cancelable = !1),
                  (this.currentTarget = t),
                  (this.defaultPrevented = !1),
                  (this.eventPhase = Event.AT_TARGET),
                  (this.timeStamp = Date.now());
              },
              i = window.Element.prototype.animate;
            window.Element.prototype.animate = function(n, r) {
              var a = i.call(this, n, r);
              (a._cancelHandlers = []), (a.oncancel = null);
              var o = a.cancel;
              a.cancel = function() {
                o.call(this);
                var i = new e(this, null, t()),
                  n = this._cancelHandlers.concat(
                    this.oncancel ? [this.oncancel] : []
                  );
                setTimeout(function() {
                  n.forEach(function(t) {
                    t.call(i.target, i);
                  });
                }, 0);
              };
              var s = a.addEventListener;
              a.addEventListener = function(t, e) {
                "function" == typeof e && "cancel" == t
                  ? this._cancelHandlers.push(e)
                  : s.call(this, t, e);
              };
              var u = a.removeEventListener;
              return (
                (a.removeEventListener = function(t, e) {
                  if ("cancel" == t) {
                    var i = this._cancelHandlers.indexOf(e);
                    i >= 0 && this._cancelHandlers.splice(i, 1);
                  } else u.call(this, t, e);
                }),
                a
              );
            };
          }
        })(),
        (function(t) {
          var e = document.documentElement,
            i = null,
            n = !1;
          try {
            var r =
              "0" == getComputedStyle(e).getPropertyValue("opacity")
                ? "1"
                : "0";
            ((i = e.animate(
              { opacity: [r, r] },
              { duration: 1 }
            )).currentTime = 0),
              (n = getComputedStyle(e).getPropertyValue("opacity") == r);
          } catch (t) {
          } finally {
            i && i.cancel();
          }
          if (!n) {
            var a = window.Element.prototype.animate;
            window.Element.prototype.animate = function(e, i) {
              return (
                window.Symbol &&
                  Symbol.iterator &&
                  Array.prototype.from &&
                  e[Symbol.iterator] &&
                  (e = Array.from(e)),
                Array.isArray(e) || null === e || (e = t.convertToArrayForm(e)),
                a.call(this, e, i)
              );
            };
          }
        })(n),
        (function(t, e, i) {
          function n(t) {
            var i = e.timeline;
            (i.currentTime = t),
              i._discardAnimations(),
              0 == i._animations.length ? (a = !1) : requestAnimationFrame(n);
          }
          var r = window.requestAnimationFrame;
          (window.requestAnimationFrame = function(t) {
            return r(function(i) {
              e.timeline._updateAnimationsPromises(),
                t(i),
                e.timeline._updateAnimationsPromises();
            });
          }),
            (e.AnimationTimeline = function() {
              (this._animations = []), (this.currentTime = void 0);
            }),
            (e.AnimationTimeline.prototype = {
              getAnimations: function() {
                return this._discardAnimations(), this._animations.slice();
              },
              _updateAnimationsPromises: function() {
                e.animationsWithPromises = e.animationsWithPromises.filter(
                  function(t) {
                    return t._updatePromises();
                  }
                );
              },
              _discardAnimations: function() {
                this._updateAnimationsPromises(),
                  (this._animations = this._animations.filter(function(t) {
                    return "finished" != t.playState && "idle" != t.playState;
                  }));
              },
              _play: function(t) {
                var i = new e.Animation(t, this);
                return (
                  this._animations.push(i),
                  e.restartWebAnimationsNextTick(),
                  i._updatePromises(),
                  i._animation.play(),
                  i._updatePromises(),
                  i
                );
              },
              play: function(t) {
                return t && t.remove(), this._play(t);
              },
            });
          var a = !1;
          e.restartWebAnimationsNextTick = function() {
            a || ((a = !0), requestAnimationFrame(n));
          };
          var o = new e.AnimationTimeline();
          e.timeline = o;
          try {
            Object.defineProperty(window.document, "timeline", {
              configurable: !0,
              get: function() {
                return o;
              },
            });
          } catch (t) {}
          try {
            window.document.timeline = o;
          } catch (t) {}
        })(0, a),
        (function(t, e, i) {
          (e.animationsWithPromises = []),
            (e.Animation = function(e, i) {
              if (
                ((this.id = ""),
                e && e._id && (this.id = e._id),
                (this.effect = e),
                e && (e._animation = this),
                !i)
              )
                throw new Error(
                  "Animation with null timeline is not supported"
                );
              (this._timeline = i),
                (this._sequenceNumber = t.sequenceNumber++),
                (this._holdTime = 0),
                (this._paused = !1),
                (this._isGroup = !1),
                (this._animation = null),
                (this._childAnimations = []),
                (this._callback = null),
                (this._oldPlayState = "idle"),
                this._rebuildUnderlyingAnimation(),
                this._animation.cancel(),
                this._updatePromises();
            }),
            (e.Animation.prototype = {
              _updatePromises: function() {
                var t = this._oldPlayState,
                  e = this.playState;
                return (
                  this._readyPromise &&
                    e !== t &&
                    ("idle" == e
                      ? (this._rejectReadyPromise(),
                        (this._readyPromise = void 0))
                      : "pending" == t
                      ? this._resolveReadyPromise()
                      : "pending" == e && (this._readyPromise = void 0)),
                  this._finishedPromise &&
                    e !== t &&
                    ("idle" == e
                      ? (this._rejectFinishedPromise(),
                        (this._finishedPromise = void 0))
                      : "finished" == e
                      ? this._resolveFinishedPromise()
                      : "finished" == t && (this._finishedPromise = void 0)),
                  (this._oldPlayState = this.playState),
                  this._readyPromise || this._finishedPromise
                );
              },
              _rebuildUnderlyingAnimation: function() {
                this._updatePromises();
                var t,
                  i,
                  n,
                  r,
                  a = !!this._animation;
                a &&
                  ((t = this.playbackRate),
                  (i = this._paused),
                  (n = this.startTime),
                  (r = this.currentTime),
                  this._animation.cancel(),
                  (this._animation._wrapper = null),
                  (this._animation = null)),
                  (!this.effect ||
                    this.effect instanceof window.KeyframeEffect) &&
                    ((this._animation = e.newUnderlyingAnimationForKeyframeEffect(
                      this.effect
                    )),
                    e.bindAnimationForKeyframeEffect(this)),
                  (this.effect instanceof window.SequenceEffect ||
                    this.effect instanceof window.GroupEffect) &&
                    ((this._animation = e.newUnderlyingAnimationForGroup(
                      this.effect
                    )),
                    e.bindAnimationForGroup(this)),
                  this.effect &&
                    this.effect._onsample &&
                    e.bindAnimationForCustomEffect(this),
                  a &&
                    (1 != t && (this.playbackRate = t),
                    null !== n
                      ? (this.startTime = n)
                      : null !== r
                      ? (this.currentTime = r)
                      : null !== this._holdTime &&
                        (this.currentTime = this._holdTime),
                    i && this.pause()),
                  this._updatePromises();
              },
              _updateChildren: function() {
                if (this.effect && "idle" != this.playState) {
                  var t = this.effect._timing.delay;
                  this._childAnimations.forEach(
                    function(i) {
                      this._arrangeChildren(i, t),
                        this.effect instanceof window.SequenceEffect &&
                          (t += e.groupChildDuration(i.effect));
                    }.bind(this)
                  );
                }
              },
              _setExternalAnimation: function(t) {
                if (this.effect && this._isGroup)
                  for (var e = 0; e < this.effect.children.length; e++)
                    (this.effect.children[e]._animation = t),
                      this._childAnimations[e]._setExternalAnimation(t);
              },
              _constructChildAnimations: function() {
                if (this.effect && this._isGroup) {
                  var t = this.effect._timing.delay;
                  this._removeChildAnimations(),
                    this.effect.children.forEach(
                      function(i) {
                        var n = e.timeline._play(i);
                        this._childAnimations.push(n),
                          (n.playbackRate = this.playbackRate),
                          this._paused && n.pause(),
                          (i._animation = this.effect._animation),
                          this._arrangeChildren(n, t),
                          this.effect instanceof window.SequenceEffect &&
                            (t += e.groupChildDuration(i));
                      }.bind(this)
                    );
                }
              },
              _arrangeChildren: function(t, e) {
                null === this.startTime
                  ? (t.currentTime = this.currentTime - e / this.playbackRate)
                  : t.startTime !== this.startTime + e / this.playbackRate &&
                    (t.startTime = this.startTime + e / this.playbackRate);
              },
              get timeline() {
                return this._timeline;
              },
              get playState() {
                return this._animation ? this._animation.playState : "idle";
              },
              get finished() {
                return window.Promise
                  ? (this._finishedPromise ||
                      (-1 == e.animationsWithPromises.indexOf(this) &&
                        e.animationsWithPromises.push(this),
                      (this._finishedPromise = new Promise(
                        function(t, e) {
                          (this._resolveFinishedPromise = function() {
                            t(this);
                          }),
                            (this._rejectFinishedPromise = function() {
                              e({
                                type: DOMException.ABORT_ERR,
                                name: "AbortError",
                              });
                            });
                        }.bind(this)
                      )),
                      "finished" == this.playState &&
                        this._resolveFinishedPromise()),
                    this._finishedPromise)
                  : (console.warn(
                      "Animation Promises require JavaScript Promise constructor"
                    ),
                    null);
              },
              get ready() {
                return window.Promise
                  ? (this._readyPromise ||
                      (-1 == e.animationsWithPromises.indexOf(this) &&
                        e.animationsWithPromises.push(this),
                      (this._readyPromise = new Promise(
                        function(t, e) {
                          (this._resolveReadyPromise = function() {
                            t(this);
                          }),
                            (this._rejectReadyPromise = function() {
                              e({
                                type: DOMException.ABORT_ERR,
                                name: "AbortError",
                              });
                            });
                        }.bind(this)
                      )),
                      "pending" !== this.playState &&
                        this._resolveReadyPromise()),
                    this._readyPromise)
                  : (console.warn(
                      "Animation Promises require JavaScript Promise constructor"
                    ),
                    null);
              },
              get onfinish() {
                return this._animation.onfinish;
              },
              set onfinish(t) {
                this._animation.onfinish =
                  "function" == typeof t
                    ? function(e) {
                        (e.target = this), t.call(this, e);
                      }.bind(this)
                    : t;
              },
              get oncancel() {
                return this._animation.oncancel;
              },
              set oncancel(t) {
                this._animation.oncancel =
                  "function" == typeof t
                    ? function(e) {
                        (e.target = this), t.call(this, e);
                      }.bind(this)
                    : t;
              },
              get currentTime() {
                this._updatePromises();
                var t = this._animation.currentTime;
                return this._updatePromises(), t;
              },
              set currentTime(t) {
                this._updatePromises(),
                  (this._animation.currentTime = isFinite(t)
                    ? t
                    : Math.sign(t) * Number.MAX_VALUE),
                  this._register(),
                  this._forEachChild(function(e, i) {
                    e.currentTime = t - i;
                  }),
                  this._updatePromises();
              },
              get startTime() {
                return this._animation.startTime;
              },
              set startTime(t) {
                this._updatePromises(),
                  (this._animation.startTime = isFinite(t)
                    ? t
                    : Math.sign(t) * Number.MAX_VALUE),
                  this._register(),
                  this._forEachChild(function(e, i) {
                    e.startTime = t + i;
                  }),
                  this._updatePromises();
              },
              get playbackRate() {
                return this._animation.playbackRate;
              },
              set playbackRate(t) {
                this._updatePromises();
                var e = this.currentTime;
                (this._animation.playbackRate = t),
                  this._forEachChild(function(e) {
                    e.playbackRate = t;
                  }),
                  null !== e && (this.currentTime = e),
                  this._updatePromises();
              },
              play: function() {
                this._updatePromises(),
                  (this._paused = !1),
                  this._animation.play(),
                  -1 == this._timeline._animations.indexOf(this) &&
                    this._timeline._animations.push(this),
                  this._register(),
                  e.awaitStartTime(this),
                  this._forEachChild(function(t) {
                    var e = t.currentTime;
                    t.play(), (t.currentTime = e);
                  }),
                  this._updatePromises();
              },
              pause: function() {
                this._updatePromises(),
                  this.currentTime && (this._holdTime = this.currentTime),
                  this._animation.pause(),
                  this._register(),
                  this._forEachChild(function(t) {
                    t.pause();
                  }),
                  (this._paused = !0),
                  this._updatePromises();
              },
              finish: function() {
                this._updatePromises(),
                  this._animation.finish(),
                  this._register(),
                  this._updatePromises();
              },
              cancel: function() {
                this._updatePromises(),
                  this._animation.cancel(),
                  this._register(),
                  this._removeChildAnimations(),
                  this._updatePromises();
              },
              reverse: function() {
                this._updatePromises();
                var t = this.currentTime;
                this._animation.reverse(),
                  this._forEachChild(function(t) {
                    t.reverse();
                  }),
                  null !== t && (this.currentTime = t),
                  this._updatePromises();
              },
              addEventListener: function(t, e) {
                var i = e;
                "function" == typeof e &&
                  ((i = function(t) {
                    (t.target = this), e.call(this, t);
                  }.bind(this)),
                  (e._wrapper = i)),
                  this._animation.addEventListener(t, i);
              },
              removeEventListener: function(t, e) {
                this._animation.removeEventListener(t, (e && e._wrapper) || e);
              },
              _removeChildAnimations: function() {
                for (; this._childAnimations.length; )
                  this._childAnimations.pop().cancel();
              },
              _forEachChild: function(e) {
                var i = 0;
                if (
                  (this.effect.children &&
                    this._childAnimations.length <
                      this.effect.children.length &&
                    this._constructChildAnimations(),
                  this._childAnimations.forEach(
                    function(t) {
                      e.call(this, t, i),
                        this.effect instanceof window.SequenceEffect &&
                          (i += t.effect.activeDuration);
                    }.bind(this)
                  ),
                  "pending" != this.playState)
                ) {
                  var n = this.effect._timing,
                    r = this.currentTime;
                  null !== r &&
                    (r = t.calculateIterationProgress(
                      t.calculateActiveDuration(n),
                      r,
                      n
                    )),
                    (null == r || isNaN(r)) && this._removeChildAnimations();
                }
              },
            }),
            (window.Animation = e.Animation);
        })(n, a),
        (function(t, e, i) {
          function n(e) {
            this._frames = t.normalizeKeyframes(e);
          }
          function r() {
            for (var t = !1; u.length; ) u.shift()._updateChildren(), (t = !0);
            return t;
          }
          var a = function t(e) {
            if (
              ((e._animation = void 0),
              e instanceof window.SequenceEffect ||
                e instanceof window.GroupEffect)
            )
              for (var i = 0; i < e.children.length; i++) t(e.children[i]);
          };
          (e.removeMulti = function(t) {
            for (var e = [], i = 0; i < t.length; i++) {
              var n = t[i];
              n._parent
                ? (-1 == e.indexOf(n._parent) && e.push(n._parent),
                  n._parent.children.splice(n._parent.children.indexOf(n), 1),
                  (n._parent = null),
                  a(n))
                : n._animation &&
                  n._animation.effect == n &&
                  (n._animation.cancel(),
                  (n._animation.effect = new KeyframeEffect(null, [])),
                  n._animation._callback &&
                    (n._animation._callback._animation = null),
                  n._animation._rebuildUnderlyingAnimation(),
                  a(n));
            }
            for (i = 0; i < e.length; i++) e[i]._rebuild();
          }),
            (e.KeyframeEffect = function(e, i, r, a) {
              return (
                (this.target = e),
                (this._parent = null),
                (r = t.numericTimingToObject(r)),
                (this._timingInput = t.cloneTimingInput(r)),
                (this._timing = t.normalizeTimingInput(r)),
                (this.timing = t.makeTiming(r, !1, this)),
                (this.timing._effect = this),
                "function" == typeof i
                  ? (t.deprecated(
                      "Custom KeyframeEffect",
                      "2015-06-22",
                      "Use KeyframeEffect.onsample instead."
                    ),
                    (this._normalizedKeyframes = i))
                  : (this._normalizedKeyframes = new n(i)),
                (this._keyframes = i),
                (this.activeDuration = t.calculateActiveDuration(this._timing)),
                (this._id = a),
                this
              );
            }),
            (e.KeyframeEffect.prototype = {
              getFrames: function() {
                return "function" == typeof this._normalizedKeyframes
                  ? this._normalizedKeyframes
                  : this._normalizedKeyframes._frames;
              },
              set onsample(t) {
                if ("function" == typeof this.getFrames())
                  throw new Error(
                    "Setting onsample on custom effect KeyframeEffect is not supported."
                  );
                (this._onsample = t),
                  this._animation &&
                    this._animation._rebuildUnderlyingAnimation();
              },
              get parent() {
                return this._parent;
              },
              clone: function() {
                if ("function" == typeof this.getFrames())
                  throw new Error("Cloning custom effects is not supported.");
                var e = new KeyframeEffect(
                  this.target,
                  [],
                  t.cloneTimingInput(this._timingInput),
                  this._id
                );
                return (
                  (e._normalizedKeyframes = this._normalizedKeyframes),
                  (e._keyframes = this._keyframes),
                  e
                );
              },
              remove: function() {
                e.removeMulti([this]);
              },
            });
          var o = Element.prototype.animate;
          Element.prototype.animate = function(t, i) {
            var n = "";
            return (
              i && i.id && (n = i.id),
              e.timeline._play(new e.KeyframeEffect(this, t, i, n))
            );
          };
          var s = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "div"
          );
          (e.newUnderlyingAnimationForKeyframeEffect = function(t) {
            if (t) {
              var e = t.target || s;
              "function" == typeof (i = t._keyframes) && (i = []),
                ((n = t._timingInput).id = t._id);
            } else {
              e = s;
              var i = [],
                n = 0;
            }
            return o.apply(e, [i, n]);
          }),
            (e.bindAnimationForKeyframeEffect = function(t) {
              t.effect &&
                "function" == typeof t.effect._normalizedKeyframes &&
                e.bindAnimationForCustomEffect(t);
            });
          var u = [];
          e.awaitStartTime = function(t) {
            null === t.startTime &&
              t._isGroup &&
              (0 == u.length && requestAnimationFrame(r), u.push(t));
          };
          var c = window.getComputedStyle;
          Object.defineProperty(window, "getComputedStyle", {
            configurable: !0,
            enumerable: !0,
            value: function() {
              e.timeline._updateAnimationsPromises();
              var t = c.apply(this, arguments);
              return (
                r() && (t = c.apply(this, arguments)),
                e.timeline._updateAnimationsPromises(),
                t
              );
            },
          }),
            (window.KeyframeEffect = e.KeyframeEffect),
            (window.Element.prototype.getAnimations = function() {
              return document.timeline.getAnimations().filter(
                function(t) {
                  return null !== t.effect && t.effect.target == this;
                }.bind(this)
              );
            });
        })(n, a),
        (function(t, e, i) {
          function n(t) {
            t._registered ||
              ((t._registered = !0),
              o.push(t),
              s || ((s = !0), requestAnimationFrame(r)));
          }
          function r(t) {
            var e = o;
            (o = []),
              e.sort(function(t, e) {
                return t._sequenceNumber - e._sequenceNumber;
              }),
              (e = e.filter(function(t) {
                t();
                var e = t._animation ? t._animation.playState : "idle";
                return (
                  "running" != e && "pending" != e && (t._registered = !1),
                  t._registered
                );
              })),
              o.push.apply(o, e),
              o.length ? ((s = !0), requestAnimationFrame(r)) : (s = !1);
          }
          var a = (document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "div"
          ),
          0);
          e.bindAnimationForCustomEffect = function(e) {
            var i,
              r = e.effect.target,
              o = "function" == typeof e.effect.getFrames();
            i = o ? e.effect.getFrames() : e.effect._onsample;
            var s = e.effect.timing,
              u = null;
            s = t.normalizeTimingInput(s);
            var c = function n() {
              var a = n._animation ? n._animation.currentTime : null;
              null !== a &&
                ((a = t.calculateIterationProgress(
                  t.calculateActiveDuration(s),
                  a,
                  s
                )),
                isNaN(a) && (a = null)),
                a !== u &&
                  (o ? i(a, r, e.effect) : i(a, e.effect, e.effect._animation)),
                (u = a);
            };
            (c._animation = e),
              (c._registered = !1),
              (c._sequenceNumber = a++),
              (e._callback = c),
              n(c);
          };
          var o = [],
            s = !1;
          e.Animation.prototype._register = function() {
            this._callback && n(this._callback);
          };
        })(n, a),
        (function(t, e, i) {
          function n(t) {
            return t._timing.delay + t.activeDuration + t._timing.endDelay;
          }
          function r(e, i, n) {
            (this._id = n),
              (this._parent = null),
              (this.children = e || []),
              this._reparent(this.children),
              (i = t.numericTimingToObject(i)),
              (this._timingInput = t.cloneTimingInput(i)),
              (this._timing = t.normalizeTimingInput(i, !0)),
              (this.timing = t.makeTiming(i, !0, this)),
              (this.timing._effect = this),
              "auto" === this._timing.duration &&
                (this._timing.duration = this.activeDuration);
          }
          (window.SequenceEffect = function() {
            r.apply(this, arguments);
          }),
            (window.GroupEffect = function() {
              r.apply(this, arguments);
            }),
            (r.prototype = {
              _isAncestor: function(t) {
                for (var e = this; null !== e; ) {
                  if (e == t) return !0;
                  e = e._parent;
                }
                return !1;
              },
              _rebuild: function() {
                for (var t = this; t; )
                  "auto" === t.timing.duration &&
                    (t._timing.duration = t.activeDuration),
                    (t = t._parent);
                this._animation &&
                  this._animation._rebuildUnderlyingAnimation();
              },
              _reparent: function(t) {
                e.removeMulti(t);
                for (var i = 0; i < t.length; i++) t[i]._parent = this;
              },
              _putChild: function(t, e) {
                for (
                  var i = e
                      ? "Cannot append an ancestor or self"
                      : "Cannot prepend an ancestor or self",
                    n = 0;
                  n < t.length;
                  n++
                )
                  if (this._isAncestor(t[n]))
                    throw {
                      type: DOMException.HIERARCHY_REQUEST_ERR,
                      name: "HierarchyRequestError",
                      message: i,
                    };
                for (n = 0; n < t.length; n++)
                  e ? this.children.push(t[n]) : this.children.unshift(t[n]);
                this._reparent(t), this._rebuild();
              },
              append: function() {
                this._putChild(arguments, !0);
              },
              prepend: function() {
                this._putChild(arguments, !1);
              },
              get parent() {
                return this._parent;
              },
              get firstChild() {
                return this.children.length ? this.children[0] : null;
              },
              get lastChild() {
                return this.children.length
                  ? this.children[this.children.length - 1]
                  : null;
              },
              clone: function() {
                for (
                  var e = t.cloneTimingInput(this._timingInput), i = [], n = 0;
                  n < this.children.length;
                  n++
                )
                  i.push(this.children[n].clone());
                return this instanceof GroupEffect
                  ? new GroupEffect(i, e)
                  : new SequenceEffect(i, e);
              },
              remove: function() {
                e.removeMulti([this]);
              },
            }),
            (window.SequenceEffect.prototype = Object.create(r.prototype)),
            Object.defineProperty(
              window.SequenceEffect.prototype,
              "activeDuration",
              {
                get: function() {
                  var t = 0;
                  return (
                    this.children.forEach(function(e) {
                      t += n(e);
                    }),
                    Math.max(t, 0)
                  );
                },
              }
            ),
            (window.GroupEffect.prototype = Object.create(r.prototype)),
            Object.defineProperty(
              window.GroupEffect.prototype,
              "activeDuration",
              {
                get: function() {
                  var t = 0;
                  return (
                    this.children.forEach(function(e) {
                      t = Math.max(t, n(e));
                    }),
                    t
                  );
                },
              }
            ),
            (e.newUnderlyingAnimationForGroup = function(i) {
              var n,
                r = null,
                a = new KeyframeEffect(null, [], i._timing, i._id);
              return (
                (a.onsample = function(e) {
                  var i = n._wrapper;
                  if (i && "pending" != i.playState && i.effect)
                    return null == e
                      ? void i._removeChildAnimations()
                      : 0 == e &&
                        i.playbackRate < 0 &&
                        (r || (r = t.normalizeTimingInput(i.effect.timing)),
                        (e = t.calculateIterationProgress(
                          t.calculateActiveDuration(r),
                          -1,
                          r
                        )),
                        isNaN(e) || null == e)
                      ? (i._forEachChild(function(t) {
                          t.currentTime = -1;
                        }),
                        void i._removeChildAnimations())
                      : void 0;
                }),
                (n = e.timeline._play(a))
              );
            }),
            (e.bindAnimationForGroup = function(t) {
              (t._animation._wrapper = t),
                (t._isGroup = !0),
                e.awaitStartTime(t),
                t._constructChildAnimations(),
                t._setExternalAnimation(t);
            }),
            (e.groupChildDuration = n);
        })(n, a),
        (i.true = {});
    },
  },
]);
//# sourceMappingURL=chunk.b14d2811e3a0f3eec229.js.map
