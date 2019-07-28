/*! For license information please see chunk.664d2a0628545871ac4a.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [86],
  {
    117: function(e, n, t) {
      "use strict";
      t.d(n, "a", function() {
        return a;
      });
      t(4);
      var r = t(53),
        o = t(34),
        a = [r.a, o.a, { hostAttributes: { role: "option", tabindex: "0" } }];
    },
    138: function(e, n, t) {
      "use strict";
      t(4), t(44), t(140);
      var r = t(5),
        o = t(3),
        a = t(117);
      function i() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n    <style include="paper-item-shared-styles">\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n      }\n    </style>\n    <slot></slot>\n',
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        _template: Object(o.a)(i()),
        is: "paper-item",
        behaviors: [a.a],
      });
    },
    140: function(e, n, t) {
      "use strict";
      t(44), t(55), t(41), t(52);
      var r = document.createElement("template");
      r.setAttribute("style", "display: none;"),
        (r.innerHTML =
          "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>"),
        document.head.appendChild(r.content);
    },
    172: function(e, n, t) {
      "use strict";
      var r = t(0);
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
      function a() {
        var e = c([""]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function i() {
        var e = c([
          '\n            <div class="card-header">',
          "</div>\n          ",
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = c(["\n      ", "\n      <slot></slot>\n    "]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = c([
          "\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    ",
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function c(e, n) {
        return (
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
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
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function d(e, n) {
        return (d =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      function f(e) {
        var n,
          t = b(e.key);
        "method" === e.kind
          ? (n = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (n = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (n = { set: e.value, configurable: !0, enumerable: !1 })
          : "field" === e.kind &&
            (n = { configurable: !0, writable: !0, enumerable: !0 });
        var r = {
          kind: "field" === e.kind ? "field" : "method",
          key: t,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: n,
        };
        return (
          e.decorators && (r.decorators = e.decorators),
          "field" === e.kind && (r.initializer = e.value),
          r
        );
      }
      function h(e, n) {
        void 0 !== e.descriptor.get
          ? (n.descriptor.get = e.descriptor.get)
          : (n.descriptor.set = e.descriptor.set);
      }
      function m(e) {
        return e.decorators && e.decorators.length;
      }
      function y(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function v(e, n) {
        var t = e[n];
        if (void 0 !== t && "function" != typeof t)
          throw new TypeError("Expected '" + n + "' to be a function");
        return t;
      }
      function b(e) {
        var n = (function(e, n) {
          if ("object" !== o(e) || null === e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, n || "default");
            if ("object" !== o(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === n ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(n) ? n : String(n);
      }
      var g = (function(e, n, t, r) {
        var o = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, n) {
              ["method", "field"].forEach(function(t) {
                n.forEach(function(n) {
                  n.kind === t &&
                    "own" === n.placement &&
                    this.defineClassElement(e, n);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, n) {
              var t = e.prototype;
              ["method", "field"].forEach(function(r) {
                n.forEach(function(n) {
                  var o = n.placement;
                  if (n.kind === r && ("static" === o || "prototype" === o)) {
                    var a = "static" === o ? e : t;
                    this.defineClassElement(a, n);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, n) {
              var t = n.descriptor;
              if ("field" === n.kind) {
                var r = n.initializer;
                t = {
                  enumerable: t.enumerable,
                  writable: t.writable,
                  configurable: t.configurable,
                  value: void 0 === r ? void 0 : r.call(e),
                };
              }
              Object.defineProperty(e, n.key, t);
            },
            decorateClass: function(e, n) {
              var t = [],
                r = [],
                o = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, o);
                }, this),
                e.forEach(function(e) {
                  if (!m(e)) return t.push(e);
                  var n = this.decorateElement(e, o);
                  t.push(n.element),
                    t.push.apply(t, n.extras),
                    r.push.apply(r, n.finishers);
                }, this),
                !n)
              )
                return { elements: t, finishers: r };
              var a = this.decorateConstructor(t, n);
              return r.push.apply(r, a.finishers), (a.finishers = r), a;
            },
            addElementPlacement: function(e, n, t) {
              var r = n[e.placement];
              if (!t && -1 !== r.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              r.push(e.key);
            },
            decorateElement: function(e, n) {
              for (
                var t = [], r = [], o = e.decorators, a = o.length - 1;
                a >= 0;
                a--
              ) {
                var i = n[e.placement];
                i.splice(i.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  p = this.toElementFinisherExtras((0, o[a])(s) || s);
                (e = p.element),
                  this.addElementPlacement(e, n),
                  p.finisher && r.push(p.finisher);
                var c = p.extras;
                if (c) {
                  for (var l = 0; l < c.length; l++)
                    this.addElementPlacement(c[l], n);
                  t.push.apply(t, c);
                }
              }
              return { element: e, finishers: r, extras: t };
            },
            decorateConstructor: function(e, n) {
              for (var t = [], r = n.length - 1; r >= 0; r--) {
                var o = this.fromClassDescriptor(e),
                  a = this.toClassDescriptor((0, n[r])(o) || o);
                if (
                  (void 0 !== a.finisher && t.push(a.finisher),
                  void 0 !== a.elements)
                ) {
                  e = a.elements;
                  for (var i = 0; i < e.length - 1; i++)
                    for (var s = i + 1; s < e.length; s++)
                      if (
                        e[i].key === e[s].key &&
                        e[i].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[i].key + ")"
                        );
                }
              }
              return { elements: e, finishers: t };
            },
            fromElementDescriptor: function(e) {
              var n = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(n, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (n.initializer = e.initializer),
                n
              );
            },
            toElementDescriptors: function(e) {
              var n;
              if (void 0 !== e)
                return ((n = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(n) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(n) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var n = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    n
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var n = String(e.kind);
              if ("method" !== n && "field" !== n)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    n +
                    '"'
                );
              var t = b(e.key),
                r = String(e.placement);
              if ("static" !== r && "prototype" !== r && "own" !== r)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    r +
                    '"'
                );
              var o = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var a = {
                kind: n,
                key: t,
                placement: r,
                descriptor: Object.assign({}, o),
              };
              return (
                "field" !== n
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
                    (a.initializer = e.initializer)),
                a
              );
            },
            toElementFinisherExtras: function(e) {
              var n = this.toElementDescriptor(e),
                t = v(e, "finisher"),
                r = this.toElementDescriptors(e.extras);
              return { element: n, finisher: t, extras: r };
            },
            fromClassDescriptor: function(e) {
              var n = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(n, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                n
              );
            },
            toClassDescriptor: function(e) {
              var n = String(e.kind);
              if ("class" !== n)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    n +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var t = v(e, "finisher"),
                r = this.toElementDescriptors(e.elements);
              return { elements: r, finisher: t };
            },
            runClassFinishers: function(e, n) {
              for (var t = 0; t < n.length; t++) {
                var r = (0, n[t])(e);
                if (void 0 !== r) {
                  if ("function" != typeof r)
                    throw new TypeError("Finishers must return a constructor.");
                  e = r;
                }
              }
              return e;
            },
            disallowProperty: function(e, n, t) {
              if (void 0 !== e[n])
                throw new TypeError(t + " can't have a ." + n + " property.");
            },
          };
          return e;
        })();
        if (r) for (var a = 0; a < r.length; a++) o = r[a](o);
        var i = n(function(e) {
            o.initializeInstanceElements(e, s.elements);
          }, t),
          s = o.decorateClass(
            (function(e) {
              for (
                var n = [],
                  t = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === a.key &&
                      e.placement === a.placement
                    );
                  },
                  r = 0;
                r < e.length;
                r++
              ) {
                var o,
                  a = e[r];
                if ("method" === a.kind && (o = n.find(t)))
                  if (y(a.descriptor) || y(o.descriptor)) {
                    if (m(a) || m(o))
                      throw new ReferenceError(
                        "Duplicated methods (" + a.key + ") can't be decorated."
                      );
                    o.descriptor = a.descriptor;
                  } else {
                    if (m(a)) {
                      if (m(o))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            a.key +
                            ")."
                        );
                      o.decorators = a.decorators;
                    }
                    h(a, o);
                  }
                else n.push(a);
              }
              return n;
            })(i.d.map(f)),
            e
          );
        return (
          o.initializeClassElements(i.F, s.elements),
          o.runClassFinishers(i.F, s.finishers)
        );
      })(
        null,
        function(e, n) {
          return {
            F: (function(t) {
              function r() {
                var n, t, a, i;
                !(function(e, n) {
                  if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r);
                for (
                  var s = arguments.length, p = new Array(s), c = 0;
                  c < s;
                  c++
                )
                  p[c] = arguments[c];
                return (
                  (a = this),
                  (t =
                    !(i = (n = l(r)).call.apply(n, [this].concat(p))) ||
                    ("object" !== o(i) && "function" != typeof i)
                      ? u(a)
                      : i),
                  e(u(t)),
                  t
                );
              }
              return (
                (function(e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(n && n.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    n && d(e, n);
                })(r, n),
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
                  return Object(r.c)(p());
                },
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(r.f)(
                    s(),
                    this.header
                      ? Object(r.f)(i(), this.header)
                      : Object(r.f)(a())
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
    178: function(e, n, t) {
      "use strict";
      t(4), t(44), t(41), t(52);
      var r = t(5),
        o = t(3);
      function a() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          "\n    <style>\n      :host {\n        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */\n        @apply --layout-vertical;\n        @apply --layout-center-justified;\n        @apply --layout-flex;\n      }\n\n      :host([two-line]) {\n        min-height: var(--paper-item-body-two-line-min-height, 72px);\n      }\n\n      :host([three-line]) {\n        min-height: var(--paper-item-body-three-line-min-height, 88px);\n      }\n\n      :host > ::slotted(*) {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      :host > ::slotted([secondary]) {\n        @apply --paper-font-body1;\n\n        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));\n\n        @apply --paper-item-body-secondary;\n      }\n    </style>\n\n    <slot></slot>\n",
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({ _template: Object(o.a)(a()), is: "paper-item-body" });
    },
    193: function(e, n, t) {
      "use strict";
      var r = t(3),
        o = t(25);
      t(92);
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
      function i() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n      <style include="iron-flex ha-style">\n        .content {\n          padding: 28px 20px 0;\n          max-width: 1040px;\n          margin: 0 auto;\n        }\n\n        .header {\n          @apply --paper-font-display1;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .together {\n          margin-top: 32px;\n        }\n\n        .intro {\n          @apply --paper-font-subhead;\n          width: 100%;\n          max-width: 400px;\n          margin-right: 40px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .panel {\n          margin-top: -24px;\n        }\n\n        .panel ::slotted(*) {\n          margin-top: 24px;\n          display: block;\n        }\n\n        .narrow.content {\n          max-width: 640px;\n        }\n        .narrow .together {\n          margin-top: 20px;\n        }\n        .narrow .header {\n          @apply --paper-font-headline;\n        }\n        .narrow .intro {\n          font-size: 14px;\n          padding-bottom: 20px;\n          margin-right: 0;\n          max-width: 500px;\n        }\n      </style>\n      <div class$="[[computeContentClasses(isWide)]]">\n        <div class="header"><slot name="header"></slot></div>\n        <div class$="[[computeClasses(isWide)]]">\n          <div class="intro"><slot name="introduction"></slot></div>\n          <div class="panel flex-auto"><slot></slot></div>\n        </div>\n      </div>\n    ',
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      function s(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, n) {
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
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, n) {
        return (l =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var u = (function(e) {
        function n() {
          return (
            (function(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            p(this, c(n).apply(this, arguments))
          );
        }
        var t, a, u;
        return (
          (function(e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              n && l(e, n);
          })(n, o["a"]),
          (t = n),
          (u = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(i());
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
          (a = [
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
          ]) && s(t.prototype, a),
          u && s(t, u),
          n
        );
      })();
      customElements.define("ha-config-section", u);
    },
    204: function(e, n, t) {
      "use strict";
      t(4), t(83);
      var r = t(3);
      function o() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n<dom-module id="paper-material-styles">\n  <template>\n    <style>\n      html {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      .paper-material {\n        @apply --paper-material;\n      }\n      .paper-material[elevation="1"] {\n        @apply --paper-material-elevation-1;\n      }\n      .paper-material[elevation="2"] {\n        @apply --paper-material-elevation-2;\n      }\n      .paper-material[elevation="3"] {\n        @apply --paper-material-elevation-3;\n      }\n      .paper-material[elevation="4"] {\n        @apply --paper-material-elevation-4;\n      }\n      .paper-material[elevation="5"] {\n        @apply --paper-material-elevation-5;\n      }\n\n      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */\n      :host {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      :host(.paper-material) {\n        @apply --paper-material;\n      }\n      :host(.paper-material[elevation="1"]) {\n        @apply --paper-material-elevation-1;\n      }\n      :host(.paper-material[elevation="2"]) {\n        @apply --paper-material-elevation-2;\n      }\n      :host(.paper-material[elevation="3"]) {\n        @apply --paper-material-elevation-3;\n      }\n      :host(.paper-material[elevation="4"]) {\n        @apply --paper-material-elevation-4;\n      }\n      :host(.paper-material[elevation="5"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var a = Object(r.a)(o());
      a.setAttribute("style", "display: none;"),
        document.head.appendChild(a.content);
    },
    207: function(e, n, t) {
      "use strict";
      t.d(n, "b", function() {
        return r;
      }),
        t.d(n, "a", function() {
          return o;
        });
      var r = function(e, n) {
          return e < n ? -1 : e > n ? 1 : 0;
        },
        o = function(e, n) {
          return r(e.toLowerCase(), n.toLowerCase());
        };
    },
    230: function(e, n, t) {
      "use strict";
      t(4), t(44), t(107), t(204), t(55), t(41);
      var r = t(53),
        o = t(34),
        a = t(67),
        i = {
          properties: {
            elevation: { type: Number, reflectToAttribute: !0, readOnly: !0 },
          },
          observers: [
            "_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)",
            "_computeKeyboardClass(receivedFocusFromKeyboard)",
          ],
          hostAttributes: { role: "button", tabindex: "0", animated: !0 },
          _calculateElevation: function() {
            var e = 1;
            this.disabled
              ? (e = 0)
              : this.active || this.pressed
              ? (e = 4)
              : this.receivedFocusFromKeyboard && (e = 3),
              this._setElevation(e);
          },
          _computeKeyboardClass: function(e) {
            this.toggleClass("keyboard-focus", e);
          },
          _spaceKeyDownHandler: function(e) {
            r.b._spaceKeyDownHandler.call(this, e),
              this.hasRipple() &&
                this.getRipple().ripples.length < 1 &&
                this._ripple.uiDownAction();
          },
          _spaceKeyUpHandler: function(e) {
            r.b._spaceKeyUpHandler.call(this, e),
              this.hasRipple() && this._ripple.uiUpAction();
          },
        },
        s = [r.a, o.a, a.a, i],
        p = t(5),
        c = t(3);
      function l() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })(
          [
            '\n  <style include="paper-material-styles">\n    :host {\n      @apply --layout-vertical;\n      @apply --layout-center-center;\n\n      background: var(--paper-fab-background, var(--accent-color));\n      border-radius: 50%;\n      box-sizing: border-box;\n      color: var(--text-primary-color);\n      cursor: pointer;\n      height: 56px;\n      min-width: 0;\n      outline: none;\n      padding: 16px;\n      position: relative;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      width: 56px;\n      z-index: 0;\n\n      /* NOTE: Both values are needed, since some phones require the value `transparent`. */\n      -webkit-tap-highlight-color: rgba(0,0,0,0);\n      -webkit-tap-highlight-color: transparent;\n\n      @apply --paper-fab;\n    }\n\n    [hidden] {\n      display: none !important;\n    }\n\n    :host([mini]) {\n      width: 40px;\n      height: 40px;\n      padding: 8px;\n\n      @apply --paper-fab-mini;\n    }\n\n    :host([disabled]) {\n      color: var(--paper-fab-disabled-text, var(--paper-grey-500));\n      background: var(--paper-fab-disabled-background, var(--paper-grey-300));\n\n      @apply --paper-fab-disabled;\n    }\n\n    iron-icon {\n      @apply --paper-fab-iron-icon;\n    }\n\n    span {\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-align: center;\n\n      @apply --paper-fab-label;\n    }\n\n    :host(.keyboard-focus) {\n      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));\n    }\n\n    :host([elevation="1"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation="2"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation="3"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation="4"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation="5"]) {\n      @apply --paper-material-elevation-5;\n    }\n  </style>\n\n  <iron-icon id="icon" hidden$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>\n  <span hidden$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>\n',
          ],
          [
            '\n  <style include="paper-material-styles">\n    :host {\n      @apply --layout-vertical;\n      @apply --layout-center-center;\n\n      background: var(--paper-fab-background, var(--accent-color));\n      border-radius: 50%;\n      box-sizing: border-box;\n      color: var(--text-primary-color);\n      cursor: pointer;\n      height: 56px;\n      min-width: 0;\n      outline: none;\n      padding: 16px;\n      position: relative;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      width: 56px;\n      z-index: 0;\n\n      /* NOTE: Both values are needed, since some phones require the value \\`transparent\\`. */\n      -webkit-tap-highlight-color: rgba(0,0,0,0);\n      -webkit-tap-highlight-color: transparent;\n\n      @apply --paper-fab;\n    }\n\n    [hidden] {\n      display: none !important;\n    }\n\n    :host([mini]) {\n      width: 40px;\n      height: 40px;\n      padding: 8px;\n\n      @apply --paper-fab-mini;\n    }\n\n    :host([disabled]) {\n      color: var(--paper-fab-disabled-text, var(--paper-grey-500));\n      background: var(--paper-fab-disabled-background, var(--paper-grey-300));\n\n      @apply --paper-fab-disabled;\n    }\n\n    iron-icon {\n      @apply --paper-fab-iron-icon;\n    }\n\n    span {\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-align: center;\n\n      @apply --paper-fab-label;\n    }\n\n    :host(.keyboard-focus) {\n      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));\n    }\n\n    :host([elevation="1"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation="2"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation="3"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation="4"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation="5"]) {\n      @apply --paper-material-elevation-5;\n    }\n  </style>\n\n  <iron-icon id="icon" hidden\\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>\n  <span hidden\\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>\n',
          ]
        );
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      var u = Object(c.a)(l());
      u.setAttribute("strip-whitespace", ""),
        Object(p.a)({
          _template: u,
          is: "paper-fab",
          behaviors: [s],
          properties: {
            src: { type: String, value: "" },
            icon: { type: String, value: "" },
            mini: { type: Boolean, value: !1, reflectToAttribute: !0 },
            label: { type: String, observer: "_labelChanged" },
          },
          _labelChanged: function() {
            this.setAttribute("aria-label", this.label);
          },
          _computeIsIconFab: function(e, n) {
            return e.length > 0 || n.length > 0;
          },
        });
    },
    330: function(e, n, t) {
      "use strict";
      function r(e, n, t, r, o, a, i) {
        try {
          var s = e[a](i),
            p = s.value;
        } catch (c) {
          return void t(c);
        }
        s.done ? n(p) : Promise.resolve(p).then(r, o);
      }
      function o(e) {
        return function() {
          var n = this,
            t = arguments;
          return new Promise(function(o, a) {
            var i = e.apply(n, t);
            function s(e) {
              r(i, o, a, s, p, "next", e);
            }
            function p(e) {
              r(i, o, a, s, p, "throw", e);
            }
            s(void 0);
          });
        };
      }
      t.d(n, "a", function() {
        return a;
      }),
        t.d(n, "b", function() {
          return i;
        }),
        t.d(n, "d", function() {
          return s;
        }),
        t.d(n, "e", function() {
          return p;
        }),
        t.d(n, "c", function() {
          return c;
        });
      var a = "system-admin",
        i = "system-users",
        s = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(n) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        n.callWS({ type: "config/auth/list" })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(n) {
            return e.apply(this, arguments);
          };
        })(),
        p = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(n, t, r) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        n.callWS(
                          Object.assign({}, r, {
                            type: "config/auth/update",
                            user_id: t,
                          })
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(n, t, r) {
            return e.apply(this, arguments);
          };
        })(),
        c = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(n, t) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        n.callWS({ type: "config/auth/delete", user_id: t })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(n, t) {
            return e.apply(this, arguments);
          };
        })();
    },
    726: function(e, n, t) {
      "use strict";
      t.r(n);
      var r = t(0),
        o = (t(138),
        t(178),
        t(230),
        function(e, n) {
          return e.callWS(Object.assign({ type: "person/create" }, n));
        }),
        a = (t(172), t(147), t(154), t(207)),
        i = (t(193), t(19)),
        s = function() {
          return Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(103)]).then(
            t.bind(null, 722)
          );
        },
        p = t(330);
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
      function l() {
        var e = x([
          "\n      a {\n        color: var(--primary-color);\n      }\n      ha-card {\n        max-width: 600px;\n        margin: 16px auto;\n        overflow: hidden;\n      }\n      .empty {\n        text-align: center;\n        padding: 8px;\n      }\n      paper-item {\n        padding-top: 4px;\n        padding-bottom: 4px;\n      }\n      ha-card.storage paper-item {\n        cursor: pointer;\n      }\n      paper-fab {\n        position: fixed;\n        bottom: 16px;\n        right: 16px;\n        z-index: 1;\n      }\n\n      paper-fab[is-wide] {\n        bottom: 24px;\n        right: 24px;\n      }\n    ",
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function u(e, n, t, r, o, a, i) {
        try {
          var s = e[a](i),
            p = s.value;
        } catch (c) {
          return void t(c);
        }
        s.done ? n(p) : Promise.resolve(p).then(r, o);
      }
      function d(e) {
        return function() {
          var n = this,
            t = arguments;
          return new Promise(function(r, o) {
            var a = e.apply(n, t);
            function i(e) {
              u(a, r, o, i, s, "next", e);
            }
            function s(e) {
              u(a, r, o, i, s, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function f() {
        var e = x([
          "\n                      <paper-item>\n                        <paper-item-body>\n                          ",
          "\n                        </paper-item-body>\n                      </paper-item>\n                    ",
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = x([
          '\n                <ha-card header="Configuration.yaml persons">\n                  ',
          "\n                </ha-card>\n              ",
        ]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = x([""]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = x([
          '\n                  <div class="empty">\n                    Looks like you have not created any persons yet.\n                    <mwc-button @click=',
          ">\n                      CREATE PERSON</mwc-button\n                    >\n                  </div>\n                ",
        ]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = x([
          "\n                <paper-item @click=",
          " .entry=",
          ">\n                  <paper-item-body>\n                    ",
          "\n                  </paper-item-body>\n                </paper-item>\n              ",
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = x([
          "\n                  <p>\n                    Note: persons configured via configuration.yaml cannot be\n                    edited via the UI.\n                  </p>\n                ",
        ]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = x([
          '\n      <hass-subpage header="Persons">\n        <ha-config-section .isWide=',
          '>\n          <span slot="header">Persons</span>\n          <span slot="introduction">\n            Here you can define each person of interest in JAVIS Home.\n            ',
          '\n          </span>\n          <ha-card class="storage">\n            ',
          "\n            ",
          "\n          </ha-card>\n          ",
          "\n        </ha-config-section>\n      </hass-subpage>\n\n      <paper-fab\n        ?is-wide=",
          '\n        icon="hass:plus"\n        title="Add Person"\n        @click=',
          "\n      ></paper-fab>\n    ",
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = x([
          "\n        <hass-loading-screen></hass-loading-screen>\n      ",
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function x(e, n) {
        return (
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          )
        );
      }
      function k(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function O(e, n) {
        return !n || ("object" !== c(n) && "function" != typeof n)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function _(e, n, t) {
        return (_ =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, n, t) {
                var r = (function(e, n) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, n) &&
                    null !== (e = j(e));

                  );
                  return e;
                })(e, n);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, n);
                  return o.get ? o.get.call(t) : o.value;
                }
              })(e, n, t || e);
      }
      function j(e) {
        return (j = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function E(e, n) {
        return (E =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var P = (function(e) {
        function n() {
          var e, t;
          !(function(e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, n);
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return (
            ((t = O(
              this,
              (e = j(n)).call.apply(e, [this].concat(o))
            )).hass = void 0),
            (t.isWide = void 0),
            (t._storageItems = void 0),
            (t._configItems = void 0),
            (t._usersLoad = void 0),
            t
          );
        }
        var t, c, u;
        return (
          (function(e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              n && E(e, n);
          })(n, r["a"]),
          (t = n),
          (c = [
            {
              key: "render",
              value: function() {
                var e = this;
                return this.hass &&
                  void 0 !== this._storageItems &&
                  void 0 !== this._configItems
                  ? Object(r.f)(
                      g(),
                      this.isWide,
                      this._configItems.length > 0 ? Object(r.f)(b()) : "",
                      this._storageItems.map(function(n) {
                        return Object(r.f)(v(), e._openEditEntry, n, n.name);
                      }),
                      0 === this._storageItems.length
                        ? Object(r.f)(y(), this._createPerson)
                        : Object(r.f)(m()),
                      this._configItems.length > 0
                        ? Object(r.f)(
                            h(),
                            this._configItems.map(function(e) {
                              return Object(r.f)(f(), e.name);
                            })
                          )
                        : "",
                      this.isWide,
                      this._createPerson
                    )
                  : Object(r.f)(w());
              },
            },
            {
              key: "firstUpdated",
              value: function(e) {
                _(j(n.prototype), "firstUpdated", this).call(this, e),
                  this._fetchData(),
                  s();
              },
            },
            {
              key: "_fetchData",
              value: (function() {
                var e = d(
                  regeneratorRuntime.mark(function e() {
                    var n;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this._usersLoad = Object(p.d)(this.hass)),
                                (e.next = 3),
                                this.hass.callWS({ type: "person/list" })
                              );
                            case 3:
                              (n = e.sent),
                                (this._storageItems = n.storage.sort(function(
                                  e,
                                  n
                                ) {
                                  return Object(a.b)(e.name, n.name);
                                })),
                                (this._configItems = n.config.sort(function(
                                  e,
                                  n
                                ) {
                                  return Object(a.b)(e.name, n.name);
                                }));
                            case 6:
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
              key: "_createPerson",
              value: function() {
                this._openDialog();
              },
            },
            {
              key: "_openEditEntry",
              value: function(e) {
                var n = e.currentTarget.entry;
                this._openDialog(n);
              },
            },
            {
              key: "_allowedUsers",
              value: function(e, n) {
                for (
                  var t = new Set(),
                    r = [this._configItems, this._storageItems],
                    o = 0;
                  o < r.length;
                  o++
                ) {
                  var a = r[o],
                    i = !0,
                    s = !1,
                    p = void 0;
                  try {
                    for (
                      var c, l = a[Symbol.iterator]();
                      !(i = (c = l.next()).done);
                      i = !0
                    ) {
                      var u = c.value;
                      u.user_id && t.add(u.user_id);
                    }
                  } catch (f) {
                    (s = !0), (p = f);
                  } finally {
                    try {
                      i || null == l.return || l.return();
                    } finally {
                      if (s) throw p;
                    }
                  }
                }
                var d = n ? n.user_id : void 0;
                return e.filter(function(e) {
                  return e.id === d || !t.has(e.id);
                });
              },
            },
            {
              key: "_openDialog",
              value: (function() {
                var e = d(
                  regeneratorRuntime.mark(function e(n) {
                    var t,
                      r = this;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this._usersLoad;
                            case 2:
                              (t = e.sent),
                                (p = this),
                                (c = {
                                  entry: n,
                                  users: this._allowedUsers(t, n),
                                  createEntry: (function() {
                                    var e = d(
                                      regeneratorRuntime.mark(function e(n) {
                                        var t;
                                        return regeneratorRuntime.wrap(function(
                                          e
                                        ) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.next = 2), o(r.hass, n)
                                                );
                                              case 2:
                                                (t = e.sent),
                                                  (r._storageItems = r._storageItems
                                                    .concat(t)
                                                    .sort(function(e, n) {
                                                      return Object(
                                                        a.b
                                                      )(e.name, n.name);
                                                    }));
                                              case 4:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e);
                                      })
                                    );
                                    return function(n) {
                                      return e.apply(this, arguments);
                                    };
                                  })(),
                                  updateEntry: (function() {
                                    var e = d(
                                      regeneratorRuntime.mark(function e(t) {
                                        var o;
                                        return regeneratorRuntime.wrap(function(
                                          e
                                        ) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.next = 2),
                                                  (a = r.hass),
                                                  (i = n.id),
                                                  (s = t),
                                                  a.callWS(
                                                    Object.assign(
                                                      {
                                                        type: "person/update",
                                                        person_id: i,
                                                      },
                                                      s
                                                    )
                                                  )
                                                );
                                              case 2:
                                                (o = e.sent),
                                                  (r._storageItems = r._storageItems.map(
                                                    function(e) {
                                                      return e === n ? o : e;
                                                    }
                                                  ));
                                              case 4:
                                              case "end":
                                                return e.stop();
                                            }
                                          var a, i, s;
                                        },
                                        e);
                                      })
                                    );
                                    return function(n) {
                                      return e.apply(this, arguments);
                                    };
                                  })(),
                                  removeEntry: (function() {
                                    var e = d(
                                      regeneratorRuntime.mark(function e() {
                                        return regeneratorRuntime.wrap(
                                          function(e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  if (
                                                    confirm(
                                                      "Are you sure you want to delete this person?\n\nAll devices belonging to this person will become unassigned."
                                                    )
                                                  ) {
                                                    e.next = 2;
                                                    break;
                                                  }
                                                  return e.abrupt("return", !1);
                                                case 2:
                                                  return (
                                                    (e.prev = 2),
                                                    (e.next = 5),
                                                    (t = r.hass),
                                                    (o = n.id),
                                                    t.callWS({
                                                      type: "person/delete",
                                                      person_id: o,
                                                    })
                                                  );
                                                case 5:
                                                  return (
                                                    (r._storageItems = r._storageItems.filter(
                                                      function(e) {
                                                        return e !== n;
                                                      }
                                                    )),
                                                    e.abrupt("return", !0)
                                                  );
                                                case 9:
                                                  return (
                                                    (e.prev = 9),
                                                    (e.t0 = e.catch(2)),
                                                    e.abrupt("return", !1)
                                                  );
                                                case 12:
                                                case "end":
                                                  return e.stop();
                                              }
                                            var t, o;
                                          },
                                          e,
                                          null,
                                          [[2, 9]]
                                        );
                                      })
                                    );
                                    return function() {
                                      return e.apply(this, arguments);
                                    };
                                  })(),
                                }),
                                Object(i.a)(p, "show-dialog", {
                                  dialogTag: "dialog-person-detail",
                                  dialogImport: s,
                                  dialogParams: c,
                                });
                            case 4:
                            case "end":
                              return e.stop();
                          }
                        var p, c;
                      },
                      e,
                      this
                    );
                  })
                );
                return function(n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          (u = [
            {
              key: "properties",
              get: function() {
                return {
                  hass: {},
                  isWide: {},
                  _storageItems: {},
                  _configItems: {},
                };
              },
            },
            {
              key: "styles",
              get: function() {
                return Object(r.c)(l());
              },
            },
          ]),
          c && k(t.prototype, c),
          u && k(t, u),
          n
        );
      })();
      customElements.define("ha-config-person", P);
    },
  },
]);
//# sourceMappingURL=chunk.664d2a0628545871ac4a.js.map
