/*! For license information please see chunk.4f2070481726727e59f7.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    117: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      n(4);
      var r = n(53),
        i = n(34),
        o = [r.a, i.a, { hostAttributes: { role: "option", tabindex: "0" } }];
    },
    138: function(e, t, n) {
      "use strict";
      n(4), n(44), n(140);
      var r = n(5),
        i = n(3),
        o = n(117);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style include="paper-item-shared-styles">\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n      }\n    </style>\n    <slot></slot>\n',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        _template: Object(i.a)(a()),
        is: "paper-item",
        behaviors: [o.a],
      });
    },
    139: function(e, t, n) {
      "use strict";
      n(4), n(41);
      var r = n(121),
        i = n(5),
        o = n(3);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n\n        background: var(--paper-listbox-background-color, var(--primary-background-color));\n        color: var(--paper-listbox-color, var(--primary-text-color));\n\n        @apply --paper-listbox;\n      }\n    </style>\n\n    <slot></slot>\n",
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(o.a)(a()),
        is: "paper-listbox",
        behaviors: [r.a],
        hostAttributes: { role: "listbox" },
      });
    },
    140: function(e, t, n) {
      "use strict";
      n(44), n(55), n(41), n(52);
      var r = document.createElement("template");
      r.setAttribute("style", "display: none;"),
        (r.innerHTML =
          "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>"),
        document.head.appendChild(r.content);
    },
    177: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
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
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e, t) {
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
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value;
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
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var c = customElements.get("iron-icon"),
        p = !1,
        u = (function(e) {
          function t() {
            var e, n;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              ((n = o(
                this,
                (e = s(t)).call.apply(e, [this].concat(i))
              ))._iconsetName = void 0),
              n
            );
          }
          var r, u, d;
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
            })(t, c),
            (r = t),
            (u = [
              {
                key: "listen",
                value: function(e, r, i) {
                  a(s(t.prototype), "listen", this).call(this, e, r, i),
                    p ||
                      "mdi" !== this._iconsetName ||
                      ((p = !0), n.e(70).then(n.bind(null, 214)));
                },
              },
            ]) && i(r.prototype, u),
            d && i(r, d),
            t
          );
        })();
      customElements.define("ha-icon", u);
    },
    187: function(e, t, n) {
      "use strict";
      n(4), n(44), n(52), n(140);
      var r = n(5),
        i = n(3),
        o = n(117);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style include="paper-item-shared-styles"></style>\n    <style>\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n        @apply --paper-icon-item;\n      }\n\n      .content-icon {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n\n        width: var(--paper-item-icon-width, 56px);\n        @apply --paper-item-icon;\n      }\n    </style>\n\n    <div id="contentIcon" class="content-icon">\n      <slot name="item-icon"></slot>\n    </div>\n    <slot></slot>\n',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        _template: Object(i.a)(a()),
        is: "paper-icon-item",
        behaviors: [o.a],
      });
    },
    723: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0);
      n(145), n(106), n(187), n(138), n(139), n(177);
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
      function o() {
        var e = s([
          "\n      :host {\n        display: inline-block;\n        box-sizing: border-box;\n        width: 40px;\n        line-height: 40px;\n        border-radius: 50%;\n        text-align: center;\n        background-color: var(--light-primary-color);\n        text-decoration: none;\n        color: var(--primary-text-color);\n        overflow: hidden;\n      }\n\n      :host([long]) {\n        font-size: 80%;\n      }\n    ",
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      function a() {
        var e = s(["\n      ", "\n    "]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function s(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function l(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function p(e) {
        var t,
          n = m(e.key);
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
      function u(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function d(e) {
        return e.decorators && e.decorators.length;
      }
      function f(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function h(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function m(e) {
        var t = (function(e, t) {
          if ("object" !== i(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== i(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === i(t) ? t : String(t);
      }
      function y(e, t, n) {
        return (y =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = b(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(e, t, n || e);
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var v = function(e) {
          return e
            ? e
                .trim()
                .split(" ")
                .slice(0, 3)
                .map(function(e) {
                  return e.substr(0, 1);
                })
                .join("")
            : "user";
        },
        g = ((function(e, t, n, r) {
          var i = (function() {
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
                    var i = t.placement;
                    if (t.kind === r && ("static" === i || "prototype" === i)) {
                      var o = "static" === i ? e : n;
                      this.defineClassElement(o, t);
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
                  i = { static: [], prototype: [], own: [] };
                if (
                  (e.forEach(function(e) {
                    this.addElementPlacement(e, i);
                  }, this),
                  e.forEach(function(e) {
                    if (!d(e)) return n.push(e);
                    var t = this.decorateElement(e, i);
                    n.push(t.element),
                      n.push.apply(n, t.extras),
                      r.push.apply(r, t.finishers);
                  }, this),
                  !t)
                )
                  return { elements: n, finishers: r };
                var o = this.decorateConstructor(n, t);
                return r.push.apply(r, o.finishers), (o.finishers = r), o;
              },
              addElementPlacement: function(e, t, n) {
                var r = t[e.placement];
                if (!n && -1 !== r.indexOf(e.key))
                  throw new TypeError("Duplicated element (" + e.key + ")");
                r.push(e.key);
              },
              decorateElement: function(e, t) {
                for (
                  var n = [], r = [], i = e.decorators, o = i.length - 1;
                  o >= 0;
                  o--
                ) {
                  var a = t[e.placement];
                  a.splice(a.indexOf(e.key), 1);
                  var s = this.fromElementDescriptor(e),
                    l = this.toElementFinisherExtras((0, i[o])(s) || s);
                  (e = l.element),
                    this.addElementPlacement(e, t),
                    l.finisher && r.push(l.finisher);
                  var c = l.extras;
                  if (c) {
                    for (var p = 0; p < c.length; p++)
                      this.addElementPlacement(c[p], t);
                    n.push.apply(n, c);
                  }
                }
                return { element: e, finishers: r, extras: n };
              },
              decorateConstructor: function(e, t) {
                for (var n = [], r = t.length - 1; r >= 0; r--) {
                  var i = this.fromClassDescriptor(e),
                    o = this.toClassDescriptor((0, t[r])(i) || i);
                  if (
                    (void 0 !== o.finisher && n.push(o.finisher),
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
                        "[object Arguments]" ===
                          Object.prototype.toString.call(e)
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
                      this.disallowProperty(
                        e,
                        "extras",
                        "An element descriptor"
                      ),
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
                var n = m(e.key),
                  r = String(e.placement);
                if ("static" !== r && "prototype" !== r && "own" !== r)
                  throw new TypeError(
                    'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                      r +
                      '"'
                  );
                var i = e.descriptor;
                this.disallowProperty(e, "elements", "An element descriptor");
                var o = {
                  kind: t,
                  key: n,
                  placement: r,
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
                  n = h(e, "finisher"),
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
                var n = h(e, "finisher"),
                  r = this.toElementDescriptors(e.elements);
                return { elements: r, finisher: n };
              },
              runClassFinishers: function(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = (0, t[n])(e);
                  if (void 0 !== r) {
                    if ("function" != typeof r)
                      throw new TypeError(
                        "Finishers must return a constructor."
                      );
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
          if (r) for (var o = 0; o < r.length; o++) i = r[o](i);
          var a = t(function(e) {
              i.initializeInstanceElements(e, s.elements);
            }, n),
            s = i.decorateClass(
              (function(e) {
                for (
                  var t = [],
                    n = function(e) {
                      return (
                        "method" === e.kind &&
                        e.key === o.key &&
                        e.placement === o.placement
                      );
                    },
                    r = 0;
                  r < e.length;
                  r++
                ) {
                  var i,
                    o = e[r];
                  if ("method" === o.kind && (i = t.find(n)))
                    if (f(o.descriptor) || f(i.descriptor)) {
                      if (d(o) || d(i))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
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
                      u(o, i);
                    }
                  else t.push(o);
                }
                return t;
              })(a.d.map(p)),
              e
            );
          i.initializeClassElements(a.F, s.elements),
            i.runClassFinishers(a.F, s.finishers);
        })(
          [Object(r.d)("ha-user-badge")],
          function(e, t) {
            var n = (function(n) {
              function r() {
                var t, n, o, a;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r);
                for (
                  var s = arguments.length, c = new Array(s), p = 0;
                  p < s;
                  p++
                )
                  c[p] = arguments[p];
                return (
                  (o = this),
                  (n =
                    !(a = (t = b(r)).call.apply(t, [this].concat(c))) ||
                    ("object" !== i(a) && "function" != typeof a)
                      ? l(o)
                      : a),
                  e(l(n)),
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
                    t && c(e, t);
                })(r, t),
                r
              );
            })();
            return {
              F: n,
              d: [
                {
                  kind: "field",
                  decorators: [Object(r.g)()],
                  key: "user",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function() {
                    var e = this.user,
                      t = e ? v(e.name) : "?";
                    return Object(r.f)(a(), t);
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function(e) {
                    y(b(n.prototype), "updated", this).call(this, e),
                      this.toggleAttribute(
                        "long",
                        (this.user ? v(this.user.name) : "?").length > 2
                      );
                  },
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function() {
                    return Object(r.c)(o());
                  },
                },
              ],
            };
          },
          r.a
        ),
        n(126),
        n(19)),
        w = n(116),
        k = n(132),
        x = n(118),
        E = n(71);
      function _(e) {
        return (_ =
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
      function O() {
        var e = F([
          '\n      :host {\n        height: 100%;\n        display: block;\n        overflow: hidden;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        border-right: 1px solid var(--divider-color);\n        background-color: var(--sidebar-background-color);\n        width: 64px;\n      }\n      :host([expanded]) {\n        width: 256px;\n      }\n\n      .menu {\n        box-sizing: border-box;\n        height: 65px;\n        display: flex;\n        padding: 0 12px;\n        border-bottom: 1px solid transparent;\n        white-space: nowrap;\n        font-weight: 400;\n        color: var(--primary-text-color);\n        border-bottom: 1px solid var(--divider-color);\n        background-color: var(--primary-background-color);\n        font-size: 20px;\n        align-items: center;\n      }\n      :host([expanded]) .menu {\n        width: 256px;\n      }\n\n      .menu paper-icon-button {\n        color: var(--sidebar-icon-color);\n      }\n      :host([expanded]) .menu paper-icon-button {\n        margin-right: 23px;\n      }\n\n      .title {\n        display: none;\n      }\n      :host([expanded]) .title {\n        display: initial;\n      }\n\n      paper-listbox::-webkit-scrollbar {\n        width: 0.4rem;\n        height: 0.4rem;\n      }\n\n      paper-listbox::-webkit-scrollbar-thumb {\n        -webkit-border-radius: 4px;\n        border-radius: 4px;\n        background: var(--scrollbar-thumb-color);\n      }\n\n      paper-listbox {\n        padding: 4px 0;\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        height: calc(100% - 196px);\n        overflow-y: auto;\n        overflow-x: hidden;\n        scrollbar-color: var(--scrollbar-thumb-color) transparent;\n        scrollbar-width: thin;\n      }\n\n      a {\n        color: var(--sidebar-text-color);\n        font-weight: 500;\n        font-size: 14px;\n        text-decoration: none;\n      }\n\n      paper-icon-item {\n        box-sizing: border-box;\n        margin: 4px 8px;\n        padding-left: 12px;\n        border-radius: 4px;\n        --paper-item-min-height: 40px;\n        width: 48px;\n      }\n      :host([expanded]) paper-icon-item {\n        width: 240px;\n      }\n\n      ha-icon[slot="item-icon"] {\n        color: var(--sidebar-icon-color);\n      }\n\n      .iron-selected paper-icon-item:before {\n        border-radius: 4px;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        pointer-events: none;\n        content: "";\n        background-color: var(--sidebar-selected-icon-color);\n        opacity: 0.12;\n        transition: opacity 15ms linear;\n        will-change: opacity;\n      }\n\n      .iron-selected paper-icon-item[pressed]:before {\n        opacity: 0.37;\n      }\n\n      paper-icon-item span {\n        color: var(--sidebar-text-color);\n        font-weight: 500;\n        font-size: 14px;\n      }\n\n      a.iron-selected paper-icon-item ha-icon {\n        color: var(--sidebar-selected-icon-color);\n      }\n\n      a.iron-selected .item-text {\n        color: var(--sidebar-selected-text-color);\n      }\n\n      paper-icon-item .item-text {\n        display: none;\n      }\n      :host([expanded]) paper-icon-item .item-text {\n        display: block;\n      }\n\n      .divider {\n        bottom: 112px;\n        padding: 10px 0;\n      }\n      .divider::before {\n        content: " ";\n        display: block;\n        height: 1px;\n        background-color: var(--divider-color);\n      }\n\n      .notifications {\n        cursor: pointer;\n      }\n      .notifications .item-text {\n        flex: 1;\n      }\n      .profile {\n      }\n      .profile paper-icon-item {\n        padding-left: 4px;\n      }\n      .profile .item-text {\n        margin-left: 8px;\n      }\n\n      .notification-badge {\n        min-width: 20px;\n        box-sizing: border-box;\n        border-radius: 50%;\n        font-weight: 400;\n        background-color: var(--primary-color);\n        line-height: 20px;\n        text-align: center;\n        padding: 0px 6px;\n        color: var(--text-primary-color);\n      }\n      ha-icon + .notification-badge {\n        position: absolute;\n        bottom: 14px;\n        left: 26px;\n        font-size: 0.65em;\n      }\n\n      .spacer {\n        flex: 1;\n        pointer-events: none;\n      }\n\n      .subheader {\n        color: var(--sidebar-text-color);\n        font-weight: 500;\n        font-size: 14px;\n        padding: 16px;\n        white-space: nowrap;\n      }\n\n      .dev-tools {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        padding: 0 8px;\n        width: 256px;\n        box-sizing: border-box;\n      }\n\n      .dev-tools a {\n        color: var(--sidebar-icon-color);\n      }\n\n      .tooltip {\n        display: none;\n        position: absolute;\n        opacity: 0.9;\n        border-radius: 2px;\n        white-space: nowrap;\n        color: var(--sidebar-background-color);\n        background-color: var(--sidebar-text-color);\n        padding: 4px;\n        font-weight: 500;\n      }\n    ',
        ]);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = F([
          '\n      <a\n        aria-role="option"\n        href="',
          '"\n        data-panel="',
          '"\n        tabindex="-1"\n      >\n        <paper-icon-item\n          @mouseenter=',
          "\n          @mouseleave=",
          '\n        >\n          <ha-icon slot="item-icon" .icon="',
          '"></ha-icon>\n          <span class="item-text">',
          "</span>\n        </paper-icon-item>\n      </a>\n    ",
        ]);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = F([
          '\n              <span class="notification-badge">',
          "</span>\n            ",
        ]);
        return (
          (P = function() {
            return e;
          }),
          e
        );
      }
      function T() {
        var e = F([
          '\n              <span class="notification-badge" slot="item-icon">\n                ',
          "\n              </span>\n            ",
        ]);
        return (
          (T = function() {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = F([
          '\n              <a\n                aria-role="option"\n                aria-label="App Configuration"\n                href="#external-app-configuration"\n                tabindex="-1"\n                @click=',
          "\n              >\n                <paper-icon-item\n                  @mouseenter=",
          "\n                  @mouseleave=",
          '\n                >\n                  <ha-icon\n                    slot="item-icon"\n                    icon="hass:cellphone-settings-variant"\n                  ></ha-icon>\n                  <span class="item-text">\n                    ',
          "\n                  </span>\n                </paper-icon-item>\n              </a>\n            ",
        ]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = F([
          '\n              <paper-icon-button\n                aria-label="Sidebar Toggle"\n                .icon=',
          "\n                @click=",
          "\n              ></paper-icon-button>\n            ",
        ]);
        return (
          (z = function() {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = F([
          '\n      <div class="menu">\n        ',
          '\n        <span class="title">JAVIS Home</span>\n      </div>\n      <paper-listbox\n        attr-for-selected="data-panel"\n        .selected=',
          "\n        @focusin=",
          "\n        @focusout=",
          "\n        @scroll=",
          "\n        @keydown=",
          "\n      >\n        ",
          "\n        ",
          '\n        <div class="spacer" disabled></div>\n\n        ',
          "\n        ",
          '\n      </paper-listbox>\n\n      <div class="divider"></div>\n\n      <paper-icon-item\n        class="notifications"\n        aria-role="option"\n        @click=',
          "\n        @mouseenter=",
          "\n        @mouseleave=",
          '\n      >\n        <ha-icon slot="item-icon" icon="hass:bell"></ha-icon>\n        ',
          '\n        <span class="item-text">\n          ',
          "\n        </span>\n        ",
          "\n      </paper-icon-item>\n\n      <a\n        class=",
          '\n        href="/profile"\n        data-panel="panel"\n        tabindex="-1"\n        aria-role="option"\n        aria-label=',
          "\n      >\n        <paper-icon-item\n          @mouseenter=",
          "\n          @mouseleave=",
          '\n        >\n          <ha-user-badge slot="item-icon" .user=',
          '></ha-user-badge>\n\n          <span class="item-text">\n            ',
          '\n          </span>\n        </paper-icon-item>\n      </a>\n      <div disabled class="bottom-spacer"></div>\n      <div class="tooltip"></div>\n    ',
        ]);
        return (
          (D = function() {
            return e;
          }),
          e
        );
      }
      function A(e, t) {
        return (
          J(e) ||
          (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (l) {
              (i = !0), (o = l);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t) ||
          q()
        );
      }
      function C() {
        var e = F([""]);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      function F(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function R(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function L(e, t) {
        return (L =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function M(e) {
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
      function I(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function U(e) {
        return e.decorators && e.decorators.length;
      }
      function H(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function N(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function K(e) {
        var t = (function(e, t) {
          if ("object" !== _(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== _(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === _(t) ? t : String(t);
      }
      function q() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }
      function J(e) {
        if (Array.isArray(e)) return e;
      }
      function V(e, t, n) {
        return (V =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = B(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(e, t, n || e);
      }
      function B(e) {
        return (B = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var W = ["config", "developer-tools", "hassio"],
        G = "scrollIntoViewIfNeeded" in document.body,
        Q = {
          map: 1,
          logbook: 2,
          history: 3,
          "developer-tools": 9,
          hassio: 10,
          configuration: 11,
        },
        X = function(e, t) {
          var n = e.component_name in Q,
            r = t.component_name in Q;
          return n && r
            ? Q[e.component_name] - Q[t.component_name]
            : n
            ? -1
            : r
            ? 1
            : e.title < t.title
            ? -1
            : e.title > t.title
            ? 1
            : 0;
        },
        Y = (function(e, t, n, r) {
          var i = (function() {
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
                    var i = t.placement;
                    if (t.kind === r && ("static" === i || "prototype" === i)) {
                      var o = "static" === i ? e : n;
                      this.defineClassElement(o, t);
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
                  i = { static: [], prototype: [], own: [] };
                if (
                  (e.forEach(function(e) {
                    this.addElementPlacement(e, i);
                  }, this),
                  e.forEach(function(e) {
                    if (!U(e)) return n.push(e);
                    var t = this.decorateElement(e, i);
                    n.push(t.element),
                      n.push.apply(n, t.extras),
                      r.push.apply(r, t.finishers);
                  }, this),
                  !t)
                )
                  return { elements: n, finishers: r };
                var o = this.decorateConstructor(n, t);
                return r.push.apply(r, o.finishers), (o.finishers = r), o;
              },
              addElementPlacement: function(e, t, n) {
                var r = t[e.placement];
                if (!n && -1 !== r.indexOf(e.key))
                  throw new TypeError("Duplicated element (" + e.key + ")");
                r.push(e.key);
              },
              decorateElement: function(e, t) {
                for (
                  var n = [], r = [], i = e.decorators, o = i.length - 1;
                  o >= 0;
                  o--
                ) {
                  var a = t[e.placement];
                  a.splice(a.indexOf(e.key), 1);
                  var s = this.fromElementDescriptor(e),
                    l = this.toElementFinisherExtras((0, i[o])(s) || s);
                  (e = l.element),
                    this.addElementPlacement(e, t),
                    l.finisher && r.push(l.finisher);
                  var c = l.extras;
                  if (c) {
                    for (var p = 0; p < c.length; p++)
                      this.addElementPlacement(c[p], t);
                    n.push.apply(n, c);
                  }
                }
                return { element: e, finishers: r, extras: n };
              },
              decorateConstructor: function(e, t) {
                for (var n = [], r = t.length - 1; r >= 0; r--) {
                  var i = this.fromClassDescriptor(e),
                    o = this.toClassDescriptor((0, t[r])(i) || i);
                  if (
                    (void 0 !== o.finisher && n.push(o.finisher),
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
                  J(t) ||
                    (function(e) {
                      if (
                        Symbol.iterator in Object(e) ||
                        "[object Arguments]" ===
                          Object.prototype.toString.call(e)
                      )
                        return Array.from(e);
                    })(t) ||
                    q()).map(function(e) {
                    var t = this.toElementDescriptor(e);
                    return (
                      this.disallowProperty(
                        e,
                        "finisher",
                        "An element descriptor"
                      ),
                      this.disallowProperty(
                        e,
                        "extras",
                        "An element descriptor"
                      ),
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
                var i = e.descriptor;
                this.disallowProperty(e, "elements", "An element descriptor");
                var o = {
                  kind: t,
                  key: n,
                  placement: r,
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
                  n = N(e, "finisher"),
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
                var n = N(e, "finisher"),
                  r = this.toElementDescriptors(e.elements);
                return { elements: r, finisher: n };
              },
              runClassFinishers: function(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = (0, t[n])(e);
                  if (void 0 !== r) {
                    if ("function" != typeof r)
                      throw new TypeError(
                        "Finishers must return a constructor."
                      );
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
          if (r) for (var o = 0; o < r.length; o++) i = r[o](i);
          var a = t(function(e) {
              i.initializeInstanceElements(e, s.elements);
            }, n),
            s = i.decorateClass(
              (function(e) {
                for (
                  var t = [],
                    n = function(e) {
                      return (
                        "method" === e.kind &&
                        e.key === o.key &&
                        e.placement === o.placement
                      );
                    },
                    r = 0;
                  r < e.length;
                  r++
                ) {
                  var i,
                    o = e[r];
                  if ("method" === o.kind && (i = t.find(n)))
                    if (H(o.descriptor) || H(i.descriptor)) {
                      if (U(o) || U(i))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
                        );
                      i.descriptor = o.descriptor;
                    } else {
                      if (U(o)) {
                        if (U(i))
                          throw new ReferenceError(
                            "Decorators can't be placed on different accessors with for the same property (" +
                              o.key +
                              ")."
                          );
                        i.decorators = o.decorators;
                      }
                      I(o, i);
                    }
                  else t.push(o);
                }
                return t;
              })(a.d.map(M)),
              e
            );
          return (
            i.initializeClassElements(a.F, s.elements),
            i.runClassFinishers(a.F, s.finishers)
          );
        })(
          null,
          function(e, t) {
            var n = (function(n) {
              function r() {
                var t, n, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r);
                for (
                  var a = arguments.length, s = new Array(a), l = 0;
                  l < a;
                  l++
                )
                  s[l] = arguments[l];
                return (
                  (i = this),
                  (n =
                    !(o = (t = B(r)).call.apply(t, [this].concat(s))) ||
                    ("object" !== _(o) && "function" != typeof o)
                      ? R(i)
                      : o),
                  e(R(n)),
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
                    t && L(e, t);
                })(r, t),
                r
              );
            })();
            return {
              F: n,
              d: [
                {
                  kind: "field",
                  decorators: [Object(r.g)()],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(r.g)()],
                  key: "narrow",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(r.g)({ type: Boolean })],
                  key: "alwaysExpand",
                  value: function() {
                    return !1;
                  },
                },
                {
                  kind: "field",
                  decorators: [Object(r.g)({ type: Boolean, reflect: !0 })],
                  key: "expanded",
                  value: function() {
                    return !1;
                  },
                },
                {
                  kind: "field",
                  decorators: [Object(r.g)()],
                  key: "_defaultPage",
                  value: function() {
                    return localStorage.defaultPage || w.b;
                  },
                },
                {
                  kind: "field",
                  decorators: [Object(r.g)()],
                  key: "_externalConfig",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(r.g)()],
                  key: "_notifications",
                  value: void 0,
                },
                { kind: "field", key: "_mouseLeaveTimeout", value: void 0 },
                { kind: "field", key: "_tooltipHideTimeout", value: void 0 },
                {
                  kind: "field",
                  key: "_recentKeydownActiveUntil",
                  value: function() {
                    return 0;
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function() {
                    var e = this,
                      t = this.hass;
                    if (!t) return Object(r.f)(C());
                    var n = A(
                        (function(e) {
                          var t = e.panels;
                          if (!t) return [[], []];
                          var n = [],
                            r = [];
                          return (
                            Object.values(t).forEach(function(e) {
                              e.title &&
                                (W.includes(e.component_name) ? r : n).push(e);
                            }),
                            n.sort(X),
                            r.sort(X),
                            [n, r]
                          );
                        })(t),
                        2
                      ),
                      i = n[0],
                      o = n[1],
                      a = this._notifications ? this._notifications.length : 0;
                    for (var s in t.states)
                      "configurator" === Object(x.a)(s) && a++;
                    return Object(r.f)(
                      D(),
                      this.narrow
                        ? ""
                        : Object(r.f)(
                            z(),
                            "docked" === t.dockedSidebar
                              ? "hass:menu-open"
                              : "hass:menu",
                            this._toggleSidebar
                          ),
                      t.panelUrl,
                      this._listboxFocusIn,
                      this._listboxFocusOut,
                      this._listboxScroll,
                      this._listboxKeydown,
                      this._renderPanel(
                        this._defaultPage,
                        "hass:apps",
                        t.localize("panel.states")
                      ),
                      i.map(function(n) {
                        return e._renderPanel(
                          n.url_path,
                          n.icon,
                          t.localize("panel.".concat(n.title)) || n.title
                        );
                      }),
                      o.map(function(n) {
                        return e._renderPanel(
                          n.url_path,
                          n.icon,
                          t.localize("panel.".concat(n.title)) || n.title
                        );
                      }),
                      this._externalConfig &&
                        this._externalConfig.hasSettingsScreen
                        ? Object(r.f)(
                            S(),
                            this._handleExternalAppConfiguration,
                            this._itemMouseEnter,
                            this._itemMouseLeave,
                            t.localize("ui.sidebar.external_app_configuration")
                          )
                        : "",
                      this._handleShowNotificationDrawer,
                      this._itemMouseEnter,
                      this._itemMouseLeave,
                      !this.expanded && a > 0 ? Object(r.f)(T(), a) : "",
                      t.localize("ui.notification_drawer.title"),
                      this.expanded && a > 0 ? Object(r.f)(P(), a) : "",
                      Object(E.a)({
                        profile: !0,
                        "iron-selected": "profile" === t.panelUrl,
                      }),
                      t.localize("panel.profile"),
                      this._itemMouseEnter,
                      this._itemMouseLeave,
                      t.user,
                      t.user ? t.user.name : ""
                    );
                  },
                },
                {
                  kind: "method",
                  key: "shouldUpdate",
                  value: function(e) {
                    if (
                      e.has("expanded") ||
                      e.has("narrow") ||
                      e.has("alwaysExpand") ||
                      e.has("_externalConfig") ||
                      e.has("_notifications")
                    )
                      return !0;
                    if (!this.hass || !e.has("hass")) return !1;
                    var t = e.get("hass");
                    if (!t) return !0;
                    var n = this.hass;
                    return (
                      n.panels !== t.panels ||
                      n.panelUrl !== t.panelUrl ||
                      n.user !== t.user ||
                      n.localize !== t.localize ||
                      n.states !== t.states
                    );
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function(e) {
                    var t,
                      r = this;
                    V(B(n.prototype), "firstUpdated", this).call(this, e),
                      this.hass &&
                        this.hass.auth.external &&
                        ((t = this.hass.auth.external),
                        t.cache.cfg ||
                          (t.cache.cfg = t.sendMessage({ type: "config/get" })),
                        t.cache.cfg).then(function(e) {
                          r._externalConfig = e;
                        }),
                      Object(k.a)(this.hass.connection, function(e) {
                        r._notifications = e;
                      });
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function(e) {
                    if (
                      (V(B(n.prototype), "updated", this).call(this, e),
                      e.has("alwaysExpand") &&
                        (this.expanded = this.alwaysExpand),
                      G && e.has("hass"))
                    ) {
                      var t = e.get("hass");
                      if (!t || t.panelUrl !== this.hass.panelUrl) {
                        var r = this.shadowRoot.querySelector(".iron-selected");
                        r && r.scrollIntoViewIfNeeded();
                      }
                    }
                  },
                },
                {
                  kind: "get",
                  key: "_tooltip",
                  value: function() {
                    return this.shadowRoot.querySelector(".tooltip");
                  },
                },
                {
                  kind: "method",
                  key: "_itemMouseEnter",
                  value: function(e) {
                    this.expanded ||
                      new Date().getTime() < this._recentKeydownActiveUntil ||
                      (this._mouseLeaveTimeout &&
                        (clearTimeout(this._mouseLeaveTimeout),
                        (this._mouseLeaveTimeout = void 0)),
                      this._showTooltip(e.currentTarget));
                  },
                },
                {
                  kind: "method",
                  key: "_itemMouseLeave",
                  value: function() {
                    var e = this;
                    this._mouseLeaveTimeout &&
                      clearTimeout(this._mouseLeaveTimeout),
                      (this._mouseLeaveTimeout = window.setTimeout(function() {
                        e._hideTooltip();
                      }, 500));
                  },
                },
                {
                  kind: "method",
                  key: "_listboxFocusIn",
                  value: function(e) {
                    this.expanded ||
                      "A" !== e.target.nodeName ||
                      this._showTooltip(
                        e.target.querySelector("paper-icon-item")
                      );
                  },
                },
                {
                  kind: "method",
                  key: "_listboxFocusOut",
                  value: function() {
                    this._hideTooltip();
                  },
                },
                {
                  kind: "method",
                  decorators: [Object(r.e)({ passive: !0 })],
                  key: "_listboxScroll",
                  value: function() {
                    new Date().getTime() < this._recentKeydownActiveUntil ||
                      this._hideTooltip();
                  },
                },
                {
                  kind: "method",
                  key: "_listboxKeydown",
                  value: function() {
                    this._recentKeydownActiveUntil = new Date().getTime() + 100;
                  },
                },
                {
                  kind: "method",
                  key: "_showTooltip",
                  value: function(e) {
                    this._tooltipHideTimeout &&
                      (clearTimeout(this._tooltipHideTimeout),
                      (this._tooltipHideTimeout = void 0));
                    var t = this._tooltip,
                      n = this.shadowRoot.querySelector("paper-listbox"),
                      r = e.offsetTop + 7;
                    n.contains(e) && (r -= n.scrollTop),
                      (t.innerHTML = e.querySelector(".item-text").innerHTML),
                      (t.style.display = "block"),
                      (t.style.top = "".concat(r, "px")),
                      (t.style.left = "".concat(
                        e.offsetLeft + e.clientWidth + 12,
                        "px"
                      ));
                  },
                },
                {
                  kind: "method",
                  key: "_hideTooltip",
                  value: function() {
                    var e = this;
                    this._tooltipHideTimeout ||
                      (this._tooltipHideTimeout = window.setTimeout(function() {
                        (e._tooltipHideTimeout = void 0),
                          (e._tooltip.style.display = "none");
                      }, 10));
                  },
                },
                {
                  kind: "method",
                  key: "_handleShowNotificationDrawer",
                  value: function() {
                    Object(g.a)(this, "hass-show-notifications");
                  },
                },
                {
                  kind: "method",
                  key: "_handleExternalAppConfiguration",
                  value: function(e) {
                    e.preventDefault(),
                      this.hass.auth.external.fireMessage({
                        type: "config_screen/show",
                      });
                  },
                },
                {
                  kind: "method",
                  key: "_toggleSidebar",
                  value: function() {
                    Object(g.a)(this, "hass-toggle-menu");
                  },
                },
                {
                  kind: "method",
                  key: "_renderPanel",
                  value: function(e, t, n) {
                    return Object(r.f)(
                      j(),
                      "/".concat(e),
                      e,
                      this._itemMouseEnter,
                      this._itemMouseLeave,
                      t,
                      n
                    );
                  },
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function() {
                    return Object(r.c)(O());
                  },
                },
              ],
            };
          },
          r.a
        );
      customElements.define("ha-sidebar", Y);
    },
  },
]);
//# sourceMappingURL=chunk.4f2070481726727e59f7.js.map
