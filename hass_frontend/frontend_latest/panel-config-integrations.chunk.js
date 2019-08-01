(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-integrations"],
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
        const compare = (a, b) => {
          if (a < b) {
            return -1;
          }

          if (a > b) {
            return 1;
          }

          return 0;
        };
        const caseInsensitiveCompare = (a, b) =>
          compare(a.toLowerCase(), b.toLowerCase());

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
        const debounce = (func, wait, immediate = false) => {
          let timeout; // @ts-ignore

          return function(...args) {
            // tslint:disable:no-this-assignment
            // @ts-ignore
            const context = this;

            const later = () => {
              timeout = null;

              if (!immediate) {
                func.apply(context, args);
              }
            };

            const callNow = immediate && !timeout;
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

        class HaStateIcon extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <ha-icon icon="[[computeIcon(stateObj)]]"></ha-icon>
    `;
          }

          static get properties() {
            return {
              stateObj: {
                type: Object,
              },
            };
          }

          computeIcon(stateObj) {
            return Object(
              _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__["default"]
            )(stateObj);
          }
        }

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

        const createAreaRegistryEntry = (hass, values) =>
          hass.callWS(
            Object.assign(
              {
                type: "config/area_registry/create",
              },
              values
            )
          );
        const updateAreaRegistryEntry = (hass, areaId, updates) =>
          hass.callWS(
            Object.assign(
              {
                type: "config/area_registry/update",
                area_id: areaId,
              },
              updates
            )
          );
        const deleteAreaRegistryEntry = (hass, areaId) =>
          hass.callWS({
            type: "config/area_registry/delete",
            area_id: areaId,
          });

        const fetchAreaRegistry = (conn) =>
          conn
            .sendMessagePromise({
              type: "config/area_registry/list",
            })
            .then((areas) =>
              areas.sort((ent1, ent2) =>
                Object(
                  _common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"]
                )(ent1.name, ent2.name)
              )
            );

        const subscribeAreaRegistryUpdates = (conn, store) =>
          conn.subscribeEvents(
            Object(
              _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"]
            )(
              () =>
                fetchAreaRegistry(conn).then((areas) =>
                  store.setState(areas, true)
                ),
              500,
              true
            ),
            "area_registry_updated"
          );

        const subscribeAreaRegistry = (conn, onChange) =>
          Object(
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

        const createConfigFlow = (hass, handler) =>
          hass.callApi("POST", "config/config_entries/flow", {
            handler,
          });
        const fetchConfigFlow = (hass, flowId) =>
          hass.callApi("GET", `config/config_entries/flow/${flowId}`);
        const handleConfigFlowStep = (hass, flowId, data) =>
          hass.callApi("POST", `config/config_entries/flow/${flowId}`, data);
        const deleteConfigFlow = (hass, flowId) =>
          hass.callApi("DELETE", `config/config_entries/flow/${flowId}`);
        const getConfigFlowsInProgress = (hass) =>
          hass.callApi("GET", "config/config_entries/flow");
        const getConfigFlowHandlers = (hass) =>
          hass.callApi("GET", "config/config_entries/flow_handlers");

        const fetchConfigFlowInProgress = (conn) =>
          conn.sendMessagePromise({
            type: "config/entity_registry/list",
          });

        const subscribeConfigFlowInProgressUpdates = (conn, store) =>
          Object(
            _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"]
          )(
            conn.subscribeEvents(
              () =>
                fetchConfigFlowInProgress(conn).then((flows) =>
                  store.setState(flows, true)
                ),
              500,
              true
            ),
            "config_entry_discovered"
          );

        const subscribeConfigFlowInProgress = (hass, onChange) =>
          Object(
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
        const getConfigEntries = (hass) =>
          hass.callApi("GET", "config/config_entries/entry");
        const localizeConfigFlowTitle = (localize, flow) => {
          const placeholders = flow.context.title_placeholders || {};
          const placeholderKeys = Object.keys(placeholders);

          if (placeholderKeys.length === 0) {
            return localize(`component.${flow.handler}.config.title`);
          }

          const args = [];
          placeholderKeys.forEach((key) => {
            args.push(key);
            args.push(placeholders[key]);
          });
          return localize(
            `component.${flow.handler}.config.flow_title`,
            ...args
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

        const updateDeviceRegistryEntry = (hass, deviceId, updates) =>
          hass.callWS(
            Object.assign(
              {
                type: "config/device_registry/update",
                device_id: deviceId,
              },
              updates
            )
          );

        const fetchDeviceRegistry = (conn) =>
          conn.sendMessagePromise({
            type: "config/device_registry/list",
          });

        const subscribeDeviceRegistryUpdates = (conn, store) =>
          conn.subscribeEvents(
            Object(
              _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"]
            )(
              () =>
                fetchDeviceRegistry(conn).then((devices) =>
                  store.setState(devices, true)
                ),
              500,
              true
            ),
            "device_registry_updated"
          );

        const subscribeDeviceRegistry = (conn, onChange) =>
          Object(
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

        const computeEntityRegistryName = (hass, entry) => {
          if (entry.name) {
            return entry.name;
          }

          const state = hass.states[entry.entity_id];
          return state
            ? Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ]
              )(state)
            : null;
        };
        const updateEntityRegistryEntry = (hass, entityId, updates) =>
          hass.callWS(
            Object.assign(
              {
                type: "config/entity_registry/update",
                entity_id: entityId,
              },
              updates
            )
          );
        const removeEntityRegistryEntry = (hass, entityId) =>
          hass.callWS({
            type: "config/entity_registry/remove",
            entity_id: entityId,
          });

        const fetchEntityRegistry = (conn) =>
          conn.sendMessagePromise({
            type: "config/entity_registry/list",
          });

        const subscribeEntityRegistryUpdates = (conn, store) =>
          conn.subscribeEvents(
            Object(
              _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"]
            )(
              () =>
                fetchEntityRegistry(conn).then((entities) =>
                  store.setState(entities, true)
                ),
              500,
              true
            ),
            "entity_registry_updated"
          );

        const subscribeEntityRegistry = (conn, onChange) =>
          Object(
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

        const loadConfigFlowDialog = () =>
          Promise.all(
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
              __webpack_require__.e(9),
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
        const showConfigFlowDialog = (element, dialogParams) => {
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-dialog", {
            dialogTag: "dialog-config-flow",
            dialogImport: loadConfigFlowDialog,
            dialogParams,
          });
        };

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

        /*
         * @appliesMixin LocalizeMixIn
         * @appliesMixin EventsMixin
         */

        class HaCeEntitiesCard extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"]
        )(
          Object(
            _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style>
        ha-card {
          flex: 1 0 100%;
          padding-bottom: 8px;
        }
        paper-icon-item {
          cursor: pointer;
          padding-top: 4px;
          padding-bottom: 4px;
        }
      </style>
      <ha-card header="[[heading]]">
        <template is="dom-repeat" items="[[entities]]" as="entity">
          <paper-icon-item on-click="_openMoreInfo">
            <state-badge
              state-obj="[[_computeStateObj(entity, hass)]]"
              slot="item-icon"
            ></state-badge>
            <paper-item-body>
              <div class="name">[[_computeEntityName(entity, hass)]]</div>
              <div class="secondary entity-id">[[entity.entity_id]]</div>
            </paper-item-body>
          </paper-icon-item>
        </template>
      </ha-card>
    `;
          }

          static get properties() {
            return {
              heading: String,
              entities: Array,
              hass: Object,
            };
          }

          _computeStateObj(entity, hass) {
            return hass.states[entity.entity_id];
          }

          _computeEntityName(entity, hass) {
            return (
              Object(
                _data_entity_registry__WEBPACK_IMPORTED_MODULE_9__[
                  "computeEntityRegistryName"
                ]
              )(hass, entity) ||
              `(${this.localize(
                "ui.panel.config.integrations.config_entry.entity_unavailable"
              )})`
            );
          }

          _openMoreInfo(ev) {
            this.fire("hass-more-info", {
              entityId: ev.model.entity.entity_id,
            });
          }
        }

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

        /*
         * @appliesMixin LocalizeMixin
         * @appliesMixin EventsMixin
         */

        class HaConfigManagerDashboard extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__["default"]
        )(
          Object(
            _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__["EventsMixin"]
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
      <style include="iron-flex ha-style">
        ha-card {
          overflow: hidden;
        }
        mwc-button {
          top: 3px;
          margin-right: -0.57em;
        }
        .config-entry-row {
          display: flex;
          padding: 0 16px;
        }
        ha-state-icon {
          cursor: pointer;
        }
        .configured a {
          color: var(--primary-text-color);
          text-decoration: none;
        }
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
      </style>

      <hass-subpage
        header="[[localize('ui.panel.config.integrations.caption')]]"
      >
        <template is="dom-if" if="[[progress.length]]">
          <ha-config-section>
            <span slot="header"
              >[[localize('ui.panel.config.integrations.discovered')]]</span
            >
            <ha-card>
              <template is="dom-repeat" items="[[progress]]">
                <div class="config-entry-row">
                  <paper-item-body>
                    [[_computeActiveFlowTitle(localize, item)]]
                  </paper-item-body>
                  <mwc-button on-click="_continueFlow"
                    >[[localize('ui.panel.config.integrations.configure')]]</mwc-button
                  >
                </div>
              </template>
            </ha-card>
          </ha-config-section>
        </template>

        <ha-config-section class="configured">
          <span slot="header"
            >[[localize('ui.panel.config.integrations.configured')]]</span
          >
          <ha-card>
            <template is="dom-if" if="[[!entries.length]]">
              <div class="config-entry-row">
                <paper-item-body two-line>
                  <div>[[localize('ui.panel.config.integrations.none')]]</div>
                </paper-item-body>
              </div>
            </template>
            <template is="dom-repeat" items="[[entries]]">
              <a href="/config/integrations/[[item.entry_id]]">
                <paper-item>
                  <paper-item-body two-line>
                    <div>
                      [[_computeIntegrationTitle(localize, item.domain)]]:
                      [[item.title]]
                    </div>
                    <div secondary>
                      <template
                        is="dom-repeat"
                        items="[[_computeConfigEntryEntities(hass, item, entities)]]"
                      >
                        <span>
                          <ha-state-icon
                            state-obj="[[item]]"
                            on-click="_handleMoreInfo"
                          ></ha-state-icon>
                          <paper-tooltip position="bottom"
                            >[[_computeStateName(item)]]</paper-tooltip
                          >
                        </span>
                      </template>
                    </div>
                  </paper-item-body>
                  <ha-icon-next></ha-icon-next>
                </paper-item>
              </a>
            </template>
          </ha-card>
        </ha-config-section>

        <paper-fab
          icon="hass:plus"
          title="[[localize('ui.panel.config.integrations.new')]]"
          on-click="_createFlow"
          is-wide$="[[isWide]]"
          rtl$="[[rtl]]"
        ></paper-fab>
      </hass-subpage>
    `;
          }

          static get properties() {
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
          }

          connectedCallback() {
            super.connectedCallback();
            Object(
              _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__[
                "loadConfigFlowDialog"
              ]
            )();
          }

          _createFlow() {
            Object(
              _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__[
                "showConfigFlowDialog"
              ]
            )(this, {
              dialogClosedCallback: () => this.fire("hass-reload-entries"),
            });
          }

          _continueFlow(ev) {
            Object(
              _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__[
                "showConfigFlowDialog"
              ]
            )(this, {
              continueFlowId: ev.model.item.flow_id,
              dialogClosedCallback: () => this.fire("hass-reload-entries"),
            });
          }

          _computeIntegrationTitle(localize, integration) {
            return localize(`component.${integration}.config.title`);
          }

          _computeActiveFlowTitle(localize, flow) {
            return Object(
              _data_config_entries__WEBPACK_IMPORTED_MODULE_20__[
                "localizeConfigFlowTitle"
              ]
            )(localize, flow);
          }

          _computeConfigEntryEntities(hass, configEntry, entities) {
            if (!entities) {
              return [];
            }

            const states = [];
            entities.forEach((entity) => {
              if (
                entity.config_entry_id === configEntry.entry_id &&
                entity.entity_id in hass.states
              ) {
                states.push(hass.states[entity.entity_id]);
              }
            });
            return states;
          }

          _computeStateName(stateObj) {
            return Object(
              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_18__[
                "default"
              ]
            )(stateObj);
          }

          _handleMoreInfo(ev) {
            this.fire("hass-more-info", {
              entityId: ev.model.item.entity_id,
            });
          }

          _computeRTL(hass) {
            return Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__[
                "computeRTL"
              ]
            )(hass);
          }
        }

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

        class HaConfigEntryPage extends Object(
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
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style>
        .content {
          display: flex;
          flex-wrap: wrap;
          padding: 4px;
          justify-content: center;
        }
        .card {
          box-sizing: border-box;
          display: flex;
          flex: 1 0 300px;
          min-width: 0;
          max-width: 500px;
          padding: 8px;
        }
      </style>
      <hass-subpage header="[[configEntry.title]]">
        <paper-icon-button
          slot="toolbar-icon"
          icon="hass:delete"
          on-click="_removeEntry"
        ></paper-icon-button>
        <div class="content">
          <template
            is="dom-if"
            if="[[_computeIsEmpty(_configEntryDevices, _noDeviceEntities)]]"
          >
            <p>
              [[localize('ui.panel.config.integrations.config_entry.no_devices')]]
            </p>
          </template>
          <template is="dom-repeat" items="[[_configEntryDevices]]" as="device">
            <ha-device-card
              class="card"
              hass="[[hass]]"
              areas="[[areas]]"
              devices="[[devices]]"
              device="[[device]]"
              entities="[[entities]]"
              narrow="[[narrow]]"
            ></ha-device-card>
          </template>
          <template is="dom-if" if="[[_noDeviceEntities.length]]">
            <ha-ce-entities-card
              class="card"
              heading="[[localize('ui.panel.config.integrations.config_entry.no_device')]]"
              entities="[[_noDeviceEntities]]"
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-ce-entities-card>
          </template>
        </div>
      </hass-subpage>
    `;
          }

          static get properties() {
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
                computed: "_computeConfigEntryDevices(configEntry, devices)",
              },

              /**
               * All entity registry entries for this config entry that do not belong
               * to a device.
               */
              _noDeviceEntities: {
                type: Array,
                computed: "_computeNoDeviceEntities(configEntry, entities)",
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
          }

          _computeConfigEntryDevices(configEntry, devices) {
            if (!devices) return [];
            return devices
              .filter((device) =>
                device.config_entries.includes(configEntry.entry_id)
              )
              .sort(
                (dev1, dev2) =>
                  !!dev1.via_device_id - !!dev2.via_device_id ||
                  Object(
                    _common_string_compare__WEBPACK_IMPORTED_MODULE_4__[
                      "compare"
                    ]
                  )(dev1.name, dev2.name)
              );
          }

          _computeNoDeviceEntities(configEntry, entities) {
            if (!entities) return [];
            return entities.filter(
              (ent) =>
                !ent.device_id && ent.config_entry_id === configEntry.entry_id
            );
          }

          _computeIsEmpty(configEntryDevices, noDeviceEntities) {
            return (
              configEntryDevices.length === 0 && noDeviceEntities.length === 0
            );
          }

          _removeEntry() {
            if (
              !confirm(
                this.localize(
                  "ui.panel.config.integrations.config_entry.delete_confirm"
                )
              )
            )
              return;
            const entryId = this.configEntry.entry_id;
            this.hass
              .callApi("delete", `config/config_entries/entry/${entryId}`)
              .then((result) => {
                this.fire("hass-reload-entries");

                if (result.require_restart) {
                  alert(
                    this.localize(
                      "ui.panel.config.integrations.config_entry.restart_confirm"
                    )
                  );
                }

                this.navigate("/config/integrations/dashboard", true);
              });
          }
        }

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

        class HaConfigIntegrations extends Object(
          _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_7__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <app-route
        route="[[route]]"
        pattern="/:page"
        data="{{_routeData}}"
        tail="{{_routeTail}}"
      ></app-route>

      <template is="dom-if" if="[[_configEntry]]">
        <ha-config-entry-page
          hass="[[hass]]"
          config-entry="[[_configEntry]]"
          areas="[[_areas]]"
          entries="[[_entries]]"
          entities="[[_entities]]"
          devices="[[_devices]]"
          narrow="[[narrow]]"
        ></ha-config-entry-page>
      </template>
      <template is="dom-if" if="[[!_configEntry]]">
        <ha-config-entries-dashboard
          hass="[[hass]]"
          entries="[[_entries]]"
          entities="[[_entities]]"
          handlers="[[_handlers]]"
          progress="[[_progress]]"
        ></ha-config-entries-dashboard>
      </template>
    `;
          }

          static get properties() {
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
          }

          ready() {
            super.ready();
            this.addEventListener("hass-reload-entries", () =>
              this._loadData()
            );
          }

          connectedCallback() {
            super.connectedCallback();

            this._loadData();

            this._unsubAreas = Object(
              _data_area_registry__WEBPACK_IMPORTED_MODULE_9__[
                "subscribeAreaRegistry"
              ]
            )(this.hass.connection, (areas) => {
              this._areas = areas;
            });
            this.hass.connection
              .subscribeEvents(() => {
                this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_3__[
                  "Debouncer"
                ].debounce(
                  this._debouncer,
                  _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__[
                    "timeOut"
                  ].after(500),
                  () => this._loadData()
                );
              }, "config_entry_discovered")
              .then((unsub) => {
                this._unsubEvents = unsub;
              });
          }

          disconnectedCallback() {
            super.disconnectedCallback();
            if (this._unsubEvents) this._unsubEvents();
            if (this._unsubAreas) this._unsubAreas();
          }

          _loadData() {
            this.hass
              .callApi("get", "config/config_entries/entry")
              .then((entries) => {
                this._entries = entries.sort((conf1, conf2) =>
                  Object(
                    _common_string_compare__WEBPACK_IMPORTED_MODULE_8__[
                      "compare"
                    ]
                  )(conf1.title, conf2.title)
                );
              });
            this.hass
              .callApi("get", "config/config_entries/flow")
              .then((progress) => {
                this._progress = progress;
              });
            this.hass
              .callApi("get", "config/config_entries/flow_handlers")
              .then((handlers) => {
                this._handlers = handlers;
              });
            this.hass
              .callWS({
                type: "config/entity_registry/list",
              })
              .then((entities) => {
                this._entities = entities;
              });
            this.hass
              .callWS({
                type: "config/device_registry/list",
              })
              .then((devices) => {
                this._devices = devices;
              });
          }

          _computeConfigEntry(routeData, entries) {
            return (
              !!entries &&
              !!routeData &&
              entries.find((ent) => ent.entry_id === routeData.page)
            );
          }
        }

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

        function computeEntityName(hass, entity) {
          if (entity.name) return entity.name;
          const state = hass.states[entity.entity_id];
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

        class HaDeviceCard extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"]
        )(
          Object(
            _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__[
              "html"
            ]`
      <style>
        :host(:not([narrow])) .device-entities {
          max-height: 225px;
          overflow: auto;
        }
        ha-card {
          flex: 1 0 100%;
          padding-bottom: 10px;
          min-width: 0;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
        }
        .card-header .name {
          width: 90%;
        }
        .device {
          width: 30%;
        }
        .device .name {
          font-weight: bold;
        }
        .device .model,
        .device .manuf,
        .device .area {
          color: var(--secondary-text-color);
        }
        .area .extra-info .name {
          color: var(--primary-text-color);
        }
        .extra-info {
          margin-top: 8px;
        }
        paper-icon-item {
          cursor: pointer;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .manuf,
        .entity-id,
        .area {
          color: var(--secondary-text-color);
        }
      </style>
      <ha-card>
        <div class="card-header">
          <div class="name">[[_deviceName(device)]]</div>
          <paper-icon-button
            icon="hass:settings"
            on-click="_gotoSettings"
          ></paper-icon-button>
        </div>
        <div class="card-content">
          <div class="info">
            <div class="model">[[device.model]]</div>
            <div class="manuf">
              [[localize('ui.panel.config.integrations.config_entry.manuf',
              'manufacturer', device.manufacturer)]]
            </div>
            <template is="dom-if" if="[[device.area_id]]">
              <div class="area">
                <div class="extra-info">
                  [[localize('ui.panel.config.integrations.device_registry.area')]]
                  <span class="name">{{_computeArea(areas, device)}}</span>
                </div>
              </div>
            </template>
          </div>
          <template is="dom-if" if="[[device.via_device_id]]">
            <div class="extra-info">
              [[localize('ui.panel.config.integrations.config_entry.via')]]
              <span class="hub"
                >[[_computeDeviceName(devices, device.via_device_id)]]</span
              >
            </div>
          </template>
          <template is="dom-if" if="[[device.sw_version]]">
            <div class="extra-info">
              [[localize('ui.panel.config.integrations.config_entry.firmware',
              'version', device.sw_version)]]
            </div>
          </template>
        </div>

        <div class="device-entities">
          <template
            is="dom-repeat"
            items="[[_computeDeviceEntities(hass, device, entities)]]"
            as="entity"
          >
            <paper-icon-item on-click="_openMoreInfo">
              <state-badge
                state-obj="[[_computeStateObj(entity, hass)]]"
                slot="item-icon"
              ></state-badge>
              <paper-item-body>
                <div class="name">[[_computeEntityName(entity, hass)]]</div>
                <div class="secondary entity-id">[[entity.entity_id]]</div>
              </paper-item-body>
            </paper-icon-item>
          </template>
        </div>
      </ha-card>
    `;
          }

          static get properties() {
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
          }

          firstUpdated(changedProps) {
            super.firstUpdated(changedProps);
            Object(
              _show_dialog_device_registry_detail__WEBPACK_IMPORTED_MODULE_16__[
                "loadDeviceRegistryDetailDialog"
              ]
            )();
          }

          connectedCallback() {
            super.connectedCallback();
            this._unsubAreas = Object(
              _data_area_registry__WEBPACK_IMPORTED_MODULE_15__[
                "subscribeAreaRegistry"
              ]
            )(this.hass.connection, (areas) => {
              this._areas = areas;
            });
            this._unsubDevices = Object(
              _data_device_registry__WEBPACK_IMPORTED_MODULE_14__[
                "subscribeDeviceRegistry"
              ]
            )(this.hass.connection, (devices) => {
              this.devices = devices;
              this.device = devices.find(
                (device) => device.id === this.device.id
              );
            });
          }

          disconnectedCallback() {
            super.disconnectedCallback();

            if (this._unsubAreas) {
              this._unsubAreas();
            }

            if (this._unsubDevices) {
              this._unsubDevices();
            }
          }

          _computeArea(areas, device) {
            if (!areas || !device || !device.area_id) {
              return "No Area";
            } // +1 because of "No Area" entry

            return areas.find((area) => area.area_id === device.area_id).name;
          }

          _computeChildDevices(device, devices) {
            return devices
              .filter((dev) => dev.via_device_id === device.id)
              .sort((dev1, dev2) =>
                Object(
                  _common_string_compare__WEBPACK_IMPORTED_MODULE_13__[
                    "compare"
                  ]
                )(dev1.name, dev2.name)
              );
          }

          _computeDeviceEntities(hass, device, entities) {
            return entities
              .filter((entity) => entity.device_id === device.id)
              .sort((ent1, ent2) =>
                Object(
                  _common_string_compare__WEBPACK_IMPORTED_MODULE_13__[
                    "compare"
                  ]
                )(
                  computeEntityName(hass, ent1) || `zzz${ent1.entity_id}`,
                  computeEntityName(hass, ent2) || `zzz${ent2.entity_id}`
                )
              );
          }

          _computeStateObj(entity, hass) {
            return hass.states[entity.entity_id];
          }

          _computeEntityName(entity, hass) {
            return (
              computeEntityName(hass, entity) ||
              `(${this.localize(
                "ui.panel.config.integrations.config_entry.entity_unavailable"
              )})`
            );
          }

          _deviceName(device) {
            return device.name_by_user || device.name;
          }

          _computeDeviceName(devices, deviceId) {
            const device = devices.find((dev) => dev.id === deviceId);
            return device
              ? this._deviceName(device)
              : `(${this.localize(
                  "ui.panel.config.integrations.config_entry.device_unavailable"
                )})`;
          }

          _gotoSettings() {
            const device = this.device;
            Object(
              _show_dialog_device_registry_detail__WEBPACK_IMPORTED_MODULE_16__[
                "showDeviceRegistryDetailDialog"
              ]
            )(this, {
              device,
              updateEntry: async (updates) => {
                await Object(
                  _data_device_registry__WEBPACK_IMPORTED_MODULE_14__[
                    "updateDeviceRegistryEntry"
                  ]
                )(this.hass, device.id, updates);
              },
            });
          }

          _openMoreInfo(ev) {
            this.fire("hass-more-info", {
              entityId: ev.model.entity.entity_id,
            });
          }
        }

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

        const loadDeviceRegistryDetailDialog = () =>
          Promise.all(
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
        const showDeviceRegistryDetailDialog = (
          element,
          deviceRegistryDetailParams
        ) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWludGVncmF0aW9ucy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtc3RhdGUtaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLW5leHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hcmVhX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbmZpZ19lbnRyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RldmljZV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHlfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc2hvdy1kaWFsb2ctY29uZmlnLWZsb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL25hdmlnYXRlLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWNvbmZpZy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2ludGVncmF0aW9ucy9oYS1jZS1lbnRpdGllcy1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2ludGVncmF0aW9ucy9oYS1jb25maWctZW50cmllcy1kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaW50ZWdyYXRpb25zL2hhLWNvbmZpZy1lbnRyeS1wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2ludGVncmF0aW9ucy9oYS1jb25maWctaW50ZWdyYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2ludGVncmF0aW9ucy9oYS1kZXZpY2UtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9pbnRlZ3JhdGlvbnMvc2hvdy1kaWFsb2ctZGV2aWNlLXJlZ2lzdHJ5LWRldGFpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ29tcHV0ZSB0aGUgb2JqZWN0IElEIG9mIGEgc3RhdGUuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2JqZWN0SWQoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoZW50aXR5SWQuaW5kZXhPZihcIi5cIikgKyAxKTtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY29tcHV0ZU9iamVjdElkIGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZU9iajogSGFzc0VudGl0eSk6IHN0cmluZyA9PlxuICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xuIiwiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT5cbiAgY29tcGFyZShhLnRvTG93ZXJDYXNlKCksIGIudG9Mb3dlckNhc2UoKSk7XG4iLCIvLyBGcm9tOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWRlYm91bmNlLWZ1bmN0aW9uXG5cbi8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3Rcbi8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3Jcbi8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYmFuLXR5cGVzXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSA8VCBleHRlbmRzIEZ1bmN0aW9uPihcbiAgZnVuYzogVCxcbiAgd2FpdCxcbiAgaW1tZWRpYXRlID0gZmFsc2Vcbik6IFQgPT4ge1xuICBsZXQgdGltZW91dDtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLXRoaXMtYXNzaWdubWVudFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gIH07XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vaGEtaWNvblwiO1xuaW1wb3J0IHN0YXRlSWNvbiBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uXCI7XG5cbmNsYXNzIEhhU3RhdGVJY29uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWljb24gaWNvbj1cIltbY29tcHV0ZUljb24oc3RhdGVPYmopXV1cIj48L2hhLWljb24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUljb24oc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVJY29uKHN0YXRlT2JqKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zdGF0ZS1pY29uXCIsIEhhU3RhdGVJY29uKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSGFJY29uIH0gZnJvbSBcIi4vaGEtaWNvblwiO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uTmV4dCBleHRlbmRzIEhhSWNvbiB7XG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmljb24gPVxuICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSBcImx0clwiXG4gICAgICAgID8gXCJoYXNzOmNoZXZyb24tcmlnaHRcIlxuICAgICAgICA6IFwiaGFzczpjaGV2cm9uLWxlZnRcIjtcblxuICAgIC8vIGNhbGxpbmcgc3VwZXIgYWZ0ZXIgc2V0dGluZyBpY29uIHRvIGhhdmUgaXQgY29uc2lzdGVudGx5IHNob3cgdGhlIGljb24gKG90aGVyd2lzZSBub3QgYWx3YXlzIHNob3duKVxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb24tbmV4dFwiOiBIYUljb25OZXh0O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb24tbmV4dFwiLCBIYUljb25OZXh0KTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5cbmNvbnN0IGlyb25JY29uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJpcm9uLWljb25cIikgYXMgQ29uc3RydWN0b3I8XG4gIElyb25JY29uRWxlbWVudFxuPjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uIGV4dGVuZHMgaXJvbkljb25DbGFzcyB7XG4gIHByaXZhdGUgX2ljb25zZXROYW1lPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oXG4gICAgbm9kZTogRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBzdXBlci5saXN0ZW4obm9kZSwgZXZlbnROYW1lLCBtZXRob2ROYW1lKTtcblxuICAgIGlmICghbG9hZGVkICYmIHRoaXMuX2ljb25zZXROYW1lID09PSBcIm1kaVwiKSB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWRpLWljb25zXCIgKi8gXCIuLi9yZXNvdXJjZXMvbWRpLWljb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvblwiOiBIYUljb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvblwiLCBIYUljb24pO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFyZWFSZWdpc3RyeUVudHJ5IHtcbiAgYXJlYV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPEFyZWFSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGFyZWFJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUFyZWFSZWdpc3RyeUVudHJ5ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGFyZWFJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9kZWxldGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEFyZWFSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uXG4gICAgLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2xpc3RcIixcbiAgICB9KVxuICAgIC50aGVuKChhcmVhcykgPT4gYXJlYXMuc29ydCgoZW50MSwgZW50MikgPT4gY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSkpKTtcblxuY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEFyZWFSZWdpc3RyeShjb25uKS50aGVuKChhcmVhcykgPT4gc3RvcmUuc2V0U3RhdGUoYXJlYXMsIHRydWUpKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiYXJlYV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUFyZWFSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChhcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEFyZWFSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2FyZWFSZWdpc3RyeVwiLFxuICAgIGZldGNoQXJlYVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFFbnRyeUZsb3dQcm9ncmVzc2VkRXZlbnQge1xuICB0eXBlOiBcImRhdGFfZW50cnlfZmxvd19wcm9ncmVzc2VkXCI7XG4gIGRhdGE6IHtcbiAgICBoYW5kbGVyOiBzdHJpbmc7XG4gICAgZmxvd19pZDogc3RyaW5nO1xuICAgIHJlZnJlc2g6IGJvb2xlYW47XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRW50cnkge1xuICBlbnRyeV9pZDogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc291cmNlOiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGNvbm5lY3Rpb25fY2xhc3M6IHN0cmluZztcbiAgc3VwcG9ydHNfb3B0aW9uczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZFNjaGVtYSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVmYXVsdD86IGFueTtcbiAgb3B0aW9uYWw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRmxvd1Byb2dyZXNzIHtcbiAgZmxvd19pZDogc3RyaW5nO1xuICBoYW5kbGVyOiBzdHJpbmc7XG4gIGNvbnRleHQ6IHtcbiAgICB0aXRsZV9wbGFjZWhvbGRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0Zsb3dTdGVwRm9ybSB7XG4gIHR5cGU6IFwiZm9ybVwiO1xuICBmbG93X2lkOiBzdHJpbmc7XG4gIGhhbmRsZXI6IHN0cmluZztcbiAgc3RlcF9pZDogc3RyaW5nO1xuICBkYXRhX3NjaGVtYTogRmllbGRTY2hlbWFbXTtcbiAgZXJyb3JzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBkZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRmxvd1N0ZXBFeHRlcm5hbCB7XG4gIHR5cGU6IFwiZXh0ZXJuYWxcIjtcbiAgZmxvd19pZDogc3RyaW5nO1xuICBoYW5kbGVyOiBzdHJpbmc7XG4gIHN0ZXBfaWQ6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdGbG93U3RlcENyZWF0ZUVudHJ5IHtcbiAgdHlwZTogXCJjcmVhdGVfZW50cnlcIjtcbiAgdmVyc2lvbjogbnVtYmVyO1xuICBmbG93X2lkOiBzdHJpbmc7XG4gIGhhbmRsZXI6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgLy8gQ29uZmlnIGVudHJ5IElEXG4gIHJlc3VsdDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRmxvd1N0ZXBBYm9ydCB7XG4gIHR5cGU6IFwiYWJvcnRcIjtcbiAgZmxvd19pZDogc3RyaW5nO1xuICBoYW5kbGVyOiBzdHJpbmc7XG4gIHJlYXNvbjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbmV4cG9ydCB0eXBlIENvbmZpZ0Zsb3dTdGVwID1cbiAgfCBDb25maWdGbG93U3RlcEZvcm1cbiAgfCBDb25maWdGbG93U3RlcEV4dGVybmFsXG4gIHwgQ29uZmlnRmxvd1N0ZXBDcmVhdGVFbnRyeVxuICB8IENvbmZpZ0Zsb3dTdGVwQWJvcnQ7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb25maWdGbG93ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGhhbmRsZXI6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPENvbmZpZ0Zsb3dTdGVwPihcIlBPU1RcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZmxvd1wiLCB7XG4gICAgaGFuZGxlcixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbmZpZ0Zsb3cgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZmxvd0lkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaTxDb25maWdGbG93U3RlcD4oXCJHRVRcIiwgYGNvbmZpZy9jb25maWdfZW50cmllcy9mbG93LyR7Zmxvd0lkfWApO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ29uZmlnRmxvd1N0ZXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGZsb3dJZDogc3RyaW5nLFxuICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4pID0+XG4gIGhhc3MuY2FsbEFwaTxDb25maWdGbG93U3RlcD4oXG4gICAgXCJQT1NUXCIsXG4gICAgYGNvbmZpZy9jb25maWdfZW50cmllcy9mbG93LyR7Zmxvd0lkfWAsXG4gICAgZGF0YVxuICApO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlnRmxvdyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBmbG93SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvY29uZmlnX2VudHJpZXMvZmxvdy8ke2Zsb3dJZH1gKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0Zsb3dzSW5Qcm9ncmVzcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGk8Q29uZmlnRmxvd1Byb2dyZXNzW10+KFwiR0VUXCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3dcIik7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25maWdGbG93SGFuZGxlcnMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsQXBpPHN0cmluZ1tdPihcIkdFVFwiLCBcImNvbmZpZy9jb25maWdfZW50cmllcy9mbG93X2hhbmRsZXJzXCIpO1xuXG5jb25zdCBmZXRjaENvbmZpZ0Zsb3dJblByb2dyZXNzID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3NVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBkZWJvdW5jZShcbiAgICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MoY29ubikudGhlbigoZmxvd3MpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoZmxvd3MsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImNvbmZpZ19lbnRyeV9kaXNjb3ZlcmVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBvbkNoYW5nZTogKGZsb3dzOiBDb25maWdGbG93UHJvZ3Jlc3NbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPENvbmZpZ0Zsb3dQcm9ncmVzc1tdPihcbiAgICBcIl9jb25maWdGbG93UHJvZ3Jlc3NcIixcbiAgICBmZXRjaENvbmZpZ0Zsb3dJblByb2dyZXNzLFxuICAgIHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzVXBkYXRlcyxcbiAgICBoYXNzLmNvbm5lY3Rpb24sXG4gICAgb25DaGFuZ2VcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0VudHJpZXMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsQXBpPENvbmZpZ0VudHJ5W10+KFwiR0VUXCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2VudHJ5XCIpO1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemVDb25maWdGbG93VGl0bGUgPSAoXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGZsb3c6IENvbmZpZ0Zsb3dQcm9ncmVzc1xuKSA9PiB7XG4gIGNvbnN0IHBsYWNlaG9sZGVycyA9IGZsb3cuY29udGV4dC50aXRsZV9wbGFjZWhvbGRlcnMgfHwge307XG4gIGNvbnN0IHBsYWNlaG9sZGVyS2V5cyA9IE9iamVjdC5rZXlzKHBsYWNlaG9sZGVycyk7XG4gIGlmIChwbGFjZWhvbGRlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKGBjb21wb25lbnQuJHtmbG93LmhhbmRsZXJ9LmNvbmZpZy50aXRsZWApO1xuICB9XG4gIGNvbnN0IGFyZ3M6IHN0cmluZ1tdID0gW107XG4gIHBsYWNlaG9sZGVyS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBhcmdzLnB1c2goa2V5KTtcbiAgICBhcmdzLnB1c2gocGxhY2Vob2xkZXJzW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIGxvY2FsaXplKGBjb21wb25lbnQuJHtmbG93LmhhbmRsZXJ9LmNvbmZpZy5mbG93X3RpdGxlYCwgLi4uYXJncyk7XG59O1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUmVnaXN0cnlFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyaWVzOiBzdHJpbmdbXTtcbiAgY29ubmVjdGlvbnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcbiAgbW9kZWw/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN3X3ZlcnNpb24/OiBzdHJpbmc7XG4gIHZpYV9kZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyB7XG4gIGFyZWFfaWQ/OiBzdHJpbmcgfCBudWxsO1xuICBuYW1lX2J5X3VzZXI/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8RGV2aWNlUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5jb25zdCBmZXRjaERldmljZVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9kZXZpY2VfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoRGV2aWNlUmVnaXN0cnkoY29ubikudGhlbigoZGV2aWNlcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShkZXZpY2VzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJkZXZpY2VfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChkZXZpY2VzOiBEZXZpY2VSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxEZXZpY2VSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2RyXCIsXG4gICAgZmV0Y2hEZXZpY2VSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5IHtcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcGxhdGZvcm06IHN0cmluZztcbiAgY29uZmlnX2VudHJ5X2lkPzogc3RyaW5nO1xuICBkZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGRpc2FibGVkX2J5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmcgfCBudWxsO1xuICBuZXdfZW50aXR5X2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRyeTogRW50aXR5UmVnaXN0cnlFbnRyeVxuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGlmIChlbnRyeS5uYW1lKSB7XG4gICAgcmV0dXJuIGVudHJ5Lm5hbWU7XG4gIH1cbiAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tlbnRyeS5lbnRpdHlfaWRdO1xuICByZXR1cm4gc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zPlxuKTogUHJvbWlzZTxFbnRpdHlSZWdpc3RyeUVudHJ5PiA9PlxuICBoYXNzLmNhbGxXUzxFbnRpdHlSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvcmVtb3ZlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRW50aXR5UmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hFbnRpdHlSZWdpc3RyeShjb25uKS50aGVuKChlbnRpdGllcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShlbnRpdGllcywgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiZW50aXR5X3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEVudGl0eVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZW50aXR5UmVnaXN0cnlcIixcbiAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFDb25maWdGbG93UGFyYW1zIHtcbiAgY29udGludWVGbG93SWQ/OiBzdHJpbmc7XG4gIGRpYWxvZ0Nsb3NlZENhbGxiYWNrOiAocGFyYW1zOiB7IGZsb3dGaW5pc2hlZDogYm9vbGVhbiB9KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZENvbmZpZ0Zsb3dEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJkaWFsb2ctY29uZmlnLWZsb3dcIiAqLyBcIi4vZGlhbG9nLWNvbmZpZy1mbG93XCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpZ0Zsb3dEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IEhhQ29uZmlnRmxvd1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWNvbmZpZy1mbG93XCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkQ29uZmlnRmxvd0RpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbi8qXG4gKiBAcG9seW1lck1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBuYXZpZ2F0ZSguLi5hcmdzKSB7XG4gICAgICAgIG5hdmlnYXRlKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuY2xhc3MgSGFDb25maWdTZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDI4cHggMjBweCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1kaXNwbGF5MTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXJyb3cuY29udGVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaW50cm8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvXCI+PHNsb3QgbmFtZT1cImludHJvZHVjdGlvblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZmxleC1hdXRvXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJjb250ZW50IFwiO1xuXG4gICAgcmV0dXJuIGlzV2lkZSA/IGNsYXNzZXMgOiBjbGFzc2VzICsgXCJuYXJyb3dcIjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJ0b2dldGhlciBsYXlvdXQgXCI7XG5cbiAgICByZXR1cm4gY2xhc3NlcyArIChpc1dpZGUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWwgbmFycm93XCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1zZWN0aW9uXCIsIEhhQ29uZmlnU2VjdGlvbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4SW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcbmltcG9ydCB7IGNvbXB1dGVFbnRpdHlSZWdpc3RyeU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhJblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNlRW50aXRpZXNDYXJkIGV4dGVuZHMgTG9jYWxpemVNaXhJbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgZmxleDogMSAwIDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2FyZCBoZWFkZXI9XCJbW2hlYWRpbmddXVwiPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2VudGl0aWVzXV1cIiBhcz1cImVudGl0eVwiPlxuICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW0gb24tY2xpY2s9XCJfb3Blbk1vcmVJbmZvXCI+XG4gICAgICAgICAgICA8c3RhdGUtYmFkZ2VcbiAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tfY29tcHV0ZVN0YXRlT2JqKGVudGl0eSwgaGFzcyldXVwiXG4gICAgICAgICAgICAgIHNsb3Q9XCJpdGVtLWljb25cIlxuICAgICAgICAgICAgPjwvc3RhdGUtYmFkZ2U+XG4gICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPltbX2NvbXB1dGVFbnRpdHlOYW1lKGVudGl0eSwgaGFzcyldXTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5IGVudGl0eS1pZFwiPltbZW50aXR5LmVudGl0eV9pZF1dPC9kaXY+XG4gICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWFkaW5nOiBTdHJpbmcsXG4gICAgICBlbnRpdGllczogQXJyYXksXG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlU3RhdGVPYmooZW50aXR5LCBoYXNzKSB7XG4gICAgcmV0dXJuIGhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdO1xuICB9XG5cbiAgX2NvbXB1dGVFbnRpdHlOYW1lKGVudGl0eSwgaGFzcykge1xuICAgIHJldHVybiAoXG4gICAgICBjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lKGhhc3MsIGVudGl0eSkgfHxcbiAgICAgIGAoJHt0aGlzLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5LmVudGl0eV91bmF2YWlsYWJsZVwiXG4gICAgICApfSlgXG4gICAgKTtcbiAgfVxuXG4gIF9vcGVuTW9yZUluZm8oZXYpIHtcbiAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiBldi5tb2RlbC5lbnRpdHkuZW50aXR5X2lkIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNlLWVudGl0aWVzLWNhcmRcIiwgSGFDZUVudGl0aWVzQ2FyZCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9vbHRpcC9wYXBlci10b29sdGlwXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZmFiL3BhcGVyLWZhYlwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1zdGF0ZS1pY29uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb24tbmV4dFwiO1xuXG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQge1xuICBsb2FkQ29uZmlnRmxvd0RpYWxvZyxcbiAgc2hvd0NvbmZpZ0Zsb3dEaWFsb2csXG59IGZyb20gXCIuLi8uLi8uLi9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLWNvbmZpZy1mbG93XCI7XG5pbXBvcnQgeyBsb2NhbGl6ZUNvbmZpZ0Zsb3dUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFDb25maWdNYW5hZ2VyRGFzaGJvYXJkIGV4dGVuZHMgTG9jYWxpemVNaXhpbihcbiAgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpXG4pIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41N2VtO1xuICAgICAgICB9XG4gICAgICAgIC5jb25maWctZW50cnktcm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1zdGF0ZS1pY29uIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbmZpZ3VyZWQgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWZhYiB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZmFiW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1mYWJbcnRsXSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWZhYltydGxdW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjRweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGhhc3Mtc3VicGFnZVxuICAgICAgICBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNhcHRpb24nKV1dXCJcbiAgICAgID5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3Byb2dyZXNzLmxlbmd0aF1dXCI+XG4gICAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiXG4gICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmRpc2NvdmVyZWQnKV1dPC9zcGFuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1twcm9ncmVzc11dXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZy1lbnRyeS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgIFtbX2NvbXB1dGVBY3RpdmVGbG93VGl0bGUobG9jYWxpemUsIGl0ZW0pXV1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfY29udGludWVGbG93XCJcbiAgICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlndXJlJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGNsYXNzPVwiY29uZmlndXJlZFwiPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIlxuICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlndXJlZCcpXV08L3NwYW5cbiAgICAgICAgICA+XG4gICAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWVudHJpZXMubGVuZ3RoXV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZy1lbnRyeS1yb3dcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICAgICAgICAgICAgPGRpdj5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLm5vbmUnKV1dPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbZW50cmllc11dXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29uZmlnL2ludGVncmF0aW9ucy9bW2l0ZW0uZW50cnlfaWRdXVwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICBbW19jb21wdXRlSW50ZWdyYXRpb25UaXRsZShsb2NhbGl6ZSwgaXRlbS5kb21haW4pXV06XG4gICAgICAgICAgICAgICAgICAgICAgW1tpdGVtLnRpdGxlXV1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPVwiW1tfY29tcHV0ZUNvbmZpZ0VudHJ5RW50aXRpZXMoaGFzcywgaXRlbSwgZW50aXRpZXMpXV1cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aGEtc3RhdGUtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbaXRlbV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9oYW5kbGVNb3JlSW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2hhLXN0YXRlLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci10b29sdGlwIHBvc2l0aW9uPVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+W1tfY29tcHV0ZVN0YXRlTmFtZShpdGVtKV1dPC9wYXBlci10b29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgPGhhLWljb24tbmV4dD48L2hhLWljb24tbmV4dD5cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDxwYXBlci1mYWJcbiAgICAgICAgICBpY29uPVwiaGFzczpwbHVzXCJcbiAgICAgICAgICB0aXRsZT1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMubmV3JyldXVwiXG4gICAgICAgICAgb24tY2xpY2s9XCJfY3JlYXRlRmxvd1wiXG4gICAgICAgICAgaXMtd2lkZSQ9XCJbW2lzV2lkZV1dXCJcbiAgICAgICAgICBydGwkPVwiW1tydGxdXVwiXG4gICAgICAgID48L3BhcGVyLWZhYj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcblxuICAgICAgLyoqXG4gICAgICAgKiBFeGlzdGluZyBlbnRyaWVzLlxuICAgICAgICovXG4gICAgICBlbnRyaWVzOiBBcnJheSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFbnRpdHkgUmVnaXN0cnkgZW50cmllcy5cbiAgICAgICAqL1xuICAgICAgZW50aXRpZXM6IEFycmF5LFxuXG4gICAgICAvKipcbiAgICAgICAqIEN1cnJlbnQgZmxvd3MgdGhhdCBhcmUgaW4gcHJvZ3Jlc3MgYW5kIGhhdmUgbm90IGJlZW4gc3RhcnRlZCBieSBhIHVzZXIuXG4gICAgICAgKiBGb3IgZXhhbXBsZSwgY2FuIGJlIGRpc2NvdmVyZWQgZGV2aWNlcyB0aGF0IHJlcXVpcmUgbW9yZSBjb25maWcuXG4gICAgICAgKi9cbiAgICAgIHByb2dyZXNzOiBBcnJheSxcblxuICAgICAgaGFuZGxlcnM6IEFycmF5LFxuXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTChoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBsb2FkQ29uZmlnRmxvd0RpYWxvZygpO1xuICB9XG5cbiAgX2NyZWF0ZUZsb3coKSB7XG4gICAgc2hvd0NvbmZpZ0Zsb3dEaWFsb2codGhpcywge1xuICAgICAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6ICgpID0+IHRoaXMuZmlyZShcImhhc3MtcmVsb2FkLWVudHJpZXNcIiksXG4gICAgfSk7XG4gIH1cblxuICBfY29udGludWVGbG93KGV2KSB7XG4gICAgc2hvd0NvbmZpZ0Zsb3dEaWFsb2codGhpcywge1xuICAgICAgY29udGludWVGbG93SWQ6IGV2Lm1vZGVsLml0ZW0uZmxvd19pZCxcbiAgICAgIGRpYWxvZ0Nsb3NlZENhbGxiYWNrOiAoKSA9PiB0aGlzLmZpcmUoXCJoYXNzLXJlbG9hZC1lbnRyaWVzXCIpLFxuICAgIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVJbnRlZ3JhdGlvblRpdGxlKGxvY2FsaXplLCBpbnRlZ3JhdGlvbikge1xuICAgIHJldHVybiBsb2NhbGl6ZShgY29tcG9uZW50LiR7aW50ZWdyYXRpb259LmNvbmZpZy50aXRsZWApO1xuICB9XG5cbiAgX2NvbXB1dGVBY3RpdmVGbG93VGl0bGUobG9jYWxpemUsIGZsb3cpIHtcbiAgICByZXR1cm4gbG9jYWxpemVDb25maWdGbG93VGl0bGUobG9jYWxpemUsIGZsb3cpO1xuICB9XG5cbiAgX2NvbXB1dGVDb25maWdFbnRyeUVudGl0aWVzKGhhc3MsIGNvbmZpZ0VudHJ5LCBlbnRpdGllcykge1xuICAgIGlmICghZW50aXRpZXMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGVzID0gW107XG4gICAgZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVudGl0eS5jb25maWdfZW50cnlfaWQgPT09IGNvbmZpZ0VudHJ5LmVudHJ5X2lkICYmXG4gICAgICAgIGVudGl0eS5lbnRpdHlfaWQgaW4gaGFzcy5zdGF0ZXNcbiAgICAgICkge1xuICAgICAgICBzdGF0ZXMucHVzaChoYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0YXRlcztcbiAgfVxuXG4gIF9jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgX2hhbmRsZU1vcmVJbmZvKGV2KSB7XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogZXYubW9kZWwuaXRlbS5lbnRpdHlfaWQgfSk7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLWVudHJpZXMtZGFzaGJvYXJkXCIsIEhhQ29uZmlnTWFuYWdlckRhc2hib2FyZCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1iYWRnZVwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcblxuaW1wb3J0IFwiLi9oYS1kZXZpY2UtY2FyZFwiO1xuaW1wb3J0IFwiLi9oYS1jZS1lbnRpdGllcy1jYXJkXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgTmF2aWdhdGVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL25hdmlnYXRlLW1peGluXCI7XG5cbmNsYXNzIEhhQ29uZmlnRW50cnlQYWdlIGV4dGVuZHMgTmF2aWdhdGVNaXhpbihcbiAgRXZlbnRzTWl4aW4oTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkpXG4pIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXg6IDEgMCAzMDBweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIltbY29uZmlnRW50cnkudGl0bGVdXVwiPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgIG9uLWNsaWNrPVwiX3JlbW92ZUVudHJ5XCJcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICBpZj1cIltbX2NvbXB1dGVJc0VtcHR5KF9jb25maWdFbnRyeURldmljZXMsIF9ub0RldmljZUVudGl0aWVzKV1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkubm9fZGV2aWNlcycpXV1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX2NvbmZpZ0VudHJ5RGV2aWNlc11dXCIgYXM9XCJkZXZpY2VcIj5cbiAgICAgICAgICAgIDxoYS1kZXZpY2UtY2FyZFxuICAgICAgICAgICAgICBjbGFzcz1cImNhcmRcIlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBhcmVhcz1cIltbYXJlYXNdXVwiXG4gICAgICAgICAgICAgIGRldmljZXM9XCJbW2RldmljZXNdXVwiXG4gICAgICAgICAgICAgIGRldmljZT1cIltbZGV2aWNlXV1cIlxuICAgICAgICAgICAgICBlbnRpdGllcz1cIltbZW50aXRpZXNdXVwiXG4gICAgICAgICAgICAgIG5hcnJvdz1cIltbbmFycm93XV1cIlxuICAgICAgICAgICAgPjwvaGEtZGV2aWNlLWNhcmQ+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX25vRGV2aWNlRW50aXRpZXMubGVuZ3RoXV1cIj5cbiAgICAgICAgICAgIDxoYS1jZS1lbnRpdGllcy1jYXJkXG4gICAgICAgICAgICAgIGNsYXNzPVwiY2FyZFwiXG4gICAgICAgICAgICAgIGhlYWRpbmc9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5ub19kZXZpY2UnKV1dXCJcbiAgICAgICAgICAgICAgZW50aXRpZXM9XCJbW19ub0RldmljZUVudGl0aWVzXV1cIlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBuYXJyb3c9XCJbW25hcnJvd11dXCJcbiAgICAgICAgICAgID48L2hhLWNlLWVudGl0aWVzLWNhcmQ+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG4gICAgICBjb25maWdFbnRyeToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgX2NvbmZpZ0VudHJ5RGV2aWNlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVDb25maWdFbnRyeURldmljZXMoY29uZmlnRW50cnksIGRldmljZXMpXCIsXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEFsbCBlbnRpdHkgcmVnaXN0cnkgZW50cmllcyBmb3IgdGhpcyBjb25maWcgZW50cnkgdGhhdCBkbyBub3QgYmVsb25nXG4gICAgICAgKiB0byBhIGRldmljZS5cbiAgICAgICAqL1xuICAgICAgX25vRGV2aWNlRW50aXRpZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlTm9EZXZpY2VFbnRpdGllcyhjb25maWdFbnRyeSwgZW50aXRpZXMpXCIsXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEFyZWEgcmVnaXN0cnkgZW50cmllc1xuICAgICAgICovXG4gICAgICBhcmVhczogQXJyYXksXG5cbiAgICAgIC8qKlxuICAgICAgICogRGV2aWNlIHJlZ2lzdHJ5IGVudHJpZXNcbiAgICAgICAqL1xuICAgICAgZGV2aWNlczogQXJyYXksXG5cbiAgICAgIC8qKlxuICAgICAgICogRXhpc3RpbmcgZW50cmllcy5cbiAgICAgICAqL1xuICAgICAgZW50cmllczogQXJyYXksXG5cbiAgICAgIC8qKlxuICAgICAgICogRW50aXR5IFJlZ2lzdHJ5IGVudHJpZXMuXG4gICAgICAgKi9cbiAgICAgIGVudGl0aWVzOiBBcnJheSxcbiAgICB9O1xuICB9XG5cbiAgX2NvbXB1dGVDb25maWdFbnRyeURldmljZXMoY29uZmlnRW50cnksIGRldmljZXMpIHtcbiAgICBpZiAoIWRldmljZXMpIHJldHVybiBbXTtcbiAgICByZXR1cm4gZGV2aWNlc1xuICAgICAgLmZpbHRlcigoZGV2aWNlKSA9PiBkZXZpY2UuY29uZmlnX2VudHJpZXMuaW5jbHVkZXMoY29uZmlnRW50cnkuZW50cnlfaWQpKVxuICAgICAgLnNvcnQoXG4gICAgICAgIChkZXYxLCBkZXYyKSA9PlxuICAgICAgICAgICEhZGV2MS52aWFfZGV2aWNlX2lkIC0gISFkZXYyLnZpYV9kZXZpY2VfaWQgfHxcbiAgICAgICAgICBjb21wYXJlKGRldjEubmFtZSwgZGV2Mi5uYW1lKVxuICAgICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlTm9EZXZpY2VFbnRpdGllcyhjb25maWdFbnRyeSwgZW50aXRpZXMpIHtcbiAgICBpZiAoIWVudGl0aWVzKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGVudGl0aWVzLmZpbHRlcihcbiAgICAgIChlbnQpID0+ICFlbnQuZGV2aWNlX2lkICYmIGVudC5jb25maWdfZW50cnlfaWQgPT09IGNvbmZpZ0VudHJ5LmVudHJ5X2lkXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlSXNFbXB0eShjb25maWdFbnRyeURldmljZXMsIG5vRGV2aWNlRW50aXRpZXMpIHtcbiAgICByZXR1cm4gY29uZmlnRW50cnlEZXZpY2VzLmxlbmd0aCA9PT0gMCAmJiBub0RldmljZUVudGl0aWVzLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIF9yZW1vdmVFbnRyeSgpIHtcbiAgICBpZiAoXG4gICAgICAhY29uZmlybShcbiAgICAgICAgdGhpcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5LmRlbGV0ZV9jb25maXJtXCJcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgICAgIHJldHVybjtcblxuICAgIGNvbnN0IGVudHJ5SWQgPSB0aGlzLmNvbmZpZ0VudHJ5LmVudHJ5X2lkO1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcImRlbGV0ZVwiLCBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL2VudHJ5LyR7ZW50cnlJZH1gKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLmZpcmUoXCJoYXNzLXJlbG9hZC1lbnRyaWVzXCIpO1xuICAgICAgICBpZiAocmVzdWx0LnJlcXVpcmVfcmVzdGFydCkge1xuICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgdGhpcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5yZXN0YXJ0X2NvbmZpcm1cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYXZpZ2F0ZShcIi9jb25maWcvaW50ZWdyYXRpb25zL2Rhc2hib2FyZFwiLCB0cnVlKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1lbnRyeS1wYWdlXCIsIEhhQ29uZmlnRW50cnlQYWdlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1yb3V0ZS9hcHAtcm91dGVcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IHRpbWVPdXQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmNcIjtcblxuaW1wb3J0IFwiLi9oYS1jb25maWctZW50cmllcy1kYXNoYm9hcmRcIjtcbmltcG9ydCBcIi4vaGEtY29uZmlnLWVudHJ5LXBhZ2VcIjtcbmltcG9ydCBOYXZpZ2F0ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbmF2aWdhdGUtbWl4aW5cIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVBcmVhUmVnaXN0cnkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9hcmVhX3JlZ2lzdHJ5XCI7XG5cbmNsYXNzIEhhQ29uZmlnSW50ZWdyYXRpb25zIGV4dGVuZHMgTmF2aWdhdGVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGFwcC1yb3V0ZVxuICAgICAgICByb3V0ZT1cIltbcm91dGVdXVwiXG4gICAgICAgIHBhdHRlcm49XCIvOnBhZ2VcIlxuICAgICAgICBkYXRhPVwie3tfcm91dGVEYXRhfX1cIlxuICAgICAgICB0YWlsPVwie3tfcm91dGVUYWlsfX1cIlxuICAgICAgPjwvYXBwLXJvdXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2NvbmZpZ0VudHJ5XV1cIj5cbiAgICAgICAgPGhhLWNvbmZpZy1lbnRyeS1wYWdlXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBjb25maWctZW50cnk9XCJbW19jb25maWdFbnRyeV1dXCJcbiAgICAgICAgICBhcmVhcz1cIltbX2FyZWFzXV1cIlxuICAgICAgICAgIGVudHJpZXM9XCJbW19lbnRyaWVzXV1cIlxuICAgICAgICAgIGVudGl0aWVzPVwiW1tfZW50aXRpZXNdXVwiXG4gICAgICAgICAgZGV2aWNlcz1cIltbX2RldmljZXNdXVwiXG4gICAgICAgICAgbmFycm93PVwiW1tuYXJyb3ddXVwiXG4gICAgICAgID48L2hhLWNvbmZpZy1lbnRyeS1wYWdlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2NvbmZpZ0VudHJ5XV1cIj5cbiAgICAgICAgPGhhLWNvbmZpZy1lbnRyaWVzLWRhc2hib2FyZFxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgZW50cmllcz1cIltbX2VudHJpZXNdXVwiXG4gICAgICAgICAgZW50aXRpZXM9XCJbW19lbnRpdGllc11dXCJcbiAgICAgICAgICBoYW5kbGVycz1cIltbX2hhbmRsZXJzXV1cIlxuICAgICAgICAgIHByb2dyZXNzPVwiW1tfcHJvZ3Jlc3NdXVwiXG4gICAgICAgID48L2hhLWNvbmZpZy1lbnRyaWVzLWRhc2hib2FyZD5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuICAgICAgbmFycm93OiBCb29sZWFuLFxuICAgICAgcm91dGU6IE9iamVjdCxcblxuICAgICAgX2NvbmZpZ0VudHJ5OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVDb25maWdFbnRyeShfcm91dGVEYXRhLCBfZW50cmllcylcIixcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRXhpc3RpbmcgZW50cmllcy5cbiAgICAgICAqL1xuICAgICAgX2VudHJpZXM6IEFycmF5LFxuXG4gICAgICAvKipcbiAgICAgICAqIEVudGl0eSBSZWdpc3RyeSBlbnRyaWVzLlxuICAgICAgICovXG4gICAgICBfZW50aXRpZXM6IEFycmF5LFxuXG4gICAgICAvKipcbiAgICAgICAqIERldmljZSBSZWdpc3RyeSBlbnRyaWVzLlxuICAgICAgICovXG4gICAgICBfZGV2aWNlczogQXJyYXksXG5cbiAgICAgIC8qKlxuICAgICAgICogQXJlYSBSZWdpc3RyeSBlbnRyaWVzLlxuICAgICAgICovXG4gICAgICBfYXJlYXM6IEFycmF5LFxuXG4gICAgICAvKipcbiAgICAgICAqIEN1cnJlbnQgZmxvd3MgdGhhdCBhcmUgaW4gcHJvZ3Jlc3MgYW5kIGhhdmUgbm90IGJlZW4gc3RhcnRlZCBieSBhIHVzZXIuXG4gICAgICAgKiBGb3IgZXhhbXBsZSwgY2FuIGJlIGRpc2NvdmVyZWQgZGV2aWNlcyB0aGF0IHJlcXVpcmUgbW9yZSBjb25maWcuXG4gICAgICAgKi9cbiAgICAgIF9wcm9ncmVzczogQXJyYXksXG5cbiAgICAgIF9oYW5kbGVyczogQXJyYXksXG5cbiAgICAgIF9yb3V0ZURhdGE6IE9iamVjdCxcbiAgICAgIF9yb3V0ZVRhaWw6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNzLXJlbG9hZC1lbnRyaWVzXCIsICgpID0+IHRoaXMuX2xvYWREYXRhKCkpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9sb2FkRGF0YSgpO1xuICAgIHRoaXMuX3Vuc3ViQXJlYXMgPSBzdWJzY3JpYmVBcmVhUmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24sIChhcmVhcykgPT4ge1xuICAgICAgdGhpcy5fYXJlYXMgPSBhcmVhcztcbiAgICB9KTtcblxuICAgIHRoaXMuaGFzcy5jb25uZWN0aW9uXG4gICAgICAuc3Vic2NyaWJlRXZlbnRzKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgICAgIHRoaXMuX2RlYm91bmNlcixcbiAgICAgICAgICB0aW1lT3V0LmFmdGVyKDUwMCksXG4gICAgICAgICAgKCkgPT4gdGhpcy5fbG9hZERhdGEoKVxuICAgICAgICApO1xuICAgICAgfSwgXCJjb25maWdfZW50cnlfZGlzY292ZXJlZFwiKVxuICAgICAgLnRoZW4oKHVuc3ViKSA9PiB7XG4gICAgICAgIHRoaXMuX3Vuc3ViRXZlbnRzID0gdW5zdWI7XG4gICAgICB9KTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3Vuc3ViRXZlbnRzKSB0aGlzLl91bnN1YkV2ZW50cygpO1xuICAgIGlmICh0aGlzLl91bnN1YkFyZWFzKSB0aGlzLl91bnN1YkFyZWFzKCk7XG4gIH1cblxuICBfbG9hZERhdGEoKSB7XG4gICAgdGhpcy5oYXNzLmNhbGxBcGkoXCJnZXRcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZW50cnlcIikudGhlbigoZW50cmllcykgPT4ge1xuICAgICAgdGhpcy5fZW50cmllcyA9IGVudHJpZXMuc29ydCgoY29uZjEsIGNvbmYyKSA9PlxuICAgICAgICBjb21wYXJlKGNvbmYxLnRpdGxlLCBjb25mMi50aXRsZSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmhhc3MuY2FsbEFwaShcImdldFwiLCBcImNvbmZpZy9jb25maWdfZW50cmllcy9mbG93XCIpLnRoZW4oKHByb2dyZXNzKSA9PiB7XG4gICAgICB0aGlzLl9wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgIH0pO1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcImdldFwiLCBcImNvbmZpZy9jb25maWdfZW50cmllcy9mbG93X2hhbmRsZXJzXCIpXG4gICAgICAudGhlbigoaGFuZGxlcnMpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbFdTKHsgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2xpc3RcIiB9KVxuICAgICAgLnRoZW4oKGVudGl0aWVzKSA9PiB7XG4gICAgICAgIHRoaXMuX2VudGl0aWVzID0gZW50aXRpZXM7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxXUyh7IHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS9saXN0XCIgfSlcbiAgICAgIC50aGVuKChkZXZpY2VzKSA9PiB7XG4gICAgICAgIHRoaXMuX2RldmljZXMgPSBkZXZpY2VzO1xuICAgICAgfSk7XG4gIH1cblxuICBfY29tcHV0ZUNvbmZpZ0VudHJ5KHJvdXRlRGF0YSwgZW50cmllcykge1xuICAgIHJldHVybiAoXG4gICAgICAhIWVudHJpZXMgJiZcbiAgICAgICEhcm91dGVEYXRhICYmXG4gICAgICBlbnRyaWVzLmZpbmQoKGVudCkgPT4gZW50LmVudHJ5X2lkID09PSByb3V0ZURhdGEucGFnZSlcbiAgICApO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1pbnRlZ3JhdGlvbnNcIiwgSGFDb25maWdJbnRlZ3JhdGlvbnMpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQge1xuICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSxcbiAgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVBcmVhUmVnaXN0cnkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9hcmVhX3JlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7XG4gIHNob3dEZXZpY2VSZWdpc3RyeURldGFpbERpYWxvZyxcbiAgbG9hZERldmljZVJlZ2lzdHJ5RGV0YWlsRGlhbG9nLFxufSBmcm9tIFwiLi9zaG93LWRpYWxvZy1kZXZpY2UtcmVnaXN0cnktZGV0YWlsXCI7XG5cbmZ1bmN0aW9uIGNvbXB1dGVFbnRpdHlOYW1lKGhhc3MsIGVudGl0eSkge1xuICBpZiAoZW50aXR5Lm5hbWUpIHJldHVybiBlbnRpdHkubmFtZTtcbiAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXTtcbiAgcmV0dXJuIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiBudWxsO1xufVxuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYURldmljZUNhcmQgZXh0ZW5kcyBFdmVudHNNaXhpbihMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCg6bm90KFtuYXJyb3ddKSkgLmRldmljZS1lbnRpdGllcyB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMjI1cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgZmxleDogMSAwIDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtaGVhZGVyIC5uYW1lIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG4gICAgICAgIC5kZXZpY2Uge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRldmljZSAubmFtZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLmRldmljZSAubW9kZWwsXG4gICAgICAgIC5kZXZpY2UgLm1hbnVmLFxuICAgICAgICAuZGV2aWNlIC5hcmVhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5hcmVhIC5leHRyYS1pbmZvIC5uYW1lIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAuZXh0cmEtaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgfVxuICAgICAgICAubWFudWYsXG4gICAgICAgIC5lbnRpdHktaWQsXG4gICAgICAgIC5hcmVhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+W1tfZGV2aWNlTmFtZShkZXZpY2UpXV08L2Rpdj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249XCJoYXNzOnNldHRpbmdzXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwiX2dvdG9TZXR0aW5nc1wiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RlbFwiPltbZGV2aWNlLm1vZGVsXV08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYW51ZlwiPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5tYW51ZicsXG4gICAgICAgICAgICAgICdtYW51ZmFjdHVyZXInLCBkZXZpY2UubWFudWZhY3R1cmVyKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tkZXZpY2UuYXJlYV9pZF1dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcmVhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuZGV2aWNlX3JlZ2lzdHJ5LmFyZWEnKV1dXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj57e19jb21wdXRlQXJlYShhcmVhcywgZGV2aWNlKX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2RldmljZS52aWFfZGV2aWNlX2lkXV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHRyYS1pbmZvXCI+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5LnZpYScpXV1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJodWJcIlxuICAgICAgICAgICAgICAgID5bW19jb21wdXRlRGV2aWNlTmFtZShkZXZpY2VzLCBkZXZpY2UudmlhX2RldmljZV9pZCldXTwvc3BhblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tkZXZpY2Uuc3dfdmVyc2lvbl1dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtaW5mb1wiPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5maXJtd2FyZScsXG4gICAgICAgICAgICAgICd2ZXJzaW9uJywgZGV2aWNlLnN3X3ZlcnNpb24pXV1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtZW50aXRpZXNcIj5cbiAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgIGlzPVwiZG9tLXJlcGVhdFwiXG4gICAgICAgICAgICBpdGVtcz1cIltbX2NvbXB1dGVEZXZpY2VFbnRpdGllcyhoYXNzLCBkZXZpY2UsIGVudGl0aWVzKV1dXCJcbiAgICAgICAgICAgIGFzPVwiZW50aXR5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1pdGVtIG9uLWNsaWNrPVwiX29wZW5Nb3JlSW5mb1wiPlxuICAgICAgICAgICAgICA8c3RhdGUtYmFkZ2VcbiAgICAgICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW19jb21wdXRlU3RhdGVPYmooZW50aXR5LCBoYXNzKV1dXCJcbiAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgPjwvc3RhdGUtYmFkZ2U+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5bW19jb21wdXRlRW50aXR5TmFtZShlbnRpdHksIGhhc3MpXV08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5IGVudGl0eS1pZFwiPltbZW50aXR5LmVudGl0eV9pZF1dPC9kaXY+XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGV2aWNlOiBPYmplY3QsXG4gICAgICBkZXZpY2VzOiBBcnJheSxcbiAgICAgIGFyZWFzOiBBcnJheSxcbiAgICAgIGVudGl0aWVzOiBBcnJheSxcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIG5hcnJvdzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB9LFxuICAgICAgX2NoaWxkRGV2aWNlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVDaGlsZERldmljZXMoZGV2aWNlLCBkZXZpY2VzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGxvYWREZXZpY2VSZWdpc3RyeURldGFpbERpYWxvZygpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl91bnN1YkFyZWFzID0gc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5KHRoaXMuaGFzcy5jb25uZWN0aW9uLCAoYXJlYXMpID0+IHtcbiAgICAgIHRoaXMuX2FyZWFzID0gYXJlYXM7XG4gICAgfSk7XG4gICAgdGhpcy5fdW5zdWJEZXZpY2VzID0gc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnkoXG4gICAgICB0aGlzLmhhc3MuY29ubmVjdGlvbixcbiAgICAgIChkZXZpY2VzKSA9PiB7XG4gICAgICAgIHRoaXMuZGV2aWNlcyA9IGRldmljZXM7XG4gICAgICAgIHRoaXMuZGV2aWNlID0gZGV2aWNlcy5maW5kKChkZXZpY2UpID0+IGRldmljZS5pZCA9PT0gdGhpcy5kZXZpY2UuaWQpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl91bnN1YkFyZWFzKSB7XG4gICAgICB0aGlzLl91bnN1YkFyZWFzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl91bnN1YkRldmljZXMpIHtcbiAgICAgIHRoaXMuX3Vuc3ViRGV2aWNlcygpO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wdXRlQXJlYShhcmVhcywgZGV2aWNlKSB7XG4gICAgaWYgKCFhcmVhcyB8fCAhZGV2aWNlIHx8ICFkZXZpY2UuYXJlYV9pZCkge1xuICAgICAgcmV0dXJuIFwiTm8gQXJlYVwiO1xuICAgIH1cbiAgICAvLyArMSBiZWNhdXNlIG9mIFwiTm8gQXJlYVwiIGVudHJ5XG4gICAgcmV0dXJuIGFyZWFzLmZpbmQoKGFyZWEpID0+IGFyZWEuYXJlYV9pZCA9PT0gZGV2aWNlLmFyZWFfaWQpLm5hbWU7XG4gIH1cblxuICBfY29tcHV0ZUNoaWxkRGV2aWNlcyhkZXZpY2UsIGRldmljZXMpIHtcbiAgICByZXR1cm4gZGV2aWNlc1xuICAgICAgLmZpbHRlcigoZGV2KSA9PiBkZXYudmlhX2RldmljZV9pZCA9PT0gZGV2aWNlLmlkKVxuICAgICAgLnNvcnQoKGRldjEsIGRldjIpID0+IGNvbXBhcmUoZGV2MS5uYW1lLCBkZXYyLm5hbWUpKTtcbiAgfVxuXG4gIF9jb21wdXRlRGV2aWNlRW50aXRpZXMoaGFzcywgZGV2aWNlLCBlbnRpdGllcykge1xuICAgIHJldHVybiBlbnRpdGllc1xuICAgICAgLmZpbHRlcigoZW50aXR5KSA9PiBlbnRpdHkuZGV2aWNlX2lkID09PSBkZXZpY2UuaWQpXG4gICAgICAuc29ydCgoZW50MSwgZW50MikgPT5cbiAgICAgICAgY29tcGFyZShcbiAgICAgICAgICBjb21wdXRlRW50aXR5TmFtZShoYXNzLCBlbnQxKSB8fCBgenp6JHtlbnQxLmVudGl0eV9pZH1gLFxuICAgICAgICAgIGNvbXB1dGVFbnRpdHlOYW1lKGhhc3MsIGVudDIpIHx8IGB6enoke2VudDIuZW50aXR5X2lkfWBcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlU3RhdGVPYmooZW50aXR5LCBoYXNzKSB7XG4gICAgcmV0dXJuIGhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdO1xuICB9XG5cbiAgX2NvbXB1dGVFbnRpdHlOYW1lKGVudGl0eSwgaGFzcykge1xuICAgIHJldHVybiAoXG4gICAgICBjb21wdXRlRW50aXR5TmFtZShoYXNzLCBlbnRpdHkpIHx8XG4gICAgICBgKCR7dGhpcy5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5lbnRpdHlfdW5hdmFpbGFibGVcIlxuICAgICAgKX0pYFxuICAgICk7XG4gIH1cblxuICBfZGV2aWNlTmFtZShkZXZpY2UpIHtcbiAgICByZXR1cm4gZGV2aWNlLm5hbWVfYnlfdXNlciB8fCBkZXZpY2UubmFtZTtcbiAgfVxuXG4gIF9jb21wdXRlRGV2aWNlTmFtZShkZXZpY2VzLCBkZXZpY2VJZCkge1xuICAgIGNvbnN0IGRldmljZSA9IGRldmljZXMuZmluZCgoZGV2KSA9PiBkZXYuaWQgPT09IGRldmljZUlkKTtcbiAgICByZXR1cm4gZGV2aWNlXG4gICAgICA/IHRoaXMuX2RldmljZU5hbWUoZGV2aWNlKVxuICAgICAgOiBgKCR7dGhpcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5LmRldmljZV91bmF2YWlsYWJsZVwiXG4gICAgICAgICl9KWA7XG4gIH1cblxuICBfZ290b1NldHRpbmdzKCkge1xuICAgIGNvbnN0IGRldmljZSA9IHRoaXMuZGV2aWNlO1xuICAgIHNob3dEZXZpY2VSZWdpc3RyeURldGFpbERpYWxvZyh0aGlzLCB7XG4gICAgICBkZXZpY2UsXG4gICAgICB1cGRhdGVFbnRyeTogYXN5bmMgKHVwZGF0ZXMpID0+IHtcbiAgICAgICAgYXdhaXQgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MsIGRldmljZS5pZCwgdXBkYXRlcyk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgX29wZW5Nb3JlSW5mbyhldikge1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IGV2Lm1vZGVsLmVudGl0eS5lbnRpdHlfaWQgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtZGV2aWNlLWNhcmRcIiwgSGFEZXZpY2VDYXJkKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIERldmljZVJlZ2lzdHJ5RW50cnksXG4gIERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kZXZpY2VfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeURldGFpbERpYWxvZ1BhcmFtcyB7XG4gIGRldmljZTogRGV2aWNlUmVnaXN0cnlFbnRyeTtcbiAgdXBkYXRlRW50cnk6IChcbiAgICB1cGRhdGVzOiBQYXJ0aWFsPERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuICApID0+IFByb21pc2U8dW5rbm93bj47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRGV2aWNlUmVnaXN0cnlEZXRhaWxEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJkZXZpY2UtcmVnaXN0cnktZGV0YWlsLWRpYWxvZ1wiICovIFwiLi9kaWFsb2ctZGV2aWNlLXJlZ2lzdHJ5LWRldGFpbFwiKTtcblxuZXhwb3J0IGNvbnN0IHNob3dEZXZpY2VSZWdpc3RyeURldGFpbERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRldmljZVJlZ2lzdHJ5RGV0YWlsUGFyYW1zOiBEZXZpY2VSZWdpc3RyeURldGFpbERpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWRldmljZS1yZWdpc3RyeS1kZXRhaWxcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWREZXZpY2VSZWdpc3RyeURldGFpbERpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXM6IGRldmljZVJlZ2lzdHJ5RGV0YWlsUGFyYW1zLFxuICB9KTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQUNBO0FBbUJBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBVkE7QUFrQkE7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBV0E7QUFLQTtBQURBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFHQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBVUE7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBa0ZBO0FBRUE7QUFEQTtBQUlBO0FBR0E7QUFXQTtBQUdBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBO0FBWUE7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9KQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW9CQTtBQU1BO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBZ0JBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBS0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFZQTs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQSwrL0NBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBMUZBO0FBQ0E7QUEyRkE7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBdkRBO0FBQ0E7QUF3REE7Ozs7Ozs7Ozs7OztBQzFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBOzs7OztBQUlBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBdEJBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoTkE7QUFDQTtBQWlOQTs7Ozs7Ozs7Ozs7O0FDblBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQXpDQTtBQTJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF6SkE7QUFDQTtBQTBKQTs7Ozs7Ozs7Ozs7O0FDM0tBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUF4Q0E7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBbEpBO0FBQ0E7QUFtSkE7Ozs7Ozs7Ozs7OztBQ2hLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBN05BO0FBQ0E7QUE4TkE7Ozs7Ozs7Ozs7OztBQ25RQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUEsMGJBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
