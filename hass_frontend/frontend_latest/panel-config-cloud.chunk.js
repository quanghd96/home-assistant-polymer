(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-cloud"],
  {
    /***/ "./src/common/datetime/format_date_time.ts":
      /*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! fecha */ "./node_modules/fecha/src/fecha.js"
        );
        // Check for support of native locale string options

        function toLocaleStringSupportsOptions() {
          try {
            new Date().toLocaleString("i");
          } catch (e) {
            return e.name === "RangeError";
          }

          return false;
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = toLocaleStringSupportsOptions()
          ? (dateObj, locales) =>
              dateObj.toLocaleString(locales, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })
          : (dateObj) =>
              fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(
                dateObj,
                "haDateTime"
              );

        /***/
      },

    /***/ "./src/components/buttons/ha-call-api-button.js":
      /*!******************************************************!*\
  !*** ./src/components/buttons/ha-call-api-button.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        class HaCallApiButton extends lit_element__WEBPACK_IMPORTED_MODULE_0__[
          "LitElement"
        ] {
          render() {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-progress-button
        .progress="${this.progress}"
        @click="${this._buttonTapped}"
        ?disabled="${this.disabled}"
        ><slot></slot
      ></ha-progress-button>
    `;
          }

          constructor() {
            super();
            this.method = "POST";
            this.data = {};
            this.disabled = false;
            this.progress = false;
          }

          static get properties() {
            return {
              hass: {},
              progress: Boolean,
              path: String,
              method: String,
              data: {},
              disabled: Boolean,
            };
          }

          get progressButton() {
            return this.renderRoot.querySelector("ha-progress-button");
          }

          async _buttonTapped() {
            this.progress = true;
            const eventData = {
              method: this.method,
              path: this.path,
              data: this.data,
            };

            try {
              const resp = await this.hass.callApi(
                this.method,
                this.path,
                this.data
              );
              this.progress = false;
              this.progressButton.actionSuccess();
              eventData.success = true;
              eventData.response = resp;
            } catch (err) {
              this.progress = false;
              this.progressButton.actionError();
              eventData.success = false;
              eventData.response = err;
            }

            Object(
              _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"]
            )(this, "hass-api-called", eventData);
          }
        }

        customElements.define("ha-call-api-button", HaCallApiButton);

        /***/
      },

    /***/ "./src/components/buttons/ha-progress-button.js":
      /*!******************************************************!*\
  !*** ./src/components/buttons/ha-progress-button.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );

        class HaProgressButton extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style>
        .container {
          position: relative;
          display: inline-block;
        }

        mwc-button {
          transition: all 1s;
        }

        .success mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-green-500);
          transition: none;
        }

        .error mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-red-500);
          transition: none;
        }

        .progress {
          @apply --layout;
          @apply --layout-center-center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      </style>
      <div class="container" id="container">
        <mwc-button
          id="button"
          disabled="[[computeDisabled(disabled, progress)]]"
          on-click="buttonTapped"
        >
          <slot></slot>
        </mwc-button>
        <template is="dom-if" if="[[progress]]">
          <div class="progress"><paper-spinner active=""></paper-spinner></div>
        </template>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
              },
              progress: {
                type: Boolean,
                value: false,
              },
              disabled: {
                type: Boolean,
                value: false,
              },
            };
          }

          tempClass(className) {
            var classList = this.$.container.classList;
            classList.add(className);
            setTimeout(() => {
              classList.remove(className);
            }, 1000);
          }

          ready() {
            super.ready();
            this.addEventListener("click", (ev) => this.buttonTapped(ev));
          }

          buttonTapped(ev) {
            if (this.progress) ev.stopPropagation();
          }

          actionSuccess() {
            this.tempClass("success");
          }

          actionError() {
            this.tempClass("error");
          }

          computeDisabled(disabled, progress) {
            return disabled || progress;
          }
        }

        customElements.define("ha-progress-button", HaProgressButton);

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

    /***/ "./src/data/alexa.ts":
      /*!***************************!*\
  !*** ./src/data/alexa.ts ***!
  \***************************/
      /*! exports provided: fetchCloudAlexaEntities, syncCloudAlexaEntities */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchCloudAlexaEntities",
          function() {
            return fetchCloudAlexaEntities;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "syncCloudAlexaEntities",
          function() {
            return syncCloudAlexaEntities;
          }
        );
        const fetchCloudAlexaEntities = (hass) =>
          hass.callWS({
            type: "cloud/alexa/entities",
          });
        const syncCloudAlexaEntities = (hass) =>
          hass.callWS({
            type: "cloud/alexa/sync",
          });

        /***/
      },

    /***/ "./src/data/webhook.ts":
      /*!*****************************!*\
  !*** ./src/data/webhook.ts ***!
  \*****************************/
      /*! exports provided: fetchWebhooks */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchWebhooks",
          function() {
            return fetchWebhooks;
          }
        );
        const fetchWebhooks = (hass) =>
          hass.callWS({
            type: "webhook/list",
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

    /***/ "./src/panels/config/cloud/account/cloud-account.js":
      /*!**********************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-account.js ***!
  \**********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _cloud_webhooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./cloud-webhooks */ "./src/panels/config/cloud/account/cloud-webhooks.ts"
        );
        /* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../data/cloud */ "./src/data/cloud.ts"
        );
        /* harmony import */ var _cloud_alexa_pref__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./cloud-alexa-pref */ "./src/panels/config/cloud/account/cloud-alexa-pref.ts"
        );
        /* harmony import */ var _cloud_google_pref__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./cloud-google-pref */ "./src/panels/config/cloud/account/cloud-google-pref.ts"
        );
        /* harmony import */ var _cloud_remote_pref__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./cloud-remote-pref */ "./src/panels/config/cloud/account/cloud-remote-pref.ts"
        );

        /*
         * @appliesMixin EventsMixin
         * @appliesMixin LocalizeMixin
         */

        class CloudAccount extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"]
        )(
          Object(
            _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__["default"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
              "html"
            ]`
      <style include="iron-flex ha-style">
        [slot="introduction"] {
          margin: -1em 0;
        }
        [slot="introduction"] a {
          color: var(--primary-color);
        }
        .content {
          padding-bottom: 24px;
          direction: ltr;
        }
        .account-row {
          display: flex;
          padding: 0 16px;
        }
        mwc-button {
          align-self: center;
        }
        .soon {
          font-style: italic;
          margin-top: 24px;
          text-align: center;
        }
        .nowrap {
          white-space: nowrap;
        }
        .wrap {
          white-space: normal;
        }
        .status {
          text-transform: capitalize;
          padding: 16px;
        }
        a {
          color: var(--primary-color);
        }
      </style>
      <hass-subpage header="JAVIS Home Cloud">
        <div class="content">
          <ha-config-section is-wide="[[isWide]]">
            <span slot="header">JAVIS Home Cloud</span>
            <div slot="introduction">
              <p>
                Thank you for being part of JAVIS Home Cloud. It's because of
                people like you that we are able to make a great home automation
                experience for everyone. Thank you!
              </p>
            </div>

            <ha-card header="Nabu Casa Account">
              <div class="account-row">
                <paper-item-body two-line="">
                  [[cloudStatus.email]]
                  <div secondary class="wrap">
                    [[_formatSubscription(_subscription)]]
                  </div>
                </paper-item-body>
              </div>

              <div class="account-row">
                <paper-item-body> Cloud connection status </paper-item-body>
                <div class="status">[[cloudStatus.cloud]]</div>
              </div>

              <div class="card-actions">
                <a href="https://account.nabucasa.com" target="_blank"
                  ><mwc-button>Manage Account</mwc-button></a
                >
                <mwc-button style="float: right" on-click="handleLogout"
                  >Sign out</mwc-button
                >
              </div>
            </ha-card>
          </ha-config-section>

          <ha-config-section is-wide="[[isWide]]">
            <span slot="header">Integrations</span>
            <div slot="introduction">
              <p>
                Integrations for JAVIS Home Cloud allow you to connect with
                services in the cloud without having to expose your Home
                Assistant instance publicly on the internet.
              </p>
              <p>
                Check the website for
                <a href="https://www.nabucasa.com" target="_blank"
                  >all available features</a
                >.
              </p>
            </div>

            <cloud-remote-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-remote-pref>

            <cloud-alexa-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-alexa-pref>

            <cloud-google-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-google-pref>

            <cloud-webhooks
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-webhooks>
          </ha-config-section>
        </div>
      </hass-subpage>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              isWide: Boolean,
              cloudStatus: Object,
              _subscription: {
                type: Object,
                value: null,
              },
            };
          }

          ready() {
            super.ready();

            this._fetchSubscriptionInfo();
          }

          _computeRemoteConnected(connected) {
            return connected ? "Connected" : "Not Connected";
          }

          async _fetchSubscriptionInfo() {
            this._subscription = await Object(
              _data_cloud__WEBPACK_IMPORTED_MODULE_14__[
                "fetchCloudSubscriptionInfo"
              ]
            )(this.hass);

            if (
              this._subscription.provider &&
              this.cloudStatus &&
              this.cloudStatus.cloud !== "connected"
            ) {
              this.fire("ha-refresh-cloud-status");
            }
          }

          handleLogout() {
            this.hass
              .callApi("post", "cloud/logout")
              .then(() => this.fire("ha-refresh-cloud-status"));
          }

          _formatSubscription(subInfo) {
            if (subInfo === null) {
              return "Fetching subscription…";
            }

            let description = subInfo.human_description;

            if (subInfo.plan_renewal_date) {
              description = description.replace(
                "{periodEnd}",
                Object(
                  _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_11__[
                    "default"
                  ]
                )(
                  new Date(subInfo.plan_renewal_date * 1000),
                  this.hass.language
                )
              );
            }

            return description;
          }
        }

        customElements.define("cloud-account", CloudAccount);

        /***/
      },

    /***/ "./src/panels/config/cloud/account/cloud-alexa-pref.ts":
      /*!*************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-alexa-pref.ts ***!
  \*************************************************************/
      /*! exports provided: CloudAlexaPref */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CloudAlexaPref",
          function() {
            return CloudAlexaPref;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../data/cloud */ "./src/data/cloud.ts"
        );
        /* harmony import */ var _data_alexa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../data/alexa */ "./src/data/alexa.ts"
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

        // tslint:disable-next-line

        let CloudAlexaPref = _decorate(
          null,
          function(_initialize, _LitElement) {
            class CloudAlexaPref extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: CloudAlexaPref,
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
                  key: "cloudStatus",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_syncing",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this.cloudStatus) {
                      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
                    }

                    const {
                      alexa_enabled,
                      alexa_report_state,
                    } = this.cloudStatus.prefs;
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card header="Alexa">
        <paper-toggle-button
          .checked=${alexa_enabled}
          @change=${this._enabledToggleChanged}
        ></paper-toggle-button>
        <div class="card-content">
          With the Alexa integration for JAVIS Home Cloud you'll be able to
          control all your JAVIS Home devices via any Alexa-enabled device.
          <ul>
            <li>
              <a
                href="https://skills-store.amazon.com/deeplink/dp/B0772J1QKB?deviceType=app"
                target="_blank"
              >
                Enable the JAVIS Home skill for Alexa
              </a>
            </li>
            <li>
              <a
                href="https://www.nabucasa.com/config/amazon_alexa/"
                target="_blank"
              >
                Config documentation
              </a>
            </li>
          </ul>
          <em
            >This integration requires an Alexa-enabled device like the Amazon
            Echo.</em
          >
          ${
            alexa_enabled
              ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <h3>Enable State Reporting</h3>
                <p>
                  If you enable state reporting, JAVIS Home will send
                  <b>all</b> state changes of exposed entities to Amazon. This
                  allows you to always see the latest states in the Alexa app
                  and use the state changes to create routines.
                </p>
                <paper-toggle-button
                  .checked=${alexa_report_state}
                  @change=${this._reportToggleChanged}
                ></paper-toggle-button>
              `
              : ""
          }
        </div>
        <div class="card-actions">
          <mwc-button @click=${this._handleSync} .disabled=${this._syncing}>
            Sync Entities
          </mwc-button>
          <div class="spacer"></div>
          <a href="/config/cloud/alexa">
            <mwc-button>Manage Entities</mwc-button>
          </a>
        </div>
      </ha-card>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_handleSync",
                  value: async function _handleSync() {
                    this._syncing = true;

                    try {
                      await Object(
                        _data_alexa__WEBPACK_IMPORTED_MODULE_6__[
                          "syncCloudAlexaEntities"
                        ]
                      )(this.hass);
                    } catch (err) {
                      alert(`Failed to sync entities: ${err.body.message}`);
                    } finally {
                      this._syncing = false;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_enabledToggleChanged",
                  value: async function _enabledToggleChanged(ev) {
                    const toggle = ev.target;

                    try {
                      await Object(
                        _data_cloud__WEBPACK_IMPORTED_MODULE_5__[
                          "updateCloudPref"
                        ]
                      )(this.hass, {
                        alexa_enabled: toggle.checked,
                      });
                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__[
                          "fireEvent"
                        ]
                      )(this, "ha-refresh-cloud-status");
                    } catch (err) {
                      toggle.checked = !toggle.checked;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_reportToggleChanged",
                  value: async function _reportToggleChanged(ev) {
                    const toggle = ev.target;

                    try {
                      await Object(
                        _data_cloud__WEBPACK_IMPORTED_MODULE_5__[
                          "updateCloudPref"
                        ]
                      )(this.hass, {
                        alexa_report_state: toggle.checked,
                      });
                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__[
                          "fireEvent"
                        ]
                      )(this, "ha-refresh-cloud-status");
                    } catch (err) {
                      alert(
                        `Unable to ${
                          toggle.checked ? "enable" : "disable"
                        } report state. ${err.message}`
                      );
                      toggle.checked = !toggle.checked;
                    }
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      a {
        color: var(--primary-color);
      }
      ha-card > paper-toggle-button {
        margin: -4px 0;
        position: absolute;
        right: 8px;
        top: 32px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
      h3 {
        margin-bottom: 0;
      }
      h3 + p {
        margin-top: 0.5em;
      }
    `;
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );
        customElements.define("cloud-alexa-pref", CloudAlexaPref);

        /***/
      },

    /***/ "./src/panels/config/cloud/account/cloud-google-pref.ts":
      /*!**************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-google-pref.ts ***!
  \**************************************************************/
      /*! exports provided: CloudGooglePref */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CloudGooglePref",
          function() {
            return CloudGooglePref;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../data/cloud */ "./src/data/cloud.ts"
        );

        // tslint:disable-next-line

        class CloudGooglePref extends lit_element__WEBPACK_IMPORTED_MODULE_0__[
          "LitElement"
        ] {
          constructor(...args) {
            super(...args);
            this.hass = void 0;
            this.cloudStatus = void 0;
          }

          static get properties() {
            return {
              hass: {},
              cloudStatus: {},
            };
          }

          render() {
            if (!this.cloudStatus) {
              return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
            }

            const {
              google_enabled,
              google_secure_devices_pin,
            } = this.cloudStatus.prefs;
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card header="Google Assistant">
        <paper-toggle-button
          id="google_enabled"
          .checked="${google_enabled}"
          @change="${this._toggleChanged}"
        ></paper-toggle-button>
        <div class="card-content">
          With the Google Assistant integration for JAVIS Home Cloud you'll be
          able to control all your JAVIS Home devices via any Google
          Assistant-enabled device.
          <ul>
            <li>
              <a
                href="https://assistant.google.com/services/a/uid/00000091fd5fb875?hl=en-US"
                target="_blank"
              >
                Activate the JAVIS Home skill for Google Assistant
              </a>
            </li>
            <li>
              <a
                href="https://www.nabucasa.com/config/google_assistant/"
                target="_blank"
              >
                Config documentation
              </a>
            </li>
          </ul>
          <em
            >This integration requires a Google Assistant-enabled device like
            the Google Home or Android phone.</em
          >
          ${
            google_enabled
              ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="secure_devices">
                  Please enter a pin to interact with security devices. Security
                  devices are doors, garage doors and locks. You will be asked
                  to say/enter this pin when interacting with such devices via
                  Google Assistant.
                  <paper-input
                    label="Secure Devices Pin"
                    id="google_secure_devices_pin"
                    placeholder="Secure devices disabled"
                    .value=${google_secure_devices_pin || ""}
                    @change="${this._pinChanged}"
                  ></paper-input>
                </div>
              `
              : ""
          }
        </div>
        <div class="card-actions">
          <ha-call-api-button
            .hass="${this.hass}"
            .disabled="${!google_enabled}"
            path="cloud/google_actions/sync"
          >
            Sync entities to Google
          </ha-call-api-button>
          <div class="spacer"></div>
          <a href="/config/cloud/google-assistant">
            <mwc-button>Manage Entities</mwc-button>
          </a>
        </div>
      </ha-card>
    `;
          }

          async _toggleChanged(ev) {
            const toggle = ev.target;

            try {
              await Object(
                _data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"]
              )(this.hass, {
                [toggle.id]: toggle.checked,
              });
              Object(
                _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"]
              )(this, "ha-refresh-cloud-status");
            } catch (err) {
              toggle.checked = !toggle.checked;
            }
          }

          async _pinChanged(ev) {
            const input = ev.target;

            try {
              await Object(
                _data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"]
              )(this.hass, {
                [input.id]: input.value || null,
              });
              Object(
                _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"]
              )(this, "ha-refresh-cloud-status");
            } catch (err) {
              alert(`Unable to store pin: ${err.message}`);
              input.value = this.cloudStatus.prefs.google_secure_devices_pin;
            }
          }

          static get styles() {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      a {
        color: var(--primary-color);
      }
      ha-card > paper-toggle-button {
        margin: -4px 0;
        position: absolute;
        right: 8px;
        top: 32px;
      }
      ha-call-api-button {
        color: var(--primary-color);
        font-weight: 500;
      }
      .secure_devices {
        padding-top: 16px;
      }
      paper-input {
        width: 200px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
    `;
          }
        }
        customElements.define("cloud-google-pref", CloudGooglePref);

        /***/
      },

    /***/ "./src/panels/config/cloud/account/cloud-remote-pref.ts":
      /*!**************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-remote-pref.ts ***!
  \**************************************************************/
      /*! exports provided: CloudRemotePref */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CloudRemotePref",
          function() {
            return CloudRemotePref;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../data/cloud */ "./src/data/cloud.ts"
        );
        /* harmony import */ var _dialog_cloud_certificate_show_dialog_cloud_certificate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../dialog-cloud-certificate/show-dialog-cloud-certificate */ "./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts"
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

        // tslint:disable-next-line

        let CloudRemotePref = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "cloud-remote-pref"
            ),
          ],
          function(_initialize, _LitElement) {
            class CloudRemotePref extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: CloudRemotePref,
              d: [
                {
                  kind: "field",
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "cloudStatus",
                  value: void 0,
                },
                {
                  kind: "get",
                  static: true,
                  key: "properties",
                  value: function properties() {
                    return {
                      hass: {},
                      cloudStatus: {},
                    };
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this.cloudStatus) {
                      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
                    }

                    const {
                      remote_connected,
                      remote_domain,
                      remote_certificate,
                    } = this.cloudStatus;

                    if (!remote_certificate) {
                      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <ha-card header="Remote Control">
          <div class="preparing">
            Remote access is being prepared. We will notify you when it's ready.
          </div>
        </ha-card>
      `;
                    }

                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card header="Remote Control">
        <paper-toggle-button
          .checked="${remote_connected}"
          @change="${this._toggleChanged}"
        ></paper-toggle-button>
        <div class="card-content">
          JAVIS Home Cloud provides a secure remote connection to your instance
          while away from home. Your instance
          ${remote_connected ? "is" : "will be"} available at
          <a href="https://${remote_domain}" target="_blank">
            https://${remote_domain}</a
          >.
        </div>
        <div class="card-actions">
          <a href="https://www.nabucasa.com/config/remote/" target="_blank">
            <mwc-button>Learn how it works</mwc-button>
          </a>
          ${
            remote_certificate
              ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="spacer"></div>
                <mwc-button @click=${this._openCertInfo}>
                  Certificate Info
                </mwc-button>
              `
              : ""
          }
        </div>
      </ha-card>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_openCertInfo",
                  value: function _openCertInfo() {
                    Object(
                      _dialog_cloud_certificate_show_dialog_cloud_certificate__WEBPACK_IMPORTED_MODULE_7__[
                        "showCloudCertificateDialog"
                      ]
                    )(this, {
                      certificateInfo: this.cloudStatus.remote_certificate,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_toggleChanged",
                  value: async function _toggleChanged(ev) {
                    const toggle = ev.target;

                    try {
                      if (toggle.checked) {
                        await Object(
                          _data_cloud__WEBPACK_IMPORTED_MODULE_6__[
                            "connectCloudRemote"
                          ]
                        )(this.hass);
                      } else {
                        await Object(
                          _data_cloud__WEBPACK_IMPORTED_MODULE_6__[
                            "disconnectCloudRemote"
                          ]
                        )(this.hass);
                      }

                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__[
                          "fireEvent"
                        ]
                      )(this, "ha-refresh-cloud-status");
                    } catch (err) {
                      alert(err.message);
                      toggle.checked = !toggle.checked;
                    }
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .preparing {
        padding: 0 16px 16px;
      }
      a {
        color: var(--primary-color);
      }
      ha-card > paper-toggle-button {
        margin: -4px 0;
        position: absolute;
        right: 8px;
        top: 32px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
    `;
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/panels/config/cloud/account/cloud-webhooks.ts":
      /*!***********************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-webhooks.ts ***!
  \***********************************************************/
      /*! exports provided: CloudWebhooks */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CloudWebhooks",
          function() {
            return CloudWebhooks;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _data_webhook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../data/webhook */ "./src/data/webhook.ts"
        );
        /* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../data/cloud */ "./src/data/cloud.ts"
        );
        /* harmony import */ var _dialog_manage_cloudhook_show_dialog_manage_cloudhook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../dialog-manage-cloudhook/show-dialog-manage-cloudhook */ "./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts"
        );
        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
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

        class CloudWebhooks extends lit_element__WEBPACK_IMPORTED_MODULE_0__[
          "LitElement"
        ] {
          static get properties() {
            return {
              hass: {},
              cloudStatus: {},
              _cloudHooks: {},
              _localHooks: {},
              _progress: {},
            };
          }

          constructor() {
            super();
            this.hass = void 0;
            this.cloudStatus = void 0;
            this._cloudHooks = void 0;
            this._localHooks = void 0;
            this._progress = void 0;
            this._progress = [];
          }

          connectedCallback() {
            super.connectedCallback();

            this._fetchData();
          }

          render() {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this.renderStyle()}
      <ha-card header="Webhooks">
        <div class="card-content">
          Anything that is configured to be triggered by a webhook can be given
          a publicly accessible URL to allow you to send data back to Home
          Assistant from anywhere, without exposing your instance to the
          internet. ${this._renderBody()}

          <div class="footer">
            <a href="https://www.nabucasa.com/config/webhooks" target="_blank">
              Learn more about creating webhook-powered automations.
            </a>
          </div>
        </div>
      </ha-card>
    `;
          }

          updated(changedProps) {
            super.updated(changedProps);

            if (changedProps.has("cloudStatus") && this.cloudStatus) {
              this._cloudHooks = this.cloudStatus.prefs.cloudhooks || {};
            }
          }

          _renderBody() {
            if (!this.cloudStatus || !this._localHooks || !this._cloudHooks) {
              return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <div class="body-text">Loading…</div>
      `;
            }

            if (this._localHooks.length === 0) {
              return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <div class="body-text">
          Looks like you have no webhooks yet. Get started by configuring a
          <a href="/config/integrations">webhook-based integration</a> or by
          creating a <a href="/config/automation/new">webhook automation</a>.
        </div>
      `;
            }

            return this._localHooks.map(
              (entry) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <div class="webhook" .entry="${entry}">
          <paper-item-body two-line>
            <div>
              ${entry.name}
              ${
                entry.domain === entry.name.toLowerCase()
                  ? ""
                  : ` (${entry.domain})`
              }
            </div>
            <div secondary>${entry.webhook_id}</div>
          </paper-item-body>
          ${
            this._progress.includes(entry.webhook_id)
              ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="progress">
                  <paper-spinner active></paper-spinner>
                </div>
              `
              : this._cloudHooks[entry.webhook_id]
              ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <mwc-button @click="${this._handleManageButton}">
                  Manage
                </mwc-button>
              `
              : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <paper-toggle-button
                  @click="${this._enableWebhook}"
                ></paper-toggle-button>
              `
          }
        </div>
      `
            );
          }

          _showDialog(webhookId) {
            const webhook = this._localHooks.find(
              (ent) => ent.webhook_id === webhookId
            );

            const cloudhook = this._cloudHooks[webhookId];
            Object(
              _dialog_manage_cloudhook_show_dialog_manage_cloudhook__WEBPACK_IMPORTED_MODULE_8__[
                "showManageCloudhookDialog"
              ]
            )(this, {
              webhook,
              cloudhook,
              disableHook: () => this._disableWebhook(webhookId),
            });
          }

          _handleManageButton(ev) {
            const entry = ev.currentTarget.parentElement.entry;

            this._showDialog(entry.webhook_id);
          }

          async _enableWebhook(ev) {
            const entry = ev.currentTarget.parentElement.entry;
            this._progress = [...this._progress, entry.webhook_id];
            let updatedWebhook;

            try {
              updatedWebhook = await Object(
                _data_cloud__WEBPACK_IMPORTED_MODULE_7__["createCloudhook"]
              )(this.hass, entry.webhook_id);
            } catch (err) {
              alert(err.message);
              return;
            } finally {
              this._progress = this._progress.filter(
                (wid) => wid !== entry.webhook_id
              );
            }

            this._cloudHooks = Object.assign({}, this._cloudHooks, {
              [entry.webhook_id]: updatedWebhook,
            }); // Only open dialog if we're not also enabling others, otherwise it's confusing

            if (this._progress.length === 0) {
              this._showDialog(entry.webhook_id);
            }
          }

          async _disableWebhook(webhookId) {
            this._progress = [...this._progress, webhookId];

            try {
              await Object(
                _data_cloud__WEBPACK_IMPORTED_MODULE_7__["deleteCloudhook"]
              )(this.hass, webhookId);
            } catch (err) {
              alert(`Failed to disable webhook: ${err.message}`);
              return;
            } finally {
              this._progress = this._progress.filter(
                (wid) => wid !== webhookId
              );
            } // Remove cloud related parts from entry.

            const _ref = this._cloudHooks,
              newHooks = _objectWithoutPropertiesLoose(
                _ref,
                [webhookId].map(_toPropertyKey)
              );

            this._cloudHooks = newHooks;
          }

          async _fetchData() {
            this._localHooks = this.hass.config.components.includes("webhook")
              ? await Object(
                  _data_webhook__WEBPACK_IMPORTED_MODULE_6__["fetchWebhooks"]
                )(this.hass)
              : [];
          }

          renderStyle() {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        .body-text {
          padding: 8px 0;
        }
        .webhook {
          display: flex;
          padding: 4px 0;
        }
        .progress {
          margin-right: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .footer {
          padding-top: 16px;
        }
        .body-text a,
        .footer a {
          color: var(--primary-color);
        }
      </style>
    `;
          }
        }
        customElements.define("cloud-webhooks", CloudWebhooks);

        /***/
      },

    /***/ "./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts":
      /*!*******************************************************************************************!*\
  !*** ./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts ***!
  \*******************************************************************************************/
      /*! exports provided: showCloudCertificateDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showCloudCertificateDialog",
          function() {
            return showCloudCertificateDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        const showCloudCertificateDialog = (element, webhookDialogParams) => {
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-dialog", {
            dialogTag: "dialog-cloud-certificate",
            dialogImport: () =>
              Promise.all(
                /*! import() | dialog-cloud-certificate */ [
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                  ),
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
                  ),
                  __webpack_require__.e("dialog-cloud-certificate"),
                ]
              ).then(
                __webpack_require__.bind(
                  null,
                  /*! ./dialog-cloud-certificate */ "./src/panels/config/cloud/dialog-cloud-certificate/dialog-cloud-certificate.ts"
                )
              ),
            dialogParams: webhookDialogParams,
          });
        };

        /***/
      },

    /***/ "./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts":
      /*!*****************************************************************************************!*\
  !*** ./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts ***!
  \*****************************************************************************************/
      /*! exports provided: showManageCloudhookDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showManageCloudhookDialog",
          function() {
            return showManageCloudhookDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        const showManageCloudhookDialog = (element, webhookDialogParams) => {
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-dialog", {
            dialogTag: "dialog-manage-cloudhook",
            dialogImport: () =>
              Promise.all(
                /*! import() | cloud-webhook-manage-dialog */ [
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                  ),
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
                  ),
                  __webpack_require__.e("vendors~cloud-webhook-manage-dialog"),
                  __webpack_require__.e("cloud-webhook-manage-dialog"),
                ]
              ).then(
                __webpack_require__.bind(
                  null,
                  /*! ./dialog-manage-cloudhook */ "./src/panels/config/cloud/dialog-manage-cloudhook/dialog-manage-cloudhook.ts"
                )
              ),
            dialogParams: webhookDialogParams,
          });
        };

        /***/
      },

    /***/ "./src/panels/config/cloud/ha-config-cloud.ts":
      /*!****************************************************!*\
  !*** ./src/panels/config/cloud/ha-config-cloud.ts ***!
  \****************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _account_cloud_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./account/cloud-account */ "./src/panels/config/cloud/account/cloud-account.js"
        );
        /* harmony import */ var _login_cloud_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./login/cloud-login */ "./src/panels/config/cloud/login/cloud-login.js"
        );
        /* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../common/navigate */ "./src/common/navigate.ts"
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

        const LOGGED_IN_URLS = ["account", "google-assistant", "alexa"];
        const NOT_LOGGED_IN_URLS = ["login", "register", "forgot-password"];

        let HaConfigCloud = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])(
              "ha-config-cloud"
            ),
          ],
          function(_initialize, _HassRouterPage) {
            class HaConfigCloud extends _HassRouterPage {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: HaConfigCloud,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "isWide",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "narrow",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "route",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "cloudStatus",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "routerOptions",

                  value() {
                    return {
                      defaultPage: "login",
                      showLoading: true,
                      initialLoad: () => this._cloudStatusLoaded,
                      // Guard the different pages based on if we're logged in.
                      beforeRender: (page) => {
                        if (this.cloudStatus.logged_in) {
                          if (!LOGGED_IN_URLS.includes(page)) {
                            return "account";
                          }
                        } else {
                          if (!NOT_LOGGED_IN_URLS.includes(page)) {
                            return "login";
                          }
                        }

                        return undefined;
                      },
                      routes: {
                        login: {
                          tag: "cloud-login",
                        },
                        register: {
                          tag: "cloud-register",
                          load: () =>
                            __webpack_require__
                              .e(
                                /*! import() | cloud-register */ "cloud-register"
                              )
                              .then(
                                __webpack_require__.bind(
                                  null,
                                  /*! ./register/cloud-register */ "./src/panels/config/cloud/register/cloud-register.js"
                                )
                              ),
                        },
                        "forgot-password": {
                          tag: "cloud-forgot-password",
                          load: () =>
                            __webpack_require__
                              .e(
                                /*! import() | cloud-forgot-password */ "cloud-forgot-password"
                              )
                              .then(
                                __webpack_require__.bind(
                                  null,
                                  /*! ./forgot-password/cloud-forgot-password */ "./src/panels/config/cloud/forgot-password/cloud-forgot-password.js"
                                )
                              ),
                        },
                        account: {
                          tag: "cloud-account",
                        },
                        "google-assistant": {
                          tag: "cloud-google-assistant",
                          load: () =>
                            Promise.all(
                              /*! import() | cloud-google-assistant */ [
                                __webpack_require__.e(6),
                                __webpack_require__.e("cloud-google-assistant"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./google-assistant/cloud-google-assistant */ "./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts"
                              )
                            ),
                        },
                        alexa: {
                          tag: "cloud-alexa",
                          load: () =>
                            Promise.all(
                              /*! import() | cloud-alexa */ [
                                __webpack_require__.e(6),
                                __webpack_require__.e("cloud-alexa"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./alexa/cloud-alexa */ "./src/panels/config/cloud/alexa/cloud-alexa.ts"
                              )
                            ),
                        },
                      },
                    };
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "_flashMessage",

                  value() {
                    return "";
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "_loginEmail",

                  value() {
                    return "";
                  },
                },
                {
                  kind: "field",
                  key: "_resolveCloudStatusLoaded",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_cloudStatusLoaded",

                  value() {
                    return new Promise((resolve) => {
                      this._resolveCloudStatusLoaded = resolve;
                    });
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(HaConfigCloud.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this.addEventListener("cloud-done", (ev) => {
                      this._flashMessage = ev.detail.flashMessage;
                      Object(
                        _common_navigate__WEBPACK_IMPORTED_MODULE_4__[
                          "navigate"
                        ]
                      )(this, "/config/cloud/login");
                    });
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    _get(
                      _getPrototypeOf(HaConfigCloud.prototype),
                      "updated",
                      this
                    ).call(this, changedProps);

                    if (changedProps.has("cloudStatus")) {
                      const oldStatus = changedProps.get("cloudStatus");

                      if (oldStatus === undefined) {
                        this._resolveCloudStatusLoaded();
                      } else if (
                        oldStatus.logged_in !== this.cloudStatus.logged_in
                      ) {
                        Object(
                          _common_navigate__WEBPACK_IMPORTED_MODULE_4__[
                            "navigate"
                          ]
                        )(this, this.route.prefix, true);
                      }
                    }
                  },
                },
                {
                  kind: "method",
                  key: "createElement",
                  value: function createElement(tag) {
                    const el = _get(
                      _getPrototypeOf(HaConfigCloud.prototype),
                      "createElement",
                      this
                    ).call(this, tag);

                    el.addEventListener("email-changed", (ev) => {
                      this._loginEmail = ev.detail.value;
                    });
                    el.addEventListener("flash-message-changed", (ev) => {
                      this._flashMessage = ev.detail.value;
                    });
                    return el;
                  },
                },
                {
                  kind: "method",
                  key: "updatePageEl",
                  value: function updatePageEl(el) {
                    // We are not going to update if the current page if we are not logged in
                    // and the current page requires being logged in. Happens when we log out.
                    if (
                      this.cloudStatus &&
                      !this.cloudStatus.logged_in &&
                      LOGGED_IN_URLS.includes(this._currentPage)
                    ) {
                      return;
                    }

                    if ("setProperties" in el) {
                      // As long as we have Polymer pages
                      el.setProperties({
                        hass: this.hass,
                        email: this._loginEmail,
                        isWide: this.isWide,
                        cloudStatus: this.cloudStatus,
                        flashMessage: this._flashMessage,
                      });
                    } else {
                      el.hass = this.hass;
                      el.email = this._loginEmail;
                      el.isWide = this.isWide;
                      el.narrow = this.narrow;
                      el.cloudStatus = this.cloudStatus;
                      el.flashMessage = this._flashMessage;
                    }
                  },
                },
              ],
            };
          },
          _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_2__[
            "HassRouterPage"
          ]
        );

        /***/
      },

    /***/ "./src/panels/config/cloud/login/cloud-login.js":
      /*!******************************************************!*\
  !*** ./src/panels/config/cloud/login/cloud-login.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_ripple_paper_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-ripple/paper-ripple */ "./node_modules/@polymer/paper-ripple/paper-ripple.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js"
        );
        /* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts"
        );

        /*
         * @appliesMixin NavigateMixin
         * @appliesMixin EventsMixin
         */

        class CloudLogin extends Object(
          _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_14__["default"]
        )(
          Object(
            _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__["EventsMixin"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__[
              "html"
            ]`
      <style include="iron-flex ha-style">
        .content {
          padding-bottom: 24px;
          direction: ltr;
        }
        [slot="introduction"] {
          margin: -1em 0;
        }
        [slot="introduction"] a {
          color: var(--primary-color);
        }
        paper-item {
          cursor: pointer;
        }
        ha-card {
          overflow: hidden;
        }
        ha-card .card-header {
          margin-bottom: -8px;
        }
        h1 {
          @apply --paper-font-headline;
          margin: 0;
        }
        .error {
          color: var(--google-red-500);
        }
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        [hidden] {
          display: none;
        }
        .flash-msg {
          padding-right: 44px;
        }
        .flash-msg paper-icon-button {
          position: absolute;
          top: 8px;
          right: 8px;
          color: var(--secondary-text-color);
        }
      </style>
      <hass-subpage header="Cloud Login">
        <div class="content">
          <ha-config-section is-wide="[[isWide]]">
            <span slot="header">JAVIS Home Cloud</span>
            <div slot="introduction">
              <p>
                JAVIS Home Cloud provides you with a secure remote connection to
                your instance while away from home. It also allows you to
                connect with cloud-only services: Amazon Alexa and Google
                Assistant.
              </p>
              <p>
                This service is run by our partner
                <a href="https://www.nabucasa.com" target="_blank"
                  >Nabu&nbsp;Casa,&nbsp;Inc</a
                >, a company founded by the founders of JAVIS Home and Hass.io.
              </p>
              <p>
                JAVIS Home Cloud is a subscription service with a free one month
                trial. No payment information necessary.
              </p>
              <p>
                <a href="https://www.nabucasa.com" target="_blank"
                  >Learn more about JAVIS Home Cloud</a
                >
              </p>
            </div>

            <ha-card hidden$="[[!flashMessage]]">
              <div class="card-content flash-msg">
                [[flashMessage]]
                <paper-icon-button icon="hass:close" on-click="_dismissFlash"
                  >Dismiss</paper-icon-button
                >
                <paper-ripple id="flashRipple" noink=""></paper-ripple>
              </div>
            </ha-card>

            <ha-card header="Sign in">
              <div class="card-content">
                <div class="error" hidden$="[[!_error]]">[[_error]]</div>
                <paper-input
                  label="Email"
                  id="email"
                  type="email"
                  value="{{email}}"
                  on-keydown="_keyDown"
                  error-message="Invalid email"
                ></paper-input>
                <paper-input
                  id="password"
                  label="Password"
                  value="{{_password}}"
                  type="password"
                  on-keydown="_keyDown"
                  error-message="Passwords are at least 8 characters"
                ></paper-input>
              </div>
              <div class="card-actions">
                <ha-progress-button
                  on-click="_handleLogin"
                  progress="[[_requestInProgress]]"
                  >Sign in</ha-progress-button
                >
                <button
                  class="link"
                  hidden="[[_requestInProgress]]"
                  on-click="_handleForgotPassword"
                >
                  forgot password?
                </button>
              </div>
            </ha-card>

            <ha-card>
              <paper-item on-click="_handleRegister">
                <paper-item-body two-line="">
                  Start your free 1 month trial
                  <div secondary="">No payment information necessary</div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </ha-card>
          </ha-config-section>
        </div>
      </hass-subpage>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              isWide: Boolean,
              email: {
                type: String,
                notify: true,
              },
              _password: {
                type: String,
                value: "",
              },
              _requestInProgress: {
                type: Boolean,
                value: false,
              },
              flashMessage: {
                type: String,
                notify: true,
              },
              _error: String,
            };
          }

          static get observers() {
            return ["_inputChanged(email, _password)"];
          }

          connectedCallback() {
            super.connectedCallback();

            if (this.flashMessage) {
              // Wait for DOM to be drawn
              requestAnimationFrame(() =>
                requestAnimationFrame(() =>
                  this.$.flashRipple.simulatedRipple()
                )
              );
            }
          }

          _inputChanged() {
            this.$.email.invalid = false;
            this.$.password.invalid = false;
            this._error = false;
          }

          _keyDown(ev) {
            // validate on enter
            if (ev.keyCode === 13) {
              this._handleLogin();

              ev.preventDefault();
            }
          }

          _handleLogin() {
            let invalid = false;

            if (!this.email || !this.email.includes("@")) {
              this.$.email.invalid = true;
              this.$.email.focus();
              invalid = true;
            }

            if (this._password.length < 8) {
              this.$.password.invalid = true;

              if (!invalid) {
                invalid = true;
                this.$.password.focus();
              }
            }

            if (invalid) return;
            this._requestInProgress = true;
            this.hass
              .callApi("post", "cloud/login", {
                email: this.email,
                password: this._password,
              })
              .then(
                () => {
                  this.fire("ha-refresh-cloud-status");
                  this.setProperties({
                    email: "",
                    _password: "",
                  });
                },
                (err) => {
                  // Do this before setProperties because changing it clears errors.
                  this._password = "";
                  const errCode = err && err.body && err.body.code;

                  if (errCode === "PasswordChangeRequired") {
                    alert(
                      "You need to change your password before logging in."
                    );
                    this.navigate("/config/cloud/forgot-password");
                    return;
                  }

                  const props = {
                    _requestInProgress: false,
                    _error:
                      err && err.body && err.body.message
                        ? err.body.message
                        : "Unknown error",
                  };

                  if (errCode === "UserNotConfirmed") {
                    props._error =
                      "You need to confirm your email before logging in.";
                  }

                  this.setProperties(props);
                  this.$.email.focus();
                }
              );
          }

          _handleRegister() {
            this.flashMessage = "";
            this.navigate("/config/cloud/register");
          }

          _handleForgotPassword() {
            this.flashMessage = "";
            this.navigate("/config/cloud/forgot-password");
          }

          _dismissFlash() {
            // give some time to let the ripple finish.
            setTimeout(() => {
              this.flashMessage = "";
            }, 200);
          }
        }

        customElements.define("cloud-login", CloudLogin);

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

        class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style include="iron-flex ha-style">
        .content {
          padding: 28px 20px 0;
          max-width: 1040px;
          margin: 0 auto;
        }

        .header {
          @apply --paper-font-display1;
          opacity: var(--dark-primary-opacity);
        }

        .together {
          margin-top: 32px;
        }

        .intro {
          @apply --paper-font-subhead;
          width: 100%;
          max-width: 400px;
          margin-right: 40px;
          opacity: var(--dark-primary-opacity);
        }

        .panel {
          margin-top: -24px;
        }

        .panel ::slotted(*) {
          margin-top: 24px;
          display: block;
        }

        .narrow.content {
          max-width: 640px;
        }
        .narrow .together {
          margin-top: 20px;
        }
        .narrow .header {
          @apply --paper-font-headline;
        }
        .narrow .intro {
          font-size: 14px;
          padding-bottom: 20px;
          margin-right: 0;
          max-width: 500px;
        }
      </style>
      <div class$="[[computeContentClasses(isWide)]]">
        <div class="header"><slot name="header"></slot></div>
        <div class$="[[computeClasses(isWide)]]">
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `;
          }

          static get properties() {
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
          }

          computeContentClasses(isWide) {
            var classes = "content ";
            return isWide ? classes : classes + "narrow";
          }

          computeClasses(isWide) {
            var classes = "together layout ";
            return classes + (isWide ? "horizontal" : "vertical narrow");
          }
        }

        customElements.define("ha-config-section", HaConfigSection);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWNsb3VkLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1hcGktYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtcHJvZ3Jlc3MtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24tbmV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2FsZXhhLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3dlYmhvb2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL25hdmlnYXRlLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2FjY291bnQvY2xvdWQtYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9hY2NvdW50L2Nsb3VkLWFsZXhhLXByZWYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvYWNjb3VudC9jbG91ZC1nb29nbGUtcHJlZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9hY2NvdW50L2Nsb3VkLXJlbW90ZS1wcmVmLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2FjY291bnQvY2xvdWQtd2ViaG9va3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlL3Nob3ctZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2RpYWxvZy1tYW5hZ2UtY2xvdWRob29rL3Nob3ctZGlhbG9nLW1hbmFnZS1jbG91ZGhvb2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvaGEtY29uZmlnLWNsb3VkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2xvZ2luL2Nsb3VkLWxvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWNvbmZpZy1zZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcImhhRGF0ZVRpbWVcIikpO1xuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLXByb2dyZXNzLWJ1dHRvblwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5jbGFzcyBIYUNhbGxBcGlCdXR0b24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICAucHJvZ3Jlc3M9XCIke3RoaXMucHJvZ3Jlc3N9XCJcbiAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9idXR0b25UYXBwZWR9XCJcbiAgICAgICAgP2Rpc2FibGVkPVwiJHt0aGlzLmRpc2FibGVkfVwiXG4gICAgICAgID48c2xvdD48L3Nsb3RcbiAgICAgID48L2hhLXByb2dyZXNzLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByb2dyZXNzID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgcHJvZ3Jlc3M6IEJvb2xlYW4sXG4gICAgICBwYXRoOiBTdHJpbmcsXG4gICAgICBtZXRob2Q6IFN0cmluZyxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIGdldCBwcm9ncmVzc0J1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3IoXCJoYS1wcm9ncmVzcy1idXR0b25cIik7XG4gIH1cblxuICBhc3luYyBfYnV0dG9uVGFwcGVkKCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSB0cnVlO1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IHtcbiAgICAgIG1ldGhvZDogdGhpcy5tZXRob2QsXG4gICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkodGhpcy5tZXRob2QsIHRoaXMucGF0aCwgdGhpcy5kYXRhKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJvZ3Jlc3NCdXR0b24uYWN0aW9uU3VjY2VzcygpO1xuICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgZXZlbnREYXRhLnJlc3BvbnNlID0gcmVzcDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJvZ3Jlc3NCdXR0b24uYWN0aW9uRXJyb3IoKTtcbiAgICAgIGV2ZW50RGF0YS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICBldmVudERhdGEucmVzcG9uc2UgPSBlcnI7XG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1hcGktY2FsbGVkXCIsIGV2ZW50RGF0YSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FsbC1hcGktYnV0dG9uXCIsIEhhQ2FsbEFwaUJ1dHRvbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYVByb2dyZXNzQnV0dG9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Y2Nlc3MgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29vZ2xlLWdyZWVuLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciBtd2MtYnV0dG9uIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0O1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBpZD1cImJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpXV1cIlxuICAgICAgICAgIG9uLWNsaWNrPVwiYnV0dG9uVGFwcGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbcHJvZ3Jlc3NdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPjxwYXBlci1zcGlubmVyIGFjdGl2ZT1cIlwiPjwvcGFwZXItc3Bpbm5lcj48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdGVtcENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gdGhpcy5idXR0b25UYXBwZWQoZXYpKTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZChldikge1xuICAgIGlmICh0aGlzLnByb2dyZXNzKSBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFjdGlvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJzdWNjZXNzXCIpO1xuICB9XG5cbiAgYWN0aW9uRXJyb3IoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJlcnJvclwiKTtcbiAgfVxuXG4gIGNvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgcHJvZ3Jlc3M7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcHJvZ3Jlc3MtYnV0dG9uXCIsIEhhUHJvZ3Jlc3NCdXR0b24pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIYUljb24gfSBmcm9tIFwiLi9oYS1pY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBIYUljb25OZXh0IGV4dGVuZHMgSGFJY29uIHtcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaWNvbiA9XG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwibHRyXCJcbiAgICAgICAgPyBcImhhc3M6Y2hldnJvbi1yaWdodFwiXG4gICAgICAgIDogXCJoYXNzOmNoZXZyb24tbGVmdFwiO1xuXG4gICAgLy8gY2FsbGluZyBzdXBlciBhZnRlciBzZXR0aW5nIGljb24gdG8gaGF2ZSBpdCBjb25zaXN0ZW50bHkgc2hvdyB0aGUgaWNvbiAob3RoZXJ3aXNlIG5vdCBhbHdheXMgc2hvd24pXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvbi1uZXh0XCI6IEhhSWNvbk5leHQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvbi1uZXh0XCIsIEhhSWNvbk5leHQpO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxleGFFbnRpdHkge1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgZGlzcGxheV9jYXRlZ29yaWVzOiBzdHJpbmdbXTtcbiAgaW50ZXJmYWNlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsb3VkQWxleGFFbnRpdGllcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxBbGV4YUVudGl0eVtdPih7IHR5cGU6IFwiY2xvdWQvYWxleGEvZW50aXRpZXNcIiB9KTtcblxuZXhwb3J0IGNvbnN0IHN5bmNDbG91ZEFsZXhhRW50aXRpZXMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1MoeyB0eXBlOiBcImNsb3VkL2FsZXhhL3N5bmNcIiB9KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBXZWJob29rIHtcbiAgd2ViaG9va19pZDogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hXZWJob29rcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KTogUHJvbWlzZTxXZWJob29rW10+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcIndlYmhvb2svbGlzdFwiLFxuICB9KTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbi8qXG4gKiBAcG9seW1lck1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBuYXZpZ2F0ZSguLi5hcmdzKSB7XG4gICAgICAgIG5hdmlnYXRlKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvZ2dsZS1idXR0b24vcGFwZXItdG9nZ2xlLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1hcGktYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmltcG9ydCBcIi4uLy4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCIuL2Nsb3VkLXdlYmhvb2tzXCI7XG5cbmltcG9ydCBmb3JtYXREYXRlVGltZSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGZldGNoQ2xvdWRTdWJzY3JpcHRpb25JbmZvIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvY2xvdWRcIjtcbmltcG9ydCBcIi4vY2xvdWQtYWxleGEtcHJlZlwiO1xuaW1wb3J0IFwiLi9jbG91ZC1nb29nbGUtcHJlZlwiO1xuaW1wb3J0IFwiLi9jbG91ZC1yZW1vdGUtcHJlZlwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIENsb3VkQWNjb3VudCBleHRlbmRzIEV2ZW50c01peGluKExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICBbc2xvdD1cImludHJvZHVjdGlvblwiXSB7XG4gICAgICAgICAgbWFyZ2luOiAtMWVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgW3Nsb3Q9XCJpbnRyb2R1Y3Rpb25cIl0gYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgICAuYWNjb3VudC1yb3cge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc29vbiB7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5ub3dyYXAge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgLndyYXAge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIkpBVklTIEhvbWUgQ2xvdWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5KQVZJUyBIb21lIENsb3VkPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFRoYW5rIHlvdSBmb3IgYmVpbmcgcGFydCBvZiBKQVZJUyBIb21lIENsb3VkLiBJdCdzIGJlY2F1c2Ugb2ZcbiAgICAgICAgICAgICAgICBwZW9wbGUgbGlrZSB5b3UgdGhhdCB3ZSBhcmUgYWJsZSB0byBtYWtlIGEgZ3JlYXQgaG9tZSBhdXRvbWF0aW9uXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZSBmb3IgZXZlcnlvbmUuIFRoYW5rIHlvdSFcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIk5hYnUgQ2FzYSBBY2NvdW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvdW50LXJvd1wiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU9XCJcIj5cbiAgICAgICAgICAgICAgICAgIFtbY2xvdWRTdGF0dXMuZW1haWxdXVxuICAgICAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnkgY2xhc3M9XCJ3cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIFtbX2Zvcm1hdFN1YnNjcmlwdGlvbihfc3Vic2NyaXB0aW9uKV1dXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY291bnQtcm93XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT4gQ2xvdWQgY29ubmVjdGlvbiBzdGF0dXMgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1c1wiPltbY2xvdWRTdGF0dXMuY2xvdWRdXTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYWNjb3VudC5uYWJ1Y2FzYS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgPjxtd2MtYnV0dG9uPk1hbmFnZSBBY2NvdW50PC9td2MtYnV0dG9uPjwvYVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBzdHlsZT1cImZsb2F0OiByaWdodFwiIG9uLWNsaWNrPVwiaGFuZGxlTG9nb3V0XCJcbiAgICAgICAgICAgICAgICAgID5TaWduIG91dDwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cblxuICAgICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPVwiW1tpc1dpZGVdXVwiPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPkludGVncmF0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBJbnRlZ3JhdGlvbnMgZm9yIEpBVklTIEhvbWUgQ2xvdWQgYWxsb3cgeW91IHRvIGNvbm5lY3Qgd2l0aFxuICAgICAgICAgICAgICAgIHNlcnZpY2VzIGluIHRoZSBjbG91ZCB3aXRob3V0IGhhdmluZyB0byBleHBvc2UgeW91ciBIb21lXG4gICAgICAgICAgICAgICAgQXNzaXN0YW50IGluc3RhbmNlIHB1YmxpY2x5IG9uIHRoZSBpbnRlcm5ldC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBDaGVjayB0aGUgd2Vic2l0ZSBmb3JcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubmFidWNhc2EuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgID5hbGwgYXZhaWxhYmxlIGZlYXR1cmVzPC9hXG4gICAgICAgICAgICAgICAgPi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxjbG91ZC1yZW1vdGUtcHJlZlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBjbG91ZC1zdGF0dXM9XCJbW2Nsb3VkU3RhdHVzXV1cIlxuICAgICAgICAgICAgPjwvY2xvdWQtcmVtb3RlLXByZWY+XG5cbiAgICAgICAgICAgIDxjbG91ZC1hbGV4YS1wcmVmXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGNsb3VkLXN0YXR1cz1cIltbY2xvdWRTdGF0dXNdXVwiXG4gICAgICAgICAgICA+PC9jbG91ZC1hbGV4YS1wcmVmPlxuXG4gICAgICAgICAgICA8Y2xvdWQtZ29vZ2xlLXByZWZcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgY2xvdWQtc3RhdHVzPVwiW1tjbG91ZFN0YXR1c11dXCJcbiAgICAgICAgICAgID48L2Nsb3VkLWdvb2dsZS1wcmVmPlxuXG4gICAgICAgICAgICA8Y2xvdWQtd2ViaG9va3NcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgY2xvdWQtc3RhdHVzPVwiW1tjbG91ZFN0YXR1c11dXCJcbiAgICAgICAgICAgID48L2Nsb3VkLXdlYmhvb2tzPlxuICAgICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuICAgICAgY2xvdWRTdGF0dXM6IE9iamVjdCxcbiAgICAgIF9zdWJzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fZmV0Y2hTdWJzY3JpcHRpb25JbmZvKCk7XG4gIH1cblxuICBfY29tcHV0ZVJlbW90ZUNvbm5lY3RlZChjb25uZWN0ZWQpIHtcbiAgICByZXR1cm4gY29ubmVjdGVkID8gXCJDb25uZWN0ZWRcIiA6IFwiTm90IENvbm5lY3RlZFwiO1xuICB9XG5cbiAgYXN5bmMgX2ZldGNoU3Vic2NyaXB0aW9uSW5mbygpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBhd2FpdCBmZXRjaENsb3VkU3Vic2NyaXB0aW9uSW5mbyh0aGlzLmhhc3MpO1xuICAgIGlmIChcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi5wcm92aWRlciAmJlxuICAgICAgdGhpcy5jbG91ZFN0YXR1cyAmJlxuICAgICAgdGhpcy5jbG91ZFN0YXR1cy5jbG91ZCAhPT0gXCJjb25uZWN0ZWRcIlxuICAgICkge1xuICAgICAgdGhpcy5maXJlKFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTG9nb3V0KCkge1xuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXCJwb3N0XCIsIFwiY2xvdWQvbG9nb3V0XCIpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmZpcmUoXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKSk7XG4gIH1cblxuICBfZm9ybWF0U3Vic2NyaXB0aW9uKHN1YkluZm8pIHtcbiAgICBpZiAoc3ViSW5mbyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwiRmV0Y2hpbmcgc3Vic2NyaXB0aW9u4oCmXCI7XG4gICAgfVxuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gc3ViSW5mby5odW1hbl9kZXNjcmlwdGlvbjtcblxuICAgIGlmIChzdWJJbmZvLnBsYW5fcmVuZXdhbF9kYXRlKSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnJlcGxhY2UoXG4gICAgICAgIFwie3BlcmlvZEVuZH1cIixcbiAgICAgICAgZm9ybWF0RGF0ZVRpbWUoXG4gICAgICAgICAgbmV3IERhdGUoc3ViSW5mby5wbGFuX3JlbmV3YWxfZGF0ZSAqIDEwMDApLFxuICAgICAgICAgIHRoaXMuaGFzcy5sYW5ndWFnZVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1hY2NvdW50XCIsIENsb3VkQWNjb3VudCk7XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b2dnbGUtYnV0dG9uL3BhcGVyLXRvZ2dsZS1idXR0b25cIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJUb2dnbGVCdXR0b25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLXRvZ2dsZS1idXR0b24vcGFwZXItdG9nZ2xlLWJ1dHRvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ2xvdWRTdGF0dXNMb2dnZWRJbiwgdXBkYXRlQ2xvdWRQcmVmIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvY2xvdWRcIjtcbmltcG9ydCB7IHN5bmNDbG91ZEFsZXhhRW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9hbGV4YVwiO1xuXG5leHBvcnQgY2xhc3MgQ2xvdWRBbGV4YVByZWYgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY2xvdWRTdGF0dXM/OiBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zeW5jaW5nID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5jbG91ZFN0YXR1cykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGFsZXhhX2VuYWJsZWQsIGFsZXhhX3JlcG9ydF9zdGF0ZSB9ID0gdGhpcy5jbG91ZFN0YXR1cyEucHJlZnM7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIkFsZXhhXCI+XG4gICAgICAgIDxwYXBlci10b2dnbGUtYnV0dG9uXG4gICAgICAgICAgLmNoZWNrZWQ9JHthbGV4YV9lbmFibGVkfVxuICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9lbmFibGVkVG9nZ2xlQ2hhbmdlZH1cbiAgICAgICAgPjwvcGFwZXItdG9nZ2xlLWJ1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIFdpdGggdGhlIEFsZXhhIGludGVncmF0aW9uIGZvciBKQVZJUyBIb21lIENsb3VkIHlvdSdsbCBiZSBhYmxlIHRvXG4gICAgICAgICAgY29udHJvbCBhbGwgeW91ciBKQVZJUyBIb21lIGRldmljZXMgdmlhIGFueSBBbGV4YS1lbmFibGVkIGRldmljZS5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc2tpbGxzLXN0b3JlLmFtYXpvbi5jb20vZGVlcGxpbmsvZHAvQjA3NzJKMVFLQj9kZXZpY2VUeXBlPWFwcFwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEVuYWJsZSB0aGUgSkFWSVMgSG9tZSBza2lsbCBmb3IgQWxleGFcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubmFidWNhc2EuY29tL2NvbmZpZy9hbWF6b25fYWxleGEvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ29uZmlnIGRvY3VtZW50YXRpb25cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxlbVxuICAgICAgICAgICAgPlRoaXMgaW50ZWdyYXRpb24gcmVxdWlyZXMgYW4gQWxleGEtZW5hYmxlZCBkZXZpY2UgbGlrZSB0aGUgQW1hem9uXG4gICAgICAgICAgICBFY2hvLjwvZW1cbiAgICAgICAgICA+XG4gICAgICAgICAgJHthbGV4YV9lbmFibGVkXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGgzPkVuYWJsZSBTdGF0ZSBSZXBvcnRpbmc8L2gzPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgSWYgeW91IGVuYWJsZSBzdGF0ZSByZXBvcnRpbmcsIEpBVklTIEhvbWUgd2lsbCBzZW5kXG4gICAgICAgICAgICAgICAgICA8Yj5hbGw8L2I+IHN0YXRlIGNoYW5nZXMgb2YgZXhwb3NlZCBlbnRpdGllcyB0byBBbWF6b24uIFRoaXNcbiAgICAgICAgICAgICAgICAgIGFsbG93cyB5b3UgdG8gYWx3YXlzIHNlZSB0aGUgbGF0ZXN0IHN0YXRlcyBpbiB0aGUgQWxleGEgYXBwXG4gICAgICAgICAgICAgICAgICBhbmQgdXNlIHRoZSBzdGF0ZSBjaGFuZ2VzIHRvIGNyZWF0ZSByb3V0aW5lcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHBhcGVyLXRvZ2dsZS1idXR0b25cbiAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7YWxleGFfcmVwb3J0X3N0YXRlfVxuICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3JlcG9ydFRvZ2dsZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgPjwvcGFwZXItdG9nZ2xlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2hhbmRsZVN5bmN9IC5kaXNhYmxlZD0ke3RoaXMuX3N5bmNpbmd9PlxuICAgICAgICAgICAgU3luYyBFbnRpdGllc1xuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvY2xvdWQvYWxleGFcIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uPk1hbmFnZSBFbnRpdGllczwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVTeW5jKCkge1xuICAgIHRoaXMuX3N5bmNpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzeW5jQ2xvdWRBbGV4YUVudGl0aWVzKHRoaXMuaGFzcyEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoYEZhaWxlZCB0byBzeW5jIGVudGl0aWVzOiAke2Vyci5ib2R5Lm1lc3NhZ2V9YCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3N5bmNpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9lbmFibGVkVG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHRvZ2dsZSA9IGV2LnRhcmdldCBhcyBQYXBlclRvZ2dsZUJ1dHRvbkVsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNsb3VkUHJlZih0aGlzLmhhc3MhLCB7IGFsZXhhX2VuYWJsZWQ6IHRvZ2dsZS5jaGVja2VkISB9KTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdG9nZ2xlLmNoZWNrZWQgPSAhdG9nZ2xlLmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVwb3J0VG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHRvZ2dsZSA9IGV2LnRhcmdldCBhcyBQYXBlclRvZ2dsZUJ1dHRvbkVsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNsb3VkUHJlZih0aGlzLmhhc3MhLCB7XG4gICAgICAgIGFsZXhhX3JlcG9ydF9zdGF0ZTogdG9nZ2xlLmNoZWNrZWQhLFxuICAgICAgfSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBgVW5hYmxlIHRvICR7dG9nZ2xlLmNoZWNrZWQgPyBcImVuYWJsZVwiIDogXCJkaXNhYmxlXCJ9IHJlcG9ydCBzdGF0ZS4gJHtcbiAgICAgICAgICBlcnIubWVzc2FnZVxuICAgICAgICB9YFxuICAgICAgKTtcbiAgICAgIHRvZ2dsZS5jaGVja2VkID0gIXRvZ2dsZS5jaGVja2VkO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICBoYS1jYXJkID4gcGFwZXItdG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogLTRweCAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIHRvcDogMzJweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgLmNhcmQtYWN0aW9ucyBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLnNwYWNlciB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cbiAgICAgIGgzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICAgIGgzICsgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImNsb3VkLWFsZXhhLXByZWZcIjogQ2xvdWRBbGV4YVByZWY7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiY2xvdWQtYWxleGEtcHJlZlwiLCBDbG91ZEFsZXhhUHJlZik7XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBQcm9wZXJ0eURlY2xhcmF0aW9ucyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b2dnbGUtYnV0dG9uL3BhcGVyLXRvZ2dsZS1idXR0b25cIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJUb2dnbGVCdXR0b25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLXRvZ2dsZS1idXR0b24vcGFwZXItdG9nZ2xlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtYXBpLWJ1dHRvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ2xvdWRTdGF0dXNMb2dnZWRJbiwgdXBkYXRlQ2xvdWRQcmVmIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvY2xvdWRcIjtcbmltcG9ydCB7IFBhcGVySW5wdXRFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmV4cG9ydCBjbGFzcyBDbG91ZEdvb2dsZVByZWYgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgY2xvdWRTdGF0dXM/OiBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgY2xvdWRTdGF0dXM6IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNsb3VkU3RhdHVzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIGdvb2dsZV9lbmFibGVkLFxuICAgICAgZ29vZ2xlX3NlY3VyZV9kZXZpY2VzX3BpbixcbiAgICB9ID0gdGhpcy5jbG91ZFN0YXR1cy5wcmVmcztcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiR29vZ2xlIEFzc2lzdGFudFwiPlxuICAgICAgICA8cGFwZXItdG9nZ2xlLWJ1dHRvblxuICAgICAgICAgIGlkPVwiZ29vZ2xlX2VuYWJsZWRcIlxuICAgICAgICAgIC5jaGVja2VkPVwiJHtnb29nbGVfZW5hYmxlZH1cIlxuICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3RvZ2dsZUNoYW5nZWR9XCJcbiAgICAgICAgPjwvcGFwZXItdG9nZ2xlLWJ1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIFdpdGggdGhlIEdvb2dsZSBBc3Npc3RhbnQgaW50ZWdyYXRpb24gZm9yIEpBVklTIEhvbWUgQ2xvdWQgeW91J2xsIGJlXG4gICAgICAgICAgYWJsZSB0byBjb250cm9sIGFsbCB5b3VyIEpBVklTIEhvbWUgZGV2aWNlcyB2aWEgYW55IEdvb2dsZVxuICAgICAgICAgIEFzc2lzdGFudC1lbmFibGVkIGRldmljZS5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXNzaXN0YW50Lmdvb2dsZS5jb20vc2VydmljZXMvYS91aWQvMDAwMDAwOTFmZDVmYjg3NT9obD1lbi1VU1wiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFjdGl2YXRlIHRoZSBKQVZJUyBIb21lIHNraWxsIGZvciBHb29nbGUgQXNzaXN0YW50XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbS9jb25maWcvZ29vZ2xlX2Fzc2lzdGFudC9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb25maWcgZG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGVtXG4gICAgICAgICAgICA+VGhpcyBpbnRlZ3JhdGlvbiByZXF1aXJlcyBhIEdvb2dsZSBBc3Npc3RhbnQtZW5hYmxlZCBkZXZpY2UgbGlrZVxuICAgICAgICAgICAgdGhlIEdvb2dsZSBIb21lIG9yIEFuZHJvaWQgcGhvbmUuPC9lbVxuICAgICAgICAgID5cbiAgICAgICAgICAke2dvb2dsZV9lbmFibGVkXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3VyZV9kZXZpY2VzXCI+XG4gICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgYSBwaW4gdG8gaW50ZXJhY3Qgd2l0aCBzZWN1cml0eSBkZXZpY2VzLiBTZWN1cml0eVxuICAgICAgICAgICAgICAgICAgZGV2aWNlcyBhcmUgZG9vcnMsIGdhcmFnZSBkb29ycyBhbmQgbG9ja3MuIFlvdSB3aWxsIGJlIGFza2VkXG4gICAgICAgICAgICAgICAgICB0byBzYXkvZW50ZXIgdGhpcyBwaW4gd2hlbiBpbnRlcmFjdGluZyB3aXRoIHN1Y2ggZGV2aWNlcyB2aWFcbiAgICAgICAgICAgICAgICAgIEdvb2dsZSBBc3Npc3RhbnQuXG4gICAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWN1cmUgRGV2aWNlcyBQaW5cIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImdvb2dsZV9zZWN1cmVfZGV2aWNlc19waW5cIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlY3VyZSBkZXZpY2VzIGRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7Z29vZ2xlX3NlY3VyZV9kZXZpY2VzX3BpbiB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl9waW5DaGFuZ2VkfVwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgIDxoYS1jYWxsLWFwaS1idXR0b25cbiAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgIC5kaXNhYmxlZD1cIiR7IWdvb2dsZV9lbmFibGVkfVwiXG4gICAgICAgICAgICBwYXRoPVwiY2xvdWQvZ29vZ2xlX2FjdGlvbnMvc3luY1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3luYyBlbnRpdGllcyB0byBHb29nbGVcbiAgICAgICAgICA8L2hhLWNhbGwtYXBpLWJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvY2xvdWQvZ29vZ2xlLWFzc2lzdGFudFwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24+TWFuYWdlIEVudGl0aWVzPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3RvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0b2dnbGUgPSBldi50YXJnZXQgYXMgUGFwZXJUb2dnbGVCdXR0b25FbGVtZW50O1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1cGRhdGVDbG91ZFByZWYodGhpcy5oYXNzISwgeyBbdG9nZ2xlLmlkXTogdG9nZ2xlLmNoZWNrZWQhIH0pO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0b2dnbGUuY2hlY2tlZCA9ICF0b2dnbGUuY2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9waW5DaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNsb3VkUHJlZih0aGlzLmhhc3MhLCB7XG4gICAgICAgIFtpbnB1dC5pZF06IGlucHV0LnZhbHVlIHx8IG51bGwsXG4gICAgICB9KTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoYFVuYWJsZSB0byBzdG9yZSBwaW46ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuY2xvdWRTdGF0dXMhLnByZWZzLmdvb2dsZV9zZWN1cmVfZGV2aWNlc19waW47XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGhhLWNhcmQgPiBwYXBlci10b2dnbGUtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAtNHB4IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgdG9wOiAzMnB4O1xuICAgICAgfVxuICAgICAgaGEtY2FsbC1hcGktYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgICAgLnNlY3VyZV9kZXZpY2VzIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICB9XG4gICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgLmNhcmQtYWN0aW9ucyBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLnNwYWNlciB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJjbG91ZC1nb29nbGUtcHJlZlwiOiBDbG91ZEdvb2dsZVByZWY7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiY2xvdWQtZ29vZ2xlLXByZWZcIiwgQ2xvdWRHb29nbGVQcmVmKTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvZ2dsZS1idXR0b24vcGFwZXItdG9nZ2xlLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJUb2dnbGVCdXR0b25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLXRvZ2dsZS1idXR0b24vcGFwZXItdG9nZ2xlLWJ1dHRvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgY29ubmVjdENsb3VkUmVtb3RlLFxuICBkaXNjb25uZWN0Q2xvdWRSZW1vdGUsXG4gIENsb3VkU3RhdHVzTG9nZ2VkSW4sXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgeyBzaG93Q2xvdWRDZXJ0aWZpY2F0ZURpYWxvZyB9IGZyb20gXCIuLi9kaWFsb2ctY2xvdWQtY2VydGlmaWNhdGUvc2hvdy1kaWFsb2ctY2xvdWQtY2VydGlmaWNhdGVcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJjbG91ZC1yZW1vdGUtcHJlZlwiKVxuZXhwb3J0IGNsYXNzIENsb3VkUmVtb3RlUHJlZiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIHB1YmxpYyBjbG91ZFN0YXR1cz86IENsb3VkU3RhdHVzTG9nZ2VkSW47XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBjbG91ZFN0YXR1czoge30sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2xvdWRTdGF0dXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgcmVtb3RlX2Nvbm5lY3RlZCxcbiAgICAgIHJlbW90ZV9kb21haW4sXG4gICAgICByZW1vdGVfY2VydGlmaWNhdGUsXG4gICAgfSA9IHRoaXMuY2xvdWRTdGF0dXM7XG5cbiAgICBpZiAoIXJlbW90ZV9jZXJ0aWZpY2F0ZSkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIlJlbW90ZSBDb250cm9sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByZXBhcmluZ1wiPlxuICAgICAgICAgICAgUmVtb3RlIGFjY2VzcyBpcyBiZWluZyBwcmVwYXJlZC4gV2Ugd2lsbCBub3RpZnkgeW91IHdoZW4gaXQncyByZWFkeS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIlJlbW90ZSBDb250cm9sXCI+XG4gICAgICAgIDxwYXBlci10b2dnbGUtYnV0dG9uXG4gICAgICAgICAgLmNoZWNrZWQ9XCIke3JlbW90ZV9jb25uZWN0ZWR9XCJcbiAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl90b2dnbGVDaGFuZ2VkfVwiXG4gICAgICAgID48L3BhcGVyLXRvZ2dsZS1idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICBKQVZJUyBIb21lIENsb3VkIHByb3ZpZGVzIGEgc2VjdXJlIHJlbW90ZSBjb25uZWN0aW9uIHRvIHlvdXIgaW5zdGFuY2VcbiAgICAgICAgICB3aGlsZSBhd2F5IGZyb20gaG9tZS4gWW91ciBpbnN0YW5jZVxuICAgICAgICAgICR7cmVtb3RlX2Nvbm5lY3RlZCA/IFwiaXNcIiA6IFwid2lsbCBiZVwifSBhdmFpbGFibGUgYXRcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly8ke3JlbW90ZV9kb21haW59XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICBodHRwczovLyR7cmVtb3RlX2RvbWFpbn08L2FcbiAgICAgICAgICA+LlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uYWJ1Y2FzYS5jb20vY29uZmlnL3JlbW90ZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uPkxlYXJuIGhvdyBpdCB3b3JrczwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgJHtyZW1vdGVfY2VydGlmaWNhdGVcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fb3BlbkNlcnRJbmZvfT5cbiAgICAgICAgICAgICAgICAgIENlcnRpZmljYXRlIEluZm9cbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5DZXJ0SW5mbygpIHtcbiAgICBzaG93Q2xvdWRDZXJ0aWZpY2F0ZURpYWxvZyh0aGlzLCB7XG4gICAgICBjZXJ0aWZpY2F0ZUluZm86IHRoaXMuY2xvdWRTdGF0dXMhLnJlbW90ZV9jZXJ0aWZpY2F0ZSEsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF90b2dnbGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZXYudGFyZ2V0IGFzIFBhcGVyVG9nZ2xlQnV0dG9uRWxlbWVudDtcblxuICAgIHRyeSB7XG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgYXdhaXQgY29ubmVjdENsb3VkUmVtb3RlKHRoaXMuaGFzcyEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgZGlzY29ubmVjdENsb3VkUmVtb3RlKHRoaXMuaGFzcyEpO1xuICAgICAgfVxuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgICB0b2dnbGUuY2hlY2tlZCA9ICF0b2dnbGUuY2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAucHJlcGFyaW5nIHtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4IDE2cHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgaGEtY2FyZCA+IHBhcGVyLXRvZ2dsZS1idXR0b24ge1xuICAgICAgICBtYXJnaW46IC00cHggMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogOHB4O1xuICAgICAgICB0b3A6IDMycHg7XG4gICAgICB9XG4gICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWFjdGlvbnMgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5zcGFjZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtcmVtb3RlLXByZWZcIjogQ2xvdWRSZW1vdGVQcmVmO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBQcm9wZXJ0eURlY2xhcmF0aW9ucyxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9nZ2xlLWJ1dHRvbi9wYXBlci10b2dnbGUtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBXZWJob29rRXJyb3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFdlYmhvb2ssIGZldGNoV2ViaG9va3MgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS93ZWJob29rXCI7XG5pbXBvcnQge1xuICBjcmVhdGVDbG91ZGhvb2ssXG4gIGRlbGV0ZUNsb3VkaG9vayxcbiAgQ2xvdWRXZWJob29rLFxuICBDbG91ZFN0YXR1c0xvZ2dlZEluLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHsgc2hvd01hbmFnZUNsb3VkaG9va0RpYWxvZyB9IGZyb20gXCIuLi9kaWFsb2ctbWFuYWdlLWNsb3VkaG9vay9zaG93LWRpYWxvZy1tYW5hZ2UtY2xvdWRob29rXCI7XG5cbmV4cG9ydCBjbGFzcyBDbG91ZFdlYmhvb2tzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHVibGljIGNsb3VkU3RhdHVzPzogQ2xvdWRTdGF0dXNMb2dnZWRJbjtcbiAgcHJpdmF0ZSBfY2xvdWRIb29rcz86IHsgW3dlYmhvb2tJZDogc3RyaW5nXTogQ2xvdWRXZWJob29rIH07XG4gIHByaXZhdGUgX2xvY2FsSG9va3M/OiBXZWJob29rW107XG4gIHByaXZhdGUgX3Byb2dyZXNzOiBzdHJpbmdbXTtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIGNsb3VkU3RhdHVzOiB7fSxcbiAgICAgIF9jbG91ZEhvb2tzOiB7fSxcbiAgICAgIF9sb2NhbEhvb2tzOiB7fSxcbiAgICAgIF9wcm9ncmVzczoge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcHJvZ3Jlc3MgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5yZW5kZXJTdHlsZSgpfVxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiV2ViaG9va3NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIEFueXRoaW5nIHRoYXQgaXMgY29uZmlndXJlZCB0byBiZSB0cmlnZ2VyZWQgYnkgYSB3ZWJob29rIGNhbiBiZSBnaXZlblxuICAgICAgICAgIGEgcHVibGljbHkgYWNjZXNzaWJsZSBVUkwgdG8gYWxsb3cgeW91IHRvIHNlbmQgZGF0YSBiYWNrIHRvIEhvbWVcbiAgICAgICAgICBBc3Npc3RhbnQgZnJvbSBhbnl3aGVyZSwgd2l0aG91dCBleHBvc2luZyB5b3VyIGluc3RhbmNlIHRvIHRoZVxuICAgICAgICAgIGludGVybmV0LiAke3RoaXMuX3JlbmRlckJvZHkoKX1cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uYWJ1Y2FzYS5jb20vY29uZmlnL3dlYmhvb2tzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIExlYXJuIG1vcmUgYWJvdXQgY3JlYXRpbmcgd2ViaG9vay1wb3dlcmVkIGF1dG9tYXRpb25zLlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImNsb3VkU3RhdHVzXCIpICYmIHRoaXMuY2xvdWRTdGF0dXMpIHtcbiAgICAgIHRoaXMuX2Nsb3VkSG9va3MgPSB0aGlzLmNsb3VkU3RhdHVzLnByZWZzLmNsb3VkaG9va3MgfHwge307XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyQm9keSgpIHtcbiAgICBpZiAoIXRoaXMuY2xvdWRTdGF0dXMgfHwgIXRoaXMuX2xvY2FsSG9va3MgfHwgIXRoaXMuX2Nsb3VkSG9va3MpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keS10ZXh0XCI+TG9hZGluZ+KApjwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbG9jYWxIb29rcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keS10ZXh0XCI+XG4gICAgICAgICAgTG9va3MgbGlrZSB5b3UgaGF2ZSBubyB3ZWJob29rcyB5ZXQuIEdldCBzdGFydGVkIGJ5IGNvbmZpZ3VyaW5nIGFcbiAgICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9pbnRlZ3JhdGlvbnNcIj53ZWJob29rLWJhc2VkIGludGVncmF0aW9uPC9hPiBvciBieVxuICAgICAgICAgIGNyZWF0aW5nIGEgPGEgaHJlZj1cIi9jb25maWcvYXV0b21hdGlvbi9uZXdcIj53ZWJob29rIGF1dG9tYXRpb248L2E+LlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsSG9va3MubWFwKFxuICAgICAgKGVudHJ5KSA9PiBodG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwid2ViaG9va1wiIC5lbnRyeT1cIiR7ZW50cnl9XCI+XG4gICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICR7ZW50cnkubmFtZX1cbiAgICAgICAgICAgICAgJHtlbnRyeS5kb21haW4gPT09IGVudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgIDogYCAoJHtlbnRyeS5kb21haW59KWB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PiR7ZW50cnkud2ViaG9va19pZH08L2Rpdj5cbiAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAke3RoaXMuX3Byb2dyZXNzLmluY2x1ZGVzKGVudHJ5LndlYmhvb2tfaWQpXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IHRoaXMuX2Nsb3VkSG9va3MhW2VudHJ5LndlYmhvb2tfaWRdXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVNYW5hZ2VCdXR0b259XCI+XG4gICAgICAgICAgICAgICAgICBNYW5hZ2VcbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItdG9nZ2xlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9lbmFibGVXZWJob29rfVwiXG4gICAgICAgICAgICAgICAgPjwvcGFwZXItdG9nZ2xlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dEaWFsb2cod2ViaG9va0lkOiBzdHJpbmcpIHtcbiAgICBjb25zdCB3ZWJob29rID0gdGhpcy5fbG9jYWxIb29rcyEuZmluZChcbiAgICAgIChlbnQpID0+IGVudC53ZWJob29rX2lkID09PSB3ZWJob29rSWRcbiAgICApITtcbiAgICBjb25zdCBjbG91ZGhvb2sgPSB0aGlzLl9jbG91ZEhvb2tzIVt3ZWJob29rSWRdO1xuICAgIHNob3dNYW5hZ2VDbG91ZGhvb2tEaWFsb2codGhpcywge1xuICAgICAgd2ViaG9vayxcbiAgICAgIGNsb3VkaG9vayxcbiAgICAgIGRpc2FibGVIb29rOiAoKSA9PiB0aGlzLl9kaXNhYmxlV2ViaG9vayh3ZWJob29rSWQpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTWFuYWdlQnV0dG9uKGV2OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZW50cnkgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLnBhcmVudEVsZW1lbnQuZW50cnkgYXMgV2ViaG9vaztcbiAgICB0aGlzLl9zaG93RGlhbG9nKGVudHJ5LndlYmhvb2tfaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZW5hYmxlV2ViaG9vayhldjogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IGVudHJ5ID0gKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5wYXJlbnRFbGVtZW50LmVudHJ5O1xuICAgIHRoaXMuX3Byb2dyZXNzID0gWy4uLnRoaXMuX3Byb2dyZXNzLCBlbnRyeS53ZWJob29rX2lkXTtcbiAgICBsZXQgdXBkYXRlZFdlYmhvb2s7XG5cbiAgICB0cnkge1xuICAgICAgdXBkYXRlZFdlYmhvb2sgPSBhd2FpdCBjcmVhdGVDbG91ZGhvb2sodGhpcy5oYXNzISwgZW50cnkud2ViaG9va19pZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydCgoZXJyIGFzIFdlYmhvb2tFcnJvcikubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3Byb2dyZXNzID0gdGhpcy5fcHJvZ3Jlc3MuZmlsdGVyKCh3aWQpID0+IHdpZCAhPT0gZW50cnkud2ViaG9va19pZCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2xvdWRIb29rcyA9IHtcbiAgICAgIC4uLnRoaXMuX2Nsb3VkSG9va3MsXG4gICAgICBbZW50cnkud2ViaG9va19pZF06IHVwZGF0ZWRXZWJob29rLFxuICAgIH07XG5cbiAgICAvLyBPbmx5IG9wZW4gZGlhbG9nIGlmIHdlJ3JlIG5vdCBhbHNvIGVuYWJsaW5nIG90aGVycywgb3RoZXJ3aXNlIGl0J3MgY29uZnVzaW5nXG4gICAgaWYgKHRoaXMuX3Byb2dyZXNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fc2hvd0RpYWxvZyhlbnRyeS53ZWJob29rX2lkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9kaXNhYmxlV2ViaG9vayh3ZWJob29rSWQ6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb2dyZXNzID0gWy4uLnRoaXMuX3Byb2dyZXNzLCB3ZWJob29rSWRdO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkZWxldGVDbG91ZGhvb2sodGhpcy5oYXNzISwgd2ViaG9va0lkISk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgRmFpbGVkIHRvIGRpc2FibGUgd2ViaG9vazogJHsoZXJyIGFzIFdlYmhvb2tFcnJvcikubWVzc2FnZX1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fcHJvZ3Jlc3MgPSB0aGlzLl9wcm9ncmVzcy5maWx0ZXIoKHdpZCkgPT4gd2lkICE9PSB3ZWJob29rSWQpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBjbG91ZCByZWxhdGVkIHBhcnRzIGZyb20gZW50cnkuXG4gICAgY29uc3QgeyBbd2ViaG9va0lkXTogZGlzYWJsZWRIb29rLCAuLi5uZXdIb29rcyB9ID0gdGhpcy5fY2xvdWRIb29rcyE7XG4gICAgdGhpcy5fY2xvdWRIb29rcyA9IG5ld0hvb2tzO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hEYXRhKCkge1xuICAgIHRoaXMuX2xvY2FsSG9va3MgPSB0aGlzLmhhc3MhLmNvbmZpZy5jb21wb25lbnRzLmluY2x1ZGVzKFwid2ViaG9va1wiKVxuICAgICAgPyBhd2FpdCBmZXRjaFdlYmhvb2tzKHRoaXMuaGFzcyEpXG4gICAgICA6IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdHlsZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmJvZHktdGV4dCB7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLndlYmhvb2sge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5LXRleHQgYSxcbiAgICAgICAgLmZvb3RlciBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtd2ViaG9va3NcIjogQ2xvdWRXZWJob29rcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC13ZWJob29rc1wiLCBDbG91ZFdlYmhvb2tzKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IENlcnRpZmljYXRlSW5mb3JtYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkQ2VydGlmaWNhdGVQYXJhbXMge1xuICBjZXJ0aWZpY2F0ZUluZm86IENlcnRpZmljYXRlSW5mb3JtYXRpb247XG59XG5cbmV4cG9ydCBjb25zdCBzaG93Q2xvdWRDZXJ0aWZpY2F0ZURpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHdlYmhvb2tEaWFsb2dQYXJhbXM6IENsb3VkQ2VydGlmaWNhdGVQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZVwiLFxuICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZVwiICovIFwiLi9kaWFsb2ctY2xvdWQtY2VydGlmaWNhdGVcIiksXG4gICAgZGlhbG9nUGFyYW1zOiB3ZWJob29rRGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBXZWJob29rIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvd2ViaG9va1wiO1xuaW1wb3J0IHsgQ2xvdWRXZWJob29rIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvY2xvdWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBXZWJob29rRGlhbG9nUGFyYW1zIHtcbiAgd2ViaG9vazogV2ViaG9vaztcbiAgY2xvdWRob29rOiBDbG91ZFdlYmhvb2s7XG4gIGRpc2FibGVIb29rOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3Qgc2hvd01hbmFnZUNsb3VkaG9va0RpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHdlYmhvb2tEaWFsb2dQYXJhbXM6IFdlYmhvb2tEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1tYW5hZ2UtY2xvdWRob29rXCIsXG4gICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2xvdWQtd2ViaG9vay1tYW5hZ2UtZGlhbG9nXCIgKi8gXCIuL2RpYWxvZy1tYW5hZ2UtY2xvdWRob29rXCIpLFxuICAgIGRpYWxvZ1BhcmFtczogd2ViaG9va0RpYWxvZ1BhcmFtcyxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IFwiLi9hY2NvdW50L2Nsb3VkLWFjY291bnRcIjtcbmltcG9ydCBcIi4vbG9naW4vY2xvdWQtbG9naW5cIjtcbmltcG9ydCB7XG4gIEhhc3NSb3V0ZXJQYWdlLFxuICBSb3V0ZXJPcHRpb25zLFxufSBmcm9tIFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXJvdXRlci1wYWdlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgUm91dGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgQ2xvdWRTdGF0dXMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyXCI7XG5cbmNvbnN0IExPR0dFRF9JTl9VUkxTID0gW1wiYWNjb3VudFwiLCBcImdvb2dsZS1hc3Npc3RhbnRcIiwgXCJhbGV4YVwiXTtcbmNvbnN0IE5PVF9MT0dHRURfSU5fVVJMUyA9IFtcImxvZ2luXCIsIFwicmVnaXN0ZXJcIiwgXCJmb3Jnb3QtcGFzc3dvcmRcIl07XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY29uZmlnLWNsb3VkXCIpXG5jbGFzcyBIYUNvbmZpZ0Nsb3VkIGV4dGVuZHMgSGFzc1JvdXRlclBhZ2Uge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIHJvdXRlITogUm91dGU7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjbG91ZFN0YXR1cyE6IENsb3VkU3RhdHVzO1xuXG4gIHByb3RlY3RlZCByb3V0ZXJPcHRpb25zOiBSb3V0ZXJPcHRpb25zID0ge1xuICAgIGRlZmF1bHRQYWdlOiBcImxvZ2luXCIsXG4gICAgc2hvd0xvYWRpbmc6IHRydWUsXG4gICAgaW5pdGlhbExvYWQ6ICgpID0+IHRoaXMuX2Nsb3VkU3RhdHVzTG9hZGVkLFxuICAgIC8vIEd1YXJkIHRoZSBkaWZmZXJlbnQgcGFnZXMgYmFzZWQgb24gaWYgd2UncmUgbG9nZ2VkIGluLlxuICAgIGJlZm9yZVJlbmRlcjogKHBhZ2U6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRoaXMuY2xvdWRTdGF0dXMubG9nZ2VkX2luKSB7XG4gICAgICAgIGlmICghTE9HR0VEX0lOX1VSTFMuaW5jbHVkZXMocGFnZSkpIHtcbiAgICAgICAgICByZXR1cm4gXCJhY2NvdW50XCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghTk9UX0xPR0dFRF9JTl9VUkxTLmluY2x1ZGVzKHBhZ2UpKSB7XG4gICAgICAgICAgcmV0dXJuIFwibG9naW5cIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIHJvdXRlczoge1xuICAgICAgbG9naW46IHtcbiAgICAgICAgdGFnOiBcImNsb3VkLWxvZ2luXCIsXG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXI6IHtcbiAgICAgICAgdGFnOiBcImNsb3VkLXJlZ2lzdGVyXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2xvdWQtcmVnaXN0ZXJcIiAqLyBcIi4vcmVnaXN0ZXIvY2xvdWQtcmVnaXN0ZXJcIiksXG4gICAgICB9LFxuICAgICAgXCJmb3Jnb3QtcGFzc3dvcmRcIjoge1xuICAgICAgICB0YWc6IFwiY2xvdWQtZm9yZ290LXBhc3N3b3JkXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2xvdWQtZm9yZ290LXBhc3N3b3JkXCIgKi8gXCIuL2ZvcmdvdC1wYXNzd29yZC9jbG91ZC1mb3Jnb3QtcGFzc3dvcmRcIiksXG4gICAgICB9LFxuICAgICAgYWNjb3VudDoge1xuICAgICAgICB0YWc6IFwiY2xvdWQtYWNjb3VudFwiLFxuICAgICAgfSxcbiAgICAgIFwiZ29vZ2xlLWFzc2lzdGFudFwiOiB7XG4gICAgICAgIHRhZzogXCJjbG91ZC1nb29nbGUtYXNzaXN0YW50XCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudFwiICovIFwiLi9nb29nbGUtYXNzaXN0YW50L2Nsb3VkLWdvb2dsZS1hc3Npc3RhbnRcIiksXG4gICAgICB9LFxuICAgICAgYWxleGE6IHtcbiAgICAgICAgdGFnOiBcImNsb3VkLWFsZXhhXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2xvdWQtYWxleGFcIiAqLyBcIi4vYWxleGEvY2xvdWQtYWxleGFcIiksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZmxhc2hNZXNzYWdlID0gXCJcIjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbG9naW5FbWFpbCA9IFwiXCI7XG4gIHByaXZhdGUgX3Jlc29sdmVDbG91ZFN0YXR1c0xvYWRlZCE6ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgX2Nsb3VkU3RhdHVzTG9hZGVkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICB0aGlzLl9yZXNvbHZlQ2xvdWRTdGF0dXNMb2FkZWQgPSByZXNvbHZlO1xuICB9KTtcblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3VkLWRvbmVcIiwgKGV2KSA9PiB7XG4gICAgICB0aGlzLl9mbGFzaE1lc3NhZ2UgPSAoZXYgYXMgYW55KS5kZXRhaWwuZmxhc2hNZXNzYWdlO1xuICAgICAgbmF2aWdhdGUodGhpcywgXCIvY29uZmlnL2Nsb3VkL2xvZ2luXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJjbG91ZFN0YXR1c1wiKSkge1xuICAgICAgY29uc3Qgb2xkU3RhdHVzID0gY2hhbmdlZFByb3BzLmdldChcImNsb3VkU3RhdHVzXCIpIGFzXG4gICAgICAgIHwgQ2xvdWRTdGF0dXNcbiAgICAgICAgfCB1bmRlZmluZWQ7XG4gICAgICBpZiAob2xkU3RhdHVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZUNsb3VkU3RhdHVzTG9hZGVkKCk7XG4gICAgICB9IGVsc2UgaWYgKG9sZFN0YXR1cy5sb2dnZWRfaW4gIT09IHRoaXMuY2xvdWRTdGF0dXMubG9nZ2VkX2luKSB7XG4gICAgICAgIG5hdmlnYXRlKHRoaXMsIHRoaXMucm91dGUucHJlZml4LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlRWxlbWVudCh0YWc6IHN0cmluZykge1xuICAgIGNvbnN0IGVsID0gc3VwZXIuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJlbWFpbC1jaGFuZ2VkXCIsIChldikgPT4ge1xuICAgICAgdGhpcy5fbG9naW5FbWFpbCA9IChldiBhcyBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pLmRldGFpbC52YWx1ZTtcbiAgICB9KTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZmxhc2gtbWVzc2FnZS1jaGFuZ2VkXCIsIChldikgPT4ge1xuICAgICAgdGhpcy5fZmxhc2hNZXNzYWdlID0gKGV2IGFzIFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikuZGV0YWlsLnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVQYWdlRWwoZWwpIHtcbiAgICAvLyBXZSBhcmUgbm90IGdvaW5nIHRvIHVwZGF0ZSBpZiB0aGUgY3VycmVudCBwYWdlIGlmIHdlIGFyZSBub3QgbG9nZ2VkIGluXG4gICAgLy8gYW5kIHRoZSBjdXJyZW50IHBhZ2UgcmVxdWlyZXMgYmVpbmcgbG9nZ2VkIGluLiBIYXBwZW5zIHdoZW4gd2UgbG9nIG91dC5cbiAgICBpZiAoXG4gICAgICB0aGlzLmNsb3VkU3RhdHVzICYmXG4gICAgICAhdGhpcy5jbG91ZFN0YXR1cy5sb2dnZWRfaW4gJiZcbiAgICAgIExPR0dFRF9JTl9VUkxTLmluY2x1ZGVzKHRoaXMuX2N1cnJlbnRQYWdlKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcInNldFByb3BlcnRpZXNcIiBpbiBlbCkge1xuICAgICAgLy8gQXMgbG9uZyBhcyB3ZSBoYXZlIFBvbHltZXIgcGFnZXNcbiAgICAgIChlbCBhcyBQb2x5bWVyRWxlbWVudCkuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIGhhc3M6IHRoaXMuaGFzcyxcbiAgICAgICAgZW1haWw6IHRoaXMuX2xvZ2luRW1haWwsXG4gICAgICAgIGlzV2lkZTogdGhpcy5pc1dpZGUsXG4gICAgICAgIGNsb3VkU3RhdHVzOiB0aGlzLmNsb3VkU3RhdHVzLFxuICAgICAgICBmbGFzaE1lc3NhZ2U6IHRoaXMuX2ZsYXNoTWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5oYXNzID0gdGhpcy5oYXNzO1xuICAgICAgZWwuZW1haWwgPSB0aGlzLl9sb2dpbkVtYWlsO1xuICAgICAgZWwuaXNXaWRlID0gdGhpcy5pc1dpZGU7XG4gICAgICBlbC5uYXJyb3cgPSB0aGlzLm5hcnJvdztcbiAgICAgIGVsLmNsb3VkU3RhdHVzID0gdGhpcy5jbG91ZFN0YXR1cztcbiAgICAgIGVsLmZsYXNoTWVzc2FnZSA9IHRoaXMuX2ZsYXNoTWVzc2FnZTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNvbmZpZy1jbG91ZFwiOiBIYUNvbmZpZ0Nsb3VkO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yaXBwbGUvcGFwZXItcmlwcGxlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1wcm9ncmVzcy1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuaW1wb3J0IFwiLi4vLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBOYXZpZ2F0ZU1peGluIGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvbmF2aWdhdGUtbWl4aW5cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0XCI7XG4vKlxuICogQGFwcGxpZXNNaXhpbiBOYXZpZ2F0ZU1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIENsb3VkTG9naW4gZXh0ZW5kcyBOYXZpZ2F0ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICAgIFtzbG90PVwiaW50cm9kdWN0aW9uXCJdIHtcbiAgICAgICAgICBtYXJnaW46IC0xZW0gMDtcbiAgICAgICAgfVxuICAgICAgICBbc2xvdD1cImludHJvZHVjdGlvblwiXSBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgaGEtY2FyZCAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5mbGFzaC1tc2cge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQ0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZsYXNoLW1zZyBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYXNzLXN1YnBhZ2UgaGVhZGVyPVwiQ2xvdWQgTG9naW5cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5KQVZJUyBIb21lIENsb3VkPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEpBVklTIEhvbWUgQ2xvdWQgcHJvdmlkZXMgeW91IHdpdGggYSBzZWN1cmUgcmVtb3RlIGNvbm5lY3Rpb24gdG9cbiAgICAgICAgICAgICAgICB5b3VyIGluc3RhbmNlIHdoaWxlIGF3YXkgZnJvbSBob21lLiBJdCBhbHNvIGFsbG93cyB5b3UgdG9cbiAgICAgICAgICAgICAgICBjb25uZWN0IHdpdGggY2xvdWQtb25seSBzZXJ2aWNlczogQW1hem9uIEFsZXhhIGFuZCBHb29nbGVcbiAgICAgICAgICAgICAgICBBc3Npc3RhbnQuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVGhpcyBzZXJ2aWNlIGlzIHJ1biBieSBvdXIgcGFydG5lclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uYWJ1Y2FzYS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgPk5hYnUmbmJzcDtDYXNhLCZuYnNwO0luYzwvYVxuICAgICAgICAgICAgICAgID4sIGEgY29tcGFueSBmb3VuZGVkIGJ5IHRoZSBmb3VuZGVycyBvZiBKQVZJUyBIb21lIGFuZCBIYXNzLmlvLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEpBVklTIEhvbWUgQ2xvdWQgaXMgYSBzdWJzY3JpcHRpb24gc2VydmljZSB3aXRoIGEgZnJlZSBvbmUgbW9udGhcbiAgICAgICAgICAgICAgICB0cmlhbC4gTm8gcGF5bWVudCBpbmZvcm1hdGlvbiBuZWNlc3NhcnkuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICA+TGVhcm4gbW9yZSBhYm91dCBKQVZJUyBIb21lIENsb3VkPC9hXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGhhLWNhcmQgaGlkZGVuJD1cIltbIWZsYXNoTWVzc2FnZV1dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnQgZmxhc2gtbXNnXCI+XG4gICAgICAgICAgICAgICAgW1tmbGFzaE1lc3NhZ2VdXVxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBpY29uPVwiaGFzczpjbG9zZVwiIG9uLWNsaWNrPVwiX2Rpc21pc3NGbGFzaFwiXG4gICAgICAgICAgICAgICAgICA+RGlzbWlzczwvcGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLXJpcHBsZSBpZD1cImZsYXNoUmlwcGxlXCIgbm9pbms9XCJcIj48L3BhcGVyLXJpcHBsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hhLWNhcmQ+XG5cbiAgICAgICAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIlNpZ24gaW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiIGhpZGRlbiQ9XCJbWyFfZXJyb3JdXVwiPltbX2Vycm9yXV08L2Rpdj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2VtYWlsfX1cIlxuICAgICAgICAgICAgICAgICAgb24ta2V5ZG93bj1cIl9rZXlEb3duXCJcbiAgICAgICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJJbnZhbGlkIGVtYWlsXCJcbiAgICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7X3Bhc3N3b3JkfX1cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIG9uLWtleWRvd249XCJfa2V5RG93blwiXG4gICAgICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiUGFzc3dvcmRzIGFyZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnNcIlxuICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxoYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2hhbmRsZUxvZ2luXCJcbiAgICAgICAgICAgICAgICAgIHByb2dyZXNzPVwiW1tfcmVxdWVzdEluUHJvZ3Jlc3NdXVwiXG4gICAgICAgICAgICAgICAgICA+U2lnbiBpbjwvaGEtcHJvZ3Jlc3MtYnV0dG9uXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICBoaWRkZW49XCJbW19yZXF1ZXN0SW5Qcm9ncmVzc11dXCJcbiAgICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2hhbmRsZUZvcmdvdFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBmb3Jnb3QgcGFzc3dvcmQ/XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oYS1jYXJkPlxuXG4gICAgICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gb24tY2xpY2s9XCJfaGFuZGxlUmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPVwiXCI+XG4gICAgICAgICAgICAgICAgICBTdGFydCB5b3VyIGZyZWUgMSBtb250aCB0cmlhbFxuICAgICAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk9XCJcIj5ObyBwYXltZW50IGluZm9ybWF0aW9uIG5lY2Vzc2FyeTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgIDxoYS1pY29uLW5leHQ+PC9oYS1pY29uLW5leHQ+XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIF9wYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIF9yZXF1ZXN0SW5Qcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZmxhc2hNZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIF9lcnJvcjogU3RyaW5nLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiX2lucHV0Q2hhbmdlZChlbWFpbCwgX3Bhc3N3b3JkKVwiXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuZmxhc2hNZXNzYWdlKSB7XG4gICAgICAvLyBXYWl0IGZvciBET00gdG8gYmUgZHJhd25cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy4kLmZsYXNoUmlwcGxlLnNpbXVsYXRlZFJpcHBsZSgpKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBfaW5wdXRDaGFuZ2VkKCkge1xuICAgIHRoaXMuJC5lbWFpbC5pbnZhbGlkID0gZmFsc2U7XG4gICAgdGhpcy4kLnBhc3N3b3JkLmludmFsaWQgPSBmYWxzZTtcbiAgICB0aGlzLl9lcnJvciA9IGZhbHNlO1xuICB9XG5cbiAgX2tleURvd24oZXYpIHtcbiAgICAvLyB2YWxpZGF0ZSBvbiBlbnRlclxuICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5faGFuZGxlTG9naW4oKTtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUxvZ2luKCkge1xuICAgIGxldCBpbnZhbGlkID0gZmFsc2U7XG5cbiAgICBpZiAoIXRoaXMuZW1haWwgfHwgIXRoaXMuZW1haWwuaW5jbHVkZXMoXCJAXCIpKSB7XG4gICAgICB0aGlzLiQuZW1haWwuaW52YWxpZCA9IHRydWU7XG4gICAgICB0aGlzLiQuZW1haWwuZm9jdXMoKTtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXNzd29yZC5sZW5ndGggPCA4KSB7XG4gICAgICB0aGlzLiQucGFzc3dvcmQuaW52YWxpZCA9IHRydWU7XG5cbiAgICAgIGlmICghaW52YWxpZCkge1xuICAgICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kLnBhc3N3b3JkLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGludmFsaWQpIHJldHVybjtcblxuICAgIHRoaXMuX3JlcXVlc3RJblByb2dyZXNzID0gdHJ1ZTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXCJwb3N0XCIsIFwiY2xvdWQvbG9naW5cIiwge1xuICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuX3Bhc3N3b3JkLFxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5maXJlKFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIik7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgX3Bhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgLy8gRG8gdGhpcyBiZWZvcmUgc2V0UHJvcGVydGllcyBiZWNhdXNlIGNoYW5naW5nIGl0IGNsZWFycyBlcnJvcnMuXG4gICAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSBcIlwiO1xuXG4gICAgICAgICAgY29uc3QgZXJyQ29kZSA9IGVyciAmJiBlcnIuYm9keSAmJiBlcnIuYm9keS5jb2RlO1xuICAgICAgICAgIGlmIChlcnJDb2RlID09PSBcIlBhc3N3b3JkQ2hhbmdlUmVxdWlyZWRcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3UgbmVlZCB0byBjaGFuZ2UgeW91ciBwYXNzd29yZCBiZWZvcmUgbG9nZ2luZyBpbi5cIik7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKFwiL2NvbmZpZy9jbG91ZC9mb3Jnb3QtcGFzc3dvcmRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICBfcmVxdWVzdEluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgICAgX2Vycm9yOlxuICAgICAgICAgICAgICBlcnIgJiYgZXJyLmJvZHkgJiYgZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgID8gZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgIDogXCJVbmtub3duIGVycm9yXCIsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChlcnJDb2RlID09PSBcIlVzZXJOb3RDb25maXJtZWRcIikge1xuICAgICAgICAgICAgcHJvcHMuX2Vycm9yID0gXCJZb3UgbmVlZCB0byBjb25maXJtIHlvdXIgZW1haWwgYmVmb3JlIGxvZ2dpbmcgaW4uXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHByb3BzKTtcbiAgICAgICAgICB0aGlzLiQuZW1haWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIF9oYW5kbGVSZWdpc3RlcigpIHtcbiAgICB0aGlzLmZsYXNoTWVzc2FnZSA9IFwiXCI7XG4gICAgdGhpcy5uYXZpZ2F0ZShcIi9jb25maWcvY2xvdWQvcmVnaXN0ZXJcIik7XG4gIH1cblxuICBfaGFuZGxlRm9yZ290UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5mbGFzaE1lc3NhZ2UgPSBcIlwiO1xuICAgIHRoaXMubmF2aWdhdGUoXCIvY29uZmlnL2Nsb3VkL2ZvcmdvdC1wYXNzd29yZFwiKTtcbiAgfVxuXG4gIF9kaXNtaXNzRmxhc2goKSB7XG4gICAgLy8gZ2l2ZSBzb21lIHRpbWUgdG8gbGV0IHRoZSByaXBwbGUgZmluaXNoLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5mbGFzaE1lc3NhZ2UgPSBcIlwiO1xuICAgIH0sIDIwMCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiY2xvdWQtbG9naW5cIiwgQ2xvdWRMb2dpbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuY2xhc3MgSGFDb25maWdTZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDI4cHggMjBweCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1kaXNwbGF5MTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXJyb3cuY29udGVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaW50cm8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvXCI+PHNsb3QgbmFtZT1cImludHJvZHVjdGlvblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZmxleC1hdXRvXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJjb250ZW50IFwiO1xuXG4gICAgcmV0dXJuIGlzV2lkZSA/IGNsYXNzZXMgOiBjbGFzc2VzICsgXCJuYXJyb3dcIjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJ0b2dldGhlciBsYXlvdXQgXCI7XG5cbiAgICByZXR1cm4gY2xhc3NlcyArIChpc1dpZGUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWwgbmFycm93XCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1zZWN0aW9uXCIsIEhhQ29uZmlnU2VjdGlvbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMURBO0FBQ0E7QUEyREE7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhHQTtBQUNBO0FBaUdBOzs7Ozs7Ozs7Ozs7QUN2R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBVkE7QUFrQkE7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUVBO0FBREE7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoTEE7QUFDQTtBQWlMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVNQTtBQVFBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBOzs7Ozs7Ozs7QUFVQTtBQUNBOztBQVhBOzs7QUFpQkE7Ozs7Ozs7OztBQWhEQTtBQTBEQTtBQXRFQTtBQUFBO0FBQUE7QUFBQTtBQXlFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpGQTtBQUFBO0FBQUE7QUFBQTtBQW9GQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0ZBO0FBQUE7QUFBQTtBQUFBO0FBOEZBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQTVHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBK0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwQkE7QUF6SUE7QUFBQTtBQUFBO0FBa0pBOzs7Ozs7Ozs7Ozs7QUN0S0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTs7OztBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7Ozs7Ozs7Ozs7QUFXQTtBQUNBOzs7QUFaQTs7OztBQW9CQTtBQUNBOzs7Ozs7Ozs7OztBQXREQTtBQWtFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQThCQTtBQUNBO0FBaEpBO0FBd0pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdLQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBS0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7O0FBR0E7OztBQUhBOzs7QUFsQkE7QUE2QkE7QUE3REE7QUFBQTtBQUFBO0FBQUE7QUFnRUE7QUFDQTtBQURBO0FBR0E7QUFuRUE7QUFBQTtBQUFBO0FBQUE7QUFzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVCQTtBQTdHQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFNQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTs7Ozs7Ozs7QUFSQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBOztBQUlBOztBQUVBOzs7O0FBQUE7QUFRQTs7O0FBRkE7O0FBUUE7O0FBRUE7O0FBNUJBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBd0JBO0FBQ0E7QUFuTUE7QUEyTUE7Ozs7Ozs7Ozs7OztBQ2pPQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBSUE7QUFDQTtBQUNBLDJpQkFDQTtBQUNBO0FBSkE7QUFNQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFJQTtBQUNBO0FBQ0EsNG1CQUNBO0FBQ0E7QUFKQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0EsZ09BQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQSwwUUFDQTtBQUhBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBLHdUQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0Esc1BBQ0E7QUFIQTtBQXRCQTtBQWpCQTs7Ozs7QUErQ0E7Ozs7QUFBQTs7Ozs7QUFDQTs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBM0hBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBbkJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3UUE7QUFDQTtBQThRQTs7Ozs7Ozs7Ozs7O0FDclNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTFGQTtBQUNBO0FBMkZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
