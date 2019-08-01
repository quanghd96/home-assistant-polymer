(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-kiosk~panel-lovelace~panel-states"],
  {
    /***/ "./src/cards/ha-media_player-card.js":
      /*!*******************************************!*\
  !*** ./src/cards/ha-media_player-card.js ***!
  \*******************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_progress_paper_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-progress/paper-progress */ "./node_modules/@polymer/paper-progress/paper-progress.js"
        );
        /* harmony import */ var _polymer_paper_styles_element_styles_paper_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-styles/element-styles/paper-material-styles */ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../util/hass-media-player-model */ "./src/util/hass-media-player-model.js"
        );
        /* harmony import */ var _data_media_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../data/media-player */ "./src/data/media-player.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );

        /*
         * @appliesMixin LocalizeMixin
         * @appliesMixin EventsMixin
         */

        class HaMediaPlayerCard extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"]
        )(
          Object(
            _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
              "html"
            ]`
      <style
        include="paper-material-styles iron-flex iron-flex-alignment iron-positioning"
      >
        :host {
          @apply --paper-material-elevation-1;
          display: block;
          position: relative;
          font-size: 0px;
          border-radius: 2px;
        }

        .banner {
          position: relative;
          background-color: white;
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
        }

        .banner:before {
          display: block;
          content: "";
          width: 100%;
          /* removed .25% from 16:9 ratio to fix YT black bars */
          padding-top: 56%;
          transition: padding-top 0.8s;
        }

        .banner.no-cover {
          background-position: center center;
          background-image: url(/static/images/card_media_player_bg.png);
          background-repeat: no-repeat;
          background-color: var(--primary-color);
        }

        .banner.content-type-music:before {
          padding-top: 100%;
        }

        .banner.content-type-game:before {
          padding-top: 100%;
        }

        .banner.no-cover:before {
          padding-top: 88px;
        }

        .banner > .cover {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          border-top-left-radius: 2px;
          border-top-right-radius: 2px;

          background-position: center center;
          background-size: cover;
          transition: opacity 0.8s;
          opacity: 1;
        }

        .banner.is-off > .cover {
          opacity: 0;
        }

        .banner > .caption {
          @apply --paper-font-caption;

          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;

          background-color: rgba(0, 0, 0, var(--dark-secondary-opacity));

          padding: 8px 16px;

          font-size: 14px;
          font-weight: 500;
          color: white;

          transition: background-color 0.5s;
        }

        .banner.is-off > .caption {
          background-color: initial;
        }

        .banner > .caption .title {
          @apply --paper-font-common-nowrap;
          font-size: 1.2em;
          margin: 8px 0 4px;
        }

        .progress {
          width: 100%;
          height: var(--paper-progress-height, 4px);
          margin-top: calc(-1 * var(--paper-progress-height, 4px));
          --paper-progress-active-color: var(--accent-color);
          --paper-progress-container-color: rgba(200, 200, 200, 0.5);
        }

        .controls {
          position: relative;
          @apply --paper-font-body1;
          padding: 8px;
          border-bottom-left-radius: 2px;
          border-bottom-right-radius: 2px;
          background-color: var(--paper-card-background-color, white);
        }

        .controls paper-icon-button {
          width: 44px;
          height: 44px;
        }

        .playback-controls {
          direction: ltr;
        }

        paper-icon-button {
          opacity: var(--dark-primary-opacity);
        }

        paper-icon-button[disabled] {
          opacity: var(--dark-disabled-opacity);
        }

        paper-icon-button.primary {
          width: 56px !important;
          height: 56px !important;
          background-color: var(--primary-color);
          color: white;
          border-radius: 50%;
          padding: 8px;
          transition: background-color 0.5s;
        }

        paper-icon-button.primary[disabled] {
          background-color: rgba(0, 0, 0, var(--dark-disabled-opacity));
        }

        [invisible] {
          visibility: hidden !important;
        }
      </style>

      <div
        class$="[[computeBannerClasses(playerObj, _coverShowing, _coverLoadError)]]"
      >
        <div class="cover" id="cover"></div>

        <div class="caption">
          [[_computeStateName(stateObj)]]
          <div class="title">[[computePrimaryText(localize, playerObj)]]</div>
          [[playerObj.secondaryTitle]]<br />
        </div>
      </div>

      <paper-progress
        max="[[stateObj.attributes.media_duration]]"
        value="[[playbackPosition]]"
        hidden$="[[computeHideProgress(playerObj)]]"
        class="progress"
      ></paper-progress>

      <div class="controls layout horizontal justified">
        <paper-icon-button
          aria-label="Turn off"
          icon="hass:power"
          on-click="handleTogglePower"
          invisible$="[[computeHidePowerButton(playerObj)]]"
          class="self-center secondary"
        ></paper-icon-button>

        <div class="playback-controls">
          <paper-icon-button
            aria-label="Previous track"
            icon="hass:skip-previous"
            invisible$="[[!playerObj.supportsPreviousTrack]]"
            disabled="[[playerObj.isOff]]"
            on-click="handlePrevious"
          ></paper-icon-button>
          <paper-icon-button
            aria-label="Play or Pause"
            class="primary"
            icon="[[computePlaybackControlIcon(playerObj)]]"
            invisible$="[[!computePlaybackControlIcon(playerObj)]]"
            disabled="[[playerObj.isOff]]"
            on-click="handlePlaybackControl"
          ></paper-icon-button>
          <paper-icon-button
            aria-label="Next track"
            icon="hass:skip-next"
            invisible$="[[!playerObj.supportsNextTrack]]"
            disabled="[[playerObj.isOff]]"
            on-click="handleNext"
          ></paper-icon-button>
        </div>

        <paper-icon-button
          aria-label="More information."
          icon="hass:dots-vertical"
          on-click="handleOpenMoreInfo"
          class="self-center secondary"
        ></paper-icon-button>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              playerObj: {
                type: Object,
                computed: "computePlayerObj(hass, stateObj)",
                observer: "playerObjChanged",
              },
              playbackControlIcon: {
                type: String,
                computed: "computePlaybackControlIcon(playerObj)",
              },
              playbackPosition: Number,
              _coverShowing: {
                type: Boolean,
                value: false,
              },
              _coverLoadError: {
                type: Boolean,
                value: false,
              },
            };
          }

          async playerObjChanged(playerObj, oldPlayerObj) {
            if (playerObj.isPlaying && playerObj.showProgress) {
              if (!this._positionTracking) {
                this._positionTracking = setInterval(
                  () => this.updatePlaybackPosition(),
                  1000
                );
              }
            } else if (this._positionTracking) {
              clearInterval(this._positionTracking);
              this._positionTracking = null;
            }

            if (playerObj.showProgress) {
              this.updatePlaybackPosition();
            }

            const picture = playerObj.stateObj.attributes.entity_picture;
            const oldPicture =
              oldPlayerObj && oldPlayerObj.stateObj.attributes.entity_picture;

            if (picture !== oldPicture && !picture) {
              this.$.cover.style.backgroundImage = "";
              return;
            }

            if (picture === oldPicture) {
              return;
            } // We have a new picture url
            // If entity picture is non-relative, we use that url directly.

            if (picture.substr(0, 1) !== "/") {
              this._coverShowing = true;
              this._coverLoadError = false;
              this.$.cover.style.backgroundImage = `url(${picture})`;
              return;
            }

            try {
              const { content_type: contentType, content } = await Object(
                _data_media_player__WEBPACK_IMPORTED_MODULE_7__[
                  "fetchMediaPlayerThumbnailWithCache"
                ]
              )(this.hass, playerObj.stateObj.entity_id);
              this._coverShowing = true;
              this._coverLoadError = false;
              this.$.cover.style.backgroundImage = `url(data:${contentType};base64,${content})`;
            } catch (err) {
              this._coverShowing = false;
              this._coverLoadError = true;
              this.$.cover.style.backgroundImage = "";
            }
          }

          updatePlaybackPosition() {
            this.playbackPosition = this.playerObj.currentProgress;
          }

          computeBannerClasses(playerObj, coverShowing, coverLoadError) {
            var cls = "banner";

            if (playerObj.isOff || playerObj.isIdle) {
              cls += " is-off no-cover";
            } else if (
              !playerObj.stateObj.attributes.entity_picture ||
              coverLoadError ||
              !coverShowing
            ) {
              cls += " no-cover";
            } else if (
              playerObj.stateObj.attributes.media_content_type === "music"
            ) {
              cls += " content-type-music";
            } else if (
              playerObj.stateObj.attributes.media_content_type === "game"
            ) {
              cls += " content-type-game";
            }

            return cls;
          }

          computeHideProgress(playerObj) {
            return !playerObj.showProgress;
          }

          computeHidePowerButton(playerObj) {
            return playerObj.isOff
              ? !playerObj.supportsTurnOn
              : !playerObj.supportsTurnOff;
          }

          computePlayerObj(hass, stateObj) {
            return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ](hass, stateObj);
          }

          computePrimaryText(localize, playerObj) {
            return (
              playerObj.primaryTitle ||
              localize(`state.media_player.${playerObj.stateObj.state}`) ||
              localize(`state.default.${playerObj.stateObj.state}`) ||
              playerObj.stateObj.state
            );
          }

          computePlaybackControlIcon(playerObj) {
            if (playerObj.isPlaying) {
              return playerObj.supportsPause ? "hass:pause" : "hass:stop";
            }

            if (
              playerObj.hasMediaControl ||
              playerObj.isOff ||
              playerObj.isIdle
            ) {
              if (
                playerObj.hasMediaControl &&
                playerObj.supportsPause &&
                !playerObj.isPaused
              ) {
                return "hass:play-pause";
              }

              return playerObj.supportsPlay ? "hass:play" : null;
            }

            return "";
          }

          _computeStateName(stateObj) {
            return Object(
              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__[
                "default"
              ]
            )(stateObj);
          }

          handleNext(ev) {
            ev.stopPropagation();
            this.playerObj.nextTrack();
          }

          handleOpenMoreInfo(ev) {
            ev.stopPropagation();
            this.fire("hass-more-info", {
              entityId: this.stateObj.entity_id,
            });
          }

          handlePlaybackControl(ev) {
            ev.stopPropagation();
            this.playerObj.mediaPlayPause();
          }

          handlePrevious(ev) {
            ev.stopPropagation();
            this.playerObj.previousTrack();
          }

          handleTogglePower(ev) {
            ev.stopPropagation();
            this.playerObj.togglePower();
          }
        }

        customElements.define("ha-media_player-card", HaMediaPlayerCard);

        /***/
      },

    /***/ "./src/cards/ha-weather-card.js":
      /*!**************************************!*\
  !*** ./src/cards/ha-weather-card.js ***!
  \**************************************/
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
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/ha-icon */ "./src/components/ha-icon.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );

        /*
         * @appliesMixin LocalizeMixin
         */

        class HaWeatherCard extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"]
        )(
          Object(
            _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"]
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
      <style>
        :host {
          cursor: pointer;
        }

        .content {
          padding: 0 20px 20px;
        }

        ha-icon {
          color: var(--paper-item-icon-color);
        }

        .header {
          font-family: var(--paper-font-headline_-_font-family);
          -webkit-font-smoothing: var(
            --paper-font-headline_-_-webkit-font-smoothing
          );
          font-size: var(--paper-font-headline_-_font-size);
          font-weight: var(--paper-font-headline_-_font-weight);
          letter-spacing: var(--paper-font-headline_-_letter-spacing);
          line-height: var(--paper-font-headline_-_line-height);
          text-rendering: var(
            --paper-font-common-expensive-kerning_-_text-rendering
          );
          opacity: var(--dark-primary-opacity);
          padding: 24px 16px 16px;
          display: flex;
          align-items: baseline;
        }

        .name {
          margin-left: 16px;
          font-size: 16px;
          color: var(--secondary-text-color);
        }

        :host([rtl]) .name {
          margin-left: 0px;
          margin-right: 16px;
        }

        .now {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .main {
          display: flex;
          align-items: center;
          margin-right: 32px;
        }

        :host([rtl]) .main {
          margin-right: 0px;
        }

        .main ha-icon {
          --iron-icon-height: 72px;
          --iron-icon-width: 72px;
          margin-right: 8px;
        }

        :host([rtl]) .main ha-icon {
          margin-right: 0px;
        }

        .main .temp {
          font-size: 52px;
          line-height: 1em;
          position: relative;
        }

        :host([rtl]) .main .temp {
          direction: ltr;
          margin-right: 28px;
        }

        .main .temp span {
          font-size: 24px;
          line-height: 1em;
          position: absolute;
          top: 4px;
        }

        .measurand {
          display: inline-block;
        }

        :host([rtl]) .measurand {
          direction: ltr;
        }

        .forecast {
          margin-top: 16px;
          display: flex;
          justify-content: space-between;
        }

        .forecast div {
          flex: 0 0 auto;
          text-align: center;
        }

        .forecast .icon {
          margin: 4px 0;
          text-align: center;
        }

        :host([rtl]) .forecast .temp {
          direction: ltr;
        }

        .weekday {
          font-weight: bold;
        }

        .attributes,
        .templow,
        .precipitation {
          color: var(--secondary-text-color);
        }

        :host([rtl]) .precipitation {
          direction: ltr;
        }
      </style>
      <ha-card>
        <div class="header">
          [[computeState(stateObj.state, localize)]]
          <div class="name">[[computeName(stateObj)]]</div>
        </div>
        <div class="content">
          <div class="now">
            <div class="main">
              <template is="dom-if" if="[[showWeatherIcon(stateObj.state)]]">
                <ha-icon icon="[[getWeatherIcon(stateObj.state)]]"></ha-icon>
              </template>
              <div class="temp">
                [[stateObj.attributes.temperature]]<span
                  >[[getUnit('temperature')]]</span
                >
              </div>
            </div>
            <div class="attributes">
              <template
                is="dom-if"
                if="[[_showValue(stateObj.attributes.pressure)]]"
              >
                <div>
                  [[localize('ui.card.weather.attributes.air_pressure')]]:
                  <span class="measurand">
                    [[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]
                  </span>
                </div>
              </template>
              <template
                is="dom-if"
                if="[[_showValue(stateObj.attributes.humidity)]]"
              >
                <div>
                  [[localize('ui.card.weather.attributes.humidity')]]:
                  <span class="measurand"
                    >[[stateObj.attributes.humidity]] %</span
                  >
                </div>
              </template>
              <template
                is="dom-if"
                if="[[_showValue(stateObj.attributes.wind_speed)]]"
              >
                <div>
                  [[localize('ui.card.weather.attributes.wind_speed')]]:
                  <span class="measurand">
                    [[getWindSpeed(stateObj.attributes.wind_speed)]]
                  </span>
                  [[getWindBearing(stateObj.attributes.wind_bearing, localize)]]
                </div>
              </template>
            </div>
          </div>
          <template is="dom-if" if="[[forecast]]">
            <div class="forecast">
              <template is="dom-repeat" items="[[forecast]]">
                <div>
                  <div class="weekday">
                    [[computeDate(item.datetime)]]<br />
                    <template is="dom-if" if="[[!_showValue(item.templow)]]">
                      [[computeTime(item.datetime)]]
                    </template>
                  </div>
                  <template is="dom-if" if="[[_showValue(item.condition)]]">
                    <div class="icon">
                      <ha-icon
                        icon="[[getWeatherIcon(item.condition)]]"
                      ></ha-icon>
                    </div>
                  </template>
                  <template is="dom-if" if="[[_showValue(item.temperature)]]">
                    <div class="temp">
                      [[item.temperature]] [[getUnit('temperature')]]
                    </div>
                  </template>
                  <template is="dom-if" if="[[_showValue(item.templow)]]">
                    <div class="templow">
                      [[item.templow]] [[getUnit('temperature')]]
                    </div>
                  </template>
                  <template is="dom-if" if="[[_showValue(item.precipitation)]]">
                    <div class="precipitation">
                      [[item.precipitation]] [[getUnit('precipitation')]]
                    </div>
                  </template>
                </div>
              </template>
            </div>
          </template>
        </div>
      </ha-card>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              config: Object,
              stateObj: Object,
              forecast: {
                type: Array,
                computed: "computeForecast(stateObj.attributes.forecast)",
              },
              rtl: {
                type: Boolean,
                reflectToAttribute: true,
                computed: "_computeRTL(hass)",
              },
            };
          }

          constructor() {
            super();
            this.cardinalDirections = [
              "N",
              "NNE",
              "NE",
              "ENE",
              "E",
              "ESE",
              "SE",
              "SSE",
              "S",
              "SSW",
              "SW",
              "WSW",
              "W",
              "WNW",
              "NW",
              "NNW",
              "N",
            ];
            this.weatherIcons = {
              "clear-night": "hass:weather-night",
              cloudy: "hass:weather-cloudy",
              fog: "hass:weather-fog",
              hail: "hass:weather-hail",
              lightning: "hass:weather-lightning",
              "lightning-rainy": "hass:weather-lightning-rainy",
              partlycloudy: "hass:weather-partlycloudy",
              pouring: "hass:weather-pouring",
              rainy: "hass:weather-rainy",
              snowy: "hass:weather-snowy",
              "snowy-rainy": "hass:weather-snowy-rainy",
              sunny: "hass:weather-sunny",
              windy: "hass:weather-windy",
              "windy-variant": "hass:weather-windy-variant",
            };
          }

          ready() {
            this.addEventListener("click", this._onClick);
            super.ready();
          }

          _onClick() {
            this.fire("hass-more-info", {
              entityId: this.stateObj.entity_id,
            });
          }

          computeForecast(forecast) {
            return forecast && forecast.slice(0, 5);
          }

          getUnit(measure) {
            const lengthUnit = this.hass.config.unit_system.length || "";

            switch (measure) {
              case "air_pressure":
                return lengthUnit === "km" ? "hPa" : "inHg";

              case "length":
                return lengthUnit;

              case "precipitation":
                return lengthUnit === "km" ? "mm" : "in";

              default:
                return this.hass.config.unit_system[measure] || "";
            }
          }

          computeState(state, localize) {
            return localize(`state.weather.${state}`) || state;
          }

          computeName(stateObj) {
            return (
              (this.config && this.config.name) ||
              Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ]
              )(stateObj)
            );
          }

          showWeatherIcon(condition) {
            return condition in this.weatherIcons;
          }

          getWeatherIcon(condition) {
            return this.weatherIcons[condition];
          }

          windBearingToText(degree) {
            const degreenum = parseInt(degree);

            if (isFinite(degreenum)) {
              return this.cardinalDirections[
                (((degreenum + 11.25) / 22.5) | 0) % 16
              ];
            }

            return degree;
          }

          getWindSpeed(speed) {
            return `${speed} ${this.getUnit("length")}/h`;
          }

          getWindBearing(bearing, localize) {
            if (bearing != null) {
              const cardinalDirection = this.windBearingToText(bearing);
              return `(${localize(
                `ui.card.weather.cardinal_direction.${cardinalDirection.toLowerCase()}`
              ) || cardinalDirection})`;
            }

            return ``;
          }

          _showValue(item) {
            return typeof item !== "undefined" && item !== null;
          }

          computeDate(data) {
            const date = new Date(data);
            return date.toLocaleDateString(this.hass.language, {
              weekday: "short",
            });
          }

          computeTime(data) {
            const date = new Date(data);
            return date.toLocaleTimeString(this.hass.language, {
              hour: "numeric",
            });
          }

          _computeRTL(hass) {
            return Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__[
                "computeRTL"
              ]
            )(hass);
          }
        }

        customElements.define("ha-weather-card", HaWeatherCard);

        /***/
      },

    /***/ "./src/common/entity/extract_views.ts":
      /*!********************************************!*\
  !*** ./src/common/entity/extract_views.ts ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return extractViews;
          }
        );
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../const */ "./src/common/const.ts"
        );

        // Return an ordered array of available views
        function extractViews(entities) {
          const views = [];
          Object.keys(entities).forEach((entityId) => {
            const entity = entities[entityId];

            if (entity.attributes.view) {
              views.push(entity);
            }
          });
          views.sort((view1, view2) => {
            if (
              view1.entity_id ===
              _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_VIEW_ENTITY_ID"]
            ) {
              return -1;
            }

            if (
              view2.entity_id ===
              _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_VIEW_ENTITY_ID"]
            ) {
              return 1;
            }

            return view1.attributes.order - view2.attributes.order;
          });
          return views;
        }

        /***/
      },

    /***/ "./src/common/entity/get_group_entities.ts":
      /*!*************************************************!*\
  !*** ./src/common/entity/get_group_entities.ts ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return getGroupEntities;
          }
        );
        function getGroupEntities(entities, group) {
          const result = {};
          group.attributes.entity_id.forEach((entityId) => {
            const entity = entities[entityId];

            if (entity) {
              result[entity.entity_id] = entity;
            }
          });
          return result;
        }

        /***/
      },

    /***/ "./src/common/entity/get_view_entities.ts":
      /*!************************************************!*\
  !*** ./src/common/entity/get_view_entities.ts ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return getViewEntities;
          }
        );
        /* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./compute_domain */ "./src/common/entity/compute_domain.ts"
        );
        /* harmony import */ var _get_group_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./get_group_entities */ "./src/common/entity/get_group_entities.ts"
        );

        // Return an object containing all entities that the view will show
        // including embedded groups.
        function getViewEntities(entities, view) {
          const viewEntities = {};
          view.attributes.entity_id.forEach((entityId) => {
            const entity = entities[entityId];

            if (entity && !entity.attributes.hidden) {
              viewEntities[entity.entity_id] = entity;

              if (
                Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(
                  entity.entity_id
                ) === "group"
              ) {
                const groupEntities = Object(
                  _get_group_entities__WEBPACK_IMPORTED_MODULE_1__["default"]
                )(entities, entity);
                Object.keys(groupEntities).forEach((grEntityId) => {
                  const grEntity = groupEntities[grEntityId];

                  if (!grEntity.attributes.hidden) {
                    viewEntities[grEntityId] = grEntity;
                  }
                });
              }
            }
          });
          return viewEntities;
        }

        /***/
      },

    /***/ "./src/common/entity/split_by_groups.ts":
      /*!**********************************************!*\
  !*** ./src/common/entity/split_by_groups.ts ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return splitByGroups;
          }
        );
        /* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./compute_domain */ "./src/common/entity/compute_domain.ts"
        );

        // Split a collection into a list of groups and a 'rest' list of ungrouped
        // entities.
        // Returns { groups: [], ungrouped: {} }
        function splitByGroups(entities) {
          const groups = [];
          const ungrouped = {};
          Object.keys(entities).forEach((entityId) => {
            const entity = entities[entityId];

            if (
              Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(
                entityId
              ) === "group"
            ) {
              groups.push(entity);
            } else {
              ungrouped[entityId] = entity;
            }
          });
          groups.forEach((group) =>
            group.attributes.entity_id.forEach((entityId) => {
              delete ungrouped[entityId];
            })
          );
          return {
            groups,
            ungrouped,
          };
        }

        /***/
      },

    /***/ "./src/components/entity/ha-state-label-badge.ts":
      /*!*******************************************************!*\
  !*** ./src/components/entity/ha-state-label-badge.ts ***!
  \*******************************************************/
      /*! exports provided: HaStateLabelBadge */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaStateLabelBadge",
          function() {
            return HaStateLabelBadge;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts"
        );
        /* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts"
        );
        /* harmony import */ var _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../common/entity/timer_time_remaining */ "./src/common/entity/timer_time_remaining.ts"
        );
        /* harmony import */ var _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../common/datetime/seconds_to_duration */ "./src/common/datetime/seconds_to_duration.ts"
        );
        /* harmony import */ var _ha_label_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../ha-label-badge */ "./src/components/ha-label-badge.ts"
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

        let HaStateLabelBadge = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "ha-state-label-badge"
            ),
          ],
          function(_initialize, _LitElement) {
            class HaStateLabelBadge extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: HaStateLabelBadge,
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
                  key: "state",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_timerTimeRemaining",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_connected",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_updateRemaining",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(HaStateLabelBadge.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this._connected = true;
                    this.startInterval(this.state);
                  },
                },
                {
                  kind: "method",
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(HaStateLabelBadge.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    this._connected = false;
                    this.clearInterval();
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    const state = this.state;

                    if (!state) {
                      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <ha-label-badge
          class="warning"
          label="${this.hass.localize("state_badge.default.error")}"
          icon="hass:alert"
          description="${this.hass.localize(
            "state_badge.default.entity_not_found"
          )}"
        ></ha-label-badge>
      `;
                    }

                    const domain = Object(
                      _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__[
                        "default"
                      ]
                    )(state);
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-label-badge
        class="${Object(
          lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"]
        )({
          [domain]: true,
          "has-unit_of_measurement": "unit_of_measurement" in state.attributes,
        })}"
        .value="${this._computeValue(domain, state)}"
        .icon="${this._computeIcon(domain, state)}"
        .image="${state.attributes.entity_picture}"
        .label="${this._computeLabel(domain, state, this._timerTimeRemaining)}"
        .description="${Object(
          _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ]
        )(state)}"
      ></ha-label-badge>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProperties) {
                    _get(
                      _getPrototypeOf(HaStateLabelBadge.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProperties);

                    this.addEventListener("click", (ev) => {
                      ev.stopPropagation();

                      if (this.state) {
                        Object(
                          _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__[
                            "fireEvent"
                          ]
                        )(this, "hass-more-info", {
                          entityId: this.state.entity_id,
                        });
                      }
                    });
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProperties) {
                    _get(
                      _getPrototypeOf(HaStateLabelBadge.prototype),
                      "updated",
                      this
                    ).call(this, changedProperties);

                    if (this._connected && changedProperties.has("state")) {
                      this.startInterval(this.state);
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_computeValue",
                  value: function _computeValue(domain, state) {
                    switch (domain) {
                      case "binary_sensor":
                      case "device_tracker":
                      case "person":
                      case "updater":
                      case "sun":
                      case "alarm_control_panel":
                      case "timer":
                        return null;

                      case "sensor":
                      default:
                        return state.state === "unknown"
                          ? "-"
                          : this.hass.localize(
                              `component.${domain}.state.${state.state}`
                            ) || state.state;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_computeIcon",
                  value: function _computeIcon(domain, state) {
                    if (state.state === "unavailable") {
                      return null;
                    }

                    switch (domain) {
                      case "alarm_control_panel":
                        if (state.state === "pending") {
                          return "hass:clock-fast";
                        }

                        if (state.state === "armed_away") {
                          return "hass:nature";
                        }

                        if (state.state === "armed_home") {
                          return "hass:home-variant";
                        }

                        if (state.state === "armed_night") {
                          return "hass:weather-night";
                        }

                        if (state.state === "armed_custom_bypass") {
                          return "hass:shield-home";
                        }

                        if (state.state === "triggered") {
                          return "hass:alert-circle";
                        } // state == 'disarmed'

                        return Object(
                          _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_5__[
                            "default"
                          ]
                        )(domain, state.state);

                      case "binary_sensor":
                      case "device_tracker":
                      case "updater":
                      case "person":
                        return Object(
                          _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_6__[
                            "default"
                          ]
                        )(state);

                      case "sun":
                        return state.state === "above_horizon"
                          ? Object(
                              _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_5__[
                                "default"
                              ]
                            )(domain)
                          : "hass:brightness-3";

                      case "timer":
                        return state.state === "active"
                          ? "hass:timer"
                          : "hass:timer-off";

                      default:
                        return null;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_computeLabel",
                  value: function _computeLabel(
                    domain,
                    state,
                    _timerTimeRemaining
                  ) {
                    if (
                      state.state === "unavailable" ||
                      [
                        "device_tracker",
                        "alarm_control_panel",
                        "person",
                      ].includes(domain)
                    ) {
                      // Localize the state with a special state_badge namespace, which has variations of
                      // the state translations that are truncated to fit within the badge label. Translations
                      return (
                        this.hass.localize(
                          `state_badge.${domain}.${state.state}`
                        ) ||
                        this.hass.localize(
                          `state_badge.default.${state.state}`
                        ) ||
                        state.state
                      );
                    }

                    if (domain === "timer") {
                      return Object(
                        _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_8__[
                          "default"
                        ]
                      )(_timerTimeRemaining);
                    }

                    return state.attributes.unit_of_measurement || null;
                  },
                },
                {
                  kind: "method",
                  key: "clearInterval",
                  value: (function(_clearInterval) {
                    function clearInterval() {
                      return _clearInterval.apply(this, arguments);
                    }

                    clearInterval.toString = function() {
                      return _clearInterval.toString();
                    };

                    return clearInterval;
                  })(function() {
                    if (this._updateRemaining) {
                      clearInterval(this._updateRemaining);
                      this._updateRemaining = undefined;
                    }
                  }),
                },
                {
                  kind: "method",
                  key: "startInterval",
                  value: function startInterval(stateObj) {
                    this.clearInterval();

                    if (
                      stateObj &&
                      Object(
                        _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__[
                          "default"
                        ]
                      )(stateObj) === "timer"
                    ) {
                      this.calculateTimerRemaining(stateObj);

                      if (stateObj.state === "active") {
                        this._updateRemaining = window.setInterval(
                          () => this.calculateTimerRemaining(this.state),
                          1000
                        );
                      }
                    }
                  },
                },
                {
                  kind: "method",
                  key: "calculateTimerRemaining",
                  value: function calculateTimerRemaining(stateObj) {
                    this._timerTimeRemaining = Object(
                      _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_7__[
                        "default"
                      ]
                    )(stateObj);
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        cursor: pointer;
      }

      ha-label-badge {
        --ha-label-badge-color: var(--label-badge-red, #df4c1e);
      }
      ha-label-badge.has-unit_of_measurement {
        --ha-label-badge-label-text-transform: none;
      }

      ha-label-badge.binary_sensor,
      ha-label-badge.updater {
        --ha-label-badge-color: var(--label-badge-blue, #039be5);
      }

      .red {
        --ha-label-badge-color: var(--label-badge-red, #df4c1e);
      }

      .blue {
        --ha-label-badge-color: var(--label-badge-blue, #039be5);
      }

      .green {
        --ha-label-badge-color: var(--label-badge-green, #0da035);
      }

      .yellow {
        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);
      }

      .grey {
        --ha-label-badge-color: var(--label-badge-grey, var(--paper-grey-500));
      }

      .warning {
        --ha-label-badge-color: var(--label-badge-yellow, #fce588);
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

    /***/ "./src/components/ha-label-badge.ts":
      /*!******************************************!*\
  !*** ./src/components/ha-label-badge.ts ***!
  \******************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js"
        );
        /* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./ha-icon */ "./src/components/ha-icon.ts"
        );

        class HaLabelBadge extends lit_element__WEBPACK_IMPORTED_MODULE_0__[
          "LitElement"
        ] {
          constructor(...args) {
            super(...args);
            this.value = void 0;
            this.icon = void 0;
            this.label = void 0;
            this.description = void 0;
            this.image = void 0;
          }

          static get properties() {
            return {
              value: {},
              icon: {},
              label: {},
              description: {},
              image: {},
            };
          }

          render() {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="badge-container">
        <div class="label-badge" id="badge">
          <div
            class="${Object(
              lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__[
                "classMap"
              ]
            )({
              value: true,
              big: Boolean(this.value && this.value.length > 4),
            })}"
          >
            ${
              this.icon && !this.value && !this.image
                ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <ha-icon .icon="${this.icon}"></ha-icon>
                `
                : ""
            }
            ${
              this.value && !this.image
                ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <span>${this.value}</span>
                `
                : ""
            }
          </div>
          ${
            this.label
              ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div
                  class="${Object(
                    lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__[
                      "classMap"
                    ]
                  )({
                    label: true,
                    big: this.label.length > 5,
                  })}"
                >
                  <span>${this.label}</span>
                </div>
              `
              : ""
          }
        </div>
        ${
          this.description
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="title">${this.description}</div>
            `
            : ""
        }
      </div>
    `;
          }

          static get styles() {
            return [
              lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .badge-container {
          display: inline-block;
          text-align: center;
          vertical-align: top;
        }
        .label-badge {
          position: relative;
          display: block;
          margin: 0 auto;
          width: var(--ha-label-badge-size, 2.5em);
          text-align: center;
          height: var(--ha-label-badge-size, 2.5em);
          line-height: var(--ha-label-badge-size, 2.5em);
          font-size: var(--ha-label-badge-font-size, 1.5em);
          border-radius: 50%;
          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));
          color: var(--label-badge-text-color, rgb(76, 76, 76));

          white-space: nowrap;
          background-color: var(--label-badge-background-color, white);
          background-size: cover;
          transition: border 0.3s ease-in-out;
        }
        .label-badge .value {
          font-size: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label-badge .value.big {
          font-size: 70%;
        }
        .label-badge .label {
          position: absolute;
          bottom: -1em;
          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */
          left: -0.2em;
          right: -0.2em;
          line-height: 1em;
          font-size: 0.5em;
        }
        .label-badge .label span {
          box-sizing: border-box;
          max-width: 100%;
          display: inline-block;
          background-color: var(--ha-label-badge-color, var(--primary-color));
          color: var(--ha-label-badge-label-color, white);
          border-radius: 1em;
          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */
          font-weight: 500;
          overflow: hidden;
          text-transform: uppercase;
          text-overflow: ellipsis;
          transition: background-color 0.3s ease-in-out;
          text-transform: var(--ha-label-badge-label-text-transform, uppercase);
        }
        .label-badge .label.big span {
          font-size: 90%;
          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */
        }
        .badge-container .title {
          margin-top: 1em;
          font-size: var(--ha-label-badge-title-font-size, 0.9em);
          width: var(--ha-label-badge-title-width, 5em);
          font-weight: var(--ha-label-badge-title-font-weight, 400);
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: normal;
        }
      `,
            ];
          }

          updated(changedProperties) {
            super.updated(changedProperties);

            if (changedProperties.has("image")) {
              this.shadowRoot.getElementById(
                "badge"
              ).style.backgroundImage = this.image ? `url(${this.image})` : "";
            }
          }
        }

        customElements.define("ha-label-badge", HaLabelBadge);

        /***/
      },

    /***/ "./src/components/ha-start-voice-button.js":
      /*!*************************************************!*\
  !*** ./src/components/ha-start-voice-button.js ***!
  \*************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        /*
         * @appliesMixin EventsMixin
         */

        class HaStartVoiceButton extends Object(
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
      <paper-icon-button
        aria-label="Start conversation"
        icon="hass:microphone"
        hidden$="[[!canListen]]"
        on-click="handleListenClick"
      ></paper-icon-button>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
                value: null,
              },
              canListen: {
                type: Boolean,
                computed: "computeCanListen(hass)",
                notify: true,
              },
            };
          }

          computeCanListen(hass) {
            return (
              "webkitSpeechRecognition" in window &&
              Object(
                _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ]
              )(hass, "conversation")
            );
          }

          handleListenClick() {
            Object(
              _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"]
            )(this, "show-dialog", {
              dialogImport: () =>
                __webpack_require__
                  .e(
                    /*! import() | voice-command-dialog */ "voice-command-dialog"
                  )
                  .then(
                    __webpack_require__.bind(
                      null,
                      /*! ../dialogs/ha-voice-command-dialog */ "./src/dialogs/ha-voice-command-dialog.js"
                    )
                  ),
              dialogTag: "ha-voice-command-dialog",
            });
          }
        }

        customElements.define("ha-start-voice-button", HaStartVoiceButton);

        /***/
      },

    /***/ "./src/data/media-player.ts":
      /*!**********************************!*\
  !*** ./src/data/media-player.ts ***!
  \**********************************/
      /*! exports provided: SUPPORT_PAUSE, SUPPORT_NEXT_TRACK, SUPPORTS_PLAY, OFF_STATES, fetchMediaPlayerThumbnailWithCache, fetchMediaPlayerThumbnail */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SUPPORT_PAUSE",
          function() {
            return SUPPORT_PAUSE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SUPPORT_NEXT_TRACK",
          function() {
            return SUPPORT_NEXT_TRACK;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SUPPORTS_PLAY",
          function() {
            return SUPPORTS_PLAY;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "OFF_STATES",
          function() {
            return OFF_STATES;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchMediaPlayerThumbnailWithCache",
          function() {
            return fetchMediaPlayerThumbnailWithCache;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchMediaPlayerThumbnail",
          function() {
            return fetchMediaPlayerThumbnail;
          }
        );
        /* harmony import */ var _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../common/util/time-cache-function-promise */ "./src/common/util/time-cache-function-promise.ts"
        );

        const SUPPORT_PAUSE = 1;
        const SUPPORT_NEXT_TRACK = 32;
        const SUPPORTS_PLAY = 16384;
        const OFF_STATES = ["off", "idle"];
        const fetchMediaPlayerThumbnailWithCache = (hass, entityId) =>
          Object(
            _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__[
              "timeCachePromiseFunc"
            ]
          )(
            "_media_playerTmb",
            9000,
            fetchMediaPlayerThumbnail,
            hass,
            entityId
          );
        const fetchMediaPlayerThumbnail = (hass, entityId) => {
          return hass.callWS({
            type: "media_player_thumbnail",
            entity_id: entityId,
          });
        };

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
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwta2lvc2t+cGFuZWwtbG92ZWxhY2V+cGFuZWwtc3RhdGVzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmRzL2hhLW1lZGlhX3BsYXllci1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS13ZWF0aGVyLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZXh0cmFjdF92aWV3cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9nZXRfZ3JvdXBfZW50aXRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZ2V0X3ZpZXdfZW50aXRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc3BsaXRfYnlfZ3JvdXBzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1zdGF0ZS1sYWJlbC1iYWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1sYWJlbC1iYWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zdGFydC12b2ljZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvbWVkaWEtcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2hhLWFwcC1sYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1wcm9ncmVzcy9wYXBlci1wcm9ncmVzc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3R5bGVzL2VsZW1lbnQtc3R5bGVzL3BhcGVyLW1hdGVyaWFsLXN0eWxlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IEhhc3NNZWRpYVBsYXllckVudGl0eSBmcm9tIFwiLi4vdXRpbC9oYXNzLW1lZGlhLXBsYXllci1tb2RlbFwiO1xuaW1wb3J0IHsgZmV0Y2hNZWRpYVBsYXllclRodW1ibmFpbFdpdGhDYWNoZSB9IGZyb20gXCIuLi9kYXRhL21lZGlhLXBsYXllclwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYU1lZGlhUGxheWVyQ2FyZCBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGVcbiAgICAgICAgaW5jbHVkZT1cInBhcGVyLW1hdGVyaWFsLXN0eWxlcyBpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudCBpcm9uLXBvc2l0aW9uaW5nXCJcbiAgICAgID5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmb250LXNpemU6IDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFubmVyOmJlZm9yZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvKiByZW1vdmVkIC4yNSUgZnJvbSAxNjo5IHJhdGlvIHRvIGZpeCBZVCBibGFjayBiYXJzICovXG4gICAgICAgICAgcGFkZGluZy10b3A6IDU2JTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBwYWRkaW5nLXRvcCAwLjhzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lci5uby1jb3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvY2FyZF9tZWRpYV9wbGF5ZXJfYmcucG5nKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lci5jb250ZW50LXR5cGUtbXVzaWM6YmVmb3JlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIuY29udGVudC10eXBlLWdhbWU6YmVmb3JlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIubm8tY292ZXI6YmVmb3JlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogODhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIgPiAuY292ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcblxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHM7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIuaXMtb2ZmID4gLmNvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lciA+IC5jYXB0aW9uIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNhcHRpb247XG5cbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLWRhcmstc2Vjb25kYXJ5LW9wYWNpdHkpKTtcblxuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lci5pcy1vZmYgPiAuY2FwdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIgPiAuY2FwdGlvbiAudGl0bGUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgIG1hcmdpbjogOHB4IDAgNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLXBhcGVyLXByb2dyZXNzLWhlaWdodCwgNHB4KTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0tcGFwZXItcHJvZ3Jlc3MtaGVpZ2h0LCA0cHgpKTtcbiAgICAgICAgICAtLXBhcGVyLXByb2dyZXNzLWFjdGl2ZS1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAtLXBhcGVyLXByb2dyZXNzLWNvbnRhaW5lci1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udHJvbHMgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5YmFjay1jb250cm9scyB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ucHJpbWFyeSB7XG4gICAgICAgICAgd2lkdGg6IDU2cHggIWltcG9ydGFudDtcbiAgICAgICAgICBoZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbi5wcmltYXJ5W2Rpc2FibGVkXSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS1kYXJrLWRpc2FibGVkLW9wYWNpdHkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtpbnZpc2libGVdIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcyQ9XCJbW2NvbXB1dGVCYW5uZXJDbGFzc2VzKHBsYXllck9iaiwgX2NvdmVyU2hvd2luZywgX2NvdmVyTG9hZEVycm9yKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvdmVyXCIgaWQ9XCJjb3ZlclwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgW1tfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPltbY29tcHV0ZVByaW1hcnlUZXh0KGxvY2FsaXplLCBwbGF5ZXJPYmopXV08L2Rpdj5cbiAgICAgICAgICBbW3BsYXllck9iai5zZWNvbmRhcnlUaXRsZV1dPGJyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxwYXBlci1wcm9ncmVzc1xuICAgICAgICBtYXg9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWVkaWFfZHVyYXRpb25dXVwiXG4gICAgICAgIHZhbHVlPVwiW1twbGF5YmFja1Bvc2l0aW9uXV1cIlxuICAgICAgICBoaWRkZW4kPVwiW1tjb21wdXRlSGlkZVByb2dyZXNzKHBsYXllck9iaildXVwiXG4gICAgICAgIGNsYXNzPVwicHJvZ3Jlc3NcIlxuICAgICAgPjwvcGFwZXItcHJvZ3Jlc3M+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9scyBsYXlvdXQgaG9yaXpvbnRhbCBqdXN0aWZpZWRcIj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlR1cm4gb2ZmXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpwb3dlclwiXG4gICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVUb2dnbGVQb3dlclwiXG4gICAgICAgICAgaW52aXNpYmxlJD1cIltbY29tcHV0ZUhpZGVQb3dlckJ1dHRvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgIGNsYXNzPVwic2VsZi1jZW50ZXIgc2Vjb25kYXJ5XCJcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYXliYWNrLWNvbnRyb2xzXCI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgdHJhY2tcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6c2tpcC1wcmV2aW91c1wiXG4gICAgICAgICAgICBpbnZpc2libGUkPVwiW1shcGxheWVyT2JqLnN1cHBvcnRzUHJldmlvdXNUcmFja11dXCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1twbGF5ZXJPYmouaXNPZmZdXVwiXG4gICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZVByZXZpb3VzXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQbGF5IG9yIFBhdXNlXCJcbiAgICAgICAgICAgIGNsYXNzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBpY29uPVwiW1tjb21wdXRlUGxheWJhY2tDb250cm9sSWNvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgICAgaW52aXNpYmxlJD1cIltbIWNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iaildXVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbcGxheWVyT2JqLmlzT2ZmXV1cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVQbGF5YmFja0NvbnRyb2xcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgdHJhY2tcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6c2tpcC1uZXh0XCJcbiAgICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFwbGF5ZXJPYmouc3VwcG9ydHNOZXh0VHJhY2tdXVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbcGxheWVyT2JqLmlzT2ZmXV1cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVOZXh0XCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk1vcmUgaW5mb3JtYXRpb24uXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZU9wZW5Nb3JlSW5mb1wiXG4gICAgICAgICAgY2xhc3M9XCJzZWxmLWNlbnRlciBzZWNvbmRhcnlcIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBwbGF5ZXJPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlUGxheWVyT2JqKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgICBvYnNlcnZlcjogXCJwbGF5ZXJPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgcGxheWJhY2tDb250cm9sSWNvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iailcIixcbiAgICAgIH0sXG4gICAgICBwbGF5YmFja1Bvc2l0aW9uOiBOdW1iZXIsXG4gICAgICBfY292ZXJTaG93aW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBfY292ZXJMb2FkRXJyb3I6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgcGxheWVyT2JqQ2hhbmdlZChwbGF5ZXJPYmosIG9sZFBsYXllck9iaikge1xuICAgIGlmIChwbGF5ZXJPYmouaXNQbGF5aW5nICYmIHBsYXllck9iai5zaG93UHJvZ3Jlc3MpIHtcbiAgICAgIGlmICghdGhpcy5fcG9zaXRpb25UcmFja2luZykge1xuICAgICAgICB0aGlzLl9wb3NpdGlvblRyYWNraW5nID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVQbGF5YmFja1Bvc2l0aW9uKCksXG4gICAgICAgICAgMTAwMFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fcG9zaXRpb25UcmFja2luZykge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9wb3NpdGlvblRyYWNraW5nKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uVHJhY2tpbmcgPSBudWxsO1xuICAgIH1cbiAgICBpZiAocGxheWVyT2JqLnNob3dQcm9ncmVzcykge1xuICAgICAgdGhpcy51cGRhdGVQbGF5YmFja1Bvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGljdHVyZSA9IHBsYXllck9iai5zdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlO1xuICAgIGNvbnN0IG9sZFBpY3R1cmUgPVxuICAgICAgb2xkUGxheWVyT2JqICYmIG9sZFBsYXllck9iai5zdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlO1xuXG4gICAgaWYgKHBpY3R1cmUgIT09IG9sZFBpY3R1cmUgJiYgIXBpY3R1cmUpIHtcbiAgICAgIHRoaXMuJC5jb3Zlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGljdHVyZSA9PT0gb2xkUGljdHVyZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFdlIGhhdmUgYSBuZXcgcGljdHVyZSB1cmxcbiAgICAvLyBJZiBlbnRpdHkgcGljdHVyZSBpcyBub24tcmVsYXRpdmUsIHdlIHVzZSB0aGF0IHVybCBkaXJlY3RseS5cbiAgICBpZiAocGljdHVyZS5zdWJzdHIoMCwgMSkgIT09IFwiL1wiKSB7XG4gICAgICB0aGlzLl9jb3ZlclNob3dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fY292ZXJMb2FkRXJyb3IgPSBmYWxzZTtcbiAgICAgIHRoaXMuJC5jb3Zlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGljdHVyZX0pYDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb250ZW50X3R5cGU6IGNvbnRlbnRUeXBlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSA9IGF3YWl0IGZldGNoTWVkaWFQbGF5ZXJUaHVtYm5haWxXaXRoQ2FjaGUoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgcGxheWVyT2JqLnN0YXRlT2JqLmVudGl0eV9pZFxuICAgICAgKTtcbiAgICAgIHRoaXMuX2NvdmVyU2hvd2luZyA9IHRydWU7XG4gICAgICB0aGlzLl9jb3ZlckxvYWRFcnJvciA9IGZhbHNlO1xuICAgICAgdGhpcy4kLmNvdmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoZGF0YToke2NvbnRlbnRUeXBlfTtiYXNlNjQsJHtjb250ZW50fSlgO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fY292ZXJTaG93aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb3ZlckxvYWRFcnJvciA9IHRydWU7XG4gICAgICB0aGlzLiQuY292ZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQbGF5YmFja1Bvc2l0aW9uKCkge1xuICAgIHRoaXMucGxheWJhY2tQb3NpdGlvbiA9IHRoaXMucGxheWVyT2JqLmN1cnJlbnRQcm9ncmVzcztcbiAgfVxuXG4gIGNvbXB1dGVCYW5uZXJDbGFzc2VzKHBsYXllck9iaiwgY292ZXJTaG93aW5nLCBjb3ZlckxvYWRFcnJvcikge1xuICAgIHZhciBjbHMgPSBcImJhbm5lclwiO1xuXG4gICAgaWYgKHBsYXllck9iai5pc09mZiB8fCBwbGF5ZXJPYmouaXNJZGxlKSB7XG4gICAgICBjbHMgKz0gXCIgaXMtb2ZmIG5vLWNvdmVyXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICFwbGF5ZXJPYmouc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZSB8fFxuICAgICAgY292ZXJMb2FkRXJyb3IgfHxcbiAgICAgICFjb3ZlclNob3dpbmdcbiAgICApIHtcbiAgICAgIGNscyArPSBcIiBuby1jb3ZlclwiO1xuICAgIH0gZWxzZSBpZiAocGxheWVyT2JqLnN0YXRlT2JqLmF0dHJpYnV0ZXMubWVkaWFfY29udGVudF90eXBlID09PSBcIm11c2ljXCIpIHtcbiAgICAgIGNscyArPSBcIiBjb250ZW50LXR5cGUtbXVzaWNcIjtcbiAgICB9IGVsc2UgaWYgKHBsYXllck9iai5zdGF0ZU9iai5hdHRyaWJ1dGVzLm1lZGlhX2NvbnRlbnRfdHlwZSA9PT0gXCJnYW1lXCIpIHtcbiAgICAgIGNscyArPSBcIiBjb250ZW50LXR5cGUtZ2FtZVwiO1xuICAgIH1cbiAgICByZXR1cm4gY2xzO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVQcm9ncmVzcyhwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gIXBsYXllck9iai5zaG93UHJvZ3Jlc3M7XG4gIH1cblxuICBjb21wdXRlSGlkZVBvd2VyQnV0dG9uKHBsYXllck9iaikge1xuICAgIHJldHVybiBwbGF5ZXJPYmouaXNPZmZcbiAgICAgID8gIXBsYXllck9iai5zdXBwb3J0c1R1cm5PblxuICAgICAgOiAhcGxheWVyT2JqLnN1cHBvcnRzVHVybk9mZjtcbiAgfVxuXG4gIGNvbXB1dGVQbGF5ZXJPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IEhhc3NNZWRpYVBsYXllckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlUHJpbWFyeVRleHQobG9jYWxpemUsIHBsYXllck9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBwbGF5ZXJPYmoucHJpbWFyeVRpdGxlIHx8XG4gICAgICBsb2NhbGl6ZShgc3RhdGUubWVkaWFfcGxheWVyLiR7cGxheWVyT2JqLnN0YXRlT2JqLnN0YXRlfWApIHx8XG4gICAgICBsb2NhbGl6ZShgc3RhdGUuZGVmYXVsdC4ke3BsYXllck9iai5zdGF0ZU9iai5zdGF0ZX1gKSB8fFxuICAgICAgcGxheWVyT2JqLnN0YXRlT2JqLnN0YXRlXG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iaikge1xuICAgIGlmIChwbGF5ZXJPYmouaXNQbGF5aW5nKSB7XG4gICAgICByZXR1cm4gcGxheWVyT2JqLnN1cHBvcnRzUGF1c2UgPyBcImhhc3M6cGF1c2VcIiA6IFwiaGFzczpzdG9wXCI7XG4gICAgfVxuICAgIGlmIChwbGF5ZXJPYmouaGFzTWVkaWFDb250cm9sIHx8IHBsYXllck9iai5pc09mZiB8fCBwbGF5ZXJPYmouaXNJZGxlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllck9iai5oYXNNZWRpYUNvbnRyb2wgJiZcbiAgICAgICAgcGxheWVyT2JqLnN1cHBvcnRzUGF1c2UgJiZcbiAgICAgICAgIXBsYXllck9iai5pc1BhdXNlZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBcImhhc3M6cGxheS1wYXVzZVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBsYXllck9iai5zdXBwb3J0c1BsYXkgPyBcImhhc3M6cGxheVwiIDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIGhhbmRsZU5leHQoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnBsYXllck9iai5uZXh0VHJhY2soKTtcbiAgfVxuXG4gIGhhbmRsZU9wZW5Nb3JlSW5mbyhldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH0pO1xuICB9XG5cbiAgaGFuZGxlUGxheWJhY2tDb250cm9sKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wbGF5ZXJPYmoubWVkaWFQbGF5UGF1c2UoKTtcbiAgfVxuXG4gIGhhbmRsZVByZXZpb3VzKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wbGF5ZXJPYmoucHJldmlvdXNUcmFjaygpO1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlUG93ZXIoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnBsYXllck9iai50b2dnbGVQb3dlcigpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1tZWRpYV9wbGF5ZXItY2FyZFwiLCBIYU1lZGlhUGxheWVyQ2FyZCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWljb25cIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhV2VhdGhlckNhcmQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtaWNvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZV8tX2ZvbnQtZmFtaWx5KTtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiB2YXIoXG4gICAgICAgICAgICAtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV8td2Via2l0LWZvbnQtc21vb3RoaW5nXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV9mb250LXNpemUpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fZm9udC13ZWlnaHQpO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fbGV0dGVyLXNwYWNpbmcpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fbGluZS1oZWlnaHQpO1xuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiB2YXIoXG4gICAgICAgICAgICAtLXBhcGVyLWZvbnQtY29tbW9uLWV4cGVuc2l2ZS1rZXJuaW5nXy1fdGV4dC1yZW5kZXJpbmdcbiAgICAgICAgICApO1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4IDE2cHggMTZweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAubmFtZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5tYWluIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIGhhLWljb24ge1xuICAgICAgICAgIC0taXJvbi1pY29uLWhlaWdodDogNzJweDtcbiAgICAgICAgICAtLWlyb24taWNvbi13aWR0aDogNzJweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAubWFpbiBoYS1pY29uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIC50ZW1wIHtcbiAgICAgICAgICBmb250LXNpemU6IDUycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLm1haW4gLnRlbXAge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIC50ZW1wIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZWFzdXJhbmQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAubWVhc3VyYW5kIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JlY2FzdCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JlY2FzdCBkaXYge1xuICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JlY2FzdCAuaWNvbiB7XG4gICAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLmZvcmVjYXN0IC50ZW1wIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC53ZWVrZGF5IHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzLFxuICAgICAgICAudGVtcGxvdyxcbiAgICAgICAgLnByZWNpcGl0YXRpb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLnByZWNpcGl0YXRpb24ge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICBbW2NvbXB1dGVTdGF0ZShzdGF0ZU9iai5zdGF0ZSwgbG9jYWxpemUpXV1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPltbY29tcHV0ZU5hbWUoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3Nob3dXZWF0aGVySWNvbihzdGF0ZU9iai5zdGF0ZSldXVwiPlxuICAgICAgICAgICAgICAgIDxoYS1pY29uIGljb249XCJbW2dldFdlYXRoZXJJY29uKHN0YXRlT2JqLnN0YXRlKV1dXCI+PC9oYS1pY29uPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcFwiPlxuICAgICAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZV1dPHNwYW5cbiAgICAgICAgICAgICAgICAgID5bW2dldFVuaXQoJ3RlbXBlcmF0dXJlJyldXTwvc3BhblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdHRyaWJ1dGVzXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgICAgICBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNzdXJlKV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy5haXJfcHJlc3N1cmUnKV1dOlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZWFzdXJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNzdXJlXV0gW1tnZXRVbml0KCdhaXJfcHJlc3N1cmUnKV1dXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgICAgICBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5KV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy5odW1pZGl0eScpXV06XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1lYXN1cmFuZFwiXG4gICAgICAgICAgICAgICAgICAgID5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHldXSAlPC9zcGFuXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgICAgICBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLndpbmRfc3BlZWQpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLndpbmRfc3BlZWQnKV1dOlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZWFzdXJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tnZXRXaW5kU3BlZWQoc3RhdGVPYmouYXR0cmlidXRlcy53aW5kX3NwZWVkKV1dXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICBbW2dldFdpbmRCZWFyaW5nKHN0YXRlT2JqLmF0dHJpYnV0ZXMud2luZF9iZWFyaW5nLCBsb2NhbGl6ZSldXVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2ZvcmVjYXN0XV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JlY2FzdFwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2ZvcmVjYXN0XV1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWtkYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tjb21wdXRlRGF0ZShpdGVtLmRhdGV0aW1lKV1dPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX3Nob3dWYWx1ZShpdGVtLnRlbXBsb3cpXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBbW2NvbXB1dGVUaW1lKGl0ZW0uZGF0ZXRpbWUpXV1cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19zaG93VmFsdWUoaXRlbS5jb25kaXRpb24pXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aGEtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIltbZ2V0V2VhdGhlckljb24oaXRlbS5jb25kaXRpb24pXV1cIlxuICAgICAgICAgICAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKGl0ZW0udGVtcGVyYXR1cmUpXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBbW2l0ZW0udGVtcGVyYXR1cmVdXSBbW2dldFVuaXQoJ3RlbXBlcmF0dXJlJyldXVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShpdGVtLnRlbXBsb3cpXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICBbW2l0ZW0udGVtcGxvd11dIFtbZ2V0VW5pdCgndGVtcGVyYXR1cmUnKV1dXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKGl0ZW0ucHJlY2lwaXRhdGlvbildXVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlY2lwaXRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIFtbaXRlbS5wcmVjaXBpdGF0aW9uXV0gW1tnZXRVbml0KCdwcmVjaXBpdGF0aW9uJyldXVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBjb25maWc6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBmb3JlY2FzdDoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUZvcmVjYXN0KHN0YXRlT2JqLmF0dHJpYnV0ZXMuZm9yZWNhc3QpXCIsXG4gICAgICB9LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jYXJkaW5hbERpcmVjdGlvbnMgPSBbXG4gICAgICBcIk5cIixcbiAgICAgIFwiTk5FXCIsXG4gICAgICBcIk5FXCIsXG4gICAgICBcIkVORVwiLFxuICAgICAgXCJFXCIsXG4gICAgICBcIkVTRVwiLFxuICAgICAgXCJTRVwiLFxuICAgICAgXCJTU0VcIixcbiAgICAgIFwiU1wiLFxuICAgICAgXCJTU1dcIixcbiAgICAgIFwiU1dcIixcbiAgICAgIFwiV1NXXCIsXG4gICAgICBcIldcIixcbiAgICAgIFwiV05XXCIsXG4gICAgICBcIk5XXCIsXG4gICAgICBcIk5OV1wiLFxuICAgICAgXCJOXCIsXG4gICAgXTtcbiAgICB0aGlzLndlYXRoZXJJY29ucyA9IHtcbiAgICAgIFwiY2xlYXItbmlnaHRcIjogXCJoYXNzOndlYXRoZXItbmlnaHRcIixcbiAgICAgIGNsb3VkeTogXCJoYXNzOndlYXRoZXItY2xvdWR5XCIsXG4gICAgICBmb2c6IFwiaGFzczp3ZWF0aGVyLWZvZ1wiLFxuICAgICAgaGFpbDogXCJoYXNzOndlYXRoZXItaGFpbFwiLFxuICAgICAgbGlnaHRuaW5nOiBcImhhc3M6d2VhdGhlci1saWdodG5pbmdcIixcbiAgICAgIFwibGlnaHRuaW5nLXJhaW55XCI6IFwiaGFzczp3ZWF0aGVyLWxpZ2h0bmluZy1yYWlueVwiLFxuICAgICAgcGFydGx5Y2xvdWR5OiBcImhhc3M6d2VhdGhlci1wYXJ0bHljbG91ZHlcIixcbiAgICAgIHBvdXJpbmc6IFwiaGFzczp3ZWF0aGVyLXBvdXJpbmdcIixcbiAgICAgIHJhaW55OiBcImhhc3M6d2VhdGhlci1yYWlueVwiLFxuICAgICAgc25vd3k6IFwiaGFzczp3ZWF0aGVyLXNub3d5XCIsXG4gICAgICBcInNub3d5LXJhaW55XCI6IFwiaGFzczp3ZWF0aGVyLXNub3d5LXJhaW55XCIsXG4gICAgICBzdW5ueTogXCJoYXNzOndlYXRoZXItc3VubnlcIixcbiAgICAgIHdpbmR5OiBcImhhc3M6d2VhdGhlci13aW5keVwiLFxuICAgICAgXCJ3aW5keS12YXJpYW50XCI6IFwiaGFzczp3ZWF0aGVyLXdpbmR5LXZhcmlhbnRcIixcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fb25DbGljayk7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgfVxuXG4gIF9vbkNsaWNrKCkge1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH0pO1xuICB9XG5cbiAgY29tcHV0ZUZvcmVjYXN0KGZvcmVjYXN0KSB7XG4gICAgcmV0dXJuIGZvcmVjYXN0ICYmIGZvcmVjYXN0LnNsaWNlKDAsIDUpO1xuICB9XG5cbiAgZ2V0VW5pdChtZWFzdXJlKSB7XG4gICAgY29uc3QgbGVuZ3RoVW5pdCA9IHRoaXMuaGFzcy5jb25maWcudW5pdF9zeXN0ZW0ubGVuZ3RoIHx8IFwiXCI7XG4gICAgc3dpdGNoIChtZWFzdXJlKSB7XG4gICAgICBjYXNlIFwiYWlyX3ByZXNzdXJlXCI6XG4gICAgICAgIHJldHVybiBsZW5ndGhVbml0ID09PSBcImttXCIgPyBcImhQYVwiIDogXCJpbkhnXCI7XG4gICAgICBjYXNlIFwibGVuZ3RoXCI6XG4gICAgICAgIHJldHVybiBsZW5ndGhVbml0O1xuICAgICAgY2FzZSBcInByZWNpcGl0YXRpb25cIjpcbiAgICAgICAgcmV0dXJuIGxlbmd0aFVuaXQgPT09IFwia21cIiA/IFwibW1cIiA6IFwiaW5cIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLmhhc3MuY29uZmlnLnVuaXRfc3lzdGVtW21lYXN1cmVdIHx8IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZVN0YXRlKHN0YXRlLCBsb2NhbGl6ZSkge1xuICAgIHJldHVybiBsb2NhbGl6ZShgc3RhdGUud2VhdGhlci4ke3N0YXRlfWApIHx8IHN0YXRlO1xuICB9XG5cbiAgY29tcHV0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm5hbWUpIHx8IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgc2hvd1dlYXRoZXJJY29uKGNvbmRpdGlvbikge1xuICAgIHJldHVybiBjb25kaXRpb24gaW4gdGhpcy53ZWF0aGVySWNvbnM7XG4gIH1cblxuICBnZXRXZWF0aGVySWNvbihjb25kaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy53ZWF0aGVySWNvbnNbY29uZGl0aW9uXTtcbiAgfVxuXG4gIHdpbmRCZWFyaW5nVG9UZXh0KGRlZ3JlZSkge1xuICAgIGNvbnN0IGRlZ3JlZW51bSA9IHBhcnNlSW50KGRlZ3JlZSk7XG4gICAgaWYgKGlzRmluaXRlKGRlZ3JlZW51bSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhcmRpbmFsRGlyZWN0aW9uc1soKChkZWdyZWVudW0gKyAxMS4yNSkgLyAyMi41KSB8IDApICUgMTZdO1xuICAgIH1cbiAgICByZXR1cm4gZGVncmVlO1xuICB9XG5cbiAgZ2V0V2luZFNwZWVkKHNwZWVkKSB7XG4gICAgcmV0dXJuIGAke3NwZWVkfSAke3RoaXMuZ2V0VW5pdChcImxlbmd0aFwiKX0vaGA7XG4gIH1cblxuICBnZXRXaW5kQmVhcmluZyhiZWFyaW5nLCBsb2NhbGl6ZSkge1xuICAgIGlmIChiZWFyaW5nICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGNhcmRpbmFsRGlyZWN0aW9uID0gdGhpcy53aW5kQmVhcmluZ1RvVGV4dChiZWFyaW5nKTtcbiAgICAgIHJldHVybiBgKCR7bG9jYWxpemUoXG4gICAgICAgIGB1aS5jYXJkLndlYXRoZXIuY2FyZGluYWxfZGlyZWN0aW9uLiR7Y2FyZGluYWxEaXJlY3Rpb24udG9Mb3dlckNhc2UoKX1gXG4gICAgICApIHx8IGNhcmRpbmFsRGlyZWN0aW9ufSlgO1xuICAgIH1cbiAgICByZXR1cm4gYGA7XG4gIH1cblxuICBfc2hvd1ZhbHVlKGl0ZW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlbSAhPT0gbnVsbDtcbiAgfVxuXG4gIGNvbXB1dGVEYXRlKGRhdGEpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0YSk7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuaGFzcy5sYW5ndWFnZSwgeyB3ZWVrZGF5OiBcInNob3J0XCIgfSk7XG4gIH1cblxuICBjb21wdXRlVGltZShkYXRhKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGEpO1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyh0aGlzLmhhc3MubGFuZ3VhZ2UsIHsgaG91cjogXCJudW1lcmljXCIgfSk7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXdlYXRoZXItY2FyZFwiLCBIYVdlYXRoZXJDYXJkKTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdGllcyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IERFRkFVTFRfVklFV19FTlRJVFlfSUQgfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IEdyb3VwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8vIFJldHVybiBhbiBvcmRlcmVkIGFycmF5IG9mIGF2YWlsYWJsZSB2aWV3c1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXh0cmFjdFZpZXdzKGVudGl0aWVzOiBIYXNzRW50aXRpZXMpOiBHcm91cEVudGl0eVtdIHtcbiAgY29uc3Qgdmlld3M6IEdyb3VwRW50aXR5W10gPSBbXTtcblxuICBPYmplY3Qua2V5cyhlbnRpdGllcykuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG4gICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzLnZpZXcpIHtcbiAgICAgIHZpZXdzLnB1c2goZW50aXR5IGFzIEdyb3VwRW50aXR5KTtcbiAgICB9XG4gIH0pO1xuXG4gIHZpZXdzLnNvcnQoKHZpZXcxLCB2aWV3MikgPT4ge1xuICAgIGlmICh2aWV3MS5lbnRpdHlfaWQgPT09IERFRkFVTFRfVklFV19FTlRJVFlfSUQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKHZpZXcyLmVudGl0eV9pZCA9PT0gREVGQVVMVF9WSUVXX0VOVElUWV9JRCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiB2aWV3MS5hdHRyaWJ1dGVzLm9yZGVyIC0gdmlldzIuYXR0cmlidXRlcy5vcmRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdzO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgR3JvdXBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0R3JvdXBFbnRpdGllcyhcbiAgZW50aXRpZXM6IEhhc3NFbnRpdGllcyxcbiAgZ3JvdXA6IEdyb3VwRW50aXR5XG4pIHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgZ3JvdXAuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5KSB7XG4gICAgICByZXN1bHRbZW50aXR5LmVudGl0eV9pZF0gPSBlbnRpdHk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCBnZXRHcm91cEVudGl0aWVzIGZyb20gXCIuL2dldF9ncm91cF9lbnRpdGllc1wiO1xuaW1wb3J0IHsgR3JvdXBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLy8gUmV0dXJuIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBlbnRpdGllcyB0aGF0IHRoZSB2aWV3IHdpbGwgc2hvd1xuLy8gaW5jbHVkaW5nIGVtYmVkZGVkIGdyb3Vwcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdFbnRpdGllcyhcbiAgZW50aXRpZXM6IEhhc3NFbnRpdGllcyxcbiAgdmlldzogR3JvdXBFbnRpdHlcbik6IEhhc3NFbnRpdGllcyB7XG4gIGNvbnN0IHZpZXdFbnRpdGllcyA9IHt9O1xuXG4gIHZpZXcuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5ICYmICFlbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgIHZpZXdFbnRpdGllc1tlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcblxuICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkgPT09IFwiZ3JvdXBcIikge1xuICAgICAgICBjb25zdCBncm91cEVudGl0aWVzID0gZ2V0R3JvdXBFbnRpdGllcyhlbnRpdGllcywgZW50aXR5IGFzIEdyb3VwRW50aXR5KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhncm91cEVudGl0aWVzKS5mb3JFYWNoKChnckVudGl0eUlkKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JFbnRpdHkgPSBncm91cEVudGl0aWVzW2dyRW50aXR5SWRdO1xuXG4gICAgICAgICAgaWYgKCFnckVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbikge1xuICAgICAgICAgICAgdmlld0VudGl0aWVzW2dyRW50aXR5SWRdID0gZ3JFbnRpdHk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2aWV3RW50aXRpZXM7XG59XG4iLCJpbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgR3JvdXBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLy8gU3BsaXQgYSBjb2xsZWN0aW9uIGludG8gYSBsaXN0IG9mIGdyb3VwcyBhbmQgYSAncmVzdCcgbGlzdCBvZiB1bmdyb3VwZWRcbi8vIGVudGl0aWVzLlxuLy8gUmV0dXJucyB7IGdyb3VwczogW10sIHVuZ3JvdXBlZDoge30gfVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BsaXRCeUdyb3VwcyhlbnRpdGllczogSGFzc0VudGl0aWVzKSB7XG4gIGNvbnN0IGdyb3VwczogR3JvdXBFbnRpdHlbXSA9IFtdO1xuICBjb25zdCB1bmdyb3VwZWQ6IEhhc3NFbnRpdGllcyA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKGVudGl0aWVzKS5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eUlkKSA9PT0gXCJncm91cFwiKSB7XG4gICAgICBncm91cHMucHVzaChlbnRpdHkgYXMgR3JvdXBFbnRpdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bmdyb3VwZWRbZW50aXR5SWRdID0gZW50aXR5O1xuICAgIH1cbiAgfSk7XG5cbiAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PlxuICAgIGdyb3VwLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgICBkZWxldGUgdW5ncm91cGVkW2VudGl0eUlkXTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiB7IGdyb3VwcywgdW5ncm91cGVkIH07XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBkb21haW5JY29uIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgc3RhdGVJY29uIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L3N0YXRlX2ljb25cIjtcbmltcG9ydCB0aW1lclRpbWVSZW1haW5pbmcgZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvdGltZXJfdGltZV9yZW1haW5pbmdcIjtcbmltcG9ydCBzZWNvbmRzVG9EdXJhdGlvbiBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL3NlY29uZHNfdG9fZHVyYXRpb25cIjtcblxuaW1wb3J0IFwiLi4vaGEtbGFiZWwtYmFkZ2VcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1zdGF0ZS1sYWJlbC1iYWRnZVwiKVxuZXhwb3J0IGNsYXNzIEhhU3RhdGVMYWJlbEJhZGdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGU/OiBIYXNzRW50aXR5O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3RpbWVyVGltZVJlbWFpbmluZz86IG51bWJlcjtcblxuICBwcml2YXRlIF9jb25uZWN0ZWQ/OiBib29sZWFuO1xuXG4gIHByaXZhdGUgX3VwZGF0ZVJlbWFpbmluZz86IG51bWJlcjtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9jb25uZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRJbnRlcnZhbCh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGEtbGFiZWwtYmFkZ2VcbiAgICAgICAgICBjbGFzcz1cIndhcm5pbmdcIlxuICAgICAgICAgIGxhYmVsPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwic3RhdGVfYmFkZ2UuZGVmYXVsdC5lcnJvclwiKX1cIlxuICAgICAgICAgIGljb249XCJoYXNzOmFsZXJ0XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwic3RhdGVfYmFkZ2UuZGVmYXVsdC5lbnRpdHlfbm90X2ZvdW5kXCJcbiAgICAgICAgICApfVwiXG4gICAgICAgID48L2hhLWxhYmVsLWJhZGdlPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGUpO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtbGFiZWwtYmFkZ2VcbiAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICBbZG9tYWluXTogdHJ1ZSxcbiAgICAgICAgICBcImhhcy11bml0X29mX21lYXN1cmVtZW50XCI6IFwidW5pdF9vZl9tZWFzdXJlbWVudFwiIGluIHN0YXRlLmF0dHJpYnV0ZXMsXG4gICAgICAgIH0pfVwiXG4gICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fY29tcHV0ZVZhbHVlKGRvbWFpbiwgc3RhdGUpfVwiXG4gICAgICAgIC5pY29uPVwiJHt0aGlzLl9jb21wdXRlSWNvbihkb21haW4sIHN0YXRlKX1cIlxuICAgICAgICAuaW1hZ2U9XCIke3N0YXRlLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmV9XCJcbiAgICAgICAgLmxhYmVsPVwiJHt0aGlzLl9jb21wdXRlTGFiZWwoZG9tYWluLCBzdGF0ZSwgdGhpcy5fdGltZXJUaW1lUmVtYWluaW5nKX1cIlxuICAgICAgICAuZGVzY3JpcHRpb249XCIke2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGUpfVwiXG4gICAgICA+PC9oYS1sYWJlbC1iYWRnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy5zdGF0ZSkge1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiB0aGlzLnN0YXRlLmVudGl0eV9pZCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCAmJiBjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJzdGF0ZVwiKSkge1xuICAgICAgdGhpcy5zdGFydEludGVydmFsKHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVWYWx1ZShkb21haW46IHN0cmluZywgc3RhdGU6IEhhc3NFbnRpdHkpIHtcbiAgICBzd2l0Y2ggKGRvbWFpbikge1xuICAgICAgY2FzZSBcImJpbmFyeV9zZW5zb3JcIjpcbiAgICAgIGNhc2UgXCJkZXZpY2VfdHJhY2tlclwiOlxuICAgICAgY2FzZSBcInBlcnNvblwiOlxuICAgICAgY2FzZSBcInVwZGF0ZXJcIjpcbiAgICAgIGNhc2UgXCJzdW5cIjpcbiAgICAgIGNhc2UgXCJhbGFybV9jb250cm9sX3BhbmVsXCI6XG4gICAgICBjYXNlIFwidGltZXJcIjpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBjYXNlIFwic2Vuc29yXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGUuc3RhdGUgPT09IFwidW5rbm93blwiXG4gICAgICAgICAgPyBcIi1cIlxuICAgICAgICAgIDogdGhpcy5oYXNzIS5sb2NhbGl6ZShgY29tcG9uZW50LiR7ZG9tYWlufS5zdGF0ZS4ke3N0YXRlLnN0YXRlfWApIHx8XG4gICAgICAgICAgICAgIHN0YXRlLnN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVJY29uKGRvbWFpbjogc3RyaW5nLCBzdGF0ZTogSGFzc0VudGl0eSkge1xuICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJ1bmF2YWlsYWJsZVwiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3dpdGNoIChkb21haW4pIHtcbiAgICAgIGNhc2UgXCJhbGFybV9jb250cm9sX3BhbmVsXCI6XG4gICAgICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJwZW5kaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmNsb2NrLWZhc3RcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhdGUgPT09IFwiYXJtZWRfYXdheVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpuYXR1cmVcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhdGUgPT09IFwiYXJtZWRfaG9tZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpob21lLXZhcmlhbnRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhdGUgPT09IFwiYXJtZWRfbmlnaHRcIikge1xuICAgICAgICAgIHJldHVybiBcImhhc3M6d2VhdGhlci1uaWdodFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJhcm1lZF9jdXN0b21fYnlwYXNzXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOnNoaWVsZC1ob21lXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLnN0YXRlID09PSBcInRyaWdnZXJlZFwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczphbGVydC1jaXJjbGVcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdGF0ZSA9PSAnZGlzYXJtZWQnXG4gICAgICAgIHJldHVybiBkb21haW5JY29uKGRvbWFpbiwgc3RhdGUuc3RhdGUpO1xuICAgICAgY2FzZSBcImJpbmFyeV9zZW5zb3JcIjpcbiAgICAgIGNhc2UgXCJkZXZpY2VfdHJhY2tlclwiOlxuICAgICAgY2FzZSBcInVwZGF0ZXJcIjpcbiAgICAgIGNhc2UgXCJwZXJzb25cIjpcbiAgICAgICAgcmV0dXJuIHN0YXRlSWNvbihzdGF0ZSk7XG4gICAgICBjYXNlIFwic3VuXCI6XG4gICAgICAgIHJldHVybiBzdGF0ZS5zdGF0ZSA9PT0gXCJhYm92ZV9ob3Jpem9uXCJcbiAgICAgICAgICA/IGRvbWFpbkljb24oZG9tYWluKVxuICAgICAgICAgIDogXCJoYXNzOmJyaWdodG5lc3MtM1wiO1xuICAgICAgY2FzZSBcInRpbWVyXCI6XG4gICAgICAgIHJldHVybiBzdGF0ZS5zdGF0ZSA9PT0gXCJhY3RpdmVcIiA/IFwiaGFzczp0aW1lclwiIDogXCJoYXNzOnRpbWVyLW9mZlwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZUxhYmVsKGRvbWFpbiwgc3RhdGUsIF90aW1lclRpbWVSZW1haW5pbmcpIHtcbiAgICBpZiAoXG4gICAgICBzdGF0ZS5zdGF0ZSA9PT0gXCJ1bmF2YWlsYWJsZVwiIHx8XG4gICAgICBbXCJkZXZpY2VfdHJhY2tlclwiLCBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIiwgXCJwZXJzb25cIl0uaW5jbHVkZXMoZG9tYWluKVxuICAgICkge1xuICAgICAgLy8gTG9jYWxpemUgdGhlIHN0YXRlIHdpdGggYSBzcGVjaWFsIHN0YXRlX2JhZGdlIG5hbWVzcGFjZSwgd2hpY2ggaGFzIHZhcmlhdGlvbnMgb2ZcbiAgICAgIC8vIHRoZSBzdGF0ZSB0cmFuc2xhdGlvbnMgdGhhdCBhcmUgdHJ1bmNhdGVkIHRvIGZpdCB3aXRoaW4gdGhlIGJhZGdlIGxhYmVsLiBUcmFuc2xhdGlvbnNcbiAgICAgIC8vIGFyZSBvbmx5IGFkZGVkIGZvciBkZXZpY2VfdHJhY2tlciwgYWxhcm1fY29udHJvbF9wYW5lbCBhbmQgcGVyc29uLlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShgc3RhdGVfYmFkZ2UuJHtkb21haW59LiR7c3RhdGUuc3RhdGV9YCkgfHxcbiAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShgc3RhdGVfYmFkZ2UuZGVmYXVsdC4ke3N0YXRlLnN0YXRlfWApIHx8XG4gICAgICAgIHN0YXRlLnN0YXRlXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZG9tYWluID09PSBcInRpbWVyXCIpIHtcbiAgICAgIHJldHVybiBzZWNvbmRzVG9EdXJhdGlvbihfdGltZXJUaW1lUmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudCB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckludGVydmFsKCkge1xuICAgIGlmICh0aGlzLl91cGRhdGVSZW1haW5pbmcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdXBkYXRlUmVtYWluaW5nKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVJlbWFpbmluZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopIHtcbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcbiAgICBpZiAoc3RhdGVPYmogJiYgY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSA9PT0gXCJ0aW1lclwiKSB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVRpbWVyUmVtYWluaW5nKHN0YXRlT2JqKTtcblxuICAgICAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlbWFpbmluZyA9IHdpbmRvdy5zZXRJbnRlcnZhbChcbiAgICAgICAgICAoKSA9PiB0aGlzLmNhbGN1bGF0ZVRpbWVyUmVtYWluaW5nKHRoaXMuc3RhdGUpLFxuICAgICAgICAgIDEwMDBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVRpbWVyUmVtYWluaW5nKHN0YXRlT2JqKSB7XG4gICAgdGhpcy5fdGltZXJUaW1lUmVtYWluaW5nID0gdGltZXJUaW1lUmVtYWluaW5nKHN0YXRlT2JqKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBoYS1sYWJlbC1iYWRnZSB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLXJlZCwgI2RmNGMxZSk7XG4gICAgICB9XG4gICAgICBoYS1sYWJlbC1iYWRnZS5oYXMtdW5pdF9vZl9tZWFzdXJlbWVudCB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtbGFiZWwtdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGhhLWxhYmVsLWJhZGdlLmJpbmFyeV9zZW5zb3IsXG4gICAgICBoYS1sYWJlbC1iYWRnZS51cGRhdGVyIHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtYmx1ZSwgIzAzOWJlNSk7XG4gICAgICB9XG5cbiAgICAgIC5yZWQge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS1yZWQsICNkZjRjMWUpO1xuICAgICAgfVxuXG4gICAgICAuYmx1ZSB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLWJsdWUsICMwMzliZTUpO1xuICAgICAgfVxuXG4gICAgICAuZ3JlZW4ge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS1ncmVlbiwgIzBkYTAzNSk7XG4gICAgICB9XG5cbiAgICAgIC55ZWxsb3cge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS15ZWxsb3csICNmNGI0MDApO1xuICAgICAgfVxuXG4gICAgICAuZ3JleSB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLWdyZXksIHZhcigtLXBhcGVyLWdyZXktNTAwKSk7XG4gICAgICB9XG5cbiAgICAgIC53YXJuaW5nIHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UteWVsbG93LCAjZmNlNTg4KTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1zdGF0ZS1sYWJlbC1iYWRnZVwiOiBIYVN0YXRlTGFiZWxCYWRnZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCBcIi4vaGEtaWNvblwiO1xuXG5jbGFzcyBIYUxhYmVsQmFkZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIHZhbHVlPzogc3RyaW5nO1xuICBwdWJsaWMgaWNvbj86IHN0cmluZztcbiAgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuICBwdWJsaWMgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBpbWFnZT86IHN0cmluZztcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToge30sXG4gICAgICBpY29uOiB7fSxcbiAgICAgIGxhYmVsOiB7fSxcbiAgICAgIGRlc2NyaXB0aW9uOiB7fSxcbiAgICAgIGltYWdlOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImJhZGdlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtYmFkZ2VcIiBpZD1cImJhZGdlXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgIGJpZzogQm9vbGVhbih0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoID4gNCksXG4gICAgICAgICAgICB9KX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5pY29uICYmICF0aGlzLnZhbHVlICYmICF0aGlzLmltYWdlXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoYS1pY29uIC5pY29uPVwiJHt0aGlzLmljb259XCI+PC9oYS1pY29uPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgJHt0aGlzLnZhbHVlICYmICF0aGlzLmltYWdlXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxzcGFuPiR7dGhpcy52YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgJHt0aGlzLmxhYmVsXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJpZzogdGhpcy5sYWJlbC5sZW5ndGggPiA1LFxuICAgICAgICAgICAgICAgICAgfSl9XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj4ke3RoaXMubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke3RoaXMuZGVzY3JpcHRpb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7dGhpcy5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBjc3NgXG4gICAgICAgIC5iYWRnZS1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuICAgICAgICAubGFiZWwtYmFkZ2Uge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB3aWR0aDogdmFyKC0taGEtbGFiZWwtYmFkZ2Utc2l6ZSwgMi41ZW0pO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLWhhLWxhYmVsLWJhZGdlLXNpemUsIDIuNWVtKTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taGEtbGFiZWwtYmFkZ2Utc2l6ZSwgMi41ZW0pO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGEtbGFiZWwtYmFkZ2UtZm9udC1zaXplLCAxLjVlbSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMC4xZW0gc29saWQgdmFyKC0taGEtbGFiZWwtYmFkZ2UtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtdGV4dC1jb2xvciwgcmdiKDc2LCA3NiwgNzYpKTtcblxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsLWJhZGdlIC52YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgICAgICAubGFiZWwtYmFkZ2UgLnZhbHVlLmJpZyB7XG4gICAgICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsLWJhZGdlIC5sYWJlbCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLTFlbTtcbiAgICAgICAgICAvKiBNYWtlIHRoZSBsYWJlbCBhcyB3aWRlIGFzIGNvbnRhaW5lcitib3JkZXIuIChwYXJlbnRfYm9yZGVyd2lkdGggLyBmb250LXNpemUpICovXG4gICAgICAgICAgbGVmdDogLTAuMmVtO1xuICAgICAgICAgIHJpZ2h0OiAtMC4yZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICBmb250LXNpemU6IDAuNWVtO1xuICAgICAgICB9XG4gICAgICAgIC5sYWJlbC1iYWRnZSAubGFiZWwgc3BhbiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhLWxhYmVsLWJhZGdlLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWhhLWxhYmVsLWJhZGdlLWxhYmVsLWNvbG9yLCB3aGl0ZSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDklIDE2JSA4JSAxNiU7IC8qIG1vc3RseSBhcGl0YWxpemVkIHRleHQsIG5vdCBtdWNoIGRlc2NlbmRlcnMgPT4gYml0IG1vcmUgdG9wIG1hcmdpbiAqL1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdmFyKC0taGEtbGFiZWwtYmFkZ2UtbGFiZWwtdGV4dC10cmFuc2Zvcm0sIHVwcGVyY2FzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsLWJhZGdlIC5sYWJlbC5iaWcgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgcGFkZGluZzogMTAlIDEyJSA3JSAxMiU7IC8qIHB1c2ggc21hbGxlciB0ZXh0IGEgYml0IGRvd24gdG8gY2VudGVyIHZlcnRpY2FsbHkgKi9cbiAgICAgICAgfVxuICAgICAgICAuYmFkZ2UtY29udGFpbmVyIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGEtbGFiZWwtYmFkZ2UtdGl0bGUtZm9udC1zaXplLCAwLjllbSk7XG4gICAgICAgICAgd2lkdGg6IHZhcigtLWhhLWxhYmVsLWJhZGdlLXRpdGxlLXdpZHRoLCA1ZW0pO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1oYS1sYWJlbC1iYWRnZS10aXRsZS1mb250LXdlaWdodCwgNDAwKTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJpbWFnZVwiKSkge1xuICAgICAgdGhpcy5zaGFkb3dSb290IS5nZXRFbGVtZW50QnlJZChcImJhZGdlXCIpIS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB0aGlzXG4gICAgICAgIC5pbWFnZVxuICAgICAgICA/IGB1cmwoJHt0aGlzLmltYWdlfSlgXG4gICAgICAgIDogXCJcIjtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWxhYmVsLWJhZGdlXCI6IEhhTGFiZWxCYWRnZTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1sYWJlbC1iYWRnZVwiLCBIYUxhYmVsQmFkZ2UpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuaW1wb3J0IGlzQ29tcG9uZW50TG9hZGVkIGZyb20gXCIuLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFTdGFydFZvaWNlQnV0dG9uIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiU3RhcnQgY29udmVyc2F0aW9uXCJcbiAgICAgICAgaWNvbj1cImhhc3M6bWljcm9waG9uZVwiXG4gICAgICAgIGhpZGRlbiQ9XCJbWyFjYW5MaXN0ZW5dXVwiXG4gICAgICAgIG9uLWNsaWNrPVwiaGFuZGxlTGlzdGVuQ2xpY2tcIlxuICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgY2FuTGlzdGVuOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVDYW5MaXN0ZW4oaGFzcylcIixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNhbkxpc3RlbihoYXNzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFwid2Via2l0U3BlZWNoUmVjb2duaXRpb25cIiBpbiB3aW5kb3cgJiZcbiAgICAgIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwiY29udmVyc2F0aW9uXCIpXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZUxpc3RlbkNsaWNrKCkge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidm9pY2UtY29tbWFuZC1kaWFsb2dcIiAqLyBcIi4uL2RpYWxvZ3MvaGEtdm9pY2UtY29tbWFuZC1kaWFsb2dcIiksXG4gICAgICBkaWFsb2dUYWc6IFwiaGEtdm9pY2UtY29tbWFuZC1kaWFsb2dcIixcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zdGFydC12b2ljZS1idXR0b25cIiwgSGFTdGFydFZvaWNlQnV0dG9uKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW1wb3J0IHsgdGltZUNhY2hlUHJvbWlzZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvdGltZS1jYWNoZS1mdW5jdGlvbi1wcm9taXNlXCI7XG5cbmV4cG9ydCBjb25zdCBTVVBQT1JUX1BBVVNFID0gMTtcbmV4cG9ydCBjb25zdCBTVVBQT1JUX05FWFRfVFJBQ0sgPSAzMjtcbmV4cG9ydCBjb25zdCBTVVBQT1JUU19QTEFZID0gMTYzODQ7XG5leHBvcnQgY29uc3QgT0ZGX1NUQVRFUyA9IFtcIm9mZlwiLCBcImlkbGVcIl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFQbGF5ZXJUaHVtYm5haWwge1xuICBjb250ZW50X3R5cGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hNZWRpYVBsYXllclRodW1ibmFpbFdpdGhDYWNoZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKSA9PlxuICB0aW1lQ2FjaGVQcm9taXNlRnVuYyhcbiAgICBcIl9tZWRpYV9wbGF5ZXJUbWJcIixcbiAgICA5MDAwLFxuICAgIGZldGNoTWVkaWFQbGF5ZXJUaHVtYm5haWwsXG4gICAgaGFzcyxcbiAgICBlbnRpdHlJZFxuICApO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hNZWRpYVBsYXllclRodW1ibmFpbCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKSA9PiB7XG4gIHJldHVybiBoYXNzLmNhbGxXUzxNZWRpYVBsYXllclRodW1ibmFpbD4oe1xuICAgIHR5cGU6IFwibWVkaWFfcGxheWVyX3RodW1ibmFpbFwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuVGhpcyBjb2RlIGlzIGNvcGllZCBmcm9tIGFwcC1oZWFkZXItbGF5b3V0LlxuJ2Z1bGxibGVlZCcgc3VwcG9ydCBpcyByZW1vdmVkIGFzIEhvbWUgQXNzaXNzdGFudCBkb2Vzbid0IHVzZSBpdC5cbnRyYW5zZm9ybTogdHJhbnNsYXRlKDApIGlzIGFkZGVkLlxuKi9cbi8qXG4gIEZJWE1FKHBvbHltZXItbW9kdWxpemVyKTogdGhlIGFib3ZlIGNvbW1lbnRzIHdlcmUgZXh0cmFjdGVkXG4gIGZyb20gSFRNTCBhbmQgbWF5IGJlIG91dCBvZiBwbGFjZSBoZXJlLiBSZXZpZXcgdGhlbSBhbmRcbiAgdGhlbiBkZWxldGUgdGhpcyBjb21tZW50IVxuKi9cbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQXBwTGF5b3V0IGV4dGVuZHMgY3VzdG9tRWxlbWVudHMuZ2V0KFwiYXBwLWhlYWRlci1sYXlvdXRcIikge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlIGFwcC1oZWFkZXItbGF5b3V0IHRvIGhhdmUgaXRzIG93biBzdGFja2luZyBjb250ZXh0IHNvIHRoYXQgaXRzIHBhcmVudCBjYW5cbiAgICAgICAgICogY29udHJvbCB0aGUgc3RhY2tpbmcgb2YgaXQgcmVsYXRpdmUgdG8gb3RoZXIgZWxlbWVudHMgKGUuZy4gYXBwLWRyYXdlci1sYXlvdXQpLlxuICAgICAgICAgKiBUaGlzIGNvdWxkIGJlIGRvbmUgdXNpbmcgXFxgaXNvbGF0aW9uOiBpc29sYXRlXFxgLCBidXQgdGhhdCdzIG5vdCB3ZWxsIHN1cHBvcnRlZFxuICAgICAgICAgKiBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgICAgICAqL1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PVwiaGVhZGVyXCJdKSB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpeGVkLXRvcDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgI3dyYXBwZXIuaW5pdGlhbGl6aW5nIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9XCJoZWFkZXJcIl0pIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKVxuICAgICAgICAgICN3cmFwcGVyLmluaXRpYWxpemluZ1xuICAgICAgICAgIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIuaW5pdGlhbGl6aW5nICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgLyogQ3JlYXRlIGEgc3RhY2tpbmcgY29udGV4dCBoZXJlIHNvIHRoYXQgYWxsIGNoaWxkcmVuIGFwcGVhciBiZWxvdyB0aGUgaGVhZGVyLiAqL1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgIC8qIFVzaW5nICd0cmFuc2Zvcm0nIHdpbGwgY2F1c2UgJ3Bvc2l0aW9uOiBmaXhlZCcgZWxlbWVudHMgdG8gYmVoYXZlIGxpa2VcbiAgICAgICAgICAgJ3Bvc2l0aW9uOiBhYnNvbHV0ZScgcmVsYXRpdmUgdG8gdGhpcyBlbGVtZW50LiAqL1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cImluaXRpYWxpemluZ1wiPlxuICAgICAgICA8c2xvdCBpZD1cImhlYWRlclNsb3RcIiBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8c2xvdCBpZD1cImZhYlwiIG5hbWU9XCJmYWJcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1hcHAtbGF5b3V0XCIsIEhhQXBwTGF5b3V0KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFrTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBakJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpZQTtBQUNBO0FBaVlBOzs7Ozs7Ozs7Ozs7QUNwWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQStOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3V0E7QUFDQTtBQTZXQTs7Ozs7Ozs7Ozs7O0FDNVhBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBWUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWZBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFyQkE7QUFBQTtBQUFBO0FBQUE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUxBO0FBVUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVZBO0FBYUE7QUF0REE7QUFBQTtBQUFBO0FBQUE7QUF5REE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBaEVBO0FBQUE7QUFBQTtBQUFBO0FBbUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhFQTtBQUFBO0FBQUE7QUFBQTtBQTJFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVhBO0FBZ0JBO0FBM0ZBO0FBQUE7QUFBQTtBQUFBO0FBOEZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFsQ0E7QUFvQ0E7QUFySUE7QUFBQTtBQUFBO0FBQUE7QUF3SUE7QUFJQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBekpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUE0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhLQTtBQUFBO0FBQUE7QUFBQTtBQW1LQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQTlLQTtBQUFBO0FBQUE7QUFBQTtBQWlMQTtBQUNBO0FBbExBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXlDQTtBQTlOQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUVBO0FBRkE7QUFLQTtBQUVBO0FBRkE7O0FBTUE7O0FBR0E7QUFDQTtBQUNBO0FBRkE7O0FBS0E7O0FBUkE7O0FBYUE7QUFFQTtBQUZBOztBQWpDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFoSkE7QUFDQTtBQXVKQTs7Ozs7Ozs7Ozs7O0FDcEtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseU9BQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQXpDQTtBQUNBO0FBMENBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQVlBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7O0FBS0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBc0VBO0FBQ0E7QUF6RUE7QUFDQTtBQXlFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
