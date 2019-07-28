!(function(e) {
  function t(t) {
    for (var n, o, c = t[0], i = t[1], a = 0, u = []; a < c.length; a++)
      (o = c[a]), r[o] && u.push(r[o][0]), (r[o] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (l && l(t); u.length; ) u.shift()();
  }
  var n = {},
    r = { 27: 0 };
  function o(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.e = function(e) {
    var t = [],
      n = r[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var c = new Promise(function(t, o) {
          n = r[e] = [t, o];
        });
        t.push((n[2] = c));
        var i,
          a = document.createElement("script");
        (a.charset = "utf-8"),
          (a.timeout = 120),
          o.nc && a.setAttribute("nonce", o.nc),
          (a.src = (function(e) {
            return (
              o.p +
              "chunk." +
              {
                24: "67b31ccf1e2517e65d20",
                64: "3b68ad510abe906697a8",
                66: "98fc971ca7510d198ac9",
                124: "b41caf794239540f7509",
              }[e] +
              ".js"
            );
          })(e)),
          (i = function(t) {
            (a.onerror = a.onload = null), clearTimeout(l);
            var n = r[e];
            if (0 !== n) {
              if (n) {
                var o = t && ("load" === t.type ? "missing" : t.type),
                  c = t && t.target && t.target.src,
                  i = new Error(
                    "Loading chunk " + e + " failed.\n(" + o + ": " + c + ")"
                  );
                (i.type = o), (i.request = c), n[1](i);
              }
              r[e] = void 0;
            }
          });
        var l = setTimeout(function() {
          i({ type: "timeout", target: a });
        }, 12e4);
        (a.onerror = a.onload = i), document.head.appendChild(a);
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
        for (var r in e)
          o.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
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
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    i = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var a = 0; a < c.length; a++) t(c[a]);
  var l = i;
  o((o.s = 166));
})({
  135: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return c;
    });
    var r = n(89);
    const o = {},
      c = (e) => {
        if (e.html_url) {
          const t = [n.e(64).then(n.bind(null, 168))];
          return (
            e.embed_iframe ||
              t.push(Promise.all([n.e(124), n.e(66)]).then(n.bind(null, 131))),
            Promise.all(t).then(([{ importHrefPromise: t }]) => t(e.html_url))
          );
        }
        return e.js_url
          ? (e.js_url in o || (o[e.js_url] = Object(r.b)(e.js_url)),
            o[e.js_url])
          : e.module_url
          ? Object(r.c)(e.module_url)
          : Promise.reject("No valid url found in panel config.");
      };
  },
  136: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    const r = (e) => {
      const t = "html_url" in e ? `ha-panel-${e.name}` : e.name;
      return document.createElement(t);
    };
  },
  137: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    const r = (e, t) => {
      "setProperties" in e
        ? e.setProperties(t)
        : Object.keys(t).forEach((n) => {
            e[n] = t[n];
          });
    };
  },
  166: function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(89),
      o = n(135),
      c = n(136),
      i = n(137),
      a = n(19);
    const l =
      "customElements" in window &&
      "content" in document.createElement("template");
    let u, s;
    function d(e) {
      s && Object(i.a)(s, e);
    }
    function f(e, t) {
      const n = document.createElement("style");
      (n.innerHTML = "body{margin:0}"), document.head.appendChild(n);
      const i = e.config._panel_custom;
      let f = Promise.resolve();
      l ||
        (f = f.then(() =>
          Object(r.b)("/static/polyfills/webcomponents-bundle.js")
        )),
        f
          .then(() => Object(o.a)(i))
          .then(() => u || Promise.resolve())
          .then(
            () => {
              (s = Object(c.a)(i)).addEventListener("hass-toggle-menu", (e) => {
                window.parent.customPanel &&
                  Object(a.a)(window.parent.customPanel, e.type, e.detail);
              }),
                window.addEventListener("location-changed", (e) => {
                  window.parent.customPanel &&
                    window.parent.customPanel.navigate(
                      window.location.pathname,
                      !!e.detail && e.detail.replace
                    );
                }),
                d(Object.assign({ panel: e }, t)),
                document.body.appendChild(s);
            },
            (t) => {
              console.error(t, e),
                alert(`Unable to load the panel source: ${t}.`);
            }
          );
    }
    (window.loadES5Adapter = () => (
      u ||
        (u = Promise.all([
          Object(r.b)(
            "/static/polyfills/custom-elements-es5-adapter.js"
          ).catch(),
          n.e(24).then(n.bind(null, 160)),
        ])),
      u
    )),
      document.addEventListener(
        "DOMContentLoaded",
        () => window.parent.customPanel.registerIframe(f, d),
        { once: !0 }
      );
  },
  19: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    const r = (e, t, n, r) => {
      (r = r || {}), (n = null == n ? {} : n);
      const o = new Event(t, {
        bubbles: void 0 === r.bubbles || r.bubbles,
        cancelable: Boolean(r.cancelable),
        composed: void 0 === r.composed || r.composed,
      });
      return (o.detail = n), e.dispatchEvent(o), o;
    };
  },
  89: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    }),
      n.d(t, "b", function() {
        return c;
      }),
      n.d(t, "c", function() {
        return i;
      });
    const r = (e, t, n) =>
        new Promise((r, o) => {
          const c = document.createElement(e);
          let i = "src",
            a = "body";
          switch (((c.onload = () => r(t)), (c.onerror = () => o(t)), e)) {
            case "script":
              (c.async = !0), n && (c.type = n);
              break;
            case "link":
              (c.type = "text/css"),
                (c.rel = "stylesheet"),
                (i = "href"),
                (a = "head");
          }
          (c[i] = t), document[a].appendChild(c);
        }),
      o = (e) => r("link", e),
      c = (e) => r("script", e),
      i = (e) => r("script", e, "module");
  },
});
//# sourceMappingURL=custom-panel.13f0a586.js.map
