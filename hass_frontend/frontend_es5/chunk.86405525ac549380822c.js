/*! For license information please see chunk.86405525ac549380822c.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    171: function(e, n, t) {
      "use strict";
      var a = t(8);
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
      function r(e, n) {
        for (var t = 0; t < n.length; t++) {
          var a = n[t];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function o(e, n) {
        return !n || ("object" !== i(n) && "function" != typeof n)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, n) {
        return (p =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      n.a = Object(a.a)(function(e) {
        return (function(n) {
          function t() {
            return (
              (function(e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              o(this, l(t).apply(this, arguments))
            );
          }
          var a, i, s;
          return (
            (function(e, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(n && n.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                n && p(e, n);
            })(t, e),
            (a = t),
            (s = [
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
            (i = [
              {
                key: "__computeLocalize",
                value: function(e) {
                  return e;
                },
              },
            ]) && r(a.prototype, i),
            s && r(a, s),
            t
          );
        })();
      });
    },
    204: function(e, n, t) {
      "use strict";
      t(4), t(83);
      var a = t(3);
      function i() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n<dom-module id="paper-material-styles">\n  <template>\n    <style>\n      html {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      .paper-material {\n        @apply --paper-material;\n      }\n      .paper-material[elevation="1"] {\n        @apply --paper-material-elevation-1;\n      }\n      .paper-material[elevation="2"] {\n        @apply --paper-material-elevation-2;\n      }\n      .paper-material[elevation="3"] {\n        @apply --paper-material-elevation-3;\n      }\n      .paper-material[elevation="4"] {\n        @apply --paper-material-elevation-4;\n      }\n      .paper-material[elevation="5"] {\n        @apply --paper-material-elevation-5;\n      }\n\n      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */\n      :host {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      :host(.paper-material) {\n        @apply --paper-material;\n      }\n      :host(.paper-material[elevation="1"]) {\n        @apply --paper-material-elevation-1;\n      }\n      :host(.paper-material[elevation="2"]) {\n        @apply --paper-material-elevation-2;\n      }\n      :host(.paper-material[elevation="3"]) {\n        @apply --paper-material-elevation-3;\n      }\n      :host(.paper-material[elevation="4"]) {\n        @apply --paper-material-elevation-4;\n      }\n      :host(.paper-material[elevation="5"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      var r = Object(a.a)(i());
      r.setAttribute("style", "display: none;"),
        document.head.appendChild(r.content);
    },
    248: function(e, n, t) {
      "use strict";
      t(4);
      var a = t(5),
        i = t(3),
        r = t(18);
      function o() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #baseURIAnchor {\n        display: none;\n      }\n\n      #sizedImgDiv {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        display: none;\n      }\n\n      #img {\n        display: block;\n        width: var(--iron-image-width, auto);\n        height: var(--iron-image-height, auto);\n      }\n\n      :host([sizing]) #sizedImgDiv {\n        display: block;\n      }\n\n      :host([sizing]) #img {\n        display: none;\n      }\n\n      #placeholder {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        background-color: inherit;\n        opacity: 1;\n\n        @apply --iron-image-placeholder;\n      }\n\n      #placeholder.faded-out {\n        transition: opacity 0.5s linear;\n        opacity: 0;\n      }\n    </style>\n\n    <a id="baseURIAnchor" href="#"></a>\n    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>\n    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">\n    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      Object(a.a)({
        _template: Object(i.a)(o()),
        is: "iron-image",
        properties: {
          src: { type: String, value: "" },
          alt: { type: String, value: null },
          crossorigin: { type: String, value: null },
          preventLoad: { type: Boolean, value: !1 },
          sizing: { type: String, value: null, reflectToAttribute: !0 },
          position: { type: String, value: "center" },
          preload: { type: Boolean, value: !1 },
          placeholder: {
            type: String,
            value: null,
            observer: "_placeholderChanged",
          },
          fade: { type: Boolean, value: !1 },
          loaded: { notify: !0, readOnly: !0, type: Boolean, value: !1 },
          loading: { notify: !0, readOnly: !0, type: Boolean, value: !1 },
          error: { notify: !0, readOnly: !0, type: Boolean, value: !1 },
          width: { observer: "_widthChanged", type: Number, value: null },
          height: { observer: "_heightChanged", type: Number, value: null },
        },
        observers: [
          "_transformChanged(sizing, position)",
          "_loadStateObserver(src, preventLoad)",
        ],
        created: function() {
          this._resolvedSrc = "";
        },
        _imgOnLoad: function() {
          this.$.img.src === this._resolveSrc(this.src) &&
            (this._setLoading(!1), this._setLoaded(!0), this._setError(!1));
        },
        _imgOnError: function() {
          this.$.img.src === this._resolveSrc(this.src) &&
            (this.$.img.removeAttribute("src"),
            (this.$.sizedImgDiv.style.backgroundImage = ""),
            this._setLoading(!1),
            this._setLoaded(!1),
            this._setError(!0));
        },
        _computePlaceholderHidden: function() {
          return !this.preload || (!this.fade && !this.loading && this.loaded);
        },
        _computePlaceholderClassName: function() {
          return this.preload && this.fade && !this.loading && this.loaded
            ? "faded-out"
            : "";
        },
        _computeImgDivHidden: function() {
          return !this.sizing;
        },
        _computeImgDivARIAHidden: function() {
          return "" === this.alt ? "true" : void 0;
        },
        _computeImgDivARIALabel: function() {
          return null !== this.alt
            ? this.alt
            : "" === this.src
            ? ""
            : this._resolveSrc(this.src)
                .replace(/[?|#].*/g, "")
                .split("/")
                .pop();
        },
        _computeImgHidden: function() {
          return !!this.sizing;
        },
        _widthChanged: function() {
          this.style.width = isNaN(this.width) ? this.width : this.width + "px";
        },
        _heightChanged: function() {
          this.style.height = isNaN(this.height)
            ? this.height
            : this.height + "px";
        },
        _loadStateObserver: function(e, n) {
          var t = this._resolveSrc(e);
          t !== this._resolvedSrc &&
            ((this._resolvedSrc = ""),
            this.$.img.removeAttribute("src"),
            (this.$.sizedImgDiv.style.backgroundImage = ""),
            "" === e || n
              ? (this._setLoading(!1), this._setLoaded(!1), this._setError(!1))
              : ((this._resolvedSrc = t),
                (this.$.img.src = this._resolvedSrc),
                (this.$.sizedImgDiv.style.backgroundImage =
                  'url("' + this._resolvedSrc + '")'),
                this._setLoading(!0),
                this._setLoaded(!1),
                this._setError(!1)));
        },
        _placeholderChanged: function() {
          this.$.placeholder.style.backgroundImage = this.placeholder
            ? 'url("' + this.placeholder + '")'
            : "";
        },
        _transformChanged: function() {
          var e = this.$.sizedImgDiv.style,
            n = this.$.placeholder.style;
          (e.backgroundSize = n.backgroundSize = this.sizing),
            (e.backgroundPosition = n.backgroundPosition = this.sizing
              ? this.position
              : ""),
            (e.backgroundRepeat = n.backgroundRepeat = this.sizing
              ? "no-repeat"
              : "");
        },
        _resolveSrc: function(e) {
          var n = Object(r.c)(e, this.$.baseURIAnchor.href);
          return (
            n.length >= 2 &&
              "/" === n[0] &&
              "/" !== n[1] &&
              (n =
                (location.origin || location.protocol + "//" + location.host) +
                n),
            n
          );
        },
      });
    },
    290: function(e, n, t) {
      "use strict";
      t(4), t(44), t(248), t(204), t(41);
      var a = t(5),
        i = t(3);
      function r() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })(
          [
            '\n    <style include="paper-material-styles">\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        background-color: var(--paper-card-background-color, var(--primary-background-color));\n        border-radius: 2px;\n\n        @apply --paper-font-common-base;\n        @apply --paper-card;\n      }\n\n      /* IE 10 support for HTML5 hidden attr */\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      .header {\n        position: relative;\n        border-top-left-radius: inherit;\n        border-top-right-radius: inherit;\n        overflow: hidden;\n\n        @apply --paper-card-header;\n      }\n\n      .header iron-image {\n        display: block;\n        width: 100%;\n        --iron-image-width: 100%;\n        pointer-events: none;\n\n        @apply --paper-card-header-image;\n      }\n\n      .header .title-text {\n        padding: 16px;\n        font-size: 24px;\n        font-weight: 400;\n        color: var(--paper-card-header-color, #000);\n\n        @apply --paper-card-header-text;\n      }\n\n      .header .title-text.over-image {\n        position: absolute;\n        bottom: 0px;\n\n        @apply --paper-card-header-image-text;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n        position:relative;\n\n        @apply --paper-card-content;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n        position:relative;\n\n        @apply --paper-card-actions;\n      }\n\n      :host([elevation="1"]) {\n        @apply --paper-material-elevation-1;\n      }\n\n      :host([elevation="2"]) {\n        @apply --paper-material-elevation-2;\n      }\n\n      :host([elevation="3"]) {\n        @apply --paper-material-elevation-3;\n      }\n\n      :host([elevation="4"]) {\n        @apply --paper-material-elevation-4;\n      }\n\n      :host([elevation="5"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n\n    <div class="header">\n      <iron-image hidden$="[[!image]]" aria-hidden$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>\n      <div hidden$="[[!heading]]" class$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>\n    </div>\n\n    <slot></slot>\n',
          ],
          [
            '\n    <style include="paper-material-styles">\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        background-color: var(--paper-card-background-color, var(--primary-background-color));\n        border-radius: 2px;\n\n        @apply --paper-font-common-base;\n        @apply --paper-card;\n      }\n\n      /* IE 10 support for HTML5 hidden attr */\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      .header {\n        position: relative;\n        border-top-left-radius: inherit;\n        border-top-right-radius: inherit;\n        overflow: hidden;\n\n        @apply --paper-card-header;\n      }\n\n      .header iron-image {\n        display: block;\n        width: 100%;\n        --iron-image-width: 100%;\n        pointer-events: none;\n\n        @apply --paper-card-header-image;\n      }\n\n      .header .title-text {\n        padding: 16px;\n        font-size: 24px;\n        font-weight: 400;\n        color: var(--paper-card-header-color, #000);\n\n        @apply --paper-card-header-text;\n      }\n\n      .header .title-text.over-image {\n        position: absolute;\n        bottom: 0px;\n\n        @apply --paper-card-header-image-text;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n        position:relative;\n\n        @apply --paper-card-content;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n        position:relative;\n\n        @apply --paper-card-actions;\n      }\n\n      :host([elevation="1"]) {\n        @apply --paper-material-elevation-1;\n      }\n\n      :host([elevation="2"]) {\n        @apply --paper-material-elevation-2;\n      }\n\n      :host([elevation="3"]) {\n        @apply --paper-material-elevation-3;\n      }\n\n      :host([elevation="4"]) {\n        @apply --paper-material-elevation-4;\n      }\n\n      :host([elevation="5"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n\n    <div class="header">\n      <iron-image hidden\\$="[[!image]]" aria-hidden\\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>\n      <div hidden\\$="[[!heading]]" class\\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>\n    </div>\n\n    <slot></slot>\n',
          ]
        );
        return (
          (r = function() {
            return e;
          }),
          e
        );
      }
      Object(a.a)({
        _template: Object(i.a)(r()),
        is: "paper-card",
        properties: {
          heading: { type: String, value: "", observer: "_headingChanged" },
          image: { type: String, value: "" },
          alt: { type: String },
          preloadImage: { type: Boolean, value: !1 },
          fadeImage: { type: Boolean, value: !1 },
          placeholderImage: { type: String, value: null },
          elevation: { type: Number, value: 1, reflectToAttribute: !0 },
          animatedShadow: { type: Boolean, value: !1 },
          animated: {
            type: Boolean,
            reflectToAttribute: !0,
            readOnly: !0,
            computed: "_computeAnimated(animatedShadow)",
          },
        },
        _isHidden: function(e) {
          return e ? "false" : "true";
        },
        _headingChanged: function(e) {
          var n = this.getAttribute("heading"),
            t = this.getAttribute("aria-label");
          ("string" == typeof t && t !== n) ||
            this.setAttribute("aria-label", e);
        },
        _computeHeadingClass: function(e) {
          return e ? " over-image" : "";
        },
        _computeAnimated: function(e) {
          return e;
        },
      });
    },
    668: function(e, n, t) {
      "use strict";
      t.r(n);
      t(290);
      var a = t(3),
        i = t(25),
        r = t(66),
        o = t(171);
      t(92);
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
      function p() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n      <style include="ha-style">\n        paper-card {\n          position: fixed;\n          padding: 8px 0;\n          bottom: 16px;\n          right: 16px;\n        }\n\n        .card-content {\n          color: var(--primary-text-color);\n        }\n\n        .card-actions {\n          text-align: right;\n          border-top: 0;\n          margin-right: -4px;\n        }\n\n        :host(.small) paper-card {\n          bottom: 0;\n          left: 0;\n          right: 0;\n        }\n      </style>\n      <paper-card elevation="4">\n        <div class="card-content">[[localize(\'ui.auth_store.ask\')]]</div>\n        <div class="card-actions">\n          <mwc-button on-click="_done"\n            >[[localize(\'ui.auth_store.decline\')]]</mwc-button\n          >\n          <mwc-button raised on-click="_save"\n            >[[localize(\'ui.auth_store.confirm\')]]</mwc-button\n          >\n        </div>\n      </paper-card>\n    ',
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function s(e, n) {
        for (var t = 0; t < n.length; t++) {
          var a = n[t];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function d(e, n) {
        return !n || ("object" !== l(n) && "function" != typeof n)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function c(e, n, t) {
        return (c =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, n, t) {
                var a = (function(e, n) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, n) &&
                    null !== (e = u(e));

                  );
                  return e;
                })(e, n);
                if (a) {
                  var i = Object.getOwnPropertyDescriptor(a, n);
                  return i.get ? i.get.call(t) : i.value;
                }
              })(e, n, t || e);
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e, n) {
        return (h =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var m = (function(e) {
        function n() {
          return (
            (function(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            d(this, u(n).apply(this, arguments))
          );
        }
        var t, l, m;
        return (
          (function(e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              n && h(e, n);
          })(n, Object(o["a"])(i["a"])),
          (t = n),
          (m = [
            {
              key: "template",
              get: function() {
                return Object(a.a)(p());
              },
            },
            {
              key: "properties",
              get: function() {
                return { hass: Object };
              },
            },
          ]),
          (l = [
            {
              key: "ready",
              value: function() {
                c(u(n.prototype), "ready", this).call(this),
                  this.classList.toggle("small", window.innerWidth < 600);
              },
            },
            {
              key: "_save",
              value: function() {
                Object(r.b)(), this._done();
              },
            },
            {
              key: "_done",
              value: function() {
                var e = this,
                  n = this.shadowRoot.querySelector("paper-card");
                (n.style.transition = "bottom .25s"),
                  (n.style.bottom = "-".concat(n.offsetHeight + 8, "px")),
                  setTimeout(function() {
                    return e.parentNode.removeChild(e);
                  }, 300);
              },
            },
          ]) && s(t.prototype, l),
          m && s(t, m),
          n
        );
      })();
      customElements.define("ha-store-auth-card", m);
    },
  },
]);
//# sourceMappingURL=chunk.86405525ac549380822c.js.map
