/*! For license information please see chunk.87d6d6f920f46d95db33.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [72],
  {
    725: function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n(0),
        r = n(93),
        o = (n(82), n(91)),
        s = n(84),
        a = n(5),
        c = n(3),
        l = n(4);
      function u() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n        position: fixed;\n        background-color: var(--paper-toast-background-color, #323232);\n        color: var(--paper-toast-color, #f1f1f1);\n        min-height: 48px;\n        min-width: 288px;\n        padding: 16px 24px;\n        box-sizing: border-box;\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n        border-radius: 2px;\n        margin: 12px;\n        font-size: 14px;\n        cursor: default;\n        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;\n        transition: transform 0.3s, opacity 0.3s;\n        opacity: 0;\n        -webkit-transform: translateY(100px);\n        transform: translateY(100px);\n        @apply --paper-font-common-base;\n      }\n\n      :host(.capsule) {\n        border-radius: 24px;\n      }\n\n      :host(.fit-bottom) {\n        width: 100%;\n        min-width: 0;\n        border-radius: 0;\n        margin: 0;\n      }\n\n      :host(.paper-toast-open) {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n        transform: translateY(0px);\n      }\n    </style>\n\n    <span id="label">{{text}}</span>\n    <slot></slot>\n',
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      var f = null;
      function d(e) {
        return (d =
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
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function h(e, t) {
        return !t || ("object" !== d(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function b(e, t, n) {
        return (b =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = y(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get ? r.get.call(n) : r.value;
                }
              })(e, t, n || e);
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      Object(a.a)({
        _template: Object(c.a)(u()),
        is: "paper-toast",
        behaviors: [s.a],
        properties: {
          fitInto: {
            type: Object,
            value: window,
            observer: "_onFitIntoChanged",
          },
          horizontalAlign: { type: String, value: "left" },
          verticalAlign: { type: String, value: "bottom" },
          duration: { type: Number, value: 3e3 },
          text: { type: String, value: "" },
          noCancelOnOutsideClick: { type: Boolean, value: !0 },
          noAutoFocus: { type: Boolean, value: !0 },
        },
        listeners: { transitionend: "__onTransitionEnd" },
        get visible() {
          return (
            l.a._warn("`visible` is deprecated, use `opened` instead"),
            this.opened
          );
        },
        get _canAutoClose() {
          return this.duration > 0 && this.duration !== 1 / 0;
        },
        created: function() {
          (this._autoClose = null), o.a.requestAvailability();
        },
        show: function(e) {
          for (var t in ("string" == typeof e && (e = { text: e }), e))
            0 === t.indexOf("_")
              ? l.a._warn(
                  'The property "' + t + '" is private and was not set.'
                )
              : t in this
              ? (this[t] = e[t])
              : l.a._warn('The property "' + t + '" is not valid.');
          this.open();
        },
        hide: function() {
          this.close();
        },
        __onTransitionEnd: function(e) {
          e &&
            e.target === this &&
            "opacity" === e.propertyName &&
            (this.opened
              ? this._finishRenderOpened()
              : this._finishRenderClosed());
        },
        _openedChanged: function() {
          null !== this._autoClose &&
            (this.cancelAsync(this._autoClose), (this._autoClose = null)),
            this.opened
              ? (f && f !== this && f.close(),
                (f = this),
                this.fire("iron-announce", { text: this.text }),
                this._canAutoClose &&
                  (this._autoClose = this.async(this.close, this.duration)))
              : f === this && (f = null),
            s.b._openedChanged.apply(this, arguments);
        },
        _renderOpened: function() {
          this.classList.add("paper-toast-open");
        },
        _renderClosed: function() {
          this.classList.remove("paper-toast-open");
        },
        _onFitIntoChanged: function(e) {
          this.positionTarget = e;
        },
      });
      var v = customElements.get("paper-toast"),
        _ = (function(e) {
          function t() {
            var e, n;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
              r[o] = arguments[o];
            return (
              ((n = h(
                this,
                (e = y(t)).call.apply(e, [this].concat(r))
              ))._resizeListener = void 0),
              (n._mediaq = void 0),
              n
            );
          }
          var n, i, r;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && m(e, t);
            })(t, v),
            (n = t),
            (i = [
              {
                key: "connectedCallback",
                value: function() {
                  var e = this;
                  b(y(t.prototype), "connectedCallback", this).call(this),
                    this._resizeListener ||
                      ((this._resizeListener = function(t) {
                        return e.classList.toggle("fit-bottom", t.matches);
                      }),
                      (this._mediaq = window.matchMedia("(max-width: 599px"))),
                    this._mediaq.addListener(this._resizeListener),
                    this._resizeListener(this._mediaq);
                },
              },
              {
                key: "disconnectedCallback",
                value: function() {
                  b(y(t.prototype), "disconnectedCallback", this).call(this),
                    this._mediaq.removeListener(this._resizeListener);
                },
              },
            ]) && p(n.prototype, i),
            r && p(n, r),
            t
          );
        })();
      function w(e) {
        return (w =
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
      function g() {
        var e = O([
          "\n      mwc-button {\n        color: var(--primary-color);\n        font-weight: bold;\n      }\n    ",
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = O([
          "\n              <mwc-button\n                .label=",
          "\n                @click=",
          "\n              ></mwc-button>\n            ",
        ]);
        return (
          (z = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = O([
          "\n      <ha-toast .noCancelOnOutsideClick=",
          ">\n        ",
          "\n      </ha-toast>\n    ",
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
      function E(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            c = a.value;
        } catch (l) {
          return void n(l);
        }
        a.done ? t(c) : Promise.resolve(c).then(i, r);
      }
      function R(e) {
        return (R = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function x(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function C(e, t) {
        return (C =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function j(e) {
        var t,
          n = T(e.key);
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
        var i = {
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
          e.decorators && (i.decorators = e.decorators),
          "field" === e.kind && (i.initializer = e.value),
          i
        );
      }
      function P(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function D(e) {
        return e.decorators && e.decorators.length;
      }
      function S(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function A(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function T(e) {
        var t = (function(e, t) {
          if ("object" !== w(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" !== w(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === w(t) ? t : String(t);
      }
      customElements.define("ha-toast", _);
      var I = (function(e, t, n, i) {
        var r = (function() {
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
              ["method", "field"].forEach(function(i) {
                t.forEach(function(t) {
                  var r = t.placement;
                  if (t.kind === i && ("static" === r || "prototype" === r)) {
                    var o = "static" === r ? e : n;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var n = t.descriptor;
              if ("field" === t.kind) {
                var i = t.initializer;
                n = {
                  enumerable: n.enumerable,
                  writable: n.writable,
                  configurable: n.configurable,
                  value: void 0 === i ? void 0 : i.call(e),
                };
              }
              Object.defineProperty(e, t.key, n);
            },
            decorateClass: function(e, t) {
              var n = [],
                i = [],
                r = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, r);
                }, this),
                e.forEach(function(e) {
                  if (!D(e)) return n.push(e);
                  var t = this.decorateElement(e, r);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    i.push.apply(i, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: i };
              var o = this.decorateConstructor(n, t);
              return i.push.apply(i, o.finishers), (o.finishers = i), o;
            },
            addElementPlacement: function(e, t, n) {
              var i = t[e.placement];
              if (!n && -1 !== i.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              i.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var n = [], i = [], r = e.decorators, o = r.length - 1;
                o >= 0;
                o--
              ) {
                var s = t[e.placement];
                s.splice(s.indexOf(e.key), 1);
                var a = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, r[o])(a) || a);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && i.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  n.push.apply(n, l);
                }
              }
              return { element: e, finishers: i, extras: n };
            },
            decorateConstructor: function(e, t) {
              for (var n = [], i = t.length - 1; i >= 0; i--) {
                var r = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[i])(r) || r);
                if (
                  (void 0 !== o.finisher && n.push(o.finisher),
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
              var n = T(e.key),
                i = String(e.placement);
              if ("static" !== i && "prototype" !== i && "own" !== i)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    i +
                    '"'
                );
              var r = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: n,
                placement: i,
                descriptor: Object.assign({}, r),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      r,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                n = A(e, "finisher"),
                i = this.toElementDescriptors(e.extras);
              return { element: t, finisher: n, extras: i };
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
              var n = A(e, "finisher"),
                i = this.toElementDescriptors(e.elements);
              return { elements: i, finisher: n };
            },
            runClassFinishers: function(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = (0, t[n])(e);
                if (void 0 !== i) {
                  if ("function" != typeof i)
                    throw new TypeError("Finishers must return a constructor.");
                  e = i;
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
        if (i) for (var o = 0; o < i.length; o++) r = i[o](r);
        var s = t(function(e) {
            r.initializeInstanceElements(e, a.elements);
          }, n),
          a = r.decorateClass(
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
                  i = 0;
                i < e.length;
                i++
              ) {
                var r,
                  o = e[i];
                if ("method" === o.kind && (r = t.find(n)))
                  if (S(o.descriptor) || S(r.descriptor)) {
                    if (D(o) || D(r))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    r.descriptor = o.descriptor;
                  } else {
                    if (D(o)) {
                      if (D(r))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      r.decorators = o.decorators;
                    }
                    P(o, r);
                  }
                else t.push(o);
              }
              return t;
            })(s.d.map(j)),
            e
          );
        return (
          r.initializeClassElements(s.F, a.elements),
          r.runClassFinishers(s.F, a.finishers)
        );
      })(
        null,
        function(e, t) {
          return {
            F: (function(n) {
              function i() {
                var t, n, r, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var s = arguments.length, a = new Array(s), c = 0;
                  c < s;
                  c++
                )
                  a[c] = arguments[c];
                return (
                  (r = this),
                  (n =
                    !(o = (t = R(i)).call.apply(t, [this].concat(a))) ||
                    ("object" !== w(o) && "function" != typeof o)
                      ? x(r)
                      : o),
                  e(x(n)),
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
                    t && C(e, t);
                })(i, t),
                i
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
                key: "_action",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "_noCancelOnOutsideClick",
                value: function() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(i.h)("ha-toast")],
                key: "_toast",
                value: void 0,
              },
              {
                kind: "method",
                key: "showDialog",
                value: (function() {
                  var e,
                    t = ((e = regeneratorRuntime.mark(function e(t) {
                      var n, i, o, s, a;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = t.message),
                                  (i = t.action),
                                  (o = t.duration),
                                  (s = t.dismissable),
                                  (a = this._toast))
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return (e.next = 5), this.updateComplete;
                              case 5:
                                a = this._toast;
                              case 6:
                                a.setAttribute(
                                  "dir",
                                  Object(r.a)(this.hass) ? "rtl" : "ltr"
                                ),
                                  (this._action = i || void 0),
                                  (this._noCancelOnOutsideClick =
                                    void 0 !== s && !s),
                                  a.hide(),
                                  a.show({
                                    text: n,
                                    duration: void 0 === o ? 3e3 : o,
                                  });
                              case 11:
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
                      return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                          E(o, i, r, s, a, "next", e);
                        }
                        function a(e) {
                          E(o, i, r, s, a, "throw", e);
                        }
                        s(void 0);
                      });
                    });
                  return function(e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(i.f)(
                    k(),
                    this._noCancelOnOutsideClick,
                    this._action
                      ? Object(i.f)(z(), this._action.text, this.buttonClicked)
                      : ""
                  );
                },
              },
              {
                kind: "method",
                key: "buttonClicked",
                value: function() {
                  this._toast.hide(), this._action && this._action.action();
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(i.c)(g());
                },
              },
            ],
          };
        },
        i.a
      );
      customElements.define("notification-manager", I);
    },
    91: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return s;
      });
      n(4);
      var i = n(5),
        r = n(3);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$="[[mode]]">[[_text]]</div>\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var s = Object(i.a)({
        _template: Object(r.a)(o()),
        is: "iron-a11y-announcer",
        properties: {
          mode: { type: String, value: "polite" },
          _text: { type: String, value: "" },
        },
        created: function() {
          s.instance || (s.instance = this),
            document.body.addEventListener(
              "iron-announce",
              this._onIronAnnounce.bind(this)
            );
        },
        announce: function(e) {
          (this._text = ""),
            this.async(function() {
              this._text = e;
            }, 100);
        },
        _onIronAnnounce: function(e) {
          e.detail && e.detail.text && this.announce(e.detail.text);
        },
      });
      (s.instance = null),
        (s.requestAvailability = function() {
          s.instance ||
            (s.instance = document.createElement("iron-a11y-announcer")),
            document.body.appendChild(s.instance);
        });
    },
    95: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return s;
      });
      n(4);
      var i = n(1),
        r = n(9),
        o = new Set(),
        s = {
          properties: {
            _parentResizable: {
              type: Object,
              observer: "_parentResizableChanged",
            },
            _notifyingDescendant: { type: Boolean, value: !1 },
          },
          listeners: {
            "iron-request-resize-notifications":
              "_onIronRequestResizeNotifications",
          },
          created: function() {
            (this._interestedResizables = []),
              (this._boundNotifyResize = this.notifyResize.bind(this)),
              (this._boundOnDescendantIronResize = this._onDescendantIronResize.bind(
                this
              ));
          },
          attached: function() {
            this._requestResizeNotifications();
          },
          detached: function() {
            this._parentResizable
              ? this._parentResizable.stopResizeNotificationsFor(this)
              : (o.delete(this),
                window.removeEventListener("resize", this._boundNotifyResize)),
              (this._parentResizable = null);
          },
          notifyResize: function() {
            this.isAttached &&
              (this._interestedResizables.forEach(function(e) {
                this.resizerShouldNotify(e) && this._notifyDescendant(e);
              }, this),
              this._fireResize());
          },
          assignParentResizable: function(e) {
            this._parentResizable &&
              this._parentResizable.stopResizeNotificationsFor(this),
              (this._parentResizable = e),
              e &&
                -1 === e._interestedResizables.indexOf(this) &&
                (e._interestedResizables.push(this),
                e._subscribeIronResize(this));
          },
          stopResizeNotificationsFor: function(e) {
            var t = this._interestedResizables.indexOf(e);
            t > -1 &&
              (this._interestedResizables.splice(t, 1),
              this._unsubscribeIronResize(e));
          },
          _subscribeIronResize: function(e) {
            e.addEventListener(
              "iron-resize",
              this._boundOnDescendantIronResize
            );
          },
          _unsubscribeIronResize: function(e) {
            e.removeEventListener(
              "iron-resize",
              this._boundOnDescendantIronResize
            );
          },
          resizerShouldNotify: function(e) {
            return !0;
          },
          _onDescendantIronResize: function(e) {
            this._notifyingDescendant
              ? e.stopPropagation()
              : r.g || this._fireResize();
          },
          _fireResize: function() {
            this.fire("iron-resize", null, { node: this, bubbles: !1 });
          },
          _onIronRequestResizeNotifications: function(e) {
            var t = Object(i.a)(e).rootTarget;
            t !== this &&
              (t.assignParentResizable(this),
              this._notifyDescendant(t),
              e.stopPropagation());
          },
          _parentResizableChanged: function(e) {
            e && window.removeEventListener("resize", this._boundNotifyResize);
          },
          _notifyDescendant: function(e) {
            this.isAttached &&
              ((this._notifyingDescendant = !0),
              e.notifyResize(),
              (this._notifyingDescendant = !1));
          },
          _requestResizeNotifications: function() {
            if (this.isAttached)
              if ("loading" === document.readyState) {
                var e = this._requestResizeNotifications.bind(this);
                document.addEventListener("readystatechange", function t() {
                  document.removeEventListener("readystatechange", t), e();
                });
              } else
                this._findParent(),
                  this._parentResizable
                    ? this._parentResizable._interestedResizables.forEach(
                        function(e) {
                          e !== this && e._findParent();
                        },
                        this
                      )
                    : (o.forEach(function(e) {
                        e !== this && e._findParent();
                      }, this),
                      window.addEventListener(
                        "resize",
                        this._boundNotifyResize
                      ),
                      this.notifyResize());
          },
          _findParent: function() {
            this.assignParentResizable(null),
              this.fire("iron-request-resize-notifications", null, {
                node: this,
                bubbles: !0,
                cancelable: !0,
              }),
              this._parentResizable ? o.delete(this) : o.add(this);
          },
        };
    },
  },
]);
//# sourceMappingURL=chunk.87d6d6f920f46d95db33.js.map
