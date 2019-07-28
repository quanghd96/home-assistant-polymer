(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    170: function(e, n, t) {
      "use strict";
      t.r(n);
      var r = t(12);
      function o(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var i = (function() {
        function e() {
          !(function(e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.commands = {}),
            (this.cache = {}),
            (this.msgId = 0);
        }
        var n, t, r;
        return (
          (n = e),
          (t = [
            {
              key: "attach",
              value: function() {
                var e,
                  n = this;
                (e = this),
                  window.addEventListener("connection-status", function(n) {
                    return e.fireMessage({
                      type: "connection-status",
                      payload: { event: n.detail },
                    });
                  }),
                  (function(e) {
                    window.addEventListener("haptic", function(n) {
                      return e.fireMessage({
                        type: "haptic",
                        payload: { hapticType: n.detail },
                      });
                    });
                  })(this),
                  (window.externalBus = function(e) {
                    return n.receiveMessage(e);
                  });
              },
            },
            {
              key: "sendMessage",
              value: function(e) {
                var n = this,
                  t = ++this.msgId;
                return (
                  (e.id = t),
                  this.fireMessage(e),
                  new Promise(function(e, r) {
                    n.commands[t] = { resolve: e, reject: r };
                  })
                );
              },
            },
            {
              key: "fireMessage",
              value: function(e) {
                e.id || (e.id = ++this.msgId), this._sendExternal(e);
              },
            },
            {
              key: "receiveMessage",
              value: function(e) {
                var n = this.commands[e.id];
                n
                  ? "result" === e.type &&
                    (e.success ? n.resolve(e.result) : n.reject(e.error))
                  : console.warn("Received unknown msg ID", e.id);
              },
            },
            {
              key: "_sendExternal",
              value: function(e) {
                window.externalApp
                  ? window.externalApp.externalBus(JSON.stringify(e))
                  : window.webkit.messageHandlers.externalBus.postMessage(e);
              },
            },
          ]) && o(n.prototype, t),
          r && o(n, r),
          e
        );
      })();
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
      function s(e, n, t, r, o, i, a) {
        try {
          var s = e[i](a),
            u = s.value;
        } catch (c) {
          return void t(c);
        }
        s.done ? n(u) : Promise.resolve(u).then(r, o);
      }
      function u(e) {
        return function() {
          var n = this,
            t = arguments;
          return new Promise(function(r, o) {
            var i = e.apply(n, t);
            function a(e) {
              s(i, r, o, a, u, "next", e);
            }
            function u(e) {
              s(i, r, o, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function c(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e, n) {
        return !n || ("object" !== a(n) && "function" != typeof n)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, n) {
        return (p =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      t.d(n, "createExternalAuth", function() {
        return d;
      });
      if (!window.externalApp && !window.webkit)
        throw new Error(
          "External auth requires either externalApp or webkit defined on Window object."
        );
      var w = (function(e) {
          function n(e) {
            var t;
            return (
              (function(e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              ((t = l(
                this,
                f(n).call(this, {
                  hassUrl: e,
                  clientId: "",
                  refresh_token: "",
                  access_token: "",
                  expires_in: 0,
                  expires: 0,
                })
              )).external = void 0),
              t
            );
          }
          var t, o, i;
          return (
            (function(e, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(n && n.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                n && p(e, n);
            })(n, r["a"]),
            (t = n),
            (o = [
              {
                key: "refreshAccessToken",
                value: (function() {
                  var e = u(
                    regeneratorRuntime.mark(function e() {
                      var n, t;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = { callback: "externalAuthSetToken" }),
                                  window.externalApp
                                    ? window.externalApp.getExternalAuth(
                                        JSON.stringify(n)
                                      )
                                    : window.webkit.messageHandlers.getExternalAuth.postMessage(
                                        n
                                      ),
                                  (e.next = 4),
                                  new Promise(function(e, n) {
                                    window.externalAuthSetToken = function(
                                      t,
                                      r
                                    ) {
                                      return t ? e(r) : n(r);
                                    };
                                  })
                                );
                              case 4:
                                (t = e.sent),
                                  (this.data.access_token = t.access_token),
                                  (this.data.expires =
                                    1e3 * t.expires_in + Date.now());
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "revoke",
                value: (function() {
                  var e = u(
                    regeneratorRuntime.mark(function e() {
                      var n;
                      return regeneratorRuntime.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = { callback: "externalAuthRevokeToken" }),
                                window.externalApp
                                  ? window.externalApp.revokeExternalAuth(
                                      JSON.stringify(n)
                                    )
                                  : window.webkit.messageHandlers.revokeExternalAuth.postMessage(
                                      n
                                    ),
                                (e.next = 4),
                                new Promise(function(e, n) {
                                  window.externalAuthRevokeToken = function(
                                    t,
                                    r
                                  ) {
                                    return t ? e(r) : n(r);
                                  };
                                })
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]) && c(t.prototype, o),
            i && c(t, i),
            n
          );
        })(),
        d = function(e) {
          var n = new w(e);
          return (
            ((window.externalApp && window.externalApp.externalBus) ||
              (window.webkit && window.webkit.messageHandlers.externalBus)) &&
              ((n.external = new i()), n.external.attach()),
            n
          );
        };
    },
  },
]);
//# sourceMappingURL=chunk.d69ed0d8b83e2655e128.js.map
