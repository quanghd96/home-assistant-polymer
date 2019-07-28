/*! For license information please see chunk.f5b8893ab251dac46574.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    220: function(e, t, i) {
      "use strict";
      i(202), i(195), i(196), i(327);
      var n = i(3);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">\n  <template>\n    <style include="lumo-overlay">\n      /* stylelint-disable no-empty-source */\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var s = Object(n.a)(o());
      document.head.appendChild(s.content);
      var r = i(251);
      i(291);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      [part="content"] {\n        padding: 0;\n      }\n\n      :host {\n        /* TODO: using a legacy mixin (unsupported) */\n        --iron-list-items-container: {\n          border-width: var(--lumo-space-xs);\n          border-style: solid;\n          border-color: transparent;\n        };\n      }\n\n      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */\n      :host([opened]) {\n        --iron-list-items-container_-_border-width: var(--lumo-space-xs);\n        --iron-list-items-container_-_border-style: solid;\n        --iron-list-items-container_-_border-color: transparent;\n      }\n\n      /* Loading state */\n\n      /* When items are empty, the sinner needs some room */\n      :host(:not([closing])) [part~="content"] {\n        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));\n      }\n\n      [part~="overlay"] {\n        position: relative;\n      }\n\n      :host([loading]) [part~="loader"] {\n        box-sizing: border-box;\n        width: var(--lumo-icon-size-s);\n        height: var(--lumo-icon-size-s);\n        position: absolute;\n        z-index: 1;\n        left: var(--lumo-space-s);\n        right: var(--lumo-space-s);\n        top: var(--lumo-space-s);\n        margin-left: auto;\n        margin-inline-start: auto;\n        margin-inline-end: 0;\n        border: 2px solid transparent;\n        border-color:\n          var(--lumo-primary-color-50pct)\n          var(--lumo-primary-color-50pct)\n          var(--lumo-primary-color)\n          var(--lumo-primary-color);\n        border-radius: calc(0.5 * var(--lumo-icon-size-s));\n        opacity: 0;\n        animation:\n          1s linear infinite lumo-combo-box-loader-rotate,\n          .3s .1s lumo-combo-box-loader-fade-in both;\n        pointer-events: none;\n      }\n\n      @keyframes lumo-combo-box-loader-fade-in {\n        0% {\n          opacity: 0;\n        }\n\n        100% {\n          opacity: 1;\n        }\n      }\n\n      @keyframes lumo-combo-box-loader-rotate {\n        0% {\n          transform: rotate(0deg);\n        }\n\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      var l = Object(n.a)(a());
      document.head.appendChild(l.content);
      i(238), i(213), i(219);
      var u = document.createElement("template");
      (u.innerHTML =
        '<dom-module id="lumo-item" theme-for="vaadin-item">\n  <template>\n    <style>\n      :host {\n        display: flex;\n        align-items: center;\n        box-sizing: border-box;\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        line-height: var(--lumo-line-height-xs);\n        padding: 0.5em 1em;\n        min-height: var(--lumo-size-m);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      /* Selectable items have a checkmark icon */\n      :host([tabindex])::before {\n        display: var(--_lumo-item-selected-icon-display, none);\n        content: var(--lumo-icons-checkmark);\n        font-family: lumo-icons;\n        font-size: var(--lumo-icon-size-m);\n        line-height: 1;\n        font-weight: normal;\n        width: 1em;\n        height: 1em;\n        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;\n        color: var(--lumo-primary-text-color);\n        flex: none;\n        opacity: 0;\n        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;\n      }\n\n      :host([selected])::before {\n        opacity: 1;\n      }\n\n      :host([active]:not([selected]))::before {\n        transform: scale(0.8);\n        opacity: 0;\n        transition-duration: 0s;\n      }\n\n      [part="content"] {\n        flex: auto;\n      }\n\n      /* Disabled item */\n\n      :host([disabled]) {\n        color: var(--lumo-disabled-text-color);\n        cursor: default;\n        pointer-events: none;\n      }\n\n      /* Slotted icons */\n\n      :host ::slotted(iron-icon) {\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(u.content);
      var c = i(25),
        h = i(197);
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
      function f(e, t) {
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
      function p(e, t, i) {
        return (p =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, i) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = _(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var o = Object.getOwnPropertyDescriptor(n, t);
                  return o.get ? o.get.call(i) : o.value;
                }
              })(e, t, i || e);
      }
      function _(e) {
        return (_ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function v(e, t, i) {
        return t && m(e.prototype, t), i && m(e, i), e;
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var b = function(e) {
        return (function(t) {
          function i() {
            var e;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              (e = f(this, _(i).call(this))).value,
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
                t && y(e, t);
            })(i, e),
            v(i, null, [
              {
                key: "properties",
                get: function() {
                  return {
                    _hasVaadinItemMixin: { value: !0 },
                    disabled: {
                      type: Boolean,
                      value: !1,
                      observer: "_disabledChanged",
                      reflectToAttribute: !0,
                    },
                    selected: {
                      type: Boolean,
                      value: !1,
                      reflectToAttribute: !0,
                      observer: "_selectedChanged",
                    },
                    _value: String,
                  };
                },
              },
            ]),
            v(i, [
              {
                key: "ready",
                value: function() {
                  var e = this;
                  p(_(i.prototype), "ready", this).call(this);
                  var t = this.getAttribute("value");
                  null !== t && (this.value = t),
                    this.addEventListener(
                      "focus",
                      function(t) {
                        return e._setFocused(!0);
                      },
                      !0
                    ),
                    this.addEventListener(
                      "blur",
                      function(t) {
                        return e._setFocused(!1);
                      },
                      !0
                    ),
                    this.addEventListener("mousedown", function(t) {
                      e._setActive((e._mousedown = !0));
                      document.addEventListener("mouseup", function t() {
                        e._setActive((e._mousedown = !1)),
                          document.removeEventListener("mouseup", t);
                      });
                    }),
                    this.addEventListener("keydown", function(t) {
                      return e._onKeydown(t);
                    }),
                    this.addEventListener("keyup", function(t) {
                      return e._onKeyup(t);
                    });
                },
              },
              {
                key: "disconnectedCallback",
                value: function() {
                  p(_(i.prototype), "disconnectedCallback", this).call(this),
                    this.hasAttribute("active") && this._setFocused(!1);
                },
              },
              {
                key: "_selectedChanged",
                value: function(e) {
                  this.setAttribute("aria-selected", e);
                },
              },
              {
                key: "_disabledChanged",
                value: function(e) {
                  e
                    ? ((this.selected = !1),
                      this.setAttribute("aria-disabled", "true"),
                      this.blur())
                    : this.removeAttribute("aria-disabled");
                },
              },
              {
                key: "_setFocused",
                value: function(e) {
                  e
                    ? (this.setAttribute("focused", ""),
                      this._mousedown || this.setAttribute("focus-ring", ""))
                    : (this.removeAttribute("focused"),
                      this.removeAttribute("focus-ring"),
                      this._setActive(!1));
                },
              },
              {
                key: "_setActive",
                value: function(e) {
                  e
                    ? this.setAttribute("active", "")
                    : this.removeAttribute("active");
                },
              },
              {
                key: "_onKeydown",
                value: function(e) {
                  /^( |SpaceBar|Enter)$/.test(e.key) &&
                    !e.defaultPrevented &&
                    (e.preventDefault(), this._setActive(!0));
                },
              },
              {
                key: "_onKeyup",
                value: function(e) {
                  this.hasAttribute("active") &&
                    (this._setActive(!1), this.click());
                },
              },
              {
                key: "value",
                get: function() {
                  return void 0 !== this._value
                    ? this._value
                    : this.textContent.trim();
                },
                set: function(e) {
                  this._value = e;
                },
              },
            ]),
            i
          );
        })();
      };
      function g(e) {
        return (g =
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
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n    </style>\n    <div part="content">\n      <slot></slot>\n    </div>\n',
        ]);
        return (
          (I = function() {
            return e;
          }),
          e
        );
      }
      function w(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function x(e, t) {
        return !t || ("object" !== g(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function P(e) {
        return (P = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function S(e, t) {
        return (S =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var k = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            x(this, P(t).apply(this, arguments))
          );
        }
        var i, o, s;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && S(e, t);
          })(t, b(Object(h["a"])(c["a"]))),
          (i = t),
          (s = [
            {
              key: "template",
              get: function() {
                return Object(n.a)(I());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-item";
              },
            },
            {
              key: "version",
              get: function() {
                return "2.1.0";
              },
            },
          ]),
          (o = null) && w(i.prototype, o),
          s && w(i, s),
          t
        );
      })();
      function O() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">\n  <template>\n    <style include="lumo-item">\n      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */\n\n      :host {\n        cursor: default;\n        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);\n        padding-left: calc(var(--lumo-border-radius) / 4);\n        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);\n        transition: background-color 100ms;\n        border-radius: var(--lumo-border-radius);\n        overflow: hidden;\n        --_lumo-item-selected-icon-display: block;\n      }\n\n      /* ShadyCSS workaround (show the selected item checkmark) */\n      :host::before {\n        display: block;\n      }\n\n      :host(:hover) {\n        background-color: var(--lumo-primary-color-10pct);\n      }\n\n      :host([focused]:not([disabled])) {\n        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      @media (pointer: coarse) {\n        :host(:hover) {\n          background-color: transparent;\n        }\n\n        :host([focused]:not([disabled])) {\n          box-shadow: none;\n        }\n      }\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      customElements.define(k.is, k);
      var C = Object(n.a)(O());
      document.head.appendChild(C.content);
      var E = i(249),
        V = i(11),
        T = i(24),
        j = i(32),
        R = i(91),
        A = i(31),
        z = i(62);
      function F(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var $ = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, i, n;
        return (
          (t = e),
          (i = [
            {
              key: "toString",
              value: function() {
                return "";
              },
            },
          ]) && F(t.prototype, i),
          n && F(t, n),
          e
        );
      })();
      function L(e) {
        return (L =
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
      function B(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function H(e, t) {
        return !t || ("object" !== L(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function M(e, t, i) {
        return (M =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, i) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = D(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var o = Object.getOwnPropertyDescriptor(n, t);
                  return o.get ? o.get.call(i) : o.value;
                }
              })(e, t, i || e);
      }
      function D(e) {
        return (D = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function N(e, t) {
        return (N =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var q = function(e) {
        return (function(t) {
          function i() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              H(this, D(i).apply(this, arguments))
            );
          }
          var n, o, s;
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
            })(i, e),
            (n = i),
            (s = [
              {
                key: "properties",
                get: function() {
                  return {
                    opened: {
                      type: Boolean,
                      notify: !0,
                      value: !1,
                      reflectToAttribute: !0,
                      observer: "_openedChanged",
                    },
                    disabled: {
                      type: Boolean,
                      value: !1,
                      reflectToAttribute: !0,
                    },
                    readonly: {
                      type: Boolean,
                      value: !1,
                      reflectToAttribute: !0,
                    },
                    renderer: Function,
                    items: { type: Array, observer: "_itemsChanged" },
                    allowCustomValue: { type: Boolean, value: !1 },
                    filteredItems: { type: Array },
                    value: {
                      type: String,
                      observer: "_valueChanged",
                      notify: !0,
                      value: "",
                    },
                    _lastCommittedValue: String,
                    loading: {
                      type: Boolean,
                      value: !1,
                      reflectToAttribute: !0,
                    },
                    _focusedIndex: { type: Number, value: -1 },
                    filter: { type: String, value: "", notify: !0 },
                    selectedItem: { type: Object, notify: !0 },
                    itemLabelPath: {
                      type: String,
                      value: "label",
                      observer: "_itemLabelPathChanged",
                    },
                    itemValuePath: { type: String, value: "value" },
                    itemIdPath: String,
                    name: { type: String },
                    invalid: {
                      type: Boolean,
                      reflectToAttribute: !0,
                      notify: !0,
                      value: !1,
                    },
                    _toggleElement: Object,
                    _clearElement: Object,
                    _inputElementValue: String,
                    _closeOnBlurIsPrevented: Boolean,
                    _previousDocumentPointerEvents: String,
                    _itemTemplate: Object,
                  };
                },
              },
              {
                key: "observers",
                get: function() {
                  return [
                    "_filterChanged(filter, itemValuePath, itemLabelPath)",
                    "_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)",
                    "_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)",
                    "_templateOrRendererChanged(_itemTemplate, renderer)",
                    "_loadingChanged(loading)",
                    "_selectedItemChanged(selectedItem, itemLabelPath)",
                    "_toggleElementChanged(_toggleElement)",
                  ];
                },
              },
            ]),
            (o = [
              {
                key: "ready",
                value: function() {
                  var e = this;
                  M(D(i.prototype), "ready", this).call(this),
                    this.addEventListener("focusout", function(t) {
                      var i = e.$.overlay.$.dropdown;
                      i && i.$ && t.relatedTarget === i.$.overlay
                        ? t.composedPath()[0].focus()
                        : e._closeOnBlurIsPrevented || e.close();
                    }),
                    (this._lastCommittedValue = this.value),
                    R.a.requestAvailability(),
                    this.$.overlay.addEventListener(
                      "selection-changed",
                      this._overlaySelectedItemChanged.bind(this)
                    ),
                    this.addEventListener(
                      "vaadin-combo-box-dropdown-closed",
                      this._onClosed.bind(this)
                    ),
                    this.addEventListener(
                      "vaadin-combo-box-dropdown-opened",
                      this._onOpened.bind(this)
                    ),
                    this.addEventListener(
                      "keydown",
                      this._onKeyDown.bind(this)
                    ),
                    this.addEventListener("click", this._onClick.bind(this)),
                    this.$.overlay.addEventListener(
                      "vaadin-overlay-touch-action",
                      this._onOverlayTouchAction.bind(this)
                    ),
                    this.addEventListener("touchend", function(t) {
                      e._clearElement &&
                        t.composedPath()[0] === e._clearElement &&
                        (t.preventDefault(), e._clear());
                    }),
                    (this._observer = new z.a(this, function(t) {
                      e._setTemplateFromNodes(t.addedNodes);
                    }));
                },
              },
              {
                key: "render",
                value: function() {
                  this.$.overlay._selector &&
                    this.$.overlay._selector
                      .querySelectorAll("vaadin-combo-box-item")
                      .forEach(function(e) {
                        return e._render();
                      });
                },
              },
              {
                key: "_setTemplateFromNodes",
                value: function(e) {
                  this._itemTemplate =
                    e.filter(function(e) {
                      return e.localName && "template" === e.localName;
                    })[0] || this._itemTemplate;
                },
              },
              {
                key: "_removeNewRendererOrTemplate",
                value: function(e, t, i, n) {
                  e !== t
                    ? (this._itemTemplate = void 0)
                    : i !== n && (this.renderer = void 0);
                },
              },
              {
                key: "_templateOrRendererChanged",
                value: function(e, t) {
                  if (e && t)
                    throw (this._removeNewRendererOrTemplate(
                      e,
                      this._oldTemplate,
                      t,
                      this._oldRenderer
                    ),
                    new Error(
                      "You should only use either a renderer or a template for combo box items"
                    ));
                  (this._oldTemplate = e), (this._oldRenderer = t);
                },
              },
              {
                key: "open",
                value: function() {
                  this.disabled || this.readonly || (this.opened = !0);
                },
              },
              {
                key: "close",
                value: function() {
                  this.opened = !1;
                },
              },
              {
                key: "_openedChanged",
                value: function(e, t) {
                  void 0 !== t &&
                    (this.opened
                      ? ((this._openedWithFocusRing =
                          this.hasAttribute("focus-ring") ||
                          (this.focusElement &&
                            this.focusElement.hasAttribute("focus-ring"))),
                        this.$.overlay.touchDevice ||
                          this.focused ||
                          this.focus())
                      : (this._openedWithFocusRing &&
                          this.hasAttribute("focused") &&
                          this.focusElement.setAttribute("focus-ring", ""),
                        this._onClosed()));
                },
              },
              {
                key: "_onOverlayTouchAction",
                value: function(e) {
                  (this._closeOnBlurIsPrevented = !0),
                    this.inputElement.blur(),
                    (this._closeOnBlurIsPrevented = !1);
                },
              },
              {
                key: "_onClick",
                value: function(e) {
                  this._closeOnBlurIsPrevented = !0;
                  var t = e.composedPath();
                  -1 !== t.indexOf(this._clearElement)
                    ? (this._clear(), this.focus())
                    : -1 !== t.indexOf(this.inputElement) &&
                      (t.indexOf(this._toggleElement) > -1 && this.opened
                        ? this.close()
                        : this.open()),
                    (this._closeOnBlurIsPrevented = !1);
                },
              },
              {
                key: "_onKeyDown",
                value: function(e) {
                  this._isEventKey(e, "down")
                    ? ((this._closeOnBlurIsPrevented = !0),
                      this._onArrowDown(),
                      (this._closeOnBlurIsPrevented = !1),
                      e.preventDefault())
                    : this._isEventKey(e, "up")
                    ? ((this._closeOnBlurIsPrevented = !0),
                      this._onArrowUp(),
                      (this._closeOnBlurIsPrevented = !1),
                      e.preventDefault())
                    : this._isEventKey(e, "enter")
                    ? this._onEnter(e)
                    : this._isEventKey(e, "esc") && this._onEscape(e);
                },
              },
              {
                key: "_isEventKey",
                value: function(e, t) {
                  return A.a.keyboardEventMatchesKeys(e, t);
                },
              },
              {
                key: "_getItemLabel",
                value: function(e) {
                  return this.$.overlay.getItemLabel(e);
                },
              },
              {
                key: "_getItemValue",
                value: function(e) {
                  var t =
                    e && this.itemValuePath
                      ? this.get(this.itemValuePath, e)
                      : void 0;
                  return void 0 === t && (t = e ? e.toString() : ""), t;
                },
              },
              {
                key: "_onArrowDown",
                value: function() {
                  this.opened
                    ? this.$.overlay._items &&
                      ((this._focusedIndex = Math.min(
                        this.$.overlay._items.length - 1,
                        this._focusedIndex + 1
                      )),
                      this._prefillFocusedItemLabel())
                    : this.open();
                },
              },
              {
                key: "_onArrowUp",
                value: function() {
                  this.opened
                    ? (this._focusedIndex > -1
                        ? (this._focusedIndex = Math.max(
                            0,
                            this._focusedIndex - 1
                          ))
                        : this.$.overlay._items &&
                          (this._focusedIndex =
                            this.$.overlay._items.length - 1),
                      this._prefillFocusedItemLabel())
                    : this.open();
                },
              },
              {
                key: "_prefillFocusedItemLabel",
                value: function() {
                  var e = this;
                  this._focusedIndex > -1 &&
                    ((this._inputElementValue = ""),
                    setTimeout(function() {
                      (e._inputElementValue = e._getItemLabel(
                        e.$.overlay._focusedItem
                      )),
                        e._markAllSelectionRange();
                    }, 1));
                },
              },
              {
                key: "_setSelectionRange",
                value: function(e, t) {
                  var i = this._nativeInput || this.inputElement;
                  if (this.hasAttribute("focused") && i && i.setSelectionRange)
                    try {
                      i.setSelectionRange(e, t);
                    } catch (n) {}
                },
              },
              {
                key: "_markAllSelectionRange",
                value: function() {
                  void 0 !== this._inputElementValue &&
                    this._setSelectionRange(0, this._inputElementValue.length);
                },
              },
              {
                key: "_clearSelectionRange",
                value: function() {
                  if (void 0 !== this._inputElementValue) {
                    var e = this._inputElementValue
                      ? this._inputElementValue.length
                      : 0;
                    this._setSelectionRange(e, e);
                  }
                },
              },
              {
                key: "_onEnter",
                value: function(e) {
                  this.opened &&
                    (this.allowCustomValue ||
                      "" === this._inputElementValue ||
                      this._focusedIndex > -1) &&
                    (this.close(), e.preventDefault());
                },
              },
              {
                key: "_onEscape",
                value: function(e) {
                  this.opened &&
                    (this._stopPropagation(e),
                    this._focusedIndex > -1
                      ? ((this._focusedIndex = -1), this._revertInputValue())
                      : this.cancel());
                },
              },
              {
                key: "_toggleElementChanged",
                value: function(e) {
                  e &&
                    e.addEventListener("mousedown", function(e) {
                      return e.preventDefault();
                    });
                },
              },
              {
                key: "_clear",
                value: function() {
                  (this.selectedItem = null),
                    this.allowCustomValue && (this.value = ""),
                    this.opened || this._detectAndDispatchChange();
                },
              },
              {
                key: "cancel",
                value: function() {
                  this._revertInputValueToValue(),
                    (this._lastCommittedValue = this.value),
                    this.close();
                },
              },
              {
                key: "_onOpened",
                value: function() {
                  var e = this;
                  Object(T.b)(),
                    this.$.overlay.ensureItemsRendered(),
                    this.$.overlay._selector.toggleScrollListener(!0),
                    this.$.overlay.updateViewportBoundaries(),
                    this.$.overlay._selector._increasePoolIfNeeded(),
                    setTimeout(function() {
                      return e._resizeDropdown();
                    }, 1),
                    window.requestAnimationFrame(function() {
                      return e.$.overlay.adjustScrollPosition();
                    }),
                    (this._lastCommittedValue = this.value);
                },
              },
              {
                key: "_onClosed",
                value: function() {
                  if (
                    (this.opened && this.close(),
                    this.$.overlay._items && this._focusedIndex > -1)
                  ) {
                    var e = this.$.overlay._items[this._focusedIndex];
                    this.selectedItem !== e && (this.selectedItem = e),
                      (this._inputElementValue = this._getItemLabel(
                        this.selectedItem
                      ));
                  } else if (
                    "" === this._inputElementValue ||
                    void 0 === this._inputElementValue
                  )
                    (this.selectedItem = null),
                      this.allowCustomValue && (this.value = "");
                  else if (this.allowCustomValue) {
                    var t = new CustomEvent("custom-value-set", {
                      detail: this._inputElementValue,
                      composed: !0,
                      cancelable: !0,
                      bubbles: !0,
                    });
                    if ((this.dispatchEvent(t), !t.defaultPrevented)) {
                      var i = this._inputElementValue;
                      this._selectItemForValue(i), (this.value = i);
                    }
                  } else
                    this._inputElementValue = this.selectedItem
                      ? this._getItemLabel(this.selectedItem)
                      : "";
                  this._detectAndDispatchChange(),
                    this._clearSelectionRange(),
                    this.dataProvider || (this.filter = "");
                },
              },
              {
                key: "_inputValueChanged",
                value: function(e) {
                  -1 !== e.composedPath().indexOf(this.inputElement) &&
                    ((this._inputElementValue = this.inputElement[
                      this._propertyForValue
                    ]),
                    this._filterFromInput());
                },
              },
              {
                key: "_filterFromInput",
                value: function(e) {
                  this.opened || this.open(),
                    this.filter === this._inputElementValue
                      ? this._filterChanged(
                          this.filter,
                          this.itemValuePath,
                          this.itemLabelPath
                        )
                      : (this.filter = this._inputElementValue);
                },
              },
              {
                key: "_itemLabelPathChanged",
                value: function(e, t) {
                  "string" != typeof e &&
                    console.error(
                      "You should set itemLabelPath to a valid string"
                    );
                },
              },
              {
                key: "_filterChanged",
                value: function(e, t, i) {
                  void 0 !== e &&
                    (this.items
                      ? (this.filteredItems = this._filterItems(this.items, e))
                      : this._filteredItemsChanged(
                          { path: "filteredItems", value: this.filteredItems },
                          t,
                          i
                        ));
                },
              },
              {
                key: "_loadingChanged",
                value: function(e) {
                  e && (this._focusedIndex = -1);
                },
              },
              {
                key: "_revertInputValue",
                value: function() {
                  "" !== this.filter
                    ? (this._inputElementValue = this.filter)
                    : this._revertInputValueToValue(),
                    this._clearSelectionRange();
                },
              },
              {
                key: "_revertInputValueToValue",
                value: function() {
                  this.allowCustomValue && !this.selectedItem
                    ? (this._inputElementValue = this.value)
                    : (this._inputElementValue = this._getItemLabel(
                        this.selectedItem
                      ));
                },
              },
              {
                key: "_resizeDropdown",
                value: function() {
                  this.$.overlay.$.dropdown.notifyResize();
                },
              },
              {
                key: "_updateHasValue",
                value: function(e) {
                  e
                    ? this.setAttribute("has-value", "")
                    : this.removeAttribute("has-value");
                },
              },
              {
                key: "_selectedItemChanged",
                value: function(e, t) {
                  if (null == e)
                    this.filteredItems &&
                      (this.allowCustomValue || (this.value = ""),
                      this._updateHasValue("" !== this.value),
                      (this._inputElementValue = this.value));
                  else {
                    var i = this._getItemValue(e);
                    this.value !== i && (this.value = i),
                      this._updateHasValue(!0),
                      (this._inputElementValue = this._getItemLabel(e)),
                      this.inputElement &&
                        (this.inputElement[
                          this._propertyForValue
                        ] = this._inputElementValue);
                  }
                  (this.$.overlay._selectedItem = e),
                    this.filteredItems &&
                      this.$.overlay._items &&
                      (this._focusedIndex = this.filteredItems.indexOf(e));
                },
              },
              {
                key: "_valueChanged",
                value: function(e, t) {
                  if ("" !== e || void 0 !== t) {
                    var i;
                    if (this._isValidValue(e))
                      this._getItemValue(this.selectedItem) !== e
                        ? this._selectItemForValue(e)
                        : (i = this.selectedItem),
                        !i &&
                          this.allowCustomValue &&
                          (this._inputElementValue = e),
                        this._updateHasValue("" !== this.value);
                    else this.selectedItem = null;
                    this._lastCommittedValue = void 0;
                  }
                },
              },
              {
                key: "_detectAndDispatchChange",
                value: function() {
                  this.value !== this._lastCommittedValue &&
                    (this.dispatchEvent(
                      new CustomEvent("change", { bubbles: !0 })
                    ),
                    (this._lastCommittedValue = this.value));
                },
              },
              {
                key: "_itemsChanged",
                value: function(e, t) {
                  var i = this;
                  this._ensureItemsOrDataProvider(function() {
                    i.items = t;
                  });
                },
              },
              {
                key: "_itemsOrPathsChanged",
                value: function(e, t, i) {
                  if (
                    void 0 !== e.value &&
                    ("items" === e.path || "items.splices" === e.path)
                  ) {
                    this.filteredItems = this.items
                      ? this.items.slice(0)
                      : this.items;
                    var n = this._indexOfValue(this.value, this.items);
                    this._focusedIndex = n;
                    var o = n > -1 && this.items[n];
                    o && (this.selectedItem = o);
                  }
                },
              },
              {
                key: "_filteredItemsChanged",
                value: function(e, t, i) {
                  void 0 !== e.value &&
                    (("filteredItems" !== e.path &&
                      "filteredItems.splices" !== e.path) ||
                      (this._setOverlayItems(this.filteredItems),
                      (this._focusedIndex = this.opened
                        ? this.$.overlay.indexOfLabel(this.filter)
                        : this._indexOfValue(this.value, this.filteredItems)),
                      this.opened && this._repositionOverlay()));
                },
              },
              {
                key: "_filterItems",
                value: function(e, t) {
                  var i = this;
                  return e
                    ? e.filter(function(e) {
                        return (
                          (t = t ? t.toString().toLowerCase() : ""),
                          i
                            ._getItemLabel(e)
                            .toString()
                            .toLowerCase()
                            .indexOf(t) > -1
                        );
                      })
                    : e;
                },
              },
              {
                key: "_selectItemForValue",
                value: function(e) {
                  var t = this._indexOfValue(e, this.filteredItems),
                    i = this.selectedItem;
                  (this.selectedItem =
                    t >= 0
                      ? this.filteredItems[t]
                      : this.dataProvider && void 0 === this.selectedItem
                      ? void 0
                      : null),
                    null === this.selectedItem &&
                      null === i &&
                      this._selectedItemChanged(this.selectedItem);
                },
              },
              {
                key: "_setOverlayItems",
                value: function(e) {
                  this.$.overlay.set("_items", e),
                    this.opened && this._resizeDropdown();
                },
              },
              {
                key: "_repositionOverlay",
                value: function() {
                  var e = this;
                  setTimeout(function() {
                    e._resizeDropdown(),
                      e.$.overlay.updateViewportBoundaries(),
                      e.$.overlay.ensureItemsRendered(),
                      e.$.overlay._selector.notifyResize(),
                      Object(T.b)();
                  }, 1);
                },
              },
              {
                key: "_indexOfValue",
                value: function(e, t) {
                  if (t && this._isValidValue(e))
                    for (var i = 0; i < t.length; i++)
                      if (this._getItemValue(t[i]) === e) return i;
                  return -1;
                },
              },
              {
                key: "_isValidValue",
                value: function(e) {
                  return null != e;
                },
              },
              {
                key: "_overlaySelectedItemChanged",
                value: function(e) {
                  e.stopPropagation(),
                    e.detail.item instanceof $ ||
                      (this.opened && this.close(),
                      this.selectedItem !== e.detail.item &&
                        ((this.selectedItem = e.detail.item),
                        this._detectAndDispatchChange()));
                },
              },
              {
                key: "validate",
                value: function() {
                  return !(this.invalid = !this.checkValidity());
                },
              },
              {
                key: "checkValidity",
                value: function() {
                  if (this.inputElement.validate)
                    return this.inputElement.validate();
                },
              },
              {
                key: "_ensureTemplatized",
                value: function() {
                  if (!this._TemplateClass) {
                    var e = this._itemTemplate || this._getRootTemplate();
                    e &&
                      (this._TemplateClass = Object(j.b)(e, this, {
                        instanceProps: this._instanceProps,
                        forwardHostProp: function(e, t) {
                          var i = this.$.overlay._selector.querySelectorAll(
                            "vaadin-combo-box-item"
                          );
                          Array.prototype.forEach.call(i, function(i) {
                            i._itemTemplateInstance &&
                              (i._itemTemplateInstance.set(e, t),
                              i._itemTemplateInstance.notifyPath(e, t, !0));
                          });
                        },
                      }));
                  }
                },
              },
              {
                key: "_getRootTemplate",
                value: function() {
                  return Array.prototype.filter.call(this.children, function(
                    e
                  ) {
                    return "TEMPLATE" === e.tagName;
                  })[0];
                },
              },
              {
                key: "_preventInputBlur",
                value: function() {
                  this._toggleElement &&
                    this._toggleElement.addEventListener(
                      "click",
                      this._preventDefault
                    ),
                    this._clearElement &&
                      this._clearElement.addEventListener(
                        "click",
                        this._preventDefault
                      );
                },
              },
              {
                key: "_restoreInputBlur",
                value: function() {
                  this._toggleElement &&
                    this._toggleElement.removeEventListener(
                      "click",
                      this._preventDefault
                    ),
                    this._clearElement &&
                      this._clearElement.removeEventListener(
                        "click",
                        this._preventDefault
                      );
                },
              },
              {
                key: "_preventDefault",
                value: function(e) {
                  e.preventDefault();
                },
              },
              {
                key: "_stopPropagation",
                value: function(e) {
                  e.stopPropagation();
                },
              },
              {
                key: "_propertyForValue",
                get: function() {
                  return "value";
                },
              },
              {
                key: "_instanceProps",
                get: function() {
                  return { item: !0, index: !0, selected: !0, focused: !0 };
                },
              },
            ]) && B(n.prototype, o),
            s && B(n, s),
            i
          );
        })();
      };
      function W(e) {
        return (W =
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
      function K(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, i = new Array(e.length); t < e.length; t++)
                i[t] = e[t];
              return i;
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
      function Y(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function U(e, t) {
        return !t || ("object" !== W(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function X(e, t, i) {
        return (X =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, i) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = G(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var o = Object.getOwnPropertyDescriptor(n, t);
                  return o.get ? o.get.call(i) : o.value;
                }
              })(e, t, i || e);
      }
      function G(e) {
        return (G = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function J(e, t) {
        return (J =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Q = function(e) {
          return (function(t) {
            function i() {
              return (
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                U(this, G(i).apply(this, arguments))
              );
            }
            var n, o, s;
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && J(e, t);
              })(i, e),
              (n = i),
              (s = [
                {
                  key: "properties",
                  get: function() {
                    return {
                      pageSize: {
                        type: Number,
                        value: 50,
                        observer: "_pageSizeChanged",
                      },
                      size: { type: Number, observer: "_sizeChanged" },
                      dataProvider: {
                        type: Object,
                        observer: "_dataProviderChanged",
                      },
                      _pendingRequests: {
                        value: function() {
                          return {};
                        },
                      },
                      __placeHolder: { value: new $() },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function() {
                    return [
                      "_dataProviderFilterChanged(filter, dataProvider)",
                      "_dataProviderClearFilter(dataProvider, opened, value)",
                      "_warnDataProviderValue(dataProvider, value)",
                      "_ensureFirstPage(opened)",
                    ];
                  },
                },
              ]),
              (o = [
                {
                  key: "_dataProviderClearFilter",
                  value: function(e, t, i) {
                    e &&
                      this.filter &&
                      ((this.size = void 0),
                      (this._pendingRequests = {}),
                      (this.filter = ""),
                      this.clearCache());
                  },
                },
                {
                  key: "ready",
                  value: function() {
                    var e = this;
                    X(G(i.prototype), "ready", this).call(this),
                      this.clearCache(),
                      this.$.overlay.addEventListener(
                        "index-requested",
                        function(t) {
                          var i = t.detail.index;
                          if (void 0 !== i) {
                            var n = e._getPageForIndex(i);
                            e._shouldLoadPage(n) && e._loadPage(n);
                          }
                        }
                      );
                  },
                },
                {
                  key: "_dataProviderFilterChanged",
                  value: function() {
                    this.dataProvider &&
                      this.opened &&
                      ((this.size = void 0),
                      (this._pendingRequests = {}),
                      this.clearCache());
                  },
                },
                {
                  key: "_ensureFirstPage",
                  value: function(e) {
                    e && this._shouldLoadPage(0) && this._loadPage(0);
                  },
                },
                {
                  key: "_shouldLoadPage",
                  value: function(e) {
                    if (!this.filteredItems || this._forceNextRequest)
                      return (this._forceNextRequest = !1), !0;
                    var t = this.filteredItems[e * this.pageSize];
                    return void 0 !== t ? t instanceof $ : void 0 === this.size;
                  },
                },
                {
                  key: "_loadPage",
                  value: function(e) {
                    var t = this;
                    if (!this._pendingRequests[e] && this.dataProvider) {
                      this.loading = !0;
                      var i = {
                          page: e,
                          pageSize: this.pageSize,
                          filter: this.filter,
                        },
                        n = function n(o, s) {
                          if (t._pendingRequests[e] === n) {
                            if (t.filteredItems)
                              t.splice.apply(
                                t,
                                [
                                  "filteredItems",
                                  i.page * i.pageSize,
                                  o.length,
                                ].concat(K(o))
                              );
                            else {
                              var r = [];
                              r.splice.apply(
                                r,
                                [i.page * i.pageSize, o.length].concat(K(o))
                              ),
                                (t.filteredItems = r);
                            }
                            t._isValidValue(t.value) &&
                              t._getItemValue(t.selectedItem) !== t.value &&
                              t._selectItemForValue(t.value),
                              (t.size = s),
                              delete t._pendingRequests[e],
                              0 === Object.keys(t._pendingRequests).length &&
                                (t.loading = !1);
                          }
                        };
                      (this._pendingRequests[e] = n), this.dataProvider(i, n);
                    }
                  },
                },
                {
                  key: "_getPageForIndex",
                  value: function(e) {
                    return Math.floor(e / this.pageSize);
                  },
                },
                {
                  key: "clearCache",
                  value: function() {
                    if (this.dataProvider) {
                      this._pendingRequests = {};
                      for (var e = [], t = 0; t < (this.size || 0); t++)
                        e.push(this.__placeHolder);
                      (this.filteredItems = e),
                        this.opened
                          ? this._loadPage(0)
                          : (this._forceNextRequest = !0);
                    }
                  },
                },
                {
                  key: "_sizeChanged",
                  value: function() {
                    for (
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        t = (this.filteredItems || []).slice(0, e),
                        i = 0;
                      i < e;
                      i++
                    )
                      t[i] = void 0 !== t[i] ? t[i] : this.__placeHolder;
                    this.filteredItems = t;
                  },
                },
                {
                  key: "_pageSizeChanged",
                  value: function(e, t) {
                    if (Math.floor(e) !== e || 0 === e)
                      throw ((this.pageSize = t),
                      new Error("`pageSize` value must be an integer > 0"));
                    this.clearCache();
                  },
                },
                {
                  key: "_dataProviderChanged",
                  value: function(e, t) {
                    var i = this;
                    this._ensureItemsOrDataProvider(function() {
                      i.dataProvider = t;
                    });
                  },
                },
                {
                  key: "_ensureItemsOrDataProvider",
                  value: function(e) {
                    if (void 0 !== this.items && void 0 !== this.dataProvider)
                      throw (e(),
                      new Error(
                        "Using `items` and `dataProvider` together is not supported"
                      ));
                  },
                },
                {
                  key: "_warnDataProviderValue",
                  value: function(e, t) {
                    if (
                      e &&
                      "" !== t &&
                      (void 0 === this.selectedItem ||
                        null === this.selectedItem)
                    ) {
                      var i = this._indexOfValue(t, this.filteredItems);
                      (i < 0 || !this._getItemLabel(this.filteredItems[i])) &&
                        console.warn(
                          "Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`"
                        );
                    }
                  },
                },
              ]) && Y(n.prototype, o),
              s && Y(n, s),
              i
            );
          })();
        },
        Z = (i(4), i(95)),
        ee = i(242),
        te = i(98),
        ie = i(5),
        ne = i(1),
        oe = i(97),
        se = i(21),
        re = i(2);
      function ae() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n      }\n\n      @media only screen and (-webkit-max-device-pixel-ratio: 1) {\n        :host {\n          will-change: transform;\n        }\n      }\n\n      #items {\n        @apply --iron-list-items-container;\n        position: relative;\n      }\n\n      :host(:not([grid])) #items > ::slotted(*) {\n        width: 100%;\n      }\n\n      #items > ::slotted(*) {\n        box-sizing: border-box;\n        margin: 0;\n        position: absolute;\n        top: 0;\n        will-change: transform;\n      }\n    </style>\n\n    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>\n\n    <div id="items">\n      <slot></slot>\n    </div>\n',
        ]);
        return (
          (ae = function() {
            return e;
          }),
          e
        );
      }
      var le = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),
        ue = le && le[1] >= 8;
      function ce(e) {
        return (ce =
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
      function he() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n         display: none;\n      }\n    </style>\n    <div part="content" id="content"></div>\n',
        ]);
        return (
          (he = function() {
            return e;
          }),
          e
        );
      }
      function de(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function fe(e, t) {
        return !t || ("object" !== ce(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function pe(e, t, i) {
        return (pe =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, i) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = _e(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var o = Object.getOwnPropertyDescriptor(n, t);
                  return o.get ? o.get.call(i) : o.value;
                }
              })(e, t, i || e);
      }
      function _e(e) {
        return (_e = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function me(e, t) {
        return (me =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      Object(ie.a)({
        _template: Object(n.a)(ae()),
        is: "iron-list",
        properties: {
          items: { type: Array },
          as: { type: String, value: "item" },
          indexAs: { type: String, value: "index" },
          selectedAs: { type: String, value: "selected" },
          grid: {
            type: Boolean,
            value: !1,
            reflectToAttribute: !0,
            observer: "_gridChanged",
          },
          selectionEnabled: { type: Boolean, value: !1 },
          selectedItem: { type: Object, notify: !0 },
          selectedItems: { type: Object, notify: !0 },
          multiSelection: { type: Boolean, value: !1 },
          scrollOffset: { type: Number, value: 0 },
        },
        observers: [
          "_itemsChanged(items.*)",
          "_selectionEnabledChanged(selectionEnabled)",
          "_multiSelectionChanged(multiSelection)",
          "_setOverflow(scrollTarget, scrollOffset)",
        ],
        behaviors: [oe.a, Z.a, ee.a, te.a],
        _ratio: 0.5,
        _scrollerPaddingTop: 0,
        _scrollPosition: 0,
        _physicalSize: 0,
        _physicalAverage: 0,
        _physicalAverageCount: 0,
        _physicalTop: 0,
        _virtualCount: 0,
        _estScrollHeight: 0,
        _scrollHeight: 0,
        _viewportHeight: 0,
        _viewportWidth: 0,
        _physicalItems: null,
        _physicalSizes: null,
        _firstVisibleIndexVal: null,
        _lastVisibleIndexVal: null,
        _maxPages: 2,
        _focusedItem: null,
        _focusedVirtualIndex: -1,
        _focusedPhysicalIndex: -1,
        _offscreenFocusedItem: null,
        _focusBackfillItem: null,
        _itemsPerRow: 1,
        _itemWidth: 0,
        _rowHeight: 0,
        _templateCost: 0,
        _parentModel: !0,
        get _physicalBottom() {
          return this._physicalTop + this._physicalSize;
        },
        get _scrollBottom() {
          return this._scrollPosition + this._viewportHeight;
        },
        get _virtualEnd() {
          return this._virtualStart + this._physicalCount - 1;
        },
        get _hiddenContentSize() {
          return (
            (this.grid
              ? this._physicalRows * this._rowHeight
              : this._physicalSize) - this._viewportHeight
          );
        },
        get _itemsParent() {
          return Object(ne.a)(Object(ne.a)(this._userTemplate).parentNode);
        },
        get _maxScrollTop() {
          return (
            this._estScrollHeight - this._viewportHeight + this._scrollOffset
          );
        },
        get _maxVirtualStart() {
          var e = this._convertIndexToCompleteRow(this._virtualCount);
          return Math.max(0, e - this._physicalCount);
        },
        set _virtualStart(e) {
          (e = this._clamp(e, 0, this._maxVirtualStart)),
            this.grid && (e -= e % this._itemsPerRow),
            (this._virtualStartVal = e);
        },
        get _virtualStart() {
          return this._virtualStartVal || 0;
        },
        set _physicalStart(e) {
          (e %= this._physicalCount) < 0 && (e = this._physicalCount + e),
            this.grid && (e -= e % this._itemsPerRow),
            (this._physicalStartVal = e);
        },
        get _physicalStart() {
          return this._physicalStartVal || 0;
        },
        get _physicalEnd() {
          return (
            (this._physicalStart + this._physicalCount - 1) %
            this._physicalCount
          );
        },
        set _physicalCount(e) {
          this._physicalCountVal = e;
        },
        get _physicalCount() {
          return this._physicalCountVal || 0;
        },
        get _optPhysicalSize() {
          return 0 === this._viewportHeight
            ? 1 / 0
            : this._viewportHeight * this._maxPages;
        },
        get _isVisible() {
          return Boolean(this.offsetWidth || this.offsetHeight);
        },
        get firstVisibleIndex() {
          var e = this._firstVisibleIndexVal;
          if (null == e) {
            var t = this._physicalTop + this._scrollOffset;
            (e =
              this._iterateItems(function(e, i) {
                return (t += this._getPhysicalSizeIncrement(e)) >
                  this._scrollPosition
                  ? this.grid
                    ? i - (i % this._itemsPerRow)
                    : i
                  : this.grid && this._virtualCount - 1 === i
                  ? i - (i % this._itemsPerRow)
                  : void 0;
              }) || 0),
              (this._firstVisibleIndexVal = e);
          }
          return e;
        },
        get lastVisibleIndex() {
          var e = this._lastVisibleIndexVal;
          if (null == e) {
            if (this.grid)
              e = Math.min(
                this._virtualCount,
                this.firstVisibleIndex +
                  this._estRowsInView * this._itemsPerRow -
                  1
              );
            else {
              var t = this._physicalTop + this._scrollOffset;
              this._iterateItems(function(i, n) {
                t < this._scrollBottom && (e = n),
                  (t += this._getPhysicalSizeIncrement(i));
              });
            }
            this._lastVisibleIndexVal = e;
          }
          return e;
        },
        get _defaultScrollTarget() {
          return this;
        },
        get _virtualRowCount() {
          return Math.ceil(this._virtualCount / this._itemsPerRow);
        },
        get _estRowsInView() {
          return Math.ceil(this._viewportHeight / this._rowHeight);
        },
        get _physicalRows() {
          return Math.ceil(this._physicalCount / this._itemsPerRow);
        },
        get _scrollOffset() {
          return this._scrollerPaddingTop + this.scrollOffset;
        },
        ready: function() {
          this.addEventListener("focus", this._didFocus.bind(this), !0);
        },
        attached: function() {
          this._debounce("_render", this._render, V.a),
            this.listen(this, "iron-resize", "_resizeHandler"),
            this.listen(this, "keydown", "_keydownHandler");
        },
        detached: function() {
          this.unlisten(this, "iron-resize", "_resizeHandler"),
            this.unlisten(this, "keydown", "_keydownHandler");
        },
        _setOverflow: function(e) {
          (this.style.webkitOverflowScrolling = e === this ? "touch" : ""),
            (this.style.overflowY = e === this ? "auto" : ""),
            (this._lastVisibleIndexVal = null),
            (this._firstVisibleIndexVal = null),
            this._debounce("_render", this._render, V.a);
        },
        updateViewportBoundaries: function() {
          var e = window.getComputedStyle(this);
          (this._scrollerPaddingTop =
            this.scrollTarget === this ? 0 : parseInt(e["padding-top"], 10)),
            (this._isRTL = Boolean("rtl" === e.direction)),
            (this._viewportWidth = this.$.items.offsetWidth),
            (this._viewportHeight = this._scrollTargetHeight),
            this.grid && this._updateGridMetrics();
        },
        _scrollHandler: function() {
          var e = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop)),
            t = e - this._scrollPosition,
            i = t >= 0;
          if (
            ((this._scrollPosition = e),
            (this._firstVisibleIndexVal = null),
            (this._lastVisibleIndexVal = null),
            Math.abs(t) > this._physicalSize && this._physicalSize > 0)
          ) {
            t -= this._scrollOffset;
            var n = Math.round(t / this._physicalAverage) * this._itemsPerRow;
            (this._virtualStart = this._virtualStart + n),
              (this._physicalStart = this._physicalStart + n),
              (this._physicalTop =
                Math.floor(this._virtualStart / this._itemsPerRow) *
                this._physicalAverage),
              this._update();
          } else if (this._physicalCount > 0) {
            var o = this._getReusables(i);
            i
              ? ((this._physicalTop = o.physicalTop),
                (this._virtualStart = this._virtualStart + o.indexes.length),
                (this._physicalStart = this._physicalStart + o.indexes.length))
              : ((this._virtualStart = this._virtualStart - o.indexes.length),
                (this._physicalStart = this._physicalStart - o.indexes.length)),
              this._update(o.indexes, i ? null : o.indexes),
              this._debounce(
                "_increasePoolIfNeeded",
                this._increasePoolIfNeeded.bind(this, 0),
                V.c
              );
          }
        },
        _getReusables: function(e) {
          var t,
            i,
            n,
            o = [],
            s = this._hiddenContentSize * this._ratio,
            r = this._virtualStart,
            a = this._virtualEnd,
            l = this._physicalCount,
            u = this._physicalTop + this._scrollOffset,
            c = this._physicalBottom + this._scrollOffset,
            h = this._scrollTop,
            d = this._scrollBottom;
          for (
            e
              ? ((t = this._physicalStart), this._physicalEnd, (i = h - u))
              : ((t = this._physicalEnd), this._physicalStart, (i = c - d));
            (i -= n = this._getPhysicalSizeIncrement(t)),
              !(o.length >= l || i <= s);

          )
            if (e) {
              if (a + o.length + 1 >= this._virtualCount) break;
              if (u + n >= h - this._scrollOffset) break;
              o.push(t), (u += n), (t = (t + 1) % l);
            } else {
              if (r - o.length <= 0) break;
              if (u + this._physicalSize - n <= d) break;
              o.push(t), (u -= n), (t = 0 === t ? l - 1 : t - 1);
            }
          return { indexes: o, physicalTop: u - this._scrollOffset };
        },
        _update: function(e, t) {
          if (!((e && 0 === e.length) || 0 === this._physicalCount)) {
            if (
              (this._manageFocus(),
              this._assignModels(e),
              this._updateMetrics(e),
              t)
            )
              for (; t.length; ) {
                var i = t.pop();
                this._physicalTop -= this._getPhysicalSizeIncrement(i);
              }
            this._positionItems(), this._updateScrollerSize();
          }
        },
        _createPool: function(e) {
          var t, i;
          this._ensureTemplatized();
          var n = new Array(e);
          for (t = 0; t < e; t++)
            (i = this.stamp(null)),
              (n[t] = i.root.querySelector("*")),
              this._itemsParent.appendChild(i.root);
          return n;
        },
        _isClientFull: function() {
          return (
            0 != this._scrollBottom &&
            this._physicalBottom - 1 >= this._scrollBottom &&
            this._physicalTop <= this._scrollPosition
          );
        },
        _increasePoolIfNeeded: function(e) {
          var t = this._clamp(
            this._physicalCount + e,
            3,
            this._virtualCount - this._virtualStart
          );
          if (((t = this._convertIndexToCompleteRow(t)), this.grid)) {
            var i = t % this._itemsPerRow;
            i && t - i <= this._physicalCount && (t += this._itemsPerRow),
              (t -= i);
          }
          var n = t - this._physicalCount,
            o = Math.round(0.5 * this._physicalCount);
          if (!(n < 0)) {
            if (n > 0) {
              var s = window.performance.now();
              [].push.apply(this._physicalItems, this._createPool(n));
              for (var r = 0; r < n; r++) this._physicalSizes.push(0);
              (this._physicalCount = this._physicalCount + n),
                this._physicalStart > this._physicalEnd &&
                  this._isIndexRendered(this._focusedVirtualIndex) &&
                  this._getPhysicalIndex(this._focusedVirtualIndex) <
                    this._physicalEnd &&
                  (this._physicalStart = this._physicalStart + n),
                this._update(),
                (this._templateCost = (window.performance.now() - s) / n),
                (o = Math.round(0.5 * this._physicalCount));
            }
            this._virtualEnd >= this._virtualCount - 1 ||
              0 === o ||
              (this._isClientFull()
                ? this._physicalSize < this._optPhysicalSize &&
                  this._debounce(
                    "_increasePoolIfNeeded",
                    this._increasePoolIfNeeded.bind(
                      this,
                      this._clamp(Math.round(50 / this._templateCost), 1, o)
                    ),
                    V.b
                  )
                : this._debounce(
                    "_increasePoolIfNeeded",
                    this._increasePoolIfNeeded.bind(this, o),
                    V.c
                  ));
          }
        },
        _render: function() {
          if (this.isAttached && this._isVisible)
            if (0 !== this._physicalCount) {
              var e = this._getReusables(!0);
              (this._physicalTop = e.physicalTop),
                (this._virtualStart = this._virtualStart + e.indexes.length),
                (this._physicalStart = this._physicalStart + e.indexes.length),
                this._update(e.indexes),
                this._update(),
                this._increasePoolIfNeeded(0);
            } else
              this._virtualCount > 0 &&
                (this.updateViewportBoundaries(),
                this._increasePoolIfNeeded(3));
        },
        _ensureTemplatized: function() {
          if (!this.ctor) {
            (this._userTemplate = this.queryEffectiveChildren("template")),
              this._userTemplate ||
                console.warn(
                  "iron-list requires a template to be provided in light-dom"
                );
            var e = { __key__: !0 };
            (e[this.as] = !0),
              (e[this.indexAs] = !0),
              (e[this.selectedAs] = !0),
              (e.tabIndex = !0),
              (this._instanceProps = e),
              this.templatize(this._userTemplate, this.mutableData);
          }
        },
        _gridChanged: function(e, t) {
          void 0 !== t &&
            (this.notifyResize(),
            Object(T.b)(),
            e && this._updateGridMetrics());
        },
        _itemsChanged: function(e) {
          if ("items" === e.path)
            (this._virtualStart = 0),
              (this._physicalTop = 0),
              (this._virtualCount = this.items ? this.items.length : 0),
              (this._physicalIndexForKey = {}),
              (this._firstVisibleIndexVal = null),
              (this._lastVisibleIndexVal = null),
              (this._physicalCount = this._physicalCount || 0),
              (this._physicalItems = this._physicalItems || []),
              (this._physicalSizes = this._physicalSizes || []),
              (this._physicalStart = 0),
              this._scrollTop > this._scrollOffset &&
                this._resetScrollPosition(0),
              this._removeFocusedItem(),
              this._debounce("_render", this._render, V.a);
          else if ("items.splices" === e.path) {
            if (
              (this._adjustVirtualIndex(e.value.indexSplices),
              (this._virtualCount = this.items ? this.items.length : 0),
              e.value.indexSplices.some(function(e) {
                return e.addedCount > 0 || e.removed.length > 0;
              }))
            ) {
              var t = this._getActiveElement();
              this.contains(t) && t.blur();
            }
            var i = e.value.indexSplices.some(function(e) {
              return (
                e.index + e.addedCount >= this._virtualStart &&
                e.index <= this._virtualEnd
              );
            }, this);
            (this._isClientFull() && !i) ||
              this._debounce("_render", this._render, V.a);
          } else
            "items.length" !== e.path && this._forwardItemPath(e.path, e.value);
        },
        _forwardItemPath: function(e, t) {
          var i,
            n,
            o,
            s = (e = e.slice(6)).indexOf(".");
          -1 === s && (s = e.length);
          var r = this.modelForElement(this._offscreenFocusedItem),
            a = parseInt(e.substring(0, s), 10);
          (i = this._isIndexRendered(a))
            ? ((n = this._getPhysicalIndex(a)),
              (o = this.modelForElement(this._physicalItems[n])))
            : r && (o = r),
            o &&
              o[this.indexAs] === a &&
              ((e = e.substring(s + 1)),
              (e = this.as + (e ? "." + e : "")),
              o._setPendingPropertyOrPath(e, t, !1, !0),
              o._flushProperties && o._flushProperties(!0),
              i &&
                (this._updateMetrics([n]),
                this._positionItems(),
                this._updateScrollerSize()));
        },
        _adjustVirtualIndex: function(e) {
          e.forEach(function(e) {
            if (
              (e.removed.forEach(this._removeItem, this),
              e.index < this._virtualStart)
            ) {
              var t = Math.max(
                e.addedCount - e.removed.length,
                e.index - this._virtualStart
              );
              (this._virtualStart = this._virtualStart + t),
                this._focusedVirtualIndex >= 0 &&
                  (this._focusedVirtualIndex = this._focusedVirtualIndex + t);
            }
          }, this);
        },
        _removeItem: function(e) {
          this.$.selector.deselect(e),
            this._focusedItem &&
              this.modelForElement(this._focusedItem)[this.as] === e &&
              this._removeFocusedItem();
        },
        _iterateItems: function(e, t) {
          var i, n, o, s;
          if (2 === arguments.length && t) {
            for (s = 0; s < t.length; s++)
              if (
                ((i = t[s]),
                (n = this._computeVidx(i)),
                null != (o = e.call(this, i, n)))
              )
                return o;
          } else {
            for (
              i = this._physicalStart, n = this._virtualStart;
              i < this._physicalCount;
              i++, n++
            )
              if (null != (o = e.call(this, i, n))) return o;
            for (i = 0; i < this._physicalStart; i++, n++)
              if (null != (o = e.call(this, i, n))) return o;
          }
        },
        _computeVidx: function(e) {
          return e >= this._physicalStart
            ? this._virtualStart + (e - this._physicalStart)
            : this._virtualStart +
                (this._physicalCount - this._physicalStart) +
                e;
        },
        _assignModels: function(e) {
          this._iterateItems(function(e, t) {
            var i = this._physicalItems[e],
              n = this.items && this.items[t];
            if (null != n) {
              var o = this.modelForElement(i);
              (o.__key__ = null),
                this._forwardProperty(o, this.as, n),
                this._forwardProperty(
                  o,
                  this.selectedAs,
                  this.$.selector.isSelected(n)
                ),
                this._forwardProperty(o, this.indexAs, t),
                this._forwardProperty(
                  o,
                  "tabIndex",
                  this._focusedVirtualIndex === t ? 0 : -1
                ),
                (this._physicalIndexForKey[o.__key__] = e),
                o._flushProperties && o._flushProperties(!0),
                i.removeAttribute("hidden");
            } else i.setAttribute("hidden", "");
          }, e);
        },
        _updateMetrics: function(e) {
          Object(T.b)();
          var t = 0,
            i = 0,
            n = this._physicalAverageCount,
            o = this._physicalAverage;
          this._iterateItems(function(e, n) {
            (i += this._physicalSizes[e]),
              (this._physicalSizes[e] = this._physicalItems[e].offsetHeight),
              (t += this._physicalSizes[e]),
              (this._physicalAverageCount += this._physicalSizes[e] ? 1 : 0);
          }, e),
            this.grid
              ? (this._updateGridMetrics(),
                (this._physicalSize =
                  Math.ceil(this._physicalCount / this._itemsPerRow) *
                  this._rowHeight))
              : ((i =
                  1 === this._itemsPerRow
                    ? i
                    : Math.ceil(this._physicalCount / this._itemsPerRow) *
                      this._rowHeight),
                (this._physicalSize = this._physicalSize + t - i),
                (this._itemsPerRow = 1)),
            this._physicalAverageCount !== n &&
              (this._physicalAverage = Math.round(
                (o * n + t) / this._physicalAverageCount
              ));
        },
        _updateGridMetrics: function() {
          (this._itemWidth =
            this._physicalCount > 0
              ? this._physicalItems[0].getBoundingClientRect().width
              : 200),
            (this._rowHeight =
              this._physicalCount > 0
                ? this._physicalItems[0].offsetHeight
                : 200),
            (this._itemsPerRow = this._itemWidth
              ? Math.floor(this._viewportWidth / this._itemWidth)
              : this._itemsPerRow);
        },
        _positionItems: function() {
          this._adjustScrollPosition();
          var e = this._physicalTop;
          if (this.grid) {
            var t = this._itemsPerRow * this._itemWidth,
              i = (this._viewportWidth - t) / 2;
            this._iterateItems(function(t, n) {
              var o = n % this._itemsPerRow,
                s = Math.floor(o * this._itemWidth + i);
              this._isRTL && (s *= -1),
                this.translate3d(s + "px", e + "px", 0, this._physicalItems[t]),
                this._shouldRenderNextRow(n) && (e += this._rowHeight);
            });
          } else
            this._iterateItems(function(t, i) {
              this.translate3d(0, e + "px", 0, this._physicalItems[t]),
                (e += this._physicalSizes[t]);
            });
        },
        _getPhysicalSizeIncrement: function(e) {
          return this.grid
            ? this._computeVidx(e) % this._itemsPerRow != this._itemsPerRow - 1
              ? 0
              : this._rowHeight
            : this._physicalSizes[e];
        },
        _shouldRenderNextRow: function(e) {
          return e % this._itemsPerRow == this._itemsPerRow - 1;
        },
        _adjustScrollPosition: function() {
          var e =
            0 === this._virtualStart
              ? this._physicalTop
              : Math.min(this._scrollPosition + this._physicalTop, 0);
          if (0 !== e) {
            this._physicalTop = this._physicalTop - e;
            var t = this._scrollTop;
            !ue && t > 0 && this._resetScrollPosition(t - e);
          }
        },
        _resetScrollPosition: function(e) {
          this.scrollTarget &&
            e >= 0 &&
            ((this._scrollTop = e), (this._scrollPosition = this._scrollTop));
        },
        _updateScrollerSize: function(e) {
          this.grid
            ? (this._estScrollHeight = this._virtualRowCount * this._rowHeight)
            : (this._estScrollHeight =
                this._physicalBottom +
                Math.max(
                  this._virtualCount - this._physicalCount - this._virtualStart,
                  0
                ) *
                  this._physicalAverage),
            ((e =
              (e =
                (e = e || 0 === this._scrollHeight) ||
                this._scrollPosition >=
                  this._estScrollHeight - this._physicalSize) ||
              (this.grid &&
                this.$.items.style.height < this._estScrollHeight)) ||
              Math.abs(this._estScrollHeight - this._scrollHeight) >=
                this._viewportHeight) &&
              ((this.$.items.style.height = this._estScrollHeight + "px"),
              (this._scrollHeight = this._estScrollHeight));
        },
        scrollToItem: function(e) {
          return this.scrollToIndex(this.items.indexOf(e));
        },
        scrollToIndex: function(e) {
          if (
            !("number" != typeof e || e < 0 || e > this.items.length - 1) &&
            (Object(T.b)(), 0 !== this._physicalCount)
          ) {
            (e = this._clamp(e, 0, this._virtualCount - 1)),
              (!this._isIndexRendered(e) || e >= this._maxVirtualStart) &&
                (this._virtualStart = this.grid
                  ? e - 2 * this._itemsPerRow
                  : e - 1),
              this._manageFocus(),
              this._assignModels(),
              this._updateMetrics(),
              (this._physicalTop =
                Math.floor(this._virtualStart / this._itemsPerRow) *
                this._physicalAverage);
            for (
              var t = this._physicalStart,
                i = this._virtualStart,
                n = 0,
                o = this._hiddenContentSize;
              i < e && n <= o;

            )
              (n += this._getPhysicalSizeIncrement(t)),
                (t = (t + 1) % this._physicalCount),
                i++;
            this._updateScrollerSize(!0),
              this._positionItems(),
              this._resetScrollPosition(
                this._physicalTop + this._scrollOffset + n
              ),
              this._increasePoolIfNeeded(0),
              (this._firstVisibleIndexVal = null),
              (this._lastVisibleIndexVal = null);
          }
        },
        _resetAverage: function() {
          (this._physicalAverage = 0), (this._physicalAverageCount = 0);
        },
        _resizeHandler: function() {
          this._debounce(
            "_render",
            function() {
              (this._firstVisibleIndexVal = null),
                (this._lastVisibleIndexVal = null),
                this._isVisible
                  ? (this.updateViewportBoundaries(),
                    this.toggleScrollListener(!0),
                    this._resetAverage(),
                    this._render())
                  : this.toggleScrollListener(!1);
            },
            V.a
          );
        },
        selectItem: function(e) {
          return this.selectIndex(this.items.indexOf(e));
        },
        selectIndex: function(e) {
          if (!(e < 0 || e >= this._virtualCount)) {
            if (
              (!this.multiSelection &&
                this.selectedItem &&
                this.clearSelection(),
              this._isIndexRendered(e))
            ) {
              var t = this.modelForElement(
                this._physicalItems[this._getPhysicalIndex(e)]
              );
              t && (t[this.selectedAs] = !0), this.updateSizeForIndex(e);
            }
            this.$.selector.selectIndex(e);
          }
        },
        deselectItem: function(e) {
          return this.deselectIndex(this.items.indexOf(e));
        },
        deselectIndex: function(e) {
          if (!(e < 0 || e >= this._virtualCount)) {
            if (this._isIndexRendered(e))
              (this.modelForElement(
                this._physicalItems[this._getPhysicalIndex(e)]
              )[this.selectedAs] = !1),
                this.updateSizeForIndex(e);
            this.$.selector.deselectIndex(e);
          }
        },
        toggleSelectionForItem: function(e) {
          return this.toggleSelectionForIndex(this.items.indexOf(e));
        },
        toggleSelectionForIndex: function(e) {
          (this.$.selector.isIndexSelected
          ? this.$.selector.isIndexSelected(e)
          : this.$.selector.isSelected(this.items[e]))
            ? this.deselectIndex(e)
            : this.selectIndex(e);
        },
        clearSelection: function() {
          this._iterateItems(function(e, t) {
            this.modelForElement(this._physicalItems[e])[this.selectedAs] = !1;
          }),
            this.$.selector.clearSelection();
        },
        _selectionEnabledChanged: function(e) {
          (e ? this.listen : this.unlisten).call(
            this,
            this,
            "tap",
            "_selectionHandler"
          );
        },
        _selectionHandler: function(e) {
          var t = this.modelForElement(e.target);
          if (t) {
            var i,
              n,
              o = Object(ne.a)(e).path[0],
              s = this._getActiveElement(),
              r = this._physicalItems[this._getPhysicalIndex(t[this.indexAs])];
            "input" !== o.localName &&
              "button" !== o.localName &&
              "select" !== o.localName &&
              ((i = t.tabIndex),
              (t.tabIndex = -100),
              (n = s ? s.tabIndex : -1),
              (t.tabIndex = i),
              (s && r !== s && r.contains(s) && -100 !== n) ||
                this.toggleSelectionForItem(t[this.as]));
          }
        },
        _multiSelectionChanged: function(e) {
          this.clearSelection(), (this.$.selector.multi = e);
        },
        updateSizeForItem: function(e) {
          return this.updateSizeForIndex(this.items.indexOf(e));
        },
        updateSizeForIndex: function(e) {
          return this._isIndexRendered(e)
            ? (this._updateMetrics([this._getPhysicalIndex(e)]),
              this._positionItems(),
              null)
            : null;
        },
        _manageFocus: function() {
          var e = this._focusedVirtualIndex;
          e >= 0 && e < this._virtualCount
            ? this._isIndexRendered(e)
              ? this._restoreFocusedItem()
              : this._createFocusBackfillItem()
            : this._virtualCount > 0 &&
              this._physicalCount > 0 &&
              ((this._focusedPhysicalIndex = this._physicalStart),
              (this._focusedVirtualIndex = this._virtualStart),
              (this._focusedItem = this._physicalItems[this._physicalStart]));
        },
        _convertIndexToCompleteRow: function(e) {
          return (
            (this._itemsPerRow = this._itemsPerRow || 1),
            this.grid ? Math.ceil(e / this._itemsPerRow) * this._itemsPerRow : e
          );
        },
        _isIndexRendered: function(e) {
          return e >= this._virtualStart && e <= this._virtualEnd;
        },
        _isIndexVisible: function(e) {
          return e >= this.firstVisibleIndex && e <= this.lastVisibleIndex;
        },
        _getPhysicalIndex: function(e) {
          return (
            (this._physicalStart + (e - this._virtualStart)) %
            this._physicalCount
          );
        },
        focusItem: function(e) {
          this._focusPhysicalItem(e);
        },
        _focusPhysicalItem: function(e) {
          if (!(e < 0 || e >= this._virtualCount)) {
            this._restoreFocusedItem(),
              this._isIndexRendered(e) || this.scrollToIndex(e);
            var t,
              i = this._physicalItems[this._getPhysicalIndex(e)],
              n = this.modelForElement(i);
            (n.tabIndex = -100),
              -100 === i.tabIndex && (t = i),
              t || (t = Object(ne.a)(i).querySelector('[tabindex="-100"]')),
              (n.tabIndex = 0),
              (this._focusedVirtualIndex = e),
              t && t.focus();
          }
        },
        _removeFocusedItem: function() {
          this._offscreenFocusedItem &&
            this._itemsParent.removeChild(this._offscreenFocusedItem),
            (this._offscreenFocusedItem = null),
            (this._focusBackfillItem = null),
            (this._focusedItem = null),
            (this._focusedVirtualIndex = -1),
            (this._focusedPhysicalIndex = -1);
        },
        _createFocusBackfillItem: function() {
          var e = this._focusedPhysicalIndex;
          if (!(this._offscreenFocusedItem || this._focusedVirtualIndex < 0)) {
            if (!this._focusBackfillItem) {
              var t = this.stamp(null);
              (this._focusBackfillItem = t.root.querySelector("*")),
                this._itemsParent.appendChild(t.root);
            }
            (this._offscreenFocusedItem = this._physicalItems[e]),
              (this.modelForElement(this._offscreenFocusedItem).tabIndex = 0),
              (this._physicalItems[e] = this._focusBackfillItem),
              (this._focusedPhysicalIndex = e),
              this.translate3d(0, "-10000px", 0, this._offscreenFocusedItem);
          }
        },
        _restoreFocusedItem: function() {
          if (this._offscreenFocusedItem && !(this._focusedVirtualIndex < 0)) {
            this._assignModels();
            var e = (this._focusedPhysicalIndex = this._getPhysicalIndex(
                this._focusedVirtualIndex
              )),
              t = this._physicalItems[e];
            if (t) {
              var i = this.modelForElement(t),
                n = this.modelForElement(this._offscreenFocusedItem);
              i[this.as] === n[this.as]
                ? ((this._focusBackfillItem = t),
                  (i.tabIndex = -1),
                  (this._physicalItems[e] = this._offscreenFocusedItem),
                  this.translate3d(0, "-10000px", 0, this._focusBackfillItem))
                : (this._removeFocusedItem(), (this._focusBackfillItem = null)),
                (this._offscreenFocusedItem = null);
            }
          }
        },
        _didFocus: function(e) {
          var t = this.modelForElement(e.target),
            i = this.modelForElement(this._focusedItem),
            n = null !== this._offscreenFocusedItem,
            o = this._focusedVirtualIndex;
          t &&
            (i === t
              ? this._isIndexVisible(o) || this.scrollToIndex(o)
              : (this._restoreFocusedItem(),
                i && (i.tabIndex = -1),
                (t.tabIndex = 0),
                (o = t[this.indexAs]),
                (this._focusedVirtualIndex = o),
                (this._focusedPhysicalIndex = this._getPhysicalIndex(o)),
                (this._focusedItem = this._physicalItems[
                  this._focusedPhysicalIndex
                ]),
                n && !this._offscreenFocusedItem && this._update()));
        },
        _keydownHandler: function(e) {
          switch (e.keyCode) {
            case 40:
              this._focusedVirtualIndex < this._virtualCount - 1 &&
                e.preventDefault(),
                this._focusPhysicalItem(
                  this._focusedVirtualIndex +
                    (this.grid ? this._itemsPerRow : 1)
                );
              break;
            case 39:
              this.grid &&
                this._focusPhysicalItem(
                  this._focusedVirtualIndex + (this._isRTL ? -1 : 1)
                );
              break;
            case 38:
              this._focusedVirtualIndex > 0 && e.preventDefault(),
                this._focusPhysicalItem(
                  this._focusedVirtualIndex -
                    (this.grid ? this._itemsPerRow : 1)
                );
              break;
            case 37:
              this.grid &&
                this._focusPhysicalItem(
                  this._focusedVirtualIndex + (this._isRTL ? 1 : -1)
                );
              break;
            case 13:
              this._focusPhysicalItem(this._focusedVirtualIndex),
                this.selectionEnabled && this._selectionHandler(e);
          }
        },
        _clamp: function(e, t, i) {
          return Math.min(i, Math.max(t, e));
        },
        _debounce: function(e, t, i) {
          (this._debouncers = this._debouncers || {}),
            (this._debouncers[e] = se.a.debounce(
              this._debouncers[e],
              i,
              t.bind(this)
            )),
            Object(T.a)(this._debouncers[e]);
        },
        _forwardProperty: function(e, t, i) {
          e._setPendingProperty(t, i);
        },
        _forwardHostPropV2: function(e, t) {
          (this._physicalItems || [])
            .concat([this._offscreenFocusedItem, this._focusBackfillItem])
            .forEach(function(i) {
              i && this.modelForElement(i).forwardHostProp(e, t);
            }, this);
        },
        _notifyInstancePropV2: function(e, t, i) {
          if (Object(re.e)(this.as, t)) {
            var n = e[this.indexAs];
            t == this.as && (this.items[n] = i),
              this.notifyPath(Object(re.i)(this.as, "items." + n, t), i);
          }
        },
        _getStampedChildren: function() {
          return this._physicalItems;
        },
        _forwardInstancePath: function(e, t, i) {
          0 === t.indexOf(this.as + ".") &&
            this.notifyPath(
              "items." + e.__key__ + "." + t.slice(this.as.length + 1),
              i
            );
        },
        _forwardParentPath: function(e, t) {
          (this._physicalItems || [])
            .concat([this._offscreenFocusedItem, this._focusBackfillItem])
            .forEach(function(i) {
              i && this.modelForElement(i).notifyPath(e, t, !0);
            }, this);
        },
        _forwardParentProp: function(e, t) {
          (this._physicalItems || [])
            .concat([this._offscreenFocusedItem, this._focusBackfillItem])
            .forEach(function(i) {
              i && (this.modelForElement(i)[e] = t);
            }, this);
        },
        _getActiveElement: function() {
          var e = this._itemsParent.node.domHost;
          return Object(ne.a)(e ? e.root : document).activeElement;
        },
      });
      var ve = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            fe(this, _e(t).apply(this, arguments))
          );
        }
        var i, o, s;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && me(e, t);
          })(t, Object(h["a"])(c["a"])),
          (i = t),
          (s = [
            {
              key: "template",
              get: function() {
                return Object(n.a)(he());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-combo-box-item";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  index: Number,
                  item: Object,
                  label: String,
                  selected: {
                    type: Boolean,
                    value: !1,
                    reflectToAttribute: !0,
                  },
                  focused: { type: Boolean, value: !1, reflectToAttribute: !0 },
                  _itemTemplateInstance: Object,
                  renderer: Function,
                  _oldRenderer: Function,
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return [
                  "_rendererOrItemChanged(renderer, index, item.*)",
                  "_updateLabel(label, _itemTemplateInstance)",
                  '_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)',
                  '_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)',
                  '_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)',
                  '_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)',
                ];
              },
            },
          ]),
          (o = [
            {
              key: "connectedCallback",
              value: function() {
                if (
                  (pe(_e(t.prototype), "connectedCallback", this).call(this),
                  !this._itemTemplateInstance)
                ) {
                  var e = this.getRootNode()
                    .host.getRootNode()
                    .host.__dataHost.getRootNode().host;
                  (this._comboBox = e.getRootNode().host),
                    this._comboBox._ensureTemplatized(),
                    this._comboBox._TemplateClass &&
                      ((this._itemTemplateInstance = new this._comboBox._TemplateClass(
                        {}
                      )),
                      (this.$.content.textContent = ""),
                      this.$.content.appendChild(
                        this._itemTemplateInstance.root
                      ));
                }
              },
            },
            {
              key: "_render",
              value: function() {
                if (this.renderer) {
                  var e = { index: this.index, item: this.item };
                  this.renderer(this.$.content, this._comboBox, e);
                }
              },
            },
            {
              key: "_rendererOrItemChanged",
              value: function(e, t, i) {
                void 0 !== i &&
                  void 0 !== t &&
                  (this._oldRenderer !== e && (this.$.content.innerHTML = ""),
                  e && ((this._oldRenderer = e), this._render()));
              },
            },
            {
              key: "_updateLabel",
              value: function(e, t) {
                void 0 === t &&
                  this.$.content &&
                  !this.renderer &&
                  (this.$.content.textContent = e);
              },
            },
            {
              key: "_updateTemplateInstanceVariable",
              value: function(e, t, i) {
                void 0 !== e && void 0 !== t && void 0 !== i && (i[e] = t);
              },
            },
          ]) && de(i.prototype, o),
          s && de(i, s),
          t
        );
      })();
      customElements.define(ve.is, ve);
      var ye = i(292),
        be = i(70);
      function ge() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > #overlay {\n        display: none;\n      }\n    </style>\n    <vaadin-combo-box-overlay id="overlay" hidden$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme$="[[theme]]">\n      <slot></slot>\n    </vaadin-combo-box-overlay>\n',
          ],
          [
            '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > #overlay {\n        display: none;\n      }\n    </style>\n    <vaadin-combo-box-overlay id="overlay" hidden\\$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme\\$="[[theme]]">\n      <slot></slot>\n    </vaadin-combo-box-overlay>\n',
          ]
        );
        return (
          (ge = function() {
            return e;
          }),
          e
        );
      }
      function Ie(e) {
        return (Ie =
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
      function we(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function xe(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function Pe(e, t, i) {
        return t && xe(e.prototype, t), i && xe(e, i), e;
      }
      function Se(e, t) {
        return !t || ("object" !== Ie(t) && "function" != typeof t) ? ke(e) : t;
      }
      function ke(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Oe(e, t, i) {
        return (Oe =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, i) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ce(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var o = Object.getOwnPropertyDescriptor(n, t);
                  return o.get ? o.get.call(i) : o.value;
                }
              })(e, t, i || e);
      }
      function Ce(e) {
        return (Ce = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Ee(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Ve(e, t);
      }
      function Ve(e, t) {
        return (Ve =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Te = (function(e) {
        function t() {
          return we(this, t), Se(this, Ce(t).apply(this, arguments));
        }
        return (
          Ee(t, r["a"]),
          Pe(
            t,
            [
              {
                key: "ready",
                value: function() {
                  Oe(Ce(t.prototype), "ready", this).call(this);
                  var e = document.createElement("div");
                  e.setAttribute("part", "loader");
                  var i = this.shadowRoot.querySelector(['[part~="content"]']);
                  i.parentNode.insertBefore(e, i);
                },
              },
            ],
            [
              {
                key: "is",
                get: function() {
                  return "vaadin-combo-box-overlay";
                },
              },
            ]
          ),
          t
        );
      })();
      customElements.define(Te.is, Te);
      var je = (function(e) {
        function t() {
          var e;
          return (
            we(this, t),
            ((e = Se(
              this,
              Ce(t).call(this)
            ))._boundSetPosition = e._setPosition.bind(ke(e))),
            (e._boundOutsideClickListener = e._outsideClickListener.bind(
              ke(e)
            )),
            e
          );
        }
        return (
          Ee(t, Object(ye["a"])(Object(be["b"])(Z["a"], c["a"]))),
          Pe(t, null, [
            {
              key: "template",
              get: function() {
                return Object(n.a)(ge());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-combo-box-dropdown";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  opened: { type: Boolean, observer: "_openedChanged" },
                  template: { type: Object, notify: !0 },
                  positionTarget: { type: Object },
                  alignedAbove: { type: Boolean, value: !1 },
                  theme: String,
                };
              },
            },
          ]),
          Pe(t, [
            {
              key: "connectedCallback",
              value: function() {
                Oe(Ce(t.prototype), "connectedCallback", this).call(this),
                  this.addEventListener("iron-resize", this._boundSetPosition);
              },
            },
            {
              key: "ready",
              value: function() {
                Oe(Ce(t.prototype), "ready", this).call(this),
                  this.$.overlay.addEventListener(
                    "vaadin-overlay-outside-click",
                    function(e) {
                      e.preventDefault();
                    }
                  );
              },
            },
            {
              key: "disconnectedCallback",
              value: function() {
                Oe(Ce(t.prototype), "disconnectedCallback", this).call(this),
                  this.removeEventListener(
                    "iron-resize",
                    this._boundSetPosition
                  ),
                  (this.opened = !1);
              },
            },
            {
              key: "notifyResize",
              value: function() {
                Oe(Ce(t.prototype), "notifyResize", this).call(this),
                  this.positionTarget &&
                    this.opened &&
                    (this._setPosition(),
                    requestAnimationFrame(this._setPosition.bind(this)));
              },
            },
            {
              key: "_openedChanged",
              value: function(e, t) {
                !!e != !!t &&
                  (e
                    ? ((this.$.overlay.style.position = this._isPositionFixed(
                        this.positionTarget
                      )
                        ? "fixed"
                        : "absolute"),
                      this._setPosition(),
                      window.addEventListener(
                        "scroll",
                        this._boundSetPosition,
                        !0
                      ),
                      document.addEventListener(
                        "click",
                        this._boundOutsideClickListener,
                        !0
                      ),
                      this.dispatchEvent(
                        new CustomEvent("vaadin-combo-box-dropdown-opened", {
                          bubbles: !0,
                          composed: !0,
                        })
                      ))
                    : (window.removeEventListener(
                        "scroll",
                        this._boundSetPosition,
                        !0
                      ),
                      document.removeEventListener(
                        "click",
                        this._boundOutsideClickListener,
                        !0
                      ),
                      this.dispatchEvent(
                        new CustomEvent("vaadin-combo-box-dropdown-closed", {
                          bubbles: !0,
                          composed: !0,
                        })
                      )));
              },
            },
            {
              key: "_outsideClickListener",
              value: function(e) {
                var t = e.composedPath();
                t.indexOf(this.positionTarget) < 0 &&
                  t.indexOf(this.$.overlay) < 0 &&
                  (this.opened = !1);
              },
            },
            {
              key: "_isPositionFixed",
              value: function(e) {
                var t = this._getOffsetParent(e);
                return (
                  "fixed" === window.getComputedStyle(e).position ||
                  (t && this._isPositionFixed(t))
                );
              },
            },
            {
              key: "_getOffsetParent",
              value: function(e) {
                if (e.assignedSlot) return e.assignedSlot.parentElement;
                if (e.parentElement) return e.offsetParent;
                var t = e.parentNode;
                return t && 11 === t.nodeType && t.host ? t.host : void 0;
              },
            },
            {
              key: "_verticalOffset",
              value: function(e, t) {
                return this.alignedAbove ? -e.height : t.height;
              },
            },
            {
              key: "_shouldAlignAbove",
              value: function(e) {
                return (
                  (window.innerHeight -
                    e.bottom -
                    Math.min(document.body.scrollTop, 0)) /
                    window.innerHeight <
                  0.3
                );
              },
            },
            {
              key: "_setPosition",
              value: function(e) {
                if (e && e.target) {
                  var t = e.target === document ? document.body : e.target,
                    i = this.$.overlay.parentElement;
                  if (
                    (!t.contains(this.$.overlay) &&
                      !t.contains(this.positionTarget)) ||
                    i !== document.body
                  )
                    return;
                }
                var n = this.positionTarget.getBoundingClientRect();
                this.alignedAbove = this._shouldAlignAbove(n);
                var o = this.$.overlay.getBoundingClientRect();
                (this._translateX = n.left - o.left + (this._translateX || 0)),
                  (this._translateY =
                    n.top -
                    o.top +
                    (this._translateY || 0) +
                    this._verticalOffset(o, n));
                var s = window.devicePixelRatio || 1;
                (this._translateX = Math.round(this._translateX * s) / s),
                  (this._translateY = Math.round(this._translateY * s) / s),
                  (this.$.overlay.style.transform = "translate3d("
                    .concat(this._translateX, "px, ")
                    .concat(this._translateY, "px, 0)")),
                  (this.$.overlay.style.width =
                    this.positionTarget.clientWidth + "px"),
                  (this.$.overlay.style.justifyContent = this.alignedAbove
                    ? "flex-end"
                    : "flex-start"),
                  this.dispatchEvent(new CustomEvent("position-changed"));
              },
            },
          ]),
          t
        );
      })();
      function Re(e) {
        return (Re =
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
        })(
          [
            '\n    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">\n      <template>\n        <style>\n          #scroller {\n            overflow: auto;\n\n            /* Fixes item background from getting on top of scrollbars on Safari */\n            transform: translate3d(0, 0, 0);\n\n            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */\n            -webkit-overflow-scrolling: touch;\n\n            /* Fixes scrollbar disappearing when \'Show scroll bars: Always\' enabled in Safari */\n            box-shadow: 0 0 0 white;\n          }\n        </style>\n        <div id="scroller" on-click="_stopPropagation">\n          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">\n            <template>\n              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role$="[[_getAriaRole(index)]]" aria-selected$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme$="[[theme]]">\n              </vaadin-combo-box-item>\n            </template>\n          </iron-list>\n        </div>\n      </template>\n    </vaadin-combo-box-dropdown>\n',
          ],
          [
            '\n    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">\n      <template>\n        <style>\n          #scroller {\n            overflow: auto;\n\n            /* Fixes item background from getting on top of scrollbars on Safari */\n            transform: translate3d(0, 0, 0);\n\n            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */\n            -webkit-overflow-scrolling: touch;\n\n            /* Fixes scrollbar disappearing when \'Show scroll bars: Always\' enabled in Safari */\n            box-shadow: 0 0 0 white;\n          }\n        </style>\n        <div id="scroller" on-click="_stopPropagation">\n          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">\n            <template>\n              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role\\$="[[_getAriaRole(index)]]" aria-selected\\$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme\\$="[[theme]]">\n              </vaadin-combo-box-item>\n            </template>\n          </iron-list>\n        </div>\n      </template>\n    </vaadin-combo-box-dropdown>\n',
          ]
        );
        return (
          (Ae = function() {
            return e;
          }),
          e
        );
      }
      function ze(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Fe(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function $e(e, t) {
        return !t || ("object" !== Re(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Le(e) {
        return (Le = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Be(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && He(e, t);
      }
      function He(e, t) {
        return (He =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      customElements.define(je.is, je);
      var Me = (function() {
          try {
            return document.createEvent("TouchEvent"), !0;
          } catch (e) {
            return !1;
          }
        })(),
        De = (function(e) {
          function t() {
            return ze(this, t), $e(this, Le(t).apply(this, arguments));
          }
          var i, o, s;
          return (
            Be(t, e),
            (i = t),
            (s = [
              {
                key: "template",
                get: function() {
                  return Object(n.a)(Ae());
                },
              },
              {
                key: "is",
                get: function() {
                  return "vaadin-combo-box-dropdown-wrapper";
                },
              },
              {
                key: "properties",
                get: function() {
                  return {
                    touchDevice: { type: Boolean, value: Me },
                    opened: Boolean,
                    positionTarget: { type: Object },
                    renderer: Function,
                    loading: {
                      type: Boolean,
                      value: !1,
                      reflectToAttribute: !0,
                      observer: "_setOverlayHeight",
                    },
                    theme: String,
                    _selectedItem: { type: Object },
                    _items: { type: Object },
                    _focusedIndex: {
                      type: Number,
                      value: -1,
                      observer: "_focusedIndexChanged",
                    },
                    _focusedItem: {
                      type: String,
                      computed: "_getFocusedItem(_focusedIndex)",
                    },
                    _itemLabelPath: { type: String, value: "label" },
                    _itemValuePath: { type: String, value: "value" },
                    _selector: Object,
                    _itemIdPath: String,
                  };
                },
              },
              {
                key: "observers",
                get: function() {
                  return [
                    "_selectorChanged(_selector)",
                    "_loadingChanged(loading)",
                    "_openedChanged(opened, _items, loading)",
                  ];
                },
              },
            ]),
            (o = [
              {
                key: "_fireTouchAction",
                value: function(e) {
                  this.dispatchEvent(
                    new CustomEvent("vaadin-overlay-touch-action", {
                      detail: { sourceEvent: e },
                    })
                  );
                },
              },
              {
                key: "_getItems",
                value: function(e, t) {
                  return e ? t : [];
                },
              },
              {
                key: "_openedChanged",
                value: function(e, t, i) {
                  if (this.$.dropdown.hasAttribute("disable-upgrade")) {
                    if (!e) return;
                    this._initDropdown();
                  }
                  this.$.dropdown.opened = !(
                    !e || !(i || this.$.dropdown.opened || (t && t.length))
                  );
                },
              },
              {
                key: "_initDropdown",
                value: function() {
                  var e = this;
                  this.$.dropdown.removeAttribute("disable-upgrade"),
                    this._templateChanged(),
                    this._loadingChanged(this.loading),
                    this.$.dropdown.$.overlay.addEventListener(
                      "touchend",
                      function(t) {
                        return e._fireTouchAction(t);
                      }
                    ),
                    this.$.dropdown.$.overlay.addEventListener(
                      "touchmove",
                      function(t) {
                        return e._fireTouchAction(t);
                      }
                    ),
                    this.$.dropdown.$.overlay.addEventListener(
                      "mousedown",
                      function(e) {
                        return e.preventDefault();
                      }
                    ),
                    /Trident/.test(navigator.userAgent) &&
                      this._scroller.setAttribute("unselectable", "on");
                },
              },
              {
                key: "_templateChanged",
                value: function(e) {
                  this.$.dropdown.hasAttribute("disable-upgrade") ||
                    ((this._selector = this.$.dropdown.$.overlay.content.querySelector(
                      "#selector"
                    )),
                    (this._scroller = this.$.dropdown.$.overlay.content.querySelector(
                      "#scroller"
                    )));
                },
              },
              {
                key: "_loadingChanged",
                value: function(e) {
                  this.$.dropdown.hasAttribute("disable-upgrade") ||
                    (e
                      ? this.$.dropdown.$.overlay.setAttribute("loading", "")
                      : this.$.dropdown.$.overlay.removeAttribute("loading"));
                },
              },
              {
                key: "_selectorChanged",
                value: function(e) {
                  this._patchWheelOverScrolling();
                },
              },
              {
                key: "_setOverlayHeight",
                value: function() {
                  if (this.opened && this.positionTarget && this._selector) {
                    var e = this.positionTarget.getBoundingClientRect();
                    this._scroller.style.maxHeight =
                      (window.ShadyCSS
                        ? window.ShadyCSS.getComputedStyleValue(
                            this,
                            "--vaadin-combo-box-overlay-max-height"
                          )
                        : getComputedStyle(this).getPropertyValue(
                            "--vaadin-combo-box-overlay-max-height"
                          )) || "65vh";
                    var t = this._maxOverlayHeight(e);
                    (this.$.dropdown.$.overlay.style.maxHeight = t),
                      (this._selector.style.maxHeight = t),
                      this.updateViewportBoundaries();
                  }
                },
              },
              {
                key: "_maxOverlayHeight",
                value: function(e) {
                  var t = Math.min(
                    window.innerHeight,
                    document.body.scrollHeight - document.body.scrollTop
                  );
                  return this.$.dropdown.alignedAbove
                    ? Math.max(
                        e.top - 8 + Math.min(document.body.scrollTop, 0),
                        116
                      ) + "px"
                    : Math.max(t - e.bottom - 8, 116) + "px";
                },
              },
              {
                key: "_getFocusedItem",
                value: function(e) {
                  if (e >= 0) return this._items[e];
                },
              },
              {
                key: "_isItemSelected",
                value: function(e, t, i) {
                  return (
                    !(e instanceof $) &&
                    (i && void 0 !== e && void 0 !== t
                      ? this.get(i, e) === this.get(i, t)
                      : e === t)
                  );
                },
              },
              {
                key: "_onItemClick",
                value: function(e) {
                  e.detail &&
                    e.detail.sourceEvent &&
                    e.detail.sourceEvent.stopPropagation &&
                    this._stopPropagation(e.detail.sourceEvent),
                    this.dispatchEvent(
                      new CustomEvent("selection-changed", {
                        detail: { item: e.model.item },
                      })
                    );
                },
              },
              {
                key: "indexOfLabel",
                value: function(e) {
                  if (this._items && e)
                    for (var t = 0; t < this._items.length; t++)
                      if (
                        this.getItemLabel(this._items[t])
                          .toString()
                          .toLowerCase() === e.toString().toLowerCase()
                      )
                        return t;
                  return -1;
                },
              },
              {
                key: "__requestItemByIndex",
                value: function(e, t) {
                  return (
                    e instanceof $ &&
                      void 0 !== t &&
                      this.dispatchEvent(
                        new CustomEvent("index-requested", {
                          detail: { index: t },
                        })
                      ),
                    t
                  );
                },
              },
              {
                key: "getItemLabel",
                value: function(e, t) {
                  t = t || this._itemLabelPath;
                  var i = e && t ? this.get(t, e) : void 0;
                  return null == i && (i = e ? e.toString() : ""), i;
                },
              },
              {
                key: "_isItemFocused",
                value: function(e, t) {
                  return e == t;
                },
              },
              {
                key: "_getAriaSelected",
                value: function(e, t) {
                  return this._isItemFocused(e, t).toString();
                },
              },
              {
                key: "_getAriaRole",
                value: function(e) {
                  return void 0 !== e && "option";
                },
              },
              {
                key: "_focusedIndexChanged",
                value: function(e) {
                  e >= 0 && this._scrollIntoView(e);
                },
              },
              {
                key: "_scrollIntoView",
                value: function(e) {
                  var t = this._visibleItemsCount();
                  if (void 0 !== t) {
                    var i = e;
                    e > this._selector.lastVisibleIndex - 1
                      ? (i = e - t + 1)
                      : e > this._selector.firstVisibleIndex &&
                        (i = this._selector.firstVisibleIndex),
                      this._selector.scrollToIndex(Math.max(0, i));
                    var n = this._selector._getPhysicalIndex(e),
                      o = this._selector._physicalItems[n];
                    if (o) {
                      var s = o.getBoundingClientRect(),
                        r = this._scroller.getBoundingClientRect(),
                        a =
                          s.bottom -
                          r.bottom +
                          this._viewportTotalPaddingBottom;
                      a > 0 && (this._scroller.scrollTop += a);
                    }
                  }
                },
              },
              {
                key: "ensureItemsRendered",
                value: function() {
                  this._selector._render();
                },
              },
              {
                key: "adjustScrollPosition",
                value: function() {
                  this.opened &&
                    this._items &&
                    this._scrollIntoView(this._focusedIndex);
                },
              },
              {
                key: "_patchWheelOverScrolling",
                value: function() {
                  var e = this._selector;
                  e.addEventListener("wheel", function(t) {
                    var i = e._scroller || e.scrollTarget,
                      n = 0 === i.scrollTop,
                      o = i.scrollHeight - i.scrollTop - i.clientHeight <= 1;
                    n && t.deltaY < 0
                      ? t.preventDefault()
                      : o && t.deltaY > 0 && t.preventDefault();
                  });
                },
              },
              {
                key: "updateViewportBoundaries",
                value: function() {
                  (this._cachedViewportTotalPaddingBottom = void 0),
                    this._selector.updateViewportBoundaries();
                },
              },
              {
                key: "_visibleItemsCount",
                value: function() {
                  if (this._selector)
                    return (
                      this._selector.flushDebouncer("_debounceTemplate"),
                      this._selector.scrollToIndex(
                        this._selector.firstVisibleIndex
                      ),
                      this.updateViewportBoundaries(),
                      this._selector.lastVisibleIndex -
                        this._selector.firstVisibleIndex +
                        1
                    );
                },
              },
              {
                key: "_selectItem",
                value: function(e) {
                  (e = "number" == typeof e ? this._items[e] : e),
                    this._selector.selectedItem !== e &&
                      this._selector.selectItem(e);
                },
              },
              {
                key: "_preventDefault",
                value: function(e) {
                  e.cancelable && e.preventDefault();
                },
              },
              {
                key: "_stopPropagation",
                value: function(e) {
                  e.stopPropagation();
                },
              },
              {
                key: "_hidden",
                value: function(e) {
                  return !(this.loading || (this._items && this._items.length));
                },
              },
              {
                key: "_viewportTotalPaddingBottom",
                get: function() {
                  if (void 0 === this._cachedViewportTotalPaddingBottom) {
                    var e = window.getComputedStyle(this._selector.$.items);
                    this._cachedViewportTotalPaddingBottom = [
                      e.paddingBottom,
                      e.borderBottomWidth,
                    ]
                      .map(function(e) {
                        return parseInt(e, 10);
                      })
                      .reduce(function(e, t) {
                        return e + t;
                      });
                  }
                  return this._cachedViewportTotalPaddingBottom;
                },
              },
            ]) && Fe(i.prototype, o),
            s && Fe(i, s),
            t
          );
        })(
          (function(e) {
            function t() {
              return ze(this, t), $e(this, Le(t).apply(this, arguments));
            }
            return Be(t, c["a"]), t;
          })()
        );
      customElements.define(De.is, De);
      var Ne = i(22);
      function qe(e) {
        return (qe =
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
      function We() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <slot></slot>\n\n    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" position-target="[[inputElement]]" renderer="[[renderer]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">\n    </vaadin-combo-box-dropdown-wrapper>\n',
        ]);
        return (
          (We = function() {
            return e;
          }),
          e
        );
      }
      function Ke(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ye(e, t, i) {
        return (Ye =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, i) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ue(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var o = Object.getOwnPropertyDescriptor(n, t);
                  return o.get ? o.get.call(i) : o.value;
                }
              })(e, t, i || e);
      }
      function Ue(e) {
        return (Ue = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Xe(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function Ge(e, t, i) {
        return t && Xe(e.prototype, t), i && Xe(e, i), e;
      }
      function Je(e, t) {
        return (Je =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Qe = (function(e) {
        function t() {
          var e, i, n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (i = this),
            ((e =
              !(n = Ue(t).call(this)) ||
              ("object" !== qe(n) && "function" != typeof n)
                ? Ke(i)
                : n)._boundInputValueChanged = e._inputValueChanged.bind(
              Ke(e)
            )),
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
              t && Je(e, t);
          })(t, Object(E["a"])(Object(h["a"])(Q(q(c["a"]))))),
          Ge(t, null, [
            {
              key: "template",
              get: function() {
                return Object(n.a)(We());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-combo-box-light";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  attrForValue: { type: String, value: "value" },
                  inputElement: { type: Element, readOnly: !0 },
                };
              },
            },
          ]),
          Ge(t, [
            {
              key: "ready",
              value: function() {
                Ye(Ue(t.prototype), "ready", this).call(this),
                  (this._toggleElement = this.querySelector(".toggle-button")),
                  (this._clearElement = this.querySelector(".clear-button"));
              },
            },
            {
              key: "connectedCallback",
              value: function() {
                Ye(Ue(t.prototype), "connectedCallback", this).call(this);
                this._setInputElement(
                  this.querySelector(
                    "vaadin-text-field,iron-input,paper-input,.paper-input-input,.input"
                  )
                ),
                  this._revertInputValue(),
                  this.inputElement.addEventListener(
                    "input",
                    this._boundInputValueChanged
                  ),
                  this._preventInputBlur();
              },
            },
            {
              key: "disconnectedCallback",
              value: function() {
                Ye(Ue(t.prototype), "disconnectedCallback", this).call(this),
                  this.inputElement.removeEventListener(
                    "input",
                    this._boundInputValueChanged
                  ),
                  this._restoreInputBlur();
              },
            },
            {
              key: "focused",
              get: function() {
                return this.getRootNode().activeElement === this.inputElement;
              },
            },
            {
              key: "_propertyForValue",
              get: function() {
                return Object(Ne.b)(this.attrForValue);
              },
            },
            {
              key: "_inputElementValue",
              get: function() {
                return (
                  this.inputElement && this.inputElement[this._propertyForValue]
                );
              },
              set: function(e) {
                this.inputElement &&
                  (this.inputElement[this._propertyForValue] = e);
              },
            },
          ]),
          t
        );
      })();
      customElements.define(Qe.is, Qe);
    },
  },
]);
//# sourceMappingURL=chunk.f5b8893ab251dac46574.js.map
