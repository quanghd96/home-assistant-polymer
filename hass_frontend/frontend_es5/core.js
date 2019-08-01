/******/ (function(modules) {
  // webpackBootstrap
  /******/ // install a JSONP callback for chunk loading
  /******/ function webpackJsonpCallback(data) {
    /******/ var chunkIds = data[0];
    /******/ var moreModules = data[1]; // add "moreModules" to the modules object, // then flag all "chunkIds" as loaded and fire callback
    /******/
    /******/
    /******/ /******/ /******/ var moduleId,
      chunkId,
      i = 0,
      resolves = [];
    /******/ for (; i < chunkIds.length; i++) {
      /******/ chunkId = chunkIds[i];
      /******/ if (installedChunks[chunkId]) {
        /******/ resolves.push(installedChunks[chunkId][0]);
        /******/
      }
      /******/ installedChunks[chunkId] = 0;
      /******/
    }
    /******/ for (moduleId in moreModules) {
      /******/ if (
        Object.prototype.hasOwnProperty.call(moreModules, moduleId)
      ) {
        /******/ modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/
    }
    /******/ if (parentJsonpFunction) parentJsonpFunction(data);
    /******/
    /******/ while (resolves.length) {
      /******/ resolves.shift()();
      /******/
    }
    /******/
    /******/
  } // The module cache
  /******/
  /******/
  /******/ /******/ var installedModules = {}; // object to store loaded and loading chunks // undefined = chunk not loaded, null = chunk preloaded/prefetched // Promise = chunk loading, 0 = chunk loaded
  /******/
  /******/ /******/ /******/ /******/ var installedChunks = {
    /******/ core: 0,
    /******/
  }; // script path function
  /******/
  /******/
  /******/
  /******/ /******/ function jsonpScriptSrc(chunkId) {
    /******/ return (
      __webpack_require__.p +
      "" +
      ({ external_auth: "external_auth" }[chunkId] || chunkId) +
      ".chunk.js"
    );
    /******/
  } // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // This file contains only the entry chunk. // The chunk loading function for additional chunks
  /******/
  /******/ /******/ /******/ __webpack_require__.e = function requireEnsure(
    chunkId
  ) {
    /******/ var promises = []; // JSONP chunk loading for javascript
    /******/
    /******/
    /******/ /******/
    /******/ var installedChunkData = installedChunks[chunkId];
    /******/ if (installedChunkData !== 0) {
      // 0 means "already installed".
      /******/
      /******/ // a Promise means "currently loading".
      /******/ if (installedChunkData) {
        /******/ promises.push(installedChunkData[2]);
        /******/
      } else {
        /******/ // setup Promise in chunk cache
        /******/ var promise = new Promise(function(resolve, reject) {
          /******/ installedChunkData = installedChunks[chunkId] = [
            resolve,
            reject,
          ];
          /******/
        });
        /******/ promises.push((installedChunkData[2] = promise)); // start chunk loading
        /******/
        /******/ /******/ var script = document.createElement("script");
        /******/ var onScriptComplete;
        /******/
        /******/ script.charset = "utf-8";
        /******/ script.timeout = 120;
        /******/ if (__webpack_require__.nc) {
          /******/ script.setAttribute("nonce", __webpack_require__.nc);
          /******/
        }
        /******/ script.src = jsonpScriptSrc(chunkId);
        /******/
        /******/ onScriptComplete = function(event) {
          /******/ // avoid mem leaks in IE.
          /******/ script.onerror = script.onload = null;
          /******/ clearTimeout(timeout);
          /******/ var chunk = installedChunks[chunkId];
          /******/ if (chunk !== 0) {
            /******/ if (chunk) {
              /******/ var errorType =
                event && (event.type === "load" ? "missing" : event.type);
              /******/ var realSrc = event && event.target && event.target.src;
              /******/ var error = new Error(
                "Loading chunk " +
                  chunkId +
                  " failed.\n(" +
                  errorType +
                  ": " +
                  realSrc +
                  ")"
              );
              /******/ error.type = errorType;
              /******/ error.request = realSrc;
              /******/ chunk[1](error);
              /******/
            }
            /******/ installedChunks[chunkId] = undefined;
            /******/
          }
          /******/
        };
        /******/ var timeout = setTimeout(function() {
          /******/ onScriptComplete({ type: "timeout", target: script });
          /******/
        }, 120000);
        /******/ script.onerror = script.onload = onScriptComplete;
        /******/ document.head.appendChild(script);
        /******/
      }
      /******/
    }
    /******/ return Promise.all(promises);
    /******/
  }; // expose the modules object (__webpack_modules__)
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = "/frontend_es5/"; // on error function for async loading
  /******/
  /******/ /******/ __webpack_require__.oe = function(err) {
    console.error(err);
    throw err;
  };
  /******/
  /******/ var jsonpArray = (window["webpackJsonp"] =
    window["webpackJsonp"] || []);
  /******/ var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/ jsonpArray.push = webpackJsonpCallback;
  /******/ jsonpArray = jsonpArray.slice();
  /******/ for (var i = 0; i < jsonpArray.length; i++)
    webpackJsonpCallback(jsonpArray[i]);
  /******/ var parentJsonpFunction = oldJsonpFunction; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/entrypoints/core.ts")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./node_modules/home-assistant-js-websocket/dist/haws.es.js":
      /*!******************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/haws.es.js ***!
  \******************************************************************/
      /*! exports provided: createConnection, getAuth, genClientId, genExpires, Auth, getCollection, createCollection, Connection, subscribeConfig, subscribeServices, entitiesColl, subscribeEntities, ERR_CANNOT_CONNECT, ERR_INVALID_AUTH, ERR_CONNECTION_LOST, ERR_HASS_HOST_REQUIRED, getStates, getServices, getConfig, getUser, callService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createConnection",
          function() {
            return R;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getAuth",
          function() {
            return c;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "genClientId",
          function() {
            return a;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "genExpires",
          function() {
            return f;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Auth",
          function() {
            return d;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getCollection",
          function() {
            return l;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createCollection",
          function() {
            return m;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Connection",
          function() {
            return i;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeConfig",
          function() {
            return w;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeServices",
          function() {
            return L;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "entitiesColl",
          function() {
            return I;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeEntities",
          function() {
            return C;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ERR_CANNOT_CONNECT",
          function() {
            return t;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ERR_INVALID_AUTH",
          function() {
            return n;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ERR_CONNECTION_LOST",
          function() {
            return r;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ERR_HASS_HOST_REQUIRED",
          function() {
            return s;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getStates",
          function() {
            return p;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getServices",
          function() {
            return b;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getConfig",
          function() {
            return g;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getUser",
          function() {
            return y;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "callService",
          function() {
            return k;
          }
        );
        function e(e, t) {
          try {
            var n = e();
          } catch (e) {
            return t(e);
          }

          return n && n.then ? n.then(void 0, t) : n;
        }

        var t = 1,
          n = 2,
          r = 3,
          s = 4;

        function o(e) {
          return {
            type: "unsubscribe_events",
            subscription: e,
          };
        }

        var i = function i(e, t) {
          (this.options = t),
            (this.commandId = 1),
            (this.commands = new Map()),
            (this.eventListeners = new Map()),
            (this.closeRequested = !1),
            this.setSocket(e);
        };

        (i.prototype.setSocket = function(e) {
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
          (i.prototype.addEventListener = function(e, t) {
            var n = this.eventListeners.get(e);
            n || this.eventListeners.set(e, (n = [])), n.push(t);
          }),
          (i.prototype.removeEventListener = function(e, t) {
            var n = this.eventListeners.get(e);

            if (n) {
              var r = n.indexOf(t);
              -1 !== r && n.splice(r, 1);
            }
          }),
          (i.prototype.fireEvent = function(e, t) {
            var n = this;
            (this.eventListeners.get(e) || []).forEach(function(e) {
              return e(n, t);
            });
          }),
          (i.prototype.close = function() {
            (this.closeRequested = !0), this.socket.close();
          }),
          (i.prototype.subscribeEvents = function(e, t) {
            try {
              return this.subscribeMessage(
                e,
                (function(e) {
                  var t = {
                    type: "subscribe_events",
                  };
                  return e && (t.event_type = e), t;
                })(t)
              );
            } catch (e) {
              return Promise.reject(e);
            }
          }),
          (i.prototype.ping = function() {
            return this.sendMessagePromise({
              type: "ping",
            });
          }),
          (i.prototype.sendMessage = function(e, t) {
            t || (t = this._genCmdId()),
              (e.id = t),
              this.socket.send(JSON.stringify(e));
          }),
          (i.prototype.sendMessagePromise = function(e) {
            var t = this;
            return new Promise(function(n, r) {
              var s = t._genCmdId();

              t.commands.set(s, {
                resolve: n,
                reject: r,
              }),
                t.sendMessage(e, s);
            });
          }),
          (i.prototype.subscribeMessage = function(e, t) {
            try {
              var n,
                r = this,
                s = r._genCmdId();

              return Promise.resolve(
                new Promise(function(i, c) {
                  (n = {
                    resolve: i,
                    reject: c,
                    callback: e,
                    subscribe: function subscribe() {
                      return r.subscribeMessage(e, t);
                    },
                    unsubscribe: function unsubscribe() {
                      try {
                        return Promise.resolve(r.sendMessagePromise(o(s))).then(
                          function() {
                            r.commands.delete(s);
                          }
                        );
                      } catch (e) {
                        return Promise.reject(e);
                      }
                    },
                  }),
                    r.commands.set(s, n);

                  try {
                    r.sendMessage(t, s);
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
          (i.prototype._handleMessage = function(e) {
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
                    this.sendMessagePromise(o(t.id)));
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
          (i.prototype._handleClose = function(t) {
            var n = this;

            if (
              (this.commands.forEach(function(e) {
                "subscribe" in e ||
                  e.reject({
                    type: "result",
                    success: !1,
                    error: {
                      code: 3,
                      message: "Connection lost",
                    },
                  });
              }),
              !this.closeRequested)
            ) {
              this.fireEvent("disconnected");

              var r = Object.assign({}, this.options, {
                  setupRetry: 0,
                }),
                s = function s(t) {
                  var o = n;
                  setTimeout(function() {
                    try {
                      var n = e(
                        function() {
                          return Promise.resolve(r.createSocket(r)).then(
                            function(e) {
                              o.setSocket(e);
                            }
                          );
                        },
                        function(e) {
                          2 === e
                            ? o.fireEvent("reconnect-error", e)
                            : s(t + 1);
                        }
                      );
                      return Promise.resolve(
                        n && n.then ? n.then(function() {}) : void 0
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  }, 1e3 * Math.min(t, 5));
                };

              s(0);
            }
          }),
          (i.prototype._genCmdId = function() {
            return ++this.commandId;
          });

        var c = function c(t) {
            void 0 === t && (t = {});

            try {
              var _n = function _n() {
                function n() {
                  function e() {
                    if (r) return new d(r, t.saveTokens);
                    if (void 0 === o) throw s;
                    return (
                      (function(e, t, n, r) {
                        (n +=
                          (n.includes("?") ? "&" : "?") + "auth_callback=1"),
                          (document.location.href = (function(e, t, n, r) {
                            var s =
                              e +
                              "/auth/authorize?response_type=code&client_id=" +
                              encodeURIComponent(t) +
                              "&redirect_uri=" +
                              encodeURIComponent(n);
                            return (
                              r && (s += "&state=" + encodeURIComponent(r)), s
                            );
                          })(e, t, n, r));
                      })(
                        o,
                        i,
                        t.redirectUrl ||
                          location.protocol +
                            "//" +
                            location.host +
                            location.pathname +
                            location.search,
                        btoa(
                          JSON.stringify({
                            hassUrl: o,
                            clientId: i,
                          })
                        )
                      ),
                      new Promise(function() {})
                    );
                  }

                  var n = (function() {
                    if (!r && t.loadTokens)
                      return Promise.resolve(t.loadTokens()).then(function(e) {
                        r = e;
                      });
                  })();

                  return n && n.then ? n.then(e) : e();
                }

                var c = (function() {
                  if (!r) {
                    var n = (function(e) {
                        for (
                          var t = {},
                            n = location.search.substr(1).split("&"),
                            r = 0;
                          r < n.length;
                          r++
                        ) {
                          var s = n[r].split("="),
                            o = decodeURIComponent(s[0]),
                            i =
                              s.length > 1 ? decodeURIComponent(s[1]) : void 0;
                          t[o] = i;
                        }

                        return t;
                      })(),
                      s = (function() {
                        if ("auth_callback" in n) {
                          var s = JSON.parse(atob(n.state)),
                            o = e(
                              function() {
                                return Promise.resolve(
                                  h(s.hassUrl, s.clientId, n.code)
                                ).then(function(e) {
                                  (r = e), t.saveTokens && t.saveTokens(r);
                                });
                              },
                              function(e) {
                                console.log("Unable to fetch access token", e);
                              }
                            );
                          if (o && o.then) return o.then(function() {});
                        }
                      })();

                    if (s && s.then) return s.then(function() {});
                  }
                })();

                return c && c.then ? c.then(n) : n();
              };

              var r,
                o = t.hassUrl;
              o && "/" === o[o.length - 1] && (o = o.substr(0, o.length - 1));

              var i = t.clientId || a(),
                c = (function() {
                  if (!r && t.authCode && o && i) {
                    var n = e(
                      function() {
                        return Promise.resolve(h(o, i, t.authCode)).then(
                          function(e) {
                            (r = e), t.saveTokens && t.saveTokens(r);
                          }
                        );
                      },
                      function(e) {
                        console.log("Unable to fetch access token", e);
                      }
                    );
                    if (n && n.then) return n.then(function() {});
                  }
                })();

              return Promise.resolve(c && c.then ? c.then(_n) : _n());
            } catch (e) {
              return Promise.reject(e);
            }
          },
          u = function u(e, t, n) {
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
                      (n.expires = f(n.expires_in)),
                      n
                    );
                  });
                })
              );
            } catch (e) {
              return Promise.reject(e);
            }
          },
          a = function a() {
            return location.protocol + "//" + location.host + "/";
          },
          f = function f(e) {
            return 1e3 * e + Date.now();
          };

        function h(e, t, n) {
          return u(e, t, {
            code: n,
            grant_type: "authorization_code",
          });
        }

        var d = function d(e, t) {
            (this.data = e), (this._saveTokens = t);
          },
          v = {
            wsUrl: {
              configurable: !0,
            },
            accessToken: {
              configurable: !0,
            },
            expired: {
              configurable: !0,
            },
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
          (d.prototype.refreshAccessToken = function() {
            try {
              var e = this;
              return Promise.resolve(
                u(e.data.hassUrl, e.data.clientId, {
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
          (d.prototype.revoke = function() {
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
          Object.defineProperties(d.prototype, v);

        var l = function l(e, t, n, r) {
            if (e[t]) return e[t];

            var s,
              o = 0,
              i = (function(e) {
                var t = [];

                function n(n, r) {
                  e = r ? n : Object.assign({}, e, n);

                  for (var s = t, o = 0; o < s.length; o++) {
                    s[o](e);
                  }
                }

                return {
                  get state() {
                    return e;
                  },

                  action: function action(t) {
                    function r(e) {
                      n(e, !1);
                    }

                    return function() {
                      for (
                        var n = arguments, s = [e], o = 0;
                        o < arguments.length;
                        o++
                      ) {
                        s.push(n[o]);
                      }

                      var i = t.apply(this, s);
                      if (null != i) return i.then ? i.then(r) : r(i);
                    };
                  },
                  setState: n,
                  subscribe: function subscribe(e) {
                    return (
                      t.push(e),
                      function() {
                        !(function(e) {
                          for (var n = [], r = 0; r < t.length; r++) {
                            t[r] === e ? (e = null) : n.push(t[r]);
                          }

                          t = n;
                        })(e);
                      }
                    );
                  },
                };
              })(),
              c = function c() {
                return n(e).then(function(e) {
                  return i.setState(e, !0);
                });
              },
              u = function u() {
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
                subscribe: function subscribe(t) {
                  1 == ++o &&
                    (r && (s = r(e, i)), e.addEventListener("ready", u), u());
                  var n = i.subscribe(t);
                  return (
                    void 0 !== i.state &&
                      setTimeout(function() {
                        return t(i.state);
                      }, 0),
                    function() {
                      n(),
                        --o ||
                          (s &&
                            s.then(function(e) {
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
          m = function m(e, t, n, r, s) {
            return l(r, e, t, n).subscribe(s);
          },
          p = function p(e) {
            return e.sendMessagePromise({
              type: "get_states",
            });
          },
          b = function b(e) {
            return e.sendMessagePromise({
              type: "get_services",
            });
          },
          g = function g(e) {
            return e.sendMessagePromise({
              type: "get_config",
            });
          },
          y = function y(e) {
            return e.sendMessagePromise({
              type: "auth/current_user",
            });
          },
          k = function k(e, t, n, r) {
            return e.sendMessagePromise(
              (function(e, t, n) {
                var r = {
                  type: "call_service",
                  domain: e,
                  service: t,
                };
                return n && (r.service_data = n), r;
              })(t, n, r)
            );
          };

        function _(e, t) {
          return void 0 === e
            ? null
            : {
                components: e.components.concat(t.data.component),
              };
        }

        var P = function P(e) {
            return g(e);
          },
          E = function E(e, t) {
            return Promise.all([
              e.subscribeEvents(t.action(_), "component_loaded"),
              e.subscribeEvents(function() {
                return P(e).then(function(e) {
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
          w = function w(e, t) {
            return (function(e) {
              return l(e, "_cnf", P, E);
            })(e).subscribe(t);
          };

        function j(e, t) {
          var n, r;
          if (void 0 === e) return null;
          var s = t.data,
            o = s.domain,
            i = Object.assign(
              {},
              e[o],
              (((n = {})[s.service] = {
                description: "",
                fields: {},
              }),
              n)
            );
          return ((r = {})[o] = i), r;
        }

        function T(e, t) {
          var n;
          if (void 0 === e) return null;
          var r = t.data,
            s = r.domain,
            o = r.service,
            i = e[s];
          if (!(i && o in i)) return null;
          var c = {};
          return (
            Object.keys(i).forEach(function(e) {
              e !== o && (c[e] = i[e]);
            }),
            ((n = {})[s] = c),
            n
          );
        }

        var S = function S(e) {
            return b(e);
          },
          M = function M(e, t) {
            return Promise.all([
              e.subscribeEvents(t.action(j), "service_registered"),
              e.subscribeEvents(t.action(T), "service_removed"),
            ]).then(function(e) {
              return function() {
                return e.forEach(function(e) {
                  return e();
                });
              };
            });
          },
          L = function L(e, t) {
            return (function(e) {
              return l(e, "_srv", S, M);
            })(e).subscribe(t);
          },
          U = function U(e) {
            try {
              return Promise.resolve(p(e)).then(function(e) {
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
          O = function O(e, t) {
            return e.subscribeEvents(function(e) {
              return (function(t, n) {
                var r,
                  s = t.state;

                if (void 0 !== s) {
                  var o = e.data,
                    i = o.entity_id,
                    c = o.new_state;
                  if (c) t.setState((((r = {})[c.entity_id] = c), r));
                  else {
                    var u = Object.assign({}, s);
                    delete u[i], t.setState(u, !0);
                  }
                }
              })(t);
            }, "state_changed");
          },
          I = function I(e) {
            return l(e, "_ent", U, O);
          },
          C = function C(e, t) {
            return I(e).subscribe(t);
          },
          R = function R(e) {
            try {
              var t = Object.assign({}, x, e);
              return Promise.resolve(t.createSocket(t)).then(function(e) {
                return new i(e, t);
              });
            } catch (e) {
              return Promise.reject(e);
            }
          },
          x = {
            setupRetry: 0,
            createSocket: function createSocket(t) {
              if (!t.auth) throw s;
              var n = t.auth,
                r = n.expired
                  ? n.refreshAccessToken().then(
                      function() {
                        r = void 0;
                      },
                      function() {
                        r = void 0;
                      }
                    )
                  : void 0,
                o = n.wsUrl;
              return new Promise(function(s, i) {
                return (function t(s, i, c) {
                  var u = new WebSocket(o),
                    a = !1,
                    f = function f() {
                      if ((u.removeEventListener("close", f), a)) c(2);
                      else if (0 !== s) {
                        var e = -1 === s ? -1 : s - 1;
                        setTimeout(function() {
                          return t(e, i, c);
                        }, 1e3);
                      } else c(1);
                    },
                    h = function h(t) {
                      try {
                        var s = e(
                          function() {
                            function e() {
                              u.send(
                                JSON.stringify({
                                  type: "auth",
                                  access_token: n.accessToken,
                                })
                              );
                            }

                            var t = (function() {
                              if (n.expired)
                                return Promise.resolve(
                                  r || n.refreshAccessToken()
                                ).then(function() {});
                            })();

                            return t && t.then ? t.then(e) : e();
                          },
                          function(e) {
                            (a = 2 === e), u.close();
                          }
                        );
                        return Promise.resolve(
                          s && s.then ? s.then(function() {}) : void 0
                        );
                      } catch (e) {
                        return Promise.reject(e);
                      }
                    },
                    d = function d(e) {
                      try {
                        switch (JSON.parse(e.data).type) {
                          case "auth_invalid":
                            (a = !0), u.close();
                            break;

                          case "auth_ok":
                            u.removeEventListener("open", h),
                              u.removeEventListener("message", d),
                              u.removeEventListener("close", f),
                              u.removeEventListener("error", f),
                              i(u);
                        }

                        return;
                      } catch (e) {
                        return Promise.reject(e);
                      }
                    };

                  u.addEventListener("open", h),
                    u.addEventListener("message", d),
                    u.addEventListener("close", f),
                    u.addEventListener("error", f);
                })(t.setupRetry, s, i);
              });
            },
          };

        /***/
      },

    /***/ "./src/common/auth/token_storage.ts":
      /*!******************************************!*\
  !*** ./src/common/auth/token_storage.ts ***!
  \******************************************/
      /*! exports provided: askWrite, saveTokens, enableWrite, loadTokens */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "askWrite",
          function() {
            return askWrite;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "saveTokens",
          function() {
            return saveTokens;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "enableWrite",
          function() {
            return enableWrite;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadTokens",
          function() {
            return loadTokens;
          }
        );
        var storage = window.localStorage || {};
        // So that core.js and main app hit same shared object.
        var tokenCache = window.__tokenCache;

        if (!tokenCache) {
          tokenCache = window.__tokenCache = {
            tokens: undefined,
            writeEnabled: undefined,
          };
        }

        function askWrite() {
          return (
            tokenCache.tokens !== undefined &&
            tokenCache.writeEnabled === undefined
          );
        }
        function saveTokens(tokens) {
          tokenCache.tokens = tokens;

          if (tokenCache.writeEnabled) {
            try {
              storage.hassTokens = JSON.stringify(tokens);
            } catch (err) {
              // write failed, ignore it. Happens if storage is full or private mode.
            }
          }
        }
        function enableWrite() {
          tokenCache.writeEnabled = true;

          if (tokenCache.tokens) {
            saveTokens(tokenCache.tokens);
          }
        }
        function loadTokens() {
          if (tokenCache.tokens === undefined) {
            try {
              // Delete the old token cache.
              delete storage.tokens;
              var tokens = storage.hassTokens;

              if (tokens) {
                tokenCache.tokens = JSON.parse(tokens);
                tokenCache.writeEnabled = true;
              } else {
                tokenCache.tokens = null;
              }
            } catch (err) {
              tokenCache.tokens = null;
            }
          }

          return tokenCache.tokens;
        }

        /***/
      },

    /***/ "./src/data/auth.ts":
      /*!**************************!*\
  !*** ./src/data/auth.ts ***!
  \**************************/
      /*! exports provided: hassUrl, getSignedPath, fetchAuthProviders */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "hassUrl",
          function() {
            return hassUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getSignedPath",
          function() {
            return getSignedPath;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchAuthProviders",
          function() {
            return fetchAuthProviders;
          }
        );
        var hassUrl = "".concat(location.protocol, "//").concat(location.host);
        var getSignedPath = function getSignedPath(hass, path) {
          return hass.callWS({
            type: "auth/sign_path",
            path: path,
          });
        };
        var fetchAuthProviders = function fetchAuthProviders() {
          return fetch("/auth/providers", {
            credentials: "same-origin",
          });
        };

        /***/
      },

    /***/ "./src/data/lovelace.ts":
      /*!******************************!*\
  !*** ./src/data/lovelace.ts ***!
  \******************************/
      /*! exports provided: fetchConfig, saveConfig, subscribeLovelaceUpdates */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchConfig",
          function() {
            return fetchConfig;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "saveConfig",
          function() {
            return saveConfig;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeLovelaceUpdates",
          function() {
            return subscribeLovelaceUpdates;
          }
        );
        var fetchConfig = function fetchConfig(conn, force) {
          return conn.sendMessagePromise({
            type: "lovelace/config",
            force: force,
          });
        };
        var saveConfig = function saveConfig(hass, config) {
          return hass.callWS({
            type: "lovelace/config/save",
            config: config,
          });
        };
        var subscribeLovelaceUpdates = function subscribeLovelaceUpdates(
          conn,
          onChange
        ) {
          return conn.subscribeEvents(onChange, "lovelace_updated");
        };

        /***/
      },

    /***/ "./src/data/ws-panels.ts":
      /*!*******************************!*\
  !*** ./src/data/ws-panels.ts ***!
  \*******************************/
      /*! exports provided: subscribePanels */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribePanels",
          function() {
            return subscribePanels;
          }
        );
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );

        var fetchPanels = function fetchPanels(conn) {
          return conn.sendMessagePromise({
            type: "get_panels",
          });
        };

        var subscribeUpdates = function subscribeUpdates(conn, store) {
          return conn.subscribeEvents(function() {
            return fetchPanels(conn).then(function(panels) {
              return store.setState(panels, true);
            });
          }, "panels_updated");
        };

        var subscribePanels = function subscribePanels(conn, onChange) {
          return Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "createCollection"
            ]
          )("_pnl", fetchPanels, subscribeUpdates, conn, onChange);
        };

        /***/
      },

    /***/ "./src/data/ws-themes.ts":
      /*!*******************************!*\
  !*** ./src/data/ws-themes.ts ***!
  \*******************************/
      /*! exports provided: subscribeThemes */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeThemes",
          function() {
            return subscribeThemes;
          }
        );
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );

        var fetchThemes = function fetchThemes(conn) {
          return conn.sendMessagePromise({
            type: "frontend/get_themes",
          });
        };

        var subscribeUpdates = function subscribeUpdates(conn, store) {
          return conn.subscribeEvents(function(event) {
            return store.setState(event.data, true);
          }, "themes_updated");
        };

        var subscribeThemes = function subscribeThemes(conn, onChange) {
          return Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "createCollection"
            ]
          )("_thm", fetchThemes, subscribeUpdates, conn, onChange);
        };

        /***/
      },

    /***/ "./src/data/ws-user.ts":
      /*!*****************************!*\
  !*** ./src/data/ws-user.ts ***!
  \*****************************/
      /*! exports provided: userCollection, subscribeUser */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "userCollection",
          function() {
            return userCollection;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeUser",
          function() {
            return subscribeUser;
          }
        );
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );

        var userCollection = function userCollection(conn) {
          return Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "getCollection"
            ]
          )(
            conn,
            "_usr",
            function() {
              return Object(
                home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
                  "getUser"
                ]
              )(conn);
            },
            undefined
          );
        };
        var subscribeUser = function subscribeUser(conn, onChange) {
          return userCollection(conn).subscribe(onChange);
        };

        /***/
      },

    /***/ "./src/entrypoints/core.ts":
      /*!*********************************!*\
  !*** ./src/entrypoints/core.ts ***!
  \*********************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );
        /* harmony import */ var _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/auth/token_storage */ "./src/common/auth/token_storage.ts"
        );
        /* harmony import */ var _data_ws_panels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../data/ws-panels */ "./src/data/ws-panels.ts"
        );
        /* harmony import */ var _data_ws_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../data/ws-themes */ "./src/data/ws-themes.ts"
        );
        /* harmony import */ var _data_ws_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../data/ws-user */ "./src/data/ws-user.ts"
        );
        /* harmony import */ var _data_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../data/auth */ "./src/data/auth.ts"
        );
        /* harmony import */ var _data_lovelace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../data/lovelace */ "./src/data/lovelace.ts"
        );
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function() {
            var self = this,
              args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        var isExternal = location.search.includes("external_auth=1");
        var authProm = isExternal
          ? function() {
              return __webpack_require__
                .e(/*! import() | external_auth */ "external_auth")
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ../external_app/external_auth */ "./src/external_app/external_auth.ts"
                  )
                )
                .then(function(_ref) {
                  var createExternalAuth = _ref.createExternalAuth;
                  return createExternalAuth(
                    _data_auth__WEBPACK_IMPORTED_MODULE_5__["hassUrl"]
                  );
                });
            }
          : function() {
              return Object(
                home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
                  "getAuth"
                ]
              )({
                hassUrl: _data_auth__WEBPACK_IMPORTED_MODULE_5__["hassUrl"],
                saveTokens:
                  _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__[
                    "saveTokens"
                  ],
                loadTokens: function loadTokens() {
                  return Promise.resolve(
                    Object(
                      _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__[
                        "loadTokens"
                      ]
                    )()
                  );
                },
              });
            };

        var connProm =
          /*#__PURE__*/
          (function() {
            var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(auth) {
                var conn, _conn;

                return regeneratorRuntime.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return Object(
                            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
                              "createConnection"
                            ]
                          )({
                            auth: auth,
                          });

                        case 3:
                          conn = _context.sent;

                          // Clear url if we have been able to establish a connection
                          if (location.search.includes("auth_callback=1")) {
                            history.replaceState(null, "", location.pathname);
                          }

                          return _context.abrupt("return", {
                            auth: auth,
                            conn: conn,
                          });

                        case 8:
                          _context.prev = 8;
                          _context.t0 = _context["catch"](0);

                          if (
                            !(
                              _context.t0 !==
                              home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
                                "ERR_INVALID_AUTH"
                              ]
                            )
                          ) {
                            _context.next = 12;
                            break;
                          }

                          throw _context.t0;

                        case 12:
                          // We can get invalid auth if auth tokens were stored that are no longer valid
                          // Clear stored tokens.
                          if (!isExternal) {
                            Object(
                              _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__[
                                "saveTokens"
                              ]
                            )(null);
                          }

                          _context.next = 15;
                          return authProm();

                        case 15:
                          auth = _context.sent;
                          _context.next = 18;
                          return Object(
                            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
                              "createConnection"
                            ]
                          )({
                            auth: auth,
                          });

                        case 18:
                          _conn = _context.sent;
                          return _context.abrupt("return", {
                            auth: auth,
                            conn: _conn,
                          });

                        case 20:
                        case "end":
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  null,
                  [[0, 8]]
                );
              })
            );

            return function connProm(_x) {
              return _ref2.apply(this, arguments);
            };
          })();

        if (true) {
          performance.mark("hass-start");
        }

        window.hassConnection = authProm().then(connProm); // Start fetching some of the data that we will need.

        window.hassConnection.then(function(_ref3) {
          var conn = _ref3.conn;

          var noop = function noop() {
            // do nothing
          };

          Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "subscribeEntities"
            ]
          )(conn, noop);
          Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "subscribeConfig"
            ]
          )(conn, noop);
          Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "subscribeServices"
            ]
          )(conn, noop);
          Object(
            _data_ws_panels__WEBPACK_IMPORTED_MODULE_2__["subscribePanels"]
          )(conn, noop);
          Object(
            _data_ws_themes__WEBPACK_IMPORTED_MODULE_3__["subscribeThemes"]
          )(conn, noop);
          Object(
            _data_ws_user__WEBPACK_IMPORTED_MODULE_4__["subscribeUser"]
          )(conn, noop);

          if (
            location.pathname === "/" ||
            location.pathname.startsWith("/lovelace/")
          ) {
            window.llConfProm = Object(
              _data_lovelace__WEBPACK_IMPORTED_MODULE_6__["fetchConfig"]
            )(conn, false);
          }
        });
        window.addEventListener("error", function(e) {
          var homeAssistant = document.querySelector("home-assistant");

          if (
            homeAssistant &&
            homeAssistant.hass &&
            homeAssistant.hass.callService
          ) {
            homeAssistant.hass.callService("system_log", "write", {
              logger: "frontend."
                .concat(true ? "js_dev" : undefined, ".")
                .concat("es5", ".")
                .concat("20190718.0".replace(".", "")),
              message: ""
                .concat(e.filename, ":")
                .concat(e.lineno, ":")
                .concat(e.colno, " ")
                .concat(e.message),
            });
          }
        });

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tYXN5bmMtdG8tcHJvbWlzZXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vbGliL2Vycm9ycy50cyIsIndlYnBhY2s6Ly8vLi4vbGliL21lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uLi9saWIvc29ja2V0LnRzIiwid2VicGFjazovLy8uLi9saWIvY29ubmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vbGliL2F1dGgudHMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi91dGlsLnRzIiwid2VicGFjazovLy8uLi9saWIvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi9jb2xsZWN0aW9uLnRzIiwid2VicGFjazovLy8uLi9saWIvY29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi9zZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly8vLi4vbGliL2VudGl0aWVzLnRzIiwid2VicGFjazovLy8uLi9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9hdXRoL3Rva2VuX3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9sb3ZlbGFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS93cy1wYW5lbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvd3MtdGhlbWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3dzLXVzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5cG9pbnRzL2NvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJjb3JlXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCJleHRlcm5hbF9hdXRoXCI6XCJleHRlcm5hbF9hdXRoXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmNodW5rLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9mcm9udGVuZF9lczUvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5cG9pbnRzL2NvcmUudHNcIik7XG4iLCIvLyBBIHR5cGUgb2YgcHJvbWlzZS1saWtlIHRoYXQgcmVzb2x2ZXMgc3luY2hyb25vdXNseSBhbmQgc3VwcG9ydHMgb25seSBvbmUgb2JzZXJ2ZXJcbmV4cG9ydCBjb25zdCBfUGFjdCA9IC8qI19fUFVSRV9fKi8oZnVuY3Rpb24oKSB7XG5cdGZ1bmN0aW9uIF9QYWN0KCkge31cblx0X1BhY3QucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBfUGFjdCgpO1xuXHRcdGNvbnN0IHN0YXRlID0gdGhpcy5zO1xuXHRcdGlmIChzdGF0ZSkge1xuXHRcdFx0Y29uc3QgY2FsbGJhY2sgPSBzdGF0ZSAmIDEgPyBvbkZ1bGZpbGxlZCA6IG9uUmVqZWN0ZWQ7XG5cdFx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMSwgY2FsbGJhY2sodGhpcy52KSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMiwgZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLm8gPSBmdW5jdGlvbihfdGhpcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBfdGhpcy52O1xuXHRcdFx0XHRpZiAoX3RoaXMucyAmIDEpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMSwgb25GdWxmaWxsZWQgPyBvbkZ1bGZpbGxlZCh2YWx1ZSkgOiB2YWx1ZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAob25SZWplY3RlZCkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAxLCBvblJlamVjdGVkKHZhbHVlKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X3NldHRsZShyZXN1bHQsIDIsIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMiwgZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdHJldHVybiBfUGFjdDtcbn0pKCk7XG5cbi8vIFNldHRsZXMgYSBwYWN0IHN5bmNocm9ub3VzbHlcbmV4cG9ydCBmdW5jdGlvbiBfc2V0dGxlKHBhY3QsIHN0YXRlLCB2YWx1ZSkge1xuXHRpZiAoIXBhY3Qucykge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIF9QYWN0KSB7XG5cdFx0XHRpZiAodmFsdWUucykge1xuXHRcdFx0XHRpZiAoc3RhdGUgJiAxKSB7XG5cdFx0XHRcdFx0c3RhdGUgPSB2YWx1ZS5zO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUudjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlLm8gPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgc3RhdGUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZS50aGVuKSB7XG5cdFx0XHR2YWx1ZS50aGVuKF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCBzdGF0ZSksIF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHBhY3QucyA9IHN0YXRlO1xuXHRcdHBhY3QudiA9IHZhbHVlO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gcGFjdC5vO1xuXHRcdGlmIChvYnNlcnZlcikge1xuXHRcdFx0b2JzZXJ2ZXIocGFjdCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNTZXR0bGVkUGFjdCh0aGVuYWJsZSkge1xuXHRyZXR1cm4gdGhlbmFibGUgaW5zdGFuY2VvZiBfUGFjdCAmJiB0aGVuYWJsZS5zICYgMTtcbn1cblxuLy8gQ29udmVydHMgYXJndW1lbnQgdG8gYSBmdW5jdGlvbiB0aGF0IGFsd2F5cyByZXR1cm5zIGEgUHJvbWlzZVxuZXhwb3J0IGZ1bmN0aW9uIF9hc3luYyhmKSB7XG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRmb3IgKHZhciBhcmdzID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmFwcGx5KHRoaXMsIGFyZ3MpKTtcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gQXdhaXRzIG9uIGEgdmFsdWUgdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSBhIFByb21pc2UgKGVxdWl2YWxlbnQgdG8gdGhlIGF3YWl0IGtleXdvcmQgaW4gRVMyMDE1LCB3aXRoIGNvbnRpbnVhdGlvbnMgcGFzc2VkIGV4cGxpY2l0bHkpXG5leHBvcnQgZnVuY3Rpb24gX2F3YWl0KHZhbHVlLCB0aGVuLCBkaXJlY3QpIHtcblx0aWYgKGRpcmVjdCkge1xuXHRcdHJldHVybiB0aGVuID8gdGhlbih2YWx1ZSkgOiB2YWx1ZTtcblx0fVxuXHRpZiAoIXZhbHVlIHx8ICF2YWx1ZS50aGVuKSB7XG5cdFx0dmFsdWUgPSBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuXHR9XG5cdHJldHVybiB0aGVuID8gdmFsdWUudGhlbih0aGVuKSA6IHZhbHVlO1xufVxuXG4vLyBBd2FpdHMgb24gYSB2YWx1ZSB0aGF0IG1heSBvciBtYXkgbm90IGJlIGEgUHJvbWlzZSwgdGhlbiBpZ25vcmVzIGl0XG5leHBvcnQgZnVuY3Rpb24gX2F3YWl0SWdub3JlZCh2YWx1ZSwgZGlyZWN0KSB7XG5cdGlmICghZGlyZWN0KSB7XG5cdFx0cmV0dXJuIHZhbHVlICYmIHZhbHVlLnRoZW4gPyB2YWx1ZS50aGVuKF9lbXB0eSkgOiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxufVxuXG4vLyBQcm9jZWVkcyBhZnRlciBhIHZhbHVlIGhhcyByZXNvbHZlZCwgb3IgcHJvY2VlZHMgaW1tZWRpYXRlbHkgaWYgdGhlIHZhbHVlIGlzIG5vdCB0aGVuYWJsZVxuZXhwb3J0IGZ1bmN0aW9uIF9jb250aW51ZSh2YWx1ZSwgdGhlbikge1xuXHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4odGhlbikgOiB0aGVuKHZhbHVlKTtcbn1cblxuLy8gUHJvY2VlZHMgYWZ0ZXIgYSB2YWx1ZSBoYXMgcmVzb2x2ZWQsIG9yIHByb2NlZWRzIGltbWVkaWF0ZWx5IGlmIHRoZSB2YWx1ZSBpcyBub3QgdGhlbmFibGVcbmV4cG9ydCBmdW5jdGlvbiBfY29udGludWVJZ25vcmVkKHZhbHVlKSB7XG5cdGlmICh2YWx1ZSAmJiB2YWx1ZS50aGVuKSB7XG5cdFx0cmV0dXJuIHZhbHVlLnRoZW4oX2VtcHR5KTtcblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBpdGVyYXRlIHRocm91Z2ggYW4gb2JqZWN0IHRoYXQgaGFzIGEgbGVuZ3RoIHByb3BlcnR5LCBwYXNzaW5nIHRoZSBpbmRleCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrIChldmVuIGFzIHRoZSBsZW5ndGggcHJvcGVydHkgY2hhbmdlcylcbmV4cG9ydCBmdW5jdGlvbiBfZm9yVG8oYXJyYXksIGJvZHksIGNoZWNrKSB7XG5cdHZhciBpID0gLTEsIHBhY3QsIHJlamVjdDtcblx0ZnVuY3Rpb24gX2N5Y2xlKHJlc3VsdCkge1xuXHRcdHRyeSB7XG5cdFx0XHR3aGlsZSAoKytpIDwgYXJyYXkubGVuZ3RoICYmICghY2hlY2sgfHwgIWNoZWNrKCkpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGJvZHkoaSk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdC50aGVuKF9jeWNsZSwgcmVqZWN0IHx8IChyZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCA9IG5ldyBfUGFjdCgpLCAyKSkpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHBhY3QpIHtcblx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFjdCA9IHJlc3VsdDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QgfHwgKHBhY3QgPSBuZXcgUGFjdCgpKSwgMiwgZSk7XG5cdFx0fVxuXHR9XG5cdF9jeWNsZSgpO1xuXHRyZXR1cm4gcGFjdDtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSB0aHJvdWdoIGFuIG9iamVjdCdzIHByb3BlcnRpZXMgKGluY2x1ZGluZyBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIHRoZSBwcm90b3R5cGUpXG4vLyBVc2VzIGEgc25hcHNob3Qgb2YgdGhlIG9iamVjdCdzIHByb3BlcnRpZXNcbmV4cG9ydCBmdW5jdGlvbiBfZm9ySW4odGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHR2YXIga2V5cyA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG5cdFx0a2V5cy5wdXNoKGtleSk7XG5cdH1cblx0cmV0dXJuIF9mb3JUbyhrZXlzLCBmdW5jdGlvbihpKSB7IHJldHVybiBib2R5KGtleXNbaV0pOyB9LCBjaGVjayk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcyAoZXhjbHVkaW5nIHByb3BlcnRpZXMgaW5oZXJpdGVkIGZyb20gdGhlIHByb3RvdHlwZSlcbi8vIFVzZXMgYSBzbmFwc2hvdCBvZiB0aGUgb2JqZWN0J3MgcHJvcGVydGllc1xuZXhwb3J0IGZ1bmN0aW9uIF9mb3JPd24odGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHR2YXIga2V5cyA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkpIHtcblx0XHRcdGtleXMucHVzaChrZXkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gX2ZvclRvKGtleXMsIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIGJvZHkoa2V5c1tpXSk7IH0sIGNoZWNrKTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSB0aHJvdWdoIGFuIG9iamVjdCdzIHZhbHVlc1xuLy8gVXNlcyBmb3IuLi5vZiBpZiB0aGUgcnVudGltZSBzdXBwb3J0cyBpdCwgb3RoZXJ3aXNlIGl0ZXJhdGVzIHVudGlsIGxlbmd0aCBvbiBhIGNvcHlcbmV4cG9ydCBmdW5jdGlvbiBfZm9yT2YodGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdHZhciBpdGVyYXRvclN5bWJvbCA9IFN5bWJvbC5pdGVyYXRvcjtcblx0XHRpZiAoaXRlcmF0b3JTeW1ib2wgJiYgKGl0ZXJhdG9yU3ltYm9sIGluIHRhcmdldCkpIHtcblx0XHRcdHZhciBpdGVyYXRvciA9IHRhcmdldFtpdGVyYXRvclN5bWJvbF0oKSwgc3RlcCwgcGFjdCwgcmVqZWN0O1xuXHRcdFx0ZnVuY3Rpb24gX2N5Y2xlKHJlc3VsdCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUgJiYgKCFjaGVjayB8fCAhY2hlY2soKSkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IGJvZHkoc3RlcC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnRoZW4oX2N5Y2xlLCByZWplY3QgfHwgKHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0ID0gbmV3IF9QYWN0KCksIDIpKSk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWN0KSB7XG5cdFx0XHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBhY3QgPSByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0X3NldHRsZShwYWN0IHx8IChwYWN0ID0gbmV3IFBhY3QoKSksIDIsIGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRfY3ljbGUoKTtcblx0XHRcdGlmIChpdGVyYXRvci5yZXR1cm4pIHtcblx0XHRcdFx0dmFyIF9maXh1cCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGlmICghc3RlcC5kb25lKSB7XG5cdFx0XHRcdFx0XHRcdGl0ZXJhdG9yLnJldHVybigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHBhY3QgJiYgcGFjdC50aGVuKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBhY3QudGhlbihfZml4dXAsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdHRocm93IF9maXh1cChlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfZml4dXAoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwYWN0O1xuXHRcdH1cblx0fVxuXHQvLyBObyBzdXBwb3J0IGZvciBTeW1ib2wuaXRlcmF0b3Jcblx0aWYgKCEoXCJsZW5ndGhcIiBpbiB0YXJnZXQpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcInZhbHVlIGlzIG5vdCBpdGVyYWJsZVwiKTtcblx0fVxuXHQvLyBIYW5kbGUgbGl2ZSBjb2xsZWN0aW9ucyBwcm9wZXJseVxuXHR2YXIgdmFsdWVzID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsdWVzLnB1c2godGFyZ2V0W2ldKTtcblx0fVxuXHRyZXR1cm4gX2ZvclRvKHZhbHVlcywgZnVuY3Rpb24oaSkgeyByZXR1cm4gYm9keSh2YWx1ZXNbaV0pOyB9LCBjaGVjayk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgb24gYSB2YWx1ZSB1c2luZyBpdCdzIGFzeW5jIGl0ZXJhdG9yIGlmIHByZXNlbnQsIG9yIGl0cyBzeW5jaHJvbm91cyBpdGVyYXRvciBpZiBtaXNzaW5nXG5leHBvcnQgZnVuY3Rpb24gX2ZvckF3YWl0T2YodGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gU3ltYm9sLmFzeW5jSXRlcmF0b3I7XG5cdFx0aWYgKGFzeW5jSXRlcmF0b3JTeW1ib2wgJiYgKGFzeW5jSXRlcmF0b3JTeW1ib2wgaW4gdGFyZ2V0KSkge1xuXHRcdFx0dmFyIHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0XHRcdHZhciBpdGVyYXRvciA9IHRhcmdldFthc3luY0l0ZXJhdG9yU3ltYm9sXSgpO1xuXHRcdFx0aXRlcmF0b3IubmV4dCgpLnRoZW4oX3Jlc3VtZUFmdGVyTmV4dCkudGhlbih2b2lkIDAsIF9yZWplY3QpO1xuXHRcdFx0cmV0dXJuIHBhY3Q7XG5cdFx0XHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJCb2R5KHJlc3VsdCkge1xuXHRcdFx0XHRpZiAoY2hlY2sgJiYgIWNoZWNrKCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gX3NldHRsZShwYWN0LCAxLCBpdGVyYXRvci5yZXR1cm4gPyBpdGVyYXRvci5yZXR1cm4oKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVzdWx0OyB9KSA6IHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlcmF0b3IubmV4dCgpLnRoZW4oX3Jlc3VtZUFmdGVyTmV4dCkudGhlbih2b2lkIDAsIF9yZWplY3QpO1xuXHRcdFx0fVxuXHRcdFx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyTmV4dChzdGVwKSB7XG5cdFx0XHRcdGlmIChzdGVwLmRvbmUpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFByb21pc2UucmVzb2x2ZShib2R5KHN0ZXAudmFsdWUpKS50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCBfcmVqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZnVuY3Rpb24gX3JlamVjdChlcnJvcikge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QsIDIsIGl0ZXJhdG9yLnJldHVybiA/IGl0ZXJhdG9yLnJldHVybigpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBlcnJvcjsgfSkgOiBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoX2Zvck9mKHRhcmdldCwgZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihib2R5KTsgfSwgY2hlY2spKTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaW1wbGVtZW50IGEgZ2VuZXJpYyBmb3IgbG9vcFxuZXhwb3J0IGZ1bmN0aW9uIF9mb3IodGVzdCwgdXBkYXRlLCBib2R5KSB7XG5cdHZhciBzdGFnZTtcblx0Zm9yICg7Oykge1xuXHRcdHZhciBzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRpZiAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpKSB7XG5cdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0fVxuXHRcdGlmICghc2hvdWxkQ29udGludWUpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRzdGFnZSA9IDA7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YWdlID0gMTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh1cGRhdGUpIHtcblx0XHRcdHZhciB1cGRhdGVWYWx1ZSA9IHVwZGF0ZSgpO1xuXHRcdFx0aWYgKHVwZGF0ZVZhbHVlICYmIHVwZGF0ZVZhbHVlLnRoZW4gJiYgIV9pc1NldHRsZWRQYWN0KHVwZGF0ZVZhbHVlKSkge1xuXHRcdFx0XHRzdGFnZSA9IDI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHR2YXIgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHR2YXIgcmVqZWN0ID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIDIpO1xuXHQoc3RhZ2UgPT09IDAgPyBzaG91bGRDb250aW51ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpIDogc3RhZ2UgPT09IDEgPyByZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KSA6IHVwZGF0ZVZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVXBkYXRlKSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdHJldHVybiBwYWN0O1xuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJCb2R5KHZhbHVlKSB7XG5cdFx0cmVzdWx0ID0gdmFsdWU7XG5cdFx0ZG8ge1xuXHRcdFx0aWYgKHVwZGF0ZSkge1xuXHRcdFx0XHR1cGRhdGVWYWx1ZSA9IHVwZGF0ZSgpO1xuXHRcdFx0XHRpZiAodXBkYXRlVmFsdWUgJiYgdXBkYXRlVmFsdWUudGhlbiAmJiAhX2lzU2V0dGxlZFBhY3QodXBkYXRlVmFsdWUpKSB7XG5cdFx0XHRcdFx0dXBkYXRlVmFsdWUudGhlbihfcmVzdW1lQWZ0ZXJVcGRhdGUpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0XHRpZiAoIXNob3VsZENvbnRpbnVlIHx8IChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkgJiYgIXNob3VsZENvbnRpbnVlLnYpKSB7XG5cdFx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNob3VsZENvbnRpbnVlLnRoZW4pIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHR9XG5cdFx0fSB3aGlsZSAoIXJlc3VsdCB8fCAhcmVzdWx0LnRoZW4pO1xuXHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHR9XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclRlc3Qoc2hvdWxkQ29udGludWUpIHtcblx0XHRpZiAoc2hvdWxkQ29udGludWUpIHtcblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfcmVzdW1lQWZ0ZXJCb2R5KHJlc3VsdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyVXBkYXRlKCkge1xuXHRcdGlmIChzaG91bGRDb250aW51ZSA9IHRlc3QoKSkge1xuXHRcdFx0aWYgKHNob3VsZENvbnRpbnVlLnRoZW4pIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9yZXN1bWVBZnRlclRlc3Qoc2hvdWxkQ29udGludWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGltcGxlbWVudCBhIGRvIC4uLiB3aGlsZSBsb29wXG5leHBvcnQgZnVuY3Rpb24gX2RvKGJvZHksIHRlc3QpIHtcblx0dmFyIGF3YWl0Qm9keTtcblx0ZG8ge1xuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhd2FpdEJvZHkgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0dmFyIHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdGlmIChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkpIHtcblx0XHRcdHNob3VsZENvbnRpbnVlID0gc2hvdWxkQ29udGludWUudjtcblx0XHR9XG5cdFx0aWYgKCFzaG91bGRDb250aW51ZSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH0gd2hpbGUgKCFzaG91bGRDb250aW51ZS50aGVuKTtcblx0Y29uc3QgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHRjb25zdCByZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgMik7XG5cdChhd2FpdEJvZHkgPyByZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KSA6IHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRyZXR1cm4gcGFjdDtcblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keSh2YWx1ZSkge1xuXHRcdHJlc3VsdCA9IHZhbHVlO1xuXHRcdGZvciAoOzspIHtcblx0XHRcdHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSkge1xuXHRcdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNob3VsZENvbnRpbnVlLnRoZW4pIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdH1cblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyVGVzdChzaG91bGRDb250aW51ZSkge1xuXHRcdGlmIChzaG91bGRDb250aW51ZSkge1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSkge1xuXHRcdFx0XHRcdHNob3VsZENvbnRpbnVlID0gc2hvdWxkQ29udGludWUudjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fSB3aGlsZSAoIXNob3VsZENvbnRpbnVlLnRoZW4pO1xuXHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBpbXBsZW1lbnQgYSBzd2l0Y2ggc3RhdGVtZW50XG5leHBvcnQgZnVuY3Rpb24gX3N3aXRjaChkaXNjcmltaW5hbnQsIGNhc2VzKSB7XG5cdHZhciBkaXNwYXRjaEluZGV4ID0gLTE7XG5cdHZhciBhd2FpdEJvZHk7XG5cdG91dGVyOiB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYXNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHRlc3QgPSBjYXNlc1tpXVswXTtcblx0XHRcdGlmICh0ZXN0KSB7XG5cdFx0XHRcdHZhciB0ZXN0VmFsdWUgPSB0ZXN0KCk7XG5cdFx0XHRcdGlmICh0ZXN0VmFsdWUgJiYgdGVzdFZhbHVlLnRoZW4pIHtcblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGVzdFZhbHVlID09PSBkaXNjcmltaW5hbnQpIHtcblx0XHRcdFx0XHRkaXNwYXRjaEluZGV4ID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRm91bmQgdGhlIGRlZmF1bHQgY2FzZSwgc2V0IGl0IGFzIHRoZSBwZW5kaW5nIGRpc3BhdGNoIGNhc2Vcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChkaXNwYXRjaEluZGV4ICE9PSAtMSkge1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHR2YXIgYm9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0XHR3aGlsZSAoIWJvZHkpIHtcblx0XHRcdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHRcdFx0Ym9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRhd2FpdEJvZHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrIG91dGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBmYWxsdGhyb3VnaENoZWNrID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMl07XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdH0gd2hpbGUgKGZhbGx0aHJvdWdoQ2hlY2sgJiYgIWZhbGx0aHJvdWdoQ2hlY2soKSk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fVxuXHRjb25zdCBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cdGNvbnN0IHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKTtcblx0KGF3YWl0Qm9keSA/IHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpIDogdGVzdFZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRyZXR1cm4gcGFjdDtcblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyVGVzdCh2YWx1ZSkge1xuXHRcdGZvciAoOzspIHtcblx0XHRcdGlmICh2YWx1ZSA9PT0gZGlzY3JpbWluYW50KSB7XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXggPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmICgrK2kgPT09IGNhc2VzLmxlbmd0aCkge1xuXHRcdFx0XHRpZiAoZGlzcGF0Y2hJbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0ZXN0ID0gY2FzZXNbaV1bMF07XG5cdFx0XHRpZiAodGVzdCkge1xuXHRcdFx0XHR2YWx1ZSA9IHRlc3QoKTtcblx0XHRcdFx0aWYgKHZhbHVlICYmIHZhbHVlLnRoZW4pIHtcblx0XHRcdFx0XHR2YWx1ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGRvIHtcblx0XHRcdHZhciBib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR3aGlsZSAoIWJvZHkpIHtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0XHRib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR9XG5cdFx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGZhbGx0aHJvdWdoQ2hlY2sgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsyXTtcblx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHR9IHdoaWxlIChmYWxsdGhyb3VnaENoZWNrICYmICFmYWxsdGhyb3VnaENoZWNrKCkpO1xuXHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0fVxuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJCb2R5KHJlc3VsdCkge1xuXHRcdGZvciAoOzspIHtcblx0XHRcdHZhciBmYWxsdGhyb3VnaENoZWNrID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMl07XG5cdFx0XHRpZiAoIWZhbGx0aHJvdWdoQ2hlY2sgfHwgZmFsbHRocm91Z2hDaGVjaygpKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0dmFyIGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdHdoaWxlICghYm9keSkge1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHRcdGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdH1cblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgcGFzcyB0aGUgcmVzdWx0IHRvIGV4cGxpY2l0bHkgcGFzc2VkIGNvbnRpbnVhdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBfY2FsbChib2R5LCB0aGVuLCBkaXJlY3QpIHtcblx0aWYgKGRpcmVjdCkge1xuXHRcdHJldHVybiB0aGVuID8gdGhlbihib2R5KCkpIDogYm9keSgpO1xuXHR9XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IFByb21pc2UucmVzb2x2ZShib2R5KCkpO1xuXHRcdHJldHVybiB0aGVuID8gcmVzdWx0LnRoZW4odGhlbikgOiByZXN1bHQ7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG5cdH1cbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBzd2FsbG93IHRoZSByZXN1bHRcbmV4cG9ydCBmdW5jdGlvbiBfY2FsbElnbm9yZWQoYm9keSwgZGlyZWN0KSB7XG5cdHJldHVybiBfY2FsbChib2R5LCBfZW1wdHksIGRpcmVjdCk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgcGFzcyB0aGUgcmVzdWx0IHRvIGV4cGxpY2l0bHkgcGFzc2VkIGNvbnRpbnVhdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBfaW52b2tlKGJvZHksIHRoZW4pIHtcblx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbih0aGVuKTtcblx0fVxuXHRyZXR1cm4gdGhlbihyZXN1bHQpO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHN3YWxsb3cgdGhlIHJlc3VsdFxuZXhwb3J0IGZ1bmN0aW9uIF9pbnZva2VJZ25vcmVkKGJvZHkpIHtcblx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbihfZW1wdHkpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgc2VuZCBlcnJvcnMgdG8gcmVjb3ZlcnkgY29udGludWF0aW9uXG5leHBvcnQgZnVuY3Rpb24gX2NhdGNoKGJvZHksIHJlY292ZXIpIHtcblx0dHJ5IHtcblx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRyZXR1cm4gcmVjb3ZlcihlKTtcblx0fVxuXHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0cmV0dXJuIHJlc3VsdC50aGVuKHZvaWQgMCwgcmVjb3Zlcik7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgYXdhaXQgYSBwcm9taXNlIGFuZCBwYXNzIHRoZSByZXN1bHQgdG8gYSBmaW5hbGx5IGNvbnRpbnVhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIF9maW5hbGx5UmV0aHJvd3MoYm9keSwgZmluYWxpemVyKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmaW5hbGl6ZXIodHJ1ZSwgZSk7XG5cdH1cblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbihmaW5hbGl6ZXIuYmluZChudWxsLCBmYWxzZSksIGZpbmFsaXplci5iaW5kKG51bGwsIHRydWUpKTtcblx0fVxuXHRyZXR1cm4gZmluYWxpemVyKGZhbHNlLCB2YWx1ZSk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGF3YWl0IGEgcHJvbWlzZSBhbmQgaW52b2tlIGEgZmluYWxseSBjb250aW51YXRpb24gdGhhdCBhbHdheXMgb3ZlcnJpZGVzIHRoZSByZXN1bHRcbmV4cG9ydCBmdW5jdGlvbiBfZmluYWxseShib2R5LCBmaW5hbGl6ZXIpIHtcblx0dHJ5IHtcblx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZpbmFsaXplcigpO1xuXHR9XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4oZmluYWxpemVyLCBmaW5hbGl6ZXIpO1xuXHR9XG5cdHJldHVybiBmaW5hbGl6ZXIoKTtcbn1cblxuLy8gUmV0aHJvdyBvciByZXR1cm4gYSB2YWx1ZSBmcm9tIGEgZmluYWxseSBjb250aW51YXRpb25cbmV4cG9ydCBmdW5jdGlvbiBfcmV0aHJvdyh0aHJvd24sIHZhbHVlKSB7XG5cdGlmICh0aHJvd24pXG5cdFx0dGhyb3cgdmFsdWU7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLy8gRW1wdHkgZnVuY3Rpb24gdG8gaW1wbGVtZW50IGJyZWFrIGFuZCBvdGhlciBjb250cm9sIGZsb3cgdGhhdCBpZ25vcmVzIGFzeW5jaHJvbm91cyByZXN1bHRzXG5leHBvcnQgZnVuY3Rpb24gX2VtcHR5KCkge1xufVxuXG4vLyBTZW50aW5lbCB2YWx1ZSBmb3IgZWFybHkgcmV0dXJucyBpbiBnZW5lcmF0b3JzIFxuZXhwb3J0IGNvbnN0IF9lYXJseVJldHVybiA9IHt9O1xuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHNlbmQgZXJyb3JzIHRvIHJlY292ZXJ5IGNvbnRpbnVhdGlvbiwgc2tpcHBpbmcgZWFybHkgcmV0dXJuc1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEluR2VuZXJhdG9yKGJvZHksIHJlY292ZXIpIHtcblx0cmV0dXJuIF9jYXRjaChib2R5LCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGUgPT09IF9lYXJseVJldHVybikge1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlY292ZXIoZSk7XG5cdH0pO1xufVxuXG4vLyBBc3luY2hyb25vdXMgZ2VuZXJhdG9yIGNsYXNzOyBhY2NlcHRzIHRoZSBlbnRyeXBvaW50IG9mIHRoZSBnZW5lcmF0b3IsIHRvIHdoaWNoIGl0IHBhc3NlcyBpdHNlbGYgd2hlbiB0aGUgZ2VuZXJhdG9yIHNob3VsZCBzdGFydFxuZXhwb3J0IGNvbnN0IF9Bc3luY0dlbmVyYXRvciA9IC8qI19fUFVSRV9fKi8oZnVuY3Rpb24oKSB7XG5cdGZ1bmN0aW9uIF9Bc3luY0dlbmVyYXRvcihlbnRyeSkge1xuXHRcdHRoaXMuX2VudHJ5ID0gZW50cnk7XG5cdFx0dGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0dGhpcy5fcmVzb2x2ZSA9IG51bGw7XG5cdFx0dGhpcy5fcmV0dXJuID0gbnVsbDtcblx0XHR0aGlzLl9wcm9taXNlID0gbnVsbDtcblx0XHR0aGlzW1N5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IChTeW1ib2wuYXN5bmNJdGVyYXRvciA9IFN5bWJvbChcIlN5bWJvbC5hc3luY0l0ZXJhdG9yXCIpKV0gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBfd3JhcFJldHVybmVkVmFsdWUodmFsdWUpIHtcblx0XHRyZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IHRydWUgfTtcblx0fVxuXHRmdW5jdGlvbiBfd3JhcFlpZWxkZWRWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZmFsc2UgfTtcblx0fVxuXG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUuX3lpZWxkID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHQvLyBZaWVsZCB0aGUgdmFsdWUgdG8gdGhlIHBlbmRpbmcgbmV4dCBjYWxsXG5cdFx0dGhpcy5fcmVzb2x2ZSh2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbihfd3JhcFlpZWxkZWRWYWx1ZSkgOiBfd3JhcFlpZWxkZWRWYWx1ZSh2YWx1ZSkpO1xuXHRcdC8vIFJldHVybiBhIHBhY3QgZm9yIGFuIHVwY29taW5nIG5leHQvcmV0dXJuL3Rocm93IGNhbGxcblx0XHRyZXR1cm4gdGhpcy5fcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHR9O1xuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdC8vIEFkdmFuY2UgdGhlIGdlbmVyYXRvciwgc3RhcnRpbmcgaXQgaWYgaXQgaGFzIHlldCB0byBiZSBzdGFydGVkXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHJldHVybiBfdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0XHRjb25zdCBfcGFjdCA9IF90aGlzLl9wYWN0O1xuXHRcdFx0aWYgKF9wYWN0ID09PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IF9lbnRyeSA9IF90aGlzLl9lbnRyeTtcblx0XHRcdFx0aWYgKF9lbnRyeSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkLCBidXQgbm90IGF3YWl0aW5nIGEgeWllbGQgZXhwcmVzc2lvblxuXHRcdFx0XHRcdC8vIEFiYW5kb24gdGhlIG5leHQgY2FsbCFcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShfdGhpcy5fcHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gU3RhcnQgdGhlIGdlbmVyYXRvclxuXHRcdFx0XHRfdGhpcy5fZW50cnkgPSBudWxsO1xuXHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHRcdGZ1bmN0aW9uIHJldHVyblZhbHVlKHZhbHVlKSB7XG5cdFx0XHRcdFx0X3RoaXMuX3Jlc29sdmUodmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4oX3dyYXBSZXR1cm5lZFZhbHVlKSA6IF93cmFwUmV0dXJuZWRWYWx1ZSh2YWx1ZSkpO1xuXHRcdFx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0X2VudHJ5KF90aGlzKS50aGVuKHJldHVyblZhbHVlLCBmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0XHRcdGlmIChlcnJvciA9PT0gX2Vhcmx5UmV0dXJuKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5WYWx1ZShfdGhpcy5fcmV0dXJuKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29uc3QgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHRcdFx0XHRcdFx0X3RoaXMuX3Jlc29sdmUocGFjdCk7XG5cdFx0XHRcdFx0XHRfdGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IG51bGw7XG5cdFx0XHRcdFx0XHRfcmVzb2x2ZShwYWN0LCAyLCBlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkIGFuZCBhIHlpZWxkIGV4cHJlc3Npb24gaXMgcGVuZGluZywgc2V0dGxlIGl0XG5cdFx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdFx0X3RoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0XHRfc2V0dGxlKF9wYWN0LCAxLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHQvLyBFYXJseSByZXR1cm4gZnJvbSB0aGUgZ2VuZXJhdG9yIGlmIHN0YXJ0ZWQsIG90aGVyd2lzZSBhYmFuZG9ucyB0aGUgZ2VuZXJhdG9yXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHJldHVybiBfdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0XHRjb25zdCBfcGFjdCA9IF90aGlzLl9wYWN0O1xuXHRcdFx0aWYgKF9wYWN0ID09PSBudWxsKSB7XG5cdFx0XHRcdGlmIChfdGhpcy5fZW50cnkgPT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgc3RhcnRlZCwgYnV0IG5vdCBhd2FpdGluZyBhIHlpZWxkIGV4cHJlc3Npb25cblx0XHRcdFx0XHQvLyBBYmFuZG9uIHRoZSByZXR1cm4gY2FsbCFcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShfdGhpcy5fcHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIG5vdCBzdGFydGVkLCBhYmFuZG9uIGl0IGFuZCByZXR1cm4gdGhlIHNwZWNpZmllZCB2YWx1ZVxuXHRcdFx0XHRfdGhpcy5fZW50cnkgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSh2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbihfd3JhcFJldHVybmVkVmFsdWUpIDogX3dyYXBSZXR1cm5lZFZhbHVlKHZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBTZXR0bGUgdGhlIHlpZWxkIGV4cHJlc3Npb24gd2l0aCBhIHJlamVjdGVkIFwiZWFybHkgcmV0dXJuXCIgdmFsdWVcblx0XHRcdF90aGlzLl9yZXR1cm4gPSB2YWx1ZTtcblx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdF9zZXR0bGUoX3BhY3QsIDIsIF9lYXJseVJldHVybik7XG5cdFx0fSk7XG5cdH07XG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUudGhyb3cgPSBmdW5jdGlvbihlcnJvcikge1xuXHRcdC8vIEluamVjdCBhbiBleGNlcHRpb24gaW50byB0aGUgcGVuZGluZyB5aWVsZCBleHByZXNzaW9uXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHJldHVybiBfdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdGNvbnN0IF9wYWN0ID0gX3RoaXMuX3BhY3Q7XG5cdFx0XHRpZiAoX3BhY3QgPT09IG51bGwpIHtcblx0XHRcdFx0aWYgKF90aGlzLl9lbnRyeSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkLCBidXQgbm90IGF3YWl0aW5nIGEgeWllbGQgZXhwcmVzc2lvblxuXHRcdFx0XHRcdC8vIEFiYW5kb24gdGhlIHRocm93IGNhbGwhXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoX3RoaXMuX3Byb21pc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBub3Qgc3RhcnRlZCwgYWJhbmRvbiBpdCBhbmQgcmV0dXJuIGEgcmVqZWN0ZWQgUHJvbWlzZSBjb250YWluaW5nIHRoZSBlcnJvclxuXHRcdFx0XHRfdGhpcy5fZW50cnkgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHRcdC8vIFNldHRsZSB0aGUgeWllbGQgZXhwcmVzc2lvbiB3aXRoIHRoZSB2YWx1ZSBhcyBhIHJlamVjdGlvblxuXHRcdFx0X3RoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0X3NldHRsZShfcGFjdCwgMiwgZXJyb3IpO1xuXHRcdH0pO1xuXHR9O1xuXHRcblx0cmV0dXJuIF9Bc3luY0dlbmVyYXRvcjtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgRVJSX0NBTk5PVF9DT05ORUNUID0gMTtcbmV4cG9ydCBjb25zdCBFUlJfSU5WQUxJRF9BVVRIID0gMjtcbmV4cG9ydCBjb25zdCBFUlJfQ09OTkVDVElPTl9MT1NUID0gMztcbmV4cG9ydCBjb25zdCBFUlJfSEFTU19IT1NUX1JFUVVJUkVEID0gNDtcbiIsImltcG9ydCB7IEVycm9yIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGgoYWNjZXNzVG9rZW46IHN0cmluZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiYXV0aFwiLFxuICAgIGFjY2Vzc190b2tlbjogYWNjZXNzVG9rZW5cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcImdldF9zdGF0ZXNcIlxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiZ2V0X2NvbmZpZ1wiXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcImdldF9zZXJ2aWNlc1wiXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VyKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiYXV0aC9jdXJyZW50X3VzZXJcIlxuICB9O1xufVxuXG50eXBlIFNlcnZpY2VDYWxsTWVzc2FnZSA9IHtcbiAgdHlwZTogXCJjYWxsX3NlcnZpY2VcIjtcbiAgZG9tYWluOiBzdHJpbmc7XG4gIHNlcnZpY2U6IHN0cmluZztcbiAgc2VydmljZV9kYXRhPzogb2JqZWN0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxTZXJ2aWNlKFxuICBkb21haW46IHN0cmluZyxcbiAgc2VydmljZTogc3RyaW5nLFxuICBzZXJ2aWNlRGF0YT86IG9iamVjdFxuKSB7XG4gIGNvbnN0IG1lc3NhZ2U6IFNlcnZpY2VDYWxsTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBcImNhbGxfc2VydmljZVwiLFxuICAgIGRvbWFpbixcbiAgICBzZXJ2aWNlXG4gIH07XG5cbiAgaWYgKHNlcnZpY2VEYXRhKSB7XG4gICAgbWVzc2FnZS5zZXJ2aWNlX2RhdGEgPSBzZXJ2aWNlRGF0YTtcbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlO1xufVxuXG50eXBlIFN1YnNjcmliZUV2ZW50TWVzc2FnZSA9IHtcbiAgdHlwZTogXCJzdWJzY3JpYmVfZXZlbnRzXCI7XG4gIGV2ZW50X3R5cGU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlRXZlbnRzKGV2ZW50VHlwZT86IHN0cmluZykge1xuICBjb25zdCBtZXNzYWdlOiBTdWJzY3JpYmVFdmVudE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogXCJzdWJzY3JpYmVfZXZlbnRzXCJcbiAgfTtcblxuICBpZiAoZXZlbnRUeXBlKSB7XG4gICAgbWVzc2FnZS5ldmVudF90eXBlID0gZXZlbnRUeXBlO1xuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnN1YnNjcmliZUV2ZW50cyhzdWJzY3JpcHRpb246IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwidW5zdWJzY3JpYmVfZXZlbnRzXCIsXG4gICAgc3Vic2NyaXB0aW9uXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwaW5nKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwicGluZ1wiXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvcihjb2RlOiBFcnJvciwgbWVzc2FnZTogc3RyaW5nKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJyZXN1bHRcIixcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBlcnJvcjoge1xuICAgICAgY29kZSxcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gIH07XG59XG4iLCIvKipcbiAqIENyZWF0ZSBhIHdlYiBzb2NrZXQgY29ubmVjdGlvbiB3aXRoIGEgSG9tZSBBc3Npc3RhbnQgaW5zdGFuY2UuXG4gKi9cbmltcG9ydCB7XG4gIEVSUl9JTlZBTElEX0FVVEgsXG4gIEVSUl9DQU5OT1RfQ09OTkVDVCxcbiAgRVJSX0hBU1NfSE9TVF9SRVFVSVJFRFxufSBmcm9tIFwiLi9lcnJvcnNcIjtcbmltcG9ydCB7IENvbm5lY3Rpb25PcHRpb25zLCBFcnJvciB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuXG5jb25zdCBERUJVRyA9IGZhbHNlO1xuXG5jb25zdCBNU0dfVFlQRV9BVVRIX1JFUVVJUkVEID0gXCJhdXRoX3JlcXVpcmVkXCI7XG5jb25zdCBNU0dfVFlQRV9BVVRIX0lOVkFMSUQgPSBcImF1dGhfaW52YWxpZFwiO1xuY29uc3QgTVNHX1RZUEVfQVVUSF9PSyA9IFwiYXV0aF9va1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU29ja2V0KG9wdGlvbnM6IENvbm5lY3Rpb25PcHRpb25zKTogUHJvbWlzZTxXZWJTb2NrZXQ+IHtcbiAgaWYgKCFvcHRpb25zLmF1dGgpIHtcbiAgICB0aHJvdyBFUlJfSEFTU19IT1NUX1JFUVVJUkVEO1xuICB9XG4gIGNvbnN0IGF1dGggPSBvcHRpb25zLmF1dGg7XG5cbiAgLy8gU3RhcnQgcmVmcmVzaGluZyBleHBpcmVkIHRva2VucyBldmVuIGJlZm9yZSB0aGUgV1MgY29ubmVjdGlvbiBpcyBvcGVuLlxuICAvLyBXZSBrbm93IHRoYXQgd2Ugd2lsbCBuZWVkIGF1dGggYW55d2F5LlxuICBsZXQgYXV0aFJlZnJlc2hUYXNrID0gYXV0aC5leHBpcmVkXG4gICAgPyBhdXRoLnJlZnJlc2hBY2Nlc3NUb2tlbigpLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBhdXRoUmVmcmVzaFRhc2sgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBhdXRoUmVmcmVzaFRhc2sgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICA6IHVuZGVmaW5lZDtcblxuICAvLyBDb252ZXJ0IGZyb20gaHR0cDovLyAtPiB3czovLywgaHR0cHM6Ly8gLT4gd3NzOi8vXG4gIGNvbnN0IHVybCA9IGF1dGgud3NVcmw7XG5cbiAgaWYgKERFQlVHKSB7XG4gICAgY29uc29sZS5sb2coXCJbQXV0aCBwaGFzZV0gSW5pdGlhbGl6aW5nXCIsIHVybCk7XG4gIH1cblxuICBmdW5jdGlvbiBjb25uZWN0KFxuICAgIHRyaWVzTGVmdDogbnVtYmVyLFxuICAgIHByb21SZXNvbHZlOiAoc29ja2V0OiBXZWJTb2NrZXQpID0+IHZvaWQsXG4gICAgcHJvbVJlamVjdDogKGVycjogRXJyb3IpID0+IHZvaWRcbiAgKSB7XG4gICAgaWYgKERFQlVHKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltBdXRoIFBoYXNlXSBOZXcgY29ubmVjdGlvblwiLCB1cmwpO1xuICAgIH1cblxuICAgIGNvbnN0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcblxuICAgIC8vIElmIGludmFsaWQgYXV0aCwgd2Ugd2lsbCBub3QgdHJ5IHRvIHJlY29ubmVjdC5cbiAgICBsZXQgaW52YWxpZEF1dGggPSBmYWxzZTtcblxuICAgIGNvbnN0IGNsb3NlTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgIC8vIElmIHdlIGFyZSBpbiBlcnJvciBoYW5kbGVyIG1ha2Ugc3VyZSBjbG9zZSBoYW5kbGVyIGRvZXNuJ3QgYWxzbyBmaXJlLlxuICAgICAgc29ja2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCBjbG9zZU1lc3NhZ2UpO1xuICAgICAgaWYgKGludmFsaWRBdXRoKSB7XG4gICAgICAgIHByb21SZWplY3QoRVJSX0lOVkFMSURfQVVUSCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUmVqZWN0IGlmIHdlIG5vIGxvbmdlciBoYXZlIHRvIHJldHJ5XG4gICAgICBpZiAodHJpZXNMZWZ0ID09PSAwKSB7XG4gICAgICAgIC8vIFdlIG5ldmVyIHdlcmUgY29ubmVjdGVkIGFuZCB3aWxsIG5vdCByZXRyeVxuICAgICAgICBwcm9tUmVqZWN0KEVSUl9DQU5OT1RfQ09OTkVDVCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3VHJpZXMgPSB0cmllc0xlZnQgPT09IC0xID8gLTEgOiB0cmllc0xlZnQgLSAxO1xuICAgICAgLy8gVHJ5IGFnYWluIGluIGEgc2Vjb25kXG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PlxuICAgICAgICAgIGNvbm5lY3QoXG4gICAgICAgICAgICBuZXdUcmllcyxcbiAgICAgICAgICAgIHByb21SZXNvbHZlLFxuICAgICAgICAgICAgcHJvbVJlamVjdFxuICAgICAgICAgICksXG4gICAgICAgIDEwMDBcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEF1dGggaXMgbWFuZGF0b3J5LCBzbyB3ZSBjYW4gc2VuZCB0aGUgYXV0aCBtZXNzYWdlIHJpZ2h0IGF3YXkuXG4gICAgY29uc3QgaGFuZGxlT3BlbiA9IGFzeW5jIChldmVudDogTWVzc2FnZUV2ZW50SW5pdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGF1dGguZXhwaXJlZCkge1xuICAgICAgICAgIGF3YWl0IChhdXRoUmVmcmVzaFRhc2sgPyBhdXRoUmVmcmVzaFRhc2sgOiBhdXRoLnJlZnJlc2hBY2Nlc3NUb2tlbigpKTtcbiAgICAgICAgfVxuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShtZXNzYWdlcy5hdXRoKGF1dGguYWNjZXNzVG9rZW4pKSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gUmVmcmVzaCB0b2tlbiBmYWlsZWRcbiAgICAgICAgaW52YWxpZEF1dGggPSBlcnIgPT09IEVSUl9JTlZBTElEX0FVVEg7XG4gICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNZXNzYWdlID0gYXN5bmMgKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbQXV0aCBwaGFzZV0gUmVjZWl2ZWRcIiwgbWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICBjYXNlIE1TR19UWVBFX0FVVEhfSU5WQUxJRDpcbiAgICAgICAgICBpbnZhbGlkQXV0aCA9IHRydWU7XG4gICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBNU0dfVFlQRV9BVVRIX09LOlxuICAgICAgICAgIHNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKFwib3BlblwiLCBoYW5kbGVPcGVuKTtcbiAgICAgICAgICBzb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgICAgc29ja2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCBjbG9zZU1lc3NhZ2UpO1xuICAgICAgICAgIHNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgY2xvc2VNZXNzYWdlKTtcbiAgICAgICAgICBwcm9tUmVzb2x2ZShzb2NrZXQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICAvLyBXZSBhbHJlYWR5IHNlbmQgdGhpcyBtZXNzYWdlIHdoZW4gc29ja2V0IG9wZW5zXG4gICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlICE9PSBNU0dfVFlQRV9BVVRIX1JFUVVJUkVEKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltBdXRoIHBoYXNlXSBVbmhhbmRsZWQgbWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCBoYW5kbGVPcGVuKTtcbiAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgaGFuZGxlTWVzc2FnZSk7XG4gICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCBjbG9zZU1lc3NhZ2UpO1xuICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgY2xvc2VNZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIGNvbm5lY3QoXG4gICAgICBvcHRpb25zLnNldHVwUmV0cnksXG4gICAgICByZXNvbHZlLFxuICAgICAgcmVqZWN0XG4gICAgKVxuICApO1xufVxuIiwiLyoqXG4gKiBDb25uZWN0aW9uIHRoYXQgd3JhcHMgYSBzb2NrZXQgYW5kIHByb3ZpZGVzIGFuIGludGVyZmFjZSB0byBpbnRlcmFjdCB3aXRoXG4gKiB0aGUgSG9tZSBBc3Npc3RhbnQgd2Vic29ja2V0IEFQSS5cbiAqL1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCB7IEVSUl9JTlZBTElEX0FVVEgsIEVSUl9DT05ORUNUSU9OX0xPU1QgfSBmcm9tIFwiLi9lcnJvcnNcIjtcbmltcG9ydCB7IENvbm5lY3Rpb25PcHRpb25zLCBIYXNzRXZlbnQsIE1lc3NhZ2VCYXNlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgREVCVUcgPSBmYWxzZTtcblxuZXhwb3J0IHR5cGUgQ29ubmVjdGlvbkV2ZW50TGlzdGVuZXIgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIGV2ZW50RGF0YT86IGFueVxuKSA9PiB2b2lkO1xuXG50eXBlIEV2ZW50cyA9IFwicmVhZHlcIiB8IFwiZGlzY29ubmVjdGVkXCIgfCBcInJlY29ubmVjdC1lcnJvclwiO1xuXG50eXBlIFdlYlNvY2tldFBvbmdSZXNwb25zZSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogXCJwb25nXCI7XG59O1xuXG50eXBlIFdlYlNvY2tldEV2ZW50UmVzcG9uc2UgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHR5cGU6IFwiZXZlbnRcIjtcbiAgZXZlbnQ6IEhhc3NFdmVudDtcbn07XG5cbnR5cGUgV2ViU29ja2V0UmVzdWx0UmVzcG9uc2UgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHR5cGU6IFwicmVzdWx0XCI7XG4gIHN1Y2Nlc3M6IHRydWU7XG4gIHJlc3VsdDogYW55O1xufTtcblxudHlwZSBXZWJTb2NrZXRSZXN1bHRFcnJvclJlc3BvbnNlID0ge1xuICBpZDogbnVtYmVyO1xuICB0eXBlOiBcInJlc3VsdFwiO1xuICBzdWNjZXNzOiBmYWxzZTtcbiAgZXJyb3I6IHtcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICB9O1xufTtcblxudHlwZSBXZWJTb2NrZXRSZXNwb25zZSA9XG4gIHwgV2ViU29ja2V0UG9uZ1Jlc3BvbnNlXG4gIHwgV2ViU29ja2V0RXZlbnRSZXNwb25zZVxuICB8IFdlYlNvY2tldFJlc3VsdFJlc3BvbnNlXG4gIHwgV2ViU29ja2V0UmVzdWx0RXJyb3JSZXNwb25zZTtcblxudHlwZSBTdWJzY3JpcHRpb25VbnN1YnNjcmliZSA9ICgpID0+IFByb21pc2U8dm9pZD47XG5cbmludGVyZmFjZSBTdWJzY3JpYmVFdmVudENvbW1tYW5kSW5GbGlnaHQ8VD4ge1xuICByZXNvbHZlOiAocmVzdWx0PzogYW55KSA9PiB2b2lkO1xuICByZWplY3Q6IChlcnI6IGFueSkgPT4gdm9pZDtcbiAgY2FsbGJhY2s6IChldjogVCkgPT4gdm9pZDtcbiAgc3Vic2NyaWJlOiAoKSA9PiBQcm9taXNlPFN1YnNjcmlwdGlvblVuc3Vic2NyaWJlPjtcbiAgdW5zdWJzY3JpYmU6IFN1YnNjcmlwdGlvblVuc3Vic2NyaWJlO1xufVxuXG50eXBlIENvbW1hbmRXaXRoQW5zd2VySW5GbGlnaHQgPSB7XG4gIHJlc29sdmU6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQ7XG4gIHJlamVjdDogKGVycjogYW55KSA9PiB2b2lkO1xufTtcblxudHlwZSBDb21tYW5kSW5GbGlnaHQgPVxuICB8IFN1YnNjcmliZUV2ZW50Q29tbW1hbmRJbkZsaWdodDxhbnk+XG4gIHwgQ29tbWFuZFdpdGhBbnN3ZXJJbkZsaWdodDtcblxuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb24ge1xuICBvcHRpb25zOiBDb25uZWN0aW9uT3B0aW9ucztcbiAgY29tbWFuZElkOiBudW1iZXI7XG4gIGNvbW1hbmRzOiBNYXA8bnVtYmVyLCBDb21tYW5kSW5GbGlnaHQ+O1xuICBldmVudExpc3RlbmVyczogTWFwPHN0cmluZywgQ29ubmVjdGlvbkV2ZW50TGlzdGVuZXJbXT47XG4gIGNsb3NlUmVxdWVzdGVkOiBib29sZWFuO1xuICAvLyBAdHMtaWdub3JlOiBpbmNvcnJlY3RseSBjbGFpbWluZyBpdCdzIG5vdCBzZXQgaW4gY29uc3RydWN0b3IuXG4gIHNvY2tldDogV2ViU29ja2V0O1xuXG4gIGNvbnN0cnVjdG9yKHNvY2tldDogV2ViU29ja2V0LCBvcHRpb25zOiBDb25uZWN0aW9uT3B0aW9ucykge1xuICAgIC8vIGNvbm5lY3Rpb24gb3B0aW9uc1xuICAgIC8vICAtIHNldHVwUmV0cnk6IGFtb3VudCBvZiBtcyB0byByZXRyeSB3aGVuIHVuYWJsZSB0byBjb25uZWN0IG9uIGluaXRpYWwgc2V0dXBcbiAgICAvLyAgLSBjcmVhdGVTb2NrZXQ6IGNyZWF0ZSBhIG5ldyBTb2NrZXQgY29ubmVjdGlvblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgLy8gaWQgaWYgbmV4dCBjb21tYW5kIHRvIHNlbmRcbiAgICB0aGlzLmNvbW1hbmRJZCA9IDE7XG4gICAgLy8gaW5mbyBhYm91dCBhY3RpdmUgc3Vic2NyaXB0aW9ucyBhbmQgY29tbWFuZHMgaW4gZmxpZ2h0XG4gICAgdGhpcy5jb21tYW5kcyA9IG5ldyBNYXAoKTtcbiAgICAvLyBtYXAgb2YgZXZlbnQgbGlzdGVuZXJzXG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IG5ldyBNYXAoKTtcbiAgICAvLyB0cnVlIGlmIGEgY2xvc2UgaXMgcmVxdWVzdGVkIGJ5IHRoZSB1c2VyXG4gICAgdGhpcy5jbG9zZVJlcXVlc3RlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTb2NrZXQoc29ja2V0KTtcbiAgfVxuXG4gIHNldFNvY2tldChzb2NrZXQ6IFdlYlNvY2tldCkge1xuICAgIGNvbnN0IG9sZFNvY2tldCA9IHRoaXMuc29ja2V0O1xuICAgIHRoaXMuc29ja2V0ID0gc29ja2V0O1xuICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBldiA9PiB0aGlzLl9oYW5kbGVNZXNzYWdlKGV2KSk7XG4gICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCBldiA9PiB0aGlzLl9oYW5kbGVDbG9zZShldikpO1xuXG4gICAgaWYgKG9sZFNvY2tldCkge1xuICAgICAgY29uc3Qgb2xkQ29tbWFuZHMgPSB0aGlzLmNvbW1hbmRzO1xuXG4gICAgICAvLyByZXNldCB0byBvcmlnaW5hbCBzdGF0ZVxuICAgICAgdGhpcy5jb21tYW5kSWQgPSAxO1xuICAgICAgdGhpcy5jb21tYW5kcyA9IG5ldyBNYXAoKTtcblxuICAgICAgb2xkQ29tbWFuZHMuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgICAgaWYgKFwic3Vic2NyaWJlXCIgaW4gaW5mbykge1xuICAgICAgICAgIGluZm8uc3Vic2NyaWJlKCkudGhlbih1bnN1YiA9PiB7XG4gICAgICAgICAgICBpbmZvLnVuc3Vic2NyaWJlID0gdW5zdWI7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIHJlc29sdmUgdGhpcyBpbiBjYXNlIGl0IHdhc24ndCByZXNvbHZlZCB5ZXQuXG4gICAgICAgICAgICAvLyBUaGlzIGFsbG93cyB1cyB0byBzdWJzY3JpYmUgd2hpbGUgd2UncmUgZGlzY29ubmVjdGVkXG4gICAgICAgICAgICAvLyBhbmQgcmVjb3ZlciBwcm9wZXJseS5cbiAgICAgICAgICAgIGluZm8ucmVzb2x2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5maXJlRXZlbnQoXCJyZWFkeVwiKTtcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZTogRXZlbnRzLCBjYWxsYmFjazogQ29ubmVjdGlvbkV2ZW50TGlzdGVuZXIpIHtcbiAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5ldmVudExpc3RlbmVycy5nZXQoZXZlbnRUeXBlKTtcblxuICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuc2V0KGV2ZW50VHlwZSwgbGlzdGVuZXJzKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZTogRXZlbnRzLCBjYWxsYmFjazogQ29ubmVjdGlvbkV2ZW50TGlzdGVuZXIpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmdldChldmVudFR5cGUpO1xuXG4gICAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZpcmVFdmVudChldmVudFR5cGU6IEV2ZW50cywgZXZlbnREYXRhPzogYW55KSB7XG4gICAgKHRoaXMuZXZlbnRMaXN0ZW5lcnMuZ2V0KGV2ZW50VHlwZSkgfHwgW10pLmZvckVhY2goY2FsbGJhY2sgPT5cbiAgICAgIGNhbGxiYWNrKHRoaXMsIGV2ZW50RGF0YSlcbiAgICApO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZVJlcXVlc3RlZCA9IHRydWU7XG4gICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYSBzcGVjaWZpYyBvciBhbGwgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgIHRvIGJlIGNhbGxlZCB3aGVuIGEgbmV3IGV2ZW50IGZpcmVzXG4gICAqIEBwYXJhbSBldmVudFR5cGVcbiAgICogQHJldHVybnMgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uXG4gICAqL1xuICBhc3luYyBzdWJzY3JpYmVFdmVudHM8RXZlbnRUeXBlPihcbiAgICBjYWxsYmFjazogKGV2OiBFdmVudFR5cGUpID0+IHZvaWQsXG4gICAgZXZlbnRUeXBlPzogc3RyaW5nXG4gICk6IFByb21pc2U8U3Vic2NyaXB0aW9uVW5zdWJzY3JpYmU+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmVNZXNzYWdlKGNhbGxiYWNrLCBtZXNzYWdlcy5zdWJzY3JpYmVFdmVudHMoZXZlbnRUeXBlKSk7XG4gIH1cblxuICBwaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlUHJvbWlzZShtZXNzYWdlcy5waW5nKCkpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZUJhc2UsIGNvbW1hbmRJZD86IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChERUJVRykge1xuICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nXCIsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmICghY29tbWFuZElkKSB7XG4gICAgICBjb21tYW5kSWQgPSB0aGlzLl9nZW5DbWRJZCgpO1xuICAgIH1cbiAgICBtZXNzYWdlLmlkID0gY29tbWFuZElkO1xuXG4gICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gIH1cblxuICBzZW5kTWVzc2FnZVByb21pc2U8UmVzdWx0PihtZXNzYWdlOiBNZXNzYWdlQmFzZSk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGNvbW1hbmRJZCA9IHRoaXMuX2dlbkNtZElkKCk7XG4gICAgICB0aGlzLmNvbW1hbmRzLnNldChjb21tYW5kSWQsIHsgcmVzb2x2ZSwgcmVqZWN0IH0pO1xuICAgICAgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLCBjb21tYW5kSWQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgYSB3ZWJzb2NrZXQgY29tbWFuZCB0aGF0IHN0YXJ0cyBhIHN1YnNjcmlwdGlvbiBvbiB0aGUgYmFja2VuZC5cbiAgICpcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gc3RhcnQgdGhlIHN1YnNjcmlwdGlvblxuICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIGEgbmV3IGl0ZW0gYXJyaXZlc1xuICAgKiBAcmV0dXJucyBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gdW5zdWJzY3JpYmUgZnVuY3Rpb25cbiAgICovXG4gIGFzeW5jIHN1YnNjcmliZU1lc3NhZ2U8UmVzdWx0PihcbiAgICBjYWxsYmFjazogKHJlc3VsdDogUmVzdWx0KSA9PiB2b2lkLFxuICAgIHN1YnNjcmliZU1lc3NhZ2U6IE1lc3NhZ2VCYXNlXG4gICk6IFByb21pc2U8U3Vic2NyaXB0aW9uVW5zdWJzY3JpYmU+IHtcbiAgICAvLyBDb21tYW5kIElEIHRoYXQgd2lsbCBiZSB1c2VkXG4gICAgY29uc3QgY29tbWFuZElkID0gdGhpcy5fZ2VuQ21kSWQoKTtcbiAgICBsZXQgaW5mbzogU3Vic2NyaWJlRXZlbnRDb21tbWFuZEluRmxpZ2h0PFJlc3VsdD47XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBXZSBzdG9yZSB1bnN1YnNjcmliZSBvbiBpbmZvIG9iamVjdC4gVGhhdCB3YXkgd2UgY2FuIG92ZXJ3cml0ZSBpdCBpbiBjYXNlXG4gICAgICAvLyB3ZSBnZXQgZGlzY29ubmVjdGVkIGFuZCB3ZSBoYXZlIHRvIHN1YnNjcmliZSBhZ2Fpbi5cbiAgICAgIGluZm8gPSB7XG4gICAgICAgIHJlc29sdmUsXG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIHN1YnNjcmliZTogKCkgPT4gdGhpcy5zdWJzY3JpYmVNZXNzYWdlKGNhbGxiYWNrLCBzdWJzY3JpYmVNZXNzYWdlKSxcbiAgICAgICAgdW5zdWJzY3JpYmU6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlUHJvbWlzZShtZXNzYWdlcy51bnN1YnNjcmliZUV2ZW50cyhjb21tYW5kSWQpKTtcbiAgICAgICAgICB0aGlzLmNvbW1hbmRzLmRlbGV0ZShjb21tYW5kSWQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5jb21tYW5kcy5zZXQoY29tbWFuZElkLCBpbmZvKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShzdWJzY3JpYmVNZXNzYWdlLCBjb21tYW5kSWQpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIEhhcHBlbnMgd2hlbiB0aGUgd2Vic29ja2V0IGlzIGFscmVhZHkgY2xvc2luZy5cbiAgICAgICAgLy8gRG9uJ3QgaGF2ZSB0byBoYW5kbGUgdGhlIGVycm9yLCByZWNvbm5lY3QgbG9naWMgd2lsbCBwaWNrIGl0IHVwLlxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IGluZm8udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgIGNvbnN0IG1lc3NhZ2U6IFdlYlNvY2tldFJlc3BvbnNlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcblxuICAgIGlmIChERUJVRykge1xuICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZFwiLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbmZvID0gdGhpcy5jb21tYW5kcy5nZXQobWVzc2FnZS5pZCk7XG5cbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSBcImV2ZW50XCI6XG4gICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgKGluZm8gYXMgU3Vic2NyaWJlRXZlbnRDb21tbWFuZEluRmxpZ2h0PGFueT4pLmNhbGxiYWNrKG1lc3NhZ2UuZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBSZWNlaXZlZCBldmVudCBmb3IgdW5rbm93biBzdWJzY3JpcHRpb24gJHtcbiAgICAgICAgICAgICAgbWVzc2FnZS5pZFxuICAgICAgICAgICAgfS4gVW5zdWJzY3JpYmluZy5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlUHJvbWlzZShtZXNzYWdlcy51bnN1YnNjcmliZUV2ZW50cyhtZXNzYWdlLmlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJyZXN1bHRcIjpcbiAgICAgICAgLy8gTm8gaW5mbyBpcyBmaW5lLiBJZiBqdXN0IHNlbmRNZXNzYWdlIGlzIHVzZWQsIHdlIGRpZCBub3Qgc3RvcmUgcHJvbWlzZSBmb3IgcmVzdWx0XG4gICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgaWYgKG1lc3NhZ2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgaW5mby5yZXNvbHZlKG1lc3NhZ2UucmVzdWx0KTtcblxuICAgICAgICAgICAgLy8gRG9uJ3QgcmVtb3ZlIHN1YnNjcmlwdGlvbnMuXG4gICAgICAgICAgICBpZiAoIShcInN1YnNjcmliZVwiIGluIGluZm8pKSB7XG4gICAgICAgICAgICAgIHRoaXMuY29tbWFuZHMuZGVsZXRlKG1lc3NhZ2UuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmZvLnJlamVjdChtZXNzYWdlLmVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMuZGVsZXRlKG1lc3NhZ2UuaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInBvbmdcIjpcbiAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICBpbmZvLnJlc29sdmUoKTtcbiAgICAgICAgICB0aGlzLmNvbW1hbmRzLmRlbGV0ZShtZXNzYWdlLmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFJlY2VpdmVkIHVua25vd24gcG9uZyByZXNwb25zZSAke21lc3NhZ2UuaWR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlVuaGFuZGxlZCBtZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQ2xvc2UoZXY6IENsb3NlRXZlbnQpIHtcbiAgICAvLyBSZWplY3QgaW4tZmxpZ2h0IHNlbmRNZXNzYWdlUHJvbWlzZSByZXF1ZXN0c1xuICAgIHRoaXMuY29tbWFuZHMuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgIC8vIFdlIGRvbid0IGNhbmNlbCBzdWJzY3JpYmVFdmVudHMgY29tbWFuZHMgaW4gZmxpZ2h0XG4gICAgICAvLyBhcyB3ZSB3aWxsIGJlIGFibGUgdG8gcmVjb3ZlciB0aGVtLlxuICAgICAgaWYgKCEoXCJzdWJzY3JpYmVcIiBpbiBpbmZvKSkge1xuICAgICAgICBpbmZvLnJlamVjdChtZXNzYWdlcy5lcnJvcihFUlJfQ09OTkVDVElPTl9MT1NULCBcIkNvbm5lY3Rpb24gbG9zdFwiKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5jbG9zZVJlcXVlc3RlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZmlyZUV2ZW50KFwiZGlzY29ubmVjdGVkXCIpO1xuXG4gICAgLy8gRGlzYWJsZSBzZXR1cFJldHJ5LCB3ZSBjb250cm9sIGl0IGhlcmUgd2l0aCBhdXRvLWJhY2tvZmZcbiAgICBjb25zdCBvcHRpb25zID0geyAuLi50aGlzLm9wdGlvbnMsIHNldHVwUmV0cnk6IDAgfTtcblxuICAgIGNvbnN0IHJlY29ubmVjdCA9ICh0cmllczogbnVtYmVyKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJUcnlpbmcgdG8gcmVjb25uZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc29ja2V0ID0gYXdhaXQgb3B0aW9ucy5jcmVhdGVTb2NrZXQob3B0aW9ucyk7XG4gICAgICAgICAgdGhpcy5zZXRTb2NrZXQoc29ja2V0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVyciA9PT0gRVJSX0lOVkFMSURfQVVUSCkge1xuICAgICAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJyZWNvbm5lY3QtZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVjb25uZWN0KHRyaWVzICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLm1pbih0cmllcywgNSkgKiAxMDAwKTtcbiAgICB9O1xuXG4gICAgcmVjb25uZWN0KDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuQ21kSWQoKSB7XG4gICAgcmV0dXJuICsrdGhpcy5jb21tYW5kSWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcnNlUXVlcnkgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgeyBFUlJfSEFTU19IT1NUX1JFUVVJUkVELCBFUlJfSU5WQUxJRF9BVVRIIH0gZnJvbSBcIi4vZXJyb3JzXCI7XG5cbmV4cG9ydCB0eXBlIEF1dGhEYXRhID0ge1xuICBoYXNzVXJsOiBzdHJpbmc7XG4gIGNsaWVudElkOiBzdHJpbmc7XG4gIGV4cGlyZXM6IG51bWJlcjtcbiAgcmVmcmVzaF90b2tlbjogc3RyaW5nO1xuICBhY2Nlc3NfdG9rZW46IHN0cmluZztcbiAgZXhwaXJlc19pbjogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgU2F2ZVRva2Vuc0Z1bmMgPSAoZGF0YTogQXV0aERhdGEgfCBudWxsKSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgTG9hZFRva2Vuc0Z1bmMgPSAoKSA9PiBQcm9taXNlPEF1dGhEYXRhIHwgbnVsbCB8IHVuZGVmaW5lZD47XG5cbmV4cG9ydCB0eXBlIGdldEF1dGhPcHRpb25zID0ge1xuICBoYXNzVXJsPzogc3RyaW5nO1xuICBjbGllbnRJZD86IHN0cmluZztcbiAgcmVkaXJlY3RVcmw/OiBzdHJpbmc7XG4gIGF1dGhDb2RlPzogc3RyaW5nO1xuICBzYXZlVG9rZW5zPzogU2F2ZVRva2Vuc0Z1bmM7XG4gIGxvYWRUb2tlbnM/OiBMb2FkVG9rZW5zRnVuYztcbn07XG5cbnR5cGUgUXVlcnlDYWxsYmFja0RhdGEgPVxuICB8IHt9XG4gIHwge1xuICAgICAgc3RhdGU6IHN0cmluZztcbiAgICAgIGNvZGU6IHN0cmluZztcbiAgICAgIGF1dGhfY2FsbGJhY2s6IHN0cmluZztcbiAgICB9O1xuXG50eXBlIE9BdXRoU3RhdGUgPSB7XG4gIGhhc3NVcmw6IHN0cmluZztcbiAgY2xpZW50SWQ6IHN0cmluZztcbn07XG5cbnR5cGUgQXV0aG9yaXphdGlvbkNvZGVSZXF1ZXN0ID0ge1xuICBncmFudF90eXBlOiBcImF1dGhvcml6YXRpb25fY29kZVwiO1xuICBjb2RlOiBzdHJpbmc7XG59O1xuXG50eXBlIFJlZnJlc2hUb2tlblJlcXVlc3QgPSB7XG4gIGdyYW50X3R5cGU6IFwicmVmcmVzaF90b2tlblwiO1xuICByZWZyZXNoX3Rva2VuOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuQ2xpZW50SWQgPSAoKTogc3RyaW5nID0+XG4gIGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fS9gO1xuXG5leHBvcnQgY29uc3QgZ2VuRXhwaXJlcyA9IChleHBpcmVzX2luOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gZXhwaXJlc19pbiAqIDEwMDAgKyBEYXRlLm5vdygpO1xufTtcblxuZnVuY3Rpb24gZ2VuUmVkaXJlY3RVcmwoKSB7XG4gIC8vIEdldCBjdXJyZW50IHVybCBidXQgd2l0aG91dCAjIHBhcnQuXG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3QsIHBhdGhuYW1lLCBzZWFyY2ggfSA9IGxvY2F0aW9uO1xuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH1gO1xufVxuXG5mdW5jdGlvbiBnZW5BdXRob3JpemVVcmwoXG4gIGhhc3NVcmw6IHN0cmluZyxcbiAgY2xpZW50SWQ6IHN0cmluZyxcbiAgcmVkaXJlY3RVcmw6IHN0cmluZyxcbiAgc3RhdGU6IHN0cmluZ1xuKSB7XG4gIGxldCBhdXRob3JpemVVcmwgPSBgJHtoYXNzVXJsfS9hdXRoL2F1dGhvcml6ZT9yZXNwb25zZV90eXBlPWNvZGUmY2xpZW50X2lkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgIGNsaWVudElkXG4gICl9JnJlZGlyZWN0X3VyaT0ke2VuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdFVybCl9YDtcblxuICBpZiAoc3RhdGUpIHtcbiAgICBhdXRob3JpemVVcmwgKz0gYCZzdGF0ZT0ke2VuY29kZVVSSUNvbXBvbmVudChzdGF0ZSl9YDtcbiAgfVxuICByZXR1cm4gYXV0aG9yaXplVXJsO1xufVxuXG5mdW5jdGlvbiByZWRpcmVjdEF1dGhvcml6ZShcbiAgaGFzc1VybDogc3RyaW5nLFxuICBjbGllbnRJZDogc3RyaW5nLFxuICByZWRpcmVjdFVybDogc3RyaW5nLFxuICBzdGF0ZTogc3RyaW5nXG4pIHtcbiAgLy8gQWRkIGVpdGhlciA/YXV0aF9jYWxsYmFjaz0xIG9yICZhdXRoX2NhbGxiYWNrPTFcbiAgcmVkaXJlY3RVcmwgKz0gKHJlZGlyZWN0VXJsLmluY2x1ZGVzKFwiP1wiKSA/IFwiJlwiIDogXCI/XCIpICsgXCJhdXRoX2NhbGxiYWNrPTFcIjtcblxuICBkb2N1bWVudC5sb2NhdGlvbiEuaHJlZiA9IGdlbkF1dGhvcml6ZVVybChcbiAgICBoYXNzVXJsLFxuICAgIGNsaWVudElkLFxuICAgIHJlZGlyZWN0VXJsLFxuICAgIHN0YXRlXG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHRva2VuUmVxdWVzdChcbiAgaGFzc1VybDogc3RyaW5nLFxuICBjbGllbnRJZDogc3RyaW5nLFxuICBkYXRhOiBBdXRob3JpemF0aW9uQ29kZVJlcXVlc3QgfCBSZWZyZXNoVG9rZW5SZXF1ZXN0XG4pIHtcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgZm9ybURhdGEuYXBwZW5kKFwiY2xpZW50X2lkXCIsIGNsaWVudElkKTtcbiAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIGRhdGFba2V5XSk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChgJHtoYXNzVXJsfS9hdXRoL3Rva2VuYCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICBib2R5OiBmb3JtRGF0YVxuICB9KTtcblxuICBpZiAoIXJlc3Aub2spIHtcbiAgICB0aHJvdyByZXNwLnN0YXR1cyA9PT0gNDAwIC8qIGF1dGggaW52YWxpZCAqLyB8fFxuICAgIHJlc3Auc3RhdHVzID09PSA0MDMgLyogdXNlciBub3QgYWN0aXZlICovXG4gICAgICA/IEVSUl9JTlZBTElEX0FVVEhcbiAgICAgIDogbmV3IEVycm9yKFwiVW5hYmxlIHRvIGZldGNoIHRva2Vuc1wiKTtcbiAgfVxuXG4gIGNvbnN0IHRva2VuczogQXV0aERhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgdG9rZW5zLmhhc3NVcmwgPSBoYXNzVXJsO1xuICB0b2tlbnMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgdG9rZW5zLmV4cGlyZXMgPSBnZW5FeHBpcmVzKHRva2Vucy5leHBpcmVzX2luKTtcbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gZmV0Y2hUb2tlbihoYXNzVXJsOiBzdHJpbmcsIGNsaWVudElkOiBzdHJpbmcsIGNvZGU6IHN0cmluZykge1xuICByZXR1cm4gdG9rZW5SZXF1ZXN0KGhhc3NVcmwsIGNsaWVudElkLCB7XG4gICAgY29kZSxcbiAgICBncmFudF90eXBlOiBcImF1dGhvcml6YXRpb25fY29kZVwiXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVPQXV0aFN0YXRlKHN0YXRlOiBPQXV0aFN0YXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuIGJ0b2EoSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlT0F1dGhTdGF0ZShlbmNvZGVkOiBzdHJpbmcpOiBPQXV0aFN0YXRlIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoYXRvYihlbmNvZGVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoIHtcbiAgcHJpdmF0ZSBfc2F2ZVRva2Vucz86IFNhdmVUb2tlbnNGdW5jO1xuICBkYXRhOiBBdXRoRGF0YTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBBdXRoRGF0YSwgc2F2ZVRva2Vucz86IFNhdmVUb2tlbnNGdW5jKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9zYXZlVG9rZW5zID0gc2F2ZVRva2VucztcbiAgfVxuXG4gIGdldCB3c1VybCgpIHtcbiAgICAvLyBDb252ZXJ0IGZyb20gaHR0cDovLyAtPiB3czovLywgaHR0cHM6Ly8gLT4gd3NzOi8vXG4gICAgcmV0dXJuIGB3cyR7dGhpcy5kYXRhLmhhc3NVcmwuc3Vic3RyKDQpfS9hcGkvd2Vic29ja2V0YDtcbiAgfVxuXG4gIGdldCBhY2Nlc3NUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmFjY2Vzc190b2tlbjtcbiAgfVxuXG4gIGdldCBleHBpcmVkKCkge1xuICAgIHJldHVybiBEYXRlLm5vdygpID4gdGhpcy5kYXRhLmV4cGlyZXM7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgYWNjZXNzIHRva2VuLlxuICAgKi9cbiAgYXN5bmMgcmVmcmVzaEFjY2Vzc1Rva2VuKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0b2tlblJlcXVlc3QodGhpcy5kYXRhLmhhc3NVcmwsIHRoaXMuZGF0YS5jbGllbnRJZCwge1xuICAgICAgZ3JhbnRfdHlwZTogXCJyZWZyZXNoX3Rva2VuXCIsXG4gICAgICByZWZyZXNoX3Rva2VuOiB0aGlzLmRhdGEucmVmcmVzaF90b2tlblxuICAgIH0pO1xuICAgIC8vIEFjY2VzcyB0b2tlbiByZXNwb25zZSBkb2VzIG5vdCBjb250YWluIHJlZnJlc2ggdG9rZW4uXG4gICAgZGF0YS5yZWZyZXNoX3Rva2VuID0gdGhpcy5kYXRhLnJlZnJlc2hfdG9rZW47XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBpZiAodGhpcy5fc2F2ZVRva2VucykgdGhpcy5fc2F2ZVRva2VucyhkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXZva2UgdGhlIHJlZnJlc2ggJiBhY2Nlc3MgdG9rZW5zLlxuICAgKi9cbiAgYXN5bmMgcmV2b2tlKCkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiYWN0aW9uXCIsIFwicmV2b2tlXCIpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInRva2VuXCIsIHRoaXMuZGF0YS5yZWZyZXNoX3Rva2VuKTtcblxuICAgIC8vIFRoZXJlIGlzIG5vIGVycm9yIGNoZWNraW5nLCBhcyByZXZva2Ugd2lsbCBhbHdheXMgcmV0dXJuIDIwMFxuICAgIGF3YWl0IGZldGNoKGAke3RoaXMuZGF0YS5oYXNzVXJsfS9hdXRoL3Rva2VuYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICBib2R5OiBmb3JtRGF0YVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX3NhdmVUb2tlbnMpIHtcbiAgICAgIHRoaXMuX3NhdmVUb2tlbnMobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdXRoKG9wdGlvbnM6IGdldEF1dGhPcHRpb25zID0ge30pOiBQcm9taXNlPEF1dGg+IHtcbiAgbGV0IGRhdGE6IEF1dGhEYXRhIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICBsZXQgaGFzc1VybCA9IG9wdGlvbnMuaGFzc1VybDtcbiAgLy8gU3RyaXAgdHJhaWxpbmcgc2xhc2guXG4gIGlmIChoYXNzVXJsICYmIGhhc3NVcmxbaGFzc1VybC5sZW5ndGggLSAxXSA9PT0gXCIvXCIpIHtcbiAgICBoYXNzVXJsID0gaGFzc1VybC5zdWJzdHIoMCwgaGFzc1VybC5sZW5ndGggLSAxKTtcbiAgfVxuICBjb25zdCBjbGllbnRJZCA9IG9wdGlvbnMuY2xpZW50SWQgfHwgZ2VuQ2xpZW50SWQoKTtcblxuICAvLyBVc2UgYXV0aCBjb2RlIGlmIGl0IHdhcyBwYXNzZWQgaW5cbiAgaWYgKCFkYXRhICYmIG9wdGlvbnMuYXV0aENvZGUgJiYgaGFzc1VybCAmJiBjbGllbnRJZCkge1xuICAgIHRyeSB7XG4gICAgICBkYXRhID0gYXdhaXQgZmV0Y2hUb2tlbihoYXNzVXJsLCBjbGllbnRJZCwgb3B0aW9ucy5hdXRoQ29kZSk7XG4gICAgICBpZiAob3B0aW9ucy5zYXZlVG9rZW5zKSB7XG4gICAgICAgIG9wdGlvbnMuc2F2ZVRva2VucyhkYXRhKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIERvIHdlIHdhbnQgdG8gdGVsbCB1c2VyIHdlIHdlcmUgdW5hYmxlIHRvIGZldGNoIHRva2Vucz9cbiAgICAgIC8vIEZvciBub3cgd2UgZG9uJ3QgZG8gYW55dGhpbmcsIGhhdmluZyByZXN0IG9mIGNvZGUgcGljayBpdCB1cC5cbiAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGZldGNoIGFjY2VzcyB0b2tlblwiLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIHdlIGNhbWUgYmFjayBmcm9tIGFuIGF1dGhvcml6ZSByZWRpcmVjdFxuICBpZiAoIWRhdGEpIHtcbiAgICBjb25zdCBxdWVyeSA9IHBhcnNlUXVlcnk8UXVlcnlDYWxsYmFja0RhdGE+KGxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkpO1xuXG4gICAgLy8gQ2hlY2sgaWYgd2UgZ290IHJlZGlyZWN0ZWQgaGVyZSBmcm9tIGF1dGhvcml6ZSBwYWdlXG4gICAgaWYgKFwiYXV0aF9jYWxsYmFja1wiIGluIHF1ZXJ5KSB7XG4gICAgICAvLyBSZXN0b3JlIHN0YXRlXG4gICAgICBjb25zdCBzdGF0ZSA9IGRlY29kZU9BdXRoU3RhdGUocXVlcnkuc3RhdGUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IGF3YWl0IGZldGNoVG9rZW4oc3RhdGUuaGFzc1VybCwgc3RhdGUuY2xpZW50SWQsIHF1ZXJ5LmNvZGUpO1xuICAgICAgICBpZiAob3B0aW9ucy5zYXZlVG9rZW5zKSB7XG4gICAgICAgICAgb3B0aW9ucy5zYXZlVG9rZW5zKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gRG8gd2Ugd2FudCB0byB0ZWxsIHVzZXIgd2Ugd2VyZSB1bmFibGUgdG8gZmV0Y2ggdG9rZW5zP1xuICAgICAgICAvLyBGb3Igbm93IHdlIGRvbid0IGRvIGFueXRoaW5nLCBoYXZpbmcgcmVzdCBvZiBjb2RlIHBpY2sgaXQgdXAuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGZldGNoIGFjY2VzcyB0b2tlblwiLCBlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGZvciBzdG9yZWQgdG9rZW5zXG4gIGlmICghZGF0YSAmJiBvcHRpb25zLmxvYWRUb2tlbnMpIHtcbiAgICBkYXRhID0gYXdhaXQgb3B0aW9ucy5sb2FkVG9rZW5zKCk7XG4gIH1cblxuICBpZiAoZGF0YSkge1xuICAgIHJldHVybiBuZXcgQXV0aChkYXRhLCBvcHRpb25zLnNhdmVUb2tlbnMpO1xuICB9XG5cbiAgaWYgKGhhc3NVcmwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IEVSUl9IQVNTX0hPU1RfUkVRVUlSRUQ7XG4gIH1cblxuICAvLyBJZiBubyB0b2tlbnMgZm91bmQgYnV0IGEgaGFzc1VybCB3YXMgcGFzc2VkIGluLCBsZXQncyBnbyBnZXQgc29tZSB0b2tlbnMhXG4gIHJlZGlyZWN0QXV0aG9yaXplKFxuICAgIGhhc3NVcmwsXG4gICAgY2xpZW50SWQsXG4gICAgb3B0aW9ucy5yZWRpcmVjdFVybCB8fCBnZW5SZWRpcmVjdFVybCgpLFxuICAgIGVuY29kZU9BdXRoU3RhdGUoe1xuICAgICAgaGFzc1VybCxcbiAgICAgIGNsaWVudElkXG4gICAgfSlcbiAgKTtcbiAgLy8gSnVzdCBkb24ndCByZXNvbHZlIHdoaWxlIHdlIG5hdmlnYXRlIHRvIG5leHQgcGFnZVxuICByZXR1cm4gbmV3IFByb21pc2U8QXV0aD4oKCkgPT4ge30pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnk8VD4ocXVlcnlTdHJpbmc6IHN0cmluZykge1xuICBjb25zdCBxdWVyeTogYW55ID0ge307XG4gIGNvbnN0IGl0ZW1zID0gcXVlcnlTdHJpbmcuc3BsaXQoXCImXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldLnNwbGl0KFwiPVwiKTtcbiAgICBjb25zdCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoaXRlbVswXSk7XG4gICAgY29uc3QgdmFsdWUgPSBpdGVtLmxlbmd0aCA+IDEgPyBkZWNvZGVVUklDb21wb25lbnQoaXRlbVsxXSkgOiB1bmRlZmluZWQ7XG4gICAgcXVlcnlba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBxdWVyeSBhcyBUO1xufVxuIiwiaW1wb3J0IHsgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLy8gKGMpIEphc29uIE1pbGxlclxuLy8gVW5pc3RvcmUgLSBNSVQgbGljZW5zZVxuLy8gQW5kIHRoZW4gYWRvcHRlZCB0byBvdXIgbmVlZHMgKyB0eXBlc2NyaXB0XG5cbnR5cGUgTGlzdGVuZXI8U3RhdGU+ID0gKHN0YXRlOiBTdGF0ZSkgPT4gdm9pZDtcbnR5cGUgQWN0aW9uPFN0YXRlPiA9IChcbiAgc3RhdGU6IFN0YXRlLFxuICAuLi5hcmdzOiBhbnlbXVxuKSA9PiBQYXJ0aWFsPFN0YXRlPiB8IFByb21pc2U8UGFydGlhbDxTdGF0ZT4+IHwgbnVsbDtcbnR5cGUgQm91bmRBY3Rpb248U3RhdGU+ID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBTdG9yZTxTdGF0ZT4gPSB7XG4gIHN0YXRlOiBTdGF0ZSB8IHVuZGVmaW5lZDtcbiAgYWN0aW9uKGFjdGlvbjogQWN0aW9uPFN0YXRlPik6IEJvdW5kQWN0aW9uPFN0YXRlPjtcbiAgc2V0U3RhdGUodXBkYXRlOiBQYXJ0aWFsPFN0YXRlPiwgb3ZlcndyaXRlPzogYm9vbGVhbik6IHZvaWQ7XG4gIHN1YnNjcmliZShsaXN0ZW5lcjogTGlzdGVuZXI8U3RhdGU+KTogVW5zdWJzY3JpYmVGdW5jO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN0b3JlID0gPFN0YXRlPihzdGF0ZT86IFN0YXRlKTogU3RvcmU8U3RhdGU+ID0+IHtcbiAgbGV0IGxpc3RlbmVyczogTGlzdGVuZXI8U3RhdGU+W10gPSBbXTtcblxuICBmdW5jdGlvbiB1bnN1YnNjcmliZShsaXN0ZW5lcjogTGlzdGVuZXI8U3RhdGU+IHwgbnVsbCkge1xuICAgIGxldCBvdXQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0LnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGlzdGVuZXJzID0gb3V0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUodXBkYXRlOiBQYXJ0aWFsPFN0YXRlPiwgb3ZlcndyaXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgc3RhdGUgPSBvdmVyd3JpdGUgPyAodXBkYXRlIGFzIFN0YXRlKSA6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB1cGRhdGUpO1xuICAgIGxldCBjdXJyZW50TGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgY3VycmVudExpc3RlbmVyc1tpXShzdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFuIG9ic2VydmFibGUgc3RhdGUgY29udGFpbmVyLCByZXR1cm5lZCBmcm9tIHtAbGluayBjcmVhdGVTdG9yZX1cbiAgICogQG5hbWUgc3RvcmVcbiAgICovXG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGJvdW5kIGNvcHkgb2YgdGhlIGdpdmVuIGFjdGlvbiBmdW5jdGlvbi5cbiAgICAgKiBUaGUgYm91bmQgcmV0dXJuZWQgZnVuY3Rpb24gaW52b2tlcyBhY3Rpb24oKSBhbmQgcGVyc2lzdHMgdGhlIHJlc3VsdCBiYWNrIHRvIHRoZSBzdG9yZS5cbiAgICAgKiBJZiB0aGUgcmV0dXJuIHZhbHVlIG9mIGBhY3Rpb25gIGlzIGEgUHJvbWlzZSwgdGhlIHJlc29sdmVkIHZhbHVlIHdpbGwgYmUgdXNlZCBhcyBzdGF0ZS5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb25cdEFuIGFjdGlvbiBvZiB0aGUgZm9ybSBgYWN0aW9uKHN0YXRlLCAuLi5hcmdzKSAtPiBzdGF0ZVVwZGF0ZWBcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IGJvdW5kQWN0aW9uKClcbiAgICAgKi9cbiAgICBhY3Rpb24oYWN0aW9uOiBBY3Rpb248U3RhdGU+KTogQm91bmRBY3Rpb248U3RhdGU+IHtcbiAgICAgIGZ1bmN0aW9uIGFwcGx5KHJlc3VsdDogUGFydGlhbDxTdGF0ZT4pIHtcbiAgICAgICAgc2V0U3RhdGUocmVzdWx0LCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vdGU6IHBlcmYgdGVzdHMgdmVyaWZ5aW5nIHRoaXMgaW1wbGVtZW50YXRpb246IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWEyOTVlNjI5OTYzNDgwMGEwMzQ5NTAwXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhcmdzID0gW3N0YXRlXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGxldCByZXQgPSBhY3Rpb24uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIGlmIChyZXQgIT0gbnVsbCkge1xuICAgICAgICAgIGlmIChyZXQudGhlbikgcmV0dXJuIHJldC50aGVuKGFwcGx5KTtcbiAgICAgICAgICByZXR1cm4gYXBwbHkocmV0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgYSBwYXJ0aWFsIHN0YXRlIG9iamVjdCB0byB0aGUgY3VycmVudCBzdGF0ZSwgaW52b2tpbmcgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZVx0XHRcdFx0QW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyB0byBiZSBtZXJnZWQgaW50byBzdGF0ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW292ZXJ3cml0ZT1mYWxzZV1cdElmIGB0cnVlYCwgdXBkYXRlIHdpbGwgcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIGJlaW5nIG1lcmdlZCBpbnRvIGl0XG4gICAgICovXG4gICAgc2V0U3RhdGUsXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuZXZlciBzdGF0ZSBpcyBjaGFuZ2VkLiBSZXR1cm5zIGFuIGB1bnN1YnNjcmliZSgpYCBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclx0QSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gc3RhdGUgY2hhbmdlcy4gR2V0cyBwYXNzZWQgdGhlIG5ldyBzdGF0ZS5cbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IHVuc3Vic2NyaWJlKClcbiAgICAgKi9cbiAgICBzdWJzY3JpYmUobGlzdGVuZXI6IExpc3RlbmVyPFN0YXRlPikge1xuICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBSZW1vdmUgYSBwcmV2aW91c2x5LXJlZ2lzdGVyZWQgbGlzdGVuZXIgZnVuY3Rpb24uXG4gICAgLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcdFRoZSBjYWxsYmFjayBwcmV2aW91c2x5IHBhc3NlZCB0byBgc3Vic2NyaWJlKClgIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQuXG4gICAgLy8gICogQGZ1bmN0aW9uXG4gICAgLy8gICovXG4gICAgLy8gdW5zdWJzY3JpYmUsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgU3RvcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcIi4vc3RvcmVcIjtcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgdHlwZSBDb2xsZWN0aW9uPFN0YXRlPiA9IHtcbiAgc3RhdGU6IFN0YXRlO1xuICByZWZyZXNoKCk6IFByb21pc2U8dm9pZD47XG4gIHN1YnNjcmliZShzdWJzY3JpYmVyOiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkKTogVW5zdWJzY3JpYmVGdW5jO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENvbGxlY3Rpb24gPSA8U3RhdGU+KFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBrZXk6IHN0cmluZyxcbiAgZmV0Y2hDb2xsZWN0aW9uOiAoY29ubjogQ29ubmVjdGlvbikgPT4gUHJvbWlzZTxTdGF0ZT4sXG4gIHN1YnNjcmliZVVwZGF0ZXM/OiAoXG4gICAgY29ubjogQ29ubmVjdGlvbixcbiAgICBzdG9yZTogU3RvcmU8U3RhdGU+XG4gICkgPT4gUHJvbWlzZTxVbnN1YnNjcmliZUZ1bmM+XG4pOiBDb2xsZWN0aW9uPFN0YXRlPiA9PiB7XG4gIGlmIChjb25uW2tleV0pIHtcbiAgICByZXR1cm4gY29ubltrZXldO1xuICB9XG5cbiAgbGV0IGFjdGl2ZSA9IDA7XG4gIGxldCB1bnN1YlByb206IFByb21pc2U8VW5zdWJzY3JpYmVGdW5jPjtcbiAgbGV0IHN0b3JlID0gY3JlYXRlU3RvcmU8U3RhdGU+KCk7XG5cbiAgY29uc3QgcmVmcmVzaCA9ICgpID0+XG4gICAgZmV0Y2hDb2xsZWN0aW9uKGNvbm4pLnRoZW4oc3RhdGUgPT4gc3RvcmUuc2V0U3RhdGUoc3RhdGUsIHRydWUpKTtcblxuICBjb25zdCByZWZyZXNoU3dhbGxvdyA9ICgpID0+XG4gICAgcmVmcmVzaCgpLmNhdGNoKChlcnI6IHVua25vd24pID0+IHtcbiAgICAgIC8vIFN3YWxsb3cgZXJyb3JzIGlmIHNvY2tldCBpcyBjb25uZWN0aW5nLCBjbG9zaW5nIG9yIGNsb3NlZC5cbiAgICAgIC8vIFdlIHdpbGwgYXV0b21hdGljYWxseSBjYWxsIHJlZnJlc2ggYWdhaW4gd2hlbiB3ZSByZS1lc3RhYmxpc2ggdGhlIGNvbm5lY3Rpb24uXG4gICAgICAvLyBVc2luZyBjb25uLnNvY2tldC5PUEVOIGluc3RlYWQgb2YgV2ViU29ja2V0IGZvciBiZXR0ZXIgbm9kZSBzdXBwb3J0XG4gICAgICBpZiAoY29ubi5zb2NrZXQucmVhZHlTdGF0ZSA9PSBjb25uLnNvY2tldC5PUEVOKSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9KTtcblxuICBjb25uW2tleV0gPSB7XG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgcmV0dXJuIHN0b3JlLnN0YXRlO1xuICAgIH0sXG5cbiAgICByZWZyZXNoLFxuXG4gICAgc3Vic2NyaWJlKHN1YnNjcmliZXI6IChzdGF0ZTogU3RhdGUpID0+IHZvaWQpOiBVbnN1YnNjcmliZUZ1bmMge1xuICAgICAgYWN0aXZlKys7XG5cbiAgICAgIC8vIElmIHRoaXMgd2FzIHRoZSBmaXJzdCBzdWJzY3JpYmVyLCBhdHRhY2ggY29sbGVjdGlvblxuICAgICAgaWYgKGFjdGl2ZSA9PT0gMSkge1xuICAgICAgICBpZiAoc3Vic2NyaWJlVXBkYXRlcykge1xuICAgICAgICAgIHVuc3ViUHJvbSA9IHN1YnNjcmliZVVwZGF0ZXMoY29ubiwgc3RvcmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmV0Y2ggd2hlbiBjb25uZWN0aW9uIHJlLWVzdGFibGlzaGVkLlxuICAgICAgICBjb25uLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCByZWZyZXNoU3dhbGxvdyk7XG5cbiAgICAgICAgcmVmcmVzaFN3YWxsb3coKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdW5zdWIgPSBzdG9yZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG5cbiAgICAgIGlmIChzdG9yZS5zdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIERvbid0IGNhbGwgaXQgcmlnaHQgYXdheSBzbyB0aGF0IGNhbGxlciBoYXMgdGltZVxuICAgICAgICAvLyB0byBpbml0aWFsaXplIGFsbCB0aGUgdGhpbmdzLlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHN1YnNjcmliZXIoc3RvcmUuc3RhdGUhKSwgMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHVuc3ViKCk7XG4gICAgICAgIGFjdGl2ZS0tO1xuICAgICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICAgIC8vIFVuc3Vic2NyaWJlIGZyb20gY2hhbmdlc1xuICAgICAgICAgIGlmICh1bnN1YlByb20pXG4gICAgICAgICAgICB1bnN1YlByb20udGhlbih1bnN1YiA9PiB7XG4gICAgICAgICAgICAgIHVuc3ViKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCByZWZyZXNoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGNvbm5ba2V5XTtcbn07XG5cbi8vIExlZ2FjeSBuYW1lLiBJdCBnZXRzIGEgY29sbGVjdGlvbiBhbmQgc3Vic2NyaWJlcy5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb2xsZWN0aW9uID0gPFN0YXRlPihcbiAga2V5OiBzdHJpbmcsXG4gIGZldGNoQ29sbGVjdGlvbjogKGNvbm46IENvbm5lY3Rpb24pID0+IFByb21pc2U8U3RhdGU+LFxuICBzdWJzY3JpYmVVcGRhdGVzOlxuICAgIHwgKChjb25uOiBDb25uZWN0aW9uLCBzdG9yZTogU3RvcmU8U3RhdGU+KSA9PiBQcm9taXNlPFVuc3Vic2NyaWJlRnVuYz4pXG4gICAgfCB1bmRlZmluZWQsXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkXG4pOiBVbnN1YnNjcmliZUZ1bmMgPT5cbiAgZ2V0Q29sbGVjdGlvbihjb25uLCBrZXksIGZldGNoQ29sbGVjdGlvbiwgc3Vic2NyaWJlVXBkYXRlcykuc3Vic2NyaWJlKFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHksIEhhc3NTZXJ2aWNlcywgSGFzc0NvbmZpZywgSGFzc1VzZXIgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGVzID0gKGNvbm5lY3Rpb246IENvbm5lY3Rpb24pID0+XG4gIGNvbm5lY3Rpb24uc2VuZE1lc3NhZ2VQcm9taXNlPEhhc3NFbnRpdHlbXT4obWVzc2FnZXMuc3RhdGVzKCkpO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmljZXMgPSAoY29ubmVjdGlvbjogQ29ubmVjdGlvbikgPT5cbiAgY29ubmVjdGlvbi5zZW5kTWVzc2FnZVByb21pc2U8SGFzc1NlcnZpY2VzPihtZXNzYWdlcy5zZXJ2aWNlcygpKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZyA9IChjb25uZWN0aW9uOiBDb25uZWN0aW9uKSA9PlxuICBjb25uZWN0aW9uLnNlbmRNZXNzYWdlUHJvbWlzZTxIYXNzQ29uZmlnPihtZXNzYWdlcy5jb25maWcoKSk7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKGNvbm5lY3Rpb246IENvbm5lY3Rpb24pID0+XG4gIGNvbm5lY3Rpb24uc2VuZE1lc3NhZ2VQcm9taXNlPEhhc3NVc2VyPihtZXNzYWdlcy51c2VyKCkpO1xuXG5leHBvcnQgY29uc3QgY2FsbFNlcnZpY2UgPSAoXG4gIGNvbm5lY3Rpb246IENvbm5lY3Rpb24sXG4gIGRvbWFpbjogc3RyaW5nLFxuICBzZXJ2aWNlOiBzdHJpbmcsXG4gIHNlcnZpY2VEYXRhPzogb2JqZWN0XG4pID0+XG4gIGNvbm5lY3Rpb24uc2VuZE1lc3NhZ2VQcm9taXNlKFxuICAgIG1lc3NhZ2VzLmNhbGxTZXJ2aWNlKGRvbWFpbiwgc2VydmljZSwgc2VydmljZURhdGEpXG4gICk7XG4iLCJpbXBvcnQgeyBnZXRDb2xsZWN0aW9uIH0gZnJvbSBcIi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IHsgSGFzc0NvbmZpZywgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL3N0b3JlXCI7XG5pbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tIFwiLi9jb21tYW5kc1wiO1xuXG50eXBlIENvbXBvbmVudExvYWRlZEV2ZW50ID0ge1xuICBkYXRhOiB7XG4gICAgY29tcG9uZW50OiBzdHJpbmc7XG4gIH07XG59O1xuXG5mdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50TG9hZGVkKFxuICBzdGF0ZTogSGFzc0NvbmZpZyxcbiAgZXZlbnQ6IENvbXBvbmVudExvYWRlZEV2ZW50XG4pOiBQYXJ0aWFsPEhhc3NDb25maWc+IHwgbnVsbCB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4ge1xuICAgIGNvbXBvbmVudHM6IHN0YXRlLmNvbXBvbmVudHMuY29uY2F0KGV2ZW50LmRhdGEuY29tcG9uZW50KVxuICB9O1xufVxuXG5jb25zdCBmZXRjaENvbmZpZyA9IChjb25uOiBDb25uZWN0aW9uKSA9PiBnZXRDb25maWcoY29ubik7XG5jb25zdCBzdWJzY3JpYmVVcGRhdGVzID0gKGNvbm46IENvbm5lY3Rpb24sIHN0b3JlOiBTdG9yZTxIYXNzQ29uZmlnPikgPT5cbiAgUHJvbWlzZS5hbGwoW1xuICAgIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgICAgc3RvcmUuYWN0aW9uKHByb2Nlc3NDb21wb25lbnRMb2FkZWQpLFxuICAgICAgXCJjb21wb25lbnRfbG9hZGVkXCJcbiAgICApLFxuICAgIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgICAgKCkgPT4gZmV0Y2hDb25maWcoY29ubikudGhlbihjb25maWcgPT4gc3RvcmUuc2V0U3RhdGUoY29uZmlnLCB0cnVlKSksXG4gICAgICBcImNvcmVfY29uZmlnX3VwZGF0ZWRcIlxuICAgIClcbiAgXSkudGhlbih1bnN1YnMgPT4gKCkgPT4gdW5zdWJzLmZvckVhY2godW5zdWIgPT4gdW5zdWIoKSkpO1xuXG5jb25zdCBjb25maWdDb2xsID0gKGNvbm46IENvbm5lY3Rpb24pID0+XG4gIGdldENvbGxlY3Rpb24oY29ubiwgXCJfY25mXCIsIGZldGNoQ29uZmlnLCBzdWJzY3JpYmVVcGRhdGVzKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUNvbmZpZyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChzdGF0ZTogSGFzc0NvbmZpZykgPT4gdm9pZFxuKTogVW5zdWJzY3JpYmVGdW5jID0+IGNvbmZpZ0NvbGwoY29ubikuc3Vic2NyaWJlKG9uQ2hhbmdlKTtcbiIsImltcG9ydCB7IGdldENvbGxlY3Rpb24gfSBmcm9tIFwiLi9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgeyBIYXNzU2VydmljZXMsIEhhc3NEb21haW5TZXJ2aWNlcywgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL3N0b3JlXCI7XG5pbXBvcnQgeyBnZXRTZXJ2aWNlcyB9IGZyb20gXCIuL2NvbW1hbmRzXCI7XG5cbnR5cGUgU2VydmljZVJlZ2lzdGVyZWRFdmVudCA9IHtcbiAgZGF0YToge1xuICAgIGRvbWFpbjogc3RyaW5nO1xuICAgIHNlcnZpY2U6IHN0cmluZztcbiAgfTtcbn07XG5cbnR5cGUgU2VydmljZVJlbW92ZWRFdmVudCA9IHtcbiAgZGF0YToge1xuICAgIGRvbWFpbjogc3RyaW5nO1xuICAgIHNlcnZpY2U6IHN0cmluZztcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIHByb2Nlc3NTZXJ2aWNlUmVnaXN0ZXJlZChcbiAgc3RhdGU6IEhhc3NTZXJ2aWNlcyxcbiAgZXZlbnQ6IFNlcnZpY2VSZWdpc3RlcmVkRXZlbnRcbikge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgeyBkb21haW4sIHNlcnZpY2UgfSA9IGV2ZW50LmRhdGE7XG5cbiAgY29uc3QgZG9tYWluSW5mbyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlW2RvbWFpbl0sIHtcbiAgICBbc2VydmljZV06IHsgZGVzY3JpcHRpb246IFwiXCIsIGZpZWxkczoge30gfVxuICB9KTtcblxuICByZXR1cm4geyBbZG9tYWluXTogZG9tYWluSW5mbyB9O1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzU2VydmljZVJlbW92ZWQoXG4gIHN0YXRlOiBIYXNzU2VydmljZXMsXG4gIGV2ZW50OiBTZXJ2aWNlUmVtb3ZlZEV2ZW50XG4pIHtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHsgZG9tYWluLCBzZXJ2aWNlIH0gPSBldmVudC5kYXRhO1xuICBjb25zdCBjdXJEb21haW5JbmZvID0gc3RhdGVbZG9tYWluXTtcblxuICBpZiAoIWN1ckRvbWFpbkluZm8gfHwgIShzZXJ2aWNlIGluIGN1ckRvbWFpbkluZm8pKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBkb21haW5JbmZvOiBIYXNzRG9tYWluU2VydmljZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMoY3VyRG9tYWluSW5mbykuZm9yRWFjaChzS2V5ID0+IHtcbiAgICBpZiAoc0tleSAhPT0gc2VydmljZSkgZG9tYWluSW5mb1tzS2V5XSA9IGN1ckRvbWFpbkluZm9bc0tleV07XG4gIH0pO1xuXG4gIHJldHVybiB7IFtkb21haW5dOiBkb21haW5JbmZvIH07XG59XG5cbmNvbnN0IGZldGNoU2VydmljZXMgPSAoY29ubjogQ29ubmVjdGlvbikgPT4gZ2V0U2VydmljZXMoY29ubik7XG5jb25zdCBzdWJzY3JpYmVVcGRhdGVzID0gKGNvbm46IENvbm5lY3Rpb24sIHN0b3JlOiBTdG9yZTxIYXNzU2VydmljZXM+KSA9PlxuICBQcm9taXNlLmFsbChbXG4gICAgY29ubi5zdWJzY3JpYmVFdmVudHM8U2VydmljZVJlZ2lzdGVyZWRFdmVudD4oXG4gICAgICBzdG9yZS5hY3Rpb24ocHJvY2Vzc1NlcnZpY2VSZWdpc3RlcmVkKSxcbiAgICAgIFwic2VydmljZV9yZWdpc3RlcmVkXCJcbiAgICApLFxuICAgIGNvbm4uc3Vic2NyaWJlRXZlbnRzPFNlcnZpY2VSZW1vdmVkRXZlbnQ+KFxuICAgICAgc3RvcmUuYWN0aW9uKHByb2Nlc3NTZXJ2aWNlUmVtb3ZlZCksXG4gICAgICBcInNlcnZpY2VfcmVtb3ZlZFwiXG4gICAgKVxuICBdKS50aGVuKHVuc3VicyA9PiAoKSA9PiB1bnN1YnMuZm9yRWFjaChmbiA9PiBmbigpKSk7XG5cbmNvbnN0IHNlcnZpY2VzQ29sbCA9IChjb25uOiBDb25uZWN0aW9uKSA9PlxuICBnZXRDb2xsZWN0aW9uKGNvbm4sIFwiX3NydlwiLCBmZXRjaFNlcnZpY2VzLCBzdWJzY3JpYmVVcGRhdGVzKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZVNlcnZpY2VzID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKHN0YXRlOiBIYXNzU2VydmljZXMpID0+IHZvaWRcbik6IFVuc3Vic2NyaWJlRnVuYyA9PiBzZXJ2aWNlc0NvbGwoY29ubikuc3Vic2NyaWJlKG9uQ2hhbmdlKTtcbiIsImltcG9ydCB7IGdldENvbGxlY3Rpb24gfSBmcm9tIFwiLi9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgeyBIYXNzRW50aXRpZXMsIFN0YXRlQ2hhbmdlZEV2ZW50LCBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vc3RvcmVcIjtcbmltcG9ydCB7IGdldFN0YXRlcyB9IGZyb20gXCIuL2NvbW1hbmRzXCI7XG5cbmZ1bmN0aW9uIHByb2Nlc3NFdmVudChzdG9yZTogU3RvcmU8SGFzc0VudGl0aWVzPiwgZXZlbnQ6IFN0YXRlQ2hhbmdlZEV2ZW50KSB7XG4gIGNvbnN0IHN0YXRlID0gc3RvcmUuc3RhdGU7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgY29uc3QgeyBlbnRpdHlfaWQsIG5ld19zdGF0ZSB9ID0gZXZlbnQuZGF0YTtcbiAgaWYgKG5ld19zdGF0ZSkge1xuICAgIHN0b3JlLnNldFN0YXRlKHsgW25ld19zdGF0ZS5lbnRpdHlfaWRdOiBuZXdfc3RhdGUgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbmV3RW50aXRpZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XG4gICAgZGVsZXRlIG5ld0VudGl0aWVzW2VudGl0eV9pZF07XG4gICAgc3RvcmUuc2V0U3RhdGUobmV3RW50aXRpZXMsIHRydWUpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRW50aXRpZXMoY29ubjogQ29ubmVjdGlvbik6IFByb21pc2U8SGFzc0VudGl0aWVzPiB7XG4gIGNvbnN0IHN0YXRlcyA9IGF3YWl0IGdldFN0YXRlcyhjb25uKTtcbiAgY29uc3QgZW50aXRpZXM6IEhhc3NFbnRpdGllcyA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0YXRlID0gc3RhdGVzW2ldO1xuICAgIGVudGl0aWVzW3N0YXRlLmVudGl0eV9pZF0gPSBzdGF0ZTtcbiAgfVxuICByZXR1cm4gZW50aXRpZXM7XG59XG5cbmNvbnN0IHN1YnNjcmliZVVwZGF0ZXMgPSAoY29ubjogQ29ubmVjdGlvbiwgc3RvcmU6IFN0b3JlPEhhc3NFbnRpdGllcz4pID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzPFN0YXRlQ2hhbmdlZEV2ZW50PihcbiAgICBldiA9PiBwcm9jZXNzRXZlbnQoc3RvcmUsIGV2IGFzIFN0YXRlQ2hhbmdlZEV2ZW50KSxcbiAgICBcInN0YXRlX2NoYW5nZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3QgZW50aXRpZXNDb2xsID0gKGNvbm46IENvbm5lY3Rpb24pID0+XG4gIGdldENvbGxlY3Rpb24oY29ubiwgXCJfZW50XCIsIGZldGNoRW50aXRpZXMsIHN1YnNjcmliZVVwZGF0ZXMpO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlRW50aXRpZXMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoc3RhdGU6IEhhc3NFbnRpdGllcykgPT4gdm9pZFxuKTogVW5zdWJzY3JpYmVGdW5jID0+IGVudGl0aWVzQ29sbChjb25uKS5zdWJzY3JpYmUob25DaGFuZ2UpO1xuIiwiaW1wb3J0IHsgQ29ubmVjdGlvbk9wdGlvbnMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlU29ja2V0IH0gZnJvbSBcIi4vc29ja2V0XCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9hdXRoXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb2xsZWN0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb25maWdcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NlcnZpY2VzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9lbnRpdGllc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZXJyb3JzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29tbWFuZHNcIjtcblxuY29uc3QgZGVmYXVsdENvbm5lY3Rpb25PcHRpb25zOiBDb25uZWN0aW9uT3B0aW9ucyA9IHtcbiAgc2V0dXBSZXRyeTogMCxcbiAgY3JlYXRlU29ja2V0XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29ubmVjdGlvbihvcHRpb25zPzogUGFydGlhbDxDb25uZWN0aW9uT3B0aW9ucz4pIHtcbiAgY29uc3QgY29ubk9wdGlvbnM6IENvbm5lY3Rpb25PcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICBkZWZhdWx0Q29ubmVjdGlvbk9wdGlvbnMsXG4gICAgb3B0aW9uc1xuICApO1xuICBjb25zdCBzb2NrZXQgPSBhd2FpdCBjb25uT3B0aW9ucy5jcmVhdGVTb2NrZXQoY29ubk9wdGlvbnMpO1xuICBjb25zdCBjb25uID0gbmV3IENvbm5lY3Rpb24oc29ja2V0LCBjb25uT3B0aW9ucyk7XG4gIHJldHVybiBjb25uO1xufVxuIiwiaW1wb3J0IHsgQXV0aERhdGEgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmNvbnN0IHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlIHx8IHt9O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fdG9rZW5DYWNoZToge1xuICAgICAgLy8gdW5kZWZpbmVkOiB3ZSBoYXZlbid0IGxvYWRlZCB5ZXRcbiAgICAgIC8vIG51bGw6IG5vbmUgc3RvcmVkXG4gICAgICB0b2tlbnM/OiBBdXRoRGF0YSB8IG51bGw7XG4gICAgICB3cml0ZUVuYWJsZWQ/OiBib29sZWFuO1xuICAgIH07XG4gIH1cbn1cblxuLy8gU28gdGhhdCBjb3JlLmpzIGFuZCBtYWluIGFwcCBoaXQgc2FtZSBzaGFyZWQgb2JqZWN0LlxubGV0IHRva2VuQ2FjaGUgPSB3aW5kb3cuX190b2tlbkNhY2hlO1xuaWYgKCF0b2tlbkNhY2hlKSB7XG4gIHRva2VuQ2FjaGUgPSB3aW5kb3cuX190b2tlbkNhY2hlID0ge1xuICAgIHRva2VuczogdW5kZWZpbmVkLFxuICAgIHdyaXRlRW5hYmxlZDogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNrV3JpdGUoKSB7XG4gIHJldHVybiAoXG4gICAgdG9rZW5DYWNoZS50b2tlbnMgIT09IHVuZGVmaW5lZCAmJiB0b2tlbkNhY2hlLndyaXRlRW5hYmxlZCA9PT0gdW5kZWZpbmVkXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVG9rZW5zKHRva2VuczogQXV0aERhdGEgfCBudWxsKSB7XG4gIHRva2VuQ2FjaGUudG9rZW5zID0gdG9rZW5zO1xuICBpZiAodG9rZW5DYWNoZS53cml0ZUVuYWJsZWQpIHtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZS5oYXNzVG9rZW5zID0gSlNPTi5zdHJpbmdpZnkodG9rZW5zKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIHdyaXRlIGZhaWxlZCwgaWdub3JlIGl0LiBIYXBwZW5zIGlmIHN0b3JhZ2UgaXMgZnVsbCBvciBwcml2YXRlIG1vZGUuXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVXcml0ZSgpIHtcbiAgdG9rZW5DYWNoZS53cml0ZUVuYWJsZWQgPSB0cnVlO1xuICBpZiAodG9rZW5DYWNoZS50b2tlbnMpIHtcbiAgICBzYXZlVG9rZW5zKHRva2VuQ2FjaGUudG9rZW5zKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRva2VucygpIHtcbiAgaWYgKHRva2VuQ2FjaGUudG9rZW5zID09PSB1bmRlZmluZWQpIHtcbiAgICB0cnkge1xuICAgICAgLy8gRGVsZXRlIHRoZSBvbGQgdG9rZW4gY2FjaGUuXG4gICAgICBkZWxldGUgc3RvcmFnZS50b2tlbnM7XG4gICAgICBjb25zdCB0b2tlbnMgPSBzdG9yYWdlLmhhc3NUb2tlbnM7XG4gICAgICBpZiAodG9rZW5zKSB7XG4gICAgICAgIHRva2VuQ2FjaGUudG9rZW5zID0gSlNPTi5wYXJzZSh0b2tlbnMpO1xuICAgICAgICB0b2tlbkNhY2hlLndyaXRlRW5hYmxlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2tlbkNhY2hlLnRva2VucyA9IG51bGw7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0b2tlbkNhY2hlLnRva2VucyA9IG51bGw7XG4gICAgfVxuICB9XG4gIHJldHVybiB0b2tlbkNhY2hlLnRva2Vucztcbn1cbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoUHJvdmlkZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVkZW50aWFsIHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25lZFBhdGgge1xuICBwYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNzVXJsID0gYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9YDtcblxuZXhwb3J0IGNvbnN0IGdldFNpZ25lZFBhdGggPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHBhdGg6IHN0cmluZ1xuKTogUHJvbWlzZTxTaWduZWRQYXRoPiA9PiBoYXNzLmNhbGxXUyh7IHR5cGU6IFwiYXV0aC9zaWduX3BhdGhcIiwgcGF0aCB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXV0aFByb3ZpZGVycyA9ICgpID0+XG4gIGZldGNoKFwiL2F1dGgvcHJvdmlkZXJzXCIsIHtcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICB9KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VDb25maWcge1xuICB0aXRsZT86IHN0cmluZztcbiAgdmlld3M6IExvdmVsYWNlVmlld0NvbmZpZ1tdO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICByZXNvdXJjZXM/OiBBcnJheTx7IHR5cGU6IFwiY3NzXCIgfCBcImpzXCIgfCBcIm1vZHVsZVwiIHwgXCJodG1sXCI7IHVybDogc3RyaW5nIH0+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlVmlld0NvbmZpZyB7XG4gIGluZGV4PzogbnVtYmVyO1xuICB0aXRsZT86IHN0cmluZztcbiAgYmFkZ2VzPzogc3RyaW5nW107XG4gIGNhcmRzPzogTG92ZWxhY2VDYXJkQ29uZmlnW107XG4gIHBhdGg/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIHRoZW1lPzogc3RyaW5nO1xuICBwYW5lbD86IGJvb2xlYW47XG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VDYXJkQ29uZmlnIHtcbiAgaW5kZXg/OiBudW1iZXI7XG4gIHZpZXdfaW5kZXg/OiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvZ2dsZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJ0b2dnbGVcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxsU2VydmljZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJjYWxsLXNlcnZpY2VcIjtcbiAgc2VydmljZTogc3RyaW5nO1xuICBzZXJ2aWNlX2RhdGE/OiB7XG4gICAgZW50aXR5X2lkPzogc3RyaW5nIHwgW3N0cmluZ107XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcIm5hdmlnYXRlXCI7XG4gIG5hdmlnYXRpb25fcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vcmVJbmZvQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcIm1vcmUtaW5mb1wiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IHR5cGUgQWN0aW9uQ29uZmlnID1cbiAgfCBUb2dnbGVBY3Rpb25Db25maWdcbiAgfCBDYWxsU2VydmljZUFjdGlvbkNvbmZpZ1xuICB8IE5hdmlnYXRlQWN0aW9uQ29uZmlnXG4gIHwgTW9yZUluZm9BY3Rpb25Db25maWdcbiAgfCBOb0FjdGlvbkNvbmZpZztcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29uZmlnID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBmb3JjZTogYm9vbGVhblxuKTogUHJvbWlzZTxMb3ZlbGFjZUNvbmZpZz4gPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvY29uZmlnXCIsXG4gICAgZm9yY2UsXG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2F2ZUNvbmZpZyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgY29uZmlnOiBMb3ZlbGFjZUNvbmZpZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9jb25maWcvc2F2ZVwiLFxuICAgIGNvbmZpZyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVMb3ZlbGFjZVVwZGF0ZXMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoKSA9PiB2b2lkXG4pID0+IGNvbm4uc3Vic2NyaWJlRXZlbnRzKG9uQ2hhbmdlLCBcImxvdmVsYWNlX3VwZGF0ZWRcIik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93V2l0aExvdmVsYWNlUHJvbSBleHRlbmRzIFdpbmRvdyB7XG4gIGxsQ29uZlByb20/OiBQcm9taXNlPExvdmVsYWNlQ29uZmlnPjtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUNvbGxlY3Rpb24sIENvbm5lY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBQYW5lbHMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgZmV0Y2hQYW5lbHMgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiZ2V0X3BhbmVsc1wiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlVXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgKCkgPT4gZmV0Y2hQYW5lbHMoY29ubikudGhlbigocGFuZWxzKSA9PiBzdG9yZS5zZXRTdGF0ZShwYW5lbHMsIHRydWUpKSxcbiAgICBcInBhbmVsc191cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZVBhbmVscyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChwYW5lbHM6IFBhbmVscykgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPFBhbmVscz4oXG4gICAgXCJfcG5sXCIsXG4gICAgZmV0Y2hQYW5lbHMsXG4gICAgc3Vic2NyaWJlVXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgVGhlbWVzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IGZldGNoVGhlbWVzID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImZyb250ZW5kL2dldF90aGVtZXNcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIChldmVudCkgPT4gc3RvcmUuc2V0U3RhdGUoZXZlbnQuZGF0YSwgdHJ1ZSksXG4gICAgXCJ0aGVtZXNfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVUaGVtZXMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAodGhlbWVzOiBUaGVtZXMpID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxUaGVtZXM+KFxuICAgIFwiX3RobVwiLFxuICAgIGZldGNoVGhlbWVzLFxuICAgIHN1YnNjcmliZVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHtcbiAgZ2V0VXNlcixcbiAgQ29ubmVjdGlvbixcbiAgZ2V0Q29sbGVjdGlvbixcbn0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHVzZXJDb2xsZWN0aW9uID0gKGNvbm46IENvbm5lY3Rpb24pID0+XG4gIGdldENvbGxlY3Rpb24oXG4gICAgY29ubixcbiAgICBcIl91c3JcIixcbiAgICAoKSA9PiBnZXRVc2VyKGNvbm4pIGFzIFByb21pc2U8Q3VycmVudFVzZXI+LFxuICAgIHVuZGVmaW5lZFxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlVXNlciA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6ICh1c2VyOiBDdXJyZW50VXNlcikgPT4gdm9pZFxuKSA9PiB1c2VyQ29sbGVjdGlvbihjb25uKS5zdWJzY3JpYmUob25DaGFuZ2UpO1xuIiwiaW1wb3J0IHtcbiAgZ2V0QXV0aCxcbiAgY3JlYXRlQ29ubmVjdGlvbixcbiAgc3Vic2NyaWJlQ29uZmlnLFxuICBzdWJzY3JpYmVFbnRpdGllcyxcbiAgc3Vic2NyaWJlU2VydmljZXMsXG4gIEVSUl9JTlZBTElEX0FVVEgsXG4gIEF1dGgsXG4gIENvbm5lY3Rpb24sXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IHsgbG9hZFRva2Vucywgc2F2ZVRva2VucyB9IGZyb20gXCIuLi9jb21tb24vYXV0aC90b2tlbl9zdG9yYWdlXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVQYW5lbHMgfSBmcm9tIFwiLi4vZGF0YS93cy1wYW5lbHNcIjtcbmltcG9ydCB7IHN1YnNjcmliZVRoZW1lcyB9IGZyb20gXCIuLi9kYXRhL3dzLXRoZW1lc1wiO1xuaW1wb3J0IHsgc3Vic2NyaWJlVXNlciB9IGZyb20gXCIuLi9kYXRhL3dzLXVzZXJcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGhhc3NVcmwgfSBmcm9tIFwiLi4vZGF0YS9hdXRoXCI7XG5pbXBvcnQgeyBmZXRjaENvbmZpZywgV2luZG93V2l0aExvdmVsYWNlUHJvbSB9IGZyb20gXCIuLi9kYXRhL2xvdmVsYWNlXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgaGFzc0Nvbm5lY3Rpb246IFByb21pc2U8eyBhdXRoOiBBdXRoOyBjb25uOiBDb25uZWN0aW9uIH0+O1xuICB9XG59XG5cbmNvbnN0IGlzRXh0ZXJuYWwgPSBsb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoXCJleHRlcm5hbF9hdXRoPTFcIik7XG5cbmNvbnN0IGF1dGhQcm9tID0gaXNFeHRlcm5hbFxuICA/ICgpID0+XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJleHRlcm5hbF9hdXRoXCIgKi8gXCIuLi9leHRlcm5hbF9hcHAvZXh0ZXJuYWxfYXV0aFwiKS50aGVuKFxuICAgICAgICAoeyBjcmVhdGVFeHRlcm5hbEF1dGggfSkgPT4gY3JlYXRlRXh0ZXJuYWxBdXRoKGhhc3NVcmwpXG4gICAgICApXG4gIDogKCkgPT5cbiAgICAgIGdldEF1dGgoe1xuICAgICAgICBoYXNzVXJsLFxuICAgICAgICBzYXZlVG9rZW5zLFxuICAgICAgICBsb2FkVG9rZW5zOiAoKSA9PiBQcm9taXNlLnJlc29sdmUobG9hZFRva2VucygpKSxcbiAgICAgIH0pO1xuXG5jb25zdCBjb25uUHJvbSA9IGFzeW5jIChhdXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29ubiA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oeyBhdXRoIH0pO1xuXG4gICAgLy8gQ2xlYXIgdXJsIGlmIHdlIGhhdmUgYmVlbiBhYmxlIHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb25cbiAgICBpZiAobG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKFwiYXV0aF9jYWxsYmFjaz0xXCIpKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCBsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYXV0aCwgY29ubiB9O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyICE9PSBFUlJfSU5WQUxJRF9BVVRIKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIC8vIFdlIGNhbiBnZXQgaW52YWxpZCBhdXRoIGlmIGF1dGggdG9rZW5zIHdlcmUgc3RvcmVkIHRoYXQgYXJlIG5vIGxvbmdlciB2YWxpZFxuICAgIC8vIENsZWFyIHN0b3JlZCB0b2tlbnMuXG4gICAgaWYgKCFpc0V4dGVybmFsKSB7XG4gICAgICBzYXZlVG9rZW5zKG51bGwpO1xuICAgIH1cbiAgICBhdXRoID0gYXdhaXQgYXV0aFByb20oKTtcbiAgICBjb25zdCBjb25uID0gYXdhaXQgY3JlYXRlQ29ubmVjdGlvbih7IGF1dGggfSk7XG4gICAgcmV0dXJuIHsgYXV0aCwgY29ubiB9O1xuICB9XG59O1xuXG5pZiAoX19ERVZfXykge1xuICBwZXJmb3JtYW5jZS5tYXJrKFwiaGFzcy1zdGFydFwiKTtcbn1cbndpbmRvdy5oYXNzQ29ubmVjdGlvbiA9IGF1dGhQcm9tKCkudGhlbihjb25uUHJvbSk7XG5cbi8vIFN0YXJ0IGZldGNoaW5nIHNvbWUgb2YgdGhlIGRhdGEgdGhhdCB3ZSB3aWxsIG5lZWQuXG53aW5kb3cuaGFzc0Nvbm5lY3Rpb24udGhlbigoeyBjb25uIH0pID0+IHtcbiAgY29uc3Qgbm9vcCA9ICgpID0+IHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH07XG4gIHN1YnNjcmliZUVudGl0aWVzKGNvbm4sIG5vb3ApO1xuICBzdWJzY3JpYmVDb25maWcoY29ubiwgbm9vcCk7XG4gIHN1YnNjcmliZVNlcnZpY2VzKGNvbm4sIG5vb3ApO1xuICBzdWJzY3JpYmVQYW5lbHMoY29ubiwgbm9vcCk7XG4gIHN1YnNjcmliZVRoZW1lcyhjb25uLCBub29wKTtcbiAgc3Vic2NyaWJlVXNlcihjb25uLCBub29wKTtcblxuICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiIHx8IGxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvbG92ZWxhY2UvXCIpKSB7XG4gICAgKHdpbmRvdyBhcyBXaW5kb3dXaXRoTG92ZWxhY2VQcm9tKS5sbENvbmZQcm9tID0gZmV0Y2hDb25maWcoY29ubiwgZmFsc2UpO1xuICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZSkgPT4ge1xuICBjb25zdCBob21lQXNzaXN0YW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhvbWUtYXNzaXN0YW50XCIpIGFzIGFueTtcbiAgaWYgKFxuICAgIGhvbWVBc3Npc3RhbnQgJiZcbiAgICBob21lQXNzaXN0YW50Lmhhc3MgJiZcbiAgICAoaG9tZUFzc2lzdGFudC5oYXNzIGFzIEhvbWVBc3Npc3RhbnQpLmNhbGxTZXJ2aWNlXG4gICkge1xuICAgIGhvbWVBc3Npc3RhbnQuaGFzcy5jYWxsU2VydmljZShcInN5c3RlbV9sb2dcIiwgXCJ3cml0ZVwiLCB7XG4gICAgICBsb2dnZXI6IGBmcm9udGVuZC4ke1xuICAgICAgICBfX0RFVl9fID8gXCJqc19kZXZcIiA6IFwianNcIlxuICAgICAgfS4ke19fQlVJTERfX30uJHtfX1ZFUlNJT05fXy5yZXBsYWNlKFwiLlwiLCBcIlwiKX1gLFxuICAgICAgbWVzc2FnZTogYCR7ZS5maWxlbmFtZX06JHtlLmxpbmVub306JHtlLmNvbG5vfSAke2UubWVzc2FnZX1gLFxuICAgIH0pO1xuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2tYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQzNqQkE7QUN3RUE7QUFFQTtBQUFBO0FBREE7QUM5REE7QUFDQTtBQURBO0FDaUVBO0FBY0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFPQTtBQUVBO0FBSUE7QUFBQTtBQUtBO0FBQUE7QUFJQTtBQUdBO0FBS0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUlBO0FBR0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBWUE7QUFBQTtBRjNHQTtBQUVBO0FBREE7QUFDQTtBRTJHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUYzRkE7QUFEQTtBQUNBO0FFb0dBO0FBS0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFDQTtBQVNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQU1BO0FBRUE7QUFFQTtBQVFBO0FBQ0E7QUFEQTtBQU1BO0FBVUE7QUFDQTtBQURBO0FBTUE7QUFsQ0E7QUFzQ0E7QUFXQTtBQUNBO0FBREE7QUFLQTtBRnBOQTtBQUNBO0FBQ0E7QUFBQTtBRDFGQTtBQzBGQTtBQUhBO0FFc05BO0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFBQTtBQUhBO0FBS0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBSGxVQTtBR3VVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUM5SUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtREE7QUFJQTtBQXhLQTtBQW5CQTtBQUlBO0FBaUJBO0FBMEtBO0FBSUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQURBO0FBQUE7QUF0QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBdEJBO0FDN05BO0FBR0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUR1TkE7QUFEQTtBQUNBO0FBR0E7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBbkNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBRDBIQTtBQ2xQQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQVVBO0FBR0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUR5TkE7QUNuU0E7QUFDQTtBRGtTQTtBQ2hTQTtBQUNBO0FBQ0E7QUF3RUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQWNBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFOQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBRTVLQTtBQ05BO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QURBQTtBQUNBO0FBQUE7QUFlQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBR0E7QUFDQTtBQURBO0FBU0E7QUFBQTtBQUVBO0FBQ0E7QUFTQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFpQkE7QUFBQTtBQUNBO0FBcEVBO0FBR0E7QUFIQTtBQUNBO0FBUUE7QUE2REE7QUFBQTtBQUFBO0FBN0NBO0FDdkJBO0FBTEE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBVUE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUtBO0FBSUE7QUFRQTtBQUdBO0FBS0E7QUFBQTtBQUlBO0FBTUE7QUFBQTtBQUVBO0FBQUE7QUF2Q0E7QUE2Q0E7QURqRUE7QUM0RUE7QUFHQTtBRC9FQTtBRWhCQTtBUE9BO0FBREE7QUFDQTtBS1NBO0FFYkE7QVBnQkE7QUFEQTtBQUNBO0FLSEE7QUVWQTtBUE9BO0FBREE7QUFDQTtBS0dBO0FFUEE7QVBnQkE7QUFEQTtBQUNBO0FLVEE7QUVBQTtBUHVCQTtBQUdBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QU96QkE7QUFBQTtBQUNBO0FDWkE7QUFFQTtBQUtBO0FBREE7QUFLQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWtCQTtBQUxBO0FBTUE7QUFBQTtBQUNBO0FDdkJBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWtCQTtBQUxBO0FBTUE7QUFBQTtBQW5CQTtBQ2xDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBRDJCQTtBQ3hCQTtBQUVBO0FBMUJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQWdCQTtBQUFBO0FBQ0E7QURxQkE7QUNsQkE7QUFDQTtBRGlCQTtBQ2JBO0FBQ0E7QURZQTtBRW5DQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUY0QkE7QUV2Q0E7QUFBQTtBVkVBO0FBRUE7QUFBQTtBQVNBO0FBQUE7QUFHQTtBQUFBO0FBWkE7QUFrQkE7QUFrR0E7QUF6RkE7QUFBQTtBQUFBO0FBV0E7QUFTQTtBQVFBO0FBQUE7QUFLQTtBQUVBO0FGakZBO0FFOENBO0FBd0NBO0FBQUE7QUFBQTtBQUtBO0FEdkZBO0FBQ0E7QUFGQTtBQ3dGQTtBQUNBO0FBREE7QUFBQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqREE7QUFxREE7QUFBQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQWJBO0FBQ0E7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFPQTtBQUdBO0FBQUE7QVU3SEE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFEQTs7Ozs7Ozs7Ozs7O0FDdUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFGQTtBQUpBO0FBU0E7QUFBQTtBQUtBO0FBQ0E7QUFGQTtBQUpBO0FBU0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQURBO0FBREE7QUFDQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFEQTtBQURBO0FBQ0E7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUZBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBSUE7QUFBQTtBQUpBO0FBUUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBO0FBRUE7QUFDQSxnTUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBSEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFBQTtBQUNBO0FBREE7QUFtQkE7QUFuQkE7QUFBQTtBQW9CQTtBQUFBO0FBQ0E7QUFyQkE7QUFvQkE7QUFwQkE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUF0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
