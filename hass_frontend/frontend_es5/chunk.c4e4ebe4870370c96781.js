(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
  {
    192: function(e, t, r) {
      "use strict";
      var n = r(225);
      r.d(t, "a", function() {
        return i;
      });
      var i = Object(n.a)({
        types: {
          "entity-id": function(e) {
            return "string" != typeof e
              ? "entity id should be a string"
              : !!e.includes(".") ||
                  "entity id should be in the format 'domain.entity'";
          },
          icon: function(e) {
            return "string" != typeof e
              ? "icon should be a string"
              : !!e.includes(":") || "icon should be in the format 'mdi:icon'";
          },
        },
      });
    },
    241: function(e, t, r) {
      "use strict";
      var n = r(0),
        i = r(19);
      r(186);
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
      function s() {
        var e = u([
          "\n      .entities {\n        padding-left: 20px;\n      }\n    ",
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function a() {
        var e = u([
          '\n            <ha-entity-picker\n              .hass="',
          '"\n              .value="',
          '"\n              .index="',
          '"\n              @change="',
          '"\n              allow-custom-entity\n            ></ha-entity-picker>\n          ',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = u([
          '\n      <h3>Entities</h3>\n      <div class="entities">\n        ',
          '\n        <ha-entity-picker\n          .hass="',
          '"\n          @change="',
          '"\n        ></ha-entity-picker>\n      </div>\n    ',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = u([""]);
        return (
          (l = function() {
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
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e) {
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
      function h(e) {
        var t,
          r = b(e.key);
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
      function m(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function y(e) {
        return e.decorators && e.decorators.length;
      }
      function v(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function g(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function b(e) {
        var t = (function(e, t) {
          if ("object" !== o(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== o(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
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
                  if (!y(e)) return r.push(e);
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
                  c = this.toElementFinisherExtras((0, i[o])(a) || a);
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
              var r = b(e.key),
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
                r = g(e, "finisher"),
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
              var r = g(e, "finisher"),
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
                  if (v(o.descriptor) || v(i.descriptor)) {
                    if (y(o) || y(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (y(o)) {
                      if (y(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    m(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(s.d.map(h)),
            e
          );
        i.initializeClassElements(s.F, a.elements),
          i.runClassFinishers(s.F, a.finishers);
      })(
        [Object(n.d)("hui-entity-editor")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, s;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, c = new Array(a), l = 0;
                  l < a;
                  l++
                )
                  c[l] = arguments[l];
                return (
                  (i = this),
                  (r =
                    !(s = (t = f(n)).call.apply(t, [this].concat(c))) ||
                    ("object" !== o(s) && "function" != typeof s)
                      ? d(i)
                      : s),
                  e(d(r)),
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
                    t && p(e, t);
                })(n, t),
                n
              );
            })(),
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
                key: "entities",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this;
                  return this.entities
                    ? Object(n.f)(
                        c(),
                        this.entities.map(function(t, r) {
                          return Object(
                            n.f
                          )(a(), e.hass, t.entity, r, e._valueChanged);
                        }),
                        this.hass,
                        this._addEntity
                      )
                    : Object(n.f)(l());
                },
              },
              {
                kind: "method",
                key: "_addEntity",
                value: function(e) {
                  var t = e.target;
                  if ("" !== t.value) {
                    var r = this.entities.concat({ entity: t.value });
                    (t.value = ""),
                      Object(i.a)(this, "entities-changed", { entities: r });
                  }
                },
              },
              {
                kind: "method",
                key: "_valueChanged",
                value: function(e) {
                  var t = e.target,
                    r = this.entities.concat();
                  "" === t.value
                    ? r.splice(t.index, 1)
                    : (r[t.index] = Object.assign({}, r[t.index], {
                        entity: t.value,
                      })),
                    Object(i.a)(this, "entities-changed", { entities: r });
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(n.c)(s());
                },
              },
            ],
          };
        },
        n.a
      );
    },
    692: function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "HuiGaugeCardEditor", function() {
          return _;
        });
      var n = r(0),
        i = (r(90), r(200), r(276), r(241), r(192)),
        o = r(19),
        s = r(208);
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
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function l() {
        var e = d([
          "\n      .severity {\n        display: none;\n        width: 100%;\n        padding-left: 16px;\n        flex-direction: row;\n        flex-wrap: wrap;\n      }\n      .severity > * {\n        flex: 1 0 30%;\n        padding-right: 4px;\n      }\n      paper-toggle-button[checked] ~ .severity {\n        display: flex;\n      }\n    ",
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = d([
          "\n      ",
          '\n      <div class="card-config">\n        <div class="side-by-side">\n          <paper-input\n            label="Name"\n            .value="',
          '"\n            .configValue=',
          '\n            @value-changed="',
          '"\n          ></paper-input>\n          <ha-entity-picker\n            .hass="',
          '"\n            .value="',
          '"\n            .configValue=',
          '\n            domain-filter="sensor"\n            @change="',
          '"\n            allow-custom-entity\n          ></ha-entity-picker>\n        </div>\n        <div class="side-by-side">\n          <paper-input\n            label="Unit"\n            .value="',
          '"\n            .configValue=',
          '\n            @value-changed="',
          '"\n          ></paper-input>\n          <hui-theme-select-editor\n            .hass="',
          '"\n            .value="',
          '"\n            .configValue="',
          '"\n            @theme-changed="',
          '"\n          ></hui-theme-select-editor>\n        </div>\n        <div class="side-by-side">\n          <paper-input\n            type="number"\n            label="Minimum"\n            .value="',
          '"\n            .configValue=',
          '\n            @value-changed="',
          '"\n          ></paper-input>\n          <paper-input\n            type="number"\n            label="Maximum"\n            .value="',
          '"\n            .configValue=',
          '\n            @value-changed="',
          '"\n          ></paper-input>\n        </div>\n        <div class="side-by-side">\n          <paper-toggle-button\n            ?checked="',
          '"\n            @change="',
          '"\n            >Define Severity?</paper-toggle-button\n          >\n          <div class="severity">\n            <paper-input\n              type="number"\n              label="Green"\n              .value="',
          '"\n              .configValue=',
          '\n              @value-changed="',
          '"\n            ></paper-input>\n            <paper-input\n              type="number"\n              label="Yellow"\n              .value="',
          '"\n              .configValue=',
          '\n              @value-changed="',
          '"\n            ></paper-input>\n            <paper-input\n              type="number"\n              label="Red"\n              .value="',
          '"\n              .configValue=',
          '\n              @value-changed="',
          '"\n            ></paper-input>\n          </div>\n        </div>\n      </div>\n    ',
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = d([""]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function d(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e) {
        var t,
          r = w(e.key);
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
      function v(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function g(e) {
        return e.decorators && e.decorators.length;
      }
      function b(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function k(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function w(e) {
        var t = (function(e, t) {
          if ("object" !== a(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== a(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === a(t) ? t : String(t);
      }
      var E = Object(i.a)({
          type: "string",
          name: "string?",
          entity: "string?",
          unit: "string?",
          min: "number?",
          max: "number?",
          severity: "object?",
          theme: "string?",
        }),
        _ = (function(e, t, r, n) {
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
                    if (!g(e)) return r.push(e);
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
                    c = this.toElementFinisherExtras((0, i[o])(a) || a);
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
                var r = w(e.key),
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
                  r = k(e, "finisher"),
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
                var r = k(e, "finisher"),
                  n = this.toElementDescriptors(e.elements);
                return { elements: n, finisher: r };
              },
              runClassFinishers: function(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = (0, t[r])(e);
                  if (void 0 !== n) {
                    if ("function" != typeof n)
                      throw new TypeError(
                        "Finishers must return a constructor."
                      );
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
                    if (b(o.descriptor) || b(i.descriptor)) {
                      if (g(o) || g(i))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
                        );
                      i.descriptor = o.descriptor;
                    } else {
                      if (g(o)) {
                        if (g(i))
                          throw new ReferenceError(
                            "Decorators can't be placed on different accessors with for the same property (" +
                              o.key +
                              ")."
                          );
                        i.decorators = o.decorators;
                      }
                      v(o, i);
                    }
                  else t.push(o);
                }
                return t;
              })(s.d.map(y)),
              e
            );
          return (
            i.initializeClassElements(s.F, a.elements),
            i.runClassFinishers(s.F, a.finishers)
          );
        })(
          [Object(n.d)("hui-gauge-card-editor")],
          function(e, t) {
            return {
              F: (function(r) {
                function n() {
                  var t, r, i, o;
                  !(function(e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, n);
                  for (
                    var s = arguments.length, c = new Array(s), l = 0;
                    l < s;
                    l++
                  )
                    c[l] = arguments[l];
                  return (
                    (i = this),
                    (r =
                      !(o = (t = p(n)).call.apply(t, [this].concat(c))) ||
                      ("object" !== a(o) && "function" != typeof o)
                        ? h(i)
                        : o),
                    e(h(r)),
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
                      t && m(e, t);
                  })(n, t),
                  n
                );
              })(),
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
                  key: "_config",
                  value: void 0,
                },
                { kind: "field", key: "_useSeverity", value: void 0 },
                {
                  kind: "method",
                  key: "setConfig",
                  value: function(e) {
                    (e = E(e)),
                      (this._useSeverity = !!e.severity),
                      (this._config = e);
                  },
                },
                {
                  kind: "get",
                  key: "_name",
                  value: function() {
                    return this._config.name || "";
                  },
                },
                {
                  kind: "get",
                  key: "_entity",
                  value: function() {
                    return this._config.entity || "";
                  },
                },
                {
                  kind: "get",
                  key: "_unit",
                  value: function() {
                    return this._config.unit || "";
                  },
                },
                {
                  kind: "get",
                  key: "_theme",
                  value: function() {
                    return this._config.theme || "default";
                  },
                },
                {
                  kind: "get",
                  key: "_min",
                  value: function() {
                    return this._config.number || 0;
                  },
                },
                {
                  kind: "get",
                  key: "_max",
                  value: function() {
                    return this._config.max || 100;
                  },
                },
                {
                  kind: "get",
                  key: "_severity",
                  value: function() {
                    return this._config.severity || void 0;
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function() {
                    return this.hass
                      ? Object(n.f)(
                          u(),
                          s.a,
                          this._name,
                          "name",
                          this._valueChanged,
                          this.hass,
                          this._entity,
                          "entity",
                          this._valueChanged,
                          this._unit,
                          "unit",
                          this._valueChanged,
                          this.hass,
                          this._theme,
                          "theme",
                          this._valueChanged,
                          this._min,
                          "min",
                          this._valueChanged,
                          this._max,
                          "max",
                          this._valueChanged,
                          !1 !== this._useSeverity,
                          this._toggleSeverity,
                          this._severity ? this._severity.green : 0,
                          "green",
                          this._severityChanged,
                          this._severity ? this._severity.yellow : 0,
                          "yellow",
                          this._severityChanged,
                          this._severity ? this._severity.red : 0,
                          "red",
                          this._severityChanged
                        )
                      : Object(n.f)(f());
                  },
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function() {
                    return Object(n.c)(l());
                  },
                },
                {
                  kind: "method",
                  key: "_toggleSeverity",
                  value: function(e) {
                    if (this._config && this.hass) {
                      var t = e.target;
                      (this._config.severity = t.checked
                        ? { green: 0, yellow: 0, red: 0 }
                        : void 0),
                        Object(o.a)(this, "config-changed", {
                          config: this._config,
                        });
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_severityChanged",
                  value: function(e) {
                    if (this._config && this.hass) {
                      var t = e.target,
                        r = Object.assign(
                          {},
                          this._config.severity,
                          c({}, t.configValue, Number(t.value))
                        );
                      (this._config = Object.assign({}, this._config, {
                        severity: r,
                      })),
                        Object(o.a)(this, "config-changed", {
                          config: this._config,
                        });
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_valueChanged",
                  value: function(e) {
                    if (this._config && this.hass) {
                      var t = e.target;
                      if (t.configValue)
                        if (
                          "" === t.value ||
                          ("number" === t.type && isNaN(Number(t.value)))
                        )
                          delete this._config[t.configValue];
                        else {
                          var r = t.value;
                          "number" === t.type && (r = Number(r)),
                            (this._config = Object.assign(
                              {},
                              this._config,
                              c({}, t.configValue, r)
                            ));
                        }
                      Object(o.a)(this, "config-changed", {
                        config: this._config,
                      });
                    }
                  },
                },
              ],
            };
          },
          n.a
        );
    },
  },
]);
//# sourceMappingURL=chunk.c4e4ebe4870370c96781.js.map
