/*! For license information please see chunk.b41caf794239540f7509.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [124],
  [
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "b", function() {
        return o;
      }),
        n.d(e, "a", function() {
          return c;
        });
      n(7), n(9);
      var r = n(62);
      n(24), n(21);
      const s = Element.prototype,
        i =
          s.matches ||
          s.matchesSelector ||
          s.mozMatchesSelector ||
          s.msMatchesSelector ||
          s.oMatchesSelector ||
          s.webkitMatchesSelector,
        o = function(t, e) {
          return i.call(t, e);
        };
      class a {
        constructor(t) {
          this.node = t;
        }
        observeNodes(t) {
          return new r.a(this.node, t);
        }
        unobserveNodes(t) {
          t.disconnect();
        }
        notifyObserver() {}
        deepContains(t) {
          if (this.node.contains(t)) return !0;
          let e = t,
            n = t.ownerDocument;
          for (; e && e !== n && e !== this.node; ) e = e.parentNode || e.host;
          return e === this.node;
        }
        getOwnerRoot() {
          return this.node.getRootNode();
        }
        getDistributedNodes() {
          return "slot" === this.node.localName
            ? this.node.assignedNodes({ flatten: !0 })
            : [];
        }
        getDestinationInsertionPoints() {
          let t = [],
            e = this.node.assignedSlot;
          for (; e; ) t.push(e), (e = e.assignedSlot);
          return t;
        }
        importNode(t, e) {
          return (this.node instanceof Document
            ? this.node
            : this.node.ownerDocument
          ).importNode(t, e);
        }
        getEffectiveChildNodes() {
          return r.a.getFlattenedNodes(this.node);
        }
        queryDistributedElements(t) {
          let e = this.getEffectiveChildNodes(),
            n = [];
          for (let r, s = 0, i = e.length; s < i && (r = e[s]); s++)
            r.nodeType === Node.ELEMENT_NODE && o(r, t) && n.push(r);
          return n;
        }
        get activeElement() {
          let t = this.node;
          return void 0 !== t._activeElement
            ? t._activeElement
            : t.activeElement;
        }
      }
      class l {
        constructor(t) {
          this.event = t;
        }
        get rootTarget() {
          return this.event.composedPath()[0];
        }
        get localTarget() {
          return this.event.target;
        }
        get path() {
          return this.event.composedPath();
        }
      }
      a.prototype.cloneNode,
        a.prototype.appendChild,
        a.prototype.insertBefore,
        a.prototype.removeChild,
        a.prototype.replaceChild,
        a.prototype.setAttribute,
        a.prototype.removeAttribute,
        a.prototype.querySelector,
        a.prototype.querySelectorAll,
        a.prototype.parentNode,
        a.prototype.firstChild,
        a.prototype.lastChild,
        a.prototype.nextSibling,
        a.prototype.previousSibling,
        a.prototype.firstElementChild,
        a.prototype.lastElementChild,
        a.prototype.nextElementSibling,
        a.prototype.previousElementSibling,
        a.prototype.childNodes,
        a.prototype.children,
        a.prototype.classList,
        a.prototype.textContent,
        a.prototype.innerHTML,
        (function(t, e) {
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            t[r] = function() {
              return this.node[r].apply(this.node, arguments);
            };
          }
        })(a.prototype, [
          "cloneNode",
          "appendChild",
          "insertBefore",
          "removeChild",
          "replaceChild",
          "setAttribute",
          "removeAttribute",
          "querySelector",
          "querySelectorAll",
        ]),
        (function(t, e) {
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            Object.defineProperty(t, r, {
              get: function() {
                return this.node[r];
              },
              configurable: !0,
            });
          }
        })(a.prototype, [
          "parentNode",
          "firstChild",
          "lastChild",
          "nextSibling",
          "previousSibling",
          "firstElementChild",
          "lastElementChild",
          "nextElementSibling",
          "previousElementSibling",
          "childNodes",
          "children",
          "classList",
        ]),
        (function(t, e) {
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            Object.defineProperty(t, r, {
              get: function() {
                return this.node[r];
              },
              set: function(t) {
                this.node[r] = t;
              },
              configurable: !0,
            });
          }
        })(a.prototype, ["textContent", "innerHTML"]);
      const c = function(t) {
        if (!(t = t || document).__domApi) {
          let e;
          (e = t instanceof Event ? new l(t) : new a(t)), (t.__domApi = e);
        }
        return t.__domApi;
      };
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "d", function() {
        return r;
      }),
        n.d(e, "g", function() {
          return s;
        }),
        n.d(e, "b", function() {
          return i;
        }),
        n.d(e, "c", function() {
          return o;
        }),
        n.d(e, "i", function() {
          return a;
        }),
        n.d(e, "e", function() {
          return l;
        }),
        n.d(e, "f", function() {
          return c;
        }),
        n.d(e, "a", function() {
          return u;
        }),
        n.d(e, "h", function() {
          return d;
        });
      n(7);
      function r(t) {
        return t.indexOf(".") >= 0;
      }
      function s(t) {
        let e = t.indexOf(".");
        return -1 === e ? t : t.slice(0, e);
      }
      function i(t, e) {
        return 0 === t.indexOf(e + ".");
      }
      function o(t, e) {
        return 0 === e.indexOf(t + ".");
      }
      function a(t, e, n) {
        return e + n.slice(t.length);
      }
      function l(t, e) {
        return t === e || i(t, e) || o(t, e);
      }
      function c(t) {
        if (Array.isArray(t)) {
          let e = [];
          for (let n = 0; n < t.length; n++) {
            let r = t[n].toString().split(".");
            for (let t = 0; t < r.length; t++) e.push(r[t]);
          }
          return e.join(".");
        }
        return t;
      }
      function h(t) {
        return Array.isArray(t) ? c(t).split(".") : t.toString().split(".");
      }
      function u(t, e, n) {
        let r = t,
          s = h(e);
        for (let i = 0; i < s.length; i++) {
          if (!r) return;
          r = r[s[i]];
        }
        return n && (n.path = s.join(".")), r;
      }
      function d(t, e, n) {
        let r = t,
          s = h(e),
          i = s[s.length - 1];
        if (s.length > 1) {
          for (let t = 0; t < s.length - 1; t++) {
            if (!(r = r[s[t]])) return;
          }
          r[i] = n;
        } else r[e] = n;
        return s.join(".");
      }
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      });
      n(7);
      class r {
        constructor(t) {
          this.value = t.toString();
        }
        toString() {
          return this.value;
        }
      }
      function s(t) {
        if (t instanceof r) return t.value;
        throw new Error(
          `non-literal value passed to Polymer's htmlLiteral function: ${t}`
        );
      }
      const i = function(t, ...e) {
        const n = document.createElement("template");
        return (
          (n.innerHTML = e.reduce(
            (e, n, i) =>
              e +
              (function(t) {
                if (t instanceof HTMLTemplateElement) return t.innerHTML;
                if (t instanceof r) return s(t);
                throw new Error(
                  `non-template value passed to Polymer's html function: ${t}`
                );
              })(n) +
              t[i + 1],
            t[0]
          )),
          n
        );
      };
    },
    function(t, e, n) {
      "use strict";
      var r = n(43),
        s = n(5),
        i = (n(97), n(7), n(37)),
        o = n(26),
        a = n(45),
        l = n(9);
      const c = Object(a.a)(Object(o.b)(Object(i.a)(HTMLElement)));
      customElements.define(
        "dom-bind",
        class extends c {
          static get observedAttributes() {
            return ["mutable-data"];
          }
          constructor() {
            if ((super(), l.f))
              throw new Error("strictTemplatePolicy: dom-bind not allowed");
            (this.root = null), (this.$ = null), (this.__children = null);
          }
          attributeChangedCallback() {
            this.mutableData = !0;
          }
          connectedCallback() {
            (this.style.display = "none"), this.render();
          }
          disconnectedCallback() {
            this.__removeChildren();
          }
          __insertChildren() {
            this.parentNode.insertBefore(this.root, this);
          }
          __removeChildren() {
            if (this.__children)
              for (let t = 0; t < this.__children.length; t++)
                this.root.appendChild(this.__children[t]);
          }
          render() {
            let t;
            if (!this.__children) {
              if (!(t = t || this.querySelector("template"))) {
                let e = new MutationObserver(() => {
                  if (!(t = this.querySelector("template")))
                    throw new Error("dom-bind requires a <template> child");
                  e.disconnect(), this.render();
                });
                return void e.observe(this, { childList: !0 });
              }
              (this.root = this._stampTemplate(t)),
                (this.$ = this.root.$),
                (this.__children = []);
              for (let t = this.root.firstChild; t; t = t.nextSibling)
                this.__children[this.__children.length] = t;
              this._enableProperties();
            }
            this.__insertChildren(),
              this.dispatchEvent(
                new CustomEvent("dom-change", { bubbles: !0, composed: !0 })
              );
          }
        }
      );
      n(86), n(88);
      var h = n(25),
        u = n(8),
        d = n(49),
        _ = n(36);
      let p = Object(u.a)((t) => {
        let e = Object(_.a)(t);
        return class extends e {
          static get properties() {
            return {
              items: { type: Array },
              multi: { type: Boolean, value: !1 },
              selected: { type: Object, notify: !0 },
              selectedItem: { type: Object, notify: !0 },
              toggle: { type: Boolean, value: !1 },
            };
          }
          static get observers() {
            return ["__updateSelection(multi, items.*)"];
          }
          constructor() {
            super(),
              (this.__lastItems = null),
              (this.__lastMulti = null),
              (this.__selectedMap = null);
          }
          __updateSelection(t, e) {
            let n = e.path;
            if ("items" == n) {
              let n = e.base || [],
                r = this.__lastItems;
              if ((t !== this.__lastMulti && this.clearSelection(), r)) {
                let t = Object(d.a)(n, r);
                this.__applySplices(t);
              }
              (this.__lastItems = n), (this.__lastMulti = t);
            } else if ("items.splices" == e.path)
              this.__applySplices(e.value.indexSplices);
            else {
              let t = n.slice("items.".length),
                e = parseInt(t, 10);
              t.indexOf(".") < 0 && t == e && this.__deselectChangedIdx(e);
            }
          }
          __applySplices(t) {
            let e = this.__selectedMap;
            for (let r = 0; r < t.length; r++) {
              let n = t[r];
              e.forEach((t, r) => {
                t < n.index ||
                  (t >= n.index + n.removed.length
                    ? e.set(r, t + n.addedCount - n.removed.length)
                    : e.set(r, -1));
              });
              for (let t = 0; t < n.addedCount; t++) {
                let r = n.index + t;
                e.has(this.items[r]) && e.set(this.items[r], r);
              }
            }
            this.__updateLinks();
            let n = 0;
            e.forEach((t, r) => {
              t < 0
                ? (this.multi
                    ? this.splice("selected", n, 1)
                    : (this.selected = this.selectedItem = null),
                  e.delete(r))
                : n++;
            });
          }
          __updateLinks() {
            if (((this.__dataLinkedPaths = {}), this.multi)) {
              let t = 0;
              this.__selectedMap.forEach((e) => {
                e >= 0 && this.linkPaths("items." + e, "selected." + t++);
              });
            } else
              this.__selectedMap.forEach((t) => {
                this.linkPaths("selected", "items." + t),
                  this.linkPaths("selectedItem", "items." + t);
              });
          }
          clearSelection() {
            (this.__dataLinkedPaths = {}),
              (this.__selectedMap = new Map()),
              (this.selected = this.multi ? [] : null),
              (this.selectedItem = null);
          }
          isSelected(t) {
            return this.__selectedMap.has(t);
          }
          isIndexSelected(t) {
            return this.isSelected(this.items[t]);
          }
          __deselectChangedIdx(t) {
            let e = this.__selectedIndexForItemIndex(t);
            if (e >= 0) {
              let t = 0;
              this.__selectedMap.forEach((n, r) => {
                e == t++ && this.deselect(r);
              });
            }
          }
          __selectedIndexForItemIndex(t) {
            let e = this.__dataLinkedPaths["items." + t];
            if (e) return parseInt(e.slice("selected.".length), 10);
          }
          deselect(t) {
            let e = this.__selectedMap.get(t);
            if (e >= 0) {
              let n;
              this.__selectedMap.delete(t),
                this.multi && (n = this.__selectedIndexForItemIndex(e)),
                this.__updateLinks(),
                this.multi
                  ? this.splice("selected", n, 1)
                  : (this.selected = this.selectedItem = null);
            }
          }
          deselectIndex(t) {
            this.deselect(this.items[t]);
          }
          select(t) {
            this.selectIndex(this.items.indexOf(t));
          }
          selectIndex(t) {
            let e = this.items[t];
            this.isSelected(e)
              ? this.toggle && this.deselectIndex(t)
              : (this.multi || this.__selectedMap.clear(),
                this.__selectedMap.set(e, t),
                this.__updateLinks(),
                this.multi
                  ? this.push("selected", e)
                  : (this.selected = this.selectedItem = e));
          }
        };
      })(h.a);
      class f extends p {
        static get is() {
          return "array-selector";
        }
      }
      customElements.define(f.is, f);
      n(72), n(98);
      var m = n(3);
      n.d(e, "a", function() {
        return y;
      }),
        n.d(e, "b", function() {
          return s.a;
        }),
        n.d(e, "c", function() {
          return m.a;
        });
      const y = Object(r.a)(HTMLElement).prototype;
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return s;
      });
      var r = n(70);
      n(7);
      const s = function(t) {
        let e;
        return (
          (e = "function" == typeof t ? t : s.Class(t)),
          customElements.define(e.is, e),
          e
        );
      };
      s.Class = r.a;
    },
    ,
    function(t, e, n) {
      "use strict";
      window.JSCompiler_renameProperty = function(t, e) {
        return t;
      };
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      });
      n(7);
      let r = 0;
      function s() {}
      s.prototype.__mixinApplications, s.prototype.__mixinSet;
      const i = function(t) {
        let e = t.__mixinApplications;
        e || ((e = new WeakMap()), (t.__mixinApplications = e));
        let n = r++;
        return function(r) {
          let s = r.__mixinSet;
          if (s && s[n]) return r;
          let i = e,
            o = i.get(r);
          o || ((o = t(r)), i.set(r, o));
          let a = Object.create(o.__mixinSet || s || null);
          return (a[n] = !0), (o.__mixinSet = a), o;
        };
      };
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "g", function() {
        return s;
      }),
        n.d(e, "c", function() {
          return i;
        }),
        n.d(e, "d", function() {
          return o;
        }),
        n.d(e, "b", function() {
          return a;
        }),
        n.d(e, "e", function() {
          return l;
        }),
        n.d(e, "f", function() {
          return c;
        }),
        n.d(e, "a", function() {
          return h;
        });
      n(7);
      var r = n(18);
      const s = !window.ShadyDOM;
      Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss),
        window.customElements.polyfillWrapFlushCallback;
      let i = Object(r.a)(document.baseURI || window.location.href);
      let o = (window.Polymer && window.Polymer.sanitizeDOMValue) || void 0;
      let a = !1;
      const l = function(t) {
        a = t;
      };
      let c = !1;
      let h = !1;
    },
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "d", function() {
        return l;
      }),
        n.d(e, "a", function() {
          return c;
        }),
        n.d(e, "b", function() {
          return h;
        }),
        n.d(e, "c", function() {
          return u;
        });
      n(7);
      let r = 0,
        s = 0,
        i = [],
        o = 0,
        a = document.createTextNode("");
      new window.MutationObserver(function() {
        const t = i.length;
        for (let n = 0; n < t; n++) {
          let t = i[n];
          if (t)
            try {
              t();
            } catch (e) {
              setTimeout(() => {
                throw e;
              });
            }
        }
        i.splice(0, t), (s += t);
      }).observe(a, { characterData: !0 });
      const l = {
          after: (t) => ({
            run: (e) => window.setTimeout(e, t),
            cancel(t) {
              window.clearTimeout(t);
            },
          }),
          run: (t, e) => window.setTimeout(t, e),
          cancel(t) {
            window.clearTimeout(t);
          },
        },
        c = {
          run: (t) => window.requestAnimationFrame(t),
          cancel(t) {
            window.cancelAnimationFrame(t);
          },
        },
        h = {
          run: (t) =>
            window.requestIdleCallback
              ? window.requestIdleCallback(t)
              : window.setTimeout(t, 16),
          cancel(t) {
            window.cancelIdleCallback
              ? window.cancelIdleCallback(t)
              : window.clearTimeout(t);
          },
        },
        u = {
          run: (t) => ((a.textContent = o++), i.push(t), r++),
          cancel(t) {
            const e = t - s;
            if (e >= 0) {
              if (!i[e]) throw new Error("invalid async handle: " + t);
              i[e] = null;
            }
          },
        };
    },
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "d", function() {
        return r;
      }),
        n.d(e, "a", function() {
          return i;
        }),
        n.d(e, "b", function() {
          return a;
        }),
        n.d(e, "c", function() {
          return l;
        });
      const r = !(window.ShadyDOM && window.ShadyDOM.inUse);
      let s, i;
      function o(t) {
        s =
          (!t || !t.shimcssproperties) &&
          (r ||
            Boolean(
              !navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) &&
                window.CSS &&
                CSS.supports &&
                CSS.supports("box-shadow", "0 0 0 var(--foo)")
            ));
      }
      window.ShadyCSS &&
        void 0 !== window.ShadyCSS.cssBuild &&
        (i = window.ShadyCSS.cssBuild);
      const a = Boolean(window.ShadyCSS && window.ShadyCSS.disableRuntime);
      window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss
        ? (s = window.ShadyCSS.nativeCss)
        : window.ShadyCSS
        ? (o(window.ShadyCSS), (window.ShadyCSS = void 0))
        : o(window.WebComponents && window.WebComponents.flags);
      const l = s;
    },
    ,
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "c", function() {
        return a;
      }),
        n.d(e, "b", function() {
          return l;
        }),
        n.d(e, "a", function() {
          return c;
        });
      n(7);
      let r,
        s,
        i = /(url\()([^)]*)(\))/g,
        o = /(^\/)|(^#)|(^[\w-\d]*:)/;
      function a(t, e) {
        if (t && o.test(t)) return t;
        if (void 0 === r) {
          r = !1;
          try {
            const t = new URL("b", "http://a");
            (t.pathname = "c%20d"), (r = "http://a/c%20d" === t.href);
          } catch (n) {}
        }
        return (
          e || (e = document.baseURI || window.location.href),
          r
            ? new URL(t, e).href
            : (s ||
                (((s = document.implementation.createHTMLDocument(
                  "temp"
                )).base = s.createElement("base")),
                s.head.appendChild(s.base),
                (s.anchor = s.createElement("a")),
                s.body.appendChild(s.anchor)),
              (s.base.href = e),
              (s.anchor.href = t),
              s.anchor.href || t)
        );
      }
      function l(t, e) {
        return t.replace(i, function(t, n, r, s) {
          return n + "'" + a(r.replace(/["']/g, ""), e) + "'" + s;
        });
      }
      function c(t) {
        return t.substring(0, t.lastIndexOf("/") + 1);
      }
    },
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "c", function() {
        return r;
      }),
        n.d(e, "b", function() {
          return s;
        }),
        n.d(e, "a", function() {
          return i;
        });
      const r = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
        s = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
        i = /@media\s(.*)/;
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return r;
      });
      n(7), n(8), n(11);
      class r {
        constructor() {
          (this._asyncModule = null),
            (this._callback = null),
            (this._timer = null);
        }
        setConfig(t, e) {
          (this._asyncModule = t),
            (this._callback = e),
            (this._timer = this._asyncModule.run(() => {
              (this._timer = null), this._callback();
            }));
        }
        cancel() {
          this.isActive() &&
            (this._asyncModule.cancel(this._timer), (this._timer = null));
        }
        flush() {
          this.isActive() && (this.cancel(), this._callback());
        }
        isActive() {
          return null != this._timer;
        }
        static debounce(t, e, n) {
          return (
            t instanceof r ? t.cancel() : (t = new r()), t.setConfig(e, n), t
          );
        }
      }
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "b", function() {
        return o;
      }),
        n.d(e, "a", function() {
          return a;
        });
      n(7);
      const r = {},
        s = /-[a-z]/g,
        i = /([A-Z])/g;
      function o(t) {
        return (
          r[t] ||
          (r[t] =
            t.indexOf("-") < 0 ? t : t.replace(s, (t) => t[1].toUpperCase()))
        );
      }
      function a(t) {
        return r[t] || (r[t] = t.replace(i, "-$1").toLowerCase());
      }
    },
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return s;
      }),
        n.d(e, "b", function() {
          return o;
        });
      n(7), n(21);
      let r = [];
      const s = function(t) {
        r.push(t);
      };
      function i() {
        const t = Boolean(r.length);
        for (; r.length; )
          try {
            r.shift().flush();
          } catch (e) {
            setTimeout(() => {
              throw e;
            });
          }
        return t;
      }
      const o = function() {
        let t, e;
        do {
          (t = window.ShadyDOM && ShadyDOM.flush()),
            window.ShadyCSS &&
              window.ShadyCSS.ScopingShim &&
              window.ShadyCSS.ScopingShim.flush(),
            (e = i());
        } while (t || e);
      };
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return s;
      });
      var r = n(36);
      n(3);
      const s = Object(r.a)(HTMLElement);
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      }),
        n.d(e, "b", function() {
          return o;
        });
      var r = n(8);
      function s(t, e, n, r, s) {
        let i;
        s && (i = "object" == typeof n && null !== n) && (r = t.__dataTemp[e]);
        let o = r !== n && (r == r || n == n);
        return i && o && (t.__dataTemp[e] = n), o;
      }
      const i = Object(r.a)((t) => {
          return class extends t {
            _shouldPropertyChange(t, e, n) {
              return s(this, t, e, n, !0);
            }
          };
        }),
        o = Object(r.a)((t) => {
          return class extends t {
            static get properties() {
              return { mutableData: Boolean };
            }
            _shouldPropertyChange(t, e, n) {
              return s(this, t, e, n, this.mutableData);
            }
          };
        });
      i._mutablePropertyChange = s;
    },
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "c", function() {
        return s;
      }),
        n.d(e, "b", function() {
          return i;
        }),
        n.d(e, "a", function() {
          return o;
        });
      var r = n(20);
      function s(t, e) {
        for (let n in e)
          null === n ? t.style.removeProperty(n) : t.style.setProperty(n, e[n]);
      }
      function i(t, e) {
        const n = window.getComputedStyle(t).getPropertyValue(e);
        return n ? n.trim() : "";
      }
      function o(t) {
        const e = r.b.test(t) || r.c.test(t);
        return (r.b.lastIndex = 0), (r.c.lastIndex = 0), e;
      }
    },
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "b", function() {
        return b;
      }),
        n.d(e, "a", function() {
          return g;
        });
      n(7);
      var r = n(37),
        s = n(26),
        i = n(9);
      let o = null;
      function a() {
        return o;
      }
      a.prototype = Object.create(HTMLTemplateElement.prototype, {
        constructor: { value: a, writable: !0 },
      });
      const l = Object(r.a)(a),
        c = Object(s.a)(l);
      const h = Object(r.a)(class {});
      class u extends h {
        constructor(t) {
          super(),
            this._configureProperties(t),
            (this.root = this._stampTemplate(this.__dataHost));
          let e = (this.children = []);
          for (let r = this.root.firstChild; r; r = r.nextSibling)
            e.push(r), (r.__templatizeInstance = this);
          this.__templatizeOwner &&
            this.__templatizeOwner.__hideTemplateChildren__ &&
            this._showHideChildren(!0);
          let n = this.__templatizeOptions;
          ((t && n.instanceProps) || !n.instanceProps) &&
            this._enableProperties();
        }
        _configureProperties(t) {
          if (this.__templatizeOptions.forwardHostProp)
            for (let e in this.__hostProps)
              this._setPendingProperty(e, this.__dataHost["_host_" + e]);
          for (let e in t) this._setPendingProperty(e, t[e]);
        }
        forwardHostProp(t, e) {
          this._setPendingPropertyOrPath(t, e, !1, !0) &&
            this.__dataHost._enqueueClient(this);
        }
        _addEventListenerToNode(t, e, n) {
          if (this._methodHost && this.__templatizeOptions.parentModel)
            this._methodHost._addEventListenerToNode(t, e, (t) => {
              (t.model = this), n(t);
            });
          else {
            let r = this.__dataHost.__dataHost;
            r && r._addEventListenerToNode(t, e, n);
          }
        }
        _showHideChildren(t) {
          let e = this.children;
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if (Boolean(t) != Boolean(r.__hideTemplateChildren__))
              if (r.nodeType === Node.TEXT_NODE)
                t
                  ? ((r.__polymerTextContent__ = r.textContent),
                    (r.textContent = ""))
                  : (r.textContent = r.__polymerTextContent__);
              else if ("slot" === r.localName)
                if (t)
                  (r.__polymerReplaced__ = document.createComment(
                    "hidden-slot"
                  )),
                    r.parentNode.replaceChild(r.__polymerReplaced__, r);
                else {
                  const t = r.__polymerReplaced__;
                  t && t.parentNode.replaceChild(r, t);
                }
              else
                r.style &&
                  (t
                    ? ((r.__polymerDisplay__ = r.style.display),
                      (r.style.display = "none"))
                    : (r.style.display = r.__polymerDisplay__));
            (r.__hideTemplateChildren__ = t),
              r._showHideChildren && r._showHideChildren(t);
          }
        }
        _setUnmanagedPropertyToNode(t, e, n) {
          t.__hideTemplateChildren__ &&
          t.nodeType == Node.TEXT_NODE &&
          "textContent" == e
            ? (t.__polymerTextContent__ = n)
            : super._setUnmanagedPropertyToNode(t, e, n);
        }
        get parentModel() {
          let t = this.__parentModel;
          if (!t) {
            let e;
            t = this;
            do {
              t = t.__dataHost.__dataHost;
            } while ((e = t.__templatizeOptions) && !e.parentModel);
            this.__parentModel = t;
          }
          return t;
        }
        dispatchEvent(t) {
          return !0;
        }
      }
      u.prototype.__dataHost,
        u.prototype.__templatizeOptions,
        u.prototype._methodHost,
        u.prototype.__templatizeOwner,
        u.prototype.__hostProps;
      const d = Object(s.a)(u);
      function _(t) {
        let e = t.__dataHost;
        return (e && e._methodHost) || e;
      }
      function p(t, e, n) {
        let r = n.mutableData ? d : u,
          s = class extends r {};
        return (
          (s.prototype.__templatizeOptions = n),
          s.prototype._bindTemplate(t),
          (function(t, e, n, r) {
            let s = n.hostProps || {};
            for (let i in r.instanceProps) {
              delete s[i];
              let e = r.notifyInstanceProp;
              e &&
                t.prototype._addPropertyEffect(
                  i,
                  t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,
                  { fn: y(i, e) }
                );
            }
            if (r.forwardHostProp && e.__dataHost)
              for (let i in s)
                t.prototype._addPropertyEffect(
                  i,
                  t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,
                  {
                    fn: function(t, e, n) {
                      t.__dataHost._setPendingPropertyOrPath(
                        "_host_" + e,
                        n[e],
                        !0,
                        !0
                      );
                    },
                  }
                );
          })(s, t, e, n),
          s
        );
      }
      function f(t, e, n) {
        let r = n.forwardHostProp;
        if (r) {
          let s = e.templatizeTemplateClass;
          if (!s) {
            let t = n.mutableData ? c : l;
            s = e.templatizeTemplateClass = class extends t {};
            let i = e.hostProps;
            for (let e in i)
              s.prototype._addPropertyEffect(
                "_host_" + e,
                s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,
                { fn: m(e, r) }
              ),
                s.prototype._createNotifyingProperty("_host_" + e);
          }
          !(function(t, e) {
            (o = t), Object.setPrototypeOf(t, e.prototype), new e(), (o = null);
          })(t, s),
            t.__dataProto && Object.assign(t.__data, t.__dataProto),
            (t.__dataTemp = {}),
            (t.__dataPending = null),
            (t.__dataOld = null),
            t._enableProperties();
        }
      }
      function m(t, e) {
        return function(t, n, r) {
          e.call(t.__templatizeOwner, n.substring("_host_".length), r[n]);
        };
      }
      function y(t, e) {
        return function(t, n, r) {
          e.call(t.__templatizeOwner, t, n, r[n]);
        };
      }
      function b(t, e, n) {
        if (i.f && !_(t))
          throw new Error("strictTemplatePolicy: template owner not trusted");
        if (((n = n || {}), t.__templatizeOwner))
          throw new Error("A <template> can only be templatized once");
        t.__templatizeOwner = e;
        let r = (e ? e.constructor : u)._parseTemplate(t),
          s = r.templatizeInstanceClass;
        s || ((s = p(t, r, n)), (r.templatizeInstanceClass = s)), f(t, r, n);
        let o = class extends s {};
        return (
          (o.prototype._methodHost = _(t)),
          (o.prototype.__dataHost = t),
          (o.prototype.__templatizeOwner = e),
          (o.prototype.__hostProps = r.hostProps),
          (o = o)
        );
      }
      function g(t, e) {
        let n;
        for (; e; )
          if ((n = e.__templatizeInstance)) {
            if (n.__dataHost == t) return n;
            e = n.__dataHost;
          } else e = e.parentNode;
        return null;
      }
    },
    ,
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "b", function() {
        return R;
      }),
        n.d(e, "e", function() {
          return L;
        }),
        n.d(e, "f", function() {
          return D;
        }),
        n.d(e, "d", function() {
          return H;
        }),
        n.d(e, "c", function() {
          return $;
        }),
        n.d(e, "a", function() {
          return V;
        });
      n(7);
      var r = n(11),
        s = n(21),
        i = n(9);
      let o = "string" == typeof document.head.style.touchAction,
        a = "__polymerGestures",
        l = "__polymerGesturesHandled",
        c = "__polymerGesturesTouchAction",
        h = 25,
        u = 5,
        d = 2500,
        _ = ["mousedown", "mousemove", "mouseup", "click"],
        p = [0, 1, 4, 2],
        f = (function() {
          try {
            return 1 === new MouseEvent("test", { buttons: 1 }).buttons;
          } catch (t) {
            return !1;
          }
        })();
      function m(t) {
        return _.indexOf(t) > -1;
      }
      let y = !1;
      function b(t) {
        if (!m(t) && "touchend" !== t)
          return o && y && i.b ? { passive: !0 } : void 0;
      }
      !(function() {
        try {
          let e = Object.defineProperty({}, "passive", {
            get() {
              y = !0;
            },
          });
          window.addEventListener("test", null, e),
            window.removeEventListener("test", null, e);
        } catch (t) {}
      })();
      let g = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);
      const P = [],
        C = {
          button: !0,
          input: !0,
          keygen: !0,
          meter: !0,
          output: !0,
          textarea: !0,
          progress: !0,
          select: !0,
        },
        v = {
          button: !0,
          command: !0,
          fieldset: !0,
          input: !0,
          keygen: !0,
          optgroup: !0,
          option: !0,
          select: !0,
          textarea: !0,
        };
      function w(t) {
        let e = Array.prototype.slice.call(t.labels || []);
        if (!e.length) {
          e = [];
          let n = t.getRootNode();
          if (t.id) {
            let r = n.querySelectorAll(`label[for = ${t.id}]`);
            for (let t = 0; t < r.length; t++) e.push(r[t]);
          }
        }
        return e;
      }
      let O = function(t) {
        let e = t.sourceCapabilities;
        var n;
        if (
          (!e || e.firesTouchEvents) &&
          ((t[l] = { skip: !0 }), "click" === t.type)
        ) {
          let e = !1,
            r = t.composedPath && t.composedPath();
          if (r)
            for (let t = 0; t < r.length; t++) {
              if (r[t].nodeType === Node.ELEMENT_NODE)
                if ("label" === r[t].localName) P.push(r[t]);
                else if (((n = r[t]), C[n.localName])) {
                  let n = w(r[t]);
                  for (let t = 0; t < n.length; t++)
                    e = e || P.indexOf(n[t]) > -1;
                }
              if (r[t] === T.mouse.target) return;
            }
          if (e) return;
          t.preventDefault(), t.stopPropagation();
        }
      };
      function S(t) {
        let e = g ? ["click"] : _;
        for (let n, r = 0; r < e.length; r++)
          (n = e[r]),
            t
              ? ((P.length = 0), document.addEventListener(n, O, !0))
              : document.removeEventListener(n, O, !0);
      }
      function E(t) {
        let e = t.type;
        if (!m(e)) return !1;
        if ("mousemove" === e) {
          let e = void 0 === t.buttons ? 1 : t.buttons;
          return (
            t instanceof window.MouseEvent && !f && (e = p[t.which] || 0),
            Boolean(1 & e)
          );
        }
        return 0 === (void 0 === t.button ? 0 : t.button);
      }
      let T = {
        mouse: { target: null, mouseIgnoreJob: null },
        touch: { x: 0, y: 0, id: -1, scrollDecided: !1 },
      };
      function x(t, e, n) {
        (t.movefn = e),
          (t.upfn = n),
          document.addEventListener("mousemove", e),
          document.addEventListener("mouseup", n);
      }
      function N(t) {
        document.removeEventListener("mousemove", t.movefn),
          document.removeEventListener("mouseup", t.upfn),
          (t.movefn = null),
          (t.upfn = null);
      }
      document.addEventListener(
        "touchend",
        function(t) {
          T.mouse.mouseIgnoreJob || S(!0),
            (T.mouse.target = t.composedPath()[0]),
            (T.mouse.mouseIgnoreJob = s.a.debounce(
              T.mouse.mouseIgnoreJob,
              r.d.after(d),
              function() {
                S(), (T.mouse.target = null), (T.mouse.mouseIgnoreJob = null);
              }
            ));
        },
        !!y && { passive: !0 }
      );
      const A = {},
        I = [];
      function j(t) {
        if (t.composedPath) {
          const e = t.composedPath();
          return e.length > 0 ? e[0] : t.target;
        }
        return t.target;
      }
      function M(t) {
        let e,
          n = t.type,
          r = t.currentTarget[a];
        if (!r) return;
        let s = r[n];
        if (s) {
          if (!t[l] && ((t[l] = {}), "touch" === n.slice(0, 5))) {
            let e = (t = t).changedTouches[0];
            if (
              ("touchstart" === n &&
                1 === t.touches.length &&
                (T.touch.id = e.identifier),
              T.touch.id !== e.identifier)
            )
              return;
            o ||
              ("touchstart" !== n && "touchmove" !== n) ||
              (function(t) {
                let e = t.changedTouches[0],
                  n = t.type;
                if ("touchstart" === n)
                  (T.touch.x = e.clientX),
                    (T.touch.y = e.clientY),
                    (T.touch.scrollDecided = !1);
                else if ("touchmove" === n) {
                  if (T.touch.scrollDecided) return;
                  T.touch.scrollDecided = !0;
                  let n = (function(t) {
                      let e = "auto",
                        n = t.composedPath && t.composedPath();
                      if (n)
                        for (let r, s = 0; s < n.length; s++)
                          if ((r = n[s])[c]) {
                            e = r[c];
                            break;
                          }
                      return e;
                    })(t),
                    r = !1,
                    s = Math.abs(T.touch.x - e.clientX),
                    i = Math.abs(T.touch.y - e.clientY);
                  t.cancelable &&
                    ("none" === n
                      ? (r = !0)
                      : "pan-x" === n
                      ? (r = i > s)
                      : "pan-y" === n && (r = s > i)),
                    r ? t.preventDefault() : H("track");
                }
              })(t);
          }
          if (!(e = t[l]).skip) {
            for (let n, r = 0; r < I.length; r++)
              s[(n = I[r]).name] &&
                !e[n.name] &&
                n.flow &&
                n.flow.start.indexOf(t.type) > -1 &&
                n.reset &&
                n.reset();
            for (let r, i = 0; i < I.length; i++)
              s[(r = I[i]).name] && !e[r.name] && ((e[r.name] = !0), r[n](t));
          }
        }
      }
      function R(t, e, n) {
        return (
          !!A[e] &&
          ((function(t, e, n) {
            let r = A[e],
              s = r.deps,
              i = r.name,
              o = t[a];
            o || (t[a] = o = {});
            for (let a, l, c = 0; c < s.length; c++)
              (a = s[c]),
                (g && m(a) && "click" !== a) ||
                  ((l = o[a]) || (o[a] = l = { _count: 0 }),
                  0 === l._count && t.addEventListener(a, M, b(a)),
                  (l[i] = (l[i] || 0) + 1),
                  (l._count = (l._count || 0) + 1));
            t.addEventListener(e, n), r.touchAction && D(t, r.touchAction);
          })(t, e, n),
          !0)
        );
      }
      function L(t, e, n) {
        return (
          !!A[e] &&
          ((function(t, e, n) {
            let r = A[e],
              s = r.deps,
              i = r.name,
              o = t[a];
            if (o)
              for (let a, l, c = 0; c < s.length; c++)
                (a = s[c]),
                  (l = o[a]) &&
                    l[i] &&
                    ((l[i] = (l[i] || 1) - 1),
                    (l._count = (l._count || 1) - 1),
                    0 === l._count && t.removeEventListener(a, M, b(a)));
            t.removeEventListener(e, n);
          })(t, e, n),
          !0)
        );
      }
      function k(t) {
        I.push(t);
        for (let e = 0; e < t.emits.length; e++) A[t.emits[e]] = t;
      }
      function D(t, e) {
        o &&
          t instanceof HTMLElement &&
          r.c.run(() => {
            t.style.touchAction = e;
          }),
          (t[c] = e);
      }
      function F(t, e, n) {
        let r = new Event(e, { bubbles: !0, cancelable: !0, composed: !0 });
        if (((r.detail = n), t.dispatchEvent(r), r.defaultPrevented)) {
          let t = n.preventer || n.sourceEvent;
          t && t.preventDefault && t.preventDefault();
        }
      }
      function H(t) {
        let e = (function(t) {
          for (let e, n = 0; n < I.length; n++) {
            e = I[n];
            for (let n, r = 0; r < e.emits.length; r++)
              if ((n = e.emits[r]) === t) return e;
          }
          return null;
        })(t);
        e.info && (e.info.prevent = !0);
      }
      function z(t, e, n, r) {
        e &&
          F(e, t, {
            x: n.clientX,
            y: n.clientY,
            sourceEvent: n,
            preventer: r,
            prevent: function(t) {
              return H(t);
            },
          });
      }
      function B(t, e, n) {
        if (t.prevent) return !1;
        if (t.started) return !0;
        let r = Math.abs(t.x - e),
          s = Math.abs(t.y - n);
        return r >= u || s >= u;
      }
      function q(t, e, n) {
        if (!e) return;
        let r,
          s = t.moves[t.moves.length - 2],
          i = t.moves[t.moves.length - 1],
          o = i.x - t.x,
          a = i.y - t.y,
          l = 0;
        s && ((r = i.x - s.x), (l = i.y - s.y)),
          F(e, "track", {
            state: t.state,
            x: n.clientX,
            y: n.clientY,
            dx: o,
            dy: a,
            ddx: r,
            ddy: l,
            sourceEvent: n,
            hover: function() {
              return (function(t, e) {
                let n = document.elementFromPoint(t, e),
                  r = n;
                for (
                  ;
                  r &&
                  r.shadowRoot &&
                  !window.ShadyDOM &&
                  r !== (r = r.shadowRoot.elementFromPoint(t, e));

                )
                  r && (n = r);
                return n;
              })(n.clientX, n.clientY);
            },
          });
      }
      function Y(t, e, n) {
        let r = Math.abs(e.clientX - t.x),
          s = Math.abs(e.clientY - t.y),
          i = j(n || e);
        !i ||
          (v[i.localName] && i.hasAttribute("disabled")) ||
          ((isNaN(r) ||
            isNaN(s) ||
            (r <= h && s <= h) ||
            (function(t) {
              if ("click" === t.type) {
                if (0 === t.detail) return !0;
                let e = j(t);
                if (!e.nodeType || e.nodeType !== Node.ELEMENT_NODE) return !0;
                let n = e.getBoundingClientRect(),
                  r = t.pageX,
                  s = t.pageY;
                return !(
                  r >= n.left &&
                  r <= n.right &&
                  s >= n.top &&
                  s <= n.bottom
                );
              }
              return !1;
            })(e)) &&
            (t.prevent ||
              F(i, "tap", {
                x: e.clientX,
                y: e.clientY,
                sourceEvent: e,
                preventer: n,
              })));
      }
      k({
        name: "downup",
        deps: ["mousedown", "touchstart", "touchend"],
        flow: {
          start: ["mousedown", "touchstart"],
          end: ["mouseup", "touchend"],
        },
        emits: ["down", "up"],
        info: { movefn: null, upfn: null },
        reset: function() {
          N(this.info);
        },
        mousedown: function(t) {
          if (!E(t)) return;
          let e = j(t),
            n = this;
          x(
            this.info,
            function(t) {
              E(t) || (z("up", e, t), N(n.info));
            },
            function(t) {
              E(t) && z("up", e, t), N(n.info);
            }
          ),
            z("down", e, t);
        },
        touchstart: function(t) {
          z("down", j(t), t.changedTouches[0], t);
        },
        touchend: function(t) {
          z("up", j(t), t.changedTouches[0], t);
        },
      }),
        k({
          name: "track",
          touchAction: "none",
          deps: ["mousedown", "touchstart", "touchmove", "touchend"],
          flow: {
            start: ["mousedown", "touchstart"],
            end: ["mouseup", "touchend"],
          },
          emits: ["track"],
          info: {
            x: 0,
            y: 0,
            state: "start",
            started: !1,
            moves: [],
            addMove: function(t) {
              this.moves.length > 2 && this.moves.shift(), this.moves.push(t);
            },
            movefn: null,
            upfn: null,
            prevent: !1,
          },
          reset: function() {
            (this.info.state = "start"),
              (this.info.started = !1),
              (this.info.moves = []),
              (this.info.x = 0),
              (this.info.y = 0),
              (this.info.prevent = !1),
              N(this.info);
          },
          mousedown: function(t) {
            if (!E(t)) return;
            let e = j(t),
              n = this,
              r = function(t) {
                let r = t.clientX,
                  s = t.clientY;
                B(n.info, r, s) &&
                  ((n.info.state = n.info.started
                    ? "mouseup" === t.type
                      ? "end"
                      : "track"
                    : "start"),
                  "start" === n.info.state && H("tap"),
                  n.info.addMove({ x: r, y: s }),
                  E(t) || ((n.info.state = "end"), N(n.info)),
                  e && q(n.info, e, t),
                  (n.info.started = !0));
              };
            x(this.info, r, function(t) {
              n.info.started && r(t), N(n.info);
            }),
              (this.info.x = t.clientX),
              (this.info.y = t.clientY);
          },
          touchstart: function(t) {
            let e = t.changedTouches[0];
            (this.info.x = e.clientX), (this.info.y = e.clientY);
          },
          touchmove: function(t) {
            let e = j(t),
              n = t.changedTouches[0],
              r = n.clientX,
              s = n.clientY;
            B(this.info, r, s) &&
              ("start" === this.info.state && H("tap"),
              this.info.addMove({ x: r, y: s }),
              q(this.info, e, n),
              (this.info.state = "track"),
              (this.info.started = !0));
          },
          touchend: function(t) {
            let e = j(t),
              n = t.changedTouches[0];
            this.info.started &&
              ((this.info.state = "end"),
              this.info.addMove({ x: n.clientX, y: n.clientY }),
              q(this.info, e, n));
          },
        }),
        k({
          name: "tap",
          deps: ["mousedown", "click", "touchstart", "touchend"],
          flow: {
            start: ["mousedown", "touchstart"],
            end: ["click", "touchend"],
          },
          emits: ["tap"],
          info: { x: NaN, y: NaN, prevent: !1 },
          reset: function() {
            (this.info.x = NaN), (this.info.y = NaN), (this.info.prevent = !1);
          },
          mousedown: function(t) {
            E(t) && ((this.info.x = t.clientX), (this.info.y = t.clientY));
          },
          click: function(t) {
            E(t) && Y(this.info, t);
          },
          touchstart: function(t) {
            const e = t.changedTouches[0];
            (this.info.x = e.clientX), (this.info.y = e.clientY);
          },
          touchend: function(t) {
            Y(this.info, t.changedTouches[0], t);
          },
        });
      const $ = j,
        V = R;
    },
    function(t, e, n) {
      "use strict";
      n(7);
      var r = n(9),
        s = n(8),
        i = n(42),
        o = n(18),
        a = n(40),
        l = n(37),
        c = n(48);
      const h = Object(s.a)((t) => {
        const e = Object(c.a)(t);
        function n(t) {
          const e = Object.getPrototypeOf(t);
          return e.prototype instanceof s ? e : null;
        }
        function r(t) {
          if (
            !t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties", t))
          ) {
            let e = null;
            if (t.hasOwnProperty(JSCompiler_renameProperty("properties", t))) {
              const n = t.properties;
              n &&
                (e = (function(t) {
                  const e = {};
                  for (let n in t) {
                    const r = t[n];
                    e[n] = "function" == typeof r ? { type: r } : r;
                  }
                  return e;
                })(n));
            }
            t.__ownProperties = e;
          }
          return t.__ownProperties;
        }
        class s extends e {
          static get observedAttributes() {
            const t = this._properties;
            return t
              ? Object.keys(t).map((t) => this.attributeNameForProperty(t))
              : [];
          }
          static finalize() {
            if (
              !this.hasOwnProperty(
                JSCompiler_renameProperty("__finalized", this)
              )
            ) {
              const t = n(this);
              t && t.finalize(), (this.__finalized = !0), this._finalizeClass();
            }
          }
          static _finalizeClass() {
            const t = r(this);
            t && this.createProperties(t);
          }
          static get _properties() {
            if (
              !this.hasOwnProperty(
                JSCompiler_renameProperty("__properties", this)
              )
            ) {
              const t = n(this);
              this.__properties = Object.assign(
                {},
                t && t._properties,
                r(this)
              );
            }
            return this.__properties;
          }
          static typeForProperty(t) {
            const e = this._properties[t];
            return e && e.type;
          }
          _initializeProperties() {
            this.constructor.finalize(), super._initializeProperties();
          }
          connectedCallback() {
            super.connectedCallback && super.connectedCallback(),
              this._enableProperties();
          }
          disconnectedCallback() {
            super.disconnectedCallback && super.disconnectedCallback();
          }
        }
        return s;
      });
      n.d(e, "a", function() {
        return d;
      });
      const u = "3.0.5",
        d = Object(s.a)((t) => {
          const e = h(Object(l.a)(t));
          return class extends e {
            static get polymerElementVersion() {
              return u;
            }
            static _finalizeClass() {
              var t;
              super._finalizeClass(),
                this.hasOwnProperty(JSCompiler_renameProperty("is", this)) &&
                  this.is &&
                  ((t = this.prototype), _.push(t));
              const e = ((n = this).hasOwnProperty(
                JSCompiler_renameProperty("__ownObservers", n)
              ) ||
                (n.__ownObservers = n.hasOwnProperty(
                  JSCompiler_renameProperty("observers", n)
                )
                  ? n.observers
                  : null),
              n.__ownObservers);
              var n;
              e && this.createObservers(e, this._properties);
              let r = this.template;
              r &&
                ("string" == typeof r
                  ? (console.error(
                      "template getter must return HTMLTemplateElement"
                    ),
                    (r = null))
                  : (r = r.cloneNode(!0))),
                (this.prototype._template = r);
            }
            static createProperties(t) {
              for (let i in t)
                (e = this.prototype),
                  (n = i),
                  (r = t[i]),
                  (s = t),
                  r.computed && (r.readOnly = !0),
                  r.computed &&
                    !e._hasReadOnlyEffect(n) &&
                    e._createComputedProperty(n, r.computed, s),
                  r.readOnly &&
                    !e._hasReadOnlyEffect(n) &&
                    e._createReadOnlyProperty(n, !r.computed),
                  r.reflectToAttribute &&
                    !e._hasReflectEffect(n) &&
                    e._createReflectedProperty(n),
                  r.notify &&
                    !e._hasNotifyEffect(n) &&
                    e._createNotifyingProperty(n),
                  r.observer &&
                    e._createPropertyObserver(n, r.observer, s[r.observer]),
                  e._addPropertyToAttributeMap(n);
              var e, n, r, s;
            }
            static createObservers(t, e) {
              const n = this.prototype;
              for (let r = 0; r < t.length; r++)
                n._createMethodObserver(t[r], e);
            }
            static get template() {
              return (
                this.hasOwnProperty(
                  JSCompiler_renameProperty("_template", this)
                ) ||
                  (this._template = this.prototype.hasOwnProperty(
                    JSCompiler_renameProperty("_template", this.prototype)
                  )
                    ? this.prototype._template
                    : (function(t) {
                        let e = null;
                        if (
                          t &&
                          (!r.f || r.a) &&
                          ((e = a.a.import(t, "template")), r.f && !e)
                        )
                          throw new Error(
                            `strictTemplatePolicy: expecting dom-module or null template for ${t}`
                          );
                        return e;
                      })(this.is) ||
                      Object.getPrototypeOf(this.prototype).constructor
                        .template),
                this._template
              );
            }
            static set template(t) {
              this._template = t;
            }
            static get importPath() {
              if (
                !this.hasOwnProperty(
                  JSCompiler_renameProperty("_importPath", this)
                )
              ) {
                const t = this.importMeta;
                if (t) this._importPath = Object(o.a)(t.url);
                else {
                  const t = a.a.import(this.is);
                  this._importPath =
                    (t && t.assetpath) ||
                    Object.getPrototypeOf(this.prototype).constructor
                      .importPath;
                }
              }
              return this._importPath;
            }
            constructor() {
              super(),
                this._template,
                this._importPath,
                this.rootPath,
                this.importPath,
                this.root,
                this.$;
            }
            _initializeProperties() {
              0,
                this.constructor.finalize(),
                this.constructor._finalizeTemplate(this.localName),
                super._initializeProperties(),
                (this.rootPath = r.c),
                (this.importPath = this.constructor.importPath);
              let t = (function(t) {
                if (
                  !t.hasOwnProperty(
                    JSCompiler_renameProperty("__propertyDefaults", t)
                  )
                ) {
                  t.__propertyDefaults = null;
                  let e = t._properties;
                  for (let n in e) {
                    let r = e[n];
                    "value" in r &&
                      ((t.__propertyDefaults = t.__propertyDefaults || {}),
                      (t.__propertyDefaults[n] = r));
                  }
                }
                return t.__propertyDefaults;
              })(this.constructor);
              if (t)
                for (let e in t) {
                  let n = t[e];
                  if (!this.hasOwnProperty(e)) {
                    let t =
                      "function" == typeof n.value
                        ? n.value.call(this)
                        : n.value;
                    this._hasAccessor(e)
                      ? this._setPendingProperty(e, t, !0)
                      : (this[e] = t);
                  }
                }
            }
            static _processStyleText(t, e) {
              return Object(o.b)(t, e);
            }
            static _finalizeTemplate(t) {
              const e = this.prototype._template;
              if (e && !e.__polymerFinalized) {
                e.__polymerFinalized = !0;
                const n = this.importPath;
                !(function(t, e, n, r) {
                  const s = e.content.querySelectorAll("style"),
                    o = Object(i.c)(e),
                    a = Object(i.b)(n),
                    l = e.content.firstElementChild;
                  for (let i = 0; i < a.length; i++) {
                    let n = a[i];
                    (n.textContent = t._processStyleText(n.textContent, r)),
                      e.content.insertBefore(n, l);
                  }
                  let c = 0;
                  for (let i = 0; i < o.length; i++) {
                    let e = o[i],
                      n = s[c];
                    n !== e
                      ? ((e = e.cloneNode(!0)), n.parentNode.insertBefore(e, n))
                      : c++,
                      (e.textContent = t._processStyleText(e.textContent, r));
                  }
                  window.ShadyCSS && window.ShadyCSS.prepareTemplate(e, n);
                })(this, e, t, n ? Object(o.c)(n) : ""),
                  this.prototype._bindTemplate(e);
              }
            }
            connectedCallback() {
              window.ShadyCSS &&
                this._template &&
                window.ShadyCSS.styleElement(this),
                super.connectedCallback();
            }
            ready() {
              this._template &&
                ((this.root = this._stampTemplate(this._template)),
                (this.$ = this.root.$)),
                super.ready();
            }
            _readyClients() {
              this._template && (this.root = this._attachDom(this.root)),
                super._readyClients();
            }
            _attachDom(t) {
              if (this.attachShadow)
                return t
                  ? (this.shadowRoot || this.attachShadow({ mode: "open" }),
                    this.shadowRoot.appendChild(t),
                    this.shadowRoot)
                  : null;
              throw new Error(
                "ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`."
              );
            }
            updateStyles(t) {
              window.ShadyCSS && window.ShadyCSS.styleSubtree(this, t);
            }
            resolveUrl(t, e) {
              return (
                !e && this.importPath && (e = Object(o.c)(this.importPath)),
                Object(o.c)(t, e)
              );
            }
            static _parseTemplateContent(t, e, n) {
              return (
                (e.dynamicFns = e.dynamicFns || this._properties),
                super._parseTemplateContent(t, e, n)
              );
            }
          };
        });
      const _ = [];
    },
    function(t, e, n) {
      "use strict";
      n(7);
      var r = n(8),
        s = n(2),
        i = n(22),
        o = n(47);
      const a = { "dom-if": !0, "dom-repeat": !0 };
      function l(t) {
        let e = t.getAttribute("is");
        if (e && a[e]) {
          let n = t;
          for (
            n.removeAttribute("is"),
              t = n.ownerDocument.createElement(e),
              n.parentNode.replaceChild(t, n),
              t.appendChild(n);
            n.attributes.length;

          )
            t.setAttribute(n.attributes[0].name, n.attributes[0].value),
              n.removeAttribute(n.attributes[0].name);
        }
        return t;
      }
      function c(t, e) {
        let n = e.parentInfo && c(t, e.parentInfo);
        if (!n) return t;
        for (let r = n.firstChild, s = 0; r; r = r.nextSibling)
          if (e.parentIndex === s++) return r;
      }
      function h(t, e, n, r) {
        r.id && (e[r.id] = n);
      }
      function u(t, e, n) {
        if (n.events && n.events.length)
          for (let r, s = 0, i = n.events; s < i.length && (r = i[s]); s++)
            t._addMethodEventListenerToNode(e, r.name, r.value, t);
      }
      function d(t, e, n) {
        n.templateInfo && (e._templateInfo = n.templateInfo);
      }
      const _ = Object(r.a)((t) => {
        return class extends t {
          static _parseTemplate(t, e) {
            if (!t._templateInfo) {
              let n = (t._templateInfo = {});
              (n.nodeInfoList = []),
                (n.stripWhiteSpace =
                  (e && e.stripWhiteSpace) ||
                  t.hasAttribute("strip-whitespace")),
                this._parseTemplateContent(t, n, { parent: null });
            }
            return t._templateInfo;
          }
          static _parseTemplateContent(t, e, n) {
            return this._parseTemplateNode(t.content, e, n);
          }
          static _parseTemplateNode(t, e, n) {
            let r,
              s = t;
            return (
              "template" != s.localName || s.hasAttribute("preserve-content")
                ? "slot" === s.localName && (e.hasInsertionPoint = !0)
                : (r = this._parseTemplateNestedTemplate(s, e, n) || r),
              s.firstChild && (r = this._parseTemplateChildNodes(s, e, n) || r),
              s.hasAttributes &&
                s.hasAttributes() &&
                (r = this._parseTemplateNodeAttributes(s, e, n) || r),
              r
            );
          }
          static _parseTemplateChildNodes(t, e, n) {
            if ("script" !== t.localName && "style" !== t.localName)
              for (let r, s = t.firstChild, i = 0; s; s = r) {
                if (
                  ("template" == s.localName && (s = l(s)),
                  (r = s.nextSibling),
                  s.nodeType === Node.TEXT_NODE)
                ) {
                  let n = r;
                  for (; n && n.nodeType === Node.TEXT_NODE; )
                    (s.textContent += n.textContent),
                      (r = n.nextSibling),
                      t.removeChild(n),
                      (n = r);
                  if (e.stripWhiteSpace && !s.textContent.trim()) {
                    t.removeChild(s);
                    continue;
                  }
                }
                let o = { parentIndex: i, parentInfo: n };
                this._parseTemplateNode(s, e, o) &&
                  (o.infoIndex = e.nodeInfoList.push(o) - 1),
                  s.parentNode && i++;
              }
          }
          static _parseTemplateNestedTemplate(t, e, n) {
            let r = this._parseTemplate(t, e);
            return (
              (r.content = t.content.ownerDocument.createDocumentFragment()).appendChild(
                t.content
              ),
              (n.templateInfo = r),
              !0
            );
          }
          static _parseTemplateNodeAttributes(t, e, n) {
            let r = !1,
              s = Array.from(t.attributes);
            for (let i, o = s.length - 1; (i = s[o]); o--)
              r =
                this._parseTemplateNodeAttribute(t, e, n, i.name, i.value) || r;
            return r;
          }
          static _parseTemplateNodeAttribute(t, e, n, r, s) {
            return "on-" === r.slice(0, 3)
              ? (t.removeAttribute(r),
                (n.events = n.events || []),
                n.events.push({ name: r.slice(3), value: s }),
                !0)
              : "id" === r && ((n.id = s), !0);
          }
          static _contentForTemplate(t) {
            let e = t._templateInfo;
            return (e && e.content) || t.content;
          }
          _stampTemplate(t) {
            t &&
              !t.content &&
              window.HTMLTemplateElement &&
              HTMLTemplateElement.decorate &&
              HTMLTemplateElement.decorate(t);
            let e = this.constructor._parseTemplate(t),
              n = e.nodeInfoList,
              r = e.content || t.content,
              s = document.importNode(r, !0);
            s.__noInsertionPoint = !e.hasInsertionPoint;
            let i = (s.nodeList = new Array(n.length));
            s.$ = {};
            for (let o, a = 0, l = n.length; a < l && (o = n[a]); a++) {
              let t = (i[a] = c(s, o));
              h(0, s.$, t, o), d(0, t, o), u(this, t, o);
            }
            return (s = s);
          }
          _addMethodEventListenerToNode(t, e, n, r) {
            let s = (function(t, e, n) {
              return (
                (t = t._methodHost || t),
                function(e) {
                  t[n]
                    ? t[n](e, e.detail)
                    : console.warn("listener method `" + n + "` not defined");
                }
              );
            })((r = r || t), 0, n);
            return this._addEventListenerToNode(t, e, s), s;
          }
          _addEventListenerToNode(t, e, n) {
            t.addEventListener(e, n);
          }
          _removeEventListenerFromNode(t, e, n) {
            t.removeEventListener(e, n);
          }
        };
      });
      var p = n(9);
      n.d(e, "a", function() {
        return Y;
      });
      let f = 0;
      const m = {
          COMPUTE: "__computeEffects",
          REFLECT: "__reflectEffects",
          NOTIFY: "__notifyEffects",
          PROPAGATE: "__propagateEffects",
          OBSERVE: "__observeEffects",
          READ_ONLY: "__readOnly",
        },
        y = /[A-Z]/;
      let b;
      function g(t, e) {
        let n = t[e];
        if (n) {
          if (!t.hasOwnProperty(e)) {
            n = t[e] = Object.create(t[e]);
            for (let t in n) {
              let e = n[t],
                r = (n[t] = Array(e.length));
              for (let t = 0; t < e.length; t++) r[t] = e[t];
            }
          }
        } else n = t[e] = {};
        return n;
      }
      function P(t, e, n, r, s, i) {
        if (e) {
          let o = !1,
            a = f++;
          for (let l in n) C(t, e, a, l, n, r, s, i) && (o = !0);
          return o;
        }
        return !1;
      }
      function C(t, e, n, r, i, o, a, l) {
        let c = !1,
          h = e[a ? Object(s.g)(r) : r];
        if (h)
          for (let s, u = 0, d = h.length; u < d && (s = h[u]); u++)
            (s.info && s.info.lastRun === n) ||
              (a && !v(r, s.trigger)) ||
              (s.info && (s.info.lastRun = n),
              s.fn(t, r, i, o, s.info, a, l),
              (c = !0));
        return c;
      }
      function v(t, e) {
        if (e) {
          let n = e.name;
          return (
            n == t ||
            (e.structured && Object(s.b)(n, t)) ||
            (e.wildcard && Object(s.c)(n, t))
          );
        }
        return !0;
      }
      function w(t, e, n, r, s) {
        let i = "string" == typeof s.method ? t[s.method] : s.method,
          o = s.property;
        i
          ? i.call(t, t.__data[o], r[o])
          : s.dynamicFn ||
            console.warn("observer method `" + s.method + "` not defined");
      }
      function O(t, e, n) {
        let r = Object(s.g)(e);
        if (r !== e) {
          return S(t, Object(i.a)(r) + "-changed", n[e], e), !0;
        }
        return !1;
      }
      function S(t, e, n, r) {
        let s = { value: n, queueProperty: !0 };
        r && (s.path = r), t.dispatchEvent(new CustomEvent(e, { detail: s }));
      }
      function E(t, e, n, r, i, o) {
        let a = (o ? Object(s.g)(e) : e) != e ? e : null,
          l = a ? Object(s.a)(t, a) : t.__data[e];
        a && void 0 === l && (l = n[e]), S(t, i.eventName, l, a);
      }
      function T(t, e, n, r, s) {
        let i = t.__data[e];
        p.d && (i = Object(p.d)(i, s.attrName, "attribute", t)),
          t._propertyToAttribute(e, s.attrName, i);
      }
      function x(t, e, n, r, s) {
        let i = L(t, e, n, r, s),
          o = s.methodInfo;
        t.__dataHasAccessor && t.__dataHasAccessor[o]
          ? t._setPendingProperty(o, i, !0)
          : (t[o] = i);
      }
      function N(t, e, n, r, s, o, a) {
        n.bindings = n.bindings || [];
        let l = {
          kind: r,
          target: s,
          parts: o,
          literal: a,
          isCompound: 1 !== o.length,
        };
        if (
          (n.bindings.push(l),
          (function(t) {
            return (
              Boolean(t.target) &&
              "attribute" != t.kind &&
              "text" != t.kind &&
              !t.isCompound &&
              "{" === t.parts[0].mode
            );
          })(l))
        ) {
          let { event: t, negate: e } = l.parts[0];
          (l.listenerEvent = t || Object(i.a)(s) + "-changed"),
            (l.listenerNegate = e);
        }
        let c = e.nodeInfoList.length;
        for (let i = 0; i < l.parts.length; i++) {
          let n = l.parts[i];
          (n.compoundIndex = i), A(t, e, l, n, c);
        }
      }
      function A(t, e, n, r, s) {
        if (!r.literal)
          if ("attribute" === n.kind && "-" === n.target[0])
            console.warn(
              "Cannot set attribute " +
                n.target +
                ' because "-" is not a valid attribute starting character'
            );
          else {
            let i = r.dependencies,
              o = { index: s, binding: n, part: r, evaluator: t };
            for (let n = 0; n < i.length; n++) {
              let r = i[n];
              "string" == typeof r && ((r = z(r)).wildcard = !0),
                t._addTemplatePropertyEffect(e, r.rootProperty, {
                  fn: I,
                  info: o,
                  trigger: r,
                });
            }
          }
      }
      function I(t, e, n, r, i, o, a) {
        let l = a[i.index],
          c = i.binding,
          h = i.part;
        if (
          o &&
          h.source &&
          e.length > h.source.length &&
          "property" == c.kind &&
          !c.isCompound &&
          l.__isPropertyEffectsClient &&
          l.__dataHasAccessor &&
          l.__dataHasAccessor[c.target]
        ) {
          let r = n[e];
          (e = Object(s.i)(h.source, c.target, e)),
            l._setPendingPropertyOrPath(e, r, !1, !0) && t._enqueueClient(l);
        } else {
          !(function(t, e, n, r, s) {
            (s = (function(t, e, n, r) {
              if (n.isCompound) {
                let s = t.__dataCompoundStorage[n.target];
                (s[r.compoundIndex] = e), (e = s.join(""));
              }
              return (
                "attribute" !== n.kind &&
                  (("textContent" !== n.target &&
                    ("value" !== n.target ||
                      ("input" !== t.localName &&
                        "textarea" !== t.localName))) ||
                    (e = null == e ? "" : e)),
                e
              );
            })(e, s, n, r)),
              p.d && (s = Object(p.d)(s, n.target, n.kind, e));
            if ("attribute" == n.kind) t._valueToNodeAttribute(e, s, n.target);
            else {
              let r = n.target;
              e.__isPropertyEffectsClient &&
              e.__dataHasAccessor &&
              e.__dataHasAccessor[r]
                ? (e[m.READ_ONLY] && e[m.READ_ONLY][r]) ||
                  (e._setPendingProperty(r, s) && t._enqueueClient(e))
                : t._setUnmanagedPropertyToNode(e, r, s);
            }
          })(t, l, c, h, i.evaluator._evaluateBinding(t, h, e, n, r, o));
        }
      }
      function j(t, e) {
        if (e.isCompound) {
          let n = t.__dataCompoundStorage || (t.__dataCompoundStorage = {}),
            r = e.parts,
            s = new Array(r.length);
          for (let t = 0; t < r.length; t++) s[t] = r[t].literal;
          let i = e.target;
          (n[i] = s), e.literal && "property" == e.kind && (t[i] = e.literal);
        }
      }
      function M(t, e, n) {
        if (n.listenerEvent) {
          let r = n.parts[0];
          t.addEventListener(n.listenerEvent, function(t) {
            !(function(t, e, n, r, i) {
              let o,
                a = t.detail,
                l = a && a.path;
              l
                ? ((r = Object(s.i)(n, r, l)), (o = a && a.value))
                : (o = t.currentTarget[n]),
                (o = i ? !o : o),
                (e[m.READ_ONLY] && e[m.READ_ONLY][r]) ||
                  !e._setPendingPropertyOrPath(r, o, !0, Boolean(l)) ||
                  (a && a.queueProperty) ||
                  e._invalidateProperties();
            })(t, e, n.target, r.source, r.negate);
          });
        }
      }
      function R(t, e, n, r, s, i) {
        i = e.static || (i && ("object" != typeof i || i[e.methodName]));
        let o = {
          methodName: e.methodName,
          args: e.args,
          methodInfo: s,
          dynamicFn: i,
        };
        for (let a, l = 0; l < e.args.length && (a = e.args[l]); l++)
          a.literal ||
            t._addPropertyEffect(a.rootProperty, n, {
              fn: r,
              info: o,
              trigger: a,
            });
        i && t._addPropertyEffect(e.methodName, n, { fn: r, info: o });
      }
      function L(t, e, n, r, s) {
        let i = t._methodHost || t,
          o = i[s.methodName];
        if (o) {
          let r = t._marshalArgs(s.args, e, n);
          return o.apply(i, r);
        }
        s.dynamicFn ||
          console.warn("method `" + s.methodName + "` not defined");
      }
      const k = [],
        D = new RegExp(
          "(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})",
          "g"
        );
      function F(t) {
        let e = "";
        for (let n = 0; n < t.length; n++) {
          e += t[n].literal || "";
        }
        return e;
      }
      function H(t) {
        let e = t.match(/([^\s]+?)\(([\s\S]*)\)/);
        if (e) {
          let t = { methodName: e[1], static: !0, args: k };
          if (e[2].trim()) {
            return (function(t, e) {
              return (
                (e.args = t.map(function(t) {
                  let n = z(t);
                  return n.literal || (e.static = !1), n;
                }, this)),
                e
              );
            })(e[2].replace(/\\,/g, "&comma;").split(","), t);
          }
          return t;
        }
        return null;
      }
      function z(t) {
        let e = t
            .trim()
            .replace(/&comma;/g, ",")
            .replace(/\\(.)/g, "$1"),
          n = { name: e, value: "", literal: !1 },
          r = e[0];
        switch (
          ("-" === r && (r = e[1]), r >= "0" && r <= "9" && (r = "#"), r)
        ) {
          case "'":
          case '"':
            (n.value = e.slice(1, -1)), (n.literal = !0);
            break;
          case "#":
            (n.value = Number(e)), (n.literal = !0);
        }
        return (
          n.literal ||
            ((n.rootProperty = Object(s.g)(e)),
            (n.structured = Object(s.d)(e)),
            n.structured &&
              ((n.wildcard = ".*" == e.slice(-2)),
              n.wildcard && (n.name = e.slice(0, -2)))),
          n
        );
      }
      function B(t, e, n, r) {
        let s = n + ".splices";
        t.notifyPath(s, { indexSplices: r }),
          t.notifyPath(n + ".length", e.length),
          (t.__data[s] = { indexSplices: null });
      }
      function q(t, e, n, r, s, i) {
        B(t, e, n, [
          { index: r, addedCount: s, removed: i, object: e, type: "splice" },
        ]);
      }
      const Y = Object(r.a)((t) => {
        const e = _(Object(o.a)(t));
        class n extends e {
          constructor() {
            super(),
              (this.__isPropertyEffectsClient = !0),
              (this.__dataCounter = 0),
              this.__dataClientsReady,
              this.__dataPendingClients,
              this.__dataToNotify,
              this.__dataLinkedPaths,
              this.__dataHasPaths,
              this.__dataCompoundStorage,
              this.__dataHost,
              this.__dataTemp,
              this.__dataClientsInitialized,
              this.__data,
              this.__dataPending,
              this.__dataOld,
              this.__computeEffects,
              this.__reflectEffects,
              this.__notifyEffects,
              this.__propagateEffects,
              this.__observeEffects,
              this.__readOnly,
              this.__templateInfo;
          }
          get PROPERTY_EFFECT_TYPES() {
            return m;
          }
          _initializeProperties() {
            super._initializeProperties(),
              $.registerHost(this),
              (this.__dataClientsReady = !1),
              (this.__dataPendingClients = null),
              (this.__dataToNotify = null),
              (this.__dataLinkedPaths = null),
              (this.__dataHasPaths = !1),
              (this.__dataCompoundStorage = this.__dataCompoundStorage || null),
              (this.__dataHost = this.__dataHost || null),
              (this.__dataTemp = {}),
              (this.__dataClientsInitialized = !1);
          }
          _initializeProtoProperties(t) {
            (this.__data = Object.create(t)),
              (this.__dataPending = Object.create(t)),
              (this.__dataOld = {});
          }
          _initializeInstanceProperties(t) {
            let e = this[m.READ_ONLY];
            for (let n in t)
              (e && e[n]) ||
                ((this.__dataPending = this.__dataPending || {}),
                (this.__dataOld = this.__dataOld || {}),
                (this.__data[n] = this.__dataPending[n] = t[n]));
          }
          _addPropertyEffect(t, e, n) {
            this._createPropertyAccessor(t, e == m.READ_ONLY);
            let r = g(this, e)[t];
            r || (r = this[e][t] = []), r.push(n);
          }
          _removePropertyEffect(t, e, n) {
            let r = g(this, e)[t],
              s = r.indexOf(n);
            s >= 0 && r.splice(s, 1);
          }
          _hasPropertyEffect(t, e) {
            let n = this[e];
            return Boolean(n && n[t]);
          }
          _hasReadOnlyEffect(t) {
            return this._hasPropertyEffect(t, m.READ_ONLY);
          }
          _hasNotifyEffect(t) {
            return this._hasPropertyEffect(t, m.NOTIFY);
          }
          _hasReflectEffect(t) {
            return this._hasPropertyEffect(t, m.REFLECT);
          }
          _hasComputedEffect(t) {
            return this._hasPropertyEffect(t, m.COMPUTE);
          }
          _setPendingPropertyOrPath(t, e, n, r) {
            if (r || Object(s.g)(Array.isArray(t) ? t[0] : t) !== t) {
              if (!r) {
                let n = Object(s.a)(this, t);
                if (
                  !(t = Object(s.h)(this, t, e)) ||
                  !super._shouldPropertyChange(t, e, n)
                )
                  return !1;
              }
              if (
                ((this.__dataHasPaths = !0), this._setPendingProperty(t, e, n))
              )
                return (
                  (function(t, e, n) {
                    let r = t.__dataLinkedPaths;
                    if (r) {
                      let i;
                      for (let o in r) {
                        let a = r[o];
                        Object(s.c)(o, e)
                          ? ((i = Object(s.i)(o, a, e)),
                            t._setPendingPropertyOrPath(i, n, !0, !0))
                          : Object(s.c)(a, e) &&
                            ((i = Object(s.i)(a, o, e)),
                            t._setPendingPropertyOrPath(i, n, !0, !0));
                      }
                    }
                  })(this, t, e),
                  !0
                );
            } else {
              if (this.__dataHasAccessor && this.__dataHasAccessor[t])
                return this._setPendingProperty(t, e, n);
              this[t] = e;
            }
            return !1;
          }
          _setUnmanagedPropertyToNode(t, e, n) {
            (n === t[e] && "object" != typeof n) || (t[e] = n);
          }
          _setPendingProperty(t, e, n) {
            let r = this.__dataHasPaths && Object(s.d)(t),
              i = r ? this.__dataTemp : this.__data;
            return (
              !!this._shouldPropertyChange(t, e, i[t]) &&
              (this.__dataPending ||
                ((this.__dataPending = {}), (this.__dataOld = {})),
              t in this.__dataOld || (this.__dataOld[t] = this.__data[t]),
              r ? (this.__dataTemp[t] = e) : (this.__data[t] = e),
              (this.__dataPending[t] = e),
              (r || (this[m.NOTIFY] && this[m.NOTIFY][t])) &&
                ((this.__dataToNotify = this.__dataToNotify || {}),
                (this.__dataToNotify[t] = n)),
              !0)
            );
          }
          _setProperty(t, e) {
            this._setPendingProperty(t, e, !0) && this._invalidateProperties();
          }
          _invalidateProperties() {
            this.__dataReady && this._flushProperties();
          }
          _enqueueClient(t) {
            (this.__dataPendingClients = this.__dataPendingClients || []),
              t !== this && this.__dataPendingClients.push(t);
          }
          _flushProperties() {
            this.__dataCounter++,
              super._flushProperties(),
              this.__dataCounter--;
          }
          _flushClients() {
            this.__dataClientsReady
              ? this.__enableOrFlushClients()
              : ((this.__dataClientsReady = !0),
                this._readyClients(),
                (this.__dataReady = !0));
          }
          __enableOrFlushClients() {
            let t = this.__dataPendingClients;
            if (t) {
              this.__dataPendingClients = null;
              for (let e = 0; e < t.length; e++) {
                let n = t[e];
                n.__dataEnabled
                  ? n.__dataPending && n._flushProperties()
                  : n._enableProperties();
              }
            }
          }
          _readyClients() {
            this.__enableOrFlushClients();
          }
          setProperties(t, e) {
            for (let n in t)
              (!e && this[m.READ_ONLY] && this[m.READ_ONLY][n]) ||
                this._setPendingPropertyOrPath(n, t[n], !0);
            this._invalidateProperties();
          }
          ready() {
            this._flushProperties(),
              this.__dataClientsReady || this._flushClients(),
              this.__dataPending && this._flushProperties();
          }
          _propertiesChanged(t, e, n) {
            let r = this.__dataHasPaths;
            (this.__dataHasPaths = !1),
              (function(t, e, n, r) {
                let s = t[m.COMPUTE];
                if (s) {
                  let i = e;
                  for (; P(t, s, i, n, r); )
                    Object.assign(n, t.__dataOld),
                      Object.assign(e, t.__dataPending),
                      (i = t.__dataPending),
                      (t.__dataPending = null);
                }
              })(this, e, n, r);
            let s = this.__dataToNotify;
            (this.__dataToNotify = null),
              this._propagatePropertyChanges(e, n, r),
              this._flushClients(),
              P(this, this[m.REFLECT], e, n, r),
              P(this, this[m.OBSERVE], e, n, r),
              s &&
                (function(t, e, n, r, s) {
                  let i,
                    o,
                    a = t[m.NOTIFY],
                    l = f++;
                  for (let c in e)
                    e[c] &&
                      (a && C(t, a, l, c, n, r, s)
                        ? (i = !0)
                        : s && O(t, c, n) && (i = !0));
                  i &&
                    (o = t.__dataHost) &&
                    o._invalidateProperties &&
                    o._invalidateProperties();
                })(this, s, e, n, r),
              1 == this.__dataCounter && (this.__dataTemp = {});
          }
          _propagatePropertyChanges(t, e, n) {
            this[m.PROPAGATE] && P(this, this[m.PROPAGATE], t, e, n);
            let r = this.__templateInfo;
            for (; r; )
              P(this, r.propertyEffects, t, e, n, r.nodeList),
                (r = r.nextTemplateInfo);
          }
          linkPaths(t, e) {
            (t = Object(s.f)(t)),
              (e = Object(s.f)(e)),
              (this.__dataLinkedPaths = this.__dataLinkedPaths || {}),
              (this.__dataLinkedPaths[t] = e);
          }
          unlinkPaths(t) {
            (t = Object(s.f)(t)),
              this.__dataLinkedPaths && delete this.__dataLinkedPaths[t];
          }
          notifySplices(t, e) {
            let n = { path: "" };
            B(this, Object(s.a)(this, t, n), n.path, e);
          }
          get(t, e) {
            return Object(s.a)(e || this, t);
          }
          set(t, e, n) {
            n
              ? Object(s.h)(n, t, e)
              : (this[m.READ_ONLY] && this[m.READ_ONLY][t]) ||
                (this._setPendingPropertyOrPath(t, e, !0) &&
                  this._invalidateProperties());
          }
          push(t, ...e) {
            let n = { path: "" },
              r = Object(s.a)(this, t, n),
              i = r.length,
              o = r.push(...e);
            return e.length && q(this, r, n.path, i, e.length, []), o;
          }
          pop(t) {
            let e = { path: "" },
              n = Object(s.a)(this, t, e),
              r = Boolean(n.length),
              i = n.pop();
            return r && q(this, n, e.path, n.length, 0, [i]), i;
          }
          splice(t, e, n, ...r) {
            let i,
              o = { path: "" },
              a = Object(s.a)(this, t, o);
            return (
              e < 0
                ? (e = a.length - Math.floor(-e))
                : e && (e = Math.floor(e)),
              (i = 2 === arguments.length ? a.splice(e) : a.splice(e, n, ...r)),
              (r.length || i.length) && q(this, a, o.path, e, r.length, i),
              i
            );
          }
          shift(t) {
            let e = { path: "" },
              n = Object(s.a)(this, t, e),
              r = Boolean(n.length),
              i = n.shift();
            return r && q(this, n, e.path, 0, 0, [i]), i;
          }
          unshift(t, ...e) {
            let n = { path: "" },
              r = Object(s.a)(this, t, n),
              i = r.unshift(...e);
            return e.length && q(this, r, n.path, 0, e.length, []), i;
          }
          notifyPath(t, e) {
            let n;
            if (1 == arguments.length) {
              let r = { path: "" };
              (e = Object(s.a)(this, t, r)), (n = r.path);
            } else n = Array.isArray(t) ? Object(s.f)(t) : t;
            this._setPendingPropertyOrPath(n, e, !0, !0) &&
              this._invalidateProperties();
          }
          _createReadOnlyProperty(t, e) {
            var n;
            this._addPropertyEffect(t, m.READ_ONLY),
              e &&
                (this[
                  "_set" + ((n = t), n[0].toUpperCase() + n.substring(1))
                ] = function(e) {
                  this._setProperty(t, e);
                });
          }
          _createPropertyObserver(t, e, n) {
            let r = { property: t, method: e, dynamicFn: Boolean(n) };
            this._addPropertyEffect(t, m.OBSERVE, {
              fn: w,
              info: r,
              trigger: { name: t },
            }),
              n &&
                this._addPropertyEffect(e, m.OBSERVE, {
                  fn: w,
                  info: r,
                  trigger: { name: e },
                });
          }
          _createMethodObserver(t, e) {
            let n = H(t);
            if (!n)
              throw new Error("Malformed observer expression '" + t + "'");
            R(this, n, m.OBSERVE, L, null, e);
          }
          _createNotifyingProperty(t) {
            this._addPropertyEffect(t, m.NOTIFY, {
              fn: E,
              info: { eventName: Object(i.a)(t) + "-changed", property: t },
            });
          }
          _createReflectedProperty(t) {
            let e = this.constructor.attributeNameForProperty(t);
            "-" === e[0]
              ? console.warn(
                  "Property " +
                    t +
                    " cannot be reflected to attribute " +
                    e +
                    ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'
                )
              : this._addPropertyEffect(t, m.REFLECT, {
                  fn: T,
                  info: { attrName: e },
                });
          }
          _createComputedProperty(t, e, n) {
            let r = H(e);
            if (!r)
              throw new Error("Malformed computed expression '" + e + "'");
            R(this, r, m.COMPUTE, x, t, n);
          }
          _marshalArgs(t, e, n) {
            const r = this.__data;
            let i = [];
            for (let o = 0, a = t.length; o < a; o++) {
              let a,
                l = t[o],
                c = l.name;
              if (
                (l.literal
                  ? (a = l.value)
                  : l.structured
                  ? void 0 === (a = Object(s.a)(r, c)) && (a = n[c])
                  : (a = r[c]),
                l.wildcard)
              ) {
                let t = 0 === c.indexOf(e + "."),
                  r = 0 === e.indexOf(c) && !t;
                i[o] = { path: r ? e : c, value: r ? n[e] : a, base: a };
              } else i[o] = a;
            }
            return i;
          }
          static addPropertyEffect(t, e, n) {
            this.prototype._addPropertyEffect(t, e, n);
          }
          static createPropertyObserver(t, e, n) {
            this.prototype._createPropertyObserver(t, e, n);
          }
          static createMethodObserver(t, e) {
            this.prototype._createMethodObserver(t, e);
          }
          static createNotifyingProperty(t) {
            this.prototype._createNotifyingProperty(t);
          }
          static createReadOnlyProperty(t, e) {
            this.prototype._createReadOnlyProperty(t, e);
          }
          static createReflectedProperty(t) {
            this.prototype._createReflectedProperty(t);
          }
          static createComputedProperty(t, e, n) {
            this.prototype._createComputedProperty(t, e, n);
          }
          static bindTemplate(t) {
            return this.prototype._bindTemplate(t);
          }
          _bindTemplate(t, e) {
            let n = this.constructor._parseTemplate(t),
              r = this.__templateInfo == n;
            if (!r)
              for (let s in n.propertyEffects) this._createPropertyAccessor(s);
            if (
              e &&
              (((n = Object.create(n)).wasPreBound = r),
              !r && this.__templateInfo)
            ) {
              let t = this.__templateInfoLast || this.__templateInfo;
              return (
                (this.__templateInfoLast = t.nextTemplateInfo = n),
                (n.previousTemplateInfo = t),
                n
              );
            }
            return (this.__templateInfo = n);
          }
          static _addTemplatePropertyEffect(t, e, n) {
            (t.hostProps = t.hostProps || {})[e] = !0;
            let r = (t.propertyEffects = t.propertyEffects || {});
            (r[e] = r[e] || []).push(n);
          }
          _stampTemplate(t) {
            $.beginHosting(this);
            let e = super._stampTemplate(t);
            $.endHosting(this);
            let n = this._bindTemplate(t, !0);
            if (((n.nodeList = e.nodeList), !n.wasPreBound)) {
              let t = (n.childNodes = []);
              for (let n = e.firstChild; n; n = n.nextSibling) t.push(n);
            }
            return (
              (e.templateInfo = n),
              (function(t, e) {
                let { nodeList: n, nodeInfoList: r } = e;
                if (r.length)
                  for (let s = 0; s < r.length; s++) {
                    let e = r[s],
                      i = n[s],
                      o = e.bindings;
                    if (o)
                      for (let n = 0; n < o.length; n++) {
                        let e = o[n];
                        j(i, e), M(i, t, e);
                      }
                    i.__dataHost = t;
                  }
              })(this, n),
              this.__dataReady &&
                P(this, n.propertyEffects, this.__data, null, !1, n.nodeList),
              e
            );
          }
          _removeBoundDom(t) {
            let e = t.templateInfo;
            e.previousTemplateInfo &&
              (e.previousTemplateInfo.nextTemplateInfo = e.nextTemplateInfo),
              e.nextTemplateInfo &&
                (e.nextTemplateInfo.previousTemplateInfo =
                  e.previousTemplateInfo),
              this.__templateInfoLast == e &&
                (this.__templateInfoLast = e.previousTemplateInfo),
              (e.previousTemplateInfo = e.nextTemplateInfo = null);
            let n = e.childNodes;
            for (let r = 0; r < n.length; r++) {
              let t = n[r];
              t.parentNode.removeChild(t);
            }
          }
          static _parseTemplateNode(t, e, n) {
            let r = super._parseTemplateNode(t, e, n);
            if (t.nodeType === Node.TEXT_NODE) {
              let s = this._parseBindings(t.textContent, e);
              s &&
                ((t.textContent = F(s) || " "),
                N(this, e, n, "text", "textContent", s),
                (r = !0));
            }
            return r;
          }
          static _parseTemplateNodeAttribute(t, e, n, r, s) {
            let o = this._parseBindings(s, e);
            if (o) {
              let s = r,
                a = "property";
              y.test(r)
                ? (a = "attribute")
                : "$" == r[r.length - 1] &&
                  ((r = r.slice(0, -1)), (a = "attribute"));
              let l = F(o);
              return (
                l && "attribute" == a && t.setAttribute(r, l),
                "input" === t.localName &&
                  "value" === s &&
                  t.setAttribute(s, ""),
                t.removeAttribute(s),
                "property" === a && (r = Object(i.b)(r)),
                N(this, e, n, a, r, o, l),
                !0
              );
            }
            return super._parseTemplateNodeAttribute(t, e, n, r, s);
          }
          static _parseTemplateNestedTemplate(t, e, n) {
            let r = super._parseTemplateNestedTemplate(t, e, n),
              s = n.templateInfo.hostProps;
            for (let i in s) {
              N(this, e, n, "property", "_host_" + i, [
                { mode: "{", source: i, dependencies: [i] },
              ]);
            }
            return r;
          }
          static _parseBindings(t, e) {
            let n,
              r = [],
              s = 0;
            for (; null !== (n = D.exec(t)); ) {
              n.index > s && r.push({ literal: t.slice(s, n.index) });
              let i = n[1][0],
                o = Boolean(n[2]),
                a = n[3].trim(),
                l = !1,
                c = "",
                h = -1;
              "{" == i &&
                (h = a.indexOf("::")) > 0 &&
                ((c = a.substring(h + 2)), (a = a.substring(0, h)), (l = !0));
              let u = H(a),
                d = [];
              if (u) {
                let { args: t, methodName: n } = u;
                for (let e = 0; e < t.length; e++) {
                  let n = t[e];
                  n.literal || d.push(n);
                }
                let r = e.dynamicFns;
                ((r && r[n]) || u.static) && (d.push(n), (u.dynamicFn = !0));
              } else d.push(a);
              r.push({
                source: a,
                mode: i,
                negate: o,
                customEvent: l,
                signature: u,
                dependencies: d,
                event: c,
              }),
                (s = D.lastIndex);
            }
            if (s && s < t.length) {
              let e = t.substring(s);
              e && r.push({ literal: e });
            }
            return r.length ? r : null;
          }
          static _evaluateBinding(t, e, n, r, i, o) {
            let a;
            return (
              (a = e.signature
                ? L(t, n, r, 0, e.signature)
                : n != e.source
                ? Object(s.a)(t, e.source)
                : o && Object(s.d)(n)
                ? Object(s.a)(t, n)
                : t.__data[n]),
              e.negate && (a = !a),
              a
            );
          }
        }
        return (b = n), n;
      });
      const $ = new class {
        constructor() {
          this.stack = [];
        }
        registerHost(t) {
          this.stack.length &&
            this.stack[this.stack.length - 1]._enqueueClient(t);
        }
        beginHosting(t) {
          this.stack.push(t);
        }
        endHosting(t) {
          let e = this.stack.length;
          e && this.stack[e - 1] == t && this.stack.pop();
        }
      }();
    },
    ,
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return c;
      });
      n(7);
      var r = n(18),
        s = n(9);
      let i = {},
        o = {};
      function a(t, e) {
        i[t] = o[t.toLowerCase()] = e;
      }
      function l(t) {
        return i[t] || o[t.toLowerCase()];
      }
      class c extends HTMLElement {
        static get observedAttributes() {
          return ["id"];
        }
        static import(t, e) {
          if (t) {
            let n = l(t);
            return n && e ? n.querySelector(e) : n;
          }
          return null;
        }
        attributeChangedCallback(t, e, n, r) {
          e !== n && this.register();
        }
        get assetpath() {
          if (!this.__assetpath) {
            const t =
                window.HTMLImports && HTMLImports.importForElement
                  ? HTMLImports.importForElement(this) || document
                  : this.ownerDocument,
              e = Object(r.c)(this.getAttribute("assetpath") || "", t.baseURI);
            this.__assetpath = Object(r.a)(e);
          }
          return this.__assetpath;
        }
        register(t) {
          if ((t = t || this.id)) {
            if (s.f && void 0 !== l(t))
              throw (a(t, null),
              new Error(`strictTemplatePolicy: dom-module ${t} re-registered`));
            (this.id = t),
              a(t, this),
              (e = this).querySelector("style") &&
                console.warn("dom-module %s has style outside template", e.id);
          }
          var e;
        }
      }
      (c.prototype.modules = i), customElements.define("dom-module", c);
    },
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "c", function() {
        return d;
      }),
        n.d(e, "b", function() {
          return _;
        }),
        n.d(e, "a", function() {
          return f;
        });
      var r = n(40),
        s = n(18);
      const i = "link[rel=import][type~=css]",
        o = "include",
        a = "shady-unscoped";
      function l(t) {
        return r.a.import(t);
      }
      function c(t) {
        let e = t.body ? t.body : t;
        const n = Object(s.b)(e.textContent, t.baseURI),
          r = document.createElement("style");
        return (r.textContent = n), r;
      }
      function h(t) {
        const e = t.trim().split(/\s+/),
          n = [];
        for (let r = 0; r < e.length; r++) n.push(...u(e[r]));
        return n;
      }
      function u(t) {
        const e = l(t);
        if (!e)
          return (
            console.warn("Could not find style data in module named", t), []
          );
        if (void 0 === e._styles) {
          const t = [];
          t.push(...p(e));
          const n = e.querySelector("template");
          n && t.push(...d(n, e.assetpath)), (e._styles = t);
        }
        return e._styles;
      }
      function d(t, e) {
        if (!t._styles) {
          const n = [],
            r = t.content.querySelectorAll("style");
          for (let t = 0; t < r.length; t++) {
            let i = r[t],
              a = i.getAttribute(o);
            a &&
              n.push(
                ...h(a).filter(function(t, e, n) {
                  return n.indexOf(t) === e;
                })
              ),
              e && (i.textContent = Object(s.b)(i.textContent, e)),
              n.push(i);
          }
          t._styles = n;
        }
        return t._styles;
      }
      function _(t) {
        let e = l(t);
        return e ? p(e) : [];
      }
      function p(t) {
        const e = [],
          n = t.querySelectorAll(i);
        for (let r = 0; r < n.length; r++) {
          let t = n[r];
          if (t.import) {
            const n = t.import,
              r = t.hasAttribute(a);
            if (r && !n._unscopedStyle) {
              const t = c(n);
              t.setAttribute(a, ""), (n._unscopedStyle = t);
            } else n._style || (n._style = c(n));
            e.push(r ? n._unscopedStyle : n._style);
          }
        }
        return e;
      }
      function f(t) {
        let e = t.trim().split(/\s+/),
          n = "";
        for (let r = 0; r < e.length; r++) n += m(e[r]);
        return n;
      }
      function m(t) {
        let e = l(t);
        if (e && void 0 === e._cssText) {
          let t = y(e),
            n = e.querySelector("template");
          n &&
            (t += (function(t, e) {
              let n = "";
              const r = d(t, e);
              for (let s = 0; s < r.length; s++) {
                let t = r[s];
                t.parentNode && t.parentNode.removeChild(t),
                  (n += t.textContent);
              }
              return n;
            })(n, e.assetpath)),
            (e._cssText = t || null);
        }
        return (
          e || console.warn("Could not find style data in module named", t),
          (e && e._cssText) || ""
        );
      }
      function y(t) {
        let e = "",
          n = p(t);
        for (let r = 0; r < n.length; r++) e += n[r].textContent;
        return e;
      }
    },
    function(t, e, n) {
      "use strict";
      var r = n(13);
      class s {
        constructor() {
          (this.start = 0),
            (this.end = 0),
            (this.previous = null),
            (this.parent = null),
            (this.rules = null),
            (this.parsedCssText = ""),
            (this.cssText = ""),
            (this.atRule = !1),
            (this.type = 0),
            (this.keyframesName = ""),
            (this.selector = ""),
            (this.parsedSelector = "");
        }
      }
      function i(t) {
        return (function t(e, n) {
          let r = n.substring(e.start, e.end - 1);
          e.parsedCssText = e.cssText = r.trim();
          if (e.parent) {
            let t = e.previous ? e.previous.end : e.parent.start;
            r = (r = (r = (function(t) {
              return t.replace(/\\([0-9a-f]{1,6})\s/gi, function() {
                let t = arguments[1],
                  e = 6 - t.length;
                for (; e--; ) t = "0" + t;
                return "\\" + t;
              });
            })((r = n.substring(t, e.start - 1)))).replace(
              h.multipleSpaces,
              " "
            )).substring(r.lastIndexOf(";") + 1);
            let s = (e.parsedSelector = e.selector = r.trim());
            (e.atRule = 0 === s.indexOf(_)),
              e.atRule
                ? 0 === s.indexOf(d)
                  ? (e.type = a.MEDIA_RULE)
                  : s.match(h.keyframesRule) &&
                    ((e.type = a.KEYFRAMES_RULE),
                    (e.keyframesName = e.selector
                      .split(h.multipleSpaces)
                      .pop()))
                : 0 === s.indexOf(u)
                ? (e.type = a.MIXIN_RULE)
                : (e.type = a.STYLE_RULE);
          }
          let s = e.rules;
          if (s)
            for (let i, o = 0, a = s.length; o < a && (i = s[o]); o++) t(i, n);
          return e;
        })(
          (function(t) {
            let e = new s();
            (e.start = 0), (e.end = t.length);
            let n = e;
            for (let r = 0, i = t.length; r < i; r++)
              if (t[r] === l) {
                n.rules || (n.rules = []);
                let t = n,
                  e = t.rules[t.rules.length - 1] || null;
                ((n = new s()).start = r + 1),
                  (n.parent = t),
                  (n.previous = e),
                  t.rules.push(n);
              } else t[r] === c && ((n.end = r + 1), (n = n.parent || e));
            return e;
          })((t = t.replace(h.comments, "").replace(h.port, ""))),
          t
        );
      }
      function o(t, e, n = "") {
        let r = "";
        if (t.cssText || t.rules) {
          let n = t.rules;
          if (
            n &&
            !(function(t) {
              let e = t[0];
              return (
                Boolean(e) && Boolean(e.selector) && 0 === e.selector.indexOf(u)
              );
            })(n)
          )
            for (let t, s = 0, i = n.length; s < i && (t = n[s]); s++)
              r = o(t, e, r);
          else
            (r = (r = e
              ? t.cssText
              : (function(t) {
                  return (function(t) {
                    return t.replace(h.mixinApply, "").replace(h.varApply, "");
                  })(
                    (t = (function(t) {
                      return t
                        .replace(h.customProp, "")
                        .replace(h.mixinProp, "");
                    })(t))
                  );
                })(t.cssText)).trim()) && (r = "  " + r + "\n");
        }
        return (
          r &&
            (t.selector && (n += t.selector + " " + l + "\n"),
            (n += r),
            t.selector && (n += c + "\n\n")),
          n
        );
      }
      const a = {
          STYLE_RULE: 1,
          KEYFRAMES_RULE: 7,
          MEDIA_RULE: 4,
          MIXIN_RULE: 1e3,
        },
        l = "{",
        c = "}",
        h = {
          comments: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
          port: /@import[^;]*;/gim,
          customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
          mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
          mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
          varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
          keyframesRule: /^@[^\s]*keyframes/,
          multipleSpaces: /\s+/g,
        },
        u = "--",
        d = "@media",
        _ = "@";
      var p = n(20);
      const f = new Set(),
        m = "shady-unscoped";
      function y(t) {
        const e = t.textContent;
        if (!f.has(e)) {
          f.add(e);
          const n = t.cloneNode(!0);
          document.head.appendChild(n);
        }
      }
      function b(t) {
        return t.hasAttribute(m);
      }
      function g(t, e) {
        return t
          ? ("string" == typeof t && (t = i(t)), e && C(t, e), o(t, r.c))
          : "";
      }
      function P(t) {
        return (
          !t.__cssRules && t.textContent && (t.__cssRules = i(t.textContent)),
          t.__cssRules || null
        );
      }
      function C(t, e, n, r) {
        if (!t) return;
        let s = !1,
          i = t.type;
        if (r && i === a.MEDIA_RULE) {
          let e = t.selector.match(p.a);
          e && (window.matchMedia(e[1]).matches || (s = !0));
        }
        i === a.STYLE_RULE
          ? e(t)
          : n && i === a.KEYFRAMES_RULE
          ? n(t)
          : i === a.MIXIN_RULE && (s = !0);
        let o = t.rules;
        if (o && !s)
          for (let a, l = 0, c = o.length; l < c && (a = o[l]); l++)
            C(a, e, n, r);
      }
      function v(t, e) {
        let n = 0;
        for (let r = e, s = t.length; r < s; r++)
          if ("(" === t[r]) n++;
          else if (")" === t[r] && 0 == --n) return r;
        return -1;
      }
      window.ShadyDOM && window.ShadyDOM.wrap;
      const w = "css-build";
      function O(t) {
        if (void 0 !== r.a) return r.a;
        if (void 0 === t.__cssBuild) {
          const e = t.getAttribute(w);
          if (e) t.__cssBuild = e;
          else {
            const e = (function(t) {
              const e =
                "template" === t.localName
                  ? t.content.firstChild
                  : t.firstChild;
              if (e instanceof Comment) {
                const t = e.textContent.trim().split(":");
                if (t[0] === w) return t[1];
              }
              return "";
            })(t);
            "" !== e &&
              (function(t) {
                const e =
                  "template" === t.localName
                    ? t.content.firstChild
                    : t.firstChild;
                e.parentNode.removeChild(e);
              })(t),
              (t.__cssBuild = e);
          }
        }
        return t.__cssBuild || "";
      }
      function S(t) {
        return "" !== O(t);
      }
      var E = n(28);
      const T = /;\s*/m,
        x = /^\s*(initial)|(inherit)\s*$/,
        N = /\s*!important/,
        A = "_-_";
      class I {
        constructor() {
          this._map = {};
        }
        set(t, e) {
          (t = t.trim()), (this._map[t] = { properties: e, dependants: {} });
        }
        get(t) {
          return (t = t.trim()), this._map[t] || null;
        }
      }
      let j = null;
      class M {
        constructor() {
          (this._currentElement = null),
            (this._measureElement = null),
            (this._map = new I());
        }
        detectMixin(t) {
          return Object(E.a)(t);
        }
        gatherStyles(t) {
          const e = (function(t) {
            const e = [],
              n = t.querySelectorAll("style");
            for (let s = 0; s < n.length; s++) {
              const t = n[s];
              b(t)
                ? r.d || (y(t), t.parentNode.removeChild(t))
                : (e.push(t.textContent), t.parentNode.removeChild(t));
            }
            return e.join("").trim();
          })(t.content);
          if (e) {
            const n = document.createElement("style");
            return (
              (n.textContent = e),
              t.content.insertBefore(n, t.content.firstChild),
              n
            );
          }
          return null;
        }
        transformTemplate(t, e) {
          void 0 === t._gatheredStyle &&
            (t._gatheredStyle = this.gatherStyles(t));
          const n = t._gatheredStyle;
          return n ? this.transformStyle(n, e) : null;
        }
        transformStyle(t, e = "") {
          let n = P(t);
          return this.transformRules(n, e), (t.textContent = g(n)), n;
        }
        transformCustomStyle(t) {
          let e = P(t);
          return (
            C(e, (t) => {
              ":root" === t.selector && (t.selector = "html"),
                this.transformRule(t);
            }),
            (t.textContent = g(e)),
            e
          );
        }
        transformRules(t, e) {
          (this._currentElement = e),
            C(t, (t) => {
              this.transformRule(t);
            }),
            (this._currentElement = null);
        }
        transformRule(t) {
          (t.cssText = this.transformCssText(t.parsedCssText, t)),
            ":root" === t.selector && (t.selector = ":host > *");
        }
        transformCssText(t, e) {
          return (
            (t = t.replace(p.c, (t, n, r, s) =>
              this._produceCssProperties(t, n, r, s, e)
            )),
            this._consumeCssProperties(t, e)
          );
        }
        _getInitialValueForProperty(t) {
          return (
            this._measureElement ||
              ((this._measureElement = document.createElement("meta")),
              this._measureElement.setAttribute("apply-shim-measure", ""),
              (this._measureElement.style.all = "initial"),
              document.head.appendChild(this._measureElement)),
            window.getComputedStyle(this._measureElement).getPropertyValue(t)
          );
        }
        _fallbacksFromPreviousRules(t) {
          let e = t;
          for (; e.parent; ) e = e.parent;
          const n = {};
          let r = !1;
          return (
            C(e, (e) => {
              (r = r || e === t) ||
                (e.selector === t.selector &&
                  Object.assign(n, this._cssTextToMap(e.parsedCssText)));
            }),
            n
          );
        }
        _consumeCssProperties(t, e) {
          let n = null;
          for (; (n = p.b.exec(t)); ) {
            let r = n[0],
              s = n[1],
              i = n.index,
              o = i + r.indexOf("@apply"),
              a = i + r.length,
              l = t.slice(0, o),
              c = t.slice(a),
              h = e ? this._fallbacksFromPreviousRules(e) : {};
            Object.assign(h, this._cssTextToMap(l));
            let u = this._atApplyToCssProperties(s, h);
            (t = `${l}${u}${c}`), (p.b.lastIndex = i + u.length);
          }
          return t;
        }
        _atApplyToCssProperties(t, e) {
          t = t.replace(T, "");
          let n = [],
            r = this._map.get(t);
          if ((r || (this._map.set(t, {}), (r = this._map.get(t))), r)) {
            let s, i, o;
            this._currentElement && (r.dependants[this._currentElement] = !0);
            const a = r.properties;
            for (s in a)
              (o = e && e[s]),
                (i = [s, ": var(", t, A, s]),
                o && i.push(",", o.replace(N, "")),
                i.push(")"),
                N.test(a[s]) && i.push(" !important"),
                n.push(i.join(""));
          }
          return n.join("; ");
        }
        _replaceInitialOrInherit(t, e) {
          let n = x.exec(e);
          return (
            n &&
              (e = n[1]
                ? this._getInitialValueForProperty(t)
                : "apply-shim-inherit"),
            e
          );
        }
        _cssTextToMap(t, e = !1) {
          let n,
            r,
            s = t.split(";"),
            i = {};
          for (let o, a, l = 0; l < s.length; l++)
            (o = s[l]) &&
              (a = o.split(":")).length > 1 &&
              ((n = a[0].trim()),
              (r = a.slice(1).join(":")),
              e && (r = this._replaceInitialOrInherit(n, r)),
              (i[n] = r));
          return i;
        }
        _invalidateMixinEntry(t) {
          if (j) for (let e in t.dependants) e !== this._currentElement && j(e);
        }
        _produceCssProperties(t, e, n, r, s) {
          if (
            (n &&
              (function t(e, n) {
                let r = e.indexOf("var(");
                if (-1 === r) return n(e, "", "", "");
                let s = v(e, r + 3),
                  i = e.substring(r + 4, s),
                  o = e.substring(0, r),
                  a = t(e.substring(s + 1), n),
                  l = i.indexOf(",");
                return -1 === l
                  ? n(o, i.trim(), "", a)
                  : n(
                      o,
                      i.substring(0, l).trim(),
                      i.substring(l + 1).trim(),
                      a
                    );
              })(n, (t, e) => {
                e && this._map.get(e) && (r = `@apply ${e};`);
              }),
            !r)
          )
            return t;
          let i = this._consumeCssProperties("" + r, s),
            o = t.slice(0, t.indexOf("--")),
            a = this._cssTextToMap(i, !0),
            l = a,
            c = this._map.get(e),
            h = c && c.properties;
          h ? (l = Object.assign(Object.create(h), a)) : this._map.set(e, l);
          let u,
            d,
            _ = [],
            p = !1;
          for (u in l)
            void 0 === (d = a[u]) && (d = "initial"),
              !h || u in h || (p = !0),
              _.push(`${e}${A}${u}: ${d}`);
          return (
            p && this._invalidateMixinEntry(c),
            c && (c.properties = l),
            n && (o = `${t};${o}`),
            `${o}${_.join("; ")};`
          );
        }
      }
      (M.prototype.detectMixin = M.prototype.detectMixin),
        (M.prototype.transformStyle = M.prototype.transformStyle),
        (M.prototype.transformCustomStyle = M.prototype.transformCustomStyle),
        (M.prototype.transformRules = M.prototype.transformRules),
        (M.prototype.transformRule = M.prototype.transformRule),
        (M.prototype.transformTemplate = M.prototype.transformTemplate),
        (M.prototype._separator = A),
        Object.defineProperty(M.prototype, "invalidCallback", {
          get: () => j,
          set(t) {
            j = t;
          },
        });
      var R = M;
      var L = {};
      const k = "_applyShimCurrentVersion",
        D = "_applyShimNextVersion",
        F = "_applyShimValidatingVersion",
        H = Promise.resolve();
      function z(t) {
        let e = L[t];
        e &&
          (function(t) {
            (t[k] = t[k] || 0), (t[F] = t[F] || 0), (t[D] = (t[D] || 0) + 1);
          })(e);
      }
      function B(t) {
        return t[k] === t[D];
      }
      function q(t) {
        return !B(t) && t[F] === t[D];
      }
      function Y(t) {
        (t[F] = t[D]),
          t._validating ||
            ((t._validating = !0),
            H.then(function() {
              (t[k] = t[D]), (t._validating = !1);
            }));
      }
      n(63);
      const $ = new R();
      class V {
        constructor() {
          (this.customStyleInterface = null), ($.invalidCallback = z);
        }
        ensure() {
          this.customStyleInterface ||
            (window.ShadyCSS.CustomStyleInterface &&
              ((this.customStyleInterface =
                window.ShadyCSS.CustomStyleInterface),
              (this.customStyleInterface.transformCallback = (t) => {
                $.transformCustomStyle(t);
              }),
              (this.customStyleInterface.validateCallback = () => {
                requestAnimationFrame(() => {
                  this.customStyleInterface.enqueued &&
                    this.flushCustomStyles();
                });
              })));
        }
        prepareTemplate(t, e) {
          if ((this.ensure(), S(t))) return;
          L[e] = t;
          let n = $.transformTemplate(t, e);
          t._styleAst = n;
        }
        flushCustomStyles() {
          if ((this.ensure(), !this.customStyleInterface)) return;
          let t = this.customStyleInterface.processStyles();
          if (this.customStyleInterface.enqueued) {
            for (let e = 0; e < t.length; e++) {
              let n = t[e],
                r = this.customStyleInterface.getStyleForCustomStyle(n);
              r && $.transformCustomStyle(r);
            }
            this.customStyleInterface.enqueued = !1;
          }
        }
        styleSubtree(t, e) {
          if ((this.ensure(), e && Object(E.c)(t, e), t.shadowRoot)) {
            this.styleElement(t);
            let e = t.shadowRoot.children || t.shadowRoot.childNodes;
            for (let t = 0; t < e.length; t++) this.styleSubtree(e[t]);
          } else {
            let e = t.children || t.childNodes;
            for (let t = 0; t < e.length; t++) this.styleSubtree(e[t]);
          }
        }
        styleElement(t) {
          this.ensure();
          let { is: e } = (function(t) {
              let e = t.localName,
                n = "",
                r = "";
              return (
                e
                  ? e.indexOf("-") > -1
                    ? (n = e)
                    : ((r = e),
                      (n = (t.getAttribute && t.getAttribute("is")) || ""))
                  : ((n = t.is), (r = t.extends)),
                { is: n, typeExtension: r }
              );
            })(t),
            n = L[e];
          if ((!n || !S(n)) && n && !B(n)) {
            q(n) || (this.prepareTemplate(n, e), Y(n));
            let r = t.shadowRoot;
            if (r) {
              let t = r.querySelector("style");
              t &&
                ((t.__cssRules = n._styleAst),
                (t.textContent = g(n._styleAst)));
            }
          }
        }
        styleDocument(t) {
          this.ensure(), this.styleSubtree(document.body, t);
        }
      }
      if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
        const t = new V();
        let e = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;
        (window.ShadyCSS = {
          prepareTemplate(e, n, r) {
            t.flushCustomStyles(), t.prepareTemplate(e, n);
          },
          prepareTemplateStyles(t, e, n) {
            window.ShadyCSS.prepareTemplate(t, e, n);
          },
          prepareTemplateDom(t, e) {},
          styleSubtree(e, n) {
            t.flushCustomStyles(), t.styleSubtree(e, n);
          },
          styleElement(e) {
            t.flushCustomStyles(), t.styleElement(e);
          },
          styleDocument(e) {
            t.flushCustomStyles(), t.styleDocument(e);
          },
          getComputedStyleValue: (t, e) => Object(E.b)(t, e),
          flushCustomStyles() {
            t.flushCustomStyles();
          },
          nativeCss: r.c,
          nativeShadow: r.d,
          cssBuild: r.a,
          disableRuntime: r.b,
        }),
          e && (window.ShadyCSS.CustomStyleInterface = e);
      }
      window.ShadyCSS.ApplyShim = $;
      var U = n(36),
        J = n(45),
        X = n(47),
        W = n(8);
      const G = /:host\(:dir\((ltr|rtl)\)\)/g,
        Z = ':host([dir="$1"])',
        K = /([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,
        Q = ':host([dir="$2"]) $1',
        tt = [];
      let et = null,
        nt = "";
      function rt() {
        nt = document.documentElement.getAttribute("dir");
      }
      function st(t) {
        if (!t.__autoDirOptOut) {
          t.setAttribute("dir", nt);
        }
      }
      function it() {
        rt(), (nt = document.documentElement.getAttribute("dir"));
        for (let t = 0; t < tt.length; t++) st(tt[t]);
      }
      const ot = Object(W.a)((t) => {
        et ||
          (rt(),
          (et = new MutationObserver(it)).observe(document.documentElement, {
            attributes: !0,
            attributeFilter: ["dir"],
          }));
        const e = Object(X.a)(t);
        class n extends e {
          static _processStyleText(t, e) {
            return (
              (t = super._processStyleText(t, e)),
              (t = this._replaceDirInCssText(t))
            );
          }
          static _replaceDirInCssText(t) {
            let e = t;
            return (
              t !== (e = (e = e.replace(G, Z)).replace(K, Q)) &&
                (this.__activateDir = !0),
              e
            );
          }
          constructor() {
            super(), (this.__autoDirOptOut = !1);
          }
          ready() {
            super.ready(), (this.__autoDirOptOut = this.hasAttribute("dir"));
          }
          connectedCallback() {
            e.prototype.connectedCallback && super.connectedCallback(),
              this.constructor.__activateDir &&
                (et && et.takeRecords().length && it(),
                tt.push(this),
                st(this));
          }
          disconnectedCallback() {
            if (
              (e.prototype.disconnectedCallback && super.disconnectedCallback(),
              this.constructor.__activateDir)
            ) {
              const t = tt.indexOf(this);
              t > -1 && tt.splice(t, 1);
            }
          }
        }
        return (n.__activateDir = !1), n;
      });
      n(61);
      function at() {
        document.body.removeAttribute("unresolved");
      }
      "interactive" === document.readyState ||
      "complete" === document.readyState
        ? at()
        : window.addEventListener("DOMContentLoaded", at);
      var lt = n(1),
        ct = n(35),
        ht = n(21),
        ut = n(11),
        dt = n(2);
      n.d(e, "a", function() {
        return pt;
      });
      let _t = window.ShadyCSS;
      const pt = Object(W.a)((t) => {
        const e = ot(Object(J.a)(Object(U.a)(t))),
          n = { x: "pan-x", y: "pan-y", none: "none", all: "auto" };
        class r extends e {
          constructor() {
            super(),
              this.isAttached,
              this.__boundListeners,
              this._debouncers,
              this._applyListeners();
          }
          static get importMeta() {
            return this.prototype.importMeta;
          }
          created() {}
          connectedCallback() {
            super.connectedCallback(), (this.isAttached = !0), this.attached();
          }
          attached() {}
          disconnectedCallback() {
            super.disconnectedCallback(),
              (this.isAttached = !1),
              this.detached();
          }
          detached() {}
          attributeChangedCallback(t, e, n, r) {
            e !== n &&
              (super.attributeChangedCallback(t, e, n, r),
              this.attributeChanged(t, e, n));
          }
          attributeChanged(t, e, n) {}
          _initializeProperties() {
            let t = Object.getPrototypeOf(this);
            t.hasOwnProperty("__hasRegisterFinished") ||
              ((t.__hasRegisterFinished = !0), this._registered()),
              super._initializeProperties(),
              (this.root = this),
              this.created();
          }
          _registered() {}
          ready() {
            this._ensureAttributes(), super.ready();
          }
          _ensureAttributes() {}
          _applyListeners() {}
          serialize(t) {
            return this._serializeValue(t);
          }
          deserialize(t, e) {
            return this._deserializeValue(t, e);
          }
          reflectPropertyToAttribute(t, e, n) {
            this._propertyToAttribute(t, e, n);
          }
          serializeValueToAttribute(t, e, n) {
            this._valueToNodeAttribute(n || this, t, e);
          }
          extend(t, e) {
            if (!t || !e) return t || e;
            let n = Object.getOwnPropertyNames(e);
            for (let r, s = 0; s < n.length && (r = n[s]); s++) {
              let n = Object.getOwnPropertyDescriptor(e, r);
              n && Object.defineProperty(t, r, n);
            }
            return t;
          }
          mixin(t, e) {
            for (let n in e) t[n] = e[n];
            return t;
          }
          chainObject(t, e) {
            return t && e && t !== e && (t.__proto__ = e), t;
          }
          instanceTemplate(t) {
            let e = this.constructor._contentForTemplate(t);
            return document.importNode(e, !0);
          }
          fire(t, e, n) {
            (n = n || {}), (e = null == e ? {} : e);
            let r = new Event(t, {
              bubbles: void 0 === n.bubbles || n.bubbles,
              cancelable: Boolean(n.cancelable),
              composed: void 0 === n.composed || n.composed,
            });
            return (r.detail = e), (n.node || this).dispatchEvent(r), r;
          }
          listen(t, e, n) {
            t = t || this;
            let r =
                this.__boundListeners ||
                (this.__boundListeners = new WeakMap()),
              s = r.get(t);
            s || ((s = {}), r.set(t, s));
            let i = e + n;
            s[i] || (s[i] = this._addMethodEventListenerToNode(t, e, n, this));
          }
          unlisten(t, e, n) {
            t = t || this;
            let r = this.__boundListeners && this.__boundListeners.get(t),
              s = e + n,
              i = r && r[s];
            i && (this._removeEventListenerFromNode(t, e, i), (r[s] = null));
          }
          setScrollDirection(t, e) {
            Object(ct.f)(e || this, n[t] || "auto");
          }
          $$(t) {
            return this.root.querySelector(t);
          }
          get domHost() {
            let t = this.getRootNode();
            return t instanceof DocumentFragment ? t.host : t;
          }
          distributeContent() {
            window.ShadyDOM && this.shadowRoot && ShadyDOM.flush();
          }
          getEffectiveChildNodes() {
            return Object(lt.a)(this).getEffectiveChildNodes();
          }
          queryDistributedElements(t) {
            return Object(lt.a)(this).queryDistributedElements(t);
          }
          getEffectiveChildren() {
            return this.getEffectiveChildNodes().filter(function(t) {
              return t.nodeType === Node.ELEMENT_NODE;
            });
          }
          getEffectiveTextContent() {
            let t = this.getEffectiveChildNodes(),
              e = [];
            for (let n, r = 0; (n = t[r]); r++)
              n.nodeType !== Node.COMMENT_NODE && e.push(n.textContent);
            return e.join("");
          }
          queryEffectiveChildren(t) {
            let e = this.queryDistributedElements(t);
            return e && e[0];
          }
          queryAllEffectiveChildren(t) {
            return this.queryDistributedElements(t);
          }
          getContentChildNodes(t) {
            let e = this.root.querySelector(t || "slot");
            return e ? Object(lt.a)(e).getDistributedNodes() : [];
          }
          getContentChildren(t) {
            return this.getContentChildNodes(t).filter(function(t) {
              return t.nodeType === Node.ELEMENT_NODE;
            });
          }
          isLightDescendant(t) {
            return (
              this !== t &&
              this.contains(t) &&
              this.getRootNode() === t.getRootNode()
            );
          }
          isLocalDescendant(t) {
            return this.root === t.getRootNode();
          }
          scopeSubtree(t, e) {}
          getComputedStyleValue(t) {
            return _t.getComputedStyleValue(this, t);
          }
          debounce(t, e, n) {
            return (
              (this._debouncers = this._debouncers || {}),
              (this._debouncers[t] = ht.a.debounce(
                this._debouncers[t],
                n > 0 ? ut.d.after(n) : ut.c,
                e.bind(this)
              ))
            );
          }
          isDebouncerActive(t) {
            this._debouncers = this._debouncers || {};
            let e = this._debouncers[t];
            return !(!e || !e.isActive());
          }
          flushDebouncer(t) {
            this._debouncers = this._debouncers || {};
            let e = this._debouncers[t];
            e && e.flush();
          }
          cancelDebouncer(t) {
            this._debouncers = this._debouncers || {};
            let e = this._debouncers[t];
            e && e.cancel();
          }
          async(t, e) {
            return e > 0 ? ut.d.run(t.bind(this), e) : ~ut.c.run(t.bind(this));
          }
          cancelAsync(t) {
            t < 0 ? ut.c.cancel(~t) : ut.d.cancel(t);
          }
          create(t, e) {
            let n = document.createElement(t);
            if (e)
              if (n.setProperties) n.setProperties(e);
              else for (let r in e) n[r] = e[r];
            return n;
          }
          elementMatches(t, e) {
            return Object(lt.b)(e || this, t);
          }
          toggleAttribute(t, e) {
            let n = this;
            return (
              3 === arguments.length && (n = arguments[2]),
              1 == arguments.length && (e = !n.hasAttribute(t)),
              e ? (n.setAttribute(t, ""), !0) : (n.removeAttribute(t), !1)
            );
          }
          toggleClass(t, e, n) {
            (n = n || this),
              1 == arguments.length && (e = !n.classList.contains(t)),
              e ? n.classList.add(t) : n.classList.remove(t);
          }
          transform(t, e) {
            ((e = e || this).style.webkitTransform = t),
              (e.style.transform = t);
          }
          translate3d(t, e, n, r) {
            (r = r || this),
              this.transform("translate3d(" + t + "," + e + "," + n + ")", r);
          }
          arrayDelete(t, e) {
            let n;
            if (Array.isArray(t)) {
              if ((n = t.indexOf(e)) >= 0) return t.splice(n, 1);
            } else {
              if ((n = Object(dt.a)(this, t).indexOf(e)) >= 0)
                return this.splice(t, n, 1);
            }
            return null;
          }
          _logger(t, e) {
            switch (
              (Array.isArray(e) &&
                1 === e.length &&
                Array.isArray(e[0]) &&
                (e = e[0]),
              t)
            ) {
              case "log":
              case "warn":
              case "error":
                console[t](...e);
            }
          }
          _log(...t) {
            this._logger("log", t);
          }
          _warn(...t) {
            this._logger("warn", t);
          }
          _error(...t) {
            this._logger("error", t);
          }
          _logf(t, ...e) {
            return ["[%s::%s]", this.is, t, ...e];
          }
        }
        return (r.prototype.is = ""), r;
      });
    },
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      });
      n(7);
      var r = n(8),
        s = n(35);
      const i = Object(r.a)((t) => {
        return class extends t {
          _addEventListenerToNode(t, e, n) {
            Object(s.b)(t, e, n) || super._addEventListenerToNode(t, e, n);
          }
          _removeEventListenerFromNode(t, e, n) {
            Object(s.e)(t, e, n) || super._removeEventListenerFromNode(t, e, n);
          }
        };
      });
    },
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return l;
      });
      n(7);
      var r = n(8),
        s = n(22),
        i = n(48);
      const o = {};
      let a = HTMLElement.prototype;
      for (; a; ) {
        let t = Object.getOwnPropertyNames(a);
        for (let e = 0; e < t.length; e++) o[t[e]] = !0;
        a = Object.getPrototypeOf(a);
      }
      const l = Object(r.a)((t) => {
        const e = Object(i.a)(t);
        return class extends e {
          static createPropertiesForAttributes() {
            let t = this.observedAttributes;
            for (let e = 0; e < t.length; e++)
              this.prototype._createPropertyAccessor(Object(s.b)(t[e]));
          }
          static attributeNameForProperty(t) {
            return Object(s.a)(t);
          }
          _initializeProperties() {
            this.__dataProto &&
              (this._initializeProtoProperties(this.__dataProto),
              (this.__dataProto = null)),
              super._initializeProperties();
          }
          _initializeProtoProperties(t) {
            for (let e in t) this._setProperty(e, t[e]);
          }
          _ensureAttribute(t, e) {
            const n = this;
            n.hasAttribute(t) || this._valueToNodeAttribute(n, e, t);
          }
          _serializeValue(t) {
            switch (typeof t) {
              case "object":
                if (t instanceof Date) return t.toString();
                if (t)
                  try {
                    return JSON.stringify(t);
                  } catch (e) {
                    return "";
                  }
              default:
                return super._serializeValue(t);
            }
          }
          _deserializeValue(t, e) {
            let n;
            switch (e) {
              case Object:
                try {
                  n = JSON.parse(t);
                } catch (r) {
                  n = t;
                }
                break;
              case Array:
                try {
                  n = JSON.parse(t);
                } catch (r) {
                  (n = null),
                    console.warn(
                      `Polymer::Attributes: couldn't decode Array as JSON: ${t}`
                    );
                }
                break;
              case Date:
                (n = isNaN(t) ? String(t) : Number(t)), (n = new Date(n));
                break;
              default:
                n = super._deserializeValue(t, e);
            }
            return n;
          }
          _definePropertyAccessor(t, e) {
            !(function(t, e) {
              if (!o[e]) {
                let n = t[e];
                void 0 !== n &&
                  (t.__data
                    ? t._setPendingProperty(e, n)
                    : (t.__dataProto
                        ? t.hasOwnProperty(
                            JSCompiler_renameProperty("__dataProto", t)
                          ) || (t.__dataProto = Object.create(t.__dataProto))
                        : (t.__dataProto = {}),
                      (t.__dataProto[e] = n)));
              }
            })(this, t),
              super._definePropertyAccessor(t, e);
          }
          _hasAccessor(t) {
            return this.__dataHasAccessor && this.__dataHasAccessor[t];
          }
          _isPropertyPending(t) {
            return Boolean(this.__dataPending && t in this.__dataPending);
          }
        };
      });
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      });
      n(7);
      var r = n(8);
      const s = n(11).c,
        i = Object(r.a)((t) => {
          return class extends t {
            static createProperties(t) {
              const e = this.prototype;
              for (let n in t) n in e || e._createPropertyAccessor(n);
            }
            static attributeNameForProperty(t) {
              return t.toLowerCase();
            }
            static typeForProperty(t) {}
            _createPropertyAccessor(t, e) {
              this._addPropertyToAttributeMap(t),
                this.hasOwnProperty("__dataHasAccessor") ||
                  (this.__dataHasAccessor = Object.assign(
                    {},
                    this.__dataHasAccessor
                  )),
                this.__dataHasAccessor[t] ||
                  ((this.__dataHasAccessor[t] = !0),
                  this._definePropertyAccessor(t, e));
            }
            _addPropertyToAttributeMap(t) {
              if (
                (this.hasOwnProperty("__dataAttributes") ||
                  (this.__dataAttributes = Object.assign(
                    {},
                    this.__dataAttributes
                  )),
                !this.__dataAttributes[t])
              ) {
                const e = this.constructor.attributeNameForProperty(t);
                this.__dataAttributes[e] = t;
              }
            }
            _definePropertyAccessor(t, e) {
              Object.defineProperty(this, t, {
                get() {
                  return this._getProperty(t);
                },
                set: e
                  ? function() {}
                  : function(e) {
                      this._setProperty(t, e);
                    },
              });
            }
            constructor() {
              super(),
                (this.__dataEnabled = !1),
                (this.__dataReady = !1),
                (this.__dataInvalid = !1),
                (this.__data = {}),
                (this.__dataPending = null),
                (this.__dataOld = null),
                (this.__dataInstanceProps = null),
                (this.__serializing = !1),
                this._initializeProperties();
            }
            ready() {
              (this.__dataReady = !0), this._flushProperties();
            }
            _initializeProperties() {
              for (let t in this.__dataHasAccessor)
                this.hasOwnProperty(t) &&
                  ((this.__dataInstanceProps = this.__dataInstanceProps || {}),
                  (this.__dataInstanceProps[t] = this[t]),
                  delete this[t]);
            }
            _initializeInstanceProperties(t) {
              Object.assign(this, t);
            }
            _setProperty(t, e) {
              this._setPendingProperty(t, e) && this._invalidateProperties();
            }
            _getProperty(t) {
              return this.__data[t];
            }
            _setPendingProperty(t, e, n) {
              let r = this.__data[t],
                s = this._shouldPropertyChange(t, e, r);
              return (
                s &&
                  (this.__dataPending ||
                    ((this.__dataPending = {}), (this.__dataOld = {})),
                  !this.__dataOld ||
                    t in this.__dataOld ||
                    (this.__dataOld[t] = r),
                  (this.__data[t] = e),
                  (this.__dataPending[t] = e)),
                s
              );
            }
            _invalidateProperties() {
              !this.__dataInvalid &&
                this.__dataReady &&
                ((this.__dataInvalid = !0),
                s.run(() => {
                  this.__dataInvalid &&
                    ((this.__dataInvalid = !1), this._flushProperties());
                }));
            }
            _enableProperties() {
              this.__dataEnabled ||
                ((this.__dataEnabled = !0),
                this.__dataInstanceProps &&
                  (this._initializeInstanceProperties(this.__dataInstanceProps),
                  (this.__dataInstanceProps = null)),
                this.ready());
            }
            _flushProperties() {
              const t = this.__data,
                e = this.__dataPending,
                n = this.__dataOld;
              this._shouldPropertiesChange(t, e, n) &&
                ((this.__dataPending = null),
                (this.__dataOld = null),
                this._propertiesChanged(t, e, n));
            }
            _shouldPropertiesChange(t, e, n) {
              return Boolean(e);
            }
            _propertiesChanged(t, e, n) {}
            _shouldPropertyChange(t, e, n) {
              return n !== e && (n == n || e == e);
            }
            attributeChangedCallback(t, e, n, r) {
              e !== n && this._attributeToProperty(t, n),
                super.attributeChangedCallback &&
                  super.attributeChangedCallback(t, e, n, r);
            }
            _attributeToProperty(t, e, n) {
              if (!this.__serializing) {
                const r = this.__dataAttributes,
                  s = (r && r[t]) || t;
                this[s] = this._deserializeValue(
                  e,
                  n || this.constructor.typeForProperty(s)
                );
              }
            }
            _propertyToAttribute(t, e, n) {
              (this.__serializing = !0),
                (n = arguments.length < 3 ? this[t] : n),
                this._valueToNodeAttribute(
                  this,
                  n,
                  e || this.constructor.attributeNameForProperty(t)
                ),
                (this.__serializing = !1);
            }
            _valueToNodeAttribute(t, e, n) {
              const r = this._serializeValue(e);
              void 0 === r ? t.removeAttribute(n) : t.setAttribute(n, r);
            }
            _serializeValue(t) {
              switch (typeof t) {
                case "boolean":
                  return t ? "" : void 0;
                default:
                  return null != t ? t.toString() : void 0;
              }
            }
            _deserializeValue(t, e) {
              switch (e) {
                case Boolean:
                  return null !== t;
                case Number:
                  return Number(t);
                default:
                  return t;
              }
            }
          };
        });
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return c;
      });
      n(7);
      function r(t, e, n) {
        return { index: t, removed: e, addedCount: n };
      }
      const s = 0,
        i = 1,
        o = 2,
        a = 3;
      function l(t, e, n, l, c, u) {
        let d,
          _ = 0,
          p = 0,
          f = Math.min(n - e, u - c);
        if (
          (0 == e &&
            0 == c &&
            (_ = (function(t, e, n) {
              for (let r = 0; r < n; r++) if (!h(t[r], e[r])) return r;
              return n;
            })(t, l, f)),
          n == t.length &&
            u == l.length &&
            (p = (function(t, e, n) {
              let r = t.length,
                s = e.length,
                i = 0;
              for (; i < n && h(t[--r], e[--s]); ) i++;
              return i;
            })(t, l, f - _)),
          (c += _),
          (u -= p),
          (n -= p) - (e += _) == 0 && u - c == 0)
        )
          return [];
        if (e == n) {
          for (d = r(e, [], 0); c < u; ) d.removed.push(l[c++]);
          return [d];
        }
        if (c == u) return [r(e, [], n - e)];
        let m = (function(t) {
          let e = t.length - 1,
            n = t[0].length - 1,
            r = t[e][n],
            l = [];
          for (; e > 0 || n > 0; ) {
            if (0 == e) {
              l.push(o), n--;
              continue;
            }
            if (0 == n) {
              l.push(a), e--;
              continue;
            }
            let c,
              h = t[e - 1][n - 1],
              u = t[e - 1][n],
              d = t[e][n - 1];
            (c = u < d ? (u < h ? u : h) : d < h ? d : h) == h
              ? (h == r ? l.push(s) : (l.push(i), (r = h)), e--, n--)
              : c == u
              ? (l.push(a), e--, (r = u))
              : (l.push(o), n--, (r = d));
          }
          return l.reverse(), l;
        })(
          (function(t, e, n, r, s, i) {
            let o = i - s + 1,
              a = n - e + 1,
              l = new Array(o);
            for (let c = 0; c < o; c++) (l[c] = new Array(a)), (l[c][0] = c);
            for (let c = 0; c < a; c++) l[0][c] = c;
            for (let c = 1; c < o; c++)
              for (let n = 1; n < a; n++)
                if (h(t[e + n - 1], r[s + c - 1])) l[c][n] = l[c - 1][n - 1];
                else {
                  let t = l[c - 1][n] + 1,
                    e = l[c][n - 1] + 1;
                  l[c][n] = t < e ? t : e;
                }
            return l;
          })(t, e, n, l, c, u)
        );
        d = void 0;
        let y = [],
          b = e,
          g = c;
        for (let h = 0; h < m.length; h++)
          switch (m[h]) {
            case s:
              d && (y.push(d), (d = void 0)), b++, g++;
              break;
            case i:
              d || (d = r(b, [], 0)),
                d.addedCount++,
                b++,
                d.removed.push(l[g]),
                g++;
              break;
            case o:
              d || (d = r(b, [], 0)), d.addedCount++, b++;
              break;
            case a:
              d || (d = r(b, [], 0)), d.removed.push(l[g]), g++;
          }
        return d && y.push(d), y;
      }
      function c(t, e) {
        return l(t, 0, t.length, e, 0, e.length);
      }
      function h(t, e) {
        return t === e;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return c;
      });
      n(7);
      let r = !1,
        s = [],
        i = [];
      function o() {
        (r = !0),
          requestAnimationFrame(function() {
            (r = !1),
              a(s),
              setTimeout(function() {
                !(function(t) {
                  for (let e = 0, n = t.length; e < n; e++) l(t.shift());
                })(i);
              });
          });
      }
      function a(t) {
        for (; t.length; ) l(t.shift());
      }
      function l(t) {
        const e = t[0],
          n = t[1],
          r = t[2];
        try {
          n.apply(e, r);
        } catch (s) {
          setTimeout(() => {
            throw s;
          });
        }
      }
      function c(t, e, n) {
        r || o(), i.push([t, e, n]);
      }
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return o;
      });
      n(7);
      var r = n(49),
        s = n(11);
      function i(t) {
        return "slot" === t.localName;
      }
      class o {
        static getFlattenedNodes(t) {
          return i(t)
            ? (t = t).assignedNodes({ flatten: !0 })
            : Array.from(t.childNodes)
                .map((t) =>
                  i(t) ? (t = t).assignedNodes({ flatten: !0 }) : [t]
                )
                .reduce((t, e) => t.concat(e), []);
        }
        constructor(t, e) {
          (this._shadyChildrenObserver = null),
            (this._nativeChildrenObserver = null),
            (this._connected = !1),
            (this._target = t),
            (this.callback = e),
            (this._effectiveNodes = []),
            (this._observer = null),
            (this._scheduled = !1),
            (this._boundSchedule = () => {
              this._schedule();
            }),
            this.connect(),
            this._schedule();
        }
        connect() {
          i(this._target)
            ? this._listenSlots([this._target])
            : this._target.children &&
              (this._listenSlots(this._target.children),
              window.ShadyDOM
                ? (this._shadyChildrenObserver = ShadyDOM.observeChildren(
                    this._target,
                    (t) => {
                      this._processMutations(t);
                    }
                  ))
                : ((this._nativeChildrenObserver = new MutationObserver((t) => {
                    this._processMutations(t);
                  })),
                  this._nativeChildrenObserver.observe(this._target, {
                    childList: !0,
                  }))),
            (this._connected = !0);
        }
        disconnect() {
          i(this._target)
            ? this._unlistenSlots([this._target])
            : this._target.children &&
              (this._unlistenSlots(this._target.children),
              window.ShadyDOM && this._shadyChildrenObserver
                ? (ShadyDOM.unobserveChildren(this._shadyChildrenObserver),
                  (this._shadyChildrenObserver = null))
                : this._nativeChildrenObserver &&
                  (this._nativeChildrenObserver.disconnect(),
                  (this._nativeChildrenObserver = null))),
            (this._connected = !1);
        }
        _schedule() {
          this._scheduled ||
            ((this._scheduled = !0), s.c.run(() => this.flush()));
        }
        _processMutations(t) {
          this._processSlotMutations(t), this.flush();
        }
        _processSlotMutations(t) {
          if (t)
            for (let e = 0; e < t.length; e++) {
              let n = t[e];
              n.addedNodes && this._listenSlots(n.addedNodes),
                n.removedNodes && this._unlistenSlots(n.removedNodes);
            }
        }
        flush() {
          if (!this._connected) return !1;
          window.ShadyDOM && ShadyDOM.flush(),
            this._nativeChildrenObserver
              ? this._processSlotMutations(
                  this._nativeChildrenObserver.takeRecords()
                )
              : this._shadyChildrenObserver &&
                this._processSlotMutations(
                  this._shadyChildrenObserver.takeRecords()
                ),
            (this._scheduled = !1);
          let t = { target: this._target, addedNodes: [], removedNodes: [] },
            e = this.constructor.getFlattenedNodes(this._target),
            n = Object(r.a)(e, this._effectiveNodes);
          for (let r, i = 0; i < n.length && (r = n[i]); i++)
            for (let e, n = 0; n < r.removed.length && (e = r.removed[n]); n++)
              t.removedNodes.push(e);
          for (let r, i = 0; i < n.length && (r = n[i]); i++)
            for (let n = r.index; n < r.index + r.addedCount; n++)
              t.addedNodes.push(e[n]);
          this._effectiveNodes = e;
          let s = !1;
          return (
            (t.addedNodes.length || t.removedNodes.length) &&
              ((s = !0), this.callback.call(this._target, t)),
            s
          );
        }
        _listenSlots(t) {
          for (let e = 0; e < t.length; e++) {
            let n = t[e];
            i(n) && n.addEventListener("slotchange", this._boundSchedule);
          }
        }
        _unlistenSlots(t) {
          for (let e = 0; e < t.length; e++) {
            let n = t[e];
            i(n) && n.removeEventListener("slotchange", this._boundSchedule);
          }
        }
      }
    },
    function(t, e, n) {
      "use strict";
      let r,
        s = null,
        i = (window.HTMLImports && window.HTMLImports.whenReady) || null;
      function o(t) {
        requestAnimationFrame(function() {
          i
            ? i(t)
            : (s ||
                ((s = new Promise((t) => {
                  r = t;
                })),
                "complete" === document.readyState
                  ? r()
                  : document.addEventListener("readystatechange", () => {
                      "complete" === document.readyState && r();
                    })),
              s.then(function() {
                t && t();
              }));
        });
      }
      n.d(e, "a", function() {
        return u;
      });
      const a = "__seenByShadyCSS",
        l = "__shadyCSSCachedStyle";
      let c = null,
        h = null;
      class u {
        constructor() {
          (this.customStyles = []),
            (this.enqueued = !1),
            o(() => {
              window.ShadyCSS.flushCustomStyles &&
                window.ShadyCSS.flushCustomStyles();
            });
        }
        enqueueDocumentValidation() {
          !this.enqueued && h && ((this.enqueued = !0), o(h));
        }
        addCustomStyle(t) {
          t[a] ||
            ((t[a] = !0),
            this.customStyles.push(t),
            this.enqueueDocumentValidation());
        }
        getStyleForCustomStyle(t) {
          if (t[l]) return t[l];
          let e;
          return (e = t.getStyle ? t.getStyle() : t);
        }
        processStyles() {
          const t = this.customStyles;
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            if (n[l]) continue;
            const r = this.getStyleForCustomStyle(n);
            if (r) {
              const t = r.__appliedElement || r;
              c && c(t), (n[l] = t);
            }
          }
          return t;
        }
      }
      (u.prototype.addCustomStyle = u.prototype.addCustomStyle),
        (u.prototype.getStyleForCustomStyle =
          u.prototype.getStyleForCustomStyle),
        (u.prototype.processStyles = u.prototype.processStyles),
        Object.defineProperties(u.prototype, {
          transformCallback: {
            get: () => c,
            set(t) {
              c = t;
            },
          },
          validateCallback: {
            get: () => h,
            set(t) {
              let e = !1;
              h || (e = !0), (h = t), e && this.enqueueDocumentValidation();
            },
          },
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "b", function() {
        return i;
      }),
        n.d(e, "a", function() {
          return a;
        });
      var r = n(43);
      let s = {
        attached: !0,
        detached: !0,
        ready: !0,
        created: !0,
        beforeRegister: !0,
        registered: !0,
        attributeChanged: !0,
        behaviors: !0,
      };
      function i(t, e) {
        if (!t) return (e = e);
        (e = Object(r.a)(e)), Array.isArray(t) || (t = [t]);
        let n = e.prototype.behaviors;
        return (
          (e = (function t(e, n) {
            for (let r = 0; r < e.length; r++) {
              let s = e[r];
              s && (n = Array.isArray(s) ? t(s, n) : o(s, n));
            }
            return n;
          })(
            (t = (function t(e, n, r) {
              n = n || [];
              for (let s = e.length - 1; s >= 0; s--) {
                let i = e[s];
                i
                  ? Array.isArray(i)
                    ? t(i, n)
                    : n.indexOf(i) < 0 &&
                      (!r || r.indexOf(i) < 0) &&
                      n.unshift(i)
                  : console.warn(
                      "behavior is null, check for missing or 404 import"
                    );
              }
              return n;
            })(t, null, n)),
            e
          )),
          n && (t = n.concat(t)),
          (e.prototype.behaviors = t),
          e
        );
      }
      function o(t, e) {
        class n extends e {
          static get properties() {
            return t.properties;
          }
          static get observers() {
            return t.observers;
          }
          created() {
            super.created(), t.created && t.created.call(this);
          }
          _registered() {
            super._registered(),
              t.beforeRegister &&
                t.beforeRegister.call(Object.getPrototypeOf(this)),
              t.registered && t.registered.call(Object.getPrototypeOf(this));
          }
          _applyListeners() {
            if ((super._applyListeners(), t.listeners))
              for (let e in t.listeners)
                this._addMethodEventListenerToNode(this, e, t.listeners[e]);
          }
          _ensureAttributes() {
            if (t.hostAttributes)
              for (let e in t.hostAttributes)
                this._ensureAttribute(e, t.hostAttributes[e]);
            super._ensureAttributes();
          }
          ready() {
            super.ready(), t.ready && t.ready.call(this);
          }
          attached() {
            super.attached(), t.attached && t.attached.call(this);
          }
          detached() {
            super.detached(), t.detached && t.detached.call(this);
          }
          attributeChanged(e, n, r) {
            super.attributeChanged(e, n, r),
              t.attributeChanged && t.attributeChanged.call(this, e, n, r);
          }
        }
        n.generatedFrom = t;
        for (let r in t)
          if (!(r in s)) {
            let e = Object.getOwnPropertyDescriptor(t, r);
            e && Object.defineProperty(n.prototype, r, e);
          }
        return n;
      }
      const a = function(t, e) {
        t || console.warn("Polymer's Class function requires `info` argument");
        const n = t.behaviors
            ? i(t.behaviors, HTMLElement)
            : Object(r.a)(HTMLElement),
          s = o(t, e ? e(n) : n);
        return (s.is = t.is), s;
      };
    },
    ,
    function(t, e, n) {
      "use strict";
      var r = n(63),
        s = n(28),
        i = n(13);
      const o = new r.a();
      window.ShadyCSS ||
        (window.ShadyCSS = {
          prepareTemplate(t, e, n) {},
          prepareTemplateDom(t, e) {},
          prepareTemplateStyles(t, e, n) {},
          styleSubtree(t, e) {
            o.processStyles(), Object(s.c)(t, e);
          },
          styleElement(t) {
            o.processStyles();
          },
          styleDocument(t) {
            o.processStyles(), Object(s.c)(document.body, t);
          },
          getComputedStyleValue: (t, e) => Object(s.b)(t, e),
          flushCustomStyles() {},
          nativeCss: i.c,
          nativeShadow: i.d,
          cssBuild: i.a,
          disableRuntime: i.b,
        }),
        (window.ShadyCSS.CustomStyleInterface = o);
      var a = n(42);
      const l = "include",
        c = window.ShadyCSS.CustomStyleInterface;
      window.customElements.define(
        "custom-style",
        class extends HTMLElement {
          constructor() {
            super(), (this._style = null), c.addCustomStyle(this);
          }
          getStyle() {
            if (this._style) return this._style;
            const t = this.querySelector("style");
            if (!t) return null;
            this._style = t;
            const e = t.getAttribute(l);
            return (
              e &&
                (t.removeAttribute(l),
                (t.textContent = Object(a.a)(e) + t.textContent)),
              this.ownerDocument !== window.document &&
                window.document.head.appendChild(this),
              this._style
            );
          }
        }
      );
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      var r = n(25),
        s = n(32),
        i = n(21),
        o = n(24),
        a = n(26),
        l = n(2),
        c = n(11);
      const h = Object(a.b)(r.a);
      class u extends h {
        static get is() {
          return "dom-repeat";
        }
        static get template() {
          return null;
        }
        static get properties() {
          return {
            items: { type: Array },
            as: { type: String, value: "item" },
            indexAs: { type: String, value: "index" },
            itemsIndexAs: { type: String, value: "itemsIndex" },
            sort: { type: Function, observer: "__sortChanged" },
            filter: { type: Function, observer: "__filterChanged" },
            observe: { type: String, observer: "__observeChanged" },
            delay: Number,
            renderedItemCount: { type: Number, notify: !0, readOnly: !0 },
            initialCount: { type: Number, observer: "__initializeChunking" },
            targetFramerate: { type: Number, value: 20 },
            _targetFrameTime: {
              type: Number,
              computed: "__computeFrameTime(targetFramerate)",
            },
          };
        }
        static get observers() {
          return ["__itemsChanged(items.*)"];
        }
        constructor() {
          super(),
            (this.__instances = []),
            (this.__limit = 1 / 0),
            (this.__pool = []),
            (this.__renderDebouncer = null),
            (this.__itemsIdxToInstIdx = {}),
            (this.__chunkCount = null),
            (this.__lastChunkTime = null),
            (this.__sortFn = null),
            (this.__filterFn = null),
            (this.__observePaths = null),
            (this.__ctor = null),
            (this.__isDetached = !0),
            (this.template = null);
        }
        disconnectedCallback() {
          super.disconnectedCallback(), (this.__isDetached = !0);
          for (let t = 0; t < this.__instances.length; t++)
            this.__detachInstance(t);
        }
        connectedCallback() {
          if (
            (super.connectedCallback(),
            (this.style.display = "none"),
            this.__isDetached)
          ) {
            this.__isDetached = !1;
            let t = this.parentNode;
            for (let e = 0; e < this.__instances.length; e++)
              this.__attachInstance(e, t);
          }
        }
        __ensureTemplatized() {
          if (!this.__ctor) {
            let t = (this.template = this.querySelector("template"));
            if (!t) {
              let t = new MutationObserver(() => {
                if (!this.querySelector("template"))
                  throw new Error("dom-repeat requires a <template> child");
                t.disconnect(), this.__render();
              });
              return t.observe(this, { childList: !0 }), !1;
            }
            let e = {};
            (e[this.as] = !0),
              (e[this.indexAs] = !0),
              (e[this.itemsIndexAs] = !0),
              (this.__ctor = Object(s.b)(t, this, {
                mutableData: this.mutableData,
                parentModel: !0,
                instanceProps: e,
                forwardHostProp: function(t, e) {
                  let n = this.__instances;
                  for (let r, s = 0; s < n.length && (r = n[s]); s++)
                    r.forwardHostProp(t, e);
                },
                notifyInstanceProp: function(t, e, n) {
                  if (Object(l.e)(this.as, e)) {
                    let r = t[this.itemsIndexAs];
                    e == this.as && (this.items[r] = n);
                    let s = Object(l.i)(this.as, "items." + r, e);
                    this.notifyPath(s, n);
                  }
                },
              }));
          }
          return !0;
        }
        __getMethodHost() {
          return this.__dataHost._methodHost || this.__dataHost;
        }
        __functionFromPropertyValue(t) {
          if ("string" == typeof t) {
            let e = t,
              n = this.__getMethodHost();
            return function() {
              return n[e].apply(n, arguments);
            };
          }
          return t;
        }
        __sortChanged(t) {
          (this.__sortFn = this.__functionFromPropertyValue(t)),
            this.items && this.__debounceRender(this.__render);
        }
        __filterChanged(t) {
          (this.__filterFn = this.__functionFromPropertyValue(t)),
            this.items && this.__debounceRender(this.__render);
        }
        __computeFrameTime(t) {
          return Math.ceil(1e3 / t);
        }
        __initializeChunking() {
          this.initialCount &&
            ((this.__limit = this.initialCount),
            (this.__chunkCount = this.initialCount),
            (this.__lastChunkTime = performance.now()));
        }
        __tryRenderChunk() {
          this.items &&
            this.__limit < this.items.length &&
            this.__debounceRender(this.__requestRenderChunk);
        }
        __requestRenderChunk() {
          requestAnimationFrame(() => this.__renderChunk());
        }
        __renderChunk() {
          let t = performance.now(),
            e = this._targetFrameTime / (t - this.__lastChunkTime);
          (this.__chunkCount = Math.round(this.__chunkCount * e) || 1),
            (this.__limit += this.__chunkCount),
            (this.__lastChunkTime = t),
            this.__debounceRender(this.__render);
        }
        __observeChanged() {
          this.__observePaths =
            this.observe && this.observe.replace(".*", ".").split(" ");
        }
        __itemsChanged(t) {
          this.items &&
            !Array.isArray(this.items) &&
            console.warn(
              "dom-repeat expected array for `items`, found",
              this.items
            ),
            this.__handleItemPath(t.path, t.value) ||
              (this.__initializeChunking(),
              this.__debounceRender(this.__render));
        }
        __handleObservedPaths(t) {
          if (this.__sortFn || this.__filterFn)
            if (t) {
              if (this.__observePaths) {
                let e = this.__observePaths;
                for (let n = 0; n < e.length; n++)
                  0 === t.indexOf(e[n]) &&
                    this.__debounceRender(this.__render, this.delay);
              }
            } else this.__debounceRender(this.__render, this.delay);
        }
        __debounceRender(t, e = 0) {
          (this.__renderDebouncer = i.a.debounce(
            this.__renderDebouncer,
            e > 0 ? c.d.after(e) : c.c,
            t.bind(this)
          )),
            Object(o.a)(this.__renderDebouncer);
        }
        render() {
          this.__debounceRender(this.__render), Object(o.b)();
        }
        __render() {
          this.__ensureTemplatized() &&
            (this.__applyFullRefresh(),
            (this.__pool.length = 0),
            this._setRenderedItemCount(this.__instances.length),
            this.dispatchEvent(
              new CustomEvent("dom-change", { bubbles: !0, composed: !0 })
            ),
            this.__tryRenderChunk());
        }
        __applyFullRefresh() {
          let t = this.items || [],
            e = new Array(t.length);
          for (let i = 0; i < t.length; i++) e[i] = i;
          this.__filterFn &&
            (e = e.filter((e, n, r) => this.__filterFn(t[e], n, r))),
            this.__sortFn && e.sort((e, n) => this.__sortFn(t[e], t[n]));
          const n = (this.__itemsIdxToInstIdx = {});
          let r = 0;
          const s = Math.min(e.length, this.__limit);
          for (; r < s; r++) {
            let s = this.__instances[r],
              i = e[r],
              o = t[i];
            (n[i] = r),
              s
                ? (s._setPendingProperty(this.as, o),
                  s._setPendingProperty(this.indexAs, r),
                  s._setPendingProperty(this.itemsIndexAs, i),
                  s._flushProperties())
                : this.__insertInstance(o, r, i);
          }
          for (let i = this.__instances.length - 1; i >= r; i--)
            this.__detachAndRemoveInstance(i);
        }
        __detachInstance(t) {
          let e = this.__instances[t];
          for (let n = 0; n < e.children.length; n++) {
            let t = e.children[n];
            e.root.appendChild(t);
          }
          return e;
        }
        __attachInstance(t, e) {
          let n = this.__instances[t];
          e.insertBefore(n.root, this);
        }
        __detachAndRemoveInstance(t) {
          let e = this.__detachInstance(t);
          e && this.__pool.push(e), this.__instances.splice(t, 1);
        }
        __stampInstance(t, e, n) {
          let r = {};
          return (
            (r[this.as] = t),
            (r[this.indexAs] = e),
            (r[this.itemsIndexAs] = n),
            new this.__ctor(r)
          );
        }
        __insertInstance(t, e, n) {
          let r = this.__pool.pop();
          r
            ? (r._setPendingProperty(this.as, t),
              r._setPendingProperty(this.indexAs, e),
              r._setPendingProperty(this.itemsIndexAs, n),
              r._flushProperties())
            : (r = this.__stampInstance(t, e, n));
          let s = this.__instances[e + 1],
            i = s ? s.children[0] : this;
          return (
            this.parentNode.insertBefore(r.root, i),
            (this.__instances[e] = r),
            r
          );
        }
        _showHideChildren(t) {
          for (let e = 0; e < this.__instances.length; e++)
            this.__instances[e]._showHideChildren(t);
        }
        __handleItemPath(t, e) {
          let n = t.slice(6),
            r = n.indexOf("."),
            s = r < 0 ? n : n.substring(0, r);
          if (s == parseInt(s, 10)) {
            let t = r < 0 ? "" : n.substring(r + 1);
            this.__handleObservedPaths(t);
            let i = this.__itemsIdxToInstIdx[s],
              o = this.__instances[i];
            if (o) {
              let n = this.as + (t ? "." + t : "");
              o._setPendingPropertyOrPath(n, e, !1, !0), o._flushProperties();
            }
            return !0;
          }
        }
        itemForElement(t) {
          let e = this.modelForElement(t);
          return e && e[this.as];
        }
        indexForElement(t) {
          let e = this.modelForElement(t);
          return e && e[this.indexAs];
        }
        modelForElement(t) {
          return Object(s.a)(this.template, t);
        }
      }
      customElements.define(u.is, u);
    },
    ,
    function(t, e, n) {
      "use strict";
      var r = n(25),
        s = n(32),
        i = n(21),
        o = n(24),
        a = n(11),
        l = n(2);
      class c extends r.a {
        static get is() {
          return "dom-if";
        }
        static get template() {
          return null;
        }
        static get properties() {
          return {
            if: { type: Boolean, observer: "__debounceRender" },
            restamp: { type: Boolean, observer: "__debounceRender" },
          };
        }
        constructor() {
          super(),
            (this.__renderDebouncer = null),
            (this.__invalidProps = null),
            (this.__instance = null),
            (this._lastIf = !1),
            (this.__ctor = null),
            (this.__hideTemplateChildren__ = !1);
        }
        __debounceRender() {
          (this.__renderDebouncer = i.a.debounce(
            this.__renderDebouncer,
            a.c,
            () => this.__render()
          )),
            Object(o.a)(this.__renderDebouncer);
        }
        disconnectedCallback() {
          super.disconnectedCallback(),
            (this.parentNode &&
              (this.parentNode.nodeType != Node.DOCUMENT_FRAGMENT_NODE ||
                this.parentNode.host)) ||
              this.__teardownInstance();
        }
        connectedCallback() {
          super.connectedCallback(),
            (this.style.display = "none"),
            this.if && this.__debounceRender();
        }
        render() {
          Object(o.b)();
        }
        __render() {
          if (this.if) {
            if (!this.__ensureInstance()) return;
            this._showHideChildren();
          } else this.restamp && this.__teardownInstance();
          !this.restamp && this.__instance && this._showHideChildren(),
            this.if != this._lastIf &&
              (this.dispatchEvent(
                new CustomEvent("dom-change", { bubbles: !0, composed: !0 })
              ),
              (this._lastIf = this.if));
        }
        __ensureInstance() {
          let t = this.parentNode;
          if (t) {
            if (!this.__ctor) {
              let t = this.querySelector("template");
              if (!t) {
                let t = new MutationObserver(() => {
                  if (!this.querySelector("template"))
                    throw new Error("dom-if requires a <template> child");
                  t.disconnect(), this.__render();
                });
                return t.observe(this, { childList: !0 }), !1;
              }
              this.__ctor = Object(s.b)(t, this, {
                mutableData: !0,
                forwardHostProp: function(t, e) {
                  this.__instance &&
                    (this.if
                      ? this.__instance.forwardHostProp(t, e)
                      : ((this.__invalidProps =
                          this.__invalidProps || Object.create(null)),
                        (this.__invalidProps[Object(l.g)(t)] = !0)));
                },
              });
            }
            if (this.__instance) {
              this.__syncHostProperties();
              let e = this.__instance.children;
              if (e && e.length) {
                if (this.previousSibling !== e[e.length - 1])
                  for (let n, r = 0; r < e.length && (n = e[r]); r++)
                    t.insertBefore(n, this);
              }
            } else
              (this.__instance = new this.__ctor()),
                t.insertBefore(this.__instance.root, this);
          }
          return !0;
        }
        __syncHostProperties() {
          let t = this.__invalidProps;
          if (t) {
            for (let e in t)
              this.__instance._setPendingProperty(e, this.__dataHost[e]);
            (this.__invalidProps = null), this.__instance._flushProperties();
          }
        }
        __teardownInstance() {
          if (this.__instance) {
            let t = this.__instance.children;
            if (t && t.length) {
              let e = t[0].parentNode;
              if (e)
                for (let n, r = 0; r < t.length && (n = t[r]); r++)
                  e.removeChild(n);
            }
            (this.__instance = null), (this.__invalidProps = null);
          }
        }
        _showHideChildren() {
          let t = this.__hideTemplateChildren__ || !this.if;
          this.__instance && this.__instance._showHideChildren(t);
        }
      }
      customElements.define(c.is, c);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return s;
      });
      var r = n(32);
      const s = {
        templatize(t, e) {
          (this._templatizerTemplate = t),
            (this.ctor = Object(r.b)(t, this, {
              mutableData: Boolean(e),
              parentModel: this._parentModel,
              instanceProps: this._instanceProps,
              forwardHostProp: this._forwardHostPropV2,
              notifyInstanceProp: this._notifyInstancePropV2,
            }));
        },
        stamp(t) {
          return new this.ctor(t);
        },
        modelForElement(t) {
          return Object(r.a)(this._templatizerTemplate, t);
        },
      };
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      });
      var r = n(26);
      let s;
      s = r.a._mutablePropertyChange;
      const i = {
        properties: { mutableData: Boolean },
        _shouldPropertyChange(t, e, n) {
          return s(this, t, e, n, this.mutableData);
        },
      };
    },
  ],
]);
//# sourceMappingURL=chunk.b41caf794239540f7509.js.map
