(window.webpackJsonp = window.webpackJsonp || []).push([
  [69],
  {
    192: function(e, t, r) {
      "use strict";
      var n = r(225);
      r.d(t, "a", function() {
        return o;
      });
      var o = Object(n.a)({
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
    403: function(e, t, r) {
      "use strict";
      var n = r(353),
        o = r.n(n),
        i = (r(455), r(456)),
        a = r(19),
        s = r(93),
        c = r(0);
      function l(e) {
        return (l =
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
      function u(e) {
        return (u = Object.setPrototypeOf
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
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
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
      function p(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function m(e) {
        return e.decorators && e.decorators.length;
      }
      function v(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function y(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function b(e) {
        var t = (function(e, t) {
          if ("object" !== l(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== l(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === l(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var o = (function() {
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
                  var o = t.placement;
                  if (t.kind === n && ("static" === o || "prototype" === o)) {
                    var i = "static" === o ? e : r;
                    this.defineClassElement(i, t);
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
                o = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, o);
                }, this),
                e.forEach(function(e) {
                  if (!m(e)) return r.push(e);
                  var t = this.decorateElement(e, o);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var i = this.decorateConstructor(r, t);
              return n.push.apply(n, i.finishers), (i.finishers = n), i;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], o = e.decorators, i = o.length - 1;
                i >= 0;
                i--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, o[i])(s) || s);
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
                var o = this.fromClassDescriptor(e),
                  i = this.toClassDescriptor((0, t[n])(o) || o);
                if (
                  (void 0 !== i.finisher && r.push(i.finisher),
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
              var o = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var i = {
                kind: t,
                key: r,
                placement: n,
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
                r = y(e, "finisher"),
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
              var r = y(e, "finisher"),
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
        if (n) for (var i = 0; i < n.length; i++) o = n[i](o);
        var a = t(function(e) {
            o.initializeInstanceElements(e, s.elements);
          }, r),
          s = o.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === i.key &&
                      e.placement === i.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var o,
                  i = e[n];
                if ("method" === i.kind && (o = t.find(r)))
                  if (v(i.descriptor) || v(o.descriptor)) {
                    if (m(i) || m(o))
                      throw new ReferenceError(
                        "Duplicated methods (" + i.key + ") can't be decorated."
                      );
                    o.descriptor = i.descriptor;
                  } else {
                    if (m(i)) {
                      if (m(o))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            i.key +
                            ")."
                        );
                      o.decorators = i.decorators;
                    }
                    p(i, o);
                  }
                else t.push(i);
              }
              return t;
            })(a.d.map(f)),
            e
          );
        o.initializeClassElements(a.F, s.elements),
          o.runClassFinishers(a.F, s.finishers);
      })(
        [Object(c.d)("hui-yaml-editor")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, s;
                return (
                  (function(e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, n),
                  (r = this),
                  (t =
                    !(s = u(n).call(this)) ||
                    ("object" !== l(s) && "function" != typeof s)
                      ? d(r)
                      : s),
                  e(d(t)),
                  (o.a.commands.save = function(e) {
                    Object(a.a)(e.getWrapperElement(), "yaml-save");
                  }),
                  (t._value = ""),
                  (t.attachShadow({
                    mode: "open",
                  }).innerHTML = "\n            <style>\n              ".concat(
                    i.a,
                    "\n              .CodeMirror {\n                height: var(--code-mirror-height, auto);\n                direction: var(--code-mirror-direction, ltr);\n              }\n              .CodeMirror-scroll {\n                max-height: var(--code-mirror-max-height, --code-mirror-height);\n              }\n              .CodeMirror-gutters {\n                border-right: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n                background-color: var(--paper-dialog-background-color, var(--primary-background-color));\n                transition: 0.2s ease border-right;\n              }\n              .CodeMirror-focused .CodeMirror-gutters {\n                border-right: 2px solid var(--paper-input-container-focus-color, var(--primary-color));;\n              }\n              .CodeMirror-linenumber {\n                color: var(--paper-dialog-color, var(--primary-text-color));\n              }\n              .rtl .CodeMirror-vscrollbar {\n                right: auto;\n                left: 0px;\n              }\n              .rtl-gutter {\n                width: 20px;\n              }\n            </style>"
                  )),
                  t
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
                    t && h(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              { kind: "field", key: "_hass", value: void 0 },
              { kind: "field", key: "codemirror", value: void 0 },
              { kind: "field", key: "_value", value: void 0 },
              {
                kind: "set",
                key: "hass",
                value: function(e) {
                  (this._hass = e), this._hass && this.setScrollBarDirection();
                },
              },
              {
                kind: "set",
                key: "value",
                value: function(e) {
                  this.codemirror &&
                    e !== this.codemirror.getValue() &&
                    this.codemirror.setValue(e),
                    (this._value = e);
                },
              },
              {
                kind: "get",
                key: "value",
                value: function() {
                  return this.codemirror.getValue();
                },
              },
              {
                kind: "get",
                key: "hasComments",
                value: function() {
                  return !!this.shadowRoot.querySelector("span.cm-comment");
                },
              },
              {
                kind: "method",
                key: "connectedCallback",
                value: function() {
                  var e = this;
                  this.codemirror
                    ? this.codemirror.refresh()
                    : ((this.codemirror = o()(this.shadowRoot, {
                        value: this._value,
                        lineNumbers: !0,
                        mode: "yaml",
                        tabSize: 2,
                        autofocus: !0,
                        viewportMargin: 1 / 0,
                        extraKeys: {
                          Tab: "indentMore",
                          "Shift-Tab": "indentLess",
                        },
                        gutters:
                          this._hass && Object(s.a)(this._hass)
                            ? ["rtl-gutter", "CodeMirror-linenumbers"]
                            : [],
                      })),
                      this.setScrollBarDirection(),
                      this.codemirror.on("changes", function() {
                        return e._onChange();
                      }));
                },
              },
              {
                kind: "method",
                key: "_onChange",
                value: function() {
                  Object(a.a)(this, "yaml-changed", {
                    value: this.codemirror.getValue(),
                  });
                },
              },
              {
                kind: "method",
                key: "setScrollBarDirection",
                value: function() {
                  this.codemirror &&
                    this.codemirror
                      .getWrapperElement()
                      .classList.toggle("rtl", Object(s.a)(this._hass));
                },
              },
            ],
          };
        },
        HTMLElement
      );
    },
    676: function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        o = r(71),
        i = r(452),
        a = r.n(i),
        s = (r(198), r(216), r(145), r(82), r(106), r(181), r(192)),
        c = (r(177), r(54));
      r(403);
      function l(e) {
        return (l =
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
        var e = f([
          "\n        :host {\n          --code-mirror-height: 100%;\n        }\n\n        app-header-layout {\n          height: 100vh;\n        }\n\n        app-toolbar {\n          background-color: var(--dark-background-color, #455a64);\n          color: var(--dark-text-color);\n        }\n\n        .comments {\n          font-size: 16px;\n        }\n\n        .content {\n          height: calc(100vh - 68px);\n        }\n\n        hui-code-editor {\n          height: 100%;\n        }\n\n        .save-button {\n          opacity: 0;\n          font-size: 14px;\n          padding: 0px 10px;\n        }\n\n        .saved {\n          opacity: 1;\n        }\n      ",
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function d(e, t, r, n, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, o);
      }
      function h() {
        var e = f([
          '\n      <app-header-layout>\n        <app-header>\n          <app-toolbar>\n            <paper-icon-button\n              icon="hass:close"\n              @click="',
          '"\n            ></paper-icon-button>\n            <div main-title>\n              ',
          '\n            </div>\n            <div\n              class="save-button\n              ',
          '"\n            >\n              ',
          '\n            </div>\n            <mwc-button raised @click="',
          '"\n              >',
          '</mwc-button\n            >\n          </app-toolbar>\n        </app-header>\n        <div class="content">\n          <hui-yaml-editor\n            .hass="',
          '"\n            @yaml-changed="',
          '"\n            @yaml-save="',
          '"\n          >\n          </hui-yaml-editor>\n        </div>\n      </app-header-layout>\n    ',
        ]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function f(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function m(e, t) {
        return !t || ("object" !== l(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function v(e) {
        return (v = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var b = s.a.interface({
          title: "string?",
          views: ["object"],
          resources: s.a.optional(["object"]),
        }),
        g = (function(e) {
          function t() {
            var e, r;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
              o[i] = arguments[i];
            return (
              ((r = m(
                this,
                (e = v(t)).call.apply(e, [this].concat(o))
              )).hass = void 0),
              (r.lovelace = void 0),
              (r.closeEditor = void 0),
              (r._saving = void 0),
              (r._changed = void 0),
              (r._generation = void 0),
              r
            );
          }
          var r, i, s;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && y(e, t);
            })(t, n["a"]),
            (r = t),
            (i = [
              {
                key: "render",
                value: function() {
                  return Object(n.f)(
                    h(),
                    this._closeEditor,
                    this.hass.localize(
                      "ui.panel.lovelace.editor.raw_editor.header"
                    ),
                    Object(o.a)({
                      saved: !1 === this._saving || !0 === this._changed,
                    }),
                    this._changed
                      ? this.hass.localize(
                          "ui.panel.lovelace.editor.raw_editor.unsaved_changes"
                        )
                      : this.hass.localize(
                          "ui.panel.lovelace.editor.raw_editor.saved"
                        ),
                    this._handleSave,
                    this.hass.localize(
                      "ui.panel.lovelace.editor.raw_editor.save"
                    ),
                    this.hass,
                    this._yamlChanged,
                    this._handleSave
                  );
                },
              },
              {
                key: "firstUpdated",
                value: function() {
                  (this.yamlEditor.value = a.a.safeDump(this.lovelace.config)),
                    this.yamlEditor.codemirror.clearHistory(),
                    (this._generation = this.yamlEditor.codemirror.changeGeneration(
                      !0
                    ));
                },
              },
              {
                key: "_yamlChanged",
                value: function() {
                  this._generation &&
                    ((this._changed = !this.yamlEditor.codemirror.isClean(
                      this._generation
                    )),
                    this._changed && !window.onbeforeunload
                      ? (window.onbeforeunload = function() {
                          return !0;
                        })
                      : !this._changed &&
                        window.onbeforeunload &&
                        (window.onbeforeunload = null));
                },
              },
              {
                key: "_closeEditor",
                value: function() {
                  (this._changed &&
                    !confirm(
                      "You have unsaved changes, are you sure you want to exit?"
                    )) ||
                    ((window.onbeforeunload = null),
                    this.closeEditor && this.closeEditor());
                },
              },
              {
                key: "_handleSave",
                value: (function() {
                  var e,
                    t = ((e = regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((this._saving = !0),
                                  !this.yamlEditor.hasComments)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                if (
                                  confirm(
                                    "Your config contains comment(s), these will not be saved. Do you want to continue?"
                                  )
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt("return");
                              case 4:
                                (e.prev = 4),
                                  (t = a.a.safeLoad(this.yamlEditor.value)),
                                  (e.next = 13);
                                break;
                              case 8:
                                return (
                                  (e.prev = 8),
                                  (e.t0 = e.catch(4)),
                                  alert("Unable to parse YAML: ".concat(e.t0)),
                                  (this._saving = !1),
                                  e.abrupt("return")
                                );
                              case 13:
                                (e.prev = 13), (t = b(t)), (e.next = 21);
                                break;
                              case 17:
                                return (
                                  (e.prev = 17),
                                  (e.t1 = e.catch(13)),
                                  alert(
                                    "Your config is not valid: ".concat(e.t1)
                                  ),
                                  e.abrupt("return")
                                );
                              case 21:
                                return (
                                  (e.prev = 21),
                                  (e.next = 24),
                                  this.lovelace.saveConfig(t)
                                );
                              case 24:
                                e.next = 29;
                                break;
                              case 26:
                                (e.prev = 26),
                                  (e.t2 = e.catch(21)),
                                  alert("Unable to save YAML: ".concat(e.t2));
                              case 29:
                                (this._generation = this.yamlEditor.codemirror.changeGeneration(
                                  !0
                                )),
                                  (window.onbeforeunload = null),
                                  (this._saving = !1),
                                  (this._changed = !1);
                              case 33:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[4, 8], [13, 17], [21, 26]]
                      );
                    })),
                    function() {
                      var t = this,
                        r = arguments;
                      return new Promise(function(n, o) {
                        var i = e.apply(t, r);
                        function a(e) {
                          d(i, n, o, a, s, "next", e);
                        }
                        function s(e) {
                          d(i, n, o, a, s, "throw", e);
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
                key: "yamlEditor",
                get: function() {
                  return this.shadowRoot.querySelector("hui-yaml-editor");
                },
              },
            ]),
            (s = [
              {
                key: "properties",
                get: function() {
                  return {
                    hass: {},
                    lovelace: {},
                    closeEditor: {},
                    _saving: {},
                    _changed: {},
                  };
                },
              },
              {
                key: "styles",
                get: function() {
                  return [c.a, Object(n.c)(u())];
                },
              },
            ]),
            i && p(r.prototype, i),
            s && p(r, s),
            t
          );
        })();
      customElements.define("hui-editor", g);
    },
  },
]);
//# sourceMappingURL=chunk.86a25e49d710e261ed1d.js.map
