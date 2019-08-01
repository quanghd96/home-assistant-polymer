(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-integrations"],
  {
    /***/ "./node_modules/@polymer/paper-item/paper-icon-item.js":
      /*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-icon-item.js ***!
  \*************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"
        );
        /* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js"
        );
        /* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n    <style include="paper-item-shared-styles"></style>\n    <style>\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n        @apply --paper-icon-item;\n      }\n\n      .content-icon {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n\n        width: var(--paper-item-icon-width, 56px);\n        @apply --paper-item-icon;\n      }\n    </style>\n\n    <div id="contentIcon" class="content-icon">\n      <slot name="item-icon"></slot>\n    </div>\n    <slot></slot>\n',
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

        /*
`<paper-icon-item>` is a convenience element to make an item with icon. It is an
interactive list item with a fixed-width icon area, according to Material
Design. This is useful if the icons are of varying widths, but you want the item
bodies to line up. Use this like a `<paper-item>`. The child node with the slot
name `item-icon` is placed in the icon area.

    <paper-icon-item>
      <iron-icon icon="favorite" slot="item-icon"></iron-icon>
      Favorite
    </paper-icon-item>
    <paper-icon-item>
      <div class="avatar" slot="item-icon"></div>
      Avatar
    </paper-icon-item>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-icon-width` | Width of the icon area | `56px`
`--paper-item-icon` | Mixin applied to the icon area | `{}`
`--paper-icon-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__[
            "Polymer"
          ]
        )({
          _template: Object(
            _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__[
              "html"
            ]
          )(_templateObject()),
          is: "paper-icon-item",
          behaviors: [
            _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__[
              "PaperItemBehavior"
            ],
          ],
        });

        /***/
      },

    /***/ "./node_modules/@polymer/paper-item/paper-item-body.js":
      /*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-body.js ***!
  \*************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"
        );
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n    <style>\n      :host {\n        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */\n        @apply --layout-vertical;\n        @apply --layout-center-justified;\n        @apply --layout-flex;\n      }\n\n      :host([two-line]) {\n        min-height: var(--paper-item-body-two-line-min-height, 72px);\n      }\n\n      :host([three-line]) {\n        min-height: var(--paper-item-body-three-line-min-height, 88px);\n      }\n\n      :host > ::slotted(*) {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      :host > ::slotted([secondary]) {\n        @apply --paper-font-body1;\n\n        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));\n\n        @apply --paper-item-body-secondary;\n      }\n    </style>\n\n    <slot></slot>\n",
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

        /*
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__[
            "Polymer"
          ]
        )({
          _template: Object(
            _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__[
              "html"
            ]
          )(_templateObject()),
          is: "paper-item-body",
        });

        /***/
      },

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

    /***/ "./src/components/entity/ha-state-icon.js":
      /*!************************************************!*\
  !*** ./src/components/entity/ha-state-icon.js ***!
  \************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../ha-icon */ "./src/components/ha-icon.ts"
        );
        /* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts"
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
            '\n      <ha-icon icon="[[computeIcon(stateObj)]]"></ha-icon>\n    ',
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

        var HaStateIcon =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaStateIcon, _PolymerElement);

            function HaStateIcon() {
              _classCallCheck(this, HaStateIcon);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaStateIcon).apply(this, arguments)
              );
            }

            _createClass(
              HaStateIcon,
              [
                {
                  key: "computeIcon",
                  value: function computeIcon(stateObj) {
                    return Object(
                      _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__[
                        "default"
                      ]
                    )(stateObj);
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      stateObj: {
                        type: Object,
                      },
                    };
                  },
                },
              ]
            );

            return HaStateIcon;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-state-icon", HaStateIcon);

        /***/
      },

    /***/ "./src/components/ha-icon-next.ts":
      /*!****************************************!*\
  !*** ./src/components/ha-icon-next.ts ***!
  \****************************************/
      /*! exports provided: HaIconNext */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaIconNext",
          function() {
            return HaIconNext;
          }
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./ha-icon */ "./src/components/ha-icon.ts"
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

        var HaIconNext =
          /*#__PURE__*/
          (function(_HaIcon) {
            _inherits(HaIconNext, _HaIcon);

            function HaIconNext() {
              _classCallCheck(this, HaIconNext);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaIconNext).apply(this, arguments)
              );
            }

            _createClass(HaIconNext, [
              {
                key: "connectedCallback",
                value: function connectedCallback() {
                  this.icon =
                    window.getComputedStyle(this).direction === "ltr"
                      ? "hass:chevron-right"
                      : "hass:chevron-left"; // calling super after setting icon to have it consistently show the icon (otherwise not always shown)

                  _get(
                    _getPrototypeOf(HaIconNext.prototype),
                    "connectedCallback",
                    this
                  ).call(this);
                },
              },
            ]);

            return HaIconNext;
          })(_ha_icon__WEBPACK_IMPORTED_MODULE_1__["HaIcon"]);
        customElements.define("ha-icon-next", HaIconNext);

        /***/
      },

    /***/ "./src/data/area_registry.ts":
      /*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
      /*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createAreaRegistryEntry",
          function() {
            return createAreaRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateAreaRegistryEntry",
          function() {
            return updateAreaRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteAreaRegistryEntry",
          function() {
            return deleteAreaRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeAreaRegistry",
          function() {
            return subscribeAreaRegistry;
          }
        );
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );
        /* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/string/compare */ "./src/common/string/compare.ts"
        );
        /* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../common/util/debounce */ "./src/common/util/debounce.ts"
        );

        var createAreaRegistryEntry = function createAreaRegistryEntry(
          hass,
          values
        ) {
          return hass.callWS(
            Object.assign(
              {
                type: "config/area_registry/create",
              },
              values
            )
          );
        };
        var updateAreaRegistryEntry = function updateAreaRegistryEntry(
          hass,
          areaId,
          updates
        ) {
          return hass.callWS(
            Object.assign(
              {
                type: "config/area_registry/update",
                area_id: areaId,
              },
              updates
            )
          );
        };
        var deleteAreaRegistryEntry = function deleteAreaRegistryEntry(
          hass,
          areaId
        ) {
          return hass.callWS({
            type: "config/area_registry/delete",
            area_id: areaId,
          });
        };

        var fetchAreaRegistry = function fetchAreaRegistry(conn) {
          return conn
            .sendMessagePromise({
              type: "config/area_registry/list",
            })
            .then(function(areas) {
              return areas.sort(function(ent1, ent2) {
                return Object(
                  _common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"]
                )(ent1.name, ent2.name);
              });
            });
        };

        var subscribeAreaRegistryUpdates = function subscribeAreaRegistryUpdates(
          conn,
          store
        ) {
          return conn.subscribeEvents(
            Object(
              _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"]
            )(
              function() {
                return fetchAreaRegistry(conn).then(function(areas) {
                  return store.setState(areas, true);
                });
              },
              500,
              true
            ),
            "area_registry_updated"
          );
        };

        var subscribeAreaRegistry = function subscribeAreaRegistry(
          conn,
          onChange
        ) {
          return Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "createCollection"
            ]
          )(
            "_areaRegistry",
            fetchAreaRegistry,
            subscribeAreaRegistryUpdates,
            conn,
            onChange
          );
        };

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

    /***/ "./src/data/device_registry.ts":
      /*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
      /*! exports provided: updateDeviceRegistryEntry, subscribeDeviceRegistry */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateDeviceRegistryEntry",
          function() {
            return updateDeviceRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeDeviceRegistry",
          function() {
            return subscribeDeviceRegistry;
          }
        );
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );
        /* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/util/debounce */ "./src/common/util/debounce.ts"
        );

        var updateDeviceRegistryEntry = function updateDeviceRegistryEntry(
          hass,
          deviceId,
          updates
        ) {
          return hass.callWS(
            Object.assign(
              {
                type: "config/device_registry/update",
                device_id: deviceId,
              },
              updates
            )
          );
        };

        var fetchDeviceRegistry = function fetchDeviceRegistry(conn) {
          return conn.sendMessagePromise({
            type: "config/device_registry/list",
          });
        };

        var subscribeDeviceRegistryUpdates = function subscribeDeviceRegistryUpdates(
          conn,
          store
        ) {
          return conn.subscribeEvents(
            Object(
              _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"]
            )(
              function() {
                return fetchDeviceRegistry(conn).then(function(devices) {
                  return store.setState(devices, true);
                });
              },
              500,
              true
            ),
            "device_registry_updated"
          );
        };

        var subscribeDeviceRegistry = function subscribeDeviceRegistry(
          conn,
          onChange
        ) {
          return Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "createCollection"
            ]
          )(
            "_dr",
            fetchDeviceRegistry,
            subscribeDeviceRegistryUpdates,
            conn,
            onChange
          );
        };

        /***/
      },

    /***/ "./src/data/entity_registry.ts":
      /*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
      /*! exports provided: computeEntityRegistryName, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "computeEntityRegistryName",
          function() {
            return computeEntityRegistryName;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateEntityRegistryEntry",
          function() {
            return updateEntityRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "removeEntityRegistryEntry",
          function() {
            return removeEntityRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeEntityRegistry",
          function() {
            return subscribeEntityRegistry;
          }
        );
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../common/util/debounce */ "./src/common/util/debounce.ts"
        );

        var computeEntityRegistryName = function computeEntityRegistryName(
          hass,
          entry
        ) {
          if (entry.name) {
            return entry.name;
          }

          var state = hass.states[entry.entity_id];
          return state
            ? Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ]
              )(state)
            : null;
        };
        var updateEntityRegistryEntry = function updateEntityRegistryEntry(
          hass,
          entityId,
          updates
        ) {
          return hass.callWS(
            Object.assign(
              {
                type: "config/entity_registry/update",
                entity_id: entityId,
              },
              updates
            )
          );
        };
        var removeEntityRegistryEntry = function removeEntityRegistryEntry(
          hass,
          entityId
        ) {
          return hass.callWS({
            type: "config/entity_registry/remove",
            entity_id: entityId,
          });
        };

        var fetchEntityRegistry = function fetchEntityRegistry(conn) {
          return conn.sendMessagePromise({
            type: "config/entity_registry/list",
          });
        };

        var subscribeEntityRegistryUpdates = function subscribeEntityRegistryUpdates(
          conn,
          store
        ) {
          return conn.subscribeEvents(
            Object(
              _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"]
            )(
              function() {
                return fetchEntityRegistry(conn).then(function(entities) {
                  return store.setState(entities, true);
                });
              },
              500,
              true
            ),
            "entity_registry_updated"
          );
        };

        var subscribeEntityRegistry = function subscribeEntityRegistry(
          conn,
          onChange
        ) {
          return Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "createCollection"
            ]
          )(
            "_entityRegistry",
            fetchEntityRegistry,
            subscribeEntityRegistryUpdates,
            conn,
            onChange
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

    /***/ "./src/mixins/navigate-mixin.js":
      /*!**************************************!*\
  !*** ./src/mixins/navigate-mixin.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"
        );
        /* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/navigate */ "./src/common/navigate.ts"
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

        /*
         * @polymerMixin
         * @appliesMixin EventsMixin
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

              _createClass(_class, [
                {
                  key: "navigate",
                  value: function navigate() {
                    for (
                      var _len = arguments.length,
                        args = new Array(_len),
                        _key = 0;
                      _key < _len;
                      _key++
                    ) {
                      args[_key] = arguments[_key];
                    }

                    _common_navigate__WEBPACK_IMPORTED_MODULE_1__[
                      "navigate"
                    ].apply(void 0, [this].concat(args));
                  },
                },
              ]);

              return _class;
            })(superClass)
          );
        });

        /***/
      },

    /***/ "./src/panels/config/ha-config-section.js":
      /*!************************************************!*\
  !*** ./src/panels/config/ha-config-section.js ***!
  \************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
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
            '\n      <style include="iron-flex ha-style">\n        .content {\n          padding: 28px 20px 0;\n          max-width: 1040px;\n          margin: 0 auto;\n        }\n\n        .header {\n          @apply --paper-font-display1;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .together {\n          margin-top: 32px;\n        }\n\n        .intro {\n          @apply --paper-font-subhead;\n          width: 100%;\n          max-width: 400px;\n          margin-right: 40px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .panel {\n          margin-top: -24px;\n        }\n\n        .panel ::slotted(*) {\n          margin-top: 24px;\n          display: block;\n        }\n\n        .narrow.content {\n          max-width: 640px;\n        }\n        .narrow .together {\n          margin-top: 20px;\n        }\n        .narrow .header {\n          @apply --paper-font-headline;\n        }\n        .narrow .intro {\n          font-size: 14px;\n          padding-bottom: 20px;\n          margin-right: 0;\n          max-width: 500px;\n        }\n      </style>\n      <div class$="[[computeContentClasses(isWide)]]">\n        <div class="header"><slot name="header"></slot></div>\n        <div class$="[[computeClasses(isWide)]]">\n          <div class="intro"><slot name="introduction"></slot></div>\n          <div class="panel flex-auto"><slot></slot></div>\n        </div>\n      </div>\n    ',
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

        var HaConfigSection =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaConfigSection, _PolymerElement);

            function HaConfigSection() {
              _classCallCheck(this, HaConfigSection);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaConfigSection).apply(this, arguments)
              );
            }

            _createClass(
              HaConfigSection,
              [
                {
                  key: "computeContentClasses",
                  value: function computeContentClasses(isWide) {
                    var classes = "content ";
                    return isWide ? classes : classes + "narrow";
                  },
                },
                {
                  key: "computeClasses",
                  value: function computeClasses(isWide) {
                    var classes = "together layout ";
                    return (
                      classes + (isWide ? "horizontal" : "vertical narrow")
                    );
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
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
                      narrow: {
                        type: Boolean,
                      },
                      isWide: {
                        type: Boolean,
                        value: false,
                      },
                    };
                  },
                },
              ]
            );

            return HaConfigSection;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-config-section", HaConfigSection);

        /***/
      },

    /***/ "./src/panels/config/integrations/ha-ce-entities-card.js":
      /*!***************************************************************!*\
  !*** ./src/panels/config/integrations/ha-ce-entities-card.js ***!
  \***************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts"
        );
        /* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../data/entity_registry */ "./src/data/entity_registry.ts"
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
            '\n      <style>\n        ha-card {\n          flex: 1 0 100%;\n          padding-bottom: 8px;\n        }\n        paper-icon-item {\n          cursor: pointer;\n          padding-top: 4px;\n          padding-bottom: 4px;\n        }\n      </style>\n      <ha-card header="[[heading]]">\n        <template is="dom-repeat" items="[[entities]]" as="entity">\n          <paper-icon-item on-click="_openMoreInfo">\n            <state-badge\n              state-obj="[[_computeStateObj(entity, hass)]]"\n              slot="item-icon"\n            ></state-badge>\n            <paper-item-body>\n              <div class="name">[[_computeEntityName(entity, hass)]]</div>\n              <div class="secondary entity-id">[[entity.entity_id]]</div>\n            </paper-item-body>\n          </paper-icon-item>\n        </template>\n      </ha-card>\n    ',
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
         * @appliesMixin LocalizeMixIn
         * @appliesMixin EventsMixin
         */

        var HaCeEntitiesCard =
          /*#__PURE__*/
          (function(_LocalizeMixIn) {
            _inherits(HaCeEntitiesCard, _LocalizeMixIn);

            function HaCeEntitiesCard() {
              _classCallCheck(this, HaCeEntitiesCard);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaCeEntitiesCard).apply(this, arguments)
              );
            }

            _createClass(
              HaCeEntitiesCard,
              [
                {
                  key: "_computeStateObj",
                  value: function _computeStateObj(entity, hass) {
                    return hass.states[entity.entity_id];
                  },
                },
                {
                  key: "_computeEntityName",
                  value: function _computeEntityName(entity, hass) {
                    return (
                      Object(
                        _data_entity_registry__WEBPACK_IMPORTED_MODULE_9__[
                          "computeEntityRegistryName"
                        ]
                      )(hass, entity) ||
                      "(".concat(
                        this.localize(
                          "ui.panel.config.integrations.config_entry.entity_unavailable"
                        ),
                        ")"
                      )
                    );
                  },
                },
                {
                  key: "_openMoreInfo",
                  value: function _openMoreInfo(ev) {
                    this.fire("hass-more-info", {
                      entityId: ev.model.entity.entity_id,
                    });
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
                      heading: String,
                      entities: Array,
                      hass: Object,
                    };
                  },
                },
              ]
            );

            return HaCeEntitiesCard;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("ha-ce-entities-card", HaCeEntitiesCard);

        /***/
      },

    /***/ "./src/panels/config/integrations/ha-config-entries-dashboard.js":
      /*!***********************************************************************!*\
  !*** ./src/panels/config/integrations/ha-config-entries-dashboard.js ***!
  \***********************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js"
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_entity_ha_state_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../components/entity/ha-state-icon */ "./src/components/entity/ha-state-icon.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../dialogs/config-flow/show-dialog-config-flow */ "./src/dialogs/config-flow/show-dialog-config-flow.ts"
        );
        /* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../data/config_entries */ "./src/data/config_entries.ts"
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
            '\n      <style include="iron-flex ha-style">\n        ha-card {\n          overflow: hidden;\n        }\n        mwc-button {\n          top: 3px;\n          margin-right: -0.57em;\n        }\n        .config-entry-row {\n          display: flex;\n          padding: 0 16px;\n        }\n        ha-state-icon {\n          cursor: pointer;\n        }\n        .configured a {\n          color: var(--primary-text-color);\n          text-decoration: none;\n        }\n        paper-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n        }\n\n        paper-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        paper-fab[rtl] {\n          right: auto;\n          left: 16px;\n        }\n\n        paper-fab[rtl][is-wide] {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n      </style>\n\n      <hass-subpage\n        header="[[localize(\'ui.panel.config.integrations.caption\')]]"\n      >\n        <template is="dom-if" if="[[progress.length]]">\n          <ha-config-section>\n            <span slot="header"\n              >[[localize(\'ui.panel.config.integrations.discovered\')]]</span\n            >\n            <ha-card>\n              <template is="dom-repeat" items="[[progress]]">\n                <div class="config-entry-row">\n                  <paper-item-body>\n                    [[_computeActiveFlowTitle(localize, item)]]\n                  </paper-item-body>\n                  <mwc-button on-click="_continueFlow"\n                    >[[localize(\'ui.panel.config.integrations.configure\')]]</mwc-button\n                  >\n                </div>\n              </template>\n            </ha-card>\n          </ha-config-section>\n        </template>\n\n        <ha-config-section class="configured">\n          <span slot="header"\n            >[[localize(\'ui.panel.config.integrations.configured\')]]</span\n          >\n          <ha-card>\n            <template is="dom-if" if="[[!entries.length]]">\n              <div class="config-entry-row">\n                <paper-item-body two-line>\n                  <div>[[localize(\'ui.panel.config.integrations.none\')]]</div>\n                </paper-item-body>\n              </div>\n            </template>\n            <template is="dom-repeat" items="[[entries]]">\n              <a href="/config/integrations/[[item.entry_id]]">\n                <paper-item>\n                  <paper-item-body two-line>\n                    <div>\n                      [[_computeIntegrationTitle(localize, item.domain)]]:\n                      [[item.title]]\n                    </div>\n                    <div secondary>\n                      <template\n                        is="dom-repeat"\n                        items="[[_computeConfigEntryEntities(hass, item, entities)]]"\n                      >\n                        <span>\n                          <ha-state-icon\n                            state-obj="[[item]]"\n                            on-click="_handleMoreInfo"\n                          ></ha-state-icon>\n                          <paper-tooltip position="bottom"\n                            >[[_computeStateName(item)]]</paper-tooltip\n                          >\n                        </span>\n                      </template>\n                    </div>\n                  </paper-item-body>\n                  <ha-icon-next></ha-icon-next>\n                </paper-item>\n              </a>\n            </template>\n          </ha-card>\n        </ha-config-section>\n\n        <paper-fab\n          icon="hass:plus"\n          title="[[localize(\'ui.panel.config.integrations.new\')]]"\n          on-click="_createFlow"\n          is-wide$="[[isWide]]"\n          rtl$="[[rtl]]"\n        ></paper-fab>\n      </hass-subpage>\n    ',
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

        /*
         * @appliesMixin LocalizeMixin
         * @appliesMixin EventsMixin
         */

        var HaConfigManagerDashboard =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaConfigManagerDashboard, _LocalizeMixin);

            function HaConfigManagerDashboard() {
              _classCallCheck(this, HaConfigManagerDashboard);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaConfigManagerDashboard).apply(this, arguments)
              );
            }

            _createClass(
              HaConfigManagerDashboard,
              [
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(HaConfigManagerDashboard.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    Object(
                      _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__[
                        "loadConfigFlowDialog"
                      ]
                    )();
                  },
                },
                {
                  key: "_createFlow",
                  value: function _createFlow() {
                    var _this = this;

                    Object(
                      _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__[
                        "showConfigFlowDialog"
                      ]
                    )(this, {
                      dialogClosedCallback: function dialogClosedCallback() {
                        return _this.fire("hass-reload-entries");
                      },
                    });
                  },
                },
                {
                  key: "_continueFlow",
                  value: function _continueFlow(ev) {
                    var _this2 = this;

                    Object(
                      _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__[
                        "showConfigFlowDialog"
                      ]
                    )(this, {
                      continueFlowId: ev.model.item.flow_id,
                      dialogClosedCallback: function dialogClosedCallback() {
                        return _this2.fire("hass-reload-entries");
                      },
                    });
                  },
                },
                {
                  key: "_computeIntegrationTitle",
                  value: function _computeIntegrationTitle(
                    localize,
                    integration
                  ) {
                    return localize(
                      "component.".concat(integration, ".config.title")
                    );
                  },
                },
                {
                  key: "_computeActiveFlowTitle",
                  value: function _computeActiveFlowTitle(localize, flow) {
                    return Object(
                      _data_config_entries__WEBPACK_IMPORTED_MODULE_20__[
                        "localizeConfigFlowTitle"
                      ]
                    )(localize, flow);
                  },
                },
                {
                  key: "_computeConfigEntryEntities",
                  value: function _computeConfigEntryEntities(
                    hass,
                    configEntry,
                    entities
                  ) {
                    if (!entities) {
                      return [];
                    }

                    var states = [];
                    entities.forEach(function(entity) {
                      if (
                        entity.config_entry_id === configEntry.entry_id &&
                        entity.entity_id in hass.states
                      ) {
                        states.push(hass.states[entity.entity_id]);
                      }
                    });
                    return states;
                  },
                },
                {
                  key: "_computeStateName",
                  value: function _computeStateName(stateObj) {
                    return Object(
                      _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_18__[
                        "default"
                      ]
                    )(stateObj);
                  },
                },
                {
                  key: "_handleMoreInfo",
                  value: function _handleMoreInfo(ev) {
                    this.fire("hass-more-info", {
                      entityId: ev.model.item.entity_id,
                    });
                  },
                },
                {
                  key: "_computeRTL",
                  value: function _computeRTL(hass) {
                    return Object(
                      _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__[
                        "computeRTL"
                      ]
                    )(hass);
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      isWide: Boolean,

                      /**
                       * Existing entries.
                       */
                      entries: Array,

                      /**
                       * Entity Registry entries.
                       */
                      entities: Array,

                      /**
                       * Current flows that are in progress and have not been started by a user.
                       * For example, can be discovered devices that require more config.
                       */
                      progress: Array,
                      handlers: Array,
                      rtl: {
                        type: Boolean,
                        reflectToAttribute: true,
                        computed: "_computeRTL(hass)",
                      },
                    };
                  },
                },
              ]
            );

            return HaConfigManagerDashboard;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__[
                  "EventsMixin"
                ]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define(
          "ha-config-entries-dashboard",
          HaConfigManagerDashboard
        );

        /***/
      },

    /***/ "./src/panels/config/integrations/ha-config-entry-page.js":
      /*!****************************************************************!*\
  !*** ./src/panels/config/integrations/ha-config-entry-page.js ***!
  \****************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts"
        );
        /* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../common/string/compare */ "./src/common/string/compare.ts"
        );
        /* harmony import */ var _ha_device_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./ha-device-card */ "./src/panels/config/integrations/ha-device-card.js"
        );
        /* harmony import */ var _ha_ce_entities_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./ha-ce-entities-card */ "./src/panels/config/integrations/ha-ce-entities-card.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js"
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
            '\n      <style>\n        .content {\n          display: flex;\n          flex-wrap: wrap;\n          padding: 4px;\n          justify-content: center;\n        }\n        .card {\n          box-sizing: border-box;\n          display: flex;\n          flex: 1 0 300px;\n          min-width: 0;\n          max-width: 500px;\n          padding: 8px;\n        }\n      </style>\n      <hass-subpage header="[[configEntry.title]]">\n        <paper-icon-button\n          slot="toolbar-icon"\n          icon="hass:delete"\n          on-click="_removeEntry"\n        ></paper-icon-button>\n        <div class="content">\n          <template\n            is="dom-if"\n            if="[[_computeIsEmpty(_configEntryDevices, _noDeviceEntities)]]"\n          >\n            <p>\n              [[localize(\'ui.panel.config.integrations.config_entry.no_devices\')]]\n            </p>\n          </template>\n          <template is="dom-repeat" items="[[_configEntryDevices]]" as="device">\n            <ha-device-card\n              class="card"\n              hass="[[hass]]"\n              areas="[[areas]]"\n              devices="[[devices]]"\n              device="[[device]]"\n              entities="[[entities]]"\n              narrow="[[narrow]]"\n            ></ha-device-card>\n          </template>\n          <template is="dom-if" if="[[_noDeviceEntities.length]]">\n            <ha-ce-entities-card\n              class="card"\n              heading="[[localize(\'ui.panel.config.integrations.config_entry.no_device\')]]"\n              entities="[[_noDeviceEntities]]"\n              hass="[[hass]]"\n              narrow="[[narrow]]"\n            ></ha-ce-entities-card>\n          </template>\n        </div>\n      </hass-subpage>\n    ',
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

        var HaConfigEntryPage =
          /*#__PURE__*/
          (function(_NavigateMixin) {
            _inherits(HaConfigEntryPage, _NavigateMixin);

            function HaConfigEntryPage() {
              _classCallCheck(this, HaConfigEntryPage);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaConfigEntryPage).apply(this, arguments)
              );
            }

            _createClass(
              HaConfigEntryPage,
              [
                {
                  key: "_computeConfigEntryDevices",
                  value: function _computeConfigEntryDevices(
                    configEntry,
                    devices
                  ) {
                    if (!devices) return [];
                    return devices
                      .filter(function(device) {
                        return device.config_entries.includes(
                          configEntry.entry_id
                        );
                      })
                      .sort(function(dev1, dev2) {
                        return (
                          !!dev1.via_device_id - !!dev2.via_device_id ||
                          Object(
                            _common_string_compare__WEBPACK_IMPORTED_MODULE_4__[
                              "compare"
                            ]
                          )(dev1.name, dev2.name)
                        );
                      });
                  },
                },
                {
                  key: "_computeNoDeviceEntities",
                  value: function _computeNoDeviceEntities(
                    configEntry,
                    entities
                  ) {
                    if (!entities) return [];
                    return entities.filter(function(ent) {
                      return (
                        !ent.device_id &&
                        ent.config_entry_id === configEntry.entry_id
                      );
                    });
                  },
                },
                {
                  key: "_computeIsEmpty",
                  value: function _computeIsEmpty(
                    configEntryDevices,
                    noDeviceEntities
                  ) {
                    return (
                      configEntryDevices.length === 0 &&
                      noDeviceEntities.length === 0
                    );
                  },
                },
                {
                  key: "_removeEntry",
                  value: function _removeEntry() {
                    var _this = this;

                    if (
                      !confirm(
                        this.localize(
                          "ui.panel.config.integrations.config_entry.delete_confirm"
                        )
                      )
                    )
                      return;
                    var entryId = this.configEntry.entry_id;
                    this.hass
                      .callApi(
                        "delete",
                        "config/config_entries/entry/".concat(entryId)
                      )
                      .then(function(result) {
                        _this.fire("hass-reload-entries");

                        if (result.require_restart) {
                          alert(
                            _this.localize(
                              "ui.panel.config.integrations.config_entry.restart_confirm"
                            )
                          );
                        }

                        _this.navigate("/config/integrations/dashboard", true);
                      });
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      isWide: Boolean,
                      narrow: Boolean,
                      configEntry: {
                        type: Object,
                        value: null,
                      },
                      _configEntryDevices: {
                        type: Array,
                        computed:
                          "_computeConfigEntryDevices(configEntry, devices)",
                      },

                      /**
                       * All entity registry entries for this config entry that do not belong
                       * to a device.
                       */
                      _noDeviceEntities: {
                        type: Array,
                        computed:
                          "_computeNoDeviceEntities(configEntry, entities)",
                      },

                      /**
                       * Area registry entries
                       */
                      areas: Array,

                      /**
                       * Device registry entries
                       */
                      devices: Array,

                      /**
                       * Existing entries.
                       */
                      entries: Array,

                      /**
                       * Entity Registry entries.
                       */
                      entities: Array,
                    };
                  },
                },
              ]
            );

            return HaConfigEntryPage;
          })(
            Object(
              _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_9__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__["EventsMixin"]
              )(
                Object(
                  _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"]
                )(
                  _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
                    "PolymerElement"
                  ]
                )
              )
            )
          );

        customElements.define("ha-config-entry-page", HaConfigEntryPage);

        /***/
      },

    /***/ "./src/panels/config/integrations/ha-config-integrations.js":
      /*!******************************************************************!*\
  !*** ./src/panels/config/integrations/ha-config-integrations.js ***!
  \******************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js"
        );
        /* harmony import */ var _ha_config_entries_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./ha-config-entries-dashboard */ "./src/panels/config/integrations/ha-config-entries-dashboard.js"
        );
        /* harmony import */ var _ha_config_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./ha-config-entry-page */ "./src/panels/config/integrations/ha-config-entry-page.js"
        );
        /* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js"
        );
        /* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../common/string/compare */ "./src/common/string/compare.ts"
        );
        /* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../data/area_registry */ "./src/data/area_registry.ts"
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
            '\n      <app-route\n        route="[[route]]"\n        pattern="/:page"\n        data="{{_routeData}}"\n        tail="{{_routeTail}}"\n      ></app-route>\n\n      <template is="dom-if" if="[[_configEntry]]">\n        <ha-config-entry-page\n          hass="[[hass]]"\n          config-entry="[[_configEntry]]"\n          areas="[[_areas]]"\n          entries="[[_entries]]"\n          entities="[[_entities]]"\n          devices="[[_devices]]"\n          narrow="[[narrow]]"\n        ></ha-config-entry-page>\n      </template>\n      <template is="dom-if" if="[[!_configEntry]]">\n        <ha-config-entries-dashboard\n          hass="[[hass]]"\n          entries="[[_entries]]"\n          entities="[[_entities]]"\n          handlers="[[_handlers]]"\n          progress="[[_progress]]"\n        ></ha-config-entries-dashboard>\n      </template>\n    ',
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

        var HaConfigIntegrations =
          /*#__PURE__*/
          (function(_NavigateMixin) {
            _inherits(HaConfigIntegrations, _NavigateMixin);

            function HaConfigIntegrations() {
              _classCallCheck(this, HaConfigIntegrations);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaConfigIntegrations).apply(this, arguments)
              );
            }

            _createClass(
              HaConfigIntegrations,
              [
                {
                  key: "ready",
                  value: function ready() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(HaConfigIntegrations.prototype),
                      "ready",
                      this
                    ).call(this);

                    this.addEventListener("hass-reload-entries", function() {
                      return _this._loadData();
                    });
                  },
                },
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    var _this2 = this;

                    _get(
                      _getPrototypeOf(HaConfigIntegrations.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this._loadData();

                    this._unsubAreas = Object(
                      _data_area_registry__WEBPACK_IMPORTED_MODULE_9__[
                        "subscribeAreaRegistry"
                      ]
                    )(this.hass.connection, function(areas) {
                      _this2._areas = areas;
                    });
                    this.hass.connection
                      .subscribeEvents(function() {
                        _this2._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_3__[
                          "Debouncer"
                        ].debounce(
                          _this2._debouncer,
                          _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__[
                            "timeOut"
                          ].after(500),
                          function() {
                            return _this2._loadData();
                          }
                        );
                      }, "config_entry_discovered")
                      .then(function(unsub) {
                        _this2._unsubEvents = unsub;
                      });
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(HaConfigIntegrations.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    if (this._unsubEvents) this._unsubEvents();
                    if (this._unsubAreas) this._unsubAreas();
                  },
                },
                {
                  key: "_loadData",
                  value: function _loadData() {
                    var _this3 = this;

                    this.hass
                      .callApi("get", "config/config_entries/entry")
                      .then(function(entries) {
                        _this3._entries = entries.sort(function(conf1, conf2) {
                          return Object(
                            _common_string_compare__WEBPACK_IMPORTED_MODULE_8__[
                              "compare"
                            ]
                          )(conf1.title, conf2.title);
                        });
                      });
                    this.hass
                      .callApi("get", "config/config_entries/flow")
                      .then(function(progress) {
                        _this3._progress = progress;
                      });
                    this.hass
                      .callApi("get", "config/config_entries/flow_handlers")
                      .then(function(handlers) {
                        _this3._handlers = handlers;
                      });
                    this.hass
                      .callWS({
                        type: "config/entity_registry/list",
                      })
                      .then(function(entities) {
                        _this3._entities = entities;
                      });
                    this.hass
                      .callWS({
                        type: "config/device_registry/list",
                      })
                      .then(function(devices) {
                        _this3._devices = devices;
                      });
                  },
                },
                {
                  key: "_computeConfigEntry",
                  value: function _computeConfigEntry(routeData, entries) {
                    return (
                      !!entries &&
                      !!routeData &&
                      entries.find(function(ent) {
                        return ent.entry_id === routeData.page;
                      })
                    );
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      isWide: Boolean,
                      narrow: Boolean,
                      route: Object,
                      _configEntry: {
                        type: Object,
                        computed: "_computeConfigEntry(_routeData, _entries)",
                      },

                      /**
                       * Existing entries.
                       */
                      _entries: Array,

                      /**
                       * Entity Registry entries.
                       */
                      _entities: Array,

                      /**
                       * Device Registry entries.
                       */
                      _devices: Array,

                      /**
                       * Area Registry entries.
                       */
                      _areas: Array,

                      /**
                       * Current flows that are in progress and have not been started by a user.
                       * For example, can be discovered devices that require more config.
                       */
                      _progress: Array,
                      _handlers: Array,
                      _routeData: Object,
                      _routeTail: Object,
                    };
                  },
                },
              ]
            );

            return HaConfigIntegrations;
          })(
            Object(
              _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_7__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-config-integrations", HaConfigIntegrations);

        /***/
      },

    /***/ "./src/panels/config/integrations/ha-device-card.js":
      /*!**********************************************************!*\
  !*** ./src/panels/config/integrations/ha-device-card.js ***!
  \**********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts"
        );
        /* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../common/string/compare */ "./src/common/string/compare.ts"
        );
        /* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../data/device_registry */ "./src/data/device_registry.ts"
        );
        /* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../data/area_registry */ "./src/data/area_registry.ts"
        );
        /* harmony import */ var _show_dialog_device_registry_detail__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./show-dialog-device-registry-detail */ "./src/panels/config/integrations/show-dialog-device-registry-detail.ts"
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
            '\n      <style>\n        :host(:not([narrow])) .device-entities {\n          max-height: 225px;\n          overflow: auto;\n        }\n        ha-card {\n          flex: 1 0 100%;\n          padding-bottom: 10px;\n          min-width: 0;\n        }\n        .card-header {\n          display: flex;\n          justify-content: space-between;\n        }\n        .card-header .name {\n          width: 90%;\n        }\n        .device {\n          width: 30%;\n        }\n        .device .name {\n          font-weight: bold;\n        }\n        .device .model,\n        .device .manuf,\n        .device .area {\n          color: var(--secondary-text-color);\n        }\n        .area .extra-info .name {\n          color: var(--primary-text-color);\n        }\n        .extra-info {\n          margin-top: 8px;\n        }\n        paper-icon-item {\n          cursor: pointer;\n          padding-top: 4px;\n          padding-bottom: 4px;\n        }\n        .manuf,\n        .entity-id,\n        .area {\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <ha-card>\n        <div class="card-header">\n          <div class="name">[[_deviceName(device)]]</div>\n          <paper-icon-button\n            icon="hass:settings"\n            on-click="_gotoSettings"\n          ></paper-icon-button>\n        </div>\n        <div class="card-content">\n          <div class="info">\n            <div class="model">[[device.model]]</div>\n            <div class="manuf">\n              [[localize(\'ui.panel.config.integrations.config_entry.manuf\',\n              \'manufacturer\', device.manufacturer)]]\n            </div>\n            <template is="dom-if" if="[[device.area_id]]">\n              <div class="area">\n                <div class="extra-info">\n                  [[localize(\'ui.panel.config.integrations.device_registry.area\')]]\n                  <span class="name">{{_computeArea(areas, device)}}</span>\n                </div>\n              </div>\n            </template>\n          </div>\n          <template is="dom-if" if="[[device.via_device_id]]">\n            <div class="extra-info">\n              [[localize(\'ui.panel.config.integrations.config_entry.via\')]]\n              <span class="hub"\n                >[[_computeDeviceName(devices, device.via_device_id)]]</span\n              >\n            </div>\n          </template>\n          <template is="dom-if" if="[[device.sw_version]]">\n            <div class="extra-info">\n              [[localize(\'ui.panel.config.integrations.config_entry.firmware\',\n              \'version\', device.sw_version)]]\n            </div>\n          </template>\n        </div>\n\n        <div class="device-entities">\n          <template\n            is="dom-repeat"\n            items="[[_computeDeviceEntities(hass, device, entities)]]"\n            as="entity"\n          >\n            <paper-icon-item on-click="_openMoreInfo">\n              <state-badge\n                state-obj="[[_computeStateObj(entity, hass)]]"\n                slot="item-icon"\n              ></state-badge>\n              <paper-item-body>\n                <div class="name">[[_computeEntityName(entity, hass)]]</div>\n                <div class="secondary entity-id">[[entity.entity_id]]</div>\n              </paper-item-body>\n            </paper-icon-item>\n          </template>\n        </div>\n      </ha-card>\n    ',
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

        function computeEntityName(hass, entity) {
          if (entity.name) return entity.name;
          var state = hass.states[entity.entity_id];
          return state
            ? Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__[
                  "default"
                ]
              )(state)
            : null;
        }
        /*
         * @appliesMixin EventsMixin
         */

        var HaDeviceCard =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaDeviceCard, _EventsMixin);

            function HaDeviceCard() {
              _classCallCheck(this, HaDeviceCard);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaDeviceCard).apply(this, arguments)
              );
            }

            _createClass(
              HaDeviceCard,
              [
                {
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(HaDeviceCard.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    Object(
                      _show_dialog_device_registry_detail__WEBPACK_IMPORTED_MODULE_16__[
                        "loadDeviceRegistryDetailDialog"
                      ]
                    )();
                  },
                },
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(HaDeviceCard.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this._unsubAreas = Object(
                      _data_area_registry__WEBPACK_IMPORTED_MODULE_15__[
                        "subscribeAreaRegistry"
                      ]
                    )(this.hass.connection, function(areas) {
                      _this._areas = areas;
                    });
                    this._unsubDevices = Object(
                      _data_device_registry__WEBPACK_IMPORTED_MODULE_14__[
                        "subscribeDeviceRegistry"
                      ]
                    )(this.hass.connection, function(devices) {
                      _this.devices = devices;
                      _this.device = devices.find(function(device) {
                        return device.id === _this.device.id;
                      });
                    });
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(HaDeviceCard.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    if (this._unsubAreas) {
                      this._unsubAreas();
                    }

                    if (this._unsubDevices) {
                      this._unsubDevices();
                    }
                  },
                },
                {
                  key: "_computeArea",
                  value: function _computeArea(areas, device) {
                    if (!areas || !device || !device.area_id) {
                      return "No Area";
                    } // +1 because of "No Area" entry

                    return areas.find(function(area) {
                      return area.area_id === device.area_id;
                    }).name;
                  },
                },
                {
                  key: "_computeChildDevices",
                  value: function _computeChildDevices(device, devices) {
                    return devices
                      .filter(function(dev) {
                        return dev.via_device_id === device.id;
                      })
                      .sort(function(dev1, dev2) {
                        return Object(
                          _common_string_compare__WEBPACK_IMPORTED_MODULE_13__[
                            "compare"
                          ]
                        )(dev1.name, dev2.name);
                      });
                  },
                },
                {
                  key: "_computeDeviceEntities",
                  value: function _computeDeviceEntities(
                    hass,
                    device,
                    entities
                  ) {
                    return entities
                      .filter(function(entity) {
                        return entity.device_id === device.id;
                      })
                      .sort(function(ent1, ent2) {
                        return Object(
                          _common_string_compare__WEBPACK_IMPORTED_MODULE_13__[
                            "compare"
                          ]
                        )(computeEntityName(hass, ent1) || "zzz".concat(ent1.entity_id), computeEntityName(hass, ent2) || "zzz".concat(ent2.entity_id));
                      });
                  },
                },
                {
                  key: "_computeStateObj",
                  value: function _computeStateObj(entity, hass) {
                    return hass.states[entity.entity_id];
                  },
                },
                {
                  key: "_computeEntityName",
                  value: function _computeEntityName(entity, hass) {
                    return (
                      computeEntityName(hass, entity) ||
                      "(".concat(
                        this.localize(
                          "ui.panel.config.integrations.config_entry.entity_unavailable"
                        ),
                        ")"
                      )
                    );
                  },
                },
                {
                  key: "_deviceName",
                  value: function _deviceName(device) {
                    return device.name_by_user || device.name;
                  },
                },
                {
                  key: "_computeDeviceName",
                  value: function _computeDeviceName(devices, deviceId) {
                    var device = devices.find(function(dev) {
                      return dev.id === deviceId;
                    });
                    return device
                      ? this._deviceName(device)
                      : "(".concat(
                          this.localize(
                            "ui.panel.config.integrations.config_entry.device_unavailable"
                          ),
                          ")"
                        );
                  },
                },
                {
                  key: "_gotoSettings",
                  value: function _gotoSettings() {
                    var _this2 = this;

                    var device = this.device;
                    Object(
                      _show_dialog_device_registry_detail__WEBPACK_IMPORTED_MODULE_16__[
                        "showDeviceRegistryDetailDialog"
                      ]
                    )(this, {
                      device: device,
                      updateEntry: (function() {
                        var _updateEntry = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee(updates) {
                            return regeneratorRuntime.wrap(function _callee$(
                              _context
                            ) {
                              while (1) {
                                switch ((_context.prev = _context.next)) {
                                  case 0:
                                    _context.next = 2;
                                    return Object(
                                      _data_device_registry__WEBPACK_IMPORTED_MODULE_14__[
                                        "updateDeviceRegistryEntry"
                                      ]
                                    )(_this2.hass, device.id, updates);

                                  case 2:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            },
                            _callee);
                          })
                        );

                        function updateEntry(_x) {
                          return _updateEntry.apply(this, arguments);
                        }

                        return updateEntry;
                      })(),
                    });
                  },
                },
                {
                  key: "_openMoreInfo",
                  value: function _openMoreInfo(ev) {
                    this.fire("hass-more-info", {
                      entityId: ev.model.entity.entity_id,
                    });
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      device: Object,
                      devices: Array,
                      areas: Array,
                      entities: Array,
                      hass: Object,
                      narrow: {
                        type: Boolean,
                        reflectToAttribute: true,
                      },
                      _childDevices: {
                        type: Array,
                        computed: "_computeChildDevices(device, devices)",
                      },
                    };
                  },
                },
              ]
            );

            return HaDeviceCard;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"]
            )(
              Object(
                _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("ha-device-card", HaDeviceCard);

        /***/
      },

    /***/ "./src/panels/config/integrations/show-dialog-device-registry-detail.ts":
      /*!******************************************************************************!*\
  !*** ./src/panels/config/integrations/show-dialog-device-registry-detail.ts ***!
  \******************************************************************************/
      /*! exports provided: loadDeviceRegistryDetailDialog, showDeviceRegistryDetailDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadDeviceRegistryDetailDialog",
          function() {
            return loadDeviceRegistryDetailDialog;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showDeviceRegistryDetailDialog",
          function() {
            return showDeviceRegistryDetailDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        var loadDeviceRegistryDetailDialog = function loadDeviceRegistryDetailDialog() {
          return Promise.all(
            /*! import() | device-registry-detail-dialog */ [
              __webpack_require__.e(
                "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
              ),
              __webpack_require__.e("device-registry-detail-dialog"),
            ]
          ).then(
            __webpack_require__.bind(
              null,
              /*! ./dialog-device-registry-detail */ "./src/panels/config/integrations/dialog-device-registry-detail.ts"
            )
          );
        };
        var showDeviceRegistryDetailDialog = function showDeviceRegistryDetailDialog(
          element,
          deviceRegistryDetailParams
        ) {
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-dialog", {
            dialogTag: "dialog-device-registry-detail",
            dialogImport: loadDeviceRegistryDetailDialog,
            dialogParams: deviceRegistryDetailParams,
          });
        };

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWludGVncmF0aW9ucy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlsL2RlYm91bmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1zdGF0ZS1pY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24tbmV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hcmVhX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbmZpZ19lbnRyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RldmljZV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHlfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc2hvdy1kaWFsb2ctY29uZmlnLWZsb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9uYXZpZ2F0ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1jb25maWctc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9pbnRlZ3JhdGlvbnMvaGEtY2UtZW50aXRpZXMtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9pbnRlZ3JhdGlvbnMvaGEtY29uZmlnLWVudHJpZXMtZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2ludGVncmF0aW9ucy9oYS1jb25maWctZW50cnktcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9pbnRlZ3JhdGlvbnMvaGEtY29uZmlnLWludGVncmF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9pbnRlZ3JhdGlvbnMvaGEtZGV2aWNlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaW50ZWdyYXRpb25zL3Nob3ctZGlhbG9nLWRldmljZS1yZWdpc3RyeS1kZXRhaWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlckl0ZW1CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pdGVtLWJlaGF2aW9yLmpzJztcblxuLypcbmA8cGFwZXItaWNvbi1pdGVtPmAgaXMgYSBjb252ZW5pZW5jZSBlbGVtZW50IHRvIG1ha2UgYW4gaXRlbSB3aXRoIGljb24uIEl0IGlzIGFuXG5pbnRlcmFjdGl2ZSBsaXN0IGl0ZW0gd2l0aCBhIGZpeGVkLXdpZHRoIGljb24gYXJlYSwgYWNjb3JkaW5nIHRvIE1hdGVyaWFsXG5EZXNpZ24uIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSBpY29ucyBhcmUgb2YgdmFyeWluZyB3aWR0aHMsIGJ1dCB5b3Ugd2FudCB0aGUgaXRlbVxuYm9kaWVzIHRvIGxpbmUgdXAuIFVzZSB0aGlzIGxpa2UgYSBgPHBhcGVyLWl0ZW0+YC4gVGhlIGNoaWxkIG5vZGUgd2l0aCB0aGUgc2xvdFxubmFtZSBgaXRlbS1pY29uYCBpcyBwbGFjZWQgaW4gdGhlIGljb24gYXJlYS5cblxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJmYXZvcml0ZVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2lyb24taWNvbj5cbiAgICAgIEZhdm9yaXRlXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9kaXY+XG4gICAgICBBdmF0YXJcbiAgICA8L3BhcGVyLWljb24taXRlbT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiBhcmVhIHwgYDU2cHhgXG5gLS1wYXBlci1pdGVtLWljb25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaWNvbiBhcmVhIHwgYHt9YFxuYC0tcGFwZXItaWNvbi1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaWNvbi1pdGVtO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudC1pY29uIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG5cbiAgICAgICAgd2lkdGg6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi13aWR0aCwgNTZweCk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0taWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cImNvbnRlbnRJY29uXCIgY2xhc3M9XCJjb250ZW50LWljb25cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJpdGVtLWljb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWljb24taXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuVXNlIGA8cGFwZXItaXRlbS1ib2R5PmAgaW4gYSBgPHBhcGVyLWl0ZW0+YCBvciBgPHBhcGVyLWljb24taXRlbT5gIHRvIG1ha2UgdHdvLVxub3IgdGhyZWUtIGxpbmUgaXRlbXMuIEl0IGlzIGEgZmxleCBpdGVtIHRoYXQgaXMgYSB2ZXJ0aWNhbCBmbGV4Ym94LlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UaGUgY2hpbGQgZWxlbWVudHMgd2l0aCB0aGUgYHNlY29uZGFyeWAgYXR0cmlidXRlIGlzIGdpdmVuIHNlY29uZGFyeSB0ZXh0XG5zdHlsaW5nLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0d28tbGluZSBpdGVtIHwgYDcycHhgXG5gLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdGhyZWUtbGluZSBpdGVtIHwgYDg4cHhgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yYCB8IEZvcmVncm91bmQgY29sb3IgZm9yIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYC0tc2Vjb25kYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogbmVlZGVkIGZvciB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyB0byB3b3JrIG9uIGZmICovXG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1qdXN0aWZpZWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdHdvLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0LCA3MnB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RocmVlLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHQsIDg4cHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChbc2Vjb25kYXJ5XSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pdGVtLWJvZHknXG59KTtcbiIsIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPYmplY3RJZChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlT2JqZWN0SWQgZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nID0+XG4gIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG4iLCJleHBvcnQgY29uc3QgY29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEgPiBiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXNlSW5zZW5zaXRpdmVDb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PlxuICBjb21wYXJlKGEudG9Mb3dlckNhc2UoKSwgYi50b0xvd2VyQ2FzZSgpKTtcbiIsIi8vIEZyb206IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4vLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgRnVuY3Rpb24+KFxuICBmdW5jOiBULFxuICB3YWl0LFxuICBpbW1lZGlhdGUgPSBmYWxzZVxuKTogVCA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdGhpcy1hc3NpZ25tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9oYS1pY29uXCI7XG5pbXBvcnQgc3RhdGVJY29uIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L3N0YXRlX2ljb25cIjtcblxuY2xhc3MgSGFTdGF0ZUljb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtaWNvbiBpY29uPVwiW1tjb21wdXRlSWNvbihzdGF0ZU9iaildXVwiPjwvaGEtaWNvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlSWNvbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZUljb24oc3RhdGVPYmopO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXN0YXRlLWljb25cIiwgSGFTdGF0ZUljb24pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIYUljb24gfSBmcm9tIFwiLi9oYS1pY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBIYUljb25OZXh0IGV4dGVuZHMgSGFJY29uIHtcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaWNvbiA9XG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwibHRyXCJcbiAgICAgICAgPyBcImhhc3M6Y2hldnJvbi1yaWdodFwiXG4gICAgICAgIDogXCJoYXNzOmNoZXZyb24tbGVmdFwiO1xuXG4gICAgLy8gY2FsbGluZyBzdXBlciBhZnRlciBzZXR0aW5nIGljb24gdG8gaGF2ZSBpdCBjb25zaXN0ZW50bHkgc2hvdyB0aGUgaWNvbiAob3RoZXJ3aXNlIG5vdCBhbHdheXMgc2hvd24pXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvbi1uZXh0XCI6IEhhSWNvbk5leHQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvbi1uZXh0XCIsIEhhSWNvbk5leHQpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFyZWFSZWdpc3RyeUVudHJ5IHtcbiAgYXJlYV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPEFyZWFSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGFyZWFJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUFyZWFSZWdpc3RyeUVudHJ5ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGFyZWFJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9kZWxldGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEFyZWFSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uXG4gICAgLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2xpc3RcIixcbiAgICB9KVxuICAgIC50aGVuKChhcmVhcykgPT4gYXJlYXMuc29ydCgoZW50MSwgZW50MikgPT4gY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSkpKTtcblxuY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEFyZWFSZWdpc3RyeShjb25uKS50aGVuKChhcmVhcykgPT4gc3RvcmUuc2V0U3RhdGUoYXJlYXMsIHRydWUpKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiYXJlYV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUFyZWFSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChhcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEFyZWFSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2FyZWFSZWdpc3RyeVwiLFxuICAgIGZldGNoQXJlYVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFFbnRyeUZsb3dQcm9ncmVzc2VkRXZlbnQge1xuICB0eXBlOiBcImRhdGFfZW50cnlfZmxvd19wcm9ncmVzc2VkXCI7XG4gIGRhdGE6IHtcbiAgICBoYW5kbGVyOiBzdHJpbmc7XG4gICAgZmxvd19pZDogc3RyaW5nO1xuICAgIHJlZnJlc2g6IGJvb2xlYW47XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRW50cnkge1xuICBlbnRyeV9pZDogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc291cmNlOiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGNvbm5lY3Rpb25fY2xhc3M6IHN0cmluZztcbiAgc3VwcG9ydHNfb3B0aW9uczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZFNjaGVtYSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVmYXVsdD86IGFueTtcbiAgb3B0aW9uYWw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRmxvd1Byb2dyZXNzIHtcbiAgZmxvd19pZDogc3RyaW5nO1xuICBoYW5kbGVyOiBzdHJpbmc7XG4gIGNvbnRleHQ6IHtcbiAgICB0aXRsZV9wbGFjZWhvbGRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0Zsb3dTdGVwRm9ybSB7XG4gIHR5cGU6IFwiZm9ybVwiO1xuICBmbG93X2lkOiBzdHJpbmc7XG4gIGhhbmRsZXI6IHN0cmluZztcbiAgc3RlcF9pZDogc3RyaW5nO1xuICBkYXRhX3NjaGVtYTogRmllbGRTY2hlbWFbXTtcbiAgZXJyb3JzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBkZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRmxvd1N0ZXBFeHRlcm5hbCB7XG4gIHR5cGU6IFwiZXh0ZXJuYWxcIjtcbiAgZmxvd19pZDogc3RyaW5nO1xuICBoYW5kbGVyOiBzdHJpbmc7XG4gIHN0ZXBfaWQ6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdGbG93U3RlcENyZWF0ZUVudHJ5IHtcbiAgdHlwZTogXCJjcmVhdGVfZW50cnlcIjtcbiAgdmVyc2lvbjogbnVtYmVyO1xuICBmbG93X2lkOiBzdHJpbmc7XG4gIGhhbmRsZXI6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgLy8gQ29uZmlnIGVudHJ5IElEXG4gIHJlc3VsdDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRmxvd1N0ZXBBYm9ydCB7XG4gIHR5cGU6IFwiYWJvcnRcIjtcbiAgZmxvd19pZDogc3RyaW5nO1xuICBoYW5kbGVyOiBzdHJpbmc7XG4gIHJlYXNvbjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbmV4cG9ydCB0eXBlIENvbmZpZ0Zsb3dTdGVwID1cbiAgfCBDb25maWdGbG93U3RlcEZvcm1cbiAgfCBDb25maWdGbG93U3RlcEV4dGVybmFsXG4gIHwgQ29uZmlnRmxvd1N0ZXBDcmVhdGVFbnRyeVxuICB8IENvbmZpZ0Zsb3dTdGVwQWJvcnQ7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb25maWdGbG93ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGhhbmRsZXI6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPENvbmZpZ0Zsb3dTdGVwPihcIlBPU1RcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZmxvd1wiLCB7XG4gICAgaGFuZGxlcixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbmZpZ0Zsb3cgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZmxvd0lkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaTxDb25maWdGbG93U3RlcD4oXCJHRVRcIiwgYGNvbmZpZy9jb25maWdfZW50cmllcy9mbG93LyR7Zmxvd0lkfWApO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ29uZmlnRmxvd1N0ZXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGZsb3dJZDogc3RyaW5nLFxuICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4pID0+XG4gIGhhc3MuY2FsbEFwaTxDb25maWdGbG93U3RlcD4oXG4gICAgXCJQT1NUXCIsXG4gICAgYGNvbmZpZy9jb25maWdfZW50cmllcy9mbG93LyR7Zmxvd0lkfWAsXG4gICAgZGF0YVxuICApO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlnRmxvdyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBmbG93SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvY29uZmlnX2VudHJpZXMvZmxvdy8ke2Zsb3dJZH1gKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0Zsb3dzSW5Qcm9ncmVzcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGk8Q29uZmlnRmxvd1Byb2dyZXNzW10+KFwiR0VUXCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3dcIik7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25maWdGbG93SGFuZGxlcnMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsQXBpPHN0cmluZ1tdPihcIkdFVFwiLCBcImNvbmZpZy9jb25maWdfZW50cmllcy9mbG93X2hhbmRsZXJzXCIpO1xuXG5jb25zdCBmZXRjaENvbmZpZ0Zsb3dJblByb2dyZXNzID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3NVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBkZWJvdW5jZShcbiAgICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MoY29ubikudGhlbigoZmxvd3MpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoZmxvd3MsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImNvbmZpZ19lbnRyeV9kaXNjb3ZlcmVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBvbkNoYW5nZTogKGZsb3dzOiBDb25maWdGbG93UHJvZ3Jlc3NbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPENvbmZpZ0Zsb3dQcm9ncmVzc1tdPihcbiAgICBcIl9jb25maWdGbG93UHJvZ3Jlc3NcIixcbiAgICBmZXRjaENvbmZpZ0Zsb3dJblByb2dyZXNzLFxuICAgIHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzVXBkYXRlcyxcbiAgICBoYXNzLmNvbm5lY3Rpb24sXG4gICAgb25DaGFuZ2VcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0VudHJpZXMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsQXBpPENvbmZpZ0VudHJ5W10+KFwiR0VUXCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2VudHJ5XCIpO1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemVDb25maWdGbG93VGl0bGUgPSAoXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGZsb3c6IENvbmZpZ0Zsb3dQcm9ncmVzc1xuKSA9PiB7XG4gIGNvbnN0IHBsYWNlaG9sZGVycyA9IGZsb3cuY29udGV4dC50aXRsZV9wbGFjZWhvbGRlcnMgfHwge307XG4gIGNvbnN0IHBsYWNlaG9sZGVyS2V5cyA9IE9iamVjdC5rZXlzKHBsYWNlaG9sZGVycyk7XG4gIGlmIChwbGFjZWhvbGRlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKGBjb21wb25lbnQuJHtmbG93LmhhbmRsZXJ9LmNvbmZpZy50aXRsZWApO1xuICB9XG4gIGNvbnN0IGFyZ3M6IHN0cmluZ1tdID0gW107XG4gIHBsYWNlaG9sZGVyS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBhcmdzLnB1c2goa2V5KTtcbiAgICBhcmdzLnB1c2gocGxhY2Vob2xkZXJzW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIGxvY2FsaXplKGBjb21wb25lbnQuJHtmbG93LmhhbmRsZXJ9LmNvbmZpZy5mbG93X3RpdGxlYCwgLi4uYXJncyk7XG59O1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUmVnaXN0cnlFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyaWVzOiBzdHJpbmdbXTtcbiAgY29ubmVjdGlvbnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcbiAgbW9kZWw/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN3X3ZlcnNpb24/OiBzdHJpbmc7XG4gIHZpYV9kZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyB7XG4gIGFyZWFfaWQ/OiBzdHJpbmcgfCBudWxsO1xuICBuYW1lX2J5X3VzZXI/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8RGV2aWNlUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5jb25zdCBmZXRjaERldmljZVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9kZXZpY2VfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoRGV2aWNlUmVnaXN0cnkoY29ubikudGhlbigoZGV2aWNlcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShkZXZpY2VzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJkZXZpY2VfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChkZXZpY2VzOiBEZXZpY2VSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxEZXZpY2VSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2RyXCIsXG4gICAgZmV0Y2hEZXZpY2VSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5IHtcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcGxhdGZvcm06IHN0cmluZztcbiAgY29uZmlnX2VudHJ5X2lkPzogc3RyaW5nO1xuICBkZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGRpc2FibGVkX2J5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmcgfCBudWxsO1xuICBuZXdfZW50aXR5X2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRyeTogRW50aXR5UmVnaXN0cnlFbnRyeVxuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGlmIChlbnRyeS5uYW1lKSB7XG4gICAgcmV0dXJuIGVudHJ5Lm5hbWU7XG4gIH1cbiAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tlbnRyeS5lbnRpdHlfaWRdO1xuICByZXR1cm4gc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zPlxuKTogUHJvbWlzZTxFbnRpdHlSZWdpc3RyeUVudHJ5PiA9PlxuICBoYXNzLmNhbGxXUzxFbnRpdHlSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvcmVtb3ZlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRW50aXR5UmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hFbnRpdHlSZWdpc3RyeShjb25uKS50aGVuKChlbnRpdGllcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShlbnRpdGllcywgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiZW50aXR5X3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEVudGl0eVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZW50aXR5UmVnaXN0cnlcIixcbiAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFDb25maWdGbG93UGFyYW1zIHtcbiAgY29udGludWVGbG93SWQ/OiBzdHJpbmc7XG4gIGRpYWxvZ0Nsb3NlZENhbGxiYWNrOiAocGFyYW1zOiB7IGZsb3dGaW5pc2hlZDogYm9vbGVhbiB9KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZENvbmZpZ0Zsb3dEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJkaWFsb2ctY29uZmlnLWZsb3dcIiAqLyBcIi4vZGlhbG9nLWNvbmZpZy1mbG93XCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpZ0Zsb3dEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IEhhQ29uZmlnRmxvd1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWNvbmZpZy1mbG93XCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkQ29uZmlnRmxvd0RpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuXG4vKlxuICogQHBvbHltZXJNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgbmF2aWdhdGUoLi4uYXJncykge1xuICAgICAgICBuYXZpZ2F0ZSh0aGlzLCAuLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmNsYXNzIEhhQ29uZmlnU2VjdGlvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAyOHB4IDIwcHggMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtZGlzcGxheTE7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCA6OnNsb3R0ZWQoKikge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAubmFycm93LmNvbnRlbnQge1xuICAgICAgICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmludHJvIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+PHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyb1wiPjxzbG90IG5hbWU9XCJpbnRyb2R1Y3Rpb25cIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGZsZXgtYXV0b1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIG5hcnJvdzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgfSxcblxuICAgICAgaXNXaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwiY29udGVudCBcIjtcblxuICAgIHJldHVybiBpc1dpZGUgPyBjbGFzc2VzIDogY2xhc3NlcyArIFwibmFycm93XCI7XG4gIH1cblxuICBjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwidG9nZXRoZXIgbGF5b3V0IFwiO1xuXG4gICAgcmV0dXJuIGNsYXNzZXMgKyAoaXNXaWRlID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsIG5hcnJvd1wiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctc2VjdGlvblwiLCBIYUNvbmZpZ1NlY3Rpb24pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peEluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWJhZGdlXCI7XG5pbXBvcnQgeyBjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4SW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFDZUVudGl0aWVzQ2FyZCBleHRlbmRzIExvY2FsaXplTWl4SW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIGZsZXg6IDEgMCAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiW1toZWFkaW5nXV1cIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tlbnRpdGllc11dXCIgYXM9XCJlbnRpdHlcIj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1pdGVtIG9uLWNsaWNrPVwiX29wZW5Nb3JlSW5mb1wiPlxuICAgICAgICAgICAgPHN0YXRlLWJhZGdlXG4gICAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbX2NvbXB1dGVTdGF0ZU9iaihlbnRpdHksIGhhc3MpXV1cIlxuICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgID48L3N0YXRlLWJhZGdlPlxuICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5bW19jb21wdXRlRW50aXR5TmFtZShlbnRpdHksIGhhc3MpXV08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeSBlbnRpdHktaWRcIj5bW2VudGl0eS5lbnRpdHlfaWRdXTwvZGl2PlxuICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGluZzogU3RyaW5nLFxuICAgICAgZW50aXRpZXM6IEFycmF5LFxuICAgICAgaGFzczogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBfY29tcHV0ZVN0YXRlT2JqKGVudGl0eSwgaGFzcykge1xuICAgIHJldHVybiBoYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXTtcbiAgfVxuXG4gIF9jb21wdXRlRW50aXR5TmFtZShlbnRpdHksIGhhc3MpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY29tcHV0ZUVudGl0eVJlZ2lzdHJ5TmFtZShoYXNzLCBlbnRpdHkpIHx8XG4gICAgICBgKCR7dGhpcy5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5lbnRpdHlfdW5hdmFpbGFibGVcIlxuICAgICAgKX0pYFxuICAgICk7XG4gIH1cblxuICBfb3Blbk1vcmVJbmZvKGV2KSB7XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogZXYubW9kZWwuZW50aXR5LmVudGl0eV9pZCB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jZS1lbnRpdGllcy1jYXJkXCIsIEhhQ2VFbnRpdGllc0NhcmQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvb2x0aXAvcGFwZXItdG9vbHRpcFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWZhYi9wYXBlci1mYWJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtc3RhdGUtaWNvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1pY29uLW5leHRcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHtcbiAgbG9hZENvbmZpZ0Zsb3dEaWFsb2csXG4gIHNob3dDb25maWdGbG93RGlhbG9nLFxufSBmcm9tIFwiLi4vLi4vLi4vZGlhbG9ncy9jb25maWctZmxvdy9zaG93LWRpYWxvZy1jb25maWctZmxvd1wiO1xuaW1wb3J0IHsgbG9jYWxpemVDb25maWdGbG93VGl0bGUgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ29uZmlnTWFuYWdlckRhc2hib2FyZCBleHRlbmRzIExvY2FsaXplTWl4aW4oXG4gIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KVxuKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTAuNTdlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29uZmlnLWVudHJ5LXJvdyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtc3RhdGUtaWNvbiB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb25maWd1cmVkIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1mYWIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWZhYltpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZmFiW3J0bF0ge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1mYWJbcnRsXVtpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxoYXNzLXN1YnBhZ2VcbiAgICAgICAgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jYXB0aW9uJyldXVwiXG4gICAgICA+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1twcm9ncmVzcy5sZW5ndGhdXVwiPlxuICAgICAgICAgIDxoYS1jb25maWctc2VjdGlvbj5cbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5kaXNjb3ZlcmVkJyldXTwvc3BhblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbcHJvZ3Jlc3NdXVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWctZW50cnktcm93XCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICBbW19jb21wdXRlQWN0aXZlRmxvd1RpdGxlKGxvY2FsaXplLCBpdGVtKV1dXG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2NvbnRpbnVlRmxvd1wiXG4gICAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ3VyZScpXV08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBjbGFzcz1cImNvbmZpZ3VyZWRcIj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCJcbiAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ3VyZWQnKV1dPC9zcGFuXG4gICAgICAgICAgPlxuICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFlbnRyaWVzLmxlbmd0aF1dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWctZW50cnktcm93XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5ub25lJyldXTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2VudHJpZXNdXVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9pbnRlZ3JhdGlvbnMvW1tpdGVtLmVudHJ5X2lkXV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgW1tfY29tcHV0ZUludGVncmF0aW9uVGl0bGUobG9jYWxpemUsIGl0ZW0uZG9tYWluKV1dOlxuICAgICAgICAgICAgICAgICAgICAgIFtbaXRlbS50aXRsZV1dXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzPVwiZG9tLXJlcGVhdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz1cIltbX2NvbXB1dGVDb25maWdFbnRyeUVudGl0aWVzKGhhc3MsIGl0ZW0sIGVudGl0aWVzKV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhLXN0YXRlLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW2l0ZW1dXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfaGFuZGxlTW9yZUluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9oYS1zdGF0ZS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItdG9vbHRpcCBwb3NpdGlvbj1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPltbX2NvbXB1dGVTdGF0ZU5hbWUoaXRlbSldXTwvcGFwZXItdG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgIDxoYS1pY29uLW5leHQ+PC9oYS1pY29uLW5leHQ+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cblxuICAgICAgICA8cGFwZXItZmFiXG4gICAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgICAgdGl0bGU9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLm5ldycpXV1cIlxuICAgICAgICAgIG9uLWNsaWNrPVwiX2NyZWF0ZUZsb3dcIlxuICAgICAgICAgIGlzLXdpZGUkPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgICAgcnRsJD1cIltbcnRsXV1cIlxuICAgICAgICA+PC9wYXBlci1mYWI+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG5cbiAgICAgIC8qKlxuICAgICAgICogRXhpc3RpbmcgZW50cmllcy5cbiAgICAgICAqL1xuICAgICAgZW50cmllczogQXJyYXksXG5cbiAgICAgIC8qKlxuICAgICAgICogRW50aXR5IFJlZ2lzdHJ5IGVudHJpZXMuXG4gICAgICAgKi9cbiAgICAgIGVudGl0aWVzOiBBcnJheSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDdXJyZW50IGZsb3dzIHRoYXQgYXJlIGluIHByb2dyZXNzIGFuZCBoYXZlIG5vdCBiZWVuIHN0YXJ0ZWQgYnkgYSB1c2VyLlxuICAgICAgICogRm9yIGV4YW1wbGUsIGNhbiBiZSBkaXNjb3ZlcmVkIGRldmljZXMgdGhhdCByZXF1aXJlIG1vcmUgY29uZmlnLlxuICAgICAgICovXG4gICAgICBwcm9ncmVzczogQXJyYXksXG5cbiAgICAgIGhhbmRsZXJzOiBBcnJheSxcblxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgbG9hZENvbmZpZ0Zsb3dEaWFsb2coKTtcbiAgfVxuXG4gIF9jcmVhdGVGbG93KCkge1xuICAgIHNob3dDb25maWdGbG93RGlhbG9nKHRoaXMsIHtcbiAgICAgIGRpYWxvZ0Nsb3NlZENhbGxiYWNrOiAoKSA9PiB0aGlzLmZpcmUoXCJoYXNzLXJlbG9hZC1lbnRyaWVzXCIpLFxuICAgIH0pO1xuICB9XG5cbiAgX2NvbnRpbnVlRmxvdyhldikge1xuICAgIHNob3dDb25maWdGbG93RGlhbG9nKHRoaXMsIHtcbiAgICAgIGNvbnRpbnVlRmxvd0lkOiBldi5tb2RlbC5pdGVtLmZsb3dfaWQsXG4gICAgICBkaWFsb2dDbG9zZWRDYWxsYmFjazogKCkgPT4gdGhpcy5maXJlKFwiaGFzcy1yZWxvYWQtZW50cmllc1wiKSxcbiAgICB9KTtcbiAgfVxuXG4gIF9jb21wdXRlSW50ZWdyYXRpb25UaXRsZShsb2NhbGl6ZSwgaW50ZWdyYXRpb24pIHtcbiAgICByZXR1cm4gbG9jYWxpemUoYGNvbXBvbmVudC4ke2ludGVncmF0aW9ufS5jb25maWcudGl0bGVgKTtcbiAgfVxuXG4gIF9jb21wdXRlQWN0aXZlRmxvd1RpdGxlKGxvY2FsaXplLCBmbG93KSB7XG4gICAgcmV0dXJuIGxvY2FsaXplQ29uZmlnRmxvd1RpdGxlKGxvY2FsaXplLCBmbG93KTtcbiAgfVxuXG4gIF9jb21wdXRlQ29uZmlnRW50cnlFbnRpdGllcyhoYXNzLCBjb25maWdFbnRyeSwgZW50aXRpZXMpIHtcbiAgICBpZiAoIWVudGl0aWVzKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHN0YXRlcyA9IFtdO1xuICAgIGVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRpdHkuY29uZmlnX2VudHJ5X2lkID09PSBjb25maWdFbnRyeS5lbnRyeV9pZCAmJlxuICAgICAgICBlbnRpdHkuZW50aXR5X2lkIGluIGhhc3Muc3RhdGVzXG4gICAgICApIHtcbiAgICAgICAgc3RhdGVzLnB1c2goaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdGF0ZXM7XG4gIH1cblxuICBfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIF9oYW5kbGVNb3JlSW5mbyhldikge1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IGV2Lm1vZGVsLml0ZW0uZW50aXR5X2lkIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1lbnRyaWVzLWRhc2hib2FyZFwiLCBIYUNvbmZpZ01hbmFnZXJEYXNoYm9hcmQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5cbmltcG9ydCBcIi4vaGEtZGV2aWNlLWNhcmRcIjtcbmltcG9ydCBcIi4vaGEtY2UtZW50aXRpZXMtY2FyZFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IE5hdmlnYXRlTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9uYXZpZ2F0ZS1taXhpblwiO1xuXG5jbGFzcyBIYUNvbmZpZ0VudHJ5UGFnZSBleHRlbmRzIE5hdmlnYXRlTWl4aW4oXG4gIEV2ZW50c01peGluKExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpKVxuKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4OiAxIDAgMzAwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9XCJbW2NvbmZpZ0VudHJ5LnRpdGxlXV1cIj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgc2xvdD1cInRvb2xiYXItaWNvblwiXG4gICAgICAgICAgaWNvbj1cImhhc3M6ZGVsZXRlXCJcbiAgICAgICAgICBvbi1jbGljaz1cIl9yZW1vdmVFbnRyeVwiXG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgaWY9XCJbW19jb21wdXRlSXNFbXB0eShfY29uZmlnRW50cnlEZXZpY2VzLCBfbm9EZXZpY2VFbnRpdGllcyldXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5Lm5vX2RldmljZXMnKV1dXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW19jb25maWdFbnRyeURldmljZXNdXVwiIGFzPVwiZGV2aWNlXCI+XG4gICAgICAgICAgICA8aGEtZGV2aWNlLWNhcmRcbiAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkXCJcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgYXJlYXM9XCJbW2FyZWFzXV1cIlxuICAgICAgICAgICAgICBkZXZpY2VzPVwiW1tkZXZpY2VzXV1cIlxuICAgICAgICAgICAgICBkZXZpY2U9XCJbW2RldmljZV1dXCJcbiAgICAgICAgICAgICAgZW50aXRpZXM9XCJbW2VudGl0aWVzXV1cIlxuICAgICAgICAgICAgICBuYXJyb3c9XCJbW25hcnJvd11dXCJcbiAgICAgICAgICAgID48L2hhLWRldmljZS1jYXJkPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19ub0RldmljZUVudGl0aWVzLmxlbmd0aF1dXCI+XG4gICAgICAgICAgICA8aGEtY2UtZW50aXRpZXMtY2FyZFxuICAgICAgICAgICAgICBjbGFzcz1cImNhcmRcIlxuICAgICAgICAgICAgICBoZWFkaW5nPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkubm9fZGV2aWNlJyldXVwiXG4gICAgICAgICAgICAgIGVudGl0aWVzPVwiW1tfbm9EZXZpY2VFbnRpdGllc11dXCJcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbmFycm93PVwiW1tuYXJyb3ddXVwiXG4gICAgICAgICAgICA+PC9oYS1jZS1lbnRpdGllcy1jYXJkPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuICAgICAgbmFycm93OiBCb29sZWFuLFxuICAgICAgY29uZmlnRW50cnk6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIF9jb25maWdFbnRyeURldmljZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQ29uZmlnRW50cnlEZXZpY2VzKGNvbmZpZ0VudHJ5LCBkZXZpY2VzKVwiLFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbGwgZW50aXR5IHJlZ2lzdHJ5IGVudHJpZXMgZm9yIHRoaXMgY29uZmlnIGVudHJ5IHRoYXQgZG8gbm90IGJlbG9uZ1xuICAgICAgICogdG8gYSBkZXZpY2UuXG4gICAgICAgKi9cbiAgICAgIF9ub0RldmljZUVudGl0aWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZU5vRGV2aWNlRW50aXRpZXMoY29uZmlnRW50cnksIGVudGl0aWVzKVwiLFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBcmVhIHJlZ2lzdHJ5IGVudHJpZXNcbiAgICAgICAqL1xuICAgICAgYXJlYXM6IEFycmF5LFxuXG4gICAgICAvKipcbiAgICAgICAqIERldmljZSByZWdpc3RyeSBlbnRyaWVzXG4gICAgICAgKi9cbiAgICAgIGRldmljZXM6IEFycmF5LFxuXG4gICAgICAvKipcbiAgICAgICAqIEV4aXN0aW5nIGVudHJpZXMuXG4gICAgICAgKi9cbiAgICAgIGVudHJpZXM6IEFycmF5LFxuXG4gICAgICAvKipcbiAgICAgICAqIEVudGl0eSBSZWdpc3RyeSBlbnRyaWVzLlxuICAgICAgICovXG4gICAgICBlbnRpdGllczogQXJyYXksXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlQ29uZmlnRW50cnlEZXZpY2VzKGNvbmZpZ0VudHJ5LCBkZXZpY2VzKSB7XG4gICAgaWYgKCFkZXZpY2VzKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGRldmljZXNcbiAgICAgIC5maWx0ZXIoKGRldmljZSkgPT4gZGV2aWNlLmNvbmZpZ19lbnRyaWVzLmluY2x1ZGVzKGNvbmZpZ0VudHJ5LmVudHJ5X2lkKSlcbiAgICAgIC5zb3J0KFxuICAgICAgICAoZGV2MSwgZGV2MikgPT5cbiAgICAgICAgICAhIWRldjEudmlhX2RldmljZV9pZCAtICEhZGV2Mi52aWFfZGV2aWNlX2lkIHx8XG4gICAgICAgICAgY29tcGFyZShkZXYxLm5hbWUsIGRldjIubmFtZSlcbiAgICAgICk7XG4gIH1cblxuICBfY29tcHV0ZU5vRGV2aWNlRW50aXRpZXMoY29uZmlnRW50cnksIGVudGl0aWVzKSB7XG4gICAgaWYgKCFlbnRpdGllcykgcmV0dXJuIFtdO1xuICAgIHJldHVybiBlbnRpdGllcy5maWx0ZXIoXG4gICAgICAoZW50KSA9PiAhZW50LmRldmljZV9pZCAmJiBlbnQuY29uZmlnX2VudHJ5X2lkID09PSBjb25maWdFbnRyeS5lbnRyeV9pZFxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZUlzRW1wdHkoY29uZmlnRW50cnlEZXZpY2VzLCBub0RldmljZUVudGl0aWVzKSB7XG4gICAgcmV0dXJuIGNvbmZpZ0VudHJ5RGV2aWNlcy5sZW5ndGggPT09IDAgJiYgbm9EZXZpY2VFbnRpdGllcy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBfcmVtb3ZlRW50cnkoKSB7XG4gICAgaWYgKFxuICAgICAgIWNvbmZpcm0oXG4gICAgICAgIHRoaXMubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5kZWxldGVfY29uZmlybVwiXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zdCBlbnRyeUlkID0gdGhpcy5jb25maWdFbnRyeS5lbnRyeV9pZDtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXCJkZWxldGVcIiwgYGNvbmZpZy9jb25maWdfZW50cmllcy9lbnRyeS8ke2VudHJ5SWR9YClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5maXJlKFwiaGFzcy1yZWxvYWQtZW50cmllc1wiKTtcbiAgICAgICAgaWYgKHJlc3VsdC5yZXF1aXJlX3Jlc3RhcnQpIHtcbiAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgIHRoaXMubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkucmVzdGFydF9jb25maXJtXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmF2aWdhdGUoXCIvY29uZmlnL2ludGVncmF0aW9ucy9kYXNoYm9hcmRcIiwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctZW50cnktcGFnZVwiLCBIYUNvbmZpZ0VudHJ5UGFnZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtcm91dGUvYXBwLXJvdXRlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlXCI7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5cbmltcG9ydCBcIi4vaGEtY29uZmlnLWVudHJpZXMtZGFzaGJvYXJkXCI7XG5pbXBvcnQgXCIuL2hhLWNvbmZpZy1lbnRyeS1wYWdlXCI7XG5pbXBvcnQgTmF2aWdhdGVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL25hdmlnYXRlLW1peGluXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvYXJlYV9yZWdpc3RyeVwiO1xuXG5jbGFzcyBIYUNvbmZpZ0ludGVncmF0aW9ucyBleHRlbmRzIE5hdmlnYXRlTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxhcHAtcm91dGVcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBwYXR0ZXJuPVwiLzpwYWdlXCJcbiAgICAgICAgZGF0YT1cInt7X3JvdXRlRGF0YX19XCJcbiAgICAgICAgdGFpbD1cInt7X3JvdXRlVGFpbH19XCJcbiAgICAgID48L2FwcC1yb3V0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jb25maWdFbnRyeV1dXCI+XG4gICAgICAgIDxoYS1jb25maWctZW50cnktcGFnZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgY29uZmlnLWVudHJ5PVwiW1tfY29uZmlnRW50cnldXVwiXG4gICAgICAgICAgYXJlYXM9XCJbW19hcmVhc11dXCJcbiAgICAgICAgICBlbnRyaWVzPVwiW1tfZW50cmllc11dXCJcbiAgICAgICAgICBlbnRpdGllcz1cIltbX2VudGl0aWVzXV1cIlxuICAgICAgICAgIGRldmljZXM9XCJbW19kZXZpY2VzXV1cIlxuICAgICAgICAgIG5hcnJvdz1cIltbbmFycm93XV1cIlxuICAgICAgICA+PC9oYS1jb25maWctZW50cnktcGFnZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9jb25maWdFbnRyeV1dXCI+XG4gICAgICAgIDxoYS1jb25maWctZW50cmllcy1kYXNoYm9hcmRcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIGVudHJpZXM9XCJbW19lbnRyaWVzXV1cIlxuICAgICAgICAgIGVudGl0aWVzPVwiW1tfZW50aXRpZXNdXVwiXG4gICAgICAgICAgaGFuZGxlcnM9XCJbW19oYW5kbGVyc11dXCJcbiAgICAgICAgICBwcm9ncmVzcz1cIltbX3Byb2dyZXNzXV1cIlxuICAgICAgICA+PC9oYS1jb25maWctZW50cmllcy1kYXNoYm9hcmQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcbiAgICAgIHJvdXRlOiBPYmplY3QsXG5cbiAgICAgIF9jb25maWdFbnRyeToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQ29uZmlnRW50cnkoX3JvdXRlRGF0YSwgX2VudHJpZXMpXCIsXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEV4aXN0aW5nIGVudHJpZXMuXG4gICAgICAgKi9cbiAgICAgIF9lbnRyaWVzOiBBcnJheSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFbnRpdHkgUmVnaXN0cnkgZW50cmllcy5cbiAgICAgICAqL1xuICAgICAgX2VudGl0aWVzOiBBcnJheSxcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXZpY2UgUmVnaXN0cnkgZW50cmllcy5cbiAgICAgICAqL1xuICAgICAgX2RldmljZXM6IEFycmF5LFxuXG4gICAgICAvKipcbiAgICAgICAqIEFyZWEgUmVnaXN0cnkgZW50cmllcy5cbiAgICAgICAqL1xuICAgICAgX2FyZWFzOiBBcnJheSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDdXJyZW50IGZsb3dzIHRoYXQgYXJlIGluIHByb2dyZXNzIGFuZCBoYXZlIG5vdCBiZWVuIHN0YXJ0ZWQgYnkgYSB1c2VyLlxuICAgICAgICogRm9yIGV4YW1wbGUsIGNhbiBiZSBkaXNjb3ZlcmVkIGRldmljZXMgdGhhdCByZXF1aXJlIG1vcmUgY29uZmlnLlxuICAgICAgICovXG4gICAgICBfcHJvZ3Jlc3M6IEFycmF5LFxuXG4gICAgICBfaGFuZGxlcnM6IEFycmF5LFxuXG4gICAgICBfcm91dGVEYXRhOiBPYmplY3QsXG4gICAgICBfcm91dGVUYWlsOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaGFzcy1yZWxvYWQtZW50cmllc1wiLCAoKSA9PiB0aGlzLl9sb2FkRGF0YSgpKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fbG9hZERhdGEoKTtcbiAgICB0aGlzLl91bnN1YkFyZWFzID0gc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5KHRoaXMuaGFzcy5jb25uZWN0aW9uLCAoYXJlYXMpID0+IHtcbiAgICAgIHRoaXMuX2FyZWFzID0gYXJlYXM7XG4gICAgfSk7XG5cbiAgICB0aGlzLmhhc3MuY29ubmVjdGlvblxuICAgICAgLnN1YnNjcmliZUV2ZW50cygoKSA9PiB7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlciA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgICAgICB0aGlzLl9kZWJvdW5jZXIsXG4gICAgICAgICAgdGltZU91dC5hZnRlcig1MDApLFxuICAgICAgICAgICgpID0+IHRoaXMuX2xvYWREYXRhKClcbiAgICAgICAgKTtcbiAgICAgIH0sIFwiY29uZmlnX2VudHJ5X2Rpc2NvdmVyZWRcIilcbiAgICAgIC50aGVuKCh1bnN1YikgPT4ge1xuICAgICAgICB0aGlzLl91bnN1YkV2ZW50cyA9IHVuc3ViO1xuICAgICAgfSk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl91bnN1YkV2ZW50cykgdGhpcy5fdW5zdWJFdmVudHMoKTtcbiAgICBpZiAodGhpcy5fdW5zdWJBcmVhcykgdGhpcy5fdW5zdWJBcmVhcygpO1xuICB9XG5cbiAgX2xvYWREYXRhKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsQXBpKFwiZ2V0XCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2VudHJ5XCIpLnRoZW4oKGVudHJpZXMpID0+IHtcbiAgICAgIHRoaXMuX2VudHJpZXMgPSBlbnRyaWVzLnNvcnQoKGNvbmYxLCBjb25mMikgPT5cbiAgICAgICAgY29tcGFyZShjb25mMS50aXRsZSwgY29uZjIudGl0bGUpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5oYXNzLmNhbGxBcGkoXCJnZXRcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZmxvd1wiKS50aGVuKChwcm9ncmVzcykgPT4ge1xuICAgICAgdGhpcy5fcHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICB9KTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXCJnZXRcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZmxvd19oYW5kbGVyc1wiKVxuICAgICAgLnRoZW4oKGhhbmRsZXJzKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxXUyh7IHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9saXN0XCIgfSlcbiAgICAgIC50aGVuKChlbnRpdGllcykgPT4ge1xuICAgICAgICB0aGlzLl9lbnRpdGllcyA9IGVudGl0aWVzO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsV1MoeyB0eXBlOiBcImNvbmZpZy9kZXZpY2VfcmVnaXN0cnkvbGlzdFwiIH0pXG4gICAgICAudGhlbigoZGV2aWNlcykgPT4ge1xuICAgICAgICB0aGlzLl9kZXZpY2VzID0gZGV2aWNlcztcbiAgICAgIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVDb25maWdFbnRyeShyb3V0ZURhdGEsIGVudHJpZXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgISFlbnRyaWVzICYmXG4gICAgICAhIXJvdXRlRGF0YSAmJlxuICAgICAgZW50cmllcy5maW5kKChlbnQpID0+IGVudC5lbnRyeV9pZCA9PT0gcm91dGVEYXRhLnBhZ2UpXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctaW50ZWdyYXRpb25zXCIsIEhhQ29uZmlnSW50ZWdyYXRpb25zKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWJhZGdlXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IHtcbiAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnksXG4gIHVwZGF0ZURldmljZVJlZ2lzdHJ5RW50cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvYXJlYV9yZWdpc3RyeVwiO1xuXG5pbXBvcnQge1xuICBzaG93RGV2aWNlUmVnaXN0cnlEZXRhaWxEaWFsb2csXG4gIGxvYWREZXZpY2VSZWdpc3RyeURldGFpbERpYWxvZyxcbn0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctZGV2aWNlLXJlZ2lzdHJ5LWRldGFpbFwiO1xuXG5mdW5jdGlvbiBjb21wdXRlRW50aXR5TmFtZShoYXNzLCBlbnRpdHkpIHtcbiAgaWYgKGVudGl0eS5uYW1lKSByZXR1cm4gZW50aXR5Lm5hbWU7XG4gIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF07XG4gIHJldHVybiBzdGF0ZSA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGUpIDogbnVsbDtcbn1cblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFEZXZpY2VDYXJkIGV4dGVuZHMgRXZlbnRzTWl4aW4oTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3QoOm5vdChbbmFycm93XSkpIC5kZXZpY2UtZW50aXRpZXMge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIyNXB4O1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIGZsZXg6IDEgMCAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWhlYWRlciAubmFtZSB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgfVxuICAgICAgICAuZGV2aWNlIHtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB9XG4gICAgICAgIC5kZXZpY2UgLm5hbWUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5kZXZpY2UgLm1vZGVsLFxuICAgICAgICAuZGV2aWNlIC5tYW51ZixcbiAgICAgICAgLmRldmljZSAuYXJlYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAuYXJlYSAuZXh0cmEtaW5mbyAubmFtZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLmV4dHJhLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1hbnVmLFxuICAgICAgICAuZW50aXR5LWlkLFxuICAgICAgICAuYXJlYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1jYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPltbX2RldmljZU5hbWUoZGV2aWNlKV1dPC9kaXY+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpzZXR0aW5nc1wiXG4gICAgICAgICAgICBvbi1jbGljaz1cIl9nb3RvU2V0dGluZ3NcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kZWxcIj5bW2RldmljZS5tb2RlbF1dPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFudWZcIj5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkubWFudWYnLFxuICAgICAgICAgICAgICAnbWFudWZhY3R1cmVyJywgZGV2aWNlLm1hbnVmYWN0dXJlcildXVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZGV2aWNlLmFyZWFfaWRdXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJlYVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHRyYS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmRldmljZV9yZWdpc3RyeS5hcmVhJyldXVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tfY29tcHV0ZUFyZWEoYXJlYXMsIGRldmljZSl9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tkZXZpY2UudmlhX2RldmljZV9pZF1dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtaW5mb1wiPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS52aWEnKV1dXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaHViXCJcbiAgICAgICAgICAgICAgICA+W1tfY29tcHV0ZURldmljZU5hbWUoZGV2aWNlcywgZGV2aWNlLnZpYV9kZXZpY2VfaWQpXV08L3NwYW5cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZGV2aWNlLnN3X3ZlcnNpb25dXVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLWluZm9cIj5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkuZmlybXdhcmUnLFxuICAgICAgICAgICAgICAndmVyc2lvbicsIGRldmljZS5zd192ZXJzaW9uKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLWVudGl0aWVzXCI+XG4gICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgaXRlbXM9XCJbW19jb21wdXRlRGV2aWNlRW50aXRpZXMoaGFzcywgZGV2aWNlLCBlbnRpdGllcyldXVwiXG4gICAgICAgICAgICBhcz1cImVudGl0eVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbSBvbi1jbGljaz1cIl9vcGVuTW9yZUluZm9cIj5cbiAgICAgICAgICAgICAgPHN0YXRlLWJhZGdlXG4gICAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tfY29tcHV0ZVN0YXRlT2JqKGVudGl0eSwgaGFzcyldXVwiXG4gICAgICAgICAgICAgICAgc2xvdD1cIml0ZW0taWNvblwiXG4gICAgICAgICAgICAgID48L3N0YXRlLWJhZGdlPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+W1tfY29tcHV0ZUVudGl0eU5hbWUoZW50aXR5LCBoYXNzKV1dPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeSBlbnRpdHktaWRcIj5bW2VudGl0eS5lbnRpdHlfaWRdXTwvZGl2PlxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRldmljZTogT2JqZWN0LFxuICAgICAgZGV2aWNlczogQXJyYXksXG4gICAgICBhcmVhczogQXJyYXksXG4gICAgICBlbnRpdGllczogQXJyYXksXG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBuYXJyb3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIF9jaGlsZERldmljZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQ2hpbGREZXZpY2VzKGRldmljZSwgZGV2aWNlcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBsb2FkRGV2aWNlUmVnaXN0cnlEZXRhaWxEaWFsb2coKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fdW5zdWJBcmVhcyA9IHN1YnNjcmliZUFyZWFSZWdpc3RyeSh0aGlzLmhhc3MuY29ubmVjdGlvbiwgKGFyZWFzKSA9PiB7XG4gICAgICB0aGlzLl9hcmVhcyA9IGFyZWFzO1xuICAgIH0pO1xuICAgIHRoaXMuX3Vuc3ViRGV2aWNlcyA9IHN1YnNjcmliZURldmljZVJlZ2lzdHJ5KFxuICAgICAgdGhpcy5oYXNzLmNvbm5lY3Rpb24sXG4gICAgICAoZGV2aWNlcykgPT4ge1xuICAgICAgICB0aGlzLmRldmljZXMgPSBkZXZpY2VzO1xuICAgICAgICB0aGlzLmRldmljZSA9IGRldmljZXMuZmluZCgoZGV2aWNlKSA9PiBkZXZpY2UuaWQgPT09IHRoaXMuZGV2aWNlLmlkKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fdW5zdWJBcmVhcykge1xuICAgICAgdGhpcy5fdW5zdWJBcmVhcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdW5zdWJEZXZpY2VzKSB7XG4gICAgICB0aGlzLl91bnN1YkRldmljZXMoKTtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZUFyZWEoYXJlYXMsIGRldmljZSkge1xuICAgIGlmICghYXJlYXMgfHwgIWRldmljZSB8fCAhZGV2aWNlLmFyZWFfaWQpIHtcbiAgICAgIHJldHVybiBcIk5vIEFyZWFcIjtcbiAgICB9XG4gICAgLy8gKzEgYmVjYXVzZSBvZiBcIk5vIEFyZWFcIiBlbnRyeVxuICAgIHJldHVybiBhcmVhcy5maW5kKChhcmVhKSA9PiBhcmVhLmFyZWFfaWQgPT09IGRldmljZS5hcmVhX2lkKS5uYW1lO1xuICB9XG5cbiAgX2NvbXB1dGVDaGlsZERldmljZXMoZGV2aWNlLCBkZXZpY2VzKSB7XG4gICAgcmV0dXJuIGRldmljZXNcbiAgICAgIC5maWx0ZXIoKGRldikgPT4gZGV2LnZpYV9kZXZpY2VfaWQgPT09IGRldmljZS5pZClcbiAgICAgIC5zb3J0KChkZXYxLCBkZXYyKSA9PiBjb21wYXJlKGRldjEubmFtZSwgZGV2Mi5uYW1lKSk7XG4gIH1cblxuICBfY29tcHV0ZURldmljZUVudGl0aWVzKGhhc3MsIGRldmljZSwgZW50aXRpZXMpIHtcbiAgICByZXR1cm4gZW50aXRpZXNcbiAgICAgIC5maWx0ZXIoKGVudGl0eSkgPT4gZW50aXR5LmRldmljZV9pZCA9PT0gZGV2aWNlLmlkKVxuICAgICAgLnNvcnQoKGVudDEsIGVudDIpID0+XG4gICAgICAgIGNvbXBhcmUoXG4gICAgICAgICAgY29tcHV0ZUVudGl0eU5hbWUoaGFzcywgZW50MSkgfHwgYHp6eiR7ZW50MS5lbnRpdHlfaWR9YCxcbiAgICAgICAgICBjb21wdXRlRW50aXR5TmFtZShoYXNzLCBlbnQyKSB8fCBgenp6JHtlbnQyLmVudGl0eV9pZH1gXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICBfY29tcHV0ZVN0YXRlT2JqKGVudGl0eSwgaGFzcykge1xuICAgIHJldHVybiBoYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXTtcbiAgfVxuXG4gIF9jb21wdXRlRW50aXR5TmFtZShlbnRpdHksIGhhc3MpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY29tcHV0ZUVudGl0eU5hbWUoaGFzcywgZW50aXR5KSB8fFxuICAgICAgYCgke3RoaXMubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkuZW50aXR5X3VuYXZhaWxhYmxlXCJcbiAgICAgICl9KWBcbiAgICApO1xuICB9XG5cbiAgX2RldmljZU5hbWUoZGV2aWNlKSB7XG4gICAgcmV0dXJuIGRldmljZS5uYW1lX2J5X3VzZXIgfHwgZGV2aWNlLm5hbWU7XG4gIH1cblxuICBfY29tcHV0ZURldmljZU5hbWUoZGV2aWNlcywgZGV2aWNlSWQpIHtcbiAgICBjb25zdCBkZXZpY2UgPSBkZXZpY2VzLmZpbmQoKGRldikgPT4gZGV2LmlkID09PSBkZXZpY2VJZCk7XG4gICAgcmV0dXJuIGRldmljZVxuICAgICAgPyB0aGlzLl9kZXZpY2VOYW1lKGRldmljZSlcbiAgICAgIDogYCgke3RoaXMubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5kZXZpY2VfdW5hdmFpbGFibGVcIlxuICAgICAgICApfSlgO1xuICB9XG5cbiAgX2dvdG9TZXR0aW5ncygpIHtcbiAgICBjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZTtcbiAgICBzaG93RGV2aWNlUmVnaXN0cnlEZXRhaWxEaWFsb2codGhpcywge1xuICAgICAgZGV2aWNlLFxuICAgICAgdXBkYXRlRW50cnk6IGFzeW5jICh1cGRhdGVzKSA9PiB7XG4gICAgICAgIGF3YWl0IHVwZGF0ZURldmljZVJlZ2lzdHJ5RW50cnkodGhpcy5oYXNzLCBkZXZpY2UuaWQsIHVwZGF0ZXMpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIF9vcGVuTW9yZUluZm8oZXYpIHtcbiAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiBldi5tb2RlbC5lbnRpdHkuZW50aXR5X2lkIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWRldmljZS1jYXJkXCIsIEhhRGV2aWNlQ2FyZCk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQge1xuICBEZXZpY2VSZWdpc3RyeUVudHJ5LFxuICBEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUmVnaXN0cnlEZXRhaWxEaWFsb2dQYXJhbXMge1xuICBkZXZpY2U6IERldmljZVJlZ2lzdHJ5RW50cnk7XG4gIHVwZGF0ZUVudHJ5OiAoXG4gICAgdXBkYXRlczogUGFydGlhbDxEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbiAgKSA9PiBQcm9taXNlPHVua25vd24+O1xufVxuXG5leHBvcnQgY29uc3QgbG9hZERldmljZVJlZ2lzdHJ5RGV0YWlsRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGV2aWNlLXJlZ2lzdHJ5LWRldGFpbC1kaWFsb2dcIiAqLyBcIi4vZGlhbG9nLWRldmljZS1yZWdpc3RyeS1kZXRhaWxcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93RGV2aWNlUmVnaXN0cnlEZXRhaWxEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkZXZpY2VSZWdpc3RyeURldGFpbFBhcmFtczogRGV2aWNlUmVnaXN0cnlEZXRhaWxEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1kZXZpY2UtcmVnaXN0cnktZGV0YWlsXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkRGV2aWNlUmVnaXN0cnlEZXRhaWxEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiBkZXZpY2VSZWdpc3RyeURldGFpbFBhcmFtcyxcbiAgfSk7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQTJCQTtBQUNBO0FBN0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBbUNBO0FBcENBOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTs7O0FBaEJBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7Ozs7QUFiQTtBQUNBO0FBbUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQVRBO0FBQ0E7QUFEQTtBQUFBO0FBa0JBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQVdBO0FBQUE7QUFLQTtBQURBO0FBSkE7QUFTQTtBQUFBO0FBTUE7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFDQTtBQUtBO0FBQUE7QUFHQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFDQTtBQVVBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFrRkE7QUFBQTtBQUVBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBREE7QUFEQTtBQUNBO0FBSUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFDQTtBQVlBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBb0JBO0FBQUE7QUFNQTtBQUNBO0FBRkE7QUFMQTtBQUNBO0FBVUE7QUFBQTtBQUVBO0FBREE7QUFEQTtBQUNBO0FBSUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFDQTtBQVlBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFnQkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFNQTtBQUNBO0FBRkE7QUFMQTtBQVdBO0FBQUE7QUFLQTtBQUNBO0FBRkE7QUFKQTtBQUNBO0FBUUE7QUFBQTtBQUVBO0FBREE7QUFEQTtBQUNBO0FBSUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFDQTtBQVlBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBLHMrQ0FDQTtBQURBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQStFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQXhGQTtBQUNBO0FBMERBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQWNBOzs7O0FBN0VBO0FBQ0E7QUEyRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQXJEQTtBQUNBO0FBMkJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7OztBQXJDQTtBQUNBO0FBd0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztBQTZKQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUE5TUE7QUFDQTtBQXdIQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBdEJBO0FBNEJBOzs7O0FBM0pBO0FBQ0E7QUFtTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblBBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQTJHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFTQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUF2SkE7QUFDQTtBQXVEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQXpDQTtBQTJDQTs7OztBQXpHQTtBQUNBO0FBNEpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBOEVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUVBOzs7QUFoSkE7QUFDQTtBQTZCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQXhDQTtBQTBDQTs7OztBQTVFQTtBQUNBO0FBbUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFnSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBS0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRkE7QUFNQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBM05BO0FBQ0E7QUEwR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBZUE7Ozs7QUE5SEE7QUFDQTtBQThOQTs7Ozs7Ozs7Ozs7O0FDblFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUFBLHNaQUNBO0FBREE7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
