(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    169: function(e, t, s) {
      "use strict";
      s.r(t);
      var n = s(12);
      const a = (e) => {
          window.addEventListener("connection-status", (t) =>
            e.fireMessage({
              type: "connection-status",
              payload: { event: t.detail },
            })
          );
        },
        i = (e) =>
          window.addEventListener("haptic", (t) =>
            e.fireMessage({ type: "haptic", payload: { hapticType: t.detail } })
          ),
        r = "externalBus";
      class o {
        constructor() {
          (this.commands = {}), (this.cache = {}), (this.msgId = 0);
        }
        attach() {
          a(this), i(this), (window[r] = (e) => this.receiveMessage(e));
        }
        sendMessage(e) {
          const t = ++this.msgId;
          return (
            (e.id = t),
            this.fireMessage(e),
            new Promise((e, s) => {
              this.commands[t] = { resolve: e, reject: s };
            })
          );
        }
        fireMessage(e) {
          e.id || (e.id = ++this.msgId), this._sendExternal(e);
        }
        receiveMessage(e) {
          const t = this.commands[e.id];
          t
            ? "result" === e.type &&
              (e.success ? t.resolve(e.result) : t.reject(e.error))
            : console.warn("Received unknown msg ID", e.id);
        }
        _sendExternal(e) {
          window.externalApp
            ? window.externalApp.externalBus(JSON.stringify(e))
            : window.webkit.messageHandlers.externalBus.postMessage(e);
        }
      }
      s.d(t, "createExternalAuth", function() {
        return l;
      });
      const w = "externalAuthSetToken",
        c = "externalAuthRevokeToken";
      if (!window.externalApp && !window.webkit)
        throw new Error(
          "External auth requires either externalApp or webkit defined on Window object."
        );
      class d extends n.a {
        constructor(e) {
          super({
            hassUrl: e,
            clientId: "",
            refresh_token: "",
            access_token: "",
            expires_in: 0,
            expires: 0,
          }),
            (this.external = void 0);
        }
        async refreshAccessToken() {
          const e = { callback: w };
          window.externalApp
            ? window.externalApp.getExternalAuth(JSON.stringify(e))
            : window.webkit.messageHandlers.getExternalAuth.postMessage(e);
          const t = await new Promise((e, t) => {
            window[w] = (s, n) => (s ? e(n) : t(n));
          });
          (this.data.access_token = t.access_token),
            (this.data.expires = 1e3 * t.expires_in + Date.now());
        }
        async revoke() {
          const e = { callback: c };
          window.externalApp
            ? window.externalApp.revokeExternalAuth(JSON.stringify(e))
            : window.webkit.messageHandlers.revokeExternalAuth.postMessage(e),
            await new Promise((e, t) => {
              window[c] = (s, n) => (s ? e(n) : t(n));
            });
        }
      }
      const l = (e) => {
        const t = new d(e);
        return (
          ((window.externalApp && window.externalApp.externalBus) ||
            (window.webkit && window.webkit.messageHandlers.externalBus)) &&
            ((t.external = new o()), t.external.attach()),
          t
        );
      };
    },
  },
]);
//# sourceMappingURL=chunk.5742b083f514e7dd221a.js.map
