(window.webpackJsonp = window.webpackJsonp || []).push([
  [91],
  {
    135: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return a;
      });
      var n = r(89);
      function i(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (c) {
              (i = !0), (o = c);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      var o = {},
        a = function(e) {
          if (e.html_url) {
            var t = [r.e(64).then(r.bind(null, 169))];
            return (
              e.embed_iframe ||
                t.push(
                  Promise.all([r.e(112), r.e(66)]).then(r.bind(null, 131))
                ),
              Promise.all(t).then(function(t) {
                return (0, i(t, 1)[0].importHrefPromise)(e.html_url);
              })
            );
          }
          return e.js_url
            ? (e.js_url in o || (o[e.js_url] = Object(n.b)(e.js_url)),
              o[e.js_url])
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
      var n = function(e) {
        var t = "html_url" in e ? "ha-panel-".concat(e.name) : e.name;
        return document.createElement(t);
      };
    },
    137: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return n;
      });
      var n = function(e, t) {
        "setProperties" in e
          ? e.setProperties(t)
          : Object.keys(t).forEach(function(r) {
              e[r] = t[r];
            });
      };
    },
    661: function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "HaPanelCustom", function() {
          return w;
        });
      var n = r(0),
        i = r(135),
        o = r(136),
        a = r(137),
        s = r(96);
      function c(e) {
        return (c =
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
      function l(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t,
          r = y(e.key);
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
      function d(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function p(e) {
        return e.decorators && e.decorators.length;
      }
      function h(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function m(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function y(e) {
        var t = (function(e, t) {
          if ("object" !== c(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== c(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === c(t) ? t : String(t);
      }
      function v(e, t, r) {
        return (v =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = b(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var w = (function(e, t, r, n) {
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
                  if (!p(e)) return r.push(e);
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
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
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
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
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
              var r = y(e.key),
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
                r = m(e, "finisher"),
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
              var r = m(e, "finisher"),
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
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
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
                  if (h(o.descriptor) || h(i.descriptor)) {
                    if (p(o) || p(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (p(o)) {
                      if (p(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    d(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(f)),
            e
          );
        return (
          i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers)
        );
      })(
        null,
        function(e, t) {
          var r = (function(r) {
            function n() {
              var t, r, i, o;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var a = arguments.length, s = new Array(a), u = 0;
                u < a;
                u++
              )
                s[u] = arguments[u];
              return (
                (i = this),
                (r =
                  !(o = (t = b(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== c(o) && "function" != typeof o)
                    ? l(i)
                    : o),
                e(l(r)),
                r
              );
            }
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && u(e, t);
              })(n, t),
              n
            );
          })();
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
                value: function() {
                  var e = this;
                  return function(t, r) {
                    return Object(s.a)(e, t, r);
                  };
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
                  v(b(r.prototype), "disconnectedCallback", this).call(this),
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
                  if (this._setProperties) {
                    var t = {},
                      r = !0,
                      n = !1,
                      i = void 0;
                    try {
                      for (
                        var o, a = e.keys()[Symbol.iterator]();
                        !(r = (o = a.next()).done);
                        r = !0
                      ) {
                        var s = o.value;
                        t[s] = this[s];
                      }
                    } catch (c) {
                      (n = !0), (i = c);
                    } finally {
                      try {
                        r || null == a.return || a.return();
                      } finally {
                        if (n) throw i;
                      }
                    }
                    this._setProperties(t);
                  }
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
                  var t = this,
                    r = e.config._panel_custom,
                    n = document.createElement("a");
                  if (
                    ((n.href = r.html_url || r.js_url || r.module_url || ""),
                    r.trust_external ||
                      ["localhost", "127.0.0.1", location.hostname].includes(
                        n.hostname
                      ) ||
                      confirm(
                        'Do you trust the external panel "'
                          .concat(r.name, '" at "')
                          .concat(
                            n.href,
                            '"?\n\nIt will have access to all data in JAVIS Home.\n\n(Check docs for the panel_custom component to hide this message)'
                          )
                      ))
                  )
                    if (r.embed_iframe) {
                      (window.customPanel = this),
                        (this.innerHTML = "\n    <style>\n      iframe {\n        border: 0;\n        width: 100%;\n        height: 100%;\n        display: block;\n      }\n    </style>\n    <iframe></iframe>\n    ".trim());
                      var s = this.querySelector("iframe").contentWindow
                        .document;
                      s.open(),
                        s.write(
                          "<!doctype html><script src='".concat(
                            window.customPanelJS,
                            "'></script>"
                          )
                        ),
                        s.close();
                    } else
                      Object(i.a)(r).then(
                        function() {
                          var n = Object(o.a)(r);
                          (t._setProperties = function(e) {
                            return Object(a.a)(n, e);
                          }),
                            Object(a.a)(n, {
                              panel: e,
                              hass: t.hass,
                              narrow: t.narrow,
                              route: t.route,
                            }),
                            t.appendChild(n);
                        },
                        function() {
                          alert(
                            "Unable to load custom panel from ".concat(n.href)
                          );
                        }
                      );
                },
              },
            ],
          };
        },
        n.b
      );
      customElements.define("ha-panel-custom", w);
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
          return a;
        });
      var n = function(e, t, r) {
          return new Promise(function(n, i) {
            var o = document.createElement(e),
              a = "src",
              s = "body";
            switch (
              ((o.onload = function() {
                return n(t);
              }),
              (o.onerror = function() {
                return i(t);
              }),
              e)
            ) {
              case "script":
                (o.async = !0), r && (o.type = r);
                break;
              case "link":
                (o.type = "text/css"),
                  (o.rel = "stylesheet"),
                  (a = "href"),
                  (s = "head");
            }
            (o[a] = t), document[s].appendChild(o);
          });
        },
        i = function(e) {
          return n("link", e);
        },
        o = function(e) {
          return n("script", e);
        },
        a = function(e) {
          return n("script", e, "module");
        };
    },
  },
]);
//# sourceMappingURL=chunk.fb5904d0d3c45c44c984.js.map
