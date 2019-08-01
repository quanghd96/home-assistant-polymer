(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-entity-registry"],
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

    /***/ "./node_modules/@polymer/paper-item/paper-item-behavior.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-behavior.js ***!
  \*****************************************************************/
      /*! exports provided: PaperItemBehaviorImpl, PaperItemBehavior */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperItemBehaviorImpl",
          function() {
            return PaperItemBehaviorImpl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperItemBehavior",
          function() {
            return PaperItemBehavior;
          }
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js"
        );
        /* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js"
        );
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
`PaperItemBehavior` is a convenience behavior shared by <paper-item> and
<paper-icon-item> that manages the shared control states and attributes of
the items.
*/

        /** @polymerBehavior PaperItemBehavior */

        var PaperItemBehaviorImpl = {
          hostAttributes: {
            role: "option",
            tabindex: "0",
          },
        };
        /** @polymerBehavior */

        var PaperItemBehavior = [
          _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__[
            "IronButtonState"
          ],
          _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__[
            "IronControlState"
          ],
          PaperItemBehaviorImpl,
        ];

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

    /***/ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-shared-styles.js ***!
  \**********************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-styles/color.js */ "./src/util/empty.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js"
        );
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

        var $_documentContainer = document.createElement("template");
        $_documentContainer.setAttribute("style", "display: none;");
        $_documentContainer.innerHTML =
          "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>";
        document.head.appendChild($_documentContainer.content);

        /***/
      },

    /***/ "./src/common/entity/binary_sensor_icon.ts":
      /*!*************************************************!*\
  !*** ./src/common/entity/binary_sensor_icon.ts ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return binarySensorIcon;
          }
        );
        /** Return an icon representing a binary sensor state. */
        function binarySensorIcon(state) {
          var activated = state.state && state.state === "off";

          switch (state.attributes.device_class) {
            case "battery":
              return activated ? "hass:battery" : "hass:battery-outline";

            case "cold":
              return activated ? "hass:thermometer" : "hass:snowflake";

            case "connectivity":
              return activated
                ? "hass:server-network-off"
                : "hass:server-network";

            case "door":
              return activated ? "hass:door-closed" : "hass:door-open";

            case "garage_door":
              return activated ? "hass:garage" : "hass:garage-open";

            case "gas":
            case "power":
            case "problem":
            case "safety":
            case "smoke":
              return activated ? "hass:shield-check" : "hass:alert";

            case "heat":
              return activated ? "hass:thermometer" : "hass:fire";

            case "light":
              return activated ? "hass:brightness-5" : "hass:brightness-7";

            case "lock":
              return activated ? "hass:lock" : "hass:lock-open";

            case "moisture":
              return activated ? "hass:water-off" : "hass:water";

            case "motion":
              return activated ? "hass:walk" : "hass:run";

            case "occupancy":
              return activated ? "hass:home-outline" : "hass:home";

            case "opening":
              return activated ? "hass:square" : "hass:square-outline";

            case "plug":
              return activated ? "hass:power-plug-off" : "hass:power-plug";

            case "presence":
              return activated ? "hass:home-outline" : "hass:home";

            case "sound":
              return activated ? "hass:music-note-off" : "hass:music-note";

            case "vibration":
              return activated ? "hass:crop-portrait" : "hass:vibrate";

            case "window":
              return activated ? "hass:window-closed" : "hass:window-open";

            default:
              return activated
                ? "hass:radiobox-blank"
                : "hass:checkbox-marked-circle";
          }
        }

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

    /***/ "./src/common/entity/cover_icon.ts":
      /*!*****************************************!*\
  !*** ./src/common/entity/cover_icon.ts ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return coverIcon;
          }
        );
        /* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./domain_icon */ "./src/common/entity/domain_icon.ts"
        );
        /** Return an icon representing a cover state. */

        function coverIcon(state) {
          var open = state.state !== "closed";

          switch (state.attributes.device_class) {
            case "garage":
              return open ? "hass:garage-open" : "hass:garage";

            default:
              return Object(
                _domain_icon__WEBPACK_IMPORTED_MODULE_0__["default"]
              )("cover", state.state);
          }
        }

        /***/
      },

    /***/ "./src/common/entity/domain_icon.ts":
      /*!******************************************!*\
  !*** ./src/common/entity/domain_icon.ts ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return domainIcon;
          }
        );
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../const */ "./src/common/const.ts"
        );
        /**
         * Return the icon to be used for a domain.
         *
         * Optionally pass in a state to influence the domain icon.
         */

        var fixedIcons = {
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
        function domainIcon(domain, state) {
          if (domain in fixedIcons) {
            return fixedIcons[domain];
          }

          switch (domain) {
            case "alarm_control_panel":
              switch (state) {
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
              return state && state === "off"
                ? "hass:radiobox-blank"
                : "hass:checkbox-marked-circle";

            case "cover":
              return state === "closed"
                ? "hass:window-closed"
                : "hass:window-open";

            case "lock":
              return state && state === "unlocked"
                ? "hass:lock-open"
                : "hass:lock";

            case "media_player":
              return state && state !== "off" && state !== "idle"
                ? "hass:cast-connected"
                : "hass:cast";

            case "zwave":
              switch (state) {
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
              // tslint:disable-next-line
              console.warn(
                "Unable to find icon for domain " + domain + " (" + state + ")"
              );
              return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DOMAIN_ICON"];
          }
        }

        /***/
      },

    /***/ "./src/common/entity/input_dateteime_icon.ts":
      /*!***************************************************!*\
  !*** ./src/common/entity/input_dateteime_icon.ts ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return inputDateTimeIcon;
          }
        );
        /* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./domain_icon */ "./src/common/entity/domain_icon.ts"
        );
        /** Return an icon representing an input datetime state. */

        function inputDateTimeIcon(state) {
          if (!state.attributes.has_date) {
            return "hass:clock";
          }

          if (!state.attributes.has_time) {
            return "hass:calendar";
          }

          return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_0__["default"])(
            "input_datetime"
          );
        }

        /***/
      },

    /***/ "./src/common/entity/sensor_icon.ts":
      /*!******************************************!*\
  !*** ./src/common/entity/sensor_icon.ts ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return sensorIcon;
          }
        );
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../const */ "./src/common/const.ts"
        );
        /* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./domain_icon */ "./src/common/entity/domain_icon.ts"
        );
        /** Return an icon representing a sensor state. */

        var fixedDeviceClassIcons = {
          humidity: "hass:water-percent",
          illuminance: "hass:brightness-5",
          temperature: "hass:thermometer",
          pressure: "hass:gauge",
          power: "hass:flash",
          signal_strength: "hass:wifi",
        };
        function sensorIcon(state) {
          var dclass = state.attributes.device_class;

          if (dclass && dclass in fixedDeviceClassIcons) {
            return fixedDeviceClassIcons[dclass];
          }

          if (dclass === "battery") {
            var battery = Number(state.state);

            if (isNaN(battery)) {
              return "hass:battery-unknown";
            }

            var batteryRound = Math.round(battery / 10) * 10;

            if (batteryRound >= 100) {
              return "hass:battery";
            }

            if (batteryRound <= 0) {
              return "hass:battery-alert";
            } // Will return one of the following icons: (listed so extractor picks up)
            // hass:battery-10
            // hass:battery-20
            // hass:battery-30
            // hass:battery-40
            // hass:battery-50
            // hass:battery-60
            // hass:battery-70
            // hass:battery-80
            // hass:battery-90
            // We obscure 'hass' in iconname so this name does not get picked up

            return "hass".concat(":battery-", batteryRound);
          }

          var unit = state.attributes.unit_of_measurement;

          if (
            unit === _const__WEBPACK_IMPORTED_MODULE_0__["UNIT_C"] ||
            unit === _const__WEBPACK_IMPORTED_MODULE_0__["UNIT_F"]
          ) {
            return "hass:thermometer";
          }

          return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_1__["default"])(
            "sensor"
          );
        }

        /***/
      },

    /***/ "./src/common/entity/state_icon.ts":
      /*!*****************************************!*\
  !*** ./src/common/entity/state_icon.ts ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return stateIcon;
          }
        );
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../const */ "./src/common/const.ts"
        );
        /* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./compute_domain */ "./src/common/entity/compute_domain.ts"
        );
        /* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./domain_icon */ "./src/common/entity/domain_icon.ts"
        );
        /* harmony import */ var _binary_sensor_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./binary_sensor_icon */ "./src/common/entity/binary_sensor_icon.ts"
        );
        /* harmony import */ var _cover_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./cover_icon */ "./src/common/entity/cover_icon.ts"
        );
        /* harmony import */ var _sensor_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./sensor_icon */ "./src/common/entity/sensor_icon.ts"
        );
        /* harmony import */ var _input_dateteime_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./input_dateteime_icon */ "./src/common/entity/input_dateteime_icon.ts"
        );
        /** Return an icon representing a state. */

        var domainIcons = {
          binary_sensor:
            _binary_sensor_icon__WEBPACK_IMPORTED_MODULE_3__["default"],
          cover: _cover_icon__WEBPACK_IMPORTED_MODULE_4__["default"],
          sensor: _sensor_icon__WEBPACK_IMPORTED_MODULE_5__["default"],
          input_datetime:
            _input_dateteime_icon__WEBPACK_IMPORTED_MODULE_6__["default"],
        };
        function stateIcon(state) {
          if (!state) {
            return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DOMAIN_ICON"];
          }

          if (state.attributes.icon) {
            return state.attributes.icon;
          }

          var domain = Object(
            _compute_domain__WEBPACK_IMPORTED_MODULE_1__["default"]
          )(state.entity_id);

          if (domain in domainIcons) {
            return domainIcons[domain](state);
          }

          return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_2__["default"])(
            domain,
            state.state
          );
        }

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

    /***/ "./src/panels/config/entity_registry/ha-config-entity-registry.ts":
      /*!************************************************************************!*\
  !*** ./src/panels/config/entity_registry/ha-config-entity-registry.ts ***!
  \************************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../data/entity_registry */ "./src/data/entity_registry.ts"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-icon */ "./src/components/ha-icon.ts"
        );
        /* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts"
        );
        /* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts"
        );
        /* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _show_dialog_entity_registry_detail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./show-dialog-entity-registry-detail */ "./src/panels/config/entity_registry/show-dialog-entity-registry-detail.ts"
        );
        /* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../common/string/compare */ "./src/common/string/compare.ts"
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

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            "\n      a {\n        color: var(--primary-color);\n      }\n      ha-card {\n        direction: ltr;\n        overflow: hidden;\n      }\n      paper-icon-item {\n        cursor: pointer;\n      }\n      ha-icon {\n        margin-left: 8px;\n      }\n    ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
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

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n                <paper-icon-item @click=",
            " .entry=",
            '>\n                  <ha-icon\n                    slot="item-icon"\n                    .icon=',
            '\n                  ></ha-icon>\n                  <paper-item-body two-line>\n                    <div class="name">\n                      ',
            '\n                    </div>\n                    <div class="secondary entity-id">\n                      ',
            '\n                    </div>\n                  </paper-item-body>\n                  <div class="platform">',
            "</div>\n                </paper-icon-item>\n              ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n      <hass-subpage\n        header="',
            '"\n      >\n        <ha-config-section .isWide=',
            '>\n          <span slot="header">\n            ',
            '\n          </span>\n          <span slot="introduction">\n            ',
            "\n            <p>\n              ",
            '\n            </p>\n            <a href="/config/integrations">\n              ',
            "\n            </a>\n          </span>\n          <ha-card>\n            ",
            "\n          </ha-card>\n        </ha-config-section>\n      </hass-subpage>\n    ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n        <hass-loading-screen></hass-loading-screen>\n      ",
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

        var HaConfigEntityRegistry = _decorate(
          null,
          function(_initialize, _LitElement) {
            var HaConfigEntityRegistry =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HaConfigEntityRegistry, _LitElement2);

                function HaConfigEntityRegistry() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HaConfigEntityRegistry);

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
                      HaConfigEntityRegistry
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HaConfigEntityRegistry;
              })(_LitElement);

            return {
              F: HaConfigEntityRegistry,
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
                  key: "isWide",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_entities",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_unsubEntities",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(HaConfigEntityRegistry.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    if (this._unsubEntities) {
                      this._unsubEntities();
                    }
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var _this2 = this;

                    if (!this.hass || this._entities === undefined) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject2(),
                      this.hass.localize(
                        "ui.panel.config.entity_registry.caption"
                      ),
                      this.isWide,
                      this.hass.localize(
                        "ui.panel.config.entity_registry.picker.header"
                      ),
                      this.hass.localize(
                        "ui.panel.config.entity_registry.picker.introduction"
                      ),
                      this.hass.localize(
                        "ui.panel.config.entity_registry.picker.introduction2"
                      ),
                      this.hass.localize(
                        "ui.panel.config.entity_registry.picker.integrations_page"
                      ),
                      this._entities.map(function(entry) {
                        var state = _this2.hass.states[entry.entity_id];
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(_templateObject3(), _this2._openEditEntry, entry, state ? Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_9__["default"])(state) : Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__["default"])(entry.entity_id)), Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_3__["computeEntityRegistryName"])(_this2.hass, entry) || _this2.hass.localize("ui.panel.config.entity_registry.picker.unavailable"), entry.entity_id, entry.platform);
                      })
                    );
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(HaConfigEntityRegistry.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    Object(
                      _show_dialog_entity_registry_detail__WEBPACK_IMPORTED_MODULE_12__[
                        "loadEntityRegistryDetailDialog"
                      ]
                    )();
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    var _this3 = this;

                    _get(
                      _getPrototypeOf(HaConfigEntityRegistry.prototype),
                      "updated",
                      this
                    ).call(this, changedProps);

                    if (!this._unsubEntities) {
                      this._unsubEntities = Object(
                        _data_entity_registry__WEBPACK_IMPORTED_MODULE_3__[
                          "subscribeEntityRegistry"
                        ]
                      )(this.hass.connection, function(entities) {
                        _this3._entities = entities.sort(function(ent1, ent2) {
                          return Object(
                            _common_string_compare__WEBPACK_IMPORTED_MODULE_13__[
                              "compare"
                            ]
                          )(ent1.entity_id, ent2.entity_id);
                        });
                      });
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_openEditEntry",
                  value: function _openEditEntry(ev) {
                    var _this4 = this;

                    var entry = ev.currentTarget.entry;
                    Object(
                      _show_dialog_entity_registry_detail__WEBPACK_IMPORTED_MODULE_12__[
                        "showEntityRegistryDetailDialog"
                      ]
                    )(this, {
                      entry: entry,
                      updateEntry: (function() {
                        var _updateEntry = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee(updates) {
                            var updated;
                            return regeneratorRuntime.wrap(function _callee$(
                              _context
                            ) {
                              while (1) {
                                switch ((_context.prev = _context.next)) {
                                  case 0:
                                    _context.next = 2;
                                    return Object(
                                      _data_entity_registry__WEBPACK_IMPORTED_MODULE_3__[
                                        "updateEntityRegistryEntry"
                                      ]
                                    )(_this4.hass, entry.entity_id, updates);

                                  case 2:
                                    updated = _context.sent;
                                    _this4._entities = _this4._entities.map(
                                      function(ent) {
                                        return ent === entry ? updated : ent;
                                      }
                                    );

                                  case 4:
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
                      removeEntry: (function() {
                        var _removeEntry = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(
                              function _callee2$(_context2) {
                                while (1) {
                                  switch ((_context2.prev = _context2.next)) {
                                    case 0:
                                      if (
                                        confirm(
                                          'Are you sure you want to delete this entry?\n\nDeleting an entry will not remove the entity from JAVIS Home. To do this, you will need to remove the integration "'.concat(
                                            entry.platform,
                                            '" from JAVIS Home.'
                                          )
                                        )
                                      ) {
                                        _context2.next = 2;
                                        break;
                                      }

                                      return _context2.abrupt("return", false);

                                    case 2:
                                      _context2.prev = 2;
                                      _context2.next = 5;
                                      return Object(
                                        _data_entity_registry__WEBPACK_IMPORTED_MODULE_3__[
                                          "removeEntityRegistryEntry"
                                        ]
                                      )(_this4.hass, entry.entity_id);

                                    case 5:
                                      _this4._entities = _this4._entities.filter(
                                        function(ent) {
                                          return ent !== entry;
                                        }
                                      );
                                      return _context2.abrupt("return", true);

                                    case 9:
                                      _context2.prev = 9;
                                      _context2.t0 = _context2["catch"](2);
                                      return _context2.abrupt("return", false);

                                    case 12:
                                    case "end":
                                      return _context2.stop();
                                  }
                                }
                              },
                              _callee2,
                              null,
                              [[2, 9]]
                            );
                          })
                        );

                        function removeEntry() {
                          return _removeEntry.apply(this, arguments);
                        }

                        return removeEntry;
                      })(),
                    });
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject4());
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        customElements.define(
          "ha-config-entity-registry",
          HaConfigEntityRegistry
        );

        /***/
      },

    /***/ "./src/panels/config/entity_registry/show-dialog-entity-registry-detail.ts":
      /*!*********************************************************************************!*\
  !*** ./src/panels/config/entity_registry/show-dialog-entity-registry-detail.ts ***!
  \*********************************************************************************/
      /*! exports provided: loadEntityRegistryDetailDialog, showEntityRegistryDetailDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadEntityRegistryDetailDialog",
          function() {
            return loadEntityRegistryDetailDialog;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showEntityRegistryDetailDialog",
          function() {
            return showEntityRegistryDetailDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        var loadEntityRegistryDetailDialog = function loadEntityRegistryDetailDialog() {
          return Promise.all(
            /*! import() | entity-registry-detail-dialog */ [
              __webpack_require__.e(0),
              __webpack_require__.e(
                "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
              ),
              __webpack_require__.e(2),
              __webpack_require__.e(
                "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
              ),
              __webpack_require__.e("vendors~entity-registry-detail-dialog"),
              __webpack_require__.e("entity-registry-detail-dialog"),
            ]
          ).then(
            __webpack_require__.bind(
              null,
              /*! ./dialog-entity-registry-detail */ "./src/panels/config/entity_registry/dialog-entity-registry-detail.ts"
            )
          );
        };
        var showEntityRegistryDetailDialog = function showEntityRegistryDetailDialog(
          element,
          systemLogDetailParams
        ) {
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-dialog", {
            dialogTag: "dialog-entity-registry-detail",
            dialogImport: loadEntityRegistryDetailDialog,
            dialogParams: systemLogDetailParams,
          });
        };

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
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWVudGl0eS1yZWdpc3RyeS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvYmluYXJ5X3NlbnNvcl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb3Zlcl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2RvbWFpbl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2lucHV0X2RhdGV0ZWltZV9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3NlbnNvcl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3N0YXRlX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdHJpbmcvY29tcGFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHlfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZW50aXR5X3JlZ2lzdHJ5L2hhLWNvbmZpZy1lbnRpdHktcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZW50aXR5X3JlZ2lzdHJ5L3Nob3ctZGlhbG9nLWVudGl0eS1yZWdpc3RyeS1kZXRhaWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaGEtY29uZmlnLXNlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlckl0ZW1CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pdGVtLWJlaGF2aW9yLmpzJztcblxuLypcbmA8cGFwZXItaWNvbi1pdGVtPmAgaXMgYSBjb252ZW5pZW5jZSBlbGVtZW50IHRvIG1ha2UgYW4gaXRlbSB3aXRoIGljb24uIEl0IGlzIGFuXG5pbnRlcmFjdGl2ZSBsaXN0IGl0ZW0gd2l0aCBhIGZpeGVkLXdpZHRoIGljb24gYXJlYSwgYWNjb3JkaW5nIHRvIE1hdGVyaWFsXG5EZXNpZ24uIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSBpY29ucyBhcmUgb2YgdmFyeWluZyB3aWR0aHMsIGJ1dCB5b3Ugd2FudCB0aGUgaXRlbVxuYm9kaWVzIHRvIGxpbmUgdXAuIFVzZSB0aGlzIGxpa2UgYSBgPHBhcGVyLWl0ZW0+YC4gVGhlIGNoaWxkIG5vZGUgd2l0aCB0aGUgc2xvdFxubmFtZSBgaXRlbS1pY29uYCBpcyBwbGFjZWQgaW4gdGhlIGljb24gYXJlYS5cblxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJmYXZvcml0ZVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2lyb24taWNvbj5cbiAgICAgIEZhdm9yaXRlXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9kaXY+XG4gICAgICBBdmF0YXJcbiAgICA8L3BhcGVyLWljb24taXRlbT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiBhcmVhIHwgYDU2cHhgXG5gLS1wYXBlci1pdGVtLWljb25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaWNvbiBhcmVhIHwgYHt9YFxuYC0tcGFwZXItaWNvbi1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaWNvbi1pdGVtO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudC1pY29uIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG5cbiAgICAgICAgd2lkdGg6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi13aWR0aCwgNTZweCk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0taWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cImNvbnRlbnRJY29uXCIgY2xhc3M9XCJjb250ZW50LWljb25cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJpdGVtLWljb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWljb24taXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkJ1dHRvblN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWJ1dHRvbi1zdGF0ZS5qcyc7XG5pbXBvcnQge0lyb25Db250cm9sU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tY29udHJvbC1zdGF0ZS5qcyc7XG5cbi8qXG5gUGFwZXJJdGVtQmVoYXZpb3JgIGlzIGEgY29udmVuaWVuY2UgYmVoYXZpb3Igc2hhcmVkIGJ5IDxwYXBlci1pdGVtPiBhbmRcbjxwYXBlci1pY29uLWl0ZW0+IHRoYXQgbWFuYWdlcyB0aGUgc2hhcmVkIGNvbnRyb2wgc3RhdGVzIGFuZCBhdHRyaWJ1dGVzIG9mXG50aGUgaXRlbXMuXG4qL1xuLyoqIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJJdGVtQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckl0ZW1CZWhhdmlvckltcGwgPSB7XG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ29wdGlvbicsIHRhYmluZGV4OiAnMCd9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IFBhcGVySXRlbUJlaGF2aW9yID1cbiAgICBbSXJvbkJ1dHRvblN0YXRlLCBJcm9uQ29udHJvbFN0YXRlLCBQYXBlckl0ZW1CZWhhdmlvckltcGxdO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLypcblVzZSBgPHBhcGVyLWl0ZW0tYm9keT5gIGluIGEgYDxwYXBlci1pdGVtPmAgb3IgYDxwYXBlci1pY29uLWl0ZW0+YCB0byBtYWtlIHR3by1cbm9yIHRocmVlLSBsaW5lIGl0ZW1zLiBJdCBpcyBhIGZsZXggaXRlbSB0aGF0IGlzIGEgdmVydGljYWwgZmxleGJveC5cblxuICAgIDxwYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgPGRpdj5TaG93IHlvdXIgc3RhdHVzPC9kaXY+XG4gICAgICAgIDxkaXYgc2Vjb25kYXJ5PllvdXIgc3RhdHVzIGlzIHZpc2libGUgdG8gZXZlcnlvbmU8L2Rpdj5cbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgIDwvcGFwZXItaXRlbT5cblxuVGhlIGNoaWxkIGVsZW1lbnRzIHdpdGggdGhlIGBzZWNvbmRhcnlgIGF0dHJpYnV0ZSBpcyBnaXZlbiBzZWNvbmRhcnkgdGV4dFxuc3R5bGluZy5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdHdvLWxpbmUgaXRlbSB8IGA3MnB4YFxuYC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHRocmVlLWxpbmUgaXRlbSB8IGA4OHB4YFxuYC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeS1jb2xvcmAgfCBGb3JlZ3JvdW5kIGNvbG9yIGZvciB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGAtLXNlY29uZGFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIG5lZWRlZCBmb3IgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgdG8gd29yayBvbiBmZiAqL1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItanVzdGlmaWVkO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3R3by1saW5lXSkge1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodCwgNzJweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aHJlZS1saW5lXSkge1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0LCA4OHB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoW3NlY29uZGFyeV0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcblxuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeS1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaXRlbS1ib2R5J1xufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3QsIC5wYXBlci1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LCA0OHB4KTtcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5wYXBlci1pdGVtIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBib3JkZXI6bm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSksIC5wYXBlci1pdGVtW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5pcm9uLXNlbGVjdGVkKSwgLnBhcGVyLWl0ZW0uaXJvbi1zZWxlY3RlZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodCwgYm9sZCk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1zZWxlY3RlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSksIC5wYXBlci1pdGVtW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yLCB2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmZvY3VzKSwgLnBhcGVyLWl0ZW06Zm9jdXMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG91dGxpbmU6IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1mb2N1c2VkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6Zm9jdXMpOmJlZm9yZSwgLnBhcGVyLWl0ZW06Zm9jdXM6YmVmb3JlIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcblxuICAgICAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLWRpdmlkZXItb3BhY2l0eSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG4vKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgYmluYXJ5IHNlbnNvciBzdGF0ZS4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluYXJ5U2Vuc29ySWNvbihzdGF0ZTogSGFzc0VudGl0eSkge1xuICBjb25zdCBhY3RpdmF0ZWQgPSBzdGF0ZS5zdGF0ZSAmJiBzdGF0ZS5zdGF0ZSA9PT0gXCJvZmZcIjtcbiAgc3dpdGNoIChzdGF0ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcykge1xuICAgIGNhc2UgXCJiYXR0ZXJ5XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmJhdHRlcnlcIiA6IFwiaGFzczpiYXR0ZXJ5LW91dGxpbmVcIjtcbiAgICBjYXNlIFwiY29sZFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczp0aGVybW9tZXRlclwiIDogXCJoYXNzOnNub3dmbGFrZVwiO1xuICAgIGNhc2UgXCJjb25uZWN0aXZpdHlcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6c2VydmVyLW5ldHdvcmstb2ZmXCIgOiBcImhhc3M6c2VydmVyLW5ldHdvcmtcIjtcbiAgICBjYXNlIFwiZG9vclwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpkb29yLWNsb3NlZFwiIDogXCJoYXNzOmRvb3Itb3BlblwiO1xuICAgIGNhc2UgXCJnYXJhZ2VfZG9vclwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpnYXJhZ2VcIiA6IFwiaGFzczpnYXJhZ2Utb3BlblwiO1xuICAgIGNhc2UgXCJnYXNcIjpcbiAgICBjYXNlIFwicG93ZXJcIjpcbiAgICBjYXNlIFwicHJvYmxlbVwiOlxuICAgIGNhc2UgXCJzYWZldHlcIjpcbiAgICBjYXNlIFwic21va2VcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6c2hpZWxkLWNoZWNrXCIgOiBcImhhc3M6YWxlcnRcIjtcbiAgICBjYXNlIFwiaGVhdFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczp0aGVybW9tZXRlclwiIDogXCJoYXNzOmZpcmVcIjtcbiAgICBjYXNlIFwibGlnaHRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6YnJpZ2h0bmVzcy01XCIgOiBcImhhc3M6YnJpZ2h0bmVzcy03XCI7XG4gICAgY2FzZSBcImxvY2tcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6bG9ja1wiIDogXCJoYXNzOmxvY2stb3BlblwiO1xuICAgIGNhc2UgXCJtb2lzdHVyZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczp3YXRlci1vZmZcIiA6IFwiaGFzczp3YXRlclwiO1xuICAgIGNhc2UgXCJtb3Rpb25cIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6d2Fsa1wiIDogXCJoYXNzOnJ1blwiO1xuICAgIGNhc2UgXCJvY2N1cGFuY3lcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6aG9tZS1vdXRsaW5lXCIgOiBcImhhc3M6aG9tZVwiO1xuICAgIGNhc2UgXCJvcGVuaW5nXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOnNxdWFyZVwiIDogXCJoYXNzOnNxdWFyZS1vdXRsaW5lXCI7XG4gICAgY2FzZSBcInBsdWdcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6cG93ZXItcGx1Zy1vZmZcIiA6IFwiaGFzczpwb3dlci1wbHVnXCI7XG4gICAgY2FzZSBcInByZXNlbmNlXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmhvbWUtb3V0bGluZVwiIDogXCJoYXNzOmhvbWVcIjtcbiAgICBjYXNlIFwic291bmRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6bXVzaWMtbm90ZS1vZmZcIiA6IFwiaGFzczptdXNpYy1ub3RlXCI7XG4gICAgY2FzZSBcInZpYnJhdGlvblwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpjcm9wLXBvcnRyYWl0XCIgOiBcImhhc3M6dmlicmF0ZVwiO1xuICAgIGNhc2UgXCJ3aW5kb3dcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6d2luZG93LWNsb3NlZFwiIDogXCJoYXNzOndpbmRvdy1vcGVuXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6cmFkaW9ib3gtYmxhbmtcIiA6IFwiaGFzczpjaGVja2JveC1tYXJrZWQtY2lyY2xlXCI7XG4gIH1cbn1cbiIsIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPYmplY3RJZChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlT2JqZWN0SWQgZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nID0+XG4gIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgY292ZXIgc3RhdGUuICovXG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGRvbWFpbkljb24gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY292ZXJJY29uKHN0YXRlOiBIYXNzRW50aXR5KTogc3RyaW5nIHtcbiAgY29uc3Qgb3BlbiA9IHN0YXRlLnN0YXRlICE9PSBcImNsb3NlZFwiO1xuICBzd2l0Y2ggKHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgY2FzZSBcImdhcmFnZVwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcImhhc3M6Z2FyYWdlLW9wZW5cIiA6IFwiaGFzczpnYXJhZ2VcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRvbWFpbkljb24oXCJjb3ZlclwiLCBzdGF0ZS5zdGF0ZSk7XG4gIH1cbn1cbiIsIi8qKlxuICogUmV0dXJuIHRoZSBpY29uIHRvIGJlIHVzZWQgZm9yIGEgZG9tYWluLlxuICpcbiAqIE9wdGlvbmFsbHkgcGFzcyBpbiBhIHN0YXRlIHRvIGluZmx1ZW5jZSB0aGUgZG9tYWluIGljb24uXG4gKi9cbmltcG9ydCB7IERFRkFVTFRfRE9NQUlOX0lDT04gfSBmcm9tIFwiLi4vY29uc3RcIjtcblxuY29uc3QgZml4ZWRJY29ucyA9IHtcbiAgYWxlcnQ6IFwiaGFzczphbGVydFwiLFxuICBhbGV4YTogXCJoYXNzOmFtYXpvbi1hbGV4YVwiLFxuICBhdXRvbWF0aW9uOiBcImhhc3M6cGxheWxpc3QtcGxheVwiLFxuICBjYWxlbmRhcjogXCJoYXNzOmNhbGVuZGFyXCIsXG4gIGNhbWVyYTogXCJoYXNzOnZpZGVvXCIsXG4gIGNsaW1hdGU6IFwiaGFzczp0aGVybW9zdGF0XCIsXG4gIGNvbmZpZ3VyYXRvcjogXCJoYXNzOnNldHRpbmdzXCIsXG4gIGNvbnZlcnNhdGlvbjogXCJoYXNzOnRleHQtdG8tc3BlZWNoXCIsXG4gIGRldmljZV90cmFja2VyOiBcImhhc3M6YWNjb3VudFwiLFxuICBmYW46IFwiaGFzczpmYW5cIixcbiAgZ29vZ2xlX2Fzc2lzdGFudDogXCJoYXNzOmdvb2dsZS1hc3Npc3RhbnRcIixcbiAgZ3JvdXA6IFwiaGFzczpnb29nbGUtY2lyY2xlcy1jb21tdW5pdGllc1wiLFxuICBoaXN0b3J5X2dyYXBoOiBcImhhc3M6Y2hhcnQtbGluZVwiLFxuICBob21lYXNzaXN0YW50OiBcImhhc3M6aG9tZS1hc3Npc3RhbnRcIixcbiAgaG9tZWtpdDogXCJoYXNzOmhvbWUtYXV0b21hdGlvblwiLFxuICBpbWFnZV9wcm9jZXNzaW5nOiBcImhhc3M6aW1hZ2UtZmlsdGVyLWZyYW1lc1wiLFxuICBpbnB1dF9ib29sZWFuOiBcImhhc3M6ZHJhd2luZ1wiLFxuICBpbnB1dF9kYXRldGltZTogXCJoYXNzOmNhbGVuZGFyLWNsb2NrXCIsXG4gIGlucHV0X251bWJlcjogXCJoYXNzOnJheS12ZXJ0ZXhcIixcbiAgaW5wdXRfc2VsZWN0OiBcImhhc3M6Zm9ybWF0LWxpc3QtYnVsbGV0ZWRcIixcbiAgaW5wdXRfdGV4dDogXCJoYXNzOnRleHRib3hcIixcbiAgbGlnaHQ6IFwiaGFzczpsaWdodGJ1bGJcIixcbiAgbWFpbGJveDogXCJoYXNzOm1haWxib3hcIixcbiAgbm90aWZ5OiBcImhhc3M6Y29tbWVudC1hbGVydFwiLFxuICBwZXJzb246IFwiaGFzczphY2NvdW50XCIsXG4gIHBsYW50OiBcImhhc3M6Zmxvd2VyXCIsXG4gIHByb3hpbWl0eTogXCJoYXNzOmFwcGxlLXNhZmFyaVwiLFxuICByZW1vdGU6IFwiaGFzczpyZW1vdGVcIixcbiAgc2NlbmU6IFwiaGFzczpnb29nbGUtcGFnZXNcIixcbiAgc2NyaXB0OiBcImhhc3M6ZmlsZS1kb2N1bWVudFwiLFxuICBzZW5zb3I6IFwiaGFzczpleWVcIixcbiAgc2ltcGxlX2FsYXJtOiBcImhhc3M6YmVsbFwiLFxuICBzdW46IFwiaGFzczp3aGl0ZS1iYWxhbmNlLXN1bm55XCIsXG4gIHN3aXRjaDogXCJoYXNzOmZsYXNoXCIsXG4gIHRpbWVyOiBcImhhc3M6dGltZXJcIixcbiAgdXBkYXRlcjogXCJoYXNzOmNsb3VkLXVwbG9hZFwiLFxuICB2YWN1dW06IFwiaGFzczpyb2JvdC12YWN1dW1cIixcbiAgd2F0ZXJfaGVhdGVyOiBcImhhc3M6dGhlcm1vbWV0ZXJcIixcbiAgd2VhdGhlcjogXCJoYXNzOndlYXRoZXItY2xvdWR5XCIsXG4gIHdlYmxpbms6IFwiaGFzczpvcGVuLWluLW5ld1wiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9tYWluSWNvbihkb21haW46IHN0cmluZywgc3RhdGU/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoZG9tYWluIGluIGZpeGVkSWNvbnMpIHtcbiAgICByZXR1cm4gZml4ZWRJY29uc1tkb21haW5dO1xuICB9XG5cbiAgc3dpdGNoIChkb21haW4pIHtcbiAgICBjYXNlIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiOlxuICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFwiYXJtZWRfaG9tZVwiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6YmVsbC1wbHVzXCI7XG4gICAgICAgIGNhc2UgXCJhcm1lZF9uaWdodFwiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6YmVsbC1zbGVlcFwiO1xuICAgICAgICBjYXNlIFwiZGlzYXJtZWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmJlbGwtb3V0bGluZVwiO1xuICAgICAgICBjYXNlIFwidHJpZ2dlcmVkXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpiZWxsLXJpbmdcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmJlbGxcIjtcbiAgICAgIH1cblxuICAgIGNhc2UgXCJiaW5hcnlfc2Vuc29yXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgPT09IFwib2ZmXCJcbiAgICAgICAgPyBcImhhc3M6cmFkaW9ib3gtYmxhbmtcIlxuICAgICAgICA6IFwiaGFzczpjaGVja2JveC1tYXJrZWQtY2lyY2xlXCI7XG5cbiAgICBjYXNlIFwiY292ZXJcIjpcbiAgICAgIHJldHVybiBzdGF0ZSA9PT0gXCJjbG9zZWRcIiA/IFwiaGFzczp3aW5kb3ctY2xvc2VkXCIgOiBcImhhc3M6d2luZG93LW9wZW5cIjtcblxuICAgIGNhc2UgXCJsb2NrXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgPT09IFwidW5sb2NrZWRcIiA/IFwiaGFzczpsb2NrLW9wZW5cIiA6IFwiaGFzczpsb2NrXCI7XG5cbiAgICBjYXNlIFwibWVkaWFfcGxheWVyXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgIT09IFwib2ZmXCIgJiYgc3RhdGUgIT09IFwiaWRsZVwiXG4gICAgICAgID8gXCJoYXNzOmNhc3QtY29ubmVjdGVkXCJcbiAgICAgICAgOiBcImhhc3M6Y2FzdFwiO1xuXG4gICAgY2FzZSBcInp3YXZlXCI6XG4gICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgXCJkZWFkXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczplbW90aWNvbi1kZWFkXCI7XG4gICAgICAgIGNhc2UgXCJzbGVlcGluZ1wiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6c2xlZXBcIjtcbiAgICAgICAgY2FzZSBcImluaXRpYWxpemluZ1wiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6dGltZXItc2FuZFwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcImhhc3M6ei13YXZlXCI7XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiVW5hYmxlIHRvIGZpbmQgaWNvbiBmb3IgZG9tYWluIFwiICsgZG9tYWluICsgXCIgKFwiICsgc3RhdGUgKyBcIilcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBERUZBVUxUX0RPTUFJTl9JQ09OO1xuICB9XG59XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGFuIGlucHV0IGRhdGV0aW1lIHN0YXRlLiAqL1xuaW1wb3J0IGRvbWFpbkljb24gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlucHV0RGF0ZVRpbWVJY29uKHN0YXRlOiBIYXNzRW50aXR5KTogc3RyaW5nIHtcbiAgaWYgKCFzdGF0ZS5hdHRyaWJ1dGVzLmhhc19kYXRlKSB7XG4gICAgcmV0dXJuIFwiaGFzczpjbG9ja1wiO1xuICB9XG4gIGlmICghc3RhdGUuYXR0cmlidXRlcy5oYXNfdGltZSkge1xuICAgIHJldHVybiBcImhhc3M6Y2FsZW5kYXJcIjtcbiAgfVxuICByZXR1cm4gZG9tYWluSWNvbihcImlucHV0X2RhdGV0aW1lXCIpO1xufVxuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIHNlbnNvciBzdGF0ZS4gKi9cbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBVTklUX0MsIFVOSVRfRiB9IGZyb20gXCIuLi9jb25zdFwiO1xuaW1wb3J0IGRvbWFpbkljb24gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcblxuY29uc3QgZml4ZWREZXZpY2VDbGFzc0ljb25zID0ge1xuICBodW1pZGl0eTogXCJoYXNzOndhdGVyLXBlcmNlbnRcIixcbiAgaWxsdW1pbmFuY2U6IFwiaGFzczpicmlnaHRuZXNzLTVcIixcbiAgdGVtcGVyYXR1cmU6IFwiaGFzczp0aGVybW9tZXRlclwiLFxuICBwcmVzc3VyZTogXCJoYXNzOmdhdWdlXCIsXG4gIHBvd2VyOiBcImhhc3M6Zmxhc2hcIixcbiAgc2lnbmFsX3N0cmVuZ3RoOiBcImhhc3M6d2lmaVwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Vuc29ySWNvbihzdGF0ZTogSGFzc0VudGl0eSkge1xuICBjb25zdCBkY2xhc3MgPSBzdGF0ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcztcblxuICBpZiAoZGNsYXNzICYmIGRjbGFzcyBpbiBmaXhlZERldmljZUNsYXNzSWNvbnMpIHtcbiAgICByZXR1cm4gZml4ZWREZXZpY2VDbGFzc0ljb25zW2RjbGFzc107XG4gIH1cbiAgaWYgKGRjbGFzcyA9PT0gXCJiYXR0ZXJ5XCIpIHtcbiAgICBjb25zdCBiYXR0ZXJ5ID0gTnVtYmVyKHN0YXRlLnN0YXRlKTtcbiAgICBpZiAoaXNOYU4oYmF0dGVyeSkpIHtcbiAgICAgIHJldHVybiBcImhhc3M6YmF0dGVyeS11bmtub3duXCI7XG4gICAgfVxuICAgIGNvbnN0IGJhdHRlcnlSb3VuZCA9IE1hdGgucm91bmQoYmF0dGVyeSAvIDEwKSAqIDEwO1xuICAgIGlmIChiYXR0ZXJ5Um91bmQgPj0gMTAwKSB7XG4gICAgICByZXR1cm4gXCJoYXNzOmJhdHRlcnlcIjtcbiAgICB9XG4gICAgaWYgKGJhdHRlcnlSb3VuZCA8PSAwKSB7XG4gICAgICByZXR1cm4gXCJoYXNzOmJhdHRlcnktYWxlcnRcIjtcbiAgICB9XG4gICAgLy8gV2lsbCByZXR1cm4gb25lIG9mIHRoZSBmb2xsb3dpbmcgaWNvbnM6IChsaXN0ZWQgc28gZXh0cmFjdG9yIHBpY2tzIHVwKVxuICAgIC8vIGhhc3M6YmF0dGVyeS0xMFxuICAgIC8vIGhhc3M6YmF0dGVyeS0yMFxuICAgIC8vIGhhc3M6YmF0dGVyeS0zMFxuICAgIC8vIGhhc3M6YmF0dGVyeS00MFxuICAgIC8vIGhhc3M6YmF0dGVyeS01MFxuICAgIC8vIGhhc3M6YmF0dGVyeS02MFxuICAgIC8vIGhhc3M6YmF0dGVyeS03MFxuICAgIC8vIGhhc3M6YmF0dGVyeS04MFxuICAgIC8vIGhhc3M6YmF0dGVyeS05MFxuICAgIC8vIFdlIG9ic2N1cmUgJ2hhc3MnIGluIGljb25uYW1lIHNvIHRoaXMgbmFtZSBkb2VzIG5vdCBnZXQgcGlja2VkIHVwXG4gICAgcmV0dXJuIGAke1wiaGFzc1wifTpiYXR0ZXJ5LSR7YmF0dGVyeVJvdW5kfWA7XG4gIH1cblxuICBjb25zdCB1bml0ID0gc3RhdGUuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50O1xuICBpZiAodW5pdCA9PT0gVU5JVF9DIHx8IHVuaXQgPT09IFVOSVRfRikge1xuICAgIHJldHVybiBcImhhc3M6dGhlcm1vbWV0ZXJcIjtcbiAgfVxuICByZXR1cm4gZG9tYWluSWNvbihcInNlbnNvclwiKTtcbn1cbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBzdGF0ZS4gKi9cbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBERUZBVUxUX0RPTUFJTl9JQ09OIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5cbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgZG9tYWluSWNvbiBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuXG5pbXBvcnQgYmluYXJ5U2Vuc29ySWNvbiBmcm9tIFwiLi9iaW5hcnlfc2Vuc29yX2ljb25cIjtcbmltcG9ydCBjb3Zlckljb24gZnJvbSBcIi4vY292ZXJfaWNvblwiO1xuaW1wb3J0IHNlbnNvckljb24gZnJvbSBcIi4vc2Vuc29yX2ljb25cIjtcbmltcG9ydCBpbnB1dERhdGVUaW1lSWNvbiBmcm9tIFwiLi9pbnB1dF9kYXRldGVpbWVfaWNvblwiO1xuXG5jb25zdCBkb21haW5JY29ucyA9IHtcbiAgYmluYXJ5X3NlbnNvcjogYmluYXJ5U2Vuc29ySWNvbixcbiAgY292ZXI6IGNvdmVySWNvbixcbiAgc2Vuc29yOiBzZW5zb3JJY29uLFxuICBpbnB1dF9kYXRldGltZTogaW5wdXREYXRlVGltZUljb24sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0ZUljb24oc3RhdGU6IEhhc3NFbnRpdHkpIHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHJldHVybiBERUZBVUxUX0RPTUFJTl9JQ09OO1xuICB9XG4gIGlmIChzdGF0ZS5hdHRyaWJ1dGVzLmljb24pIHtcbiAgICByZXR1cm4gc3RhdGUuYXR0cmlidXRlcy5pY29uO1xuICB9XG5cbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZURvbWFpbihzdGF0ZS5lbnRpdHlfaWQpO1xuXG4gIGlmIChkb21haW4gaW4gZG9tYWluSWNvbnMpIHtcbiAgICByZXR1cm4gZG9tYWluSWNvbnNbZG9tYWluXShzdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oZG9tYWluLCBzdGF0ZS5zdGF0ZSk7XG59XG4iLCJleHBvcnQgY29uc3QgY29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEgPiBiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXNlSW5zZW5zaXRpdmVDb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PlxuICBjb21wYXJlKGEudG9Mb3dlckNhc2UoKSwgYi50b0xvd2VyQ2FzZSgpKTtcbiIsIi8vIEZyb206IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4vLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgRnVuY3Rpb24+KFxuICBmdW5jOiBULFxuICB3YWl0LFxuICBpbW1lZGlhdGUgPSBmYWxzZVxuKTogVCA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdGhpcy1hc3NpZ25tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbGxlY3Rpb24sIENvbm5lY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlFbnRyeSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyeV9pZD86IHN0cmluZztcbiAgZGV2aWNlX2lkPzogc3RyaW5nO1xuICBkaXNhYmxlZF9ieT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgbmV3X2VudGl0eV9pZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZUVudGl0eVJlZ2lzdHJ5TmFtZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50cnk6IEVudGl0eVJlZ2lzdHJ5RW50cnlcbik6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAoZW50cnkubmFtZSkge1xuICAgIHJldHVybiBlbnRyeS5uYW1lO1xuICB9XG4gIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbZW50cnkuZW50aXR5X2lkXTtcbiAgcmV0dXJuIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUVudGl0eVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8RW50aXR5UmVnaXN0cnlFbnRyeVVwZGF0ZVBhcmFtcz5cbik6IFByb21pc2U8RW50aXR5UmVnaXN0cnlFbnRyeT4gPT5cbiAgaGFzcy5jYWxsV1M8RW50aXR5UmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3JlbW92ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEVudGl0eVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoRW50aXR5UmVnaXN0cnkoY29ubikudGhlbigoZW50aXRpZXMpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoZW50aXRpZXMsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImVudGl0eV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxFbnRpdHlSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2VudGl0eVJlZ2lzdHJ5XCIsXG4gICAgZmV0Y2hFbnRpdHlSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgRW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgY29tcHV0ZUVudGl0eVJlZ2lzdHJ5TmFtZSxcbiAgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1sb2FkaW5nLXNjcmVlblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCBkb21haW5JY29uIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgc3RhdGVJY29uIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N0YXRlX2ljb25cIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IHtcbiAgc2hvd0VudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nLFxuICBsb2FkRW50aXR5UmVnaXN0cnlEZXRhaWxEaWFsb2csXG59IGZyb20gXCIuL3Nob3ctZGlhbG9nLWVudGl0eS1yZWdpc3RyeS1kZXRhaWxcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5cbmNsYXNzIEhhQ29uZmlnRW50aXR5UmVnaXN0cnkgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50aXRpZXM/OiBFbnRpdHlSZWdpc3RyeUVudHJ5W107XG4gIHByaXZhdGUgX3Vuc3ViRW50aXRpZXM/OiBVbnN1YnNjcmliZUZ1bmM7XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3Vuc3ViRW50aXRpZXMpIHtcbiAgICAgIHRoaXMuX3Vuc3ViRW50aXRpZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgdGhpcy5fZW50aXRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYXNzLWxvYWRpbmctc2NyZWVuPjwvaGFzcy1sb2FkaW5nLXNjcmVlbj5cbiAgICAgIGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZVxuICAgICAgICBoZWFkZXI9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdHlfcmVnaXN0cnkuY2FwdGlvblwiXG4gICAgICAgICl9XCJcbiAgICAgID5cbiAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9JHt0aGlzLmlzV2lkZX0+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0eV9yZWdpc3RyeS5waWNrZXIuaGVhZGVyXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdHlfcmVnaXN0cnkucGlja2VyLmludHJvZHVjdGlvblwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0eV9yZWdpc3RyeS5waWNrZXIuaW50cm9kdWN0aW9uMlwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9pbnRlZ3JhdGlvbnNcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXR5X3JlZ2lzdHJ5LnBpY2tlci5pbnRlZ3JhdGlvbnNfcGFnZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgJHt0aGlzLl9lbnRpdGllcy5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5oYXNzIS5zdGF0ZXNbZW50cnkuZW50aXR5X2lkXTtcbiAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbSBAY2xpY2s9JHt0aGlzLl9vcGVuRWRpdEVudHJ5fSAuZW50cnk9JHtlbnRyeX0+XG4gICAgICAgICAgICAgICAgICA8aGEtaWNvblxuICAgICAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgLmljb249JHtzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgID8gc3RhdGVJY29uKHN0YXRlKVxuICAgICAgICAgICAgICAgICAgICAgIDogZG9tYWluSWNvbihjb21wdXRlRG9tYWluKGVudHJ5LmVudGl0eV9pZCkpfVxuICAgICAgICAgICAgICAgICAgPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgJHtjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lKHRoaXMuaGFzcyEsIGVudHJ5KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXR5X3JlZ2lzdHJ5LnBpY2tlci51bmF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeSBlbnRpdHktaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAke2VudHJ5LmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF0Zm9ybVwiPiR7ZW50cnkucGxhdGZvcm19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBsb2FkRW50aXR5UmVnaXN0cnlEZXRhaWxEaWFsb2coKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoIXRoaXMuX3Vuc3ViRW50aXRpZXMpIHtcbiAgICAgIHRoaXMuX3Vuc3ViRW50aXRpZXMgPSBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeShcbiAgICAgICAgdGhpcy5oYXNzLmNvbm5lY3Rpb24sXG4gICAgICAgIChlbnRpdGllcykgPT4ge1xuICAgICAgICAgIHRoaXMuX2VudGl0aWVzID0gZW50aXRpZXMuc29ydCgoZW50MSwgZW50MikgPT5cbiAgICAgICAgICAgIGNvbXBhcmUoZW50MS5lbnRpdHlfaWQsIGVudDIuZW50aXR5X2lkKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkVkaXRFbnRyeShldjogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGVudHJ5ID0gKGV2LmN1cnJlbnRUYXJnZXQhIGFzIGFueSkuZW50cnk7XG4gICAgc2hvd0VudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nKHRoaXMsIHtcbiAgICAgIGVudHJ5LFxuICAgICAgdXBkYXRlRW50cnk6IGFzeW5jICh1cGRhdGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5KFxuICAgICAgICAgIHRoaXMuaGFzcyEsXG4gICAgICAgICAgZW50cnkuZW50aXR5X2lkLFxuICAgICAgICAgIHVwZGF0ZXNcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fZW50aXRpZXMgPSB0aGlzLl9lbnRpdGllcyEubWFwKChlbnQpID0+XG4gICAgICAgICAgZW50ID09PSBlbnRyeSA/IHVwZGF0ZWQgOiBlbnRcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVFbnRyeTogYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBlbnRyeT9cblxuRGVsZXRpbmcgYW4gZW50cnkgd2lsbCBub3QgcmVtb3ZlIHRoZSBlbnRpdHkgZnJvbSBKQVZJUyBIb21lLiBUbyBkbyB0aGlzLCB5b3Ugd2lsbCBuZWVkIHRvIHJlbW92ZSB0aGUgaW50ZWdyYXRpb24gXCIke1xuICAgICAgICAgICAgZW50cnkucGxhdGZvcm1cbiAgICAgICAgICB9XCIgZnJvbSBKQVZJUyBIb21lLmApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MhLCBlbnRyeS5lbnRpdHlfaWQpO1xuICAgICAgICAgIHRoaXMuX2VudGl0aWVzID0gdGhpcy5fZW50aXRpZXMhLmZpbHRlcigoZW50KSA9PiBlbnQgIT09IGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIGhhLWljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLWVudGl0eS1yZWdpc3RyeVwiLCBIYUNvbmZpZ0VudGl0eVJlZ2lzdHJ5KTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIEVudGl0eVJlZ2lzdHJ5RW50cnksXG4gIEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXMsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nUGFyYW1zIHtcbiAgZW50cnk6IEVudGl0eVJlZ2lzdHJ5RW50cnk7XG4gIHVwZGF0ZUVudHJ5OiAoXG4gICAgdXBkYXRlczogUGFydGlhbDxFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zPlxuICApID0+IFByb21pc2U8dW5rbm93bj47XG4gIHJlbW92ZUVudHJ5OiAoKSA9PiBQcm9taXNlPGJvb2xlYW4+O1xufVxuXG5leHBvcnQgY29uc3QgbG9hZEVudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZW50aXR5LXJlZ2lzdHJ5LWRldGFpbC1kaWFsb2dcIiAqLyBcIi4vZGlhbG9nLWVudGl0eS1yZWdpc3RyeS1kZXRhaWxcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93RW50aXR5UmVnaXN0cnlEZXRhaWxEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBzeXN0ZW1Mb2dEZXRhaWxQYXJhbXM6IEVudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctZW50aXR5LXJlZ2lzdHJ5LWRldGFpbFwiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZEVudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczogc3lzdGVtTG9nRGV0YWlsUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuY2xhc3MgSGFDb25maWdTZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDI4cHggMjBweCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1kaXNwbGF5MTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXJyb3cuY29udGVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaW50cm8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvXCI+PHNsb3QgbmFtZT1cImludHJvZHVjdGlvblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZmxleC1hdXRvXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJjb250ZW50IFwiO1xuXG4gICAgcmV0dXJuIGlzV2lkZSA/IGNsYXNzZXMgOiBjbGFzc2VzICsgXCJuYXJyb3dcIjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJ0b2dldGhlciBsYXlvdXQgXCI7XG5cbiAgICByZXR1cm4gY2xhc3NlcyArIChpc1dpZGUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWwgbmFycm93XCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1zZWN0aW9uXCIsIEhhQ29uZmlnU2VjdGlvbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBO0FBMkJBO0FBQ0E7QUE3QkE7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBbUNBO0FBcENBOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQXdEQTs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBMUNBO0FBNENBOzs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQU1BOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4Q0E7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBR0E7QUFoREE7QUFrREE7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUtBQUE7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQURBO0FBQUE7QUF1QkE7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBZ0JBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBTUE7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBSkE7QUFDQTtBQVFBO0FBQUE7QUFFQTtBQURBO0FBREE7QUFDQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFEQTtBQUhBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBUUE7QUFDQTtBQUdBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQTZCQTtBQUNBO0FBc0JBO0FBS0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBYUE7QUFBQTtBQUFBO0FBYkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBWkE7QUFnQ0E7Ozs7O0FBRUE7QUFDQTtBQWVBOzs7QUFySkE7QUFDQTtBQXVKQTs7Ozs7Ozs7Ozs7O0FDMUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUFBLHFwQkFDQTtBQURBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQStFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQXhGQTtBQUNBO0FBMERBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQWNBOzs7O0FBN0VBO0FBQ0E7QUEyRkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
