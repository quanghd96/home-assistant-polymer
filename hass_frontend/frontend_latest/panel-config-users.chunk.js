(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-users"],
  {
    /***/ "./node_modules/lit-html/directives/until.js":
      /*!***************************************************!*\
  !*** ./node_modules/lit-html/directives/until.js ***!
  \***************************************************/
      /*! exports provided: until */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "until",
          function() {
            return until;
          }
        );
        /* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../lib/parts.js */ "./node_modules/lit-html/lib/parts.js"
        );
        /* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js"
        );
        /**
         * @license
         * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
         * This code may only be used under the BSD style license found at
         * http://polymer.github.io/LICENSE.txt
         * The complete set of authors may be found at
         * http://polymer.github.io/AUTHORS.txt
         * The complete set of contributors may be found at
         * http://polymer.github.io/CONTRIBUTORS.txt
         * Code distributed by Google as part of the polymer project is also
         * subject to an additional IP rights grant found at
         * http://polymer.github.io/PATENTS.txt
         */

        const _state = new WeakMap(); // Effectively infinity, but a SMI.

        const _infinity = 0x7fffffff;
        /**
         * Renders one of a series of values, including Promises, to a Part.
         *
         * Values are rendered in priority order, with the first argument having the
         * highest priority and the last argument having the lowest priority. If a
         * value is a Promise, low-priority values will be rendered until it resolves.
         *
         * The priority of values can be used to create placeholder content for async
         * data. For example, a Promise with pending content can be the first,
         * highest-priority, argument, and a non_promise loading indicator template can
         * be used as the second, lower-priority, argument. The loading indicator will
         * render immediately, and the primary content will render when the Promise
         * resolves.
         *
         * Example:
         *
         *     const content = fetch('./content.txt').then(r => r.text());
         *     html`${until(content, html`<span>Loading...</span>`)}`
         */

        const until = Object(
          _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"]
        )((...args) => (part) => {
          let state = _state.get(part);

          if (state === undefined) {
            state = {
              lastRenderedIndex: _infinity,
              values: [],
            };

            _state.set(part, state);
          }

          const previousValues = state.values;
          let previousLength = previousValues.length;
          state.values = args;

          for (let i = 0; i < args.length; i++) {
            // If we've rendered a higher-priority value already, stop.
            if (i > state.lastRenderedIndex) {
              break;
            }

            const value = args[i]; // Render non-Promise values immediately

            if (
              Object(_lib_parts_js__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(
                value
              ) ||
              typeof value.then !== "function"
            ) {
              part.setValue(value);
              state.lastRenderedIndex = i; // Since a lower-priority value will never overwrite a higher-priority
              // synchronous value, we can stop processsing now.

              break;
            } // If this is a Promise we've already handled, skip it.

            if (i < previousLength && value === previousValues[i]) {
              continue;
            } // We have a Promise that we haven't seen before, so priorities may have
            // changed. Forget what we rendered before.

            state.lastRenderedIndex = _infinity;
            previousLength = 0;
            Promise.resolve(value).then((resolvedValue) => {
              const index = state.values.indexOf(value); // If state.values doesn't contain the value, we've re-rendered without
              // the value, so don't render it. Then, only render if the value is
              // higher-priority than what's already been rendered.

              if (index > -1 && index < state.lastRenderedIndex) {
                state.lastRenderedIndex = index;
                part.setValue(resolvedValue);
                part.commit();
              }
            });
          }
        });

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
        // Not duplicate, this is for typing.
        // tslint:disable-next-line

        class HaIconNext extends _ha_icon__WEBPACK_IMPORTED_MODULE_1__[
          "HaIcon"
        ] {
          connectedCallback() {
            this.icon =
              window.getComputedStyle(this).direction === "ltr"
                ? "hass:chevron-right"
                : "hass:chevron-left"; // calling super after setting icon to have it consistently show the icon (otherwise not always shown)

            super.connectedCallback();
          }
        }
        customElements.define("ha-icon-next", HaIconNext);

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
        // Not duplicate, this is for typing.
        // tslint:disable-next-line

        const ironIconClass = customElements.get("iron-icon");
        let loaded = false;
        class HaIcon extends ironIconClass {
          constructor(...args) {
            super(...args);
            this._iconsetName = void 0;
          }

          listen(node, eventName, methodName) {
            super.listen(node, eventName, methodName);

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
          }
        }
        customElements.define("ha-icon", HaIcon);

        /***/
      },

    /***/ "./src/data/user.ts":
      /*!**************************!*\
  !*** ./src/data/user.ts ***!
  \**************************/
      /*! exports provided: SYSTEM_GROUP_ID_ADMIN, SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_READ_ONLY, fetchUsers, createUser, updateUser, deleteUser */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SYSTEM_GROUP_ID_ADMIN",
          function() {
            return SYSTEM_GROUP_ID_ADMIN;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SYSTEM_GROUP_ID_USER",
          function() {
            return SYSTEM_GROUP_ID_USER;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SYSTEM_GROUP_ID_READ_ONLY",
          function() {
            return SYSTEM_GROUP_ID_READ_ONLY;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchUsers",
          function() {
            return fetchUsers;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createUser",
          function() {
            return createUser;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateUser",
          function() {
            return updateUser;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteUser",
          function() {
            return deleteUser;
          }
        );
        const SYSTEM_GROUP_ID_ADMIN = "system-admin";
        const SYSTEM_GROUP_ID_USER = "system-users";
        const SYSTEM_GROUP_ID_READ_ONLY = "system-read-only";
        const fetchUsers = async (hass) =>
          hass.callWS({
            type: "config/auth/list",
          });
        const createUser = async (hass, name) =>
          hass.callWS({
            type: "config/auth/create",
            name,
          });
        const updateUser = async (hass, userId, params) =>
          hass.callWS(
            Object.assign({}, params, {
              type: "config/auth/update",
              user_id: userId,
            })
          );
        const deleteUser = async (hass, userId) =>
          hass.callWS({
            type: "config/auth/delete",
            user_id: userId,
          });

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

        const EventsMixin = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(
          (superClass) =>
            class extends superClass {
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
              fire(type, detail, options) {
                options = options || {};
                return Object(
                  _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__[
                    "fireEvent"
                  ]
                )(options.node || this, type, detail, options);
              }
            }
        );

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

        /**
         * Polymer Mixin to enable a localize function powered by language/resources from hass object.
         *
         * @polymerMixin
         */

        /* harmony default export */ __webpack_exports__["default"] = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(
          (superClass) =>
            class extends superClass {
              static get properties() {
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
              }

              __computeLocalize(localize) {
                return localize;
              }
            }
        );

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

        /*
         * @polymerMixin
         * @appliesMixin EventsMixin
         */

        /* harmony default export */ __webpack_exports__["default"] = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(
          (superClass) =>
            class extends superClass {
              navigate(...args) {
                Object(
                  _common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"]
                )(this, ...args);
              }
            }
        );

        /***/
      },

    /***/ "./src/panels/config/users/ha-config-user-picker.js":
      /*!**********************************************************!*\
  !*** ./src/panels/config/users/ha-config-user-picker.js ***!
  \**********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );

        let registeredDialog = false;
        /*
         * @appliesMixin LocalizeMixin
         * @appliesMixin NavigateMixin
         * @appliesMixin EventsMixin
         */

        class HaUserPicker extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"]
        )(
          Object(
            _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_9__["default"]
          )(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
                "PolymerElement"
              ]
            )
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
              "html"
            ]`
      <style>
        paper-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }
        paper-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }
        paper-fab[rtl] {
          right: auto;
          left: 16px;
        }
        paper-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        ha-card {
          max-width: 600px;
          margin: 16px auto;
          overflow: hidden;
        }
        a {
          text-decoration: none;
          color: var(--primary-text-color);
        }
      </style>

      <hass-subpage header="[[localize('ui.panel.config.users.picker.title')]]">
        <ha-card>
          <template is="dom-repeat" items="[[users]]" as="user">
            <a href="[[_computeUrl(user)]]">
              <paper-item>
                <paper-item-body two-line>
                  <div>[[_withDefault(user.name, 'Unnamed User')]]</div>
                  <div secondary="">
                    [[_computeGroup(localize, user)]]
                    <template is="dom-if" if="[[user.system_generated]]">
                      - System Generated
                    </template>
                  </div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </a>
          </template>
        </ha-card>

        <paper-fab
          is-wide$="[[isWide]]"
          icon="hass:plus"
          title="[[localize('ui.panel.config.users.picker.add_user')]]"
          on-click="_addUser"
          rtl$="[[rtl]]"
        ></paper-fab>
      </hass-subpage>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              users: Array,
              rtl: {
                type: Boolean,
                reflectToAttribute: true,
                computed: "_computeRTL(hass)",
              },
            };
          }

          connectedCallback() {
            super.connectedCallback();

            if (!registeredDialog) {
              registeredDialog = true;
              this.fire("register-dialog", {
                dialogShowEvent: "show-add-user",
                dialogTag: "ha-dialog-add-user",
                dialogImport: () =>
                  Promise.all(
                    /*! import() | ha-dialog-add-user */ [
                      __webpack_require__.e(
                        "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                      ),
                      __webpack_require__.e(
                        "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
                      ),
                      __webpack_require__.e("vendors~ha-dialog-add-user"),
                      __webpack_require__.e("ha-dialog-add-user"),
                    ]
                  ).then(
                    __webpack_require__.bind(
                      null,
                      /*! ./ha-dialog-add-user */ "./src/panels/config/users/ha-dialog-add-user.js"
                    )
                  ),
              });
            }
          }

          _withDefault(value, defaultValue) {
            return value || defaultValue;
          }

          _computeUrl(user) {
            return `/config/users/${user.id}`;
          }

          _computeGroup(localize, user) {
            return localize(`groups.${user.group_ids[0]}`);
          }

          _computeRTL(hass) {
            return Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__[
                "computeRTL"
              ]
            )(hass);
          }

          _addUser() {
            this.fire("show-add-user", {
              hass: this.hass,
              dialogClosedCallback: async ({ userId }) => {
                this.fire("reload-users");
                if (userId) this.navigate(`/config/users/${userId}`);
              },
            });
          }
        }

        customElements.define("ha-config-user-picker", HaUserPicker);

        /***/
      },

    /***/ "./src/panels/config/users/ha-config-users.js":
      /*!****************************************************!*\
  !*** ./src/panels/config/users/ha-config-users.js ***!
  \****************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js"
        );
        /* harmony import */ var _ha_config_user_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./ha-config-user-picker */ "./src/panels/config/users/ha-config-user-picker.js"
        );
        /* harmony import */ var _ha_user_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./ha-user-editor */ "./src/panels/config/users/ha-user-editor.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../data/user */ "./src/data/user.ts"
        );

        /*
         * @appliesMixin NavigateMixin
         */

        class HaConfigUsers extends Object(
          _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
              "html"
            ]`
      <app-route
        route="[[route]]"
        pattern="/:user"
        data="{{_routeData}}"
      ></app-route>

      <template is="dom-if" if='[[_equals(_routeData.user, "picker")]]'>
        <ha-config-user-picker
          hass="[[hass]]"
          users="[[_users]]"
        ></ha-config-user-picker>
      </template>
      <template
        is="dom-if"
        if='[[!_equals(_routeData.user, "picker")]]'
        restamp
      >
        <ha-user-editor
          hass="[[hass]]"
          user="[[_computeUser(_users, _routeData.user)]]"
        ></ha-user-editor>
      </template>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              route: {
                type: Object,
                observer: "_checkRoute",
              },
              _routeData: Object,
              _user: {
                type: Object,
                value: null,
              },
              _users: {
                type: Array,
                value: null,
              },
            };
          }

          ready() {
            super.ready();

            this._loadData();

            this.addEventListener("reload-users", () => this._loadData());
          }

          _handlePickUser(ev) {
            this._user = ev.detail.user;
          }

          _checkRoute(route) {
            // prevent list getting under toolbar
            Object(
              _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"]
            )(this, "iron-resize");
            this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__[
              "Debouncer"
            ].debounce(
              this._debouncer,
              _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__[
                "timeOut"
              ].after(0),
              () => {
                if (route.path === "") {
                  this.navigate(`${route.prefix}/picker`, true);
                }
              }
            );
          }

          _computeUser(users, userId) {
            return users && users.filter((u) => u.id === userId)[0];
          }

          _equals(a, b) {
            return a === b;
          }

          async _loadData() {
            this._users = await Object(
              _data_user__WEBPACK_IMPORTED_MODULE_9__["fetchUsers"]
            )(this.hass);
          }
        }

        customElements.define("ha-config-users", HaConfigUsers);

        /***/
      },

    /***/ "./src/panels/config/users/ha-user-editor.ts":
      /*!***************************************************!*\
  !*** ./src/panels/config/users/ha-user-editor.ts ***!
  \***************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var lit_html_directives_until__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! lit-html/directives/until */ "./node_modules/lit-html/directives/until.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../common/navigate */ "./src/common/navigate.ts"
        );
        /* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../data/user */ "./src/data/user.ts"
        );
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
          _getDecoratorsApi = function() {
            return api;
          };
          var api = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(O, elements) {
              ["method", "field"].forEach(function(kind) {
                elements.forEach(function(element) {
                  if (element.kind === kind && element.placement === "own") {
                    this.defineClassElement(O, element);
                  }
                }, this);
              }, this);
            },
            initializeClassElements: function(F, elements) {
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
            defineClassElement: function(receiver, element) {
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
            decorateClass: function(elements, decorators) {
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
            addElementPlacement: function(element, placements, silent) {
              var keys = placements[element.placement];
              if (!silent && keys.indexOf(element.key) !== -1) {
                throw new TypeError("Duplicated element (" + element.key + ")");
              }
              keys.push(element.key);
            },
            decorateElement: function(element, placements) {
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
            decorateConstructor: function(elements, decorators) {
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
            fromElementDescriptor: function(element) {
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
            toElementDescriptors: function(elementObjects) {
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
            toElementDescriptor: function(elementObject) {
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
            toElementFinisherExtras: function(elementObject) {
              var element = this.toElementDescriptor(elementObject);
              var finisher = _optionalCallableProperty(
                elementObject,
                "finisher"
              );
              var extras = this.toElementDescriptors(elementObject.extras);
              return { element: element, finisher: finisher, extras: extras };
            },
            fromClassDescriptor: function(elements) {
              var obj = {
                kind: "class",
                elements: elements.map(this.fromElementDescriptor, this),
              };
              var desc = { value: "Descriptor", configurable: true };
              Object.defineProperty(obj, Symbol.toStringTag, desc);
              return obj;
            },
            toClassDescriptor: function(obj) {
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
            runClassFinishers: function(constructor, finishers) {
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
            disallowProperty: function(obj, name, objectType) {
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
          var isSameElement = function(other) {
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
          return typeof key === "symbol" ? key : String(key);
        }

        function _toPrimitive(input, hint) {
          if (typeof input !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (typeof res !== "object") return res;
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

        const GROUPS = [
          _data_user__WEBPACK_IMPORTED_MODULE_8__["SYSTEM_GROUP_ID_USER"],
          _data_user__WEBPACK_IMPORTED_MODULE_8__["SYSTEM_GROUP_ID_ADMIN"],
        ];

        let HaUserEditor = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "ha-user-editor"
            ),
          ],
          function(_initialize, _LitElement) {
            class HaUserEditor extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: HaUserEditor,
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
                  key: "user",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    const hass = this.hass;
                    const user = this.user;

                    if (!hass || !user) {
                      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
                    }

                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hass-subpage
        .header=${hass.localize("ui.panel.config.users.editor.caption")}
      >
        <ha-card .header=${this._name}>
          <table class="card-content">
            <tr>
              <td>ID</td>
              <td>${user.id}</td>
            </tr>
            <tr>
              <td>Owner</td>
              <td>${user.is_owner}</td>
            </tr>
            <tr>
              <td>Group</td>
              <td>
                <select
                  @change=${this._handleGroupChange}
                  .value=${Object(
                    lit_html_directives_until__WEBPACK_IMPORTED_MODULE_1__[
                      "until"
                    ]
                  )(this.updateComplete.then(() => user.group_ids[0]))}
                >
                  ${GROUPS.map(
                    (groupId) => lit_element__WEBPACK_IMPORTED_MODULE_0__[
                      "html"
                    ]`
                      <option value=${groupId}>
                        ${hass.localize(`groups.${groupId}`)}
                      </option>
                    `
                  )}
                </select>
              </td>
            </tr>
            ${
              user.group_ids[0] ===
              _data_user__WEBPACK_IMPORTED_MODULE_8__["SYSTEM_GROUP_ID_USER"]
                ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <tr>
                    <td colspan="2" class="user-experiment">
                      The users group is a work in progress. The user will be
                      unable to administer the instance via the UI. We're still
                      auditing all management API endpoints to ensure that they
                      correctly limit access to administrators.
                    </td>
                  </tr>
                `
                : ""
            }

            <tr>
              <td>Active</td>
              <td>${user.is_active}</td>
            </tr>
            <tr>
              <td>System generated</td>
              <td>${user.system_generated}</td>
            </tr>
          </table>

          <div class="card-actions">
            <mwc-button @click=${this._handleRenameUser}>
              ${hass.localize("ui.panel.config.users.editor.rename_user")}
            </mwc-button>
            <mwc-button
              class="warning"
              @click=${this._deleteUser}
              .disabled=${user.system_generated}
            >
              ${hass.localize("ui.panel.config.users.editor.delete_user")}
            </mwc-button>
            ${
              user.system_generated
                ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  Unable to remove system generated users.
                `
                : ""
            }
          </div>
        </ha-card>
      </hass-subpage>
    `;
                  },
                },
                {
                  kind: "get",
                  key: "_name",
                  value: function _name() {
                    return this.user && (this.user.name || "Unnamed user");
                  },
                },
                {
                  kind: "method",
                  key: "_handleRenameUser",
                  value: async function _handleRenameUser(ev) {
                    ev.currentTarget.blur();
                    const newName = prompt("New name?", this.user.name);

                    if (newName === null || newName === this.user.name) {
                      return;
                    }

                    try {
                      await Object(
                        _data_user__WEBPACK_IMPORTED_MODULE_8__["updateUser"]
                      )(this.hass, this.user.id, {
                        name: newName,
                      });
                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__[
                          "fireEvent"
                        ]
                      )(this, "reload-users");
                    } catch (err) {
                      alert(`User rename failed: ${err.message}`);
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_handleGroupChange",
                  value: async function _handleGroupChange(ev) {
                    const selectEl = ev.currentTarget;
                    const newGroup = selectEl.value;

                    try {
                      await Object(
                        _data_user__WEBPACK_IMPORTED_MODULE_8__["updateUser"]
                      )(this.hass, this.user.id, {
                        group_ids: [newGroup],
                      });
                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__[
                          "fireEvent"
                        ]
                      )(this, "reload-users");
                    } catch (err) {
                      alert(`Group update failed: ${err.message}`);
                      selectEl.value = this.user.group_ids[0];
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_deleteUser",
                  value: async function _deleteUser(ev) {
                    if (
                      !confirm(`Are you sure you want to delete ${this._name}`)
                    ) {
                      ev.target.blur();
                      return;
                    }

                    try {
                      await Object(
                        _data_user__WEBPACK_IMPORTED_MODULE_8__["deleteUser"]
                      )(this.hass, this.user.id);
                    } catch (err) {
                      alert(err.code);
                      return;
                    }

                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__[
                        "fireEvent"
                      ]
                    )(this, "reload-users");
                    Object(
                      _common_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"]
                    )(this, "/config/users");
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_4__["haStyle"],
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        ha-card {
          max-width: 600px;
          margin: 0 auto 16px;
        }
        hass-subpage ha-card:first-of-type {
          direction: ltr;
        }
        table {
          width: 100%;
        }
        td {
          vertical-align: top;
        }
        .user-experiment {
          padding: 8px 0;
        }
      `,
                    ];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXVzZXJzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmVzL3VudGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24tbmV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL25hdmlnYXRlLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3VzZXJzL2hhLWNvbmZpZy11c2VyLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy91c2Vycy9oYS1jb25maWctdXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvdXNlcnMvaGEtdXNlci1lZGl0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge2lzUHJpbWl0aXZlfSBmcm9tICcuLi9saWIvcGFydHMuanMnO1xuaW1wb3J0IHtkaXJlY3RpdmUsIFBhcnR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuaW50ZXJmYWNlIEFzeW5jU3RhdGUge1xuICAvKipcbiAgICogVGhlIGxhc3QgcmVuZGVyZWQgaW5kZXggb2YgYSBjYWxsIHRvIHVudGlsKCkuIEEgdmFsdWUgb25seSByZW5kZXJzIGlmIGl0c1xuICAgKiBpbmRleCBpcyBsZXNzIHRoYW4gdGhlIGBsYXN0UmVuZGVyZWRJbmRleGAuXG4gICAqL1xuICBsYXN0UmVuZGVyZWRJbmRleDogbnVtYmVyO1xuXG4gIHZhbHVlczogdW5rbm93bltdO1xufVxuXG5jb25zdCBfc3RhdGUgPSBuZXcgV2Vha01hcDxQYXJ0LCBBc3luY1N0YXRlPigpO1xuLy8gRWZmZWN0aXZlbHkgaW5maW5pdHksIGJ1dCBhIFNNSS5cbmNvbnN0IF9pbmZpbml0eSA9IDB4N2ZmZmZmZmY7XG5cbi8qKlxuICogUmVuZGVycyBvbmUgb2YgYSBzZXJpZXMgb2YgdmFsdWVzLCBpbmNsdWRpbmcgUHJvbWlzZXMsIHRvIGEgUGFydC5cbiAqXG4gKiBWYWx1ZXMgYXJlIHJlbmRlcmVkIGluIHByaW9yaXR5IG9yZGVyLCB3aXRoIHRoZSBmaXJzdCBhcmd1bWVudCBoYXZpbmcgdGhlXG4gKiBoaWdoZXN0IHByaW9yaXR5IGFuZCB0aGUgbGFzdCBhcmd1bWVudCBoYXZpbmcgdGhlIGxvd2VzdCBwcmlvcml0eS4gSWYgYVxuICogdmFsdWUgaXMgYSBQcm9taXNlLCBsb3ctcHJpb3JpdHkgdmFsdWVzIHdpbGwgYmUgcmVuZGVyZWQgdW50aWwgaXQgcmVzb2x2ZXMuXG4gKlxuICogVGhlIHByaW9yaXR5IG9mIHZhbHVlcyBjYW4gYmUgdXNlZCB0byBjcmVhdGUgcGxhY2Vob2xkZXIgY29udGVudCBmb3IgYXN5bmNcbiAqIGRhdGEuIEZvciBleGFtcGxlLCBhIFByb21pc2Ugd2l0aCBwZW5kaW5nIGNvbnRlbnQgY2FuIGJlIHRoZSBmaXJzdCxcbiAqIGhpZ2hlc3QtcHJpb3JpdHksIGFyZ3VtZW50LCBhbmQgYSBub25fcHJvbWlzZSBsb2FkaW5nIGluZGljYXRvciB0ZW1wbGF0ZSBjYW5cbiAqIGJlIHVzZWQgYXMgdGhlIHNlY29uZCwgbG93ZXItcHJpb3JpdHksIGFyZ3VtZW50LiBUaGUgbG9hZGluZyBpbmRpY2F0b3Igd2lsbFxuICogcmVuZGVyIGltbWVkaWF0ZWx5LCBhbmQgdGhlIHByaW1hcnkgY29udGVudCB3aWxsIHJlbmRlciB3aGVuIHRoZSBQcm9taXNlXG4gKiByZXNvbHZlcy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBjb25zdCBjb250ZW50ID0gZmV0Y2goJy4vY29udGVudC50eHQnKS50aGVuKHIgPT4gci50ZXh0KCkpO1xuICogICAgIGh0bWxgJHt1bnRpbChjb250ZW50LCBodG1sYDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+YCl9YFxuICovXG5leHBvcnQgY29uc3QgdW50aWwgPSBkaXJlY3RpdmUoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gKHBhcnQ6IFBhcnQpID0+IHtcbiAgbGV0IHN0YXRlID0gX3N0YXRlLmdldChwYXJ0KSE7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhdGUgPSB7XG4gICAgICBsYXN0UmVuZGVyZWRJbmRleDogX2luZmluaXR5LFxuICAgICAgdmFsdWVzOiBbXSxcbiAgICB9O1xuICAgIF9zdGF0ZS5zZXQocGFydCwgc3RhdGUpO1xuICB9XG4gIGNvbnN0IHByZXZpb3VzVmFsdWVzID0gc3RhdGUudmFsdWVzO1xuICBsZXQgcHJldmlvdXNMZW5ndGggPSBwcmV2aW91c1ZhbHVlcy5sZW5ndGg7XG4gIHN0YXRlLnZhbHVlcyA9IGFyZ3M7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gSWYgd2UndmUgcmVuZGVyZWQgYSBoaWdoZXItcHJpb3JpdHkgdmFsdWUgYWxyZWFkeSwgc3RvcC5cbiAgICBpZiAoaSA+IHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4KSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3NbaV07XG5cbiAgICAvLyBSZW5kZXIgbm9uLVByb21pc2UgdmFsdWVzIGltbWVkaWF0ZWx5XG4gICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSB8fFxuICAgICAgICB0eXBlb2YgKHZhbHVlIGFzIHt0aGVuPzogdW5rbm93bn0pLnRoZW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBpO1xuICAgICAgLy8gU2luY2UgYSBsb3dlci1wcmlvcml0eSB2YWx1ZSB3aWxsIG5ldmVyIG92ZXJ3cml0ZSBhIGhpZ2hlci1wcmlvcml0eVxuICAgICAgLy8gc3luY2hyb25vdXMgdmFsdWUsIHdlIGNhbiBzdG9wIHByb2Nlc3NzaW5nIG5vdy5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSBQcm9taXNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCwgc2tpcCBpdC5cbiAgICBpZiAoaSA8IHByZXZpb3VzTGVuZ3RoICYmIHZhbHVlID09PSBwcmV2aW91c1ZhbHVlc1tpXSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gV2UgaGF2ZSBhIFByb21pc2UgdGhhdCB3ZSBoYXZlbid0IHNlZW4gYmVmb3JlLCBzbyBwcmlvcml0aWVzIG1heSBoYXZlXG4gICAgLy8gY2hhbmdlZC4gRm9yZ2V0IHdoYXQgd2UgcmVuZGVyZWQgYmVmb3JlLlxuICAgIHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4ID0gX2luZmluaXR5O1xuICAgIHByZXZpb3VzTGVuZ3RoID0gMDtcblxuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbigocmVzb2x2ZWRWYWx1ZTogdW5rbm93bikgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS52YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAvLyBJZiBzdGF0ZS52YWx1ZXMgZG9lc24ndCBjb250YWluIHRoZSB2YWx1ZSwgd2UndmUgcmUtcmVuZGVyZWQgd2l0aG91dFxuICAgICAgLy8gdGhlIHZhbHVlLCBzbyBkb24ndCByZW5kZXIgaXQuIFRoZW4sIG9ubHkgcmVuZGVyIGlmIHRoZSB2YWx1ZSBpc1xuICAgICAgLy8gaGlnaGVyLXByaW9yaXR5IHRoYW4gd2hhdCdzIGFscmVhZHkgYmVlbiByZW5kZXJlZC5cbiAgICAgIGlmIChpbmRleCA+IC0xICYmIGluZGV4IDwgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXgpIHtcbiAgICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgcGFydC5zZXRWYWx1ZShyZXNvbHZlZFZhbHVlKTtcbiAgICAgICAgcGFydC5jb21taXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhSWNvbiB9IGZyb20gXCIuL2hhLWljb25cIjtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbk5leHQgZXh0ZW5kcyBIYUljb24ge1xuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pY29uID1cbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJsdHJcIlxuICAgICAgICA/IFwiaGFzczpjaGV2cm9uLXJpZ2h0XCJcbiAgICAgICAgOiBcImhhc3M6Y2hldnJvbi1sZWZ0XCI7XG5cbiAgICAvLyBjYWxsaW5nIHN1cGVyIGFmdGVyIHNldHRpbmcgaWNvbiB0byBoYXZlIGl0IGNvbnNpc3RlbnRseSBzaG93IHRoZSBpY29uIChvdGhlcndpc2Ugbm90IGFsd2F5cyBzaG93bilcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uLW5leHRcIjogSGFJY29uTmV4dDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uLW5leHRcIiwgSGFJY29uTmV4dCk7XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IENyZWRlbnRpYWwgfSBmcm9tIFwiLi9hdXRoXCI7XG5cbmV4cG9ydCBjb25zdCBTWVNURU1fR1JPVVBfSURfQURNSU4gPSBcInN5c3RlbS1hZG1pblwiO1xuZXhwb3J0IGNvbnN0IFNZU1RFTV9HUk9VUF9JRF9VU0VSID0gXCJzeXN0ZW0tdXNlcnNcIjtcbmV4cG9ydCBjb25zdCBTWVNURU1fR1JPVVBfSURfUkVBRF9PTkxZID0gXCJzeXN0ZW0tcmVhZC1vbmx5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNfb3duZXI6IGJvb2xlYW47XG4gIGlzX2FjdGl2ZTogYm9vbGVhbjtcbiAgc3lzdGVtX2dlbmVyYXRlZDogYm9vbGVhbjtcbiAgZ3JvdXBfaWRzOiBzdHJpbmdbXTtcbiAgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxbXTtcbn1cblxuaW50ZXJmYWNlIFVwZGF0ZVVzZXJQYXJhbXMge1xuICBuYW1lPzogVXNlcltcIm5hbWVcIl07XG4gIGdyb3VwX2lkcz86IFVzZXJbXCJncm91cF9pZHNcIl07XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPFVzZXJbXT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvbGlzdFwiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAoaGFzczogSG9tZUFzc2lzdGFudCwgbmFtZTogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzx7IHVzZXI6IFVzZXIgfT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvY3JlYXRlXCIsXG4gICAgbmFtZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB1c2VySWQ6IHN0cmluZyxcbiAgcGFyYW1zOiBVcGRhdGVVc2VyUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPHsgdXNlcjogVXNlciB9Pih7XG4gICAgLi4ucGFyYW1zLFxuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvdXBkYXRlXCIsXG4gICAgdXNlcl9pZDogdXNlcklkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoaGFzczogSG9tZUFzc2lzdGFudCwgdXNlcklkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPHZvaWQ+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hdXRoL2RlbGV0ZVwiLFxuICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgfSk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuXG4vKlxuICogQHBvbHltZXJNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgbmF2aWdhdGUoLi4uYXJncykge1xuICAgICAgICBuYXZpZ2F0ZSh0aGlzLCAuLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZmFiL3BhcGVyLWZhYlwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IE5hdmlnYXRlTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9uYXZpZ2F0ZS1taXhpblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmxldCByZWdpc3RlcmVkRGlhbG9nID0gZmFsc2U7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTmF2aWdhdGVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYVVzZXJQaWNrZXIgZXh0ZW5kcyBFdmVudHNNaXhpbihcbiAgTmF2aWdhdGVNaXhpbihMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSlcbikge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1mYWIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1mYWJbaXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1mYWJbcnRsXSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1mYWJbcnRsXVtpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTZweCBhdXRvO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy51c2Vycy5waWNrZXIudGl0bGUnKV1dXCI+XG4gICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbdXNlcnNdXVwiIGFzPVwidXNlclwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIltbX2NvbXB1dGVVcmwodXNlcildXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICAgICAgICAgICAgPGRpdj5bW193aXRoRGVmYXVsdCh1c2VyLm5hbWUsICdVbm5hbWVkIFVzZXInKV1dPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICBbW19jb21wdXRlR3JvdXAobG9jYWxpemUsIHVzZXIpXV1cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3VzZXIuc3lzdGVtX2dlbmVyYXRlZF1dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgLSBTeXN0ZW0gR2VuZXJhdGVkXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICA8aGEtaWNvbi1uZXh0PjwvaGEtaWNvbi1uZXh0PlxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9oYS1jYXJkPlxuXG4gICAgICAgIDxwYXBlci1mYWJcbiAgICAgICAgICBpcy13aWRlJD1cIltbaXNXaWRlXV1cIlxuICAgICAgICAgIGljb249XCJoYXNzOnBsdXNcIlxuICAgICAgICAgIHRpdGxlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnVzZXJzLnBpY2tlci5hZGRfdXNlcicpXV1cIlxuICAgICAgICAgIG9uLWNsaWNrPVwiX2FkZFVzZXJcIlxuICAgICAgICAgIHJ0bCQ9XCJbW3J0bF1dXCJcbiAgICAgICAgPjwvcGFwZXItZmFiPlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgdXNlcnM6IEFycmF5LFxuXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTChoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIGlmICghcmVnaXN0ZXJlZERpYWxvZykge1xuICAgICAgcmVnaXN0ZXJlZERpYWxvZyA9IHRydWU7XG4gICAgICB0aGlzLmZpcmUoXCJyZWdpc3Rlci1kaWFsb2dcIiwge1xuICAgICAgICBkaWFsb2dTaG93RXZlbnQ6IFwic2hvdy1hZGQtdXNlclwiLFxuICAgICAgICBkaWFsb2dUYWc6IFwiaGEtZGlhbG9nLWFkZC11c2VyXCIsXG4gICAgICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJoYS1kaWFsb2ctYWRkLXVzZXJcIiAqLyBcIi4vaGEtZGlhbG9nLWFkZC11c2VyXCIpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3dpdGhEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgfHwgZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgX2NvbXB1dGVVcmwodXNlcikge1xuICAgIHJldHVybiBgL2NvbmZpZy91c2Vycy8ke3VzZXIuaWR9YDtcbiAgfVxuXG4gIF9jb21wdXRlR3JvdXAobG9jYWxpemUsIHVzZXIpIHtcbiAgICByZXR1cm4gbG9jYWxpemUoYGdyb3Vwcy4ke3VzZXIuZ3JvdXBfaWRzWzBdfWApO1xuICB9XG5cbiAgX2NvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG5cbiAgX2FkZFVzZXIoKSB7XG4gICAgdGhpcy5maXJlKFwic2hvdy1hZGQtdXNlclwiLCB7XG4gICAgICBoYXNzOiB0aGlzLmhhc3MsXG4gICAgICBkaWFsb2dDbG9zZWRDYWxsYmFjazogYXN5bmMgKHsgdXNlcklkIH0pID0+IHtcbiAgICAgICAgdGhpcy5maXJlKFwicmVsb2FkLXVzZXJzXCIpO1xuICAgICAgICBpZiAodXNlcklkKSB0aGlzLm5hdmlnYXRlKGAvY29uZmlnL3VzZXJzLyR7dXNlcklkfWApO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctdXNlci1waWNrZXJcIiwgSGFVc2VyUGlja2VyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1yb3V0ZS9hcHAtcm91dGVcIjtcbmltcG9ydCB7IHRpbWVPdXQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmNcIjtcbmltcG9ydCB7IERlYm91bmNlciB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IE5hdmlnYXRlTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9uYXZpZ2F0ZS1taXhpblwiO1xuXG5pbXBvcnQgXCIuL2hhLWNvbmZpZy11c2VyLXBpY2tlclwiO1xuaW1wb3J0IFwiLi9oYS11c2VyLWVkaXRvclwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgZmV0Y2hVc2VycyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3VzZXJcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTmF2aWdhdGVNaXhpblxuICovXG5jbGFzcyBIYUNvbmZpZ1VzZXJzIGV4dGVuZHMgTmF2aWdhdGVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGFwcC1yb3V0ZVxuICAgICAgICByb3V0ZT1cIltbcm91dGVdXVwiXG4gICAgICAgIHBhdHRlcm49XCIvOnVzZXJcIlxuICAgICAgICBkYXRhPVwie3tfcm91dGVEYXRhfX1cIlxuICAgICAgPjwvYXBwLXJvdXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj0nW1tfZXF1YWxzKF9yb3V0ZURhdGEudXNlciwgXCJwaWNrZXJcIildXSc+XG4gICAgICAgIDxoYS1jb25maWctdXNlci1waWNrZXJcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHVzZXJzPVwiW1tfdXNlcnNdXVwiXG4gICAgICAgID48L2hhLWNvbmZpZy11c2VyLXBpY2tlcj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGVcbiAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICBpZj0nW1shX2VxdWFscyhfcm91dGVEYXRhLnVzZXIsIFwicGlja2VyXCIpXV0nXG4gICAgICAgIHJlc3RhbXBcbiAgICAgID5cbiAgICAgICAgPGhhLXVzZXItZWRpdG9yXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICB1c2VyPVwiW1tfY29tcHV0ZVVzZXIoX3VzZXJzLCBfcm91dGVEYXRhLnVzZXIpXV1cIlxuICAgICAgICA+PC9oYS11c2VyLWVkaXRvcj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgcm91dGU6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfY2hlY2tSb3V0ZVwiLFxuICAgICAgfSxcbiAgICAgIF9yb3V0ZURhdGE6IE9iamVjdCxcbiAgICAgIF91c2VyOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuICAgICAgX3VzZXJzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fbG9hZERhdGEoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWxvYWQtdXNlcnNcIiwgKCkgPT4gdGhpcy5fbG9hZERhdGEoKSk7XG4gIH1cblxuICBfaGFuZGxlUGlja1VzZXIoZXYpIHtcbiAgICB0aGlzLl91c2VyID0gZXYuZGV0YWlsLnVzZXI7XG4gIH1cblxuICBfY2hlY2tSb3V0ZShyb3V0ZSkge1xuICAgIC8vIHByZXZlbnQgbGlzdCBnZXR0aW5nIHVuZGVyIHRvb2xiYXJcbiAgICBmaXJlRXZlbnQodGhpcywgXCJpcm9uLXJlc2l6ZVwiKTtcblxuICAgIHRoaXMuX2RlYm91bmNlciA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgIHRoaXMuX2RlYm91bmNlcixcbiAgICAgIHRpbWVPdXQuYWZ0ZXIoMCksXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmIChyb3V0ZS5wYXRoID09PSBcIlwiKSB7XG4gICAgICAgICAgdGhpcy5uYXZpZ2F0ZShgJHtyb3V0ZS5wcmVmaXh9L3BpY2tlcmAsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlVXNlcih1c2VycywgdXNlcklkKSB7XG4gICAgcmV0dXJuIHVzZXJzICYmIHVzZXJzLmZpbHRlcigodSkgPT4gdS5pZCA9PT0gdXNlcklkKVswXTtcbiAgfVxuXG4gIF9lcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiO1xuICB9XG5cbiAgYXN5bmMgX2xvYWREYXRhKCkge1xuICAgIHRoaXMuX3VzZXJzID0gYXdhaXQgZmV0Y2hVc2Vycyh0aGlzLmhhc3MpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy11c2Vyc1wiLCBIYUNvbmZpZ1VzZXJzKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxuICBDU1NSZXN1bHRBcnJheSxcbiAgY3NzLFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyB1bnRpbCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL3VudGlsXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHtcbiAgVXNlcixcbiAgZGVsZXRlVXNlcixcbiAgdXBkYXRlVXNlcixcbiAgU1lTVEVNX0dST1VQX0lEX1VTRVIsXG4gIFNZU1RFTV9HUk9VUF9JRF9BRE1JTixcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvdXNlclwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcInJlbG9hZC11c2Vyc1wiOiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuY29uc3QgR1JPVVBTID0gW1NZU1RFTV9HUk9VUF9JRF9VU0VSLCBTWVNURU1fR1JPVVBfSURfQURNSU5dO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLXVzZXItZWRpdG9yXCIpXG5jbGFzcyBIYVVzZXJFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdXNlcj86IFVzZXI7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IGhhc3MgPSB0aGlzLmhhc3M7XG4gICAgY29uc3QgdXNlciA9IHRoaXMudXNlcjtcbiAgICBpZiAoIWhhc3MgfHwgIXVzZXIpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy1zdWJwYWdlXG4gICAgICAgIC5oZWFkZXI9JHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5jYXB0aW9uXCIpfVxuICAgICAgPlxuICAgICAgICA8aGEtY2FyZCAuaGVhZGVyPSR7dGhpcy5fbmFtZX0+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5JRDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4ke3VzZXIuaWR9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5Pd25lcjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4ke3VzZXIuaXNfb3duZXJ9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5Hcm91cDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5faGFuZGxlR3JvdXBDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAudmFsdWU9JHt1bnRpbChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHVzZXIuZ3JvdXBfaWRzWzBdKVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAke0dST1VQUy5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChncm91cElkKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JHtncm91cElkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShgZ3JvdXBzLiR7Z3JvdXBJZH1gKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAke3VzZXIuZ3JvdXBfaWRzWzBdID09PSBTWVNURU1fR1JPVVBfSURfVVNFUlxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiIGNsYXNzPVwidXNlci1leHBlcmltZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgVGhlIHVzZXJzIGdyb3VwIGlzIGEgd29yayBpbiBwcm9ncmVzcy4gVGhlIHVzZXIgd2lsbCBiZVxuICAgICAgICAgICAgICAgICAgICAgIHVuYWJsZSB0byBhZG1pbmlzdGVyIHRoZSBpbnN0YW5jZSB2aWEgdGhlIFVJLiBXZSdyZSBzdGlsbFxuICAgICAgICAgICAgICAgICAgICAgIGF1ZGl0aW5nIGFsbCBtYW5hZ2VtZW50IEFQSSBlbmRwb2ludHMgdG8gZW5zdXJlIHRoYXQgdGhleVxuICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RseSBsaW1pdCBhY2Nlc3MgdG8gYWRtaW5pc3RyYXRvcnMuXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5BY3RpdmU8L3RkPlxuICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmlzX2FjdGl2ZX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPlN5c3RlbSBnZW5lcmF0ZWQ8L3RkPlxuICAgICAgICAgICAgICA8dGQ+JHt1c2VyLnN5c3RlbV9nZW5lcmF0ZWR9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2hhbmRsZVJlbmFtZVVzZXJ9PlxuICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLnJlbmFtZV91c2VyXCIpfVxuICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgY2xhc3M9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fZGVsZXRlVXNlcn1cbiAgICAgICAgICAgICAgLmRpc2FibGVkPSR7dXNlci5zeXN0ZW1fZ2VuZXJhdGVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLmRlbGV0ZV91c2VyXCIpfVxuICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgJHt1c2VyLnN5c3RlbV9nZW5lcmF0ZWRcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgVW5hYmxlIHRvIHJlbW92ZSBzeXN0ZW0gZ2VuZXJhdGVkIHVzZXJzLlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX25hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlciAmJiAodGhpcy51c2VyLm5hbWUgfHwgXCJVbm5hbWVkIHVzZXJcIik7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVSZW5hbWVVc2VyKGV2KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZXYuY3VycmVudFRhcmdldC5ibHVyKCk7XG4gICAgY29uc3QgbmV3TmFtZSA9IHByb21wdChcIk5ldyBuYW1lP1wiLCB0aGlzLnVzZXIhLm5hbWUpO1xuICAgIGlmIChuZXdOYW1lID09PSBudWxsIHx8IG5ld05hbWUgPT09IHRoaXMudXNlciEubmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1cGRhdGVVc2VyKHRoaXMuaGFzcyEsIHRoaXMudXNlciEuaWQsIHtcbiAgICAgICAgbmFtZTogbmV3TmFtZSxcbiAgICAgIH0pO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwicmVsb2FkLXVzZXJzXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoYFVzZXIgcmVuYW1lIGZhaWxlZDogJHtlcnIubWVzc2FnZX1gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVHcm91cENoYW5nZShldik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlbGVjdEVsID0gZXYuY3VycmVudFRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBjb25zdCBuZXdHcm91cCA9IHNlbGVjdEVsLnZhbHVlO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1cGRhdGVVc2VyKHRoaXMuaGFzcyEsIHRoaXMudXNlciEuaWQsIHtcbiAgICAgICAgZ3JvdXBfaWRzOiBbbmV3R3JvdXBdLFxuICAgICAgfSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJyZWxvYWQtdXNlcnNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgR3JvdXAgdXBkYXRlIGZhaWxlZDogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgIHNlbGVjdEVsLnZhbHVlID0gdGhpcy51c2VyIS5ncm91cF9pZHNbMF07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGVsZXRlVXNlcihldik6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke3RoaXMuX25hbWV9YCkpIHtcbiAgICAgIGV2LnRhcmdldC5ibHVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkZWxldGVVc2VyKHRoaXMuaGFzcyEsIHRoaXMudXNlciEuaWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyLmNvZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJyZWxvYWQtdXNlcnNcIik7XG4gICAgbmF2aWdhdGUodGhpcywgXCIvY29uZmlnL3VzZXJzXCIpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTZweDtcbiAgICAgICAgfVxuICAgICAgICBoYXNzLXN1YnBhZ2UgaGEtY2FyZDpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgdGQge1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXItZXhwZXJpbWVudCB7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtdXNlci1lZGl0b3JcIjogSGFVc2VyRWRpdG9yO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBVkE7QUFrQkE7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBaUJBO0FBRUE7QUFEQTtBQUlBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFPQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1qQkFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUF0SEE7QUFDQTtBQXVIQTs7Ozs7Ozs7Ozs7O0FDakpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5GQTtBQUNBO0FBb0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7OztBQUlBOzs7Ozs7QUFNQTtBQUNBOztBQUlBO0FBRUE7QUFDQTs7QUFIQTs7OztBQVVBOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFjQTs7OztBQUlBOzs7OztBQUtBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBOztBQUFBOzs7O0FBbkVBO0FBNEVBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwQkE7OztBQXRLQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
