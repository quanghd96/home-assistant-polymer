(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["zha-add-devices-page~zha-configuration-page"],
  {
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

    /***/ "./src/data/zha.ts":
      /*!*************************!*\
  !*** ./src/data/zha.ts ***!
  \*************************/
      /*! exports provided: reconfigureNode, fetchAttributesForCluster, fetchDevices, fetchBindableDevices, bindDevices, unbindDevices, readAttributeValue, fetchCommandsForCluster, fetchClustersForZhaNode */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "reconfigureNode",
          function() {
            return reconfigureNode;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchAttributesForCluster",
          function() {
            return fetchAttributesForCluster;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchDevices",
          function() {
            return fetchDevices;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchBindableDevices",
          function() {
            return fetchBindableDevices;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "bindDevices",
          function() {
            return bindDevices;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "unbindDevices",
          function() {
            return unbindDevices;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "readAttributeValue",
          function() {
            return readAttributeValue;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchCommandsForCluster",
          function() {
            return fetchCommandsForCluster;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchClustersForZhaNode",
          function() {
            return fetchClustersForZhaNode;
          }
        );
        var reconfigureNode = function reconfigureNode(hass, ieeeAddress) {
          return hass.callWS({
            type: "zha/devices/reconfigure",
            ieee: ieeeAddress,
          });
        };
        var fetchAttributesForCluster = function fetchAttributesForCluster(
          hass,
          ieeeAddress,
          endpointId,
          clusterId,
          clusterType
        ) {
          return hass.callWS({
            type: "zha/devices/clusters/attributes",
            ieee: ieeeAddress,
            endpoint_id: endpointId,
            cluster_id: clusterId,
            cluster_type: clusterType,
          });
        };
        var fetchDevices = function fetchDevices(hass) {
          return hass.callWS({
            type: "zha/devices",
          });
        };
        var fetchBindableDevices = function fetchBindableDevices(
          hass,
          ieeeAddress
        ) {
          return hass.callWS({
            type: "zha/devices/bindable",
            ieee: ieeeAddress,
          });
        };
        var bindDevices = function bindDevices(hass, sourceIEEE, targetIEEE) {
          return hass.callWS({
            type: "zha/devices/bind",
            source_ieee: sourceIEEE,
            target_ieee: targetIEEE,
          });
        };
        var unbindDevices = function unbindDevices(
          hass,
          sourceIEEE,
          targetIEEE
        ) {
          return hass.callWS({
            type: "zha/devices/unbind",
            source_ieee: sourceIEEE,
            target_ieee: targetIEEE,
          });
        };
        var readAttributeValue = function readAttributeValue(hass, data) {
          return hass.callWS(
            Object.assign({}, data, {
              type: "zha/devices/clusters/attributes/value",
            })
          );
        };
        var fetchCommandsForCluster = function fetchCommandsForCluster(
          hass,
          ieeeAddress,
          endpointId,
          clusterId,
          clusterType
        ) {
          return hass.callWS({
            type: "zha/devices/clusters/commands",
            ieee: ieeeAddress,
            endpoint_id: endpointId,
            cluster_id: clusterId,
            cluster_type: clusterType,
          });
        };
        var fetchClustersForZhaNode = function fetchClustersForZhaNode(
          hass,
          ieeeAddress
        ) {
          return hass.callWS({
            type: "zha/devices/clusters",
            ieee: ieeeAddress,
          });
        };

        /***/
      },

    /***/ "./src/panels/config/zha/functions.ts":
      /*!********************************************!*\
  !*** ./src/panels/config/zha/functions.ts ***!
  \********************************************/
      /*! exports provided: formatAsPaddedHex, sortZHADevices */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "formatAsPaddedHex",
          function() {
            return formatAsPaddedHex;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sortZHADevices",
          function() {
            return sortZHADevices;
          }
        );
        var formatAsPaddedHex = function formatAsPaddedHex(value) {
          var hex = value;

          if (typeof value === "string") {
            hex = parseInt(value, 16);
          }

          return "0x" + hex.toString(16).padStart(4, "0");
        };
        var sortZHADevices = function sortZHADevices(a, b) {
          var nameA = a.user_given_name ? a.user_given_name : a.name;
          var nameb = b.user_given_name ? b.user_given_name : b.name;
          return nameA.localeCompare(nameb);
        };

        /***/
      },

    /***/ "./src/panels/config/zha/zha-device-card.ts":
      /*!**************************************************!*\
  !*** ./src/panels/config/zha/zha-device-card.ts ***!
  \**************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js"
        );
        /* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../data/area_registry */ "./src/data/area_registry.ts"
        );
        /* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../data/device_registry */ "./src/data/device_registry.ts"
        );
        /* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../data/zha */ "./src/data/zha.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../common/navigate */ "./src/common/navigate.ts"
        );
        /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./functions */ "./src/panels/config/zha/functions.ts"
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

        function _templateObject12() {
          var data = _taggedTemplateLiteral([
            "\n        :host(:not([narrow])) .device-entities {\n          max-height: 225px;\n          overflow: auto;\n          display: flex;\n          flex-wrap: wrap;\n          padding: 4px;\n          justify-content: left;\n        }\n        ha-card {\n          flex: 1 0 100%;\n          padding-bottom: 10px;\n          min-width: 425px;\n        }\n        .device {\n          width: 30%;\n        }\n        .device .name {\n          font-weight: bold;\n        }\n        .device .manuf {\n          color: var(--secondary-text-color);\n        }\n        .extra-info {\n          margin-top: 8px;\n        }\n        .manuf,\n        .zha-info,\n        .entity-id {\n          color: var(--secondary-text-color);\n        }\n        .info {\n          margin-left: 16px;\n        }\n        dl dt {\n          padding-left: 12px;\n          float: left;\n          width: 100px;\n          text-align: left;\n        }\n        dt dd {\n          text-align: left;\n        }\n        paper-icon-item {\n          cursor: pointer;\n          padding-top: 4px;\n          padding-bottom: 4px;\n        }\n        .editable {\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n        .help-text {\n          color: grey;\n          padding: 16px;\n        }\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n        .node-picker {\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n      ",
          ]);

          _templateObject12 = function _templateObject12() {
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

        function _templateObject11() {
          var data = _taggedTemplateLiteral([
            '\n                              <ha-service-description\n                                .hass="',
            '"\n                                domain="zha"\n                                service="permit"\n                                class="help-text2"\n                              />\n                            ',
          ]);

          _templateObject11 = function _templateObject11() {
            return data;
          };

          return data;
        }

        function _templateObject10() {
          var data = _taggedTemplateLiteral([
            "\n                        <mwc-button @click=",
            ">\n                          Add Devices\n                        </mwc-button>\n                        ",
            "\n                      ",
          ]);

          _templateObject10 = function _templateObject10() {
            return data;
          };

          return data;
        }

        function _templateObject9() {
          var data = _taggedTemplateLiteral([
            '\n                        <div class="help-text">\n                          ',
            "\n                        </div>\n                      ",
          ]);

          _templateObject9 = function _templateObject9() {
            return data;
          };

          return data;
        }

        function _templateObject8() {
          var data = _taggedTemplateLiteral([
            '\n                        <div class="help-text">\n                          ',
            "\n                        </div>\n                      ",
          ]);

          _templateObject8 = function _templateObject8() {
            return data;
          };

          return data;
        }

        function _templateObject7() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="card-actions">\n                  <mwc-button @click="',
            '"\n                    >Reconfigure Device</mwc-button\n                  >\n                  ',
            '\n\n                  <ha-call-service-button\n                    .hass="',
            '"\n                    domain="zha"\n                    service="remove"\n                    .serviceData="',
            '"\n                    >Remove Device</ha-call-service-button\n                  >\n                  ',
            "\n                  ",
            "\n                </div>\n              ",
          ]);

          _templateObject7 = function _templateObject7() {
            return data;
          };

          return data;
        }

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            '\n                  <paper-item area="',
            '">',
            "</paper-item>\n                ",
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            '\n                      <paper-item-body>\n                        <div class="name">',
            '</div>\n                        <div class="secondary entity-id">\n                          ',
            "\n                        </div>\n                      </paper-item-body>\n                    ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n              <paper-icon-item\n                @click="',
            '"\n                .entity="',
            '"\n              >\n                <state-badge\n                  .stateObj="',
            '"\n                  slot="item-icon"\n                ></state-badge>\n                ',
            "\n              </paper-icon-item>\n            ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n                    <dt>Quirk:</dt>\n                    <dd class="zha-info">',
            "</dd>\n                  ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="info">\n                  <div class="model">',
            '</div>\n                  <div class="manuf">\n                    ',
            "\n                  </div>\n                </div>\n              ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-card header="',
            '">\n        ',
            '\n        <div class="card-content">\n          <dl>\n            <dt>IEEE:</dt>\n            <dd class="zha-info">',
            '</dd>\n            <dt>Nwk:</dt>\n            <dd class="zha-info">',
            '</dd>\n            <dt>LQI:</dt>\n            <dd class="zha-info">',
            '</dd>\n            <dt>RSSI:</dt>\n            <dd class="zha-info">',
            '</dd>\n            <dt>Last Seen:</dt>\n            <dd class="zha-info">',
            '</dd>\n            <dt>Power Source:</dt>\n            <dd class="zha-info">',
            "</dd>\n            ",
            '\n          </dl>\n        </div>\n\n        <div class="device-entities">\n          ',
            '\n        </div>\n        <div class="editable">\n          <paper-input\n            type="string"\n            @change="',
            '"\n            .value="',
            '"\n            placeholder="',
            '"\n          ></paper-input>\n        </div>\n        <div class="node-picker">\n          <paper-dropdown-menu\n            label="',
            '"\n            class="flex"\n          >\n            <paper-listbox\n              slot="dropdown-content"\n              .selected="',
            '"\n              @iron-select="',
            '"\n            >\n              <paper-item>\n                ',
            "\n              </paper-item>\n\n              ",
            "\n            </paper-listbox>\n          </paper-dropdown-menu>\n        </div>\n        ",
            "\n        </div>\n      </ha-card>\n    ",
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

        var ZHADeviceCard = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["customElement"])(
              "zha-device-card"
            ),
          ],
          function(_initialize, _LitElement) {
            var ZHADeviceCard =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(ZHADeviceCard, _LitElement2);

                function ZHADeviceCard() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, ZHADeviceCard);

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
                      ZHADeviceCard
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return ZHADeviceCard;
              })(_LitElement);

            return {
              F: ZHADeviceCard,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "narrow",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "device",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "showHelp",
                  value: function value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "showActions",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "isJoinPage",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "_serviceData",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "_areas",
                  value: function value() {
                    return [];
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "_selectedAreaIndex",
                  value: function value() {
                    return -1;
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "_userGivenName",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_unsubAreas",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(ZHADeviceCard.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    if (this._unsubAreas) {
                      this._unsubAreas();
                    }
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProperties) {
                    var _this2 = this;

                    _get(
                      _getPrototypeOf(ZHADeviceCard.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProperties);

                    this.addEventListener("hass-service-called", function(ev) {
                      return _this2.serviceCalled(ev);
                    });
                    this._serviceData = {
                      ieee_address: this.device.ieee,
                    };
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProperties) {
                    var _this3 = this;

                    if (changedProperties.has("device")) {
                      if (
                        !this._areas ||
                        !this.device ||
                        !this.device.area_id
                      ) {
                        this._selectedAreaIndex = 0;
                      } else {
                        this._selectedAreaIndex =
                          this._areas.findIndex(function(area) {
                            return area.area_id === _this3.device.area_id;
                          }) + 1;
                      }

                      this._userGivenName = this.device.user_given_name;
                    }

                    if (!this._unsubAreas) {
                      this._unsubAreas = Object(
                        _data_area_registry__WEBPACK_IMPORTED_MODULE_13__[
                          "subscribeAreaRegistry"
                        ]
                      )(this.hass.connection, function(areas) {
                        _this3._areas = areas;
                      });
                    }

                    _get(
                      _getPrototypeOf(ZHADeviceCard.prototype),
                      "update",
                      this
                    ).call(this, changedProperties);
                  },
                },
                {
                  kind: "method",
                  key: "serviceCalled",
                  value: function serviceCalled(ev) {
                    // Check if this is for us
                    if (ev.detail.success && ev.detail.service === "remove") {
                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__[
                          "fireEvent"
                        ]
                      )(this, "zha-device-removed", {
                        device: this.device,
                      });
                    }
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var _this4 = this;

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]
                    )(
                      _templateObject(),
                      this.isJoinPage ? this.device.name : "",
                      this.isJoinPage
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]
                          )(
                            _templateObject2(),
                            this.device.model,
                            this.hass.localize(
                              "ui.panel.config.integrations.config_entry.manuf",
                              "manufacturer",
                              this.device.manufacturer
                            )
                          )
                        : "",
                      this.device.ieee,
                      Object(
                        _functions__WEBPACK_IMPORTED_MODULE_18__[
                          "formatAsPaddedHex"
                        ]
                      )(this.device.nwk),
                      this.device.lqi || "Unknown",
                      this.device.rssi || "Unknown",
                      this.device.last_seen || "Unknown",
                      this.device.power_source || "Unknown",
                      this.device.quirk_applied
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]
                          )(_templateObject3(), this.device.quirk_class)
                        : "",
                      this.device.entities.map(function(entity) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]
                        )(_templateObject4(), _this4._openMoreInfo, entity, _this4.hass.states[entity.entity_id], !_this4.isJoinPage ? Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["html"])(_templateObject5(), entity.name, entity.entity_id) : "");
                      }),
                      this._saveCustomName,
                      this._userGivenName,
                      this.hass.localize(
                        "ui.panel.config.zha.device_card.device_name_placeholder"
                      ),
                      this.hass.localize(
                        "ui.panel.config.zha.device_card.area_picker_label"
                      ),
                      this._selectedAreaIndex,
                      this._selectedAreaChanged,
                      this.hass.localize(
                        "ui.panel.config.integrations.config_entry.no_area"
                      ),
                      this._areas.map(function(entry) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]
                        )(_templateObject6(), entry, entry.name);
                      }),
                      this.showActions
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]
                          )(
                            _templateObject7(),
                            this._onReconfigureNodeClick,
                            this.showHelp
                              ? Object(
                                  lit_element__WEBPACK_IMPORTED_MODULE_11__[
                                    "html"
                                  ]
                                )(
                                  _templateObject8(),
                                  this.hass.localize(
                                    "ui.panel.config.zha.services.reconfigure"
                                  )
                                )
                              : "",
                            this.hass,
                            this._serviceData,
                            this.showHelp
                              ? Object(
                                  lit_element__WEBPACK_IMPORTED_MODULE_11__[
                                    "html"
                                  ]
                                )(
                                  _templateObject9(),
                                  this.hass.localize(
                                    "ui.panel.config.zha.services.remove"
                                  )
                                )
                              : "",
                            this.device.power_source === "Mains"
                              ? Object(
                                  lit_element__WEBPACK_IMPORTED_MODULE_11__[
                                    "html"
                                  ]
                                )(
                                  _templateObject10(),
                                  this._onAddDevicesClick,
                                  this.showHelp
                                    ? Object(
                                        lit_element__WEBPACK_IMPORTED_MODULE_11__[
                                          "html"
                                        ]
                                      )(_templateObject11(), this.hass)
                                    : ""
                                )
                              : ""
                          )
                        : ""
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_onReconfigureNodeClick",
                  value: (function() {
                    var _onReconfigureNodeClick2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (!this.hass) {
                                    _context.next = 3;
                                    break;
                                  }

                                  _context.next = 3;
                                  return Object(
                                    _data_zha__WEBPACK_IMPORTED_MODULE_15__[
                                      "reconfigureNode"
                                    ]
                                  )(this.hass, this.device.ieee);

                                case 3:
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

                    function _onReconfigureNodeClick() {
                      return _onReconfigureNodeClick2.apply(this, arguments);
                    }

                    return _onReconfigureNodeClick;
                  })(),
                },
                {
                  kind: "method",
                  key: "_saveCustomName",
                  value: (function() {
                    var _saveCustomName2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(event) {
                        var values;
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  if (!this.hass) {
                                    _context2.next = 5;
                                    break;
                                  }

                                  values = {
                                    name_by_user: event.target.value,
                                    area_id: this.device.area_id
                                      ? this.device.area_id
                                      : undefined,
                                  };
                                  _context2.next = 4;
                                  return Object(
                                    _data_device_registry__WEBPACK_IMPORTED_MODULE_14__[
                                      "updateDeviceRegistryEntry"
                                    ]
                                  )(
                                    this.hass,
                                    this.device.device_reg_id,
                                    values
                                  );

                                case 4:
                                  this.device.user_given_name =
                                    event.target.value;

                                case 5:
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

                    function _saveCustomName(_x) {
                      return _saveCustomName2.apply(this, arguments);
                    }

                    return _saveCustomName;
                  })(),
                },
                {
                  kind: "method",
                  key: "_openMoreInfo",
                  value: function _openMoreInfo(ev) {
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__[
                        "fireEvent"
                      ]
                    )(this, "hass-more-info", {
                      entityId: ev.currentTarget.entity.entity_id,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_selectedAreaChanged",
                  value: (function() {
                    var _selectedAreaChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3(event) {
                        var area, newAreaId;
                        return regeneratorRuntime.wrap(
                          function _callee3$(_context3) {
                            while (1) {
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  if (!(!this.device || !this._areas)) {
                                    _context3.next = 2;
                                    break;
                                  }

                                  return _context3.abrupt("return");

                                case 2:
                                  this._selectedAreaIndex =
                                    event.target.selected;
                                  area = this._areas[
                                    this._selectedAreaIndex - 1
                                  ]; // account for No Area

                                  if (
                                    !(
                                      (!area && !this.device.area_id) ||
                                      (area &&
                                        area.area_id === this.device.area_id)
                                    )
                                  ) {
                                    _context3.next = 6;
                                    break;
                                  }

                                  return _context3.abrupt("return");

                                case 6:
                                  newAreaId = area ? area.area_id : undefined;
                                  _context3.next = 9;
                                  return Object(
                                    _data_device_registry__WEBPACK_IMPORTED_MODULE_14__[
                                      "updateDeviceRegistryEntry"
                                    ]
                                  )(this.hass, this.device.device_reg_id, {
                                    area_id: newAreaId,
                                    name_by_user: this.device.user_given_name,
                                  });

                                case 9:
                                  this.device.area_id = newAreaId;

                                case 10:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          },
                          _callee3,
                          this
                        );
                      })
                    );

                    function _selectedAreaChanged(_x2) {
                      return _selectedAreaChanged2.apply(this, arguments);
                    }

                    return _selectedAreaChanged;
                  })(),
                },
                {
                  kind: "method",
                  key: "_onAddDevicesClick",
                  value: function _onAddDevicesClick() {
                    Object(
                      _common_navigate__WEBPACK_IMPORTED_MODULE_17__["navigate"]
                    )(this, "add/" + this.device.ieee);
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_16__[
                        "haStyle"
                      ],
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["css"])(
                        _templateObject12()
                      ),
                    ];
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_11__["LitElement"]
        );

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWFkZC1kZXZpY2VzLXBhZ2V+emhhLWNvbmZpZ3VyYXRpb24tcGFnZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlsL2RlYm91bmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2FyZWFfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3poYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvZnVuY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtZGV2aWNlLWNhcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT5cbiAgY29tcGFyZShhLnRvTG93ZXJDYXNlKCksIGIudG9Mb3dlckNhc2UoKSk7XG4iLCIvLyBGcm9tOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWRlYm91bmNlLWZ1bmN0aW9uXG5cbi8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3Rcbi8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3Jcbi8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYmFuLXR5cGVzXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSA8VCBleHRlbmRzIEZ1bmN0aW9uPihcbiAgZnVuYzogVCxcbiAgd2FpdCxcbiAgaW1tZWRpYXRlID0gZmFsc2Vcbik6IFQgPT4ge1xuICBsZXQgdGltZW91dDtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLXRoaXMtYXNzaWdubWVudFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFyZWFSZWdpc3RyeUVudHJ5IHtcbiAgYXJlYV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPEFyZWFSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGFyZWFJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUFyZWFSZWdpc3RyeUVudHJ5ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGFyZWFJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9kZWxldGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEFyZWFSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uXG4gICAgLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2xpc3RcIixcbiAgICB9KVxuICAgIC50aGVuKChhcmVhcykgPT4gYXJlYXMuc29ydCgoZW50MSwgZW50MikgPT4gY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSkpKTtcblxuY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEFyZWFSZWdpc3RyeShjb25uKS50aGVuKChhcmVhcykgPT4gc3RvcmUuc2V0U3RhdGUoYXJlYXMsIHRydWUpKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiYXJlYV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUFyZWFSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChhcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEFyZWFSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2FyZWFSZWdpc3RyeVwiLFxuICAgIGZldGNoQXJlYVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUmVnaXN0cnlFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyaWVzOiBzdHJpbmdbXTtcbiAgY29ubmVjdGlvbnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcbiAgbW9kZWw/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN3X3ZlcnNpb24/OiBzdHJpbmc7XG4gIHZpYV9kZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyB7XG4gIGFyZWFfaWQ/OiBzdHJpbmcgfCBudWxsO1xuICBuYW1lX2J5X3VzZXI/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8RGV2aWNlUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5jb25zdCBmZXRjaERldmljZVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9kZXZpY2VfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoRGV2aWNlUmVnaXN0cnkoY29ubikudGhlbigoZGV2aWNlcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShkZXZpY2VzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJkZXZpY2VfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChkZXZpY2VzOiBEZXZpY2VSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxEZXZpY2VSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2RyXCIsXG4gICAgZmV0Y2hEZXZpY2VSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBaSEFFbnRpdHlSZWZlcmVuY2UgZXh0ZW5kcyBIYXNzRW50aXR5IHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpIQURldmljZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWVlZTogc3RyaW5nO1xuICBud2s6IHN0cmluZztcbiAgbHFpOiBzdHJpbmc7XG4gIHJzc2k6IHN0cmluZztcbiAgbGFzdF9zZWVuOiBzdHJpbmc7XG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuICBtb2RlbDogc3RyaW5nO1xuICBxdWlya19hcHBsaWVkOiBib29sZWFuO1xuICBxdWlya19jbGFzczogc3RyaW5nO1xuICBlbnRpdGllczogWkhBRW50aXR5UmVmZXJlbmNlW107XG4gIG1hbnVmYWN0dXJlcl9jb2RlOiBudW1iZXI7XG4gIGRldmljZV9yZWdfaWQ6IHN0cmluZztcbiAgdXNlcl9naXZlbl9uYW1lPzogc3RyaW5nO1xuICBwb3dlcl9zb3VyY2U/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXR0cmlidXRlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsdXN0ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBudW1iZXI7XG4gIGVuZHBvaW50X2lkOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhIHtcbiAgaWVlZTogc3RyaW5nO1xuICBlbmRwb2ludF9pZDogbnVtYmVyO1xuICBjbHVzdGVyX2lkOiBudW1iZXI7XG4gIGNsdXN0ZXJfdHlwZTogc3RyaW5nO1xuICBhdHRyaWJ1dGU6IG51bWJlcjtcbiAgbWFudWZhY3R1cmVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgcmVjb25maWd1cmVOb2RlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL3JlY29uZmlndXJlXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBdHRyaWJ1dGVzRm9yQ2x1c3RlciA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaWVlZUFkZHJlc3M6IHN0cmluZyxcbiAgZW5kcG9pbnRJZDogbnVtYmVyLFxuICBjbHVzdGVySWQ6IG51bWJlcixcbiAgY2x1c3RlclR5cGU6IHN0cmluZ1xuKTogUHJvbWlzZTxBdHRyaWJ1dGVbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvY2x1c3RlcnMvYXR0cmlidXRlc1wiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICAgIGVuZHBvaW50X2lkOiBlbmRwb2ludElkLFxuICAgIGNsdXN0ZXJfaWQ6IGNsdXN0ZXJJZCxcbiAgICBjbHVzdGVyX3R5cGU6IGNsdXN0ZXJUeXBlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KTogUHJvbWlzZTxaSEFEZXZpY2VbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXNcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJpbmRhYmxlRGV2aWNlcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaWVlZUFkZHJlc3M6IHN0cmluZ1xuKTogUHJvbWlzZTxaSEFEZXZpY2VbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvYmluZGFibGVcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBiaW5kRGV2aWNlcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc291cmNlSUVFRTogc3RyaW5nLFxuICB0YXJnZXRJRUVFOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvYmluZFwiLFxuICAgIHNvdXJjZV9pZWVlOiBzb3VyY2VJRUVFLFxuICAgIHRhcmdldF9pZWVlOiB0YXJnZXRJRUVFLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVuYmluZERldmljZXMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHNvdXJjZUlFRUU6IHN0cmluZyxcbiAgdGFyZ2V0SUVFRTogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL3VuYmluZFwiLFxuICAgIHNvdXJjZV9pZWVlOiBzb3VyY2VJRUVFLFxuICAgIHRhcmdldF9pZWVlOiB0YXJnZXRJRUVFLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlYWRBdHRyaWJ1dGVWYWx1ZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZGF0YTogUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhXG4pOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gaGFzcy5jYWxsV1Moe1xuICAgIC4uLmRhdGEsXG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9hdHRyaWJ1dGVzL3ZhbHVlXCIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29tbWFuZHNGb3JDbHVzdGVyID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPENvbW1hbmRbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvY2x1c3RlcnMvY29tbWFuZHNcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgICBlbmRwb2ludF9pZDogZW5kcG9pbnRJZCxcbiAgICBjbHVzdGVyX2lkOiBjbHVzdGVySWQsXG4gICAgY2x1c3Rlcl90eXBlOiBjbHVzdGVyVHlwZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsdXN0ZXJzRm9yWmhhTm9kZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaWVlZUFkZHJlc3M6IHN0cmluZ1xuKTogUHJvbWlzZTxDbHVzdGVyW10+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2NsdXN0ZXJzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gIH0pO1xuIiwiaW1wb3J0IHsgWkhBRGV2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRBc1BhZGRlZEhleCA9ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgbGV0IGhleCA9IHZhbHVlO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgaGV4ID0gcGFyc2VJbnQodmFsdWUsIDE2KTtcbiAgfVxuICByZXR1cm4gXCIweFwiICsgaGV4LnRvU3RyaW5nKDE2KS5wYWRTdGFydCg0LCBcIjBcIik7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydFpIQURldmljZXMgPSAoYTogWkhBRGV2aWNlLCBiOiBaSEFEZXZpY2UpOiBudW1iZXIgPT4ge1xuICBjb25zdCBuYW1lQSA9IGEudXNlcl9naXZlbl9uYW1lID8gYS51c2VyX2dpdmVuX25hbWUgOiBhLm5hbWU7XG4gIGNvbnN0IG5hbWViID0gYi51c2VyX2dpdmVuX25hbWUgPyBiLnVzZXJfZ2l2ZW5fbmFtZSA6IGIubmFtZTtcbiAgcmV0dXJuIG5hbWVBLmxvY2FsZUNvbXBhcmUobmFtZWIpO1xufTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtZGVzY3JpcHRpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWJhZGdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5cbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHtcbiAgQXJlYVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZUFyZWFSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvYXJlYV9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMsXG4gIHVwZGF0ZURldmljZVJlZ2lzdHJ5RW50cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgcmVjb25maWd1cmVOb2RlLCBaSEFEZXZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSXRlbVNlbGVjdGVkRXZlbnQsIE5vZGVTZXJ2aWNlRGF0YSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGZvcm1hdEFzUGFkZGVkSGV4IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiemhhLWRldmljZS1yZW1vdmVkXCI6IHtcbiAgICAgIGRldmljZT86IFpIQURldmljZTtcbiAgICB9O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiemhhLWRldmljZS1jYXJkXCIpXG5jbGFzcyBaSEFEZXZpY2VDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdz86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkZXZpY2U/OiBaSEFEZXZpY2U7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzaG93SGVscDogYm9vbGVhbiA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2hvd0FjdGlvbnM/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNKb2luUGFnZT86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlcnZpY2VEYXRhPzogTm9kZVNlcnZpY2VEYXRhO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zZWxlY3RlZEFyZWFJbmRleDogbnVtYmVyID0gLTE7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3VzZXJHaXZlbk5hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Vuc3ViQXJlYXM/OiBVbnN1YnNjcmliZUZ1bmM7XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3Vuc3ViQXJlYXMpIHtcbiAgICAgIHRoaXMuX3Vuc3ViQXJlYXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCAoZXYpID0+XG4gICAgICB0aGlzLnNlcnZpY2VDYWxsZWQoZXYpXG4gICAgKTtcbiAgICB0aGlzLl9zZXJ2aWNlRGF0YSA9IHtcbiAgICAgIGllZWVfYWRkcmVzczogdGhpcy5kZXZpY2UhLmllZWUsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJkZXZpY2VcIikpIHtcbiAgICAgIGlmICghdGhpcy5fYXJlYXMgfHwgIXRoaXMuZGV2aWNlIHx8ICF0aGlzLmRldmljZS5hcmVhX2lkKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQXJlYUluZGV4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQXJlYUluZGV4ID1cbiAgICAgICAgICB0aGlzLl9hcmVhcy5maW5kSW5kZXgoXG4gICAgICAgICAgICAoYXJlYSkgPT4gYXJlYS5hcmVhX2lkID09PSB0aGlzLmRldmljZSEuYXJlYV9pZFxuICAgICAgICAgICkgKyAxO1xuICAgICAgfVxuICAgICAgdGhpcy5fdXNlckdpdmVuTmFtZSA9IHRoaXMuZGV2aWNlIS51c2VyX2dpdmVuX25hbWU7XG4gICAgfVxuICAgIGlmICghdGhpcy5fdW5zdWJBcmVhcykge1xuICAgICAgdGhpcy5fdW5zdWJBcmVhcyA9IHN1YnNjcmliZUFyZWFSZWdpc3RyeShcbiAgICAgICAgdGhpcy5oYXNzLmNvbm5lY3Rpb24sXG4gICAgICAgIChhcmVhcykgPT4ge1xuICAgICAgICAgIHRoaXMuX2FyZWFzID0gYXJlYXM7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2VydmljZUNhbGxlZChldik6IHZvaWQge1xuICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgZm9yIHVzXG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzICYmIGV2LmRldGFpbC5zZXJ2aWNlID09PSBcInJlbW92ZVwiKSB7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJ6aGEtZGV2aWNlLXJlbW92ZWRcIiwge1xuICAgICAgICBkZXZpY2U6IHRoaXMuZGV2aWNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiJHt0aGlzLmlzSm9pblBhZ2UgPyB0aGlzLmRldmljZSEubmFtZSA6IFwiXCJ9XCI+XG4gICAgICAgICR7XG4gICAgICAgICAgdGhpcy5pc0pvaW5QYWdlXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RlbFwiPiR7dGhpcy5kZXZpY2UhLm1vZGVsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hbnVmXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5Lm1hbnVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJtYW51ZmFjdHVyZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZSEubWFudWZhY3R1cmVyXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgIDxkdD5JRUVFOjwvZHQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7dGhpcy5kZXZpY2UhLmllZWV9PC9kZD5cbiAgICAgICAgICAgIDxkdD5Od2s6PC9kdD5cbiAgICAgICAgICAgIDxkZCBjbGFzcz1cInpoYS1pbmZvXCI+JHtmb3JtYXRBc1BhZGRlZEhleCh0aGlzLmRldmljZSEubndrKX08L2RkPlxuICAgICAgICAgICAgPGR0PkxRSTo8L2R0PlxuICAgICAgICAgICAgPGRkIGNsYXNzPVwiemhhLWluZm9cIj4ke3RoaXMuZGV2aWNlIS5scWkgfHwgXCJVbmtub3duXCJ9PC9kZD5cbiAgICAgICAgICAgIDxkdD5SU1NJOjwvZHQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7dGhpcy5kZXZpY2UhLnJzc2kgfHwgXCJVbmtub3duXCJ9PC9kZD5cbiAgICAgICAgICAgIDxkdD5MYXN0IFNlZW46PC9kdD5cbiAgICAgICAgICAgIDxkZCBjbGFzcz1cInpoYS1pbmZvXCI+JHt0aGlzLmRldmljZSEubGFzdF9zZWVuIHx8IFwiVW5rbm93blwifTwvZGQ+XG4gICAgICAgICAgICA8ZHQ+UG93ZXIgU291cmNlOjwvZHQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7dGhpcy5kZXZpY2UhLnBvd2VyX3NvdXJjZSB8fCBcIlVua25vd25cIn08L2RkPlxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgdGhpcy5kZXZpY2UhLnF1aXJrX2FwcGxpZWRcbiAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxkdD5RdWlyazo8L2R0PlxuICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7dGhpcy5kZXZpY2UhLnF1aXJrX2NsYXNzfTwvZGQ+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kbD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1lbnRpdGllc1wiPlxuICAgICAgICAgICR7dGhpcy5kZXZpY2UhLmVudGl0aWVzLm1hcChcbiAgICAgICAgICAgIChlbnRpdHkpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29wZW5Nb3JlSW5mb31cIlxuICAgICAgICAgICAgICAgIC5lbnRpdHk9XCIke2VudGl0eX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN0YXRlLWJhZGdlXG4gICAgICAgICAgICAgICAgICAuc3RhdGVPYmo9XCIke3RoaXMuaGFzcyEuc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdfVwiXG4gICAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICA+PC9zdGF0ZS1iYWRnZT5cbiAgICAgICAgICAgICAgICAkeyF0aGlzLmlzSm9pblBhZ2VcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke2VudGl0eS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeSBlbnRpdHktaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtlbnRpdHkuZW50aXR5X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0YWJsZVwiPlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl9zYXZlQ3VzdG9tTmFtZX1cIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl91c2VyR2l2ZW5OYW1lfVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmRldmljZV9jYXJkLmRldmljZV9uYW1lX3BsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICl9XCJcbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLXBpY2tlclwiPlxuICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICBsYWJlbD1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmRldmljZV9jYXJkLmFyZWFfcGlja2VyX2xhYmVsXCJcbiAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAuc2VsZWN0ZWQ9XCIke3RoaXMuX3NlbGVjdGVkQXJlYUluZGV4fVwiXG4gICAgICAgICAgICAgIEBpcm9uLXNlbGVjdD1cIiR7dGhpcy5fc2VsZWN0ZWRBcmVhQ2hhbmdlZH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5Lm5vX2FyZWFcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cblxuICAgICAgICAgICAgICAke3RoaXMuX2FyZWFzLm1hcChcbiAgICAgICAgICAgICAgICAoZW50cnkpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBhcmVhPVwiJHtlbnRyeX1cIj4ke2VudHJ5Lm5hbWV9PC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke1xuICAgICAgICAgIHRoaXMuc2hvd0FjdGlvbnNcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX29uUmVjb25maWd1cmVOb2RlQ2xpY2t9XCJcbiAgICAgICAgICAgICAgICAgICAgPlJlY29uZmlndXJlIERldmljZTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLnNob3dIZWxwXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5zZXJ2aWNlcy5yZWNvbmZpZ3VyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cblxuICAgICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6aGFcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgLnNlcnZpY2VEYXRhPVwiJHt0aGlzLl9zZXJ2aWNlRGF0YX1cIlxuICAgICAgICAgICAgICAgICAgICA+UmVtb3ZlIERldmljZTwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLnNob3dIZWxwXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5zZXJ2aWNlcy5yZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAke3RoaXMuZGV2aWNlIS5wb3dlcl9zb3VyY2UgPT09IFwiTWFpbnNcIlxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9vbkFkZERldmljZXNDbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBEZXZpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuc2hvd0hlbHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6aGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicGVybWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLXRleHQyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9vblJlY29uZmlndXJlTm9kZUNsaWNrKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmhhc3MpIHtcbiAgICAgIGF3YWl0IHJlY29uZmlndXJlTm9kZSh0aGlzLmhhc3MsIHRoaXMuZGV2aWNlIS5pZWVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zYXZlQ3VzdG9tTmFtZShldmVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmhhc3MpIHtcbiAgICAgIGNvbnN0IHZhbHVlczogRGV2aWNlUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMgPSB7XG4gICAgICAgIG5hbWVfYnlfdXNlcjogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICBhcmVhX2lkOiB0aGlzLmRldmljZSEuYXJlYV9pZCA/IHRoaXMuZGV2aWNlIS5hcmVhX2lkIDogdW5kZWZpbmVkLFxuICAgICAgfTtcblxuICAgICAgYXdhaXQgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeShcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICB0aGlzLmRldmljZSEuZGV2aWNlX3JlZ19pZCxcbiAgICAgICAgdmFsdWVzXG4gICAgICApO1xuXG4gICAgICB0aGlzLmRldmljZSEudXNlcl9naXZlbl9uYW1lID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29wZW5Nb3JlSW5mbyhldjogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHtcbiAgICAgIGVudGl0eUlkOiAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLmVudGl0eS5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zZWxlY3RlZEFyZWFDaGFuZ2VkKGV2ZW50OiBJdGVtU2VsZWN0ZWRFdmVudCkge1xuICAgIGlmICghdGhpcy5kZXZpY2UgfHwgIXRoaXMuX2FyZWFzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkQXJlYUluZGV4ID0gZXZlbnQhLnRhcmdldCEuc2VsZWN0ZWQ7XG4gICAgY29uc3QgYXJlYSA9IHRoaXMuX2FyZWFzW3RoaXMuX3NlbGVjdGVkQXJlYUluZGV4IC0gMV07IC8vIGFjY291bnQgZm9yIE5vIEFyZWFcbiAgICBpZiAoXG4gICAgICAoIWFyZWEgJiYgIXRoaXMuZGV2aWNlLmFyZWFfaWQpIHx8XG4gICAgICAoYXJlYSAmJiBhcmVhLmFyZWFfaWQgPT09IHRoaXMuZGV2aWNlLmFyZWFfaWQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3QXJlYUlkID0gYXJlYSA/IGFyZWEuYXJlYV9pZCA6IHVuZGVmaW5lZDtcbiAgICBhd2FpdCB1cGRhdGVEZXZpY2VSZWdpc3RyeUVudHJ5KHRoaXMuaGFzcyEsIHRoaXMuZGV2aWNlLmRldmljZV9yZWdfaWQsIHtcbiAgICAgIGFyZWFfaWQ6IG5ld0FyZWFJZCxcbiAgICAgIG5hbWVfYnlfdXNlcjogdGhpcy5kZXZpY2UhLnVzZXJfZ2l2ZW5fbmFtZSxcbiAgICB9KTtcbiAgICB0aGlzLmRldmljZSEuYXJlYV9pZCA9IG5ld0FyZWFJZDtcbiAgfVxuXG4gIHByaXZhdGUgX29uQWRkRGV2aWNlc0NsaWNrKCkge1xuICAgIG5hdmlnYXRlKHRoaXMsIFwiYWRkL1wiICsgdGhpcy5kZXZpY2UhLmllZWUpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCg6bm90KFtuYXJyb3ddKSkgLmRldmljZS1lbnRpdGllcyB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMjI1cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBmbGV4OiAxIDAgMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDQyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZXZpY2Uge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRldmljZSAubmFtZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLmRldmljZSAubWFudWYge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLmV4dHJhLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAubWFudWYsXG4gICAgICAgIC56aGEtaW5mbyxcbiAgICAgICAgLmVudGl0eS1pZCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgZGwgZHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBkdCBkZCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmVkaXRhYmxlIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVscC10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5vZGUtcGlja2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInpoYS1kZXZpY2UtY2FyZFwiOiBaSEFEZXZpY2VDYXJkO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQVdBO0FBQUE7QUFLQTtBQURBO0FBSkE7QUFTQTtBQUFBO0FBTUE7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFDQTtBQUtBO0FBQUE7QUFHQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFDQTtBQVVBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBb0JBO0FBQUE7QUFNQTtBQUNBO0FBRkE7QUFMQTtBQUNBO0FBVUE7QUFBQTtBQUVBO0FBREE7QUFEQTtBQUNBO0FBSUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFDQTtBQVlBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUEE7QUFlQTtBQUFBO0FBRUE7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUtBO0FBQ0E7QUFGQTtBQUpBO0FBU0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTEE7QUFXQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQVdBO0FBSUE7QUFFQTtBQUZBO0FBSUE7QUFFQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUEE7QUFlQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBSkE7Ozs7Ozs7Ozs7OztBQ3hJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBV0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7QUFBQTs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7QUFBQTs7OztBQUNBOzs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBR0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBNkNBO0FBQUE7QUFvREE7QUFBQTtBQWdFQTs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBYUE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBYUE7QUFiQTtBQUFBO0FBZUE7QUFDQTtBQUZBO0FBQ0E7QUFmQTtBQWtCQTtBQUNBO0FBbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFrRkE7OztBQTNXQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
