(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-map"],
  {
    /***/ "./src/common/dom/setup-leaflet-map.ts":
      /*!*********************************************!*\
  !*** ./src/common/dom/setup-leaflet-map.ts ***!
  \*********************************************/
      /*! exports provided: setupLeafletMap */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setupLeafletMap",
          function() {
            return setupLeafletMap;
          }
        );
        // Sets up a Leaflet map on the provided DOM element
        const setupLeafletMap = async (mapElement, darkMode = false) => {
          if (!mapElement.parentNode) {
            throw new Error("Cannot setup Leaflet map on disconnected element");
          } // tslint:disable-next-line

          const Leaflet = await __webpack_require__
            .e(/*! import() | leaflet */ "vendors~leaflet")
            .then(
              __webpack_require__.t.bind(
                null,
                /*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js",
                7
              )
            );
          Leaflet.Icon.Default.imagePath = "/static/images/leaflet/images/";
          const map = Leaflet.map(mapElement);
          const style = document.createElement("link");
          style.setAttribute("href", "/static/images/leaflet/leaflet.css");
          style.setAttribute("rel", "stylesheet");
          mapElement.parentNode.appendChild(style);
          map.setView([52.3731339, 4.8903147], 13);
          Leaflet.tileLayer(
            `https://{s}.basemaps.cartocdn.com/${
              darkMode ? "dark_all" : "light_all"
            }/{z}/{x}/{y}${Leaflet.Browser.retina ? "@2x.png" : ".png"}`,
            {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
              subdomains: "abcd",
              minZoom: 0,
              maxZoom: 20,
            }
          ).addTo(map);
          return [map, Leaflet];
        };

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

    /***/ "./src/panels/map/ha-entity-marker.js":
      /*!********************************************!*\
  !*** ./src/panels/map/ha-entity-marker.js ***!
  \********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_image_iron_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-image/iron-image */ "./node_modules/@polymer/iron-image/iron-image.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );

        /*
         * @appliesMixin EventsMixin
         */

        class HaEntityMarker extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="iron-positioning"></style>
      <style>
        .marker {
          vertical-align: top;
          position: relative;
          display: block;
          margin: 0 auto;
          width: 2.5em;
          text-align: center;
          height: 2.5em;
          line-height: 2.5em;
          font-size: 1.5em;
          border-radius: 50%;
          border: 0.1em solid
            var(--ha-marker-color, var(--default-primary-color));
          color: rgb(76, 76, 76);
          background-color: white;
        }
        iron-image {
          border-radius: 50%;
        }
      </style>

      <div class="marker">
        <template is="dom-if" if="[[entityName]]"
          >[[entityName]]</template
        >
        <template is="dom-if" if="[[entityPicture]]">
          <iron-image
            sizing="cover"
            class="fit"
            src="[[entityPicture]]"
          ></iron-image>
        </template>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
              },
              entityId: {
                type: String,
                value: "",
              },
              entityName: {
                type: String,
                value: null,
              },
              entityPicture: {
                type: String,
                value: null,
              },
            };
          }

          ready() {
            super.ready();
            this.addEventListener("click", (ev) => this.badgeTap(ev));
          }

          badgeTap(ev) {
            ev.stopPropagation();

            if (this.entityId) {
              this.fire("hass-more-info", {
                entityId: this.entityId,
              });
            }
          }
        }

        customElements.define("ha-entity-marker", HaEntityMarker);

        /***/
      },

    /***/ "./src/panels/map/ha-panel-map.js":
      /*!****************************************!*\
  !*** ./src/panels/map/ha-panel-map.js ***!
  \****************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts"
        );
        /* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../components/ha-icon */ "./src/components/ha-icon.ts"
        );
        /* harmony import */ var _ha_entity_marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./ha-entity-marker */ "./src/panels/map/ha-entity-marker.js"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts"
        );

        /*
         * @appliesMixin LocalizeMixin
         */

        class HaPanelMap extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="ha-style">
        #map {
          height: calc(100% - 64px);
          width: 100%;
          z-index: 0;
        }
      </style>

      <app-toolbar>
        <ha-menu-button hass="[[hass]]" narrow="[[narrow]]"></ha-menu-button>
        <div main-title>[[localize('panel.map')]]</div>
      </app-toolbar>

      <div id="map"></div>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
                observer: "drawEntities",
              },
              narrow: Boolean,
            };
          }

          connectedCallback() {
            super.connectedCallback();
            this.loadMap();
          }

          async loadMap() {
            [this._map, this.Leaflet] = await Object(
              _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_9__[
                "setupLeafletMap"
              ]
            )(this.$.map);
            this.drawEntities(this.hass);

            this._map.invalidateSize();

            this.fitMap();
          }

          disconnectedCallback() {
            if (this._map) {
              this._map.remove();
            }
          }

          fitMap() {
            var bounds;

            if (this._mapItems.length === 0) {
              this._map.setView(
                new this.Leaflet.LatLng(
                  this.hass.config.latitude,
                  this.hass.config.longitude
                ),
                14
              );
            } else {
              bounds = new this.Leaflet.latLngBounds(
                this._mapItems.map((item) => item.getLatLng())
              );

              this._map.fitBounds(bounds.pad(0.5));
            }
          }

          drawEntities(hass) {
            /* eslint-disable vars-on-top */
            var map = this._map;
            if (!map) return;

            if (this._mapItems) {
              this._mapItems.forEach(function(marker) {
                marker.remove();
              });
            }

            var mapItems = (this._mapItems = []);
            Object.keys(hass.states).forEach((entityId) => {
              var entity = hass.states[entityId];
              var title = Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ]
              )(entity);

              if (
                (entity.attributes.hidden &&
                  Object(
                    _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__[
                      "default"
                    ]
                  )(entity) !== "zone") ||
                entity.state === "home" ||
                !("latitude" in entity.attributes) ||
                !("longitude" in entity.attributes)
              ) {
                return;
              }

              var icon;

              if (
                Object(
                  _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__[
                    "default"
                  ]
                )(entity) === "zone"
              ) {
                // DRAW ZONE
                if (entity.attributes.passive) return; // create icon

                var iconHTML = "";

                if (entity.attributes.icon) {
                  const el = document.createElement("ha-icon");
                  el.setAttribute("icon", entity.attributes.icon);
                  iconHTML = el.outerHTML;
                } else {
                  iconHTML = title;
                }

                icon = this.Leaflet.divIcon({
                  html: iconHTML,
                  iconSize: [24, 24],
                  className: "",
                }); // create market with the icon

                mapItems.push(
                  this.Leaflet.marker(
                    [entity.attributes.latitude, entity.attributes.longitude],
                    {
                      icon: icon,
                      interactive: false,
                      title: title,
                    }
                  ).addTo(map)
                ); // create circle around it

                mapItems.push(
                  this.Leaflet.circle(
                    [entity.attributes.latitude, entity.attributes.longitude],
                    {
                      interactive: false,
                      color: "#FF9800",
                      radius: entity.attributes.radius,
                    }
                  ).addTo(map)
                );
                return;
              } // DRAW ENTITY
              // create icon

              var entityPicture = entity.attributes.entity_picture || "";
              var entityName = title
                .split(" ")
                .map(function(part) {
                  return part.substr(0, 1);
                })
                .join("");
              /* Leaflet clones this element before adding it to the map. This messes up
         our Polymer object and we can't pass data through. Thus we hack like this. */

              icon = this.Leaflet.divIcon({
                html:
                  "<ha-entity-marker entity-id='" +
                  entity.entity_id +
                  "' entity-name='" +
                  entityName +
                  "' entity-picture='" +
                  entityPicture +
                  "'></ha-entity-marker>",
                iconSize: [45, 45],
                className: "",
              }); // create market with the icon

              mapItems.push(
                this.Leaflet.marker(
                  [entity.attributes.latitude, entity.attributes.longitude],
                  {
                    icon: icon,
                    title: Object(
                      _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__[
                        "default"
                      ]
                    )(entity),
                  }
                ).addTo(map)
              ); // create circle around if entity has accuracy

              if (entity.attributes.gps_accuracy) {
                mapItems.push(
                  this.Leaflet.circle(
                    [entity.attributes.latitude, entity.attributes.longitude],
                    {
                      interactive: false,
                      color: "#0288D1",
                      radius: entity.attributes.gps_accuracy,
                    }
                  ).addTo(map)
                );
              }
            });
          }
        }

        customElements.define("ha-panel-map", HaPanelMap);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbWFwLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vc2V0dXAtbGVhZmxldC1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL21hcC9oYS1lbnRpdHktbWFya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbWFwL2hhLXBhbmVsLW1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXAgfSBmcm9tIFwibGVhZmxldFwiO1xuXG4vLyBTZXRzIHVwIGEgTGVhZmxldCBtYXAgb24gdGhlIHByb3ZpZGVkIERPTSBlbGVtZW50XG5leHBvcnQgdHlwZSBMZWFmbGV0TW9kdWxlVHlwZSA9IHR5cGVvZiBpbXBvcnQoXCJsZWFmbGV0XCIpO1xuXG5leHBvcnQgY29uc3Qgc2V0dXBMZWFmbGV0TWFwID0gYXN5bmMgKFxuICBtYXBFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGFya01vZGUgPSBmYWxzZVxuKTogUHJvbWlzZTxbTWFwLCBMZWFmbGV0TW9kdWxlVHlwZV0+ID0+IHtcbiAgaWYgKCFtYXBFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc2V0dXAgTGVhZmxldCBtYXAgb24gZGlzY29ubmVjdGVkIGVsZW1lbnRcIik7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IExlYWZsZXQgPSAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibGVhZmxldFwiICovIFwibGVhZmxldFwiKSkgYXMgTGVhZmxldE1vZHVsZVR5cGU7XG4gIExlYWZsZXQuSWNvbi5EZWZhdWx0LmltYWdlUGF0aCA9IFwiL3N0YXRpYy9pbWFnZXMvbGVhZmxldC9pbWFnZXMvXCI7XG5cbiAgY29uc3QgbWFwID0gTGVhZmxldC5tYXAobWFwRWxlbWVudCk7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIvc3RhdGljL2ltYWdlcy9sZWFmbGV0L2xlYWZsZXQuY3NzXCIpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICBtYXBFbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICBtYXAuc2V0VmlldyhbNTIuMzczMTMzOSwgNC44OTAzMTQ3XSwgMTMpO1xuICBMZWFmbGV0LnRpbGVMYXllcihcbiAgICBgaHR0cHM6Ly97c30uYmFzZW1hcHMuY2FydG9jZG4uY29tLyR7XG4gICAgICBkYXJrTW9kZSA/IFwiZGFya19hbGxcIiA6IFwibGlnaHRfYWxsXCJcbiAgICB9L3t6fS97eH0ve3l9JHtMZWFmbGV0LkJyb3dzZXIucmV0aW5hID8gXCJAMngucG5nXCIgOiBcIi5wbmdcIn1gLFxuICAgIHtcbiAgICAgIGF0dHJpYnV0aW9uOlxuICAgICAgICAnJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiwgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL2NhcnRvLmNvbS9hdHRyaWJ1dGlvbnNcIj5DQVJUTzwvYT4nLFxuICAgICAgc3ViZG9tYWluczogXCJhYmNkXCIsXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMjAsXG4gICAgfVxuICApLmFkZFRvKG1hcCk7XG5cbiAgcmV0dXJuIFttYXAsIExlYWZsZXRdO1xufTtcbiIsIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPYmplY3RJZChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iajogSGFzc0VudGl0eSkge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlT2JqZWN0SWQgZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nID0+XG4gIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pbWFnZS9pcm9uLWltYWdlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhRW50aXR5TWFya2VyIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1wb3NpdGlvbmluZ1wiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5tYXJrZXIge1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAyLjVlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMi41ZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAwLjFlbSBzb2xpZFxuICAgICAgICAgICAgdmFyKC0taGEtbWFya2VyLWNvbG9yLCB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpKTtcbiAgICAgICAgICBjb2xvcjogcmdiKDc2LCA3NiwgNzYpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIGlyb24taW1hZ2Uge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1hcmtlclwiPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZW50aXR5TmFtZV1dXCJcbiAgICAgICAgICA+W1tlbnRpdHlOYW1lXV08L3RlbXBsYXRlXG4gICAgICAgID5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2VudGl0eVBpY3R1cmVdXVwiPlxuICAgICAgICAgIDxpcm9uLWltYWdlXG4gICAgICAgICAgICBzaXppbmc9XCJjb3ZlclwiXG4gICAgICAgICAgICBjbGFzcz1cImZpdFwiXG4gICAgICAgICAgICBzcmM9XCJbW2VudGl0eVBpY3R1cmVdXVwiXG4gICAgICAgICAgPjwvaXJvbi1pbWFnZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgZW50aXR5SWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0eU5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0eVBpY3R1cmU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB0aGlzLmJhZGdlVGFwKGV2KSk7XG4gIH1cblxuICBiYWRnZVRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmVudGl0eUlkKSB7XG4gICAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiB0aGlzLmVudGl0eUlkIH0pO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1lbnRpdHktbWFya2VyXCIsIEhhRW50aXR5TWFya2VyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuXG5pbXBvcnQgXCIuL2hhLWVudGl0eS1tYXJrZXJcIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBzZXR1cExlYWZsZXRNYXAgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9zZXR1cC1sZWFmbGV0LW1hcFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUGFuZWxNYXAgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgICNtYXAge1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICA8aGEtbWVudS1idXR0b24gaGFzcz1cIltbaGFzc11dXCIgbmFycm93PVwiW1tuYXJyb3ddXVwiPjwvaGEtbWVudS1idXR0b24+XG4gICAgICAgIDxkaXYgbWFpbi10aXRsZT5bW2xvY2FsaXplKCdwYW5lbC5tYXAnKV1dPC9kaXY+XG4gICAgICA8L2FwcC10b29sYmFyPlxuXG4gICAgICA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImRyYXdFbnRpdGllc1wiLFxuICAgICAgfSxcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLmxvYWRNYXAoKTtcbiAgfVxuXG4gIGFzeW5jIGxvYWRNYXAoKSB7XG4gICAgW3RoaXMuX21hcCwgdGhpcy5MZWFmbGV0XSA9IGF3YWl0IHNldHVwTGVhZmxldE1hcCh0aGlzLiQubWFwKTtcbiAgICB0aGlzLmRyYXdFbnRpdGllcyh0aGlzLmhhc3MpO1xuICAgIHRoaXMuX21hcC5pbnZhbGlkYXRlU2l6ZSgpO1xuICAgIHRoaXMuZml0TWFwKCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5fbWFwKSB7XG4gICAgICB0aGlzLl9tYXAucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgZml0TWFwKCkge1xuICAgIHZhciBib3VuZHM7XG5cbiAgICBpZiAodGhpcy5fbWFwSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9tYXAuc2V0VmlldyhcbiAgICAgICAgbmV3IHRoaXMuTGVhZmxldC5MYXRMbmcoXG4gICAgICAgICAgdGhpcy5oYXNzLmNvbmZpZy5sYXRpdHVkZSxcbiAgICAgICAgICB0aGlzLmhhc3MuY29uZmlnLmxvbmdpdHVkZVxuICAgICAgICApLFxuICAgICAgICAxNFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRzID0gbmV3IHRoaXMuTGVhZmxldC5sYXRMbmdCb3VuZHMoXG4gICAgICAgIHRoaXMuX21hcEl0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbS5nZXRMYXRMbmcoKSlcbiAgICAgICk7XG4gICAgICB0aGlzLl9tYXAuZml0Qm91bmRzKGJvdW5kcy5wYWQoMC41KSk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0VudGl0aWVzKGhhc3MpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSB2YXJzLW9uLXRvcCAqL1xuICAgIHZhciBtYXAgPSB0aGlzLl9tYXA7XG4gICAgaWYgKCFtYXApIHJldHVybjtcblxuICAgIGlmICh0aGlzLl9tYXBJdGVtcykge1xuICAgICAgdGhpcy5fbWFwSXRlbXMuZm9yRWFjaChmdW5jdGlvbihtYXJrZXIpIHtcbiAgICAgICAgbWFya2VyLnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBtYXBJdGVtcyA9ICh0aGlzLl9tYXBJdGVtcyA9IFtdKTtcblxuICAgIE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgICAgdmFyIGVudGl0eSA9IGhhc3Muc3RhdGVzW2VudGl0eUlkXTtcbiAgICAgIHZhciB0aXRsZSA9IGNvbXB1dGVTdGF0ZU5hbWUoZW50aXR5KTtcblxuICAgICAgaWYgKFxuICAgICAgICAoZW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuICYmIGNvbXB1dGVTdGF0ZURvbWFpbihlbnRpdHkpICE9PSBcInpvbmVcIikgfHxcbiAgICAgICAgZW50aXR5LnN0YXRlID09PSBcImhvbWVcIiB8fFxuICAgICAgICAhKFwibGF0aXR1ZGVcIiBpbiBlbnRpdHkuYXR0cmlidXRlcykgfHxcbiAgICAgICAgIShcImxvbmdpdHVkZVwiIGluIGVudGl0eS5hdHRyaWJ1dGVzKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGljb247XG5cbiAgICAgIGlmIChjb21wdXRlU3RhdGVEb21haW4oZW50aXR5KSA9PT0gXCJ6b25lXCIpIHtcbiAgICAgICAgLy8gRFJBVyBaT05FXG4gICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy5wYXNzaXZlKSByZXR1cm47XG5cbiAgICAgICAgLy8gY3JlYXRlIGljb25cbiAgICAgICAgdmFyIGljb25IVE1MID0gXCJcIjtcbiAgICAgICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzLmljb24pIHtcbiAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoYS1pY29uXCIpO1xuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcImljb25cIiwgZW50aXR5LmF0dHJpYnV0ZXMuaWNvbik7XG4gICAgICAgICAgaWNvbkhUTUwgPSBlbC5vdXRlckhUTUw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWNvbkhUTUwgPSB0aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGljb24gPSB0aGlzLkxlYWZsZXQuZGl2SWNvbih7XG4gICAgICAgICAgaHRtbDogaWNvbkhUTUwsXG4gICAgICAgICAgaWNvblNpemU6IFsyNCwgMjRdLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIG1hcmtldCB3aXRoIHRoZSBpY29uXG4gICAgICAgIG1hcEl0ZW1zLnB1c2goXG4gICAgICAgICAgdGhpcy5MZWFmbGV0Lm1hcmtlcihcbiAgICAgICAgICAgIFtlbnRpdHkuYXR0cmlidXRlcy5sYXRpdHVkZSwgZW50aXR5LmF0dHJpYnV0ZXMubG9uZ2l0dWRlXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICAgICAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKS5hZGRUbyhtYXApXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGNpcmNsZSBhcm91bmQgaXRcbiAgICAgICAgbWFwSXRlbXMucHVzaChcbiAgICAgICAgICB0aGlzLkxlYWZsZXQuY2lyY2xlKFxuICAgICAgICAgICAgW2VudGl0eS5hdHRyaWJ1dGVzLmxhdGl0dWRlLCBlbnRpdHkuYXR0cmlidXRlcy5sb25naXR1ZGVdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpbnRlcmFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNGRjk4MDBcIixcbiAgICAgICAgICAgICAgcmFkaXVzOiBlbnRpdHkuYXR0cmlidXRlcy5yYWRpdXMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKS5hZGRUbyhtYXApXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBEUkFXIEVOVElUWVxuICAgICAgLy8gY3JlYXRlIGljb25cbiAgICAgIHZhciBlbnRpdHlQaWN0dXJlID0gZW50aXR5LmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUgfHwgXCJcIjtcbiAgICAgIHZhciBlbnRpdHlOYW1lID0gdGl0bGVcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAubWFwKGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICByZXR1cm4gcGFydC5zdWJzdHIoMCwgMSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKFwiXCIpO1xuICAgICAgLyogTGVhZmxldCBjbG9uZXMgdGhpcyBlbGVtZW50IGJlZm9yZSBhZGRpbmcgaXQgdG8gdGhlIG1hcC4gVGhpcyBtZXNzZXMgdXBcbiAgICAgICAgIG91ciBQb2x5bWVyIG9iamVjdCBhbmQgd2UgY2FuJ3QgcGFzcyBkYXRhIHRocm91Z2guIFRodXMgd2UgaGFjayBsaWtlIHRoaXMuICovXG4gICAgICBpY29uID0gdGhpcy5MZWFmbGV0LmRpdkljb24oe1xuICAgICAgICBodG1sOlxuICAgICAgICAgIFwiPGhhLWVudGl0eS1tYXJrZXIgZW50aXR5LWlkPSdcIiArXG4gICAgICAgICAgZW50aXR5LmVudGl0eV9pZCArXG4gICAgICAgICAgXCInIGVudGl0eS1uYW1lPSdcIiArXG4gICAgICAgICAgZW50aXR5TmFtZSArXG4gICAgICAgICAgXCInIGVudGl0eS1waWN0dXJlPSdcIiArXG4gICAgICAgICAgZW50aXR5UGljdHVyZSArXG4gICAgICAgICAgXCInPjwvaGEtZW50aXR5LW1hcmtlcj5cIixcbiAgICAgICAgaWNvblNpemU6IFs0NSwgNDVdLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIsXG4gICAgICB9KTtcblxuICAgICAgLy8gY3JlYXRlIG1hcmtldCB3aXRoIHRoZSBpY29uXG4gICAgICBtYXBJdGVtcy5wdXNoKFxuICAgICAgICB0aGlzLkxlYWZsZXQubWFya2VyKFxuICAgICAgICAgIFtlbnRpdHkuYXR0cmlidXRlcy5sYXRpdHVkZSwgZW50aXR5LmF0dHJpYnV0ZXMubG9uZ2l0dWRlXSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICAgICAgdGl0bGU6IGNvbXB1dGVTdGF0ZU5hbWUoZW50aXR5KSxcbiAgICAgICAgICB9XG4gICAgICAgICkuYWRkVG8obWFwKVxuICAgICAgKTtcblxuICAgICAgLy8gY3JlYXRlIGNpcmNsZSBhcm91bmQgaWYgZW50aXR5IGhhcyBhY2N1cmFjeVxuICAgICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzLmdwc19hY2N1cmFjeSkge1xuICAgICAgICBtYXBJdGVtcy5wdXNoKFxuICAgICAgICAgIHRoaXMuTGVhZmxldC5jaXJjbGUoXG4gICAgICAgICAgICBbZW50aXR5LmF0dHJpYnV0ZXMubGF0aXR1ZGUsIGVudGl0eS5hdHRyaWJ1dGVzLmxvbmdpdHVkZV0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAyODhEMVwiLFxuICAgICAgICAgICAgICByYWRpdXM6IGVudGl0eS5hdHRyaWJ1dGVzLmdwc19hY2N1cmFjeSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLmFkZFRvKG1hcClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYW5lbC1tYXBcIiwgSGFQYW5lbE1hcCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQWZBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUEzRUE7QUFDQTtBQTRFQTs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBUUE7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQVZBO0FBQ0E7QUFhQTtBQUlBO0FBQ0E7QUFGQTtBQUNBO0FBT0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUEvTEE7QUFDQTtBQWdNQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
