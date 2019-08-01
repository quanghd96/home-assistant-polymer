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
            '\n      <style\n        include="paper-material-styles iron-flex iron-flex-alignment iron-positioning"\n      >\n        :host {\n          @apply --paper-material-elevation-1;\n          display: block;\n          position: relative;\n          font-size: 0px;\n          border-radius: 2px;\n        }\n\n        .banner {\n          position: relative;\n          background-color: white;\n          border-top-left-radius: 2px;\n          border-top-right-radius: 2px;\n        }\n\n        .banner:before {\n          display: block;\n          content: "";\n          width: 100%;\n          /* removed .25% from 16:9 ratio to fix YT black bars */\n          padding-top: 56%;\n          transition: padding-top 0.8s;\n        }\n\n        .banner.no-cover {\n          background-position: center center;\n          background-image: url(/static/images/card_media_player_bg.png);\n          background-repeat: no-repeat;\n          background-color: var(--primary-color);\n        }\n\n        .banner.content-type-music:before {\n          padding-top: 100%;\n        }\n\n        .banner.content-type-game:before {\n          padding-top: 100%;\n        }\n\n        .banner.no-cover:before {\n          padding-top: 88px;\n        }\n\n        .banner > .cover {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n\n          border-top-left-radius: 2px;\n          border-top-right-radius: 2px;\n\n          background-position: center center;\n          background-size: cover;\n          transition: opacity 0.8s;\n          opacity: 1;\n        }\n\n        .banner.is-off > .cover {\n          opacity: 0;\n        }\n\n        .banner > .caption {\n          @apply --paper-font-caption;\n\n          position: absolute;\n          left: 0;\n          right: 0;\n          bottom: 0;\n\n          background-color: rgba(0, 0, 0, var(--dark-secondary-opacity));\n\n          padding: 8px 16px;\n\n          font-size: 14px;\n          font-weight: 500;\n          color: white;\n\n          transition: background-color 0.5s;\n        }\n\n        .banner.is-off > .caption {\n          background-color: initial;\n        }\n\n        .banner > .caption .title {\n          @apply --paper-font-common-nowrap;\n          font-size: 1.2em;\n          margin: 8px 0 4px;\n        }\n\n        .progress {\n          width: 100%;\n          height: var(--paper-progress-height, 4px);\n          margin-top: calc(-1 * var(--paper-progress-height, 4px));\n          --paper-progress-active-color: var(--accent-color);\n          --paper-progress-container-color: rgba(200, 200, 200, 0.5);\n        }\n\n        .controls {\n          position: relative;\n          @apply --paper-font-body1;\n          padding: 8px;\n          border-bottom-left-radius: 2px;\n          border-bottom-right-radius: 2px;\n          background-color: var(--paper-card-background-color, white);\n        }\n\n        .controls paper-icon-button {\n          width: 44px;\n          height: 44px;\n        }\n\n        .playback-controls {\n          direction: ltr;\n        }\n\n        paper-icon-button {\n          opacity: var(--dark-primary-opacity);\n        }\n\n        paper-icon-button[disabled] {\n          opacity: var(--dark-disabled-opacity);\n        }\n\n        paper-icon-button.primary {\n          width: 56px !important;\n          height: 56px !important;\n          background-color: var(--primary-color);\n          color: white;\n          border-radius: 50%;\n          padding: 8px;\n          transition: background-color 0.5s;\n        }\n\n        paper-icon-button.primary[disabled] {\n          background-color: rgba(0, 0, 0, var(--dark-disabled-opacity));\n        }\n\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n\n      <div\n        class$="[[computeBannerClasses(playerObj, _coverShowing, _coverLoadError)]]"\n      >\n        <div class="cover" id="cover"></div>\n\n        <div class="caption">\n          [[_computeStateName(stateObj)]]\n          <div class="title">[[computePrimaryText(localize, playerObj)]]</div>\n          [[playerObj.secondaryTitle]]<br />\n        </div>\n      </div>\n\n      <paper-progress\n        max="[[stateObj.attributes.media_duration]]"\n        value="[[playbackPosition]]"\n        hidden$="[[computeHideProgress(playerObj)]]"\n        class="progress"\n      ></paper-progress>\n\n      <div class="controls layout horizontal justified">\n        <paper-icon-button\n          aria-label="Turn off"\n          icon="hass:power"\n          on-click="handleTogglePower"\n          invisible$="[[computeHidePowerButton(playerObj)]]"\n          class="self-center secondary"\n        ></paper-icon-button>\n\n        <div class="playback-controls">\n          <paper-icon-button\n            aria-label="Previous track"\n            icon="hass:skip-previous"\n            invisible$="[[!playerObj.supportsPreviousTrack]]"\n            disabled="[[playerObj.isOff]]"\n            on-click="handlePrevious"\n          ></paper-icon-button>\n          <paper-icon-button\n            aria-label="Play or Pause"\n            class="primary"\n            icon="[[computePlaybackControlIcon(playerObj)]]"\n            invisible$="[[!computePlaybackControlIcon(playerObj)]]"\n            disabled="[[playerObj.isOff]]"\n            on-click="handlePlaybackControl"\n          ></paper-icon-button>\n          <paper-icon-button\n            aria-label="Next track"\n            icon="hass:skip-next"\n            invisible$="[[!playerObj.supportsNextTrack]]"\n            disabled="[[playerObj.isOff]]"\n            on-click="handleNext"\n          ></paper-icon-button>\n        </div>\n\n        <paper-icon-button\n          aria-label="More information."\n          icon="hass:dots-vertical"\n          on-click="handleOpenMoreInfo"\n          class="self-center secondary"\n        ></paper-icon-button>\n      </div>\n    ',
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

        var HaMediaPlayerCard =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaMediaPlayerCard, _LocalizeMixin);

            function HaMediaPlayerCard() {
              _classCallCheck(this, HaMediaPlayerCard);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaMediaPlayerCard).apply(this, arguments)
              );
            }

            _createClass(
              HaMediaPlayerCard,
              [
                {
                  key: "playerObjChanged",
                  value: (function() {
                    var _playerObjChanged = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(
                        playerObj,
                        oldPlayerObj
                      ) {
                        var _this = this;

                        var picture, oldPicture, _ref, contentType, content;

                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (
                                    playerObj.isPlaying &&
                                    playerObj.showProgress
                                  ) {
                                    if (!this._positionTracking) {
                                      this._positionTracking = setInterval(
                                        function() {
                                          return _this.updatePlaybackPosition();
                                        },
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

                                  picture =
                                    playerObj.stateObj.attributes
                                      .entity_picture;
                                  oldPicture =
                                    oldPlayerObj &&
                                    oldPlayerObj.stateObj.attributes
                                      .entity_picture;

                                  if (!(picture !== oldPicture && !picture)) {
                                    _context.next = 7;
                                    break;
                                  }

                                  this.$.cover.style.backgroundImage = "";
                                  return _context.abrupt("return");

                                case 7:
                                  if (!(picture === oldPicture)) {
                                    _context.next = 9;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 9:
                                  if (!(picture.substr(0, 1) !== "/")) {
                                    _context.next = 14;
                                    break;
                                  }

                                  this._coverShowing = true;
                                  this._coverLoadError = false;
                                  this.$.cover.style.backgroundImage = "url(".concat(
                                    picture,
                                    ")"
                                  );
                                  return _context.abrupt("return");

                                case 14:
                                  _context.prev = 14;
                                  _context.next = 17;
                                  return Object(
                                    _data_media_player__WEBPACK_IMPORTED_MODULE_7__[
                                      "fetchMediaPlayerThumbnailWithCache"
                                    ]
                                  )(this.hass, playerObj.stateObj.entity_id);

                                case 17:
                                  _ref = _context.sent;
                                  contentType = _ref.content_type;
                                  content = _ref.content;
                                  this._coverShowing = true;
                                  this._coverLoadError = false;
                                  this.$.cover.style.backgroundImage = "url(data:"
                                    .concat(contentType, ";base64,")
                                    .concat(content, ")");
                                  _context.next = 30;
                                  break;

                                case 25:
                                  _context.prev = 25;
                                  _context.t0 = _context["catch"](14);
                                  this._coverShowing = false;
                                  this._coverLoadError = true;
                                  this.$.cover.style.backgroundImage = "";

                                case 30:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[14, 25]]
                        );
                      })
                    );

                    function playerObjChanged(_x, _x2) {
                      return _playerObjChanged.apply(this, arguments);
                    }

                    return playerObjChanged;
                  })(),
                },
                {
                  key: "updatePlaybackPosition",
                  value: function updatePlaybackPosition() {
                    this.playbackPosition = this.playerObj.currentProgress;
                  },
                },
                {
                  key: "computeBannerClasses",
                  value: function computeBannerClasses(
                    playerObj,
                    coverShowing,
                    coverLoadError
                  ) {
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
                      playerObj.stateObj.attributes.media_content_type ===
                      "music"
                    ) {
                      cls += " content-type-music";
                    } else if (
                      playerObj.stateObj.attributes.media_content_type ===
                      "game"
                    ) {
                      cls += " content-type-game";
                    }

                    return cls;
                  },
                },
                {
                  key: "computeHideProgress",
                  value: function computeHideProgress(playerObj) {
                    return !playerObj.showProgress;
                  },
                },
                {
                  key: "computeHidePowerButton",
                  value: function computeHidePowerButton(playerObj) {
                    return playerObj.isOff
                      ? !playerObj.supportsTurnOn
                      : !playerObj.supportsTurnOff;
                  },
                },
                {
                  key: "computePlayerObj",
                  value: function computePlayerObj(hass, stateObj) {
                    return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_6__[
                      "default"
                    ](hass, stateObj);
                  },
                },
                {
                  key: "computePrimaryText",
                  value: function computePrimaryText(localize, playerObj) {
                    return (
                      playerObj.primaryTitle ||
                      localize(
                        "state.media_player.".concat(playerObj.stateObj.state)
                      ) ||
                      localize(
                        "state.default.".concat(playerObj.stateObj.state)
                      ) ||
                      playerObj.stateObj.state
                    );
                  },
                },
                {
                  key: "computePlaybackControlIcon",
                  value: function computePlaybackControlIcon(playerObj) {
                    if (playerObj.isPlaying) {
                      return playerObj.supportsPause
                        ? "hass:pause"
                        : "hass:stop";
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
                  },
                },
                {
                  key: "_computeStateName",
                  value: function _computeStateName(stateObj) {
                    return Object(
                      _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__[
                        "default"
                      ]
                    )(stateObj);
                  },
                },
                {
                  key: "handleNext",
                  value: function handleNext(ev) {
                    ev.stopPropagation();
                    this.playerObj.nextTrack();
                  },
                },
                {
                  key: "handleOpenMoreInfo",
                  value: function handleOpenMoreInfo(ev) {
                    ev.stopPropagation();
                    this.fire("hass-more-info", {
                      entityId: this.stateObj.entity_id,
                    });
                  },
                },
                {
                  key: "handlePlaybackControl",
                  value: function handlePlaybackControl(ev) {
                    ev.stopPropagation();
                    this.playerObj.mediaPlayPause();
                  },
                },
                {
                  key: "handlePrevious",
                  value: function handlePrevious(ev) {
                    ev.stopPropagation();
                    this.playerObj.previousTrack();
                  },
                },
                {
                  key: "handleTogglePower",
                  value: function handleTogglePower(ev) {
                    ev.stopPropagation();
                    this.playerObj.togglePower();
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
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
                  },
                },
              ]
            );

            return HaMediaPlayerCard;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
                  "PolymerElement"
                ]
              )
            )
          );

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
            '\n      <style>\n        :host {\n          cursor: pointer;\n        }\n\n        .content {\n          padding: 0 20px 20px;\n        }\n\n        ha-icon {\n          color: var(--paper-item-icon-color);\n        }\n\n        .header {\n          font-family: var(--paper-font-headline_-_font-family);\n          -webkit-font-smoothing: var(\n            --paper-font-headline_-_-webkit-font-smoothing\n          );\n          font-size: var(--paper-font-headline_-_font-size);\n          font-weight: var(--paper-font-headline_-_font-weight);\n          letter-spacing: var(--paper-font-headline_-_letter-spacing);\n          line-height: var(--paper-font-headline_-_line-height);\n          text-rendering: var(\n            --paper-font-common-expensive-kerning_-_text-rendering\n          );\n          opacity: var(--dark-primary-opacity);\n          padding: 24px 16px 16px;\n          display: flex;\n          align-items: baseline;\n        }\n\n        .name {\n          margin-left: 16px;\n          font-size: 16px;\n          color: var(--secondary-text-color);\n        }\n\n        :host([rtl]) .name {\n          margin-left: 0px;\n          margin-right: 16px;\n        }\n\n        .now {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          flex-wrap: wrap;\n        }\n\n        .main {\n          display: flex;\n          align-items: center;\n          margin-right: 32px;\n        }\n\n        :host([rtl]) .main {\n          margin-right: 0px;\n        }\n\n        .main ha-icon {\n          --iron-icon-height: 72px;\n          --iron-icon-width: 72px;\n          margin-right: 8px;\n        }\n\n        :host([rtl]) .main ha-icon {\n          margin-right: 0px;\n        }\n\n        .main .temp {\n          font-size: 52px;\n          line-height: 1em;\n          position: relative;\n        }\n\n        :host([rtl]) .main .temp {\n          direction: ltr;\n          margin-right: 28px;\n        }\n\n        .main .temp span {\n          font-size: 24px;\n          line-height: 1em;\n          position: absolute;\n          top: 4px;\n        }\n\n        .measurand {\n          display: inline-block;\n        }\n\n        :host([rtl]) .measurand {\n          direction: ltr;\n        }\n\n        .forecast {\n          margin-top: 16px;\n          display: flex;\n          justify-content: space-between;\n        }\n\n        .forecast div {\n          flex: 0 0 auto;\n          text-align: center;\n        }\n\n        .forecast .icon {\n          margin: 4px 0;\n          text-align: center;\n        }\n\n        :host([rtl]) .forecast .temp {\n          direction: ltr;\n        }\n\n        .weekday {\n          font-weight: bold;\n        }\n\n        .attributes,\n        .templow,\n        .precipitation {\n          color: var(--secondary-text-color);\n        }\n\n        :host([rtl]) .precipitation {\n          direction: ltr;\n        }\n      </style>\n      <ha-card>\n        <div class="header">\n          [[computeState(stateObj.state, localize)]]\n          <div class="name">[[computeName(stateObj)]]</div>\n        </div>\n        <div class="content">\n          <div class="now">\n            <div class="main">\n              <template is="dom-if" if="[[showWeatherIcon(stateObj.state)]]">\n                <ha-icon icon="[[getWeatherIcon(stateObj.state)]]"></ha-icon>\n              </template>\n              <div class="temp">\n                [[stateObj.attributes.temperature]]<span\n                  >[[getUnit(\'temperature\')]]</span\n                >\n              </div>\n            </div>\n            <div class="attributes">\n              <template\n                is="dom-if"\n                if="[[_showValue(stateObj.attributes.pressure)]]"\n              >\n                <div>\n                  [[localize(\'ui.card.weather.attributes.air_pressure\')]]:\n                  <span class="measurand">\n                    [[stateObj.attributes.pressure]] [[getUnit(\'air_pressure\')]]\n                  </span>\n                </div>\n              </template>\n              <template\n                is="dom-if"\n                if="[[_showValue(stateObj.attributes.humidity)]]"\n              >\n                <div>\n                  [[localize(\'ui.card.weather.attributes.humidity\')]]:\n                  <span class="measurand"\n                    >[[stateObj.attributes.humidity]] %</span\n                  >\n                </div>\n              </template>\n              <template\n                is="dom-if"\n                if="[[_showValue(stateObj.attributes.wind_speed)]]"\n              >\n                <div>\n                  [[localize(\'ui.card.weather.attributes.wind_speed\')]]:\n                  <span class="measurand">\n                    [[getWindSpeed(stateObj.attributes.wind_speed)]]\n                  </span>\n                  [[getWindBearing(stateObj.attributes.wind_bearing, localize)]]\n                </div>\n              </template>\n            </div>\n          </div>\n          <template is="dom-if" if="[[forecast]]">\n            <div class="forecast">\n              <template is="dom-repeat" items="[[forecast]]">\n                <div>\n                  <div class="weekday">\n                    [[computeDate(item.datetime)]]<br />\n                    <template is="dom-if" if="[[!_showValue(item.templow)]]">\n                      [[computeTime(item.datetime)]]\n                    </template>\n                  </div>\n                  <template is="dom-if" if="[[_showValue(item.condition)]]">\n                    <div class="icon">\n                      <ha-icon\n                        icon="[[getWeatherIcon(item.condition)]]"\n                      ></ha-icon>\n                    </div>\n                  </template>\n                  <template is="dom-if" if="[[_showValue(item.temperature)]]">\n                    <div class="temp">\n                      [[item.temperature]] [[getUnit(\'temperature\')]]\n                    </div>\n                  </template>\n                  <template is="dom-if" if="[[_showValue(item.templow)]]">\n                    <div class="templow">\n                      [[item.templow]] [[getUnit(\'temperature\')]]\n                    </div>\n                  </template>\n                  <template is="dom-if" if="[[_showValue(item.precipitation)]]">\n                    <div class="precipitation">\n                      [[item.precipitation]] [[getUnit(\'precipitation\')]]\n                    </div>\n                  </template>\n                </div>\n              </template>\n            </div>\n          </template>\n        </div>\n      </ha-card>\n    ',
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
         */

        var HaWeatherCard =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaWeatherCard, _LocalizeMixin);

            _createClass(HaWeatherCard, null, [
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
                },
              },
            ]);

            function HaWeatherCard() {
              var _this;

              _classCallCheck(this, HaWeatherCard);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaWeatherCard).call(this)
              );
              _this.cardinalDirections = [
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
              _this.weatherIcons = {
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
              return _this;
            }

            _createClass(HaWeatherCard, [
              {
                key: "ready",
                value: function ready() {
                  this.addEventListener("click", this._onClick);

                  _get(
                    _getPrototypeOf(HaWeatherCard.prototype),
                    "ready",
                    this
                  ).call(this);
                },
              },
              {
                key: "_onClick",
                value: function _onClick() {
                  this.fire("hass-more-info", {
                    entityId: this.stateObj.entity_id,
                  });
                },
              },
              {
                key: "computeForecast",
                value: function computeForecast(forecast) {
                  return forecast && forecast.slice(0, 5);
                },
              },
              {
                key: "getUnit",
                value: function getUnit(measure) {
                  var lengthUnit = this.hass.config.unit_system.length || "";

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
                },
              },
              {
                key: "computeState",
                value: function computeState(state, localize) {
                  return localize("state.weather.".concat(state)) || state;
                },
              },
              {
                key: "computeName",
                value: function computeName(stateObj) {
                  return (
                    (this.config && this.config.name) ||
                    Object(
                      _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__[
                        "default"
                      ]
                    )(stateObj)
                  );
                },
              },
              {
                key: "showWeatherIcon",
                value: function showWeatherIcon(condition) {
                  return condition in this.weatherIcons;
                },
              },
              {
                key: "getWeatherIcon",
                value: function getWeatherIcon(condition) {
                  return this.weatherIcons[condition];
                },
              },
              {
                key: "windBearingToText",
                value: function windBearingToText(degree) {
                  var degreenum = parseInt(degree);

                  if (isFinite(degreenum)) {
                    return this.cardinalDirections[
                      (((degreenum + 11.25) / 22.5) | 0) % 16
                    ];
                  }

                  return degree;
                },
              },
              {
                key: "getWindSpeed",
                value: function getWindSpeed(speed) {
                  return ""
                    .concat(speed, " ")
                    .concat(this.getUnit("length"), "/h");
                },
              },
              {
                key: "getWindBearing",
                value: function getWindBearing(bearing, localize) {
                  if (bearing != null) {
                    var cardinalDirection = this.windBearingToText(bearing);
                    return "(".concat(
                      localize(
                        "ui.card.weather.cardinal_direction.".concat(
                          cardinalDirection.toLowerCase()
                        )
                      ) || cardinalDirection,
                      ")"
                    );
                  }

                  return "";
                },
              },
              {
                key: "_showValue",
                value: function _showValue(item) {
                  return typeof item !== "undefined" && item !== null;
                },
              },
              {
                key: "computeDate",
                value: function computeDate(data) {
                  var date = new Date(data);
                  return date.toLocaleDateString(this.hass.language, {
                    weekday: "short",
                  });
                },
              },
              {
                key: "computeTime",
                value: function computeTime(data) {
                  var date = new Date(data);
                  return date.toLocaleTimeString(this.hass.language, {
                    hour: "numeric",
                  });
                },
              },
              {
                key: "_computeRTL",
                value: function _computeRTL(hass) {
                  return Object(
                    _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__[
                      "computeRTL"
                    ]
                  )(hass);
                },
              },
            ]);

            return HaWeatherCard;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
                  "PolymerElement"
                ]
              )
            )
          );

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
          var views = [];
          Object.keys(entities).forEach(function(entityId) {
            var entity = entities[entityId];

            if (entity.attributes.view) {
              views.push(entity);
            }
          });
          views.sort(function(view1, view2) {
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
          var result = {};
          group.attributes.entity_id.forEach(function(entityId) {
            var entity = entities[entityId];

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
          var viewEntities = {};
          view.attributes.entity_id.forEach(function(entityId) {
            var entity = entities[entityId];

            if (entity && !entity.attributes.hidden) {
              viewEntities[entity.entity_id] = entity;

              if (
                Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(
                  entity.entity_id
                ) === "group"
              ) {
                var groupEntities = Object(
                  _get_group_entities__WEBPACK_IMPORTED_MODULE_1__["default"]
                )(entities, entity);
                Object.keys(groupEntities).forEach(function(grEntityId) {
                  var grEntity = groupEntities[grEntityId];

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
          var groups = [];
          var ungrouped = {};
          Object.keys(entities).forEach(function(entityId) {
            var entity = entities[entityId];

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
          groups.forEach(function(group) {
            return group.attributes.entity_id.forEach(function(entityId) {
              delete ungrouped[entityId];
            });
          });
          return {
            groups: groups,
            ungrouped: ungrouped,
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

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n      :host {\n        cursor: pointer;\n      }\n\n      ha-label-badge {\n        --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n      }\n      ha-label-badge.has-unit_of_measurement {\n        --ha-label-badge-label-text-transform: none;\n      }\n\n      ha-label-badge.binary_sensor,\n      ha-label-badge.updater {\n        --ha-label-badge-color: var(--label-badge-blue, #039be5);\n      }\n\n      .red {\n        --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n      }\n\n      .blue {\n        --ha-label-badge-color: var(--label-badge-blue, #039be5);\n      }\n\n      .green {\n        --ha-label-badge-color: var(--label-badge-green, #0da035);\n      }\n\n      .yellow {\n        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);\n      }\n\n      .grey {\n        --ha-label-badge-color: var(--label-badge-grey, var(--paper-grey-500));\n      }\n\n      .warning {\n        --ha-label-badge-color: var(--label-badge-yellow, #fce588);\n      }\n    ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-label-badge\n        class="',
            '"\n        .value="',
            '"\n        .icon="',
            '"\n        .image="',
            '"\n        .label="',
            '"\n        .description="',
            '"\n      ></ha-label-badge>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n        <ha-label-badge\n          class="warning"\n          label="',
            '"\n          icon="hass:alert"\n          description="',
            '"\n        ></ha-label-badge>\n      ',
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

        var HaStateLabelBadge = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "ha-state-label-badge"
            ),
          ],
          function(_initialize, _LitElement) {
            var HaStateLabelBadge =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HaStateLabelBadge, _LitElement2);

                function HaStateLabelBadge() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HaStateLabelBadge);

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
                      HaStateLabelBadge
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HaStateLabelBadge;
              })(_LitElement);

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
                    var _classMap;

                    var state = this.state;

                    if (!state) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(
                        _templateObject(),
                        this.hass.localize("state_badge.default.error"),
                        this.hass.localize(
                          "state_badge.default.entity_not_found"
                        )
                      );
                    }

                    var domain = Object(
                      _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__[
                        "default"
                      ]
                    )(state);
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject2(),
                      Object(
                        lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__[
                          "classMap"
                        ]
                      )(
                        ((_classMap = {}),
                        _defineProperty(_classMap, domain, true),
                        _defineProperty(
                          _classMap,
                          "has-unit_of_measurement",
                          "unit_of_measurement" in state.attributes
                        ),
                        _classMap)
                      ),
                      this._computeValue(domain, state),
                      this._computeIcon(domain, state),
                      state.attributes.entity_picture,
                      this._computeLabel(
                        domain,
                        state,
                        this._timerTimeRemaining
                      ),
                      Object(
                        _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__[
                          "default"
                        ]
                      )(state)
                    );
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProperties) {
                    var _this2 = this;

                    _get(
                      _getPrototypeOf(HaStateLabelBadge.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProperties);

                    this.addEventListener("click", function(ev) {
                      ev.stopPropagation();

                      if (_this2.state) {
                        Object(
                          _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__[
                            "fireEvent"
                          ]
                        )(_this2, "hass-more-info", {
                          entityId: _this2.state.entity_id,
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
                              "component."
                                .concat(domain, ".state.")
                                .concat(state.state)
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
                          "state_badge.".concat(domain, ".").concat(state.state)
                        ) ||
                        this.hass.localize(
                          "state_badge.default.".concat(state.state)
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
                    var _this3 = this;

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
                        this._updateRemaining = window.setInterval(function() {
                          return _this3.calculateTimerRemaining(_this3.state);
                        }, 1000);
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
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject3());
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

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            "\n        .badge-container {\n          display: inline-block;\n          text-align: center;\n          vertical-align: top;\n        }\n        .label-badge {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          width: var(--ha-label-badge-size, 2.5em);\n          text-align: center;\n          height: var(--ha-label-badge-size, 2.5em);\n          line-height: var(--ha-label-badge-size, 2.5em);\n          font-size: var(--ha-label-badge-font-size, 1.5em);\n          border-radius: 50%;\n          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));\n          color: var(--label-badge-text-color, rgb(76, 76, 76));\n\n          white-space: nowrap;\n          background-color: var(--label-badge-background-color, white);\n          background-size: cover;\n          transition: border 0.3s ease-in-out;\n        }\n        .label-badge .value {\n          font-size: 90%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .label-badge .value.big {\n          font-size: 70%;\n        }\n        .label-badge .label {\n          position: absolute;\n          bottom: -1em;\n          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */\n          left: -0.2em;\n          right: -0.2em;\n          line-height: 1em;\n          font-size: 0.5em;\n        }\n        .label-badge .label span {\n          box-sizing: border-box;\n          max-width: 100%;\n          display: inline-block;\n          background-color: var(--ha-label-badge-color, var(--primary-color));\n          color: var(--ha-label-badge-label-color, white);\n          border-radius: 1em;\n          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */\n          font-weight: 500;\n          overflow: hidden;\n          text-transform: uppercase;\n          text-overflow: ellipsis;\n          transition: background-color 0.3s ease-in-out;\n          text-transform: var(--ha-label-badge-label-text-transform, uppercase);\n        }\n        .label-badge .label.big span {\n          font-size: 90%;\n          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */\n        }\n        .badge-container .title {\n          margin-top: 1em;\n          font-size: var(--ha-label-badge-title-font-size, 0.9em);\n          width: var(--ha-label-badge-title-width, 5em);\n          font-weight: var(--ha-label-badge-title-font-weight, 400);\n          overflow: hidden;\n          text-overflow: ellipsis;\n          line-height: normal;\n        }\n      ",
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            '\n              <div class="title">',
            "</div>\n            ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n                <div\n                  class="',
            '"\n                >\n                  <span>',
            "</span>\n                </div>\n              ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n                  <span>",
            "</span>\n                ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n                  <ha-icon .icon="',
            '"></ha-icon>\n                ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <div class="badge-container">\n        <div class="label-badge" id="badge">\n          <div\n            class="',
            '"\n          >\n            ',
            "\n            ",
            "\n          </div>\n          ",
            "\n        </div>\n        ",
            "\n      </div>\n    ",
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

        var HaLabelBadge =
          /*#__PURE__*/
          (function(_LitElement) {
            _inherits(HaLabelBadge, _LitElement);

            function HaLabelBadge() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, HaLabelBadge);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(HaLabelBadge)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args)
                )
              );
              _this.value = void 0;
              _this.icon = void 0;
              _this.label = void 0;
              _this.description = void 0;
              _this.image = void 0;
              return _this;
            }

            _createClass(
              HaLabelBadge,
              [
                {
                  key: "render",
                  value: function render() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      Object(
                        lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__[
                          "classMap"
                        ]
                      )({
                        value: true,
                        big: Boolean(this.value && this.value.length > 4),
                      }),
                      this.icon && !this.value && !this.image
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject2(), this.icon)
                        : "",
                      this.value && !this.image
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject3(), this.value)
                        : "",
                      this.label
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject4(),
                            Object(
                              lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__[
                                "classMap"
                              ]
                            )({
                              label: true,
                              big: this.label.length > 5,
                            }),
                            this.label
                          )
                        : "",
                      this.description
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject5(), this.description)
                        : ""
                    );
                  },
                },
                {
                  key: "updated",
                  value: function updated(changedProperties) {
                    _get(
                      _getPrototypeOf(HaLabelBadge.prototype),
                      "updated",
                      this
                    ).call(this, changedProperties);

                    if (changedProperties.has("image")) {
                      this.shadowRoot.getElementById(
                        "badge"
                      ).style.backgroundImage = this.image
                        ? "url(".concat(this.image, ")")
                        : "";
                    }
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      value: {},
                      icon: {},
                      label: {},
                      description: {},
                      image: {},
                    };
                  },
                },
                {
                  key: "styles",
                  get: function get() {
                    return [
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(
                        _templateObject6()
                      ),
                    ];
                  },
                },
              ]
            );

            return HaLabelBadge;
          })(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

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
            '\n      <paper-icon-button\n        aria-label="Start conversation"\n        icon="hass:microphone"\n        hidden$="[[!canListen]]"\n        on-click="handleListenClick"\n      ></paper-icon-button>\n    ',
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
         * @appliesMixin EventsMixin
         */

        var HaStartVoiceButton =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaStartVoiceButton, _EventsMixin);

            function HaStartVoiceButton() {
              _classCallCheck(this, HaStartVoiceButton);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaStartVoiceButton).apply(this, arguments)
              );
            }

            _createClass(
              HaStartVoiceButton,
              [
                {
                  key: "computeCanListen",
                  value: function computeCanListen(hass) {
                    return (
                      "webkitSpeechRecognition" in window &&
                      Object(
                        _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__[
                          "default"
                        ]
                      )(hass, "conversation")
                    );
                  },
                },
                {
                  key: "handleListenClick",
                  value: function handleListenClick() {
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__[
                        "fireEvent"
                      ]
                    )(this, "show-dialog", {
                      dialogImport: function dialogImport() {
                        return __webpack_require__
                          .e(
                            /*! import() | voice-command-dialog */ "voice-command-dialog"
                          )
                          .then(
                            __webpack_require__.bind(
                              null,
                              /*! ../dialogs/ha-voice-command-dialog */ "./src/dialogs/ha-voice-command-dialog.js"
                            )
                          );
                      },
                      dialogTag: "ha-voice-command-dialog",
                    });
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
                  },
                },
              ]
            );

            return HaStartVoiceButton;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

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

        var SUPPORT_PAUSE = 1;
        var SUPPORT_NEXT_TRACK = 32;
        var SUPPORTS_PLAY = 16384;
        var OFF_STATES = ["off", "idle"];
        var fetchMediaPlayerThumbnailWithCache = function fetchMediaPlayerThumbnailWithCache(
          hass,
          entityId
        ) {
          return Object(
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
        };
        var fetchMediaPlayerThumbnail = function fetchMediaPlayerThumbnail(
          hass,
          entityId
        ) {
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
          var data = _taggedTemplateLiteral(
            [
              '\n      <style>\n        :host {\n          display: block;\n          /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that\'s not well supported\n         * across browsers.\n         */\n          position: relative;\n          z-index: 0;\n        }\n\n        #wrapper ::slotted([slot="header"]) {\n          @apply --layout-fixed-top;\n          z-index: 1;\n        }\n\n        #wrapper.initializing ::slotted([slot="header"]) {\n          position: relative;\n        }\n\n        :host([has-scrolling-region]) {\n          height: 100%;\n        }\n\n        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {\n          position: absolute;\n        }\n\n        :host([has-scrolling-region])\n          #wrapper.initializing\n          ::slotted([slot="header"]) {\n          position: relative;\n        }\n\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          @apply --layout-fit;\n          overflow-y: auto;\n          -webkit-overflow-scrolling: touch;\n        }\n\n        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n          position: relative;\n        }\n\n        #contentContainer {\n          /* Create a stacking context here so that all children appear below the header. */\n          position: relative;\n          z-index: 0;\n          /* Using \'transform\' will cause \'position: fixed\' elements to behave like\n           \'position: absolute\' relative to this element. */\n          transform: translate(0);\n        }\n\n        @media print {\n          :host([has-scrolling-region]) #wrapper #contentContainer {\n            overflow-y: visible;\n          }\n        }\n      </style>\n\n      <div id="wrapper" class="initializing">\n        <slot id="headerSlot" name="header"></slot>\n\n        <div id="contentContainer"><slot></slot></div>\n        <slot id="fab" name="fab"></slot>\n      </div>\n    ',
            ],
            [
              '\n      <style>\n        :host {\n          display: block;\n          /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that\'s not well supported\n         * across browsers.\n         */\n          position: relative;\n          z-index: 0;\n        }\n\n        #wrapper ::slotted([slot="header"]) {\n          @apply --layout-fixed-top;\n          z-index: 1;\n        }\n\n        #wrapper.initializing ::slotted([slot="header"]) {\n          position: relative;\n        }\n\n        :host([has-scrolling-region]) {\n          height: 100%;\n        }\n\n        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {\n          position: absolute;\n        }\n\n        :host([has-scrolling-region])\n          #wrapper.initializing\n          ::slotted([slot="header"]) {\n          position: relative;\n        }\n\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          @apply --layout-fit;\n          overflow-y: auto;\n          -webkit-overflow-scrolling: touch;\n        }\n\n        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n          position: relative;\n        }\n\n        #contentContainer {\n          /* Create a stacking context here so that all children appear below the header. */\n          position: relative;\n          z-index: 0;\n          /* Using \'transform\' will cause \'position: fixed\' elements to behave like\n           \'position: absolute\' relative to this element. */\n          transform: translate(0);\n        }\n\n        @media print {\n          :host([has-scrolling-region]) #wrapper #contentContainer {\n            overflow-y: visible;\n          }\n        }\n      </style>\n\n      <div id="wrapper" class="initializing">\n        <slot id="headerSlot" name="header"></slot>\n\n        <div id="contentContainer"><slot></slot></div>\n        <slot id="fab" name="fab"></slot>\n      </div>\n    ',
            ]
          );

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

        var HaAppLayout =
          /*#__PURE__*/
          (function(_customElements$get) {
            _inherits(HaAppLayout, _customElements$get);

            function HaAppLayout() {
              _classCallCheck(this, HaAppLayout);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaAppLayout).apply(this, arguments)
              );
            }

            _createClass(HaAppLayout, null, [
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
            ]);

            return HaAppLayout;
          })(customElements.get("app-header-layout"));

        customElements.define("ha-app-layout", HaAppLayout);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwta2lvc2t+cGFuZWwtbG92ZWxhY2V+cGFuZWwtc3RhdGVzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmRzL2hhLW1lZGlhX3BsYXllci1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS13ZWF0aGVyLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZXh0cmFjdF92aWV3cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9nZXRfZ3JvdXBfZW50aXRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZ2V0X3ZpZXdfZW50aXRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc3BsaXRfYnlfZ3JvdXBzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1zdGF0ZS1sYWJlbC1iYWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1sYWJlbC1iYWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zdGFydC12b2ljZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvbWVkaWEtcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2hhLWFwcC1sYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1wcm9ncmVzcy9wYXBlci1wcm9ncmVzc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3R5bGVzL2VsZW1lbnQtc3R5bGVzL3BhcGVyLW1hdGVyaWFsLXN0eWxlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IEhhc3NNZWRpYVBsYXllckVudGl0eSBmcm9tIFwiLi4vdXRpbC9oYXNzLW1lZGlhLXBsYXllci1tb2RlbFwiO1xuaW1wb3J0IHsgZmV0Y2hNZWRpYVBsYXllclRodW1ibmFpbFdpdGhDYWNoZSB9IGZyb20gXCIuLi9kYXRhL21lZGlhLXBsYXllclwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYU1lZGlhUGxheWVyQ2FyZCBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGVcbiAgICAgICAgaW5jbHVkZT1cInBhcGVyLW1hdGVyaWFsLXN0eWxlcyBpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudCBpcm9uLXBvc2l0aW9uaW5nXCJcbiAgICAgID5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmb250LXNpemU6IDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFubmVyOmJlZm9yZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvKiByZW1vdmVkIC4yNSUgZnJvbSAxNjo5IHJhdGlvIHRvIGZpeCBZVCBibGFjayBiYXJzICovXG4gICAgICAgICAgcGFkZGluZy10b3A6IDU2JTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBwYWRkaW5nLXRvcCAwLjhzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lci5uby1jb3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvY2FyZF9tZWRpYV9wbGF5ZXJfYmcucG5nKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lci5jb250ZW50LXR5cGUtbXVzaWM6YmVmb3JlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIuY29udGVudC10eXBlLWdhbWU6YmVmb3JlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIubm8tY292ZXI6YmVmb3JlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogODhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIgPiAuY292ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcblxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHM7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIuaXMtb2ZmID4gLmNvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lciA+IC5jYXB0aW9uIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNhcHRpb247XG5cbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLWRhcmstc2Vjb25kYXJ5LW9wYWNpdHkpKTtcblxuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lci5pcy1vZmYgPiAuY2FwdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIgPiAuY2FwdGlvbiAudGl0bGUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgIG1hcmdpbjogOHB4IDAgNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLXBhcGVyLXByb2dyZXNzLWhlaWdodCwgNHB4KTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0tcGFwZXItcHJvZ3Jlc3MtaGVpZ2h0LCA0cHgpKTtcbiAgICAgICAgICAtLXBhcGVyLXByb2dyZXNzLWFjdGl2ZS1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAtLXBhcGVyLXByb2dyZXNzLWNvbnRhaW5lci1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udHJvbHMgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5YmFjay1jb250cm9scyB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ucHJpbWFyeSB7XG4gICAgICAgICAgd2lkdGg6IDU2cHggIWltcG9ydGFudDtcbiAgICAgICAgICBoZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbi5wcmltYXJ5W2Rpc2FibGVkXSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS1kYXJrLWRpc2FibGVkLW9wYWNpdHkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtpbnZpc2libGVdIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcyQ9XCJbW2NvbXB1dGVCYW5uZXJDbGFzc2VzKHBsYXllck9iaiwgX2NvdmVyU2hvd2luZywgX2NvdmVyTG9hZEVycm9yKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvdmVyXCIgaWQ9XCJjb3ZlclwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgW1tfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPltbY29tcHV0ZVByaW1hcnlUZXh0KGxvY2FsaXplLCBwbGF5ZXJPYmopXV08L2Rpdj5cbiAgICAgICAgICBbW3BsYXllck9iai5zZWNvbmRhcnlUaXRsZV1dPGJyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxwYXBlci1wcm9ncmVzc1xuICAgICAgICBtYXg9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWVkaWFfZHVyYXRpb25dXVwiXG4gICAgICAgIHZhbHVlPVwiW1twbGF5YmFja1Bvc2l0aW9uXV1cIlxuICAgICAgICBoaWRkZW4kPVwiW1tjb21wdXRlSGlkZVByb2dyZXNzKHBsYXllck9iaildXVwiXG4gICAgICAgIGNsYXNzPVwicHJvZ3Jlc3NcIlxuICAgICAgPjwvcGFwZXItcHJvZ3Jlc3M+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9scyBsYXlvdXQgaG9yaXpvbnRhbCBqdXN0aWZpZWRcIj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlR1cm4gb2ZmXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpwb3dlclwiXG4gICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVUb2dnbGVQb3dlclwiXG4gICAgICAgICAgaW52aXNpYmxlJD1cIltbY29tcHV0ZUhpZGVQb3dlckJ1dHRvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgIGNsYXNzPVwic2VsZi1jZW50ZXIgc2Vjb25kYXJ5XCJcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYXliYWNrLWNvbnRyb2xzXCI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgdHJhY2tcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6c2tpcC1wcmV2aW91c1wiXG4gICAgICAgICAgICBpbnZpc2libGUkPVwiW1shcGxheWVyT2JqLnN1cHBvcnRzUHJldmlvdXNUcmFja11dXCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1twbGF5ZXJPYmouaXNPZmZdXVwiXG4gICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZVByZXZpb3VzXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQbGF5IG9yIFBhdXNlXCJcbiAgICAgICAgICAgIGNsYXNzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBpY29uPVwiW1tjb21wdXRlUGxheWJhY2tDb250cm9sSWNvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgICAgaW52aXNpYmxlJD1cIltbIWNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iaildXVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbcGxheWVyT2JqLmlzT2ZmXV1cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVQbGF5YmFja0NvbnRyb2xcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgdHJhY2tcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6c2tpcC1uZXh0XCJcbiAgICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFwbGF5ZXJPYmouc3VwcG9ydHNOZXh0VHJhY2tdXVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbcGxheWVyT2JqLmlzT2ZmXV1cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVOZXh0XCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk1vcmUgaW5mb3JtYXRpb24uXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZU9wZW5Nb3JlSW5mb1wiXG4gICAgICAgICAgY2xhc3M9XCJzZWxmLWNlbnRlciBzZWNvbmRhcnlcIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBwbGF5ZXJPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlUGxheWVyT2JqKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgICBvYnNlcnZlcjogXCJwbGF5ZXJPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgcGxheWJhY2tDb250cm9sSWNvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iailcIixcbiAgICAgIH0sXG4gICAgICBwbGF5YmFja1Bvc2l0aW9uOiBOdW1iZXIsXG4gICAgICBfY292ZXJTaG93aW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBfY292ZXJMb2FkRXJyb3I6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgcGxheWVyT2JqQ2hhbmdlZChwbGF5ZXJPYmosIG9sZFBsYXllck9iaikge1xuICAgIGlmIChwbGF5ZXJPYmouaXNQbGF5aW5nICYmIHBsYXllck9iai5zaG93UHJvZ3Jlc3MpIHtcbiAgICAgIGlmICghdGhpcy5fcG9zaXRpb25UcmFja2luZykge1xuICAgICAgICB0aGlzLl9wb3NpdGlvblRyYWNraW5nID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVQbGF5YmFja1Bvc2l0aW9uKCksXG4gICAgICAgICAgMTAwMFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fcG9zaXRpb25UcmFja2luZykge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9wb3NpdGlvblRyYWNraW5nKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uVHJhY2tpbmcgPSBudWxsO1xuICAgIH1cbiAgICBpZiAocGxheWVyT2JqLnNob3dQcm9ncmVzcykge1xuICAgICAgdGhpcy51cGRhdGVQbGF5YmFja1Bvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGljdHVyZSA9IHBsYXllck9iai5zdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlO1xuICAgIGNvbnN0IG9sZFBpY3R1cmUgPVxuICAgICAgb2xkUGxheWVyT2JqICYmIG9sZFBsYXllck9iai5zdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlO1xuXG4gICAgaWYgKHBpY3R1cmUgIT09IG9sZFBpY3R1cmUgJiYgIXBpY3R1cmUpIHtcbiAgICAgIHRoaXMuJC5jb3Zlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGljdHVyZSA9PT0gb2xkUGljdHVyZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFdlIGhhdmUgYSBuZXcgcGljdHVyZSB1cmxcbiAgICAvLyBJZiBlbnRpdHkgcGljdHVyZSBpcyBub24tcmVsYXRpdmUsIHdlIHVzZSB0aGF0IHVybCBkaXJlY3RseS5cbiAgICBpZiAocGljdHVyZS5zdWJzdHIoMCwgMSkgIT09IFwiL1wiKSB7XG4gICAgICB0aGlzLl9jb3ZlclNob3dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fY292ZXJMb2FkRXJyb3IgPSBmYWxzZTtcbiAgICAgIHRoaXMuJC5jb3Zlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGljdHVyZX0pYDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb250ZW50X3R5cGU6IGNvbnRlbnRUeXBlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSA9IGF3YWl0IGZldGNoTWVkaWFQbGF5ZXJUaHVtYm5haWxXaXRoQ2FjaGUoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgcGxheWVyT2JqLnN0YXRlT2JqLmVudGl0eV9pZFxuICAgICAgKTtcbiAgICAgIHRoaXMuX2NvdmVyU2hvd2luZyA9IHRydWU7XG4gICAgICB0aGlzLl9jb3ZlckxvYWRFcnJvciA9IGZhbHNlO1xuICAgICAgdGhpcy4kLmNvdmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoZGF0YToke2NvbnRlbnRUeXBlfTtiYXNlNjQsJHtjb250ZW50fSlgO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fY292ZXJTaG93aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb3ZlckxvYWRFcnJvciA9IHRydWU7XG4gICAgICB0aGlzLiQuY292ZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQbGF5YmFja1Bvc2l0aW9uKCkge1xuICAgIHRoaXMucGxheWJhY2tQb3NpdGlvbiA9IHRoaXMucGxheWVyT2JqLmN1cnJlbnRQcm9ncmVzcztcbiAgfVxuXG4gIGNvbXB1dGVCYW5uZXJDbGFzc2VzKHBsYXllck9iaiwgY292ZXJTaG93aW5nLCBjb3ZlckxvYWRFcnJvcikge1xuICAgIHZhciBjbHMgPSBcImJhbm5lclwiO1xuXG4gICAgaWYgKHBsYXllck9iai5pc09mZiB8fCBwbGF5ZXJPYmouaXNJZGxlKSB7XG4gICAgICBjbHMgKz0gXCIgaXMtb2ZmIG5vLWNvdmVyXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICFwbGF5ZXJPYmouc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZSB8fFxuICAgICAgY292ZXJMb2FkRXJyb3IgfHxcbiAgICAgICFjb3ZlclNob3dpbmdcbiAgICApIHtcbiAgICAgIGNscyArPSBcIiBuby1jb3ZlclwiO1xuICAgIH0gZWxzZSBpZiAocGxheWVyT2JqLnN0YXRlT2JqLmF0dHJpYnV0ZXMubWVkaWFfY29udGVudF90eXBlID09PSBcIm11c2ljXCIpIHtcbiAgICAgIGNscyArPSBcIiBjb250ZW50LXR5cGUtbXVzaWNcIjtcbiAgICB9IGVsc2UgaWYgKHBsYXllck9iai5zdGF0ZU9iai5hdHRyaWJ1dGVzLm1lZGlhX2NvbnRlbnRfdHlwZSA9PT0gXCJnYW1lXCIpIHtcbiAgICAgIGNscyArPSBcIiBjb250ZW50LXR5cGUtZ2FtZVwiO1xuICAgIH1cbiAgICByZXR1cm4gY2xzO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVQcm9ncmVzcyhwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gIXBsYXllck9iai5zaG93UHJvZ3Jlc3M7XG4gIH1cblxuICBjb21wdXRlSGlkZVBvd2VyQnV0dG9uKHBsYXllck9iaikge1xuICAgIHJldHVybiBwbGF5ZXJPYmouaXNPZmZcbiAgICAgID8gIXBsYXllck9iai5zdXBwb3J0c1R1cm5PblxuICAgICAgOiAhcGxheWVyT2JqLnN1cHBvcnRzVHVybk9mZjtcbiAgfVxuXG4gIGNvbXB1dGVQbGF5ZXJPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IEhhc3NNZWRpYVBsYXllckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlUHJpbWFyeVRleHQobG9jYWxpemUsIHBsYXllck9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBwbGF5ZXJPYmoucHJpbWFyeVRpdGxlIHx8XG4gICAgICBsb2NhbGl6ZShgc3RhdGUubWVkaWFfcGxheWVyLiR7cGxheWVyT2JqLnN0YXRlT2JqLnN0YXRlfWApIHx8XG4gICAgICBsb2NhbGl6ZShgc3RhdGUuZGVmYXVsdC4ke3BsYXllck9iai5zdGF0ZU9iai5zdGF0ZX1gKSB8fFxuICAgICAgcGxheWVyT2JqLnN0YXRlT2JqLnN0YXRlXG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iaikge1xuICAgIGlmIChwbGF5ZXJPYmouaXNQbGF5aW5nKSB7XG4gICAgICByZXR1cm4gcGxheWVyT2JqLnN1cHBvcnRzUGF1c2UgPyBcImhhc3M6cGF1c2VcIiA6IFwiaGFzczpzdG9wXCI7XG4gICAgfVxuICAgIGlmIChwbGF5ZXJPYmouaGFzTWVkaWFDb250cm9sIHx8IHBsYXllck9iai5pc09mZiB8fCBwbGF5ZXJPYmouaXNJZGxlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllck9iai5oYXNNZWRpYUNvbnRyb2wgJiZcbiAgICAgICAgcGxheWVyT2JqLnN1cHBvcnRzUGF1c2UgJiZcbiAgICAgICAgIXBsYXllck9iai5pc1BhdXNlZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBcImhhc3M6cGxheS1wYXVzZVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBsYXllck9iai5zdXBwb3J0c1BsYXkgPyBcImhhc3M6cGxheVwiIDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIGhhbmRsZU5leHQoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnBsYXllck9iai5uZXh0VHJhY2soKTtcbiAgfVxuXG4gIGhhbmRsZU9wZW5Nb3JlSW5mbyhldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH0pO1xuICB9XG5cbiAgaGFuZGxlUGxheWJhY2tDb250cm9sKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wbGF5ZXJPYmoubWVkaWFQbGF5UGF1c2UoKTtcbiAgfVxuXG4gIGhhbmRsZVByZXZpb3VzKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wbGF5ZXJPYmoucHJldmlvdXNUcmFjaygpO1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlUG93ZXIoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnBsYXllck9iai50b2dnbGVQb3dlcigpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1tZWRpYV9wbGF5ZXItY2FyZFwiLCBIYU1lZGlhUGxheWVyQ2FyZCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWljb25cIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhV2VhdGhlckNhcmQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtaWNvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZV8tX2ZvbnQtZmFtaWx5KTtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiB2YXIoXG4gICAgICAgICAgICAtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV8td2Via2l0LWZvbnQtc21vb3RoaW5nXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV9mb250LXNpemUpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fZm9udC13ZWlnaHQpO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fbGV0dGVyLXNwYWNpbmcpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fbGluZS1oZWlnaHQpO1xuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiB2YXIoXG4gICAgICAgICAgICAtLXBhcGVyLWZvbnQtY29tbW9uLWV4cGVuc2l2ZS1rZXJuaW5nXy1fdGV4dC1yZW5kZXJpbmdcbiAgICAgICAgICApO1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4IDE2cHggMTZweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAubmFtZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5tYWluIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIGhhLWljb24ge1xuICAgICAgICAgIC0taXJvbi1pY29uLWhlaWdodDogNzJweDtcbiAgICAgICAgICAtLWlyb24taWNvbi13aWR0aDogNzJweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAubWFpbiBoYS1pY29uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIC50ZW1wIHtcbiAgICAgICAgICBmb250LXNpemU6IDUycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLm1haW4gLnRlbXAge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIC50ZW1wIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZWFzdXJhbmQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAubWVhc3VyYW5kIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JlY2FzdCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JlY2FzdCBkaXYge1xuICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JlY2FzdCAuaWNvbiB7XG4gICAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLmZvcmVjYXN0IC50ZW1wIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC53ZWVrZGF5IHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzLFxuICAgICAgICAudGVtcGxvdyxcbiAgICAgICAgLnByZWNpcGl0YXRpb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLnByZWNpcGl0YXRpb24ge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICBbW2NvbXB1dGVTdGF0ZShzdGF0ZU9iai5zdGF0ZSwgbG9jYWxpemUpXV1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPltbY29tcHV0ZU5hbWUoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3Nob3dXZWF0aGVySWNvbihzdGF0ZU9iai5zdGF0ZSldXVwiPlxuICAgICAgICAgICAgICAgIDxoYS1pY29uIGljb249XCJbW2dldFdlYXRoZXJJY29uKHN0YXRlT2JqLnN0YXRlKV1dXCI+PC9oYS1pY29uPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcFwiPlxuICAgICAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZV1dPHNwYW5cbiAgICAgICAgICAgICAgICAgID5bW2dldFVuaXQoJ3RlbXBlcmF0dXJlJyldXTwvc3BhblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdHRyaWJ1dGVzXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgICAgICBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNzdXJlKV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy5haXJfcHJlc3N1cmUnKV1dOlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZWFzdXJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNzdXJlXV0gW1tnZXRVbml0KCdhaXJfcHJlc3N1cmUnKV1dXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgICAgICBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5KV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy5odW1pZGl0eScpXV06XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1lYXN1cmFuZFwiXG4gICAgICAgICAgICAgICAgICAgID5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHldXSAlPC9zcGFuXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgICAgICBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLndpbmRfc3BlZWQpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLndpbmRfc3BlZWQnKV1dOlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZWFzdXJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tnZXRXaW5kU3BlZWQoc3RhdGVPYmouYXR0cmlidXRlcy53aW5kX3NwZWVkKV1dXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICBbW2dldFdpbmRCZWFyaW5nKHN0YXRlT2JqLmF0dHJpYnV0ZXMud2luZF9iZWFyaW5nLCBsb2NhbGl6ZSldXVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2ZvcmVjYXN0XV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JlY2FzdFwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2ZvcmVjYXN0XV1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWtkYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tjb21wdXRlRGF0ZShpdGVtLmRhdGV0aW1lKV1dPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX3Nob3dWYWx1ZShpdGVtLnRlbXBsb3cpXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBbW2NvbXB1dGVUaW1lKGl0ZW0uZGF0ZXRpbWUpXV1cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19zaG93VmFsdWUoaXRlbS5jb25kaXRpb24pXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aGEtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIltbZ2V0V2VhdGhlckljb24oaXRlbS5jb25kaXRpb24pXV1cIlxuICAgICAgICAgICAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKGl0ZW0udGVtcGVyYXR1cmUpXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBbW2l0ZW0udGVtcGVyYXR1cmVdXSBbW2dldFVuaXQoJ3RlbXBlcmF0dXJlJyldXVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShpdGVtLnRlbXBsb3cpXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICBbW2l0ZW0udGVtcGxvd11dIFtbZ2V0VW5pdCgndGVtcGVyYXR1cmUnKV1dXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKGl0ZW0ucHJlY2lwaXRhdGlvbildXVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlY2lwaXRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIFtbaXRlbS5wcmVjaXBpdGF0aW9uXV0gW1tnZXRVbml0KCdwcmVjaXBpdGF0aW9uJyldXVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBjb25maWc6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBmb3JlY2FzdDoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUZvcmVjYXN0KHN0YXRlT2JqLmF0dHJpYnV0ZXMuZm9yZWNhc3QpXCIsXG4gICAgICB9LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jYXJkaW5hbERpcmVjdGlvbnMgPSBbXG4gICAgICBcIk5cIixcbiAgICAgIFwiTk5FXCIsXG4gICAgICBcIk5FXCIsXG4gICAgICBcIkVORVwiLFxuICAgICAgXCJFXCIsXG4gICAgICBcIkVTRVwiLFxuICAgICAgXCJTRVwiLFxuICAgICAgXCJTU0VcIixcbiAgICAgIFwiU1wiLFxuICAgICAgXCJTU1dcIixcbiAgICAgIFwiU1dcIixcbiAgICAgIFwiV1NXXCIsXG4gICAgICBcIldcIixcbiAgICAgIFwiV05XXCIsXG4gICAgICBcIk5XXCIsXG4gICAgICBcIk5OV1wiLFxuICAgICAgXCJOXCIsXG4gICAgXTtcbiAgICB0aGlzLndlYXRoZXJJY29ucyA9IHtcbiAgICAgIFwiY2xlYXItbmlnaHRcIjogXCJoYXNzOndlYXRoZXItbmlnaHRcIixcbiAgICAgIGNsb3VkeTogXCJoYXNzOndlYXRoZXItY2xvdWR5XCIsXG4gICAgICBmb2c6IFwiaGFzczp3ZWF0aGVyLWZvZ1wiLFxuICAgICAgaGFpbDogXCJoYXNzOndlYXRoZXItaGFpbFwiLFxuICAgICAgbGlnaHRuaW5nOiBcImhhc3M6d2VhdGhlci1saWdodG5pbmdcIixcbiAgICAgIFwibGlnaHRuaW5nLXJhaW55XCI6IFwiaGFzczp3ZWF0aGVyLWxpZ2h0bmluZy1yYWlueVwiLFxuICAgICAgcGFydGx5Y2xvdWR5OiBcImhhc3M6d2VhdGhlci1wYXJ0bHljbG91ZHlcIixcbiAgICAgIHBvdXJpbmc6IFwiaGFzczp3ZWF0aGVyLXBvdXJpbmdcIixcbiAgICAgIHJhaW55OiBcImhhc3M6d2VhdGhlci1yYWlueVwiLFxuICAgICAgc25vd3k6IFwiaGFzczp3ZWF0aGVyLXNub3d5XCIsXG4gICAgICBcInNub3d5LXJhaW55XCI6IFwiaGFzczp3ZWF0aGVyLXNub3d5LXJhaW55XCIsXG4gICAgICBzdW5ueTogXCJoYXNzOndlYXRoZXItc3VubnlcIixcbiAgICAgIHdpbmR5OiBcImhhc3M6d2VhdGhlci13aW5keVwiLFxuICAgICAgXCJ3aW5keS12YXJpYW50XCI6IFwiaGFzczp3ZWF0aGVyLXdpbmR5LXZhcmlhbnRcIixcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fb25DbGljayk7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgfVxuXG4gIF9vbkNsaWNrKCkge1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH0pO1xuICB9XG5cbiAgY29tcHV0ZUZvcmVjYXN0KGZvcmVjYXN0KSB7XG4gICAgcmV0dXJuIGZvcmVjYXN0ICYmIGZvcmVjYXN0LnNsaWNlKDAsIDUpO1xuICB9XG5cbiAgZ2V0VW5pdChtZWFzdXJlKSB7XG4gICAgY29uc3QgbGVuZ3RoVW5pdCA9IHRoaXMuaGFzcy5jb25maWcudW5pdF9zeXN0ZW0ubGVuZ3RoIHx8IFwiXCI7XG4gICAgc3dpdGNoIChtZWFzdXJlKSB7XG4gICAgICBjYXNlIFwiYWlyX3ByZXNzdXJlXCI6XG4gICAgICAgIHJldHVybiBsZW5ndGhVbml0ID09PSBcImttXCIgPyBcImhQYVwiIDogXCJpbkhnXCI7XG4gICAgICBjYXNlIFwibGVuZ3RoXCI6XG4gICAgICAgIHJldHVybiBsZW5ndGhVbml0O1xuICAgICAgY2FzZSBcInByZWNpcGl0YXRpb25cIjpcbiAgICAgICAgcmV0dXJuIGxlbmd0aFVuaXQgPT09IFwia21cIiA/IFwibW1cIiA6IFwiaW5cIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLmhhc3MuY29uZmlnLnVuaXRfc3lzdGVtW21lYXN1cmVdIHx8IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZVN0YXRlKHN0YXRlLCBsb2NhbGl6ZSkge1xuICAgIHJldHVybiBsb2NhbGl6ZShgc3RhdGUud2VhdGhlci4ke3N0YXRlfWApIHx8IHN0YXRlO1xuICB9XG5cbiAgY29tcHV0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm5hbWUpIHx8IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgc2hvd1dlYXRoZXJJY29uKGNvbmRpdGlvbikge1xuICAgIHJldHVybiBjb25kaXRpb24gaW4gdGhpcy53ZWF0aGVySWNvbnM7XG4gIH1cblxuICBnZXRXZWF0aGVySWNvbihjb25kaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy53ZWF0aGVySWNvbnNbY29uZGl0aW9uXTtcbiAgfVxuXG4gIHdpbmRCZWFyaW5nVG9UZXh0KGRlZ3JlZSkge1xuICAgIGNvbnN0IGRlZ3JlZW51bSA9IHBhcnNlSW50KGRlZ3JlZSk7XG4gICAgaWYgKGlzRmluaXRlKGRlZ3JlZW51bSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhcmRpbmFsRGlyZWN0aW9uc1soKChkZWdyZWVudW0gKyAxMS4yNSkgLyAyMi41KSB8IDApICUgMTZdO1xuICAgIH1cbiAgICByZXR1cm4gZGVncmVlO1xuICB9XG5cbiAgZ2V0V2luZFNwZWVkKHNwZWVkKSB7XG4gICAgcmV0dXJuIGAke3NwZWVkfSAke3RoaXMuZ2V0VW5pdChcImxlbmd0aFwiKX0vaGA7XG4gIH1cblxuICBnZXRXaW5kQmVhcmluZyhiZWFyaW5nLCBsb2NhbGl6ZSkge1xuICAgIGlmIChiZWFyaW5nICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGNhcmRpbmFsRGlyZWN0aW9uID0gdGhpcy53aW5kQmVhcmluZ1RvVGV4dChiZWFyaW5nKTtcbiAgICAgIHJldHVybiBgKCR7bG9jYWxpemUoXG4gICAgICAgIGB1aS5jYXJkLndlYXRoZXIuY2FyZGluYWxfZGlyZWN0aW9uLiR7Y2FyZGluYWxEaXJlY3Rpb24udG9Mb3dlckNhc2UoKX1gXG4gICAgICApIHx8IGNhcmRpbmFsRGlyZWN0aW9ufSlgO1xuICAgIH1cbiAgICByZXR1cm4gYGA7XG4gIH1cblxuICBfc2hvd1ZhbHVlKGl0ZW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlbSAhPT0gbnVsbDtcbiAgfVxuXG4gIGNvbXB1dGVEYXRlKGRhdGEpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0YSk7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuaGFzcy5sYW5ndWFnZSwgeyB3ZWVrZGF5OiBcInNob3J0XCIgfSk7XG4gIH1cblxuICBjb21wdXRlVGltZShkYXRhKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGEpO1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyh0aGlzLmhhc3MubGFuZ3VhZ2UsIHsgaG91cjogXCJudW1lcmljXCIgfSk7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXdlYXRoZXItY2FyZFwiLCBIYVdlYXRoZXJDYXJkKTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdGllcyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IERFRkFVTFRfVklFV19FTlRJVFlfSUQgfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IEdyb3VwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8vIFJldHVybiBhbiBvcmRlcmVkIGFycmF5IG9mIGF2YWlsYWJsZSB2aWV3c1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXh0cmFjdFZpZXdzKGVudGl0aWVzOiBIYXNzRW50aXRpZXMpOiBHcm91cEVudGl0eVtdIHtcbiAgY29uc3Qgdmlld3M6IEdyb3VwRW50aXR5W10gPSBbXTtcblxuICBPYmplY3Qua2V5cyhlbnRpdGllcykuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG4gICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzLnZpZXcpIHtcbiAgICAgIHZpZXdzLnB1c2goZW50aXR5IGFzIEdyb3VwRW50aXR5KTtcbiAgICB9XG4gIH0pO1xuXG4gIHZpZXdzLnNvcnQoKHZpZXcxLCB2aWV3MikgPT4ge1xuICAgIGlmICh2aWV3MS5lbnRpdHlfaWQgPT09IERFRkFVTFRfVklFV19FTlRJVFlfSUQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKHZpZXcyLmVudGl0eV9pZCA9PT0gREVGQVVMVF9WSUVXX0VOVElUWV9JRCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiB2aWV3MS5hdHRyaWJ1dGVzLm9yZGVyIC0gdmlldzIuYXR0cmlidXRlcy5vcmRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdzO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgR3JvdXBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0R3JvdXBFbnRpdGllcyhcbiAgZW50aXRpZXM6IEhhc3NFbnRpdGllcyxcbiAgZ3JvdXA6IEdyb3VwRW50aXR5XG4pIHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgZ3JvdXAuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5KSB7XG4gICAgICByZXN1bHRbZW50aXR5LmVudGl0eV9pZF0gPSBlbnRpdHk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCBnZXRHcm91cEVudGl0aWVzIGZyb20gXCIuL2dldF9ncm91cF9lbnRpdGllc1wiO1xuaW1wb3J0IHsgR3JvdXBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLy8gUmV0dXJuIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBlbnRpdGllcyB0aGF0IHRoZSB2aWV3IHdpbGwgc2hvd1xuLy8gaW5jbHVkaW5nIGVtYmVkZGVkIGdyb3Vwcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdFbnRpdGllcyhcbiAgZW50aXRpZXM6IEhhc3NFbnRpdGllcyxcbiAgdmlldzogR3JvdXBFbnRpdHlcbik6IEhhc3NFbnRpdGllcyB7XG4gIGNvbnN0IHZpZXdFbnRpdGllcyA9IHt9O1xuXG4gIHZpZXcuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5ICYmICFlbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgIHZpZXdFbnRpdGllc1tlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcblxuICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkgPT09IFwiZ3JvdXBcIikge1xuICAgICAgICBjb25zdCBncm91cEVudGl0aWVzID0gZ2V0R3JvdXBFbnRpdGllcyhlbnRpdGllcywgZW50aXR5IGFzIEdyb3VwRW50aXR5KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhncm91cEVudGl0aWVzKS5mb3JFYWNoKChnckVudGl0eUlkKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JFbnRpdHkgPSBncm91cEVudGl0aWVzW2dyRW50aXR5SWRdO1xuXG4gICAgICAgICAgaWYgKCFnckVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbikge1xuICAgICAgICAgICAgdmlld0VudGl0aWVzW2dyRW50aXR5SWRdID0gZ3JFbnRpdHk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2aWV3RW50aXRpZXM7XG59XG4iLCJpbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgR3JvdXBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLy8gU3BsaXQgYSBjb2xsZWN0aW9uIGludG8gYSBsaXN0IG9mIGdyb3VwcyBhbmQgYSAncmVzdCcgbGlzdCBvZiB1bmdyb3VwZWRcbi8vIGVudGl0aWVzLlxuLy8gUmV0dXJucyB7IGdyb3VwczogW10sIHVuZ3JvdXBlZDoge30gfVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BsaXRCeUdyb3VwcyhlbnRpdGllczogSGFzc0VudGl0aWVzKSB7XG4gIGNvbnN0IGdyb3VwczogR3JvdXBFbnRpdHlbXSA9IFtdO1xuICBjb25zdCB1bmdyb3VwZWQ6IEhhc3NFbnRpdGllcyA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKGVudGl0aWVzKS5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eUlkKSA9PT0gXCJncm91cFwiKSB7XG4gICAgICBncm91cHMucHVzaChlbnRpdHkgYXMgR3JvdXBFbnRpdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bmdyb3VwZWRbZW50aXR5SWRdID0gZW50aXR5O1xuICAgIH1cbiAgfSk7XG5cbiAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PlxuICAgIGdyb3VwLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgICBkZWxldGUgdW5ncm91cGVkW2VudGl0eUlkXTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiB7IGdyb3VwcywgdW5ncm91cGVkIH07XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBkb21haW5JY29uIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgc3RhdGVJY29uIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L3N0YXRlX2ljb25cIjtcbmltcG9ydCB0aW1lclRpbWVSZW1haW5pbmcgZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvdGltZXJfdGltZV9yZW1haW5pbmdcIjtcbmltcG9ydCBzZWNvbmRzVG9EdXJhdGlvbiBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL3NlY29uZHNfdG9fZHVyYXRpb25cIjtcblxuaW1wb3J0IFwiLi4vaGEtbGFiZWwtYmFkZ2VcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1zdGF0ZS1sYWJlbC1iYWRnZVwiKVxuZXhwb3J0IGNsYXNzIEhhU3RhdGVMYWJlbEJhZGdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGU/OiBIYXNzRW50aXR5O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3RpbWVyVGltZVJlbWFpbmluZz86IG51bWJlcjtcblxuICBwcml2YXRlIF9jb25uZWN0ZWQ/OiBib29sZWFuO1xuXG4gIHByaXZhdGUgX3VwZGF0ZVJlbWFpbmluZz86IG51bWJlcjtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9jb25uZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRJbnRlcnZhbCh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGEtbGFiZWwtYmFkZ2VcbiAgICAgICAgICBjbGFzcz1cIndhcm5pbmdcIlxuICAgICAgICAgIGxhYmVsPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwic3RhdGVfYmFkZ2UuZGVmYXVsdC5lcnJvclwiKX1cIlxuICAgICAgICAgIGljb249XCJoYXNzOmFsZXJ0XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwic3RhdGVfYmFkZ2UuZGVmYXVsdC5lbnRpdHlfbm90X2ZvdW5kXCJcbiAgICAgICAgICApfVwiXG4gICAgICAgID48L2hhLWxhYmVsLWJhZGdlPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGUpO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtbGFiZWwtYmFkZ2VcbiAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICBbZG9tYWluXTogdHJ1ZSxcbiAgICAgICAgICBcImhhcy11bml0X29mX21lYXN1cmVtZW50XCI6IFwidW5pdF9vZl9tZWFzdXJlbWVudFwiIGluIHN0YXRlLmF0dHJpYnV0ZXMsXG4gICAgICAgIH0pfVwiXG4gICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fY29tcHV0ZVZhbHVlKGRvbWFpbiwgc3RhdGUpfVwiXG4gICAgICAgIC5pY29uPVwiJHt0aGlzLl9jb21wdXRlSWNvbihkb21haW4sIHN0YXRlKX1cIlxuICAgICAgICAuaW1hZ2U9XCIke3N0YXRlLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmV9XCJcbiAgICAgICAgLmxhYmVsPVwiJHt0aGlzLl9jb21wdXRlTGFiZWwoZG9tYWluLCBzdGF0ZSwgdGhpcy5fdGltZXJUaW1lUmVtYWluaW5nKX1cIlxuICAgICAgICAuZGVzY3JpcHRpb249XCIke2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGUpfVwiXG4gICAgICA+PC9oYS1sYWJlbC1iYWRnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy5zdGF0ZSkge1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiB0aGlzLnN0YXRlLmVudGl0eV9pZCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCAmJiBjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJzdGF0ZVwiKSkge1xuICAgICAgdGhpcy5zdGFydEludGVydmFsKHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVWYWx1ZShkb21haW46IHN0cmluZywgc3RhdGU6IEhhc3NFbnRpdHkpIHtcbiAgICBzd2l0Y2ggKGRvbWFpbikge1xuICAgICAgY2FzZSBcImJpbmFyeV9zZW5zb3JcIjpcbiAgICAgIGNhc2UgXCJkZXZpY2VfdHJhY2tlclwiOlxuICAgICAgY2FzZSBcInBlcnNvblwiOlxuICAgICAgY2FzZSBcInVwZGF0ZXJcIjpcbiAgICAgIGNhc2UgXCJzdW5cIjpcbiAgICAgIGNhc2UgXCJhbGFybV9jb250cm9sX3BhbmVsXCI6XG4gICAgICBjYXNlIFwidGltZXJcIjpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBjYXNlIFwic2Vuc29yXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGUuc3RhdGUgPT09IFwidW5rbm93blwiXG4gICAgICAgICAgPyBcIi1cIlxuICAgICAgICAgIDogdGhpcy5oYXNzIS5sb2NhbGl6ZShgY29tcG9uZW50LiR7ZG9tYWlufS5zdGF0ZS4ke3N0YXRlLnN0YXRlfWApIHx8XG4gICAgICAgICAgICAgIHN0YXRlLnN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVJY29uKGRvbWFpbjogc3RyaW5nLCBzdGF0ZTogSGFzc0VudGl0eSkge1xuICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJ1bmF2YWlsYWJsZVwiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3dpdGNoIChkb21haW4pIHtcbiAgICAgIGNhc2UgXCJhbGFybV9jb250cm9sX3BhbmVsXCI6XG4gICAgICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJwZW5kaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmNsb2NrLWZhc3RcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhdGUgPT09IFwiYXJtZWRfYXdheVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpuYXR1cmVcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhdGUgPT09IFwiYXJtZWRfaG9tZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpob21lLXZhcmlhbnRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhdGUgPT09IFwiYXJtZWRfbmlnaHRcIikge1xuICAgICAgICAgIHJldHVybiBcImhhc3M6d2VhdGhlci1uaWdodFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJhcm1lZF9jdXN0b21fYnlwYXNzXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOnNoaWVsZC1ob21lXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLnN0YXRlID09PSBcInRyaWdnZXJlZFwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczphbGVydC1jaXJjbGVcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdGF0ZSA9PSAnZGlzYXJtZWQnXG4gICAgICAgIHJldHVybiBkb21haW5JY29uKGRvbWFpbiwgc3RhdGUuc3RhdGUpO1xuICAgICAgY2FzZSBcImJpbmFyeV9zZW5zb3JcIjpcbiAgICAgIGNhc2UgXCJkZXZpY2VfdHJhY2tlclwiOlxuICAgICAgY2FzZSBcInVwZGF0ZXJcIjpcbiAgICAgIGNhc2UgXCJwZXJzb25cIjpcbiAgICAgICAgcmV0dXJuIHN0YXRlSWNvbihzdGF0ZSk7XG4gICAgICBjYXNlIFwic3VuXCI6XG4gICAgICAgIHJldHVybiBzdGF0ZS5zdGF0ZSA9PT0gXCJhYm92ZV9ob3Jpem9uXCJcbiAgICAgICAgICA/IGRvbWFpbkljb24oZG9tYWluKVxuICAgICAgICAgIDogXCJoYXNzOmJyaWdodG5lc3MtM1wiO1xuICAgICAgY2FzZSBcInRpbWVyXCI6XG4gICAgICAgIHJldHVybiBzdGF0ZS5zdGF0ZSA9PT0gXCJhY3RpdmVcIiA/IFwiaGFzczp0aW1lclwiIDogXCJoYXNzOnRpbWVyLW9mZlwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZUxhYmVsKGRvbWFpbiwgc3RhdGUsIF90aW1lclRpbWVSZW1haW5pbmcpIHtcbiAgICBpZiAoXG4gICAgICBzdGF0ZS5zdGF0ZSA9PT0gXCJ1bmF2YWlsYWJsZVwiIHx8XG4gICAgICBbXCJkZXZpY2VfdHJhY2tlclwiLCBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIiwgXCJwZXJzb25cIl0uaW5jbHVkZXMoZG9tYWluKVxuICAgICkge1xuICAgICAgLy8gTG9jYWxpemUgdGhlIHN0YXRlIHdpdGggYSBzcGVjaWFsIHN0YXRlX2JhZGdlIG5hbWVzcGFjZSwgd2hpY2ggaGFzIHZhcmlhdGlvbnMgb2ZcbiAgICAgIC8vIHRoZSBzdGF0ZSB0cmFuc2xhdGlvbnMgdGhhdCBhcmUgdHJ1bmNhdGVkIHRvIGZpdCB3aXRoaW4gdGhlIGJhZGdlIGxhYmVsLiBUcmFuc2xhdGlvbnNcbiAgICAgIC8vIGFyZSBvbmx5IGFkZGVkIGZvciBkZXZpY2VfdHJhY2tlciwgYWxhcm1fY29udHJvbF9wYW5lbCBhbmQgcGVyc29uLlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShgc3RhdGVfYmFkZ2UuJHtkb21haW59LiR7c3RhdGUuc3RhdGV9YCkgfHxcbiAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShgc3RhdGVfYmFkZ2UuZGVmYXVsdC4ke3N0YXRlLnN0YXRlfWApIHx8XG4gICAgICAgIHN0YXRlLnN0YXRlXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZG9tYWluID09PSBcInRpbWVyXCIpIHtcbiAgICAgIHJldHVybiBzZWNvbmRzVG9EdXJhdGlvbihfdGltZXJUaW1lUmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudCB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckludGVydmFsKCkge1xuICAgIGlmICh0aGlzLl91cGRhdGVSZW1haW5pbmcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdXBkYXRlUmVtYWluaW5nKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVJlbWFpbmluZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopIHtcbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcbiAgICBpZiAoc3RhdGVPYmogJiYgY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSA9PT0gXCJ0aW1lclwiKSB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVRpbWVyUmVtYWluaW5nKHN0YXRlT2JqKTtcblxuICAgICAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlbWFpbmluZyA9IHdpbmRvdy5zZXRJbnRlcnZhbChcbiAgICAgICAgICAoKSA9PiB0aGlzLmNhbGN1bGF0ZVRpbWVyUmVtYWluaW5nKHRoaXMuc3RhdGUpLFxuICAgICAgICAgIDEwMDBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVRpbWVyUmVtYWluaW5nKHN0YXRlT2JqKSB7XG4gICAgdGhpcy5fdGltZXJUaW1lUmVtYWluaW5nID0gdGltZXJUaW1lUmVtYWluaW5nKHN0YXRlT2JqKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBoYS1sYWJlbC1iYWRnZSB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLXJlZCwgI2RmNGMxZSk7XG4gICAgICB9XG4gICAgICBoYS1sYWJlbC1iYWRnZS5oYXMtdW5pdF9vZl9tZWFzdXJlbWVudCB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtbGFiZWwtdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGhhLWxhYmVsLWJhZGdlLmJpbmFyeV9zZW5zb3IsXG4gICAgICBoYS1sYWJlbC1iYWRnZS51cGRhdGVyIHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtYmx1ZSwgIzAzOWJlNSk7XG4gICAgICB9XG5cbiAgICAgIC5yZWQge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS1yZWQsICNkZjRjMWUpO1xuICAgICAgfVxuXG4gICAgICAuYmx1ZSB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLWJsdWUsICMwMzliZTUpO1xuICAgICAgfVxuXG4gICAgICAuZ3JlZW4ge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS1ncmVlbiwgIzBkYTAzNSk7XG4gICAgICB9XG5cbiAgICAgIC55ZWxsb3cge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS15ZWxsb3csICNmNGI0MDApO1xuICAgICAgfVxuXG4gICAgICAuZ3JleSB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLWdyZXksIHZhcigtLXBhcGVyLWdyZXktNTAwKSk7XG4gICAgICB9XG5cbiAgICAgIC53YXJuaW5nIHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UteWVsbG93LCAjZmNlNTg4KTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1zdGF0ZS1sYWJlbC1iYWRnZVwiOiBIYVN0YXRlTGFiZWxCYWRnZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCBcIi4vaGEtaWNvblwiO1xuXG5jbGFzcyBIYUxhYmVsQmFkZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIHZhbHVlPzogc3RyaW5nO1xuICBwdWJsaWMgaWNvbj86IHN0cmluZztcbiAgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuICBwdWJsaWMgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBpbWFnZT86IHN0cmluZztcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToge30sXG4gICAgICBpY29uOiB7fSxcbiAgICAgIGxhYmVsOiB7fSxcbiAgICAgIGRlc2NyaXB0aW9uOiB7fSxcbiAgICAgIGltYWdlOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImJhZGdlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtYmFkZ2VcIiBpZD1cImJhZGdlXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgIGJpZzogQm9vbGVhbih0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoID4gNCksXG4gICAgICAgICAgICB9KX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5pY29uICYmICF0aGlzLnZhbHVlICYmICF0aGlzLmltYWdlXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoYS1pY29uIC5pY29uPVwiJHt0aGlzLmljb259XCI+PC9oYS1pY29uPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgJHt0aGlzLnZhbHVlICYmICF0aGlzLmltYWdlXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxzcGFuPiR7dGhpcy52YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgJHt0aGlzLmxhYmVsXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJpZzogdGhpcy5sYWJlbC5sZW5ndGggPiA1LFxuICAgICAgICAgICAgICAgICAgfSl9XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj4ke3RoaXMubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke3RoaXMuZGVzY3JpcHRpb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7dGhpcy5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBjc3NgXG4gICAgICAgIC5iYWRnZS1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuICAgICAgICAubGFiZWwtYmFkZ2Uge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB3aWR0aDogdmFyKC0taGEtbGFiZWwtYmFkZ2Utc2l6ZSwgMi41ZW0pO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLWhhLWxhYmVsLWJhZGdlLXNpemUsIDIuNWVtKTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taGEtbGFiZWwtYmFkZ2Utc2l6ZSwgMi41ZW0pO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGEtbGFiZWwtYmFkZ2UtZm9udC1zaXplLCAxLjVlbSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMC4xZW0gc29saWQgdmFyKC0taGEtbGFiZWwtYmFkZ2UtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtdGV4dC1jb2xvciwgcmdiKDc2LCA3NiwgNzYpKTtcblxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsLWJhZGdlIC52YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgICAgICAubGFiZWwtYmFkZ2UgLnZhbHVlLmJpZyB7XG4gICAgICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsLWJhZGdlIC5sYWJlbCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLTFlbTtcbiAgICAgICAgICAvKiBNYWtlIHRoZSBsYWJlbCBhcyB3aWRlIGFzIGNvbnRhaW5lcitib3JkZXIuIChwYXJlbnRfYm9yZGVyd2lkdGggLyBmb250LXNpemUpICovXG4gICAgICAgICAgbGVmdDogLTAuMmVtO1xuICAgICAgICAgIHJpZ2h0OiAtMC4yZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICBmb250LXNpemU6IDAuNWVtO1xuICAgICAgICB9XG4gICAgICAgIC5sYWJlbC1iYWRnZSAubGFiZWwgc3BhbiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhLWxhYmVsLWJhZGdlLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWhhLWxhYmVsLWJhZGdlLWxhYmVsLWNvbG9yLCB3aGl0ZSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDklIDE2JSA4JSAxNiU7IC8qIG1vc3RseSBhcGl0YWxpemVkIHRleHQsIG5vdCBtdWNoIGRlc2NlbmRlcnMgPT4gYml0IG1vcmUgdG9wIG1hcmdpbiAqL1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdmFyKC0taGEtbGFiZWwtYmFkZ2UtbGFiZWwtdGV4dC10cmFuc2Zvcm0sIHVwcGVyY2FzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsLWJhZGdlIC5sYWJlbC5iaWcgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgcGFkZGluZzogMTAlIDEyJSA3JSAxMiU7IC8qIHB1c2ggc21hbGxlciB0ZXh0IGEgYml0IGRvd24gdG8gY2VudGVyIHZlcnRpY2FsbHkgKi9cbiAgICAgICAgfVxuICAgICAgICAuYmFkZ2UtY29udGFpbmVyIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGEtbGFiZWwtYmFkZ2UtdGl0bGUtZm9udC1zaXplLCAwLjllbSk7XG4gICAgICAgICAgd2lkdGg6IHZhcigtLWhhLWxhYmVsLWJhZGdlLXRpdGxlLXdpZHRoLCA1ZW0pO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1oYS1sYWJlbC1iYWRnZS10aXRsZS1mb250LXdlaWdodCwgNDAwKTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJpbWFnZVwiKSkge1xuICAgICAgdGhpcy5zaGFkb3dSb290IS5nZXRFbGVtZW50QnlJZChcImJhZGdlXCIpIS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB0aGlzXG4gICAgICAgIC5pbWFnZVxuICAgICAgICA/IGB1cmwoJHt0aGlzLmltYWdlfSlgXG4gICAgICAgIDogXCJcIjtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWxhYmVsLWJhZGdlXCI6IEhhTGFiZWxCYWRnZTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1sYWJlbC1iYWRnZVwiLCBIYUxhYmVsQmFkZ2UpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuaW1wb3J0IGlzQ29tcG9uZW50TG9hZGVkIGZyb20gXCIuLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFTdGFydFZvaWNlQnV0dG9uIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiU3RhcnQgY29udmVyc2F0aW9uXCJcbiAgICAgICAgaWNvbj1cImhhc3M6bWljcm9waG9uZVwiXG4gICAgICAgIGhpZGRlbiQ9XCJbWyFjYW5MaXN0ZW5dXVwiXG4gICAgICAgIG9uLWNsaWNrPVwiaGFuZGxlTGlzdGVuQ2xpY2tcIlxuICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgY2FuTGlzdGVuOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVDYW5MaXN0ZW4oaGFzcylcIixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNhbkxpc3RlbihoYXNzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFwid2Via2l0U3BlZWNoUmVjb2duaXRpb25cIiBpbiB3aW5kb3cgJiZcbiAgICAgIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwiY29udmVyc2F0aW9uXCIpXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZUxpc3RlbkNsaWNrKCkge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidm9pY2UtY29tbWFuZC1kaWFsb2dcIiAqLyBcIi4uL2RpYWxvZ3MvaGEtdm9pY2UtY29tbWFuZC1kaWFsb2dcIiksXG4gICAgICBkaWFsb2dUYWc6IFwiaGEtdm9pY2UtY29tbWFuZC1kaWFsb2dcIixcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zdGFydC12b2ljZS1idXR0b25cIiwgSGFTdGFydFZvaWNlQnV0dG9uKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW1wb3J0IHsgdGltZUNhY2hlUHJvbWlzZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvdGltZS1jYWNoZS1mdW5jdGlvbi1wcm9taXNlXCI7XG5cbmV4cG9ydCBjb25zdCBTVVBQT1JUX1BBVVNFID0gMTtcbmV4cG9ydCBjb25zdCBTVVBQT1JUX05FWFRfVFJBQ0sgPSAzMjtcbmV4cG9ydCBjb25zdCBTVVBQT1JUU19QTEFZID0gMTYzODQ7XG5leHBvcnQgY29uc3QgT0ZGX1NUQVRFUyA9IFtcIm9mZlwiLCBcImlkbGVcIl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFQbGF5ZXJUaHVtYm5haWwge1xuICBjb250ZW50X3R5cGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hNZWRpYVBsYXllclRodW1ibmFpbFdpdGhDYWNoZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKSA9PlxuICB0aW1lQ2FjaGVQcm9taXNlRnVuYyhcbiAgICBcIl9tZWRpYV9wbGF5ZXJUbWJcIixcbiAgICA5MDAwLFxuICAgIGZldGNoTWVkaWFQbGF5ZXJUaHVtYm5haWwsXG4gICAgaGFzcyxcbiAgICBlbnRpdHlJZFxuICApO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hNZWRpYVBsYXllclRodW1ibmFpbCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKSA9PiB7XG4gIHJldHVybiBoYXNzLmNhbGxXUzxNZWRpYVBsYXllclRodW1ibmFpbD4oe1xuICAgIHR5cGU6IFwibWVkaWFfcGxheWVyX3RodW1ibmFpbFwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuVGhpcyBjb2RlIGlzIGNvcGllZCBmcm9tIGFwcC1oZWFkZXItbGF5b3V0LlxuJ2Z1bGxibGVlZCcgc3VwcG9ydCBpcyByZW1vdmVkIGFzIEhvbWUgQXNzaXNzdGFudCBkb2Vzbid0IHVzZSBpdC5cbnRyYW5zZm9ybTogdHJhbnNsYXRlKDApIGlzIGFkZGVkLlxuKi9cbi8qXG4gIEZJWE1FKHBvbHltZXItbW9kdWxpemVyKTogdGhlIGFib3ZlIGNvbW1lbnRzIHdlcmUgZXh0cmFjdGVkXG4gIGZyb20gSFRNTCBhbmQgbWF5IGJlIG91dCBvZiBwbGFjZSBoZXJlLiBSZXZpZXcgdGhlbSBhbmRcbiAgdGhlbiBkZWxldGUgdGhpcyBjb21tZW50IVxuKi9cbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQXBwTGF5b3V0IGV4dGVuZHMgY3VzdG9tRWxlbWVudHMuZ2V0KFwiYXBwLWhlYWRlci1sYXlvdXRcIikge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlIGFwcC1oZWFkZXItbGF5b3V0IHRvIGhhdmUgaXRzIG93biBzdGFja2luZyBjb250ZXh0IHNvIHRoYXQgaXRzIHBhcmVudCBjYW5cbiAgICAgICAgICogY29udHJvbCB0aGUgc3RhY2tpbmcgb2YgaXQgcmVsYXRpdmUgdG8gb3RoZXIgZWxlbWVudHMgKGUuZy4gYXBwLWRyYXdlci1sYXlvdXQpLlxuICAgICAgICAgKiBUaGlzIGNvdWxkIGJlIGRvbmUgdXNpbmcgXFxgaXNvbGF0aW9uOiBpc29sYXRlXFxgLCBidXQgdGhhdCdzIG5vdCB3ZWxsIHN1cHBvcnRlZFxuICAgICAgICAgKiBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgICAgICAqL1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PVwiaGVhZGVyXCJdKSB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpeGVkLXRvcDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgI3dyYXBwZXIuaW5pdGlhbGl6aW5nIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9XCJoZWFkZXJcIl0pIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKVxuICAgICAgICAgICN3cmFwcGVyLmluaXRpYWxpemluZ1xuICAgICAgICAgIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIuaW5pdGlhbGl6aW5nICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgLyogQ3JlYXRlIGEgc3RhY2tpbmcgY29udGV4dCBoZXJlIHNvIHRoYXQgYWxsIGNoaWxkcmVuIGFwcGVhciBiZWxvdyB0aGUgaGVhZGVyLiAqL1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgIC8qIFVzaW5nICd0cmFuc2Zvcm0nIHdpbGwgY2F1c2UgJ3Bvc2l0aW9uOiBmaXhlZCcgZWxlbWVudHMgdG8gYmVoYXZlIGxpa2VcbiAgICAgICAgICAgJ3Bvc2l0aW9uOiBhYnNvbHV0ZScgcmVsYXRpdmUgdG8gdGhpcyBlbGVtZW50LiAqL1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cImluaXRpYWxpemluZ1wiPlxuICAgICAgICA8c2xvdCBpZD1cImhlYWRlclNsb3RcIiBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8c2xvdCBpZD1cImZhYlwiIG5hbWU9XCJmYWJcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1hcHAtbGF5b3V0XCIsIEhhQXBwTGF5b3V0KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUErT0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7O0FBTUE7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFRQTtBQUNBOzs7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQS9YQTtBQUNBO0FBa05BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWpCQTtBQXNCQTs7OztBQTdPQTtBQUNBO0FBaVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFpBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7O0FBQ0E7QUFDQTtBQStOQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBY0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBckJBO0FBcUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFVQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBNVdBO0FBQ0E7QUE2V0E7Ozs7Ozs7Ozs7OztBQzVYQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBWUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQUFBO0FBdUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBYUE7QUF0REE7QUFBQTtBQUFBO0FBQUE7QUF3REE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWhFQTtBQUFBO0FBQUE7QUFBQTtBQW1FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4RUE7QUFBQTtBQUFBO0FBQUE7QUEyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFYQTtBQWdCQTtBQTNGQTtBQUFBO0FBQUE7QUFBQTtBQThGQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBbENBO0FBb0NBO0FBcklBO0FBQUE7QUFBQTtBQUFBO0FBd0lBO0FBSUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXpKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBNEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoS0E7QUFBQTtBQUFBO0FBQUE7QUFrS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQTlLQTtBQUFBO0FBQUE7QUFBQTtBQWlMQTtBQUNBO0FBbExBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxTEE7QUF5Q0E7QUE5TkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBWUE7QUFDQTtBQUtBO0FBQ0E7QUFGQTtBQW9CQTtBQUNBO0FBRkE7QUFpQkE7OztBQTZFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTs7O0FBeElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7O0FBNkNBO0FBQ0E7QUF3RUE7Ozs7QUFySUE7QUFDQTtBQXVKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUEsZ09BQ0E7QUFEQTtBQUVBO0FBSEE7QUFLQTs7O0FBdkNBO0FBQ0E7QUFRQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU5BO0FBWUE7Ozs7QUF6QkE7QUFDQTtBQTBDQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBWUE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBOzs7Ozs7Ozs7O0FBU0E7Ozs7OztBQUtBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBc0VBOzs7O0FBeEVBO0FBQ0E7QUF5RUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
