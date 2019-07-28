!(function(e) {
  function t(t) {
    for (var n, o, s = t[0], i = t[1], c = 0, a = []; c < s.length; c++)
      (o = s[c]), r[o] && a.push(r[o][0]), (r[o] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (u && u(t); a.length; ) a.shift()();
  }
  var n = {},
    r = { 26: 0 };
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
        var s = new Promise(function(t, o) {
          n = r[e] = [t, o];
        });
        t.push((n[2] = s));
        var i,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          (c.src = (function(e) {
            return o.p + "chunk." + { 33: "5742b083f514e7dd221a" }[e] + ".js";
          })(e)),
          (i = function(t) {
            (c.onerror = c.onload = null), clearTimeout(u);
            var n = r[e];
            if (0 !== n) {
              if (n) {
                var o = t && ("load" === t.type ? "missing" : t.type),
                  s = t && t.target && t.target.src,
                  i = new Error(
                    "Loading chunk " + e + " failed.\n(" + o + ": " + s + ")"
                  );
                (i.type = o), (i.request = s), n[1](i);
              }
              r[e] = void 0;
            }
          });
        var u = setTimeout(function() {
          i({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = i), document.head.appendChild(c);
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
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    i = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var u = i;
  o((o.s = 161));
})({
  12: function(e, t, n) {
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
      return U;
    }),
      n.d(t, "g", function() {
        return u;
      }),
      n.d(t, "f", function() {
        return f;
      }),
      n.d(t, "a", function() {
        return h;
      }),
      n.d(t, "h", function() {
        return p;
      }),
      n.d(t, "d", function() {
        return m;
      }),
      n.d(t, "j", function() {
        return w;
      }),
      n.d(t, "l", function() {
        return S;
      }),
      n.d(t, "k", function() {
        return L;
      }),
      n.d(t, "b", function() {
        return o;
      }),
      n.d(t, "i", function() {
        return b;
      }),
      n.d(t, "c", function() {
        return g;
      });
    var o = 2,
      s = 4;
    function i(e) {
      return { type: "unsubscribe_events", subscription: e };
    }
    var c = function(e, t) {
      (this.options = t),
        (this.commandId = 1),
        (this.commands = new Map()),
        (this.eventListeners = new Map()),
        (this.closeRequested = !1),
        this.setSocket(e);
    };
    (c.prototype.setSocket = function(e) {
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
      (c.prototype.addEventListener = function(e, t) {
        var n = this.eventListeners.get(e);
        n || this.eventListeners.set(e, (n = [])), n.push(t);
      }),
      (c.prototype.removeEventListener = function(e, t) {
        var n = this.eventListeners.get(e);
        if (n) {
          var r = n.indexOf(t);
          -1 !== r && n.splice(r, 1);
        }
      }),
      (c.prototype.fireEvent = function(e, t) {
        var n = this;
        (this.eventListeners.get(e) || []).forEach(function(e) {
          return e(n, t);
        });
      }),
      (c.prototype.close = function() {
        (this.closeRequested = !0), this.socket.close();
      }),
      (c.prototype.subscribeEvents = function(e, t) {
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
      (c.prototype.ping = function() {
        return this.sendMessagePromise({ type: "ping" });
      }),
      (c.prototype.sendMessage = function(e, t) {
        t || (t = this._genCmdId()),
          (e.id = t),
          this.socket.send(JSON.stringify(e));
      }),
      (c.prototype.sendMessagePromise = function(e) {
        var t = this;
        return new Promise(function(n, r) {
          var o = t._genCmdId();
          t.commands.set(o, { resolve: n, reject: r }), t.sendMessage(e, o);
        });
      }),
      (c.prototype.subscribeMessage = function(e, t) {
        try {
          var n,
            r = this,
            o = r._genCmdId();
          return Promise.resolve(
            new Promise(function(s, c) {
              (n = {
                resolve: s,
                reject: c,
                callback: e,
                subscribe: function() {
                  return r.subscribeMessage(e, t);
                },
                unsubscribe: function() {
                  try {
                    return Promise.resolve(r.sendMessagePromise(i(o))).then(
                      function() {
                        r.commands.delete(o);
                      }
                    );
                  } catch (e) {
                    return Promise.reject(e);
                  }
                },
              }),
                r.commands.set(o, n);
              try {
                r.sendMessage(t, o);
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
      (c.prototype._handleMessage = function(e) {
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
                this.sendMessagePromise(i(t.id)));
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
      (c.prototype._handleClose = function(e) {
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
              var s = t;
              setTimeout(function() {
                try {
                  var t = r(
                    function() {
                      return Promise.resolve(n.createSocket(n)).then(function(
                        e
                      ) {
                        s.setSocket(e);
                      });
                    },
                    function(t) {
                      2 === t ? s.fireEvent("reconnect-error", t) : o(e + 1);
                    }
                  );
                  return Promise.resolve(
                    t && t.then ? t.then(function() {}) : void 0
                  );
                } catch (r) {
                  return Promise.reject(r);
                }
              }, 1e3 * Math.min(e, 5));
            };
          o(0);
        }
      }),
      (c.prototype._genCmdId = function() {
        return ++this.commandId;
      });
    var u = function(e) {
        void 0 === e && (e = {});
        try {
          function t() {
            function t() {
              function t() {
                if (n) return new h(n, e.saveTokens);
                if (void 0 === o) throw s;
                return (
                  (function(e, t, n, r) {
                    (n += (n.includes("?") ? "&" : "?") + "auth_callback=1"),
                      (document.location.href = (function(e, t, n, r) {
                        var o =
                          e +
                          "/auth/authorize?response_type=code&client_id=" +
                          encodeURIComponent(t) +
                          "&redirect_uri=" +
                          encodeURIComponent(n);
                        return r && (o += "&state=" + encodeURIComponent(r)), o;
                      })(e, t, n, r));
                  })(
                    o,
                    i,
                    e.redirectUrl ||
                      location.protocol +
                        "//" +
                        location.host +
                        location.pathname +
                        location.search,
                    btoa(JSON.stringify({ hassUrl: o, clientId: i }))
                  ),
                  new Promise(function() {})
                );
              }
              var r = (function() {
                if (!n && e.loadTokens)
                  return Promise.resolve(e.loadTokens()).then(function(e) {
                    n = e;
                  });
              })();
              return r && r.then ? r.then(t) : t();
            }
            var c = (function() {
              if (!n) {
                var t = (function(e) {
                    for (
                      var t = {},
                        n = location.search.substr(1).split("&"),
                        r = 0;
                      r < n.length;
                      r++
                    ) {
                      var o = n[r].split("="),
                        s = decodeURIComponent(o[0]),
                        i = o.length > 1 ? decodeURIComponent(o[1]) : void 0;
                      t[s] = i;
                    }
                    return t;
                  })(),
                  o = (function() {
                    if ("auth_callback" in t) {
                      var o = JSON.parse(atob(t.state)),
                        s = r(
                          function() {
                            return Promise.resolve(
                              l(o.hassUrl, o.clientId, t.code)
                            ).then(function(t) {
                              (n = t), e.saveTokens && e.saveTokens(n);
                            });
                          },
                          function(e) {
                            console.log("Unable to fetch access token", e);
                          }
                        );
                      if (s && s.then) return s.then(function() {});
                    }
                  })();
                if (o && o.then) return o.then(function() {});
              }
            })();
            return c && c.then ? c.then(t) : t();
          }
          var n,
            o = e.hassUrl;
          o && "/" === o[o.length - 1] && (o = o.substr(0, o.length - 1));
          var i = e.clientId || f(),
            c = (function() {
              if (!n && e.authCode && o && i) {
                var t = r(
                  function() {
                    return Promise.resolve(l(o, i, e.authCode)).then(function(
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
          return Promise.resolve(c && c.then ? c.then(t) : t());
        } catch (r) {
          return Promise.reject(r);
        }
      },
      a = function(e, t, n) {
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
      f = function() {
        return location.protocol + "//" + location.host + "/";
      },
      d = function(e) {
        return 1e3 * e + Date.now();
      };
    function l(e, t, n) {
      return a(e, t, { code: n, grant_type: "authorization_code" });
    }
    var h = function(e, t) {
        (this.data = e), (this._saveTokens = t);
      },
      v = {
        wsUrl: { configurable: !0 },
        accessToken: { configurable: !0 },
        expired: { configurable: !0 },
      };
    (v.wsUrl.get = function() {
      return "ws" + this.data.hassUrl.substr(4) + "/api/websocket";
    }),
      (v.accessToken.get = function() {
        return this.data.access_token;
      }),
      (v.expired.get = function() {
        return Date.now() > this.data.expires;
      }),
      (h.prototype.refreshAccessToken = function() {
        try {
          var e = this;
          return Promise.resolve(
            a(e.data.hassUrl, e.data.clientId, {
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
      Object.defineProperties(h.prototype, v);
    var p = function(e, t, n, r) {
        if (e[t]) return e[t];
        var o,
          s = 0,
          i = (function(e) {
            var t = [];
            function n(n, r) {
              e = r ? n : Object.assign({}, e, n);
              for (var o = t, s = 0; s < o.length; s++) o[s](e);
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
                    var n = arguments, o = [e], s = 0;
                    s < arguments.length;
                    s++
                  )
                    o.push(n[s]);
                  var i = t.apply(this, o);
                  if (null != i) return i.then ? i.then(r) : r(i);
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
          c = function() {
            return n(e).then(function(e) {
              return i.setState(e, !0);
            });
          },
          u = function() {
            return c().catch(function(t) {
              if (e.socket.readyState == e.socket.OPEN) throw t;
            });
          };
        return (
          (e[t] = {
            get state() {
              return i.state;
            },
            refresh: c,
            subscribe: function(t) {
              1 == ++s &&
                (r && (o = r(e, i)), e.addEventListener("ready", u), u());
              var n = i.subscribe(t);
              return (
                void 0 !== i.state &&
                  setTimeout(function() {
                    return t(i.state);
                  }, 0),
                function() {
                  n(),
                    --s ||
                      (o &&
                        o.then(function(e) {
                          e();
                        }),
                      e.removeEventListener("ready", c));
                }
              );
            },
          }),
          e[t]
        );
      },
      m = function(e, t, n, r, o) {
        return p(r, e, t, n).subscribe(o);
      },
      b = function(e) {
        return e.sendMessagePromise({ type: "auth/current_user" });
      },
      g = function(e, t, n, r) {
        return e.sendMessagePromise(
          (function(e, t, n) {
            var r = { type: "call_service", domain: e, service: t };
            return n && (r.service_data = n), r;
          })(t, n, r)
        );
      };
    function y(e, t) {
      return void 0 === e
        ? null
        : { components: e.components.concat(t.data.component) };
    }
    var k = function(e) {
        return (function(e) {
          return e.sendMessagePromise({ type: "get_config" });
        })(e);
      },
      _ = function(e, t) {
        return Promise.all([
          e.subscribeEvents(t.action(y), "component_loaded"),
          e.subscribeEvents(function() {
            return k(e).then(function(e) {
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
          return p(e, "_cnf", k, _);
        })(e).subscribe(t);
      };
    function P(e, t) {
      var n, r;
      if (void 0 === e) return null;
      var o = t.data,
        s = o.domain,
        i = Object.assign(
          {},
          e[s],
          (((n = {})[o.service] = { description: "", fields: {} }), n)
        );
      return ((r = {})[s] = i), r;
    }
    function j(e, t) {
      var n;
      if (void 0 === e) return null;
      var r = t.data,
        o = r.domain,
        s = r.service,
        i = e[o];
      if (!(i && s in i)) return null;
      var c = {};
      return (
        Object.keys(i).forEach(function(e) {
          e !== s && (c[e] = i[e]);
        }),
        ((n = {})[o] = c),
        n
      );
    }
    var E = function(e) {
        return (function(e) {
          return e.sendMessagePromise({ type: "get_services" });
        })(e);
      },
      O = function(e, t) {
        return Promise.all([
          e.subscribeEvents(t.action(P), "service_registered"),
          e.subscribeEvents(t.action(j), "service_removed"),
        ]).then(function(e) {
          return function() {
            return e.forEach(function(e) {
              return e();
            });
          };
        });
      },
      S = function(e, t) {
        return (function(e) {
          return p(e, "_srv", E, O);
        })(e).subscribe(t);
      },
      T = function(e) {
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
      M = function(e, t) {
        return e.subscribeEvents(function(e) {
          return (function(t, n) {
            var r,
              o = t.state;
            if (void 0 !== o) {
              var s = e.data,
                i = s.entity_id,
                c = s.new_state;
              if (c) t.setState((((r = {})[c.entity_id] = c), r));
              else {
                var u = Object.assign({}, o);
                delete u[i], t.setState(u, !0);
              }
            }
          })(t);
        }, "state_changed");
      },
      L = function(e, t) {
        return (function(e) {
          return p(e, "_ent", T, M);
        })(e).subscribe(t);
      },
      U = function(e) {
        try {
          var t = Object.assign({}, C, e);
          return Promise.resolve(t.createSocket(t)).then(function(e) {
            return new c(e, t);
          });
        } catch (e) {
          return Promise.reject(e);
        }
      },
      C = {
        setupRetry: 0,
        createSocket: function(e) {
          if (!e.auth) throw s;
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
          return new Promise(function(s, i) {
            return (function e(s, i, c) {
              var u = new WebSocket(o),
                a = !1,
                f = function() {
                  if ((u.removeEventListener("close", f), a)) c(2);
                  else if (0 !== s) {
                    var t = -1 === s ? -1 : s - 1;
                    setTimeout(function() {
                      return e(t, i, c);
                    }, 1e3);
                  } else c(1);
                },
                d = function(e) {
                  try {
                    var o = r(
                      function() {
                        function e() {
                          u.send(
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
                        (a = 2 === e), u.close();
                      }
                    );
                    return Promise.resolve(
                      o && o.then ? o.then(function() {}) : void 0
                    );
                  } catch (r) {
                    return Promise.reject(r);
                  }
                },
                l = function(e) {
                  try {
                    switch (JSON.parse(e.data).type) {
                      case "auth_invalid":
                        (a = !0), u.close();
                        break;
                      case "auth_ok":
                        u.removeEventListener("open", d),
                          u.removeEventListener("message", l),
                          u.removeEventListener("close", f),
                          u.removeEventListener("error", f),
                          i(u);
                    }
                    return;
                  } catch (e) {
                    return Promise.reject(e);
                  }
                };
              u.addEventListener("open", d),
                u.addEventListener("message", l),
                u.addEventListener("close", f),
                u.addEventListener("error", f);
            })(e.setupRetry, s, i);
          });
        },
      };
  },
  133: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return s;
      });
    const r = (e, t) =>
        e.sendMessagePromise({ type: "lovelace/config", force: t }),
      o = (e, t) => e.callWS({ type: "lovelace/config/save", config: t }),
      s = (e, t) => e.subscribeEvents(t, "lovelace_updated");
  },
  161: function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(12),
      o = n(66),
      s = n(79),
      i = n(78),
      c = n(58),
      u = n(65),
      a = n(133);
    const f = location.search.includes("external_auth=1"),
      d = f
        ? () =>
            n
              .e(33)
              .then(n.bind(null, 169))
              .then(({ createExternalAuth: e }) => e(u.c))
        : () =>
            Object(r.g)({
              hassUrl: u.c,
              saveTokens: o.d,
              loadTokens: () => Promise.resolve(Object(o.c)()),
            });
    (window.hassConnection = d().then(async (e) => {
      try {
        const n = await Object(r.e)({ auth: e });
        return (
          location.search.includes("auth_callback=1") &&
            history.replaceState(null, "", location.pathname),
          { auth: e, conn: n }
        );
      } catch (t) {
        if (t !== r.b) throw t;
        return (
          f || Object(o.d)(null),
          { auth: (e = await d()), conn: await Object(r.e)({ auth: e }) }
        );
      }
    })),
      window.hassConnection.then(({ conn: e }) => {
        const t = () => {};
        Object(r.k)(e, t),
          Object(r.j)(e, t),
          Object(r.l)(e, t),
          Object(s.a)(e, t),
          Object(i.a)(e, t),
          Object(c.a)(e, t),
          ("/" === location.pathname ||
            location.pathname.startsWith("/lovelace/")) &&
            (window.llConfProm = Object(a.a)(e, !1));
      }),
      window.addEventListener("error", (e) => {
        const t = document.querySelector("home-assistant");
        t &&
          t.hass &&
          t.hass.callService &&
          t.hass.callService("system_log", "write", {
            logger: `frontend.js.latest.${"20190721.1".replace(".", "")}`,
            message: `${e.filename}:${e.lineno}:${e.colno} ${e.message}`,
          });
      });
  },
  58: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return o;
    }),
      n.d(t, "a", function() {
        return s;
      });
    var r = n(12);
    const o = (e) => Object(r.h)(e, "_usr", () => Object(r.i)(e), void 0),
      s = (e, t) => o(e).subscribe(t);
  },
  65: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return o;
      }),
      n.d(t, "a", function() {
        return s;
      });
    const r = `${location.protocol}//${location.host}`,
      o = (e, t) => e.callWS({ type: "auth/sign_path", path: t }),
      s = () => fetch("/auth/providers", { credentials: "same-origin" });
  },
  66: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return s;
    }),
      n.d(t, "d", function() {
        return i;
      }),
      n.d(t, "b", function() {
        return c;
      }),
      n.d(t, "c", function() {
        return u;
      });
    const r = window.localStorage || {};
    let o = window.__tokenCache;
    function s() {
      return void 0 !== o.tokens && void 0 === o.writeEnabled;
    }
    function i(e) {
      if (((o.tokens = e), o.writeEnabled))
        try {
          r.hassTokens = JSON.stringify(e);
        } catch (t) {}
    }
    function c() {
      (o.writeEnabled = !0), o.tokens && i(o.tokens);
    }
    function u() {
      if (void 0 === o.tokens)
        try {
          delete r.tokens;
          const t = r.hassTokens;
          t
            ? ((o.tokens = JSON.parse(t)), (o.writeEnabled = !0))
            : (o.tokens = null);
        } catch (e) {
          o.tokens = null;
        }
      return o.tokens;
    }
    o || (o = window.__tokenCache = { tokens: void 0, writeEnabled: void 0 });
  },
  78: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var r = n(12);
    const o = (e) => e.sendMessagePromise({ type: "frontend/get_themes" }),
      s = (e, t) =>
        e.subscribeEvents((e) => t.setState(e.data, !0), "themes_updated"),
      i = (e, t) => Object(r.d)("_thm", o, s, e, t);
  },
  79: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var r = n(12);
    const o = (e) => e.sendMessagePromise({ type: "get_panels" }),
      s = (e, t) =>
        e.subscribeEvents(
          () => o(e).then((e) => t.setState(e, !0)),
          "panels_updated"
        ),
      i = (e, t) => Object(r.d)("_pnl", o, s, e, t);
  },
});
//# sourceMappingURL=core.6366854e.js.map
