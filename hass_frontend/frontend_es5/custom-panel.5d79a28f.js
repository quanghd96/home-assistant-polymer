!(function(e) {
  function n(n) {
    for (var t, o, u = n[0], i = n[1], c = 0, l = []; c < u.length; c++)
      (o = u[c]), r[o] && l.push(r[o][0]), (r[o] = 0);
    for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
    for (a && a(n); l.length; ) l.shift()();
  }
  var t = {},
    r = { 27: 0 };
  function o(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.e = function(e) {
    var n = [],
      t = r[e];
    if (0 !== t)
      if (t) n.push(t[2]);
      else {
        var u = new Promise(function(n, o) {
          t = r[e] = [n, o];
        });
        n.push((t[2] = u));
        var i,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          (c.src = (function(e) {
            return (
              o.p +
              "chunk." +
              {
                24: "23bfbf6f0f40c646a150",
                64: "d715d2982e4835c1be26",
                66: "7148ae54803497b1c1a5",
                112: "26eb8faf33c2bc9fe0f9",
              }[e] +
              ".js"
            );
          })(e)),
          (i = function(n) {
            (c.onerror = c.onload = null), clearTimeout(a);
            var t = r[e];
            if (0 !== t) {
              if (t) {
                var o = n && ("load" === n.type ? "missing" : n.type),
                  u = n && n.target && n.target.src,
                  i = new Error(
                    "Loading chunk " + e + " failed.\n(" + o + ": " + u + ")"
                  );
                (i.type = o), (i.request = u), t[1](i);
              }
              r[e] = void 0;
            }
          });
        var a = setTimeout(function() {
          i({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = i), document.head.appendChild(c);
      }
    return Promise.all(n);
  }),
    (o.m = e),
    (o.c = t),
    (o.d = function(e, n, t) {
      o.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (o.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function(e, n) {
      if ((1 & n && (e = o(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (o.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            t,
            r,
            function(n) {
              return e[n];
            }.bind(null, r)
          );
      return t;
    }),
    (o.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(n, "a", n), n;
    }),
    (o.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (o.p = "/frontend_es5/"),
    (o.oe = function(e) {
      throw (console.error(e), e);
    });
  var u = (window.webpackJsonp = window.webpackJsonp || []),
    i = u.push.bind(u);
  (u.push = n), (u = u.slice());
  for (var c = 0; c < u.length; c++) n(u[c]);
  var a = i;
  o((o.s = 167));
})({
  135: function(e, n, t) {
    "use strict";
    t.d(n, "a", function() {
      return i;
    });
    var r = t(89);
    function o(e, n) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, n) {
          var t = [],
            r = !0,
            o = !1,
            u = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (t.push(i.value), !n || t.length !== n);
              r = !0
            );
          } catch (a) {
            (o = !0), (u = a);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (o) throw u;
            }
          }
          return t;
        })(e, n) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        })()
      );
    }
    var u = {},
      i = function(e) {
        if (e.html_url) {
          var n = [t.e(64).then(t.bind(null, 169))];
          return (
            e.embed_iframe ||
              n.push(Promise.all([t.e(112), t.e(66)]).then(t.bind(null, 131))),
            Promise.all(n).then(function(n) {
              return (0, o(n, 1)[0].importHrefPromise)(e.html_url);
            })
          );
        }
        return e.js_url
          ? (e.js_url in u || (u[e.js_url] = Object(r.b)(e.js_url)),
            u[e.js_url])
          : e.module_url
          ? Object(r.c)(e.module_url)
          : Promise.reject("No valid url found in panel config.");
      };
  },
  136: function(e, n, t) {
    "use strict";
    t.d(n, "a", function() {
      return r;
    });
    var r = function(e) {
      var n = "html_url" in e ? "ha-panel-".concat(e.name) : e.name;
      return document.createElement(n);
    };
  },
  137: function(e, n, t) {
    "use strict";
    t.d(n, "a", function() {
      return r;
    });
    var r = function(e, n) {
      "setProperties" in e
        ? e.setProperties(n)
        : Object.keys(n).forEach(function(t) {
            e[t] = n[t];
          });
    };
  },
  167: function(e, n, t) {
    "use strict";
    t.r(n);
    var r,
      o,
      u = t(89),
      i = t(135),
      c = t(136),
      a = t(137),
      l = t(19),
      s =
        "customElements" in window &&
        "content" in document.createElement("template");
    function f(e) {
      o && Object(a.a)(o, e);
    }
    function d(e, n) {
      var t = document.createElement("style");
      (t.innerHTML = "body{margin:0}"), document.head.appendChild(t);
      var a = e.config._panel_custom,
        d = Promise.resolve();
      s ||
        (d = d.then(function() {
          return Object(
            u.b
          )("".concat(/static/, "polyfills/webcomponents-bundle.js"));
        })),
        (d = d.then(function() {
          return window.loadES5Adapter();
        }))
          .then(function() {
            return Object(i.a)(a);
          })
          .then(function() {
            return r || Promise.resolve();
          })
          .then(
            function() {
              (o = Object(c.a)(a)).addEventListener(
                "hass-toggle-menu",
                function(e) {
                  window.parent.customPanel &&
                    Object(l.a)(window.parent.customPanel, e.type, e.detail);
                }
              ),
                window.addEventListener("location-changed", function(e) {
                  window.parent.customPanel &&
                    window.parent.customPanel.navigate(
                      window.location.pathname,
                      !!e.detail && e.detail.replace
                    );
                }),
                f(Object.assign({ panel: e }, n)),
                document.body.appendChild(o);
            },
            function(n) {
              console.error(n, e),
                alert("Unable to load the panel source: ".concat(n, "."));
            }
          );
    }
    (window.loadES5Adapter = function() {
      return (
        r ||
          (r = Promise.all([
            Object(u.b)(
              "".concat(/static/, "polyfills/custom-elements-es5-adapter.js")
            ).catch(),
            t.e(24).then(t.bind(null, 161)),
          ])),
        r
      );
    }),
      document.addEventListener(
        "DOMContentLoaded",
        function() {
          return window.parent.customPanel.registerIframe(d, f);
        },
        { once: !0 }
      );
  },
  19: function(e, n, t) {
    "use strict";
    t.d(n, "a", function() {
      return r;
    });
    var r = function(e, n, t, r) {
      (r = r || {}), (t = null == t ? {} : t);
      var o = new Event(n, {
        bubbles: void 0 === r.bubbles || r.bubbles,
        cancelable: Boolean(r.cancelable),
        composed: void 0 === r.composed || r.composed,
      });
      return (o.detail = t), e.dispatchEvent(o), o;
    };
  },
  89: function(e, n, t) {
    "use strict";
    t.d(n, "a", function() {
      return o;
    }),
      t.d(n, "b", function() {
        return u;
      }),
      t.d(n, "c", function() {
        return i;
      });
    var r = function(e, n, t) {
        return new Promise(function(r, o) {
          var u = document.createElement(e),
            i = "src",
            c = "body";
          switch (
            ((u.onload = function() {
              return r(n);
            }),
            (u.onerror = function() {
              return o(n);
            }),
            e)
          ) {
            case "script":
              (u.async = !0), t && (u.type = t);
              break;
            case "link":
              (u.type = "text/css"),
                (u.rel = "stylesheet"),
                (i = "href"),
                (c = "head");
          }
          (u[i] = n), document[c].appendChild(u);
        });
      },
      o = function(e) {
        return r("link", e);
      },
      u = function(e) {
        return r("script", e);
      },
      i = function(e) {
        return r("script", e, "module");
      };
  },
});
//# sourceMappingURL=custom-panel.5d79a28f.js.map
