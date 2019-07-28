/*! For license information please see chunk.0964e2e5dd4ae2dd7a6c.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [96],
  {
    105: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return c;
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
      function l(e) {
        return (l = Object.setPrototypeOf
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
      var c = Object(r.a)(function(e) {
        return (function(t) {
          function n() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              s(this, l(n).apply(this, arguments))
            );
          }
          var r, i, c;
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
            c && a(r, c),
            n
          );
        })();
      });
    },
    111: function(e, t, n) {
      "use strict";
      n(4);
      var r = n(91),
        o = n(60),
        i = n(5),
        a = n(1),
        s = n(3);
      function l() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n      }\n    </style>\n    <slot id="content"></slot>\n',
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(s.a)(l()),
        is: "iron-input",
        behaviors: [o.a],
        properties: {
          bindValue: { type: String, value: "" },
          value: { type: String, computed: "_computeValue(bindValue)" },
          allowedPattern: { type: String },
          autoValidate: { type: Boolean, value: !1 },
          _inputElement: Object,
        },
        observers: ["_bindValueChanged(bindValue, _inputElement)"],
        listeners: { input: "_onInput", keypress: "_onKeypress" },
        created: function() {
          r.a.requestAvailability(),
            (this._previousValidInput = ""),
            (this._patternAlreadyChecked = !1);
        },
        attached: function() {
          this._observer = Object(a.a)(this).observeNodes(
            function(e) {
              this._initSlottedInput();
            }.bind(this)
          );
        },
        detached: function() {
          this._observer &&
            (Object(a.a)(this).unobserveNodes(this._observer),
            (this._observer = null));
        },
        get inputElement() {
          return this._inputElement;
        },
        _initSlottedInput: function() {
          (this._inputElement = this.getEffectiveChildren()[0]),
            this.inputElement &&
              this.inputElement.value &&
              (this.bindValue = this.inputElement.value),
            this.fire("iron-input-ready");
        },
        get _patternRegExp() {
          var e;
          if (this.allowedPattern) e = new RegExp(this.allowedPattern);
          else
            switch (this.inputElement.type) {
              case "number":
                e = /[0-9.,e-]/;
            }
          return e;
        },
        _bindValueChanged: function(e, t) {
          t &&
            (void 0 === e
              ? (t.value = null)
              : e !== t.value && (this.inputElement.value = e),
            this.autoValidate && this.validate(),
            this.fire("bind-value-changed", { value: e }));
        },
        _onInput: function() {
          this.allowedPattern &&
            !this._patternAlreadyChecked &&
            (this._checkPatternValidity() ||
              (this._announceInvalidCharacter(
                "Invalid string of characters not entered."
              ),
              (this.inputElement.value = this._previousValidInput)));
          (this.bindValue = this._previousValidInput = this.inputElement.value),
            (this._patternAlreadyChecked = !1);
        },
        _isPrintable: function(e) {
          var t =
              8 == e.keyCode ||
              9 == e.keyCode ||
              13 == e.keyCode ||
              27 == e.keyCode,
            n =
              19 == e.keyCode ||
              20 == e.keyCode ||
              45 == e.keyCode ||
              46 == e.keyCode ||
              144 == e.keyCode ||
              145 == e.keyCode ||
              (e.keyCode > 32 && e.keyCode < 41) ||
              (e.keyCode > 111 && e.keyCode < 124);
          return !(t || (0 == e.charCode && n));
        },
        _onKeypress: function(e) {
          if (this.allowedPattern || "number" === this.inputElement.type) {
            var t = this._patternRegExp;
            if (t && !(e.metaKey || e.ctrlKey || e.altKey)) {
              this._patternAlreadyChecked = !0;
              var n = String.fromCharCode(e.charCode);
              this._isPrintable(e) &&
                !t.test(n) &&
                (e.preventDefault(),
                this._announceInvalidCharacter(
                  "Invalid character " + n + " not entered."
                ));
            }
          }
        },
        _checkPatternValidity: function() {
          var e = this._patternRegExp;
          if (!e) return !0;
          for (var t = 0; t < this.inputElement.value.length; t++)
            if (!e.test(this.inputElement.value[t])) return !1;
          return !0;
        },
        validate: function() {
          if (!this.inputElement) return (this.invalid = !1), !0;
          var e = this.inputElement.checkValidity();
          return (
            e &&
              (this.required && "" === this.bindValue
                ? (e = !1)
                : this.hasValidator() &&
                  (e = o.a.validate.call(this, this.bindValue))),
            (this.invalid = !e),
            this.fire("iron-input-validate"),
            e
          );
        },
        _announceInvalidCharacter: function(e) {
          this.fire("iron-announce", { text: e });
        },
        _computeValue: function(e) {
          return e;
        },
      });
    },
    117: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      n(4);
      var r = n(53),
        o = n(34),
        i = [r.a, o.a, { hostAttributes: { role: "option", tabindex: "0" } }];
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
      function l(e, t) {
        return (l =
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
                t && l(e, t);
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
    173: function(e, t, n) {
      "use strict";
      var r = n(185);
      t.a = function(e) {
        return void 0 === e.attributes.friendly_name
          ? Object(r.a)(e.entity_id).replace(/_/g, " ")
          : e.attributes.friendly_name || "";
      };
    },
    174: function(e, t, n) {
      "use strict";
      n(4);
      var r = n(3);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n/* Most common used flex styles*/\n<dom-module id="iron-flex">\n  <template>\n    <style>\n      .layout.horizontal,\n      .layout.vertical {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      .layout.inline {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      }\n\n      .layout.horizontal {\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      }\n\n      .layout.vertical {\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      }\n\n      .layout.wrap {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      }\n\n      .layout.no-wrap {\n        -ms-flex-wrap: nowrap;\n        -webkit-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n      }\n\n      .layout.center,\n      .layout.center-center {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      }\n\n      .layout.center-justified,\n      .layout.center-center {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      }\n\n      .flex {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      }\n\n      .flex-auto {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      }\n\n      .flex-none {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Basic flexbox reverse styles */\n<dom-module id="iron-flex-reverse">\n  <template>\n    <style>\n      .layout.horizontal-reverse,\n      .layout.vertical-reverse {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      .layout.horizontal-reverse {\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      }\n\n      .layout.vertical-reverse {\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      }\n\n      .layout.wrap-reverse {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Flexbox alignment */\n<dom-module id="iron-flex-alignment">\n  <template>\n    <style>\n      /**\n       * Alignment in cross axis.\n       */\n      .layout.start {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      }\n\n      .layout.center,\n      .layout.center-center {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      }\n\n      .layout.end {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      }\n\n      .layout.baseline {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      }\n\n      /**\n       * Alignment in main axis.\n       */\n      .layout.start-justified {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      }\n\n      .layout.center-justified,\n      .layout.center-center {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      }\n\n      .layout.end-justified {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      }\n\n      .layout.around-justified {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      }\n\n      .layout.justified {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      }\n\n      /**\n       * Self alignment.\n       */\n      .self-start {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      }\n\n      .self-center {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      }\n\n      .self-end {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      }\n\n      .self-stretch {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      }\n\n      .self-baseline {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      }\n\n      /**\n       * multi-line alignment in main axis.\n       */\n      .layout.start-aligned {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      }\n\n      .layout.end-aligned {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      }\n\n      .layout.center-aligned {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      }\n\n      .layout.between-aligned {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      }\n\n      .layout.around-aligned {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Non-flexbox positioning helper styles */\n<dom-module id="iron-flex-factors">\n  <template>\n    <style>\n      .flex,\n      .flex-1 {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      }\n\n      .flex-2 {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      }\n\n      .flex-3 {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      }\n\n      .flex-4 {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      }\n\n      .flex-5 {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      }\n\n      .flex-6 {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      }\n\n      .flex-7 {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      }\n\n      .flex-8 {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      }\n\n      .flex-9 {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      }\n\n      .flex-10 {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      }\n\n      .flex-11 {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      }\n\n      .flex-12 {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      }\n    </style>\n  </template>\n</dom-module>\n<dom-module id="iron-positioning">\n  <template>\n    <style>\n      .block {\n        display: block;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .invisible {\n        visibility: hidden !important;\n      }\n\n      .relative {\n        position: relative;\n      }\n\n      .fit {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      body.fullbleed {\n        margin: 0;\n        height: 100vh;\n      }\n\n      .scroll {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      }\n\n      /* fixed position */\n      .fixed-bottom,\n      .fixed-left,\n      .fixed-right,\n      .fixed-top {\n        position: fixed;\n      }\n\n      .fixed-top {\n        top: 0;\n        left: 0;\n        right: 0;\n      }\n\n      .fixed-right {\n        top: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      .fixed-bottom {\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      .fixed-left {\n        top: 0;\n        bottom: 0;\n        left: 0;\n      }\n    </style>\n  </template>\n</dom-module>\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var i = Object(r.a)(o());
      i.setAttribute("style", "display: none;"),
        document.head.appendChild(i.content);
    },
    175: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      var r = n(118);
      function o(e) {
        return Object(r.a)(e.entity_id);
      }
    },
    176: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      var r = n(116),
        o = {
          alert: "hass:alert",
          alexa: "hass:amazon-alexa",
          automation: "hass:playlist-play",
          calendar: "hass:calendar",
          camera: "hass:video",
          climate: "hass:thermostat",
          configurator: "hass:settings",
          conversation: "hass:text-to-speech",
          device_tracker: "hass:account",
          fan: "hass:fan",
          google_assistant: "hass:google-assistant",
          group: "hass:google-circles-communities",
          history_graph: "hass:chart-line",
          homeassistant: "hass:home-assistant",
          homekit: "hass:home-automation",
          image_processing: "hass:image-filter-frames",
          input_boolean: "hass:drawing",
          input_datetime: "hass:calendar-clock",
          input_number: "hass:ray-vertex",
          input_select: "hass:format-list-bulleted",
          input_text: "hass:textbox",
          light: "hass:lightbulb",
          mailbox: "hass:mailbox",
          notify: "hass:comment-alert",
          person: "hass:account",
          plant: "hass:flower",
          proximity: "hass:apple-safari",
          remote: "hass:remote",
          scene: "hass:google-pages",
          script: "hass:file-document",
          sensor: "hass:eye",
          simple_alarm: "hass:bell",
          sun: "hass:white-balance-sunny",
          switch: "hass:flash",
          timer: "hass:timer",
          updater: "hass:cloud-upload",
          vacuum: "hass:robot-vacuum",
          water_heater: "hass:thermometer",
          weather: "hass:weather-cloudy",
          weblink: "hass:open-in-new",
        };
      function i(e, t) {
        if (e in o) return o[e];
        switch (e) {
          case "alarm_control_panel":
            switch (t) {
              case "armed_home":
                return "hass:bell-plus";
              case "armed_night":
                return "hass:bell-sleep";
              case "disarmed":
                return "hass:bell-outline";
              case "triggered":
                return "hass:bell-ring";
              default:
                return "hass:bell";
            }
          case "binary_sensor":
            return t && "off" === t
              ? "hass:radiobox-blank"
              : "hass:checkbox-marked-circle";
          case "cover":
            return "closed" === t ? "hass:window-closed" : "hass:window-open";
          case "lock":
            return t && "unlocked" === t ? "hass:lock-open" : "hass:lock";
          case "media_player":
            return t && "off" !== t && "idle" !== t
              ? "hass:cast-connected"
              : "hass:cast";
          case "zwave":
            switch (t) {
              case "dead":
                return "hass:emoticon-dead";
              case "sleeping":
                return "hass:sleep";
              case "initializing":
                return "hass:timer-sand";
              default:
                return "hass:z-wave";
            }
          default:
            return (
              console.warn(
                "Unable to find icon for domain " + e + " (" + t + ")"
              ),
              r.a
            );
        }
      }
    },
    177: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return d;
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
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = customElements.get("iron-icon"),
        c = !1,
        d = (function(e) {
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
          var r, d, p;
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
            })(t, u),
            (r = t),
            (d = [
              {
                key: "listen",
                value: function(e, r, o) {
                  a(s(t.prototype), "listen", this).call(this, e, r, o),
                    c ||
                      "mdi" !== this._iconsetName ||
                      ((c = !0), n.e(70).then(n.bind(null, 214)));
                },
              },
            ]) && o(r.prototype, d),
            p && o(r, p),
            t
          );
        })();
      customElements.define("ha-icon", d);
    },
    178: function(e, t, n) {
      "use strict";
      n(4), n(44), n(41), n(52);
      var r = n(5),
        o = n(3);
      function i() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n    <style>\n      :host {\n        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */\n        @apply --layout-vertical;\n        @apply --layout-center-justified;\n        @apply --layout-flex;\n      }\n\n      :host([two-line]) {\n        min-height: var(--paper-item-body-two-line-min-height, 72px);\n      }\n\n      :host([three-line]) {\n        min-height: var(--paper-item-body-three-line-min-height, 88px);\n      }\n\n      :host > ::slotted(*) {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      :host > ::slotted([secondary]) {\n        @apply --paper-font-body1;\n\n        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));\n\n        @apply --paper-item-body-secondary;\n      }\n    </style>\n\n    <slot></slot>\n",
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({ _template: Object(o.a)(i()), is: "paper-item-body" });
    },
    181: function(e, t, n) {
      "use strict";
      n(4), n(55), n(146);
      var r = n(5),
        o = n(3),
        i = n(122);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n  <style include="paper-spinner-styles"></style>\n\n  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">\n    <div class="spinner-layer layer-1">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-2">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-3">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-4">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n  </div>\n',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      var s = Object(o.a)(a());
      s.setAttribute("strip-whitespace", ""),
        Object(r.a)({ _template: s, is: "paper-spinner", behaviors: [i.a] });
    },
    183: function(e, t, n) {
      "use strict";
      var r = n(0),
        o = (n(177), n(175)),
        i = n(189);
      function a() {
        var e = c([
          '\n      :host {\n        position: relative;\n        display: inline-block;\n        width: 40px;\n        color: var(--paper-item-icon-color, #44739e);\n        border-radius: 50%;\n        height: 40px;\n        text-align: center;\n        background-size: cover;\n        line-height: 40px;\n      }\n\n      ha-icon {\n        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;\n      }\n\n      /* Color the icon if light or sun is on */\n      ha-icon[data-domain="light"][data-state="on"],\n      ha-icon[data-domain="switch"][data-state="on"],\n      ha-icon[data-domain="binary_sensor"][data-state="on"],\n      ha-icon[data-domain="fan"][data-state="on"],\n      ha-icon[data-domain="sun"][data-state="above_horizon"] {\n        color: var(--paper-item-icon-active-color, #fdd835);\n      }\n\n      /* Color the icon if unavailable */\n      ha-icon[data-state="unavailable"] {\n        color: var(--state-icon-unavailable-color);\n      }\n    ',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function s(e) {
        return (s =
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
        var e = c([
          '\n      <ha-icon\n        id="icon"\n        data-domain=',
          "\n        data-state=",
          "\n        .icon=",
          "\n      ></ha-icon>\n    ",
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = c([""]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function c(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e) {
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
          n = g(e.key);
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
      function b(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function g(e) {
        var t = (function(e, t) {
          if ("object" !== s(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== s(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === s(t) ? t : String(t);
      }
      var _ = (function(e, t, n, r) {
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
                  l = this.toElementFinisherExtras((0, o[i])(s) || s);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && r.push(l.finisher);
                var u = l.extras;
                if (u) {
                  for (var c = 0; c < u.length; c++)
                    this.addElementPlacement(u[c], t);
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
              var n = g(e.key),
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
                  if (v(i.descriptor) || v(o.descriptor)) {
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
                    m(i, o);
                  }
                else t.push(i);
              }
              return t;
            })(a.d.map(f)),
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
                  var a = arguments.length, l = new Array(a), u = 0;
                  u < a;
                  u++
                )
                  l[u] = arguments[u];
                return (
                  (o = this),
                  (n =
                    !(i = (t = d(r)).call.apply(t, [this].concat(l))) ||
                    ("object" !== s(i) && "function" != typeof i)
                      ? p(o)
                      : i),
                  e(p(n)),
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
                    t && h(e, t);
                })(r, t),
                r
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(r.g)()],
                key: "stateObj",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(r.g)()],
                key: "overrideIcon",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(r.h)("ha-icon")],
                key: "_icon",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this.stateObj;
                  return e
                    ? Object(r.f)(
                        l(),
                        Object(o.a)(e),
                        e.state,
                        this.overrideIcon || Object(i.a)(e)
                      )
                    : Object(r.f)(u());
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  if (e.has("stateObj") && this.stateObj) {
                    var t = this.stateObj,
                      n = { color: "", filter: "" },
                      r = { backgroundImage: "" };
                    if (t)
                      if (t.attributes.entity_picture && !this.overrideIcon)
                        (r.backgroundImage =
                          "url(" + t.attributes.entity_picture + ")"),
                          (n.display = "none");
                      else {
                        if (t.attributes.hs_color) {
                          var o = t.attributes.hs_color[0],
                            i = t.attributes.hs_color[1];
                          i > 10 &&
                            (n.color = "hsl("
                              .concat(o, ", 100%, ")
                              .concat(100 - i / 2, "%)"));
                        }
                        if (t.attributes.brightness) {
                          var a = t.attributes.brightness;
                          if ("number" != typeof a) {
                            var l = "Type error: state-badge expected number, but type of "
                              .concat(t.entity_id, ".attributes.brightness is ")
                              .concat(s(a), " (")
                              .concat(a, ")");
                            console.warn(l);
                          }
                          n.filter = "brightness(".concat((a + 245) / 5, "%)");
                        }
                      }
                    Object.assign(this._icon.style, n),
                      Object.assign(this.style, r);
                  }
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(r.c)(a());
                },
              },
            ],
          };
        },
        r.a
      );
      customElements.define("state-badge", _);
    },
    185: function(e, t, n) {
      "use strict";
      function r(e) {
        return e.substr(e.indexOf(".") + 1);
      }
      n.d(t, "a", function() {
        return r;
      });
    },
    186: function(e, t, n) {
      "use strict";
      n(106), n(90), n(187), n(178), n(220);
      var r = n(125),
        o = (n(183), n(173)),
        i = n(0),
        a = n(19);
      function s(e) {
        return (s =
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
        var e = p([
          "\n      paper-input > paper-icon-button {\n        width: 24px;\n        height: 24px;\n        padding: 2px;\n        color: var(--secondary-text-color);\n      }\n      [hidden] {\n        display: none;\n      }\n    ",
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = p([
          '\n                <paper-icon-button\n                  slot="suffix"\n                  class="toggle-button"\n                  .icon=',
          "\n                >\n                  Toggle\n                </paper-icon-button>\n              ",
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = p([
          '\n                <paper-icon-button\n                  slot="suffix"\n                  class="clear-button"\n                  icon="hass:close"\n                  no-ripple\n                >\n                  Clear\n                </paper-icon-button>\n              ',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = p([
          '\n      <vaadin-combo-box-light\n        item-value-path="entity_id"\n        item-label-path="entity_id"\n        .items=',
          "\n        .value=",
          "\n        .allowCustomValue=",
          "\n        .renderer=",
          "\n        @opened-changed=",
          "\n        @value-changed=",
          "\n      >\n        <paper-input\n          .autofocus=",
          "\n          .label=",
          "\n          .value=",
          "\n          .disabled=",
          '\n          class="input"\n          autocapitalize="none"\n          autocomplete="off"\n          autocorrect="off"\n          spellcheck="false"\n        >\n          ',
          "\n          ",
          "\n        </paper-input>\n      </vaadin-combo-box-light>\n    ",
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function p(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function m(e) {
        var t,
          n = _(e.key);
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
      function y(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function v(e) {
        return e.decorators && e.decorators.length;
      }
      function b(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function g(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function _(e) {
        var t = (function(e, t) {
          if ("object" !== s(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== s(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === s(t) ? t : String(t);
      }
      function w(e, t, n) {
        return (w =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = k(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function k(e) {
        return (k = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var x = function(e, t, n) {
          e.firstElementChild ||
            (e.innerHTML =
              '\n      <style>\n        paper-icon-item {\n          margin: -10px;\n          padding: 0;\n        }\n      </style>\n      <paper-icon-item>\n        <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>\n        <paper-item-body two-line="">\n          <div class=\'name\'>[[_computeStateName(item)]]</div>\n          <div secondary>[[item.entity_id]]</div>\n        </paper-item-body>\n      </paper-icon-item>\n    '),
            (e.querySelector("state-badge").stateObj = n.item),
            (e.querySelector(".name").textContent = Object(o.a)(n.item)),
            (e.querySelector("[secondary]").textContent = n.item.entity_id);
        },
        O = (function(e, t, n, r) {
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
                    if (!v(e)) return n.push(e);
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
                    l = this.toElementFinisherExtras((0, o[i])(s) || s);
                  (e = l.element),
                    this.addElementPlacement(e, t),
                    l.finisher && r.push(l.finisher);
                  var u = l.extras;
                  if (u) {
                    for (var c = 0; c < u.length; c++)
                      this.addElementPlacement(u[c], t);
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
                var n = _(e.key),
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
                  n = g(e, "finisher"),
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
                var n = g(e, "finisher"),
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
                    if (b(i.descriptor) || b(o.descriptor)) {
                      if (v(i) || v(o))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            i.key +
                            ") can't be decorated."
                        );
                      o.descriptor = i.descriptor;
                    } else {
                      if (v(i)) {
                        if (v(o))
                          throw new ReferenceError(
                            "Decorators can't be placed on different accessors with for the same property (" +
                              i.key +
                              ")."
                          );
                        o.decorators = i.decorators;
                      }
                      y(i, o);
                    }
                  else t.push(i);
                }
                return t;
              })(a.d.map(m)),
              e
            );
          return (
            o.initializeClassElements(a.F, s.elements),
            o.runClassFinishers(a.F, s.finishers)
          );
        })(
          null,
          function(e, t) {
            var n = (function(n) {
              function r() {
                var t, n, o, i;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r);
                for (
                  var a = arguments.length, l = new Array(a), u = 0;
                  u < a;
                  u++
                )
                  l[u] = arguments[u];
                return (
                  (o = this),
                  (n =
                    !(i = (t = k(r)).call.apply(t, [this].concat(l))) ||
                    ("object" !== s(i) && "function" != typeof i)
                      ? h(o)
                      : i),
                  e(h(n)),
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
                    t && f(e, t);
                })(r, t),
                r
              );
            })();
            return {
              F: n,
              d: [
                {
                  kind: "field",
                  decorators: [Object(i.g)({ type: Boolean })],
                  key: "autofocus",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(i.g)({ type: Boolean })],
                  key: "disabled",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(i.g)({
                      type: Boolean,
                      attribute: "allow-custom-entity",
                    }),
                  ],
                  key: "allowCustomEntity",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(i.g)()],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(i.g)()],
                  key: "label",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(i.g)()],
                  key: "value",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(i.g)({ attribute: "domain-filter" })],
                  key: "domainFilter",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(i.g)()],
                  key: "entityFilter",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(i.g)({ type: Boolean })],
                  key: "_opened",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(i.g)()],
                  key: "_hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_getStates",
                  value: function() {
                    var e = this;
                    return Object(r.a)(function(t, n, r) {
                      var o = [];
                      if (!t) return [];
                      var i = Object.keys(t.states);
                      return (
                        n &&
                          (i = i.filter(function(e) {
                            return e.substr(0, e.indexOf(".")) === n;
                          })),
                        (o = i.sort().map(function(e) {
                          return t.states[e];
                        })),
                        r &&
                          (o = o.filter(function(t) {
                            return t.entity_id === e.value || r(t);
                          })),
                        o
                      );
                    });
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function(e) {
                    w(k(n.prototype), "updated", this).call(this, e),
                      e.has("hass") &&
                        !this._opened &&
                        (this._hass = this.hass);
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function() {
                    var e = this._getStates(
                      this._hass,
                      this.domainFilter,
                      this.entityFilter
                    );
                    return Object(i.f)(
                      d(),
                      e,
                      this._value,
                      this.allowCustomEntity,
                      x,
                      this._openedChanged,
                      this._valueChanged,
                      this.autofocus,
                      void 0 === this.label && this._hass
                        ? this._hass.localize(
                            "ui.components.entity.entity-picker.entity"
                          )
                        : this.label,
                      this._value,
                      this.disabled,
                      this.value ? Object(i.f)(c()) : "",
                      e.length > 0
                        ? Object(i.f)(
                            u(),
                            this._opened ? "hass:menu-up" : "hass:menu-down"
                          )
                        : ""
                    );
                  },
                },
                {
                  kind: "get",
                  key: "_value",
                  value: function() {
                    return this.value || "";
                  },
                },
                {
                  kind: "method",
                  key: "_openedChanged",
                  value: function(e) {
                    this._opened = e.detail.value;
                  },
                },
                {
                  kind: "method",
                  key: "_valueChanged",
                  value: function(e) {
                    var t = this;
                    e.detail.value !== this._value &&
                      ((this.value = e.detail.value),
                      setTimeout(function() {
                        Object(a.a)(t, "value-changed", { value: t.value }),
                          Object(a.a)(t, "change");
                      }, 0));
                  },
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function() {
                    return Object(i.c)(l());
                  },
                },
              ],
            };
          },
          i.a
        );
      customElements.define("ha-entity-picker", O);
    },
    187: function(e, t, n) {
      "use strict";
      n(4), n(44), n(52), n(140);
      var r = n(5),
        o = n(3),
        i = n(117);
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
        _template: Object(o.a)(a()),
        is: "paper-icon-item",
        behaviors: [i.a],
      });
    },
    189: function(e, t, n) {
      "use strict";
      var r = n(116),
        o = n(118),
        i = n(176);
      var a = {
        humidity: "hass:water-percent",
        illuminance: "hass:brightness-5",
        temperature: "hass:thermometer",
        pressure: "hass:gauge",
        power: "hass:flash",
        signal_strength: "hass:wifi",
      };
      n.d(t, "a", function() {
        return l;
      });
      var s = {
        binary_sensor: function(e) {
          var t = e.state && "off" === e.state;
          switch (e.attributes.device_class) {
            case "battery":
              return t ? "hass:battery" : "hass:battery-outline";
            case "cold":
              return t ? "hass:thermometer" : "hass:snowflake";
            case "connectivity":
              return t ? "hass:server-network-off" : "hass:server-network";
            case "door":
              return t ? "hass:door-closed" : "hass:door-open";
            case "garage_door":
              return t ? "hass:garage" : "hass:garage-open";
            case "gas":
            case "power":
            case "problem":
            case "safety":
            case "smoke":
              return t ? "hass:shield-check" : "hass:alert";
            case "heat":
              return t ? "hass:thermometer" : "hass:fire";
            case "light":
              return t ? "hass:brightness-5" : "hass:brightness-7";
            case "lock":
              return t ? "hass:lock" : "hass:lock-open";
            case "moisture":
              return t ? "hass:water-off" : "hass:water";
            case "motion":
              return t ? "hass:walk" : "hass:run";
            case "occupancy":
              return t ? "hass:home-outline" : "hass:home";
            case "opening":
              return t ? "hass:square" : "hass:square-outline";
            case "plug":
              return t ? "hass:power-plug-off" : "hass:power-plug";
            case "presence":
              return t ? "hass:home-outline" : "hass:home";
            case "sound":
              return t ? "hass:music-note-off" : "hass:music-note";
            case "vibration":
              return t ? "hass:crop-portrait" : "hass:vibrate";
            case "window":
              return t ? "hass:window-closed" : "hass:window-open";
            default:
              return t ? "hass:radiobox-blank" : "hass:checkbox-marked-circle";
          }
        },
        cover: function(e) {
          var t = "closed" !== e.state;
          switch (e.attributes.device_class) {
            case "garage":
              return t ? "hass:garage-open" : "hass:garage";
            default:
              return Object(i.a)("cover", e.state);
          }
        },
        sensor: function(e) {
          var t = e.attributes.device_class;
          if (t && t in a) return a[t];
          if ("battery" === t) {
            var n = Number(e.state);
            if (isNaN(n)) return "hass:battery-unknown";
            var o = 10 * Math.round(n / 10);
            return o >= 100
              ? "hass:battery"
              : o <= 0
              ? "hass:battery-alert"
              : "hass".concat(":battery-", o);
          }
          var s = e.attributes.unit_of_measurement;
          return s === r.j || s === r.k
            ? "hass:thermometer"
            : Object(i.a)("sensor");
        },
        input_datetime: function(e) {
          return e.attributes.has_date
            ? e.attributes.has_time
              ? Object(i.a)("input_datetime")
              : "hass:calendar"
            : "hass:clock";
        },
      };
      function l(e) {
        if (!e) return r.a;
        if (e.attributes.icon) return e.attributes.icon;
        var t = Object(o.a)(e.entity_id);
        return t in s ? s[t](e) : Object(i.a)(t, e.state);
      }
    },
    191: function(e, t, n) {
      "use strict";
      var r = {},
        o = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
        i = "[^\\s]+",
        a = /\[([^]*?)\]/gm,
        s = function() {};
      function l(e, t) {
        for (var n = [], r = 0, o = e.length; r < o; r++)
          n.push(e[r].substr(0, t));
        return n;
      }
      function u(e) {
        return function(t, n, r) {
          var o = r[e].indexOf(
            n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
          );
          ~o && (t.month = o);
        };
      }
      function c(e, t) {
        for (e = String(e), t = t || 2; e.length < t; ) e = "0" + e;
        return e;
      }
      var d = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        p = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        h = l(p, 3),
        f = l(d, 3);
      r.i18n = {
        dayNamesShort: f,
        dayNames: d,
        monthNamesShort: h,
        monthNames: p,
        amPm: ["am", "pm"],
        DoFn: function(e) {
          return (
            e +
            ["th", "st", "nd", "rd"][
              e % 10 > 3 ? 0 : ((e - (e % 10) != 10) * e) % 10
            ]
          );
        },
      };
      var m = {
          D: function(e) {
            return e.getDate();
          },
          DD: function(e) {
            return c(e.getDate());
          },
          Do: function(e, t) {
            return t.DoFn(e.getDate());
          },
          d: function(e) {
            return e.getDay();
          },
          dd: function(e) {
            return c(e.getDay());
          },
          ddd: function(e, t) {
            return t.dayNamesShort[e.getDay()];
          },
          dddd: function(e, t) {
            return t.dayNames[e.getDay()];
          },
          M: function(e) {
            return e.getMonth() + 1;
          },
          MM: function(e) {
            return c(e.getMonth() + 1);
          },
          MMM: function(e, t) {
            return t.monthNamesShort[e.getMonth()];
          },
          MMMM: function(e, t) {
            return t.monthNames[e.getMonth()];
          },
          YY: function(e) {
            return c(String(e.getFullYear()), 4).substr(2);
          },
          YYYY: function(e) {
            return c(e.getFullYear(), 4);
          },
          h: function(e) {
            return e.getHours() % 12 || 12;
          },
          hh: function(e) {
            return c(e.getHours() % 12 || 12);
          },
          H: function(e) {
            return e.getHours();
          },
          HH: function(e) {
            return c(e.getHours());
          },
          m: function(e) {
            return e.getMinutes();
          },
          mm: function(e) {
            return c(e.getMinutes());
          },
          s: function(e) {
            return e.getSeconds();
          },
          ss: function(e) {
            return c(e.getSeconds());
          },
          S: function(e) {
            return Math.round(e.getMilliseconds() / 100);
          },
          SS: function(e) {
            return c(Math.round(e.getMilliseconds() / 10), 2);
          },
          SSS: function(e) {
            return c(e.getMilliseconds(), 3);
          },
          a: function(e, t) {
            return e.getHours() < 12 ? t.amPm[0] : t.amPm[1];
          },
          A: function(e, t) {
            return e.getHours() < 12
              ? t.amPm[0].toUpperCase()
              : t.amPm[1].toUpperCase();
          },
          ZZ: function(e) {
            var t = e.getTimezoneOffset();
            return (
              (t > 0 ? "-" : "+") +
              c(100 * Math.floor(Math.abs(t) / 60) + (Math.abs(t) % 60), 4)
            );
          },
        },
        y = {
          D: [
            "\\d\\d?",
            function(e, t) {
              e.day = t;
            },
          ],
          Do: [
            "\\d\\d?" + i,
            function(e, t) {
              e.day = parseInt(t, 10);
            },
          ],
          M: [
            "\\d\\d?",
            function(e, t) {
              e.month = t - 1;
            },
          ],
          YY: [
            "\\d\\d?",
            function(e, t) {
              var n = +("" + new Date().getFullYear()).substr(0, 2);
              e.year = "" + (t > 68 ? n - 1 : n) + t;
            },
          ],
          h: [
            "\\d\\d?",
            function(e, t) {
              e.hour = t;
            },
          ],
          m: [
            "\\d\\d?",
            function(e, t) {
              e.minute = t;
            },
          ],
          s: [
            "\\d\\d?",
            function(e, t) {
              e.second = t;
            },
          ],
          YYYY: [
            "\\d{4}",
            function(e, t) {
              e.year = t;
            },
          ],
          S: [
            "\\d",
            function(e, t) {
              e.millisecond = 100 * t;
            },
          ],
          SS: [
            "\\d{2}",
            function(e, t) {
              e.millisecond = 10 * t;
            },
          ],
          SSS: [
            "\\d{3}",
            function(e, t) {
              e.millisecond = t;
            },
          ],
          d: ["\\d\\d?", s],
          ddd: [i, s],
          MMM: [i, u("monthNamesShort")],
          MMMM: [i, u("monthNames")],
          a: [
            i,
            function(e, t, n) {
              var r = t.toLowerCase();
              r === n.amPm[0]
                ? (e.isPm = !1)
                : r === n.amPm[1] && (e.isPm = !0);
            },
          ],
          ZZ: [
            "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",
            function(e, t) {
              var n,
                r = (t + "").match(/([+-]|\d\d)/gi);
              r &&
                ((n = 60 * r[1] + parseInt(r[2], 10)),
                (e.timezoneOffset = "+" === r[0] ? n : -n));
            },
          ],
        };
      (y.dd = y.d),
        (y.dddd = y.ddd),
        (y.DD = y.D),
        (y.mm = y.m),
        (y.hh = y.H = y.HH = y.h),
        (y.MM = y.M),
        (y.ss = y.s),
        (y.A = y.a),
        (r.masks = {
          default: "ddd MMM DD YYYY HH:mm:ss",
          shortDate: "M/D/YY",
          mediumDate: "MMM D, YYYY",
          longDate: "MMMM D, YYYY",
          fullDate: "dddd, MMMM D, YYYY",
          shortTime: "HH:mm",
          mediumTime: "HH:mm:ss",
          longTime: "HH:mm:ss.SSS",
        }),
        (r.format = function(e, t, n) {
          var i = n || r.i18n;
          if (
            ("number" == typeof e && (e = new Date(e)),
            "[object Date]" !== Object.prototype.toString.call(e) ||
              isNaN(e.getTime()))
          )
            throw new Error("Invalid Date in fecha.format");
          t = r.masks[t] || t || r.masks.default;
          var s = [];
          return (t = (t = t.replace(a, function(e, t) {
            return s.push(t), "??";
          })).replace(o, function(t) {
            return t in m ? m[t](e, i) : t.slice(1, t.length - 1);
          })).replace(/\?\?/g, function() {
            return s.shift();
          });
        }),
        (r.parse = function(e, t, n) {
          var i = n || r.i18n;
          if ("string" != typeof t)
            throw new Error("Invalid format in fecha.parse");
          if (((t = r.masks[t] || t), e.length > 1e3)) return null;
          var a,
            s = {},
            l = [],
            u = ((a = t), a.replace(/[|\\{()[^$+*?.-]/g, "\\$&")).replace(
              o,
              function(e) {
                if (y[e]) {
                  var t = y[e];
                  return l.push(t[1]), "(" + t[0] + ")";
                }
                return e;
              }
            ),
            c = e.match(new RegExp(u, "i"));
          if (!c) return null;
          for (var d = 1; d < c.length; d++) l[d - 1](s, c[d], i);
          var p,
            h = new Date();
          return (
            !0 === s.isPm && null != s.hour && 12 != +s.hour
              ? (s.hour = +s.hour + 12)
              : !1 === s.isPm && 12 == +s.hour && (s.hour = 0),
            null != s.timezoneOffset
              ? ((s.minute = +(s.minute || 0) - +s.timezoneOffset),
                (p = new Date(
                  Date.UTC(
                    s.year || h.getFullYear(),
                    s.month || 0,
                    s.day || 1,
                    s.hour || 0,
                    s.minute || 0,
                    s.second || 0,
                    s.millisecond || 0
                  )
                )))
              : (p = new Date(
                  s.year || h.getFullYear(),
                  s.month || 0,
                  s.day || 1,
                  s.hour || 0,
                  s.minute || 0,
                  s.second || 0,
                  s.millisecond || 0
                )),
            p
          );
        }),
        (t.a = r);
    },
    198: function(e, t, n) {
      "use strict";
      n(4), n(44);
      var r = n(5),
        o = n(1),
        i = n(3),
        a = n(124);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that\'s not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id="wrapper" class="initializing">\n      <slot id="headerSlot" name="header"></slot>\n\n      <div id="contentContainer">\n        <slot></slot>\n      </div>\n    </div>\n',
          ],
          [
            '\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that\'s not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id="wrapper" class="initializing">\n      <slot id="headerSlot" name="header"></slot>\n\n      <div id="contentContainer">\n        <slot></slot>\n      </div>\n    </div>\n',
          ]
        );
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        _template: Object(i.a)(s()),
        is: "app-header-layout",
        behaviors: [a.a],
        properties: {
          hasScrollingRegion: {
            type: Boolean,
            value: !1,
            reflectToAttribute: !0,
          },
        },
        observers: ["resetLayout(isAttached, hasScrollingRegion)"],
        get header() {
          return Object(o.a)(this.$.headerSlot).getDistributedNodes()[0];
        },
        _updateLayoutStates: function() {
          var e = this.header;
          if (this.isAttached && e) {
            this.$.wrapper.classList.remove("initializing"),
              (e.scrollTarget = this.hasScrollingRegion
                ? this.$.contentContainer
                : this.ownerDocument.documentElement);
            var t = e.offsetHeight;
            this.hasScrollingRegion
              ? ((e.style.left = ""), (e.style.right = ""))
              : requestAnimationFrame(
                  function() {
                    var t = this.getBoundingClientRect(),
                      n = document.documentElement.clientWidth - t.right;
                    (e.style.left = t.left + "px"), (e.style.right = n + "px");
                  }.bind(this)
                );
            var n = this.$.contentContainer.style;
            e.fixed && !e.condenses && this.hasScrollingRegion
              ? ((n.marginTop = t + "px"), (n.paddingTop = ""))
              : ((n.paddingTop = t + "px"), (n.marginTop = ""));
          }
        },
      });
    },
    211: function(e, t, n) {
      "use strict";
      var r = n(191);
      t.a = (function() {
        try {
          new Date().toLocaleTimeString("i");
        } catch (e) {
          return "RangeError" === e.name;
        }
        return !1;
      })()
        ? function(e, t) {
            return e.toLocaleTimeString(t, {
              hour: "numeric",
              minute: "2-digit",
            });
          }
        : function(e) {
            return r.a.format(e, "shortTime");
          };
    },
    232: function(e, t, n) {
      "use strict";
      var r = n(191);
      t.a = (function() {
        try {
          new Date().toLocaleDateString("i");
        } catch (e) {
          return "RangeError" === e.name;
        }
        return !1;
      })()
        ? function(e, t) {
            return e.toLocaleDateString(t, {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
          }
        : function(e) {
            return r.a.format(e, "mediumDate");
          };
    },
    333: function(e, t, n) {
      "use strict";
      n(213), n(195), n(291);
      var r = n(3);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style include="lumo-menu-overlay">\n      [part="overlay"] {\n        /*\n        Width:\n            date cell widths\n          + month calendar side padding\n          + year scroller width\n        */\n        width:\n          calc(\n              var(--lumo-size-m) * 7\n            + var(--lumo-space-xs) * 2\n            + 57px\n          );\n        height: 100%;\n        max-height: calc(var(--lumo-size-m) * 14);\n        overflow: hidden;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      [part="content"] {\n        padding: 0;\n        height: 100%;\n        overflow: hidden;\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      @media (max-width: 420px), (max-height: 420px) {\n        [part="overlay"] {\n          width: 100vw;\n          height: 70vh;\n          max-height: 70vh;\n        }\n      }\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var i = Object(r.a)(o());
      document.head.appendChild(i.content);
      n(202), n(196), n(219);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-button" theme-for="vaadin-button">\n  <template>\n    <style>\n      :host {\n        /* Sizing */\n        --lumo-button-size: var(--lumo-size-m);\n        min-width: calc(var(--lumo-button-size) * 2);\n        height: var(--lumo-button-size);\n        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);\n        margin: var(--lumo-space-xs) 0;\n        box-sizing: border-box;\n        /* Style */\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 500;\n        color: var(--lumo-primary-text-color);\n        background-color: var(--lumo-contrast-5pct);\n        border-radius: var(--lumo-border-radius);\n        cursor: default;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Set only for the internal parts so we don’t affect the host vertical alignment */\n      [part="label"],\n      [part="prefix"],\n      [part="suffix"] {\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      [part="label"] {\n        padding: calc(var(--lumo-button-size) / 6) 0;\n      }\n\n      :host([theme~="small"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-button-size: var(--lumo-size-s);\n      }\n\n      :host([theme~="large"]) {\n        font-size: var(--lumo-font-size-l);\n        --lumo-button-size: var(--lumo-size-l);\n      }\n\n      /* This needs to be the last selector for it to take priority */\n      :host([disabled][disabled]) {\n        pointer-events: none;\n        color: var(--lumo-disabled-text-color);\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      /* For interaction states */\n      :host::before,\n      :host::after {\n        content: "";\n        /* We rely on the host always being relative */\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: currentColor;\n        border-radius: inherit;\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n      }\n\n      /* Hover */\n\n      :host(:hover)::before {\n        opacity: 0.05;\n      }\n\n      /* Disable hover for touch devices */\n      @media (pointer: coarse) {\n        :host(:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      /* Active */\n\n      :host::after {\n        transition: opacity 1.4s, transform 0.1s;\n        filter: blur(8px);\n      }\n\n      :host([active])::before {\n        opacity: 0.1;\n        transition-duration: 0s;\n      }\n\n      :host([active])::after {\n        opacity: 0.1;\n        transition-duration: 0s, 0s;\n        transform: scale(0);\n      }\n\n      /* Keyboard focus */\n\n      :host([focus-ring]) {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Types (primary, tertiary, tertiary-inline */\n\n      :host([theme~="tertiary"]),\n      :host([theme~="tertiary-inline"]) {\n        background-color: transparent !important;\n        transition: opacity 0.2s;\n        min-width: 0;\n      }\n\n      :host([theme~="tertiary"])::before,\n      :host([theme~="tertiary-inline"])::before {\n        display: none;\n      }\n\n      :host([theme~="tertiary"]) {\n        padding: 0 calc(var(--lumo-button-size) / 6);\n      }\n\n      @media (hover: hover) {\n        :host([theme*="tertiary"]:not([active]):hover) {\n          opacity: 0.8;\n        }\n      }\n\n      :host([theme~="tertiary"][active]),\n      :host([theme~="tertiary-inline"][active]) {\n        opacity: 0.5;\n        transition-duration: 0s;\n      }\n\n      :host([theme~="tertiary-inline"]) {\n        margin: 0;\n        height: auto;\n        padding: 0;\n        line-height: inherit;\n        font-size: inherit;\n      }\n\n      :host([theme~="tertiary-inline"]) [part="label"] {\n        padding: 0;\n        overflow: visible;\n        line-height: inherit;\n      }\n\n      :host([theme~="primary"]) {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n        font-weight: 600;\n        min-width: calc(var(--lumo-button-size) * 2.5);\n      }\n\n      :host([theme~="primary"][disabled]) {\n        background-color: var(--lumo-primary-color-50pct);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      :host([theme~="primary"]:hover)::before {\n        opacity: 0.1;\n      }\n\n      :host([theme~="primary"][active])::before {\n        background-color: var(--lumo-shade-20pct);\n      }\n\n      @media (pointer: coarse) {\n        :host([theme~="primary"][active])::before {\n          background-color: var(--lumo-shade-60pct);\n        }\n\n        :host([theme~="primary"]:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      :host([theme~="primary"][active])::after {\n        opacity: 0.2;\n      }\n\n      /* Colors (success, error, contrast) */\n\n      :host([theme~="success"]) {\n        color: var(--lumo-success-text-color);\n      }\n\n      :host([theme~="success"][theme~="primary"]) {\n        background-color: var(--lumo-success-color);\n        color: var(--lumo-success-contrast-color);\n      }\n\n      :host([theme~="success"][theme~="primary"][disabled]) {\n        background-color: var(--lumo-success-color-50pct);\n      }\n\n      :host([theme~="error"]) {\n        color: var(--lumo-error-text-color);\n      }\n\n      :host([theme~="error"][theme~="primary"]) {\n        background-color: var(--lumo-error-color);\n        color: var(--lumo-error-contrast-color);\n      }\n\n      :host([theme~="error"][theme~="primary"][disabled]) {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([theme~="contrast"]) {\n        color: var(--lumo-contrast);\n      }\n\n      :host([theme~="contrast"][theme~="primary"]) {\n        background-color: var(--lumo-contrast);\n        color: var(--lumo-base-color);\n      }\n\n      :host([theme~="contrast"][theme~="primary"][disabled]) {\n        background-color: var(--lumo-contrast-50pct);\n      }\n\n      /* Icons */\n\n      [part] ::slotted(iron-icon) {\n        display: inline-block;\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part] ::slotted(iron-icon[icon^="vaadin:"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part="prefix"] {\n        margin-left: -0.25em;\n        margin-right: 0.25em;\n      }\n\n      [part="suffix"] {\n        margin-left: 0.25em;\n        margin-right: -0.25em;\n      }\n\n      /* Icon-only */\n\n      :host([theme~="icon"]) {\n        min-width: var(--lumo-button-size);\n        padding-left: calc(var(--lumo-button-size) / 4);\n        padding-right: calc(var(--lumo-button-size) / 4);\n      }\n\n      :host([theme~="icon"]) [part="prefix"],\n      :host([theme~="icon"]) [part="suffix"] {\n        margin-left: 0;\n        margin-right: 0;\n      }\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      var s = Object(r.a)(a());
      document.head.appendChild(s.content);
      var l = n(25),
        u = n(45),
        c = n(197);
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
      function p(e, t, n) {
        return (p =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = v(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function m(e, t, n) {
        return t && f(e.prototype, t), n && f(e, n), e;
      }
      function y(e, t) {
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
      function v(e) {
        return (v = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function b(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && g(e, t);
      }
      function g(e, t) {
        return (g =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var _ = function(e) {
          return (function(t) {
            function n() {
              return h(this, n), y(this, v(n).apply(this, arguments));
            }
            return (
              b(n, e),
              m(n, null, [
                {
                  key: "properties",
                  get: function() {
                    var e = {
                      tabindex: {
                        type: Number,
                        value: 0,
                        reflectToAttribute: !0,
                        observer: "_tabindexChanged",
                      },
                    };
                    return window.ShadyDOM && (e.tabIndex = e.tabindex), e;
                  },
                },
              ]),
              n
            );
          })();
        },
        w = function(e) {
          return (function(t) {
            function n() {
              return h(this, n), y(this, v(n).apply(this, arguments));
            }
            return (
              b(n, _(e)),
              m(
                n,
                [
                  {
                    key: "ready",
                    value: function() {
                      var e = this;
                      this.addEventListener("focusin", function(t) {
                        t.composedPath()[0] === e
                          ? e._focus(t)
                          : -1 === t.composedPath().indexOf(e.focusElement) ||
                            e.disabled ||
                            e._setFocused(!0);
                      }),
                        this.addEventListener("focusout", function(t) {
                          return e._setFocused(!1);
                        }),
                        p(v(n.prototype), "ready", this).call(this);
                      var t = function(e) {
                        e.composed ||
                          e.target.dispatchEvent(
                            new CustomEvent(e.type, {
                              bubbles: !0,
                              composed: !0,
                              cancelable: !1,
                            })
                          );
                      };
                      this.shadowRoot.addEventListener("focusin", t),
                        this.shadowRoot.addEventListener("focusout", t),
                        this.addEventListener("keydown", function(t) {
                          if (!t.defaultPrevented && 9 === t.keyCode)
                            if (t.shiftKey)
                              (e._isShiftTabbing = !0),
                                HTMLElement.prototype.focus.apply(e),
                                e._setFocused(!1),
                                setTimeout(function() {
                                  return (e._isShiftTabbing = !1);
                                }, 0);
                            else {
                              var n = window.navigator.userAgent.match(
                                /Firefox\/(\d\d\.\d)/
                              );
                              if (
                                n &&
                                parseFloat(n[1]) >= 63 &&
                                parseFloat(n[1]) < 66 &&
                                e.parentNode &&
                                e.nextSibling
                              ) {
                                var r = document.createElement("input");
                                (r.style.position = "absolute"),
                                  (r.style.opacity = 0),
                                  (r.tabIndex = e.tabIndex),
                                  e.parentNode.insertBefore(r, e.nextSibling),
                                  r.focus(),
                                  r.addEventListener("focusout", function() {
                                    return e.parentNode.removeChild(r);
                                  });
                              }
                            }
                        }),
                        !this.autofocus ||
                          this.focused ||
                          this.disabled ||
                          window.requestAnimationFrame(function() {
                            e._focus(),
                              e._setFocused(!0),
                              e.setAttribute("focus-ring", "");
                          }),
                        (this._boundKeydownListener = this._bodyKeydownListener.bind(
                          this
                        )),
                        (this._boundKeyupListener = this._bodyKeyupListener.bind(
                          this
                        ));
                    },
                  },
                  {
                    key: "connectedCallback",
                    value: function() {
                      p(v(n.prototype), "connectedCallback", this).call(this),
                        document.body.addEventListener(
                          "keydown",
                          this._boundKeydownListener,
                          !0
                        ),
                        document.body.addEventListener(
                          "keyup",
                          this._boundKeyupListener,
                          !0
                        );
                    },
                  },
                  {
                    key: "disconnectedCallback",
                    value: function() {
                      p(v(n.prototype), "disconnectedCallback", this).call(
                        this
                      ),
                        document.body.removeEventListener(
                          "keydown",
                          this._boundKeydownListener,
                          !0
                        ),
                        document.body.removeEventListener(
                          "keyup",
                          this._boundKeyupListener,
                          !0
                        ),
                        this.hasAttribute("focused") && this._setFocused(!1);
                    },
                  },
                  {
                    key: "_setFocused",
                    value: function(e) {
                      e
                        ? this.setAttribute("focused", "")
                        : this.removeAttribute("focused"),
                        e && this._tabPressed
                          ? this.setAttribute("focus-ring", "")
                          : this.removeAttribute("focus-ring");
                    },
                  },
                  {
                    key: "_bodyKeydownListener",
                    value: function(e) {
                      this._tabPressed = 9 === e.keyCode;
                    },
                  },
                  {
                    key: "_bodyKeyupListener",
                    value: function() {
                      this._tabPressed = !1;
                    },
                  },
                  {
                    key: "_focus",
                    value: function(e) {
                      this._isShiftTabbing ||
                        (this.focusElement.focus(), this._setFocused(!0));
                    },
                  },
                  {
                    key: "focus",
                    value: function() {
                      this.focusElement &&
                        !this.disabled &&
                        (this.focusElement.focus(), this._setFocused(!0));
                    },
                  },
                  {
                    key: "blur",
                    value: function() {
                      this.focusElement.blur(), this._setFocused(!1);
                    },
                  },
                  {
                    key: "_disabledChanged",
                    value: function(e) {
                      (this.focusElement.disabled = e),
                        e
                          ? (this.blur(),
                            (this._previousTabIndex = this.tabindex),
                            (this.tabindex = -1),
                            this.setAttribute("aria-disabled", "true"))
                          : (void 0 !== this._previousTabIndex &&
                              (this.tabindex = this._previousTabIndex),
                            this.removeAttribute("aria-disabled"));
                    },
                  },
                  {
                    key: "_tabindexChanged",
                    value: function(e) {
                      void 0 !== e && (this.focusElement.tabIndex = e),
                        this.disabled &&
                          this.tabindex &&
                          (-1 !== this.tabindex &&
                            (this._previousTabIndex = this.tabindex),
                          (this.tabindex = e = void 0)),
                        window.ShadyDOM &&
                          this.setProperties({ tabIndex: e, tabindex: e });
                    },
                  },
                  {
                    key: "click",
                    value: function() {
                      this.disabled ||
                        p(v(n.prototype), "click", this).call(this);
                    },
                  },
                  {
                    key: "focusElement",
                    get: function() {
                      return (
                        window.console.warn(
                          "Please implement the 'focusElement' property in <".concat(
                            this.localName,
                            ">"
                          )
                        ),
                        this
                      );
                    },
                  },
                ],
                [
                  {
                    key: "properties",
                    get: function() {
                      return {
                        autofocus: { type: Boolean },
                        _previousTabIndex: { type: Number },
                        disabled: {
                          type: Boolean,
                          observer: "_disabledChanged",
                          reflectToAttribute: !0,
                        },
                        _isShiftTabbing: { type: Boolean },
                      };
                    },
                  },
                ]
              ),
              n
            );
          })();
        },
        k = n(11),
        x = n(21),
        O = n(24),
        D = /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
      function S(e, t) {
        if ("function" == typeof e) {
          var n = D.exec(e.toString());
          if (n)
            try {
              e = new Function(n[1]);
            } catch (r) {
              console.log(
                "vaadin-development-mode-detector: uncommentAndRun() failed",
                r
              );
            }
          return e(t);
        }
      }
      window.Vaadin = window.Vaadin || {};
      var E = function(e, t) {
        if (window.Vaadin.developmentMode) return S(e, t);
      };
      function j() {}
      void 0 === window.Vaadin.developmentMode &&
        (window.Vaadin.developmentMode = (function() {
          try {
            return (
              localStorage.getItem("vaadin.developmentmode.force") ||
              (["localhost", "127.0.0.1"].indexOf(window.location.hostname) >=
                0 &&
                !S(function() {
                  return !0;
                }) &&
                !(function() {
                  if (
                    window.Vaadin &&
                    window.Vaadin.Flow &&
                    window.Vaadin.Flow.clients
                  ) {
                    var e = Object.keys(window.Vaadin.Flow.clients)
                      .map(function(e) {
                        return window.Vaadin.Flow.clients[e];
                      })
                      .filter(function(e) {
                        return e.productionMode;
                      });
                    if (e.length > 0) return !0;
                  }
                  return !1;
                })())
            );
          } catch (e) {
            return !1;
          }
        })());
      var C,
        P = function() {
          return E(j);
        };
      function z(e) {
        return (z =
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
      function T(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function A(e, t) {
        return !t || ("object" !== z(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
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
                    null !== (e = M(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function M(e) {
        return (M = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function $(e, t) {
        return ($ =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      window.Vaadin || (window.Vaadin = {}),
        (window.Vaadin.registrations = window.Vaadin.registrations || []),
        (window.Vaadin.developmentModeCallback =
          window.Vaadin.developmentModeCallback || {}),
        (window.Vaadin.developmentModeCallback[
          "vaadin-usage-statistics"
        ] = function() {
          P && P();
        });
      var F = function(e) {
          return (function(t) {
            function n() {
              return (
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n),
                A(this, M(n).apply(this, arguments))
              );
            }
            var r, o, i;
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && $(e, t);
              })(n, e),
              (r = n),
              (i = [
                {
                  key: "_finalizeClass",
                  value: function() {
                    I(M(n), "_finalizeClass", this).call(this),
                      this.is &&
                        (window.Vaadin.registrations.push(this),
                        window.Vaadin.developmentModeCallback &&
                          ((C = x.a.debounce(C, k.b, function() {
                            window.Vaadin.developmentModeCallback[
                              "vaadin-usage-statistics"
                            ]();
                          })),
                          Object(O.a)(C)));
                  },
                },
              ]),
              (o = [
                {
                  key: "ready",
                  value: function() {
                    I(M(n.prototype), "ready", this).call(this),
                      null === document.doctype &&
                        console.warn(
                          'Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.'
                        );
                  },
                },
              ]) && T(r.prototype, o),
              i && T(r, i),
              n
            );
          })();
        },
        L = n(35);
      function Y(e) {
        return (Y =
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
      function V() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: "\\2003";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part="prefix"],\n      [part="suffix"] {\n        flex: none;\n      }\n\n      [part="label"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class="vaadin-button-container">\n      <div part="prefix">\n        <slot name="prefix"></slot>\n      </div>\n      <div part="label">\n        <slot></slot>\n      </div>\n      <div part="suffix">\n        <slot name="suffix"></slot>\n      </div>\n    </div>\n    <button id="button" type="button" aria-label$="[[_ariaLabel]]"></button>\n',
          ],
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: "\\\\2003";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part="prefix"],\n      [part="suffix"] {\n        flex: none;\n      }\n\n      [part="label"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class="vaadin-button-container">\n      <div part="prefix">\n        <slot name="prefix"></slot>\n      </div>\n      <div part="label">\n        <slot></slot>\n      </div>\n      <div part="suffix">\n        <slot name="suffix"></slot>\n      </div>\n    </div>\n    <button id="button" type="button" aria-label\\$="[[_ariaLabel]]"></button>\n',
          ]
        );
        return (
          (V = function() {
            return e;
          }),
          e
        );
      }
      function R(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function B(e, t) {
        return !t || ("object" !== Y(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function N(e, t, n) {
        return (N =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = H(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function H(e) {
        return (H = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function q(e, t) {
        return (q =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var W = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            B(this, H(t).apply(this, arguments))
          );
        }
        var n, o, i;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && q(e, t);
          })(t, F(w(Object(c["a"])(Object(u["a"])(l["a"]))))),
          (n = t),
          (i = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(V());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-button";
              },
            },
            {
              key: "version",
              get: function() {
                return "2.1.4";
              },
            },
            {
              key: "properties",
              get: function() {
                return { _ariaLabel: { type: String } };
              },
            },
            {
              key: "observedAttributes",
              get: function() {
                return N(H(t), "observedAttributes", this).concat([
                  "aria-label",
                ]);
              },
            },
          ]),
          (o = [
            {
              key: "ready",
              value: function() {
                N(H(t.prototype), "ready", this).call(this),
                  this.setAttribute("role", "button"),
                  this.$.button.setAttribute("role", "presentation"),
                  this._addActiveListeners(),
                  this._updateAriaLabel(this.getAttribute("aria-label"));
              },
            },
            {
              key: "disconnectedCallback",
              value: function() {
                N(H(t.prototype), "disconnectedCallback", this).call(this),
                  this.hasAttribute("active") && this.removeAttribute("active");
              },
            },
            {
              key: "attributeChangedCallback",
              value: function(e, n, r) {
                N(H(t.prototype), "attributeChangedCallback", this).call(
                  this,
                  e,
                  n,
                  r
                ),
                  "aria-label" === e && this._updateAriaLabel(r);
              },
            },
            {
              key: "_addActiveListeners",
              value: function() {
                var e = this;
                Object(L.b)(this, "down", function() {
                  return !e.disabled && e.setAttribute("active", "");
                }),
                  Object(L.b)(this, "up", function() {
                    return e.removeAttribute("active");
                  }),
                  this.addEventListener("keydown", function(t) {
                    return (
                      !e.disabled &&
                      [13, 32].indexOf(t.keyCode) >= 0 &&
                      e.setAttribute("active", "")
                    );
                  }),
                  this.addEventListener("keyup", function() {
                    return e.removeAttribute("active");
                  }),
                  this.addEventListener("blur", function() {
                    return e.removeAttribute("active");
                  });
              },
            },
            {
              key: "_updateAriaLabel",
              value: function(e) {
                this._ariaLabel = null != e ? e : this.innerText;
              },
            },
            {
              key: "focusElement",
              get: function() {
                return this.$.button;
              },
            },
          ]) && R(n.prototype, o),
          i && R(n, i),
          t
        );
      })();
      function K() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">\n  <template>\n    <style>\n      :host {\n        position: relative;\n        background-color: transparent;\n        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */\n        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));\n        background-size: 57px 100%;\n        background-position: top right;\n        background-repeat: no-repeat;\n        cursor: default;\n      }\n\n      /* Month scroller */\n\n      [part="months"] {\n        /* Month calendar height:\n              header height + margin-bottom\n            + weekdays height + margin-bottom\n            + date cell heights\n            + small margin between month calendars\n        */\n        --vaadin-infinite-scroller-item-height:\n          calc(\n              var(--lumo-font-size-l) + var(--lumo-space-m)\n            + var(--lumo-font-size-xs) + var(--lumo-space-s)\n            + var(--lumo-size-m) * 6\n            + var(--lumo-space-s)\n          );\n        --vaadin-infinite-scroller-buffer-offset: 20%;\n        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        position: relative;\n        margin-right: 57px;\n      }\n\n      /* Year scroller */\n\n      [part="years"] {\n        /* TODO get rid of fixed magic number */\n        --vaadin-infinite-scroller-buffer-width: 97px;\n        width: 57px;\n        height: auto;\n        top: 0;\n        bottom: 0;\n        font-size: var(--lumo-font-size-s);\n        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);\n        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n      }\n\n      [part="year-number"],\n      [part="year-separator"] {\n        opacity: 0.5;\n        transition: 0.2s opacity;\n      }\n\n      [part="years"]:hover [part="year-number"],\n      [part="years"]:hover [part="year-separator"] {\n        opacity: 1;\n      }\n\n      /* TODO unsupported selector */\n      #scrollers {\n        position: static;\n        display: block;\n      }\n\n      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the\n       * width of the year scroller */\n      #scrollers[desktop] [part="months"] {\n        right: auto;\n      }\n\n      /* Year scroller position indicator */\n      [part="years"]::before {\n        border: none;\n        width: 1em;\n        height: 1em;\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        transform: translate(-75%, -50%) rotate(45deg);\n        border-top-right-radius: calc(var(--lumo-border-radius) / 2);\n        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);\n        z-index: 1;\n      }\n\n      [part="year-number"],\n      [part="year-separator"] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50%;\n        transform: translateY(-50%);\n      }\n\n      [part="years"] [part="year-separator"]::after {\n        color: var(--lumo-disabled-text-color);\n        content: "•";\n      }\n\n      /* Current year */\n\n      [part="years"] [part="year-number"][current] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Toolbar (footer) */\n\n      [part="toolbar"] {\n        padding: var(--lumo-space-s);\n        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);\n        border-bottom-left-radius: var(--lumo-border-radius);\n        margin-right: 57px;\n      }\n\n      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {\n        [part="toolbar"] {\n          box-shadow: none;\n        }\n      }\n\n      /* Today and Cancel buttons */\n\n      /* TODO: Would be great if I could apply the "tertiary" theme from here instead of copying those styles */\n      [part="toolbar"] [part$="button"] {\n        background-color: transparent;\n        margin: 0;\n        min-width: 0;\n        padding: 0 0.75em;\n      }\n\n      /* Narrow viewport mode (fullscreen) */\n\n      :host([fullscreen]) [part="toolbar"] {\n        order: -1;\n        background-color: var(--lumo-base-color);\n      }\n\n      :host([fullscreen]) [part="overlay-header"] {\n        order: -2;\n        height: var(--lumo-size-m);\n        padding: var(--lumo-space-s);\n        position: absolute;\n        left: 0;\n        right: 0;\n        justify-content: center;\n      }\n\n      :host([fullscreen]) [part="toggle-button"],\n      :host([fullscreen]) [part="clear-button"],\n      [part="overlay-header"] [part="label"] {\n        display: none;\n      }\n\n      /* Very narrow screen (year scroller initially hidden) */\n\n      [part="years-toggle-button"] {\n        position: relative;\n        right: auto;\n        display: flex;\n        align-items: center;\n        height: var(--lumo-size-s);\n        padding: 0 0.5em;\n        border-radius: var(--lumo-border-radius);\n        z-index: 3;\n        color: var(--lumo-primary-text-color);\n        font-weight: 500;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      :host([years-visible]) [part="years-toggle-button"] {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part="years-toggle-button"]::before {\n        content: none;\n      }\n\n      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */\n      @media screen and (max-width: 374px) {\n        :host {\n          background-image: none;\n        }\n\n        [part="years"] {\n          background-color: var(--lumo-shade-5pct);\n        }\n\n        [part="toolbar"],\n        [part="months"] {\n          margin-right: 0;\n        }\n\n        /* TODO make date-picker adapt to the width of the years part */\n        [part="years"] {\n          --vaadin-infinite-scroller-buffer-width: 90px;\n          width: 50px;\n        }\n\n        :host([years-visible]) [part="months"] {\n          padding-left: 50px;\n        }\n      }\n    </style>\n  </template>\n</dom-module>',
          ],
          [
            '<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">\n  <template>\n    <style>\n      :host {\n        position: relative;\n        background-color: transparent;\n        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */\n        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));\n        background-size: 57px 100%;\n        background-position: top right;\n        background-repeat: no-repeat;\n        cursor: default;\n      }\n\n      /* Month scroller */\n\n      [part="months"] {\n        /* Month calendar height:\n              header height + margin-bottom\n            + weekdays height + margin-bottom\n            + date cell heights\n            + small margin between month calendars\n        */\n        --vaadin-infinite-scroller-item-height:\n          calc(\n              var(--lumo-font-size-l) + var(--lumo-space-m)\n            + var(--lumo-font-size-xs) + var(--lumo-space-s)\n            + var(--lumo-size-m) * 6\n            + var(--lumo-space-s)\n          );\n        --vaadin-infinite-scroller-buffer-offset: 20%;\n        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        position: relative;\n        margin-right: 57px;\n      }\n\n      /* Year scroller */\n\n      [part="years"] {\n        /* TODO get rid of fixed magic number */\n        --vaadin-infinite-scroller-buffer-width: 97px;\n        width: 57px;\n        height: auto;\n        top: 0;\n        bottom: 0;\n        font-size: var(--lumo-font-size-s);\n        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);\n        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n      }\n\n      [part="year-number"],\n      [part="year-separator"] {\n        opacity: 0.5;\n        transition: 0.2s opacity;\n      }\n\n      [part="years"]:hover [part="year-number"],\n      [part="years"]:hover [part="year-separator"] {\n        opacity: 1;\n      }\n\n      /* TODO unsupported selector */\n      #scrollers {\n        position: static;\n        display: block;\n      }\n\n      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the\n       * width of the year scroller */\n      #scrollers[desktop] [part="months"] {\n        right: auto;\n      }\n\n      /* Year scroller position indicator */\n      [part="years"]::before {\n        border: none;\n        width: 1em;\n        height: 1em;\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        transform: translate(-75%, -50%) rotate(45deg);\n        border-top-right-radius: calc(var(--lumo-border-radius) / 2);\n        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);\n        z-index: 1;\n      }\n\n      [part="year-number"],\n      [part="year-separator"] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50%;\n        transform: translateY(-50%);\n      }\n\n      [part="years"] [part="year-separator"]::after {\n        color: var(--lumo-disabled-text-color);\n        content: "•";\n      }\n\n      /* Current year */\n\n      [part="years"] [part="year-number"][current] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Toolbar (footer) */\n\n      [part="toolbar"] {\n        padding: var(--lumo-space-s);\n        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);\n        border-bottom-left-radius: var(--lumo-border-radius);\n        margin-right: 57px;\n      }\n\n      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {\n        [part="toolbar"] {\n          box-shadow: none;\n        }\n      }\n\n      /* Today and Cancel buttons */\n\n      /* TODO: Would be great if I could apply the "tertiary" theme from here instead of copying those styles */\n      [part="toolbar"] [part\\$="button"] {\n        background-color: transparent;\n        margin: 0;\n        min-width: 0;\n        padding: 0 0.75em;\n      }\n\n      /* Narrow viewport mode (fullscreen) */\n\n      :host([fullscreen]) [part="toolbar"] {\n        order: -1;\n        background-color: var(--lumo-base-color);\n      }\n\n      :host([fullscreen]) [part="overlay-header"] {\n        order: -2;\n        height: var(--lumo-size-m);\n        padding: var(--lumo-space-s);\n        position: absolute;\n        left: 0;\n        right: 0;\n        justify-content: center;\n      }\n\n      :host([fullscreen]) [part="toggle-button"],\n      :host([fullscreen]) [part="clear-button"],\n      [part="overlay-header"] [part="label"] {\n        display: none;\n      }\n\n      /* Very narrow screen (year scroller initially hidden) */\n\n      [part="years-toggle-button"] {\n        position: relative;\n        right: auto;\n        display: flex;\n        align-items: center;\n        height: var(--lumo-size-s);\n        padding: 0 0.5em;\n        border-radius: var(--lumo-border-radius);\n        z-index: 3;\n        color: var(--lumo-primary-text-color);\n        font-weight: 500;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      :host([years-visible]) [part="years-toggle-button"] {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part="years-toggle-button"]::before {\n        content: none;\n      }\n\n      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */\n      @media screen and (max-width: 374px) {\n        :host {\n          background-image: none;\n        }\n\n        [part="years"] {\n          background-color: var(--lumo-shade-5pct);\n        }\n\n        [part="toolbar"],\n        [part="months"] {\n          margin-right: 0;\n        }\n\n        /* TODO make date-picker adapt to the width of the years part */\n        [part="years"] {\n          --vaadin-infinite-scroller-buffer-width: 90px;\n          width: 50px;\n        }\n\n        :host([years-visible]) [part="months"] {\n          padding-left: 50px;\n        }\n      }\n    </style>\n  </template>\n</dom-module>',
          ]
        );
        return (
          (K = function() {
            return e;
          }),
          e
        );
      }
      customElements.define(W.is, W);
      var X = Object(r.a)(K());
      function U() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">\n  <template>\n    <style>\n      :host {\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        -webkit-tap-highlight-color: transparent;\n        user-select: none;\n        font-size: var(--lumo-font-size-m);\n        color: var(--lumo-body-text-color);\n        text-align: center;\n        padding: 0 var(--lumo-space-xs);\n      }\n\n      /* Month header */\n\n      [part="month-header"] {\n        color: var(--lumo-header-text-color);\n        font-size: var(--lumo-font-size-l);\n        line-height: 1;\n        font-weight: 500;\n        margin-bottom: var(--lumo-space-m);\n      }\n\n      /* Week days and numbers */\n\n      [part="weekdays"],\n      [part="weekday"],\n      [part="week-numbers"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: 1;\n        color: var(--lumo-tertiary-text-color);\n      }\n\n      [part="weekdays"] {\n        margin-bottom: var(--lumo-space-s);\n      }\n\n      /* TODO should have part="week-number" for the cell in weekdays-container */\n      [part="weekday"]:empty,\n      [part="week-numbers"] {\n        width: var(--lumo-size-xs);\n      }\n\n      /* Date and week number cells */\n\n      [part="date"],\n      [part="week-number"] {\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        height: var(--lumo-size-m);\n        position: relative;\n      }\n\n      [part="date"] {\n        transition: color 0.1s;\n      }\n\n      /* Today date */\n\n      [part="date"][today] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Focused date */\n\n      [part="date"]::before {\n        content: "";\n        position: absolute;\n        z-index: -1;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        min-width: 2em;\n        min-height: 2em;\n        width: 80%;\n        height: 80%;\n        max-height: 100%;\n        max-width: 100%;\n        border-radius: var(--lumo-border-radius);\n      }\n\n      [part="date"][focused]::before {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      :host(:not([focused])) [part="date"][focused]::before {\n        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;\n      }\n\n      @keyframes vaadin-date-picker-month-calendar-focus-date {\n        50% {\n          box-shadow: 0 0 0 2px transparent;\n        }\n      }\n\n      /* TODO should not rely on the role attribute */\n      [part="date"][role="button"]:not([disabled]):not([selected]):hover::before {\n        background-color: var(--lumo-primary-color-10pct);\n      }\n\n      [part="date"][selected] {\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part="date"][selected]::before {\n        background-color: var(--lumo-primary-color);\n      }\n\n      [part="date"][disabled] {\n        color: var(--lumo-disabled-text-color);\n      }\n\n      @media (pointer: coarse) {\n        [part="date"]:hover:not([selected])::before,\n        [part="date"][focused]:not([selected])::before {\n          display: none;\n        }\n\n        [part="date"][role="button"]:not([disabled]):active::before {\n          display: block;\n        }\n\n        [part="date"][selected]::before {\n          box-shadow: none;\n        }\n      }\n\n      /* Disabled */\n\n      :host([disabled]) * {\n        color: var(--lumo-disabled-text-color) !important;\n      }\n    </style>\n  </template>\n</dom-module><custom-style>\n  <style>\n    @keyframes vaadin-date-picker-month-calendar-focus-date {\n      50% {\n        box-shadow: 0 0 0 2px transparent;\n      }\n    }\n  </style>\n</custom-style>',
        ]);
        return (
          (U = function() {
            return e;
          }),
          e
        );
      }
      document.head.appendChild(X.content);
      var J = Object(r.a)(U());
      document.head.appendChild(J.content);
      n(238);
      var Z = document.createElement("template");
      (Z.innerHTML =
        '<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(Z.content);
      var G = document.createElement("template");
      function Q() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '<dom-module id="lumo-text-field" theme-for="vaadin-text-field">\n  <template>\n    <style include="lumo-required-field lumo-field-button">\n      :host {\n        --lumo-text-field-size: var(--lumo-size-m);\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-text-field-size);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      :host([focused]:not([readonly])) [part="label"] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part="input-field"] ::slotted([part="value"]) {\n        cursor: inherit;\n        min-height: var(--lumo-text-field-size);\n        padding: 0 0.25em;\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n\n      [part="value"]:focus,\n      [part="input-field"] ::slotted(input):focus,\n      [part="input-field"] ::slotted(textarea):focus {\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      /*\n        TODO: CSS custom property in `mask-image` causes crash in Edge\n        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/\n      */\n      @-moz-document url-prefix() {\n        [part="value"],\n        [part="input-field"] ::slotted(input),\n        [part="input-field"] ::slotted(textarea),\n        [part="input-field"] ::slotted([part="value"]) {\n          mask-image: var(--_lumo-text-field-overflow-mask-image);\n        }\n      }\n\n      [part="value"]::-webkit-input-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part="value"]:-ms-input-placeholder {\n        color: inherit;\n        opacity: 0.5;\n      }\n\n      [part="value"]::-moz-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part="value"]::placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.1s;\n        opacity: 0.5;\n      }\n\n      [part="input-field"] {\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);\n        font-weight: 500;\n        line-height: 1;\n        position: relative;\n        cursor: text;\n        box-sizing: border-box;\n      }\n\n      /* Used for hover and activation effects */\n      [part="input-field"]::after {\n        content: "";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border-radius: inherit;\n        pointer-events: none;\n        background-color: var(--lumo-contrast-50pct);\n        opacity: 0;\n        transition: transform 0.15s, opacity 0.2s;\n        transform-origin: 100% 0;\n      }\n\n      /* Hover */\n\n      :host(:hover:not([readonly]):not([focused])) [part="label"] {\n        color: var(--lumo-body-text-color);\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {\n        opacity: 0.1;\n      }\n\n      /* Touch device adjustment */\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part="label"] {\n          color: var(--lumo-secondary-text-color);\n        }\n\n        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {\n          opacity: 0;\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {\n          opacity: 0.2;\n        }\n      }\n\n      /* Trigger when not focusing using the keyboard */\n      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {\n        transform: scaleX(0);\n        transition-duration: 0.15s, 1s;\n      }\n\n      /* Focus-ring */\n\n      :host([focus-ring]) [part="input-field"] {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Read-only and disabled */\n      :host([readonly]) [part="value"]::-webkit-input-placeholder,\n      :host([disabled]) [part="value"]::-webkit-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]:-ms-input-placeholder,\n      :host([disabled]) [part="value"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]::-moz-placeholder,\n      :host([disabled]) [part="value"]::-moz-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]::placeholder,\n      :host([disabled]) [part="value"]::placeholder {\n        opacity: 0;\n      }\n\n      /* Read-only */\n\n      :host([readonly]) [part="input-field"] {\n        color: var(--lumo-secondary-text-color);\n        background-color: transparent;\n        cursor: default;\n      }\n\n      :host([readonly]) [part="input-field"]::after {\n        background-color: transparent;\n        opacity: 1;\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      /* Disabled style */\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part="input-field"] {\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      :host([disabled]) [part="label"],\n      :host([disabled]) [part="value"],\n      :host([disabled]) [part="input-field"] ::slotted(*) {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n\n      /* Invalid style */\n\n      :host([invalid]) [part="input-field"] {\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      :host([invalid]) [part="input-field"]::after {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([invalid][focus-ring]) [part="input-field"] {\n        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n      }\n\n      :host([input-prevented]) [part="input-field"] {\n        color: var(--lumo-error-text-color);\n      }\n\n      /* Small theme */\n\n      :host([theme~="small"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-text-field-size: var(--lumo-size-s);\n      }\n\n      :host([theme~="small"][has-label]) [part="label"] {\n        font-size: var(--lumo-font-size-xs);\n      }\n\n      :host([theme~="small"][has-label]) [part="error-message"] {\n        font-size: var(--lumo-font-size-xxs);\n      }\n\n      /* Text align */\n\n      :host([theme~="align-center"]) [part="value"] {\n        text-align: center;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~="align-right"]) [part="value"] {\n        text-align: right;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      @-moz-document url-prefix() {\n        /* Firefox is smart enough to align overflowing text to right */\n        :host([theme~="align-right"]) [part="value"] {\n          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n        }\n      }\n\n      /* Slotted content */\n\n      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {\n        color: var(--lumo-secondary-text-color);\n        font-weight: 400;\n      }\n\n      /* Slotted icons */\n\n      [part="input-field"] ::slotted(iron-icon) {\n        color: var(--lumo-contrast-60pct);\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part="clear-button"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>',
          ],
          [
            '<dom-module id="lumo-text-field" theme-for="vaadin-text-field">\n  <template>\n    <style include="lumo-required-field lumo-field-button">\n      :host {\n        --lumo-text-field-size: var(--lumo-size-m);\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-text-field-size);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      :host([focused]:not([readonly])) [part="label"] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part="input-field"] ::slotted([part="value"]) {\n        cursor: inherit;\n        min-height: var(--lumo-text-field-size);\n        padding: 0 0.25em;\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n\n      [part="value"]:focus,\n      [part="input-field"] ::slotted(input):focus,\n      [part="input-field"] ::slotted(textarea):focus {\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      /*\n        TODO: CSS custom property in \\`mask-image\\` causes crash in Edge\n        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/\n      */\n      @-moz-document url-prefix() {\n        [part="value"],\n        [part="input-field"] ::slotted(input),\n        [part="input-field"] ::slotted(textarea),\n        [part="input-field"] ::slotted([part="value"]) {\n          mask-image: var(--_lumo-text-field-overflow-mask-image);\n        }\n      }\n\n      [part="value"]::-webkit-input-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part="value"]:-ms-input-placeholder {\n        color: inherit;\n        opacity: 0.5;\n      }\n\n      [part="value"]::-moz-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part="value"]::placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.1s;\n        opacity: 0.5;\n      }\n\n      [part="input-field"] {\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);\n        font-weight: 500;\n        line-height: 1;\n        position: relative;\n        cursor: text;\n        box-sizing: border-box;\n      }\n\n      /* Used for hover and activation effects */\n      [part="input-field"]::after {\n        content: "";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border-radius: inherit;\n        pointer-events: none;\n        background-color: var(--lumo-contrast-50pct);\n        opacity: 0;\n        transition: transform 0.15s, opacity 0.2s;\n        transform-origin: 100% 0;\n      }\n\n      /* Hover */\n\n      :host(:hover:not([readonly]):not([focused])) [part="label"] {\n        color: var(--lumo-body-text-color);\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {\n        opacity: 0.1;\n      }\n\n      /* Touch device adjustment */\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part="label"] {\n          color: var(--lumo-secondary-text-color);\n        }\n\n        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {\n          opacity: 0;\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {\n          opacity: 0.2;\n        }\n      }\n\n      /* Trigger when not focusing using the keyboard */\n      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {\n        transform: scaleX(0);\n        transition-duration: 0.15s, 1s;\n      }\n\n      /* Focus-ring */\n\n      :host([focus-ring]) [part="input-field"] {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Read-only and disabled */\n      :host([readonly]) [part="value"]::-webkit-input-placeholder,\n      :host([disabled]) [part="value"]::-webkit-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]:-ms-input-placeholder,\n      :host([disabled]) [part="value"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]::-moz-placeholder,\n      :host([disabled]) [part="value"]::-moz-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]::placeholder,\n      :host([disabled]) [part="value"]::placeholder {\n        opacity: 0;\n      }\n\n      /* Read-only */\n\n      :host([readonly]) [part="input-field"] {\n        color: var(--lumo-secondary-text-color);\n        background-color: transparent;\n        cursor: default;\n      }\n\n      :host([readonly]) [part="input-field"]::after {\n        background-color: transparent;\n        opacity: 1;\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      /* Disabled style */\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part="input-field"] {\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      :host([disabled]) [part="label"],\n      :host([disabled]) [part="value"],\n      :host([disabled]) [part="input-field"] ::slotted(*) {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n\n      /* Invalid style */\n\n      :host([invalid]) [part="input-field"] {\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      :host([invalid]) [part="input-field"]::after {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([invalid][focus-ring]) [part="input-field"] {\n        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n      }\n\n      :host([input-prevented]) [part="input-field"] {\n        color: var(--lumo-error-text-color);\n      }\n\n      /* Small theme */\n\n      :host([theme~="small"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-text-field-size: var(--lumo-size-s);\n      }\n\n      :host([theme~="small"][has-label]) [part="label"] {\n        font-size: var(--lumo-font-size-xs);\n      }\n\n      :host([theme~="small"][has-label]) [part="error-message"] {\n        font-size: var(--lumo-font-size-xxs);\n      }\n\n      /* Text align */\n\n      :host([theme~="align-center"]) [part="value"] {\n        text-align: center;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~="align-right"]) [part="value"] {\n        text-align: right;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      @-moz-document url-prefix() {\n        /* Firefox is smart enough to align overflowing text to right */\n        :host([theme~="align-right"]) [part="value"] {\n          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n        }\n      }\n\n      /* Slotted content */\n\n      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {\n        color: var(--lumo-secondary-text-color);\n        font-weight: 400;\n      }\n\n      /* Slotted icons */\n\n      [part="input-field"] ::slotted(iron-icon) {\n        color: var(--lumo-contrast-60pct);\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part="clear-button"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>',
          ]
        );
        return (
          (Q = function() {
            return e;
          }),
          e
        );
      }
      (G.innerHTML =
        '<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(G.content);
      var ee = Object(r.a)(Q());
      function te(e) {
        return (te =
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
      function ne(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function re(e, t) {
        return !t || ("object" !== te(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function oe(e, t, n) {
        return (oe =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = ie(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function ie(e) {
        return (ie = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ae(e, t) {
        return (ae =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      document.head.appendChild(ee.content);
      var se = document.createElement("template");
      (se.innerHTML =
        '<dom-module id="vaadin-text-field-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: "\\2003";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part="label"]:empty {\n        display: none;\n      }\n\n      [part="input-field"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part="input-field"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part="input-field"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part="input-field"] ::slotted([part="value"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part="input-field"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part="value"]::-ms-clear,\n      [part="input-field"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part="clear-button"] {\n        cursor: default;\n      }\n\n      [part="clear-button"]::before {\n        content: "✕";\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(se.content);
      var le = {
          default: [
            "list",
            "autofocus",
            "pattern",
            "autocapitalize",
            "autocorrect",
            "maxlength",
            "minlength",
            "name",
            "placeholder",
            "autocomplete",
            "title",
          ],
          accessible: ["disabled", "readonly", "required", "invalid"],
        },
        ue = { DEFAULT: "default", ACCESSIBLE: "accessible" },
        ce = function e(t) {
          return (function(n) {
            function r() {
              return (
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r),
                re(this, ie(r).apply(this, arguments))
              );
            }
            var o, i, a;
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && ae(e, t);
              })(r, w(t)),
              (o = r),
              (a = [
                {
                  key: "properties",
                  get: function() {
                    return {
                      autocomplete: { type: String },
                      autocorrect: { type: String },
                      autocapitalize: { type: String },
                      autoselect: { type: Boolean, value: !1 },
                      clearButtonVisible: { type: Boolean, value: !1 },
                      errorMessage: { type: String, value: "" },
                      label: {
                        type: String,
                        value: "",
                        observer: "_labelChanged",
                      },
                      maxlength: { type: Number },
                      minlength: { type: Number },
                      name: { type: String },
                      placeholder: { type: String },
                      readonly: { type: Boolean, reflectToAttribute: !0 },
                      required: { type: Boolean, reflectToAttribute: !0 },
                      value: {
                        type: String,
                        value: "",
                        observer: "_valueChanged",
                        notify: !0,
                      },
                      invalid: {
                        type: Boolean,
                        reflectToAttribute: !0,
                        notify: !0,
                        value: !1,
                      },
                      hasValue: { type: Boolean, reflectToAttribute: !0 },
                      preventInvalidInput: { type: Boolean },
                      _labelId: { type: String },
                      _errorId: { type: String },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function() {
                    return [
                      "_stateChanged(disabled, readonly, clearButtonVisible, hasValue)",
                      "_hostPropsChanged(" + le.default.join(", ") + ")",
                      "_hostAccessiblePropsChanged(" +
                        le.accessible.join(", ") +
                        ")",
                      "_getActiveErrorId(invalid, errorMessage, _errorId)",
                      "_getActiveLabelId(label, _labelId)",
                    ];
                  },
                },
              ]),
              (i = [
                {
                  key: "_onInput",
                  value: function(e) {
                    var t = this;
                    if (this.__preventInput)
                      return (
                        e.stopImmediatePropagation(),
                        void (this.__preventInput = !1)
                      );
                    if (this.preventInvalidInput) {
                      var n = this.inputElement;
                      if (n.value.length > 0 && !this.checkValidity())
                        return (
                          (n.value = this.value || ""),
                          this.setAttribute("input-prevented", ""),
                          void (this._inputDebouncer = x.a.debounce(
                            this._inputDebouncer,
                            k.d.after(200),
                            function() {
                              t.removeAttribute("input-prevented");
                            }
                          ))
                        );
                    }
                    (this.__userInput = !0), (this.value = e.target.value);
                  },
                },
                {
                  key: "_stateChanged",
                  value: function(e, t, n, r) {
                    !e && !t && n && r
                      ? this.$.clearButton.removeAttribute("hidden")
                      : this.$.clearButton.setAttribute("hidden", !0);
                  },
                },
                {
                  key: "_onChange",
                  value: function(e) {
                    if (!this._valueClearing) {
                      var t = new CustomEvent("change", {
                        detail: { sourceEvent: e },
                        bubbles: e.bubbles,
                        cancelable: e.cancelable,
                      });
                      this.dispatchEvent(t);
                    }
                  },
                },
                {
                  key: "_valueChanged",
                  value: function(e, t) {
                    ("" === e && void 0 === t) ||
                      ((this.hasValue = "" !== e && null != e),
                      this.__userInput
                        ? (this.__userInput = !1)
                        : (void 0 !== e
                            ? (this.inputElement.value = e)
                            : (this.value = this.inputElement.value = ""),
                          this.invalid && this.validate()));
                  },
                },
                {
                  key: "_labelChanged",
                  value: function(e) {
                    "" !== e && null != e
                      ? this.setAttribute("has-label", "")
                      : this.removeAttribute("has-label");
                  },
                },
                {
                  key: "_onSlotChange",
                  value: function() {
                    var e = this,
                      t = this.querySelector(
                        ""
                          .concat(this._slottedTagName, '[slot="')
                          .concat(this._slottedTagName, '"]')
                      );
                    this.value &&
                      ((this.inputElement.value = this.value), this.validate()),
                      t && !this._slottedInput
                        ? (this._validateSlottedValue(t),
                          this._addInputListeners(t),
                          this._addIEListeners(t),
                          (this._slottedInput = t))
                        : !t &&
                          this._slottedInput &&
                          (this._removeInputListeners(this._slottedInput),
                          this._removeIEListeners(this._slottedInput),
                          (this._slottedInput = void 0)),
                      Object.keys(ue)
                        .map(function(e) {
                          return ue[e];
                        })
                        .forEach(function(t) {
                          return e._propagateHostAttributes(
                            le[t].map(function(t) {
                              return e[t];
                            }),
                            t
                          );
                        });
                  },
                },
                {
                  key: "_hostPropsChanged",
                  value: function() {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    this._propagateHostAttributes(t, ue.DEFAULT);
                  },
                },
                {
                  key: "_hostAccessiblePropsChanged",
                  value: function() {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    this._propagateHostAttributes(t, ue.ACCESSIBLE);
                  },
                },
                {
                  key: "_validateSlottedValue",
                  value: function(e) {
                    e.value !== this.value &&
                      (console.warn(
                        "Please define value on the vaadin-text-field component!"
                      ),
                      (e.value = ""));
                  },
                },
                {
                  key: "_propagateHostAttributes",
                  value: function(e, t) {
                    var n = this,
                      r = this.inputElement,
                      o = le[t];
                    "accessible" === t
                      ? o.forEach(function(t, o) {
                          n._setOrToggleAttribute(t, e[o], r),
                            n._setOrToggleAttribute("aria-".concat(t), e[o], r);
                        })
                      : o.forEach(function(t, o) {
                          n._setOrToggleAttribute(t, e[o], r);
                        });
                  },
                },
                {
                  key: "_setOrToggleAttribute",
                  value: function(e, t, n) {
                    e &&
                      n &&
                      (t
                        ? n.setAttribute(e, "boolean" == typeof t ? "" : t)
                        : n.removeAttribute(e));
                  },
                },
                {
                  key: "checkValidity",
                  value: function() {
                    return this.required ||
                      this.pattern ||
                      this.maxlength ||
                      this.minlength
                      ? this.inputElement.checkValidity()
                      : !this.invalid;
                  },
                },
                {
                  key: "_addInputListeners",
                  value: function(e) {
                    e.addEventListener("input", this._boundOnInput),
                      e.addEventListener("change", this._boundOnChange),
                      e.addEventListener("blur", this._boundOnBlur),
                      e.addEventListener("focus", this._boundOnFocus);
                  },
                },
                {
                  key: "_removeInputListeners",
                  value: function(e) {
                    e.removeEventListener("input", this._boundOnInput),
                      e.removeEventListener("change", this._boundOnChange),
                      e.removeEventListener("blur", this._boundOnBlur),
                      e.removeEventListener("focus", this._boundOnFocus);
                  },
                },
                {
                  key: "ready",
                  value: function() {
                    var t = this;
                    oe(ie(r.prototype), "ready", this).call(this),
                      (this._boundOnInput = this._onInput.bind(this)),
                      (this._boundOnChange = this._onChange.bind(this)),
                      (this._boundOnBlur = this._onBlur.bind(this)),
                      (this._boundOnFocus = this._onFocus.bind(this));
                    var n = this.shadowRoot.querySelector('[part="value"]');
                    (this._slottedInput = this.querySelector(
                      ""
                        .concat(this._slottedTagName, '[slot="')
                        .concat(this._slottedTagName, '"]')
                    )),
                      this._addInputListeners(n),
                      this._addIEListeners(n),
                      this._slottedInput &&
                        (this._addIEListeners(this._slottedInput),
                        this._addInputListeners(this._slottedInput)),
                      this.shadowRoot
                        .querySelector('[name="input"], [name="textarea"]')
                        .addEventListener(
                          "slotchange",
                          this._onSlotChange.bind(this)
                        ),
                      (window.ShadyCSS && window.ShadyCSS.nativeCss) ||
                        this.updateStyles(),
                      this.$.clearButton.addEventListener(
                        "mousedown",
                        function() {
                          return (t._valueClearing = !0);
                        }
                      ),
                      this.$.clearButton.addEventListener(
                        "click",
                        this._onClearButtonClick.bind(this)
                      ),
                      this.addEventListener(
                        "keydown",
                        this._onKeyDown.bind(this)
                      );
                    var o = (e._uniqueId = 1 + e._uniqueId || 0);
                    (this._errorId = ""
                      .concat(this.constructor.is, "-error-")
                      .concat(o)),
                      (this._labelId = ""
                        .concat(this.constructor.is, "-label-")
                        .concat(o));
                  },
                },
                {
                  key: "validate",
                  value: function() {
                    return !(this.invalid = !this.checkValidity());
                  },
                },
                {
                  key: "clear",
                  value: function() {
                    this.value = "";
                  },
                },
                {
                  key: "_onBlur",
                  value: function() {
                    this.validate();
                  },
                },
                {
                  key: "_onFocus",
                  value: function() {
                    var e = this;
                    this.autoselect &&
                      (this.inputElement.select(),
                      setTimeout(function() {
                        e.inputElement.setSelectionRange(0, 9999);
                      }));
                  },
                },
                {
                  key: "_onClearButtonClick",
                  value: function(e) {
                    this.inputElement.focus(),
                      this.clear(),
                      (this._valueClearing = !1),
                      this.inputElement.dispatchEvent(
                        new Event("change", { bubbles: !this._slottedInput })
                      );
                  },
                },
                {
                  key: "_onKeyDown",
                  value: function(e) {
                    27 === e.keyCode && this.clearButtonVisible && this.clear();
                  },
                },
                {
                  key: "_addIEListeners",
                  value: function(e) {
                    var t = this;
                    navigator.userAgent.match(/Trident/) &&
                      ((this._shouldPreventInput = function() {
                        (t.__preventInput = !0),
                          requestAnimationFrame(function() {
                            t.__preventInput = !1;
                          });
                      }),
                      e.addEventListener("focusin", this._shouldPreventInput),
                      e.addEventListener("focusout", this._shouldPreventInput),
                      this._createPropertyObserver(
                        "placeholder",
                        this._shouldPreventInput
                      ));
                  },
                },
                {
                  key: "_removeIEListeners",
                  value: function(e) {
                    navigator.userAgent.match(/Trident/) &&
                      (e.removeEventListener(
                        "focusin",
                        this._shouldPreventInput
                      ),
                      e.removeEventListener(
                        "focusout",
                        this._shouldPreventInput
                      ));
                  },
                },
                {
                  key: "_getActiveErrorId",
                  value: function(e, t, n) {
                    this._setOrToggleAttribute(
                      "aria-describedby",
                      t && e ? n : void 0,
                      this.inputElement
                    );
                  },
                },
                {
                  key: "_getActiveLabelId",
                  value: function(e, t) {
                    this._setOrToggleAttribute(
                      "aria-labelledby",
                      e ? t : void 0,
                      this.inputElement
                    );
                  },
                },
                {
                  key: "_getErrorMessageAriaHidden",
                  value: function(e, t, n) {
                    return (!(t && e ? n : void 0)).toString();
                  },
                },
                {
                  key: "attributeChangedCallback",
                  value: function(e, t, n) {
                    if (
                      (oe(
                        ie(r.prototype),
                        "attributeChangedCallback",
                        this
                      ).call(this, e, t, n),
                      (window.ShadyCSS && window.ShadyCSS.nativeCss) ||
                        !/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(
                          e
                        ) ||
                        this.updateStyles(),
                      /^((?!chrome|android).)*safari/i.test(
                        navigator.userAgent
                      ) && this.root)
                    ) {
                      this.root.querySelectorAll("*").forEach(function(e) {
                        (e.style["-webkit-backface-visibility"] = "visible"),
                          (e.style["-webkit-backface-visibility"] = "");
                      });
                    }
                  },
                },
                {
                  key: "focusElement",
                  get: function() {
                    if (this.shadowRoot) {
                      var e = this.querySelector(
                        ""
                          .concat(this._slottedTagName, '[slot="')
                          .concat(this._slottedTagName, '"]')
                      );
                      return (
                        e || this.shadowRoot.querySelector('[part="value"]')
                      );
                    }
                  },
                },
                {
                  key: "inputElement",
                  get: function() {
                    return this.focusElement;
                  },
                },
                {
                  key: "_slottedTagName",
                  get: function() {
                    return "input";
                  },
                },
              ]) && ne(o.prototype, i),
              a && ne(o, a),
              r
            );
          })();
        };
      function de(e) {
        return (de =
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
      function pe() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style include="vaadin-text-field-shared-styles">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class="vaadin-text-field-container">\n\n      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>\n\n      <div part="input-field">\n\n        <slot name="prefix"></slot>\n\n        <slot name="input">\n          <input part="value">\n        </slot>\n\n        <div part="clear-button" id="clearButton" role="button" aria-label="Clear"></div>\n        <slot name="suffix"></slot>\n\n      </div>\n\n      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>\n\n    </div>\n',
          ],
          [
            '\n    <style include="vaadin-text-field-shared-styles">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class="vaadin-text-field-container">\n\n      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>\n\n      <div part="input-field">\n\n        <slot name="prefix"></slot>\n\n        <slot name="input">\n          <input part="value">\n        </slot>\n\n        <div part="clear-button" id="clearButton" role="button" aria-label="Clear"></div>\n        <slot name="suffix"></slot>\n\n      </div>\n\n      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>\n\n    </div>\n',
          ]
        );
        return (
          (pe = function() {
            return e;
          }),
          e
        );
      }
      function he(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function fe(e, t) {
        return !t || ("object" !== de(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function me(e) {
        return (me = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ye(e, t) {
        return (ye =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var ve = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            fe(this, me(t).apply(this, arguments))
          );
        }
        var n, o, i;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && ye(e, t);
          })(t, F(ce(Object(c["a"])(l["a"])))),
          (n = t),
          (i = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(pe());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-text-field";
              },
            },
            {
              key: "version",
              get: function() {
                return "2.3.5";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  list: { type: String },
                  pattern: { type: String },
                  title: { type: String },
                };
              },
            },
          ]),
          (o = null) && he(n.prototype, o),
          i && he(n, i),
          t
        );
      })();
      function be() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">\n  <template>\n    <style include="lumo-field-button">\n      :host {\n        outline: none;\n      }\n\n      [part="toggle-button"]::before {\n        content: var(--lumo-icons-calendar);\n      }\n\n      [part="clear-button"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (be = function() {
            return e;
          }),
          e
        );
      }
      customElements.define(ve.is, ve);
      var ge = Object(r.a)(be());
      document.head.appendChild(ge.content);
      n(128);
      var _e = n(249),
        we = n(251),
        ke = n(292);
      function xe(e) {
        return (xe =
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
      function Oe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function De(e, t) {
        return !t || ("object" !== xe(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Se(e) {
        return (Se = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Ee(e, t) {
        return (Ee =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var je = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            De(this, Se(t).apply(this, arguments))
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
              t && Ee(e, t);
          })(t, Object(ke["a"])(we["a"])),
          (n = t),
          (o = [
            {
              key: "is",
              get: function() {
                return "vaadin-date-picker-overlay";
              },
            },
          ]),
          (r = null) && Oe(n.prototype, r),
          o && Oe(n, o),
          t
        );
      })();
      customElements.define(je.is, je);
      var Ce = n(31),
        Pe = n(91);
      n(86);
      function ze(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var Te = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, r;
        return (
          (t = e),
          (r = [
            {
              key: "_getISOWeekNumber",
              value: function(e) {
                var t = e.getDay();
                0 === t && (t = 7);
                var n = 4 - t,
                  r = new Date(e.getTime() + 24 * n * 3600 * 1e3),
                  o = new Date(0, 0);
                o.setFullYear(r.getFullYear());
                var i = r.getTime() - o.getTime(),
                  a = Math.round(i / 864e5);
                return Math.floor(a / 7 + 1);
              },
            },
            {
              key: "_dateEquals",
              value: function(e, t) {
                return (
                  e instanceof Date &&
                  t instanceof Date &&
                  e.getFullYear() === t.getFullYear() &&
                  e.getMonth() === t.getMonth() &&
                  e.getDate() === t.getDate()
                );
              },
            },
            {
              key: "_dateAllowed",
              value: function(e, t, n) {
                return (!t || e >= t) && (!n || e <= n);
              },
            },
            {
              key: "_getClosestDate",
              value: function(e, t) {
                return t
                  .filter(function(e) {
                    return void 0 !== e;
                  })
                  .reduce(function(t, n) {
                    return n
                      ? t
                        ? Math.abs(e.getTime() - n.getTime()) <
                          Math.abs(t.getTime() - e.getTime())
                          ? n
                          : t
                        : n
                      : t;
                  });
              },
            },
            {
              key: "_extractDateParts",
              value: function(e) {
                return {
                  day: e.getDate(),
                  month: e.getMonth(),
                  year: e.getFullYear(),
                };
              },
            },
          ]),
          (n = null) && ze(t.prototype, n),
          r && ze(t, r),
          e
        );
      })();
      function Ae(e) {
        return (Ae =
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
      function Ie() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: block;\n      }\n\n      [part="weekdays"],\n      #days {\n        display: flex;\n        flex-wrap: wrap;\n        flex-grow: 1;\n      }\n\n      #days-container,\n      #weekdays-container {\n        display: flex;\n      }\n\n      [part="week-numbers"] {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-shrink: 0;\n      }\n\n      [part="week-numbers"][hidden],\n      [part="weekday"][hidden] {\n        display: none;\n      }\n\n      [part="weekday"],\n      [part="date"] {\n        /* Would use calc(100% / 7) but it doesn\'t work nice on IE */\n        width: 14.285714286%;\n      }\n\n      [part="weekday"]:empty,\n      [part="week-numbers"] {\n        width: 12.5%;\n        flex-shrink: 0;\n      }\n    </style>\n\n    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>\n    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">\n      <div id="weekdays-container">\n        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>\n        <div part="weekdays">\n          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">\n            <div part="weekday" role="heading" aria-label$="[[item.weekDay]]">[[item.weekDayShort]]</div>\n          </template>\n        </div>\n      </div>\n      <div id="days-container">\n        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">\n          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">\n            <div part="week-number" role="heading" aria-label$="[[i18n.week]] [[item]]">[[item]]</div>\n          </template>\n        </div>\n        <div id="days">\n          <template is="dom-repeat" items="[[_days]]">\n            <div part="date" today$="[[_isToday(item)]]" selected$="[[_dateEquals(item, selectedDate)]]" focused$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled$="[[!_dateAllowed(item, minDate, maxDate)]]" role$="[[_getRole(item)]]" aria-label$="[[_getAriaLabel(item)]]" aria-disabled$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>\n          </template>\n        </div>\n      </div>\n    </div>\n',
          ],
          [
            '\n    <style>\n      :host {\n        display: block;\n      }\n\n      [part="weekdays"],\n      #days {\n        display: flex;\n        flex-wrap: wrap;\n        flex-grow: 1;\n      }\n\n      #days-container,\n      #weekdays-container {\n        display: flex;\n      }\n\n      [part="week-numbers"] {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-shrink: 0;\n      }\n\n      [part="week-numbers"][hidden],\n      [part="weekday"][hidden] {\n        display: none;\n      }\n\n      [part="weekday"],\n      [part="date"] {\n        /* Would use calc(100% / 7) but it doesn\'t work nice on IE */\n        width: 14.285714286%;\n      }\n\n      [part="weekday"]:empty,\n      [part="week-numbers"] {\n        width: 12.5%;\n        flex-shrink: 0;\n      }\n    </style>\n\n    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>\n    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">\n      <div id="weekdays-container">\n        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>\n        <div part="weekdays">\n          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">\n            <div part="weekday" role="heading" aria-label\\$="[[item.weekDay]]">[[item.weekDayShort]]</div>\n          </template>\n        </div>\n      </div>\n      <div id="days-container">\n        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">\n          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">\n            <div part="week-number" role="heading" aria-label\\$="[[i18n.week]] [[item]]">[[item]]</div>\n          </template>\n        </div>\n        <div id="days">\n          <template is="dom-repeat" items="[[_days]]">\n            <div part="date" today\\$="[[_isToday(item)]]" selected\\$="[[_dateEquals(item, selectedDate)]]" focused\\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\\$="[[_getRole(item)]]" aria-label\\$="[[_getAriaLabel(item)]]" aria-disabled\\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>\n          </template>\n        </div>\n      </div>\n    </div>\n',
          ]
        );
        return (
          (Ie = function() {
            return e;
          }),
          e
        );
      }
      function Me(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function $e(e, t) {
        return !t || ("object" !== Ae(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Fe(e) {
        return (Fe = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Le(e, t) {
        return (Le =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Ye = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            $e(this, Fe(t).apply(this, arguments))
          );
        }
        var n, o, i;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Le(e, t);
          })(t, Object(c["a"])(Object(u["a"])(l["a"]))),
          (n = t),
          (i = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(Ie());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-month-calendar";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  month: { type: Date, value: new Date() },
                  selectedDate: { type: Date, notify: !0 },
                  focusedDate: Date,
                  showWeekNumbers: { type: Boolean, value: !1 },
                  i18n: { type: Object },
                  ignoreTaps: Boolean,
                  _notTapping: Boolean,
                  minDate: { type: Date, value: null },
                  maxDate: { type: Date, value: null },
                  _days: {
                    type: Array,
                    computed:
                      "_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)",
                  },
                  disabled: {
                    type: Boolean,
                    reflectToAttribute: !0,
                    computed: "_isDisabled(month, minDate, maxDate)",
                  },
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return [
                  "_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)",
                ];
              },
            },
          ]),
          (o = [
            {
              key: "_dateEquals",
              value: function(e, t) {
                return Te._dateEquals(e, t);
              },
            },
            {
              key: "_dateAllowed",
              value: function(e, t, n) {
                return Te._dateAllowed(e, t, n);
              },
            },
            {
              key: "_isDisabled",
              value: function(e, t, n) {
                var r = new Date(0, 0);
                r.setFullYear(e.getFullYear()),
                  r.setMonth(e.getMonth()),
                  r.setDate(1);
                var o = new Date(0, 0);
                return (
                  o.setFullYear(e.getFullYear()),
                  o.setMonth(e.getMonth() + 1),
                  o.setDate(-1),
                  !(
                    t &&
                    n &&
                    t.getMonth() === n.getMonth() &&
                    t.getMonth() === e.getMonth() &&
                    n.getDate() - t.getDate() >= 0
                  ) &&
                    (!this._dateAllowed(r, t, n) && !this._dateAllowed(o, t, n))
                );
              },
            },
            {
              key: "_getTitle",
              value: function(e, t) {
                if (void 0 !== e && void 0 !== t)
                  return this.i18n.formatTitle(
                    t[e.getMonth()],
                    e.getFullYear()
                  );
              },
            },
            {
              key: "_onMonthGridTouchStart",
              value: function() {
                var e = this;
                (this._notTapping = !1),
                  setTimeout(function() {
                    return (e._notTapping = !0);
                  }, 300);
              },
            },
            {
              key: "_dateAdd",
              value: function(e, t) {
                e.setDate(e.getDate() + t);
              },
            },
            {
              key: "_applyFirstDayOfWeek",
              value: function(e, t) {
                if (void 0 !== e && void 0 !== t)
                  return e.slice(t).concat(e.slice(0, t));
              },
            },
            {
              key: "_getWeekDayNames",
              value: function(e, t, n, r) {
                if (
                  void 0 !== e &&
                  void 0 !== t &&
                  void 0 !== n &&
                  void 0 !== r
                )
                  return (
                    (e = this._applyFirstDayOfWeek(e, r)),
                    (t = this._applyFirstDayOfWeek(t, r)),
                    (e = e.map(function(e, n) {
                      return { weekDay: e, weekDayShort: t[n] };
                    }))
                  );
              },
            },
            {
              key: "_getDate",
              value: function(e) {
                return e ? e.getDate() : "";
              },
            },
            {
              key: "_showWeekNumbersChanged",
              value: function(e, t) {
                e && 1 === t
                  ? this.setAttribute("week-numbers", "")
                  : this.removeAttribute("week-numbers");
              },
            },
            {
              key: "_showWeekSeparator",
              value: function(e, t) {
                return e && 1 === t;
              },
            },
            {
              key: "_isToday",
              value: function(e) {
                return this._dateEquals(new Date(), e);
              },
            },
            {
              key: "_getDays",
              value: function(e, t) {
                if (void 0 !== e && void 0 !== t) {
                  var n = new Date(0, 0);
                  for (
                    n.setFullYear(e.getFullYear()),
                      n.setMonth(e.getMonth()),
                      n.setDate(1);
                    n.getDay() !== t;

                  )
                    this._dateAdd(n, -1);
                  for (
                    var r = [], o = n.getMonth(), i = e.getMonth();
                    n.getMonth() === i || n.getMonth() === o;

                  )
                    r.push(n.getMonth() === i ? new Date(n.getTime()) : null),
                      this._dateAdd(n, 1);
                  return r;
                }
              },
            },
            {
              key: "_getWeekNumber",
              value: function(e, t) {
                if (void 0 !== e && void 0 !== t)
                  return (
                    e ||
                      (e = t.reduce(function(e, t) {
                        return !e && t ? t : e;
                      })),
                    Te._getISOWeekNumber(e)
                  );
              },
            },
            {
              key: "_getWeekNumbers",
              value: function(e) {
                var t = this;
                return e
                  .map(function(n) {
                    return t._getWeekNumber(n, e);
                  })
                  .filter(function(e, t, n) {
                    return n.indexOf(e) === t;
                  });
              },
            },
            {
              key: "_handleTap",
              value: function(e) {
                this.ignoreTaps ||
                  this._notTapping ||
                  !e.target.date ||
                  e.target.hasAttribute("disabled") ||
                  ((this.selectedDate = e.target.date),
                  this.dispatchEvent(
                    new CustomEvent("date-tap", { bubbles: !0, composed: !0 })
                  ));
              },
            },
            {
              key: "_preventDefault",
              value: function(e) {
                e.preventDefault();
              },
            },
            {
              key: "_getRole",
              value: function(e) {
                return e ? "button" : "presentation";
              },
            },
            {
              key: "_getAriaLabel",
              value: function(e) {
                if (!e) return "";
                var t =
                  this._getDate(e) +
                  " " +
                  this.i18n.monthNames[e.getMonth()] +
                  " " +
                  e.getFullYear() +
                  ", " +
                  this.i18n.weekdays[e.getDay()];
                return this._isToday(e) && (t += ", " + this.i18n.today), t;
              },
            },
            {
              key: "_getAriaDisabled",
              value: function(e, t, n) {
                if (void 0 !== e && void 0 !== t && void 0 !== n)
                  return this._dateAllowed(e, t, n) ? "false" : "true";
              },
            },
          ]) && Me(n.prototype, o),
          i && Me(n, i),
          t
        );
      })();
      customElements.define(Ye.is, Ye);
      var Ve = n(32),
        Re = n(61);
      function Be(e) {
        return (Be =
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
      function Ne() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n        overflow: hidden;\n        height: 500px;\n      }\n\n      #scroller {\n        position: relative;\n        height: 100%;\n        overflow: auto;\n        outline: none;\n        margin-right: -40px;\n        -webkit-overflow-scrolling: touch;\n        -ms-overflow-style: none;\n        overflow-x: hidden;\n      }\n\n      #scroller.notouchscroll {\n        -webkit-overflow-scrolling: auto;\n      }\n\n      #scroller::-webkit-scrollbar {\n        display: none;\n      }\n\n      .buffer {\n        position: absolute;\n        width: var(--vaadin-infinite-scroller-buffer-width, 100%);\n        box-sizing: border-box;\n        padding-right: 40px;\n        top: var(--vaadin-infinite-scroller-buffer-offset, 0);\n        animation: fadein 0.2s;\n      }\n\n      @keyframes fadein {\n        from { opacity: 0; }\n        to { opacity: 1; }\n      }\n    </style>\n\n    <div id="scroller" on-scroll="_scroll">\n      <div class="buffer"></div>\n      <div class="buffer"></div>\n      <div id="fullHeight"></div>\n    </div>\n',
        ]);
        return (
          (Ne = function() {
            return e;
          }),
          e
        );
      }
      function He(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function qe(e, t) {
        return !t || ("object" !== Be(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function We(e, t, n) {
        return (We =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ke(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function Ke(e) {
        return (Ke = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Xe(e, t) {
        return (Xe =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Ue = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            qe(this, Ke(t).apply(this, arguments))
          );
        }
        var n, o, i;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Xe(e, t);
          })(t, l["a"]),
          (n = t),
          (i = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(Ne());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-infinite-scroller";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  bufferSize: { type: Number, value: 20 },
                  _initialScroll: { value: 5e5 },
                  _initialIndex: { value: 0 },
                  _buffers: Array,
                  _preventScrollEvent: Boolean,
                  _mayHaveMomentum: Boolean,
                  _initialized: Boolean,
                  active: { type: Boolean, observer: "_activated" },
                };
              },
            },
          ]),
          (o = [
            {
              key: "ready",
              value: function() {
                We(Ke(t.prototype), "ready", this).call(this),
                  (this._buffers = Array.prototype.slice.call(
                    this.root.querySelectorAll(".buffer")
                  )),
                  (this.$.fullHeight.style.height =
                    2 * this._initialScroll + "px");
                var e = this.querySelector("template");
                (this._TemplateClass = Object(Ve.b)(e, this, {
                  forwardHostProp: function(e, t) {
                    "index" !== e &&
                      this._buffers.forEach(function(n) {
                        [].forEach.call(n.children, function(n) {
                          n._itemWrapper.instance[e] = t;
                        });
                      });
                  },
                })),
                  navigator.userAgent.toLowerCase().indexOf("firefox") > -1 &&
                    (this.$.scroller.tabIndex = -1);
              },
            },
            {
              key: "_activated",
              value: function(e) {
                e &&
                  !this._initialized &&
                  (this._createPool(), (this._initialized = !0));
              },
            },
            {
              key: "_finishInit",
              value: function() {
                var e = this;
                this._initDone ||
                  (this._buffers.forEach(function(t) {
                    [].forEach.call(t.children, function(t) {
                      return e._ensureStampedInstance(t._itemWrapper);
                    });
                  }, this),
                  this._buffers[0].translateY || this._reset(),
                  (this._initDone = !0));
              },
            },
            {
              key: "_translateBuffer",
              value: function(e) {
                var t = e ? 1 : 0;
                (this._buffers[t].translateY =
                  this._buffers[t ? 0 : 1].translateY +
                  this._bufferHeight * (t ? -1 : 1)),
                  (this._buffers[t].style.transform =
                    "translate3d(0, " + this._buffers[t].translateY + "px, 0)"),
                  (this._buffers[t].updated = !1),
                  this._buffers.reverse();
              },
            },
            {
              key: "_scroll",
              value: function() {
                var e = this;
                if (!this._scrollDisabled) {
                  var t = this.$.scroller.scrollTop;
                  (t < this._bufferHeight ||
                    t > 2 * this._initialScroll - this._bufferHeight) &&
                    ((this._initialIndex = ~~this.position), this._reset());
                  var n = this.root.querySelector(".buffer").offsetTop,
                    r = t > this._buffers[1].translateY + this.itemHeight + n,
                    o = t < this._buffers[0].translateY + this.itemHeight + n;
                  (r || o) && (this._translateBuffer(o), this._updateClones()),
                    this._preventScrollEvent ||
                      (this.dispatchEvent(
                        new CustomEvent("custom-scroll", {
                          bubbles: !1,
                          composed: !0,
                        })
                      ),
                      (this._mayHaveMomentum = !0)),
                    (this._preventScrollEvent = !1),
                    (this._debouncerScrollFinish = x.a.debounce(
                      this._debouncerScrollFinish,
                      k.d.after(200),
                      function() {
                        var t = e.$.scroller.getBoundingClientRect();
                        e._isVisible(e._buffers[0], t) ||
                          e._isVisible(e._buffers[1], t) ||
                          (e.position = e.position);
                      }
                    ));
                }
              },
            },
            {
              key: "_reset",
              value: function() {
                var e = this;
                (this._scrollDisabled = !0),
                  (this.$.scroller.scrollTop = this._initialScroll),
                  (this._buffers[0].translateY =
                    this._initialScroll - this._bufferHeight),
                  (this._buffers[1].translateY = this._initialScroll),
                  this._buffers.forEach(function(e) {
                    e.style.transform =
                      "translate3d(0, " + e.translateY + "px, 0)";
                  }),
                  (this._buffers[0].updated = this._buffers[1].updated = !1),
                  this._updateClones(!0),
                  (this._debouncerUpdateClones = x.a.debounce(
                    this._debouncerUpdateClones,
                    k.d.after(200),
                    function() {
                      (e._buffers[0].updated = e._buffers[1].updated = !1),
                        e._updateClones();
                    }
                  )),
                  (this._scrollDisabled = !1);
              },
            },
            {
              key: "_createPool",
              value: function() {
                var e = this,
                  n = this.getBoundingClientRect();
                this._buffers.forEach(function(r) {
                  for (
                    var o = function() {
                        var o = document.createElement("div");
                        (o.style.height = e.itemHeight + "px"),
                          (o.instance = {});
                        var i =
                            "vaadin-infinite-scroller-item-content-" +
                            (t._contentIndex = t._contentIndex + 1 || 0),
                          a = document.createElement("slot");
                        a.setAttribute("name", i),
                          (a._itemWrapper = o),
                          r.appendChild(a),
                          o.setAttribute("slot", i),
                          e.appendChild(o),
                          Object(O.b)(),
                          setTimeout(function() {
                            e._isVisible(o, n) && e._ensureStampedInstance(o);
                          }, 1);
                      },
                      i = 0;
                    i < e.bufferSize;
                    i++
                  )
                    o();
                }, this),
                  setTimeout(function() {
                    Object(Re.a)(e, e._finishInit.bind(e));
                  }, 1);
              },
            },
            {
              key: "_ensureStampedInstance",
              value: function(e) {
                if (!e.firstElementChild) {
                  var t = e.instance;
                  (e.instance = new this._TemplateClass({})),
                    e.appendChild(e.instance.root),
                    Object.keys(t).forEach(function(n) {
                      e.instance.set(n, t[n]);
                    });
                }
              },
            },
            {
              key: "_updateClones",
              value: function(e) {
                var t = this;
                this._firstIndex =
                  ~~(
                    (this._buffers[0].translateY - this._initialScroll) /
                    this.itemHeight
                  ) + this._initialIndex;
                var n = e ? this.$.scroller.getBoundingClientRect() : void 0;
                this._buffers.forEach(function(r, o) {
                  if (!r.updated) {
                    var i = t._firstIndex + t.bufferSize * o;
                    [].forEach.call(r.children, function(r, o) {
                      var a = r._itemWrapper;
                      (e && !t._isVisible(a, n)) || (a.instance.index = i + o);
                    }),
                      (r.updated = !0);
                  }
                }, this);
              },
            },
            {
              key: "_isVisible",
              value: function(e, t) {
                var n = e.getBoundingClientRect();
                return n.bottom > t.top && n.top < t.bottom;
              },
            },
            {
              key: "position",
              set: function(e) {
                var t = this;
                (this._preventScrollEvent = !0),
                  e > this._firstIndex &&
                  e < this._firstIndex + 2 * this.bufferSize
                    ? (this.$.scroller.scrollTop =
                        this.itemHeight * (e - this._firstIndex) +
                        this._buffers[0].translateY)
                    : ((this._initialIndex = ~~e),
                      this._reset(),
                      (this._scrollDisabled = !0),
                      (this.$.scroller.scrollTop += (e % 1) * this.itemHeight),
                      (this._scrollDisabled = !1)),
                  this._mayHaveMomentum &&
                    (this.$.scroller.classList.add("notouchscroll"),
                    (this._mayHaveMomentum = !1),
                    setTimeout(function() {
                      t.$.scroller.classList.remove("notouchscroll");
                    }, 10));
              },
              get: function() {
                return (
                  (this.$.scroller.scrollTop - this._buffers[0].translateY) /
                    this.itemHeight +
                  this._firstIndex
                );
              },
            },
            {
              key: "itemHeight",
              get: function() {
                if (!this._itemHeightVal) {
                  (window.ShadyCSS && window.ShadyCSS.nativeCss) ||
                    this.updateStyles();
                  var e = window.ShadyCSS
                    ? window.ShadyCSS.getComputedStyleValue(
                        this,
                        "--vaadin-infinite-scroller-item-height"
                      )
                    : getComputedStyle(this).getPropertyValue(
                        "--vaadin-infinite-scroller-item-height"
                      );
                  this.$.fullHeight.style.setProperty("background-position", e);
                  var t = getComputedStyle(this.$.fullHeight).getPropertyValue(
                    "background-position"
                  );
                  this.$.fullHeight.style.removeProperty("background-position"),
                    (this._itemHeightVal = parseFloat(t));
                }
                return this._itemHeightVal;
              },
            },
            {
              key: "_bufferHeight",
              get: function() {
                return this.itemHeight * this.bufferSize;
              },
            },
          ]) && He(n.prototype, o),
          i && He(n, i),
          t
        );
      })();
      customElements.define(Ue.is, Ue);
      n(72);
      var Je = document.createElement("template");
      function Ze(e) {
        return (Ze =
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
      function Ge() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        background: #fff;\n      }\n\n      [part="overlay-header"] {\n        display: flex;\n        flex-shrink: 0;\n        flex-wrap: nowrap;\n        align-items: center;\n      }\n\n      :host(:not([fullscreen])) [part="overlay-header"] {\n        display: none;\n      }\n\n      [part="label"] {\n        flex-grow: 1;\n      }\n\n      [part="clear-button"]:not([showclear]) {\n        display: none;\n      }\n\n      [part="years-toggle-button"] {\n        display: flex;\n      }\n\n      [part="years-toggle-button"][desktop] {\n        display: none;\n      }\n\n      :host(:not([years-visible])) [part="years-toggle-button"]::before {\n        transform: rotate(180deg);\n      }\n\n      #scrollers {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        position: relative;\n        overflow: hidden;\n      }\n\n      [part="months"],\n      [part="years"] {\n        height: 100%;\n      }\n\n      [part="months"] {\n        --vaadin-infinite-scroller-item-height: 270px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      #scrollers[desktop] [part="months"] {\n        right: 50px;\n        transform: none !important;\n      }\n\n      [part="years"] {\n        --vaadin-infinite-scroller-item-height: 80px;\n        width: 50px;\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        /* Center the year scroller position. */\n        --vaadin-infinite-scroller-buffer-offset: 50%;\n      }\n\n      #scrollers[desktop] [part="years"] {\n        position: absolute;\n        transform: none !important;\n      }\n\n      [part="years"]::before {\n        content: \'\';\n        display: block;\n        background: transparent;\n        width: 0;\n        height: 0;\n        position: absolute;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        border-left-color: #000;\n      }\n\n      :host(.animate) [part="months"],\n      :host(.animate) [part="years"] {\n        transition: all 200ms;\n      }\n\n      [part="toolbar"] {\n        display: flex;\n        justify-content: space-between;\n        z-index: 2;\n        flex-shrink: 0;\n      }\n\n      [part~="overlay-header"]:not([desktop]) {\n        padding-bottom: 40px;\n      }\n\n      [part~="years-toggle-button"] {\n        position: absolute;\n        top: auto;\n        right: 8px;\n        bottom: 0;\n        z-index: 1;\n        padding: 8px;\n      }\n\n      #announcer {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0, 0, 0, 0);\n        clip-path: inset(100%);\n      }\n    </style>\n\n    <div id="announcer" role="alert" aria-live="polite">\n      [[i18n.calendar]]\n    </div>\n\n    <div part="overlay-header" on-touchend="_preventDefault" desktop$="[[_desktopMode]]" aria-hidden="true">\n      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>\n      <div part="clear-button" on-tap="_clear" showclear$="[[_showClear(selectedDate)]]"></div>\n      <div part="toggle-button" on-tap="_cancel"></div>\n\n      <div part="years-toggle-button" desktop$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">\n        [[_yearAfterXMonths(_visibleMonthIndex)]]\n      </div>\n    </div>\n\n    <div id="scrollers" desktop$="[[_desktopMode]]" on-track="_track">\n      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">\n        <template>\n          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused$="[[_focused]]" part="month" theme$="[[theme]]">\n          </vaadin-month-calendar>\n        </template>\n      </vaadin-infinite-scroller>\n      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">\n        <template>\n          <div part="year-number" role="button" current$="[[_isCurrentYear(index)]]" selected$="[[_isSelectedYear(index, selectedDate)]]">\n            [[_yearAfterXYears(index)]]\n          </div>\n          <div part="year-separator" aria-hidden="true"></div>\n        </template>\n      </vaadin-infinite-scroller>\n    </div>\n\n    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">\n      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">\n        [[i18n.today]]\n      </vaadin-button>\n      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">\n        [[i18n.cancel]]\n      </vaadin-button>\n    </div>\n\n    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>\n',
          ],
          [
            '\n    <style>\n      :host {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        background: #fff;\n      }\n\n      [part="overlay-header"] {\n        display: flex;\n        flex-shrink: 0;\n        flex-wrap: nowrap;\n        align-items: center;\n      }\n\n      :host(:not([fullscreen])) [part="overlay-header"] {\n        display: none;\n      }\n\n      [part="label"] {\n        flex-grow: 1;\n      }\n\n      [part="clear-button"]:not([showclear]) {\n        display: none;\n      }\n\n      [part="years-toggle-button"] {\n        display: flex;\n      }\n\n      [part="years-toggle-button"][desktop] {\n        display: none;\n      }\n\n      :host(:not([years-visible])) [part="years-toggle-button"]::before {\n        transform: rotate(180deg);\n      }\n\n      #scrollers {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        position: relative;\n        overflow: hidden;\n      }\n\n      [part="months"],\n      [part="years"] {\n        height: 100%;\n      }\n\n      [part="months"] {\n        --vaadin-infinite-scroller-item-height: 270px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      #scrollers[desktop] [part="months"] {\n        right: 50px;\n        transform: none !important;\n      }\n\n      [part="years"] {\n        --vaadin-infinite-scroller-item-height: 80px;\n        width: 50px;\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        /* Center the year scroller position. */\n        --vaadin-infinite-scroller-buffer-offset: 50%;\n      }\n\n      #scrollers[desktop] [part="years"] {\n        position: absolute;\n        transform: none !important;\n      }\n\n      [part="years"]::before {\n        content: \'\';\n        display: block;\n        background: transparent;\n        width: 0;\n        height: 0;\n        position: absolute;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        border-left-color: #000;\n      }\n\n      :host(.animate) [part="months"],\n      :host(.animate) [part="years"] {\n        transition: all 200ms;\n      }\n\n      [part="toolbar"] {\n        display: flex;\n        justify-content: space-between;\n        z-index: 2;\n        flex-shrink: 0;\n      }\n\n      [part~="overlay-header"]:not([desktop]) {\n        padding-bottom: 40px;\n      }\n\n      [part~="years-toggle-button"] {\n        position: absolute;\n        top: auto;\n        right: 8px;\n        bottom: 0;\n        z-index: 1;\n        padding: 8px;\n      }\n\n      #announcer {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0, 0, 0, 0);\n        clip-path: inset(100%);\n      }\n    </style>\n\n    <div id="announcer" role="alert" aria-live="polite">\n      [[i18n.calendar]]\n    </div>\n\n    <div part="overlay-header" on-touchend="_preventDefault" desktop\\$="[[_desktopMode]]" aria-hidden="true">\n      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>\n      <div part="clear-button" on-tap="_clear" showclear\\$="[[_showClear(selectedDate)]]"></div>\n      <div part="toggle-button" on-tap="_cancel"></div>\n\n      <div part="years-toggle-button" desktop\\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">\n        [[_yearAfterXMonths(_visibleMonthIndex)]]\n      </div>\n    </div>\n\n    <div id="scrollers" desktop\\$="[[_desktopMode]]" on-track="_track">\n      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">\n        <template>\n          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\\$="[[_focused]]" part="month" theme\\$="[[theme]]">\n          </vaadin-month-calendar>\n        </template>\n      </vaadin-infinite-scroller>\n      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">\n        <template>\n          <div part="year-number" role="button" current\\$="[[_isCurrentYear(index)]]" selected\\$="[[_isSelectedYear(index, selectedDate)]]">\n            [[_yearAfterXYears(index)]]\n          </div>\n          <div part="year-separator" aria-hidden="true"></div>\n        </template>\n      </vaadin-infinite-scroller>\n    </div>\n\n    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">\n      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">\n        [[i18n.today]]\n      </vaadin-button>\n      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">\n        [[i18n.cancel]]\n      </vaadin-button>\n    </div>\n\n    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>\n',
          ]
        );
        return (
          (Ge = function() {
            return e;
          }),
          e
        );
      }
      function Qe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function et(e, t) {
        return !t || ("object" !== Ze(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function tt(e, t, n) {
        return (tt =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = nt(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function nt(e) {
        return (nt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function rt(e, t) {
        return (rt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      (Je.innerHTML =
        '<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([right-aligned][dir="rtl"]) {\n        align-items: flex-start;\n      }\n\n      [part="overlay"] {\n        display: flex;\n        flex: auto;\n      }\n\n      [part~="content"] {\n        flex: auto;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(Je.content);
      var ot = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            et(this, nt(t).apply(this, arguments))
          );
        }
        var n, o, i;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && rt(e, t);
          })(t, Object(c["a"])(Object(_e["a"])(Object(u["a"])(l["a"])))),
          (n = t),
          (i = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(Ge());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-date-picker-overlay-content";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  selectedDate: { type: Date, notify: !0 },
                  focusedDate: {
                    type: Date,
                    notify: !0,
                    observer: "_focusedDateChanged",
                  },
                  _focusedMonthDate: Number,
                  initialPosition: {
                    type: Date,
                    observer: "_initialPositionChanged",
                  },
                  _originDate: { value: new Date() },
                  _visibleMonthIndex: Number,
                  _desktopMode: Boolean,
                  _translateX: { observer: "_translateXChanged" },
                  _yearScrollerWidth: { value: 50 },
                  i18n: { type: Object },
                  showWeekNumbers: { type: Boolean },
                  _ignoreTaps: Boolean,
                  _notTapping: Boolean,
                  minDate: Date,
                  maxDate: Date,
                  _focused: Boolean,
                  label: String,
                };
              },
            },
          ]),
          (o = [
            {
              key: "ready",
              value: function() {
                tt(nt(t.prototype), "ready", this).call(this),
                  this.setAttribute("tabindex", 0),
                  this.addEventListener("keydown", this._onKeydown.bind(this)),
                  Object(L.b)(this, "tap", this._stopPropagation),
                  this.addEventListener(
                    "focus",
                    this._onOverlayFocus.bind(this)
                  ),
                  this.addEventListener("blur", this._onOverlayBlur.bind(this));
              },
            },
            {
              key: "connectedCallback",
              value: function() {
                tt(nt(t.prototype), "connectedCallback", this).call(this),
                  this._closeYearScroller(),
                  this._toggleAnimateClass(!0),
                  Object(L.f)(this.$.scrollers, "pan-y"),
                  Pe.a.requestAvailability();
              },
            },
            {
              key: "announceFocusedDate",
              value: function() {
                var e = this._currentlyFocusedDate(),
                  t = [];
                Te._dateEquals(e, new Date()) && t.push(this.i18n.today),
                  (t = t.concat([
                    this.i18n.weekdays[e.getDay()],
                    e.getDate(),
                    this.i18n.monthNames[e.getMonth()],
                    e.getFullYear(),
                  ])),
                  this.showWeekNumbers &&
                    1 === this.i18n.firstDayOfWeek &&
                    (t.push(this.i18n.week), t.push(Te._getISOWeekNumber(e))),
                  this.dispatchEvent(
                    new CustomEvent("iron-announce", {
                      bubbles: !0,
                      composed: !0,
                      detail: { text: t.join(" ") },
                    })
                  );
              },
            },
            {
              key: "focusCancel",
              value: function() {
                this.$.cancelButton.focus();
              },
            },
            {
              key: "scrollToDate",
              value: function(e, t) {
                this._scrollToPosition(
                  this._differenceInMonths(e, this._originDate),
                  t
                );
              },
            },
            {
              key: "_focusedDateChanged",
              value: function(e) {
                this.revealDate(e);
              },
            },
            {
              key: "_isCurrentYear",
              value: function(e) {
                return 0 === e;
              },
            },
            {
              key: "_isSelectedYear",
              value: function(e, t) {
                if (t)
                  return t.getFullYear() === this._originDate.getFullYear() + e;
              },
            },
            {
              key: "revealDate",
              value: function(e) {
                if (e) {
                  var t = this._differenceInMonths(e, this._originDate),
                    n = this.$.monthScroller.position > t,
                    r =
                      this.$.monthScroller.clientHeight /
                      this.$.monthScroller.itemHeight,
                    o = this.$.monthScroller.position + r - 1 < t;
                  n
                    ? this._scrollToPosition(t, !0)
                    : o && this._scrollToPosition(t - r + 1, !0);
                }
              },
            },
            {
              key: "_onOverlayFocus",
              value: function() {
                this._focused = !0;
              },
            },
            {
              key: "_onOverlayBlur",
              value: function() {
                this._focused = !1;
              },
            },
            {
              key: "_initialPositionChanged",
              value: function(e) {
                this.scrollToDate(e);
              },
            },
            {
              key: "_repositionYearScroller",
              value: function() {
                (this._visibleMonthIndex = Math.floor(
                  this.$.monthScroller.position
                )),
                  (this.$.yearScroller.position =
                    (this.$.monthScroller.position +
                      this._originDate.getMonth()) /
                    12);
              },
            },
            {
              key: "_repositionMonthScroller",
              value: function() {
                (this.$.monthScroller.position =
                  12 * this.$.yearScroller.position -
                  this._originDate.getMonth()),
                  (this._visibleMonthIndex = Math.floor(
                    this.$.monthScroller.position
                  ));
              },
            },
            {
              key: "_onMonthScroll",
              value: function() {
                this._repositionYearScroller(), this._doIgnoreTaps();
              },
            },
            {
              key: "_onYearScroll",
              value: function() {
                this._repositionMonthScroller(), this._doIgnoreTaps();
              },
            },
            {
              key: "_onYearScrollTouchStart",
              value: function() {
                var e = this;
                (this._notTapping = !1),
                  setTimeout(function() {
                    return (e._notTapping = !0);
                  }, 300),
                  this._repositionMonthScroller();
              },
            },
            {
              key: "_onMonthScrollTouchStart",
              value: function() {
                this._repositionYearScroller();
              },
            },
            {
              key: "_doIgnoreTaps",
              value: function() {
                var e = this;
                (this._ignoreTaps = !0),
                  (this._debouncer = x.a.debounce(
                    this._debouncer,
                    k.d.after(300),
                    function() {
                      return (e._ignoreTaps = !1);
                    }
                  ));
              },
            },
            {
              key: "_formatDisplayed",
              value: function(e, t, n) {
                return e ? t(Te._extractDateParts(e)) : n;
              },
            },
            {
              key: "_onTodayTap",
              value: function() {
                var e = new Date();
                Math.abs(
                  this.$.monthScroller.position -
                    this._differenceInMonths(e, this._originDate)
                ) < 0.001
                  ? ((this.selectedDate = e), this._close())
                  : this._scrollToCurrentMonth();
              },
            },
            {
              key: "_scrollToCurrentMonth",
              value: function() {
                this.focusedDate && (this.focusedDate = new Date()),
                  this.scrollToDate(new Date(), !0);
              },
            },
            {
              key: "_showClear",
              value: function(e) {
                return !!e;
              },
            },
            {
              key: "_onYearTap",
              value: function(e) {
                if (!this._ignoreTaps && !this._notTapping) {
                  var t =
                    (e.detail.y -
                      (this.$.yearScroller.getBoundingClientRect().top +
                        this.$.yearScroller.clientHeight / 2)) /
                    this.$.yearScroller.itemHeight;
                  this._scrollToPosition(
                    this.$.monthScroller.position + 12 * t,
                    !0
                  );
                }
              },
            },
            {
              key: "_scrollToPosition",
              value: function(e, t) {
                var n = this;
                if (void 0 === this._targetPosition) {
                  if (!t)
                    return (
                      (this.$.monthScroller.position = e),
                      (this._targetPosition = void 0),
                      void this._repositionYearScroller()
                    );
                  this._targetPosition = e;
                  var r = t ? 300 : 0,
                    o = 0,
                    i = this.$.monthScroller.position;
                  window.requestAnimationFrame(function e(t) {
                    var a,
                      s,
                      l,
                      u = t - (o = o || t);
                    if (u < r) {
                      var c = ((a = u),
                      (s = i),
                      (l = n._targetPosition - i),
                      (a /= r / 2) < 1
                        ? (l / 2) * a * a + s
                        : (-l / 2) * (--a * (a - 2) - 1) + s);
                      (n.$.monthScroller.position = c),
                        window.requestAnimationFrame(e);
                    } else n.dispatchEvent(new CustomEvent("scroll-animation-finished", { bubbles: !0, composed: !0, detail: { position: n._targetPosition, oldPosition: i } })), (n.$.monthScroller.position = n._targetPosition), (n._targetPosition = void 0);
                    setTimeout(n._repositionYearScroller.bind(n), 1);
                  });
                } else this._targetPosition = e;
              },
            },
            {
              key: "_limit",
              value: function(e, t) {
                return Math.min(t.max, Math.max(t.min, e));
              },
            },
            {
              key: "_handleTrack",
              value: function(e) {
                if (
                  !(Math.abs(e.detail.dx) < 10 || Math.abs(e.detail.ddy) > 10)
                ) {
                  Math.abs(e.detail.ddx) > this._yearScrollerWidth / 3 &&
                    this._toggleAnimateClass(!0);
                  var t = this._translateX + e.detail.ddx;
                  this._translateX = this._limit(t, {
                    min: 0,
                    max: this._yearScrollerWidth,
                  });
                }
              },
            },
            {
              key: "_track",
              value: function(e) {
                if (!this._desktopMode)
                  switch (e.detail.state) {
                    case "start":
                      this._toggleAnimateClass(!1);
                      break;
                    case "track":
                      this._handleTrack(e);
                      break;
                    case "end":
                      this._toggleAnimateClass(!0),
                        this._translateX >= this._yearScrollerWidth / 2
                          ? this._closeYearScroller()
                          : this._openYearScroller();
                  }
              },
            },
            {
              key: "_toggleAnimateClass",
              value: function(e) {
                e
                  ? this.classList.add("animate")
                  : this.classList.remove("animate");
              },
            },
            {
              key: "_toggleYearScroller",
              value: function() {
                this._isYearScrollerVisible()
                  ? this._closeYearScroller()
                  : this._openYearScroller();
              },
            },
            {
              key: "_openYearScroller",
              value: function() {
                (this._translateX = 0), this.setAttribute("years-visible", "");
              },
            },
            {
              key: "_closeYearScroller",
              value: function() {
                this.removeAttribute("years-visible"),
                  (this._translateX = this._yearScrollerWidth);
              },
            },
            {
              key: "_isYearScrollerVisible",
              value: function() {
                return this._translateX < this._yearScrollerWidth / 2;
              },
            },
            {
              key: "_translateXChanged",
              value: function(e) {
                this._desktopMode ||
                  ((this.$.monthScroller.style.transform =
                    "translateX(" + (e - this._yearScrollerWidth) + "px)"),
                  (this.$.yearScroller.style.transform =
                    "translateX(" + e + "px)"));
              },
            },
            {
              key: "_yearAfterXYears",
              value: function(e) {
                var t = new Date(this._originDate);
                return (
                  t.setFullYear(parseInt(e) + this._originDate.getFullYear()),
                  t.getFullYear()
                );
              },
            },
            {
              key: "_yearAfterXMonths",
              value: function(e) {
                return this._dateAfterXMonths(e).getFullYear();
              },
            },
            {
              key: "_dateAfterXMonths",
              value: function(e) {
                var t = new Date(this._originDate);
                return (
                  t.setDate(1),
                  t.setMonth(parseInt(e) + this._originDate.getMonth()),
                  t
                );
              },
            },
            {
              key: "_differenceInMonths",
              value: function(e, t) {
                return (
                  12 * (e.getFullYear() - t.getFullYear()) -
                  t.getMonth() +
                  e.getMonth()
                );
              },
            },
            {
              key: "_differenceInYears",
              value: function(e, t) {
                return this._differenceInMonths(e, t) / 12;
              },
            },
            {
              key: "_clear",
              value: function() {
                this.selectedDate = "";
              },
            },
            {
              key: "_close",
              value: function() {
                var e = this.getRootNode().host,
                  t = e ? e.getRootNode().host : null;
                t && (t.opened = !1),
                  this.dispatchEvent(
                    new CustomEvent("close", { bubbles: !0, composed: !0 })
                  );
              },
            },
            {
              key: "_cancel",
              value: function() {
                (this.focusedDate = this.selectedDate), this._close();
              },
            },
            {
              key: "_preventDefault",
              value: function(e) {
                e.preventDefault();
              },
            },
            {
              key: "_eventKey",
              value: function(e) {
                for (
                  var t = [
                      "down",
                      "up",
                      "right",
                      "left",
                      "enter",
                      "space",
                      "home",
                      "end",
                      "pageup",
                      "pagedown",
                      "tab",
                      "esc",
                    ],
                    n = 0;
                  n < t.length;
                  n++
                ) {
                  var r = t[n];
                  if (Ce.a.keyboardEventMatchesKeys(e, r)) return r;
                }
              },
            },
            {
              key: "_onKeydown",
              value: function(e) {
                var t = this,
                  n = this._currentlyFocusedDate(),
                  r = e.composedPath().indexOf(this.$.todayButton) >= 0,
                  o = e.composedPath().indexOf(this.$.cancelButton) >= 0,
                  i = !r && !o,
                  a = this._eventKey(e);
                if ("tab" === a) {
                  e.stopPropagation();
                  var s = this.hasAttribute("fullscreen"),
                    l = e.shiftKey;
                  s
                    ? e.preventDefault()
                    : (l && i) || (!l && o)
                    ? (e.preventDefault(),
                      this.dispatchEvent(
                        new CustomEvent("focus-input", {
                          bubbles: !0,
                          composed: !0,
                        })
                      ))
                    : l && r
                    ? ((this._focused = !0),
                      setTimeout(function() {
                        return t.revealDate(t.focusedDate);
                      }, 1))
                    : (this._focused = !1);
                } else if (a)
                  switch ((e.preventDefault(), e.stopPropagation(), a)) {
                    case "down":
                      this._moveFocusByDays(7), this.focus();
                      break;
                    case "up":
                      this._moveFocusByDays(-7), this.focus();
                      break;
                    case "right":
                      i && this._moveFocusByDays(1);
                      break;
                    case "left":
                      i && this._moveFocusByDays(-1);
                      break;
                    case "enter":
                      i || o ? this._close() : r && this._onTodayTap();
                      break;
                    case "space":
                      if (o) this._close();
                      else if (r) this._onTodayTap();
                      else {
                        var u = this.focusedDate;
                        Te._dateEquals(u, this.selectedDate)
                          ? ((this.selectedDate = ""), (this.focusedDate = u))
                          : (this.selectedDate = u);
                      }
                      break;
                    case "home":
                      this._moveFocusInsideMonth(n, "minDate");
                      break;
                    case "end":
                      this._moveFocusInsideMonth(n, "maxDate");
                      break;
                    case "pagedown":
                      this._moveFocusByMonths(e.shiftKey ? 12 : 1);
                      break;
                    case "pageup":
                      this._moveFocusByMonths(e.shiftKey ? -12 : -1);
                      break;
                    case "esc":
                      this._cancel();
                  }
              },
            },
            {
              key: "_currentlyFocusedDate",
              value: function() {
                return (
                  this.focusedDate ||
                  this.selectedDate ||
                  this.initialPosition ||
                  new Date()
                );
              },
            },
            {
              key: "_focusDate",
              value: function(e) {
                (this.focusedDate = e), (this._focusedMonthDate = e.getDate());
              },
            },
            {
              key: "_focusClosestDate",
              value: function(e) {
                this._focusDate(
                  Te._getClosestDate(e, [this.minDate, this.maxDate])
                );
              },
            },
            {
              key: "_moveFocusByDays",
              value: function(e) {
                var t = this._currentlyFocusedDate(),
                  n = new Date(0, 0);
                n.setFullYear(t.getFullYear()),
                  n.setMonth(t.getMonth()),
                  n.setDate(t.getDate() + e),
                  this._dateAllowed(n, this.minDate, this.maxDate)
                    ? this._focusDate(n)
                    : this._dateAllowed(t, this.minDate, this.maxDate)
                    ? e > 0
                      ? this._focusDate(this.maxDate)
                      : this._focusDate(this.minDate)
                    : this._focusClosestDate(t);
              },
            },
            {
              key: "_moveFocusByMonths",
              value: function(e) {
                var t = this._currentlyFocusedDate(),
                  n = new Date(0, 0);
                n.setFullYear(t.getFullYear()), n.setMonth(t.getMonth() + e);
                var r = n.getMonth();
                n.setDate(
                  this._focusedMonthDate ||
                    (this._focusedMonthDate = t.getDate())
                ),
                  n.getMonth() !== r && n.setDate(0),
                  this._dateAllowed(n, this.minDate, this.maxDate)
                    ? (this.focusedDate = n)
                    : this._dateAllowed(t, this.minDate, this.maxDate)
                    ? e > 0
                      ? this._focusDate(this.maxDate)
                      : this._focusDate(this.minDate)
                    : this._focusClosestDate(t);
              },
            },
            {
              key: "_moveFocusInsideMonth",
              value: function(e, t) {
                var n = new Date(0, 0);
                n.setFullYear(e.getFullYear()),
                  "minDate" === t
                    ? (n.setMonth(e.getMonth()), n.setDate(1))
                    : (n.setMonth(e.getMonth() + 1), n.setDate(0)),
                  this._dateAllowed(n, this.minDate, this.maxDate)
                    ? this._focusDate(n)
                    : this._dateAllowed(e, this.minDate, this.maxDate)
                    ? this._focusDate(this[t])
                    : this._focusClosestDate(e);
              },
            },
            {
              key: "_dateAllowed",
              value: function(e, t, n) {
                return (!t || e >= t) && (!n || e <= n);
              },
            },
            {
              key: "_isTodayAllowed",
              value: function(e, t) {
                var n = new Date(),
                  r = new Date(0, 0);
                return (
                  r.setFullYear(n.getFullYear()),
                  r.setMonth(n.getMonth()),
                  r.setDate(n.getDate()),
                  this._dateAllowed(r, e, t)
                );
              },
            },
            {
              key: "_stopPropagation",
              value: function(e) {
                e.stopPropagation();
              },
            },
          ]) && Qe(n.prototype, o),
          i && Qe(n, i),
          t
        );
      })();
      customElements.define(ot.is, ot);
      var it = n(95),
        at = n(70);
      function st(e) {
        return (st =
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
      function lt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ut(e, t) {
        return !t || ("object" !== st(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function ct(e, t, n) {
        return (ct =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = dt(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function dt(e) {
        return (dt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function pt(e, t) {
        return (pt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var ht = function(e) {
        return (function(t) {
          function n() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              ut(this, dt(n).apply(this, arguments))
            );
          }
          var r, o, i;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && pt(e, t);
            })(n, Object(at["b"])([it["a"]], e)),
            (r = n),
            (i = [
              {
                key: "properties",
                get: function() {
                  return {
                    _selectedDate: { type: Date },
                    _focusedDate: Date,
                    value: {
                      type: String,
                      observer: "_valueChanged",
                      notify: !0,
                      value: "",
                    },
                    required: { type: Boolean, value: !1 },
                    name: { type: String },
                    initialPosition: String,
                    label: String,
                    opened: {
                      type: Boolean,
                      reflectToAttribute: !0,
                      notify: !0,
                      observer: "_openedChanged",
                    },
                    showWeekNumbers: { type: Boolean },
                    _fullscreen: { value: !1, observer: "_fullscreenChanged" },
                    _fullscreenMediaQuery: {
                      value: "(max-width: 420px), (max-height: 420px)",
                    },
                    _touchPrevented: Array,
                    i18n: {
                      type: Object,
                      value: function() {
                        return {
                          monthNames: [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ],
                          weekdays: [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                          ],
                          weekdaysShort: [
                            "Sun",
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                          ],
                          firstDayOfWeek: 0,
                          week: "Week",
                          calendar: "Calendar",
                          clear: "Clear",
                          today: "Today",
                          cancel: "Cancel",
                          formatDate: function(e) {
                            var t = String(e.year).replace(/\d+/, function(e) {
                              return "0000".substr(e.length) + e;
                            });
                            return [e.month + 1, e.day, t].join("/");
                          },
                          parseDate: function(e) {
                            var t,
                              n = e.split("/"),
                              r = new Date(),
                              o = r.getMonth(),
                              i = r.getFullYear();
                            if (
                              (3 === n.length
                                ? ((i = parseInt(n[2])),
                                  n[2].length < 3 &&
                                    i >= 0 &&
                                    (i += i < 50 ? 2e3 : 1900),
                                  (o = parseInt(n[0]) - 1),
                                  (t = parseInt(n[1])))
                                : 2 === n.length
                                ? ((o = parseInt(n[0]) - 1),
                                  (t = parseInt(n[1])))
                                : 1 === n.length && (t = parseInt(n[0])),
                              void 0 !== t)
                            )
                              return { day: t, month: o, year: i };
                          },
                          formatTitle: function(e, t) {
                            return e + " " + t;
                          },
                        };
                      },
                    },
                    min: { type: String, observer: "_minChanged" },
                    max: { type: String, observer: "_maxChanged" },
                    _minDate: { type: Date, value: "" },
                    _maxDate: { type: Date, value: "" },
                    _noInput: {
                      type: Boolean,
                      computed: "_isNoInput(_fullscreen, _ios, i18n, i18n.*)",
                    },
                    _ios: {
                      type: Boolean,
                      value: navigator.userAgent.match(
                        /iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/
                      ),
                    },
                    _webkitOverflowScroll: {
                      type: Boolean,
                      value:
                        "" ===
                        document.createElement("div").style
                          .webkitOverflowScrolling,
                    },
                    _ignoreAnnounce: { value: !0 },
                    _focusOverlayOnOpen: Boolean,
                    _overlayInitialized: Boolean,
                  };
                },
              },
              {
                key: "observers",
                get: function() {
                  return [
                    "_updateHasValue(value)",
                    "_validateInput(_selectedDate, _minDate, _maxDate)",
                    "_selectedDateChanged(_selectedDate, i18n.formatDate)",
                    "_focusedDateChanged(_focusedDate, i18n.formatDate)",
                    "_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)",
                  ];
                },
              },
            ]),
            (o = [
              {
                key: "ready",
                value: function() {
                  var e = this;
                  ct(dt(n.prototype), "ready", this).call(this),
                    (this._boundOnScroll = this._onScroll.bind(this)),
                    (this._boundFocus = this._focus.bind(this)),
                    (this._boundUpdateAlignmentAndPosition = this._updateAlignmentAndPosition.bind(
                      this
                    )),
                    Object(L.b)(this, "tap", this.open),
                    this.addEventListener(
                      "touchend",
                      this._preventDefault.bind(this)
                    ),
                    this.addEventListener(
                      "keydown",
                      this._onKeydown.bind(this)
                    ),
                    this.addEventListener(
                      "input",
                      this._onUserInput.bind(this)
                    ),
                    this.addEventListener("focus", function(t) {
                      return e._noInput && t.target.blur();
                    });
                },
              },
              {
                key: "_initOverlay",
                value: function() {
                  var e = this;
                  this.$.overlay.removeAttribute("disable-upgrade"),
                    (this._overlayInitialized = !0),
                    this.$.overlay.addEventListener("opened-changed", function(
                      t
                    ) {
                      return (e.opened = t.detail.value);
                    }),
                    this._overlayContent.addEventListener(
                      "close",
                      this._close.bind(this)
                    ),
                    this._overlayContent.addEventListener(
                      "focus-input",
                      this._focusAndSelect.bind(this)
                    ),
                    this.$.overlay.addEventListener(
                      "vaadin-overlay-escape-press",
                      this._boundFocus
                    ),
                    this._overlayContent.addEventListener("focus", function() {
                      return e.focusElement._setFocused(!0);
                    }),
                    this.$.overlay.addEventListener(
                      "vaadin-overlay-close",
                      this._onVaadinOverlayClose.bind(this)
                    );
                },
              },
              {
                key: "disconnectedCallback",
                value: function() {
                  ct(dt(n.prototype), "disconnectedCallback", this).call(this),
                    this._overlayInitialized &&
                      this.$.overlay.removeEventListener(
                        "vaadin-overlay-escape-press",
                        this._boundFocus
                      ),
                    (this.opened = !1);
                },
              },
              {
                key: "open",
                value: function() {
                  this.disabled || this.readonly || (this.opened = !0);
                },
              },
              {
                key: "_close",
                value: function(e) {
                  e && e.stopPropagation(), this._focus(), this.close();
                },
              },
              {
                key: "close",
                value: function() {
                  this._overlayInitialized && this.$.overlay.close();
                },
              },
              {
                key: "_parseDate",
                value: function(e) {
                  var t = /^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(
                    e
                  );
                  if (t) {
                    var n = new Date(0, 0);
                    return (
                      n.setFullYear(parseInt(t[1], 10)),
                      n.setMonth(parseInt(t[2], 10) - 1),
                      n.setDate(parseInt(t[3], 10)),
                      n
                    );
                  }
                },
              },
              {
                key: "_isNoInput",
                value: function(e, t, n) {
                  return !this._inputElement || e || t || !n.parseDate;
                },
              },
              {
                key: "_formatISO",
                value: function(e) {
                  if (!(e instanceof Date)) return "";
                  var t = function(e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "00";
                      return (t + e).substr((t + e).length - t.length);
                    },
                    n = "",
                    r = "0000",
                    o = e.getFullYear();
                  return (
                    o < 0
                      ? ((o = -o), (n = "-"), (r = "000000"))
                      : e.getFullYear() >= 1e4 && ((n = "+"), (r = "000000")),
                    [n + t(o, r), t(e.getMonth() + 1), t(e.getDate())].join("-")
                  );
                },
              },
              {
                key: "_openedChanged",
                value: function(e) {
                  e && !this._overlayInitialized && this._initOverlay(),
                    this._overlayInitialized && (this.$.overlay.opened = e),
                    e && this._updateAlignmentAndPosition();
                },
              },
              {
                key: "_selectedDateChanged",
                value: function(e, t) {
                  if (void 0 !== e && void 0 !== t) {
                    this.__userInputOccurred && (this.__dispatchChange = !0);
                    var n = e && t(Te._extractDateParts(e)),
                      r = this._formatISO(e);
                    r !== this.value && (this.validate(n), (this.value = r)),
                      (this.__userInputOccurred = !1),
                      (this.__dispatchChange = !1),
                      (this._focusedDate = e),
                      (this._inputValue = e ? n : "");
                  }
                },
              },
              {
                key: "_focusedDateChanged",
                value: function(e, t) {
                  void 0 !== e &&
                    void 0 !== t &&
                    ((this.__userInputOccurred = !0),
                    this._ignoreFocusedDateChange ||
                      this._noInput ||
                      (this._inputValue = e ? t(Te._extractDateParts(e)) : ""));
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
                key: "_handleDateChange",
                value: function(e, t, n) {
                  if (t) {
                    var r = this._parseDate(t);
                    r
                      ? Te._dateEquals(this[e], r) || (this[e] = r)
                      : (this.value = n);
                  } else this[e] = "";
                },
              },
              {
                key: "_valueChanged",
                value: function(e, t) {
                  this.__dispatchChange &&
                    this.dispatchEvent(
                      new CustomEvent("change", { bubbles: !0 })
                    ),
                    this._handleDateChange("_selectedDate", e, t);
                },
              },
              {
                key: "_minChanged",
                value: function(e, t) {
                  this._handleDateChange("_minDate", e, t);
                },
              },
              {
                key: "_maxChanged",
                value: function(e, t) {
                  this._handleDateChange("_maxDate", e, t);
                },
              },
              {
                key: "_updateAlignmentAndPosition",
                value: function() {
                  if (this._overlayInitialized) {
                    if (!this._fullscreen) {
                      var e = this._inputElement.getBoundingClientRect(),
                        t = e.top > window.innerHeight / 2;
                      if (
                        e.left + this.clientWidth / 2 >
                        window.innerWidth / 2
                      ) {
                        var n = Math.min(
                          window.innerWidth,
                          document.documentElement.clientWidth
                        );
                        this.$.overlay.setAttribute("right-aligned", ""),
                          this.$.overlay.style.removeProperty("left"),
                          (this.$.overlay.style.right = n - e.right + "px");
                      } else
                        this.$.overlay.removeAttribute("right-aligned"),
                          this.$.overlay.style.removeProperty("right"),
                          (this.$.overlay.style.left = e.left + "px");
                      if (t) {
                        var r = Math.min(
                          window.innerHeight,
                          document.documentElement.clientHeight
                        );
                        this.$.overlay.setAttribute("bottom-aligned", ""),
                          this.$.overlay.style.removeProperty("top"),
                          (this.$.overlay.style.bottom = r - e.top + "px");
                      } else
                        this.$.overlay.removeAttribute("bottom-aligned"),
                          this.$.overlay.style.removeProperty("bottom"),
                          (this.$.overlay.style.top = e.bottom + "px");
                    }
                    this.$.overlay.setAttribute(
                      "dir",
                      getComputedStyle(this._inputElement).getPropertyValue(
                        "direction"
                      )
                    ),
                      this._overlayContent._repositionYearScroller();
                  }
                },
              },
              {
                key: "_fullscreenChanged",
                value: function() {
                  this._overlayInitialized &&
                    this.$.overlay.opened &&
                    this._updateAlignmentAndPosition();
                },
              },
              {
                key: "_onOverlayOpened",
                value: function() {
                  this._openedWithFocusRing =
                    this.hasAttribute("focus-ring") ||
                    (this.focusElement &&
                      this.focusElement.hasAttribute("focus-ring"));
                  var e = this._parseDate(this.initialPosition),
                    t =
                      this._selectedDate ||
                      this._overlayContent.initialPosition ||
                      e ||
                      new Date();
                  e || Te._dateAllowed(t, this._minDate, this._maxDate)
                    ? (this._overlayContent.initialPosition = t)
                    : (this._overlayContent.initialPosition = Te._getClosestDate(
                        t,
                        [this._minDate, this._maxDate]
                      )),
                    this._overlayContent.scrollToDate(
                      this._overlayContent.focusedDate ||
                        this._overlayContent.initialPosition
                    ),
                    (this._ignoreFocusedDateChange = !0),
                    (this._overlayContent.focusedDate =
                      this._overlayContent.focusedDate ||
                      this._overlayContent.initialPosition),
                    (this._ignoreFocusedDateChange = !1),
                    window.addEventListener("scroll", this._boundOnScroll, !0),
                    this.addEventListener(
                      "iron-resize",
                      this._boundUpdateAlignmentAndPosition
                    ),
                    this._webkitOverflowScroll &&
                      (this._touchPrevented = this._preventWebkitOverflowScrollingTouch(
                        this.parentElement
                      )),
                    this._focusOverlayOnOpen
                      ? (this._overlayContent.focus(),
                        (this._focusOverlayOnOpen = !1))
                      : this._focus(),
                    this._noInput &&
                      this.focusElement &&
                      this.focusElement.blur(),
                    this.updateStyles(),
                    (this._ignoreAnnounce = !1);
                },
              },
              {
                key: "_preventWebkitOverflowScrollingTouch",
                value: function(e) {
                  for (var t = []; e; ) {
                    if (
                      "touch" ===
                      window.getComputedStyle(e).webkitOverflowScrolling
                    ) {
                      var n = e.style.webkitOverflowScrolling;
                      (e.style.webkitOverflowScrolling = "auto"),
                        t.push({ element: e, oldInlineValue: n });
                    }
                    e = e.parentElement;
                  }
                  return t;
                },
              },
              {
                key: "_onOverlayClosed",
                value: function() {
                  if (
                    ((this._ignoreAnnounce = !0),
                    window.removeEventListener(
                      "scroll",
                      this._boundOnScroll,
                      !0
                    ),
                    this.removeEventListener(
                      "iron-resize",
                      this._boundUpdateAlignmentAndPosition
                    ),
                    this._touchPrevented &&
                      (this._touchPrevented.forEach(function(e) {
                        return (e.element.style.webkitOverflowScrolling =
                          e.oldInlineValue);
                      }),
                      (this._touchPrevented = [])),
                    this.updateStyles(),
                    (this._ignoreFocusedDateChange = !0),
                    this.i18n.parseDate)
                  ) {
                    var e = this._inputValue || "",
                      t = this.i18n.parseDate(e),
                      n =
                        t &&
                        this._parseDate(
                          ""
                            .concat(t.year, "-")
                            .concat(t.month + 1, "-")
                            .concat(t.day)
                        );
                    this._isValidDate(n)
                      ? (this._selectedDate = n)
                      : ((this._selectedDate = null), (this._inputValue = e));
                  } else
                    this._focusedDate &&
                      (this._selectedDate = this._focusedDate);
                  (this._ignoreFocusedDateChange = !1),
                    this._nativeInput &&
                      this._nativeInput.selectionStart &&
                      (this._nativeInput.selectionStart = this._nativeInput.selectionEnd),
                    this.validate();
                },
              },
              {
                key: "validate",
                value: function(e) {
                  return (
                    (this.invalid = !1),
                    (e = void 0 !== e ? e : this._inputValue),
                    !(this.invalid = !this.checkValidity(e))
                  );
                },
              },
              {
                key: "checkValidity",
                value: function(e) {
                  var t =
                      !e ||
                      (this._selectedDate &&
                        e ===
                          this.i18n.formatDate(
                            Te._extractDateParts(this._selectedDate)
                          )),
                    n =
                      !this._selectedDate ||
                      Te._dateAllowed(
                        this._selectedDate,
                        this._minDate,
                        this._maxDate
                      ),
                    r = !0;
                  return (
                    this._inputElement &&
                      (this._inputElement.checkValidity
                        ? (r = this._inputElement.checkValidity(e))
                        : this._inputElement.validate &&
                          (r = this._inputElement.validate(e))),
                    t && n && r
                  );
                },
              },
              {
                key: "_onScroll",
                value: function(e) {
                  (e.target !== window &&
                    this._overlayContent.contains(e.target)) ||
                    this._updateAlignmentAndPosition();
                },
              },
              {
                key: "_focus",
                value: function() {
                  this._noInput
                    ? this._overlayInitialized && this._overlayContent.focus()
                    : this._inputElement.focus();
                },
              },
              {
                key: "_focusAndSelect",
                value: function() {
                  this._focus(),
                    this._setSelectionRange(0, this._inputValue.length);
                },
              },
              {
                key: "_setSelectionRange",
                value: function(e, t) {
                  this._nativeInput &&
                    this._nativeInput.setSelectionRange &&
                    this._nativeInput.setSelectionRange(e, t);
                },
              },
              {
                key: "_preventDefault",
                value: function(e) {
                  e.preventDefault();
                },
              },
              {
                key: "_eventKey",
                value: function(e) {
                  for (
                    var t = ["down", "up", "enter", "esc", "tab"], n = 0;
                    n < t.length;
                    n++
                  ) {
                    var r = t[n];
                    if (Ce.a.keyboardEventMatchesKeys(e, r)) return r;
                  }
                },
              },
              {
                key: "_isValidDate",
                value: function(e) {
                  return e && !isNaN(e.getTime());
                },
              },
              {
                key: "_onKeydown",
                value: function(e) {
                  if (this._noInput) {
                    -1 === [9].indexOf(e.keyCode) && e.preventDefault();
                  }
                  switch (this._eventKey(e)) {
                    case "down":
                    case "up":
                      e.preventDefault(),
                        this.opened
                          ? (this._overlayContent.focus(),
                            this._overlayContent._onKeydown(e))
                          : ((this._focusOverlayOnOpen = !0), this.open());
                      break;
                    case "enter":
                      var t = this.i18n.parseDate(this._inputValue),
                        n =
                          t &&
                          this._parseDate(
                            t.year + "-" + (t.month + 1) + "-" + t.day
                          );
                      this._overlayContent.focusedDate &&
                        this._isValidDate(n) &&
                        (this._selectedDate = this._overlayContent.focusedDate),
                        this.close();
                      break;
                    case "esc":
                      (this._focusedDate = this._selectedDate), this._close();
                      break;
                    case "tab":
                      this.opened &&
                        (e.preventDefault(),
                        this._setSelectionRange(0, 0),
                        e.shiftKey
                          ? this._overlayContent.focusCancel()
                          : (this._overlayContent.focus(),
                            this._overlayContent.revealDate(
                              this._focusedDate
                            )));
                  }
                },
              },
              {
                key: "_validateInput",
                value: function(e, t, n) {
                  e && (t || n) && (this.invalid = !Te._dateAllowed(e, t, n));
                },
              },
              {
                key: "_onUserInput",
                value: function(e) {
                  this.opened || this.open(), this._userInputValueChanged();
                },
              },
              {
                key: "_userInputValueChanged",
                value: function(e) {
                  if (this.opened && this._inputValue) {
                    var t =
                        this.i18n.parseDate &&
                        this.i18n.parseDate(this._inputValue),
                      n =
                        t &&
                        this._parseDate(
                          ""
                            .concat(t.year, "-")
                            .concat(t.month + 1, "-")
                            .concat(t.day)
                        );
                    this._isValidDate(n) &&
                      ((this._ignoreFocusedDateChange = !0),
                      Te._dateEquals(n, this._focusedDate) ||
                        (this._focusedDate = n),
                      (this._ignoreFocusedDateChange = !1));
                  }
                },
              },
              {
                key: "_announceFocusedDate",
                value: function(e, t, n) {
                  t && !n && this._overlayContent.announceFocusedDate();
                },
              },
              {
                key: "_inputElement",
                get: function() {
                  return this._input();
                },
              },
              {
                key: "_nativeInput",
                get: function() {
                  if (this._inputElement)
                    return this._inputElement.focusElement
                      ? this._inputElement.focusElement
                      : this._inputElement.inputElement
                      ? this._inputElement.inputElement
                      : window.unwrap
                      ? window.unwrap(this._inputElement)
                      : this._inputElement;
                },
              },
              {
                key: "_overlayContent",
                get: function() {
                  return this.$.overlay.content.querySelector(
                    "#overlay-content"
                  );
                },
              },
            ]) && lt(r.prototype, o),
            i && lt(r, i),
            n
          );
        })();
      };
      function ft(e) {
        return (ft =
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
      function mt() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host([opened]) {\n        pointer-events: auto;\n      }\n\n      [part="text-field"] {\n        width: 100%;\n        min-width: 0;\n      }\n\n      :host([disabled]) [part="clear-button"],\n      :host([readonly]) [part="clear-button"],\n      :host(:not([has-value])) [part="clear-button"] {\n        display: none;\n      }\n    </style>\n\n\n    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" aria-label$="[[label]]" part="text-field" theme$="[[theme]]">\n      <slot name="prefix" slot="prefix"></slot>\n      <div part="clear-button" slot="suffix" on-touchend="_clearTouchend" on-click="_clear" role="button" aria-label$="[[i18n.clear]]"></div>\n      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label$="[[i18n.calendar]]" aria-expanded$="[[_getAriaExpanded(opened)]]"></div>\n    </vaadin-text-field>\n\n    <vaadin-date-picker-overlay id="overlay" fullscreen$="[[_fullscreen]]" theme$="[[theme]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">\n      <template>\n        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme$="[[theme]]">\n        </vaadin-date-picker-overlay-content>\n      </template>\n    </vaadin-date-picker-overlay>\n\n    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">\n    </iron-media-query>\n',
          ],
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host([opened]) {\n        pointer-events: auto;\n      }\n\n      [part="text-field"] {\n        width: 100%;\n        min-width: 0;\n      }\n\n      :host([disabled]) [part="clear-button"],\n      :host([readonly]) [part="clear-button"],\n      :host(:not([has-value])) [part="clear-button"] {\n        display: none;\n      }\n    </style>\n\n\n    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" aria-label\\$="[[label]]" part="text-field" theme\\$="[[theme]]">\n      <slot name="prefix" slot="prefix"></slot>\n      <div part="clear-button" slot="suffix" on-touchend="_clearTouchend" on-click="_clear" role="button" aria-label\\$="[[i18n.clear]]"></div>\n      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\\$="[[i18n.calendar]]" aria-expanded\\$="[[_getAriaExpanded(opened)]]"></div>\n    </vaadin-text-field>\n\n    <vaadin-date-picker-overlay id="overlay" fullscreen\\$="[[_fullscreen]]" theme\\$="[[theme]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">\n      <template>\n        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\\$="[[theme]]">\n        </vaadin-date-picker-overlay-content>\n      </template>\n    </vaadin-date-picker-overlay>\n\n    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">\n    </iron-media-query>\n',
          ]
        );
        return (
          (mt = function() {
            return e;
          }),
          e
        );
      }
      function yt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function vt(e, t) {
        return !t || ("object" !== ft(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function bt(e, t, n) {
        return (bt =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = gt(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function gt(e) {
        return (gt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _t(e, t) {
        return (_t =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var wt = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            vt(this, gt(t).apply(this, arguments))
          );
        }
        var n, o, i;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && _t(e, t);
          })(
            t,
            F(w(Object(c["a"])(Object(_e["a"])(ht(Object(u["a"])(l["a"]))))))
          ),
          (n = t),
          (i = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(mt());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-date-picker";
              },
            },
            {
              key: "version",
              get: function() {
                return "3.3.3";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  disabled: {
                    type: Boolean,
                    value: !1,
                    reflectToAttribute: !0,
                  },
                  errorMessage: String,
                  placeholder: String,
                  readonly: {
                    type: Boolean,
                    value: !1,
                    reflectToAttribute: !0,
                  },
                  invalid: {
                    type: Boolean,
                    reflectToAttribute: !0,
                    notify: !0,
                    value: !1,
                  },
                  _userInputValue: String,
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return ["_userInputValueChanged(_userInputValue)"];
              },
            },
          ]),
          (o = [
            {
              key: "ready",
              value: function() {
                var e = this;
                bt(gt(t.prototype), "ready", this).call(this),
                  Object(Re.a)(this, function() {
                    return (e._inputElement.validate = function() {});
                  });
              },
            },
            {
              key: "_onVaadinOverlayClose",
              value: function(e) {
                this._openedWithFocusRing && this.hasAttribute("focused")
                  ? this.focusElement.setAttribute("focus-ring", "")
                  : this.hasAttribute("focused") || this.focusElement.blur(),
                  e.detail.sourceEvent &&
                    -1 !== e.detail.sourceEvent.composedPath().indexOf(this) &&
                    e.preventDefault();
              },
            },
            {
              key: "_clear",
              value: function() {
                (this.__dispatchChange = !0),
                  (this.value = ""),
                  this.validate(),
                  this.focus(),
                  Object(L.d)("tap"),
                  (this.__dispatchChange = !1);
              },
            },
            {
              key: "_clearTouchend",
              value: function(e) {
                this._clear(), e.preventDefault(), Object(L.d)("tap");
              },
            },
            {
              key: "_toggle",
              value: function(e) {
                e.stopPropagation(),
                  this[
                    this._overlayInitialized && this.$.overlay.opened
                      ? "close"
                      : "open"
                  ]();
              },
            },
            {
              key: "_input",
              value: function() {
                return this.$.input;
              },
            },
            {
              key: "_getAriaExpanded",
              value: function(e) {
                return Boolean(e).toString();
              },
            },
            {
              key: "_inputValue",
              set: function(e) {
                this._inputElement.value = e;
              },
              get: function() {
                return this._inputElement.value;
              },
            },
            {
              key: "focusElement",
              get: function() {
                return this._input() || this;
              },
            },
          ]) && yt(n.prototype, o),
          i && yt(n, i),
          t
        );
      })();
      customElements.define(wt.is, wt);
    },
    391: function(e, t) {
      var n = document.createElement("template");
      n.setAttribute("style", "display: none;"),
        (n.innerHTML =
          '<dom-module id="ha-date-picker-vaadin-date-picker-styles" theme-for="vaadin-date-picker">\n  <template>\n    <style>\n      :host([required]) [part~="clear-button"] {\n        display: none;\n      }\n\n      [part~="toggle-button"] {\n        color: var(--secondary-text-color);\n        font-size: var(--paper-font-subhead_-_font-size);\n        margin-right: 5px;\n      }\n\n      :host([opened]) [part~="toggle-button"] {\n        color: var(--primary-color);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="ha-date-picker-text-field-styles" theme-for="vaadin-text-field">\n  <template>\n    <style>\n      :host {\n        padding: 8px 0;\n      }\n\n      [part~="label"] {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n        font-family: var(--paper-font-caption_-_font-family);\n        font-size: var(--paper-font-caption_-_font-size);\n        font-weight: var(--paper-font-caption_-_font-weight);\n        letter-spacing: var(--paper-font-caption_-_letter-spacing);\n        line-height: var(--paper-font-caption_-_line-height);\n      }\n      :host([focused]) [part~="label"] {\n          color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n\n      [part~="input-field"] {\n        padding-bottom: 1px;\n        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        line-height: var(--paper-font-subhead_-_line-height);\n      }\n\n      :host([focused]) [part~="input-field"] {\n        padding-bottom: 0;\n        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n      }\n      [part~="value"]:focus {\n        outline: none;\n      }\n\n      [part~="value"] {\n        font-size: var(--paper-font-subhead_-_font-size);\n        font-family: inherit;\n        color: inherit;\n        border: none;\n        background: transparent;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="ha-date-picker-button-styles" theme-for="vaadin-button">\n  <template>\n    <style>\n      :host([part~="today-button"]) [part~="button"]::before {\n        content: "⦿";\n        color: var(--primary-color);\n      }\n\n      [part~="button"] {\n        font-family: inherit;\n        font-size: var(--paper-font-subhead_-_font-size);\n        border: none;\n        background: transparent;\n        cursor: pointer;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n        color: inherit;\n      }\n\n      [part~="button"]:focus {\n        outline: none;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="ha-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style include="vaadin-date-picker-overlay-default-theme">\n      :host {\n        background-color: var(--paper-card-background-color, var(--primary-background-color));\n      }\n\n      [part~="toolbar"] {\n        padding: 0.3em;\n        background-color: var(--secondary-background-color);\n      }\n\n      [part="years"] {\n        background-color: var(--paper-grey-200);\n      }\n\n    </style>\n  </template>\n</dom-module><dom-module id="ha-date-picker-month-styles" theme-for="vaadin-month-calendar">\n  <template>\n    <style include="vaadin-month-calendar-default-theme">\n      :host([focused]) [part="date"][focused],\n      [part="date"][selected] {\n        background-color: var(--paper-grey-200);\n      }\n      [part="date"][today] {\n        color: var(--primary-color);\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(n.content);
    },
    724: function(e, t, n) {
      "use strict";
      n.r(t);
      n(198), n(216), n(145), n(106), n(90), n(181);
      var r = n(3),
        o = n(25);
      n(333), n(126), n(186), n(391), n(92);
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
      function l(e) {
        return (l = Object.setPrototypeOf
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
      var c = {},
        d = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              s(this, l(t).apply(this, arguments))
            );
          }
          var n, r, i;
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
            })(t, o["a"]),
            (n = t),
            (i = [
              {
                key: "properties",
                get: function() {
                  return {
                    hass: { type: Object, observer: "hassChanged" },
                    filterDate: { type: String, observer: "filterDataChanged" },
                    filterPeriod: {
                      type: Number,
                      observer: "filterDataChanged",
                    },
                    filterEntity: {
                      type: String,
                      observer: "filterDataChanged",
                    },
                    isLoading: {
                      type: Boolean,
                      value: !0,
                      readOnly: !0,
                      notify: !0,
                    },
                    entries: {
                      type: Object,
                      value: null,
                      readOnly: !0,
                      notify: !0,
                    },
                  };
                },
              },
            ]),
            (r = [
              {
                key: "hassChanged",
                value: function(e, t) {
                  !t && this.filterDate && this.updateData();
                },
              },
              {
                key: "filterDataChanged",
                value: function(e, t) {
                  void 0 !== t && this.updateData();
                },
              },
              {
                key: "updateData",
                value: function() {
                  var e = this;
                  this.hass &&
                    (this._setIsLoading(!0),
                    this.getDate(
                      this.filterDate,
                      this.filterPeriod,
                      this.filterEntity
                    ).then(function(t) {
                      e._setEntries(t), e._setIsLoading(!1);
                    }));
                },
              },
              {
                key: "getDate",
                value: function(e, t, n) {
                  return (
                    n || (n = "*"),
                    c[t] || (c[t] = []),
                    c[t][e] || (c[t][e] = []),
                    c[t][e][n]
                      ? c[t][e][n]
                      : "*" !== n && c[t][e]["*"]
                      ? c[t][e]["*"].then(function(e) {
                          return e.filter(function(e) {
                            return e.entity_id === n;
                          });
                        })
                      : ((c[t][e][n] = this._getFromServer(e, t, n)),
                        c[t][e][n])
                  );
                },
              },
              {
                key: "_getFromServer",
                value: function(e, t, n) {
                  var r = "logbook/" + e + "?period=" + t;
                  return (
                    "*" !== n && (r += "&entity=" + n),
                    this.hass.callApi("GET", r).then(
                      function(e) {
                        return e.reverse(), e;
                      },
                      function() {
                        return null;
                      }
                    )
                  );
                },
              },
              {
                key: "refreshLogbook",
                value: function() {
                  (c[this.filterPeriod][this.filterDate] = []),
                    this.updateData();
                },
              },
            ]) && a(n.prototype, r),
            i && a(n, i),
            t
          );
        })();
      customElements.define("ha-logbook-data", d);
      n(174), n(107);
      var p = n(211),
        h = n(232),
        f = n(105),
        m = n(176),
        y = n(93);
      function v(e) {
        return (v =
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
      function b() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="iron-flex"></style>\n      <style>\n        :host {\n          display: block;\n        }\n\n        :host([rtl]) {\n          direction: ltr;\n        }\n\n        .entry {\n          @apply --paper-font-body1;\n          line-height: 2em;\n        }\n\n        .time {\n          width: 55px;\n          font-size: 0.8em;\n          color: var(--secondary-text-color);\n        }\n\n        :host([rtl]) .date {\n          direction: rtl;\n        }\n\n        iron-icon {\n          margin: 0 8px 0 16px;\n          color: var(--primary-text-color);\n        }\n\n        .message {\n          color: var(--primary-text-color);\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n\n      <template is="dom-if" if="[[!entries.length]]">\n        No logbook entries found.\n      </template>\n\n      <template is="dom-repeat" items="[[entries]]">\n        <template is="dom-if" if="{{_needHeader(entries.*, index)}}">\n          <h4 class="date">[[_formatDate(item.when)]]</h4>\n        </template>\n\n        <div class="horizontal layout entry">\n          <div class="time">[[_formatTime(item.when)]]</div>\n          <iron-icon icon="[[_computeIcon(item.domain)]]"></iron-icon>\n          <div class="message" flex="">\n            <template is="dom-if" if="[[!item.entity_id]]">\n              <span class="name">[[item.name]]</span>\n            </template>\n            <template is="dom-if" if="[[item.entity_id]]">\n              <a href="#" on-click="entityClicked" class="name"\n                >[[item.name]]</a\n              >\n            </template>\n            <span> </span> <span>[[item.message]]</span>\n          </div>\n        </div>\n      </template>\n    ',
        ]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function _(e, t) {
        return !t || ("object" !== v(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function w(e) {
        return (w = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function k(e, t) {
        return (k =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var x = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            _(this, w(t).apply(this, arguments))
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
              t && k(e, t);
          })(t, Object(f["a"])(o["a"])),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(b());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: { type: Object },
                  entries: { type: Array, value: [] },
                  rtl: {
                    type: Boolean,
                    reflectToAttribute: !0,
                    computed: "_computeRTL(hass)",
                  },
                };
              },
            },
          ]),
          (i = [
            {
              key: "_formatTime",
              value: function(e) {
                return Object(p.a)(new Date(e), this.hass.language);
              },
            },
            {
              key: "_formatDate",
              value: function(e) {
                return Object(h.a)(new Date(e), this.hass.language);
              },
            },
            {
              key: "_needHeader",
              value: function(e, t) {
                if (!t) return !0;
                var n = this.get("when", e.base[t]),
                  r = this.get("when", e.base[t - 1]);
                return (
                  n &&
                  r &&
                  new Date(n).toDateString() !== new Date(r).toDateString()
                );
              },
            },
            {
              key: "_computeIcon",
              value: function(e) {
                return Object(m.a)(e);
              },
            },
            {
              key: "_computeRTL",
              value: function(e) {
                return Object(y.a)(e);
              },
            },
            {
              key: "entityClicked",
              value: function(e) {
                e.preventDefault(),
                  this.fire("hass-more-info", {
                    entityId: e.model.item.entity_id,
                  });
              },
            },
          ]) && g(n.prototype, i),
          a && g(n, a),
          t
        );
      })();
      customElements.define("ha-logbook", x);
      var O = n(171);
      function D(e) {
        return (D =
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
      function S() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="ha-style">\n        .content {\n          padding: 0 16px 16px;\n        }\n\n        paper-spinner {\n          position: absolute;\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n        }\n\n        .wrap {\n          margin-bottom: 24px;\n        }\n\n        vaadin-date-picker {\n          --vaadin-date-picker-clear-icon: {\n            display: none;\n          }\n          max-width: 200px;\n          margin-right: 16px;\n        }\n\n        paper-dropdown-menu {\n          max-width: 100px;\n          margin-right: 16px;\n          --paper-input-container-label-floating: {\n            padding-bottom: 10px;\n          }\n        }\n\n        :host([rtl]) paper-dropdown-menu {\n          text-align: right;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n\n        ha-entity-picker {\n          display: inline-block;\n          width: 100%;\n          max-width: 400px;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n      </style>\n\n      <ha-logbook-data\n        hass="[[hass]]"\n        is-loading="{{isLoading}}"\n        entries="{{entries}}"\n        filter-date="[[_computeFilterDate(_currentDate)]]"\n        filter-period="[[_computeFilterDays(_periodIndex)]]"\n        filter-entity="[[entityId]]"\n      ></ha-logbook-data>\n\n      <app-header-layout has-scrolling-region>\n        <app-header slot="header" fixed>\n          <app-toolbar>\n            <ha-menu-button\n              hass="[[hass]]"\n              narrow="[[narrow]]"\n            ></ha-menu-button>\n            <div main-title>[[localize(\'panel.logbook\')]]</div>\n            <paper-icon-button\n              icon="hass:refresh"\n              on-click="refreshLogbook"\n              hidden$="[[isLoading]]"\n            ></paper-icon-button>\n          </app-toolbar>\n        </app-header>\n\n        <div class="content">\n          <paper-spinner\n            active="[[isLoading]]"\n            hidden$="[[!isLoading]]"\n            alt="[[localize(\'ui.common.loading\')]]"\n          ></paper-spinner>\n\n          <div class="flex layout horizontal wrap">\n            <vaadin-date-picker\n              id="picker"\n              value="{{_currentDate}}"\n              label="[[localize(\'ui.panel.logbook.showing_entries\')]]"\n              disabled="[[isLoading]]"\n              required\n            ></vaadin-date-picker>\n\n            <paper-dropdown-menu\n              label-float\n              label="[[localize(\'ui.panel.logbook.period\')]]"\n              disabled="[[isLoading]]"\n            >\n              <paper-listbox\n                slot="dropdown-content"\n                selected="{{_periodIndex}}"\n              >\n                <paper-item\n                  >[[localize(\'ui.duration.day\', \'count\', 1)]]</paper-item\n                >\n                <paper-item\n                  >[[localize(\'ui.duration.day\', \'count\', 3)]]</paper-item\n                >\n                <paper-item\n                  >[[localize(\'ui.duration.week\', \'count\', 1)]]</paper-item\n                >\n              </paper-listbox>\n            </paper-dropdown-menu>\n\n            <ha-entity-picker\n              hass="[[hass]]"\n              value="{{_entityId}}"\n              label="[[localize(\'ui.components.entity.entity-picker.entity\')]]"\n              disabled="[[isLoading]]"\n              on-change="_entityPicked"\n            ></ha-entity-picker>\n          </div>\n\n          <ha-logbook\n            hass="[[hass]]"\n            entries="[[entries]]"\n            hidden$="[[isLoading]]"\n          ></ha-logbook>\n        </div>\n      </app-header-layout>\n    ',
        ]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function E(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function j(e, t) {
        return !t || ("object" !== D(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function C(e, t, n) {
        return (C =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = P(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function P(e) {
        return (P = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function z(e, t) {
        return (z =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var T = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            j(this, P(t).apply(this, arguments))
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
              t && z(e, t);
          })(t, Object(O["a"])(o["a"])),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(S());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  narrow: Boolean,
                  _currentDate: {
                    type: String,
                    value: function() {
                      var e = new Date();
                      return new Date(
                        Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())
                      )
                        .toISOString()
                        .split("T")[0];
                    },
                  },
                  _periodIndex: { type: Number, value: 0 },
                  _entityId: { type: String, value: "" },
                  entityId: { type: String, value: "", readOnly: !0 },
                  isLoading: { type: Boolean },
                  entries: { type: Array },
                  datePicker: { type: Object },
                  rtl: {
                    type: Boolean,
                    reflectToAttribute: !0,
                    computed: "_computeRTL(hass)",
                  },
                };
              },
            },
          ]),
          (i = [
            {
              key: "connectedCallback",
              value: function() {
                var e = this;
                C(P(t.prototype), "connectedCallback", this).call(this),
                  this.$.picker.set("i18n.parseDate", null),
                  this.$.picker.set("i18n.formatDate", function(t) {
                    return Object(
                      h.a
                    )(new Date(t.year, t.month, t.day), e.hass.language);
                  });
              },
            },
            {
              key: "_computeFilterDate",
              value: function(e) {
                if (e) {
                  var t = e.split("-");
                  return (
                    (t[1] = parseInt(t[1]) - 1),
                    new Date(t[0], t[1], t[2]).toISOString()
                  );
                }
              },
            },
            {
              key: "_computeFilterDays",
              value: function(e) {
                switch (e) {
                  case 1:
                    return 3;
                  case 2:
                    return 7;
                  default:
                    return 1;
                }
              },
            },
            {
              key: "_entityPicked",
              value: function(e) {
                this._setEntityId(e.target.value);
              },
            },
            {
              key: "refreshLogbook",
              value: function() {
                this.shadowRoot
                  .querySelector("ha-logbook-data")
                  .refreshLogbook();
              },
            },
            {
              key: "_computeRTL",
              value: function(e) {
                return Object(y.a)(e);
              },
            },
          ]) && E(n.prototype, i),
          a && E(n, a),
          t
        );
      })();
      customElements.define("ha-panel-logbook", T);
    },
    90: function(e, t, n) {
      "use strict";
      n(4), n(111), n(112), n(113), n(114);
      var r = n(59),
        o = (n(40), n(5)),
        i = n(3),
        a = n(94);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([focused]) {\n        outline: none;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      input {\n        /* Firefox sets a min-width on the input, which can cause layout issues */\n        min-width: 0;\n      }\n\n      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.\n      In 2.x the <iron-input> is distributed to paper-input-container, which styles\n      it, but in order for this to work correctly, we need to reset some\n      of the native input\'s properties to inherit (from the iron-input) */\n      iron-input > input {\n        @apply --paper-input-container-shared-input-style;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n        letter-spacing: inherit;\n        word-spacing: inherit;\n        line-height: inherit;\n        text-shadow: inherit;\n        color: inherit;\n        cursor: inherit;\n      }\n\n      input:disabled {\n        @apply --paper-input-container-input-disabled;\n      }\n\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      input::-webkit-clear-button {\n        @apply --paper-input-container-input-webkit-clear;\n      }\n\n      input::-webkit-calendar-picker-indicator {\n        @apply --paper-input-container-input-webkit-calendar-picker-indicator;\n      }\n\n      input::-webkit-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input:-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-ms-clear {\n        @apply --paper-input-container-ms-clear;\n      }\n\n      input::-ms-reveal {\n        @apply --paper-input-container-ms-reveal;\n      }\n\n      input:-ms-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">\n\n      <slot name="prefix" slot="prefix"></slot>\n\n      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>\n\n      \x3c!-- Need to bind maxlength so that the paper-input-char-counter works correctly --\x3e\n      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">\n        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">\n      </iron-input>\n\n      <slot name="suffix" slot="suffix"></slot>\n\n      <template is="dom-if" if="[[errorMessage]]">\n        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is="dom-if" if="[[charCounter]]">\n        <paper-input-char-counter slot="add-on"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n  ',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      Object(o.a)({
        is: "paper-input",
        _template: Object(i.a)(s()),
        behaviors: [a.a, r.a],
        properties: { value: { type: String } },
        get _focusableElement() {
          return this.inputElement._inputElement;
        },
        listeners: { "iron-input-ready": "_onIronInputReady" },
        _onIronInputReady: function() {
          this.$.nativeInput || (this.$.nativeInput = this.$$("input")),
            this.inputElement &&
              -1 !== this._typesThatHaveText.indexOf(this.$.nativeInput.type) &&
              (this.alwaysFloatLabel = !0),
            this.inputElement.bindValue &&
              this.$.container._handleValueAndAutoValidate(this.inputElement);
        },
      });
    },
    91: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      n(4);
      var r = n(5),
        o = n(3);
      function i() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$="[[mode]]">[[_text]]</div>\n',
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      var a = Object(r.a)({
        _template: Object(o.a)(i()),
        is: "iron-a11y-announcer",
        properties: {
          mode: { type: String, value: "polite" },
          _text: { type: String, value: "" },
        },
        created: function() {
          a.instance || (a.instance = this),
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
      (a.instance = null),
        (a.requestAvailability = function() {
          a.instance ||
            (a.instance = document.createElement("iron-a11y-announcer")),
            document.body.appendChild(a.instance);
        });
    },
  },
]);
//# sourceMappingURL=chunk.0964e2e5dd4ae2dd7a6c.js.map
