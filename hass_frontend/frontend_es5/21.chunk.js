(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [21],
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

    /***/ "./src/panels/developer-tools/state/developer-tools-state.js":
      /*!*******************************************************************!*\
  !*** ./src/panels/developer-tools/state/developer-tools-state.js ***!
  \*******************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
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
            '\n      <style include="ha-style">\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n          display: block;\n          padding: 16px;\n          direction: ltr;\n        }\n\n        ha-entity-picker,\n        .state-input,\n        paper-textarea {\n          display: block;\n          max-width: 400px;\n        }\n\n        .entities th {\n          text-align: left;\n        }\n\n        .entities tr {\n          vertical-align: top;\n        }\n\n        .entities tr:nth-child(odd) {\n          background-color: var(--table-row-background-color, #fff);\n        }\n\n        .entities tr:nth-child(even) {\n          background-color: var(--table-row-alternative-background-color, #eee);\n        }\n        .entities td {\n          padding: 4px;\n        }\n        .entities paper-icon-button {\n          height: 24px;\n          padding: 0;\n        }\n        .entities td:nth-child(3) {\n          white-space: pre-wrap;\n          word-break: break-word;\n        }\n\n        .entities a {\n          color: var(--primary-color);\n        }\n      </style>\n\n      <div>\n        <p>\n          Set the representation of a device within JAVIS Home.<br />\n          This will not communicate with the actual device.\n        </p>\n\n        <ha-entity-picker\n          autofocus\n          hass="[[hass]]"\n          value="{{_entityId}}"\n          allow-custom-entity\n        ></ha-entity-picker>\n        <paper-input\n          label="State"\n          required\n          autocapitalize="none"\n          autocomplete="off"\n          autocorrect="off"\n          spellcheck="false"\n          value="{{_state}}"\n          class="state-input"\n        ></paper-input>\n        <paper-textarea\n          label="State attributes (JSON, optional)"\n          autocapitalize="none"\n          autocomplete="off"\n          spellcheck="false"\n          value="{{_stateAttributes}}"\n        ></paper-textarea>\n        <mwc-button on-click="handleSetState" raised>Set State</mwc-button>\n      </div>\n\n      <h1>Current entities</h1>\n      <table class="entities">\n        <tr>\n          <th>Entity</th>\n          <th>State</th>\n          <th hidden$="[[narrow]]">\n            Attributes\n            <paper-checkbox checked="{{_showAttributes}}"></paper-checkbox>\n          </th>\n        </tr>\n        <tr>\n          <th>\n            <paper-input\n              label="Filter entities"\n              type="search"\n              value="{{_entityFilter}}"\n            ></paper-input>\n          </th>\n          <th>\n            <paper-input\n              label="Filter states"\n              type="search"\n              value="{{_stateFilter}}"\n            ></paper-input>\n          </th>\n          <th hidden$="[[!computeShowAttributes(narrow, _showAttributes)]]">\n            <paper-input\n              label="Filter attributes"\n              type="search"\n              value="{{_attributeFilter}}"\n            ></paper-input>\n          </th>\n        </tr>\n        <tr hidden$="[[!computeShowEntitiesPlaceholder(_entities)]]">\n          <td colspan="3">No entities</td>\n        </tr>\n        <template is="dom-repeat" items="[[_entities]]" as="entity">\n          <tr>\n            <td>\n              <paper-icon-button\n                on-click="entityMoreInfo"\n                icon="hass:open-in-new"\n                alt="More Info"\n                title="More Info"\n              >\n              </paper-icon-button>\n              <a href="#" on-click="entitySelected">[[entity.entity_id]]</a>\n            </td>\n            <td>[[entity.state]]</td>\n            <template\n              is="dom-if"\n              if="[[computeShowAttributes(narrow, _showAttributes)]]"\n            >\n              <td>[[attributeString(entity)]]</td>\n            </template>\n          </tr>\n        </template>\n      </table>\n    ',
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

        /*
         * @appliesMixin EventsMixin
         */

        var HaPanelDevState =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaPanelDevState, _EventsMixin);

            function HaPanelDevState() {
              _classCallCheck(this, HaPanelDevState);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPanelDevState).apply(this, arguments)
              );
            }

            _createClass(
              HaPanelDevState,
              [
                {
                  key: "entitySelected",
                  value: function entitySelected(ev) {
                    var state = ev.model.entity;
                    this._entityId = state.entity_id;
                    this._state = state.state;
                    this._stateAttributes = JSON.stringify(
                      state.attributes,
                      null,
                      "  "
                    );
                    ev.preventDefault();
                  },
                },
                {
                  key: "entityMoreInfo",
                  value: function entityMoreInfo(ev) {
                    ev.preventDefault();
                    this.fire("hass-more-info", {
                      entityId: ev.model.entity.entity_id,
                    });
                  },
                },
                {
                  key: "handleSetState",
                  value: function handleSetState() {
                    var attr;

                    var attrRaw = this._stateAttributes.replace(
                      /^\s+|\s+$/g,
                      ""
                    );

                    try {
                      attr = attrRaw ? JSON.parse(attrRaw) : {};
                    } catch (err) {
                      /* eslint-disable no-alert */
                      alert("Error parsing JSON: " + err);
                      /* eslint-enable no-alert */

                      return;
                    }

                    this.hass.callApi("POST", "states/" + this._entityId, {
                      state: this._state,
                      attributes: attr,
                    });
                  },
                },
                {
                  key: "computeEntities",
                  value: function computeEntities(
                    hass,
                    _entityFilter,
                    _stateFilter,
                    _attributeFilter
                  ) {
                    return Object.keys(hass.states)
                      .map(function(key) {
                        return hass.states[key];
                      })
                      .filter(function(value) {
                        if (
                          !value.entity_id.includes(_entityFilter.toLowerCase())
                        ) {
                          return false;
                        }

                        if (!value.state.includes(_stateFilter.toLowerCase())) {
                          return false;
                        }

                        if (_attributeFilter !== "") {
                          var attributeFilter = _attributeFilter.toLowerCase();

                          var colonIndex = attributeFilter.indexOf(":");
                          var multiMode = colonIndex !== -1;
                          var keyFilter = attributeFilter;
                          var valueFilter = attributeFilter;

                          if (multiMode) {
                            // we need to filter keys and values separately
                            keyFilter = attributeFilter
                              .substring(0, colonIndex)
                              .trim();
                            valueFilter = attributeFilter
                              .substring(colonIndex + 1)
                              .trim();
                          }

                          var attributeKeys = Object.keys(value.attributes);

                          for (var i = 0; i < attributeKeys.length; i++) {
                            var key = attributeKeys[i];

                            if (key.includes(keyFilter) && !multiMode) {
                              return true; // in single mode we're already satisfied with this match
                            }

                            if (!key.includes(keyFilter) && multiMode) {
                              continue;
                            }

                            var attributeValue = value.attributes[key];

                            if (
                              attributeValue !== null &&
                              JSON.stringify(attributeValue)
                                .toLowerCase()
                                .includes(valueFilter)
                            ) {
                              return true;
                            }
                          } // there are no attributes where the key and/or value can be matched

                          return false;
                        }

                        return true;
                      })
                      .sort(function(entityA, entityB) {
                        if (entityA.entity_id < entityB.entity_id) {
                          return -1;
                        }

                        if (entityA.entity_id > entityB.entity_id) {
                          return 1;
                        }

                        return 0;
                      });
                  },
                },
                {
                  key: "computeShowEntitiesPlaceholder",
                  value: function computeShowEntitiesPlaceholder(_entities) {
                    return _entities.length === 0;
                  },
                },
                {
                  key: "computeShowAttributes",
                  value: function computeShowAttributes(
                    narrow,
                    _showAttributes
                  ) {
                    return !narrow && _showAttributes;
                  },
                },
                {
                  key: "attributeString",
                  value: function attributeString(entity) {
                    var output = "";
                    var i;
                    var keys;
                    var key;
                    var value;

                    for (
                      i = 0, keys = Object.keys(entity.attributes);
                      i < keys.length;
                      i++
                    ) {
                      key = keys[i];
                      value = entity.attributes[key];

                      if (!Array.isArray(value) && value instanceof Object) {
                        value = JSON.stringify(value, null, "  ");
                      }

                      output += key + ": " + value + "\n";
                    }

                    return output;
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
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
                      _entityId: {
                        type: String,
                        value: "",
                      },
                      _entityFilter: {
                        type: String,
                        value: "",
                      },
                      _stateFilter: {
                        type: String,
                        value: "",
                      },
                      _attributeFilter: {
                        type: String,
                        value: "",
                      },
                      _state: {
                        type: String,
                        value: "",
                      },
                      _stateAttributes: {
                        type: String,
                        value: "",
                      },
                      _showAttributes: {
                        type: Boolean,
                        value: true,
                      },
                      _entities: {
                        type: Array,
                        computed:
                          "computeEntities(hass, _entityFilter, _stateFilter, _attributeFilter)",
                      },
                    };
                  },
                },
              ]
            );

            return HaPanelDevState;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__["EventsMixin"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("developer-tools-state", HaPanelDevState);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9zdGF0ZS9kZXZlbG9wZXItdG9vbHMtc3RhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9iamVjdElkKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNvbXB1dGVPYmplY3RJZCBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBzdHJpbmcgPT5cbiAgc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5cbmNvbnN0IGlyb25JY29uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJpcm9uLWljb25cIikgYXMgQ29uc3RydWN0b3I8XG4gIElyb25JY29uRWxlbWVudFxuPjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uIGV4dGVuZHMgaXJvbkljb25DbGFzcyB7XG4gIHByaXZhdGUgX2ljb25zZXROYW1lPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oXG4gICAgbm9kZTogRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBzdXBlci5saXN0ZW4obm9kZSwgZXZlbnROYW1lLCBtZXRob2ROYW1lKTtcblxuICAgIGlmICghbG9hZGVkICYmIHRoaXMuX2ljb25zZXROYW1lID09PSBcIm1kaVwiKSB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWRpLWljb25zXCIgKi8gXCIuLi9yZXNvdXJjZXMvbWRpLWljb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvblwiOiBIYUljb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvblwiLCBIYUljb24pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci10ZXh0YXJlYVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhUGFuZWxEZXZTdGF0ZSBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1lbnRpdHktcGlja2VyLFxuICAgICAgICAuc3RhdGUtaW5wdXQsXG4gICAgICAgIHBhcGVyLXRleHRhcmVhIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVudGl0aWVzIHRoIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVudGl0aWVzIHRyIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVudGl0aWVzIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7XG4gICAgICAgIH1cblxuICAgICAgICAuZW50aXRpZXMgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctYWx0ZXJuYXRpdmUtYmFja2dyb3VuZC1jb2xvciwgI2VlZSk7XG4gICAgICAgIH1cbiAgICAgICAgLmVudGl0aWVzIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmVudGl0aWVzIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICAuZW50aXRpZXMgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lbnRpdGllcyBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFNldCB0aGUgcmVwcmVzZW50YXRpb24gb2YgYSBkZXZpY2Ugd2l0aGluIEpBVklTIEhvbWUuPGJyIC8+XG4gICAgICAgICAgVGhpcyB3aWxsIG5vdCBjb21tdW5pY2F0ZSB3aXRoIHRoZSBhY3R1YWwgZGV2aWNlLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHZhbHVlPVwie3tfZW50aXR5SWR9fVwiXG4gICAgICAgICAgYWxsb3ctY3VzdG9tLWVudGl0eVxuICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD1cIlN0YXRlXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICBhdXRvY29ycmVjdD1cIm9mZlwiXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICB2YWx1ZT1cInt7X3N0YXRlfX1cIlxuICAgICAgICAgIGNsYXNzPVwic3RhdGUtaW5wdXRcIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPHBhcGVyLXRleHRhcmVhXG4gICAgICAgICAgbGFiZWw9XCJTdGF0ZSBhdHRyaWJ1dGVzIChKU09OLCBvcHRpb25hbClcIlxuICAgICAgICAgIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgICAgIHZhbHVlPVwie3tfc3RhdGVBdHRyaWJ1dGVzfX1cIlxuICAgICAgICA+PC9wYXBlci10ZXh0YXJlYT5cbiAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJoYW5kbGVTZXRTdGF0ZVwiIHJhaXNlZD5TZXQgU3RhdGU8L213Yy1idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGgxPkN1cnJlbnQgZW50aXRpZXM8L2gxPlxuICAgICAgPHRhYmxlIGNsYXNzPVwiZW50aXRpZXNcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5FbnRpdHk8L3RoPlxuICAgICAgICAgIDx0aD5TdGF0ZTwvdGg+XG4gICAgICAgICAgPHRoIGhpZGRlbiQ9XCJbW25hcnJvd11dXCI+XG4gICAgICAgICAgICBBdHRyaWJ1dGVzXG4gICAgICAgICAgICA8cGFwZXItY2hlY2tib3ggY2hlY2tlZD1cInt7X3Nob3dBdHRyaWJ1dGVzfX1cIj48L3BhcGVyLWNoZWNrYm94PlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+XG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgZW50aXRpZXNcIlxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e19lbnRpdHlGaWx0ZXJ9fVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIkZpbHRlciBzdGF0ZXNcIlxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e19zdGF0ZUZpbHRlcn19XCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoIGhpZGRlbiQ9XCJbWyFjb21wdXRlU2hvd0F0dHJpYnV0ZXMobmFycm93LCBfc2hvd0F0dHJpYnV0ZXMpXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIkZpbHRlciBhdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgIHZhbHVlPVwie3tfYXR0cmlidXRlRmlsdGVyfX1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIGhpZGRlbiQ9XCJbWyFjb21wdXRlU2hvd0VudGl0aWVzUGxhY2Vob2xkZXIoX2VudGl0aWVzKV1dXCI+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCIzXCI+Tm8gZW50aXRpZXM8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW19lbnRpdGllc11dXCIgYXM9XCJlbnRpdHlcIj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiZW50aXR5TW9yZUluZm9cIlxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOm9wZW4taW4tbmV3XCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJNb3JlIEluZm9cIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiTW9yZSBJbmZvXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uLWNsaWNrPVwiZW50aXR5U2VsZWN0ZWRcIj5bW2VudGl0eS5lbnRpdHlfaWRdXTwvYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+W1tlbnRpdHkuc3RhdGVdXTwvdGQ+XG4gICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgICBpZj1cIltbY29tcHV0ZVNob3dBdHRyaWJ1dGVzKG5hcnJvdywgX3Nob3dBdHRyaWJ1dGVzKV1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRkPltbYXR0cmlidXRlU3RyaW5nKGVudGl0eSldXTwvdGQ+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RhYmxlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgX2VudGl0eUlkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBfZW50aXR5RmlsdGVyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBfc3RhdGVGaWx0ZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIF9hdHRyaWJ1dGVGaWx0ZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIF9zdGF0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgX3N0YXRlQXR0cmlidXRlczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgX3Nob3dBdHRyaWJ1dGVzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgX2VudGl0aWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDpcbiAgICAgICAgICBcImNvbXB1dGVFbnRpdGllcyhoYXNzLCBfZW50aXR5RmlsdGVyLCBfc3RhdGVGaWx0ZXIsIF9hdHRyaWJ1dGVGaWx0ZXIpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBlbnRpdHlTZWxlY3RlZChldikge1xuICAgIHZhciBzdGF0ZSA9IGV2Lm1vZGVsLmVudGl0eTtcbiAgICB0aGlzLl9lbnRpdHlJZCA9IHN0YXRlLmVudGl0eV9pZDtcbiAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlLnN0YXRlO1xuICAgIHRoaXMuX3N0YXRlQXR0cmlidXRlcyA9IEpTT04uc3RyaW5naWZ5KHN0YXRlLmF0dHJpYnV0ZXMsIG51bGwsIFwiICBcIik7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGVudGl0eU1vcmVJbmZvKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiBldi5tb2RlbC5lbnRpdHkuZW50aXR5X2lkIH0pO1xuICB9XG5cbiAgaGFuZGxlU2V0U3RhdGUoKSB7XG4gICAgdmFyIGF0dHI7XG4gICAgdmFyIGF0dHJSYXcgPSB0aGlzLl9zdGF0ZUF0dHJpYnV0ZXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XG4gICAgdHJ5IHtcbiAgICAgIGF0dHIgPSBhdHRyUmF3ID8gSlNPTi5wYXJzZShhdHRyUmF3KSA6IHt9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbiAgICAgIGFsZXJ0KFwiRXJyb3IgcGFyc2luZyBKU09OOiBcIiArIGVycik7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWFsZXJ0ICovXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5oYXNzLmNhbGxBcGkoXCJQT1NUXCIsIFwic3RhdGVzL1wiICsgdGhpcy5fZW50aXR5SWQsIHtcbiAgICAgIHN0YXRlOiB0aGlzLl9zdGF0ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IGF0dHIsXG4gICAgfSk7XG4gIH1cblxuICBjb21wdXRlRW50aXRpZXMoaGFzcywgX2VudGl0eUZpbHRlciwgX3N0YXRlRmlsdGVyLCBfYXR0cmlidXRlRmlsdGVyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKVxuICAgICAgLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIGhhc3Muc3RhdGVzW2tleV07XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlLmVudGl0eV9pZC5pbmNsdWRlcyhfZW50aXR5RmlsdGVyLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF2YWx1ZS5zdGF0ZS5pbmNsdWRlcyhfc3RhdGVGaWx0ZXIudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2F0dHJpYnV0ZUZpbHRlciAhPT0gXCJcIikge1xuICAgICAgICAgIHZhciBhdHRyaWJ1dGVGaWx0ZXIgPSBfYXR0cmlidXRlRmlsdGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgdmFyIGNvbG9uSW5kZXggPSBhdHRyaWJ1dGVGaWx0ZXIuaW5kZXhPZihcIjpcIik7XG4gICAgICAgICAgdmFyIG11bHRpTW9kZSA9IGNvbG9uSW5kZXggIT09IC0xO1xuXG4gICAgICAgICAgdmFyIGtleUZpbHRlciA9IGF0dHJpYnV0ZUZpbHRlcjtcbiAgICAgICAgICB2YXIgdmFsdWVGaWx0ZXIgPSBhdHRyaWJ1dGVGaWx0ZXI7XG5cbiAgICAgICAgICBpZiAobXVsdGlNb2RlKSB7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGZpbHRlciBrZXlzIGFuZCB2YWx1ZXMgc2VwYXJhdGVseVxuICAgICAgICAgICAga2V5RmlsdGVyID0gYXR0cmlidXRlRmlsdGVyLnN1YnN0cmluZygwLCBjb2xvbkluZGV4KS50cmltKCk7XG4gICAgICAgICAgICB2YWx1ZUZpbHRlciA9IGF0dHJpYnV0ZUZpbHRlci5zdWJzdHJpbmcoY29sb25JbmRleCArIDEpLnRyaW0oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgYXR0cmlidXRlS2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlLmF0dHJpYnV0ZXMpO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRyaWJ1dGVLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gYXR0cmlidXRlS2V5c1tpXTtcblxuICAgICAgICAgICAgaWYgKGtleS5pbmNsdWRlcyhrZXlGaWx0ZXIpICYmICFtdWx0aU1vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIGluIHNpbmdsZSBtb2RlIHdlJ3JlIGFscmVhZHkgc2F0aXNmaWVkIHdpdGggdGhpcyBtYXRjaFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFrZXkuaW5jbHVkZXMoa2V5RmlsdGVyKSAmJiBtdWx0aU1vZGUpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVWYWx1ZSA9IHZhbHVlLmF0dHJpYnV0ZXNba2V5XTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShhdHRyaWJ1dGVWYWx1ZSlcbiAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgIC5pbmNsdWRlcyh2YWx1ZUZpbHRlcilcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB0aGVyZSBhcmUgbm8gYXR0cmlidXRlcyB3aGVyZSB0aGUga2V5IGFuZC9vciB2YWx1ZSBjYW4gYmUgbWF0Y2hlZFxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KGZ1bmN0aW9uKGVudGl0eUEsIGVudGl0eUIpIHtcbiAgICAgICAgaWYgKGVudGl0eUEuZW50aXR5X2lkIDwgZW50aXR5Qi5lbnRpdHlfaWQpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudGl0eUEuZW50aXR5X2lkID4gZW50aXR5Qi5lbnRpdHlfaWQpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZVNob3dFbnRpdGllc1BsYWNlaG9sZGVyKF9lbnRpdGllcykge1xuICAgIHJldHVybiBfZW50aXRpZXMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgY29tcHV0ZVNob3dBdHRyaWJ1dGVzKG5hcnJvdywgX3Nob3dBdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuICFuYXJyb3cgJiYgX3Nob3dBdHRyaWJ1dGVzO1xuICB9XG5cbiAgYXR0cmlidXRlU3RyaW5nKGVudGl0eSkge1xuICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgIHZhciBpO1xuICAgIHZhciBrZXlzO1xuICAgIHZhciBrZXk7XG4gICAgdmFyIHZhbHVlO1xuXG4gICAgZm9yIChpID0gMCwga2V5cyA9IE9iamVjdC5rZXlzKGVudGl0eS5hdHRyaWJ1dGVzKTsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICB2YWx1ZSA9IGVudGl0eS5hdHRyaWJ1dGVzW2tleV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIFwiICBcIik7XG4gICAgICB9XG4gICAgICBvdXRwdXQgKz0ga2V5ICsgXCI6IFwiICsgdmFsdWUgKyBcIlxcblwiO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZGV2ZWxvcGVyLXRvb2xzLXN0YXRlXCIsIEhhUGFuZWxEZXZTdGF0ZSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlLQUFBO0FBQ0E7QUFDQTtBQWRBO0FBQ0E7QUFEQTtBQUFBO0FBdUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQWtCQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFrTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBOVRBO0FBQ0E7QUE2SUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBeENBO0FBOENBOzs7O0FBaE1BO0FBQ0E7QUFpVUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
