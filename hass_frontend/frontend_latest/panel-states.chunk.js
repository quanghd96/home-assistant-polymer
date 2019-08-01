(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-states"],
  {
    /***/ "./src/cards/ha-badges-card.js":
      /*!*************************************!*\
  !*** ./src/cards/ha-badges-card.js ***!
  \*************************************/
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
        /* harmony import */ var _components_entity_ha_state_label_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../components/entity/ha-state-label-badge */ "./src/components/entity/ha-state-label-badge.ts"
        );

        class HaBadgesCard extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style>
        ha-state-label-badge {
          display: inline-block;
          margin-bottom: var(--ha-state-label-badge-margin-bottom, 16px);
        }
      </style>
      <template is="dom-repeat" items="[[states]]">
        <ha-state-label-badge
          hass="[[hass]]"
          state="[[item]]"
        ></ha-state-label-badge>
      </template>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              states: Array,
            };
          }
        }

        customElements.define("ha-badges-card", HaBadgesCard);

        /***/
      },

    /***/ "./src/cards/ha-camera-card.js":
      /*!*************************************!*\
  !*** ./src/cards/ha-camera-card.js ***!
  \*************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_styles_element_styles_paper_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-styles/element-styles/paper-material-styles */ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../data/camera */ "./src/data/camera.ts"
        );

        const UPDATE_INTERVAL = 10000; // ms

        /*
         * @appliesMixin LocalizeMixin
         * @appliesMixin EventsMixin
         */

        class HaCameraCard extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
        )(
          Object(
            _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="paper-material-styles">
        :host {
          @apply --paper-material-elevation-1;
          display: block;
          position: relative;
          font-size: 0px;
          border-radius: 2px;
          cursor: pointer;
          min-height: 48px;
          line-height: 0;
        }
        .camera-feed {
          width: 100%;
          height: auto;
          border-radius: 2px;
        }
        .caption {
          @apply --paper-font-common-nowrap;
          position: absolute;
          left: 0px;
          right: 0px;
          bottom: 0px;
          border-bottom-left-radius: 2px;
          border-bottom-right-radius: 2px;

          background-color: rgba(0, 0, 0, 0.3);
          padding: 16px;

          font-size: 16px;
          font-weight: 500;
          line-height: 16px;
          color: white;
        }
      </style>

      <template is="dom-if" if="[[cameraFeedSrc]]">
        <img
          src="[[cameraFeedSrc]]"
          class="camera-feed"
          alt="[[_computeStateName(stateObj)]]"
          on-load="_imageLoaded"
          on-error="_imageError"
        />
      </template>
      <div class="caption">
        [[_computeStateName(stateObj)]]
        <template is="dom-if" if="[[!imageLoaded]]">
          ([[localize('ui.card.camera.not_available')]])
        </template>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: {
                type: Object,
                observer: "updateCameraFeedSrc",
              },
              cameraFeedSrc: {
                type: String,
                value: "",
              },
              imageLoaded: {
                type: Boolean,
                value: true,
              },
            };
          }

          ready() {
            super.ready();
            this.addEventListener("click", () => this.cardTapped());
          }

          connectedCallback() {
            super.connectedCallback();
            this.timer = setInterval(
              () => this.updateCameraFeedSrc(),
              UPDATE_INTERVAL
            );
          }

          disconnectedCallback() {
            super.disconnectedCallback();
            clearInterval(this.timer);
          }

          _imageLoaded() {
            this.imageLoaded = true;
          }

          _imageError() {
            this.imageLoaded = false;
          }

          cardTapped() {
            this.fire("hass-more-info", {
              entityId: this.stateObj.entity_id,
            });
          }

          async updateCameraFeedSrc() {
            this.cameraFeedSrc = await Object(
              _data_camera__WEBPACK_IMPORTED_MODULE_6__[
                "fetchThumbnailUrlWithCache"
              ]
            )(this.hass, this.stateObj.entity_id);
          }

          _computeStateName(stateObj) {
            return Object(
              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ]
            )(stateObj);
          }
        }

        customElements.define("ha-camera-card", HaCameraCard);

        /***/
      },

    /***/ "./src/cards/ha-card-chooser.js":
      /*!**************************************!*\
  !*** ./src/cards/ha-card-chooser.js ***!
  \**************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _ha_camera_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./ha-camera-card */ "./src/cards/ha-camera-card.js"
        );
        /* harmony import */ var _ha_entities_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./ha-entities-card */ "./src/cards/ha-entities-card.js"
        );
        /* harmony import */ var _ha_history_graph_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./ha-history_graph-card */ "./src/cards/ha-history_graph-card.js"
        );
        /* harmony import */ var _ha_media_player_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./ha-media_player-card */ "./src/cards/ha-media_player-card.js"
        );
        /* harmony import */ var _ha_persistent_notification_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./ha-persistent_notification-card */ "./src/cards/ha-persistent_notification-card.js"
        );
        /* harmony import */ var _ha_plant_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./ha-plant-card */ "./src/cards/ha-plant-card.js"
        );
        /* harmony import */ var _ha_weather_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./ha-weather-card */ "./src/cards/ha-weather-card.js"
        );
        /* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts"
        );

        class HaCardChooser extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__[
          "PolymerElement"
        ] {
          static get properties() {
            return {
              cardData: {
                type: Object,
                observer: "cardDataChanged",
              },
            };
          }

          _updateCard(newData) {
            Object(
              _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_8__[
                "default"
              ]
            )(this, "HA-" + newData.cardType.toUpperCase() + "-CARD", newData);
          }

          createObserver() {
            this._updatesAllowed = false;
            this.observer = new IntersectionObserver((entries) => {
              if (!entries.length) return;

              if (entries[0].isIntersecting) {
                this.style.height = "";

                if (this._detachedChild) {
                  this.appendChild(this._detachedChild);
                  this._detachedChild = null;
                }

                this._updateCard(this.cardData); // Don't use 'newData' as it might have changed.

                this._updatesAllowed = true;
              } else {
                // Set the card to be 48px high. Otherwise if the card is kept as 0px height then all
                // following cards would trigger the observer at once.
                const offsetHeight = this.offsetHeight;
                this.style.height = `${offsetHeight || 48}px`;

                if (this.lastChild) {
                  this._detachedChild = this.lastChild;
                  this.removeChild(this.lastChild);
                }

                this._updatesAllowed = false;
              }
            });
            this.observer.observe(this);
          }

          cardDataChanged(newData) {
            if (!newData) return; // ha-entities-card is exempt from observer as it doesn't load heavy resources.
            // and usually doesn't load external resources (except for entity_picture).

            const eligibleToObserver =
              window.IntersectionObserver && newData.cardType !== "entities";

            if (!eligibleToObserver) {
              if (this.observer) {
                this.observer.unobserve(this);
                this.observer = null;
              }

              this.style.height = "";

              this._updateCard(newData);

              return;
            }

            if (!this.observer) {
              this.createObserver();
            }

            if (this._updatesAllowed) {
              this._updateCard(newData);
            }
          }
        }

        customElements.define("ha-card-chooser", HaCardChooser);

        /***/
      },

    /***/ "./src/cards/ha-entities-card.js":
      /*!***************************************!*\
  !*** ./src/cards/ha-entities-card.js ***!
  \***************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../state-summary/state-card-content */ "./src/state-summary/state-card-content.js"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../common/entity/state_more_info_type */ "./src/common/entity/state_more_info_type.ts"
        );
        /* harmony import */ var _common_entity_can_toggle_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../common/entity/can_toggle_state */ "./src/common/entity/can_toggle_state.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );

        class HaEntitiesCard extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"]
        )(
          Object(
            _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="iron-flex"></style>
      <style>
        ha-card {
          padding: 16px;
        }
        .states {
          margin: -4px 0;
        }
        .state {
          padding: 4px 0;
        }
        .header {
          @apply --paper-font-headline;
          /* overwriting line-height +8 because entity-toggle can be 40px height,
           compensating this with reduced padding */
          line-height: 40px;
          color: var(--primary-text-color);
          padding: 4px 0 12px;
        }
        .header .name {
          @apply --paper-font-common-nowrap;
        }
        ha-entity-toggle {
          margin-left: 16px;
        }
        .more-info {
          cursor: pointer;
        }
      </style>

      <ha-card>
        <template is="dom-if" if="[[title]]">
          <div
            class$="[[computeTitleClass(groupEntity)]]"
            on-click="entityTapped"
          >
            <div class="flex name">[[title]]</div>
            <template is="dom-if" if="[[showGroupToggle(groupEntity, states)]]">
              <ha-entity-toggle
                hass="[[hass]]"
                state-obj="[[groupEntity]]"
              ></ha-entity-toggle>
            </template>
          </div>
        </template>
        <div class="states">
          <template
            is="dom-repeat"
            items="[[states]]"
            on-dom-change="addTapEvents"
          >
            <div class$="[[computeStateClass(item)]]">
              <state-card-content
                hass="[[hass]]"
                class="state-card"
                state-obj="[[item]]"
              ></state-card-content>
            </div>
          </template>
        </div>
      </ha-card>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              states: Array,
              groupEntity: Object,
              title: {
                type: String,
                computed: "computeTitle(states, groupEntity, localize)",
              },
            };
          }

          constructor() {
            super(); // We need to save a single bound function reference to ensure the event listener
            // can identify it properly.

            this.entityTapped = this.entityTapped.bind(this);
          }

          computeTitle(states, groupEntity, localize) {
            if (groupEntity) {
              return Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ]
              )(groupEntity).trim();
            }

            const domain = Object(
              _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ]
            )(states[0]);
            return (
              (localize && localize(`domain.${domain}`)) ||
              domain.replace(/_/g, " ")
            );
          }

          computeTitleClass(groupEntity) {
            let classes = "header horizontal layout center ";

            if (groupEntity) {
              classes += "more-info";
            }

            return classes;
          }

          computeStateClass(stateObj) {
            return Object(
              _common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_8__[
                "default"
              ]
            )(stateObj) !== "hidden"
              ? "state more-info"
              : "state";
          }

          addTapEvents() {
            const cards = this.root.querySelectorAll(".state");
            cards.forEach((card) => {
              if (card.classList.contains("more-info")) {
                card.addEventListener("click", this.entityTapped);
              } else {
                card.removeEventListener("click", this.entityTapped);
              }
            });
          }

          entityTapped(ev) {
            const item = this.root
              .querySelector("dom-repeat")
              .itemForElement(ev.target);
            let entityId;

            if (!item && !this.groupEntity) {
              return;
            }

            ev.stopPropagation();

            if (item) {
              entityId = item.entity_id;
            } else {
              entityId = this.groupEntity.entity_id;
            }

            this.fire("hass-more-info", {
              entityId: entityId,
            });
          }

          showGroupToggle(groupEntity, states) {
            if (
              !groupEntity ||
              !states ||
              groupEntity.attributes.control === "hidden" ||
              (groupEntity.state !== "on" && groupEntity.state !== "off")
            ) {
              return false;
            } // Only show if we can toggle 2+ entities in group

            let canToggleCount = 0;

            for (let i = 0; i < states.length; i++) {
              if (
                !Object(
                  _common_entity_can_toggle_state__WEBPACK_IMPORTED_MODULE_9__[
                    "default"
                  ]
                )(this.hass, states[i])
              ) {
                continue;
              }

              canToggleCount++;

              if (canToggleCount > 1) {
                break;
              }
            }

            return canToggleCount > 1;
          }
        }

        customElements.define("ha-entities-card", HaEntitiesCard);

        /***/
      },

    /***/ "./src/cards/ha-persistent_notification-card.js":
      /*!******************************************************!*\
  !*** ./src/cards/ha-persistent_notification-card.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/ha-markdown */ "./src/components/ha-markdown.js"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts"
        );

        /*
         * @appliesMixin LocalizeMixin
         */

        class HaPersistentNotificationCard extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        :host {
          @apply --paper-font-body1;
        }
        ha-markdown {
          display: block;
          padding: 0 16px;
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }
        ha-markdown p:first-child {
          margin-top: 0;
        }
        ha-markdown p:last-child {
          margin-bottom: 0;
        }
        ha-markdown a {
          color: var(--primary-color);
        }
        ha-markdown img {
          max-width: 100%;
        }
        mwc-button {
          margin: 8px;
        }
      </style>

      <ha-card header="[[computeTitle(stateObj)]]">
        <ha-markdown content="[[stateObj.attributes.message]]"></ha-markdown>
        <mwc-button on-click="dismissTap"
          >[[localize('ui.card.persistent_notification.dismiss')]]</mwc-button
        >
      </ha-card>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
            };
          }

          computeTitle(stateObj) {
            return (
              stateObj.attributes.title ||
              Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ]
              )(stateObj)
            );
          }

          dismissTap(ev) {
            ev.preventDefault();
            this.hass.callService("persistent_notification", "dismiss", {
              notification_id: Object(
                _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ]
              )(this.stateObj.entity_id),
            });
          }
        }

        customElements.define(
          "ha-persistent_notification-card",
          HaPersistentNotificationCard
        );

        /***/
      },

    /***/ "./src/cards/ha-plant-card.js":
      /*!************************************!*\
  !*** ./src/cards/ha-plant-card.js ***!
  \************************************/
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
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/ha-icon */ "./src/components/ha-icon.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );

        class HaPlantCard extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style>
        .banner {
          display: flex;
          align-items: flex-end;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          padding-top: 12px;
        }
        .has-plant-image .banner {
          padding-top: 30%;
        }
        .header {
          @apply --paper-font-headline;
          line-height: 40px;
          padding: 8px 16px;
        }
        .has-plant-image .header {
          font-size: 16px;
          font-weight: 500;
          line-height: 16px;
          padding: 16px;
          color: white;
          width: 100%;
          background: rgba(0, 0, 0, var(--dark-secondary-opacity));
        }
        .content {
          display: flex;
          justify-content: space-between;
          padding: 16px 32px 24px 32px;
        }
        .has-plant-image .content {
          padding-bottom: 16px;
        }
        ha-icon {
          color: var(--paper-item-icon-color);
          margin-bottom: 8px;
        }
        .attributes {
          cursor: pointer;
        }
        .attributes div {
          text-align: center;
        }
        .problem {
          color: var(--google-red-500);
          font-weight: bold;
        }
        .uom {
          color: var(--secondary-text-color);
        }
      </style>

      <ha-card
        class$="[[computeImageClass(stateObj.attributes.entity_picture)]]"
      >
        <div
          class="banner"
          style="background-image:url([[stateObj.attributes.entity_picture]])"
        >
          <div class="header">[[computeTitle(stateObj)]]</div>
        </div>
        <div class="content">
          <template
            is="dom-repeat"
            items="[[computeAttributes(stateObj.attributes)]]"
          >
            <div class="attributes" on-click="attributeClicked">
              <div>
                <ha-icon
                  icon="[[computeIcon(item, stateObj.attributes.battery)]]"
                ></ha-icon>
              </div>
              <div
                class$="[[computeAttributeClass(stateObj.attributes.problem, item)]]"
              >
                [[computeValue(stateObj.attributes, item)]]
              </div>
              <div class="uom">
                [[computeUom(stateObj.attributes.unit_of_measurement_dict,
                item)]]
              </div>
            </div>
          </template>
        </div>
      </ha-card>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              config: Object,
            };
          }

          constructor() {
            super();
            this.sensors = {
              moisture: "hass:water",
              temperature: "hass:thermometer",
              brightness: "hass:white-balance-sunny",
              conductivity: "hass:emoticon-poop",
              battery: "hass:battery",
            };
          }

          computeTitle(stateObj) {
            return (
              (this.config && this.config.name) ||
              Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ]
              )(stateObj)
            );
          }

          computeAttributes(data) {
            return Object.keys(this.sensors).filter((key) => key in data);
          }

          computeIcon(attr, batLvl) {
            const icon = this.sensors[attr];

            if (attr === "battery") {
              if (batLvl <= 5) {
                return `${icon}-alert`;
              }

              if (batLvl < 95) {
                return `${icon}-${Math.round(batLvl / 10 - 0.01) * 10}`;
              }
            }

            return icon;
          }

          computeValue(attributes, attr) {
            return attributes[attr];
          }

          computeUom(dict, attr) {
            return dict[attr] || "";
          }

          computeAttributeClass(problem, attr) {
            return problem.indexOf(attr) === -1 ? "" : "problem";
          }

          computeImageClass(entityPicture) {
            return entityPicture ? "has-plant-image" : "";
          }

          attributeClicked(ev) {
            this.fire("hass-more-info", {
              entityId: this.stateObj.attributes.sensors[ev.model.item],
            });
          }
        }

        customElements.define("ha-plant-card", HaPlantCard);

        /***/
      },

    /***/ "./src/common/config/location_name.ts":
      /*!********************************************!*\
  !*** ./src/common/config/location_name.ts ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return computeLocationName;
          }
        );
        /** Get the location name from a hass object. */
        function computeLocationName(hass) {
          return hass && hass.config.location_name;
        }

        /***/
      },

    /***/ "./src/components/ha-cards.js":
      /*!************************************!*\
  !*** ./src/components/ha-cards.js ***!
  \************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
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
        /* harmony import */ var _cards_ha_badges_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../cards/ha-badges-card */ "./src/cards/ha-badges-card.js"
        );
        /* harmony import */ var _cards_ha_card_chooser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../cards/ha-card-chooser */ "./src/cards/ha-card-chooser.js"
        );
        /* harmony import */ var _ha_demo_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./ha-demo-badge */ "./src/components/ha-demo-badge.js"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../common/entity/split_by_groups */ "./src/common/entity/split_by_groups.ts"
        );
        /* harmony import */ var _common_entity_get_group_entities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../common/entity/get_group_entities */ "./src/common/entity/get_group_entities.ts"
        );

        // mapping domain to size of the card.

        const DOMAINS_WITH_CARD = {
          camera: 4,
          history_graph: 4,
          media_player: 3,
          persistent_notification: 0,
          plant: 3,
          weather: 4,
        }; // 4 types:
        // badges: 0 .. 10
        // before groups < 0
        // groups: X
        // rest: 100

        const PRIORITY = {
          // before groups < 0
          configurator: -20,
          persistent_notification: -15,
          // badges have priority >= 0
          updater: 0,
          sun: 1,
          person: 2,
          device_tracker: 3,
          alarm_control_panel: 4,
          timer: 5,
          sensor: 6,
          binary_sensor: 7,
          mailbox: 8,
        };

        const getPriority = (domain) =>
          domain in PRIORITY ? PRIORITY[domain] : 100;

        const sortPriority = (domainA, domainB) =>
          domainA.priority - domainB.priority;

        const entitySortBy = (entityA, entityB) => {
          const nameA = (
            entityA.attributes.friendly_name || entityA.entity_id
          ).toLowerCase();
          const nameB = (
            entityB.attributes.friendly_name || entityB.entity_id
          ).toLowerCase();

          if (nameA < nameB) {
            return -1;
          }

          if (nameA > nameB) {
            return 1;
          }

          return 0;
        };

        const iterateDomainSorted = (collection, func) => {
          Object.keys(collection)
            .map((key) => collection[key])
            .sort(sortPriority)
            .forEach((domain) => {
              domain.states.sort(entitySortBy);
              func(domain);
            });
        };

        class HaCards extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
              "html"
            ]`
      <style include="iron-flex iron-flex-factors"></style>
      <style>
        :host {
          display: block;
          padding: 4px 4px 0;
          transform: translateZ(0);
          position: relative;
        }

        .badges {
          font-size: 85%;
          text-align: center;
          padding-top: 16px;
        }

        .column {
          max-width: 500px;
          overflow-x: hidden;
        }

        ha-card-chooser {
          display: block;
          margin: 4px 4px 8px;
        }

        @media (max-width: 500px) {
          :host {
            padding-left: 0;
            padding-right: 0;
          }

          ha-card-chooser {
            margin-left: 0;
            margin-right: 0;
          }
        }

        @media (max-width: 599px) {
          .column {
            max-width: 600px;
          }
        }
      </style>

      <div id="main">
        <template is="dom-if" if="[[cards.badges.length]]">
          <div class="badges">
            <template is="dom-if" if="[[cards.demo]]">
              <ha-demo-badge></ha-demo-badge>
            </template>

            <ha-badges-card
              states="[[cards.badges]]"
              hass="[[hass]]"
            ></ha-badges-card>
          </div>
        </template>

        <div class="horizontal layout center-justified">
          <template is="dom-repeat" items="[[cards.columns]]" as="column">
            <div class="column flex-1">
              <template is="dom-repeat" items="[[column]]" as="card">
                <ha-card-chooser card-data="[[card]]"></ha-card-chooser>
              </template>
            </div>
          </template>
        </div>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              columns: {
                type: Number,
                value: 2,
              },
              states: Object,
              viewVisible: {
                type: Boolean,
                value: false,
              },
              orderedGroupEntities: Array,
              cards: Object,
            };
          }

          static get observers() {
            return [
              "updateCards(columns, states, viewVisible, orderedGroupEntities)",
            ];
          }

          updateCards(columns, states, viewVisible, orderedGroupEntities) {
            if (!viewVisible) {
              if (this.$.main.parentNode) {
                this.$.main._parentNode = this.$.main.parentNode;
                this.$.main.parentNode.removeChild(this.$.main);
              }

              return;
            }

            if (!this.$.main.parentNode && this.$.main._parentNode) {
              this.$.main._parentNode.appendChild(this.$.main);
            }

            this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__[
              "Debouncer"
            ].debounce(
              this._debouncer,
              _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__[
                "timeOut"
              ].after(10),
              () => {
                // Things might have changed since it got scheduled.
                if (this.viewVisible) {
                  this.cards = this.computeCards(
                    columns,
                    states,
                    orderedGroupEntities
                  );
                }
              }
            );
          }

          emptyCards() {
            return {
              demo: false,
              badges: [],
              columns: [],
            };
          }

          computeCards(columns, states, orderedGroupEntities) {
            const hass = this.hass;
            const cards = this.emptyCards();
            const entityCount = [];

            for (let i = 0; i < columns; i++) {
              cards.columns.push([]);
              entityCount.push(0);
            } // Find column with < 5 entities, else column with lowest count

            function getIndex(size) {
              let minIndex = 0;

              for (let i = 0; i < entityCount.length; i++) {
                if (entityCount[i] < 5) {
                  minIndex = i;
                  break;
                }

                if (entityCount[i] < entityCount[minIndex]) {
                  minIndex = i;
                }
              }

              entityCount[minIndex] += size;
              return minIndex;
            }

            function addEntitiesCard(name, entities, groupEntity) {
              if (entities.length === 0) return;
              const owncard = [];
              const other = [];
              let size = 0;
              entities.forEach((entity) => {
                const domain = Object(
                  _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__[
                    "default"
                  ]
                )(entity);

                if (
                  domain in DOMAINS_WITH_CARD &&
                  !entity.attributes.custom_ui_state_card
                ) {
                  owncard.push(entity);
                  size += DOMAINS_WITH_CARD[domain];
                } else {
                  other.push(entity);
                  size++;
                }
              }); // Add 1 to the size if we're rendering entities card

              size += other.length > 0;
              const curIndex = getIndex(size);

              if (other.length > 0) {
                cards.columns[curIndex].push({
                  hass: hass,
                  cardType: "entities",
                  states: other,
                  groupEntity: groupEntity || false,
                });
              }

              owncard.forEach((entity) => {
                cards.columns[curIndex].push({
                  hass: hass,
                  cardType: Object(
                    _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__[
                      "default"
                    ]
                  )(entity),
                  stateObj: entity,
                });
              });
            }

            const splitted = Object(
              _common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_9__[
                "default"
              ]
            )(states);

            if (orderedGroupEntities) {
              splitted.groups.sort(
                (gr1, gr2) =>
                  orderedGroupEntities[gr1.entity_id] -
                  orderedGroupEntities[gr2.entity_id]
              );
            } else {
              splitted.groups.sort(
                (gr1, gr2) => gr1.attributes.order - gr2.attributes.order
              );
            }

            const badgesColl = {};
            const beforeGroupColl = {};
            const afterGroupedColl = {};
            Object.keys(splitted.ungrouped).forEach((key) => {
              const state = splitted.ungrouped[key];
              const domain = Object(
                _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__[
                  "default"
                ]
              )(state);

              if (domain === "a") {
                cards.demo = true;
                return;
              }

              const priority = getPriority(domain);
              let coll;

              if (priority < 0) {
                coll = beforeGroupColl;
              } else if (priority < 10) {
                coll = badgesColl;
              } else {
                coll = afterGroupedColl;
              }

              if (!(domain in coll)) {
                coll[domain] = {
                  domain: domain,
                  priority: priority,
                  states: [],
                };
              }

              coll[domain].states.push(state);
            });

            if (orderedGroupEntities) {
              Object.keys(badgesColl)
                .map((key) => badgesColl[key])
                .forEach((domain) => {
                  cards.badges.push.apply(cards.badges, domain.states);
                });
              cards.badges.sort(
                (e1, e2) =>
                  orderedGroupEntities[e1.entity_id] -
                  orderedGroupEntities[e2.entity_id]
              );
            } else {
              iterateDomainSorted(badgesColl, (domain) => {
                cards.badges.push.apply(cards.badges, domain.states);
              });
            }

            iterateDomainSorted(beforeGroupColl, (domain) => {
              addEntitiesCard(domain.domain, domain.states);
            });
            splitted.groups.forEach((groupState) => {
              const entities = Object(
                _common_entity_get_group_entities__WEBPACK_IMPORTED_MODULE_10__[
                  "default"
                ]
              )(states, groupState);
              addEntitiesCard(
                groupState.entity_id,
                Object.keys(entities).map((key) => entities[key]),
                groupState
              );
            });
            iterateDomainSorted(afterGroupedColl, (domain) => {
              addEntitiesCard(domain.domain, domain.states);
            }); // Remove empty columns

            cards.columns = cards.columns.filter((val) => val.length > 0);
            return cards;
          }
        }

        customElements.define("ha-cards", HaCards);

        /***/
      },

    /***/ "./src/components/ha-demo-badge.js":
      /*!*****************************************!*\
  !*** ./src/components/ha-demo-badge.js ***!
  \*****************************************/
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
        /* harmony import */ var _ha_label_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./ha-label-badge */ "./src/components/ha-label-badge.ts"
        );

        class HaDemoBadge extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style>
        :host {
          --ha-label-badge-color: #dac90d;
        }
      </style>

      <ha-label-badge
        icon="hass:emoticon"
        label="Demo"
        description=""
      ></ha-label-badge>
    `;
          }
        }

        customElements.define("ha-demo-badge", HaDemoBadge);

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

    /***/ "./src/panels/states/ha-panel-states.js":
      /*!**********************************************!*\
  !*** ./src/panels/states/ha-panel-states.js ***!
  \**********************************************/
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
        /* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js"
        );
        /* harmony import */ var _polymer_app_layout_app_scroll_effects_effects_waterfall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/app-layout/app-scroll-effects/effects/waterfall */ "./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js"
        );
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js"
        );
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_iron_pages_iron_pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/iron-pages/iron-pages */ "./node_modules/@polymer/iron-pages/iron-pages.js"
        );
        /* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js"
        );
        /* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js"
        );
        /* harmony import */ var _components_ha_cards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../components/ha-cards */ "./src/components/ha-cards.js"
        );
        /* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../components/ha-icon */ "./src/components/ha-icon.ts"
        );
        /* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts"
        );
        /* harmony import */ var _components_ha_start_voice_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../components/ha-start-voice-button */ "./src/components/ha-start-voice-button.js"
        );
        /* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js"
        );
        /* harmony import */ var _common_entity_extract_views__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../common/entity/extract_views */ "./src/common/entity/extract_views.ts"
        );
        /* harmony import */ var _common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../common/entity/get_view_entities */ "./src/common/entity/get_view_entities.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _common_config_location_name__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../common/config/location_name */ "./src/common/config/location_name.ts"
        );
        /* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );

        const DEFAULT_VIEW_ENTITY_ID = "group.default_view";
        const ALWAYS_SHOW_DOMAIN = ["persistent_notification", "configurator"];
        /*
         * @appliesMixin EventsMixin
         * @appliesMixin NavigateMixin
         */

        class PartialCards extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_21__["EventsMixin"]
        )(
          Object(
            _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_20__["default"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style include="iron-flex iron-positioning ha-style">
        :host {
          -ms-user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
        }

        ha-app-layout {
          min-height: 100%;
          background-color: var(--secondary-background-color, #e5e5e5);
        }

        iron-pages {
          height: 100%;
        }

        paper-tabs {
          margin-left: 12px;
          --paper-tabs-selection-bar-color: var(--text-primary-color, #fff);
          text-transform: uppercase;
        }
      </style>
      <app-route
        route="{{route}}"
        pattern="/:view"
        data="{{routeData}}"
        active="{{routeMatch}}"
      ></app-route>
      <ha-app-layout id="layout">
        <app-header effects="waterfall" condenses="" fixed="" slot="header">
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title="">
              [[computeTitle(views, defaultView, locationName)]]
            </div>
            <ha-start-voice-button hass="[[hass]]"></ha-start-voice-button>
          </app-toolbar>

          <div sticky="" hidden$="[[areTabsHidden(views, showTabs)]]">
            <paper-tabs
              scrollable=""
              selected="[[currentView]]"
              attr-for-selected="data-entity"
              on-iron-activate="handleViewSelected"
            >
              <paper-tab data-entity="" on-click="scrollToTop">
                <template is="dom-if" if="[[!defaultView]]">
                  Home
                </template>
                <template is="dom-if" if="[[defaultView]]">
                  <template is="dom-if" if="[[defaultView.attributes.icon]]">
                    <ha-icon
                      title$="[[_computeStateName(defaultView)]]"
                      icon="[[defaultView.attributes.icon]]"
                    ></ha-icon>
                  </template>
                  <template is="dom-if" if="[[!defaultView.attributes.icon]]">
                    [[_computeStateName(defaultView)]]
                  </template>
                </template>
              </paper-tab>
              <template is="dom-repeat" items="[[views]]">
                <paper-tab
                  data-entity$="[[item.entity_id]]"
                  on-click="scrollToTop"
                >
                  <template is="dom-if" if="[[item.attributes.icon]]">
                    <ha-icon
                      title$="[[_computeStateName(item)]]"
                      icon="[[item.attributes.icon]]"
                    ></ha-icon>
                  </template>
                  <template is="dom-if" if="[[!item.attributes.icon]]">
                    [[_computeStateName(item)]]
                  </template>
                </paper-tab>
              </template>
            </paper-tabs>
          </div>
        </app-header>

        <iron-pages
          attr-for-selected="data-view"
          selected="[[currentView]]"
          selected-attribute="view-visible"
        >
          <ha-cards
            data-view=""
            states="[[viewStates]]"
            columns="[[_columns]]"
            hass="[[hass]]"
            panel-visible="[[panelVisible]]"
            ordered-group-entities="[[orderedGroupEntities]]"
          ></ha-cards>

          <template is="dom-repeat" items="[[views]]">
            <ha-cards
              data-view$="[[item.entity_id]]"
              states="[[viewStates]]"
              columns="[[_columns]]"
              hass="[[hass]]"
              panel-visible="[[panelVisible]]"
              ordered-group-entities="[[orderedGroupEntities]]"
            ></ha-cards>
          </template>
        </iron-pages>
      </ha-app-layout>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
                value: null,
                observer: "hassChanged",
              },
              narrow: {
                type: Boolean,
                value: false,
              },
              panelVisible: {
                type: Boolean,
                value: false,
              },
              route: Object,
              routeData: Object,
              routeMatch: Boolean,
              _columns: {
                type: Number,
                value: 1,
              },
              locationName: {
                type: String,
                value: "",
                computed: "_computeLocationName(hass)",
              },
              currentView: {
                type: String,
                computed: "_computeCurrentView(hass, routeMatch, routeData)",
              },
              views: {
                type: Array,
              },
              defaultView: {
                type: Object,
              },
              viewStates: {
                type: Object,
                computed: "computeViewStates(currentView, hass, defaultView)",
              },
              orderedGroupEntities: {
                type: Array,
                computed:
                  "computeOrderedGroupEntities(currentView, hass, defaultView)",
              },
              showTabs: {
                type: Boolean,
                value: true,
              },
            };
          }

          static get observers() {
            return ["_updateColumns(narrow, hass.dockedSidebar)"];
          }

          ready() {
            this._updateColumns = this._updateColumns.bind(this);
            this.mqls = [300, 600, 900, 1200].map((width) =>
              matchMedia(`(min-width: ${width}px)`)
            );
            super.ready();
          }

          connectedCallback() {
            super.connectedCallback();
            this.mqls.forEach((mql) => mql.addListener(this._updateColumns));
          }

          disconnectedCallback() {
            super.disconnectedCallback();
            this.mqls.forEach((mql) => mql.removeListener(this._updateColumns));
          }

          _updateColumns() {
            const matchColumns = this.mqls.reduce(
              (cols, mql) => cols + mql.matches,
              0
            ); // Do -1 column if the menu is docked and open

            this._columns = Math.max(
              1,
              matchColumns - (!this.narrow && this.hass.dockedSidebar)
            );
          }

          areTabsHidden(views, showTabs) {
            return !views || !views.length || !showTabs;
          }
          /**
           * Scroll to a specific y coordinate.
           *
           * Copied from paper-scroll-header-panel.
           *
           * @method scroll
           * @param {number} top The coordinate to scroll to, along the y-axis.
           * @param {boolean} smooth true if the scroll position should be smoothly adjusted.
           */

          scrollToTop() {
            // the scroll event will trigger _updateScrollState directly,
            // However, _updateScrollState relies on the previous `scrollTop` to update the states.
            // Calling _updateScrollState will ensure that the states are synced correctly.
            var top = 0;
            var scroller = this.$.layout.header.scrollTarget;

            var easingFn = function easeOutQuad(t, b, c, d) {
              /* eslint-disable no-param-reassign, space-infix-ops, no-mixed-operators */
              t /= d;
              return -c * t * (t - 2) + b;
              /* eslint-enable no-param-reassign, space-infix-ops, no-mixed-operators */
            };

            var animationId = Math.random();
            var duration = 200;
            var startTime = Date.now();
            var currentScrollTop = scroller.scrollTop;
            var deltaScrollTop = top - currentScrollTop;
            this._currentAnimationId = animationId;
            (function updateFrame() {
              var now = Date.now();
              var elapsedTime = now - startTime;

              if (elapsedTime > duration) {
                scroller.scrollTop = top;
              } else if (this._currentAnimationId === animationId) {
                scroller.scrollTop = easingFn(
                  elapsedTime,
                  currentScrollTop,
                  deltaScrollTop,
                  duration
                );
                requestAnimationFrame(updateFrame.bind(this));
              }
            }.call(this));
          }

          handleViewSelected(ev) {
            const view = ev.detail.item.getAttribute("data-entity") || null;

            if (view !== this.currentView) {
              let path = "/states";

              if (view) {
                path += "/" + view;
              }

              this.navigate(path);
            }
          }

          _computeCurrentView(hass, routeMatch, routeData) {
            if (!routeMatch) return "";

            if (
              !hass.states[routeData.view] ||
              !hass.states[routeData.view].attributes.view
            ) {
              return "";
            }

            return routeData.view;
          }

          computeTitle(views, defaultView, locationName) {
            return (views &&
              views.length > 0 &&
              !defaultView &&
              locationName === "Home") ||
              !locationName
              ? "JAVIS Home"
              : locationName;
          }

          _computeStateName(stateObj) {
            return Object(
              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_17__[
                "default"
              ]
            )(stateObj);
          }

          _computeLocationName(hass) {
            return Object(
              _common_config_location_name__WEBPACK_IMPORTED_MODULE_19__[
                "default"
              ]
            )(hass);
          }

          hassChanged(hass) {
            if (!hass) return;
            const views = Object(
              _common_entity_extract_views__WEBPACK_IMPORTED_MODULE_15__[
                "default"
              ]
            )(hass.states);
            let defaultView = null; // If default view present, it's in first index.

            if (
              views.length > 0 &&
              views[0].entity_id === DEFAULT_VIEW_ENTITY_ID
            ) {
              defaultView = views.shift();
            }

            this.setProperties({
              views,
              defaultView,
            });
          }

          isView(currentView, defaultView) {
            return (
              (currentView || defaultView) &&
              this.hass.states[currentView || DEFAULT_VIEW_ENTITY_ID]
            );
          }

          _defaultViewFilter(hass, entityId) {
            // Filter out hidden
            return !hass.states[entityId].attributes.hidden;
          }

          _computeDefaultViewStates(hass, entityIds) {
            const states = {};
            entityIds
              .filter(this._defaultViewFilter.bind(null, hass))
              .forEach((entityId) => {
                states[entityId] = hass.states[entityId];
              });
            return states;
          }
          /*
    Compute the states to show for current view.
     Will make sure we always show entities from ALWAYS_SHOW_DOMAINS domains.
  */

          computeViewStates(currentView, hass, defaultView) {
            const entityIds = Object.keys(hass.states); // If we base off all entities, only have to filter out hidden

            if (!this.isView(currentView, defaultView)) {
              return this._computeDefaultViewStates(hass, entityIds);
            }

            let states;

            if (currentView) {
              states = Object(
                _common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_16__[
                  "default"
                ]
              )(hass.states, hass.states[currentView]);
            } else {
              states = Object(
                _common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_16__[
                  "default"
                ]
              )(hass.states, hass.states[DEFAULT_VIEW_ENTITY_ID]);
            } // Make sure certain domains are always shown.

            entityIds.forEach((entityId) => {
              const state = hass.states[entityId];

              if (
                ALWAYS_SHOW_DOMAIN.includes(
                  Object(
                    _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_18__[
                      "default"
                    ]
                  )(state)
                )
              ) {
                states[entityId] = state;
              }
            });
            return states;
          }
          /*
    Compute the ordered list of groups for this view
  */

          computeOrderedGroupEntities(currentView, hass, defaultView) {
            if (!this.isView(currentView, defaultView)) {
              return null;
            }

            var orderedGroupEntities = {};
            var entitiesList =
              hass.states[currentView || DEFAULT_VIEW_ENTITY_ID].attributes
                .entity_id;

            for (var i = 0; i < entitiesList.length; i++) {
              orderedGroupEntities[entitiesList[i]] = i;
            }

            return orderedGroupEntities;
          }
        }

        customElements.define("ha-panel-states", PartialCards);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtc3RhdGVzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmRzL2hhLWJhZGdlcy1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1jYW1lcmEtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FyZHMvaGEtY2FyZC1jaG9vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1lbnRpdGllcy1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1wZXJzaXN0ZW50X25vdGlmaWNhdGlvbi1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1wbGFudC1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uZmlnL2xvY2F0aW9uX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtZGVtby1iYWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL25hdmlnYXRlLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvc3RhdGVzL2hhLXBhbmVsLXN0YXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9oYS1zdGF0ZS1sYWJlbC1iYWRnZVwiO1xuXG5jbGFzcyBIYUJhZGdlc0NhcmQgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGhhLXN0YXRlLWxhYmVsLWJhZGdlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taGEtc3RhdGUtbGFiZWwtYmFkZ2UtbWFyZ2luLWJvdHRvbSwgMTZweCk7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3N0YXRlc11dXCI+XG4gICAgICAgIDxoYS1zdGF0ZS1sYWJlbC1iYWRnZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgc3RhdGU9XCJbW2l0ZW1dXVwiXG4gICAgICAgID48L2hhLXN0YXRlLWxhYmVsLWJhZGdlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZXM6IEFycmF5LFxuICAgIH07XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWJhZGdlcy1jYXJkXCIsIEhhQmFkZ2VzQ2FyZCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGZldGNoVGh1bWJuYWlsVXJsV2l0aENhY2hlIH0gZnJvbSBcIi4uL2RhdGEvY2FtZXJhXCI7XG5cbmNvbnN0IFVQREFURV9JTlRFUlZBTCA9IDEwMDAwOyAvLyBtc1xuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNhbWVyYUNhcmQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1tYXRlcmlhbC1zdHlsZXNcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmb250LXNpemU6IDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbWVyYS1mZWVkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xuXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjYW1lcmFGZWVkU3JjXV1cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIltbY2FtZXJhRmVlZFNyY11dXCJcbiAgICAgICAgICBjbGFzcz1cImNhbWVyYS1mZWVkXCJcbiAgICAgICAgICBhbHQ9XCJbW19jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKV1dXCJcbiAgICAgICAgICBvbi1sb2FkPVwiX2ltYWdlTG9hZGVkXCJcbiAgICAgICAgICBvbi1lcnJvcj1cIl9pbWFnZUVycm9yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FwdGlvblwiPlxuICAgICAgICBbW19jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKV1dXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shaW1hZ2VMb2FkZWRdXVwiPlxuICAgICAgICAgIChbW2xvY2FsaXplKCd1aS5jYXJkLmNhbWVyYS5ub3RfYXZhaWxhYmxlJyldXSlcbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwidXBkYXRlQ2FtZXJhRmVlZFNyY1wiLFxuICAgICAgfSxcbiAgICAgIGNhbWVyYUZlZWRTcmM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgICBpbWFnZUxvYWRlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jYXJkVGFwcGVkKCkpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVDYW1lcmFGZWVkU3JjKCksIFVQREFURV9JTlRFUlZBTCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gIH1cblxuICBfaW1hZ2VMb2FkZWQoKSB7XG4gICAgdGhpcy5pbWFnZUxvYWRlZCA9IHRydWU7XG4gIH1cblxuICBfaW1hZ2VFcnJvcigpIHtcbiAgICB0aGlzLmltYWdlTG9hZGVkID0gZmFsc2U7XG4gIH1cblxuICBjYXJkVGFwcGVkKCkge1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH0pO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlQ2FtZXJhRmVlZFNyYygpIHtcbiAgICB0aGlzLmNhbWVyYUZlZWRTcmMgPSBhd2FpdCBmZXRjaFRodW1ibmFpbFVybFdpdGhDYWNoZShcbiAgICAgIHRoaXMuaGFzcyxcbiAgICAgIHRoaXMuc3RhdGVPYmouZW50aXR5X2lkXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jYW1lcmEtY2FyZFwiLCBIYUNhbWVyYUNhcmQpO1xuIiwiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1jYW1lcmEtY2FyZFwiO1xuaW1wb3J0IFwiLi9oYS1lbnRpdGllcy1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLWhpc3RvcnlfZ3JhcGgtY2FyZFwiO1xuaW1wb3J0IFwiLi9oYS1tZWRpYV9wbGF5ZXItY2FyZFwiO1xuaW1wb3J0IFwiLi9oYS1wZXJzaXN0ZW50X25vdGlmaWNhdGlvbi1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLXBsYW50LWNhcmRcIjtcbmltcG9ydCBcIi4vaGEtd2VhdGhlci1jYXJkXCI7XG5cbmltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSBcIi4uL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXJcIjtcblxuY2xhc3MgSGFDYXJkQ2hvb3NlciBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXJkRGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImNhcmREYXRhQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX3VwZGF0ZUNhcmQobmV3RGF0YSkge1xuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICBcIkhBLVwiICsgbmV3RGF0YS5jYXJkVHlwZS50b1VwcGVyQ2FzZSgpICsgXCItQ0FSRFwiLFxuICAgICAgbmV3RGF0YVxuICAgICk7XG4gIH1cblxuICBjcmVhdGVPYnNlcnZlcigpIHtcbiAgICB0aGlzLl91cGRhdGVzQWxsb3dlZCA9IGZhbHNlO1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgIGlmICghZW50cmllcy5sZW5ndGgpIHJldHVybjtcbiAgICAgIGlmIChlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuX2RldGFjaGVkQ2hpbGQpIHtcbiAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuX2RldGFjaGVkQ2hpbGQpO1xuICAgICAgICAgIHRoaXMuX2RldGFjaGVkQ2hpbGQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNhcmQodGhpcy5jYXJkRGF0YSk7IC8vIERvbid0IHVzZSAnbmV3RGF0YScgYXMgaXQgbWlnaHQgaGF2ZSBjaGFuZ2VkLlxuICAgICAgICB0aGlzLl91cGRhdGVzQWxsb3dlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXQgdGhlIGNhcmQgdG8gYmUgNDhweCBoaWdoLiBPdGhlcndpc2UgaWYgdGhlIGNhcmQgaXMga2VwdCBhcyAwcHggaGVpZ2h0IHRoZW4gYWxsXG4gICAgICAgIC8vIGZvbGxvd2luZyBjYXJkcyB3b3VsZCB0cmlnZ2VyIHRoZSBvYnNlcnZlciBhdCBvbmNlLlxuICAgICAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSB0aGlzLm9mZnNldEhlaWdodDtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgJHtvZmZzZXRIZWlnaHQgfHwgNDh9cHhgO1xuICAgICAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICB0aGlzLl9kZXRhY2hlZENoaWxkID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlc0FsbG93ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcyk7XG4gIH1cblxuICBjYXJkRGF0YUNoYW5nZWQobmV3RGF0YSkge1xuICAgIGlmICghbmV3RGF0YSkgcmV0dXJuO1xuICAgIC8vIGhhLWVudGl0aWVzLWNhcmQgaXMgZXhlbXB0IGZyb20gb2JzZXJ2ZXIgYXMgaXQgZG9lc24ndCBsb2FkIGhlYXZ5IHJlc291cmNlcy5cbiAgICAvLyBhbmQgdXN1YWxseSBkb2Vzbid0IGxvYWQgZXh0ZXJuYWwgcmVzb3VyY2VzIChleGNlcHQgZm9yIGVudGl0eV9waWN0dXJlKS5cbiAgICBjb25zdCBlbGlnaWJsZVRvT2JzZXJ2ZXIgPVxuICAgICAgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyICYmIG5ld0RhdGEuY2FyZFR5cGUgIT09IFwiZW50aXRpZXNcIjtcbiAgICBpZiAoIWVsaWdpYmxlVG9PYnNlcnZlcikge1xuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci51bm9ic2VydmUodGhpcyk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICAgICAgdGhpcy5fdXBkYXRlQ2FyZChuZXdEYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm9ic2VydmVyKSB7XG4gICAgICB0aGlzLmNyZWF0ZU9ic2VydmVyKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl91cGRhdGVzQWxsb3dlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlQ2FyZChuZXdEYXRhKTtcbiAgICB9XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhcmQtY2hvb3NlclwiLCBIYUNhcmRDaG9vc2VyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktdG9nZ2xlXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1jb250ZW50XCI7XG5cbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHN0YXRlTW9yZUluZm9UeXBlIGZyb20gXCIuLi9jb21tb24vZW50aXR5L3N0YXRlX21vcmVfaW5mb190eXBlXCI7XG5pbXBvcnQgY2FuVG9nZ2xlU3RhdGUgZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY2FuX3RvZ2dsZV9zdGF0ZVwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5jbGFzcyBIYUVudGl0aWVzQ2FyZCBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXRlcyB7XG4gICAgICAgICAgbWFyZ2luOiAtNHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICAgIC8qIG92ZXJ3cml0aW5nIGxpbmUtaGVpZ2h0ICs4IGJlY2F1c2UgZW50aXR5LXRvZ2dsZSBjYW4gYmUgNDBweCBoZWlnaHQsXG4gICAgICAgICAgIGNvbXBlbnNhdGluZyB0aGlzIHdpdGggcmVkdWNlZCBwYWRkaW5nICovXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDAgMTJweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIC5uYW1lIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgaGEtZW50aXR5LXRvZ2dsZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1vcmUtaW5mbyB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3RpdGxlXV1cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcyQ9XCJbW2NvbXB1dGVUaXRsZUNsYXNzKGdyb3VwRW50aXR5KV1dXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwiZW50aXR5VGFwcGVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBuYW1lXCI+W1t0aXRsZV1dPC9kaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc2hvd0dyb3VwVG9nZ2xlKGdyb3VwRW50aXR5LCBzdGF0ZXMpXV1cIj5cbiAgICAgICAgICAgICAgPGhhLWVudGl0eS10b2dnbGVcbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbZ3JvdXBFbnRpdHldXVwiXG4gICAgICAgICAgICAgID48L2hhLWVudGl0eS10b2dnbGU+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGVzXCI+XG4gICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgaXRlbXM9XCJbW3N0YXRlc11dXCJcbiAgICAgICAgICAgIG9uLWRvbS1jaGFuZ2U9XCJhZGRUYXBFdmVudHNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlU3RhdGVDbGFzcyhpdGVtKV1dXCI+XG4gICAgICAgICAgICAgIDxzdGF0ZS1jYXJkLWNvbnRlbnRcbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdGUtY2FyZFwiXG4gICAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tpdGVtXV1cIlxuICAgICAgICAgICAgICA+PC9zdGF0ZS1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZXM6IEFycmF5LFxuICAgICAgZ3JvdXBFbnRpdHk6IE9iamVjdCxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVRpdGxlKHN0YXRlcywgZ3JvdXBFbnRpdHksIGxvY2FsaXplKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyBXZSBuZWVkIHRvIHNhdmUgYSBzaW5nbGUgYm91bmQgZnVuY3Rpb24gcmVmZXJlbmNlIHRvIGVuc3VyZSB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICAvLyBjYW4gaWRlbnRpZnkgaXQgcHJvcGVybHkuXG4gICAgdGhpcy5lbnRpdHlUYXBwZWQgPSB0aGlzLmVudGl0eVRhcHBlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcHV0ZVRpdGxlKHN0YXRlcywgZ3JvdXBFbnRpdHksIGxvY2FsaXplKSB7XG4gICAgaWYgKGdyb3VwRW50aXR5KSB7XG4gICAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShncm91cEVudGl0eSkudHJpbSgpO1xuICAgIH1cbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVzWzBdKTtcbiAgICByZXR1cm4gKFxuICAgICAgKGxvY2FsaXplICYmIGxvY2FsaXplKGBkb21haW4uJHtkb21haW59YCkpIHx8IGRvbWFpbi5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgICk7XG4gIH1cblxuICBjb21wdXRlVGl0bGVDbGFzcyhncm91cEVudGl0eSkge1xuICAgIGxldCBjbGFzc2VzID0gXCJoZWFkZXIgaG9yaXpvbnRhbCBsYXlvdXQgY2VudGVyIFwiO1xuICAgIGlmIChncm91cEVudGl0eSkge1xuICAgICAgY2xhc3NlcyArPSBcIm1vcmUtaW5mb1wiO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZUNsYXNzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlTW9yZUluZm9UeXBlKHN0YXRlT2JqKSAhPT0gXCJoaWRkZW5cIlxuICAgICAgPyBcInN0YXRlIG1vcmUtaW5mb1wiXG4gICAgICA6IFwic3RhdGVcIjtcbiAgfVxuXG4gIGFkZFRhcEV2ZW50cygpIHtcbiAgICBjb25zdCBjYXJkcyA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0YXRlXCIpO1xuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucyhcIm1vcmUtaW5mb1wiKSkge1xuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmVudGl0eVRhcHBlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmVudGl0eVRhcHBlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBlbnRpdHlUYXBwZWQoZXYpIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5yb290XG4gICAgICAucXVlcnlTZWxlY3RvcihcImRvbS1yZXBlYXRcIilcbiAgICAgIC5pdGVtRm9yRWxlbWVudChldi50YXJnZXQpO1xuICAgIGxldCBlbnRpdHlJZDtcbiAgICBpZiAoIWl0ZW0gJiYgIXRoaXMuZ3JvdXBFbnRpdHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoaXRlbSkge1xuICAgICAgZW50aXR5SWQgPSBpdGVtLmVudGl0eV9pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50aXR5SWQgPSB0aGlzLmdyb3VwRW50aXR5LmVudGl0eV9pZDtcbiAgICB9XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogZW50aXR5SWQgfSk7XG4gIH1cblxuICBzaG93R3JvdXBUb2dnbGUoZ3JvdXBFbnRpdHksIHN0YXRlcykge1xuICAgIGlmIChcbiAgICAgICFncm91cEVudGl0eSB8fFxuICAgICAgIXN0YXRlcyB8fFxuICAgICAgZ3JvdXBFbnRpdHkuYXR0cmlidXRlcy5jb250cm9sID09PSBcImhpZGRlblwiIHx8XG4gICAgICAoZ3JvdXBFbnRpdHkuc3RhdGUgIT09IFwib25cIiAmJiBncm91cEVudGl0eS5zdGF0ZSAhPT0gXCJvZmZcIilcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBPbmx5IHNob3cgaWYgd2UgY2FuIHRvZ2dsZSAyKyBlbnRpdGllcyBpbiBncm91cFxuICAgIGxldCBjYW5Ub2dnbGVDb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghY2FuVG9nZ2xlU3RhdGUodGhpcy5oYXNzLCBzdGF0ZXNbaV0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjYW5Ub2dnbGVDb3VudCsrO1xuXG4gICAgICBpZiAoY2FuVG9nZ2xlQ291bnQgPiAxKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYW5Ub2dnbGVDb3VudCA+IDE7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWVudGl0aWVzLWNhcmRcIiwgSGFFbnRpdGllc0NhcmQpO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1tYXJrZG93blwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBjb21wdXRlT2JqZWN0SWQgZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVBlcnNpc3RlbnROb3RpZmljYXRpb25DYXJkIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgfVxuICAgICAgICBoYS1tYXJrZG93biB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgIH1cbiAgICAgICAgaGEtbWFya2Rvd24gcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICBoYS1tYXJrZG93biBwOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgaGEtbWFya2Rvd24gYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGhhLW1hcmtkb3duIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGEtY2FyZCBoZWFkZXI9XCJbW2NvbXB1dGVUaXRsZShzdGF0ZU9iaildXVwiPlxuICAgICAgICA8aGEtbWFya2Rvd24gY29udGVudD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5tZXNzYWdlXV1cIj48L2hhLW1hcmtkb3duPlxuICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cImRpc21pc3NUYXBcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5jYXJkLnBlcnNpc3RlbnRfbm90aWZpY2F0aW9uLmRpc21pc3MnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlVGl0bGUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy50aXRsZSB8fCBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIGRpc21pc3NUYXAoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInBlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCIsIFwiZGlzbWlzc1wiLCB7XG4gICAgICBub3RpZmljYXRpb25faWQ6IGNvbXB1dGVPYmplY3RJZCh0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCksXG4gICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgXCJoYS1wZXJzaXN0ZW50X25vdGlmaWNhdGlvbi1jYXJkXCIsXG4gIEhhUGVyc2lzdGVudE5vdGlmaWNhdGlvbkNhcmRcbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuY2xhc3MgSGFQbGFudENhcmQgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5oYXMtcGxhbnQtaW1hZ2UgLmJhbm5lciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwJTtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5oYXMtcGxhbnQtaW1hZ2UgLmhlYWRlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCB2YXIoLS1kYXJrLXNlY29uZGFyeS1vcGFjaXR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHggMzJweCAyNHB4IDMycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhhcy1wbGFudC1pbWFnZSAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtaWNvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi1jb2xvcik7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdHRyaWJ1dGVzIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmF0dHJpYnV0ZXMgZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2JsZW0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnVvbSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGhhLWNhcmRcbiAgICAgICAgY2xhc3MkPVwiW1tjb21wdXRlSW1hZ2VDbGFzcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiYmFubmVyXCJcbiAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKFtbc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZV1dKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+W1tjb21wdXRlVGl0bGUoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgaXRlbXM9XCJbW2NvbXB1dGVBdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMpXV1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdHRyaWJ1dGVzXCIgb24tY2xpY2s9XCJhdHRyaWJ1dGVDbGlja2VkXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICAgIGljb249XCJbW2NvbXB1dGVJY29uKGl0ZW0sIHN0YXRlT2JqLmF0dHJpYnV0ZXMuYmF0dGVyeSldXVwiXG4gICAgICAgICAgICAgICAgPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcyQ9XCJbW2NvbXB1dGVBdHRyaWJ1dGVDbGFzcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLnByb2JsZW0sIGl0ZW0pXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgW1tjb21wdXRlVmFsdWUoc3RhdGVPYmouYXR0cmlidXRlcywgaXRlbSldXVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVvbVwiPlxuICAgICAgICAgICAgICAgIFtbY29tcHV0ZVVvbShzdGF0ZU9iai5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnRfZGljdCxcbiAgICAgICAgICAgICAgICBpdGVtKV1dXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGNvbmZpZzogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2Vuc29ycyA9IHtcbiAgICAgIG1vaXN0dXJlOiBcImhhc3M6d2F0ZXJcIixcbiAgICAgIHRlbXBlcmF0dXJlOiBcImhhc3M6dGhlcm1vbWV0ZXJcIixcbiAgICAgIGJyaWdodG5lc3M6IFwiaGFzczp3aGl0ZS1iYWxhbmNlLXN1bm55XCIsXG4gICAgICBjb25kdWN0aXZpdHk6IFwiaGFzczplbW90aWNvbi1wb29wXCIsXG4gICAgICBiYXR0ZXJ5OiBcImhhc3M6YmF0dGVyeVwiLFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlVGl0bGUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm5hbWUpIHx8IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZUF0dHJpYnV0ZXMoZGF0YSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNlbnNvcnMpLmZpbHRlcigoa2V5KSA9PiBrZXkgaW4gZGF0YSk7XG4gIH1cblxuICBjb21wdXRlSWNvbihhdHRyLCBiYXRMdmwpIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5zZW5zb3JzW2F0dHJdO1xuICAgIGlmIChhdHRyID09PSBcImJhdHRlcnlcIikge1xuICAgICAgaWYgKGJhdEx2bCA8PSA1KSB7XG4gICAgICAgIHJldHVybiBgJHtpY29ufS1hbGVydGA7XG4gICAgICB9XG4gICAgICBpZiAoYmF0THZsIDwgOTUpIHtcbiAgICAgICAgcmV0dXJuIGAke2ljb259LSR7TWF0aC5yb3VuZChiYXRMdmwgLyAxMCAtIDAuMDEpICogMTB9YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGljb247XG4gIH1cblxuICBjb21wdXRlVmFsdWUoYXR0cmlidXRlcywgYXR0cikge1xuICAgIHJldHVybiBhdHRyaWJ1dGVzW2F0dHJdO1xuICB9XG5cbiAgY29tcHV0ZVVvbShkaWN0LCBhdHRyKSB7XG4gICAgcmV0dXJuIGRpY3RbYXR0cl0gfHwgXCJcIjtcbiAgfVxuXG4gIGNvbXB1dGVBdHRyaWJ1dGVDbGFzcyhwcm9ibGVtLCBhdHRyKSB7XG4gICAgcmV0dXJuIHByb2JsZW0uaW5kZXhPZihhdHRyKSA9PT0gLTEgPyBcIlwiIDogXCJwcm9ibGVtXCI7XG4gIH1cblxuICBjb21wdXRlSW1hZ2VDbGFzcyhlbnRpdHlQaWN0dXJlKSB7XG4gICAgcmV0dXJuIGVudGl0eVBpY3R1cmUgPyBcImhhcy1wbGFudC1pbWFnZVwiIDogXCJcIjtcbiAgfVxuXG4gIGF0dHJpYnV0ZUNsaWNrZWQoZXYpIHtcbiAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7XG4gICAgICBlbnRpdHlJZDogdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLnNlbnNvcnNbZXYubW9kZWwuaXRlbV0sXG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGxhbnQtY2FyZFwiLCBIYVBsYW50Q2FyZCk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8qKiBHZXQgdGhlIGxvY2F0aW9uIG5hbWUgZnJvbSBhIGhhc3Mgb2JqZWN0LiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUxvY2F0aW9uTmFtZShoYXNzOiBIb21lQXNzaXN0YW50KTogc3RyaW5nIHtcbiAgcmV0dXJuIGhhc3MgJiYgaGFzcy5jb25maWcubG9jYXRpb25fbmFtZTtcbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NhcmRzL2hhLWJhZGdlcy1jYXJkXCI7XG5pbXBvcnQgXCIuLi9jYXJkcy9oYS1jYXJkLWNob29zZXJcIjtcbmltcG9ydCBcIi4vaGEtZGVtby1iYWRnZVwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgc3BsaXRCeUdyb3VwcyBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9zcGxpdF9ieV9ncm91cHNcIjtcbmltcG9ydCBnZXRHcm91cEVudGl0aWVzIGZyb20gXCIuLi9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllc1wiO1xuXG4vLyBtYXBwaW5nIGRvbWFpbiB0byBzaXplIG9mIHRoZSBjYXJkLlxuY29uc3QgRE9NQUlOU19XSVRIX0NBUkQgPSB7XG4gIGNhbWVyYTogNCxcbiAgaGlzdG9yeV9ncmFwaDogNCxcbiAgbWVkaWFfcGxheWVyOiAzLFxuICBwZXJzaXN0ZW50X25vdGlmaWNhdGlvbjogMCxcbiAgcGxhbnQ6IDMsXG4gIHdlYXRoZXI6IDQsXG59O1xuXG4vLyA0IHR5cGVzOlxuLy8gYmFkZ2VzOiAwIC4uIDEwXG4vLyBiZWZvcmUgZ3JvdXBzIDwgMFxuLy8gZ3JvdXBzOiBYXG4vLyByZXN0OiAxMDBcblxuY29uc3QgUFJJT1JJVFkgPSB7XG4gIC8vIGJlZm9yZSBncm91cHMgPCAwXG4gIGNvbmZpZ3VyYXRvcjogLTIwLFxuICBwZXJzaXN0ZW50X25vdGlmaWNhdGlvbjogLTE1LFxuXG4gIC8vIGJhZGdlcyBoYXZlIHByaW9yaXR5ID49IDBcbiAgdXBkYXRlcjogMCxcbiAgc3VuOiAxLFxuICBwZXJzb246IDIsXG4gIGRldmljZV90cmFja2VyOiAzLFxuICBhbGFybV9jb250cm9sX3BhbmVsOiA0LFxuICB0aW1lcjogNSxcbiAgc2Vuc29yOiA2LFxuICBiaW5hcnlfc2Vuc29yOiA3LFxuICBtYWlsYm94OiA4LFxufTtcblxuY29uc3QgZ2V0UHJpb3JpdHkgPSAoZG9tYWluKSA9PiAoZG9tYWluIGluIFBSSU9SSVRZID8gUFJJT1JJVFlbZG9tYWluXSA6IDEwMCk7XG5cbmNvbnN0IHNvcnRQcmlvcml0eSA9IChkb21haW5BLCBkb21haW5CKSA9PiBkb21haW5BLnByaW9yaXR5IC0gZG9tYWluQi5wcmlvcml0eTtcblxuY29uc3QgZW50aXR5U29ydEJ5ID0gKGVudGl0eUEsIGVudGl0eUIpID0+IHtcbiAgY29uc3QgbmFtZUEgPSAoXG4gICAgZW50aXR5QS5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgZW50aXR5QS5lbnRpdHlfaWRcbiAgKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBuYW1lQiA9IChcbiAgICBlbnRpdHlCLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBlbnRpdHlCLmVudGl0eV9pZFxuICApLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKG5hbWVBID4gbmFtZUIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbmNvbnN0IGl0ZXJhdGVEb21haW5Tb3J0ZWQgPSAoY29sbGVjdGlvbiwgZnVuYykgPT4ge1xuICBPYmplY3Qua2V5cyhjb2xsZWN0aW9uKVxuICAgIC5tYXAoKGtleSkgPT4gY29sbGVjdGlvbltrZXldKVxuICAgIC5zb3J0KHNvcnRQcmlvcml0eSlcbiAgICAuZm9yRWFjaCgoZG9tYWluKSA9PiB7XG4gICAgICBkb21haW4uc3RhdGVzLnNvcnQoZW50aXR5U29ydEJ5KTtcbiAgICAgIGZ1bmMoZG9tYWluKTtcbiAgICB9KTtcbn07XG5cbmNsYXNzIEhhQ2FyZHMgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtZmFjdG9yc1wiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiA0cHggNHB4IDA7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWRnZXMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogODUlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZC1jaG9vc2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDRweCA0cHggOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYS1jYXJkLWNob29zZXIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cIm1haW5cIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NhcmRzLmJhZGdlcy5sZW5ndGhdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZXNcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjYXJkcy5kZW1vXV1cIj5cbiAgICAgICAgICAgICAgPGhhLWRlbW8tYmFkZ2U+PC9oYS1kZW1vLWJhZGdlPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPGhhLWJhZGdlcy1jYXJkXG4gICAgICAgICAgICAgIHN0YXRlcz1cIltbY2FyZHMuYmFkZ2VzXV1cIlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgPjwvaGEtYmFkZ2VzLWNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwgbGF5b3V0IGNlbnRlci1qdXN0aWZpZWRcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2NhcmRzLmNvbHVtbnNdXVwiIGFzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGZsZXgtMVwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2NvbHVtbl1dXCIgYXM9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGhhLWNhcmQtY2hvb3NlciBjYXJkLWRhdGE9XCJbW2NhcmRdXVwiPjwvaGEtY2FyZC1jaG9vc2VyPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGNvbHVtbnM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMixcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlczogT2JqZWN0LFxuXG4gICAgICB2aWV3VmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBvcmRlcmVkR3JvdXBFbnRpdGllczogQXJyYXksXG5cbiAgICAgIGNhcmRzOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJ1cGRhdGVDYXJkcyhjb2x1bW5zLCBzdGF0ZXMsIHZpZXdWaXNpYmxlLCBvcmRlcmVkR3JvdXBFbnRpdGllcylcIl07XG4gIH1cblxuICB1cGRhdGVDYXJkcyhjb2x1bW5zLCBzdGF0ZXMsIHZpZXdWaXNpYmxlLCBvcmRlcmVkR3JvdXBFbnRpdGllcykge1xuICAgIGlmICghdmlld1Zpc2libGUpIHtcbiAgICAgIGlmICh0aGlzLiQubWFpbi5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMuJC5tYWluLl9wYXJlbnROb2RlID0gdGhpcy4kLm1haW4ucGFyZW50Tm9kZTtcbiAgICAgICAgdGhpcy4kLm1haW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLiQubWFpbik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy4kLm1haW4ucGFyZW50Tm9kZSAmJiB0aGlzLiQubWFpbi5fcGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy4kLm1haW4uX3BhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy4kLm1haW4pO1xuICAgIH1cbiAgICB0aGlzLl9kZWJvdW5jZXIgPSBEZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICB0aGlzLl9kZWJvdW5jZXIsXG4gICAgICB0aW1lT3V0LmFmdGVyKDEwKSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gVGhpbmdzIG1pZ2h0IGhhdmUgY2hhbmdlZCBzaW5jZSBpdCBnb3Qgc2NoZWR1bGVkLlxuICAgICAgICBpZiAodGhpcy52aWV3VmlzaWJsZSkge1xuICAgICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNvbXB1dGVDYXJkcyhjb2x1bW5zLCBzdGF0ZXMsIG9yZGVyZWRHcm91cEVudGl0aWVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBlbXB0eUNhcmRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZW1vOiBmYWxzZSxcbiAgICAgIGJhZGdlczogW10sXG4gICAgICBjb2x1bW5zOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNhcmRzKGNvbHVtbnMsIHN0YXRlcywgb3JkZXJlZEdyb3VwRW50aXRpZXMpIHtcbiAgICBjb25zdCBoYXNzID0gdGhpcy5oYXNzO1xuXG4gICAgY29uc3QgY2FyZHMgPSB0aGlzLmVtcHR5Q2FyZHMoKTtcblxuICAgIGNvbnN0IGVudGl0eUNvdW50ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspIHtcbiAgICAgIGNhcmRzLmNvbHVtbnMucHVzaChbXSk7XG4gICAgICBlbnRpdHlDb3VudC5wdXNoKDApO1xuICAgIH1cblxuICAgIC8vIEZpbmQgY29sdW1uIHdpdGggPCA1IGVudGl0aWVzLCBlbHNlIGNvbHVtbiB3aXRoIGxvd2VzdCBjb3VudFxuICAgIGZ1bmN0aW9uIGdldEluZGV4KHNpemUpIHtcbiAgICAgIGxldCBtaW5JbmRleCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudGl0eUNvdW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlbnRpdHlDb3VudFtpXSA8IDUpIHtcbiAgICAgICAgICBtaW5JbmRleCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudGl0eUNvdW50W2ldIDwgZW50aXR5Q291bnRbbWluSW5kZXhdKSB7XG4gICAgICAgICAgbWluSW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVudGl0eUNvdW50W21pbkluZGV4XSArPSBzaXplO1xuXG4gICAgICByZXR1cm4gbWluSW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRW50aXRpZXNDYXJkKG5hbWUsIGVudGl0aWVzLCBncm91cEVudGl0eSkge1xuICAgICAgaWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBvd25jYXJkID0gW107XG4gICAgICBjb25zdCBvdGhlciA9IFtdO1xuXG4gICAgICBsZXQgc2l6ZSA9IDA7XG5cbiAgICAgIGVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oZW50aXR5KTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgZG9tYWluIGluIERPTUFJTlNfV0lUSF9DQVJEICYmXG4gICAgICAgICAgIWVudGl0eS5hdHRyaWJ1dGVzLmN1c3RvbV91aV9zdGF0ZV9jYXJkXG4gICAgICAgICkge1xuICAgICAgICAgIG93bmNhcmQucHVzaChlbnRpdHkpO1xuICAgICAgICAgIHNpemUgKz0gRE9NQUlOU19XSVRIX0NBUkRbZG9tYWluXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdGhlci5wdXNoKGVudGl0eSk7XG4gICAgICAgICAgc2l6ZSsrO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIDEgdG8gdGhlIHNpemUgaWYgd2UncmUgcmVuZGVyaW5nIGVudGl0aWVzIGNhcmRcbiAgICAgIHNpemUgKz0gb3RoZXIubGVuZ3RoID4gMDtcblxuICAgICAgY29uc3QgY3VySW5kZXggPSBnZXRJbmRleChzaXplKTtcblxuICAgICAgaWYgKG90aGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2FyZHMuY29sdW1uc1tjdXJJbmRleF0ucHVzaCh7XG4gICAgICAgICAgaGFzczogaGFzcyxcbiAgICAgICAgICBjYXJkVHlwZTogXCJlbnRpdGllc1wiLFxuICAgICAgICAgIHN0YXRlczogb3RoZXIsXG4gICAgICAgICAgZ3JvdXBFbnRpdHk6IGdyb3VwRW50aXR5IHx8IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgb3duY2FyZC5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgY2FyZHMuY29sdW1uc1tjdXJJbmRleF0ucHVzaCh7XG4gICAgICAgICAgaGFzczogaGFzcyxcbiAgICAgICAgICBjYXJkVHlwZTogY29tcHV0ZVN0YXRlRG9tYWluKGVudGl0eSksXG4gICAgICAgICAgc3RhdGVPYmo6IGVudGl0eSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzcGxpdHRlZCA9IHNwbGl0QnlHcm91cHMoc3RhdGVzKTtcbiAgICBpZiAob3JkZXJlZEdyb3VwRW50aXRpZXMpIHtcbiAgICAgIHNwbGl0dGVkLmdyb3Vwcy5zb3J0KFxuICAgICAgICAoZ3IxLCBncjIpID0+XG4gICAgICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXNbZ3IxLmVudGl0eV9pZF0gLVxuICAgICAgICAgIG9yZGVyZWRHcm91cEVudGl0aWVzW2dyMi5lbnRpdHlfaWRdXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGxpdHRlZC5ncm91cHMuc29ydChcbiAgICAgICAgKGdyMSwgZ3IyKSA9PiBncjEuYXR0cmlidXRlcy5vcmRlciAtIGdyMi5hdHRyaWJ1dGVzLm9yZGVyXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGJhZGdlc0NvbGwgPSB7fTtcbiAgICBjb25zdCBiZWZvcmVHcm91cENvbGwgPSB7fTtcbiAgICBjb25zdCBhZnRlckdyb3VwZWRDb2xsID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhzcGxpdHRlZC51bmdyb3VwZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSBzcGxpdHRlZC51bmdyb3VwZWRba2V5XTtcbiAgICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZSk7XG5cbiAgICAgIGlmIChkb21haW4gPT09IFwiYVwiKSB7XG4gICAgICAgIGNhcmRzLmRlbW8gPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZ2V0UHJpb3JpdHkoZG9tYWluKTtcbiAgICAgIGxldCBjb2xsO1xuXG4gICAgICBpZiAocHJpb3JpdHkgPCAwKSB7XG4gICAgICAgIGNvbGwgPSBiZWZvcmVHcm91cENvbGw7XG4gICAgICB9IGVsc2UgaWYgKHByaW9yaXR5IDwgMTApIHtcbiAgICAgICAgY29sbCA9IGJhZGdlc0NvbGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsID0gYWZ0ZXJHcm91cGVkQ29sbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoZG9tYWluIGluIGNvbGwpKSB7XG4gICAgICAgIGNvbGxbZG9tYWluXSA9IHtcbiAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgICAgc3RhdGVzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29sbFtkb21haW5dLnN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICB9KTtcblxuICAgIGlmIChvcmRlcmVkR3JvdXBFbnRpdGllcykge1xuICAgICAgT2JqZWN0LmtleXMoYmFkZ2VzQ29sbClcbiAgICAgICAgLm1hcCgoa2V5KSA9PiBiYWRnZXNDb2xsW2tleV0pXG4gICAgICAgIC5mb3JFYWNoKChkb21haW4pID0+IHtcbiAgICAgICAgICBjYXJkcy5iYWRnZXMucHVzaC5hcHBseShjYXJkcy5iYWRnZXMsIGRvbWFpbi5zdGF0ZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgY2FyZHMuYmFkZ2VzLnNvcnQoXG4gICAgICAgIChlMSwgZTIpID0+XG4gICAgICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXNbZTEuZW50aXR5X2lkXSAtXG4gICAgICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXNbZTIuZW50aXR5X2lkXVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0ZURvbWFpblNvcnRlZChiYWRnZXNDb2xsLCAoZG9tYWluKSA9PiB7XG4gICAgICAgIGNhcmRzLmJhZGdlcy5wdXNoLmFwcGx5KGNhcmRzLmJhZGdlcywgZG9tYWluLnN0YXRlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpdGVyYXRlRG9tYWluU29ydGVkKGJlZm9yZUdyb3VwQ29sbCwgKGRvbWFpbikgPT4ge1xuICAgICAgYWRkRW50aXRpZXNDYXJkKGRvbWFpbi5kb21haW4sIGRvbWFpbi5zdGF0ZXMpO1xuICAgIH0pO1xuXG4gICAgc3BsaXR0ZWQuZ3JvdXBzLmZvckVhY2goKGdyb3VwU3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IGVudGl0aWVzID0gZ2V0R3JvdXBFbnRpdGllcyhzdGF0ZXMsIGdyb3VwU3RhdGUpO1xuICAgICAgYWRkRW50aXRpZXNDYXJkKFxuICAgICAgICBncm91cFN0YXRlLmVudGl0eV9pZCxcbiAgICAgICAgT2JqZWN0LmtleXMoZW50aXRpZXMpLm1hcCgoa2V5KSA9PiBlbnRpdGllc1trZXldKSxcbiAgICAgICAgZ3JvdXBTdGF0ZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGl0ZXJhdGVEb21haW5Tb3J0ZWQoYWZ0ZXJHcm91cGVkQ29sbCwgKGRvbWFpbikgPT4ge1xuICAgICAgYWRkRW50aXRpZXNDYXJkKGRvbWFpbi5kb21haW4sIGRvbWFpbi5zdGF0ZXMpO1xuICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlIGVtcHR5IGNvbHVtbnNcbiAgICBjYXJkcy5jb2x1bW5zID0gY2FyZHMuY29sdW1ucy5maWx0ZXIoKHZhbCkgPT4gdmFsLmxlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGNhcmRzO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jYXJkc1wiLCBIYUNhcmRzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtbGFiZWwtYmFkZ2VcIjtcblxuY2xhc3MgSGFEZW1vQmFkZ2UgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiAjZGFjOTBkO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGEtbGFiZWwtYmFkZ2VcbiAgICAgICAgaWNvbj1cImhhc3M6ZW1vdGljb25cIlxuICAgICAgICBsYWJlbD1cIkRlbW9cIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIlwiXG4gICAgICA+PC9oYS1sYWJlbC1iYWRnZT5cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWRlbW8tYmFkZ2VcIiwgSGFEZW1vQmFkZ2UpO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbi8qXG4gKiBAcG9seW1lck1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBuYXZpZ2F0ZSguLi5hcmdzKSB7XG4gICAgICAgIG5hdmlnYXRlKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXNjcm9sbC1lZmZlY3RzL2VmZmVjdHMvd2F0ZXJmYWxsXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtcm91dGUvYXBwLXJvdXRlXCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1wYWdlcy9pcm9uLXBhZ2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYlwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdGFicy9wYXBlci10YWJzXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZHNcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1zdGFydC12b2ljZS1idXR0b25cIjtcblxuaW1wb3J0IFwiLi4vLi4vbGF5b3V0cy9oYS1hcHAtbGF5b3V0XCI7XG5cbmltcG9ydCBleHRyYWN0Vmlld3MgZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvZXh0cmFjdF92aWV3c1wiO1xuaW1wb3J0IGdldFZpZXdFbnRpdGllcyBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllc1wiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgY29tcHV0ZUxvY2F0aW9uTmFtZSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbmZpZy9sb2NhdGlvbl9uYW1lXCI7XG5pbXBvcnQgTmF2aWdhdGVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL25hdmlnYXRlLW1peGluXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbmNvbnN0IERFRkFVTFRfVklFV19FTlRJVFlfSUQgPSBcImdyb3VwLmRlZmF1bHRfdmlld1wiO1xuY29uc3QgQUxXQVlTX1NIT1dfRE9NQUlOID0gW1wicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIiwgXCJjb25maWd1cmF0b3JcIl07XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIE5hdmlnYXRlTWl4aW5cbiAqL1xuY2xhc3MgUGFydGlhbENhcmRzIGV4dGVuZHMgRXZlbnRzTWl4aW4oTmF2aWdhdGVNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tcG9zaXRpb25pbmcgaGEtc3R5bGVcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1hcHAtbGF5b3V0IHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCAjZTVlNWU1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlyb24tcGFnZXMge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLXRhYnMge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgIC0tcGFwZXItdGFicy1zZWxlY3Rpb24tYmFyLWNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IsICNmZmYpO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwie3tyb3V0ZX19XCJcbiAgICAgICAgcGF0dGVybj1cIi86dmlld1wiXG4gICAgICAgIGRhdGE9XCJ7e3JvdXRlRGF0YX19XCJcbiAgICAgICAgYWN0aXZlPVwie3tyb3V0ZU1hdGNofX1cIlxuICAgICAgPjwvYXBwLXJvdXRlPlxuICAgICAgPGhhLWFwcC1sYXlvdXQgaWQ9XCJsYXlvdXRcIj5cbiAgICAgICAgPGFwcC1oZWFkZXIgZWZmZWN0cz1cIndhdGVyZmFsbFwiIGNvbmRlbnNlcz1cIlwiIGZpeGVkPVwiXCIgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBuYXJyb3c9XCJbW25hcnJvd11dXCJcbiAgICAgICAgICAgID48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPVwiXCI+XG4gICAgICAgICAgICAgIFtbY29tcHV0ZVRpdGxlKHZpZXdzLCBkZWZhdWx0VmlldywgbG9jYXRpb25OYW1lKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoYS1zdGFydC12b2ljZS1idXR0b24gaGFzcz1cIltbaGFzc11dXCI+PC9oYS1zdGFydC12b2ljZS1idXR0b24+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cblxuICAgICAgICAgIDxkaXYgc3RpY2t5PVwiXCIgaGlkZGVuJD1cIltbYXJlVGFic0hpZGRlbih2aWV3cywgc2hvd1RhYnMpXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci10YWJzXG4gICAgICAgICAgICAgIHNjcm9sbGFibGU9XCJcIlxuICAgICAgICAgICAgICBzZWxlY3RlZD1cIltbY3VycmVudFZpZXddXVwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiZGF0YS1lbnRpdHlcIlxuICAgICAgICAgICAgICBvbi1pcm9uLWFjdGl2YXRlPVwiaGFuZGxlVmlld1NlbGVjdGVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLXRhYiBkYXRhLWVudGl0eT1cIlwiIG9uLWNsaWNrPVwic2Nyb2xsVG9Ub3BcIj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWRlZmF1bHRWaWV3XV1cIj5cbiAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tkZWZhdWx0Vmlld11dXCI+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZGVmYXVsdFZpZXcuYXR0cmlidXRlcy5pY29uXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZSQ9XCJbW19jb21wdXRlU3RhdGVOYW1lKGRlZmF1bHRWaWV3KV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiW1tkZWZhdWx0Vmlldy5hdHRyaWJ1dGVzLmljb25dXVwiXG4gICAgICAgICAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFkZWZhdWx0Vmlldy5hdHRyaWJ1dGVzLmljb25dXVwiPlxuICAgICAgICAgICAgICAgICAgICBbW19jb21wdXRlU3RhdGVOYW1lKGRlZmF1bHRWaWV3KV1dXG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItdGFiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3ZpZXdzXV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItdGFiXG4gICAgICAgICAgICAgICAgICBkYXRhLWVudGl0eSQ9XCJbW2l0ZW0uZW50aXR5X2lkXV1cIlxuICAgICAgICAgICAgICAgICAgb24tY2xpY2s9XCJzY3JvbGxUb1RvcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2l0ZW0uYXR0cmlidXRlcy5pY29uXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZSQ9XCJbW19jb21wdXRlU3RhdGVOYW1lKGl0ZW0pXV1cIlxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJbW2l0ZW0uYXR0cmlidXRlcy5pY29uXV1cIlxuICAgICAgICAgICAgICAgICAgICA+PC9oYS1pY29uPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shaXRlbS5hdHRyaWJ1dGVzLmljb25dXVwiPlxuICAgICAgICAgICAgICAgICAgICBbW19jb21wdXRlU3RhdGVOYW1lKGl0ZW0pXV1cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9wYXBlci10YWI+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLXRhYnM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8aXJvbi1wYWdlc1xuICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiZGF0YS12aWV3XCJcbiAgICAgICAgICBzZWxlY3RlZD1cIltbY3VycmVudFZpZXddXVwiXG4gICAgICAgICAgc2VsZWN0ZWQtYXR0cmlidXRlPVwidmlldy12aXNpYmxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoYS1jYXJkc1xuICAgICAgICAgICAgZGF0YS12aWV3PVwiXCJcbiAgICAgICAgICAgIHN0YXRlcz1cIltbdmlld1N0YXRlc11dXCJcbiAgICAgICAgICAgIGNvbHVtbnM9XCJbW19jb2x1bW5zXV1cIlxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIHBhbmVsLXZpc2libGU9XCJbW3BhbmVsVmlzaWJsZV1dXCJcbiAgICAgICAgICAgIG9yZGVyZWQtZ3JvdXAtZW50aXRpZXM9XCJbW29yZGVyZWRHcm91cEVudGl0aWVzXV1cIlxuICAgICAgICAgID48L2hhLWNhcmRzPlxuXG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1t2aWV3c11dXCI+XG4gICAgICAgICAgICA8aGEtY2FyZHNcbiAgICAgICAgICAgICAgZGF0YS12aWV3JD1cIltbaXRlbS5lbnRpdHlfaWRdXVwiXG4gICAgICAgICAgICAgIHN0YXRlcz1cIltbdmlld1N0YXRlc11dXCJcbiAgICAgICAgICAgICAgY29sdW1ucz1cIltbX2NvbHVtbnNdXVwiXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIHBhbmVsLXZpc2libGU9XCJbW3BhbmVsVmlzaWJsZV1dXCJcbiAgICAgICAgICAgICAgb3JkZXJlZC1ncm91cC1lbnRpdGllcz1cIltbb3JkZXJlZEdyb3VwRW50aXRpZXNdXVwiXG4gICAgICAgICAgICA+PC9oYS1jYXJkcz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2lyb24tcGFnZXM+XG4gICAgICA8L2hhLWFwcC1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBvYnNlcnZlcjogXCJoYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHBhbmVsVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICByb3V0ZTogT2JqZWN0LFxuICAgICAgcm91dGVEYXRhOiBPYmplY3QsXG4gICAgICByb3V0ZU1hdGNoOiBCb29sZWFuLFxuXG4gICAgICBfY29sdW1uczoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgfSxcblxuICAgICAgbG9jYXRpb25OYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlTG9jYXRpb25OYW1lKGhhc3MpXCIsXG4gICAgICB9LFxuXG4gICAgICBjdXJyZW50Vmlldzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQ3VycmVudFZpZXcoaGFzcywgcm91dGVNYXRjaCwgcm91dGVEYXRhKVwiLFxuICAgICAgfSxcblxuICAgICAgdmlld3M6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICB9LFxuXG4gICAgICBkZWZhdWx0Vmlldzoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICB2aWV3U3RhdGVzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVZpZXdTdGF0ZXMoY3VycmVudFZpZXcsIGhhc3MsIGRlZmF1bHRWaWV3KVwiLFxuICAgICAgfSxcblxuICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVPcmRlcmVkR3JvdXBFbnRpdGllcyhjdXJyZW50VmlldywgaGFzcywgZGVmYXVsdFZpZXcpXCIsXG4gICAgICB9LFxuXG4gICAgICBzaG93VGFiczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfdXBkYXRlQ29sdW1ucyhuYXJyb3csIGhhc3MuZG9ja2VkU2lkZWJhcilcIl07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICB0aGlzLl91cGRhdGVDb2x1bW5zID0gdGhpcy5fdXBkYXRlQ29sdW1ucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMubXFscyA9IFszMDAsIDYwMCwgOTAwLCAxMjAwXS5tYXAoKHdpZHRoKSA9PlxuICAgICAgbWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt3aWR0aH1weClgKVxuICAgICk7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5tcWxzLmZvckVhY2goKG1xbCkgPT4gbXFsLmFkZExpc3RlbmVyKHRoaXMuX3VwZGF0ZUNvbHVtbnMpKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5tcWxzLmZvckVhY2goKG1xbCkgPT4gbXFsLnJlbW92ZUxpc3RlbmVyKHRoaXMuX3VwZGF0ZUNvbHVtbnMpKTtcbiAgfVxuXG4gIF91cGRhdGVDb2x1bW5zKCkge1xuICAgIGNvbnN0IG1hdGNoQ29sdW1ucyA9IHRoaXMubXFscy5yZWR1Y2UoKGNvbHMsIG1xbCkgPT4gY29scyArIG1xbC5tYXRjaGVzLCAwKTtcbiAgICAvLyBEbyAtMSBjb2x1bW4gaWYgdGhlIG1lbnUgaXMgZG9ja2VkIGFuZCBvcGVuXG4gICAgdGhpcy5fY29sdW1ucyA9IE1hdGgubWF4KFxuICAgICAgMSxcbiAgICAgIG1hdGNoQ29sdW1ucyAtICghdGhpcy5uYXJyb3cgJiYgdGhpcy5oYXNzLmRvY2tlZFNpZGViYXIpXG4gICAgKTtcbiAgfVxuXG4gIGFyZVRhYnNIaWRkZW4odmlld3MsIHNob3dUYWJzKSB7XG4gICAgcmV0dXJuICF2aWV3cyB8fCAhdmlld3MubGVuZ3RoIHx8ICFzaG93VGFicztcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gYSBzcGVjaWZpYyB5IGNvb3JkaW5hdGUuXG4gICAqXG4gICAqIENvcGllZCBmcm9tIHBhcGVyLXNjcm9sbC1oZWFkZXItcGFuZWwuXG4gICAqXG4gICAqIEBtZXRob2Qgc2Nyb2xsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVGhlIGNvb3JkaW5hdGUgdG8gc2Nyb2xsIHRvLCBhbG9uZyB0aGUgeS1heGlzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNtb290aCB0cnVlIGlmIHRoZSBzY3JvbGwgcG9zaXRpb24gc2hvdWxkIGJlIHNtb290aGx5IGFkanVzdGVkLlxuICAgKi9cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgLy8gdGhlIHNjcm9sbCBldmVudCB3aWxsIHRyaWdnZXIgX3VwZGF0ZVNjcm9sbFN0YXRlIGRpcmVjdGx5LFxuICAgIC8vIEhvd2V2ZXIsIF91cGRhdGVTY3JvbGxTdGF0ZSByZWxpZXMgb24gdGhlIHByZXZpb3VzIGBzY3JvbGxUb3BgIHRvIHVwZGF0ZSB0aGUgc3RhdGVzLlxuICAgIC8vIENhbGxpbmcgX3VwZGF0ZVNjcm9sbFN0YXRlIHdpbGwgZW5zdXJlIHRoYXQgdGhlIHN0YXRlcyBhcmUgc3luY2VkIGNvcnJlY3RseS5cbiAgICB2YXIgdG9wID0gMDtcbiAgICB2YXIgc2Nyb2xsZXIgPSB0aGlzLiQubGF5b3V0LmhlYWRlci5zY3JvbGxUYXJnZXQ7XG4gICAgdmFyIGVhc2luZ0ZuID0gZnVuY3Rpb24gZWFzZU91dFF1YWQodCwgYiwgYywgZCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24sIHNwYWNlLWluZml4LW9wcywgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4gICAgICB0IC89IGQ7XG4gICAgICByZXR1cm4gLWMgKiB0ICogKHQgLSAyKSArIGI7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBzcGFjZS1pbmZpeC1vcHMsIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuICAgIH07XG4gICAgdmFyIGFuaW1hdGlvbklkID0gTWF0aC5yYW5kb20oKTtcbiAgICB2YXIgZHVyYXRpb24gPSAyMDA7XG4gICAgdmFyIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIGN1cnJlbnRTY3JvbGxUb3AgPSBzY3JvbGxlci5zY3JvbGxUb3A7XG4gICAgdmFyIGRlbHRhU2Nyb2xsVG9wID0gdG9wIC0gY3VycmVudFNjcm9sbFRvcDtcbiAgICB0aGlzLl9jdXJyZW50QW5pbWF0aW9uSWQgPSBhbmltYXRpb25JZDtcbiAgICAoZnVuY3Rpb24gdXBkYXRlRnJhbWUoKSB7XG4gICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIHZhciBlbGFwc2VkVGltZSA9IG5vdyAtIHN0YXJ0VGltZTtcbiAgICAgIGlmIChlbGFwc2VkVGltZSA+IGR1cmF0aW9uKSB7XG4gICAgICAgIHNjcm9sbGVyLnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fY3VycmVudEFuaW1hdGlvbklkID09PSBhbmltYXRpb25JZCkge1xuICAgICAgICBzY3JvbGxlci5zY3JvbGxUb3AgPSBlYXNpbmdGbihcbiAgICAgICAgICBlbGFwc2VkVGltZSxcbiAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wLFxuICAgICAgICAgIGRlbHRhU2Nyb2xsVG9wLFxuICAgICAgICAgIGR1cmF0aW9uXG4gICAgICAgICk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVGcmFtZS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9LmNhbGwodGhpcykpO1xuICB9XG5cbiAgaGFuZGxlVmlld1NlbGVjdGVkKGV2KSB7XG4gICAgY29uc3QgdmlldyA9IGV2LmRldGFpbC5pdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZW50aXR5XCIpIHx8IG51bGw7XG5cbiAgICBpZiAodmlldyAhPT0gdGhpcy5jdXJyZW50Vmlldykge1xuICAgICAgbGV0IHBhdGggPSBcIi9zdGF0ZXNcIjtcbiAgICAgIGlmICh2aWV3KSB7XG4gICAgICAgIHBhdGggKz0gXCIvXCIgKyB2aWV3O1xuICAgICAgfVxuICAgICAgdGhpcy5uYXZpZ2F0ZShwYXRoKTtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZUN1cnJlbnRWaWV3KGhhc3MsIHJvdXRlTWF0Y2gsIHJvdXRlRGF0YSkge1xuICAgIGlmICghcm91dGVNYXRjaCkgcmV0dXJuIFwiXCI7XG4gICAgaWYgKFxuICAgICAgIWhhc3Muc3RhdGVzW3JvdXRlRGF0YS52aWV3XSB8fFxuICAgICAgIWhhc3Muc3RhdGVzW3JvdXRlRGF0YS52aWV3XS5hdHRyaWJ1dGVzLnZpZXdcbiAgICApIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gcm91dGVEYXRhLnZpZXc7XG4gIH1cblxuICBjb21wdXRlVGl0bGUodmlld3MsIGRlZmF1bHRWaWV3LCBsb2NhdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gKHZpZXdzICYmXG4gICAgICB2aWV3cy5sZW5ndGggPiAwICYmXG4gICAgICAhZGVmYXVsdFZpZXcgJiZcbiAgICAgIGxvY2F0aW9uTmFtZSA9PT0gXCJIb21lXCIpIHx8XG4gICAgICAhbG9jYXRpb25OYW1lXG4gICAgICA/IFwiSkFWSVMgSG9tZVwiXG4gICAgICA6IGxvY2F0aW9uTmFtZTtcbiAgfVxuXG4gIF9jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgX2NvbXB1dGVMb2NhdGlvbk5hbWUoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlTG9jYXRpb25OYW1lKGhhc3MpO1xuICB9XG5cbiAgaGFzc0NoYW5nZWQoaGFzcykge1xuICAgIGlmICghaGFzcykgcmV0dXJuO1xuICAgIGNvbnN0IHZpZXdzID0gZXh0cmFjdFZpZXdzKGhhc3Muc3RhdGVzKTtcbiAgICBsZXQgZGVmYXVsdFZpZXcgPSBudWxsO1xuICAgIC8vIElmIGRlZmF1bHQgdmlldyBwcmVzZW50LCBpdCdzIGluIGZpcnN0IGluZGV4LlxuICAgIGlmICh2aWV3cy5sZW5ndGggPiAwICYmIHZpZXdzWzBdLmVudGl0eV9pZCA9PT0gREVGQVVMVF9WSUVXX0VOVElUWV9JRCkge1xuICAgICAgZGVmYXVsdFZpZXcgPSB2aWV3cy5zaGlmdCgpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHZpZXdzLCBkZWZhdWx0VmlldyB9KTtcbiAgfVxuXG4gIGlzVmlldyhjdXJyZW50VmlldywgZGVmYXVsdFZpZXcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKGN1cnJlbnRWaWV3IHx8IGRlZmF1bHRWaWV3KSAmJlxuICAgICAgdGhpcy5oYXNzLnN0YXRlc1tjdXJyZW50VmlldyB8fCBERUZBVUxUX1ZJRVdfRU5USVRZX0lEXVxuICAgICk7XG4gIH1cblxuICBfZGVmYXVsdFZpZXdGaWx0ZXIoaGFzcywgZW50aXR5SWQpIHtcbiAgICAvLyBGaWx0ZXIgb3V0IGhpZGRlblxuICAgIHJldHVybiAhaGFzcy5zdGF0ZXNbZW50aXR5SWRdLmF0dHJpYnV0ZXMuaGlkZGVuO1xuICB9XG5cbiAgX2NvbXB1dGVEZWZhdWx0Vmlld1N0YXRlcyhoYXNzLCBlbnRpdHlJZHMpIHtcbiAgICBjb25zdCBzdGF0ZXMgPSB7fTtcbiAgICBlbnRpdHlJZHNcbiAgICAgIC5maWx0ZXIodGhpcy5fZGVmYXVsdFZpZXdGaWx0ZXIuYmluZChudWxsLCBoYXNzKSlcbiAgICAgIC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgICAgICBzdGF0ZXNbZW50aXR5SWRdID0gaGFzcy5zdGF0ZXNbZW50aXR5SWRdO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHN0YXRlcztcbiAgfVxuXG4gIC8qXG4gICAgQ29tcHV0ZSB0aGUgc3RhdGVzIHRvIHNob3cgZm9yIGN1cnJlbnQgdmlldy5cblxuICAgIFdpbGwgbWFrZSBzdXJlIHdlIGFsd2F5cyBzaG93IGVudGl0aWVzIGZyb20gQUxXQVlTX1NIT1dfRE9NQUlOUyBkb21haW5zLlxuICAqL1xuICBjb21wdXRlVmlld1N0YXRlcyhjdXJyZW50VmlldywgaGFzcywgZGVmYXVsdFZpZXcpIHtcbiAgICBjb25zdCBlbnRpdHlJZHMgPSBPYmplY3Qua2V5cyhoYXNzLnN0YXRlcyk7XG5cbiAgICAvLyBJZiB3ZSBiYXNlIG9mZiBhbGwgZW50aXRpZXMsIG9ubHkgaGF2ZSB0byBmaWx0ZXIgb3V0IGhpZGRlblxuICAgIGlmICghdGhpcy5pc1ZpZXcoY3VycmVudFZpZXcsIGRlZmF1bHRWaWV3KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbXB1dGVEZWZhdWx0Vmlld1N0YXRlcyhoYXNzLCBlbnRpdHlJZHMpO1xuICAgIH1cblxuICAgIGxldCBzdGF0ZXM7XG4gICAgaWYgKGN1cnJlbnRWaWV3KSB7XG4gICAgICBzdGF0ZXMgPSBnZXRWaWV3RW50aXRpZXMoaGFzcy5zdGF0ZXMsIGhhc3Muc3RhdGVzW2N1cnJlbnRWaWV3XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlcyA9IGdldFZpZXdFbnRpdGllcyhcbiAgICAgICAgaGFzcy5zdGF0ZXMsXG4gICAgICAgIGhhc3Muc3RhdGVzW0RFRkFVTFRfVklFV19FTlRJVFlfSURdXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBjZXJ0YWluIGRvbWFpbnMgYXJlIGFsd2F5cyBzaG93bi5cbiAgICBlbnRpdHlJZHMuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbZW50aXR5SWRdO1xuXG4gICAgICBpZiAoQUxXQVlTX1NIT1dfRE9NQUlOLmluY2x1ZGVzKGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZSkpKSB7XG4gICAgICAgIHN0YXRlc1tlbnRpdHlJZF0gPSBzdGF0ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdGF0ZXM7XG4gIH1cblxuICAvKlxuICAgIENvbXB1dGUgdGhlIG9yZGVyZWQgbGlzdCBvZiBncm91cHMgZm9yIHRoaXMgdmlld1xuICAqL1xuICBjb21wdXRlT3JkZXJlZEdyb3VwRW50aXRpZXMoY3VycmVudFZpZXcsIGhhc3MsIGRlZmF1bHRWaWV3KSB7XG4gICAgaWYgKCF0aGlzLmlzVmlldyhjdXJyZW50VmlldywgZGVmYXVsdFZpZXcpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgb3JkZXJlZEdyb3VwRW50aXRpZXMgPSB7fTtcbiAgICB2YXIgZW50aXRpZXNMaXN0ID1cbiAgICAgIGhhc3Muc3RhdGVzW2N1cnJlbnRWaWV3IHx8IERFRkFVTFRfVklFV19FTlRJVFlfSURdLmF0dHJpYnV0ZXMuZW50aXR5X2lkO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRpdGllc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9yZGVyZWRHcm91cEVudGl0aWVzW2VudGl0aWVzTGlzdFtpXV0gPSBpO1xuICAgIH1cblxuICAgIHJldHVybiBvcmRlcmVkR3JvdXBFbnRpdGllcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYW5lbC1zdGF0ZXNcIiwgUGFydGlhbENhcmRzKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQXhCQTtBQUNBO0FBd0JBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBOzs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0dBO0FBQ0E7QUErR0E7Ozs7Ozs7Ozs7OztBQzlIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuRUE7QUFDQTtBQW1FQTs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUErREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcktBO0FBQ0E7QUFxS0E7Ozs7Ozs7Ozs7OztBQ3JMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQXpEQTtBQUNBO0FBeURBOzs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUF6SkE7QUFDQTtBQTBKQTs7Ozs7Ozs7Ozs7O0FDbEtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUF0U0E7QUFDQTtBQXNTQTs7Ozs7Ozs7Ozs7O0FDclhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQUFBO0FBYUE7QUFDQTtBQWhCQTtBQUNBO0FBaUJBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBdkRBO0FBNERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsWUE7QUFDQTtBQW1ZQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
