(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    737: function(t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        i = (n(460), ["zone"]),
        o = function(t, e) {
          if (
            "call-service" === e.action &&
            e.service_data &&
            e.service_data.entity_id
          ) {
            var n = e.service_data.entity_id;
            Array.isArray(n) || (n = [n]);
            var r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = n[Symbol.iterator]();
                !(r = (a = c.next()).done);
                r = !0
              ) {
                var s = a.value;
                t.add(s);
              }
            } catch (u) {
              (i = !0), (o = u);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (i) throw o;
              }
            }
          }
        },
        a = function(t, e) {
          "string" != typeof e
            ? (e.entity && t.add(e.entity),
              e.camera_image && t.add(e.camera_image),
              e.tap_action && o(t, e.tap_action),
              e.hold_action && o(t, e.hold_action))
            : t.add(e);
        },
        c = function(t) {
          var e = new Set();
          return (
            t.views.forEach(function(t) {
              return (function t(e, n) {
                n.entity && a(e, n.entity),
                  n.entities &&
                    n.entities.forEach(function(t) {
                      return a(e, t);
                    }),
                  n.card && t(e, n.card),
                  n.cards &&
                    n.cards.forEach(function(n) {
                      return t(e, n);
                    }),
                  n.elements &&
                    n.elements.forEach(function(n) {
                      return t(e, n);
                    }),
                  n.badges &&
                    n.badges.forEach(function(t) {
                      return a(e, t);
                    });
              })(e, t);
            }),
            e
          );
        },
        s = n(356),
        u = n(118);
      function f(t) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function l() {
        var t = d([
          "\n      <style>\n        #root {\n          padding: 4px;\n          display: flex;\n          flex-wrap: wrap;\n        }\n        hui-entities-card {\n          max-width: 400px;\n          padding: 4px;\n          flex: 1 auto;\n        }\n      </style>\n    ",
        ]);
        return (
          (l = function() {
            return t;
          }),
          t
        );
      }
      function y() {
        var t = d(["\n      ", '\n      <div id="root">', "</div>\n    "]);
        return (
          (y = function() {
            return t;
          }),
          t
        );
      }
      function h() {
        var t = d([""]);
        return (
          (h = function() {
            return t;
          }),
          t
        );
      }
      function d(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function p(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function _(t, e) {
        return !e || ("object" !== f(e) && "function" != typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function v(t) {
        return (v = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function b(t, e) {
        return (b =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      n.d(e, "HuiUnusedEntities", function() {
        return m;
      });
      var m = (function(t) {
        function e() {
          var t, n;
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          return (
            ((n = _(
              this,
              (t = v(e)).call.apply(t, [this].concat(i))
            ))._hass = void 0),
            (n._config = void 0),
            (n._elements = void 0),
            n
          );
        }
        var n, o, a;
        return (
          (function(t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && b(t, e);
          })(e, r["a"]),
          (n = e),
          (a = [
            {
              key: "properties",
              get: function() {
                return { _hass: {}, _config: {} };
              },
            },
          ]),
          (o = [
            {
              key: "setConfig",
              value: function(t) {
                (this._config = t), this._createElements();
              },
            },
            {
              key: "render",
              value: function() {
                return this._config && this._hass
                  ? Object(r.f)(y(), this.renderStyle(), this._elements)
                  : Object(r.f)(h());
              },
            },
            {
              key: "renderStyle",
              value: function() {
                return Object(r.f)(l());
              },
            },
            {
              key: "_createElements",
              value: function() {
                var t = this;
                if (this._hass) {
                  var e,
                    n,
                    r,
                    o = {};
                  ((e = this._hass),
                  (n = this._config),
                  (r = c(n)),
                  Object.keys(e.states)
                    .filter(function(t) {
                      return !r.has(t) && !i.includes(t.split(".", 1)[0]);
                    })
                    .sort()).forEach(function(t) {
                    var e = Object(u.a)(t);
                    e in o || (o[e] = []), o[e].push(t);
                  }),
                    (this._elements = Object.keys(o)
                      .sort()
                      .map(function(e) {
                        var n = Object(s.a)({
                          type: "entities",
                          title: t._hass.localize("domain.".concat(e)) || e,
                          entities: o[e].map(function(t) {
                            return { entity: t, secondary_info: "entity-id" };
                          }),
                          show_header_toggle: !1,
                        });
                        return (n.hass = t._hass), n;
                      }));
                }
              },
            },
            {
              key: "hass",
              set: function(t) {
                if (((this._hass = t), this._elements)) {
                  var e = !0,
                    n = !1,
                    r = void 0;
                  try {
                    for (
                      var i, o = this._elements[Symbol.iterator]();
                      !(e = (i = o.next()).done);
                      e = !0
                    ) {
                      i.value.hass = this._hass;
                    }
                  } catch (a) {
                    (n = !0), (r = a);
                  } finally {
                    try {
                      e || null == o.return || o.return();
                    } finally {
                      if (n) throw r;
                    }
                  }
                } else this._createElements();
              },
            },
          ]) && p(n.prototype, o),
          a && p(n, a),
          e
        );
      })();
      customElements.define("hui-unused-entities", m);
    },
  },
]);
//# sourceMappingURL=chunk.076039e79cf2552f2ebe.js.map
