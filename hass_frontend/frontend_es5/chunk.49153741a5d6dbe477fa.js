/*! For license information please see chunk.49153741a5d6dbe477fa.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
  {
    105: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return l;
      });
      var r = n(8),
        i = n(19);
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function u(t, e) {
        return !e || ("object" !== o(e) && "function" != typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function c(t) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function s(t, e) {
        return (s =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var l = Object(r.a)(function(t) {
        return (function(e) {
          function n() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              u(this, c(n).apply(this, arguments))
            );
          }
          var r, o, l;
          return (
            (function(t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && s(t, e);
            })(n, t),
            (r = n),
            (o = [
              {
                key: "fire",
                value: function(t, e, n) {
                  return (n = n || {}), Object(i.a)(n.node || this, t, e, n);
                },
              },
            ]) && a(r.prototype, o),
            l && a(r, l),
            n
          );
        })();
      });
    },
    171: function(t, e, n) {
      "use strict";
      var r = n(8);
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function a(t, e) {
        return !e || ("object" !== i(e) && "function" != typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function u(t) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      e.a = Object(r.a)(function(t) {
        return (function(e) {
          function n() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              a(this, u(n).apply(this, arguments))
            );
          }
          var r, i, s;
          return (
            (function(t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && c(t, e);
            })(n, t),
            (r = n),
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
                value: function(t) {
                  return t;
                },
              },
            ]) && o(r.prototype, i),
            s && o(r, s),
            n
          );
        })();
      });
    },
    173: function(t, e, n) {
      "use strict";
      var r = n(185);
      e.a = function(t) {
        return void 0 === t.attributes.friendly_name
          ? Object(r.a)(t.entity_id).replace(/_/g, " ")
          : t.attributes.friendly_name || "";
      };
    },
    175: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      });
      var r = n(118);
      function i(t) {
        return Object(r.a)(t.entity_id);
      }
    },
    177: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return f;
      });
      n(107);
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function o(t, e) {
        return !e || ("object" !== r(e) && "function" != typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function a(t, e, n) {
        return (a =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(t, e, n) {
                var r = (function(t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = u(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, e);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(t, e, n || t);
      }
      function u(t) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var s = customElements.get("iron-icon"),
        l = !1,
        f = (function(t) {
          function e() {
            var t, n;
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              ((n = o(
                this,
                (t = u(e)).call.apply(t, [this].concat(i))
              ))._iconsetName = void 0),
              n
            );
          }
          var r, f, p;
          return (
            (function(t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && c(t, e);
            })(e, s),
            (r = e),
            (f = [
              {
                key: "listen",
                value: function(t, r, i) {
                  a(u(e.prototype), "listen", this).call(this, t, r, i),
                    l ||
                      "mdi" !== this._iconsetName ||
                      ((l = !0), n.e(70).then(n.bind(null, 214)));
                },
              },
            ]) && i(r.prototype, f),
            p && i(r, p),
            e
          );
        })();
      customElements.define("ha-icon", f);
    },
    185: function(t, e, n) {
      "use strict";
      function r(t) {
        return t.substr(t.indexOf(".") + 1);
      }
      n.d(e, "a", function() {
        return r;
      });
    },
    248: function(t, e, n) {
      "use strict";
      n(4);
      var r = n(5),
        i = n(3),
        o = n(18);
      function a() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #baseURIAnchor {\n        display: none;\n      }\n\n      #sizedImgDiv {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        display: none;\n      }\n\n      #img {\n        display: block;\n        width: var(--iron-image-width, auto);\n        height: var(--iron-image-height, auto);\n      }\n\n      :host([sizing]) #sizedImgDiv {\n        display: block;\n      }\n\n      :host([sizing]) #img {\n        display: none;\n      }\n\n      #placeholder {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        background-color: inherit;\n        opacity: 1;\n\n        @apply --iron-image-placeholder;\n      }\n\n      #placeholder.faded-out {\n        transition: opacity 0.5s linear;\n        opacity: 0;\n      }\n    </style>\n\n    <a id="baseURIAnchor" href="#"></a>\n    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>\n    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">\n    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>\n',
        ]);
        return (
          (a = function() {
            return t;
          }),
          t
        );
      }
      Object(r.a)({
        _template: Object(i.a)(a()),
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
        _loadStateObserver: function(t, e) {
          var n = this._resolveSrc(t);
          n !== this._resolvedSrc &&
            ((this._resolvedSrc = ""),
            this.$.img.removeAttribute("src"),
            (this.$.sizedImgDiv.style.backgroundImage = ""),
            "" === t || e
              ? (this._setLoading(!1), this._setLoaded(!1), this._setError(!1))
              : ((this._resolvedSrc = n),
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
          var t = this.$.sizedImgDiv.style,
            e = this.$.placeholder.style;
          (t.backgroundSize = e.backgroundSize = this.sizing),
            (t.backgroundPosition = e.backgroundPosition = this.sizing
              ? this.position
              : ""),
            (t.backgroundRepeat = e.backgroundRepeat = this.sizing
              ? "no-repeat"
              : "");
        },
        _resolveSrc: function(t) {
          var e = Object(o.c)(t, this.$.baseURIAnchor.href);
          return (
            e.length >= 2 &&
              "/" === e[0] &&
              "/" !== e[1] &&
              (e =
                (location.origin || location.protocol + "//" + location.host) +
                e),
            e
          );
        },
      });
    },
    287: function(t, e, n) {
      "use strict";
      function r(t, e, n, r, i, o, a) {
        try {
          var u = t[o](a),
            c = u.value;
        } catch (s) {
          return void n(s);
        }
        u.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      n.d(e, "a", function() {
        return i;
      });
      var i = (function() {
        var t,
          e = ((t = regeneratorRuntime.mark(function t(e) {
            var r,
              i,
              o,
              a,
              u = arguments;
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((r = u.length > 1 && void 0 !== u[1] && u[1]),
                      e.parentNode)
                    ) {
                      t.next = 3;
                      break;
                    }
                    throw new Error(
                      "Cannot setup Leaflet map on disconnected element"
                    );
                  case 3:
                    return (t.next = 5), n.e(111).then(n.t.bind(null, 355, 7));
                  case 5:
                    return (
                      ((i = t.sent).Icon.Default.imagePath =
                        "/static/images/leaflet/images/"),
                      (o = i.map(e)),
                      (a = document.createElement("link")).setAttribute(
                        "href",
                        "/static/images/leaflet/leaflet.css"
                      ),
                      a.setAttribute("rel", "stylesheet"),
                      e.parentNode.appendChild(a),
                      o.setView([52.3731339, 4.8903147], 13),
                      i
                        .tileLayer(
                          "https://{s}.basemaps.cartocdn.com/"
                            .concat(
                              r ? "dark_all" : "light_all",
                              "/{z}/{x}/{y}"
                            )
                            .concat(i.Browser.retina ? "@2x.png" : ".png"),
                          {
                            attribution:
                              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
                            subdomains: "abcd",
                            minZoom: 0,
                            maxZoom: 20,
                          }
                        )
                        .addTo(o),
                      t.abrupt("return", [o, i])
                    );
                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          function() {
            var e = this,
              n = arguments;
            return new Promise(function(i, o) {
              var a = t.apply(e, n);
              function u(t) {
                r(a, i, o, u, c, "next", t);
              }
              function c(t) {
                r(a, i, o, u, c, "throw", t);
              }
              u(void 0);
            });
          });
        return function(t) {
          return e.apply(this, arguments);
        };
      })();
    },
    388: function(t, e, n) {
      "use strict";
      n(248);
      var r = n(3),
        i = n(25),
        o = n(105);
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function u() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n      <style include="iron-positioning"></style>\n      <style>\n        .marker {\n          vertical-align: top;\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          width: 2.5em;\n          text-align: center;\n          height: 2.5em;\n          line-height: 2.5em;\n          font-size: 1.5em;\n          border-radius: 50%;\n          border: 0.1em solid\n            var(--ha-marker-color, var(--default-primary-color));\n          color: rgb(76, 76, 76);\n          background-color: white;\n        }\n        iron-image {\n          border-radius: 50%;\n        }\n      </style>\n\n      <div class="marker">\n        <template is="dom-if" if="[[entityName]]"\n          >[[entityName]]</template\n        >\n        <template is="dom-if" if="[[entityPicture]]">\n          <iron-image\n            sizing="cover"\n            class="fit"\n            src="[[entityPicture]]"\n          ></iron-image>\n        </template>\n      </div>\n    ',
        ]);
        return (
          (u = function() {
            return t;
          }),
          t
        );
      }
      function c(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function s(t, e) {
        return !e || ("object" !== a(e) && "function" != typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function l(t, e, n) {
        return (l =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(t, e, n) {
                var r = (function(t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = f(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, e);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(t, e, n || t);
      }
      function f(t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function p(t, e) {
        return (p =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var d = (function(t) {
        function e() {
          return (
            (function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            s(this, f(e).apply(this, arguments))
          );
        }
        var n, a, d;
        return (
          (function(t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && p(t, e);
          })(e, Object(o["a"])(i["a"])),
          (n = e),
          (d = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(u());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: { type: Object },
                  entityId: { type: String, value: "" },
                  entityName: { type: String, value: null },
                  entityPicture: { type: String, value: null },
                };
              },
            },
          ]),
          (a = [
            {
              key: "ready",
              value: function() {
                var t = this;
                l(f(e.prototype), "ready", this).call(this),
                  this.addEventListener("click", function(e) {
                    return t.badgeTap(e);
                  });
              },
            },
            {
              key: "badgeTap",
              value: function(t) {
                t.stopPropagation(),
                  this.entityId &&
                    this.fire("hass-more-info", { entityId: this.entityId });
              },
            },
          ]) && c(n.prototype, a),
          d && c(n, d),
          e
        );
      })();
      customElements.define("ha-entity-marker", d);
    },
    666: function(t, e, n) {
      "use strict";
      n.r(e);
      n(145);
      var r = n(3),
        i = n(25),
        o = (n(126), n(177), n(388), n(175)),
        a = n(173),
        u = n(171),
        c = n(287);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function l() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n      <style include="ha-style">\n        #map {\n          height: calc(100% - 64px);\n          width: 100%;\n          z-index: 0;\n        }\n      </style>\n\n      <app-toolbar>\n        <ha-menu-button hass="[[hass]]" narrow="[[narrow]]"></ha-menu-button>\n        <div main-title>[[localize(\'panel.map\')]]</div>\n      </app-toolbar>\n\n      <div id="map"></div>\n    ',
        ]);
        return (
          (l = function() {
            return t;
          }),
          t
        );
      }
      function f(t, e) {
        return (
          (function(t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function(t, e) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, u = t[Symbol.iterator]();
                !(r = (a = u.next()).done) &&
                (n.push(a.value), !e || n.length !== e);
                r = !0
              );
            } catch (c) {
              (i = !0), (o = c);
            } finally {
              try {
                r || null == u.return || u.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(t, e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      function p(t, e, n, r, i, o, a) {
        try {
          var u = t[o](a),
            c = u.value;
        } catch (s) {
          return void n(s);
        }
        u.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function d(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function h(t, e) {
        return !e || ("object" !== s(e) && "function" != typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function y(t, e, n) {
        return (y =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(t, e, n) {
                var r = (function(t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = b(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, e);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(t, e, n || t);
      }
      function b(t) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function m(t, e) {
        return (m =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var g = (function(t) {
        function e() {
          return (
            (function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            h(this, b(e).apply(this, arguments))
          );
        }
        var n, s, g;
        return (
          (function(t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && m(t, e);
          })(e, Object(u["a"])(i["a"])),
          (n = e),
          (s = [
            {
              key: "connectedCallback",
              value: function() {
                y(b(e.prototype), "connectedCallback", this).call(this),
                  this.loadMap();
              },
            },
            {
              key: "loadMap",
              value: (function() {
                var t,
                  e = ((t = regeneratorRuntime.mark(function t() {
                    var e, n;
                    return regeneratorRuntime.wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), Object(c.a)(this.$.map);
                            case 2:
                              (e = t.sent),
                                (n = f(e, 2)),
                                (this._map = n[0]),
                                (this.Leaflet = n[1]),
                                this.drawEntities(this.hass),
                                this._map.invalidateSize(),
                                this.fitMap();
                            case 9:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })),
                  function() {
                    var e = this,
                      n = arguments;
                    return new Promise(function(r, i) {
                      var o = t.apply(e, n);
                      function a(t) {
                        p(o, r, i, a, u, "next", t);
                      }
                      function u(t) {
                        p(o, r, i, a, u, "throw", t);
                      }
                      a(void 0);
                    });
                  });
                return function() {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "disconnectedCallback",
              value: function() {
                this._map && this._map.remove();
              },
            },
            {
              key: "fitMap",
              value: function() {
                var t;
                0 === this._mapItems.length
                  ? this._map.setView(
                      new this.Leaflet.LatLng(
                        this.hass.config.latitude,
                        this.hass.config.longitude
                      ),
                      14
                    )
                  : ((t = new this.Leaflet.latLngBounds(
                      this._mapItems.map(function(t) {
                        return t.getLatLng();
                      })
                    )),
                    this._map.fitBounds(t.pad(0.5)));
              },
            },
            {
              key: "drawEntities",
              value: function(t) {
                var e = this,
                  n = this._map;
                if (n) {
                  this._mapItems &&
                    this._mapItems.forEach(function(t) {
                      t.remove();
                    });
                  var r = (this._mapItems = []);
                  Object.keys(t.states).forEach(function(i) {
                    var u = t.states[i],
                      c = Object(a.a)(u);
                    if (
                      !(
                        (u.attributes.hidden && "zone" !== Object(o.a)(u)) ||
                        "home" === u.state
                      ) &&
                      "latitude" in u.attributes &&
                      "longitude" in u.attributes
                    ) {
                      var s;
                      if ("zone" === Object(o.a)(u)) {
                        if (u.attributes.passive) return;
                        var l = "";
                        if (u.attributes.icon) {
                          var f = document.createElement("ha-icon");
                          f.setAttribute("icon", u.attributes.icon),
                            (l = f.outerHTML);
                        } else l = c;
                        return (
                          (s = e.Leaflet.divIcon({
                            html: l,
                            iconSize: [24, 24],
                            className: "",
                          })),
                          r.push(
                            e.Leaflet.marker(
                              [u.attributes.latitude, u.attributes.longitude],
                              { icon: s, interactive: !1, title: c }
                            ).addTo(n)
                          ),
                          void r.push(
                            e.Leaflet.circle(
                              [u.attributes.latitude, u.attributes.longitude],
                              {
                                interactive: !1,
                                color: "#FF9800",
                                radius: u.attributes.radius,
                              }
                            ).addTo(n)
                          )
                        );
                      }
                      var p = u.attributes.entity_picture || "",
                        d = c
                          .split(" ")
                          .map(function(t) {
                            return t.substr(0, 1);
                          })
                          .join("");
                      (s = e.Leaflet.divIcon({
                        html:
                          "<ha-entity-marker entity-id='" +
                          u.entity_id +
                          "' entity-name='" +
                          d +
                          "' entity-picture='" +
                          p +
                          "'></ha-entity-marker>",
                        iconSize: [45, 45],
                        className: "",
                      })),
                        r.push(
                          e.Leaflet.marker(
                            [u.attributes.latitude, u.attributes.longitude],
                            { icon: s, title: Object(a.a)(u) }
                          ).addTo(n)
                        ),
                        u.attributes.gps_accuracy &&
                          r.push(
                            e.Leaflet.circle(
                              [u.attributes.latitude, u.attributes.longitude],
                              {
                                interactive: !1,
                                color: "#0288D1",
                                radius: u.attributes.gps_accuracy,
                              }
                            ).addTo(n)
                          );
                    }
                  });
                }
              },
            },
          ]),
          (g = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(l());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: { type: Object, observer: "drawEntities" },
                  narrow: Boolean,
                };
              },
            },
          ]),
          s && d(n.prototype, s),
          g && d(n, g),
          e
        );
      })();
      customElements.define("ha-panel-map", g);
    },
  },
]);
//# sourceMappingURL=chunk.49153741a5d6dbe477fa.js.map
