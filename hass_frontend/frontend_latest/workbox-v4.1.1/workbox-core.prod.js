(this.workbox = this.workbox || {}),
  (this.workbox.core = (function(e) {
    "use strict";
    try {
      self["workbox:core:4.1.1"] && _();
    } catch (e) {}
    const t = (e, ...t) => {
      let n = e;
      return t.length > 0 && (n += ` :: ${JSON.stringify(t)}`), n;
    };
    class n extends Error {
      constructor(e, n) {
        super(t(e, n)), (this.name = e), (this.details = n);
      }
    }
    const s = new Set();
    class r {
      constructor(
        e,
        t,
        { onupgradeneeded: n, onversionchange: s = this.t } = {}
      ) {
        (this.s = e), (this.i = t), (this.o = n), (this.t = s), (this.l = null);
      }
      get db() {
        return this.l;
      }
      async open() {
        if (!this.l)
          return (
            (this.l = await new Promise((e, t) => {
              let n = !1;
              setTimeout(() => {
                (n = !0),
                  t(new Error("The open request was blocked and timed out"));
              }, this.OPEN_TIMEOUT);
              const s = indexedDB.open(this.s, this.i);
              (s.onerror = () => t(s.error)),
                (s.onupgradeneeded = (e) => {
                  n
                    ? (s.transaction.abort(), e.target.result.close())
                    : this.o && this.o(e);
                }),
                (s.onsuccess = ({ target: t }) => {
                  const s = t.result;
                  n
                    ? s.close()
                    : ((s.onversionchange = this.t.bind(this)), e(s));
                });
            })),
            this
          );
      }
      async getKey(e, t) {
        return (await this.getAllKeys(e, t, 1))[0];
      }
      async getAll(e, t, n) {
        return await this.getAllMatching(e, { query: t, count: n });
      }
      async getAllKeys(e, t, n) {
        return (await this.getAllMatching(e, {
          query: t,
          count: n,
          includeKeys: !0,
        })).map(({ key: e }) => e);
      }
      async getAllMatching(
        e,
        {
          index: t,
          query: n = null,
          direction: s = "next",
          count: r,
          includeKeys: a,
        } = {}
      ) {
        return await this.transaction([e], "readonly", (i, c) => {
          const o = i.objectStore(e),
            l = t ? o.index(t) : o,
            u = [];
          l.openCursor(n, s).onsuccess = ({ target: e }) => {
            const t = e.result;
            if (t) {
              const { primaryKey: e, key: n, value: s } = t;
              u.push(a ? { primaryKey: e, key: n, value: s } : s),
                r && u.length >= r ? c(u) : t.continue();
            } else c(u);
          };
        });
      }
      async transaction(e, t, n) {
        return (
          await this.open(),
          await new Promise((s, r) => {
            const a = this.l.transaction(e, t);
            (a.onabort = ({ target: e }) => r(e.error)),
              (a.oncomplete = () => s()),
              n(a, (e) => s(e));
          })
        );
      }
      async u(e, t, n, ...s) {
        return await this.transaction([t], n, (n, r) => {
          n.objectStore(t)[e](...s).onsuccess = ({ target: e }) => {
            r(e.result);
          };
        });
      }
      t() {
        this.close();
      }
      close() {
        this.l && (this.l.close(), (this.l = null));
      }
    }
    r.prototype.OPEN_TIMEOUT = 2e3;
    const a = {
      readonly: ["get", "count", "getKey", "getAll", "getAllKeys"],
      readwrite: ["add", "put", "clear", "delete"],
    };
    for (const [e, t] of Object.entries(a))
      for (const n of t)
        n in IDBObjectStore.prototype &&
          (r.prototype[n] = async function(t, ...s) {
            return await this.u(n, t, e, ...s);
          });
    const i = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: self.registration.scope,
      },
      c = (e) => [i.prefix, e, i.suffix].filter((e) => e.length > 0).join("-"),
      o = {
        updateDetails: (e) => {
          Object.keys(i).forEach((t) => {
            void 0 !== e[t] && (i[t] = e[t]);
          });
        },
        getGoogleAnalyticsName: (e) => e || c(i.googleAnalytics),
        getPrecacheName: (e) => e || c(i.precache),
        getRuntimeName: (e) => e || c(i.runtime),
      },
      l = "cacheDidUpdate",
      u = "cacheWillUpdate",
      h = "cachedResponseWillBeUsed",
      w = "fetchDidFail",
      f = "fetchDidSucceed",
      p = "requestWillFetch",
      d = (e, t) => e.filter((e) => t in e),
      g = (e) => {
        const t = new URL(e, location);
        return t.origin === location.origin ? t.pathname : t.href;
      },
      y = async ({
        cacheName: e,
        request: t,
        event: n,
        matchOptions: s,
        plugins: r = [],
      }) => {
        const a = await caches.open(e);
        let i = await a.match(t, s);
        for (const a of r)
          h in a &&
            (i = await a[h].call(a, {
              cacheName: e,
              request: t,
              event: n,
              matchOptions: s,
              cachedResponse: i,
            }));
        return i;
      },
      m = async ({ request: e, response: t, event: n, plugins: s }) => {
        let r = t,
          a = !1;
        for (let t of s)
          if (
            u in t &&
            ((a = !0),
            !(r = await t[u].call(t, { request: e, response: r, event: n })))
          )
            break;
        return a || (r = 200 === r.status ? r : null), r || null;
      },
      v = {
        put: async ({
          cacheName: e,
          request: t,
          response: r,
          event: a,
          plugins: i = [],
          matchOptions: c,
        } = {}) => {
          if (!r) throw new n("cache-put-with-no-response", { url: g(t.url) });
          let o = await m({ request: t, response: r, event: a, plugins: i });
          if (!o) return;
          const u = await caches.open(e),
            h = d(i, l);
          let w =
            h.length > 0
              ? await y({ cacheName: e, request: t, matchOptions: c })
              : null;
          try {
            await u.put(t, o);
          } catch (e) {
            throw ("QuotaExceededError" === e.name &&
              (await (async function() {
                for (const e of s) await e();
              })()),
            e);
          }
          for (let n of h)
            await n[l].call(n, {
              cacheName: e,
              request: t,
              event: a,
              oldResponse: w,
              newResponse: o,
            });
        },
        match: y,
      },
      q = {
        fetch: async ({
          request: e,
          fetchOptions: t,
          event: s,
          plugins: r = [],
        }) => {
          if (s && s.preloadResponse) {
            const e = await s.preloadResponse;
            if (e) return e;
          }
          "string" == typeof e && (e = new Request(e));
          const a = d(r, w),
            i = a.length > 0 ? e.clone() : null;
          try {
            for (let t of r)
              p in t &&
                (e = await t[p].call(t, { request: e.clone(), event: s }));
          } catch (e) {
            throw new n("plugin-error-request-will-fetch", { thrownError: e });
          }
          let c = e.clone();
          try {
            let n;
            n = "navigate" === e.mode ? await fetch(e) : await fetch(e, t);
            for (const e of r)
              f in e &&
                (n = await e[f].call(e, { event: s, request: c, response: n }));
            return n;
          } catch (e) {
            for (const t of a)
              await t[w].call(t, {
                error: e,
                event: s,
                originalRequest: i.clone(),
                request: c.clone(),
              });
            throw e;
          }
        },
      };
    var b = Object.freeze({
      DBWrapper: r,
      deleteDatabase: async (e) => {
        await new Promise((t, n) => {
          const s = indexedDB.deleteDatabase(e);
          (s.onerror = ({ target: e }) => {
            n(e.error);
          }),
            (s.onblocked = () => {
              n(new Error("Delete blocked"));
            }),
            (s.onsuccess = () => {
              t();
            });
        });
      },
      WorkboxError: n,
      assert: null,
      cacheNames: o,
      cacheWrapper: v,
      fetchWrapper: q,
      getFriendlyURL: g,
      logger: null,
    });
    const x = {
      get googleAnalytics() {
        return o.getGoogleAnalyticsName();
      },
      get precache() {
        return o.getPrecacheName();
      },
      get runtime() {
        return o.getRuntimeName();
      },
    };
    try {
      self.workbox.v = self.workbox.v || {};
    } catch (e) {}
    return (
      (e._private = b),
      (e.clientsClaim = () => {
        addEventListener("activate", () => clients.claim());
      }),
      (e.cacheNames = x),
      (e.registerQuotaErrorCallback = function(e) {
        s.add(e);
      }),
      (e.setCacheNameDetails = (e) => {
        o.updateDetails(e);
      }),
      (e.skipWaiting = () => {
        addEventListener("install", () => self.skipWaiting());
      }),
      e
    );
  })({}));
//# sourceMappingURL=workbox-core.prod.js.map
