(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [16],
  {
    /***/ "./src/common/entity/compute_object_id.ts":
      /*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return computeObjectId;
          }
        );
        /** Compute the object ID of a state. */
        function computeObjectId(entityId) {
          return entityId.substr(entityId.indexOf(".") + 1);
        }

        /***/
      },

    /***/ "./src/common/entity/compute_state_name.ts":
      /*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          stateObj
        ) {
          return stateObj.attributes.friendly_name === undefined
            ? Object(
                _compute_object_id__WEBPACK_IMPORTED_MODULE_0__["default"]
              )(stateObj.entity_id).replace(/_/g, " ")
            : stateObj.attributes.friendly_name || "";
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

    /***/ "./src/data/entity.ts":
      /*!****************************!*\
  !*** ./src/data/entity.ts ***!
  \****************************/
      /*! exports provided: UNAVAILABLE, ENTITY_COMPONENT_DOMAINS */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "UNAVAILABLE",
          function() {
            return UNAVAILABLE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ENTITY_COMPONENT_DOMAINS",
          function() {
            return ENTITY_COMPONENT_DOMAINS;
          }
        );
        var UNAVAILABLE = "unavailable";
        var ENTITY_COMPONENT_DOMAINS = [
          "air_quality",
          "alarm_control_panel",
          "automation",
          "binary_sensor",
          "calendar",
          "counter",
          "cover",
          "dominos",
          "fan",
          "geo_location",
          "group",
          "history_graph",
          "image_processing",
          "input_boolean",
          "input_datetime",
          "input_number",
          "input_select",
          "input_text",
          "light",
          "lock",
          "mailbox",
          "media_player",
          "person",
          "plant",
          "remember_the_milk",
          "remote",
          "scene",
          "script",
          "sensor",
          "switch",
          "timer",
          "utility_meter",
          "vacuum",
          "weather",
          "wink",
          "zha",
          "zwave",
        ];

        /***/
      },

    /***/ "./src/mixins/events-mixin.js":
      /*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
      /*! exports provided: EventsMixin */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EventsMixin",
          function() {
            return EventsMixin;
          }
        );
        /* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
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

        // Polymer legacy event helpers used courtesy of the Polymer project.
        //
        // Copyright (c) 2017 The Polymer Authors. All rights reserved.
        //
        // Redistribution and use in source and binary forms, with or without
        // modification, are permitted provided that the following conditions are
        // met:
        //
        //    * Redistributions of source code must retain the above copyright
        // notice, this list of conditions and the following disclaimer.
        //    * Redistributions in binary form must reproduce the above
        // copyright notice, this list of conditions and the following disclaimer
        // in the documentation and/or other materials provided with the
        // distribution.
        //    * Neither the name of Google Inc. nor the names of its
        // contributors may be used to endorse or promote products derived from
        // this software without specific prior written permission.
        //
        // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
        // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
        // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
        // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
        // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
        // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
        // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
        // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
        // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
        // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
        // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

        /* @polymerMixin */

        var EventsMixin = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(function(superClass) {
          return (
            /*#__PURE__*/
            (function(_superClass) {
              _inherits(_class, _superClass);

              function _class() {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(_class).apply(this, arguments)
                );
              }

              _createClass(_class, [
                {
                  key: "fire",

                  /**
        * Dispatches a custom event with an optional detail value.
        *
        * @param {string} type Name of event type.
        * @param {*=} detail Detail value containing event-specific
        *   payload.
        * @param {{ bubbles: (boolean|undefined),
                 cancelable: (boolean|undefined),
                  composed: (boolean|undefined) }=}
        *  options Object specifying options.  These may include:
        *  `bubbles` (boolean, defaults to `true`),
        *  `cancelable` (boolean, defaults to false), and
        *  `node` on which to fire the event (HTMLElement, defaults to `this`).
        * @return {Event} The new event that was fired.
        */
                  value: function fire(type, detail, options) {
                    options = options || {};
                    return Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__[
                        "fireEvent"
                      ]
                    )(options.node || this, type, detail, options);
                  },
                },
              ]);

              return _class;
            })(superClass)
          );
        });

        /***/
      },

    /***/ "./src/mixins/localize-mixin.js":
      /*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"
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

        /**
         * Polymer Mixin to enable a localize function powered by language/resources from hass object.
         *
         * @polymerMixin
         */

        /* harmony default export */ __webpack_exports__["default"] = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(function(superClass) {
          return (
            /*#__PURE__*/
            (function(_superClass) {
              _inherits(_class, _superClass);

              function _class() {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(_class).apply(this, arguments)
                );
              }

              _createClass(
                _class,
                [
                  {
                    key: "__computeLocalize",
                    value: function __computeLocalize(localize) {
                      return localize;
                    },
                  },
                ],
                [
                  {
                    key: "properties",
                    get: function get() {
                      return {
                        hass: Object,

                        /**
                         * Translates a string to the current `language`. Any parameters to the
                         * string should be passed in order, as follows:
                         * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
                         */
                        localize: {
                          type: Function,
                          computed: "__computeLocalize(hass.localize)",
                        },
                      };
                    },
                  },
                ]
              );

              return _class;
            })(superClass)
          );
        });

        /***/
      },

    /***/ "./src/panels/developer-tools/service/developer-tools-service.js":
      /*!***********************************************************************!*\
  !*** ./src/panels/developer-tools/service/developer-tools-service.js ***!
  \***********************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../data/entity */ "./src/data/entity.ts"
        );
        /* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts"
        );
        /* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/ha-service-picker */ "./src/components/ha-service-picker.js"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _util_app_localstorage_document__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../util/app-localstorage-document */ "./src/util/app-localstorage-document.js"
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

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="ha-style">\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n          display: block;\n          padding: 16px;\n          direction: ltr;\n        }\n\n        .ha-form {\n          margin-right: 16px;\n          max-width: 400px;\n        }\n\n        .description {\n          margin-top: 24px;\n          white-space: pre-wrap;\n        }\n\n        .header {\n          @apply --paper-font-title;\n        }\n\n        .attributes th {\n          text-align: left;\n        }\n\n        .attributes tr {\n          vertical-align: top;\n        }\n\n        .attributes tr:nth-child(odd) {\n          background-color: var(--table-row-background-color, #eee);\n        }\n\n        .attributes tr:nth-child(even) {\n          background-color: var(--table-row-alternative-background-color, #eee);\n        }\n\n        .attributes td:nth-child(3) {\n          white-space: pre-wrap;\n          word-break: break-word;\n        }\n\n        pre {\n          margin: 0;\n        }\n\n        h1 {\n          white-space: normal;\n        }\n\n        td {\n          padding: 4px;\n        }\n\n        .error {\n          color: var(--google-red-500);\n        }\n      </style>\n\n      <app-localstorage-document\n        key="panel-dev-service-state-domain-service"\n        data="{{domainService}}"\n      >\n      </app-localstorage-document>\n      <app-localstorage-document\n        key="[[_computeServicedataKey(domainService)]]"\n        data="{{serviceData}}"\n      >\n      </app-localstorage-document>\n\n      <div class="content">\n        <p>\n          The service dev tool allows you to call any available service in Home\n          Assistant.\n        </p>\n\n        <div class="ha-form">\n          <ha-service-picker\n            hass="[[hass]]"\n            value="{{domainService}}"\n          ></ha-service-picker>\n          <template is="dom-if" if="[[_computeHasEntity(_attributes)]]">\n            <ha-entity-picker\n              hass="[[hass]]"\n              value="[[_computeEntityValue(parsedJSON)]]"\n              on-change="_entityPicked"\n              disabled="[[!validJSON]]"\n              domain-filter="[[_computeEntityDomainFilter(_domain)]]"\n              allow-custom-entity\n            ></ha-entity-picker>\n          </template>\n          <paper-textarea\n            always-float-label\n            label="Service Data (JSON, optional)"\n            value="{{serviceData}}"\n            autocapitalize="none"\n            autocomplete="off"\n            spellcheck="false"\n          ></paper-textarea>\n          <mwc-button on-click="_callService" raised disabled="[[!validJSON]]"\n            >Call Service</mwc-button\n          >\n          <template is="dom-if" if="[[!validJSON]]">\n            <span class="error">Invalid JSON</span>\n          </template>\n        </div>\n\n        <template is="dom-if" if="[[!domainService]]">\n          <h1>Select a service to see the description</h1>\n        </template>\n\n        <template is="dom-if" if="[[domainService]]">\n          <template is="dom-if" if="[[!_description]]">\n            <h1>No description is available</h1>\n          </template>\n          <template is="dom-if" if="[[_description]]">\n            <h3>[[_description]]</h3>\n\n            <table class="attributes">\n              <tr>\n                <th>Parameter</th>\n                <th>Description</th>\n                <th>Example</th>\n              </tr>\n              <template is="dom-if" if="[[!_attributes.length]]">\n                <tr>\n                  <td colspan="3">This service takes no parameters.</td>\n                </tr>\n              </template>\n              <template is="dom-repeat" items="[[_attributes]]" as="attribute">\n                <tr>\n                  <td><pre>[[attribute.key]]</pre></td>\n                  <td>[[attribute.description]]</td>\n                  <td>[[attribute.example]]</td>\n                </tr>\n              </template>\n            </table>\n          </template>\n        </template>\n      </div>\n    ',
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

        var ERROR_SENTINEL = {};

        var HaPanelDevService =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaPanelDevService, _PolymerElement);

            function HaPanelDevService() {
              _classCallCheck(this, HaPanelDevService);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPanelDevService).apply(this, arguments)
              );
            }

            _createClass(
              HaPanelDevService,
              [
                {
                  key: "_domainServiceChanged",
                  value: function _domainServiceChanged() {
                    this.serviceData = "";
                  },
                },
                {
                  key: "_computeAttributesArray",
                  value: function _computeAttributesArray(
                    hass,
                    domain,
                    service
                  ) {
                    var serviceDomains = hass.services;
                    if (!(domain in serviceDomains)) return [];
                    if (!(service in serviceDomains[domain])) return [];
                    var fields = serviceDomains[domain][service].fields;
                    return Object.keys(fields).map(function(field) {
                      return Object.assign(
                        {
                          key: field,
                        },
                        fields[field]
                      );
                    });
                  },
                },
                {
                  key: "_computeDescription",
                  value: function _computeDescription(hass, domain, service) {
                    var serviceDomains = hass.services;
                    if (!(domain in serviceDomains)) return undefined;
                    if (!(service in serviceDomains[domain])) return undefined;
                    return serviceDomains[domain][service].description;
                  },
                },
                {
                  key: "_computeServicedataKey",
                  value: function _computeServicedataKey(domainService) {
                    return "panel-dev-service-state-servicedata.".concat(
                      domainService
                    );
                  },
                },
                {
                  key: "_computeDomain",
                  value: function _computeDomain(domainService) {
                    return domainService.split(".", 1)[0];
                  },
                },
                {
                  key: "_computeService",
                  value: function _computeService(domainService) {
                    return domainService.split(".", 2)[1] || null;
                  },
                },
                {
                  key: "_computeParsedServiceData",
                  value: function _computeParsedServiceData(serviceData) {
                    try {
                      return serviceData ? JSON.parse(serviceData) : {};
                    } catch (err) {
                      return ERROR_SENTINEL;
                    }
                  },
                },
                {
                  key: "_computeValidJSON",
                  value: function _computeValidJSON(parsedJSON) {
                    return parsedJSON !== ERROR_SENTINEL;
                  },
                },
                {
                  key: "_computeHasEntity",
                  value: function _computeHasEntity(attributes) {
                    return attributes.some(function(attr) {
                      return attr.key === "entity_id";
                    });
                  },
                },
                {
                  key: "_computeEntityValue",
                  value: function _computeEntityValue(parsedJSON) {
                    return parsedJSON === ERROR_SENTINEL
                      ? ""
                      : parsedJSON.entity_id;
                  },
                },
                {
                  key: "_computeEntityDomainFilter",
                  value: function _computeEntityDomainFilter(domain) {
                    return _data_entity__WEBPACK_IMPORTED_MODULE_4__[
                      "ENTITY_COMPONENT_DOMAINS"
                    ].includes(domain)
                      ? domain
                      : null;
                  },
                },
                {
                  key: "_callService",
                  value: function _callService() {
                    if (this.parsedJSON === ERROR_SENTINEL) {
                      // eslint-disable-next-line
                      alert("Error parsing JSON: ".concat(this.serviceData));
                    }

                    this.hass.callService(
                      this._domain,
                      this._service,
                      this.parsedJSON
                    );
                  },
                },
                {
                  key: "_entityPicked",
                  value: function _entityPicked(ev) {
                    this.serviceData = JSON.stringify(
                      Object.assign({}, this.parsedJSON, {
                        entity_id: ev.target.value,
                      }),
                      null,
                      2
                    );
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: {
                        type: Object,
                      },
                      domainService: {
                        type: String,
                        observer: "_domainServiceChanged",
                      },
                      _domain: {
                        type: String,
                        computed: "_computeDomain(domainService)",
                      },
                      _service: {
                        type: String,
                        computed: "_computeService(domainService)",
                      },
                      serviceData: {
                        type: String,
                        value: "",
                      },
                      parsedJSON: {
                        type: Object,
                        computed: "_computeParsedServiceData(serviceData)",
                      },
                      validJSON: {
                        type: Boolean,
                        computed: "_computeValidJSON(parsedJSON)",
                      },
                      _attributes: {
                        type: Array,
                        computed:
                          "_computeAttributesArray(hass, _domain, _service)",
                      },
                      _description: {
                        type: String,
                        computed:
                          "_computeDescription(hass, _domain, _service)",
                      },
                    };
                  },
                },
              ]
            );

            return HaPanelDevService;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
              "PolymerElement"
            ]
          );

        customElements.define("developer-tools-service", HaPanelDevService);

        /***/
      },

    /***/ "./src/util/app-localstorage-document.js":
      /*!***********************************************!*\
  !*** ./src/util/app-localstorage-document.js ***!
  \***********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-storage/app-storage-behavior */ "./node_modules/@polymer/app-storage/app-storage-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* Forked because it contained an import.meta which webpack doesn't support. */

        /* eslint-disable */

        /**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

        /**
         * app-localstorage-document synchronizes storage between an in-memory
         * value and a location in the browser's localStorage system.
         *
         * localStorage is a simple and widely supported storage API that provides both
         * permanent and session-based storage options. Using app-localstorage-document
         * you can easily integrate localStorage into your app via normal Polymer
         * databinding.
         *
         * app-localstorage-document is the reference implementation of an element
         * that uses `AppStorageBehavior`. Reading its code is a good way to get
         * started writing your own storage element.
         *
         * Example use:
         *
         *     <paper-input value="{{search}}"></paper-input>
         *     <app-localstorage-document key="search" data="{{search}}">
         *     </app-localstorage-document>
         *
         * app-localstorage-document automatically synchronizes changes to the
         * same key across multiple tabs.
         *
         * Only supports storing JSON-serializable values.
         */

        Object(
          _polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__[
            "Polymer"
          ]
        )({
          is: "app-localstorage-document",
          behaviors: [
            _polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__[
              "AppStorageBehavior"
            ],
          ],
          properties: {
            /**
             * Defines the logical location to store the data.
             *
             * @type{String}
             */
            key: {
              type: String,
              notify: true,
            },

            /**
             * If true, the data will automatically be cleared from storage when
             * the page session ends (i.e. when the user has navigated away from
             * the page).
             */
            sessionOnly: {
              type: Boolean,
              value: false,
            },

            /**
             * Either `window.localStorage` or `window.sessionStorage`, depending on
             * `this.sessionOnly`.
             */
            storage: {
              type: Object,
              computed: "__computeStorage(sessionOnly)",
            },
          },
          observers: ["__storageSourceChanged(storage, key)"],
          attached: function attached() {
            this.listen(window, "storage", "__onStorage");
            this.listen(
              window.top,
              "app-local-storage-changed",
              "__onAppLocalStorageChanged"
            );
          },
          detached: function detached() {
            this.unlisten(window, "storage", "__onStorage");
            this.unlisten(
              window.top,
              "app-local-storage-changed",
              "__onAppLocalStorageChanged"
            );
          },

          get isNew() {
            return !this.key;
          },

          /**
           * Stores a value at the given key, and if successful, updates this.key.
           *
           * @param {*} key The new key to use.
           * @return {Promise}
           */
          saveValue: function saveValue(key) {
            try {
              this.__setStorageValue(
                /*{@type if (key ty){String}}*/
                key,
                this.data
              );
            } catch (e) {
              return Promise.reject(e);
            }

            this.key =
              /** @type {String} */
              key;
            return Promise.resolve();
          },
          reset: function reset() {
            this.key = null;
            this.data = this.zeroValue;
          },
          destroy: function destroy() {
            try {
              this.storage.removeItem(this.key);
              this.reset();
            } catch (e) {
              return Promise.reject(e);
            }

            return Promise.resolve();
          },
          getStoredValue: function getStoredValue(path) {
            var value;

            if (this.key != null) {
              try {
                value = this.__parseValueFromStorage();

                if (value != null) {
                  value = this.get(path, {
                    data: value,
                  });
                } else {
                  value = undefined;
                }
              } catch (e) {
                return Promise.reject(e);
              }
            }

            return Promise.resolve(value);
          },
          setStoredValue: function setStoredValue(path, value) {
            if (this.key != null) {
              try {
                this.__setStorageValue(this.key, this.data);
              } catch (e) {
                return Promise.reject(e);
              }

              this.fire("app-local-storage-changed", this, {
                node: window.top,
              });
            }

            return Promise.resolve(value);
          },
          __computeStorage: function __computeStorage(sessionOnly) {
            return sessionOnly ? window.sessionStorage : window.localStorage;
          },
          __storageSourceChanged: function __storageSourceChanged(
            storage,
            key
          ) {
            this._initializeStoredValue();
          },
          __onStorage: function __onStorage(event) {
            if (event.key !== this.key || event.storageArea !== this.storage) {
              return;
            }

            this.syncToMemory(function() {
              this.set("data", this.__parseValueFromStorage());
            });
          },
          __onAppLocalStorageChanged: function __onAppLocalStorageChanged(
            event
          ) {
            if (
              event.detail === this ||
              event.detail.key !== this.key ||
              event.detail.storage !== this.storage
            ) {
              return;
            }

            this.syncToMemory(function() {
              this.set("data", event.detail.data);
            });
          },
          __parseValueFromStorage: function __parseValueFromStorage() {
            try {
              return JSON.parse(this.storage.getItem(this.key));
            } catch (e) {
              console.error("Failed to parse value from storage for", this.key);
            }
          },
          __setStorageValue: function __setStorageValue(key, value) {
            if (typeof value === "undefined") value = null;
            this.storage.setItem(key, JSON.stringify(value));
          },
        });

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9zZXJ2aWNlL2RldmVsb3Blci10b29scy1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9iamVjdElkKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNvbXB1dGVPYmplY3RJZCBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBzdHJpbmcgPT5cbiAgc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5cbmNvbnN0IGlyb25JY29uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJpcm9uLWljb25cIikgYXMgQ29uc3RydWN0b3I8XG4gIElyb25JY29uRWxlbWVudFxuPjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uIGV4dGVuZHMgaXJvbkljb25DbGFzcyB7XG4gIHByaXZhdGUgX2ljb25zZXROYW1lPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oXG4gICAgbm9kZTogRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBzdXBlci5saXN0ZW4obm9kZSwgZXZlbnROYW1lLCBtZXRob2ROYW1lKTtcblxuICAgIGlmICghbG9hZGVkICYmIHRoaXMuX2ljb25zZXROYW1lID09PSBcIm1kaVwiKSB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWRpLWljb25zXCIgKi8gXCIuLi9yZXNvdXJjZXMvbWRpLWljb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvblwiOiBIYUljb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvblwiLCBIYUljb24pO1xuIiwiZXhwb3J0IGNvbnN0IFVOQVZBSUxBQkxFID0gXCJ1bmF2YWlsYWJsZVwiO1xuXG5leHBvcnQgY29uc3QgRU5USVRZX0NPTVBPTkVOVF9ET01BSU5TID0gW1xuICBcImFpcl9xdWFsaXR5XCIsXG4gIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBcImF1dG9tYXRpb25cIixcbiAgXCJiaW5hcnlfc2Vuc29yXCIsXG4gIFwiY2FsZW5kYXJcIixcbiAgXCJjb3VudGVyXCIsXG4gIFwiY292ZXJcIixcbiAgXCJkb21pbm9zXCIsXG4gIFwiZmFuXCIsXG4gIFwiZ2VvX2xvY2F0aW9uXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwiaW1hZ2VfcHJvY2Vzc2luZ1wiLFxuICBcImlucHV0X2Jvb2xlYW5cIixcbiAgXCJpbnB1dF9kYXRldGltZVwiLFxuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJsaWdodFwiLFxuICBcImxvY2tcIixcbiAgXCJtYWlsYm94XCIsXG4gIFwibWVkaWFfcGxheWVyXCIsXG4gIFwicGVyc29uXCIsXG4gIFwicGxhbnRcIixcbiAgXCJyZW1lbWJlcl90aGVfbWlsa1wiLFxuICBcInJlbW90ZVwiLFxuICBcInNjZW5lXCIsXG4gIFwic2NyaXB0XCIsXG4gIFwic2Vuc29yXCIsXG4gIFwic3dpdGNoXCIsXG4gIFwidGltZXJcIixcbiAgXCJ1dGlsaXR5X21ldGVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2VhdGhlclwiLFxuICBcIndpbmtcIixcbiAgXCJ6aGFcIixcbiAgXCJ6d2F2ZVwiLFxuXTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLXRleHRhcmVhXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFTlRJVFlfQ09NUE9ORU5UX0RPTUFJTlMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lbnRpdHlcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vdXRpbC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XCI7XG5cbmNvbnN0IEVSUk9SX1NFTlRJTkVMID0ge307XG5jbGFzcyBIYVBhbmVsRGV2U2VydmljZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYS1mb3JtIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMgdGgge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcyB0ciB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctYmFja2dyb3VuZC1jb2xvciwgI2VlZSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcyB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLXJvdy1hbHRlcm5hdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yLCAjZWVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzIHRkOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICBwcmUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQge1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnRcbiAgICAgICAga2V5PVwicGFuZWwtZGV2LXNlcnZpY2Utc3RhdGUtZG9tYWluLXNlcnZpY2VcIlxuICAgICAgICBkYXRhPVwie3tkb21haW5TZXJ2aWNlfX1cIlxuICAgICAgPlxuICAgICAgPC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50PlxuICAgICAgPGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnRcbiAgICAgICAga2V5PVwiW1tfY29tcHV0ZVNlcnZpY2VkYXRhS2V5KGRvbWFpblNlcnZpY2UpXV1cIlxuICAgICAgICBkYXRhPVwie3tzZXJ2aWNlRGF0YX19XCJcbiAgICAgID5cbiAgICAgIDwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudD5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIHNlcnZpY2UgZGV2IHRvb2wgYWxsb3dzIHlvdSB0byBjYWxsIGFueSBhdmFpbGFibGUgc2VydmljZSBpbiBIb21lXG4gICAgICAgICAgQXNzaXN0YW50LlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhhLWZvcm1cIj5cbiAgICAgICAgICA8aGEtc2VydmljZS1waWNrZXJcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7ZG9tYWluU2VydmljZX19XCJcbiAgICAgICAgICA+PC9oYS1zZXJ2aWNlLXBpY2tlcj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2NvbXB1dGVIYXNFbnRpdHkoX2F0dHJpYnV0ZXMpXV1cIj5cbiAgICAgICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiW1tfY29tcHV0ZUVudGl0eVZhbHVlKHBhcnNlZEpTT04pXV1cIlxuICAgICAgICAgICAgICBvbi1jaGFuZ2U9XCJfZW50aXR5UGlja2VkXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyF2YWxpZEpTT05dXVwiXG4gICAgICAgICAgICAgIGRvbWFpbi1maWx0ZXI9XCJbW19jb21wdXRlRW50aXR5RG9tYWluRmlsdGVyKF9kb21haW4pXV1cIlxuICAgICAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHBhcGVyLXRleHRhcmVhXG4gICAgICAgICAgICBhbHdheXMtZmxvYXQtbGFiZWxcbiAgICAgICAgICAgIGxhYmVsPVwiU2VydmljZSBEYXRhIChKU09OLCBvcHRpb25hbClcIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e3NlcnZpY2VEYXRhfX1cIlxuICAgICAgICAgICAgYXV0b2NhcGl0YWxpemU9XCJub25lXCJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgICAgID48L3BhcGVyLXRleHRhcmVhPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2NhbGxTZXJ2aWNlXCIgcmFpc2VkIGRpc2FibGVkPVwiW1shdmFsaWRKU09OXV1cIlxuICAgICAgICAgICAgPkNhbGwgU2VydmljZTwvbXdjLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIXZhbGlkSlNPTl1dXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCI+SW52YWxpZCBKU09OPC9zcGFuPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shZG9tYWluU2VydmljZV1dXCI+XG4gICAgICAgICAgPGgxPlNlbGVjdCBhIHNlcnZpY2UgdG8gc2VlIHRoZSBkZXNjcmlwdGlvbjwvaDE+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2RvbWFpblNlcnZpY2VdXVwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2Rlc2NyaXB0aW9uXV1cIj5cbiAgICAgICAgICAgIDxoMT5ObyBkZXNjcmlwdGlvbiBpcyBhdmFpbGFibGU8L2gxPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19kZXNjcmlwdGlvbl1dXCI+XG4gICAgICAgICAgICA8aDM+W1tfZGVzY3JpcHRpb25dXTwvaDM+XG5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImF0dHJpYnV0ZXNcIj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5QYXJhbWV0ZXI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkV4YW1wbGU8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9hdHRyaWJ1dGVzLmxlbmd0aF1dXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIzXCI+VGhpcyBzZXJ2aWNlIHRha2VzIG5vIHBhcmFtZXRlcnMuPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW19hdHRyaWJ1dGVzXV1cIiBhcz1cImF0dHJpYnV0ZVwiPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZD48cHJlPltbYXR0cmlidXRlLmtleV1dPC9wcmU+PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5bW2F0dHJpYnV0ZS5kZXNjcmlwdGlvbl1dPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5bW2F0dHJpYnV0ZS5leGFtcGxlXV08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIGRvbWFpblNlcnZpY2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJfZG9tYWluU2VydmljZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIF9kb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZURvbWFpbihkb21haW5TZXJ2aWNlKVwiLFxuICAgICAgfSxcblxuICAgICAgX3NlcnZpY2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVNlcnZpY2UoZG9tYWluU2VydmljZSlcIixcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBwYXJzZWRKU09OOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVQYXJzZWRTZXJ2aWNlRGF0YShzZXJ2aWNlRGF0YSlcIixcbiAgICAgIH0sXG5cbiAgICAgIHZhbGlkSlNPTjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVZhbGlkSlNPTihwYXJzZWRKU09OKVwiLFxuICAgICAgfSxcblxuICAgICAgX2F0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQXR0cmlidXRlc0FycmF5KGhhc3MsIF9kb21haW4sIF9zZXJ2aWNlKVwiLFxuICAgICAgfSxcblxuICAgICAgX2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVEZXNjcmlwdGlvbihoYXNzLCBfZG9tYWluLCBfc2VydmljZSlcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9kb21haW5TZXJ2aWNlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnNlcnZpY2VEYXRhID0gXCJcIjtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlc0FycmF5KGhhc3MsIGRvbWFpbiwgc2VydmljZSkge1xuICAgIGNvbnN0IHNlcnZpY2VEb21haW5zID0gaGFzcy5zZXJ2aWNlcztcbiAgICBpZiAoIShkb21haW4gaW4gc2VydmljZURvbWFpbnMpKSByZXR1cm4gW107XG4gICAgaWYgKCEoc2VydmljZSBpbiBzZXJ2aWNlRG9tYWluc1tkb21haW5dKSkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgZmllbGRzID0gc2VydmljZURvbWFpbnNbZG9tYWluXVtzZXJ2aWNlXS5maWVsZHM7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpZWxkcykubWFwKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IGtleTogZmllbGQgfSwgZmllbGRzW2ZpZWxkXSk7XG4gICAgfSk7XG4gIH1cblxuICBfY29tcHV0ZURlc2NyaXB0aW9uKGhhc3MsIGRvbWFpbiwgc2VydmljZSkge1xuICAgIGNvbnN0IHNlcnZpY2VEb21haW5zID0gaGFzcy5zZXJ2aWNlcztcbiAgICBpZiAoIShkb21haW4gaW4gc2VydmljZURvbWFpbnMpKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICghKHNlcnZpY2UgaW4gc2VydmljZURvbWFpbnNbZG9tYWluXSkpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNlcnZpY2VEb21haW5zW2RvbWFpbl1bc2VydmljZV0uZGVzY3JpcHRpb247XG4gIH1cblxuICBfY29tcHV0ZVNlcnZpY2VkYXRhS2V5KGRvbWFpblNlcnZpY2UpIHtcbiAgICByZXR1cm4gYHBhbmVsLWRldi1zZXJ2aWNlLXN0YXRlLXNlcnZpY2VkYXRhLiR7ZG9tYWluU2VydmljZX1gO1xuICB9XG5cbiAgX2NvbXB1dGVEb21haW4oZG9tYWluU2VydmljZSkge1xuICAgIHJldHVybiBkb21haW5TZXJ2aWNlLnNwbGl0KFwiLlwiLCAxKVswXTtcbiAgfVxuXG4gIF9jb21wdXRlU2VydmljZShkb21haW5TZXJ2aWNlKSB7XG4gICAgcmV0dXJuIGRvbWFpblNlcnZpY2Uuc3BsaXQoXCIuXCIsIDIpWzFdIHx8IG51bGw7XG4gIH1cblxuICBfY29tcHV0ZVBhcnNlZFNlcnZpY2VEYXRhKHNlcnZpY2VEYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBzZXJ2aWNlRGF0YSA/IEpTT04ucGFyc2Uoc2VydmljZURhdGEpIDoge307XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gRVJST1JfU0VOVElORUw7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVWYWxpZEpTT04ocGFyc2VkSlNPTikge1xuICAgIHJldHVybiBwYXJzZWRKU09OICE9PSBFUlJPUl9TRU5USU5FTDtcbiAgfVxuXG4gIF9jb21wdXRlSGFzRW50aXR5KGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gYXR0cmlidXRlcy5zb21lKChhdHRyKSA9PiBhdHRyLmtleSA9PT0gXCJlbnRpdHlfaWRcIik7XG4gIH1cblxuICBfY29tcHV0ZUVudGl0eVZhbHVlKHBhcnNlZEpTT04pIHtcbiAgICByZXR1cm4gcGFyc2VkSlNPTiA9PT0gRVJST1JfU0VOVElORUwgPyBcIlwiIDogcGFyc2VkSlNPTi5lbnRpdHlfaWQ7XG4gIH1cblxuICBfY29tcHV0ZUVudGl0eURvbWFpbkZpbHRlcihkb21haW4pIHtcbiAgICByZXR1cm4gRU5USVRZX0NPTVBPTkVOVF9ET01BSU5TLmluY2x1ZGVzKGRvbWFpbikgPyBkb21haW4gOiBudWxsO1xuICB9XG5cbiAgX2NhbGxTZXJ2aWNlKCkge1xuICAgIGlmICh0aGlzLnBhcnNlZEpTT04gPT09IEVSUk9SX1NFTlRJTkVMKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGFsZXJ0KGBFcnJvciBwYXJzaW5nIEpTT046ICR7dGhpcy5zZXJ2aWNlRGF0YX1gKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UodGhpcy5fZG9tYWluLCB0aGlzLl9zZXJ2aWNlLCB0aGlzLnBhcnNlZEpTT04pO1xuICB9XG5cbiAgX2VudGl0eVBpY2tlZChldikge1xuICAgIHRoaXMuc2VydmljZURhdGEgPSBKU09OLnN0cmluZ2lmeShcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucGFyc2VkSlNPTiwge1xuICAgICAgICBlbnRpdHlfaWQ6IGV2LnRhcmdldC52YWx1ZSxcbiAgICAgIH0pLFxuICAgICAgbnVsbCxcbiAgICAgIDJcbiAgICApO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImRldmVsb3Blci10b29scy1zZXJ2aWNlXCIsIEhhUGFuZWxEZXZTZXJ2aWNlKTtcbiIsIi8qIEZvcmtlZCBiZWNhdXNlIGl0IGNvbnRhaW5lZCBhbiBpbXBvcnQubWV0YSB3aGljaCB3ZWJwYWNrIGRvZXNuJ3Qgc3VwcG9ydC4gKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0IHsgQXBwU3RvcmFnZUJlaGF2aW9yIH0gZnJvbSBcIkBwb2x5bWVyL2FwcC1zdG9yYWdlL2FwcC1zdG9yYWdlLWJlaGF2aW9yXCI7XG5pbXBvcnQgeyBQb2x5bWVyIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5XCI7XG5cbi8qKlxuICogYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudCBzeW5jaHJvbml6ZXMgc3RvcmFnZSBiZXR3ZWVuIGFuIGluLW1lbW9yeVxuICogdmFsdWUgYW5kIGEgbG9jYXRpb24gaW4gdGhlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2Ugc3lzdGVtLlxuICpcbiAqIGxvY2FsU3RvcmFnZSBpcyBhIHNpbXBsZSBhbmQgd2lkZWx5IHN1cHBvcnRlZCBzdG9yYWdlIEFQSSB0aGF0IHByb3ZpZGVzIGJvdGhcbiAqIHBlcm1hbmVudCBhbmQgc2Vzc2lvbi1iYXNlZCBzdG9yYWdlIG9wdGlvbnMuIFVzaW5nIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnRcbiAqIHlvdSBjYW4gZWFzaWx5IGludGVncmF0ZSBsb2NhbFN0b3JhZ2UgaW50byB5b3VyIGFwcCB2aWEgbm9ybWFsIFBvbHltZXJcbiAqIGRhdGFiaW5kaW5nLlxuICpcbiAqIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQgaXMgdGhlIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlbGVtZW50XG4gKiB0aGF0IHVzZXMgYEFwcFN0b3JhZ2VCZWhhdmlvcmAuIFJlYWRpbmcgaXRzIGNvZGUgaXMgYSBnb29kIHdheSB0byBnZXRcbiAqIHN0YXJ0ZWQgd3JpdGluZyB5b3VyIG93biBzdG9yYWdlIGVsZW1lbnQuXG4gKlxuICogRXhhbXBsZSB1c2U6XG4gKlxuICogICAgIDxwYXBlci1pbnB1dCB2YWx1ZT1cInt7c2VhcmNofX1cIj48L3BhcGVyLWlucHV0PlxuICogICAgIDxhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50IGtleT1cInNlYXJjaFwiIGRhdGE9XCJ7e3NlYXJjaH19XCI+XG4gKiAgICAgPC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50PlxuICpcbiAqIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQgYXV0b21hdGljYWxseSBzeW5jaHJvbml6ZXMgY2hhbmdlcyB0byB0aGVcbiAqIHNhbWUga2V5IGFjcm9zcyBtdWx0aXBsZSB0YWJzLlxuICpcbiAqIE9ubHkgc3VwcG9ydHMgc3RvcmluZyBKU09OLXNlcmlhbGl6YWJsZSB2YWx1ZXMuXG4gKi9cblBvbHltZXIoe1xuICBpczogXCJhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XCIsXG4gIGJlaGF2aW9yczogW0FwcFN0b3JhZ2VCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGxvZ2ljYWwgbG9jYXRpb24gdG8gc3RvcmUgdGhlIGRhdGEuXG4gICAgICpcbiAgICAgKiBAdHlwZXtTdHJpbmd9XG4gICAgICovXG4gICAga2V5OiB7IHR5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgZGF0YSB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgY2xlYXJlZCBmcm9tIHN0b3JhZ2Ugd2hlblxuICAgICAqIHRoZSBwYWdlIHNlc3Npb24gZW5kcyAoaS5lLiB3aGVuIHRoZSB1c2VyIGhhcyBuYXZpZ2F0ZWQgYXdheSBmcm9tXG4gICAgICogdGhlIHBhZ2UpLlxuICAgICAqL1xuICAgIHNlc3Npb25Pbmx5OiB7IHR5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSB9LFxuXG4gICAgLyoqXG4gICAgICogRWl0aGVyIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBvciBgd2luZG93LnNlc3Npb25TdG9yYWdlYCwgZGVwZW5kaW5nIG9uXG4gICAgICogYHRoaXMuc2Vzc2lvbk9ubHlgLlxuICAgICAqL1xuICAgIHN0b3JhZ2U6IHsgdHlwZTogT2JqZWN0LCBjb21wdXRlZDogXCJfX2NvbXB1dGVTdG9yYWdlKHNlc3Npb25Pbmx5KVwiIH0sXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXCJfX3N0b3JhZ2VTb3VyY2VDaGFuZ2VkKHN0b3JhZ2UsIGtleSlcIl0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubGlzdGVuKHdpbmRvdywgXCJzdG9yYWdlXCIsIFwiX19vblN0b3JhZ2VcIik7XG4gICAgdGhpcy5saXN0ZW4oXG4gICAgICB3aW5kb3cudG9wLFxuICAgICAgXCJhcHAtbG9jYWwtc3RvcmFnZS1jaGFuZ2VkXCIsXG4gICAgICBcIl9fb25BcHBMb2NhbFN0b3JhZ2VDaGFuZ2VkXCJcbiAgICApO1xuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVubGlzdGVuKHdpbmRvdywgXCJzdG9yYWdlXCIsIFwiX19vblN0b3JhZ2VcIik7XG4gICAgdGhpcy51bmxpc3RlbihcbiAgICAgIHdpbmRvdy50b3AsXG4gICAgICBcImFwcC1sb2NhbC1zdG9yYWdlLWNoYW5nZWRcIixcbiAgICAgIFwiX19vbkFwcExvY2FsU3RvcmFnZUNoYW5nZWRcIlxuICAgICk7XG4gIH0sXG5cbiAgZ2V0IGlzTmV3KCkge1xuICAgIHJldHVybiAhdGhpcy5rZXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFN0b3JlcyBhIHZhbHVlIGF0IHRoZSBnaXZlbiBrZXksIGFuZCBpZiBzdWNjZXNzZnVsLCB1cGRhdGVzIHRoaXMua2V5LlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGtleSBUaGUgbmV3IGtleSB0byB1c2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuICBzYXZlVmFsdWU6IGZ1bmN0aW9uKGtleSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9fc2V0U3RvcmFnZVZhbHVlKC8qe0B0eXBlIGlmIChrZXkgdHkpe1N0cmluZ319Ki8ga2V5LCB0aGlzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG5cbiAgICB0aGlzLmtleSA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyAoa2V5KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcblxuICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5rZXkgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuemVyb1ZhbHVlO1xuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmtleSk7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcblxuICBnZXRTdG9yZWRWYWx1ZTogZnVuY3Rpb24ocGF0aCkge1xuICAgIHZhciB2YWx1ZTtcblxuICAgIGlmICh0aGlzLmtleSAhPSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuX19wYXJzZVZhbHVlRnJvbVN0b3JhZ2UoKTtcblxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlID0gdGhpcy5nZXQocGF0aCwgeyBkYXRhOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgc2V0U3RvcmVkVmFsdWU6IGZ1bmN0aW9uKHBhdGgsIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMua2V5ICE9IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX19zZXRTdG9yYWdlVmFsdWUodGhpcy5rZXksIHRoaXMuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5maXJlKFwiYXBwLWxvY2FsLXN0b3JhZ2UtY2hhbmdlZFwiLCB0aGlzLCB7IG5vZGU6IHdpbmRvdy50b3AgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgX19jb21wdXRlU3RvcmFnZTogZnVuY3Rpb24oc2Vzc2lvbk9ubHkpIHtcbiAgICByZXR1cm4gc2Vzc2lvbk9ubHkgPyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UgOiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9LFxuXG4gIF9fc3RvcmFnZVNvdXJjZUNoYW5nZWQ6IGZ1bmN0aW9uKHN0b3JhZ2UsIGtleSkge1xuICAgIHRoaXMuX2luaXRpYWxpemVTdG9yZWRWYWx1ZSgpO1xuICB9LFxuXG4gIF9fb25TdG9yYWdlOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgIT09IHRoaXMua2V5IHx8IGV2ZW50LnN0b3JhZ2VBcmVhICE9PSB0aGlzLnN0b3JhZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN5bmNUb01lbW9yeShmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc2V0KFwiZGF0YVwiLCB0aGlzLl9fcGFyc2VWYWx1ZUZyb21TdG9yYWdlKCkpO1xuICAgIH0pO1xuICB9LFxuXG4gIF9fb25BcHBMb2NhbFN0b3JhZ2VDaGFuZ2VkOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LmRldGFpbCA9PT0gdGhpcyB8fFxuICAgICAgZXZlbnQuZGV0YWlsLmtleSAhPT0gdGhpcy5rZXkgfHxcbiAgICAgIGV2ZW50LmRldGFpbC5zdG9yYWdlICE9PSB0aGlzLnN0b3JhZ2VcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zeW5jVG9NZW1vcnkoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnNldChcImRhdGFcIiwgZXZlbnQuZGV0YWlsLmRhdGEpO1xuICAgIH0pO1xuICB9LFxuXG4gIF9fcGFyc2VWYWx1ZUZyb21TdG9yYWdlOiBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHZhbHVlIGZyb20gc3RvcmFnZSBmb3JcIiwgdGhpcy5rZXkpO1xuICAgIH1cbiAgfSxcblxuICBfX3NldFN0b3JhZ2VWYWx1ZTogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH0sXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUtBQUE7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQURBO0FBQUE7QUF1QkE7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBa0JBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7Ozs7OztBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQWhCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFxTUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFEQTtBQU1BOzs7QUEvUUE7QUFDQTtBQWlKQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUF4Q0E7QUE2Q0E7Ozs7QUFuTUE7QUFDQTtBQWtSQTs7Ozs7Ozs7Ozs7O0FDL1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFuQkE7QUFzQkE7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFoS0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
