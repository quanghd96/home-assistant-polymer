(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    738: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        i = (n(200), n(106), n(147), n(154), n(172), n(182), n(272)),
        o = n(125),
        a = n(458),
        s = n(207),
        c = n(173),
        u = n(19),
        l = n(50),
        d = n(459),
        f = n(118);
      function p(e) {
        return (p =
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
      function h() {
        var e = j([
          "\n      .banner {\n        color: var(--primary-text-color);\n        background-color: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        padding: 16px 8px;\n        text-align: center;\n      }\n      h1 {\n        color: var(--primary-text-color);\n        font-size: 24px;\n        letter-spacing: -0.012em;\n        margin-bottom: 0;\n        padding: 0 8px;\n      }\n      .content {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 4px;\n        --paper-toggle-button-label-spacing: 16px;\n      }\n      ha-card {\n        margin: 4px;\n        width: 100%;\n        max-width: 300px;\n      }\n      .card-content {\n        padding-bottom: 12px;\n      }\n      state-info {\n        cursor: pointer;\n      }\n      paper-toggle-button {\n        padding: 8px 0;\n      }\n\n      @media all and (max-width: 450px) {\n        ha-card {\n          max-width: 100%;\n        }\n      }\n    ",
        ]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function y(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (u) {
          return void n(u);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      function v(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, i) {
            var o = e.apply(t, n);
            function a(e) {
              y(o, r, i, a, s, "next", e);
            }
            function s(e) {
              y(o, r, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function m() {
        var e = j([
          '\n                  <h1>Not Exposed entities</h1>\n                  <div class="content">',
          "</div>\n                ",
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = j([
          '\n                  <h1>Exposed entities</h1>\n                  <div class="content">',
          "</div>\n                ",
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = j([
          '\n                <div class="banner">\n                  Editing which entities are exposed via this UI is disabled\n                  because you have configured entity filters in\n                  configuration.yaml.\n                </div>\n              ',
        ]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = j([
          '\n                <paper-icon-button\n                  slot="toolbar-icon"\n                  icon="hass:tune"\n                  @click=',
          "\n                ></paper-icon-button>\n              ",
        ]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = j(["\n            selected\n          "]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = j([
          '\n      <hass-subpage header="Google Assistant">\n        <span slot="toolbar-icon">\n          ',
          "",
          "\n        </span>\n        ",
          "\n        ",
          "\n          ",
          "\n          ",
          "\n        </div>\n      </hass-subpage>\n    ",
        ]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = j([
          "\n                  <paper-toggle-button\n                    .entityId=",
          "\n                    .checked=",
          "\n                    @checked-changed=",
          "\n                  >\n                    Disable two factor authentication\n                  </paper-toggle-button>\n                ",
        ]);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = j([
          '\n        <ha-card>\n          <div class="card-content">\n            <state-info\n              .hass=',
          "\n              .stateObj=",
          "\n              secondary-line\n              @click=",
          "\n            >\n              ",
          "\n            </state-info>\n            <paper-toggle-button\n              .entityId=",
          "\n              .disabled=",
          "\n              .checked=",
          "\n              @checked-changed=",
          "\n            >\n              Expose to Google Assistant\n            </paper-toggle-button>\n            ",
          "\n          </div>\n        </ha-card>\n      ",
        ]);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = j([
          "\n        <hass-loading-screen></hass-loading-screen>\n      ",
        ]);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      function j(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function S(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function P(e, t) {
        return (P =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function C(e) {
        var t,
          n = z(e.key);
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
      function A(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function D(e) {
        return e.decorators && e.decorators.length;
      }
      function T(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function R(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function z(e) {
        var t = (function(e, t) {
          if ("object" !== p(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== p(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === p(t) ? t : String(t);
      }
      function I(e, t, n) {
        return (I =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = F(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(e, t, n || e);
      }
      function F(e) {
        return (F = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var G = function(e) {
        return void 0 === e.should_expose || e.should_expose;
      };
      !(function(e, t, n, r) {
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
                  if (!D(e)) return n.push(e);
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
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
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
              var n = z(e.key),
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
                n = R(e, "finisher"),
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
              var n = R(e, "finisher"),
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
                  if (T(o.descriptor) || T(i.descriptor)) {
                    if (D(o) || D(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (D(o)) {
                      if (D(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    A(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(C)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(r.d)("cloud-google-assistant")],
        function(e, t) {
          var n = (function(n) {
            function r() {
              var t, n, i, o;
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
                (i = this),
                (n =
                  !(o = (t = F(r)).call.apply(t, [this].concat(s))) ||
                  ("object" !== p(o) && "function" != typeof o)
                    ? S(i)
                    : o),
                e(S(n)),
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
                  t && P(e, t);
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
                key: "cloudStatus",
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
                decorators: [Object(r.g)()],
                key: "_entities",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(r.g)()],
                key: "_entityConfigs",
                value: function() {
                  return {};
                },
              },
              {
                kind: "field",
                key: "_popstateSyncAttached",
                value: function() {
                  return !1;
                },
              },
              {
                kind: "field",
                key: "_popstateReloadStatusAttached",
                value: function() {
                  return !1;
                },
              },
              { kind: "field", key: "_isInitialExposed", value: void 0 },
              {
                kind: "field",
                key: "_getEntityFilterFunc",
                value: function() {
                  return Object(o.a)(function(e) {
                    return Object(
                      a.a
                    )(e.include_domains, e.include_entities, e.exclude_domains, e.exclude_entities);
                  });
                },
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this;
                  if (void 0 === this._entities) return Object(r.f)(O());
                  var t = Object(a.b)(this.cloudStatus.google_entities),
                    n = this._getEntityFilterFunc(
                      this.cloudStatus.google_entities
                    ),
                    i = this._isInitialExposed || new Set(),
                    o = void 0 === this._isInitialExposed,
                    s = 0,
                    c = [],
                    u = [];
                  return (
                    this._entities.forEach(function(a) {
                      var l = e.hass.states[a.entity_id],
                        d = e._entityConfigs[a.entity_id] || {},
                        f = t ? G(d) : n(a.entity_id);
                      f && (s++, o && i.add(a.entity_id)),
                        (i.has(a.entity_id) ? c : u).push(
                          Object(r.f)(
                            x(),
                            e.hass,
                            l,
                            e._showMoreInfo,
                            a.traits
                              .map(function(e) {
                                return e.substr(e.lastIndexOf(".") + 1);
                              })
                              .join(", "),
                            a.entity_id,
                            !t,
                            f,
                            e._exposeChanged,
                            a.might_2fa
                              ? Object(r.f)(
                                  E(),
                                  a.entity_id,
                                  Boolean(d.disable_2fa),
                                  e._disable2FAChanged
                                )
                              : ""
                          )
                        );
                    }),
                    o && (this._isInitialExposed = i),
                    Object(r.f)(
                      _(),
                      s,
                      this.narrow ? "" : Object(r.f)(w()),
                      t ? Object(r.f)(k(), this._openDomainToggler) : "",
                      t ? "" : Object(r.f)(b()),
                      c.length > 0 ? Object(r.f)(g(), c) : "",
                      u.length > 0 ? Object(r.f)(m(), u) : ""
                    )
                  );
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function(e) {
                  I(F(n.prototype), "firstUpdated", this).call(this, e),
                    this._fetchData();
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  I(F(n.prototype), "updated", this).call(this, e),
                    e.has("cloudStatus") &&
                      (this._entityConfigs = this.cloudStatus.prefs.google_entity_configs);
                },
              },
              {
                kind: "method",
                key: "_fetchData",
                value: (function() {
                  var e = v(
                    regeneratorRuntime.mark(function e() {
                      var t,
                        n = this;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.hass.callWS({
                                    type: "cloud/google_assistant/entities",
                                  })
                                );
                              case 2:
                                (t = e.sent).sort(function(e, t) {
                                  var r = n.hass.states[e.entity_id],
                                    i = n.hass.states[t.entity_id];
                                  return Object(
                                    s.b
                                  )(r ? Object(c.a)(r) : e.entity_id, i ? Object(c.a)(i) : t.entity_id);
                                }),
                                  (this._entities = t);
                              case 5:
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
                kind: "method",
                key: "_showMoreInfo",
                value: function(e) {
                  var t = e.currentTarget.stateObj.entity_id;
                  Object(u.a)(this, "hass-more-info", { entityId: t });
                },
              },
              {
                kind: "method",
                key: "_exposeChanged",
                value: (function() {
                  var e = v(
                    regeneratorRuntime.mark(function e(t) {
                      var n, r;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t.currentTarget.entityId),
                                  (r = t.detail.value),
                                  (e.next = 4),
                                  this._updateExposed(n, r)
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
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
                key: "_updateExposed",
                value: (function() {
                  var e = v(
                    regeneratorRuntime.mark(function e(t, n) {
                      var r;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = G(this._entityConfigs[t] || {})),
                                  n !== r)
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt("return");
                              case 3:
                                return (
                                  (e.next = 5),
                                  this._updateConfig(t, { should_expose: n })
                                );
                              case 5:
                                this._ensureEntitySync();
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
                  return function(t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_disable2FAChanged",
                value: (function() {
                  var e = v(
                    regeneratorRuntime.mark(function e(t) {
                      var n, r, i;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = t.currentTarget.entityId),
                                  (r = t.detail.value),
                                  (i = Boolean(
                                    (this._entityConfigs[n] || {}).disable_2fa
                                  )),
                                  r !== i)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return");
                              case 5:
                                return (
                                  (e.next = 7),
                                  this._updateConfig(n, { disable_2fa: r })
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
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
                key: "_updateConfig",
                value: (function() {
                  var e = v(
                    regeneratorRuntime.mark(function e(t, n) {
                      var r;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), Object(i.i)(this.hass, t, n)
                                );
                              case 2:
                                (r = e.sent),
                                  (this._entityConfigs = Object.assign(
                                    {},
                                    this._entityConfigs,
                                    ((s = r),
                                    (a = t) in (o = {})
                                      ? Object.defineProperty(o, a, {
                                          value: s,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                        })
                                      : (o[a] = s),
                                    o)
                                  )),
                                  this._ensureStatusReload();
                              case 5:
                              case "end":
                                return e.stop();
                            }
                          var o, a, s;
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_openDomainToggler",
                value: function() {
                  var e = this;
                  Object(d.a)(this, {
                    domains: this._entities
                      .map(function(e) {
                        return Object(f.a)(e.entity_id);
                      })
                      .filter(function(e, t, n) {
                        return n.indexOf(e) === t;
                      }),
                    toggleDomain: function(t, n) {
                      e._entities.forEach(function(r) {
                        Object(f.a)(r.entity_id) === t &&
                          e._updateExposed(r.entity_id, n);
                      });
                    },
                  });
                },
              },
              {
                kind: "method",
                key: "_ensureStatusReload",
                value: function() {
                  if (!this._popstateReloadStatusAttached) {
                    this._popstateReloadStatusAttached = !0;
                    var e = this.parentElement;
                    window.addEventListener(
                      "popstate",
                      function() {
                        return Object(u.a)(e, "ha-refresh-cloud-status");
                      },
                      { once: !0 }
                    );
                  }
                },
              },
              {
                kind: "method",
                key: "_ensureEntitySync",
                value: function() {
                  var e = this;
                  if (!this._popstateSyncAttached) {
                    this._popstateSyncAttached = !0;
                    var t = this.parentElement;
                    window.addEventListener(
                      "popstate",
                      function() {
                        Object(l.a)(t, {
                          message: "Synchronizing changes to Google.",
                        }),
                          Object(i.a)(e.hass);
                      },
                      { once: !0 }
                    );
                  }
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(r.c)(h());
                },
              },
            ],
          };
        },
        r.a
      );
    },
  },
]);
//# sourceMappingURL=chunk.786e96828fd61afccd40.js.map
