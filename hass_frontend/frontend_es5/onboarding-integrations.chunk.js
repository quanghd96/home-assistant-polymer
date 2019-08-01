(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["onboarding-integrations"],
  {
    /***/ "./node_modules/@polymer/iron-icon/iron-icon.js":
      /*!******************************************************!*\
  !*** ./node_modules/@polymer/iron-icon/iron-icon.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"
        );
        /* harmony import */ var _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-meta/iron-meta.js */ "./node_modules/@polymer/iron-meta/iron-meta.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n",
          ]);

          _templateObject = function _templateObject() {
            return data;
          };

          return data;
        }

        function _taggedTemplateLiteral(strings, raw) {
          if (!raw) {
            raw = strings.slice(0);
          }
          return Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            })
          );
        }

        /**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        /**

The `iron-icon` element displays an icon. By default an icon renders as a 24px
square.

Example using src:

    <iron-icon src="star.png"></iron-icon>

Example setting size to 32px x 32px:

    <iron-icon class="big" src="big_star.png"></iron-icon>

    <style is="custom-style">
      .big {
        --iron-icon-height: 32px;
        --iron-icon-width: 32px;
      }
    </style>

The iron elements include several sets of icons. To use the default set of
icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

    <script type="module">
      import "@polymer/iron-icons/iron-icons.js";
    </script>

    <iron-icon icon="menu"></iron-icon>

To use a different built-in set of icons, import the specific
`iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
For example, to use a communication icon, you would use:

    <script type="module">
      import "@polymer/iron-icons/communication-icons.js";
    </script>

    <iron-icon icon="communication:email"></iron-icon>

You can also create custom icon sets of bitmap or SVG icons.

Example of using an icon named `cherry` from a custom iconset with the ID
`fruit`:

    <iron-icon icon="fruit:cherry"></iron-icon>

See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
create a custom iconset.

See the `iron-icons` demo to see the icons available in the various iconsets.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-icon` | Mixin applied to the icon | {}
`--iron-icon-width` | Width of the icon | `24px`
`--iron-icon-height` | Height of the icon | `24px`
`--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
`--iron-icon-stroke-color` | Stroke color of the svg icon | none

@group Iron Elements
@element iron-icon
@demo demo/index.html
@hero hero.svg
@homepage polymer.github.io
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__[
            "Polymer"
          ]
        )({
          _template: Object(
            _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__[
              "html"
            ]
          )(_templateObject()),
          is: "iron-icon",
          properties: {
            /**
             * The name of the icon to use. The name should be of the form:
             * `iconset_name:icon_name`.
             */
            icon: {
              type: String,
            },

            /**
             * The name of the theme to used, if one is specified by the
             * iconset.
             */
            theme: {
              type: String,
            },

            /**
             * If using iron-icon without an iconset, you can set the src to be
             * the URL of an individual icon image file. Note that this will take
             * precedence over a given icon attribute.
             */
            src: {
              type: String,
            },

            /**
             * @type {!IronMeta}
             */
            _meta: {
              value: _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__[
                "Base"
              ].create("iron-meta", {
                type: "iconset",
              }),
            },
          },
          observers: [
            "_updateIcon(_meta, isAttached)",
            "_updateIcon(theme, isAttached)",
            "_srcChanged(src, isAttached)",
            "_iconChanged(icon, isAttached)",
          ],
          _DEFAULT_ICONSET: "icons",
          _iconChanged: function _iconChanged(icon) {
            var parts = (icon || "").split(":");
            this._iconName = parts.pop();
            this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;

            this._updateIcon();
          },
          _srcChanged: function _srcChanged(src) {
            this._updateIcon();
          },
          _usesIconset: function _usesIconset() {
            return this.icon || !this.src;
          },

          /** @suppress {visibility} */
          _updateIcon: function _updateIcon() {
            if (this._usesIconset()) {
              if (this._img && this._img.parentNode) {
                Object(
                  _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__[
                    "dom"
                  ]
                )(this.root).removeChild(this._img);
              }

              if (this._iconName === "") {
                if (this._iconset) {
                  this._iconset.removeIcon(this);
                }
              } else if (this._iconsetName && this._meta) {
                this._iconset =
                  /** @type {?Polymer.Iconset} */
                  this._meta.byKey(this._iconsetName);

                if (this._iconset) {
                  this._iconset.applyIcon(this, this._iconName, this.theme);

                  this.unlisten(window, "iron-iconset-added", "_updateIcon");
                } else {
                  this.listen(window, "iron-iconset-added", "_updateIcon");
                }
              }
            } else {
              if (this._iconset) {
                this._iconset.removeIcon(this);
              }

              if (!this._img) {
                this._img = document.createElement("img");
                this._img.style.width = "100%";
                this._img.style.height = "100%";
                this._img.draggable = false;
              }

              this._img.src = this.src;
              Object(
                _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__[
                  "dom"
                ]
              )(this.root).appendChild(this._img);
            }
          },
        });

        /***/
      },

    /***/ "./src/common/string/compare.ts":
      /*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
      /*! exports provided: compare, caseInsensitiveCompare */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "compare",
          function() {
            return compare;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "caseInsensitiveCompare",
          function() {
            return caseInsensitiveCompare;
          }
        );
        var compare = function compare(a, b) {
          if (a < b) {
            return -1;
          }

          if (a > b) {
            return 1;
          }

          return 0;
        };
        var caseInsensitiveCompare = function caseInsensitiveCompare(a, b) {
          return compare(a.toLowerCase(), b.toLowerCase());
        };

        /***/
      },

    /***/ "./src/common/util/debounce.ts":
      /*!*************************************!*\
  !*** ./src/common/util/debounce.ts ***!
  \*************************************/
      /*! exports provided: debounce */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "debounce",
          function() {
            return debounce;
          }
        );
        // From: https://davidwalsh.name/javascript-debounce-function
        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // N milliseconds. If `immediate` is passed, trigger the function on the
        // leading edge, instead of the trailing.
        // tslint:disable-next-line: ban-types
        var debounce = function debounce(func, wait) {
          var immediate =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : false;
          var timeout; // @ts-ignore

          return function() {
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            // tslint:disable:no-this-assignment
            // @ts-ignore
            var context = this;

            var later = function later() {
              timeout = null;

              if (!immediate) {
                func.apply(context, args);
              }
            };

            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if (callNow) {
              func.apply(context, args);
            }
          };
        };

        /***/
      },

    /***/ "./src/components/ha-icon.ts":
      /*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
      /*! exports provided: HaIcon */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaIcon",
          function() {
            return HaIcon;
          }
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _get(target, property, receiver) {
          if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);
              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);
              if (desc.get) {
                return desc.get.call(receiver);
              }
              return desc.value;
            };
          }
          return _get(target, property, receiver || target);
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }
          return object;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        // Not duplicate, this is for typing.
        // tslint:disable-next-line

        var ironIconClass = customElements.get("iron-icon");
        var loaded = false;
        var HaIcon =
          /*#__PURE__*/
          (function(_ironIconClass) {
            _inherits(HaIcon, _ironIconClass);

            function HaIcon() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, HaIcon);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(HaIcon)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args)
                )
              );
              _this._iconsetName = void 0;
              return _this;
            }

            _createClass(HaIcon, [
              {
                key: "listen",
                value: function listen(node, eventName, methodName) {
                  _get(_getPrototypeOf(HaIcon.prototype), "listen", this).call(
                    this,
                    node,
                    eventName,
                    methodName
                  );

                  if (!loaded && this._iconsetName === "mdi") {
                    loaded = true;
                    __webpack_require__
                      .e(/*! import() | mdi-icons */ "mdi-icons")
                      .then(
                        __webpack_require__.bind(
                          null,
                          /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"
                        )
                      );
                  }
                },
              },
            ]);

            return HaIcon;
          })(ironIconClass);
        customElements.define("ha-icon", HaIcon);

        /***/
      },

    /***/ "./src/data/config_entries.ts":
      /*!************************************!*\
  !*** ./src/data/config_entries.ts ***!
  \************************************/
      /*! exports provided: createConfigFlow, fetchConfigFlow, handleConfigFlowStep, deleteConfigFlow, getConfigFlowsInProgress, getConfigFlowHandlers, subscribeConfigFlowInProgress, getConfigEntries, localizeConfigFlowTitle */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createConfigFlow",
          function() {
            return createConfigFlow;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchConfigFlow",
          function() {
            return fetchConfigFlow;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "handleConfigFlowStep",
          function() {
            return handleConfigFlowStep;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteConfigFlow",
          function() {
            return deleteConfigFlow;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getConfigFlowsInProgress",
          function() {
            return getConfigFlowsInProgress;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getConfigFlowHandlers",
          function() {
            return getConfigFlowHandlers;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeConfigFlowInProgress",
          function() {
            return subscribeConfigFlowInProgress;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getConfigEntries",
          function() {
            return getConfigEntries;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "localizeConfigFlowTitle",
          function() {
            return localizeConfigFlowTitle;
          }
        );
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );
        /* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/util/debounce */ "./src/common/util/debounce.ts"
        );

        var createConfigFlow = function createConfigFlow(hass, handler) {
          return hass.callApi("POST", "config/config_entries/flow", {
            handler: handler,
          });
        };
        var fetchConfigFlow = function fetchConfigFlow(hass, flowId) {
          return hass.callApi(
            "GET",
            "config/config_entries/flow/".concat(flowId)
          );
        };
        var handleConfigFlowStep = function handleConfigFlowStep(
          hass,
          flowId,
          data
        ) {
          return hass.callApi(
            "POST",
            "config/config_entries/flow/".concat(flowId),
            data
          );
        };
        var deleteConfigFlow = function deleteConfigFlow(hass, flowId) {
          return hass.callApi(
            "DELETE",
            "config/config_entries/flow/".concat(flowId)
          );
        };
        var getConfigFlowsInProgress = function getConfigFlowsInProgress(hass) {
          return hass.callApi("GET", "config/config_entries/flow");
        };
        var getConfigFlowHandlers = function getConfigFlowHandlers(hass) {
          return hass.callApi("GET", "config/config_entries/flow_handlers");
        };

        var fetchConfigFlowInProgress = function fetchConfigFlowInProgress(
          conn
        ) {
          return conn.sendMessagePromise({
            type: "config/entity_registry/list",
          });
        };

        var subscribeConfigFlowInProgressUpdates = function subscribeConfigFlowInProgressUpdates(
          conn,
          store
        ) {
          return Object(
            _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"]
          )(
            conn.subscribeEvents(
              function() {
                return fetchConfigFlowInProgress(conn).then(function(flows) {
                  return store.setState(flows, true);
                });
              },
              500,
              true
            ),
            "config_entry_discovered"
          );
        };

        var subscribeConfigFlowInProgress = function subscribeConfigFlowInProgress(
          hass,
          onChange
        ) {
          return Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "createCollection"
            ]
          )(
            "_configFlowProgress",
            fetchConfigFlowInProgress,
            subscribeConfigFlowInProgressUpdates,
            hass.connection,
            onChange
          );
        };
        var getConfigEntries = function getConfigEntries(hass) {
          return hass.callApi("GET", "config/config_entries/entry");
        };
        var localizeConfigFlowTitle = function localizeConfigFlowTitle(
          localize,
          flow
        ) {
          var placeholders = flow.context.title_placeholders || {};
          var placeholderKeys = Object.keys(placeholders);

          if (placeholderKeys.length === 0) {
            return localize("component.".concat(flow.handler, ".config.title"));
          }

          var args = [];
          placeholderKeys.forEach(function(key) {
            args.push(key);
            args.push(placeholders[key]);
          });
          return localize.apply(
            void 0,
            ["component.".concat(flow.handler, ".config.flow_title")].concat(
              args
            )
          );
        };

        /***/
      },

    /***/ "./src/dialogs/config-flow/show-dialog-config-flow.ts":
      /*!************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-config-flow.ts ***!
  \************************************************************/
      /*! exports provided: loadConfigFlowDialog, showConfigFlowDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadConfigFlowDialog",
          function() {
            return loadConfigFlowDialog;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showConfigFlowDialog",
          function() {
            return showConfigFlowDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        var loadConfigFlowDialog = function loadConfigFlowDialog() {
          return Promise.all(
            /*! import() | dialog-config-flow */ [
              __webpack_require__.e(
                "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
              ),
              __webpack_require__.e(
                "vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~2ef54234"
              ),
              __webpack_require__.e(
                "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
              ),
              __webpack_require__.e(
                "vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"
              ),
              __webpack_require__.e(
                "vendors~dialog-config-flow~more-info-dialog~panel-config-customize~panel-config-integrations~panel-c~e5758c2a"
              ),
              __webpack_require__.e(8),
              __webpack_require__.e(
                "vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"
              ),
              __webpack_require__.e(
                "vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-kiosk~panel-lovelace~pane~abfacb2f"
              ),
              __webpack_require__.e(12),
              __webpack_require__.e(
                "vendors~dialog-config-flow~more-info-dialog~onboarding-core-config"
              ),
              __webpack_require__.e(
                "vendors~dialog-config-flow~more-info-dialog"
              ),
              __webpack_require__.e("vendors~dialog-config-flow"),
              __webpack_require__.e(
                "dialog-config-flow~ha-mfa-module-setup-flow"
              ),
              __webpack_require__.e("dialog-config-flow"),
            ]
          ).then(
            __webpack_require__.bind(
              null,
              /*! ./dialog-config-flow */ "./src/dialogs/config-flow/dialog-config-flow.ts"
            )
          );
        };
        var showConfigFlowDialog = function showConfigFlowDialog(
          element,
          dialogParams
        ) {
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-dialog", {
            dialogTag: "dialog-config-flow",
            dialogImport: loadConfigFlowDialog,
            dialogParams: dialogParams,
          });
        };

        /***/
      },

    /***/ "./src/onboarding/integration-badge.ts":
      /*!*********************************************!*\
  !*** ./src/onboarding/integration-badge.ts ***!
  \*********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../components/ha-icon */ "./src/components/ha-icon.ts"
        );
        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n      :host {\n        display: inline-flex;\n        flex-direction: column;\n        text-align: center;\n        color: var(--primary-text-color);\n      }\n\n      :host([clickable]) {\n        color: var(--primary-text-color);\n      }\n\n      .icon {\n        position: relative;\n        margin: 0 auto 8px;\n        height: 40px;\n        width: 40px;\n        border-radius: 50%;\n        border: 1px solid var(--secondary-text-color);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      :host([clickable]) .icon {\n        border-color: var(--primary-color);\n        border-width: 2px;\n      }\n\n      .badge {\n        position: absolute;\n        color: var(--primary-color);\n        bottom: -5px;\n        right: -5px;\n        background-color: white;\n        border-radius: 50%;\n        width: 18px;\n        display: block;\n        height: 18px;\n      }\n\n      .title {\n        min-height: 2.3em;\n      }\n    ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n              <ha-icon class="badge" .icon=',
            "></ha-icon>\n            ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <div class="icon">\n        <iron-icon .icon=',
            "></iron-icon>\n        ",
            '\n      </div>\n      <div class="title">',
            "</div>\n    ",
          ]);

          _templateObject = function _templateObject() {
            return data;
          };

          return data;
        }

        function _taggedTemplateLiteral(strings, raw) {
          if (!raw) {
            raw = strings.slice(0);
          }
          return Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            })
          );
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        function _decorate(decorators, factory, superClass, mixins) {
          var api = _getDecoratorsApi();
          if (mixins) {
            for (var i = 0; i < mixins.length; i++) {
              api = mixins[i](api);
            }
          }
          var r = factory(function initialize(O) {
            api.initializeInstanceElements(O, decorated.elements);
          }, superClass);
          var decorated = api.decorateClass(
            _coalesceClassElements(r.d.map(_createElementDescriptor)),
            decorators
          );
          api.initializeClassElements(r.F, decorated.elements);
          return api.runClassFinishers(r.F, decorated.finishers);
        }

        function _getDecoratorsApi() {
          _getDecoratorsApi = function _getDecoratorsApi() {
            return api;
          };
          var api = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function initializeInstanceElements(
              O,
              elements
            ) {
              ["method", "field"].forEach(function(kind) {
                elements.forEach(function(element) {
                  if (element.kind === kind && element.placement === "own") {
                    this.defineClassElement(O, element);
                  }
                }, this);
              }, this);
            },
            initializeClassElements: function initializeClassElements(
              F,
              elements
            ) {
              var proto = F.prototype;
              ["method", "field"].forEach(function(kind) {
                elements.forEach(function(element) {
                  var placement = element.placement;
                  if (
                    element.kind === kind &&
                    (placement === "static" || placement === "prototype")
                  ) {
                    var receiver = placement === "static" ? F : proto;
                    this.defineClassElement(receiver, element);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function defineClassElement(receiver, element) {
              var descriptor = element.descriptor;
              if (element.kind === "field") {
                var initializer = element.initializer;
                descriptor = {
                  enumerable: descriptor.enumerable,
                  writable: descriptor.writable,
                  configurable: descriptor.configurable,
                  value:
                    initializer === void 0
                      ? void 0
                      : initializer.call(receiver),
                };
              }
              Object.defineProperty(receiver, element.key, descriptor);
            },
            decorateClass: function decorateClass(elements, decorators) {
              var newElements = [];
              var finishers = [];
              var placements = { static: [], prototype: [], own: [] };
              elements.forEach(function(element) {
                this.addElementPlacement(element, placements);
              }, this);
              elements.forEach(function(element) {
                if (!_hasDecorators(element)) return newElements.push(element);
                var elementFinishersExtras = this.decorateElement(
                  element,
                  placements
                );
                newElements.push(elementFinishersExtras.element);
                newElements.push.apply(
                  newElements,
                  elementFinishersExtras.extras
                );
                finishers.push.apply(
                  finishers,
                  elementFinishersExtras.finishers
                );
              }, this);
              if (!decorators) {
                return { elements: newElements, finishers: finishers };
              }
              var result = this.decorateConstructor(newElements, decorators);
              finishers.push.apply(finishers, result.finishers);
              result.finishers = finishers;
              return result;
            },
            addElementPlacement: function addElementPlacement(
              element,
              placements,
              silent
            ) {
              var keys = placements[element.placement];
              if (!silent && keys.indexOf(element.key) !== -1) {
                throw new TypeError("Duplicated element (" + element.key + ")");
              }
              keys.push(element.key);
            },
            decorateElement: function decorateElement(element, placements) {
              var extras = [];
              var finishers = [];
              for (
                var decorators = element.decorators, i = decorators.length - 1;
                i >= 0;
                i--
              ) {
                var keys = placements[element.placement];
                keys.splice(keys.indexOf(element.key), 1);
                var elementObject = this.fromElementDescriptor(element);
                var elementFinisherExtras = this.toElementFinisherExtras(
                  (0, decorators[i])(elementObject) || elementObject
                );
                element = elementFinisherExtras.element;
                this.addElementPlacement(element, placements);
                if (elementFinisherExtras.finisher) {
                  finishers.push(elementFinisherExtras.finisher);
                }
                var newExtras = elementFinisherExtras.extras;
                if (newExtras) {
                  for (var j = 0; j < newExtras.length; j++) {
                    this.addElementPlacement(newExtras[j], placements);
                  }
                  extras.push.apply(extras, newExtras);
                }
              }
              return { element: element, finishers: finishers, extras: extras };
            },
            decorateConstructor: function decorateConstructor(
              elements,
              decorators
            ) {
              var finishers = [];
              for (var i = decorators.length - 1; i >= 0; i--) {
                var obj = this.fromClassDescriptor(elements);
                var elementsAndFinisher = this.toClassDescriptor(
                  (0, decorators[i])(obj) || obj
                );
                if (elementsAndFinisher.finisher !== undefined) {
                  finishers.push(elementsAndFinisher.finisher);
                }
                if (elementsAndFinisher.elements !== undefined) {
                  elements = elementsAndFinisher.elements;
                  for (var j = 0; j < elements.length - 1; j++) {
                    for (var k = j + 1; k < elements.length; k++) {
                      if (
                        elements[j].key === elements[k].key &&
                        elements[j].placement === elements[k].placement
                      ) {
                        throw new TypeError(
                          "Duplicated element (" + elements[j].key + ")"
                        );
                      }
                    }
                  }
                }
              }
              return { elements: elements, finishers: finishers };
            },
            fromElementDescriptor: function fromElementDescriptor(element) {
              var obj = {
                kind: element.kind,
                key: element.key,
                placement: element.placement,
                descriptor: element.descriptor,
              };
              var desc = { value: "Descriptor", configurable: true };
              Object.defineProperty(obj, Symbol.toStringTag, desc);
              if (element.kind === "field")
                obj.initializer = element.initializer;
              return obj;
            },
            toElementDescriptors: function toElementDescriptors(
              elementObjects
            ) {
              if (elementObjects === undefined) return;
              return _toArray(elementObjects).map(function(elementObject) {
                var element = this.toElementDescriptor(elementObject);
                this.disallowProperty(
                  elementObject,
                  "finisher",
                  "An element descriptor"
                );
                this.disallowProperty(
                  elementObject,
                  "extras",
                  "An element descriptor"
                );
                return element;
              }, this);
            },
            toElementDescriptor: function toElementDescriptor(elementObject) {
              var kind = String(elementObject.kind);
              if (kind !== "method" && kind !== "field") {
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or' +
                    ' "field", but a decorator created an element descriptor with' +
                    ' .kind "' +
                    kind +
                    '"'
                );
              }
              var key = _toPropertyKey(elementObject.key);
              var placement = String(elementObject.placement);
              if (
                placement !== "static" &&
                placement !== "prototype" &&
                placement !== "own"
              ) {
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static",' +
                    ' "prototype" or "own", but a decorator created an element descriptor' +
                    ' with .placement "' +
                    placement +
                    '"'
                );
              }
              var descriptor = elementObject.descriptor;
              this.disallowProperty(
                elementObject,
                "elements",
                "An element descriptor"
              );
              var element = {
                kind: kind,
                key: key,
                placement: placement,
                descriptor: Object.assign({}, descriptor),
              };
              if (kind !== "field") {
                this.disallowProperty(
                  elementObject,
                  "initializer",
                  "A method descriptor"
                );
              } else {
                this.disallowProperty(
                  descriptor,
                  "get",
                  "The property descriptor of a field descriptor"
                );
                this.disallowProperty(
                  descriptor,
                  "set",
                  "The property descriptor of a field descriptor"
                );
                this.disallowProperty(
                  descriptor,
                  "value",
                  "The property descriptor of a field descriptor"
                );
                element.initializer = elementObject.initializer;
              }
              return element;
            },
            toElementFinisherExtras: function toElementFinisherExtras(
              elementObject
            ) {
              var element = this.toElementDescriptor(elementObject);
              var finisher = _optionalCallableProperty(
                elementObject,
                "finisher"
              );
              var extras = this.toElementDescriptors(elementObject.extras);
              return { element: element, finisher: finisher, extras: extras };
            },
            fromClassDescriptor: function fromClassDescriptor(elements) {
              var obj = {
                kind: "class",
                elements: elements.map(this.fromElementDescriptor, this),
              };
              var desc = { value: "Descriptor", configurable: true };
              Object.defineProperty(obj, Symbol.toStringTag, desc);
              return obj;
            },
            toClassDescriptor: function toClassDescriptor(obj) {
              var kind = String(obj.kind);
              if (kind !== "class") {
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator' +
                    ' created a class descriptor with .kind "' +
                    kind +
                    '"'
                );
              }
              this.disallowProperty(obj, "key", "A class descriptor");
              this.disallowProperty(obj, "placement", "A class descriptor");
              this.disallowProperty(obj, "descriptor", "A class descriptor");
              this.disallowProperty(obj, "initializer", "A class descriptor");
              this.disallowProperty(obj, "extras", "A class descriptor");
              var finisher = _optionalCallableProperty(obj, "finisher");
              var elements = this.toElementDescriptors(obj.elements);
              return { elements: elements, finisher: finisher };
            },
            runClassFinishers: function runClassFinishers(
              constructor,
              finishers
            ) {
              for (var i = 0; i < finishers.length; i++) {
                var newConstructor = (0, finishers[i])(constructor);
                if (newConstructor !== undefined) {
                  if (typeof newConstructor !== "function") {
                    throw new TypeError("Finishers must return a constructor.");
                  }
                  constructor = newConstructor;
                }
              }
              return constructor;
            },
            disallowProperty: function disallowProperty(obj, name, objectType) {
              if (obj[name] !== undefined) {
                throw new TypeError(
                  objectType + " can't have a ." + name + " property."
                );
              }
            },
          };
          return api;
        }

        function _createElementDescriptor(def) {
          var key = _toPropertyKey(def.key);
          var descriptor;
          if (def.kind === "method") {
            descriptor = {
              value: def.value,
              writable: true,
              configurable: true,
              enumerable: false,
            };
          } else if (def.kind === "get") {
            descriptor = {
              get: def.value,
              configurable: true,
              enumerable: false,
            };
          } else if (def.kind === "set") {
            descriptor = {
              set: def.value,
              configurable: true,
              enumerable: false,
            };
          } else if (def.kind === "field") {
            descriptor = {
              configurable: true,
              writable: true,
              enumerable: true,
            };
          }
          var element = {
            kind: def.kind === "field" ? "field" : "method",
            key: key,
            placement: def.static
              ? "static"
              : def.kind === "field"
              ? "own"
              : "prototype",
            descriptor: descriptor,
          };
          if (def.decorators) element.decorators = def.decorators;
          if (def.kind === "field") element.initializer = def.value;
          return element;
        }

        function _coalesceGetterSetter(element, other) {
          if (element.descriptor.get !== undefined) {
            other.descriptor.get = element.descriptor.get;
          } else {
            other.descriptor.set = element.descriptor.set;
          }
        }

        function _coalesceClassElements(elements) {
          var newElements = [];
          var isSameElement = function isSameElement(other) {
            return (
              other.kind === "method" &&
              other.key === element.key &&
              other.placement === element.placement
            );
          };
          for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var other;
            if (
              element.kind === "method" &&
              (other = newElements.find(isSameElement))
            ) {
              if (
                _isDataDescriptor(element.descriptor) ||
                _isDataDescriptor(other.descriptor)
              ) {
                if (_hasDecorators(element) || _hasDecorators(other)) {
                  throw new ReferenceError(
                    "Duplicated methods (" +
                      element.key +
                      ") can't be decorated."
                  );
                }
                other.descriptor = element.descriptor;
              } else {
                if (_hasDecorators(element)) {
                  if (_hasDecorators(other)) {
                    throw new ReferenceError(
                      "Decorators can't be placed on different accessors with for " +
                        "the same property (" +
                        element.key +
                        ")."
                    );
                  }
                  other.decorators = element.decorators;
                }
                _coalesceGetterSetter(element, other);
              }
            } else {
              newElements.push(element);
            }
          }
          return newElements;
        }

        function _hasDecorators(element) {
          return element.decorators && element.decorators.length;
        }

        function _isDataDescriptor(desc) {
          return (
            desc !== undefined &&
            !(desc.value === undefined && desc.writable === undefined)
          );
        }

        function _optionalCallableProperty(obj, name) {
          var value = obj[name];
          if (value !== undefined && typeof value !== "function") {
            throw new TypeError("Expected '" + name + "' to be a function");
          }
          return value;
        }

        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }

        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }

        function _toArray(arr) {
          return (
            _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        }

        function _iterableToArray(iter) {
          if (
            Symbol.iterator in Object(iter) ||
            Object.prototype.toString.call(iter) === "[object Arguments]"
          )
            return Array.from(iter);
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        var IntegrationBadge = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "integration-badge"
            ),
          ],
          function(_initialize, _LitElement) {
            var IntegrationBadge =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(IntegrationBadge, _LitElement2);

                function IntegrationBadge() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, IntegrationBadge);

                  for (
                    var _len = arguments.length,
                      args = new Array(_len),
                      _key = 0;
                    _key < _len;
                    _key++
                  ) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(
                    this,
                    (_getPrototypeOf2 = _getPrototypeOf(
                      IntegrationBadge
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return IntegrationBadge;
              })(_LitElement);

            return {
              F: IntegrationBadge,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "icon",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "title",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "badgeIcon",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )({
                      type: Boolean,
                      reflect: true,
                    }),
                  ],
                  key: "clickable",
                  value: function value() {
                    return false;
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      this.icon,
                      this.badgeIcon
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject2(), this.badgeIcon)
                        : "",
                      this.title
                    );
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject3());
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/onboarding/onboarding-integrations.ts":
      /*!***************************************************!*\
  !*** ./src/onboarding/onboarding-integrations.ts ***!
  \***************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../dialogs/config-flow/show-dialog-config-flow */ "./src/dialogs/config-flow/show-dialog-config-flow.ts"
        );
        /* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../data/config_entries */ "./src/data/config_entries.ts"
        );
        /* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../common/string/compare */ "./src/common/string/compare.ts"
        );
        /* harmony import */ var _integration_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./integration-badge */ "./src/onboarding/integration-badge.ts"
        );
        /* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../common/util/debounce */ "./src/common/util/debounce.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _data_onboarding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../data/onboarding */ "./src/data/onboarding.ts"
        );
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );
        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            "\n      .badges {\n        margin-top: 24px;\n      }\n      .badges > * {\n        width: 24%;\n        min-width: 90px;\n        margin-bottom: 24px;\n      }\n      button {\n        display: inline-block;\n        cursor: pointer;\n        padding: 0;\n        border: 0;\n        background: 0;\n        font: inherit;\n      }\n      .footer {\n        text-align: right;\n      }\n    ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _nonIterableRest()
          );
        }

        function _iterableToArrayLimit(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (
              var _i = arr[Symbol.iterator](), _s;
              !(_n = (_s = _i.next()).done);
              _n = true
            ) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function() {
            var self = this,
              args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            "\n      <p>\n        ",
            '\n      </p>\n      <div class="badges">\n        ',
            "\n        <button @click=",
            ">\n          <integration-badge\n            clickable\n            title=",
            '\n            icon="hass:dots-horizontal"\n          ></integration-badge>\n        </button>\n      </div>\n      <div class="footer">\n        <mwc-button @click=',
            ">\n          ",
            "\n        </mwc-button>\n      </div>\n    ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _nonIterableSpread()
          );
        }

        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n            <button .flowId=",
            " @click=",
            ">\n              <integration-badge\n                clickable\n                .title=",
            '\n                icon="hass:plus"\n              ></integration-badge>\n            </button>\n          ',
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n            <integration-badge\n              .title=",
            '\n              icon="hass:check"\n            ></integration-badge>\n          ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([""]);

          _templateObject = function _templateObject() {
            return data;
          };

          return data;
        }

        function _taggedTemplateLiteral(strings, raw) {
          if (!raw) {
            raw = strings.slice(0);
          }
          return Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            })
          );
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        function _decorate(decorators, factory, superClass, mixins) {
          var api = _getDecoratorsApi();
          if (mixins) {
            for (var i = 0; i < mixins.length; i++) {
              api = mixins[i](api);
            }
          }
          var r = factory(function initialize(O) {
            api.initializeInstanceElements(O, decorated.elements);
          }, superClass);
          var decorated = api.decorateClass(
            _coalesceClassElements(r.d.map(_createElementDescriptor)),
            decorators
          );
          api.initializeClassElements(r.F, decorated.elements);
          return api.runClassFinishers(r.F, decorated.finishers);
        }

        function _getDecoratorsApi() {
          _getDecoratorsApi = function _getDecoratorsApi() {
            return api;
          };
          var api = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function initializeInstanceElements(
              O,
              elements
            ) {
              ["method", "field"].forEach(function(kind) {
                elements.forEach(function(element) {
                  if (element.kind === kind && element.placement === "own") {
                    this.defineClassElement(O, element);
                  }
                }, this);
              }, this);
            },
            initializeClassElements: function initializeClassElements(
              F,
              elements
            ) {
              var proto = F.prototype;
              ["method", "field"].forEach(function(kind) {
                elements.forEach(function(element) {
                  var placement = element.placement;
                  if (
                    element.kind === kind &&
                    (placement === "static" || placement === "prototype")
                  ) {
                    var receiver = placement === "static" ? F : proto;
                    this.defineClassElement(receiver, element);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function defineClassElement(receiver, element) {
              var descriptor = element.descriptor;
              if (element.kind === "field") {
                var initializer = element.initializer;
                descriptor = {
                  enumerable: descriptor.enumerable,
                  writable: descriptor.writable,
                  configurable: descriptor.configurable,
                  value:
                    initializer === void 0
                      ? void 0
                      : initializer.call(receiver),
                };
              }
              Object.defineProperty(receiver, element.key, descriptor);
            },
            decorateClass: function decorateClass(elements, decorators) {
              var newElements = [];
              var finishers = [];
              var placements = { static: [], prototype: [], own: [] };
              elements.forEach(function(element) {
                this.addElementPlacement(element, placements);
              }, this);
              elements.forEach(function(element) {
                if (!_hasDecorators(element)) return newElements.push(element);
                var elementFinishersExtras = this.decorateElement(
                  element,
                  placements
                );
                newElements.push(elementFinishersExtras.element);
                newElements.push.apply(
                  newElements,
                  elementFinishersExtras.extras
                );
                finishers.push.apply(
                  finishers,
                  elementFinishersExtras.finishers
                );
              }, this);
              if (!decorators) {
                return { elements: newElements, finishers: finishers };
              }
              var result = this.decorateConstructor(newElements, decorators);
              finishers.push.apply(finishers, result.finishers);
              result.finishers = finishers;
              return result;
            },
            addElementPlacement: function addElementPlacement(
              element,
              placements,
              silent
            ) {
              var keys = placements[element.placement];
              if (!silent && keys.indexOf(element.key) !== -1) {
                throw new TypeError("Duplicated element (" + element.key + ")");
              }
              keys.push(element.key);
            },
            decorateElement: function decorateElement(element, placements) {
              var extras = [];
              var finishers = [];
              for (
                var decorators = element.decorators, i = decorators.length - 1;
                i >= 0;
                i--
              ) {
                var keys = placements[element.placement];
                keys.splice(keys.indexOf(element.key), 1);
                var elementObject = this.fromElementDescriptor(element);
                var elementFinisherExtras = this.toElementFinisherExtras(
                  (0, decorators[i])(elementObject) || elementObject
                );
                element = elementFinisherExtras.element;
                this.addElementPlacement(element, placements);
                if (elementFinisherExtras.finisher) {
                  finishers.push(elementFinisherExtras.finisher);
                }
                var newExtras = elementFinisherExtras.extras;
                if (newExtras) {
                  for (var j = 0; j < newExtras.length; j++) {
                    this.addElementPlacement(newExtras[j], placements);
                  }
                  extras.push.apply(extras, newExtras);
                }
              }
              return { element: element, finishers: finishers, extras: extras };
            },
            decorateConstructor: function decorateConstructor(
              elements,
              decorators
            ) {
              var finishers = [];
              for (var i = decorators.length - 1; i >= 0; i--) {
                var obj = this.fromClassDescriptor(elements);
                var elementsAndFinisher = this.toClassDescriptor(
                  (0, decorators[i])(obj) || obj
                );
                if (elementsAndFinisher.finisher !== undefined) {
                  finishers.push(elementsAndFinisher.finisher);
                }
                if (elementsAndFinisher.elements !== undefined) {
                  elements = elementsAndFinisher.elements;
                  for (var j = 0; j < elements.length - 1; j++) {
                    for (var k = j + 1; k < elements.length; k++) {
                      if (
                        elements[j].key === elements[k].key &&
                        elements[j].placement === elements[k].placement
                      ) {
                        throw new TypeError(
                          "Duplicated element (" + elements[j].key + ")"
                        );
                      }
                    }
                  }
                }
              }
              return { elements: elements, finishers: finishers };
            },
            fromElementDescriptor: function fromElementDescriptor(element) {
              var obj = {
                kind: element.kind,
                key: element.key,
                placement: element.placement,
                descriptor: element.descriptor,
              };
              var desc = { value: "Descriptor", configurable: true };
              Object.defineProperty(obj, Symbol.toStringTag, desc);
              if (element.kind === "field")
                obj.initializer = element.initializer;
              return obj;
            },
            toElementDescriptors: function toElementDescriptors(
              elementObjects
            ) {
              if (elementObjects === undefined) return;
              return _toArray(elementObjects).map(function(elementObject) {
                var element = this.toElementDescriptor(elementObject);
                this.disallowProperty(
                  elementObject,
                  "finisher",
                  "An element descriptor"
                );
                this.disallowProperty(
                  elementObject,
                  "extras",
                  "An element descriptor"
                );
                return element;
              }, this);
            },
            toElementDescriptor: function toElementDescriptor(elementObject) {
              var kind = String(elementObject.kind);
              if (kind !== "method" && kind !== "field") {
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or' +
                    ' "field", but a decorator created an element descriptor with' +
                    ' .kind "' +
                    kind +
                    '"'
                );
              }
              var key = _toPropertyKey(elementObject.key);
              var placement = String(elementObject.placement);
              if (
                placement !== "static" &&
                placement !== "prototype" &&
                placement !== "own"
              ) {
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static",' +
                    ' "prototype" or "own", but a decorator created an element descriptor' +
                    ' with .placement "' +
                    placement +
                    '"'
                );
              }
              var descriptor = elementObject.descriptor;
              this.disallowProperty(
                elementObject,
                "elements",
                "An element descriptor"
              );
              var element = {
                kind: kind,
                key: key,
                placement: placement,
                descriptor: Object.assign({}, descriptor),
              };
              if (kind !== "field") {
                this.disallowProperty(
                  elementObject,
                  "initializer",
                  "A method descriptor"
                );
              } else {
                this.disallowProperty(
                  descriptor,
                  "get",
                  "The property descriptor of a field descriptor"
                );
                this.disallowProperty(
                  descriptor,
                  "set",
                  "The property descriptor of a field descriptor"
                );
                this.disallowProperty(
                  descriptor,
                  "value",
                  "The property descriptor of a field descriptor"
                );
                element.initializer = elementObject.initializer;
              }
              return element;
            },
            toElementFinisherExtras: function toElementFinisherExtras(
              elementObject
            ) {
              var element = this.toElementDescriptor(elementObject);
              var finisher = _optionalCallableProperty(
                elementObject,
                "finisher"
              );
              var extras = this.toElementDescriptors(elementObject.extras);
              return { element: element, finisher: finisher, extras: extras };
            },
            fromClassDescriptor: function fromClassDescriptor(elements) {
              var obj = {
                kind: "class",
                elements: elements.map(this.fromElementDescriptor, this),
              };
              var desc = { value: "Descriptor", configurable: true };
              Object.defineProperty(obj, Symbol.toStringTag, desc);
              return obj;
            },
            toClassDescriptor: function toClassDescriptor(obj) {
              var kind = String(obj.kind);
              if (kind !== "class") {
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator' +
                    ' created a class descriptor with .kind "' +
                    kind +
                    '"'
                );
              }
              this.disallowProperty(obj, "key", "A class descriptor");
              this.disallowProperty(obj, "placement", "A class descriptor");
              this.disallowProperty(obj, "descriptor", "A class descriptor");
              this.disallowProperty(obj, "initializer", "A class descriptor");
              this.disallowProperty(obj, "extras", "A class descriptor");
              var finisher = _optionalCallableProperty(obj, "finisher");
              var elements = this.toElementDescriptors(obj.elements);
              return { elements: elements, finisher: finisher };
            },
            runClassFinishers: function runClassFinishers(
              constructor,
              finishers
            ) {
              for (var i = 0; i < finishers.length; i++) {
                var newConstructor = (0, finishers[i])(constructor);
                if (newConstructor !== undefined) {
                  if (typeof newConstructor !== "function") {
                    throw new TypeError("Finishers must return a constructor.");
                  }
                  constructor = newConstructor;
                }
              }
              return constructor;
            },
            disallowProperty: function disallowProperty(obj, name, objectType) {
              if (obj[name] !== undefined) {
                throw new TypeError(
                  objectType + " can't have a ." + name + " property."
                );
              }
            },
          };
          return api;
        }

        function _createElementDescriptor(def) {
          var key = _toPropertyKey(def.key);
          var descriptor;
          if (def.kind === "method") {
            descriptor = {
              value: def.value,
              writable: true,
              configurable: true,
              enumerable: false,
            };
          } else if (def.kind === "get") {
            descriptor = {
              get: def.value,
              configurable: true,
              enumerable: false,
            };
          } else if (def.kind === "set") {
            descriptor = {
              set: def.value,
              configurable: true,
              enumerable: false,
            };
          } else if (def.kind === "field") {
            descriptor = {
              configurable: true,
              writable: true,
              enumerable: true,
            };
          }
          var element = {
            kind: def.kind === "field" ? "field" : "method",
            key: key,
            placement: def.static
              ? "static"
              : def.kind === "field"
              ? "own"
              : "prototype",
            descriptor: descriptor,
          };
          if (def.decorators) element.decorators = def.decorators;
          if (def.kind === "field") element.initializer = def.value;
          return element;
        }

        function _coalesceGetterSetter(element, other) {
          if (element.descriptor.get !== undefined) {
            other.descriptor.get = element.descriptor.get;
          } else {
            other.descriptor.set = element.descriptor.set;
          }
        }

        function _coalesceClassElements(elements) {
          var newElements = [];
          var isSameElement = function isSameElement(other) {
            return (
              other.kind === "method" &&
              other.key === element.key &&
              other.placement === element.placement
            );
          };
          for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var other;
            if (
              element.kind === "method" &&
              (other = newElements.find(isSameElement))
            ) {
              if (
                _isDataDescriptor(element.descriptor) ||
                _isDataDescriptor(other.descriptor)
              ) {
                if (_hasDecorators(element) || _hasDecorators(other)) {
                  throw new ReferenceError(
                    "Duplicated methods (" +
                      element.key +
                      ") can't be decorated."
                  );
                }
                other.descriptor = element.descriptor;
              } else {
                if (_hasDecorators(element)) {
                  if (_hasDecorators(other)) {
                    throw new ReferenceError(
                      "Decorators can't be placed on different accessors with for " +
                        "the same property (" +
                        element.key +
                        ")."
                    );
                  }
                  other.decorators = element.decorators;
                }
                _coalesceGetterSetter(element, other);
              }
            } else {
              newElements.push(element);
            }
          }
          return newElements;
        }

        function _hasDecorators(element) {
          return element.decorators && element.decorators.length;
        }

        function _isDataDescriptor(desc) {
          return (
            desc !== undefined &&
            !(desc.value === undefined && desc.writable === undefined)
          );
        }

        function _optionalCallableProperty(obj, name) {
          var value = obj[name];
          if (value !== undefined && typeof value !== "function") {
            throw new TypeError("Expected '" + name + "' to be a function");
          }
          return value;
        }

        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }

        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }

        function _toArray(arr) {
          return (
            _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        }

        function _iterableToArray(iter) {
          if (
            Symbol.iterator in Object(iter) ||
            Object.prototype.toString.call(iter) === "[object Arguments]"
          )
            return Array.from(iter);
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        function _get(target, property, receiver) {
          if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);
              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);
              if (desc.get) {
                return desc.get.call(receiver);
              }
              return desc.value;
            };
          }
          return _get(target, property, receiver || target);
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }
          return object;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        var OnboardingIntegrations = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "onboarding-integrations"
            ),
          ],
          function(_initialize, _LitElement) {
            var OnboardingIntegrations =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(OnboardingIntegrations, _LitElement2);

                function OnboardingIntegrations() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, OnboardingIntegrations);

                  for (
                    var _len = arguments.length,
                      args = new Array(_len),
                      _key = 0;
                    _key < _len;
                    _key++
                  ) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(
                    this,
                    (_getPrototypeOf2 = _getPrototypeOf(
                      OnboardingIntegrations
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return OnboardingIntegrations;
              })(_LitElement);

            return {
              F: OnboardingIntegrations,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "onboardingLocalize",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_entries",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_discovered",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_unsubEvents",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    var _this2 = this;

                    _get(
                      _getPrototypeOf(OnboardingIntegrations.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this.hass.connection
                      .subscribeEvents(
                        Object(
                          _common_util_debounce__WEBPACK_IMPORTED_MODULE_6__[
                            "debounce"
                          ]
                        )(function() {
                          return _this2._loadData();
                        }, 500),
                        "config_entry_discovered"
                      )
                      .then(function(unsub) {
                        _this2._unsubEvents = unsub;
                      });
                  },
                },
                {
                  kind: "method",
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(OnboardingIntegrations.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    if (this._unsubEvents) {
                      this._unsubEvents();
                    }
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var _this3 = this;

                    if (!this._entries || !this._discovered) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    } // Render discovered and existing entries together sorted by localized title.

                    var entries = this._entries.map(function(entry) {
                      var title = _this3.hass.localize(
                        "component.".concat(entry.domain, ".config.title")
                      );

                      return [
                        title,
                        Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(_templateObject2(), title),
                      ];
                    });

                    var discovered = this._discovered.map(function(flow) {
                      var title = Object(
                        _data_config_entries__WEBPACK_IMPORTED_MODULE_3__[
                          "localizeConfigFlowTitle"
                        ]
                      )(_this3.hass.localize, flow);
                      return [
                        title,
                        Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(
                          _templateObject3(),
                          flow.flow_id,
                          _this3._continueFlow,
                          title
                        ),
                      ];
                    });

                    var content = []
                      .concat(
                        _toConsumableArray(entries),
                        _toConsumableArray(discovered)
                      )
                      .sort(function(a, b) {
                        return Object(
                          _common_string_compare__WEBPACK_IMPORTED_MODULE_4__[
                            "compare"
                          ]
                        )(a[0], b[0]);
                      })
                      .map(function(item) {
                        return item[1];
                      });
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject4(),
                      this.onboardingLocalize(
                        "ui.panel.page-onboarding.integration.intro"
                      ),
                      content,
                      this._createFlow,
                      this.onboardingLocalize(
                        "ui.panel.page-onboarding.integration.more_integrations"
                      ),
                      this._finish,
                      this.onboardingLocalize(
                        "ui.panel.page-onboarding.integration.finish"
                      )
                    );
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(OnboardingIntegrations.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    Object(
                      _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_2__[
                        "loadConfigFlowDialog"
                      ]
                    )();

                    this._loadData();
                    /* polyfill for paper-dropdown */

                    __webpack_require__
                      .e(
                        /*! import() | polyfill-web-animations-next */ "vendors~polyfill-web-animations-next"
                      )
                      .then(
                        __webpack_require__.t.bind(
                          null,
                          /*! web-animations-js/web-animations-next-lite.min */ "./node_modules/web-animations-js/web-animations-next-lite.min.js",
                          7
                        )
                      );
                  },
                },
                {
                  kind: "method",
                  key: "_createFlow",
                  value: function _createFlow() {
                    var _this4 = this;

                    Object(
                      _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_2__[
                        "showConfigFlowDialog"
                      ]
                    )(this, {
                      dialogClosedCallback: function dialogClosedCallback() {
                        return _this4._loadData();
                      },
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_continueFlow",
                  value: function _continueFlow(ev) {
                    var _this5 = this;

                    Object(
                      _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_2__[
                        "showConfigFlowDialog"
                      ]
                    )(this, {
                      continueFlowId: ev.currentTarget.flowId,
                      dialogClosedCallback: function dialogClosedCallback() {
                        return _this5._loadData();
                      },
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_loadData",
                  value: (function() {
                    var _loadData2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var _ref, _ref2, discovered, entries;

                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2;
                                  return Promise.all([
                                    Object(
                                      _data_config_entries__WEBPACK_IMPORTED_MODULE_3__[
                                        "getConfigFlowsInProgress"
                                      ]
                                    )(this.hass),
                                    Object(
                                      _data_config_entries__WEBPACK_IMPORTED_MODULE_3__[
                                        "getConfigEntries"
                                      ]
                                    )(this.hass),
                                  ]);

                                case 2:
                                  _ref = _context.sent;
                                  _ref2 = _slicedToArray(_ref, 2);
                                  discovered = _ref2[0];
                                  entries = _ref2[1];
                                  this._discovered = discovered; // We filter out the config entry for the local weather.
                                  // It is one that we create automatically and it will confuse the user
                                  // if it starts showing up during onboarding.

                                  this._entries = entries.filter(function(
                                    entry
                                  ) {
                                    return entry.domain !== "met";
                                  });

                                case 8:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this
                        );
                      })
                    );

                    function _loadData() {
                      return _loadData2.apply(this, arguments);
                    }

                    return _loadData;
                  })(),
                },
                {
                  kind: "method",
                  key: "_finish",
                  value: (function() {
                    var _finish2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2() {
                        var result;
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  _context2.next = 2;
                                  return Object(
                                    _data_onboarding__WEBPACK_IMPORTED_MODULE_8__[
                                      "onboardIntegrationStep"
                                    ]
                                  )(this.hass, {
                                    client_id: Object(
                                      home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_9__[
                                        "genClientId"
                                      ]
                                    )(),
                                  });

                                case 2:
                                  result = _context2.sent;
                                  Object(
                                    _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__[
                                      "fireEvent"
                                    ]
                                  )(this, "onboarding-step", {
                                    type: "integration",
                                    result: result,
                                  });

                                case 4:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          },
                          _callee2,
                          this
                        );
                      })
                    );

                    function _finish() {
                      return _finish2.apply(this, arguments);
                    }

                    return _finish;
                  })(),
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject5());
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1pbnRlZ3JhdGlvbnMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbmZpZ19lbnRyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLWNvbmZpZy1mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9vbmJvYXJkaW5nL2ludGVncmF0aW9uLWJhZGdlLnRzIiwid2VicGFjazovLy8uL3NyYy9vbmJvYXJkaW5nL29uYm9hcmRpbmctaW50ZWdyYXRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuXG5pbXBvcnQge0lyb25NZXRhfSBmcm9tICdAcG9seW1lci9pcm9uLW1ldGEvaXJvbi1tZXRhLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7QmFzZX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbi8qKlxuXG5UaGUgYGlyb24taWNvbmAgZWxlbWVudCBkaXNwbGF5cyBhbiBpY29uLiBCeSBkZWZhdWx0IGFuIGljb24gcmVuZGVycyBhcyBhIDI0cHhcbnNxdWFyZS5cblxuRXhhbXBsZSB1c2luZyBzcmM6XG5cbiAgICA8aXJvbi1pY29uIHNyYz1cInN0YXIucG5nXCI+PC9pcm9uLWljb24+XG5cbkV4YW1wbGUgc2V0dGluZyBzaXplIHRvIDMycHggeCAzMnB4OlxuXG4gICAgPGlyb24taWNvbiBjbGFzcz1cImJpZ1wiIHNyYz1cImJpZ19zdGFyLnBuZ1wiPjwvaXJvbi1pY29uPlxuXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCI+XG4gICAgICAuYmlnIHtcbiAgICAgICAgLS1pcm9uLWljb24taGVpZ2h0OiAzMnB4O1xuICAgICAgICAtLWlyb24taWNvbi13aWR0aDogMzJweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG5UaGUgaXJvbiBlbGVtZW50cyBpbmNsdWRlIHNldmVyYWwgc2V0cyBvZiBpY29ucy4gVG8gdXNlIHRoZSBkZWZhdWx0IHNldCBvZlxuaWNvbnMsIGltcG9ydCBgaXJvbi1pY29ucy5qc2AgYW5kIHVzZSB0aGUgYGljb25gIGF0dHJpYnV0ZSB0byBzcGVjaWZ5IGFuIGljb246XG5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj5cbiAgICAgIGltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbnMvaXJvbi1pY29ucy5qc1wiO1xuICAgIDwvc2NyaXB0PlxuXG4gICAgPGlyb24taWNvbiBpY29uPVwibWVudVwiPjwvaXJvbi1pY29uPlxuXG5UbyB1c2UgYSBkaWZmZXJlbnQgYnVpbHQtaW4gc2V0IG9mIGljb25zLCBpbXBvcnQgdGhlIHNwZWNpZmljXG5gaXJvbi1pY29ucy88aWNvbnNldD4taWNvbnMuanNgLCBhbmQgc3BlY2lmeSB0aGUgaWNvbiBhcyBgPGljb25zZXQ+OjxpY29uPmAuXG5Gb3IgZXhhbXBsZSwgdG8gdXNlIGEgY29tbXVuaWNhdGlvbiBpY29uLCB5b3Ugd291bGQgdXNlOlxuXG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XG4gICAgICBpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb25zL2NvbW11bmljYXRpb24taWNvbnMuanNcIjtcbiAgICA8L3NjcmlwdD5cblxuICAgIDxpcm9uLWljb24gaWNvbj1cImNvbW11bmljYXRpb246ZW1haWxcIj48L2lyb24taWNvbj5cblxuWW91IGNhbiBhbHNvIGNyZWF0ZSBjdXN0b20gaWNvbiBzZXRzIG9mIGJpdG1hcCBvciBTVkcgaWNvbnMuXG5cbkV4YW1wbGUgb2YgdXNpbmcgYW4gaWNvbiBuYW1lZCBgY2hlcnJ5YCBmcm9tIGEgY3VzdG9tIGljb25zZXQgd2l0aCB0aGUgSURcbmBmcnVpdGA6XG5cbiAgICA8aXJvbi1pY29uIGljb249XCJmcnVpdDpjaGVycnlcIj48L2lyb24taWNvbj5cblxuU2VlIGA8aXJvbi1pY29uc2V0PmAgYW5kIGA8aXJvbi1pY29uc2V0LXN2Zz5gIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0b1xuY3JlYXRlIGEgY3VzdG9tIGljb25zZXQuXG5cblNlZSB0aGUgYGlyb24taWNvbnNgIGRlbW8gdG8gc2VlIHRoZSBpY29ucyBhdmFpbGFibGUgaW4gdGhlIHZhcmlvdXMgaWNvbnNldHMuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0taXJvbi1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gfCB7fVxuYC0taXJvbi1pY29uLXdpZHRoYCB8IFdpZHRoIG9mIHRoZSBpY29uIHwgYDI0cHhgXG5gLS1pcm9uLWljb24taGVpZ2h0YCB8IEhlaWdodCBvZiB0aGUgaWNvbiB8IGAyNHB4YFxuYC0taXJvbi1pY29uLWZpbGwtY29sb3JgIHwgRmlsbCBjb2xvciBvZiB0aGUgc3ZnIGljb24gfCBgY3VycmVudGNvbG9yYFxuYC0taXJvbi1pY29uLXN0cm9rZS1jb2xvcmAgfCBTdHJva2UgY29sb3Igb2YgdGhlIHN2ZyBpY29uIHwgbm9uZVxuXG5AZ3JvdXAgSXJvbiBFbGVtZW50c1xuQGVsZW1lbnQgaXJvbi1pY29uXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG5AaG9tZXBhZ2UgcG9seW1lci5naXRodWIuaW9cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWlubGluZTtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgIGZpbGw6IHZhcigtLWlyb24taWNvbi1maWxsLWNvbG9yLCBjdXJyZW50Y29sb3IpO1xuICAgICAgICBzdHJva2U6IHZhcigtLWlyb24taWNvbi1zdHJva2UtY29sb3IsIG5vbmUpO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1pcm9uLWljb24td2lkdGgsIDI0cHgpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWlyb24taWNvbi1oZWlnaHQsIDI0cHgpO1xuICAgICAgICBAYXBwbHkgLS1pcm9uLWljb247XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbmAsXG5cbiAgaXM6ICdpcm9uLWljb24nLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBpY29uIHRvIHVzZS4gVGhlIG5hbWUgc2hvdWxkIGJlIG9mIHRoZSBmb3JtOlxuICAgICAqIGBpY29uc2V0X25hbWU6aWNvbl9uYW1lYC5cbiAgICAgKi9cbiAgICBpY29uOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0aGVtZSB0byB1c2VkLCBpZiBvbmUgaXMgc3BlY2lmaWVkIGJ5IHRoZVxuICAgICAqIGljb25zZXQuXG4gICAgICovXG4gICAgdGhlbWU6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdXNpbmcgaXJvbi1pY29uIHdpdGhvdXQgYW4gaWNvbnNldCwgeW91IGNhbiBzZXQgdGhlIHNyYyB0byBiZVxuICAgICAqIHRoZSBVUkwgb2YgYW4gaW5kaXZpZHVhbCBpY29uIGltYWdlIGZpbGUuIE5vdGUgdGhhdCB0aGlzIHdpbGwgdGFrZVxuICAgICAqIHByZWNlZGVuY2Ugb3ZlciBhIGdpdmVuIGljb24gYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHNyYzoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7IUlyb25NZXRhfVxuICAgICAqL1xuICAgIF9tZXRhOiB7dmFsdWU6IEJhc2UuY3JlYXRlKCdpcm9uLW1ldGEnLCB7dHlwZTogJ2ljb25zZXQnfSl9XG5cbiAgfSxcblxuICBvYnNlcnZlcnM6IFtcbiAgICAnX3VwZGF0ZUljb24oX21ldGEsIGlzQXR0YWNoZWQpJyxcbiAgICAnX3VwZGF0ZUljb24odGhlbWUsIGlzQXR0YWNoZWQpJyxcbiAgICAnX3NyY0NoYW5nZWQoc3JjLCBpc0F0dGFjaGVkKScsXG4gICAgJ19pY29uQ2hhbmdlZChpY29uLCBpc0F0dGFjaGVkKSdcbiAgXSxcblxuICBfREVGQVVMVF9JQ09OU0VUOiAnaWNvbnMnLFxuXG4gIF9pY29uQ2hhbmdlZDogZnVuY3Rpb24oaWNvbikge1xuICAgIHZhciBwYXJ0cyA9IChpY29uIHx8ICcnKS5zcGxpdCgnOicpO1xuICAgIHRoaXMuX2ljb25OYW1lID0gcGFydHMucG9wKCk7XG4gICAgdGhpcy5faWNvbnNldE5hbWUgPSBwYXJ0cy5wb3AoKSB8fCB0aGlzLl9ERUZBVUxUX0lDT05TRVQ7XG4gICAgdGhpcy5fdXBkYXRlSWNvbigpO1xuICB9LFxuXG4gIF9zcmNDaGFuZ2VkOiBmdW5jdGlvbihzcmMpIHtcbiAgICB0aGlzLl91cGRhdGVJY29uKCk7XG4gIH0sXG5cbiAgX3VzZXNJY29uc2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pY29uIHx8ICF0aGlzLnNyYztcbiAgfSxcblxuICAvKiogQHN1cHByZXNzIHt2aXNpYmlsaXR5fSAqL1xuICBfdXBkYXRlSWNvbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3VzZXNJY29uc2V0KCkpIHtcbiAgICAgIGlmICh0aGlzLl9pbWcgJiYgdGhpcy5faW1nLnBhcmVudE5vZGUpIHtcbiAgICAgICAgZG9tKHRoaXMucm9vdCkucmVtb3ZlQ2hpbGQodGhpcy5faW1nKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pY29uTmFtZSA9PT0gJycpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ljb25zZXQpIHtcbiAgICAgICAgICB0aGlzLl9pY29uc2V0LnJlbW92ZUljb24odGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5faWNvbnNldE5hbWUgJiYgdGhpcy5fbWV0YSkge1xuICAgICAgICB0aGlzLl9pY29uc2V0ID0gLyoqIEB0eXBlIHs/UG9seW1lci5JY29uc2V0fSAqLyAoXG4gICAgICAgICAgICB0aGlzLl9tZXRhLmJ5S2V5KHRoaXMuX2ljb25zZXROYW1lKSk7XG4gICAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgICAgdGhpcy5faWNvbnNldC5hcHBseUljb24odGhpcywgdGhpcy5faWNvbk5hbWUsIHRoaXMudGhlbWUpO1xuICAgICAgICAgIHRoaXMudW5saXN0ZW4od2luZG93LCAnaXJvbi1pY29uc2V0LWFkZGVkJywgJ191cGRhdGVJY29uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5saXN0ZW4od2luZG93LCAnaXJvbi1pY29uc2V0LWFkZGVkJywgJ191cGRhdGVJY29uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2ljb25zZXQpIHtcbiAgICAgICAgdGhpcy5faWNvbnNldC5yZW1vdmVJY29uKHRoaXMpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pbWcpIHtcbiAgICAgICAgdGhpcy5faW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHRoaXMuX2ltZy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgdGhpcy5faW1nLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgdGhpcy5faW1nLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5faW1nLnNyYyA9IHRoaXMuc3JjO1xuICAgICAgZG9tKHRoaXMucm9vdCkuYXBwZW5kQ2hpbGQodGhpcy5faW1nKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT5cbiAgY29tcGFyZShhLnRvTG93ZXJDYXNlKCksIGIudG9Mb3dlckNhc2UoKSk7XG4iLCIvLyBGcm9tOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWRlYm91bmNlLWZ1bmN0aW9uXG5cbi8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3Rcbi8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3Jcbi8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYmFuLXR5cGVzXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSA8VCBleHRlbmRzIEZ1bmN0aW9uPihcbiAgZnVuYzogVCxcbiAgd2FpdCxcbiAgaW1tZWRpYXRlID0gZmFsc2Vcbik6IFQgPT4ge1xuICBsZXQgdGltZW91dDtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLXRoaXMtYXNzaWdubWVudFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gIH07XG59O1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUVudHJ5Rmxvd1Byb2dyZXNzZWRFdmVudCB7XG4gIHR5cGU6IFwiZGF0YV9lbnRyeV9mbG93X3Byb2dyZXNzZWRcIjtcbiAgZGF0YToge1xuICAgIGhhbmRsZXI6IHN0cmluZztcbiAgICBmbG93X2lkOiBzdHJpbmc7XG4gICAgcmVmcmVzaDogYm9vbGVhbjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdFbnRyeSB7XG4gIGVudHJ5X2lkOiBzdHJpbmc7XG4gIGRvbWFpbjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzb3VyY2U6IHN0cmluZztcbiAgc3RhdGU6IHN0cmluZztcbiAgY29ubmVjdGlvbl9jbGFzczogc3RyaW5nO1xuICBzdXBwb3J0c19vcHRpb25zOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkU2NoZW1hIHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZWZhdWx0PzogYW55O1xuICBvcHRpb25hbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdGbG93UHJvZ3Jlc3Mge1xuICBmbG93X2lkOiBzdHJpbmc7XG4gIGhhbmRsZXI6IHN0cmluZztcbiAgY29udGV4dDoge1xuICAgIHRpdGxlX3BsYWNlaG9sZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRmxvd1N0ZXBGb3JtIHtcbiAgdHlwZTogXCJmb3JtXCI7XG4gIGZsb3dfaWQ6IHN0cmluZztcbiAgaGFuZGxlcjogc3RyaW5nO1xuICBzdGVwX2lkOiBzdHJpbmc7XG4gIGRhdGFfc2NoZW1hOiBGaWVsZFNjaGVtYVtdO1xuICBlcnJvcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdGbG93U3RlcEV4dGVybmFsIHtcbiAgdHlwZTogXCJleHRlcm5hbFwiO1xuICBmbG93X2lkOiBzdHJpbmc7XG4gIGhhbmRsZXI6IHN0cmluZztcbiAgc3RlcF9pZDogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgZGVzY3JpcHRpb25fcGxhY2Vob2xkZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0Zsb3dTdGVwQ3JlYXRlRW50cnkge1xuICB0eXBlOiBcImNyZWF0ZV9lbnRyeVwiO1xuICB2ZXJzaW9uOiBudW1iZXI7XG4gIGZsb3dfaWQ6IHN0cmluZztcbiAgaGFuZGxlcjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICAvLyBDb25maWcgZW50cnkgSURcbiAgcmVzdWx0OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdGbG93U3RlcEFib3J0IHtcbiAgdHlwZTogXCJhYm9ydFwiO1xuICBmbG93X2lkOiBzdHJpbmc7XG4gIGhhbmRsZXI6IHN0cmluZztcbiAgcmVhc29uOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IHR5cGUgQ29uZmlnRmxvd1N0ZXAgPVxuICB8IENvbmZpZ0Zsb3dTdGVwRm9ybVxuICB8IENvbmZpZ0Zsb3dTdGVwRXh0ZXJuYWxcbiAgfCBDb25maWdGbG93U3RlcENyZWF0ZUVudHJ5XG4gIHwgQ29uZmlnRmxvd1N0ZXBBYm9ydDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbmZpZ0Zsb3cgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaGFuZGxlcjogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGk8Q29uZmlnRmxvd1N0ZXA+KFwiUE9TVFwiLCBcImNvbmZpZy9jb25maWdfZW50cmllcy9mbG93XCIsIHtcbiAgICBoYW5kbGVyLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29uZmlnRmxvdyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBmbG93SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPENvbmZpZ0Zsb3dTdGVwPihcIkdFVFwiLCBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3cvJHtmbG93SWR9YCk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDb25maWdGbG93U3RlcCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZmxvd0lkOiBzdHJpbmcsXG4gIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH1cbikgPT5cbiAgaGFzcy5jYWxsQXBpPENvbmZpZ0Zsb3dTdGVwPihcbiAgICBcIlBPU1RcIixcbiAgICBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3cvJHtmbG93SWR9YCxcbiAgICBkYXRhXG4gICk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maWdGbG93ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGZsb3dJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGkoXCJERUxFVEVcIiwgYGNvbmZpZy9jb25maWdfZW50cmllcy9mbG93LyR7Zmxvd0lkfWApO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnRmxvd3NJblByb2dyZXNzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbEFwaTxDb25maWdGbG93UHJvZ3Jlc3NbXT4oXCJHRVRcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZmxvd1wiKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0Zsb3dIYW5kbGVycyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGk8c3RyaW5nW10+KFwiR0VUXCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3dfaGFuZGxlcnNcIik7XG5cbmNvbnN0IGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzc1VwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGRlYm91bmNlKFxuICAgIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hDb25maWdGbG93SW5Qcm9ncmVzcyhjb25uKS50aGVuKChmbG93cykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShmbG93cywgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiY29uZmlnX2VudHJ5X2Rpc2NvdmVyZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3MgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIG9uQ2hhbmdlOiAoZmxvd3M6IENvbmZpZ0Zsb3dQcm9ncmVzc1tdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248Q29uZmlnRmxvd1Byb2dyZXNzW10+KFxuICAgIFwiX2NvbmZpZ0Zsb3dQcm9ncmVzc1wiLFxuICAgIGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MsXG4gICAgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3NVcGRhdGVzLFxuICAgIGhhc3MuY29ubmVjdGlvbixcbiAgICBvbkNoYW5nZVxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnRW50cmllcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGk8Q29uZmlnRW50cnlbXT4oXCJHRVRcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZW50cnlcIik7XG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZUNvbmZpZ0Zsb3dUaXRsZSA9IChcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgZmxvdzogQ29uZmlnRmxvd1Byb2dyZXNzXG4pID0+IHtcbiAgY29uc3QgcGxhY2Vob2xkZXJzID0gZmxvdy5jb250ZXh0LnRpdGxlX3BsYWNlaG9sZGVycyB8fCB7fTtcbiAgY29uc3QgcGxhY2Vob2xkZXJLZXlzID0gT2JqZWN0LmtleXMocGxhY2Vob2xkZXJzKTtcbiAgaWYgKHBsYWNlaG9sZGVyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbG9jYWxpemUoYGNvbXBvbmVudC4ke2Zsb3cuaGFuZGxlcn0uY29uZmlnLnRpdGxlYCk7XG4gIH1cbiAgY29uc3QgYXJnczogc3RyaW5nW10gPSBbXTtcbiAgcGxhY2Vob2xkZXJLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGFyZ3MucHVzaChrZXkpO1xuICAgIGFyZ3MucHVzaChwbGFjZWhvbGRlcnNba2V5XSk7XG4gIH0pO1xuICByZXR1cm4gbG9jYWxpemUoYGNvbXBvbmVudC4ke2Zsb3cuaGFuZGxlcn0uY29uZmlnLmZsb3dfdGl0bGVgLCAuLi5hcmdzKTtcbn07XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFDb25maWdGbG93UGFyYW1zIHtcbiAgY29udGludWVGbG93SWQ/OiBzdHJpbmc7XG4gIGRpYWxvZ0Nsb3NlZENhbGxiYWNrOiAocGFyYW1zOiB7IGZsb3dGaW5pc2hlZDogYm9vbGVhbiB9KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZENvbmZpZ0Zsb3dEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJkaWFsb2ctY29uZmlnLWZsb3dcIiAqLyBcIi4vZGlhbG9nLWNvbmZpZy1mbG93XCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpZ0Zsb3dEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IEhhQ29uZmlnRmxvd1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWNvbmZpZy1mbG93XCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkQ29uZmlnRmxvd0RpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaW50ZWdyYXRpb24tYmFkZ2VcIilcbmNsYXNzIEludGVncmF0aW9uQmFkZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGljb24hOiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB0aXRsZSE6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGJhZGdlSWNvbj86IHN0cmluZztcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBwdWJsaWMgY2xpY2thYmxlID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgPGlyb24taWNvbiAuaWNvbj0ke3RoaXMuaWNvbn0+PC9pcm9uLWljb24+XG4gICAgICAgICR7dGhpcy5iYWRnZUljb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1pY29uIGNsYXNzPVwiYmFkZ2VcIiAuaWNvbj0ke3RoaXMuYmFkZ2VJY29ufT48L2hhLWljb24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3RoaXMudGl0bGV9PC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtjbGlja2FibGVdKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gOHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtjbGlja2FibGVdKSAuaWNvbiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgICAgfVxuXG4gICAgICAuYmFkZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIuM2VtO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImludGVncmF0aW9uLWJhZGdlXCI6IEludGVncmF0aW9uQmFkZ2U7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uL213Yy1idXR0b25cIjtcbmltcG9ydCB7XG4gIGxvYWRDb25maWdGbG93RGlhbG9nLFxuICBzaG93Q29uZmlnRmxvd0RpYWxvZyxcbn0gZnJvbSBcIi4uL2RpYWxvZ3MvY29uZmlnLWZsb3cvc2hvdy1kaWFsb2ctY29uZmlnLWZsb3dcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIGdldENvbmZpZ0Zsb3dzSW5Qcm9ncmVzcyxcbiAgZ2V0Q29uZmlnRW50cmllcyxcbiAgQ29uZmlnRW50cnksXG4gIENvbmZpZ0Zsb3dQcm9ncmVzcyxcbiAgbG9jYWxpemVDb25maWdGbG93VGl0bGUsXG59IGZyb20gXCIuLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IFwiLi9pbnRlZ3JhdGlvbi1iYWRnZVwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBvbmJvYXJkSW50ZWdyYXRpb25TdGVwIH0gZnJvbSBcIi4uL2RhdGEvb25ib2FyZGluZ1wiO1xuaW1wb3J0IHsgZ2VuQ2xpZW50SWQgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbkBjdXN0b21FbGVtZW50KFwib25ib2FyZGluZy1pbnRlZ3JhdGlvbnNcIilcbmNsYXNzIE9uYm9hcmRpbmdJbnRlZ3JhdGlvbnMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb25ib2FyZGluZ0xvY2FsaXplITogTG9jYWxpemVGdW5jO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbnRyaWVzPzogQ29uZmlnRW50cnlbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGlzY292ZXJlZD86IENvbmZpZ0Zsb3dQcm9ncmVzc1tdO1xuICBwcml2YXRlIF91bnN1YkV2ZW50cz86ICgpID0+IHZvaWQ7XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5oYXNzLmNvbm5lY3Rpb25cbiAgICAgIC5zdWJzY3JpYmVFdmVudHMoXG4gICAgICAgIGRlYm91bmNlKCgpID0+IHRoaXMuX2xvYWREYXRhKCksIDUwMCksXG4gICAgICAgIFwiY29uZmlnX2VudHJ5X2Rpc2NvdmVyZWRcIlxuICAgICAgKVxuICAgICAgLnRoZW4oKHVuc3ViKSA9PiB7XG4gICAgICAgIHRoaXMuX3Vuc3ViRXZlbnRzID0gdW5zdWI7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl91bnN1YkV2ZW50cykge1xuICAgICAgdGhpcy5fdW5zdWJFdmVudHMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9lbnRyaWVzIHx8ICF0aGlzLl9kaXNjb3ZlcmVkKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICAvLyBSZW5kZXIgZGlzY292ZXJlZCBhbmQgZXhpc3RpbmcgZW50cmllcyB0b2dldGhlciBzb3J0ZWQgYnkgbG9jYWxpemVkIHRpdGxlLlxuICAgIGNvbnN0IGVudHJpZXM6IEFycmF5PFtzdHJpbmcsIFRlbXBsYXRlUmVzdWx0XT4gPSB0aGlzLl9lbnRyaWVzLm1hcChcbiAgICAgIChlbnRyeSkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBgY29tcG9uZW50LiR7ZW50cnkuZG9tYWlufS5jb25maWcudGl0bGVgXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgIDxpbnRlZ3JhdGlvbi1iYWRnZVxuICAgICAgICAgICAgICAudGl0bGU9JHt0aXRsZX1cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2hlY2tcIlxuICAgICAgICAgICAgPjwvaW50ZWdyYXRpb24tYmFkZ2U+XG4gICAgICAgICAgYCxcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGRpc2NvdmVyZWQ6IEFycmF5PFtzdHJpbmcsIFRlbXBsYXRlUmVzdWx0XT4gPSB0aGlzLl9kaXNjb3ZlcmVkLm1hcChcbiAgICAgIChmbG93KSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gbG9jYWxpemVDb25maWdGbG93VGl0bGUodGhpcy5oYXNzLmxvY2FsaXplLCBmbG93KTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgPGJ1dHRvbiAuZmxvd0lkPSR7Zmxvdy5mbG93X2lkfSBAY2xpY2s9JHt0aGlzLl9jb250aW51ZUZsb3d9PlxuICAgICAgICAgICAgICA8aW50ZWdyYXRpb24tYmFkZ2VcbiAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAudGl0bGU9JHt0aXRsZX1cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbHVzXCJcbiAgICAgICAgICAgICAgPjwvaW50ZWdyYXRpb24tYmFkZ2U+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBgLFxuICAgICAgICBdO1xuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgY29udGVudCA9IFsuLi5lbnRyaWVzLCAuLi5kaXNjb3ZlcmVkXVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoYVswXSwgYlswXSkpXG4gICAgICAubWFwKChpdGVtKSA9PiBpdGVtWzFdKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHA+XG4gICAgICAgICR7dGhpcy5vbmJvYXJkaW5nTG9jYWxpemUoXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuaW50ZWdyYXRpb24uaW50cm9cIil9XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFkZ2VzXCI+XG4gICAgICAgICR7Y29udGVudH1cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9jcmVhdGVGbG93fT5cbiAgICAgICAgICA8aW50ZWdyYXRpb24tYmFkZ2VcbiAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgdGl0bGU9JHt0aGlzLm9uYm9hcmRpbmdMb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuaW50ZWdyYXRpb24ubW9yZV9pbnRlZ3JhdGlvbnNcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGljb249XCJoYXNzOmRvdHMtaG9yaXpvbnRhbFwiXG4gICAgICAgICAgPjwvaW50ZWdyYXRpb24tYmFkZ2U+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2ZpbmlzaH0+XG4gICAgICAgICAgJHt0aGlzLm9uYm9hcmRpbmdMb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwucGFnZS1vbmJvYXJkaW5nLmludGVncmF0aW9uLmZpbmlzaFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGxvYWRDb25maWdGbG93RGlhbG9nKCk7XG4gICAgdGhpcy5fbG9hZERhdGEoKTtcbiAgICAvKiBwb2x5ZmlsbCBmb3IgcGFwZXItZHJvcGRvd24gKi9cbiAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwb2x5ZmlsbC13ZWItYW5pbWF0aW9ucy1uZXh0XCIgKi8gXCJ3ZWItYW5pbWF0aW9ucy1qcy93ZWItYW5pbWF0aW9ucy1uZXh0LWxpdGUubWluXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRmxvdygpIHtcbiAgICBzaG93Q29uZmlnRmxvd0RpYWxvZyh0aGlzLCB7XG4gICAgICBkaWFsb2dDbG9zZWRDYWxsYmFjazogKCkgPT4gdGhpcy5fbG9hZERhdGEoKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnRpbnVlRmxvdyhldikge1xuICAgIHNob3dDb25maWdGbG93RGlhbG9nKHRoaXMsIHtcbiAgICAgIGNvbnRpbnVlRmxvd0lkOiBldi5jdXJyZW50VGFyZ2V0LmZsb3dJZCxcbiAgICAgIGRpYWxvZ0Nsb3NlZENhbGxiYWNrOiAoKSA9PiB0aGlzLl9sb2FkRGF0YSgpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfbG9hZERhdGEoKSB7XG4gICAgY29uc3QgW2Rpc2NvdmVyZWQsIGVudHJpZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0Q29uZmlnRmxvd3NJblByb2dyZXNzKHRoaXMuaGFzcyEpLFxuICAgICAgZ2V0Q29uZmlnRW50cmllcyh0aGlzLmhhc3MhKSxcbiAgICBdKTtcbiAgICB0aGlzLl9kaXNjb3ZlcmVkID0gZGlzY292ZXJlZDtcbiAgICAvLyBXZSBmaWx0ZXIgb3V0IHRoZSBjb25maWcgZW50cnkgZm9yIHRoZSBsb2NhbCB3ZWF0aGVyLlxuICAgIC8vIEl0IGlzIG9uZSB0aGF0IHdlIGNyZWF0ZSBhdXRvbWF0aWNhbGx5IGFuZCBpdCB3aWxsIGNvbmZ1c2UgdGhlIHVzZXJcbiAgICAvLyBpZiBpdCBzdGFydHMgc2hvd2luZyB1cCBkdXJpbmcgb25ib2FyZGluZy5cbiAgICB0aGlzLl9lbnRyaWVzID0gZW50cmllcy5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5kb21haW4gIT09IFwibWV0XCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmluaXNoKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9uYm9hcmRJbnRlZ3JhdGlvblN0ZXAodGhpcy5oYXNzLCB7XG4gICAgICBjbGllbnRfaWQ6IGdlbkNsaWVudElkKCksXG4gICAgfSk7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwib25ib2FyZGluZy1zdGVwXCIsIHtcbiAgICAgIHR5cGU6IFwiaW50ZWdyYXRpb25cIixcbiAgICAgIHJlc3VsdCxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5iYWRnZXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgfVxuICAgICAgLmJhZGdlcyA+ICoge1xuICAgICAgICB3aWR0aDogMjQlO1xuICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAwO1xuICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgfVxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9uYm9hcmRpbmctaW50ZWdyYXRpb25zXCI6IE9uYm9hcmRpbmdJbnRlZ3JhdGlvbnM7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQTtBQUNBO0FBdUJBO0FBRUE7QUFFQTs7OztBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkE7QUE0QkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQS9HQTs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUtBQUE7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQURBO0FBQUE7QUF1QkE7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBa0ZBO0FBQUE7QUFFQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQURBO0FBREE7QUFDQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFEQTtBQUhBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7QUFZQTtBQUFBO0FBQUE7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQSxzK0NBQ0E7QUFEQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQVNBO0FBQ0E7QUFFQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7OztBQUFBOzs7OztBQUVBO0FBQ0E7QUFXQTs7Ozs7QUFFQTtBQUNBO0FBNkNBOzs7QUFsRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBVUE7QUFDQTtBQUtBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQXdCQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBcUJBOzs7QUEvSkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
