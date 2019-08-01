(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["external_auth"],
  {
    /***/ "./src/external_app/external_auth.ts":
      /*!*******************************************!*\
  !*** ./src/external_app/external_auth.ts ***!
  \*******************************************/
      /*! exports provided: createExternalAuth */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createExternalAuth",
          function() {
            return createExternalAuth;
          }
        );
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );
        /* harmony import */ var _external_messaging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./external_messaging */ "./src/external_app/external_messaging.ts"
        );
        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

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

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        /**
         * Auth class that connects to a native app for authentication.
         */

        var CALLBACK_SET_TOKEN = "externalAuthSetToken";
        var CALLBACK_REVOKE_TOKEN = "externalAuthRevokeToken";

        if (!window.externalApp && !window.webkit) {
          throw new Error(
            "External auth requires either externalApp or webkit defined on Window object."
          );
        }

        var ExternalAuth =
          /*#__PURE__*/
          (function(_Auth) {
            _inherits(ExternalAuth, _Auth);

            function ExternalAuth(hassUrl) {
              var _this;

              _classCallCheck(this, ExternalAuth);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(ExternalAuth).call(this, {
                  hassUrl: hassUrl,
                  clientId: "",
                  refresh_token: "",
                  access_token: "",
                  expires_in: 0,
                  // This will trigger connection to do a refresh right away
                  expires: 0,
                })
              );
              _this.external = void 0;
              return _this;
            }

            _createClass(ExternalAuth, [
              {
                key: "refreshAccessToken",
                value: (function() {
                  var _refreshAccessToken = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee() {
                      var callbackPayload, tokens;
                      return regeneratorRuntime.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                callbackPayload = {
                                  callback: CALLBACK_SET_TOKEN,
                                };

                                if (window.externalApp) {
                                  window.externalApp.getExternalAuth(
                                    JSON.stringify(callbackPayload)
                                  );
                                } else {
                                  window.webkit.messageHandlers.getExternalAuth.postMessage(
                                    callbackPayload
                                  );
                                }

                                _context.next = 4;
                                return new Promise(function(resolve, reject) {
                                  window[CALLBACK_SET_TOKEN] = function(
                                    success,
                                    data
                                  ) {
                                    return success
                                      ? resolve(data)
                                      : reject(data);
                                  };
                                });

                              case 4:
                                tokens = _context.sent;
                                this.data.access_token = tokens.access_token;
                                this.data.expires =
                                  tokens.expires_in * 1000 + Date.now();

                              case 7:
                              case "end":
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this
                      );
                    })
                  );

                  function refreshAccessToken() {
                    return _refreshAccessToken.apply(this, arguments);
                  }

                  return refreshAccessToken;
                })(),
              },
              {
                key: "revoke",
                value: (function() {
                  var _revoke = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee2() {
                      var callbackPayload;
                      return regeneratorRuntime.wrap(function _callee2$(
                        _context2
                      ) {
                        while (1) {
                          switch ((_context2.prev = _context2.next)) {
                            case 0:
                              callbackPayload = {
                                callback: CALLBACK_REVOKE_TOKEN,
                              };

                              if (window.externalApp) {
                                window.externalApp.revokeExternalAuth(
                                  JSON.stringify(callbackPayload)
                                );
                              } else {
                                window.webkit.messageHandlers.revokeExternalAuth.postMessage(
                                  callbackPayload
                                );
                              }

                              _context2.next = 4;
                              return new Promise(function(resolve, reject) {
                                window[CALLBACK_REVOKE_TOKEN] = function(
                                  success,
                                  data
                                ) {
                                  return success ? resolve(data) : reject(data);
                                };
                              });

                            case 4:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      },
                      _callee2);
                    })
                  );

                  function revoke() {
                    return _revoke.apply(this, arguments);
                  }

                  return revoke;
                })(),
              },
            ]);

            return ExternalAuth;
          })(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["Auth"]);

        var createExternalAuth = function createExternalAuth(hassUrl) {
          var auth = new ExternalAuth(hassUrl);

          if (
            (window.externalApp && window.externalApp.externalBus) ||
            (window.webkit && window.webkit.messageHandlers.externalBus)
          ) {
            auth.external = new _external_messaging__WEBPACK_IMPORTED_MODULE_1__[
              "ExternalMessaging"
            ]();
            auth.external.attach();
          }

          return auth;
        };

        /***/
      },

    /***/ "./src/external_app/external_events_forwarder.ts":
      /*!*******************************************************!*\
  !*** ./src/external_app/external_events_forwarder.ts ***!
  \*******************************************************/
      /*! exports provided: externalForwardConnectionEvents, externalForwardHaptics */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "externalForwardConnectionEvents",
          function() {
            return externalForwardConnectionEvents;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "externalForwardHaptics",
          function() {
            return externalForwardHaptics;
          }
        );
        var externalForwardConnectionEvents = function externalForwardConnectionEvents(
          bus
        ) {
          window.addEventListener("connection-status", function(ev) {
            return bus.fireMessage({
              type: "connection-status",
              payload: {
                event: ev.detail,
              },
            });
          });
        };
        var externalForwardHaptics = function externalForwardHaptics(bus) {
          return window.addEventListener("haptic", function(ev) {
            return bus.fireMessage({
              type: "haptic",
              payload: {
                hapticType: ev.detail,
              },
            });
          });
        };

        /***/
      },

    /***/ "./src/external_app/external_messaging.ts":
      /*!************************************************!*\
  !*** ./src/external_app/external_messaging.ts ***!
  \************************************************/
      /*! exports provided: ExternalMessaging */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ExternalMessaging",
          function() {
            return ExternalMessaging;
          }
        );
        /* harmony import */ var _external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./external_events_forwarder */ "./src/external_app/external_events_forwarder.ts"
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var CALLBACK_EXTERNAL_BUS = "externalBus";
        var ExternalMessaging =
          /*#__PURE__*/
          (function() {
            function ExternalMessaging() {
              _classCallCheck(this, ExternalMessaging);

              this.commands = {};
              this.cache = {};
              this.msgId = 0;
            }

            _createClass(ExternalMessaging, [
              {
                key: "attach",
                value: function attach() {
                  var _this = this;

                  Object(
                    _external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__[
                      "externalForwardConnectionEvents"
                    ]
                  )(this);
                  Object(
                    _external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__[
                      "externalForwardHaptics"
                    ]
                  )(this);

                  window[CALLBACK_EXTERNAL_BUS] = function(msg) {
                    return _this.receiveMessage(msg);
                  };
                },
                /**
                 * Send message to external app that expects a response.
                 * @param msg message to send
                 */
              },
              {
                key: "sendMessage",
                value: function sendMessage(msg) {
                  var _this2 = this;

                  var msgId = ++this.msgId;
                  msg.id = msgId;
                  this.fireMessage(msg);
                  return new Promise(function(resolve, reject) {
                    _this2.commands[msgId] = {
                      resolve: resolve,
                      reject: reject,
                    };
                  });
                },
                /**
                 * Send message to external app without expecting a response.
                 * @param msg message to send
                 */
              },
              {
                key: "fireMessage",
                value: function fireMessage(msg) {
                  if (!msg.id) {
                    msg.id = ++this.msgId;
                  }

                  this._sendExternal(msg);
                },
              },
              {
                key: "receiveMessage",
                value: function receiveMessage(msg) {
                  if (true) {
                    // tslint:disable-next-line: no-console
                    console.log("Receiving message from external app", msg);
                  }

                  var pendingCmd = this.commands[msg.id];

                  if (!pendingCmd) {
                    // tslint:disable-next-line: no-console
                    console.warn("Received unknown msg ID", msg.id);
                    return;
                  }

                  if (msg.type === "result") {
                    if (msg.success) {
                      pendingCmd.resolve(msg.result);
                    } else {
                      pendingCmd.reject(msg.error);
                    }
                  }
                },
              },
              {
                key: "_sendExternal",
                value: function _sendExternal(msg) {
                  if (true) {
                    // tslint:disable-next-line: no-console
                    console.log("Sending message to external app", msg);
                  }

                  if (window.externalApp) {
                    window.externalApp.externalBus(JSON.stringify(msg));
                  } else {
                    window.webkit.messageHandlers.externalBus.postMessage(msg);
                  }
                },
              },
            ]);

            return ExternalMessaging;
          })();

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWxfYXV0aC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9leHRlcm5hbF9hcHAvZXh0ZXJuYWxfYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZXJuYWxfYXBwL2V4dGVybmFsX2V2ZW50c19mb3J3YXJkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dGVybmFsX2FwcC9leHRlcm5hbF9tZXNzYWdpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBdXRoIGNsYXNzIHRoYXQgY29ubmVjdHMgdG8gYSBuYXRpdmUgYXBwIGZvciBhdXRoZW50aWNhdGlvbi5cbiAqL1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEV4dGVybmFsTWVzc2FnaW5nLCBJbnRlcm5hbE1lc3NhZ2UgfSBmcm9tIFwiLi9leHRlcm5hbF9tZXNzYWdpbmdcIjtcblxuY29uc3QgQ0FMTEJBQ0tfU0VUX1RPS0VOID0gXCJleHRlcm5hbEF1dGhTZXRUb2tlblwiO1xuY29uc3QgQ0FMTEJBQ0tfUkVWT0tFX1RPS0VOID0gXCJleHRlcm5hbEF1dGhSZXZva2VUb2tlblwiO1xuXG5pbnRlcmZhY2UgQmFzZVBheWxvYWQge1xuICBjYWxsYmFjazogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUmVmcmVzaFRva2VuUmVzcG9uc2Uge1xuICBhY2Nlc3NfdG9rZW46IHN0cmluZztcbiAgZXhwaXJlc19pbjogbnVtYmVyO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGV4dGVybmFsQXBwPzoge1xuICAgICAgZ2V0RXh0ZXJuYWxBdXRoKHBheWxvYWQ6IHN0cmluZyk7XG4gICAgICByZXZva2VFeHRlcm5hbEF1dGgocGF5bG9hZDogc3RyaW5nKTtcbiAgICAgIGV4dGVybmFsQnVzKHBheWxvYWQ6IHN0cmluZyk7XG4gICAgfTtcbiAgICB3ZWJraXQ/OiB7XG4gICAgICBtZXNzYWdlSGFuZGxlcnM6IHtcbiAgICAgICAgZ2V0RXh0ZXJuYWxBdXRoOiB7XG4gICAgICAgICAgcG9zdE1lc3NhZ2UocGF5bG9hZDogQmFzZVBheWxvYWQpO1xuICAgICAgICB9O1xuICAgICAgICByZXZva2VFeHRlcm5hbEF1dGg6IHtcbiAgICAgICAgICBwb3N0TWVzc2FnZShwYXlsb2FkOiBCYXNlUGF5bG9hZCk7XG4gICAgICAgIH07XG4gICAgICAgIGV4dGVybmFsQnVzOiB7XG4gICAgICAgICAgcG9zdE1lc3NhZ2UocGF5bG9hZDogSW50ZXJuYWxNZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxufVxuXG5pZiAoIXdpbmRvdy5leHRlcm5hbEFwcCAmJiAhd2luZG93LndlYmtpdCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJFeHRlcm5hbCBhdXRoIHJlcXVpcmVzIGVpdGhlciBleHRlcm5hbEFwcCBvciB3ZWJraXQgZGVmaW5lZCBvbiBXaW5kb3cgb2JqZWN0LlwiXG4gICk7XG59XG5cbmNsYXNzIEV4dGVybmFsQXV0aCBleHRlbmRzIEF1dGgge1xuICBwdWJsaWMgZXh0ZXJuYWw/OiBFeHRlcm5hbE1lc3NhZ2luZztcblxuICBjb25zdHJ1Y3RvcihoYXNzVXJsOiBzdHJpbmcpIHtcbiAgICBzdXBlcih7XG4gICAgICBoYXNzVXJsLFxuICAgICAgY2xpZW50SWQ6IFwiXCIsXG4gICAgICByZWZyZXNoX3Rva2VuOiBcIlwiLFxuICAgICAgYWNjZXNzX3Rva2VuOiBcIlwiLFxuICAgICAgZXhwaXJlc19pbjogMCxcbiAgICAgIC8vIFRoaXMgd2lsbCB0cmlnZ2VyIGNvbm5lY3Rpb24gdG8gZG8gYSByZWZyZXNoIHJpZ2h0IGF3YXlcbiAgICAgIGV4cGlyZXM6IDAsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVmcmVzaEFjY2Vzc1Rva2VuKCkge1xuICAgIGNvbnN0IGNhbGxiYWNrUGF5bG9hZCA9IHsgY2FsbGJhY2s6IENBTExCQUNLX1NFVF9UT0tFTiB9O1xuXG4gICAgaWYgKHdpbmRvdy5leHRlcm5hbEFwcCkge1xuICAgICAgd2luZG93LmV4dGVybmFsQXBwLmdldEV4dGVybmFsQXV0aChKU09OLnN0cmluZ2lmeShjYWxsYmFja1BheWxvYWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LndlYmtpdCEubWVzc2FnZUhhbmRsZXJzLmdldEV4dGVybmFsQXV0aC5wb3N0TWVzc2FnZShcbiAgICAgICAgY2FsbGJhY2tQYXlsb2FkXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHRva2VucyA9IGF3YWl0IG5ldyBQcm9taXNlPFJlZnJlc2hUb2tlblJlc3BvbnNlPihcbiAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2luZG93W0NBTExCQUNLX1NFVF9UT0tFTl0gPSAoc3VjY2VzcywgZGF0YSkgPT5cbiAgICAgICAgICBzdWNjZXNzID8gcmVzb2x2ZShkYXRhKSA6IHJlamVjdChkYXRhKTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5kYXRhLmFjY2Vzc190b2tlbiA9IHRva2Vucy5hY2Nlc3NfdG9rZW47XG4gICAgdGhpcy5kYXRhLmV4cGlyZXMgPSB0b2tlbnMuZXhwaXJlc19pbiAqIDEwMDAgKyBEYXRlLm5vdygpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHJldm9rZSgpIHtcbiAgICBjb25zdCBjYWxsYmFja1BheWxvYWQgPSB7IGNhbGxiYWNrOiBDQUxMQkFDS19SRVZPS0VfVE9LRU4gfTtcblxuICAgIGlmICh3aW5kb3cuZXh0ZXJuYWxBcHApIHtcbiAgICAgIHdpbmRvdy5leHRlcm5hbEFwcC5yZXZva2VFeHRlcm5hbEF1dGgoSlNPTi5zdHJpbmdpZnkoY2FsbGJhY2tQYXlsb2FkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy53ZWJraXQhLm1lc3NhZ2VIYW5kbGVycy5yZXZva2VFeHRlcm5hbEF1dGgucG9zdE1lc3NhZ2UoXG4gICAgICAgIGNhbGxiYWNrUGF5bG9hZFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3aW5kb3dbQ0FMTEJBQ0tfUkVWT0tFX1RPS0VOXSA9IChzdWNjZXNzLCBkYXRhKSA9PlxuICAgICAgICBzdWNjZXNzID8gcmVzb2x2ZShkYXRhKSA6IHJlamVjdChkYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRXh0ZXJuYWxBdXRoID0gKGhhc3NVcmw6IHN0cmluZykgPT4ge1xuICBjb25zdCBhdXRoID0gbmV3IEV4dGVybmFsQXV0aChoYXNzVXJsKTtcbiAgaWYgKFxuICAgICh3aW5kb3cuZXh0ZXJuYWxBcHAgJiYgd2luZG93LmV4dGVybmFsQXBwLmV4dGVybmFsQnVzKSB8fFxuICAgICh3aW5kb3cud2Via2l0ICYmIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLmV4dGVybmFsQnVzKVxuICApIHtcbiAgICBhdXRoLmV4dGVybmFsID0gbmV3IEV4dGVybmFsTWVzc2FnaW5nKCk7XG4gICAgYXV0aC5leHRlcm5hbC5hdHRhY2goKTtcbiAgfVxuICByZXR1cm4gYXV0aDtcbn07XG4iLCJpbXBvcnQgeyBFeHRlcm5hbE1lc3NhZ2luZyB9IGZyb20gXCIuL2V4dGVybmFsX21lc3NhZ2luZ1wiO1xuXG5leHBvcnQgY29uc3QgZXh0ZXJuYWxGb3J3YXJkQ29ubmVjdGlvbkV2ZW50cyA9IChidXM6IEV4dGVybmFsTWVzc2FnaW5nKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY29ubmVjdGlvbi1zdGF0dXNcIiwgKGV2KSA9PlxuICAgIGJ1cy5maXJlTWVzc2FnZSh7XG4gICAgICB0eXBlOiBcImNvbm5lY3Rpb24tc3RhdHVzXCIsXG4gICAgICBwYXlsb2FkOiB7IGV2ZW50OiBldi5kZXRhaWwgfSxcbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVybmFsRm9yd2FyZEhhcHRpY3MgPSAoYnVzOiBFeHRlcm5hbE1lc3NhZ2luZykgPT5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXB0aWNcIiwgKGV2KSA9PlxuICAgIGJ1cy5maXJlTWVzc2FnZSh7IHR5cGU6IFwiaGFwdGljXCIsIHBheWxvYWQ6IHsgaGFwdGljVHlwZTogZXYuZGV0YWlsIH0gfSlcbiAgKTtcbiIsImltcG9ydCB7XG4gIGV4dGVybmFsRm9yd2FyZENvbm5lY3Rpb25FdmVudHMsXG4gIGV4dGVybmFsRm9yd2FyZEhhcHRpY3MsXG59IGZyb20gXCIuL2V4dGVybmFsX2V2ZW50c19mb3J3YXJkZXJcIjtcblxuY29uc3QgQ0FMTEJBQ0tfRVhURVJOQUxfQlVTID0gXCJleHRlcm5hbEJ1c1wiO1xuXG5pbnRlcmZhY2UgQ29tbWFuZEluRmxpZ2h0IHtcbiAgcmVzb2x2ZTogKGRhdGE6IGFueSkgPT4gdm9pZDtcbiAgcmVqZWN0OiAoZXJyOiBFeHRlcm5hbEVycm9yKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVybmFsTWVzc2FnZSB7XG4gIGlkPzogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG4gIHBheWxvYWQ/OiB1bmtub3duO1xufVxuXG5pbnRlcmZhY2UgRXh0ZXJuYWxFcnJvciB7XG4gIGNvZGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRXh0ZXJuYWxNZXNzYWdlUmVzdWx0IHtcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogXCJyZXN1bHRcIjtcbiAgc3VjY2VzczogdHJ1ZTtcbiAgcmVzdWx0OiB1bmtub3duO1xufVxuXG5pbnRlcmZhY2UgRXh0ZXJuYWxNZXNzYWdlUmVzdWx0RXJyb3Ige1xuICBpZDogbnVtYmVyO1xuICB0eXBlOiBcInJlc3VsdFwiO1xuICBzdWNjZXNzOiBmYWxzZTtcbiAgZXJyb3I6IEV4dGVybmFsRXJyb3I7XG59XG5cbnR5cGUgRXh0ZXJuYWxNZXNzYWdlID0gRXh0ZXJuYWxNZXNzYWdlUmVzdWx0IHwgRXh0ZXJuYWxNZXNzYWdlUmVzdWx0RXJyb3I7XG5cbmV4cG9ydCBjbGFzcyBFeHRlcm5hbE1lc3NhZ2luZyB7XG4gIHB1YmxpYyBjb21tYW5kczogeyBbbXNnSWQ6IG51bWJlcl06IENvbW1hbmRJbkZsaWdodCB9ID0ge307XG4gIHB1YmxpYyBjYWNoZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBwdWJsaWMgbXNnSWQgPSAwO1xuXG4gIHB1YmxpYyBhdHRhY2goKSB7XG4gICAgZXh0ZXJuYWxGb3J3YXJkQ29ubmVjdGlvbkV2ZW50cyh0aGlzKTtcbiAgICBleHRlcm5hbEZvcndhcmRIYXB0aWNzKHRoaXMpO1xuICAgIHdpbmRvd1tDQUxMQkFDS19FWFRFUk5BTF9CVVNdID0gKG1zZykgPT4gdGhpcy5yZWNlaXZlTWVzc2FnZShtc2cpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgbWVzc2FnZSB0byBleHRlcm5hbCBhcHAgdGhhdCBleHBlY3RzIGEgcmVzcG9uc2UuXG4gICAqIEBwYXJhbSBtc2cgbWVzc2FnZSB0byBzZW5kXG4gICAqL1xuICBwdWJsaWMgc2VuZE1lc3NhZ2U8VD4obXNnOiBJbnRlcm5hbE1lc3NhZ2UpOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCBtc2dJZCA9ICsrdGhpcy5tc2dJZDtcbiAgICBtc2cuaWQgPSBtc2dJZDtcblxuICAgIHRoaXMuZmlyZU1lc3NhZ2UobXNnKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvbW1hbmRzW21zZ0lkXSA9IHsgcmVzb2x2ZSwgcmVqZWN0IH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBtZXNzYWdlIHRvIGV4dGVybmFsIGFwcCB3aXRob3V0IGV4cGVjdGluZyBhIHJlc3BvbnNlLlxuICAgKiBAcGFyYW0gbXNnIG1lc3NhZ2UgdG8gc2VuZFxuICAgKi9cbiAgcHVibGljIGZpcmVNZXNzYWdlKG1zZzogSW50ZXJuYWxNZXNzYWdlKSB7XG4gICAgaWYgKCFtc2cuaWQpIHtcbiAgICAgIG1zZy5pZCA9ICsrdGhpcy5tc2dJZDtcbiAgICB9XG4gICAgdGhpcy5fc2VuZEV4dGVybmFsKG1zZyk7XG4gIH1cblxuICBwdWJsaWMgcmVjZWl2ZU1lc3NhZ2UobXNnOiBFeHRlcm5hbE1lc3NhZ2UpIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmluZyBtZXNzYWdlIGZyb20gZXh0ZXJuYWwgYXBwXCIsIG1zZyk7XG4gICAgfVxuXG4gICAgY29uc3QgcGVuZGluZ0NtZCA9IHRoaXMuY29tbWFuZHNbbXNnLmlkXTtcblxuICAgIGlmICghcGVuZGluZ0NtZCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oYFJlY2VpdmVkIHVua25vd24gbXNnIElEYCwgbXNnLmlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobXNnLnR5cGUgPT09IFwicmVzdWx0XCIpIHtcbiAgICAgIGlmIChtc2cuc3VjY2Vzcykge1xuICAgICAgICBwZW5kaW5nQ21kLnJlc29sdmUobXNnLnJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZW5kaW5nQ21kLnJlamVjdChtc2cuZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfc2VuZEV4dGVybmFsKG1zZzogSW50ZXJuYWxNZXNzYWdlKSB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uc29sZVxuICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIG1lc3NhZ2UgdG8gZXh0ZXJuYWwgYXBwXCIsIG1zZyk7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuZXh0ZXJuYWxBcHApIHtcbiAgICAgIHdpbmRvdy5leHRlcm5hbEFwcC5leHRlcm5hbEJ1cyhKU09OLnN0cmluZ2lmeShtc2cpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LndlYmtpdCEubWVzc2FnZUhhbmRsZXJzLmV4dGVybmFsQnVzLnBvc3RNZXNzYWdlKG1zZyk7XG4gICAgfVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQURBO0FBQUE7QUFVQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBTEE7QUFPQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwREE7QUFDQTtBQXNEQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQU1BO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBS0E7QUFrQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7OztBQVhBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQTFCQTtBQUFBO0FBQUE7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBbkNBO0FBQUE7QUFBQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExREE7QUFBQTtBQUFBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0RUE7QUFDQTtBQURBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
