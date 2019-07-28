(window.webpackJsonp = window.webpackJsonp || []).push([
  [80],
  {
    105: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return l;
      });
      var r = n(8),
        o = n(19);
      function i(e) {
        return (i =
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
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e, t) {
        return !t || ("object" !== i(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var l = Object(r.a)(function(e) {
        return (function(t) {
          function n() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              s(this, c(n).apply(this, arguments))
            );
          }
          var r, i, l;
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
            })(n, e),
            (r = n),
            (i = [
              {
                key: "fire",
                value: function(e, t, n) {
                  return (n = n || {}), Object(o.a)(n.node || this, e, t, n);
                },
              },
            ]) && a(r.prototype, i),
            l && a(r, l),
            n
          );
        })();
      });
    },
    171: function(e, t, n) {
      "use strict";
      var r = n(8);
      function o(e) {
        return (o =
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
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e, t) {
        return !t || ("object" !== o(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      t.a = Object(r.a)(function(e) {
        return (function(t) {
          function n() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              a(this, s(n).apply(this, arguments))
            );
          }
          var r, o, u;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && c(e, t);
            })(n, e),
            (r = n),
            (u = [
              {
                key: "properties",
                get: function() {
                  return {
                    hass: Object,
                    localize: {
                      type: Function,
                      computed: "__computeLocalize(hass.localize)",
                    },
                  };
                },
              },
            ]),
            (o = [
              {
                key: "__computeLocalize",
                value: function(e) {
                  return e;
                },
              },
            ]) && i(r.prototype, o),
            u && i(r, u),
            n
          );
        })();
      });
    },
    172: function(e, t, n) {
      "use strict";
      var r = n(0);
      function o(e) {
        return (o =
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
      function i() {
        var e = u([""]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      function a() {
        var e = u([
          '\n            <div class="card-header">',
          "</div>\n          ",
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = u(["\n      ", "\n      <slot></slot>\n    "]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = u([
          "\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    ",
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        var t,
          n = v(e.key);
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
        var r = {
          kind: "field" === e.kind ? "field" : "method",
          key: n,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (r.decorators = e.decorators),
          "field" === e.kind && (r.initializer = e.value),
          r
        );
      }
      function h(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function y(e) {
        return e.decorators && e.decorators.length;
      }
      function m(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function b(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function v(e) {
        var t = (function(e, t) {
          if ("object" !== o(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== o(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(t) ? t : String(t);
      }
      var g = (function(e, t, n, r) {
        var o = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  t.kind === n &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var n = e.prototype;
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  var o = t.placement;
                  if (t.kind === r && ("static" === o || "prototype" === o)) {
                    var i = "static" === o ? e : n;
                    this.defineClassElement(i, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var n = t.descriptor;
              if ("field" === t.kind) {
                var r = t.initializer;
                n = {
                  enumerable: n.enumerable,
                  writable: n.writable,
                  configurable: n.configurable,
                  value: void 0 === r ? void 0 : r.call(e),
                };
              }
              Object.defineProperty(e, t.key, n);
            },
            decorateClass: function(e, t) {
              var n = [],
                r = [],
                o = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, o);
                }, this),
                e.forEach(function(e) {
                  if (!y(e)) return n.push(e);
                  var t = this.decorateElement(e, o);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    r.push.apply(r, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: r };
              var i = this.decorateConstructor(n, t);
              return r.push.apply(r, i.finishers), (i.finishers = r), i;
            },
            addElementPlacement: function(e, t, n) {
              var r = t[e.placement];
              if (!n && -1 !== r.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              r.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var n = [], r = [], o = e.decorators, i = o.length - 1;
                i >= 0;
                i--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, o[i])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && r.push(c.finisher);
                var u = c.extras;
                if (u) {
                  for (var l = 0; l < u.length; l++)
                    this.addElementPlacement(u[l], t);
                  n.push.apply(n, u);
                }
              }
              return { element: e, finishers: r, extras: n };
            },
            decorateConstructor: function(e, t) {
              for (var n = [], r = t.length - 1; r >= 0; r--) {
                var o = this.fromClassDescriptor(e),
                  i = this.toClassDescriptor((0, t[r])(o) || o);
                if (
                  (void 0 !== i.finisher && n.push(i.finisher),
                  void 0 !== i.elements)
                ) {
                  e = i.elements;
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
              return { elements: e, finishers: n };
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
              var n = v(e.key),
                r = String(e.placement);
              if ("static" !== r && "prototype" !== r && "own" !== r)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    r +
                    '"'
                );
              var o = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var i = {
                kind: t,
                key: n,
                placement: r,
                descriptor: Object.assign({}, o),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      o,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      o,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      o,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (i.initializer = e.initializer)),
                i
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                n = b(e, "finisher"),
                r = this.toElementDescriptors(e.extras);
              return { element: t, finisher: n, extras: r };
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
              var n = b(e, "finisher"),
                r = this.toElementDescriptors(e.elements);
              return { elements: r, finisher: n };
            },
            runClassFinishers: function(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = (0, t[n])(e);
                if (void 0 !== r) {
                  if ("function" != typeof r)
                    throw new TypeError("Finishers must return a constructor.");
                  e = r;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, n) {
              if (void 0 !== e[t])
                throw new TypeError(n + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (r) for (var i = 0; i < r.length; i++) o = r[i](o);
        var a = t(function(e) {
            o.initializeInstanceElements(e, s.elements);
          }, n),
          s = o.decorateClass(
            (function(e) {
              for (
                var t = [],
                  n = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === i.key &&
                      e.placement === i.placement
                    );
                  },
                  r = 0;
                r < e.length;
                r++
              ) {
                var o,
                  i = e[r];
                if ("method" === i.kind && (o = t.find(n)))
                  if (m(i.descriptor) || m(o.descriptor)) {
                    if (y(i) || y(o))
                      throw new ReferenceError(
                        "Duplicated methods (" + i.key + ") can't be decorated."
                      );
                    o.descriptor = i.descriptor;
                  } else {
                    if (y(i)) {
                      if (y(o))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            i.key +
                            ")."
                        );
                      o.decorators = i.decorators;
                    }
                    h(i, o);
                  }
                else t.push(i);
              }
              return t;
            })(a.d.map(d)),
            e
          );
        return (
          o.initializeClassElements(a.F, s.elements),
          o.runClassFinishers(a.F, s.finishers)
        );
      })(
        null,
        function(e, t) {
          return {
            F: (function(n) {
              function r() {
                var t, n, i, a;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r);
                for (
                  var s = arguments.length, c = new Array(s), u = 0;
                  u < s;
                  u++
                )
                  c[u] = arguments[u];
                return (
                  (i = this),
                  (n =
                    !(a = (t = l(r)).call.apply(t, [this].concat(c))) ||
                    ("object" !== o(a) && "function" != typeof a)
                      ? f(i)
                      : a),
                  e(f(n)),
                  n
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
                    t && p(e, t);
                })(r, t),
                r
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(r.g)()],
                key: "header",
                value: void 0,
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(r.c)(c());
                },
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(r.f)(
                    s(),
                    this.header
                      ? Object(r.f)(a(), this.header)
                      : Object(r.f)(i())
                  );
                },
              },
            ],
          };
        },
        r.a
      );
      customElements.define("ha-card", g);
    },
    177: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return f;
      });
      n(107);
      function r(e) {
        return (r =
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
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function a(e, t, n) {
        return (a =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = s(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = customElements.get("iron-icon"),
        l = !1,
        f = (function(e) {
          function t() {
            var e, n;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              ((n = i(
                this,
                (e = s(t)).call.apply(e, [this].concat(o))
              ))._iconsetName = void 0),
              n
            );
          }
          var r, f, p;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && c(e, t);
            })(t, u),
            (r = t),
            (f = [
              {
                key: "listen",
                value: function(e, r, o) {
                  a(s(t.prototype), "listen", this).call(this, e, r, o),
                    l ||
                      "mdi" !== this._iconsetName ||
                      ((l = !0), n.e(70).then(n.bind(null, 214)));
                },
              },
            ]) && o(r.prototype, f),
            p && o(r, p),
            t
          );
        })();
      customElements.define("ha-icon", f);
    },
    193: function(e, t, n) {
      "use strict";
      var r = n(3),
        o = n(25);
      n(92);
      function i(e) {
        return (i =
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
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="iron-flex ha-style">\n        .content {\n          padding: 28px 20px 0;\n          max-width: 1040px;\n          margin: 0 auto;\n        }\n\n        .header {\n          @apply --paper-font-display1;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .together {\n          margin-top: 32px;\n        }\n\n        .intro {\n          @apply --paper-font-subhead;\n          width: 100%;\n          max-width: 400px;\n          margin-right: 40px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .panel {\n          margin-top: -24px;\n        }\n\n        .panel ::slotted(*) {\n          margin-top: 24px;\n          display: block;\n        }\n\n        .narrow.content {\n          max-width: 640px;\n        }\n        .narrow .together {\n          margin-top: 20px;\n        }\n        .narrow .header {\n          @apply --paper-font-headline;\n        }\n        .narrow .intro {\n          font-size: 14px;\n          padding-bottom: 20px;\n          margin-right: 0;\n          max-width: 500px;\n        }\n      </style>\n      <div class$="[[computeContentClasses(isWide)]]">\n        <div class="header"><slot name="header"></slot></div>\n        <div class$="[[computeClasses(isWide)]]">\n          <div class="intro"><slot name="introduction"></slot></div>\n          <div class="panel flex-auto"><slot></slot></div>\n        </div>\n      </div>\n    ',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e, t) {
        return !t || ("object" !== i(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            c(this, u(t).apply(this, arguments))
          );
        }
        var n, i, f;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && l(e, t);
          })(t, o["a"]),
          (n = t),
          (f = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(a());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: { type: Object },
                  narrow: { type: Boolean },
                  isWide: { type: Boolean, value: !1 },
                };
              },
            },
          ]),
          (i = [
            {
              key: "computeContentClasses",
              value: function(e) {
                return e ? "content " : "content narrow";
              },
            },
            {
              key: "computeClasses",
              value: function(e) {
                return (
                  "together layout " + (e ? "horizontal" : "vertical narrow")
                );
              },
            },
          ]) && s(n.prototype, i),
          f && s(n, f),
          t
        );
      })();
      customElements.define("ha-config-section", f);
    },
    194: function(e, t, n) {
      "use strict";
      var r = n(191);
      t.a = (function() {
        try {
          new Date().toLocaleString("i");
        } catch (e) {
          return "RangeError" === e.name;
        }
        return !1;
      })()
        ? function(e, t) {
            return e.toLocaleString(t, {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            });
          }
        : function(e) {
            return r.a.format(e, "haDateTime");
          };
    },
    222: function(e, t, n) {
      "use strict";
      n(82), n(181);
      var r = n(3),
        o = n(25);
      function i(e) {
        return (i =
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
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        .container {\n          position: relative;\n          display: inline-block;\n        }\n\n        mwc-button {\n          transition: all 1s;\n        }\n\n        .success mwc-button {\n          --mdc-theme-primary: white;\n          background-color: var(--google-green-500);\n          transition: none;\n        }\n\n        .error mwc-button {\n          --mdc-theme-primary: white;\n          background-color: var(--google-red-500);\n          transition: none;\n        }\n\n        .progress {\n          @apply --layout;\n          @apply --layout-center-center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n        }\n      </style>\n      <div class="container" id="container">\n        <mwc-button\n          id="button"\n          disabled="[[computeDisabled(disabled, progress)]]"\n          on-click="buttonTapped"\n        >\n          <slot></slot>\n        </mwc-button>\n        <template is="dom-if" if="[[progress]]">\n          <div class="progress"><paper-spinner active=""></paper-spinner></div>\n        </template>\n      </div>\n    ',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e, t) {
        return !t || ("object" !== i(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function u(e, t, n) {
        return (u =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = l(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var p = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            c(this, l(t).apply(this, arguments))
          );
        }
        var n, i, p;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && f(e, t);
          })(t, o["a"]),
          (n = t),
          (p = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(a());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: { type: Object },
                  progress: { type: Boolean, value: !1 },
                  disabled: { type: Boolean, value: !1 },
                };
              },
            },
          ]),
          (i = [
            {
              key: "tempClass",
              value: function(e) {
                var t = this.$.container.classList;
                t.add(e),
                  setTimeout(function() {
                    t.remove(e);
                  }, 1e3);
              },
            },
            {
              key: "ready",
              value: function() {
                var e = this;
                u(l(t.prototype), "ready", this).call(this),
                  this.addEventListener("click", function(t) {
                    return e.buttonTapped(t);
                  });
              },
            },
            {
              key: "buttonTapped",
              value: function(e) {
                this.progress && e.stopPropagation();
              },
            },
            {
              key: "actionSuccess",
              value: function() {
                this.tempClass("success");
              },
            },
            {
              key: "actionError",
              value: function() {
                this.tempClass("error");
              },
            },
            {
              key: "computeDisabled",
              value: function(e, t) {
                return e || t;
              },
            },
          ]) && s(n.prototype, i),
          p && s(n, p),
          t
        );
      })();
      customElements.define("ha-progress-button", p);
    },
    229: function(e, t, n) {
      "use strict";
      var r = n(8),
        o = n(96);
      function i(e) {
        return (i =
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
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e, t) {
        return !t || ("object" !== i(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      t.a = Object(r.a)(function(e) {
        return (function(t) {
          function n() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              s(this, c(n).apply(this, arguments))
            );
          }
          var r, i, l;
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
            })(n, e),
            (r = n),
            (i = [
              {
                key: "navigate",
                value: function() {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  o.a.apply(void 0, [this].concat(t));
                },
              },
            ]) && a(r.prototype, i),
            l && a(r, l),
            n
          );
        })();
      });
    },
    244: function(e, t, n) {
      "use strict";
      n(107);
      var r = n(177);
      function o(e) {
        return (o =
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
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e, t) {
        return !t || ("object" !== o(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function s(e, t, n) {
        return (s =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = c(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var l = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            a(this, c(t).apply(this, arguments))
          );
        }
        var n, o, l;
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
          })(t, r["a"]),
          (n = t),
          (o = [
            {
              key: "connectedCallback",
              value: function() {
                (this.icon =
                  "ltr" === window.getComputedStyle(this).direction
                    ? "hass:chevron-right"
                    : "hass:chevron-left"),
                  s(c(t.prototype), "connectedCallback", this).call(this);
              },
            },
          ]) && i(n.prototype, o),
          l && i(n, l),
          t
        );
      })();
      customElements.define("ha-icon-next", l);
    },
    329: function(e, t, n) {
      "use strict";
      var r = n(0),
        o = (n(222), n(19));
      function i(e) {
        return (i =
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
      function a(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (u) {
          return void n(u);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <ha-progress-button\n        .progress="',
          '"\n        @click="',
          '"\n        ?disabled="',
          '"\n        ><slot></slot\n      ></ha-progress-button>\n    ',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function c(e, t) {
        return !t || ("object" !== i(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t, n) {
        return t && l(e.prototype, t), n && l(e, n), e;
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var d = (function(e) {
        function t() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = c(this, u(t).call(this))).method = "POST"),
            (e.data = {}),
            (e.disabled = !1),
            (e.progress = !1),
            e
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
              t && p(e, t);
          })(t, r["a"]),
          f(t, [
            {
              key: "render",
              value: function() {
                return Object(r.f)(
                  s(),
                  this.progress,
                  this._buttonTapped,
                  this.disabled
                );
              },
            },
          ]),
          f(
            t,
            [
              {
                key: "_buttonTapped",
                value: (function() {
                  var e,
                    t = ((e = regeneratorRuntime.mark(function e() {
                      var t, n;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this.progress = !0),
                                  (t = {
                                    method: this.method,
                                    path: this.path,
                                    data: this.data,
                                  }),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  this.hass.callApi(
                                    this.method,
                                    this.path,
                                    this.data
                                  )
                                );
                              case 5:
                                (n = e.sent),
                                  (this.progress = !1),
                                  this.progressButton.actionSuccess(),
                                  (t.success = !0),
                                  (t.response = n),
                                  (e.next = 18);
                                break;
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(2)),
                                  (this.progress = !1),
                                  this.progressButton.actionError(),
                                  (t.success = !1),
                                  (t.response = e.t0);
                              case 18:
                                Object(o.a)(this, "hass-api-called", t);
                              case 19:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 12]]
                      );
                    })),
                    function() {
                      var t = this,
                        n = arguments;
                      return new Promise(function(r, o) {
                        var i = e.apply(t, n);
                        function s(e) {
                          a(i, r, o, s, c, "next", e);
                        }
                        function c(e) {
                          a(i, r, o, s, c, "throw", e);
                        }
                        s(void 0);
                      });
                    });
                  return function() {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "progressButton",
                get: function() {
                  return this.renderRoot.querySelector("ha-progress-button");
                },
              },
            ],
            [
              {
                key: "properties",
                get: function() {
                  return {
                    hass: {},
                    progress: Boolean,
                    path: String,
                    method: String,
                    data: {},
                    disabled: Boolean,
                  };
                },
              },
            ]
          ),
          t
        );
      })();
      customElements.define("ha-call-api-button", d);
    },
    450: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return o;
        });
      var r = function(e) {
          return e.callWS({ type: "cloud/alexa/entities" });
        },
        o = function(e) {
          return e.callWS({ type: "cloud/alexa/sync" });
        };
    },
    712: function(e, t, n) {
      "use strict";
      n.r(t);
      n(82), n(178), n(200);
      var r = n(3),
        o = n(25),
        i = (n(172), n(329), n(147), n(92), n(193), n(0)),
        a = (n(138), n(181), n(272)),
        s = n(19);
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
      function u() {
        var e = O([
          "\n      <style>\n        .body-text {\n          padding: 8px 0;\n        }\n        .webhook {\n          display: flex;\n          padding: 4px 0;\n        }\n        .progress {\n          margin-right: 16px;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n        .footer {\n          padding-top: 16px;\n        }\n        .body-text a,\n        .footer a {\n          color: var(--primary-color);\n        }\n      </style>\n    ",
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function f(e) {
        var t = (function(e, t) {
          if ("object" !== c(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== c(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === c(t) ? t : String(t);
      }
      function p(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function d(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (u) {
          return void n(u);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function h(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, o) {
            var i = e.apply(t, n);
            function a(e) {
              d(i, r, o, a, s, "next", e);
            }
            function s(e) {
              d(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function y() {
        var e = O([
          '\n                <paper-toggle-button\n                  @click="',
          '"\n                ></paper-toggle-button>\n              ',
        ]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = O([
          '\n                <mwc-button @click="',
          '">\n                  Manage\n                </mwc-button>\n              ',
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = O([
          '\n                <div class="progress">\n                  <paper-spinner active></paper-spinner>\n                </div>\n              ',
        ]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = O([
          '\n        <div class="webhook" .entry="',
          '">\n          <paper-item-body two-line>\n            <div>\n              ',
          "\n              ",
          "\n            </div>\n            <div secondary>",
          "</div>\n          </paper-item-body>\n          ",
          "\n        </div>\n      ",
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = O([
          '\n        <div class="body-text">\n          Looks like you have no webhooks yet. Get started by configuring a\n          <a href="/config/integrations">webhook-based integration</a> or by\n          creating a <a href="/config/automation/new">webhook automation</a>.\n        </div>\n      ',
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = O(['\n        <div class="body-text">Loading…</div>\n      ']);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = O([
          "\n      ",
          '\n      <ha-card header="Webhooks">\n        <div class="card-content">\n          Anything that is configured to be triggered by a webhook can be given\n          a publicly accessible URL to allow you to send data back to Home\n          Assistant from anywhere, without exposing your instance to the\n          internet. ',
          '\n\n          <div class="footer">\n            <a href="https://www.nabucasa.com/config/webhooks" target="_blank">\n              Learn more about creating webhook-powered automations.\n            </a>\n          </div>\n        </div>\n      </ha-card>\n    ',
        ]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      function O(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function _(e, t) {
        return !t || ("object" !== c(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function j(e, t, n) {
        return (j =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = E(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function E(e) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function S(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function P(e, t, n) {
        return t && S(e.prototype, t), n && S(e, n), e;
      }
      function x(e, t) {
        return (x =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var C = (function(e) {
        function t() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = _(this, E(t).call(this))).hass = void 0),
            (e.cloudStatus = void 0),
            (e._cloudHooks = void 0),
            (e._localHooks = void 0),
            (e._progress = void 0),
            (e._progress = []),
            e
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
              t && x(e, t);
          })(t, i["a"]),
          P(t, null, [
            {
              key: "properties",
              get: function() {
                return {
                  hass: {},
                  cloudStatus: {},
                  _cloudHooks: {},
                  _localHooks: {},
                  _progress: {},
                };
              },
            },
          ]),
          P(t, [
            {
              key: "connectedCallback",
              value: function() {
                j(E(t.prototype), "connectedCallback", this).call(this),
                  this._fetchData();
              },
            },
            {
              key: "render",
              value: function() {
                return Object(i.f)(k(), this.renderStyle(), this._renderBody());
              },
            },
            {
              key: "updated",
              value: function(e) {
                j(E(t.prototype), "updated", this).call(this, e),
                  e.has("cloudStatus") &&
                    this.cloudStatus &&
                    (this._cloudHooks =
                      this.cloudStatus.prefs.cloudhooks || {});
              },
            },
            {
              key: "_renderBody",
              value: function() {
                var e = this;
                return this.cloudStatus && this._localHooks && this._cloudHooks
                  ? 0 === this._localHooks.length
                    ? Object(i.f)(g())
                    : this._localHooks.map(function(t) {
                        return Object(
                          i.f
                        )(v(), t, t.name, t.domain === t.name.toLowerCase() ? "" : " (".concat(t.domain, ")"), t.webhook_id, e._progress.includes(t.webhook_id) ? Object(i.f)(b()) : e._cloudHooks[t.webhook_id] ? Object(i.f)(m(), e._handleManageButton) : Object(i.f)(y(), e._enableWebhook));
                      })
                  : Object(i.f)(w());
              },
            },
            {
              key: "_showDialog",
              value: function(e) {
                var t,
                  r,
                  o = this,
                  i = this._localHooks.find(function(t) {
                    return t.webhook_id === e;
                  }),
                  a = this._cloudHooks[e];
                (t = this),
                  (r = {
                    webhook: i,
                    cloudhook: a,
                    disableHook: function() {
                      return o._disableWebhook(e);
                    },
                  }),
                  Object(s.a)(t, "show-dialog", {
                    dialogTag: "dialog-manage-cloudhook",
                    dialogImport: function() {
                      return Promise.all([n.e(1), n.e(23)]).then(
                        n.bind(null, 701)
                      );
                    },
                    dialogParams: r,
                  });
              },
            },
            {
              key: "_handleManageButton",
              value: function(e) {
                var t = e.currentTarget.parentElement.entry;
                this._showDialog(t.webhook_id);
              },
            },
            {
              key: "_enableWebhook",
              value: (function() {
                var e = h(
                  regeneratorRuntime.mark(function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = t.currentTarget.parentElement.entry),
                                (this._progress = [].concat(p(this._progress), [
                                  n.webhook_id,
                                ])),
                                (e.prev = 2),
                                (e.next = 5),
                                Object(a.c)(this.hass, n.webhook_id)
                              );
                            case 5:
                              (r = e.sent), (e.next = 12);
                              break;
                            case 8:
                              return (
                                (e.prev = 8),
                                (e.t0 = e.catch(2)),
                                alert(e.t0.message),
                                e.abrupt("return")
                              );
                            case 12:
                              return (
                                (e.prev = 12),
                                (this._progress = this._progress.filter(
                                  function(e) {
                                    return e !== n.webhook_id;
                                  }
                                )),
                                e.finish(12)
                              );
                            case 15:
                              (this._cloudHooks = Object.assign(
                                {},
                                this._cloudHooks,
                                ((o = {}),
                                (i = n.webhook_id),
                                (s = r),
                                i in o
                                  ? Object.defineProperty(o, i, {
                                      value: s,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                    })
                                  : (o[i] = s),
                                o)
                              )),
                                0 === this._progress.length &&
                                  this._showDialog(n.webhook_id);
                            case 17:
                            case "end":
                              return e.stop();
                          }
                        var o, i, s;
                      },
                      e,
                      this,
                      [[2, 8, 12, 15]]
                    );
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_disableWebhook",
              value: (function() {
                var e = h(
                  regeneratorRuntime.mark(function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this._progress = [].concat(p(this._progress), [
                                  t,
                                ])),
                                (e.prev = 1),
                                (e.next = 4),
                                Object(a.d)(this.hass, t)
                              );
                            case 4:
                              e.next = 10;
                              break;
                            case 6:
                              return (
                                (e.prev = 6),
                                (e.t0 = e.catch(1)),
                                alert(
                                  "Failed to disable webhook: ".concat(
                                    e.t0.message
                                  )
                                ),
                                e.abrupt("return")
                              );
                            case 10:
                              return (
                                (e.prev = 10),
                                (this._progress = this._progress.filter(
                                  function(e) {
                                    return e !== t;
                                  }
                                )),
                                e.finish(10)
                              );
                            case 13:
                              (n = this._cloudHooks),
                                n[t],
                                (r = l(n, [t].map(f))),
                                (this._cloudHooks = r);
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 6, 10, 13]]
                    );
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_fetchData",
              value: (function() {
                var e = h(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                !this.hass.config.components.includes("webhook")
                              ) {
                                e.next = 6;
                                break;
                              }
                              return (
                                (e.next = 3),
                                this.hass.callWS({ type: "webhook/list" })
                              );
                            case 3:
                              (e.t0 = e.sent), (e.next = 7);
                              break;
                            case 6:
                              e.t0 = [];
                            case 7:
                              this._localHooks = e.t0;
                            case 8:
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
              key: "renderStyle",
              value: function() {
                return Object(i.f)(u());
              },
            },
          ]),
          t
        );
      })();
      customElements.define("cloud-webhooks", C);
      var A = n(194),
        T = n(105),
        D = n(171),
        z = n(450);
      function R(e) {
        return (R =
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
      function I() {
        var e = J([
          "\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n      h3 {\n        margin-bottom: 0;\n      }\n      h3 + p {\n        margin-top: 0.5em;\n      }\n    ",
        ]);
        return (
          (I = function() {
            return e;
          }),
          e
        );
      }
      function F(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (u) {
          return void n(u);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function H(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, o) {
            var i = e.apply(t, n);
            function a(e) {
              F(i, r, o, a, s, "next", e);
            }
            function s(e) {
              F(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function L() {
        var e = J([
          "\n                <h3>Enable State Reporting</h3>\n                <p>\n                  If you enable state reporting, JAVIS Home will send\n                  <b>all</b> state changes of exposed entities to Amazon. This\n                  allows you to always see the latest states in the Alexa app\n                  and use the state changes to create routines.\n                </p>\n                <paper-toggle-button\n                  .checked=",
          "\n                  @change=",
          "\n                ></paper-toggle-button>\n              ",
        ]);
        return (
          (L = function() {
            return e;
          }),
          e
        );
      }
      function W() {
        var e = J([
          '\n      <ha-card header="Alexa">\n        <paper-toggle-button\n          .checked=',
          "\n          @change=",
          '\n        ></paper-toggle-button>\n        <div class="card-content">\n          With the Alexa integration for JAVIS Home Cloud you\'ll be able to\n          control all your JAVIS Home devices via any Alexa-enabled device.\n          <ul>\n            <li>\n              <a\n                href="https://skills-store.amazon.com/deeplink/dp/B0772J1QKB?deviceType=app"\n                target="_blank"\n              >\n                Enable the JAVIS Home skill for Alexa\n              </a>\n            </li>\n            <li>\n              <a\n                href="https://www.nabucasa.com/config/amazon_alexa/"\n                target="_blank"\n              >\n                Config documentation\n              </a>\n            </li>\n          </ul>\n          <em\n            >This integration requires an Alexa-enabled device like the Amazon\n            Echo.</em\n          >\n          ',
          '\n        </div>\n        <div class="card-actions">\n          <mwc-button @click=',
          " .disabled=",
          '>\n            Sync Entities\n          </mwc-button>\n          <div class="spacer"></div>\n          <a href="/config/cloud/alexa">\n            <mwc-button>Manage Entities</mwc-button>\n          </a>\n        </div>\n      </ha-card>\n    ',
        ]);
        return (
          (W = function() {
            return e;
          }),
          e
        );
      }
      function M() {
        var e = J([""]);
        return (
          (M = function() {
            return e;
          }),
          e
        );
      }
      function J(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function B(e) {
        return (B = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function V(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function N(e, t) {
        return (N =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function $(e) {
        var t,
          n = K(e.key);
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
        var r = {
          kind: "field" === e.kind ? "field" : "method",
          key: n,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (r.decorators = e.decorators),
          "field" === e.kind && (r.initializer = e.value),
          r
        );
      }
      function q(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function G(e) {
        return e.decorators && e.decorators.length;
      }
      function U(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Y(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function K(e) {
        var t = (function(e, t) {
          if ("object" !== R(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== R(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === R(t) ? t : String(t);
      }
      var Q = (function(e, t, n, r) {
        var o = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  t.kind === n &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var n = e.prototype;
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  var o = t.placement;
                  if (t.kind === r && ("static" === o || "prototype" === o)) {
                    var i = "static" === o ? e : n;
                    this.defineClassElement(i, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var n = t.descriptor;
              if ("field" === t.kind) {
                var r = t.initializer;
                n = {
                  enumerable: n.enumerable,
                  writable: n.writable,
                  configurable: n.configurable,
                  value: void 0 === r ? void 0 : r.call(e),
                };
              }
              Object.defineProperty(e, t.key, n);
            },
            decorateClass: function(e, t) {
              var n = [],
                r = [],
                o = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, o);
                }, this),
                e.forEach(function(e) {
                  if (!G(e)) return n.push(e);
                  var t = this.decorateElement(e, o);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    r.push.apply(r, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: r };
              var i = this.decorateConstructor(n, t);
              return r.push.apply(r, i.finishers), (i.finishers = r), i;
            },
            addElementPlacement: function(e, t, n) {
              var r = t[e.placement];
              if (!n && -1 !== r.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              r.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var n = [], r = [], o = e.decorators, i = o.length - 1;
                i >= 0;
                i--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, o[i])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && r.push(c.finisher);
                var u = c.extras;
                if (u) {
                  for (var l = 0; l < u.length; l++)
                    this.addElementPlacement(u[l], t);
                  n.push.apply(n, u);
                }
              }
              return { element: e, finishers: r, extras: n };
            },
            decorateConstructor: function(e, t) {
              for (var n = [], r = t.length - 1; r >= 0; r--) {
                var o = this.fromClassDescriptor(e),
                  i = this.toClassDescriptor((0, t[r])(o) || o);
                if (
                  (void 0 !== i.finisher && n.push(i.finisher),
                  void 0 !== i.elements)
                ) {
                  e = i.elements;
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
              return { elements: e, finishers: n };
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
              var n = K(e.key),
                r = String(e.placement);
              if ("static" !== r && "prototype" !== r && "own" !== r)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    r +
                    '"'
                );
              var o = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var i = {
                kind: t,
                key: n,
                placement: r,
                descriptor: Object.assign({}, o),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      o,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      o,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      o,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (i.initializer = e.initializer)),
                i
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                n = Y(e, "finisher"),
                r = this.toElementDescriptors(e.extras);
              return { element: t, finisher: n, extras: r };
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
              var n = Y(e, "finisher"),
                r = this.toElementDescriptors(e.elements);
              return { elements: r, finisher: n };
            },
            runClassFinishers: function(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = (0, t[n])(e);
                if (void 0 !== r) {
                  if ("function" != typeof r)
                    throw new TypeError("Finishers must return a constructor.");
                  e = r;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, n) {
              if (void 0 !== e[t])
                throw new TypeError(n + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (r) for (var i = 0; i < r.length; i++) o = r[i](o);
        var a = t(function(e) {
            o.initializeInstanceElements(e, s.elements);
          }, n),
          s = o.decorateClass(
            (function(e) {
              for (
                var t = [],
                  n = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === i.key &&
                      e.placement === i.placement
                    );
                  },
                  r = 0;
                r < e.length;
                r++
              ) {
                var o,
                  i = e[r];
                if ("method" === i.kind && (o = t.find(n)))
                  if (U(i.descriptor) || U(o.descriptor)) {
                    if (G(i) || G(o))
                      throw new ReferenceError(
                        "Duplicated methods (" + i.key + ") can't be decorated."
                      );
                    o.descriptor = i.descriptor;
                  } else {
                    if (G(i)) {
                      if (G(o))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            i.key +
                            ")."
                        );
                      o.decorators = i.decorators;
                    }
                    q(i, o);
                  }
                else t.push(i);
              }
              return t;
            })(a.d.map($)),
            e
          );
        return (
          o.initializeClassElements(a.F, s.elements),
          o.runClassFinishers(a.F, s.finishers)
        );
      })(
        null,
        function(e, t) {
          return {
            F: (function(n) {
              function r() {
                var t, n, o, i;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (o = this),
                  (n =
                    !(i = (t = B(r)).call.apply(t, [this].concat(s))) ||
                    ("object" !== R(i) && "function" != typeof i)
                      ? V(o)
                      : i),
                  e(V(n)),
                  n
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
                    t && N(e, t);
                })(r, t),
                r
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "cloudStatus",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "_syncing",
                value: function() {
                  return !1;
                },
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  if (!this.cloudStatus) return Object(i.f)(M());
                  var e = this.cloudStatus.prefs,
                    t = e.alexa_enabled,
                    n = e.alexa_report_state;
                  return Object(i.f)(
                    W(),
                    t,
                    this._enabledToggleChanged,
                    t ? Object(i.f)(L(), n, this._reportToggleChanged) : "",
                    this._handleSync,
                    this._syncing
                  );
                },
              },
              {
                kind: "method",
                key: "_handleSync",
                value: (function() {
                  var e = H(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._syncing = !0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  Object(z.b)(this.hass)
                                );
                              case 4:
                                e.next = 9;
                                break;
                              case 6:
                                (e.prev = 6),
                                  (e.t0 = e.catch(1)),
                                  alert(
                                    "Failed to sync entities: ".concat(
                                      e.t0.body.message
                                    )
                                  );
                              case 9:
                                return (
                                  (e.prev = 9),
                                  (this._syncing = !1),
                                  e.finish(9)
                                );
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 6, 9, 12]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_enabledToggleChanged",
                value: (function() {
                  var e = H(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t.target),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  Object(a.j)(this.hass, {
                                    alexa_enabled: n.checked,
                                  })
                                );
                              case 4:
                                Object(s.a)(this, "ha-refresh-cloud-status"),
                                  (e.next = 10);
                                break;
                              case 7:
                                (e.prev = 7),
                                  (e.t0 = e.catch(1)),
                                  (n.checked = !n.checked);
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 7]]
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_reportToggleChanged",
                value: (function() {
                  var e = H(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t.target),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  Object(a.j)(this.hass, {
                                    alexa_report_state: n.checked,
                                  })
                                );
                              case 4:
                                Object(s.a)(this, "ha-refresh-cloud-status"),
                                  (e.next = 11);
                                break;
                              case 7:
                                (e.prev = 7),
                                  (e.t0 = e.catch(1)),
                                  alert(
                                    "Unable to "
                                      .concat(
                                        n.checked ? "enable" : "disable",
                                        " report state. "
                                      )
                                      .concat(e.t0.message)
                                  ),
                                  (n.checked = !n.checked);
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 7]]
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(i.c)(I());
                },
              },
            ],
          };
        },
        i.a
      );
      function X(e) {
        return (X =
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
      function Z() {
        var e = ae([
          "\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      ha-call-api-button {\n        color: var(--primary-color);\n        font-weight: 500;\n      }\n      .secure_devices {\n        padding-top: 16px;\n      }\n      paper-input {\n        width: 200px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n    ",
        ]);
        return (
          (Z = function() {
            return e;
          }),
          e
        );
      }
      function ee(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function te(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (u) {
          return void n(u);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function ne(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, o) {
            var i = e.apply(t, n);
            function a(e) {
              te(i, r, o, a, s, "next", e);
            }
            function s(e) {
              te(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function re() {
        var e = ae([
          '\n                <div class="secure_devices">\n                  Please enter a pin to interact with security devices. Security\n                  devices are doors, garage doors and locks. You will be asked\n                  to say/enter this pin when interacting with such devices via\n                  Google Assistant.\n                  <paper-input\n                    label="Secure Devices Pin"\n                    id="google_secure_devices_pin"\n                    placeholder="Secure devices disabled"\n                    .value=',
          '\n                    @change="',
          '"\n                  ></paper-input>\n                </div>\n              ',
        ]);
        return (
          (re = function() {
            return e;
          }),
          e
        );
      }
      function oe() {
        var e = ae([
          '\n      <ha-card header="Google Assistant">\n        <paper-toggle-button\n          id="google_enabled"\n          .checked="',
          '"\n          @change="',
          '"\n        ></paper-toggle-button>\n        <div class="card-content">\n          With the Google Assistant integration for JAVIS Home Cloud you\'ll be\n          able to control all your JAVIS Home devices via any Google\n          Assistant-enabled device.\n          <ul>\n            <li>\n              <a\n                href="https://assistant.google.com/services/a/uid/00000091fd5fb875?hl=en-US"\n                target="_blank"\n              >\n                Activate the JAVIS Home skill for Google Assistant\n              </a>\n            </li>\n            <li>\n              <a\n                href="https://www.nabucasa.com/config/google_assistant/"\n                target="_blank"\n              >\n                Config documentation\n              </a>\n            </li>\n          </ul>\n          <em\n            >This integration requires a Google Assistant-enabled device like\n            the Google Home or Android phone.</em\n          >\n          ',
          '\n        </div>\n        <div class="card-actions">\n          <ha-call-api-button\n            .hass="',
          '"\n            .disabled="',
          '"\n            path="cloud/google_actions/sync"\n          >\n            Sync entities to Google\n          </ha-call-api-button>\n          <div class="spacer"></div>\n          <a href="/config/cloud/google-assistant">\n            <mwc-button>Manage Entities</mwc-button>\n          </a>\n        </div>\n      </ha-card>\n    ',
        ]);
        return (
          (oe = function() {
            return e;
          }),
          e
        );
      }
      function ie() {
        var e = ae([""]);
        return (
          (ie = function() {
            return e;
          }),
          e
        );
      }
      function ae(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function se(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ce(e, t) {
        return !t || ("object" !== X(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function ue(e) {
        return (ue = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function le(e, t) {
        return (le =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      customElements.define("cloud-alexa-pref", Q);
      var fe = (function(e) {
        function t() {
          var e, n;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((n = ce(
              this,
              (e = ue(t)).call.apply(e, [this].concat(o))
            )).hass = void 0),
            (n.cloudStatus = void 0),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && le(e, t);
          })(t, i["a"]),
          (n = t),
          (r = [
            {
              key: "render",
              value: function() {
                if (!this.cloudStatus) return Object(i.f)(ie());
                var e = this.cloudStatus.prefs,
                  t = e.google_enabled,
                  n = e.google_secure_devices_pin;
                return Object(i.f)(
                  oe(),
                  t,
                  this._toggleChanged,
                  t ? Object(i.f)(re(), n || "", this._pinChanged) : "",
                  this.hass,
                  !t
                );
              },
            },
            {
              key: "_toggleChanged",
              value: (function() {
                var e = ne(
                  regeneratorRuntime.mark(function e(t) {
                    var n;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = t.target),
                                (e.prev = 1),
                                (e.next = 4),
                                Object(a.j)(this.hass, ee({}, n.id, n.checked))
                              );
                            case 4:
                              Object(s.a)(this, "ha-refresh-cloud-status"),
                                (e.next = 10);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(1)),
                                (n.checked = !n.checked);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 7]]
                    );
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_pinChanged",
              value: (function() {
                var e = ne(
                  regeneratorRuntime.mark(function e(t) {
                    var n;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = t.target),
                                (e.prev = 1),
                                (e.next = 4),
                                Object(a.j)(
                                  this.hass,
                                  ee({}, n.id, n.value || null)
                                )
                              );
                            case 4:
                              Object(s.a)(this, "ha-refresh-cloud-status"),
                                (e.next = 11);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(1)),
                                alert(
                                  "Unable to store pin: ".concat(e.t0.message)
                                ),
                                (n.value = this.cloudStatus.prefs.google_secure_devices_pin);
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 7]]
                    );
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          (o = [
            {
              key: "properties",
              get: function() {
                return { hass: {}, cloudStatus: {} };
              },
            },
            {
              key: "styles",
              get: function() {
                return Object(i.c)(Z());
              },
            },
          ]),
          r && se(n.prototype, r),
          o && se(n, o),
          t
        );
      })();
      customElements.define("cloud-google-pref", fe);
      function pe(e) {
        return (pe =
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
      function de() {
        var e = ge([
          "\n      .preparing {\n        padding: 0 16px 16px;\n      }\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n    ",
        ]);
        return (
          (de = function() {
            return e;
          }),
          e
        );
      }
      function he(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (u) {
          return void n(u);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function ye() {
        var e = ge([
          '\n                <div class="spacer"></div>\n                <mwc-button @click=',
          ">\n                  Certificate Info\n                </mwc-button>\n              ",
        ]);
        return (
          (ye = function() {
            return e;
          }),
          e
        );
      }
      function me() {
        var e = ge([
          '\n      <ha-card header="Remote Control">\n        <paper-toggle-button\n          .checked="',
          '"\n          @change="',
          '"\n        ></paper-toggle-button>\n        <div class="card-content">\n          JAVIS Home Cloud provides a secure remote connection to your instance\n          while away from home. Your instance\n          ',
          ' available at\n          <a href="https://',
          '" target="_blank">\n            https://',
          '</a\n          >.\n        </div>\n        <div class="card-actions">\n          <a href="https://www.nabucasa.com/config/remote/" target="_blank">\n            <mwc-button>Learn how it works</mwc-button>\n          </a>\n          ',
          "\n        </div>\n      </ha-card>\n    ",
        ]);
        return (
          (me = function() {
            return e;
          }),
          e
        );
      }
      function be() {
        var e = ge([
          '\n        <ha-card header="Remote Control">\n          <div class="preparing">\n            Remote access is being prepared. We will notify you when it\'s ready.\n          </div>\n        </ha-card>\n      ',
        ]);
        return (
          (be = function() {
            return e;
          }),
          e
        );
      }
      function ve() {
        var e = ge([""]);
        return (
          (ve = function() {
            return e;
          }),
          e
        );
      }
      function ge(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function we(e) {
        return (we = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ke(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Oe(e, t) {
        return (Oe =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _e(e) {
        var t,
          n = xe(e.key);
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
        var r = {
          kind: "field" === e.kind ? "field" : "method",
          key: n,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (r.decorators = e.decorators),
          "field" === e.kind && (r.initializer = e.value),
          r
        );
      }
      function je(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Ee(e) {
        return e.decorators && e.decorators.length;
      }
      function Se(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Pe(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function xe(e) {
        var t = (function(e, t) {
          if ("object" !== pe(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== pe(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === pe(t) ? t : String(t);
      }
      !(function(e, t, n, r) {
        var o = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  t.kind === n &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var n = e.prototype;
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  var o = t.placement;
                  if (t.kind === r && ("static" === o || "prototype" === o)) {
                    var i = "static" === o ? e : n;
                    this.defineClassElement(i, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var n = t.descriptor;
              if ("field" === t.kind) {
                var r = t.initializer;
                n = {
                  enumerable: n.enumerable,
                  writable: n.writable,
                  configurable: n.configurable,
                  value: void 0 === r ? void 0 : r.call(e),
                };
              }
              Object.defineProperty(e, t.key, n);
            },
            decorateClass: function(e, t) {
              var n = [],
                r = [],
                o = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, o);
                }, this),
                e.forEach(function(e) {
                  if (!Ee(e)) return n.push(e);
                  var t = this.decorateElement(e, o);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    r.push.apply(r, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: r };
              var i = this.decorateConstructor(n, t);
              return r.push.apply(r, i.finishers), (i.finishers = r), i;
            },
            addElementPlacement: function(e, t, n) {
              var r = t[e.placement];
              if (!n && -1 !== r.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              r.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var n = [], r = [], o = e.decorators, i = o.length - 1;
                i >= 0;
                i--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, o[i])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && r.push(c.finisher);
                var u = c.extras;
                if (u) {
                  for (var l = 0; l < u.length; l++)
                    this.addElementPlacement(u[l], t);
                  n.push.apply(n, u);
                }
              }
              return { element: e, finishers: r, extras: n };
            },
            decorateConstructor: function(e, t) {
              for (var n = [], r = t.length - 1; r >= 0; r--) {
                var o = this.fromClassDescriptor(e),
                  i = this.toClassDescriptor((0, t[r])(o) || o);
                if (
                  (void 0 !== i.finisher && n.push(i.finisher),
                  void 0 !== i.elements)
                ) {
                  e = i.elements;
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
              return { elements: e, finishers: n };
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
              var n = xe(e.key),
                r = String(e.placement);
              if ("static" !== r && "prototype" !== r && "own" !== r)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    r +
                    '"'
                );
              var o = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var i = {
                kind: t,
                key: n,
                placement: r,
                descriptor: Object.assign({}, o),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      o,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      o,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      o,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (i.initializer = e.initializer)),
                i
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                n = Pe(e, "finisher"),
                r = this.toElementDescriptors(e.extras);
              return { element: t, finisher: n, extras: r };
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
              var n = Pe(e, "finisher"),
                r = this.toElementDescriptors(e.elements);
              return { elements: r, finisher: n };
            },
            runClassFinishers: function(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = (0, t[n])(e);
                if (void 0 !== r) {
                  if ("function" != typeof r)
                    throw new TypeError("Finishers must return a constructor.");
                  e = r;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, n) {
              if (void 0 !== e[t])
                throw new TypeError(n + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (r) for (var i = 0; i < r.length; i++) o = r[i](o);
        var a = t(function(e) {
            o.initializeInstanceElements(e, s.elements);
          }, n),
          s = o.decorateClass(
            (function(e) {
              for (
                var t = [],
                  n = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === i.key &&
                      e.placement === i.placement
                    );
                  },
                  r = 0;
                r < e.length;
                r++
              ) {
                var o,
                  i = e[r];
                if ("method" === i.kind && (o = t.find(n)))
                  if (Se(i.descriptor) || Se(o.descriptor)) {
                    if (Ee(i) || Ee(o))
                      throw new ReferenceError(
                        "Duplicated methods (" + i.key + ") can't be decorated."
                      );
                    o.descriptor = i.descriptor;
                  } else {
                    if (Ee(i)) {
                      if (Ee(o))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            i.key +
                            ")."
                        );
                      o.decorators = i.decorators;
                    }
                    je(i, o);
                  }
                else t.push(i);
              }
              return t;
            })(a.d.map(_e)),
            e
          );
        o.initializeClassElements(a.F, s.elements),
          o.runClassFinishers(a.F, s.finishers);
      })(
        [Object(i.d)("cloud-remote-pref")],
        function(e, t) {
          return {
            F: (function(n) {
              function r() {
                var t, n, o, i;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (o = this),
                  (n =
                    !(i = (t = we(r)).call.apply(t, [this].concat(s))) ||
                    ("object" !== pe(i) && "function" != typeof i)
                      ? ke(o)
                      : i),
                  e(ke(n)),
                  n
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
                    t && Oe(e, t);
                })(r, t),
                r
              );
            })(),
            d: [
              { kind: "field", key: "hass", value: void 0 },
              { kind: "field", key: "cloudStatus", value: void 0 },
              {
                kind: "get",
                static: !0,
                key: "properties",
                value: function() {
                  return { hass: {}, cloudStatus: {} };
                },
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  if (!this.cloudStatus) return Object(i.f)(ve());
                  var e = this.cloudStatus,
                    t = e.remote_connected,
                    n = e.remote_domain,
                    r = e.remote_certificate;
                  return r
                    ? Object(i.f)(
                        me(),
                        t,
                        this._toggleChanged,
                        t ? "is" : "will be",
                        n,
                        n,
                        r ? Object(i.f)(ye(), this._openCertInfo) : ""
                      )
                    : Object(i.f)(be());
                },
              },
              {
                kind: "method",
                key: "_openCertInfo",
                value: function() {
                  var e, t;
                  (e = this),
                    (t = {
                      certificateInfo: this.cloudStatus.remote_certificate,
                    }),
                    Object(s.a)(e, "show-dialog", {
                      dialogTag: "dialog-cloud-certificate",
                      dialogImport: function() {
                        return Promise.all([n.e(1), n.e(29)]).then(
                          n.bind(null, 702)
                        );
                      },
                      dialogParams: t,
                    });
                },
              },
              {
                kind: "method",
                key: "_toggleChanged",
                value: (function() {
                  var e,
                    t = ((e = regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = t.target), (e.prev = 1), !n.checked)
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return (e.next = 5), Object(a.b)(this.hass);
                              case 5:
                                e.next = 9;
                                break;
                              case 7:
                                return (e.next = 9), Object(a.e)(this.hass);
                              case 9:
                                Object(s.a)(this, "ha-refresh-cloud-status"),
                                  (e.next = 16);
                                break;
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(1)),
                                  alert(e.t0.message),
                                  (n.checked = !n.checked);
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 12]]
                      );
                    })),
                    function() {
                      var t = this,
                        n = arguments;
                      return new Promise(function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                          he(i, r, o, a, s, "next", e);
                        }
                        function s(e) {
                          he(i, r, o, a, s, "throw", e);
                        }
                        a(void 0);
                      });
                    });
                  return function(e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(i.c)(de());
                },
              },
            ],
          };
        },
        i.a
      );
      function Ce(e) {
        return (Ce =
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
      function Ae() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="iron-flex ha-style">\n        [slot="introduction"] {\n          margin: -1em 0;\n        }\n        [slot="introduction"] a {\n          color: var(--primary-color);\n        }\n        .content {\n          padding-bottom: 24px;\n          direction: ltr;\n        }\n        .account-row {\n          display: flex;\n          padding: 0 16px;\n        }\n        mwc-button {\n          align-self: center;\n        }\n        .soon {\n          font-style: italic;\n          margin-top: 24px;\n          text-align: center;\n        }\n        .nowrap {\n          white-space: nowrap;\n        }\n        .wrap {\n          white-space: normal;\n        }\n        .status {\n          text-transform: capitalize;\n          padding: 16px;\n        }\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n      <hass-subpage header="JAVIS Home Cloud">\n        <div class="content">\n          <ha-config-section is-wide="[[isWide]]">\n            <span slot="header">JAVIS Home Cloud</span>\n            <div slot="introduction">\n              <p>\n                Thank you for being part of JAVIS Home Cloud. It\'s because of\n                people like you that we are able to make a great home automation\n                experience for everyone. Thank you!\n              </p>\n            </div>\n\n            <ha-card header="Nabu Casa Account">\n              <div class="account-row">\n                <paper-item-body two-line="">\n                  [[cloudStatus.email]]\n                  <div secondary class="wrap">\n                    [[_formatSubscription(_subscription)]]\n                  </div>\n                </paper-item-body>\n              </div>\n\n              <div class="account-row">\n                <paper-item-body> Cloud connection status </paper-item-body>\n                <div class="status">[[cloudStatus.cloud]]</div>\n              </div>\n\n              <div class="card-actions">\n                <a href="https://account.nabucasa.com" target="_blank"\n                  ><mwc-button>Manage Account</mwc-button></a\n                >\n                <mwc-button style="float: right" on-click="handleLogout"\n                  >Sign out</mwc-button\n                >\n              </div>\n            </ha-card>\n          </ha-config-section>\n\n          <ha-config-section is-wide="[[isWide]]">\n            <span slot="header">Integrations</span>\n            <div slot="introduction">\n              <p>\n                Integrations for JAVIS Home Cloud allow you to connect with\n                services in the cloud without having to expose your Home\n                Assistant instance publicly on the internet.\n              </p>\n              <p>\n                Check the website for\n                <a href="https://www.nabucasa.com" target="_blank"\n                  >all available features</a\n                >.\n              </p>\n            </div>\n\n            <cloud-remote-pref\n              hass="[[hass]]"\n              cloud-status="[[cloudStatus]]"\n            ></cloud-remote-pref>\n\n            <cloud-alexa-pref\n              hass="[[hass]]"\n              cloud-status="[[cloudStatus]]"\n            ></cloud-alexa-pref>\n\n            <cloud-google-pref\n              hass="[[hass]]"\n              cloud-status="[[cloudStatus]]"\n            ></cloud-google-pref>\n\n            <cloud-webhooks\n              hass="[[hass]]"\n              cloud-status="[[cloudStatus]]"\n            ></cloud-webhooks>\n          </ha-config-section>\n        </div>\n      </hass-subpage>\n    ',
        ]);
        return (
          (Ae = function() {
            return e;
          }),
          e
        );
      }
      function Te(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (u) {
          return void n(u);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function De(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ze(e, t) {
        return !t || ("object" !== Ce(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Re(e, t, n) {
        return (Re =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ie(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function Ie(e) {
        return (Ie = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Fe(e, t) {
        return (Fe =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var He = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ze(this, Ie(t).apply(this, arguments))
          );
        }
        var n, i, s;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Fe(e, t);
          })(t, Object(T["a"])(Object(D["a"])(o["a"]))),
          (n = t),
          (i = [
            {
              key: "ready",
              value: function() {
                Re(Ie(t.prototype), "ready", this).call(this),
                  this._fetchSubscriptionInfo();
              },
            },
            {
              key: "_computeRemoteConnected",
              value: function(e) {
                return e ? "Connected" : "Not Connected";
              },
            },
            {
              key: "_fetchSubscriptionInfo",
              value: (function() {
                var e,
                  t = ((e = regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Object(a.g)(this.hass);
                            case 2:
                              (this._subscription = e.sent),
                                this._subscription.provider &&
                                  this.cloudStatus &&
                                  "connected" !== this.cloudStatus.cloud &&
                                  this.fire("ha-refresh-cloud-status");
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })),
                  function() {
                    var t = this,
                      n = arguments;
                    return new Promise(function(r, o) {
                      var i = e.apply(t, n);
                      function a(e) {
                        Te(i, r, o, a, s, "next", e);
                      }
                      function s(e) {
                        Te(i, r, o, a, s, "throw", e);
                      }
                      a(void 0);
                    });
                  });
                return function() {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "handleLogout",
              value: function() {
                var e = this;
                this.hass.callApi("post", "cloud/logout").then(function() {
                  return e.fire("ha-refresh-cloud-status");
                });
              },
            },
            {
              key: "_formatSubscription",
              value: function(e) {
                if (null === e) return "Fetching subscription…";
                var t = e.human_description;
                return (
                  e.plan_renewal_date &&
                    (t = t.replace(
                      "{periodEnd}",
                      Object(A.a)(
                        new Date(1e3 * e.plan_renewal_date),
                        this.hass.language
                      )
                    )),
                  t
                );
              },
            },
          ]),
          (s = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(Ae());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  isWide: Boolean,
                  cloudStatus: Object,
                  _subscription: { type: Object, value: null },
                };
              },
            },
          ]),
          i && De(n.prototype, i),
          s && De(n, s),
          t
        );
      })();
      customElements.define("cloud-account", He);
      n(106), n(90), n(108), n(222);
      var Le = n(229);
      n(244);
      function We(e) {
        return (We =
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
      function Me() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="iron-flex ha-style">\n        .content {\n          padding-bottom: 24px;\n          direction: ltr;\n        }\n        [slot="introduction"] {\n          margin: -1em 0;\n        }\n        [slot="introduction"] a {\n          color: var(--primary-color);\n        }\n        paper-item {\n          cursor: pointer;\n        }\n        ha-card {\n          overflow: hidden;\n        }\n        ha-card .card-header {\n          margin-bottom: -8px;\n        }\n        h1 {\n          @apply --paper-font-headline;\n          margin: 0;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n        [hidden] {\n          display: none;\n        }\n        .flash-msg {\n          padding-right: 44px;\n        }\n        .flash-msg paper-icon-button {\n          position: absolute;\n          top: 8px;\n          right: 8px;\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <hass-subpage header="Cloud Login">\n        <div class="content">\n          <ha-config-section is-wide="[[isWide]]">\n            <span slot="header">JAVIS Home Cloud</span>\n            <div slot="introduction">\n              <p>\n                JAVIS Home Cloud provides you with a secure remote connection to\n                your instance while away from home. It also allows you to\n                connect with cloud-only services: Amazon Alexa and Google\n                Assistant.\n              </p>\n              <p>\n                This service is run by our partner\n                <a href="https://www.nabucasa.com" target="_blank"\n                  >Nabu&nbsp;Casa,&nbsp;Inc</a\n                >, a company founded by the founders of JAVIS Home and Hass.io.\n              </p>\n              <p>\n                JAVIS Home Cloud is a subscription service with a free one month\n                trial. No payment information necessary.\n              </p>\n              <p>\n                <a href="https://www.nabucasa.com" target="_blank"\n                  >Learn more about JAVIS Home Cloud</a\n                >\n              </p>\n            </div>\n\n            <ha-card hidden$="[[!flashMessage]]">\n              <div class="card-content flash-msg">\n                [[flashMessage]]\n                <paper-icon-button icon="hass:close" on-click="_dismissFlash"\n                  >Dismiss</paper-icon-button\n                >\n                <paper-ripple id="flashRipple" noink=""></paper-ripple>\n              </div>\n            </ha-card>\n\n            <ha-card header="Sign in">\n              <div class="card-content">\n                <div class="error" hidden$="[[!_error]]">[[_error]]</div>\n                <paper-input\n                  label="Email"\n                  id="email"\n                  type="email"\n                  value="{{email}}"\n                  on-keydown="_keyDown"\n                  error-message="Invalid email"\n                ></paper-input>\n                <paper-input\n                  id="password"\n                  label="Password"\n                  value="{{_password}}"\n                  type="password"\n                  on-keydown="_keyDown"\n                  error-message="Passwords are at least 8 characters"\n                ></paper-input>\n              </div>\n              <div class="card-actions">\n                <ha-progress-button\n                  on-click="_handleLogin"\n                  progress="[[_requestInProgress]]"\n                  >Sign in</ha-progress-button\n                >\n                <button\n                  class="link"\n                  hidden="[[_requestInProgress]]"\n                  on-click="_handleForgotPassword"\n                >\n                  forgot password?\n                </button>\n              </div>\n            </ha-card>\n\n            <ha-card>\n              <paper-item on-click="_handleRegister">\n                <paper-item-body two-line="">\n                  Start your free 1 month trial\n                  <div secondary="">No payment information necessary</div>\n                </paper-item-body>\n                <ha-icon-next></ha-icon-next>\n              </paper-item>\n            </ha-card>\n          </ha-config-section>\n        </div>\n      </hass-subpage>\n    ',
        ]);
        return (
          (Me = function() {
            return e;
          }),
          e
        );
      }
      function Je(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Be(e, t) {
        return !t || ("object" !== We(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Ve(e, t, n) {
        return (Ve =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ne(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function Ne(e) {
        return (Ne = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function $e(e, t) {
        return ($e =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var qe = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Be(this, Ne(t).apply(this, arguments))
          );
        }
        var n, i, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && $e(e, t);
          })(t, Object(Le["a"])(Object(T["a"])(o["a"]))),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(Me());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  isWide: Boolean,
                  email: { type: String, notify: !0 },
                  _password: { type: String, value: "" },
                  _requestInProgress: { type: Boolean, value: !1 },
                  flashMessage: { type: String, notify: !0 },
                  _error: String,
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return ["_inputChanged(email, _password)"];
              },
            },
          ]),
          (i = [
            {
              key: "connectedCallback",
              value: function() {
                var e = this;
                Ve(Ne(t.prototype), "connectedCallback", this).call(this),
                  this.flashMessage &&
                    requestAnimationFrame(function() {
                      return requestAnimationFrame(function() {
                        return e.$.flashRipple.simulatedRipple();
                      });
                    });
              },
            },
            {
              key: "_inputChanged",
              value: function() {
                (this.$.email.invalid = !1),
                  (this.$.password.invalid = !1),
                  (this._error = !1);
              },
            },
            {
              key: "_keyDown",
              value: function(e) {
                13 === e.keyCode && (this._handleLogin(), e.preventDefault());
              },
            },
            {
              key: "_handleLogin",
              value: function() {
                var e = this,
                  t = !1;
                (this.email && this.email.includes("@")) ||
                  ((this.$.email.invalid = !0), this.$.email.focus(), (t = !0)),
                  this._password.length < 8 &&
                    ((this.$.password.invalid = !0),
                    t || ((t = !0), this.$.password.focus())),
                  t ||
                    ((this._requestInProgress = !0),
                    this.hass
                      .callApi("post", "cloud/login", {
                        email: this.email,
                        password: this._password,
                      })
                      .then(
                        function() {
                          e.fire("ha-refresh-cloud-status"),
                            e.setProperties({ email: "", _password: "" });
                        },
                        function(t) {
                          e._password = "";
                          var n = t && t.body && t.body.code;
                          if ("PasswordChangeRequired" === n)
                            return (
                              alert(
                                "You need to change your password before logging in."
                              ),
                              void e.navigate("/config/cloud/forgot-password")
                            );
                          var r = {
                            _requestInProgress: !1,
                            _error:
                              t && t.body && t.body.message
                                ? t.body.message
                                : "Unknown error",
                          };
                          "UserNotConfirmed" === n &&
                            (r._error =
                              "You need to confirm your email before logging in."),
                            e.setProperties(r),
                            e.$.email.focus();
                        }
                      ));
              },
            },
            {
              key: "_handleRegister",
              value: function() {
                (this.flashMessage = ""),
                  this.navigate("/config/cloud/register");
              },
            },
            {
              key: "_handleForgotPassword",
              value: function() {
                (this.flashMessage = ""),
                  this.navigate("/config/cloud/forgot-password");
              },
            },
            {
              key: "_dismissFlash",
              value: function() {
                var e = this;
                setTimeout(function() {
                  e.flashMessage = "";
                }, 200);
              },
            },
          ]) && Je(n.prototype, i),
          a && Je(n, a),
          t
        );
      })();
      customElements.define("cloud-login", qe);
      var Ge = n(129),
        Ue = n(96);
      function Ye(e) {
        return (Ye =
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
      function Ke(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Qe(e, t) {
        return (Qe =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Xe(e) {
        var t,
          n = rt(e.key);
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
        var r = {
          kind: "field" === e.kind ? "field" : "method",
          key: n,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (r.decorators = e.decorators),
          "field" === e.kind && (r.initializer = e.value),
          r
        );
      }
      function Ze(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function et(e) {
        return e.decorators && e.decorators.length;
      }
      function tt(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function nt(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function rt(e) {
        var t = (function(e, t) {
          if ("object" !== Ye(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== Ye(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Ye(t) ? t : String(t);
      }
      function ot(e, t, n) {
        return (ot =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = it(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function it(e) {
        return (it = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var at = ["account", "google-assistant", "alexa"],
        st = ["login", "register", "forgot-password"];
      !(function(e, t, n, r) {
        var o = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  t.kind === n &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var n = e.prototype;
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  var o = t.placement;
                  if (t.kind === r && ("static" === o || "prototype" === o)) {
                    var i = "static" === o ? e : n;
                    this.defineClassElement(i, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var n = t.descriptor;
              if ("field" === t.kind) {
                var r = t.initializer;
                n = {
                  enumerable: n.enumerable,
                  writable: n.writable,
                  configurable: n.configurable,
                  value: void 0 === r ? void 0 : r.call(e),
                };
              }
              Object.defineProperty(e, t.key, n);
            },
            decorateClass: function(e, t) {
              var n = [],
                r = [],
                o = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, o);
                }, this),
                e.forEach(function(e) {
                  if (!et(e)) return n.push(e);
                  var t = this.decorateElement(e, o);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    r.push.apply(r, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: r };
              var i = this.decorateConstructor(n, t);
              return r.push.apply(r, i.finishers), (i.finishers = r), i;
            },
            addElementPlacement: function(e, t, n) {
              var r = t[e.placement];
              if (!n && -1 !== r.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              r.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var n = [], r = [], o = e.decorators, i = o.length - 1;
                i >= 0;
                i--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, o[i])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && r.push(c.finisher);
                var u = c.extras;
                if (u) {
                  for (var l = 0; l < u.length; l++)
                    this.addElementPlacement(u[l], t);
                  n.push.apply(n, u);
                }
              }
              return { element: e, finishers: r, extras: n };
            },
            decorateConstructor: function(e, t) {
              for (var n = [], r = t.length - 1; r >= 0; r--) {
                var o = this.fromClassDescriptor(e),
                  i = this.toClassDescriptor((0, t[r])(o) || o);
                if (
                  (void 0 !== i.finisher && n.push(i.finisher),
                  void 0 !== i.elements)
                ) {
                  e = i.elements;
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
              return { elements: e, finishers: n };
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
              var n = rt(e.key),
                r = String(e.placement);
              if ("static" !== r && "prototype" !== r && "own" !== r)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    r +
                    '"'
                );
              var o = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var i = {
                kind: t,
                key: n,
                placement: r,
                descriptor: Object.assign({}, o),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      o,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      o,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      o,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (i.initializer = e.initializer)),
                i
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                n = nt(e, "finisher"),
                r = this.toElementDescriptors(e.extras);
              return { element: t, finisher: n, extras: r };
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
              var n = nt(e, "finisher"),
                r = this.toElementDescriptors(e.elements);
              return { elements: r, finisher: n };
            },
            runClassFinishers: function(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = (0, t[n])(e);
                if (void 0 !== r) {
                  if ("function" != typeof r)
                    throw new TypeError("Finishers must return a constructor.");
                  e = r;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, n) {
              if (void 0 !== e[t])
                throw new TypeError(n + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (r) for (var i = 0; i < r.length; i++) o = r[i](o);
        var a = t(function(e) {
            o.initializeInstanceElements(e, s.elements);
          }, n),
          s = o.decorateClass(
            (function(e) {
              for (
                var t = [],
                  n = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === i.key &&
                      e.placement === i.placement
                    );
                  },
                  r = 0;
                r < e.length;
                r++
              ) {
                var o,
                  i = e[r];
                if ("method" === i.kind && (o = t.find(n)))
                  if (tt(i.descriptor) || tt(o.descriptor)) {
                    if (et(i) || et(o))
                      throw new ReferenceError(
                        "Duplicated methods (" + i.key + ") can't be decorated."
                      );
                    o.descriptor = i.descriptor;
                  } else {
                    if (et(i)) {
                      if (et(o))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            i.key +
                            ")."
                        );
                      o.decorators = i.decorators;
                    }
                    Ze(i, o);
                  }
                else t.push(i);
              }
              return t;
            })(a.d.map(Xe)),
            e
          );
        o.initializeClassElements(a.F, s.elements),
          o.runClassFinishers(a.F, s.finishers);
      })(
        [Object(i.d)("ha-config-cloud")],
        function(e, t) {
          var r = (function(n) {
            function r() {
              var t, n, o, i;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r);
              for (
                var a = arguments.length, s = new Array(a), c = 0;
                c < a;
                c++
              )
                s[c] = arguments[c];
              return (
                (o = this),
                (n =
                  !(i = (t = it(r)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Ye(i) && "function" != typeof i)
                    ? Ke(o)
                    : i),
                e(Ke(n)),
                n
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
                  t && Qe(e, t);
              })(r, t),
              r
            );
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "isWide",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "narrow",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "route",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "cloudStatus",
                value: void 0,
              },
              {
                kind: "field",
                key: "routerOptions",
                value: function() {
                  var e = this;
                  return {
                    defaultPage: "login",
                    showLoading: !0,
                    initialLoad: function() {
                      return e._cloudStatusLoaded;
                    },
                    beforeRender: function(t) {
                      if (e.cloudStatus.logged_in) {
                        if (!at.includes(t)) return "account";
                      } else if (!st.includes(t)) return "login";
                    },
                    routes: {
                      login: { tag: "cloud-login" },
                      register: {
                        tag: "cloud-register",
                        load: function() {
                          return n.e(22).then(n.bind(null, 698));
                        },
                      },
                      "forgot-password": {
                        tag: "cloud-forgot-password",
                        load: function() {
                          return n.e(20).then(n.bind(null, 699));
                        },
                      },
                      account: { tag: "cloud-account" },
                      "google-assistant": {
                        tag: "cloud-google-assistant",
                        load: function() {
                          return Promise.all([n.e(9), n.e(21)]).then(
                            n.bind(null, 738)
                          );
                        },
                      },
                      alexa: {
                        tag: "cloud-alexa",
                        load: function() {
                          return Promise.all([n.e(9), n.e(19)]).then(
                            n.bind(null, 700)
                          );
                        },
                      },
                    },
                  };
                },
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "_flashMessage",
                value: function() {
                  return "";
                },
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "_loginEmail",
                value: function() {
                  return "";
                },
              },
              {
                kind: "field",
                key: "_resolveCloudStatusLoaded",
                value: void 0,
              },
              {
                kind: "field",
                key: "_cloudStatusLoaded",
                value: function() {
                  var e = this;
                  return new Promise(function(t) {
                    e._resolveCloudStatusLoaded = t;
                  });
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function(e) {
                  var t = this;
                  ot(it(r.prototype), "firstUpdated", this).call(this, e),
                    this.addEventListener("cloud-done", function(e) {
                      (t._flashMessage = e.detail.flashMessage),
                        Object(Ue.a)(t, "/config/cloud/login");
                    });
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  if (
                    (ot(it(r.prototype), "updated", this).call(this, e),
                    e.has("cloudStatus"))
                  ) {
                    var t = e.get("cloudStatus");
                    void 0 === t
                      ? this._resolveCloudStatusLoaded()
                      : t.logged_in !== this.cloudStatus.logged_in &&
                        Object(Ue.a)(this, this.route.prefix, !0);
                  }
                },
              },
              {
                kind: "method",
                key: "createElement",
                value: function(e) {
                  var t = this,
                    n = ot(it(r.prototype), "createElement", this).call(
                      this,
                      e
                    );
                  return (
                    n.addEventListener("email-changed", function(e) {
                      t._loginEmail = e.detail.value;
                    }),
                    n.addEventListener("flash-message-changed", function(e) {
                      t._flashMessage = e.detail.value;
                    }),
                    n
                  );
                },
              },
              {
                kind: "method",
                key: "updatePageEl",
                value: function(e) {
                  (this.cloudStatus &&
                    !this.cloudStatus.logged_in &&
                    at.includes(this._currentPage)) ||
                    ("setProperties" in e
                      ? e.setProperties({
                          hass: this.hass,
                          email: this._loginEmail,
                          isWide: this.isWide,
                          cloudStatus: this.cloudStatus,
                          flashMessage: this._flashMessage,
                        })
                      : ((e.hass = this.hass),
                        (e.email = this._loginEmail),
                        (e.isWide = this.isWide),
                        (e.narrow = this.narrow),
                        (e.cloudStatus = this.cloudStatus),
                        (e.flashMessage = this._flashMessage)));
                },
              },
            ],
          };
        },
        Ge.a
      );
    },
  },
]);
//# sourceMappingURL=chunk.ad897cc8b43f1c06c00f.js.map
