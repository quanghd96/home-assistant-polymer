(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-zwave"],
  {
    /***/ "./src/common/config/is_pwa.ts":
      /*!*************************************!*\
  !*** ./src/common/config/is_pwa.ts ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return isPwa;
          }
        );
        /** Return if the displaymode is in standalone mode (PWA). */
        function isPwa() {
          return window.matchMedia("(display-mode: standalone)").matches;
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

    /***/ "./src/common/entity/compute_state_domain.ts":
      /*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return computeStateDomain;
          }
        );
        /* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./compute_domain */ "./src/common/entity/compute_domain.ts"
        );

        function computeStateDomain(stateObj) {
          return Object(
            _compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(stateObj.entity_id);
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

        /* harmony default export */ __webpack_exports__["default"] = (
          stateObj
        ) =>
          stateObj.attributes.friendly_name === undefined
            ? Object(
                _compute_object_id__WEBPACK_IMPORTED_MODULE_0__["default"]
              )(stateObj.entity_id).replace(/_/g, " ")
            : stateObj.attributes.friendly_name || "";

        /***/
      },

    /***/ "./src/common/entity/states_sort_by_name.ts":
      /*!**************************************************!*\
  !*** ./src/common/entity/states_sort_by_name.ts ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return sortStatesByName;
          }
        );
        /* harmony import */ var _compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /**
         * Sort function to help sort states by name
         *
         * Usage:
         *   const states = [state1, state2]
         *   states.sort(statesSortByName);
         */

        function sortStatesByName(entityA, entityB) {
          const nameA = Object(
            _compute_state_name__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(entityA);
          const nameB = Object(
            _compute_state_name__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(entityB);

          if (nameA < nameB) {
            return -1;
          }

          if (nameA > nameB) {
            return 1;
          }

          return 0;
        }

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

    /***/ "./src/components/buttons/ha-call-service-button.js":
      /*!**********************************************************!*\
  !*** ./src/components/buttons/ha-call-service-button.js ***!
  \**********************************************************/
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
        /* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );

        /*
         * @appliesMixin EventsMixin
         */

        class HaCallServiceButton extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        ><slot></slot
      ></ha-progress-button>
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
              domain: {
                type: String,
              },
              service: {
                type: String,
              },
              serviceData: {
                type: Object,
                value: {},
              },
            };
          }

          buttonTapped() {
            this.progress = true;
            var el = this;
            var eventData = {
              domain: this.domain,
              service: this.service,
              serviceData: this.serviceData,
            };
            this.hass
              .callService(this.domain, this.service, this.serviceData)
              .then(
                function() {
                  el.progress = false;
                  el.$.progress.actionSuccess();
                  eventData.success = true;
                },
                function() {
                  el.progress = false;
                  el.$.progress.actionError();
                  eventData.success = false;
                }
              )
              .then(function() {
                el.fire("hass-service-called", eventData);
              });
          }
        }

        customElements.define("ha-call-service-button", HaCallServiceButton);

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

    /***/ "./src/components/ha-service-description.js":
      /*!**************************************************!*\
  !*** ./src/components/ha-service-description.js ***!
  \**************************************************/
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

        class HaServiceDescription extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      [[_getDescription(hass, domain, service)]]
    `;
          }

          static get properties() {
            return {
              hass: Object,
              domain: String,
              service: String,
            };
          }

          _getDescription(hass, domain, service) {
            var domainServices = hass.services[domain];
            if (!domainServices) return "";
            var serviceObject = domainServices[service];
            if (!serviceObject) return "";
            return serviceObject.description;
          }
        }

        customElements.define("ha-service-description", HaServiceDescription);

        /***/
      },

    /***/ "./src/data/zwave.ts":
      /*!***************************!*\
  !*** ./src/data/zwave.ts ***!
  \***************************/
      /*! exports provided: ZWAVE_NETWORK_STATE_STOPPED, ZWAVE_NETWORK_STATE_FAILED, ZWAVE_NETWORK_STATE_STARTED, ZWAVE_NETWORK_STATE_AWAKED, ZWAVE_NETWORK_STATE_READY, fetchNetworkStatus, fetchValues */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZWAVE_NETWORK_STATE_STOPPED",
          function() {
            return ZWAVE_NETWORK_STATE_STOPPED;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZWAVE_NETWORK_STATE_FAILED",
          function() {
            return ZWAVE_NETWORK_STATE_FAILED;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZWAVE_NETWORK_STATE_STARTED",
          function() {
            return ZWAVE_NETWORK_STATE_STARTED;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZWAVE_NETWORK_STATE_AWAKED",
          function() {
            return ZWAVE_NETWORK_STATE_AWAKED;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZWAVE_NETWORK_STATE_READY",
          function() {
            return ZWAVE_NETWORK_STATE_READY;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchNetworkStatus",
          function() {
            return fetchNetworkStatus;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchValues",
          function() {
            return fetchValues;
          }
        );
        const ZWAVE_NETWORK_STATE_STOPPED = 0;
        const ZWAVE_NETWORK_STATE_FAILED = 1;
        const ZWAVE_NETWORK_STATE_STARTED = 5;
        const ZWAVE_NETWORK_STATE_AWAKED = 7;
        const ZWAVE_NETWORK_STATE_READY = 10;
        const fetchNetworkStatus = (hass) =>
          hass.callWS({
            type: "zwave/network_status",
          });
        const fetchValues = (hass, nodeId) =>
          hass.callApi("GET", `zwave/values/${nodeId}`);

        /***/
      },

    /***/ "./src/layouts/ha-app-layout.js":
      /*!**************************************!*\
  !*** ./src/layouts/ha-app-layout.js ***!
  \**************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

        /*
This code is copied from app-header-layout.
'fullbleed' support is removed as Home Assisstant doesn't use it.
transform: translate(0) is added.
*/

        /*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

        class HaAppLayout extends customElements.get("app-header-layout") {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        :host {
          display: block;
          /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
          position: relative;
          z-index: 0;
        }

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) #wrapper #contentContainer {
          @apply --layout-fit;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
          position: relative;
        }

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `;
          }
        }

        customElements.define("ha-app-layout", HaAppLayout);

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

    /***/ "./src/panels/config/ha-form-style.js":
      /*!********************************************!*\
  !*** ./src/panels/config/ha-form-style.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        const documentContainer = document.createElement("template");
        documentContainer.setAttribute("style", "display: none;");
        documentContainer.innerHTML = `<dom-module id="ha-form-style">
  <template>
    <style>
      .form-group {
        @apply --layout-horizontal;
        @apply --layout-center;
        padding: 8px 16px;
      }

      .form-group label {
        @apply --layout-flex-2;
      }

      .form-group .form-control {
        @apply --layout-flex;
      }

      .form-group.vertical {
        @apply --layout-vertical;
        @apply --layout-start;
      }

      paper-dropdown-menu.form-control {
        margin: -9px 0;
      }
    </style>
  </template>
</dom-module>`;
        document.head.appendChild(documentContainer.content);

        /***/
      },

    /***/ "./src/panels/config/zwave/ha-config-zwave.js":
      /*!****************************************************!*\
  !*** ./src/panels/config/zwave/ha-config-zwave.js ***!
  \****************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js"
        );
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../components/ha-menu-button */ "./src/components/ha-menu-button.ts"
        );
        /* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js"
        );
        /* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts"
        );
        /* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../ha-form-style */ "./src/panels/config/ha-form-style.js"
        );
        /* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(
          _ha_form_style__WEBPACK_IMPORTED_MODULE_17__
        );
        /* harmony import */ var _zwave_groups__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./zwave-groups */ "./src/panels/config/zwave/zwave-groups.js"
        );
        /* harmony import */ var _zwave_log__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./zwave-log */ "./src/panels/config/zwave/zwave-log.js"
        );
        /* harmony import */ var _zwave_network__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./zwave-network */ "./src/panels/config/zwave/zwave-network.ts"
        );
        /* harmony import */ var _zwave_node_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./zwave-node-config */ "./src/panels/config/zwave/zwave-node-config.js"
        );
        /* harmony import */ var _zwave_usercodes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./zwave-usercodes */ "./src/panels/config/zwave/zwave-usercodes.js"
        );
        /* harmony import */ var _zwave_values__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./zwave-values */ "./src/panels/config/zwave/zwave-values.ts"
        );
        /* harmony import */ var _zwave_node_protection__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./zwave-node-protection */ "./src/panels/config/zwave/zwave-node-protection.js"
        );
        /* harmony import */ var _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../common/entity/states_sort_by_name */ "./src/common/entity/states_sort_by_name.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );

        /*
         * @appliesMixin LocalizeMixin
         * @appliesMixin EventsMixin
         */

        class HaConfigZwave extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_29__["default"]
        )(
          Object(
            _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_28__["EventsMixin"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__[
              "html"
            ]`
      <style include="iron-flex ha-style ha-form-style">
        .content {
          margin-top: 24px;
        }

        .node-info {
          margin-left: 16px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }

        .toggle-help-icon {
          position: absolute;
          top: 6px;
          right: 0;
          color: var(--primary-color);
        }
      </style>
      <ha-app-layout has-scrolling-region="">
        <app-header slot="header" fixed="">
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              on-click="_backTapped"
            ></ha-paper-icon-button-arrow-prev>
            <div main-title="">
              [[localize('ui.panel.config.zwave.caption')]]
            </div>
          </app-toolbar>
        </app-header>

        <zwave-network
          id="zwave-network"
          is-wide="[[isWide]]"
          hass="[[hass]]"
        ></zwave-network>

        <!-- Node card -->
        <ha-config-section is-wide="[[isWide]]">
          <div style="position: relative" slot="header">
            <span>Z-Wave Node Management</span>
            <paper-icon-button
              class="toggle-help-icon"
              on-click="toggleHelp"
              icon="hass:help-circle"
            ></paper-icon-button>
          </div>
          <span slot="introduction">
            Run Z-Wave commands that affect a single node. Pick a node to see a
            list of available commands.
          </span>

          <ha-card class="content">
            <div class="device-picker">
              <paper-dropdown-menu dynamic-align="" label="Nodes" class="flex">
                <paper-listbox
                  slot="dropdown-content"
                  selected="{{selectedNode}}"
                >
                  <template is="dom-repeat" items="[[nodes]]" as="state">
                    <paper-item>[[computeSelectCaption(state)]]</paper-item>
                  </template>
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
            <template is="dom-if" if="[[!computeIsNodeSelected(selectedNode)]]">
              <template is="dom-if" if="[[showHelp]]">
                <div style="color: grey; padding: 12px">
                  Select node to view per-node options
                </div>
              </template>
            </template>

            <template is="dom-if" if="[[computeIsNodeSelected(selectedNode)]]">
              <div class="card-actions">
                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="refresh_node"
                  service-data="[[computeNodeServiceData(selectedNode)]]"
                >
                  Refresh Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="refresh_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>

                <template is="dom-if" if="[[nodeFailed]]">
                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="remove_failed_node"
                    service-data="[[computeNodeServiceData(selectedNode)]]"
                  >
                    Remove Failed Node
                  </ha-call-service-button>
                  <ha-service-description
                    hass="[[hass]]"
                    domain="zwave"
                    service="remove_failed_node"
                    hidden$="[[!showHelp]]"
                  >
                  </ha-service-description>

                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="replace_failed_node"
                    service-data="[[computeNodeServiceData(selectedNode)]]"
                  >
                    Replace Failed Node
                  </ha-call-service-button>
                  <ha-service-description
                    hass="[[hass]]"
                    domain="zwave"
                    service="replace_failed_node"
                    hidden$="[[!showHelp]]"
                  >
                  </ha-service-description>
                </template>

                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="print_node"
                  service-data="[[computeNodeServiceData(selectedNode)]]"
                >
                  Print Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="print_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>

                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="heal_node"
                  service-data="[[computeHealNodeServiceData(selectedNode)]]"
                >
                  Heal Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="heal_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>

                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="test_node"
                  service-data="[[computeNodeServiceData(selectedNode)]]"
                >
                  Test Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="test_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>
                <mwc-button on-click="_nodeMoreInfo"
                  >Node Information</mwc-button
                >
              </div>

              <div class="device-picker">
                <paper-dropdown-menu
                  label="Entities of this node"
                  dynamic-align=""
                  class="flex"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    selected="{{selectedEntity}}"
                  >
                    <template is="dom-repeat" items="[[entities]]" as="state">
                      <paper-item>[[state.entity_id]]</paper-item>
                    </template>
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <template
                is="dom-if"
                if="[[!computeIsEntitySelected(selectedEntity)]]"
              >
                <div class="card-actions">
                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="refresh_entity"
                    service-data="[[computeRefreshEntityServiceData(selectedEntity)]]"
                  >
                    Refresh Entity
                  </ha-call-service-button>
                  <ha-service-description
                    hass="[[hass]]"
                    domain="zwave"
                    service="refresh_entity"
                    hidden$="[[!showHelp]]"
                  >
                  </ha-service-description>
                  <mwc-button on-click="_entityMoreInfo"
                    >Entity Information</mwc-button
                  >
                </div>
                <div class="form-group">
                  <paper-checkbox
                    checked="{{entityIgnored}}"
                    class="form-control"
                  >
                    Exclude this entity from JAVIS Home
                  </paper-checkbox>
                  <paper-input
                    disabled="{{entityIgnored}}"
                    label="Polling intensity"
                    type="number"
                    min="0"
                    value="{{entityPollingIntensity}}"
                  >
                  </paper-input>
                </div>
                <div class="card-actions">
                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="set_poll_intensity"
                    service-data="[[computePollIntensityServiceData(entityPollingIntensity)]]"
                  >
                    Save
                  </ha-call-service-button>
                </div>
              </template>
            </template>
          </ha-card>

          <template is="dom-if" if="[[computeIsNodeSelected(selectedNode)]]">
            <!-- Value card -->
            <zwave-values
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              values="[[values]]"
            ></zwave-values>

            <!-- Group card -->
            <zwave-groups
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              groups="[[groups]]"
            ></zwave-groups>

            <!-- Config card -->
            <zwave-node-config
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              config="[[config]]"
            ></zwave-node-config>
          </template>

          <!-- Protection card -->
          <template is="dom-if" if="{{_protectionNode}}">
            <zwave-node-protection
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              protection="[[_protection]]"
            ></zwave-node-protection>
          </template>

          <!-- User Codes -->
          <template is="dom-if" if="{{hasNodeUserCodes}}">
            <zwave-usercodes
              id="zwave-usercodes"
              hass="[[hass]]"
              nodes="[[nodes]]"
              user-codes="[[userCodes]]"
              selected-node="[[selectedNode]]"
            ></zwave-usercodes>
          </template>
        </ha-config-section>

        <!-- Ozw log -->
        <ozw-log is-wide="[[isWide]]" hass="[[hass]]"></ozw-log>
      </ha-app-layout>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              isWide: Boolean,
              nodes: {
                type: Array,
                computed: "computeNodes(hass)",
              },
              selectedNode: {
                type: Number,
                value: -1,
                observer: "selectedNodeChanged",
              },
              nodeFailed: {
                type: Boolean,
                value: false,
              },
              config: {
                type: Array,
                value: () => [],
              },
              entities: {
                type: Array,
                computed: "computeEntities(selectedNode)",
              },
              selectedEntity: {
                type: Number,
                value: -1,
                observer: "selectedEntityChanged",
              },
              values: {
                type: Array,
              },
              groups: {
                type: Array,
              },
              userCodes: {
                type: Array,
                value: () => [],
              },
              hasNodeUserCodes: {
                type: Boolean,
                value: false,
              },
              showHelp: {
                type: Boolean,
                value: false,
              },
              entityIgnored: Boolean,
              entityPollingIntensity: {
                type: Number,
                value: 0,
              },
              _protection: {
                type: Array,
                value: () => [],
              },
              _protectionNode: {
                type: Boolean,
                value: false,
              },
            };
          }

          ready() {
            super.ready();
            this.addEventListener("hass-service-called", (ev) =>
              this.serviceCalled(ev)
            );
          }

          serviceCalled(ev) {
            if (
              ev.detail.success &&
              ev.detail.service === "set_poll_intensity"
            ) {
              this._saveEntity();
            }
          }

          computeNodes(hass) {
            return Object.keys(hass.states)
              .map((key) => hass.states[key])
              .filter((ent) => ent.entity_id.match("zwave[.]"))
              .sort(
                _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__[
                  "default"
                ]
              );
          }

          computeEntities(selectedNode) {
            if (!this.nodes || selectedNode === -1) return -1;
            const nodeid = this.nodes[this.selectedNode].attributes.node_id;
            const hass = this.hass;
            return Object.keys(this.hass.states)
              .map((key) => hass.states[key])
              .filter((ent) => {
                if (ent.attributes.node_id === undefined) {
                  return false;
                }

                return (
                  !ent.attributes.hidden &&
                  "node_id" in ent.attributes &&
                  ent.attributes.node_id === nodeid &&
                  !ent.entity_id.match("zwave[.]")
                );
              })
              .sort(
                _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__[
                  "default"
                ]
              );
          }

          selectedNodeChanged(selectedNode) {
            if (selectedNode === -1) return;
            this.selectedEntity = -1;
            this.hass
              .callApi(
                "GET",
                `zwave/config/${this.nodes[selectedNode].attributes.node_id}`
              )
              .then((configs) => {
                this.config = this._objToArray(configs);
              });
            this.hass
              .callApi(
                "GET",
                `zwave/values/${this.nodes[selectedNode].attributes.node_id}`
              )
              .then((values) => {
                this.values = this._objToArray(values);
              });
            this.hass
              .callApi(
                "GET",
                `zwave/groups/${this.nodes[selectedNode].attributes.node_id}`
              )
              .then((groups) => {
                this.groups = this._objToArray(groups);
              });
            this.hasNodeUserCodes = false;
            this.notifyPath("hasNodeUserCodes");
            this.hass
              .callApi(
                "GET",
                `zwave/usercodes/${this.nodes[selectedNode].attributes.node_id}`
              )
              .then((usercodes) => {
                this.userCodes = this._objToArray(usercodes);
                this.hasNodeUserCodes = this.userCodes.length > 0;
                this.notifyPath("hasNodeUserCodes");
              });
            this.hass
              .callApi(
                "GET",
                `zwave/protection/${
                  this.nodes[selectedNode].attributes.node_id
                }`
              )
              .then((protections) => {
                this._protection = this._objToArray(protections);

                if (this._protection) {
                  if (this._protection.length === 0) {
                    return;
                  }

                  this._protectionNode = true;
                }
              });
            this.nodeFailed = this.nodes[selectedNode].attributes.is_failed;
          }

          selectedEntityChanged(selectedEntity) {
            if (selectedEntity === -1) return;
            this.hass
              .callApi(
                "GET",
                `zwave/values/${
                  this.nodes[this.selectedNode].attributes.node_id
                }`
              )
              .then((values) => {
                this.values = this._objToArray(values);
              });
            const valueId = this.entities[selectedEntity].attributes.value_id;
            const valueData = this.values.find((obj) => obj.key === valueId);
            const valueIndex = this.values.indexOf(valueData);
            this.hass
              .callApi(
                "GET",
                `config/zwave/device_config/${
                  this.entities[selectedEntity].entity_id
                }`
              )
              .then((data) => {
                this.setProperties({
                  entityIgnored: data.ignored || false,
                  entityPollingIntensity: this.values[valueIndex].value
                    .poll_intensity,
                });
              })
              .catch(() => {
                this.setProperties({
                  entityIgnored: false,
                  entityPollingIntensity: this.values[valueIndex].value
                    .poll_intensity,
                });
              });
          }

          computeSelectCaption(stateObj) {
            return (
              Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__[
                  "default"
                ]
              )(stateObj) +
              " (Node:" +
              stateObj.attributes.node_id +
              " " +
              stateObj.attributes.query_stage +
              ")"
            );
          }

          computeSelectCaptionEnt(stateObj) {
            return (
              Object(
                _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_27__[
                  "default"
                ]
              )(stateObj) +
              "." +
              Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__[
                  "default"
                ]
              )(stateObj)
            );
          }

          computeIsNodeSelected() {
            return this.nodes && this.selectedNode !== -1;
          }

          computeIsEntitySelected(selectedEntity) {
            return selectedEntity === -1;
          }

          computeNodeServiceData(selectedNode) {
            return {
              node_id: this.nodes[selectedNode].attributes.node_id,
            };
          }

          computeHealNodeServiceData(selectedNode) {
            return {
              node_id: this.nodes[selectedNode].attributes.node_id,
              return_routes: true,
            };
          }

          computeRefreshEntityServiceData(selectedEntity) {
            if (selectedEntity === -1) return -1;
            return {
              entity_id: this.entities[selectedEntity].entity_id,
            };
          }

          computePollIntensityServiceData(entityPollingIntensity) {
            if (!this.selectedNode === -1 || this.selectedEntity === -1)
              return -1;
            return {
              node_id: this.nodes[this.selectedNode].attributes.node_id,
              value_id: this.entities[this.selectedEntity].attributes.value_id,
              poll_intensity: parseInt(entityPollingIntensity),
            };
          }

          _nodeMoreInfo() {
            this.fire("hass-more-info", {
              entityId: this.nodes[this.selectedNode].entity_id,
            });
          }

          _entityMoreInfo() {
            this.fire("hass-more-info", {
              entityId: this.entities[this.selectedEntity].entity_id,
            });
          }

          _saveEntity() {
            const data = {
              ignored: this.entityIgnored,
              polling_intensity: parseInt(this.entityPollingIntensity),
            };
            return this.hass.callApi(
              "POST",
              `config/zwave/device_config/${
                this.entities[this.selectedEntity].entity_id
              }`,
              data
            );
          }

          toggleHelp() {
            this.showHelp = !this.showHelp;
          }

          _objToArray(obj) {
            const array = [];
            Object.keys(obj).forEach((key) => {
              array.push({
                key,
                value: obj[key],
              });
            });
            return array;
          }

          _backTapped() {
            history.back();
          }
        }

        customElements.define("ha-config-zwave", HaConfigZwave);

        /***/
      },

    /***/ "./src/panels/config/zwave/zwave-groups.js":
      /*!*************************************************!*\
  !*** ./src/panels/config/zwave/zwave-groups.js ***!
  \*************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );

        class ZwaveGroups extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
              "html"
            ]`
      <style include="iron-flex ha-style">
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 12px;
        }
      </style>
      <ha-card class="content" header="Node group associations">
        <!-- TODO make api for getting groups and members -->
        <div class="device-picker">
          <paper-dropdown-menu label="Group" dynamic-align="" class="flex">
            <paper-listbox
              slot="dropdown-content"
              selected="{{_selectedGroup}}"
            >
              <template is="dom-repeat" items="[[groups]]" as="state">
                <paper-item>[[_computeSelectCaptionGroup(state)]]</paper-item>
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
        <template is="dom-if" if="[[_computeIsGroupSelected(_selectedGroup)]]">
          <div class="device-picker">
            <paper-dropdown-menu
              label="Node to control"
              dynamic-align=""
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_selectedTargetNode}}"
              >
                <template is="dom-repeat" items="[[nodes]]" as="state">
                  <paper-item>[[_computeSelectCaption(state)]]</paper-item>
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <div class="help-text">
            <span>Other Nodes in this group:</span>
            <template is="dom-repeat" items="[[_otherGroupNodes]]" as="state">
              <div>[[state]]</div>
            </template>
          </div>
          <div class="help-text">
            <span>Max Associations:</span> <span>[[_maxAssociations]]</span>
          </div>
        </template>

        <template
          is="dom-if"
          if="[[_computeIsTargetNodeSelected(_selectedTargetNode)]]"
        >
          <div class="card-actions">
            <template is="dom-if" if="[[!_noAssociationsLeft]]">
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="change_association"
                service-data="[[_addAssocServiceData]]"
              >
                Add To Group
              </ha-call-service-button>
            </template>
            <template
              is="dom-if"
              if="[[_computeTargetInGroup(_selectedGroup, _selectedTargetNode)]]"
            >
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="change_association"
                service-data="[[_removeAssocServiceData]]"
              >
                Remove From Group
              </ha-call-service-button>
            </template>
            <template is="dom-if" if="[[_isBroadcastNodeInGroup]]">
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="change_association"
                service-data="[[_removeBroadcastNodeServiceData]]"
              >
                Remove Broadcast
              </ha-call-service-button>
            </template>
          </div>
        </template>
      </ha-card>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              nodes: Array,
              groups: Array,
              selectedNode: {
                type: Number,
                observer: "_selectedNodeChanged",
              },
              _selectedTargetNode: {
                type: Number,
                value: -1,
                observer: "_selectedTargetNodeChanged",
              },
              _selectedGroup: {
                type: Number,
                value: -1,
              },
              _otherGroupNodes: {
                type: Array,
                value: -1,
                computed: "_computeOtherGroupNodes(_selectedGroup)",
              },
              _maxAssociations: {
                type: String,
                value: "",
                computed: "_computeMaxAssociations(_selectedGroup)",
              },
              _noAssociationsLeft: {
                type: Boolean,
                value: true,
                computed: "_computeAssociationsLeft(_selectedGroup)",
              },
              _addAssocServiceData: {
                type: String,
                value: "",
              },
              _removeAssocServiceData: {
                type: String,
                value: "",
              },
              _removeBroadcastNodeServiceData: {
                type: String,
                value: "",
              },
              _isBroadcastNodeInGroup: {
                type: Boolean,
                value: false,
              },
            };
          }

          static get observers() {
            return ["_selectedGroupChanged(groups, _selectedGroup)"];
          }

          ready() {
            super.ready();
            this.addEventListener("hass-service-called", (ev) =>
              this.serviceCalled(ev)
            );
          }

          serviceCalled(ev) {
            if (ev.detail.success) {
              setTimeout(() => {
                this._refreshGroups(this.selectedNode);
              }, 5000);
            }
          }

          _computeAssociationsLeft(selectedGroup) {
            if (selectedGroup === -1) return true;
            return this._maxAssociations === this._otherGroupNodes.length;
          }

          _computeMaxAssociations(selectedGroup) {
            if (selectedGroup === -1) return -1;
            const maxAssociations = this.groups[selectedGroup].value
              .max_associations;
            if (!maxAssociations) return "None";
            return maxAssociations;
          }

          _computeOtherGroupNodes(selectedGroup) {
            if (selectedGroup === -1) return -1;
            this.setProperties({
              _isBroadcastNodeInGroup: false,
            });
            const associations = Object.values(
              this.groups[selectedGroup].value.association_instances
            );
            if (!associations.length) return ["None"];
            return associations.map((assoc) => {
              if (!assoc.length || assoc.length !== 2) {
                return `Unknown Node: ${assoc}`;
              }

              const id = assoc[0];
              const instance = assoc[1];
              const node = this.nodes.find((n) => n.attributes.node_id === id);

              if (id === 255) {
                this.setProperties({
                  _isBroadcastNodeInGroup: true,
                  _removeBroadcastNodeServiceData: {
                    node_id: this.nodes[this.selectedNode].attributes.node_id,
                    association: "remove",
                    target_node_id: 255,
                    group: this.groups[selectedGroup].key,
                  },
                });
              }

              if (!node) {
                return `Unknown Node (${id}: (${instance} ? ${id}.${instance} : ${id}))`;
              }

              let caption = this._computeSelectCaption(node);

              if (instance) {
                caption += `/ Instance: ${instance}`;
              }

              return caption;
            });
          }

          _computeTargetInGroup(selectedGroup, selectedTargetNode) {
            if (selectedGroup === -1 || selectedTargetNode === -1) return false;
            const associations = Object.values(
              this.groups[selectedGroup].value.associations
            );
            if (!associations.length) return false;
            return (
              associations.indexOf(
                this.nodes[selectedTargetNode].attributes.node_id
              ) !== -1
            );
          }

          _computeSelectCaption(stateObj) {
            return `${Object(
              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__[
                "default"
              ]
            )(stateObj)}
      (Node: ${stateObj.attributes.node_id}
      ${stateObj.attributes.query_stage})`;
          }

          _computeSelectCaptionGroup(stateObj) {
            return `${stateObj.key}: ${stateObj.value.label}`;
          }

          _computeIsTargetNodeSelected(selectedTargetNode) {
            return this.nodes && selectedTargetNode !== -1;
          }

          _computeIsGroupSelected(selectedGroup) {
            return (
              this.nodes && this.selectedNode !== -1 && selectedGroup !== -1
            );
          }

          _computeAssocServiceData(selectedGroup, type) {
            if (
              !this.groups === -1 ||
              selectedGroup === -1 ||
              this.selectedNode === -1 ||
              this._selectedTargetNode === -1
            )
              return -1;
            return {
              node_id: this.nodes[this.selectedNode].attributes.node_id,
              association: type,
              target_node_id: this.nodes[this._selectedTargetNode].attributes
                .node_id,
              group: this.groups[selectedGroup].key,
            };
          }

          async _refreshGroups(selectedNode) {
            const groupData = [];
            const groups = await this.hass.callApi(
              "GET",
              `zwave/groups/${this.nodes[selectedNode].attributes.node_id}`
            );
            Object.keys(groups).forEach((key) => {
              groupData.push({
                key,
                value: groups[key],
              });
            });
            this.setProperties({
              groups: groupData,
              _maxAssociations:
                groupData[this._selectedGroup].value.max_associations,
              _otherGroupNodes: Object.values(
                groupData[this._selectedGroup].value.associations
              ),
              _isBroadcastNodeInGroup: false,
            });
            const oldGroup = this._selectedGroup;
            this.setProperties({
              _selectedGroup: -1,
            });
            this.setProperties({
              _selectedGroup: oldGroup,
            });
          }

          _selectedGroupChanged() {
            if (this._selectedGroup === -1) return;
            this.setProperties({
              _maxAssociations: this.groups[this._selectedGroup].value
                .max_associations,
              _otherGroupNodes: Object.values(
                this.groups[this._selectedGroup].value.associations
              ),
            });
          }

          _selectedTargetNodeChanged() {
            if (this._selectedGroup === -1) return;

            if (
              this._computeTargetInGroup(
                this._selectedGroup,
                this._selectedTargetNode
              )
            ) {
              this.setProperties({
                _removeAssocServiceData: this._computeAssocServiceData(
                  this._selectedGroup,
                  "remove"
                ),
              });
            } else {
              this.setProperties({
                _addAssocServiceData: this._computeAssocServiceData(
                  this._selectedGroup,
                  "add"
                ),
              });
            }
          }

          _selectedNodeChanged() {
            if (this.selectedNode === -1) return;
            this.setProperties({
              _selectedTargetNode: -1,
              _selectedGroup: -1,
            });
          }
        }

        customElements.define("zwave-groups", ZwaveGroups);

        /***/
      },

    /***/ "./src/panels/config/zwave/zwave-log.js":
      /*!**********************************************!*\
  !*** ./src/panels/config/zwave/zwave-log.js ***!
  \**********************************************/
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
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _common_config_is_pwa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../common/config/is_pwa */ "./src/common/config/is_pwa.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );

        let registeredDialog = false;

        class OzwLog extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
              "html"
            ]`
    <style include="iron-flex ha-style">
      .content {
        margin-top: 24px;
      }

      ha-card {
        margin: 0 auto;
        max-width: 600px;
      }

      .device-picker {
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 24px;
      }

    </style>
    <ha-config-section is-wide="[[isWide]]">
      <span slot="header">OZW Log</span>
      <ha-card>
        <div class="device-picker">
          <paper-input label="Number of last log lines." type="number" min="0" max="1000" step="10" value="{{numLogLines}}">
          </paper-input>
        </div>
        <div class="card-actions">
          <mwc-button raised="true" on-click="_openLogWindow">Load</mwc-button>
          <mwc-button raised="true" on-click="_tailLog" disabled="{{_completeLog}}">Tail</mwc-button>
      </ha-card>
    </ha-config-section>
`;
          }

          static get properties() {
            return {
              hass: Object,
              isWide: {
                type: Boolean,
                value: false,
              },
              _ozwLogs: String,
              _completeLog: {
                type: Boolean,
                value: true,
              },
              numLogLines: {
                type: Number,
                value: 0,
                observer: "_isCompleteLog",
              },
              _intervalId: String,
              tail: Boolean,
            };
          }

          async _tailLog() {
            this.setProperties({
              tail: true,
            });
            const ozwWindow = await this._openLogWindow();

            if (
              !Object(
                _common_config_is_pwa__WEBPACK_IMPORTED_MODULE_6__["default"]
              )()
            ) {
              this.setProperties({
                _intervalId: setInterval(() => {
                  this._refreshLog(ozwWindow);
                }, 1500),
              });
            }
          }

          async _openLogWindow() {
            const info = await this.hass.callApi(
              "GET",
              "zwave/ozwlog?lines=" + this.numLogLines
            );
            this.setProperties({
              _ozwLogs: info,
            });

            if (
              Object(
                _common_config_is_pwa__WEBPACK_IMPORTED_MODULE_6__["default"]
              )()
            ) {
              this._showOzwlogDialog();

              return -1;
            }

            const ozwWindow = open("", "ozwLog", "toolbar");
            ozwWindow.document.body.innerHTML = `<pre>${this._ozwLogs}</pre>`;
            return ozwWindow;
          }

          async _refreshLog(ozwWindow) {
            if (ozwWindow.closed === true) {
              clearInterval(this._intervalId);
              this.setProperties({
                _intervalId: null,
              });
            } else {
              const info = await this.hass.callApi(
                "GET",
                "zwave/ozwlog?lines=" + this.numLogLines
              );
              this.setProperties({
                _ozwLogs: info,
              });
              ozwWindow.document.body.innerHTML = `<pre>${this._ozwLogs}</pre>`;
            }
          }

          _isCompleteLog() {
            if (this.numLogLines !== "0") {
              this.setProperties({
                _completeLog: false,
              });
            } else {
              this.setProperties({
                _completeLog: true,
              });
            }
          }

          connectedCallback() {
            super.connectedCallback();

            if (!registeredDialog) {
              registeredDialog = true;
              this.fire("register-dialog", {
                dialogShowEvent: "show-ozwlog-dialog",
                dialogTag: "zwave-log-dialog",
                dialogImport: () =>
                  Promise.all(
                    /*! import() | zwave-log-dialog */ [
                      __webpack_require__.e(
                        "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
                      ),
                      __webpack_require__.e("zwave-log-dialog"),
                    ]
                  ).then(
                    __webpack_require__.bind(
                      null,
                      /*! ./zwave-log-dialog */ "./src/panels/config/zwave/zwave-log-dialog.js"
                    )
                  ),
              });
            }
          }

          _showOzwlogDialog() {
            this.fire("show-ozwlog-dialog", {
              hass: this.hass,
              _numLogLines: this.numLogLines,
              _ozwLog: this._ozwLogs,
              _tail: this.tail,
              dialogClosedCallback: () => this._dialogClosed(),
            });
          }

          _dialogClosed() {
            this.setProperties({
              tail: false,
            });
          }
        }

        customElements.define("ozw-log", OzwLog);

        /***/
      },

    /***/ "./src/panels/config/zwave/zwave-network.ts":
      /*!**************************************************!*\
  !*** ./src/panels/config/zwave/zwave-network.ts ***!
  \**************************************************/
      /*! exports provided: ZwaveNetwork */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZwaveNetwork",
          function() {
            return ZwaveNetwork;
          }
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _data_zwave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../data/zwave */ "./src/data/zwave.ts"
        );
        /* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js"
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../components/ha-icon */ "./src/components/ha-icon.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
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

        let ZwaveNetwork = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])(
              "zwave-network"
            ),
          ],
          function(_initialize, _LitElement) {
            class ZwaveNetwork extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: ZwaveNetwork,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_2__["property"]
                    )(),
                  ],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_2__["property"]
                    )(),
                  ],
                  key: "isWide",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_2__["property"]
                    )(),
                  ],
                  key: "_showHelp",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_2__["property"]
                    )(),
                  ],
                  key: "_networkStatus",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_2__["property"]
                    )(),
                  ],
                  key: "_unsubs",

                  value() {
                    return [];
                  },
                },
                {
                  kind: "method",
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    this._unsubscribe();
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(ZwaveNetwork.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this._getNetworkStatus();

                    this._subscribe();
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <ha-config-section .isWide="${this.isWide}">
        <div style="position: relative" slot="header">
          <span>
            ${this.hass.localize(
              "ui.panel.config.zwave.network_management.header"
            )}
          </span>
          <paper-icon-button
            class="toggle-help-icon"
            @click="${this._onHelpTap}"
            icon="hass:help-circle"
          ></paper-icon-button>
        </div>
        <span slot="introduction">
          ${this.hass.localize(
            "ui.panel.config.zwave.network_management.introduction"
          )}
        </span>

        ${
          this._networkStatus
            ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
              <ha-card class="content network-status">
                <div class="details">
                  ${
                    this._networkStatus.state ===
                    _data_zwave__WEBPACK_IMPORTED_MODULE_4__[
                      "ZWAVE_NETWORK_STATE_STOPPED"
                    ]
                      ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        <ha-icon icon="hass:close"></ha-icon>
                        ${this.hass.localize(
                          "ui.panel.config.zwave.network_status.network_stopped"
                        )}
                      `
                      : this._networkStatus.state ===
                        _data_zwave__WEBPACK_IMPORTED_MODULE_4__[
                          "ZWAVE_NETWORK_STATE_STARTED"
                        ]
                      ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        <paper-spinner active></paper-spinner>
                        ${this.hass.localize(
                          "ui.panel.config.zwave.network_status.network_starting"
                        )}<br />
                        <small>
                          ${this.hass.localize(
                            "ui.panel.config.zwave.network_status.network_starting_note"
                          )}
                        </small>
                      `
                      : this._networkStatus.state ===
                        _data_zwave__WEBPACK_IMPORTED_MODULE_4__[
                          "ZWAVE_NETWORK_STATE_AWAKED"
                        ]
                      ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        <ha-icon icon="hass:checkbox-marked-circle"> </ha-icon>
                        ${this.hass.localize(
                          "ui.panel.config.zwave.network_status.network_started"
                        )}<br />
                        <small>
                          ${this.hass.localize(
                            "ui.panel.config.zwave.network_status.network_started_note_some_queried"
                          )}
                        </small>
                      `
                      : this._networkStatus.state ===
                        _data_zwave__WEBPACK_IMPORTED_MODULE_4__[
                          "ZWAVE_NETWORK_STATE_READY"
                        ]
                      ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        ${this.hass.localize(
                          "ui.panel.config.zwave.network_status.network_started"
                        )}<br />
                        <small>
                          ${this.hass.localize(
                            "ui.panel.config.zwave.network_status.network_started_note_all_queried"
                          )}
                        </small>
                      `
                      : ""
                  }
                </div>
                <div class="card-actions">
                  ${
                    this._networkStatus.state >=
                    _data_zwave__WEBPACK_IMPORTED_MODULE_4__[
                      "ZWAVE_NETWORK_STATE_AWAKED"
                    ]
                      ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        ${this._generateServiceButton("stop_network")}
                        ${this._generateServiceButton("heal_network")}
                        ${this._generateServiceButton("test_network")}
                      `
                      : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        ${this._generateServiceButton("start_network")}
                      `
                  }
                </div>
                ${
                  this._networkStatus.state >=
                  _data_zwave__WEBPACK_IMPORTED_MODULE_4__[
                    "ZWAVE_NETWORK_STATE_AWAKED"
                  ]
                    ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                      <div class="card-actions">
                        ${this._generateServiceButton("soft_reset")}
                        <ha-call-api-button
                          .hass=${this.hass}
                          path="zwave/saveconfig"
                        >
                          ${this.hass.localize(
                            "ui.panel.config.zwave.services.save_config"
                          )}
                        </ha-call-api-button>
                      </div>
                    `
                    : ""
                }
              </ha-card>
              ${
                this._networkStatus.state >=
                _data_zwave__WEBPACK_IMPORTED_MODULE_4__[
                  "ZWAVE_NETWORK_STATE_AWAKED"
                ]
                  ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                    <ha-card class="content">
                      <div class="card-actions">
                        ${this._generateServiceButton("add_node_secure")}
                        ${this._generateServiceButton("add_node")}
                        ${this._generateServiceButton("remove_node")}
                      </div>
                      <div class="card-actions">
                        ${this._generateServiceButton("cancel_command")}
                      </div>
                    </ha-card>
                  `
                  : ""
              }
            `
            : ""
        }
      </ha-config-section>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_getNetworkStatus",
                  value: async function _getNetworkStatus() {
                    this._networkStatus = await Object(
                      _data_zwave__WEBPACK_IMPORTED_MODULE_4__[
                        "fetchNetworkStatus"
                      ]
                    )(this.hass);
                  },
                },
                {
                  kind: "method",
                  key: "_subscribe",
                  value: function _subscribe() {
                    this._unsubs = [
                      "zwave.network_start",
                      "zwave.network_stop",
                      "zwave.network_ready",
                      "zwave.network_complete",
                      "zwave.network_complete_some_dead",
                    ].map((e) =>
                      this.hass.connection.subscribeEvents(
                        (event) => this._handleEvent(event),
                        e
                      )
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_unsubscribe",
                  value: function _unsubscribe() {
                    while (this._unsubs.length) {
                      this._unsubs.pop().then((unsub) => unsub());
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_handleEvent",
                  value: function _handleEvent(event) {
                    if (event.event_type === "zwave.network_start") {
                      // Optimistically set the state, wait 1s and poll the backend
                      // The backend will still report a state of 0 when the 'network_start'
                      // event is first fired.
                      if (this._networkStatus) {
                        this._networkStatus = Object.assign(
                          {},
                          this._networkStatus,
                          {
                            state: 5,
                          }
                        );
                      }

                      setTimeout(() => this._getNetworkStatus, 1000);
                    } else {
                      this._getNetworkStatus();
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_onHelpTap",
                  value: function _onHelpTap() {
                    this._showHelp = !this._showHelp;
                  },
                },
                {
                  kind: "method",
                  key: "_generateServiceButton",
                  value: function _generateServiceButton(service) {
                    return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <ha-call-service-button
        .hass=${this.hass}
        domain="zwave"
        service="${service}"
      >
        ${this.hass.localize("ui.panel.config.zwave.services." + service)}
      </ha-call-service-button>
      <ha-service-description
        .hass=${this.hass}
        domain="zwave"
        service="${service}"
        ?hidden=${!this._showHelp}
      >
      </ha-service-description>
    `;
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_3__["haStyle"],
                      lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
        .content {
          margin-top: 24px;
        }

        .network-status {
          text-align: center;
        }

        .network-status div.details {
          font-size: 1.5rem;
          padding: 24px;
        }

        .network-status ha-icon {
          display: block;
          margin: 0px auto 16px;
          width: 48px;
          height: 48px;
        }

        .network-status small {
          font-size: 1rem;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .card-actions.warning ha-call-service-button {
          color: var(--google-red-500);
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }

        ha-service-description {
          display: block;
          color: grey;
          padding: 0 8px 12px;
        }

        [hidden] {
          display: none;
        }
      `,
                    ];
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]
        );

        /***/
      },

    /***/ "./src/panels/config/zwave/zwave-node-config.js":
      /*!******************************************************!*\
  !*** ./src/panels/config/zwave/zwave-node-config.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );

        class ZwaveNodeConfig extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
              "html"
            ]`
      <style include="iron-flex ha-style">
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
        }
      </style>
      <div class="content">
        <ha-card header="Node config options">
          <template is="dom-if" if="[[_wakeupNode]]">
            <div class="card-actions">
              <paper-input
                float-label="Wakeup Interval"
                type="number"
                value="{{_wakeupInput}}"
                placeholder="[[_computeGetWakeupValue(selectedNode)]]"
              >
                <div suffix="">seconds</div>
              </paper-input>
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="set_wakeup"
                service-data="[[_computeWakeupServiceData(_wakeupInput)]]"
              >
                Set Wakeup
              </ha-call-service-button>
            </div>
          </template>
          <div class="device-picker">
            <paper-dropdown-menu
              label="Config parameter"
              dynamic-align=""
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_selectedConfigParameter}}"
              >
                <template is="dom-repeat" items="[[config]]" as="state">
                  <paper-item
                    >[[_computeSelectCaptionConfigParameter(state)]]</paper-item
                  >
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          <template
            is="dom-if"
            if="[[_isConfigParameterSelected(_selectedConfigParameter, 'List')]]"
          >
            <div class="device-picker">
              <paper-dropdown-menu
                label="Config value"
                dynamic-align=""
                class="flex"
                placeholder="{{_loadedConfigValue}}"
              >
                <paper-listbox
                  slot="dropdown-content"
                  selected="{{_selectedConfigValue}}"
                >
                  <template
                    is="dom-repeat"
                    items="[[_selectedConfigParameterValues]]"
                    as="state"
                  >
                    <paper-item>[[state]]</paper-item>
                  </template>
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
          </template>

          <template
            is="dom-if"
            if="[[_isConfigParameterSelected(_selectedConfigParameter, 'Byte Short Int')]]"
          >
            <div class="card-actions">
              <paper-input
                label="{{_selectedConfigParameterNumValues}}"
                type="number"
                value="{{_selectedConfigValue}}"
                max="{{_configParameterMax}}"
                min="{{_configParameterMin}}"
              >
              </paper-input>
            </div>
          </template>
          <template
            is="dom-if"
            if="[[_isConfigParameterSelected(_selectedConfigParameter, 'Bool Button')]]"
          >
            <div class="device-picker">
              <paper-dropdown-menu
                label="Config value"
                class="flex"
                dynamic-align=""
                placeholder="{{_loadedConfigValue}}"
              >
                <paper-listbox
                  slot="dropdown-content"
                  selected="{{_selectedConfigValue}}"
                >
                  <template
                    is="dom-repeat"
                    items="[[_selectedConfigParameterValues]]"
                    as="state"
                  >
                    <paper-item>[[state]]</paper-item>
                  </template>
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
          </template>
          <div class="help-text"><span>[[_configValueHelpText]]</span></div>
          <template
            is="dom-if"
            if="[[_isConfigParameterSelected(_selectedConfigParameter, 'Bool Button Byte Short Int List')]]"
          >
            <div class="card-actions">
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="set_config_parameter"
                service-data="[[_computeSetConfigParameterServiceData(_selectedConfigValue)]]"
              >
                Set Config Parameter
              </ha-call-service-button>
            </div>
          </template>
        </ha-card>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              nodes: Array,
              selectedNode: {
                type: Number,
                observer: "_nodesChanged",
              },
              config: {
                type: Array,
                value: () => [],
              },
              _selectedConfigParameter: {
                type: Number,
                value: -1,
                observer: "_selectedConfigParameterChanged",
              },
              _configParameterMax: {
                type: Number,
                value: -1,
              },
              _configParameterMin: {
                type: Number,
                value: -1,
              },
              _configValueHelpText: {
                type: String,
                value: "",
                computed: "_computeConfigValueHelp(_selectedConfigParameter)",
              },
              _selectedConfigParameterType: {
                type: String,
                value: "",
              },
              _selectedConfigValue: {
                type: Number,
                value: -1,
                observer: "_computeSetConfigParameterServiceData",
              },
              _selectedConfigParameterValues: {
                type: Array,
                value: () => [],
              },
              _selectedConfigParameterNumValues: {
                type: String,
                value: "",
              },
              _loadedConfigValue: {
                type: Number,
                value: -1,
              },
              _wakeupInput: Number,
              _wakeupNode: {
                type: Boolean,
                value: false,
              },
            };
          }

          ready() {
            super.ready();
            this.addEventListener("hass-service-called", (ev) =>
              this.serviceCalled(ev)
            );
          }

          serviceCalled(ev) {
            if (ev.detail.success) {
              setTimeout(() => {
                this._refreshConfig(this.selectedNode);
              }, 5000);
            }
          }

          _nodesChanged() {
            if (!this.nodes) return;
            this.setProperties({
              _selectedConfigParameter: -1,
            });
            this._wakeupNode =
              this.nodes[this.selectedNode].attributes.wake_up_interval === 0 ||
              this.nodes[this.selectedNode].attributes.wake_up_interval;

            if (this._wakeupNode) {
              if (
                this.nodes[this.selectedNode].attributes.wake_up_interval === 0
              )
                this.setProperties({
                  _wakeupInput: "",
                });
              else {
                this.setProperties({
                  _wakeupInput: this.nodes[this.selectedNode].attributes
                    .wake_up_interval,
                });
              }
            }
          }

          _computeGetWakeupValue(selectedNode) {
            if (
              this.selectedNode === -1 ||
              !this.nodes[selectedNode].attributes.wake_up_interval
            )
              return "unknown";
            return this.nodes[selectedNode].attributes.wake_up_interval;
          }

          _computeWakeupServiceData(wakeupInput) {
            return {
              node_id: this.nodes[this.selectedNode].attributes.node_id,
              value: wakeupInput,
            };
          }

          _computeConfigValueHelp(selectedConfigParameter) {
            if (selectedConfigParameter === -1) return "";
            const helpText = this.config[selectedConfigParameter].value.help;
            if (!helpText) return ["No helptext available"];
            return helpText;
          }

          _computeSetConfigParameterServiceData(selectedConfigValue) {
            if (
              this.selectedNode === -1 ||
              this._selectedConfigParameter === -1
            )
              return -1;
            var valueData = null;

            if ("Short Byte Int".includes(this._selectedConfigParameterType)) {
              valueData = parseInt(selectedConfigValue, 10);
            }

            if (
              "Bool Button List".includes(this._selectedConfigParameterType)
            ) {
              valueData = this._selectedConfigParameterValues[
                selectedConfigValue
              ];
            }

            return {
              node_id: this.nodes[this.selectedNode].attributes.node_id,
              parameter: this.config[this._selectedConfigParameter].key,
              value: valueData,
            };
          }

          _selectedConfigParameterChanged(selectedConfigParameter) {
            if (selectedConfigParameter === -1) return;
            this.setProperties({
              _selectedConfigValue: -1,
              _loadedConfigValue: -1,
              _selectedConfigParameterValues: [],
            });
            this.setProperties({
              _selectedConfigParameterType: this.config[selectedConfigParameter]
                .value.type,
              _configParameterMax: this.config[selectedConfigParameter].value
                .max,
              _configParameterMin: this.config[selectedConfigParameter].value
                .min,
              _loadedConfigValue: this.config[selectedConfigParameter].value
                .data,
              _configValueHelpText: this.config[selectedConfigParameter].value
                .help,
            });

            if ("Short Byte Int".includes(this._selectedConfigParameterType)) {
              this.setProperties({
                _selectedConfigParameterNumValues: this.config[
                  selectedConfigParameter
                ].value.data_items,
                _selectedConfigValue: this._loadedConfigValue,
              });
            }

            if ("Bool Button".includes(this._selectedConfigParameterType)) {
              this.setProperties({
                _selectedConfigParameterValues: ["True", "False"],
              });

              if (this.config[selectedConfigParameter].value.data) {
                this.setProperties({
                  _loadedConfigValue: "True",
                });
              } else
                this.setProperties({
                  _loadedConfigValue: "False",
                });
            }

            if ("List".includes(this._selectedConfigParameterType)) {
              this.setProperties({
                _selectedConfigParameterValues: this.config[
                  selectedConfigParameter
                ].value.data_items,
              });
            }
          }

          _isConfigParameterSelected(selectedConfigParameter, type) {
            if (selectedConfigParameter === -1) return false;
            if (this.config[selectedConfigParameter].value.type === type)
              return true;
            if (type.includes(this.config[selectedConfigParameter].value.type))
              return true;
            return false;
          }

          _computeSelectCaptionConfigParameter(stateObj) {
            return `${stateObj.key}: ${stateObj.value.label}`;
          }

          async _refreshConfig(selectedNode) {
            const configData = [];
            const config = await this.hass.callApi(
              "GET",
              `zwave/config/${this.nodes[selectedNode].attributes.node_id}`
            );
            Object.keys(config).forEach((key) => {
              configData.push({
                key: key,
                value: config[key],
              });
            });
            this.setProperties({
              config: configData,
            });

            this._selectedConfigParameterChanged(this._selectedConfigParameter);
          }
        }

        customElements.define("zwave-node-config", ZwaveNodeConfig);

        /***/
      },

    /***/ "./src/panels/config/zwave/zwave-node-protection.js":
      /*!**********************************************************!*\
  !*** ./src/panels/config/zwave/zwave-node-protection.js ***!
  \**********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );

        class ZwaveNodeProtection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
              "html"
            ]`
    <style include="iron-flex ha-style">
      .card-actions.warning ha-call-api-button {
        color: var(--google-red-500);
      }
      .content {
        margin-top: 24px;
      }

      ha-card {
        margin: 0 auto;
        max-width: 600px;
      }

      .device-picker {
        @apply --layout-horizontal;
        @apply --layout-center-center;
        padding: 0 24px 24px 24px;
        }

    </style>
      <div class="content">
        <ha-card header="Node protection">
          <div class="device-picker">
          <paper-dropdown-menu label="Protection" dynamic-align class="flex" placeholder="{{_loadedProtectionValue}}">
            <paper-listbox slot="dropdown-content" selected="{{_selectedProtectionParameter}}">
              <template is="dom-repeat" items="[[_protectionOptions]]" as="state">
                <paper-item>[[state]]</paper-item>
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
          </div>
          <div class="card-actions">
            <ha-call-api-button
              hass="[[hass]]"
              path="[[_nodePath]]"
              data="[[_protectionData]]">
              Set Protection
            </ha-call-service-button>
          </div>
        </ha-card>
      </div>
`;
          }

          static get properties() {
            return {
              hass: Object,
              nodes: Array,
              selectedNode: {
                type: Number,
                value: -1,
              },
              protectionNode: {
                type: Boolean,
                value: false,
              },
              _protectionValueID: {
                type: Number,
                value: -1,
              },
              _selectedProtectionParameter: {
                type: Number,
                value: -1,
                observer: "_computeProtectionData",
              },
              _protectionOptions: Array,
              _protection: {
                type: Array,
                value: () => [],
              },
              _loadedProtectionValue: {
                type: String,
                value: "",
              },
              _protectionData: {
                type: Object,
                value: {},
              },
              _nodePath: String,
            };
          }

          static get observers() {
            return ["_nodesChanged(nodes, selectedNode)"];
          }

          ready() {
            super.ready();
            this.addEventListener("hass-api-called", (ev) =>
              this.apiCalled(ev)
            );
          }

          apiCalled(ev) {
            if (ev.detail.success) {
              setTimeout(() => {
                this._refreshProtection(this.selectedNode);
              }, 5000);
            }
          }

          _nodesChanged() {
            if (!this.nodes) return;

            if (this.protection) {
              if (this.protection.length === 0) {
                return;
              }

              this.setProperties({
                protectionNode: true,
                _protectionOptions: this.protection[0].value,
                _loadedProtectionValue: this.protection[1].value,
                _protectionValueID: this.protection[2].value,
              });
            }
          }

          async _refreshProtection(selectedNode) {
            const protectionValues = [];
            const protections = await this.hass.callApi(
              "GET",
              `zwave/protection/${this.nodes[selectedNode].attributes.node_id}`
            );
            Object.keys(protections).forEach((key) => {
              protectionValues.push({
                key,
                value: protections[key],
              });
            });
            this.setProperties({
              _protection: protectionValues,
              _selectedProtectionParameter: -1,
              _loadedProtectionValue: this.protection[1].value,
            });
          }

          _computeProtectionData(selectedProtectionParameter) {
            if (this.selectedNode === -1 || selectedProtectionParameter === -1)
              return;
            this._protectionData = {
              selection: this._protectionOptions[selectedProtectionParameter],
              value_id: this._protectionValueID,
            };
            this._nodePath = `zwave/protection/${
              this.nodes[this.selectedNode].attributes.node_id
            }`;
          }
        }

        customElements.define("zwave-node-protection", ZwaveNodeProtection);

        /***/
      },

    /***/ "./src/panels/config/zwave/zwave-usercodes.js":
      /*!****************************************************!*\
  !*** ./src/panels/config/zwave/zwave-usercodes.js ***!
  \****************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );

        class ZwaveUsercodes extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
              "html"
            ]`
      <style include="iron-flex ha-style">
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }
      </style>
      <div class="content">
        <ha-card header="Node user codes">
          <div class="device-picker">
            <paper-dropdown-menu
              label="Code slot"
              dynamic-align=""
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_selectedUserCode}}"
              >
                <template is="dom-repeat" items="[[userCodes]]" as="state">
                  <paper-item
                    >[[_computeSelectCaptionUserCodes(state)]]</paper-item
                  >
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <template is="dom-if" if="[[_isUserCodeSelected(_selectedUserCode)]]">
            <div class="card-actions">
              <paper-input
                label="User code"
                type="text"
                allowed-pattern="[0-9,a-f,x,\\\\]"
                maxlength="40"
                minlength="16"
                value="{{_selectedUserCodeValue}}"
              >
              </paper-input>
              <pre>Ascii: [[_computedCodeOutput]]</pre>
            </div>
            <div class="card-actions">
              <ha-call-service-button
                hass="[[hass]]"
                domain="lock"
                service="set_usercode"
                service-data='[[_computeUserCodeServiceData(_selectedUserCodeValue, "Add")]]'
              >
                Set Usercode
              </ha-call-service-button>
              <ha-call-service-button
                hass="[[hass]]"
                domain="lock"
                service="clear_usercode"
                service-data='[[_computeUserCodeServiceData(_selectedUserCode, "Delete")]]'
              >
                Delete Usercode
              </ha-call-service-button>
            </div>
          </template>
        </ha-card>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              nodes: Array,
              selectedNode: {
                type: Number,
                observer: "_selectedNodeChanged",
              },
              userCodes: Object,
              _selectedUserCode: {
                type: Number,
                value: -1,
                observer: "_selectedUserCodeChanged",
              },
              _selectedUserCodeValue: String,
              _computedCodeOutput: {
                type: String,
                value: "",
              },
            };
          }

          ready() {
            super.ready();
            this.addEventListener("hass-service-called", (ev) =>
              this.serviceCalled(ev)
            );
          }

          serviceCalled(ev) {
            if (ev.detail.success) {
              setTimeout(() => {
                this._refreshUserCodes(this.selectedNode);
              }, 5000);
            }
          }

          _isUserCodeSelected(selectedUserCode) {
            if (selectedUserCode === -1) return false;
            return true;
          }

          _computeSelectCaptionUserCodes(stateObj) {
            return `${stateObj.key}: ${stateObj.value.label}`;
          }

          _selectedUserCodeChanged(selectedUserCode) {
            if (this._selectedUserCode === -1 || selectedUserCode === -1)
              return;
            const value = this.userCodes[selectedUserCode].value.code;
            this.setProperties({
              _selectedUserCodeValue: this._a2hex(value),
              _computedCodeOutput: `[${this._hex2a(this._a2hex(value))}]`,
            });
          }

          _computeUserCodeServiceData(selectedUserCodeValue, type) {
            if (this.selectedNode === -1 || !selectedUserCodeValue) return -1;
            let serviceData = null;
            let valueData = null;

            if (type === "Add") {
              valueData = this._hex2a(selectedUserCodeValue);
              this._computedCodeOutput = `[${valueData}]`;
              serviceData = {
                node_id: this.nodes[this.selectedNode].attributes.node_id,
                code_slot: this._selectedUserCode,
                usercode: valueData,
              };
            }

            if (type === "Delete") {
              serviceData = {
                node_id: this.nodes[this.selectedNode].attributes.node_id,
                code_slot: this._selectedUserCode,
              };
            }

            return serviceData;
          }

          async _refreshUserCodes(selectedNode) {
            this.setProperties({
              _selectedUserCodeValue: "",
            });
            const userCodes = [];
            const userCodeData = await this.hass.callApi(
              "GET",
              `zwave/usercodes/${this.nodes[selectedNode].attributes.node_id}`
            );
            Object.keys(userCodeData).forEach((key) => {
              userCodes.push({
                key,
                value: userCodeData[key],
              });
            });
            this.setProperties({
              userCodes: userCodes,
            });

            this._selectedUserCodeChanged(this._selectedUserCode);
          }

          _a2hex(str) {
            const arr = [];
            let output = "";

            for (let i = 0, l = str.length; i < l; i++) {
              const hex = Number(str.charCodeAt(i)).toString(16);

              if (hex === "0") {
                output = "00";
              } else {
                output = hex;
              }

              arr.push("\\x" + output);
            }

            return arr.join("");
          }

          _hex2a(hexx) {
            const hex = hexx.toString();
            const hexMod = hex.replace(/\\x/g, "");
            let str = "";

            for (let i = 0; i < hexMod.length; i += 2) {
              str += String.fromCharCode(parseInt(hexMod.substr(i, 2), 16));
            }

            return str;
          }

          _selectedNodeChanged() {
            if (this.selectedNode === -1) return;
            this.setProperties({
              _selecteduserCode: -1,
            });
          }
        }

        customElements.define("zwave-usercodes", ZwaveUsercodes);

        /***/
      },

    /***/ "./src/panels/config/zwave/zwave-values.ts":
      /*!*************************************************!*\
  !*** ./src/panels/config/zwave/zwave-values.ts ***!
  \*************************************************/
      /*! exports provided: ZwaveValues */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZwaveValues",
          function() {
            return ZwaveValues;
          }
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
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

        let ZwaveValues = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])(
              "zwave-values"
            ),
          ],
          function(_initialize, _LitElement) {
            class ZwaveValues extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: ZwaveValues,
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
                  key: "_values",

                  value() {
                    return [];
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "_selectedValue",

                  value() {
                    return -1;
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <div class="content">
        <ha-card
          .header=${this.hass.localize("ui.panel.config.zwave.values.header")}
        >
          <div class="device-picker">
            <paper-dropdown-menu
              label=${this.hass.localize("ui.panel.config.zwave.common.value")}
              dynamic-align
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected=${this._selectedValue}
              >
                ${this._values.map(
                  (item) => lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                    <paper-item
                      >${item.label}
                      (${this.hass.localize(
                        "ui.panel.config.zwave.common.instance"
                      )}:
                      ${item.instance},
                      ${this.hass.localize(
                        "ui.panel.config.zwave.common.index"
                      )}:
                      ${item.index})</paper-item
                    >
                  `
                )}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
        </ha-card>
      </div>
    `;
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_4__["haStyle"],
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
        }
      `,
                    ];
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]
        );

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXp3YXZlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvaXNfcHdhLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZXNfc29ydF9ieV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1hcGktYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2hhLXByb2dyZXNzLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXNlcnZpY2UtZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvendhdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvaGEtYXBwLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWNvbmZpZy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWZvcm0tc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvaGEtY29uZmlnLXp3YXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3p3YXZlL3p3YXZlLWdyb3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS96d2F2ZS1sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvendhdmUtbmV0d29yay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS96d2F2ZS1ub2RlLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS96d2F2ZS1ub2RlLXByb3RlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvendhdmUtdXNlcmNvZGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3p3YXZlL3p3YXZlLXZhbHVlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogUmV0dXJuIGlmIHRoZSBkaXNwbGF5bW9kZSBpcyBpbiBzdGFuZGFsb25lIG1vZGUgKFBXQSkuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1B3YSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSlcIikubWF0Y2hlcztcbn1cbiIsIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPYmplY3RJZChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iajogSGFzc0VudGl0eSkge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlT2JqZWN0SWQgZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nID0+XG4gIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG4iLCIvKipcbiAqIFNvcnQgZnVuY3Rpb24gdG8gaGVscCBzb3J0IHN0YXRlcyBieSBuYW1lXG4gKlxuICogVXNhZ2U6XG4gKiAgIGNvbnN0IHN0YXRlcyA9IFtzdGF0ZTEsIHN0YXRlMl1cbiAqICAgc3RhdGVzLnNvcnQoc3RhdGVzU29ydEJ5TmFtZSk7XG4gKi9cbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydFN0YXRlc0J5TmFtZShcbiAgZW50aXR5QTogSGFzc0VudGl0eSxcbiAgZW50aXR5QjogSGFzc0VudGl0eVxuKSB7XG4gIGNvbnN0IG5hbWVBID0gY29tcHV0ZVN0YXRlTmFtZShlbnRpdHlBKTtcbiAgY29uc3QgbmFtZUIgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eUIpO1xuICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLXByb2dyZXNzLWJ1dHRvblwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5jbGFzcyBIYUNhbGxBcGlCdXR0b24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICAucHJvZ3Jlc3M9XCIke3RoaXMucHJvZ3Jlc3N9XCJcbiAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9idXR0b25UYXBwZWR9XCJcbiAgICAgICAgP2Rpc2FibGVkPVwiJHt0aGlzLmRpc2FibGVkfVwiXG4gICAgICAgID48c2xvdD48L3Nsb3RcbiAgICAgID48L2hhLXByb2dyZXNzLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByb2dyZXNzID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgcHJvZ3Jlc3M6IEJvb2xlYW4sXG4gICAgICBwYXRoOiBTdHJpbmcsXG4gICAgICBtZXRob2Q6IFN0cmluZyxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIGdldCBwcm9ncmVzc0J1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3IoXCJoYS1wcm9ncmVzcy1idXR0b25cIik7XG4gIH1cblxuICBhc3luYyBfYnV0dG9uVGFwcGVkKCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSB0cnVlO1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IHtcbiAgICAgIG1ldGhvZDogdGhpcy5tZXRob2QsXG4gICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkodGhpcy5tZXRob2QsIHRoaXMucGF0aCwgdGhpcy5kYXRhKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJvZ3Jlc3NCdXR0b24uYWN0aW9uU3VjY2VzcygpO1xuICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgZXZlbnREYXRhLnJlc3BvbnNlID0gcmVzcDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJvZ3Jlc3NCdXR0b24uYWN0aW9uRXJyb3IoKTtcbiAgICAgIGV2ZW50RGF0YS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICBldmVudERhdGEucmVzcG9uc2UgPSBlcnI7XG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1hcGktY2FsbGVkXCIsIGV2ZW50RGF0YSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FsbC1hcGktYnV0dG9uXCIsIEhhQ2FsbEFwaUJ1dHRvbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLXByb2dyZXNzLWJ1dHRvblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNhbGxTZXJ2aWNlQnV0dG9uIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgaWQ9XCJwcm9ncmVzc1wiXG4gICAgICAgIHByb2dyZXNzPVwiW1twcm9ncmVzc11dXCJcbiAgICAgICAgb24tY2xpY2s9XCJidXR0b25UYXBwZWRcIlxuICAgICAgICA+PHNsb3Q+PC9zbG90XG4gICAgICA+PC9oYS1wcm9ncmVzcy1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBkb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcblxuICAgICAgc2VydmljZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7fSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZCgpIHtcbiAgICB0aGlzLnByb2dyZXNzID0gdHJ1ZTtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHZhciBldmVudERhdGEgPSB7XG4gICAgICBkb21haW46IHRoaXMuZG9tYWluLFxuICAgICAgc2VydmljZTogdGhpcy5zZXJ2aWNlLFxuICAgICAgc2VydmljZURhdGE6IHRoaXMuc2VydmljZURhdGEsXG4gICAgfTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2UsIHRoaXMuc2VydmljZURhdGEpXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZWwucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBlbC4kLnByb2dyZXNzLmFjdGlvblN1Y2Nlc3MoKTtcbiAgICAgICAgICBldmVudERhdGEuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVsLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgZWwuJC5wcm9ncmVzcy5hY3Rpb25FcnJvcigpO1xuICAgICAgICAgIGV2ZW50RGF0YS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBlbC5maXJlKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCBldmVudERhdGEpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiLCBIYUNhbGxTZXJ2aWNlQnV0dG9uKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhUHJvZ3Jlc3NCdXR0b24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgICAgIH1cblxuICAgICAgICAuc3VjY2VzcyBtd2MtYnV0dG9uIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb29nbGUtZ3JlZW4tNTAwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIG13Yy1idXR0b24ge1xuICAgICAgICAgIC0tbWRjLXRoZW1lLXByaW1hcnk6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQ7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIGlkPVwiYnV0dG9uXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZURpc2FibGVkKGRpc2FibGVkLCBwcm9ncmVzcyldXVwiXG4gICAgICAgICAgb24tY2xpY2s9XCJidXR0b25UYXBwZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1twcm9ncmVzc11dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+PHBhcGVyLXNwaW5uZXIgYWN0aXZlPVwiXCI+PC9wYXBlci1zcGlubmVyPjwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICB0ZW1wQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNsYXNzTGlzdCA9IHRoaXMuJC5jb250YWluZXIuY2xhc3NMaXN0O1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB0aGlzLmJ1dHRvblRhcHBlZChldikpO1xuICB9XG5cbiAgYnV0dG9uVGFwcGVkKGV2KSB7XG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MpIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgYWN0aW9uU3VjY2VzcygpIHtcbiAgICB0aGlzLnRlbXBDbGFzcyhcInN1Y2Nlc3NcIik7XG4gIH1cblxuICBhY3Rpb25FcnJvcigpIHtcbiAgICB0aGlzLnRlbXBDbGFzcyhcImVycm9yXCIpO1xuICB9XG5cbiAgY29tcHV0ZURpc2FibGVkKGRpc2FibGVkLCBwcm9ncmVzcykge1xuICAgIHJldHVybiBkaXNhYmxlZCB8fCBwcm9ncmVzcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wcm9ncmVzcy1idXR0b25cIiwgSGFQcm9ncmVzc0J1dHRvbik7XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhU2VydmljZURlc2NyaXB0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgW1tfZ2V0RGVzY3JpcHRpb24oaGFzcywgZG9tYWluLCBzZXJ2aWNlKV1dXG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgZG9tYWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIF9nZXREZXNjcmlwdGlvbihoYXNzLCBkb21haW4sIHNlcnZpY2UpIHtcbiAgICB2YXIgZG9tYWluU2VydmljZXMgPSBoYXNzLnNlcnZpY2VzW2RvbWFpbl07XG4gICAgaWYgKCFkb21haW5TZXJ2aWNlcykgcmV0dXJuIFwiXCI7XG4gICAgdmFyIHNlcnZpY2VPYmplY3QgPSBkb21haW5TZXJ2aWNlc1tzZXJ2aWNlXTtcbiAgICBpZiAoIXNlcnZpY2VPYmplY3QpIHJldHVybiBcIlwiO1xuICAgIHJldHVybiBzZXJ2aWNlT2JqZWN0LmRlc2NyaXB0aW9uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXNlcnZpY2UtZGVzY3JpcHRpb25cIiwgSGFTZXJ2aWNlRGVzY3JpcHRpb24pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFpXYXZlTmV0d29ya1N0YXR1cyB7XG4gIHN0YXRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWldhdmVWYWx1ZSB7XG4gIGluZGV4OiBudW1iZXI7XG4gIGluc3RhbmNlOiBudW1iZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHBvbGxfaW50ZW5zaXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBaV0FWRV9ORVRXT1JLX1NUQVRFX1NUT1BQRUQgPSAwO1xuZXhwb3J0IGNvbnN0IFpXQVZFX05FVFdPUktfU1RBVEVfRkFJTEVEID0gMTtcbmV4cG9ydCBjb25zdCBaV0FWRV9ORVRXT1JLX1NUQVRFX1NUQVJURUQgPSA1O1xuZXhwb3J0IGNvbnN0IFpXQVZFX05FVFdPUktfU1RBVEVfQVdBS0VEID0gNztcbmV4cG9ydCBjb25zdCBaV0FWRV9ORVRXT1JLX1NUQVRFX1JFQURZID0gMTA7XG5cbmV4cG9ydCBjb25zdCBmZXRjaE5ldHdvcmtTdGF0dXMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnRcbik6IFByb21pc2U8WldhdmVOZXR3b3JrU3RhdHVzPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6d2F2ZS9uZXR3b3JrX3N0YXR1c1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVmFsdWVzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIG5vZGVJZDogbnVtYmVyKSA9PlxuICBoYXNzLmNhbGxBcGk8WldhdmVWYWx1ZVtdPihcIkdFVFwiLCBgendhdmUvdmFsdWVzLyR7bm9kZUlkfWApO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG5UaGlzIGNvZGUgaXMgY29waWVkIGZyb20gYXBwLWhlYWRlci1sYXlvdXQuXG4nZnVsbGJsZWVkJyBzdXBwb3J0IGlzIHJlbW92ZWQgYXMgSG9tZSBBc3Npc3N0YW50IGRvZXNuJ3QgdXNlIGl0LlxudHJhbnNmb3JtOiB0cmFuc2xhdGUoMCkgaXMgYWRkZWQuXG4qL1xuLypcbiAgRklYTUUocG9seW1lci1tb2R1bGl6ZXIpOiB0aGUgYWJvdmUgY29tbWVudHMgd2VyZSBleHRyYWN0ZWRcbiAgZnJvbSBIVE1MIGFuZCBtYXkgYmUgb3V0IG9mIHBsYWNlIGhlcmUuIFJldmlldyB0aGVtIGFuZFxuICB0aGVuIGRlbGV0ZSB0aGlzIGNvbW1lbnQhXG4qL1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyLWxheW91dC9hcHAtaGVhZGVyLWxheW91dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFBcHBMYXlvdXQgZXh0ZW5kcyBjdXN0b21FbGVtZW50cy5nZXQoXCJhcHAtaGVhZGVyLWxheW91dFwiKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2UgYXBwLWhlYWRlci1sYXlvdXQgdG8gaGF2ZSBpdHMgb3duIHN0YWNraW5nIGNvbnRleHQgc28gdGhhdCBpdHMgcGFyZW50IGNhblxuICAgICAgICAgKiBjb250cm9sIHRoZSBzdGFja2luZyBvZiBpdCByZWxhdGl2ZSB0byBvdGhlciBlbGVtZW50cyAoZS5nLiBhcHAtZHJhd2VyLWxheW91dCkuXG4gICAgICAgICAqIFRoaXMgY291bGQgYmUgZG9uZSB1c2luZyBcXGBpc29sYXRpb246IGlzb2xhdGVcXGAsIGJ1dCB0aGF0J3Mgbm90IHdlbGwgc3VwcG9ydGVkXG4gICAgICAgICAqIGFjcm9zcyBicm93c2Vycy5cbiAgICAgICAgICovXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9XCJoZWFkZXJcIl0pIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml4ZWQtdG9wO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAjd3JhcHBlci5pbml0aWFsaXppbmcgOjpzbG90dGVkKFtzbG90PVwiaGVhZGVyXCJdKSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pXG4gICAgICAgICAgI3dyYXBwZXIuaW5pdGlhbGl6aW5nXG4gICAgICAgICAgOjpzbG90dGVkKFtzbG90PVwiaGVhZGVyXCJdKSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlci5pbml0aWFsaXppbmcgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICAvKiBDcmVhdGUgYSBzdGFja2luZyBjb250ZXh0IGhlcmUgc28gdGhhdCBhbGwgY2hpbGRyZW4gYXBwZWFyIGJlbG93IHRoZSBoZWFkZXIuICovXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgLyogVXNpbmcgJ3RyYW5zZm9ybScgd2lsbCBjYXVzZSAncG9zaXRpb246IGZpeGVkJyBlbGVtZW50cyB0byBiZWhhdmUgbGlrZVxuICAgICAgICAgICAncG9zaXRpb246IGFic29sdXRlJyByZWxhdGl2ZSB0byB0aGlzIGVsZW1lbnQuICovXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwid3JhcHBlclwiIGNsYXNzPVwiaW5pdGlhbGl6aW5nXCI+XG4gICAgICAgIDxzbG90IGlkPVwiaGVhZGVyU2xvdFwiIG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+XG5cbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxzbG90IGlkPVwiZmFiXCIgbmFtZT1cImZhYlwiPjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWFwcC1sYXlvdXRcIiwgSGFBcHBMYXlvdXQpO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuY2xhc3MgSGFDb25maWdTZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDI4cHggMjBweCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1kaXNwbGF5MTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXJyb3cuY29udGVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaW50cm8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvXCI+PHNsb3QgbmFtZT1cImludHJvZHVjdGlvblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZmxleC1hdXRvXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJjb250ZW50IFwiO1xuXG4gICAgcmV0dXJuIGlzV2lkZSA/IGNsYXNzZXMgOiBjbGFzc2VzICsgXCJuYXJyb3dcIjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJ0b2dldGhlciBsYXlvdXQgXCI7XG5cbiAgICByZXR1cm4gY2xhc3NlcyArIChpc1dpZGUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWwgbmFycm93XCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1zZWN0aW9uXCIsIEhhQ29uZmlnU2VjdGlvbik7XG4iLCJjb25zdCBkb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbmRvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cbmRvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cImhhLWZvcm0tc3R5bGVcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1ncm91cCBsYWJlbCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LTI7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tZ3JvdXAudmVydGljYWwge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItZHJvcGRvd24tbWVudS5mb3JtLWNvbnRyb2wge1xuICAgICAgICBtYXJnaW46IC05cHggMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGEtYXBwLWxheW91dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4uL2hhLWZvcm0tc3R5bGVcIjtcbmltcG9ydCBcIi4vendhdmUtZ3JvdXBzXCI7XG5pbXBvcnQgXCIuL3p3YXZlLWxvZ1wiO1xuaW1wb3J0IFwiLi96d2F2ZS1uZXR3b3JrXCI7XG5pbXBvcnQgXCIuL3p3YXZlLW5vZGUtY29uZmlnXCI7XG5pbXBvcnQgXCIuL3p3YXZlLXVzZXJjb2Rlc1wiO1xuaW1wb3J0IFwiLi96d2F2ZS12YWx1ZXNcIjtcbmltcG9ydCBcIi4vendhdmUtbm9kZS1wcm90ZWN0aW9uXCI7XG5cbmltcG9ydCBzb3J0QnlOYW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N0YXRlc19zb3J0X2J5X25hbWVcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ29uZmlnWndhdmUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGUgaGEtZm9ybS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub2RlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtc2VydmljZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dnbGUtaGVscC1pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWFwcC1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb249XCJcIj5cbiAgICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPVwiXCI+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPGhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJfYmFja1RhcHBlZFwiXG4gICAgICAgICAgICA+PC9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2PlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPVwiXCI+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy56d2F2ZS5jYXB0aW9uJyldXVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICAgIDx6d2F2ZS1uZXR3b3JrXG4gICAgICAgICAgaWQ9XCJ6d2F2ZS1uZXR3b3JrXCJcbiAgICAgICAgICBpcy13aWRlPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgPjwvendhdmUtbmV0d29yaz5cblxuICAgICAgICA8IS0tIE5vZGUgY2FyZCAtLT5cbiAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZVwiIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPlotV2F2ZSBOb2RlIE1hbmFnZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtaGVscC1pY29uXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJ0b2dnbGVIZWxwXCJcbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgUnVuIFotV2F2ZSBjb21tYW5kcyB0aGF0IGFmZmVjdCBhIHNpbmdsZSBub2RlLiBQaWNrIGEgbm9kZSB0byBzZWUgYVxuICAgICAgICAgICAgbGlzdCBvZiBhdmFpbGFibGUgY29tbWFuZHMuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudSBkeW5hbWljLWFsaWduPVwiXCIgbGFiZWw9XCJOb2Rlc1wiIGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7c2VsZWN0ZWROb2RlfX1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbbm9kZXNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tjb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZSldXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shY29tcHV0ZUlzTm9kZVNlbGVjdGVkKHNlbGVjdGVkTm9kZSldXVwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc2hvd0hlbHBdXVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjogZ3JleTsgcGFkZGluZzogMTJweFwiPlxuICAgICAgICAgICAgICAgICAgU2VsZWN0IG5vZGUgdG8gdmlldyBwZXItbm9kZSBvcHRpb25zXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY29tcHV0ZUlzTm9kZVNlbGVjdGVkKHNlbGVjdGVkTm9kZSldXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVmcmVzaF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbY29tcHV0ZU5vZGVTZXJ2aWNlRGF0YShzZWxlY3RlZE5vZGUpXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJlZnJlc2ggTm9kZVxuICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZWZyZXNoX25vZGVcIlxuICAgICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXNob3dIZWxwXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbbm9kZUZhaWxlZF1dXCI+XG4gICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZW1vdmVfZmFpbGVkX25vZGVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKV1dXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVtb3ZlIEZhaWxlZCBOb2RlXG4gICAgICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZW1vdmVfZmFpbGVkX25vZGVcIlxuICAgICAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2hvd0hlbHBdXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG5cbiAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInJlcGxhY2VfZmFpbGVkX25vZGVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKV1dXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVwbGFjZSBGYWlsZWQgTm9kZVxuICAgICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVwbGFjZV9mYWlsZWRfbm9kZVwiXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFzaG93SGVscF1dXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicHJpbnRfbm9kZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKV1dXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQcmludCBOb2RlXG4gICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cInByaW50X25vZGVcIlxuICAgICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXNob3dIZWxwXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG5cbiAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJoZWFsX25vZGVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tjb21wdXRlSGVhbE5vZGVTZXJ2aWNlRGF0YShzZWxlY3RlZE5vZGUpXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEhlYWwgTm9kZVxuICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJoZWFsX25vZGVcIlxuICAgICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXNob3dIZWxwXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG5cbiAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJ0ZXN0X25vZGVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tjb21wdXRlTm9kZVNlcnZpY2VEYXRhKHNlbGVjdGVkTm9kZSldXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVGVzdCBOb2RlXG4gICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cInRlc3Rfbm9kZVwiXG4gICAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2hvd0hlbHBdXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9ub2RlTW9yZUluZm9cIlxuICAgICAgICAgICAgICAgICAgPk5vZGUgSW5mb3JtYXRpb248L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW50aXRpZXMgb2YgdGhpcyBub2RlXCJcbiAgICAgICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tzZWxlY3RlZEVudGl0eX19XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tlbnRpdGllc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPltbc3RhdGUuZW50aXR5X2lkXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgICAgIGlmPVwiW1shY29tcHV0ZUlzRW50aXR5U2VsZWN0ZWQoc2VsZWN0ZWRFbnRpdHkpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVmcmVzaF9lbnRpdHlcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVSZWZyZXNoRW50aXR5U2VydmljZURhdGEoc2VsZWN0ZWRFbnRpdHkpXV1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBSZWZyZXNoIEVudGl0eVxuICAgICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVmcmVzaF9lbnRpdHlcIlxuICAgICAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2hvd0hlbHBdXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9lbnRpdHlNb3JlSW5mb1wiXG4gICAgICAgICAgICAgICAgICAgID5FbnRpdHkgSW5mb3JtYXRpb248L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9XCJ7e2VudGl0eUlnbm9yZWR9fVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRXhjbHVkZSB0aGlzIGVudGl0eSBmcm9tIEpBVklTIEhvbWVcbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJ7e2VudGl0eUlnbm9yZWR9fVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUG9sbGluZyBpbnRlbnNpdHlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tlbnRpdHlQb2xsaW5nSW50ZW5zaXR5fX1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJzZXRfcG9sbF9pbnRlbnNpdHlcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVQb2xsSW50ZW5zaXR5U2VydmljZURhdGEoZW50aXR5UG9sbGluZ0ludGVuc2l0eSldXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuXG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NvbXB1dGVJc05vZGVTZWxlY3RlZChzZWxlY3RlZE5vZGUpXV1cIj5cbiAgICAgICAgICAgIDwhLS0gVmFsdWUgY2FyZCAtLT5cbiAgICAgICAgICAgIDx6d2F2ZS12YWx1ZXNcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbm9kZXM9XCJbW25vZGVzXV1cIlxuICAgICAgICAgICAgICBzZWxlY3RlZC1ub2RlPVwiW1tzZWxlY3RlZE5vZGVdXVwiXG4gICAgICAgICAgICAgIHZhbHVlcz1cIltbdmFsdWVzXV1cIlxuICAgICAgICAgICAgPjwvendhdmUtdmFsdWVzPlxuXG4gICAgICAgICAgICA8IS0tIEdyb3VwIGNhcmQgLS0+XG4gICAgICAgICAgICA8endhdmUtZ3JvdXBzXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5vZGVzPVwiW1tub2Rlc11dXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQtbm9kZT1cIltbc2VsZWN0ZWROb2RlXV1cIlxuICAgICAgICAgICAgICBncm91cHM9XCJbW2dyb3Vwc11dXCJcbiAgICAgICAgICAgID48L3p3YXZlLWdyb3Vwcz5cblxuICAgICAgICAgICAgPCEtLSBDb25maWcgY2FyZCAtLT5cbiAgICAgICAgICAgIDx6d2F2ZS1ub2RlLWNvbmZpZ1xuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBub2Rlcz1cIltbbm9kZXNdXVwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkLW5vZGU9XCJbW3NlbGVjdGVkTm9kZV1dXCJcbiAgICAgICAgICAgICAgY29uZmlnPVwiW1tjb25maWddXVwiXG4gICAgICAgICAgICA+PC96d2F2ZS1ub2RlLWNvbmZpZz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPCEtLSBQcm90ZWN0aW9uIGNhcmQgLS0+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJ7e19wcm90ZWN0aW9uTm9kZX19XCI+XG4gICAgICAgICAgICA8endhdmUtbm9kZS1wcm90ZWN0aW9uXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5vZGVzPVwiW1tub2Rlc11dXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQtbm9kZT1cIltbc2VsZWN0ZWROb2RlXV1cIlxuICAgICAgICAgICAgICBwcm90ZWN0aW9uPVwiW1tfcHJvdGVjdGlvbl1dXCJcbiAgICAgICAgICAgID48L3p3YXZlLW5vZGUtcHJvdGVjdGlvbj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPCEtLSBVc2VyIENvZGVzIC0tPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwie3toYXNOb2RlVXNlckNvZGVzfX1cIj5cbiAgICAgICAgICAgIDx6d2F2ZS11c2VyY29kZXNcbiAgICAgICAgICAgICAgaWQ9XCJ6d2F2ZS11c2VyY29kZXNcIlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBub2Rlcz1cIltbbm9kZXNdXVwiXG4gICAgICAgICAgICAgIHVzZXItY29kZXM9XCJbW3VzZXJDb2Rlc11dXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQtbm9kZT1cIltbc2VsZWN0ZWROb2RlXV1cIlxuICAgICAgICAgICAgPjwvendhdmUtdXNlcmNvZGVzPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG5cbiAgICAgICAgPCEtLSBPencgbG9nIC0tPlxuICAgICAgICA8b3p3LWxvZyBpcy13aWRlPVwiW1tpc1dpZGVdXVwiIGhhc3M9XCJbW2hhc3NdXVwiPjwvb3p3LWxvZz5cbiAgICAgIDwvaGEtYXBwLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGlzV2lkZTogQm9vbGVhbixcblxuICAgICAgbm9kZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVOb2RlcyhoYXNzKVwiLFxuICAgICAgfSxcblxuICAgICAgc2VsZWN0ZWROb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJzZWxlY3RlZE5vZGVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBub2RlRmFpbGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbmZpZzoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6ICgpID0+IFtdLFxuICAgICAgfSxcblxuICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdGllcyhzZWxlY3RlZE5vZGUpXCIsXG4gICAgICB9LFxuXG4gICAgICBzZWxlY3RlZEVudGl0eToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic2VsZWN0ZWRFbnRpdHlDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICB2YWx1ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICB9LFxuXG4gICAgICBncm91cHM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICB9LFxuXG4gICAgICB1c2VyQ29kZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAoKSA9PiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIGhhc05vZGVVc2VyQ29kZXM6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc2hvd0hlbHA6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZW50aXR5SWdub3JlZDogQm9vbGVhbixcblxuICAgICAgZW50aXR5UG9sbGluZ0ludGVuc2l0eToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcblxuICAgICAgX3Byb3RlY3Rpb246IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAoKSA9PiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIF9wcm90ZWN0aW9uTm9kZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgKGV2KSA9PlxuICAgICAgdGhpcy5zZXJ2aWNlQ2FsbGVkKGV2KVxuICAgICk7XG4gIH1cblxuICBzZXJ2aWNlQ2FsbGVkKGV2KSB7XG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzICYmIGV2LmRldGFpbC5zZXJ2aWNlID09PSBcInNldF9wb2xsX2ludGVuc2l0eVwiKSB7XG4gICAgICB0aGlzLl9zYXZlRW50aXR5KCk7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZU5vZGVzKGhhc3MpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpXG4gICAgICAubWFwKChrZXkpID0+IGhhc3Muc3RhdGVzW2tleV0pXG4gICAgICAuZmlsdGVyKChlbnQpID0+IGVudC5lbnRpdHlfaWQubWF0Y2goXCJ6d2F2ZVsuXVwiKSlcbiAgICAgIC5zb3J0KHNvcnRCeU5hbWUpO1xuICB9XG5cbiAgY29tcHV0ZUVudGl0aWVzKHNlbGVjdGVkTm9kZSkge1xuICAgIGlmICghdGhpcy5ub2RlcyB8fCBzZWxlY3RlZE5vZGUgPT09IC0xKSByZXR1cm4gLTE7XG4gICAgY29uc3Qgbm9kZWlkID0gdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkO1xuICAgIGNvbnN0IGhhc3MgPSB0aGlzLmhhc3M7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaGFzcy5zdGF0ZXMpXG4gICAgICAubWFwKChrZXkpID0+IGhhc3Muc3RhdGVzW2tleV0pXG4gICAgICAuZmlsdGVyKChlbnQpID0+IHtcbiAgICAgICAgaWYgKGVudC5hdHRyaWJ1dGVzLm5vZGVfaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICFlbnQuYXR0cmlidXRlcy5oaWRkZW4gJiZcbiAgICAgICAgICBcIm5vZGVfaWRcIiBpbiBlbnQuYXR0cmlidXRlcyAmJlxuICAgICAgICAgIGVudC5hdHRyaWJ1dGVzLm5vZGVfaWQgPT09IG5vZGVpZCAmJlxuICAgICAgICAgICFlbnQuZW50aXR5X2lkLm1hdGNoKFwiendhdmVbLl1cIilcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuc29ydChzb3J0QnlOYW1lKTtcbiAgfVxuXG4gIHNlbGVjdGVkTm9kZUNoYW5nZWQoc2VsZWN0ZWROb2RlKSB7XG4gICAgaWYgKHNlbGVjdGVkTm9kZSA9PT0gLTEpIHJldHVybjtcbiAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gLTE7XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFxuICAgICAgICBcIkdFVFwiLFxuICAgICAgICBgendhdmUvY29uZmlnLyR7dGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgICApXG4gICAgICAudGhlbigoY29uZmlncykgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuX29ialRvQXJyYXkoY29uZmlncyk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS92YWx1ZXMvJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICAgIClcbiAgICAgIC50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLl9vYmpUb0FycmF5KHZhbHVlcyk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS9ncm91cHMvJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICAgIClcbiAgICAgIC50aGVuKChncm91cHMpID0+IHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLl9vYmpUb0FycmF5KGdyb3Vwcyk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaGFzTm9kZVVzZXJDb2RlcyA9IGZhbHNlO1xuICAgIHRoaXMubm90aWZ5UGF0aChcImhhc05vZGVVc2VyQ29kZXNcIik7XG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcbiAgICAgICAgXCJHRVRcIixcbiAgICAgICAgYHp3YXZlL3VzZXJjb2Rlcy8ke3RoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKHVzZXJjb2RlcykgPT4ge1xuICAgICAgICB0aGlzLnVzZXJDb2RlcyA9IHRoaXMuX29ialRvQXJyYXkodXNlcmNvZGVzKTtcbiAgICAgICAgdGhpcy5oYXNOb2RlVXNlckNvZGVzID0gdGhpcy51c2VyQ29kZXMubGVuZ3RoID4gMDtcbiAgICAgICAgdGhpcy5ub3RpZnlQYXRoKFwiaGFzTm9kZVVzZXJDb2Rlc1wiKTtcbiAgICAgIH0pO1xuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS9wcm90ZWN0aW9uLyR7dGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgICApXG4gICAgICAudGhlbigocHJvdGVjdGlvbnMpID0+IHtcbiAgICAgICAgdGhpcy5fcHJvdGVjdGlvbiA9IHRoaXMuX29ialRvQXJyYXkocHJvdGVjdGlvbnMpO1xuICAgICAgICBpZiAodGhpcy5fcHJvdGVjdGlvbikge1xuICAgICAgICAgIGlmICh0aGlzLl9wcm90ZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9wcm90ZWN0aW9uTm9kZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5ub2RlRmFpbGVkID0gdGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMuaXNfZmFpbGVkO1xuICB9XG5cbiAgc2VsZWN0ZWRFbnRpdHlDaGFuZ2VkKHNlbGVjdGVkRW50aXR5KSB7XG4gICAgaWYgKHNlbGVjdGVkRW50aXR5ID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS92YWx1ZXMvJHt0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKHZhbHVlcykgPT4ge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMuX29ialRvQXJyYXkodmFsdWVzKTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgdmFsdWVJZCA9IHRoaXMuZW50aXRpZXNbc2VsZWN0ZWRFbnRpdHldLmF0dHJpYnV0ZXMudmFsdWVfaWQ7XG4gICAgY29uc3QgdmFsdWVEYXRhID0gdGhpcy52YWx1ZXMuZmluZCgob2JqKSA9PiBvYmoua2V5ID09PSB2YWx1ZUlkKTtcbiAgICBjb25zdCB2YWx1ZUluZGV4ID0gdGhpcy52YWx1ZXMuaW5kZXhPZih2YWx1ZURhdGEpO1xuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGBjb25maWcvendhdmUvZGV2aWNlX2NvbmZpZy8ke3RoaXMuZW50aXRpZXNbc2VsZWN0ZWRFbnRpdHldLmVudGl0eV9pZH1gXG4gICAgICApXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgIGVudGl0eUlnbm9yZWQ6IGRhdGEuaWdub3JlZCB8fCBmYWxzZSxcbiAgICAgICAgICBlbnRpdHlQb2xsaW5nSW50ZW5zaXR5OiB0aGlzLnZhbHVlc1t2YWx1ZUluZGV4XS52YWx1ZS5wb2xsX2ludGVuc2l0eSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICBlbnRpdHlJZ25vcmVkOiBmYWxzZSxcbiAgICAgICAgICBlbnRpdHlQb2xsaW5nSW50ZW5zaXR5OiB0aGlzLnZhbHVlc1t2YWx1ZUluZGV4XS52YWx1ZS5wb2xsX2ludGVuc2l0eSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbXB1dGVTZWxlY3RDYXB0aW9uKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopICtcbiAgICAgIFwiIChOb2RlOlwiICtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubm9kZV9pZCArXG4gICAgICBcIiBcIiArXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnF1ZXJ5X3N0YWdlICtcbiAgICAgIFwiKVwiXG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVTZWxlY3RDYXB0aW9uRW50KHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikgKyBcIi5cIiArIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZUlzTm9kZVNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzICYmIHRoaXMuc2VsZWN0ZWROb2RlICE9PSAtMTtcbiAgfVxuXG4gIGNvbXB1dGVJc0VudGl0eVNlbGVjdGVkKHNlbGVjdGVkRW50aXR5KSB7XG4gICAgcmV0dXJuIHNlbGVjdGVkRW50aXR5ID09PSAtMTtcbiAgfVxuXG4gIGNvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKSB7XG4gICAgcmV0dXJuIHsgbm9kZV9pZDogdGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCB9O1xuICB9XG5cbiAgY29tcHV0ZUhlYWxOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICByZXR1cm5fcm91dGVzOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlUmVmcmVzaEVudGl0eVNlcnZpY2VEYXRhKHNlbGVjdGVkRW50aXR5KSB7XG4gICAgaWYgKHNlbGVjdGVkRW50aXR5ID09PSAtMSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiB7IGVudGl0eV9pZDogdGhpcy5lbnRpdGllc1tzZWxlY3RlZEVudGl0eV0uZW50aXR5X2lkIH07XG4gIH1cblxuICBjb21wdXRlUG9sbEludGVuc2l0eVNlcnZpY2VEYXRhKGVudGl0eVBvbGxpbmdJbnRlbnNpdHkpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSB8fCB0aGlzLnNlbGVjdGVkRW50aXR5ID09PSAtMSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiB7XG4gICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICB2YWx1ZV9pZDogdGhpcy5lbnRpdGllc1t0aGlzLnNlbGVjdGVkRW50aXR5XS5hdHRyaWJ1dGVzLnZhbHVlX2lkLFxuICAgICAgcG9sbF9pbnRlbnNpdHk6IHBhcnNlSW50KGVudGl0eVBvbGxpbmdJbnRlbnNpdHkpLFxuICAgIH07XG4gIH1cblxuICBfbm9kZU1vcmVJbmZvKCkge1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHtcbiAgICAgIGVudGl0eUlkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBfZW50aXR5TW9yZUluZm8oKSB7XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwge1xuICAgICAgZW50aXR5SWQ6IHRoaXMuZW50aXRpZXNbdGhpcy5zZWxlY3RlZEVudGl0eV0uZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgX3NhdmVFbnRpdHkoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGlnbm9yZWQ6IHRoaXMuZW50aXR5SWdub3JlZCxcbiAgICAgIHBvbGxpbmdfaW50ZW5zaXR5OiBwYXJzZUludCh0aGlzLmVudGl0eVBvbGxpbmdJbnRlbnNpdHkpLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaGFzcy5jYWxsQXBpKFxuICAgICAgXCJQT1NUXCIsXG4gICAgICBgY29uZmlnL3p3YXZlL2RldmljZV9jb25maWcvJHtcbiAgICAgICAgdGhpcy5lbnRpdGllc1t0aGlzLnNlbGVjdGVkRW50aXR5XS5lbnRpdHlfaWRcbiAgICAgIH1gLFxuICAgICAgZGF0YVxuICAgICk7XG4gIH1cblxuICB0b2dnbGVIZWxwKCkge1xuICAgIHRoaXMuc2hvd0hlbHAgPSAhdGhpcy5zaG93SGVscDtcbiAgfVxuXG4gIF9vYmpUb0FycmF5KG9iaikge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICBrZXksXG4gICAgICAgIHZhbHVlOiBvYmpba2V5XSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIF9iYWNrVGFwcGVkKCkge1xuICAgIGhpc3RvcnkuYmFjaygpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy16d2F2ZVwiLCBIYUNvbmZpZ1p3YXZlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmNsYXNzIFp3YXZlR3JvdXBzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2FyZCBjbGFzcz1cImNvbnRlbnRcIiBoZWFkZXI9XCJOb2RlIGdyb3VwIGFzc29jaWF0aW9uc1wiPlxuICAgICAgICA8IS0tIFRPRE8gbWFrZSBhcGkgZm9yIGdldHRpbmcgZ3JvdXBzIGFuZCBtZW1iZXJzIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51IGxhYmVsPVwiR3JvdXBcIiBkeW5hbWljLWFsaWduPVwiXCIgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tfc2VsZWN0ZWRHcm91cH19XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tncm91cHNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5bW19jb21wdXRlU2VsZWN0Q2FwdGlvbkdyb3VwKHN0YXRlKV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfY29tcHV0ZUlzR3JvdXBTZWxlY3RlZChfc2VsZWN0ZWRHcm91cCldXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbD1cIk5vZGUgdG8gY29udHJvbFwiXG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7X3NlbGVjdGVkVGFyZ2V0Tm9kZX19XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbbm9kZXNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPltbX2NvbXB1dGVTZWxlY3RDYXB0aW9uKHN0YXRlKV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj5cbiAgICAgICAgICAgIDxzcGFuPk90aGVyIE5vZGVzIGluIHRoaXMgZ3JvdXA6PC9zcGFuPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfb3RoZXJHcm91cE5vZGVzXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgICAgICAgIDxkaXY+W1tzdGF0ZV1dPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj5cbiAgICAgICAgICAgIDxzcGFuPk1heCBBc3NvY2lhdGlvbnM6PC9zcGFuPiA8c3Bhbj5bW19tYXhBc3NvY2lhdGlvbnNdXTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgaWY9XCJbW19jb21wdXRlSXNUYXJnZXROb2RlU2VsZWN0ZWQoX3NlbGVjdGVkVGFyZ2V0Tm9kZSldXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9ub0Fzc29jaWF0aW9uc0xlZnRdXVwiPlxuICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJjaGFuZ2VfYXNzb2NpYXRpb25cIlxuICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbX2FkZEFzc29jU2VydmljZURhdGFdXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBZGQgVG8gR3JvdXBcbiAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICAgIGlmPVwiW1tfY29tcHV0ZVRhcmdldEluR3JvdXAoX3NlbGVjdGVkR3JvdXAsIF9zZWxlY3RlZFRhcmdldE5vZGUpXV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJjaGFuZ2VfYXNzb2NpYXRpb25cIlxuICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbX3JlbW92ZUFzc29jU2VydmljZURhdGFdXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZW1vdmUgRnJvbSBHcm91cFxuICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19pc0Jyb2FkY2FzdE5vZGVJbkdyb3VwXV1cIj5cbiAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwiY2hhbmdlX2Fzc29jaWF0aW9uXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW19yZW1vdmVCcm9hZGNhc3ROb2RlU2VydmljZURhdGFdXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZW1vdmUgQnJvYWRjYXN0XG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBub2RlczogQXJyYXksXG5cbiAgICAgIGdyb3VwczogQXJyYXksXG5cbiAgICAgIHNlbGVjdGVkTm9kZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG9ic2VydmVyOiBcIl9zZWxlY3RlZE5vZGVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0ZWRUYXJnZXROb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJfc2VsZWN0ZWRUYXJnZXROb2RlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgX3NlbGVjdGVkR3JvdXA6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICB9LFxuXG4gICAgICBfb3RoZXJHcm91cE5vZGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlT3RoZXJHcm91cE5vZGVzKF9zZWxlY3RlZEdyb3VwKVwiLFxuICAgICAgfSxcblxuICAgICAgX21heEFzc29jaWF0aW9uczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZU1heEFzc29jaWF0aW9ucyhfc2VsZWN0ZWRHcm91cClcIixcbiAgICAgIH0sXG5cbiAgICAgIF9ub0Fzc29jaWF0aW9uc0xlZnQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQXNzb2NpYXRpb25zTGVmdChfc2VsZWN0ZWRHcm91cClcIixcbiAgICAgIH0sXG5cbiAgICAgIF9hZGRBc3NvY1NlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBfcmVtb3ZlQXNzb2NTZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgX3JlbW92ZUJyb2FkY2FzdE5vZGVTZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgX2lzQnJvYWRjYXN0Tm9kZUluR3JvdXA6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcIl9zZWxlY3RlZEdyb3VwQ2hhbmdlZChncm91cHMsIF9zZWxlY3RlZEdyb3VwKVwiXTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCAoZXYpID0+XG4gICAgICB0aGlzLnNlcnZpY2VDYWxsZWQoZXYpXG4gICAgKTtcbiAgfVxuXG4gIHNlcnZpY2VDYWxsZWQoZXYpIHtcbiAgICBpZiAoZXYuZGV0YWlsLnN1Y2Nlc3MpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWZyZXNoR3JvdXBzKHRoaXMuc2VsZWN0ZWROb2RlKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wdXRlQXNzb2NpYXRpb25zTGVmdChzZWxlY3RlZEdyb3VwKSB7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAgPT09IC0xKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5fbWF4QXNzb2NpYXRpb25zID09PSB0aGlzLl9vdGhlckdyb3VwTm9kZXMubGVuZ3RoO1xuICB9XG5cbiAgX2NvbXB1dGVNYXhBc3NvY2lhdGlvbnMoc2VsZWN0ZWRHcm91cCkge1xuICAgIGlmIChzZWxlY3RlZEdyb3VwID09PSAtMSkgcmV0dXJuIC0xO1xuICAgIGNvbnN0IG1heEFzc29jaWF0aW9ucyA9IHRoaXMuZ3JvdXBzW3NlbGVjdGVkR3JvdXBdLnZhbHVlLm1heF9hc3NvY2lhdGlvbnM7XG4gICAgaWYgKCFtYXhBc3NvY2lhdGlvbnMpIHJldHVybiBcIk5vbmVcIjtcbiAgICByZXR1cm4gbWF4QXNzb2NpYXRpb25zO1xuICB9XG5cbiAgX2NvbXB1dGVPdGhlckdyb3VwTm9kZXMoc2VsZWN0ZWRHcm91cCkge1xuICAgIGlmIChzZWxlY3RlZEdyb3VwID09PSAtMSkgcmV0dXJuIC0xO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9pc0Jyb2FkY2FzdE5vZGVJbkdyb3VwOiBmYWxzZSB9KTtcbiAgICBjb25zdCBhc3NvY2lhdGlvbnMgPSBPYmplY3QudmFsdWVzKFxuICAgICAgdGhpcy5ncm91cHNbc2VsZWN0ZWRHcm91cF0udmFsdWUuYXNzb2NpYXRpb25faW5zdGFuY2VzXG4gICAgKTtcbiAgICBpZiAoIWFzc29jaWF0aW9ucy5sZW5ndGgpIHJldHVybiBbXCJOb25lXCJdO1xuICAgIHJldHVybiBhc3NvY2lhdGlvbnMubWFwKChhc3NvYykgPT4ge1xuICAgICAgaWYgKCFhc3NvYy5sZW5ndGggfHwgYXNzb2MubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIHJldHVybiBgVW5rbm93biBOb2RlOiAke2Fzc29jfWA7XG4gICAgICB9XG4gICAgICBjb25zdCBpZCA9IGFzc29jWzBdO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBhc3NvY1sxXTtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVzLmZpbmQoKG4pID0+IG4uYXR0cmlidXRlcy5ub2RlX2lkID09PSBpZCk7XG4gICAgICBpZiAoaWQgPT09IDI1NSkge1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgIF9pc0Jyb2FkY2FzdE5vZGVJbkdyb3VwOiB0cnVlLFxuICAgICAgICAgIF9yZW1vdmVCcm9hZGNhc3ROb2RlU2VydmljZURhdGE6IHtcbiAgICAgICAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgICAgICAgIGFzc29jaWF0aW9uOiBcInJlbW92ZVwiLFxuICAgICAgICAgICAgdGFyZ2V0X25vZGVfaWQ6IDI1NSxcbiAgICAgICAgICAgIGdyb3VwOiB0aGlzLmdyb3Vwc1tzZWxlY3RlZEdyb3VwXS5rZXksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGBVbmtub3duIE5vZGUgKCR7aWR9OiAoJHtpbnN0YW5jZX0gPyAke2lkfS4ke2luc3RhbmNlfSA6ICR7aWR9KSlgO1xuICAgICAgfVxuICAgICAgbGV0IGNhcHRpb24gPSB0aGlzLl9jb21wdXRlU2VsZWN0Q2FwdGlvbihub2RlKTtcbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBjYXB0aW9uICs9IGAvIEluc3RhbmNlOiAke2luc3RhbmNlfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FwdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIF9jb21wdXRlVGFyZ2V0SW5Hcm91cChzZWxlY3RlZEdyb3VwLCBzZWxlY3RlZFRhcmdldE5vZGUpIHtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cCA9PT0gLTEgfHwgc2VsZWN0ZWRUYXJnZXROb2RlID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGFzc29jaWF0aW9ucyA9IE9iamVjdC52YWx1ZXMoXG4gICAgICB0aGlzLmdyb3Vwc1tzZWxlY3RlZEdyb3VwXS52YWx1ZS5hc3NvY2lhdGlvbnNcbiAgICApO1xuICAgIGlmICghYXNzb2NpYXRpb25zLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAoXG4gICAgICBhc3NvY2lhdGlvbnMuaW5kZXhPZihcbiAgICAgICAgdGhpcy5ub2Rlc1tzZWxlY3RlZFRhcmdldE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZFxuICAgICAgKSAhPT0gLTFcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVTZWxlY3RDYXB0aW9uKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGAke2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopfVxuICAgICAgKE5vZGU6ICR7c3RhdGVPYmouYXR0cmlidXRlcy5ub2RlX2lkfVxuICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnF1ZXJ5X3N0YWdlfSlgO1xuICB9XG5cbiAgX2NvbXB1dGVTZWxlY3RDYXB0aW9uR3JvdXAoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gYCR7c3RhdGVPYmoua2V5fTogJHtzdGF0ZU9iai52YWx1ZS5sYWJlbH1gO1xuICB9XG5cbiAgX2NvbXB1dGVJc1RhcmdldE5vZGVTZWxlY3RlZChzZWxlY3RlZFRhcmdldE5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcyAmJiBzZWxlY3RlZFRhcmdldE5vZGUgIT09IC0xO1xuICB9XG5cbiAgX2NvbXB1dGVJc0dyb3VwU2VsZWN0ZWQoc2VsZWN0ZWRHcm91cCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzICYmIHRoaXMuc2VsZWN0ZWROb2RlICE9PSAtMSAmJiBzZWxlY3RlZEdyb3VwICE9PSAtMTtcbiAgfVxuXG4gIF9jb21wdXRlQXNzb2NTZXJ2aWNlRGF0YShzZWxlY3RlZEdyb3VwLCB0eXBlKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuZ3JvdXBzID09PSAtMSB8fFxuICAgICAgc2VsZWN0ZWRHcm91cCA9PT0gLTEgfHxcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSB8fFxuICAgICAgdGhpcy5fc2VsZWN0ZWRUYXJnZXROb2RlID09PSAtMVxuICAgIClcbiAgICAgIHJldHVybiAtMTtcbiAgICByZXR1cm4ge1xuICAgICAgbm9kZV9pZDogdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkLFxuICAgICAgYXNzb2NpYXRpb246IHR5cGUsXG4gICAgICB0YXJnZXRfbm9kZV9pZDogdGhpcy5ub2Rlc1t0aGlzLl9zZWxlY3RlZFRhcmdldE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgIGdyb3VwOiB0aGlzLmdyb3Vwc1tzZWxlY3RlZEdyb3VwXS5rZXksXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIF9yZWZyZXNoR3JvdXBzKHNlbGVjdGVkTm9kZSkge1xuICAgIGNvbnN0IGdyb3VwRGF0YSA9IFtdO1xuICAgIGNvbnN0IGdyb3VwcyA9IGF3YWl0IHRoaXMuaGFzcy5jYWxsQXBpKFxuICAgICAgXCJHRVRcIixcbiAgICAgIGB6d2F2ZS9ncm91cHMvJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICApO1xuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBncm91cERhdGEucHVzaCh7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWU6IGdyb3Vwc1trZXldLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgIGdyb3VwczogZ3JvdXBEYXRhLFxuICAgICAgX21heEFzc29jaWF0aW9uczogZ3JvdXBEYXRhW3RoaXMuX3NlbGVjdGVkR3JvdXBdLnZhbHVlLm1heF9hc3NvY2lhdGlvbnMsXG4gICAgICBfb3RoZXJHcm91cE5vZGVzOiBPYmplY3QudmFsdWVzKFxuICAgICAgICBncm91cERhdGFbdGhpcy5fc2VsZWN0ZWRHcm91cF0udmFsdWUuYXNzb2NpYXRpb25zXG4gICAgICApLFxuICAgICAgX2lzQnJvYWRjYXN0Tm9kZUluR3JvdXA6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IG9sZEdyb3VwID0gdGhpcy5fc2VsZWN0ZWRHcm91cDtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfc2VsZWN0ZWRHcm91cDogLTEgfSk7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX3NlbGVjdGVkR3JvdXA6IG9sZEdyb3VwIH0pO1xuICB9XG5cbiAgX3NlbGVjdGVkR3JvdXBDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZEdyb3VwID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBfbWF4QXNzb2NpYXRpb25zOiB0aGlzLmdyb3Vwc1t0aGlzLl9zZWxlY3RlZEdyb3VwXS52YWx1ZS5tYXhfYXNzb2NpYXRpb25zLFxuICAgICAgX290aGVyR3JvdXBOb2RlczogT2JqZWN0LnZhbHVlcyhcbiAgICAgICAgdGhpcy5ncm91cHNbdGhpcy5fc2VsZWN0ZWRHcm91cF0udmFsdWUuYXNzb2NpYXRpb25zXG4gICAgICApLFxuICAgIH0pO1xuICB9XG5cbiAgX3NlbGVjdGVkVGFyZ2V0Tm9kZUNoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkR3JvdXAgPT09IC0xKSByZXR1cm47XG4gICAgaWYgKFxuICAgICAgdGhpcy5fY29tcHV0ZVRhcmdldEluR3JvdXAodGhpcy5fc2VsZWN0ZWRHcm91cCwgdGhpcy5fc2VsZWN0ZWRUYXJnZXROb2RlKVxuICAgICkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgX3JlbW92ZUFzc29jU2VydmljZURhdGE6IHRoaXMuX2NvbXB1dGVBc3NvY1NlcnZpY2VEYXRhKFxuICAgICAgICAgIHRoaXMuX3NlbGVjdGVkR3JvdXAsXG4gICAgICAgICAgXCJyZW1vdmVcIlxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9hZGRBc3NvY1NlcnZpY2VEYXRhOiB0aGlzLl9jb21wdXRlQXNzb2NTZXJ2aWNlRGF0YShcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZEdyb3VwLFxuICAgICAgICAgIFwiYWRkXCJcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RlZE5vZGVDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEpIHJldHVybjtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfc2VsZWN0ZWRUYXJnZXROb2RlOiAtMSwgX3NlbGVjdGVkR3JvdXA6IC0xIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInp3YXZlLWdyb3Vwc1wiLCBad2F2ZUdyb3Vwcyk7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IGlzUHdhIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uZmlnL2lzX3B3YVwiO1xuXG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmxldCByZWdpc3RlcmVkRGlhbG9nID0gZmFsc2U7XG5cbmNsYXNzIE96d0xvZyBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIH1cblxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgfVxuXG4gICAgICAuZGV2aWNlLXBpY2tlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICB9XG5cbiAgICA8L3N0eWxlPlxuICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPVwiW1tpc1dpZGVdXVwiPlxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPk9aVyBMb2c8L3NwYW4+XG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJOdW1iZXIgb2YgbGFzdCBsb2cgbGluZXMuXCIgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBtYXg9XCIxMDAwXCIgc3RlcD1cIjEwXCIgdmFsdWU9XCJ7e251bUxvZ0xpbmVzfX1cIj5cbiAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIHJhaXNlZD1cInRydWVcIiBvbi1jbGljaz1cIl9vcGVuTG9nV2luZG93XCI+TG9hZDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiByYWlzZWQ9XCJ0cnVlXCIgb24tY2xpY2s9XCJfdGFpbExvZ1wiIGRpc2FibGVkPVwie3tfY29tcGxldGVMb2d9fVwiPlRhaWw8L213Yy1idXR0b24+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgPC9oYS1jb25maWctc2VjdGlvbj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgaXNXaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIF9vendMb2dzOiBTdHJpbmcsXG5cbiAgICAgIF9jb21wbGV0ZUxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIG51bUxvZ0xpbmVzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIG9ic2VydmVyOiBcIl9pc0NvbXBsZXRlTG9nXCIsXG4gICAgICB9LFxuXG4gICAgICBfaW50ZXJ2YWxJZDogU3RyaW5nLFxuXG4gICAgICB0YWlsOiBCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBfdGFpbExvZygpIHtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB0YWlsOiB0cnVlIH0pO1xuICAgIGNvbnN0IG96d1dpbmRvdyA9IGF3YWl0IHRoaXMuX29wZW5Mb2dXaW5kb3coKTtcbiAgICBpZiAoIWlzUHdhKCkpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9pbnRlcnZhbElkOiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVmcmVzaExvZyhvendXaW5kb3cpO1xuICAgICAgICB9LCAxNTAwKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9vcGVuTG9nV2luZG93KCkge1xuICAgIGNvbnN0IGluZm8gPSBhd2FpdCB0aGlzLmhhc3MuY2FsbEFwaShcbiAgICAgIFwiR0VUXCIsXG4gICAgICBcInp3YXZlL296d2xvZz9saW5lcz1cIiArIHRoaXMubnVtTG9nTGluZXNcbiAgICApO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9vendMb2dzOiBpbmZvIH0pO1xuICAgIGlmIChpc1B3YSgpKSB7XG4gICAgICB0aGlzLl9zaG93T3p3bG9nRGlhbG9nKCk7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGNvbnN0IG96d1dpbmRvdyA9IG9wZW4oXCJcIiwgXCJvendMb2dcIiwgXCJ0b29sYmFyXCIpO1xuICAgIG96d1dpbmRvdy5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGA8cHJlPiR7dGhpcy5fb3p3TG9nc308L3ByZT5gO1xuICAgIHJldHVybiBvendXaW5kb3c7XG4gIH1cblxuICBhc3luYyBfcmVmcmVzaExvZyhvendXaW5kb3cpIHtcbiAgICBpZiAob3p3V2luZG93LmNsb3NlZCA9PT0gdHJ1ZSkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbElkKTtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9pbnRlcnZhbElkOiBudWxsIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmZvID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIFwiendhdmUvb3p3bG9nP2xpbmVzPVwiICsgdGhpcy5udW1Mb2dMaW5lc1xuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9vendMb2dzOiBpbmZvIH0pO1xuICAgICAgb3p3V2luZG93LmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYDxwcmU+JHt0aGlzLl9vendMb2dzfTwvcHJlPmA7XG4gICAgfVxuICB9XG5cbiAgX2lzQ29tcGxldGVMb2coKSB7XG4gICAgaWYgKHRoaXMubnVtTG9nTGluZXMgIT09IFwiMFwiKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfY29tcGxldGVMb2c6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfY29tcGxldGVMb2c6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAoIXJlZ2lzdGVyZWREaWFsb2cpIHtcbiAgICAgIHJlZ2lzdGVyZWREaWFsb2cgPSB0cnVlO1xuICAgICAgdGhpcy5maXJlKFwicmVnaXN0ZXItZGlhbG9nXCIsIHtcbiAgICAgICAgZGlhbG9nU2hvd0V2ZW50OiBcInNob3ctb3p3bG9nLWRpYWxvZ1wiLFxuICAgICAgICBkaWFsb2dUYWc6IFwiendhdmUtbG9nLWRpYWxvZ1wiLFxuICAgICAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiendhdmUtbG9nLWRpYWxvZ1wiICovIFwiLi96d2F2ZS1sb2ctZGlhbG9nXCIpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3Nob3dPendsb2dEaWFsb2coKSB7XG4gICAgdGhpcy5maXJlKFwic2hvdy1vendsb2ctZGlhbG9nXCIsIHtcbiAgICAgIGhhc3M6IHRoaXMuaGFzcyxcbiAgICAgIF9udW1Mb2dMaW5lczogdGhpcy5udW1Mb2dMaW5lcyxcbiAgICAgIF9vendMb2c6IHRoaXMuX296d0xvZ3MsXG4gICAgICBfdGFpbDogdGhpcy50YWlsLFxuICAgICAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6ICgpID0+IHRoaXMuX2RpYWxvZ0Nsb3NlZCgpLFxuICAgIH0pO1xuICB9XG5cbiAgX2RpYWxvZ0Nsb3NlZCgpIHtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgdGFpbDogZmFsc2UsXG4gICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm96dy1sb2dcIiwgT3p3TG9nKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgZmV0Y2hOZXR3b3JrU3RhdHVzLFxuICBaV2F2ZU5ldHdvcmtTdGF0dXMsXG4gIFpXQVZFX05FVFdPUktfU1RBVEVfU1RPUFBFRCxcbiAgWldBVkVfTkVUV09SS19TVEFURV9TVEFSVEVELFxuICBaV0FWRV9ORVRXT1JLX1NUQVRFX0FXQUtFRCxcbiAgWldBVkVfTkVUV09SS19TVEFURV9SRUFEWSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvendhdmVcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtYXBpLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiendhdmUtbmV0d29ya1wiKVxuZXhwb3J0IGNsYXNzIFp3YXZlTmV0d29yayBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zaG93SGVscCA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9uZXR3b3JrU3RhdHVzPzogWldhdmVOZXR3b3JrU3RhdHVzO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF91bnN1YnM6IEFycmF5PFByb21pc2U8VW5zdWJzY3JpYmVGdW5jPj4gPSBbXTtcblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fZ2V0TmV0d29ya1N0YXR1cygpO1xuICAgIHRoaXMuX3N1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlXCIgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX21hbmFnZW1lbnQuaGVhZGVyXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtaGVscC1pY29uXCJcbiAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fb25IZWxwVGFwfVwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczpoZWxwLWNpcmNsZVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19tYW5hZ2VtZW50LmludHJvZHVjdGlvblwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICR7dGhpcy5fbmV0d29ya1N0YXR1c1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50IG5ldHdvcmstc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5fbmV0d29ya1N0YXR1cy5zdGF0ZSA9PT0gWldBVkVfTkVUV09SS19TVEFURV9TVE9QUEVEXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1pY29uIGljb249XCJoYXNzOmNsb3NlXCI+PC9oYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX3N0YXR1cy5uZXR3b3JrX3N0b3BwZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5fbmV0d29ya1N0YXR1cy5zdGF0ZSA9PT0gWldBVkVfTkVUV09SS19TVEFURV9TVEFSVEVEXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5ldHdvcmtfc3RhdHVzLm5ldHdvcmtfc3RhcnRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5ldHdvcmtfc3RhdHVzLm5ldHdvcmtfc3RhcnRpbmdfbm90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9uZXR3b3JrU3RhdHVzLnN0YXRlID09PSBaV0FWRV9ORVRXT1JLX1NUQVRFX0FXQUtFRFxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aGEtaWNvbiBpY29uPVwiaGFzczpjaGVja2JveC1tYXJrZWQtY2lyY2xlXCI+IDwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19zdGF0dXMubmV0d29ya19zdGFydGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX3N0YXR1cy5uZXR3b3JrX3N0YXJ0ZWRfbm90ZV9zb21lX3F1ZXJpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5fbmV0d29ya1N0YXR1cy5zdGF0ZSA9PT0gWldBVkVfTkVUV09SS19TVEFURV9SRUFEWVxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5ldHdvcmtfc3RhdHVzLm5ldHdvcmtfc3RhcnRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfTxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19zdGF0dXMubmV0d29ya19zdGFydGVkX25vdGVfYWxsX3F1ZXJpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuX25ldHdvcmtTdGF0dXMuc3RhdGUgPj0gWldBVkVfTkVUV09SS19TVEFURV9BV0FLRURcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oXCJzdG9wX25ldHdvcmtcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcImhlYWxfbmV0d29ya1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwidGVzdF9uZXR3b3JrXCIpfVxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oXCJzdGFydF9uZXR3b3JrXCIpfVxuICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgJHt0aGlzLl9uZXR3b3JrU3RhdHVzLnN0YXRlID49IFpXQVZFX05FVFdPUktfU1RBVEVfQVdBS0VEXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oXCJzb2Z0X3Jlc2V0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWNhbGwtYXBpLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cInp3YXZlL3NhdmVjb25maWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUuc2VydmljZXMuc2F2ZV9jb25maWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oYS1jYWxsLWFwaS1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgICAgICAke3RoaXMuX25ldHdvcmtTdGF0dXMuc3RhdGUgPj0gWldBVkVfTkVUV09SS19TVEFURV9BV0FLRURcbiAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxoYS1jYXJkIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwiYWRkX25vZGVfc2VjdXJlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oXCJhZGRfbm9kZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwicmVtb3ZlX25vZGVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oXCJjYW5jZWxfY29tbWFuZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9nZXROZXR3b3JrU3RhdHVzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX25ldHdvcmtTdGF0dXMgPSBhd2FpdCBmZXRjaE5ldHdvcmtTdGF0dXModGhpcy5oYXNzISk7XG4gIH1cblxuICBwcml2YXRlIF9zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgdGhpcy5fdW5zdWJzID0gW1xuICAgICAgXCJ6d2F2ZS5uZXR3b3JrX3N0YXJ0XCIsXG4gICAgICBcInp3YXZlLm5ldHdvcmtfc3RvcFwiLFxuICAgICAgXCJ6d2F2ZS5uZXR3b3JrX3JlYWR5XCIsXG4gICAgICBcInp3YXZlLm5ldHdvcmtfY29tcGxldGVcIixcbiAgICAgIFwiendhdmUubmV0d29ya19jb21wbGV0ZV9zb21lX2RlYWRcIixcbiAgICBdLm1hcCgoZSkgPT5cbiAgICAgIHRoaXMuaGFzcyEuY29ubmVjdGlvbi5zdWJzY3JpYmVFdmVudHMoXG4gICAgICAgIChldmVudCkgPT4gdGhpcy5faGFuZGxlRXZlbnQoZXZlbnQpLFxuICAgICAgICBlXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIHdoaWxlICh0aGlzLl91bnN1YnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl91bnN1YnMucG9wKCkhLnRoZW4oKHVuc3ViKSA9PiB1bnN1YigpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC5ldmVudF90eXBlID09PSBcInp3YXZlLm5ldHdvcmtfc3RhcnRcIikge1xuICAgICAgLy8gT3B0aW1pc3RpY2FsbHkgc2V0IHRoZSBzdGF0ZSwgd2FpdCAxcyBhbmQgcG9sbCB0aGUgYmFja2VuZFxuICAgICAgLy8gVGhlIGJhY2tlbmQgd2lsbCBzdGlsbCByZXBvcnQgYSBzdGF0ZSBvZiAwIHdoZW4gdGhlICduZXR3b3JrX3N0YXJ0J1xuICAgICAgLy8gZXZlbnQgaXMgZmlyc3QgZmlyZWQuXG4gICAgICBpZiAodGhpcy5fbmV0d29ya1N0YXR1cykge1xuICAgICAgICB0aGlzLl9uZXR3b3JrU3RhdHVzID0geyAuLi50aGlzLl9uZXR3b3JrU3RhdHVzLCBzdGF0ZTogNSB9O1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9nZXROZXR3b3JrU3RhdHVzLCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZ2V0TmV0d29ya1N0YXR1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uSGVscFRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaG93SGVscCA9ICF0aGlzLl9zaG93SGVscDtcbiAgfVxuXG4gIHByaXZhdGUgX2dlbmVyYXRlU2VydmljZUJ1dHRvbihzZXJ2aWNlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgIHNlcnZpY2U9XCIke3NlcnZpY2V9XCJcbiAgICAgID5cbiAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnp3YXZlLnNlcnZpY2VzLlwiICsgc2VydmljZSl9XG4gICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICBzZXJ2aWNlPVwiJHtzZXJ2aWNlfVwiXG4gICAgICAgID9oaWRkZW49JHshdGhpcy5fc2hvd0hlbHB9XG4gICAgICA+XG4gICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmV0d29yay1zdGF0dXMge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXR3b3JrLXN0YXR1cyBkaXYuZGV0YWlscyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXR3b3JrLXN0YXR1cyBoYS1pY29uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDE2cHg7XG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5ldHdvcmstc3RhdHVzIHNtYWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtYWN0aW9ucy53YXJuaW5nIGhhLWNhbGwtc2VydmljZS1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZ2xlLWhlbHAtaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweCAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiendhdmUtbmV0d29ya1wiOiBad2F2ZU5ldHdvcms7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmNsYXNzIFp3YXZlTm9kZUNvbmZpZyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpY2UtcGlja2VyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiTm9kZSBjb25maWcgb3B0aW9uc1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfd2FrZXVwTm9kZV1dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgIGZsb2F0LWxhYmVsPVwiV2FrZXVwIEludGVydmFsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInt7X3dha2V1cElucHV0fX1cIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiW1tfY29tcHV0ZUdldFdha2V1cFZhbHVlKHNlbGVjdGVkTm9kZSldXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IHN1ZmZpeD1cIlwiPnNlY29uZHM8L2Rpdj5cbiAgICAgICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwic2V0X3dha2V1cFwiXG4gICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tfY29tcHV0ZVdha2V1cFNlcnZpY2VEYXRhKF93YWtldXBJbnB1dCldXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTZXQgV2FrZXVwXG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlnIHBhcmFtZXRlclwiXG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7X3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyfX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tjb25maWddXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgID5bW19jb21wdXRlU2VsZWN0Q2FwdGlvbkNvbmZpZ1BhcmFtZXRlcihzdGF0ZSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgIGlmPVwiW1tfaXNDb25maWdQYXJhbWV0ZXJTZWxlY3RlZChfc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXIsICdMaXN0JyldXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpZyB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgZHluYW1pYy1hbGlnbj1cIlwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7X2xvYWRlZENvbmZpZ1ZhbHVlfX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tfc2VsZWN0ZWRDb25maWdWYWx1ZX19XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9XCJbW19zZWxlY3RlZENvbmZpZ1BhcmFtZXRlclZhbHVlc11dXCJcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPltbc3RhdGVdXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICBpZj1cIltbX2lzQ29uZmlnUGFyYW1ldGVyU2VsZWN0ZWQoX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyLCAnQnl0ZSBTaG9ydCBJbnQnKV1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgIGxhYmVsPVwie3tfc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJOdW1WYWx1ZXN9fVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ7e19zZWxlY3RlZENvbmZpZ1ZhbHVlfX1cIlxuICAgICAgICAgICAgICAgIG1heD1cInt7X2NvbmZpZ1BhcmFtZXRlck1heH19XCJcbiAgICAgICAgICAgICAgICBtaW49XCJ7e19jb25maWdQYXJhbWV0ZXJNaW59fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICBpZj1cIltbX2lzQ29uZmlnUGFyYW1ldGVyU2VsZWN0ZWQoX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyLCAnQm9vbCBCdXR0b24nKV1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlnIHZhbHVlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tfbG9hZGVkQ29uZmlnVmFsdWV9fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e19zZWxlY3RlZENvbmZpZ1ZhbHVlfX1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgICAgICAgICBpdGVtcz1cIltbX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyVmFsdWVzXV1cIlxuICAgICAgICAgICAgICAgICAgICBhcz1cInN0YXRlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tzdGF0ZV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtdGV4dFwiPjxzcGFuPltbX2NvbmZpZ1ZhbHVlSGVscFRleHRdXTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgIGlmPVwiW1tfaXNDb25maWdQYXJhbWV0ZXJTZWxlY3RlZChfc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXIsICdCb29sIEJ1dHRvbiBCeXRlIFNob3J0IEludCBMaXN0JyldXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJzZXRfY29uZmlnX3BhcmFtZXRlclwiXG4gICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tfY29tcHV0ZVNldENvbmZpZ1BhcmFtZXRlclNlcnZpY2VEYXRhKF9zZWxlY3RlZENvbmZpZ1ZhbHVlKV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNldCBDb25maWcgUGFyYW1ldGVyXG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgbm9kZXM6IEFycmF5LFxuXG4gICAgICBzZWxlY3RlZE5vZGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJfbm9kZXNDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAoKSA9PiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIF9zZWxlY3RlZENvbmZpZ1BhcmFtZXRlcjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgX2NvbmZpZ1BhcmFtZXRlck1heDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgIH0sXG5cbiAgICAgIF9jb25maWdQYXJhbWV0ZXJNaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICB9LFxuXG4gICAgICBfY29uZmlnVmFsdWVIZWxwVGV4dDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZUNvbmZpZ1ZhbHVlSGVscChfc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXIpXCIsXG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJUeXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0ZWRDb25maWdWYWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2NvbXB1dGVTZXRDb25maWdQYXJhbWV0ZXJTZXJ2aWNlRGF0YVwiLFxuICAgICAgfSxcblxuICAgICAgX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyVmFsdWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogKCkgPT4gW10sXG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJOdW1WYWx1ZXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIF9sb2FkZWRDb25maWdWYWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgIH0sXG5cbiAgICAgIF93YWtldXBJbnB1dDogTnVtYmVyLFxuXG4gICAgICBfd2FrZXVwTm9kZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgKGV2KSA9PlxuICAgICAgdGhpcy5zZXJ2aWNlQ2FsbGVkKGV2KVxuICAgICk7XG4gIH1cblxuICBzZXJ2aWNlQ2FsbGVkKGV2KSB7XG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaENvbmZpZyh0aGlzLnNlbGVjdGVkTm9kZSk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9XG4gIH1cblxuICBfbm9kZXNDaGFuZ2VkKCkge1xuICAgIGlmICghdGhpcy5ub2RlcykgcmV0dXJuO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9zZWxlY3RlZENvbmZpZ1BhcmFtZXRlcjogLTEgfSk7XG4gICAgdGhpcy5fd2FrZXVwTm9kZSA9XG4gICAgICB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLndha2VfdXBfaW50ZXJ2YWwgPT09IDAgfHxcbiAgICAgIHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMud2FrZV91cF9pbnRlcnZhbDtcbiAgICBpZiAodGhpcy5fd2FrZXVwTm9kZSkge1xuICAgICAgaWYgKHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMud2FrZV91cF9pbnRlcnZhbCA9PT0gMClcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX3dha2V1cElucHV0OiBcIlwiIH0pO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgX3dha2V1cElucHV0OiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzXG4gICAgICAgICAgICAud2FrZV91cF9pbnRlcnZhbCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVHZXRXYWtldXBWYWx1ZShzZWxlY3RlZE5vZGUpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEgfHxcbiAgICAgICF0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy53YWtlX3VwX2ludGVydmFsXG4gICAgKVxuICAgICAgcmV0dXJuIFwidW5rbm93blwiO1xuICAgIHJldHVybiB0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy53YWtlX3VwX2ludGVydmFsO1xuICB9XG5cbiAgX2NvbXB1dGVXYWtldXBTZXJ2aWNlRGF0YSh3YWtldXBJbnB1dCkge1xuICAgIHJldHVybiB7XG4gICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICB2YWx1ZTogd2FrZXVwSW5wdXQsXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlQ29uZmlnVmFsdWVIZWxwKHNlbGVjdGVkQ29uZmlnUGFyYW1ldGVyKSB7XG4gICAgaWYgKHNlbGVjdGVkQ29uZmlnUGFyYW1ldGVyID09PSAtMSkgcmV0dXJuIFwiXCI7XG4gICAgY29uc3QgaGVscFRleHQgPSB0aGlzLmNvbmZpZ1tzZWxlY3RlZENvbmZpZ1BhcmFtZXRlcl0udmFsdWUuaGVscDtcbiAgICBpZiAoIWhlbHBUZXh0KSByZXR1cm4gW1wiTm8gaGVscHRleHQgYXZhaWxhYmxlXCJdO1xuICAgIHJldHVybiBoZWxwVGV4dDtcbiAgfVxuXG4gIF9jb21wdXRlU2V0Q29uZmlnUGFyYW1ldGVyU2VydmljZURhdGEoc2VsZWN0ZWRDb25maWdWYWx1ZSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEgfHwgdGhpcy5fc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXIgPT09IC0xKVxuICAgICAgcmV0dXJuIC0xO1xuICAgIHZhciB2YWx1ZURhdGEgPSBudWxsO1xuICAgIGlmIChcIlNob3J0IEJ5dGUgSW50XCIuaW5jbHVkZXModGhpcy5fc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJUeXBlKSkge1xuICAgICAgdmFsdWVEYXRhID0gcGFyc2VJbnQoc2VsZWN0ZWRDb25maWdWYWx1ZSwgMTApO1xuICAgIH1cbiAgICBpZiAoXCJCb29sIEJ1dHRvbiBMaXN0XCIuaW5jbHVkZXModGhpcy5fc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJUeXBlKSkge1xuICAgICAgdmFsdWVEYXRhID0gdGhpcy5fc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJWYWx1ZXNbc2VsZWN0ZWRDb25maWdWYWx1ZV07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICBwYXJhbWV0ZXI6IHRoaXMuY29uZmlnW3RoaXMuX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyXS5rZXksXG4gICAgICB2YWx1ZTogdmFsdWVEYXRhLFxuICAgIH07XG4gIH1cblxuICBfc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJDaGFuZ2VkKHNlbGVjdGVkQ29uZmlnUGFyYW1ldGVyKSB7XG4gICAgaWYgKHNlbGVjdGVkQ29uZmlnUGFyYW1ldGVyID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBfc2VsZWN0ZWRDb25maWdWYWx1ZTogLTEsXG4gICAgICBfbG9hZGVkQ29uZmlnVmFsdWU6IC0xLFxuICAgICAgX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyVmFsdWVzOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyVHlwZTogdGhpcy5jb25maWdbc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJdLnZhbHVlXG4gICAgICAgIC50eXBlLFxuICAgICAgX2NvbmZpZ1BhcmFtZXRlck1heDogdGhpcy5jb25maWdbc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJdLnZhbHVlLm1heCxcbiAgICAgIF9jb25maWdQYXJhbWV0ZXJNaW46IHRoaXMuY29uZmlnW3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyXS52YWx1ZS5taW4sXG4gICAgICBfbG9hZGVkQ29uZmlnVmFsdWU6IHRoaXMuY29uZmlnW3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyXS52YWx1ZS5kYXRhLFxuICAgICAgX2NvbmZpZ1ZhbHVlSGVscFRleHQ6IHRoaXMuY29uZmlnW3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyXS52YWx1ZS5oZWxwLFxuICAgIH0pO1xuICAgIGlmIChcIlNob3J0IEJ5dGUgSW50XCIuaW5jbHVkZXModGhpcy5fc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJUeXBlKSkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyTnVtVmFsdWVzOiB0aGlzLmNvbmZpZ1tzZWxlY3RlZENvbmZpZ1BhcmFtZXRlcl1cbiAgICAgICAgICAudmFsdWUuZGF0YV9pdGVtcyxcbiAgICAgICAgX3NlbGVjdGVkQ29uZmlnVmFsdWU6IHRoaXMuX2xvYWRlZENvbmZpZ1ZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChcIkJvb2wgQnV0dG9uXCIuaW5jbHVkZXModGhpcy5fc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJUeXBlKSkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyVmFsdWVzOiBbXCJUcnVlXCIsIFwiRmFsc2VcIl0gfSk7XG4gICAgICBpZiAodGhpcy5jb25maWdbc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJdLnZhbHVlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX2xvYWRlZENvbmZpZ1ZhbHVlOiBcIlRydWVcIiB9KTtcbiAgICAgIH0gZWxzZSB0aGlzLnNldFByb3BlcnRpZXMoeyBfbG9hZGVkQ29uZmlnVmFsdWU6IFwiRmFsc2VcIiB9KTtcbiAgICB9XG4gICAgaWYgKFwiTGlzdFwiLmluY2x1ZGVzKHRoaXMuX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyVHlwZSkpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9zZWxlY3RlZENvbmZpZ1BhcmFtZXRlclZhbHVlczogdGhpcy5jb25maWdbc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJdXG4gICAgICAgICAgLnZhbHVlLmRhdGFfaXRlbXMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfaXNDb25maWdQYXJhbWV0ZXJTZWxlY3RlZChzZWxlY3RlZENvbmZpZ1BhcmFtZXRlciwgdHlwZSkge1xuICAgIGlmIChzZWxlY3RlZENvbmZpZ1BhcmFtZXRlciA9PT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy5jb25maWdbc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJdLnZhbHVlLnR5cGUgPT09IHR5cGUpIHJldHVybiB0cnVlO1xuICAgIGlmICh0eXBlLmluY2x1ZGVzKHRoaXMuY29uZmlnW3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyXS52YWx1ZS50eXBlKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIF9jb21wdXRlU2VsZWN0Q2FwdGlvbkNvbmZpZ1BhcmFtZXRlcihzdGF0ZU9iaikge1xuICAgIHJldHVybiBgJHtzdGF0ZU9iai5rZXl9OiAke3N0YXRlT2JqLnZhbHVlLmxhYmVsfWA7XG4gIH1cblxuICBhc3luYyBfcmVmcmVzaENvbmZpZyhzZWxlY3RlZE5vZGUpIHtcbiAgICBjb25zdCBjb25maWdEYXRhID0gW107XG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICBcIkdFVFwiLFxuICAgICAgYHp3YXZlL2NvbmZpZy8ke3RoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICk7XG4gICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbmZpZ0RhdGEucHVzaCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogY29uZmlnW2tleV0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBjb25maWc6IGNvbmZpZ0RhdGEgfSk7XG4gICAgdGhpcy5fc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJDaGFuZ2VkKHRoaXMuX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ6d2F2ZS1ub2RlLWNvbmZpZ1wiLCBad2F2ZU5vZGVDb25maWcpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLWFwaS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5jbGFzcyBad2F2ZU5vZGVQcm90ZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAuY2FyZC1hY3Rpb25zLndhcm5pbmcgaGEtY2FsbC1hcGktYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIH1cblxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgfVxuXG4gICAgICAuZGV2aWNlLXBpY2tlciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4IDI0cHggMjRweDtcbiAgICAgICAgfVxuXG4gICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIk5vZGUgcHJvdGVjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUgbGFiZWw9XCJQcm90ZWN0aW9uXCIgZHluYW1pYy1hbGlnbiBjbGFzcz1cImZsZXhcIiBwbGFjZWhvbGRlcj1cInt7X2xvYWRlZFByb3RlY3Rpb25WYWx1ZX19XCI+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiIHNlbGVjdGVkPVwie3tfc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyfX1cIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfcHJvdGVjdGlvbk9wdGlvbnNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5bW3N0YXRlXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxoYS1jYWxsLWFwaS1idXR0b25cbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgcGF0aD1cIltbX25vZGVQYXRoXV1cIlxuICAgICAgICAgICAgICBkYXRhPVwiW1tfcHJvdGVjdGlvbkRhdGFdXVwiPlxuICAgICAgICAgICAgICBTZXQgUHJvdGVjdGlvblxuICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2Rpdj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgbm9kZXM6IEFycmF5LFxuXG4gICAgICBzZWxlY3RlZE5vZGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICB9LFxuXG4gICAgICBwcm90ZWN0aW9uTm9kZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBfcHJvdGVjdGlvblZhbHVlSUQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJfY29tcHV0ZVByb3RlY3Rpb25EYXRhXCIsXG4gICAgICB9LFxuXG4gICAgICBfcHJvdGVjdGlvbk9wdGlvbnM6IEFycmF5LFxuXG4gICAgICBfcHJvdGVjdGlvbjoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6ICgpID0+IFtdLFxuICAgICAgfSxcblxuICAgICAgX2xvYWRlZFByb3RlY3Rpb25WYWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgX3Byb3RlY3Rpb25EYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgfSxcblxuICAgICAgX25vZGVQYXRoOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfbm9kZXNDaGFuZ2VkKG5vZGVzLCBzZWxlY3RlZE5vZGUpXCJdO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNzLWFwaS1jYWxsZWRcIiwgKGV2KSA9PiB0aGlzLmFwaUNhbGxlZChldikpO1xuICB9XG5cbiAgYXBpQ2FsbGVkKGV2KSB7XG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaFByb3RlY3Rpb24odGhpcy5zZWxlY3RlZE5vZGUpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfVxuICB9XG5cbiAgX25vZGVzQ2hhbmdlZCgpIHtcbiAgICBpZiAoIXRoaXMubm9kZXMpIHJldHVybjtcbiAgICBpZiAodGhpcy5wcm90ZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5wcm90ZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBwcm90ZWN0aW9uTm9kZTogdHJ1ZSxcbiAgICAgICAgX3Byb3RlY3Rpb25PcHRpb25zOiB0aGlzLnByb3RlY3Rpb25bMF0udmFsdWUsXG4gICAgICAgIF9sb2FkZWRQcm90ZWN0aW9uVmFsdWU6IHRoaXMucHJvdGVjdGlvblsxXS52YWx1ZSxcbiAgICAgICAgX3Byb3RlY3Rpb25WYWx1ZUlEOiB0aGlzLnByb3RlY3Rpb25bMl0udmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfcmVmcmVzaFByb3RlY3Rpb24oc2VsZWN0ZWROb2RlKSB7XG4gICAgY29uc3QgcHJvdGVjdGlvblZhbHVlcyA9IFtdO1xuICAgIGNvbnN0IHByb3RlY3Rpb25zID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICBcIkdFVFwiLFxuICAgICAgYHp3YXZlL3Byb3RlY3Rpb24vJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICApO1xuICAgIE9iamVjdC5rZXlzKHByb3RlY3Rpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHByb3RlY3Rpb25WYWx1ZXMucHVzaCh7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWU6IHByb3RlY3Rpb25zW2tleV0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgX3Byb3RlY3Rpb246IHByb3RlY3Rpb25WYWx1ZXMsXG4gICAgICBfc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyOiAtMSxcbiAgICAgIF9sb2FkZWRQcm90ZWN0aW9uVmFsdWU6IHRoaXMucHJvdGVjdGlvblsxXS52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIF9jb21wdXRlUHJvdGVjdGlvbkRhdGEoc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSB8fCBzZWxlY3RlZFByb3RlY3Rpb25QYXJhbWV0ZXIgPT09IC0xKSByZXR1cm47XG4gICAgdGhpcy5fcHJvdGVjdGlvbkRhdGEgPSB7XG4gICAgICBzZWxlY3Rpb246IHRoaXMuX3Byb3RlY3Rpb25PcHRpb25zW3NlbGVjdGVkUHJvdGVjdGlvblBhcmFtZXRlcl0sXG4gICAgICB2YWx1ZV9pZDogdGhpcy5fcHJvdGVjdGlvblZhbHVlSUQsXG4gICAgfTtcbiAgICB0aGlzLl9ub2RlUGF0aCA9IGB6d2F2ZS9wcm90ZWN0aW9uLyR7XG4gICAgICB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWRcbiAgICB9YDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ6d2F2ZS1ub2RlLXByb3RlY3Rpb25cIiwgWndhdmVOb2RlUHJvdGVjdGlvbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5jbGFzcyBad2F2ZVVzZXJjb2RlcyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpY2UtcGlja2VyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIk5vZGUgdXNlciBjb2Rlc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbD1cIkNvZGUgc2xvdFwiXG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7X3NlbGVjdGVkVXNlckNvZGV9fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3VzZXJDb2Rlc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgPltbX2NvbXB1dGVTZWxlY3RDYXB0aW9uVXNlckNvZGVzKHN0YXRlKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19pc1VzZXJDb2RlU2VsZWN0ZWQoX3NlbGVjdGVkVXNlckNvZGUpXV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VyIGNvZGVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBhbGxvd2VkLXBhdHRlcm49XCJbMC05LGEtZix4LFxcXFxcXFxcXVwiXG4gICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiNDBcIlxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aD1cIjE2XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInt7X3NlbGVjdGVkVXNlckNvZGVWYWx1ZX19XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8cHJlPkFzY2lpOiBbW19jb21wdXRlZENvZGVPdXRwdXRdXTwvcHJlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICBkb21haW49XCJsb2NrXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwic2V0X3VzZXJjb2RlXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9J1tbX2NvbXB1dGVVc2VyQ29kZVNlcnZpY2VEYXRhKF9zZWxlY3RlZFVzZXJDb2RlVmFsdWUsIFwiQWRkXCIpXV0nXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTZXQgVXNlcmNvZGVcbiAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwibG9ja1wiXG4gICAgICAgICAgICAgICAgc2VydmljZT1cImNsZWFyX3VzZXJjb2RlXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9J1tbX2NvbXB1dGVVc2VyQ29kZVNlcnZpY2VEYXRhKF9zZWxlY3RlZFVzZXJDb2RlLCBcIkRlbGV0ZVwiKV1dJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlIFVzZXJjb2RlXG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgbm9kZXM6IEFycmF5LFxuXG4gICAgICBzZWxlY3RlZE5vZGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJfc2VsZWN0ZWROb2RlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgdXNlckNvZGVzOiBPYmplY3QsXG5cbiAgICAgIF9zZWxlY3RlZFVzZXJDb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJfc2VsZWN0ZWRVc2VyQ29kZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIF9zZWxlY3RlZFVzZXJDb2RlVmFsdWU6IFN0cmluZyxcblxuICAgICAgX2NvbXB1dGVkQ29kZU91dHB1dDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNzLXNlcnZpY2UtY2FsbGVkXCIsIChldikgPT5cbiAgICAgIHRoaXMuc2VydmljZUNhbGxlZChldilcbiAgICApO1xuICB9XG5cbiAgc2VydmljZUNhbGxlZChldikge1xuICAgIGlmIChldi5kZXRhaWwuc3VjY2Vzcykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hVc2VyQ29kZXModGhpcy5zZWxlY3RlZE5vZGUpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfVxuICB9XG5cbiAgX2lzVXNlckNvZGVTZWxlY3RlZChzZWxlY3RlZFVzZXJDb2RlKSB7XG4gICAgaWYgKHNlbGVjdGVkVXNlckNvZGUgPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfY29tcHV0ZVNlbGVjdENhcHRpb25Vc2VyQ29kZXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gYCR7c3RhdGVPYmoua2V5fTogJHtzdGF0ZU9iai52YWx1ZS5sYWJlbH1gO1xuICB9XG5cbiAgX3NlbGVjdGVkVXNlckNvZGVDaGFuZ2VkKHNlbGVjdGVkVXNlckNvZGUpIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRVc2VyQ29kZSA9PT0gLTEgfHwgc2VsZWN0ZWRVc2VyQ29kZSA9PT0gLTEpIHJldHVybjtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudXNlckNvZGVzW3NlbGVjdGVkVXNlckNvZGVdLnZhbHVlLmNvZGU7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgIF9zZWxlY3RlZFVzZXJDb2RlVmFsdWU6IHRoaXMuX2EyaGV4KHZhbHVlKSxcbiAgICAgIF9jb21wdXRlZENvZGVPdXRwdXQ6IGBbJHt0aGlzLl9oZXgyYSh0aGlzLl9hMmhleCh2YWx1ZSkpfV1gLFxuICAgIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVVc2VyQ29kZVNlcnZpY2VEYXRhKHNlbGVjdGVkVXNlckNvZGVWYWx1ZSwgdHlwZSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEgfHwgIXNlbGVjdGVkVXNlckNvZGVWYWx1ZSkgcmV0dXJuIC0xO1xuICAgIGxldCBzZXJ2aWNlRGF0YSA9IG51bGw7XG4gICAgbGV0IHZhbHVlRGF0YSA9IG51bGw7XG4gICAgaWYgKHR5cGUgPT09IFwiQWRkXCIpIHtcbiAgICAgIHZhbHVlRGF0YSA9IHRoaXMuX2hleDJhKHNlbGVjdGVkVXNlckNvZGVWYWx1ZSk7XG4gICAgICB0aGlzLl9jb21wdXRlZENvZGVPdXRwdXQgPSBgWyR7dmFsdWVEYXRhfV1gO1xuICAgICAgc2VydmljZURhdGEgPSB7XG4gICAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgICAgY29kZV9zbG90OiB0aGlzLl9zZWxlY3RlZFVzZXJDb2RlLFxuICAgICAgICB1c2VyY29kZTogdmFsdWVEYXRhLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IFwiRGVsZXRlXCIpIHtcbiAgICAgIHNlcnZpY2VEYXRhID0ge1xuICAgICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICAgIGNvZGVfc2xvdDogdGhpcy5fc2VsZWN0ZWRVc2VyQ29kZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlRGF0YTtcbiAgfVxuXG4gIGFzeW5jIF9yZWZyZXNoVXNlckNvZGVzKHNlbGVjdGVkTm9kZSkge1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9zZWxlY3RlZFVzZXJDb2RlVmFsdWU6IFwiXCIgfSk7XG4gICAgY29uc3QgdXNlckNvZGVzID0gW107XG4gICAgY29uc3QgdXNlckNvZGVEYXRhID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICBcIkdFVFwiLFxuICAgICAgYHp3YXZlL3VzZXJjb2Rlcy8ke3RoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICk7XG4gICAgT2JqZWN0LmtleXModXNlckNvZGVEYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHVzZXJDb2Rlcy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZTogdXNlckNvZGVEYXRhW2tleV0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB1c2VyQ29kZXM6IHVzZXJDb2RlcyB9KTtcbiAgICB0aGlzLl9zZWxlY3RlZFVzZXJDb2RlQ2hhbmdlZCh0aGlzLl9zZWxlY3RlZFVzZXJDb2RlKTtcbiAgfVxuXG4gIF9hMmhleChzdHIpIHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBsZXQgb3V0cHV0ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGhleCA9IE51bWJlcihzdHIuY2hhckNvZGVBdChpKSkudG9TdHJpbmcoMTYpO1xuICAgICAgaWYgKGhleCA9PT0gXCIwXCIpIHtcbiAgICAgICAgb3V0cHV0ID0gXCIwMFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ID0gaGV4O1xuICAgICAgfVxuICAgICAgYXJyLnB1c2goXCJcXFxceFwiICsgb3V0cHV0KTtcbiAgICB9XG4gICAgcmV0dXJuIGFyci5qb2luKFwiXCIpO1xuICB9XG5cbiAgX2hleDJhKGhleHgpIHtcbiAgICBjb25zdCBoZXggPSBoZXh4LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaGV4TW9kID0gaGV4LnJlcGxhY2UoL1xcXFx4L2csIFwiXCIpO1xuICAgIGxldCBzdHIgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGV4TW9kLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXhNb2Quc3Vic3RyKGksIDIpLCAxNikpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgX3NlbGVjdGVkTm9kZUNoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9zZWxlY3RlZHVzZXJDb2RlOiAtMSB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ6d2F2ZS11c2VyY29kZXNcIiwgWndhdmVVc2VyY29kZXMpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IHsgWldhdmVWYWx1ZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3p3YXZlXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiendhdmUtdmFsdWVzXCIpXG5leHBvcnQgY2xhc3MgWndhdmVWYWx1ZXMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF92YWx1ZXM6IFpXYXZlVmFsdWVbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zZWxlY3RlZFZhbHVlOiBudW1iZXIgPSAtMTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgIC5oZWFkZXI9JHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuendhdmUudmFsdWVzLmhlYWRlclwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5jb21tb24udmFsdWVcIil9XG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7dGhpcy5fc2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fdmFsdWVzLm1hcChcbiAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgICAgID4ke2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUuY29tbW9uLmluc3RhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICApfTpcbiAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0uaW5zdGFuY2V9LFxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUuY29tbW9uLmluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICApfTpcbiAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0uaW5kZXh9KTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV2aWNlLXBpY2tlciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVscC10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJ6d2F2ZS12YWx1ZXNcIjogWndhdmVWYWx1ZXM7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBUUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExREE7QUFDQTtBQTJEQTs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFsQkE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQWpFQTtBQUNBO0FBa0VBOzs7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoR0E7QUFDQTtBQWlHQTs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUtBQUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQXVCQTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQUNBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFEQTtBQUlBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7QUFLQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFzRUE7QUFDQTtBQXpFQTtBQUNBO0FBeUVBOzs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUExRkE7QUFDQTtBQTJGQTs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTZCQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBeEVBO0FBNkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFuQkE7QUFDQTtBQTJuQkE7Ozs7Ozs7Ozs7OztBQ2xxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBeERBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWhXQTtBQUNBO0FBaVdBOzs7Ozs7Ozs7Ozs7QUM3V0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUF2QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOFdBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBNUlBO0FBQ0E7QUE0SUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBQ0E7QUFFQTtBQVdBO0FBRUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQWZBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBQ0E7OztBQUdBOzs7O0FBTUE7Ozs7O0FBS0E7OztBQUtBOzs7QUFJQTs7QUFHQTtBQUhBOztBQVVBOztBQUlBOztBQVBBOztBQWVBOztBQUlBOztBQVBBO0FBY0E7O0FBSUE7O0FBTkE7OztBQWNBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBOztBQUVBOztBQUdBOztBQUVBOzs7QUFHQTs7O0FBUkE7O0FBZ0JBOzs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFUQTtBQTNFQTs7QUFwQkE7QUFpSEE7QUFuSUE7QUFBQTtBQUFBO0FBQUE7QUFzSUE7QUFDQTtBQXZJQTtBQUFBO0FBQUE7QUFBQTtBQTBJQTtBQVlBO0FBdEpBO0FBQUE7QUFBQTtBQUFBO0FBeUpBO0FBQ0E7QUFDQTtBQUNBO0FBNUpBO0FBQUE7QUFBQTtBQUFBO0FBK0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFLQTtBQUFBO0FBQUE7QUFBQTtBQTZLQTtBQUNBO0FBOUtBO0FBQUE7QUFBQTtBQUFBO0FBaUxBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOzs7QUFaQTtBQWdCQTtBQWpNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb01BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBc0RBO0FBMVBBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF1SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFqRUE7QUFzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBNVdBO0FBQ0E7QUE2V0E7Ozs7Ozs7Ozs7OztBQ3hYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBM0NBO0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFHQTtBQUNBO0FBNUpBO0FBQ0E7QUE2SkE7Ozs7Ozs7Ozs7OztBQ3hLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBcEJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBaE5BO0FBQ0E7QUFpTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TkE7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUdBO0FBQ0E7QUFLQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7O0FBR0E7Ozs7QUFJQTs7Ozs7O0FBTUE7O0FBRUE7O0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTs7QUFYQTs7Ozs7O0FBZkE7QUFvQ0E7QUExQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTZDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEyQ0E7QUF4RkE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
