(window.webpackJsonp = window.webpackJsonp || []).push([
  [91],
  {
    135: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return o;
      });
      var n = r(89);
      const i = {},
        o = (e) => {
          if (e.html_url) {
            const t = [r.e(64).then(r.bind(null, 168))];
            return (
              e.embed_iframe ||
                t.push(
                  Promise.all([r.e(124), r.e(66)]).then(r.bind(null, 131))
                ),
              Promise.all(t).then(([{ importHrefPromise: t }]) => t(e.html_url))
            );
          }
          return e.js_url
            ? (e.js_url in i || (i[e.js_url] = Object(n.b)(e.js_url)),
              i[e.js_url])
            : e.module_url
            ? Object(n.c)(e.module_url)
            : Promise.reject("No valid url found in panel config.");
        };
    },
    136: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return n;
      });
      const n = (e) => {
        const t = "html_url" in e ? `ha-panel-${e.name}` : e.name;
        return document.createElement(t);
      };
    },
    137: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return n;
      });
      const n = (e, t) => {
        "setProperties" in e
          ? e.setProperties(t)
          : Object.keys(t).forEach((r) => {
              e[r] = t[r];
            });
      };
    },
    660: function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "HaPanelCustom", function() {
          return y;
        });
      var n = r(0),
        i = r(135),
        o = r(136),
        s = r(137),
        a = r(96);
      function l(e) {
        var t,
          r = p(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = { set: e.value, configurable: !0, enumerable: !1 })
          : "field" === e.kind &&
            (t = { configurable: !0, writable: !0, enumerable: !0 });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function c(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function d(e) {
        return e.decorators && e.decorators.length;
      }
      function u(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function f(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function p(e) {
        var t = (function(e, t) {
          if ("object" != typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      }
      function h(e, t, r) {
        return (h =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = m(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      let y = (function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!d(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var s = t[e.placement];
                s.splice(s.indexOf(e.key), 1);
                var a = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, i[o])(a) || a);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && n.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var d = 0; d < c.length; d++)
                    this.addElementPlacement(c[d], t);
                  r.push.apply(r, c);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var s = 0; s < e.length - 1; s++)
                    for (var a = s + 1; a < e.length; a++)
                      if (
                        e[s].key === e[a].key &&
                        e[s].placement === e[a].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[s].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = p(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = f(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = f(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var s = t(function(e) {
            i.initializeInstanceElements(e, a.elements);
          }, r),
          a = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (u(o.descriptor) || u(i.descriptor)) {
                    if (d(o) || d(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (d(o)) {
                      if (d(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    c(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(s.d.map(l)),
            e
          );
        return (
          i.initializeClassElements(s.F, a.elements),
          i.runClassFinishers(s.F, a.finishers)
        );
      })(
        null,
        function(e, t) {
          class r extends t {
            constructor(...t) {
              super(...t), e(this);
            }
          }
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(n.g)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.g)()],
                key: "narrow",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.g)()],
                key: "route",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.g)()],
                key: "panel",
                value: void 0,
              },
              { kind: "field", key: "_setProperties", value: void 0 },
              {
                kind: "field",
                key: "navigate",
                value() {
                  return (e, t) => Object(a.a)(this, e, t);
                },
              },
              {
                kind: "method",
                key: "registerIframe",
                value: function(e, t) {
                  e(this.panel, {
                    hass: this.hass,
                    narrow: this.narrow,
                    route: this.route,
                  }),
                    (this._setProperties = t);
                },
              },
              {
                kind: "method",
                key: "disconnectedCallback",
                value: function() {
                  h(m(r.prototype), "disconnectedCallback", this).call(this),
                    this._cleanupPanel();
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  if (e.has("panel"))
                    return (
                      e.get("panel") && this._cleanupPanel(),
                      void this._createPanel(this.panel)
                    );
                  if (!this._setProperties) return;
                  const t = {};
                  for (const r of e.keys()) t[r] = this[r];
                  this._setProperties(t);
                },
              },
              {
                kind: "method",
                key: "_cleanupPanel",
                value: function() {
                  for (
                    delete window.customPanel, this._setProperties = void 0;
                    this.lastChild;

                  )
                    this.removeChild(this.lastChild);
                },
              },
              {
                kind: "method",
                key: "_createPanel",
                value: function(e) {
                  const t = e.config._panel_custom,
                    r = document.createElement("a");
                  if (
                    ((r.href = t.html_url || t.js_url || t.module_url || ""),
                    !t.trust_external &&
                      !["localhost", "127.0.0.1", location.hostname].includes(
                        r.hostname
                      ) &&
                      !confirm(
                        `Do you trust the external panel "${t.name}" at "${
                          r.href
                        }"?\n\nIt will have access to all data in JAVIS Home.\n\n(Check docs for the panel_custom component to hide this message)`
                      ))
                  )
                    return;
                  if (!t.embed_iframe)
                    return void Object(i.a)(t).then(
                      () => {
                        const r = Object(o.a)(t);
                        (this._setProperties = (e) => Object(s.a)(r, e)),
                          Object(s.a)(r, {
                            panel: e,
                            hass: this.hass,
                            narrow: this.narrow,
                            route: this.route,
                          }),
                          this.appendChild(r);
                      },
                      () => {
                        alert(`Unable to load custom panel from ${r.href}`);
                      }
                    );
                  (window.customPanel = this),
                    (this.innerHTML = "\n    <style>\n      iframe {\n        border: 0;\n        width: 100%;\n        height: 100%;\n        display: block;\n      }\n    </style>\n    <iframe></iframe>\n    ".trim());
                  const n = this.querySelector("iframe").contentWindow.document;
                  n.open(),
                    n.write(
                      `<!doctype html><script src='${
                        window.customPanelJS
                      }'><\/script>`
                    ),
                    n.close();
                },
              },
            ],
          };
        },
        n.b
      );
      customElements.define("ha-panel-custom", y);
    },
    89: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return i;
      }),
        r.d(t, "b", function() {
          return o;
        }),
        r.d(t, "c", function() {
          return s;
        });
      const n = (e, t, r) =>
          new Promise((n, i) => {
            const o = document.createElement(e);
            let s = "src",
              a = "body";
            switch (((o.onload = () => n(t)), (o.onerror = () => i(t)), e)) {
              case "script":
                (o.async = !0), r && (o.type = r);
                break;
              case "link":
                (o.type = "text/css"),
                  (o.rel = "stylesheet"),
                  (s = "href"),
                  (a = "head");
            }
            (o[s] = t), document[a].appendChild(o);
          }),
        i = (e) => n("link", e),
        o = (e) => n("script", e),
        s = (e) => n("script", e, "module");
    },
  },
]);
//# sourceMappingURL=chunk.bd81af404c41857e9221.js.map
