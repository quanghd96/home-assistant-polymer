(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["vendors~dialog-config-flow~more-info-dialog~onboarding-core-config"],
  {
    /***/ "./node_modules/@polymer/iron-behaviors/iron-button-state.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/@polymer/iron-behaviors/iron-button-state.js ***!
  \*******************************************************************/
      /*! exports provided: IronButtonStateImpl, IronButtonState */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "IronButtonStateImpl",
          function() {
            return IronButtonStateImpl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "IronButtonState",
          function() {
            return IronButtonState;
          }
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _iron_control_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js"
        );
        /* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
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

        /**
         * @demo demo/index.html
         * @polymerBehavior IronButtonState
         */

        const IronButtonStateImpl = {
          properties: {
            /**
             * If true, the user is currently holding down the button.
             */
            pressed: {
              type: Boolean,
              readOnly: true,
              value: false,
              reflectToAttribute: true,
              observer: "_pressedChanged",
            },

            /**
             * If true, the button toggles the active state with each tap or press
             * of the spacebar.
             */
            toggles: {
              type: Boolean,
              value: false,
              reflectToAttribute: true,
            },

            /**
             * If true, the button is a toggle and is currently in the active state.
             */
            active: {
              type: Boolean,
              value: false,
              notify: true,
              reflectToAttribute: true,
            },

            /**
             * True if the element is currently being pressed by a "pointer," which
             * is loosely defined as mouse or touch input (but specifically excluding
             * keyboard input).
             */
            pointerDown: {
              type: Boolean,
              readOnly: true,
              value: false,
            },

            /**
             * True if the input device that caused the element to receive focus
             * was a keyboard.
             */
            receivedFocusFromKeyboard: {
              type: Boolean,
              readOnly: true,
            },

            /**
             * The aria attribute to be set if the button is a toggle and in the
             * active state.
             */
            ariaActiveAttribute: {
              type: String,
              value: "aria-pressed",
              observer: "_ariaActiveAttributeChanged",
            },
          },
          listeners: {
            down: "_downHandler",
            up: "_upHandler",
            tap: "_tapHandler",
          },
          observers: [
            "_focusChanged(focused)",
            "_activeChanged(active, ariaActiveAttribute)",
          ],

          /**
           * @type {!Object}
           */
          keyBindings: {
            "enter:keydown": "_asyncClick",
            "space:keydown": "_spaceKeyDownHandler",
            "space:keyup": "_spaceKeyUpHandler",
          },
          _mouseEventRe: /^mouse/,
          _tapHandler: function() {
            if (this.toggles) {
              // a tap is needed to toggle the active state
              this._userActivate(!this.active);
            } else {
              this.active = false;
            }
          },
          _focusChanged: function(focused) {
            this._detectKeyboardFocus(focused);

            if (!focused) {
              this._setPressed(false);
            }
          },
          _detectKeyboardFocus: function(focused) {
            this._setReceivedFocusFromKeyboard(!this.pointerDown && focused);
          },
          // to emulate native checkbox, (de-)activations from a user interaction fire
          // 'change' events
          _userActivate: function(active) {
            if (this.active !== active) {
              this.active = active;
              this.fire("change");
            }
          },
          _downHandler: function(event) {
            this._setPointerDown(true);

            this._setPressed(true);

            this._setReceivedFocusFromKeyboard(false);
          },
          _upHandler: function() {
            this._setPointerDown(false);

            this._setPressed(false);
          },

          /**
           * @param {!KeyboardEvent} event .
           */
          _spaceKeyDownHandler: function(event) {
            var keyboardEvent = event.detail.keyboardEvent;
            var target = Object(
              _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__[
                "dom"
              ]
            )(keyboardEvent).localTarget; // Ignore the event if this is coming from a focused light child, since that
            // element will deal with it.

            if (
              this.isLightDescendant(
                /** @type {Node} */
                target
              )
            )
              return;
            keyboardEvent.preventDefault();
            keyboardEvent.stopImmediatePropagation();

            this._setPressed(true);
          },

          /**
           * @param {!KeyboardEvent} event .
           */
          _spaceKeyUpHandler: function(event) {
            var keyboardEvent = event.detail.keyboardEvent;
            var target = Object(
              _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__[
                "dom"
              ]
            )(keyboardEvent).localTarget; // Ignore the event if this is coming from a focused light child, since that
            // element will deal with it.

            if (
              this.isLightDescendant(
                /** @type {Node} */
                target
              )
            )
              return;

            if (this.pressed) {
              this._asyncClick();
            }

            this._setPressed(false);
          },
          // trigger click asynchronously, the asynchrony is useful to allow one
          // event handler to unwind before triggering another event
          _asyncClick: function() {
            this.async(function() {
              this.click();
            }, 1);
          },
          // any of these changes are considered a change to button state
          _pressedChanged: function(pressed) {
            this._changedButtonState();
          },
          _ariaActiveAttributeChanged: function(value, oldValue) {
            if (oldValue && oldValue != value && this.hasAttribute(oldValue)) {
              this.removeAttribute(oldValue);
            }
          },
          _activeChanged: function(active, ariaActiveAttribute) {
            if (this.toggles) {
              this.setAttribute(
                this.ariaActiveAttribute,
                active ? "true" : "false"
              );
            } else {
              this.removeAttribute(this.ariaActiveAttribute);
            }

            this._changedButtonState();
          },
          _controlStateChanged: function() {
            if (this.disabled) {
              this._setPressed(false);
            } else {
              this._changedButtonState();
            }
          },
          // provide hook for follow-on behaviors to react to button-state
          _changedButtonState: function() {
            if (this._buttonStateChanged) {
              this._buttonStateChanged(); // abstract
            }
          },
        };
        /** @polymerBehavior */

        const IronButtonState = [
          _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__[
            "IronA11yKeysBehavior"
          ],
          IronButtonStateImpl,
        ];

        /***/
      },

    /***/ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js ***!
  \****************************************************************************/
      /*! exports provided: PaperInkyFocusBehaviorImpl, PaperInkyFocusBehavior */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperInkyFocusBehaviorImpl",
          function() {
            return PaperInkyFocusBehaviorImpl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperInkyFocusBehavior",
          function() {
            return PaperInkyFocusBehavior;
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
        /* harmony import */ var _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js"
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

        /**
         * `PaperInkyFocusBehavior` implements a ripple when the element has keyboard
         * focus.
         *
         * @polymerBehavior PaperInkyFocusBehavior
         */

        const PaperInkyFocusBehaviorImpl = {
          observers: ["_focusedChanged(receivedFocusFromKeyboard)"],
          _focusedChanged: function(receivedFocusFromKeyboard) {
            if (receivedFocusFromKeyboard) {
              this.ensureRipple();
            }

            if (this.hasRipple()) {
              this._ripple.holdDown = receivedFocusFromKeyboard;
            }
          },
          _createRipple: function() {
            var ripple = _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__[
              "PaperRippleBehavior"
            ]._createRipple();

            ripple.id = "ink";
            ripple.setAttribute("center", "");
            ripple.classList.add("circle");
            return ripple;
          },
        };
        /** @polymerBehavior */

        const PaperInkyFocusBehavior = [
          _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__[
            "IronButtonState"
          ],
          _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__[
            "IronControlState"
          ],
          _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__[
            "PaperRippleBehavior"
          ],
          PaperInkyFocusBehaviorImpl,
        ];

        /***/
      },

    /***/ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js":
      /*!************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js ***!
  \************************************************************************/
      /*! exports provided: PaperRippleBehavior */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperRippleBehavior",
          function() {
            return PaperRippleBehavior;
          }
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-ripple/paper-ripple.js */ "./node_modules/@polymer/paper-ripple/paper-ripple.js"
        );
        /* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
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

        /**
         * `PaperRippleBehavior` dynamically implements a ripple when the element has
         * focus via pointer or keyboard.
         *
         * NOTE: This behavior is intended to be used in conjunction with and after
         * `IronButtonState` and `IronControlState`.
         *
         * @polymerBehavior PaperRippleBehavior
         */

        const PaperRippleBehavior = {
          properties: {
            /**
             * If true, the element will not produce a ripple effect when interacted
             * with via the pointer.
             */
            noink: {
              type: Boolean,
              observer: "_noinkChanged",
            },

            /**
             * @type {Element|undefined}
             */
            _rippleContainer: {
              type: Object,
            },
          },

          /**
           * Ensures a `<paper-ripple>` element is available when the element is
           * focused.
           */
          _buttonStateChanged: function() {
            if (this.focused) {
              this.ensureRipple();
            }
          },

          /**
           * In addition to the functionality provided in `IronButtonState`, ensures
           * a ripple effect is created when the element is in a `pressed` state.
           */
          _downHandler: function(event) {
            _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__[
              "IronButtonStateImpl"
            ]._downHandler.call(this, event);

            if (this.pressed) {
              this.ensureRipple(event);
            }
          },

          /**
           * Ensures this element contains a ripple effect. For startup efficiency
           * the ripple effect is dynamically on demand when needed.
           * @param {!Event=} optTriggeringEvent (optional) event that triggered the
           * ripple.
           */
          ensureRipple: function(optTriggeringEvent) {
            if (!this.hasRipple()) {
              this._ripple = this._createRipple();
              this._ripple.noink = this.noink;
              var rippleContainer = this._rippleContainer || this.root;

              if (rippleContainer) {
                Object(
                  _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__[
                    "dom"
                  ]
                )(rippleContainer).appendChild(this._ripple);
              }

              if (optTriggeringEvent) {
                // Check if the event happened inside of the ripple container
                // Fall back to host instead of the root because distributed text
                // nodes are not valid event targets
                var domContainer = Object(
                  _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__[
                    "dom"
                  ]
                )(this._rippleContainer || this);
                var target = Object(
                  _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__[
                    "dom"
                  ]
                )(optTriggeringEvent).rootTarget;

                if (
                  domContainer.deepContains(
                    /** @type {Node} */
                    target
                  )
                ) {
                  this._ripple.uiDownAction(optTriggeringEvent);
                }
              }
            }
          },

          /**
           * Returns the `<paper-ripple>` element used by this element to create
           * ripple effects. The element's ripple is created on demand, when
           * necessary, and calling this method will force the
           * ripple to be created.
           */
          getRipple: function() {
            this.ensureRipple();
            return this._ripple;
          },

          /**
           * Returns true if this element currently contains a ripple effect.
           * @return {boolean}
           */
          hasRipple: function() {
            return Boolean(this._ripple);
          },

          /**
           * Create the element's ripple effect via creating a `<paper-ripple>`.
           * Override this method to customize the ripple element.
           * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
           */
          _createRipple: function() {
            var element =
              /** @type {!PaperRippleElement} */
              document.createElement("paper-ripple");
            return element;
          },
          _noinkChanged: function(noink) {
            if (this.hasRipple()) {
              this._ripple.noink = noink;
            }
          },
        };

        /***/
      },

    /***/ "./node_modules/@polymer/paper-ripple/paper-ripple.js":
      /*!************************************************************!*\
  !*** ./node_modules/@polymer/paper-ripple/paper-ripple.js ***!
  \************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        var Utility = {
          distance: function(x1, y1, x2, y2) {
            var xDelta = x1 - x2;
            var yDelta = y1 - y2;
            return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
          },
          now:
            window.performance && window.performance.now
              ? window.performance.now.bind(window.performance)
              : Date.now,
        };
        /**
         * @param {HTMLElement} element
         * @constructor
         */

        function ElementMetrics(element) {
          this.element = element;
          this.width = this.boundingRect.width;
          this.height = this.boundingRect.height;
          this.size = Math.max(this.width, this.height);
        }

        ElementMetrics.prototype = {
          get boundingRect() {
            return this.element.getBoundingClientRect();
          },

          furthestCornerDistanceFrom: function(x, y) {
            var topLeft = Utility.distance(x, y, 0, 0);
            var topRight = Utility.distance(x, y, this.width, 0);
            var bottomLeft = Utility.distance(x, y, 0, this.height);
            var bottomRight = Utility.distance(x, y, this.width, this.height);
            return Math.max(topLeft, topRight, bottomLeft, bottomRight);
          },
        };
        /**
         * @param {HTMLElement} element
         * @constructor
         */

        function Ripple(element) {
          this.element = element;
          this.color = window.getComputedStyle(element).color;
          this.wave = document.createElement("div");
          this.waveContainer = document.createElement("div");
          this.wave.style.backgroundColor = this.color;
          this.wave.classList.add("wave");
          this.waveContainer.classList.add("wave-container");
          Object(
            _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__[
              "dom"
            ]
          )(this.waveContainer).appendChild(this.wave);
          this.resetInteractionState();
        }

        Ripple.MAX_RADIUS = 300;
        Ripple.prototype = {
          get recenters() {
            return this.element.recenters;
          },

          get center() {
            return this.element.center;
          },

          get mouseDownElapsed() {
            var elapsed;

            if (!this.mouseDownStart) {
              return 0;
            }

            elapsed = Utility.now() - this.mouseDownStart;

            if (this.mouseUpStart) {
              elapsed -= this.mouseUpElapsed;
            }

            return elapsed;
          },

          get mouseUpElapsed() {
            return this.mouseUpStart ? Utility.now() - this.mouseUpStart : 0;
          },

          get mouseDownElapsedSeconds() {
            return this.mouseDownElapsed / 1000;
          },

          get mouseUpElapsedSeconds() {
            return this.mouseUpElapsed / 1000;
          },

          get mouseInteractionSeconds() {
            return this.mouseDownElapsedSeconds + this.mouseUpElapsedSeconds;
          },

          get initialOpacity() {
            return this.element.initialOpacity;
          },

          get opacityDecayVelocity() {
            return this.element.opacityDecayVelocity;
          },

          get radius() {
            var width2 =
              this.containerMetrics.width * this.containerMetrics.width;
            var height2 =
              this.containerMetrics.height * this.containerMetrics.height;
            var waveRadius =
              Math.min(Math.sqrt(width2 + height2), Ripple.MAX_RADIUS) * 1.1 +
              5;
            var duration = 1.1 - 0.2 * (waveRadius / Ripple.MAX_RADIUS);
            var timeNow = this.mouseInteractionSeconds / duration;
            var size = waveRadius * (1 - Math.pow(80, -timeNow));
            return Math.abs(size);
          },

          get opacity() {
            if (!this.mouseUpStart) {
              return this.initialOpacity;
            }

            return Math.max(
              0,
              this.initialOpacity -
                this.mouseUpElapsedSeconds * this.opacityDecayVelocity
            );
          },

          get outerOpacity() {
            // Linear increase in background opacity, capped at the opacity
            // of the wavefront (waveOpacity).
            var outerOpacity = this.mouseUpElapsedSeconds * 0.3;
            var waveOpacity = this.opacity;
            return Math.max(0, Math.min(outerOpacity, waveOpacity));
          },

          get isOpacityFullyDecayed() {
            return (
              this.opacity < 0.01 &&
              this.radius >= Math.min(this.maxRadius, Ripple.MAX_RADIUS)
            );
          },

          get isRestingAtMaxRadius() {
            return (
              this.opacity >= this.initialOpacity &&
              this.radius >= Math.min(this.maxRadius, Ripple.MAX_RADIUS)
            );
          },

          get isAnimationComplete() {
            return this.mouseUpStart
              ? this.isOpacityFullyDecayed
              : this.isRestingAtMaxRadius;
          },

          get translationFraction() {
            return Math.min(
              1,
              ((this.radius / this.containerMetrics.size) * 2) / Math.sqrt(2)
            );
          },

          get xNow() {
            if (this.xEnd) {
              return (
                this.xStart +
                this.translationFraction * (this.xEnd - this.xStart)
              );
            }

            return this.xStart;
          },

          get yNow() {
            if (this.yEnd) {
              return (
                this.yStart +
                this.translationFraction * (this.yEnd - this.yStart)
              );
            }

            return this.yStart;
          },

          get isMouseDown() {
            return this.mouseDownStart && !this.mouseUpStart;
          },

          resetInteractionState: function() {
            this.maxRadius = 0;
            this.mouseDownStart = 0;
            this.mouseUpStart = 0;
            this.xStart = 0;
            this.yStart = 0;
            this.xEnd = 0;
            this.yEnd = 0;
            this.slideDistance = 0;
            this.containerMetrics = new ElementMetrics(this.element);
          },
          draw: function() {
            var scale;
            var dx;
            var dy;
            this.wave.style.opacity = this.opacity;
            scale = this.radius / (this.containerMetrics.size / 2);
            dx = this.xNow - this.containerMetrics.width / 2;
            dy = this.yNow - this.containerMetrics.height / 2; // 2d transform for safari because of border-radius and overflow:hidden
            // clipping bug. https://bugs.webkit.org/show_bug.cgi?id=98538

            this.waveContainer.style.webkitTransform =
              "translate(" + dx + "px, " + dy + "px)";
            this.waveContainer.style.transform =
              "translate3d(" + dx + "px, " + dy + "px, 0)";
            this.wave.style.webkitTransform =
              "scale(" + scale + "," + scale + ")";
            this.wave.style.transform =
              "scale3d(" + scale + "," + scale + ",1)";
          },

          /** @param {Event=} event */
          downAction: function(event) {
            var xCenter = this.containerMetrics.width / 2;
            var yCenter = this.containerMetrics.height / 2;
            this.resetInteractionState();
            this.mouseDownStart = Utility.now();

            if (this.center) {
              this.xStart = xCenter;
              this.yStart = yCenter;
              this.slideDistance = Utility.distance(
                this.xStart,
                this.yStart,
                this.xEnd,
                this.yEnd
              );
            } else {
              this.xStart = event
                ? event.detail.x - this.containerMetrics.boundingRect.left
                : this.containerMetrics.width / 2;
              this.yStart = event
                ? event.detail.y - this.containerMetrics.boundingRect.top
                : this.containerMetrics.height / 2;
            }

            if (this.recenters) {
              this.xEnd = xCenter;
              this.yEnd = yCenter;
              this.slideDistance = Utility.distance(
                this.xStart,
                this.yStart,
                this.xEnd,
                this.yEnd
              );
            }

            this.maxRadius = this.containerMetrics.furthestCornerDistanceFrom(
              this.xStart,
              this.yStart
            );
            this.waveContainer.style.top =
              (this.containerMetrics.height - this.containerMetrics.size) / 2 +
              "px";
            this.waveContainer.style.left =
              (this.containerMetrics.width - this.containerMetrics.size) / 2 +
              "px";
            this.waveContainer.style.width = this.containerMetrics.size + "px";
            this.waveContainer.style.height = this.containerMetrics.size + "px";
          },

          /** @param {Event=} event */
          upAction: function(event) {
            if (!this.isMouseDown) {
              return;
            }

            this.mouseUpStart = Utility.now();
          },
          remove: function() {
            Object(
              _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__[
                "dom"
              ]
            )(this.waveContainer.parentNode).removeChild(this.waveContainer);
          },
        };
        /**
Material design: [Surface
reaction](https://www.google.com/design/spec/animation/responsive-interaction.html#responsive-interaction-surface-reaction)

`paper-ripple` provides a visual effect that other paper elements can
use to simulate a rippling effect emanating from the point of contact.  The
effect can be visualized as a concentric circle with motion.

Example:

    <div style="position:relative">
      <paper-ripple></paper-ripple>
    </div>

Note, it's important that the parent container of the ripple be relative
position, otherwise the ripple will emanate outside of the desired container.

`paper-ripple` listens to "mousedown" and "mouseup" events so it would display
ripple effect when touches on it.  You can also defeat the default behavior and
manually route the down and up actions to the ripple element.  Note that it is
important if you call `downAction()` you will have to make sure to call
`upAction()` so that `paper-ripple` would end the animation loop.

Example:

    <paper-ripple id="ripple" style="pointer-events: none;"></paper-ripple>
    ...
    downAction: function(e) {
      this.$.ripple.downAction(e.detail);
    },
    upAction: function(e) {
      this.$.ripple.upAction();
    }

Styling ripple effect:

  Use CSS color property to style the ripple:

    paper-ripple {
      color: #4285f4;
    }

  Note that CSS color property is inherited so it is not required to set it on
  the `paper-ripple` element directly.

By default, the ripple is centered on the point of contact.  Apply the
`recenters` attribute to have the ripple grow toward the center of its
container.

    <paper-ripple recenters></paper-ripple>

You can also  center the ripple inside its container from the start.

    <paper-ripple center></paper-ripple>

Apply `circle` class to make the rippling effect within a circle.

    <paper-ripple class="circle"></paper-ripple>

@group Paper Elements
@element paper-ripple
@hero hero.svg
@demo demo/index.html
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__[
            "Polymer"
          ]
        )({
          _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__[
            "html"
          ]`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,
          is: "paper-ripple",
          behaviors: [
            _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__[
              "IronA11yKeysBehavior"
            ],
          ],
          properties: {
            /**
             * The initial opacity set on the wave.
             *
             * @attribute initialOpacity
             * @type number
             * @default 0.25
             */
            initialOpacity: {
              type: Number,
              value: 0.25,
            },

            /**
             * How fast (opacity per second) the wave fades out.
             *
             * @attribute opacityDecayVelocity
             * @type number
             * @default 0.8
             */
            opacityDecayVelocity: {
              type: Number,
              value: 0.8,
            },

            /**
             * If true, ripples will exhibit a gravitational pull towards
             * the center of their container as they fade away.
             *
             * @attribute recenters
             * @type boolean
             * @default false
             */
            recenters: {
              type: Boolean,
              value: false,
            },

            /**
             * If true, ripples will center inside its container
             *
             * @attribute recenters
             * @type boolean
             * @default false
             */
            center: {
              type: Boolean,
              value: false,
            },

            /**
             * A list of the visual ripples.
             *
             * @attribute ripples
             * @type Array
             * @default []
             */
            ripples: {
              type: Array,
              value: function() {
                return [];
              },
            },

            /**
             * True when there are visible ripples animating within the
             * element.
             */
            animating: {
              type: Boolean,
              readOnly: true,
              reflectToAttribute: true,
              value: false,
            },

            /**
             * If true, the ripple will remain in the "down" state until `holdDown`
             * is set to false again.
             */
            holdDown: {
              type: Boolean,
              value: false,
              observer: "_holdDownChanged",
            },

            /**
             * If true, the ripple will not generate a ripple effect
             * via pointer interaction.
             * Calling ripple's imperative api like `simulatedRipple` will
             * still generate the ripple effect.
             */
            noink: {
              type: Boolean,
              value: false,
            },
            _animating: {
              type: Boolean,
            },
            _boundAnimate: {
              type: Function,
              value: function() {
                return this.animate.bind(this);
              },
            },
          },

          get target() {
            return this.keyEventTarget;
          },

          /**
           * @type {!Object}
           */
          keyBindings: {
            "enter:keydown": "_onEnterKeydown",
            "space:keydown": "_onSpaceKeydown",
            "space:keyup": "_onSpaceKeyup",
          },
          attached: function() {
            // Set up a11yKeysBehavior to listen to key events on the target,
            // so that space and enter activate the ripple even if the target doesn't
            // handle key events. The key handlers deal with `noink` themselves.
            if (this.parentNode.nodeType == 11) {
              // DOCUMENT_FRAGMENT_NODE
              this.keyEventTarget = Object(
                _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__[
                  "dom"
                ]
              )(this).getOwnerRoot().host;
            } else {
              this.keyEventTarget = this.parentNode;
            }

            var keyEventTarget =
              /** @type {!EventTarget} */
              this.keyEventTarget;
            this.listen(keyEventTarget, "up", "uiUpAction");
            this.listen(keyEventTarget, "down", "uiDownAction");
          },
          detached: function() {
            this.unlisten(this.keyEventTarget, "up", "uiUpAction");
            this.unlisten(this.keyEventTarget, "down", "uiDownAction");
            this.keyEventTarget = null;
          },

          get shouldKeepAnimating() {
            for (var index = 0; index < this.ripples.length; ++index) {
              if (!this.ripples[index].isAnimationComplete) {
                return true;
              }
            }

            return false;
          },

          simulatedRipple: function() {
            this.downAction(null); // Please see polymer/polymer#1305

            this.async(function() {
              this.upAction();
            }, 1);
          },

          /**
           * Provokes a ripple down effect via a UI event,
           * respecting the `noink` property.
           * @param {Event=} event
           */
          uiDownAction: function(event) {
            if (!this.noink) {
              this.downAction(event);
            }
          },

          /**
           * Provokes a ripple down effect via a UI event,
           * *not* respecting the `noink` property.
           * @param {Event=} event
           */
          downAction: function(event) {
            if (this.holdDown && this.ripples.length > 0) {
              return;
            }

            var ripple = this.addRipple();
            ripple.downAction(event);

            if (!this._animating) {
              this._animating = true;
              this.animate();
            }
          },

          /**
           * Provokes a ripple up effect via a UI event,
           * respecting the `noink` property.
           * @param {Event=} event
           */
          uiUpAction: function(event) {
            if (!this.noink) {
              this.upAction(event);
            }
          },

          /**
           * Provokes a ripple up effect via a UI event,
           * *not* respecting the `noink` property.
           * @param {Event=} event
           */
          upAction: function(event) {
            if (this.holdDown) {
              return;
            }

            this.ripples.forEach(function(ripple) {
              ripple.upAction(event);
            });
            this._animating = true;
            this.animate();
          },
          onAnimationComplete: function() {
            this._animating = false;
            this.$.background.style.backgroundColor = null;
            this.fire("transitionend");
          },
          addRipple: function() {
            var ripple = new Ripple(this);
            Object(
              _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__[
                "dom"
              ]
            )(this.$.waves).appendChild(ripple.waveContainer);
            this.$.background.style.backgroundColor = ripple.color;
            this.ripples.push(ripple);

            this._setAnimating(true);

            return ripple;
          },
          removeRipple: function(ripple) {
            var rippleIndex = this.ripples.indexOf(ripple);

            if (rippleIndex < 0) {
              return;
            }

            this.ripples.splice(rippleIndex, 1);
            ripple.remove();

            if (!this.ripples.length) {
              this._setAnimating(false);
            }
          },

          /**
           * Deprecated. Please use animateRipple() instead.
           *
           * This method name conflicts with Element#animate().
           * https://developer.mozilla.org/en-US/docs/Web/API/Element/animate.
           *
           * @suppress {checkTypes}
           */
          animate: function() {
            if (!this._animating) {
              return;
            }

            var index;
            var ripple;

            for (index = 0; index < this.ripples.length; ++index) {
              ripple = this.ripples[index];
              ripple.draw();
              this.$.background.style.opacity = ripple.outerOpacity;

              if (
                ripple.isOpacityFullyDecayed &&
                !ripple.isRestingAtMaxRadius
              ) {
                this.removeRipple(ripple);
              }
            }

            if (!this.shouldKeepAnimating && this.ripples.length === 0) {
              this.onAnimationComplete();
            } else {
              window.requestAnimationFrame(this._boundAnimate);
            }
          },

          /**
           * An alias for animate() whose name does not conflict with the platform
           * Element.animate() method.
           */
          animateRipple: function() {
            return this.animate();
          },
          _onEnterKeydown: function() {
            this.uiDownAction();
            this.async(this.uiUpAction, 1);
          },
          _onSpaceKeydown: function() {
            this.uiDownAction();
          },
          _onSpaceKeyup: function() {
            this.uiUpAction();
          },
          // note: holdDown does not respect noink since it can be a focus based
          // effect.
          _holdDownChanged: function(newVal, oldVal) {
            if (oldVal === undefined) {
              return;
            }

            if (newVal) {
              this.downAction();
            } else {
              this.upAction();
            }
          },
          /**
  Fired when the animation finishes.
  This is useful if you want to wait until
  the ripple animation finishes to perform some action.
   @event transitionend
  @param {{node: Object}} detail Contains the animated node.
  */
        });

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+bW9yZS1pbmZvLWRpYWxvZ35vbmJvYXJkaW5nLWNvcmUtY29uZmlnLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tYnV0dG9uLXN0YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItaW5reS1mb2N1cy1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItcmlwcGxlL3BhcGVyLXJpcHBsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJy4vaXJvbi1jb250cm9sLXN0YXRlLmpzJztcblxuaW1wb3J0IHtJcm9uQTExeUtleXNCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5cbi8qKlxuICogQGRlbW8gZGVtby9pbmRleC5odG1sXG4gKiBAcG9seW1lckJlaGF2aW9yIElyb25CdXR0b25TdGF0ZVxuICovXG5leHBvcnQgY29uc3QgSXJvbkJ1dHRvblN0YXRlSW1wbCA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgdXNlciBpcyBjdXJyZW50bHkgaG9sZGluZyBkb3duIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgcHJlc3NlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfcHJlc3NlZENoYW5nZWQnXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBidXR0b24gdG9nZ2xlcyB0aGUgYWN0aXZlIHN0YXRlIHdpdGggZWFjaCB0YXAgb3IgcHJlc3NcbiAgICAgKiBvZiB0aGUgc3BhY2ViYXIuXG4gICAgICovXG4gICAgdG9nZ2xlczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBidXR0b24gaXMgYSB0b2dnbGUgYW5kIGlzIGN1cnJlbnRseSBpbiB0aGUgYWN0aXZlIHN0YXRlLlxuICAgICAqL1xuICAgIGFjdGl2ZTpcbiAgICAgICAge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgbm90aWZ5OiB0cnVlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBjdXJyZW50bHkgYmVpbmcgcHJlc3NlZCBieSBhIFwicG9pbnRlcixcIiB3aGljaFxuICAgICAqIGlzIGxvb3NlbHkgZGVmaW5lZCBhcyBtb3VzZSBvciB0b3VjaCBpbnB1dCAoYnV0IHNwZWNpZmljYWxseSBleGNsdWRpbmdcbiAgICAgKiBrZXlib2FyZCBpbnB1dCkuXG4gICAgICovXG4gICAgcG9pbnRlckRvd246IHt0eXBlOiBCb29sZWFuLCByZWFkT25seTogdHJ1ZSwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGlucHV0IGRldmljZSB0aGF0IGNhdXNlZCB0aGUgZWxlbWVudCB0byByZWNlaXZlIGZvY3VzXG4gICAgICogd2FzIGEga2V5Ym9hcmQuXG4gICAgICovXG4gICAgcmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZDoge3R5cGU6IEJvb2xlYW4sIHJlYWRPbmx5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcmlhIGF0dHJpYnV0ZSB0byBiZSBzZXQgaWYgdGhlIGJ1dHRvbiBpcyBhIHRvZ2dsZSBhbmQgaW4gdGhlXG4gICAgICogYWN0aXZlIHN0YXRlLlxuICAgICAqL1xuICAgIGFyaWFBY3RpdmVBdHRyaWJ1dGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnYXJpYS1wcmVzc2VkJyxcbiAgICAgIG9ic2VydmVyOiAnX2FyaWFBY3RpdmVBdHRyaWJ1dGVDaGFuZ2VkJ1xuICAgIH1cbiAgfSxcblxuICBsaXN0ZW5lcnM6IHtkb3duOiAnX2Rvd25IYW5kbGVyJywgdXA6ICdfdXBIYW5kbGVyJywgdGFwOiAnX3RhcEhhbmRsZXInfSxcblxuICBvYnNlcnZlcnM6XG4gICAgICBbJ19mb2N1c0NoYW5nZWQoZm9jdXNlZCknLCAnX2FjdGl2ZUNoYW5nZWQoYWN0aXZlLCBhcmlhQWN0aXZlQXR0cmlidXRlKSddLFxuXG4gIC8qKlxuICAgKiBAdHlwZSB7IU9iamVjdH1cbiAgICovXG4gIGtleUJpbmRpbmdzOiB7XG4gICAgJ2VudGVyOmtleWRvd24nOiAnX2FzeW5jQ2xpY2snLFxuICAgICdzcGFjZTprZXlkb3duJzogJ19zcGFjZUtleURvd25IYW5kbGVyJyxcbiAgICAnc3BhY2U6a2V5dXAnOiAnX3NwYWNlS2V5VXBIYW5kbGVyJyxcbiAgfSxcblxuICBfbW91c2VFdmVudFJlOiAvXm1vdXNlLyxcblxuICBfdGFwSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMudG9nZ2xlcykge1xuICAgICAgLy8gYSB0YXAgaXMgbmVlZGVkIHRvIHRvZ2dsZSB0aGUgYWN0aXZlIHN0YXRlXG4gICAgICB0aGlzLl91c2VyQWN0aXZhdGUoIXRoaXMuYWN0aXZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgX2ZvY3VzQ2hhbmdlZDogZnVuY3Rpb24oZm9jdXNlZCkge1xuICAgIHRoaXMuX2RldGVjdEtleWJvYXJkRm9jdXMoZm9jdXNlZCk7XG5cbiAgICBpZiAoIWZvY3VzZWQpIHtcbiAgICAgIHRoaXMuX3NldFByZXNzZWQoZmFsc2UpO1xuICAgIH1cbiAgfSxcblxuICBfZGV0ZWN0S2V5Ym9hcmRGb2N1czogZnVuY3Rpb24oZm9jdXNlZCkge1xuICAgIHRoaXMuX3NldFJlY2VpdmVkRm9jdXNGcm9tS2V5Ym9hcmQoIXRoaXMucG9pbnRlckRvd24gJiYgZm9jdXNlZCk7XG4gIH0sXG5cbiAgLy8gdG8gZW11bGF0ZSBuYXRpdmUgY2hlY2tib3gsIChkZS0pYWN0aXZhdGlvbnMgZnJvbSBhIHVzZXIgaW50ZXJhY3Rpb24gZmlyZVxuICAvLyAnY2hhbmdlJyBldmVudHNcbiAgX3VzZXJBY3RpdmF0ZTogZnVuY3Rpb24oYWN0aXZlKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICAgICAgdGhpcy5maXJlKCdjaGFuZ2UnKTtcbiAgICB9XG4gIH0sXG5cbiAgX2Rvd25IYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX3NldFBvaW50ZXJEb3duKHRydWUpO1xuICAgIHRoaXMuX3NldFByZXNzZWQodHJ1ZSk7XG4gICAgdGhpcy5fc2V0UmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZChmYWxzZSk7XG4gIH0sXG5cbiAgX3VwSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2V0UG9pbnRlckRvd24oZmFsc2UpO1xuICAgIHRoaXMuX3NldFByZXNzZWQoZmFsc2UpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFLZXlib2FyZEV2ZW50fSBldmVudCAuXG4gICAqL1xuICBfc3BhY2VLZXlEb3duSGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIga2V5Ym9hcmRFdmVudCA9IGV2ZW50LmRldGFpbC5rZXlib2FyZEV2ZW50O1xuICAgIHZhciB0YXJnZXQgPSBkb20oa2V5Ym9hcmRFdmVudCkubG9jYWxUYXJnZXQ7XG5cbiAgICAvLyBJZ25vcmUgdGhlIGV2ZW50IGlmIHRoaXMgaXMgY29taW5nIGZyb20gYSBmb2N1c2VkIGxpZ2h0IGNoaWxkLCBzaW5jZSB0aGF0XG4gICAgLy8gZWxlbWVudCB3aWxsIGRlYWwgd2l0aCBpdC5cbiAgICBpZiAodGhpcy5pc0xpZ2h0RGVzY2VuZGFudCgvKiogQHR5cGUge05vZGV9ICovICh0YXJnZXQpKSlcbiAgICAgIHJldHVybjtcblxuICAgIGtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBrZXlib2FyZEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX3NldFByZXNzZWQodHJ1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUtleWJvYXJkRXZlbnR9IGV2ZW50IC5cbiAgICovXG4gIF9zcGFjZUtleVVwSGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIga2V5Ym9hcmRFdmVudCA9IGV2ZW50LmRldGFpbC5rZXlib2FyZEV2ZW50O1xuICAgIHZhciB0YXJnZXQgPSBkb20oa2V5Ym9hcmRFdmVudCkubG9jYWxUYXJnZXQ7XG5cbiAgICAvLyBJZ25vcmUgdGhlIGV2ZW50IGlmIHRoaXMgaXMgY29taW5nIGZyb20gYSBmb2N1c2VkIGxpZ2h0IGNoaWxkLCBzaW5jZSB0aGF0XG4gICAgLy8gZWxlbWVudCB3aWxsIGRlYWwgd2l0aCBpdC5cbiAgICBpZiAodGhpcy5pc0xpZ2h0RGVzY2VuZGFudCgvKiogQHR5cGUge05vZGV9ICovICh0YXJnZXQpKSlcbiAgICAgIHJldHVybjtcblxuICAgIGlmICh0aGlzLnByZXNzZWQpIHtcbiAgICAgIHRoaXMuX2FzeW5jQ2xpY2soKTtcbiAgICB9XG4gICAgdGhpcy5fc2V0UHJlc3NlZChmYWxzZSk7XG4gIH0sXG5cbiAgLy8gdHJpZ2dlciBjbGljayBhc3luY2hyb25vdXNseSwgdGhlIGFzeW5jaHJvbnkgaXMgdXNlZnVsIHRvIGFsbG93IG9uZVxuICAvLyBldmVudCBoYW5kbGVyIHRvIHVud2luZCBiZWZvcmUgdHJpZ2dlcmluZyBhbm90aGVyIGV2ZW50XG4gIF9hc3luY0NsaWNrOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFzeW5jKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5jbGljaygpO1xuICAgIH0sIDEpO1xuICB9LFxuXG4gIC8vIGFueSBvZiB0aGVzZSBjaGFuZ2VzIGFyZSBjb25zaWRlcmVkIGEgY2hhbmdlIHRvIGJ1dHRvbiBzdGF0ZVxuXG4gIF9wcmVzc2VkQ2hhbmdlZDogZnVuY3Rpb24ocHJlc3NlZCkge1xuICAgIHRoaXMuX2NoYW5nZWRCdXR0b25TdGF0ZSgpO1xuICB9LFxuXG4gIF9hcmlhQWN0aXZlQXR0cmlidXRlQ2hhbmdlZDogZnVuY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKG9sZFZhbHVlICYmIG9sZFZhbHVlICE9IHZhbHVlICYmIHRoaXMuaGFzQXR0cmlidXRlKG9sZFZhbHVlKSkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUob2xkVmFsdWUpO1xuICAgIH1cbiAgfSxcblxuICBfYWN0aXZlQ2hhbmdlZDogZnVuY3Rpb24oYWN0aXZlLCBhcmlhQWN0aXZlQXR0cmlidXRlKSB7XG4gICAgaWYgKHRoaXMudG9nZ2xlcykge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUodGhpcy5hcmlhQWN0aXZlQXR0cmlidXRlLCBhY3RpdmUgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUodGhpcy5hcmlhQWN0aXZlQXR0cmlidXRlKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlZEJ1dHRvblN0YXRlKCk7XG4gIH0sXG5cbiAgX2NvbnRyb2xTdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9zZXRQcmVzc2VkKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2hhbmdlZEJ1dHRvblN0YXRlKCk7XG4gICAgfVxuICB9LFxuXG4gIC8vIHByb3ZpZGUgaG9vayBmb3IgZm9sbG93LW9uIGJlaGF2aW9ycyB0byByZWFjdCB0byBidXR0b24tc3RhdGVcblxuICBfY2hhbmdlZEJ1dHRvblN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fYnV0dG9uU3RhdGVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLl9idXR0b25TdGF0ZUNoYW5nZWQoKTsgIC8vIGFic3RyYWN0XG4gICAgfVxuICB9XG5cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgSXJvbkJ1dHRvblN0YXRlID0gW0lyb25BMTF5S2V5c0JlaGF2aW9yLCBJcm9uQnV0dG9uU3RhdGVJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQnV0dG9uU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tYnV0dG9uLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzJztcblxuaW1wb3J0IHtQYXBlclJpcHBsZUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogYFBhcGVySW5reUZvY3VzQmVoYXZpb3JgIGltcGxlbWVudHMgYSByaXBwbGUgd2hlbiB0aGUgZWxlbWVudCBoYXMga2V5Ym9hcmRcbiAqIGZvY3VzLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvckltcGwgPSB7XG4gIG9ic2VydmVyczogWydfZm9jdXNlZENoYW5nZWQocmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCknXSxcblxuICBfZm9jdXNlZENoYW5nZWQ6IGZ1bmN0aW9uKHJlY2VpdmVkRm9jdXNGcm9tS2V5Ym9hcmQpIHtcbiAgICBpZiAocmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCkge1xuICAgICAgdGhpcy5lbnN1cmVSaXBwbGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGFzUmlwcGxlKCkpIHtcbiAgICAgIHRoaXMuX3JpcHBsZS5ob2xkRG93biA9IHJlY2VpdmVkRm9jdXNGcm9tS2V5Ym9hcmQ7XG4gICAgfVxuICB9LFxuXG4gIF9jcmVhdGVSaXBwbGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByaXBwbGUgPSBQYXBlclJpcHBsZUJlaGF2aW9yLl9jcmVhdGVSaXBwbGUoKTtcbiAgICByaXBwbGUuaWQgPSAnaW5rJztcbiAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdjZW50ZXInLCAnJyk7XG4gICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xuICAgIHJldHVybiByaXBwbGU7XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvciA9IFtcbiAgSXJvbkJ1dHRvblN0YXRlLFxuICBJcm9uQ29udHJvbFN0YXRlLFxuICBQYXBlclJpcHBsZUJlaGF2aW9yLFxuICBQYXBlcklua3lGb2N1c0JlaGF2aW9ySW1wbFxuXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItcmlwcGxlL3BhcGVyLXJpcHBsZS5qcyc7XG5cbmltcG9ydCB7SXJvbkJ1dHRvblN0YXRlSW1wbH0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5cbi8qKlxuICogYFBhcGVyUmlwcGxlQmVoYXZpb3JgIGR5bmFtaWNhbGx5IGltcGxlbWVudHMgYSByaXBwbGUgd2hlbiB0aGUgZWxlbWVudCBoYXNcbiAqIGZvY3VzIHZpYSBwb2ludGVyIG9yIGtleWJvYXJkLlxuICpcbiAqIE5PVEU6IFRoaXMgYmVoYXZpb3IgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGFuZCBhZnRlclxuICogYElyb25CdXR0b25TdGF0ZWAgYW5kIGBJcm9uQ29udHJvbFN0YXRlYC5cbiAqXG4gKiBAcG9seW1lckJlaGF2aW9yIFBhcGVyUmlwcGxlQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IFBhcGVyUmlwcGxlQmVoYXZpb3IgPSB7XG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgZWxlbWVudCB3aWxsIG5vdCBwcm9kdWNlIGEgcmlwcGxlIGVmZmVjdCB3aGVuIGludGVyYWN0ZWRcbiAgICAgKiB3aXRoIHZpYSB0aGUgcG9pbnRlci5cbiAgICAgKi9cbiAgICBub2luazoge3R5cGU6IEJvb2xlYW4sIG9ic2VydmVyOiAnX25vaW5rQ2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIF9yaXBwbGVDb250YWluZXI6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgYSBgPHBhcGVyLXJpcHBsZT5gIGVsZW1lbnQgaXMgYXZhaWxhYmxlIHdoZW4gdGhlIGVsZW1lbnQgaXNcbiAgICogZm9jdXNlZC5cbiAgICovXG4gIF9idXR0b25TdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuZW5zdXJlUmlwcGxlKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBJbiBhZGRpdGlvbiB0byB0aGUgZnVuY3Rpb25hbGl0eSBwcm92aWRlZCBpbiBgSXJvbkJ1dHRvblN0YXRlYCwgZW5zdXJlc1xuICAgKiBhIHJpcHBsZSBlZmZlY3QgaXMgY3JlYXRlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGluIGEgYHByZXNzZWRgIHN0YXRlLlxuICAgKi9cbiAgX2Rvd25IYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xuICAgIElyb25CdXR0b25TdGF0ZUltcGwuX2Rvd25IYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIGlmICh0aGlzLnByZXNzZWQpIHtcbiAgICAgIHRoaXMuZW5zdXJlUmlwcGxlKGV2ZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhpcyBlbGVtZW50IGNvbnRhaW5zIGEgcmlwcGxlIGVmZmVjdC4gRm9yIHN0YXJ0dXAgZWZmaWNpZW5jeVxuICAgKiB0aGUgcmlwcGxlIGVmZmVjdCBpcyBkeW5hbWljYWxseSBvbiBkZW1hbmQgd2hlbiBuZWVkZWQuXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gb3B0VHJpZ2dlcmluZ0V2ZW50IChvcHRpb25hbCkgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlXG4gICAqIHJpcHBsZS5cbiAgICovXG4gIGVuc3VyZVJpcHBsZTogZnVuY3Rpb24ob3B0VHJpZ2dlcmluZ0V2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmhhc1JpcHBsZSgpKSB7XG4gICAgICB0aGlzLl9yaXBwbGUgPSB0aGlzLl9jcmVhdGVSaXBwbGUoKTtcbiAgICAgIHRoaXMuX3JpcHBsZS5ub2luayA9IHRoaXMubm9pbms7XG4gICAgICB2YXIgcmlwcGxlQ29udGFpbmVyID0gdGhpcy5fcmlwcGxlQ29udGFpbmVyIHx8IHRoaXMucm9vdDtcbiAgICAgIGlmIChyaXBwbGVDb250YWluZXIpIHtcbiAgICAgICAgZG9tKHJpcHBsZUNvbnRhaW5lcikuYXBwZW5kQ2hpbGQodGhpcy5fcmlwcGxlKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRUcmlnZ2VyaW5nRXZlbnQpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGV2ZW50IGhhcHBlbmVkIGluc2lkZSBvZiB0aGUgcmlwcGxlIGNvbnRhaW5lclxuICAgICAgICAvLyBGYWxsIGJhY2sgdG8gaG9zdCBpbnN0ZWFkIG9mIHRoZSByb290IGJlY2F1c2UgZGlzdHJpYnV0ZWQgdGV4dFxuICAgICAgICAvLyBub2RlcyBhcmUgbm90IHZhbGlkIGV2ZW50IHRhcmdldHNcbiAgICAgICAgdmFyIGRvbUNvbnRhaW5lciA9IGRvbSh0aGlzLl9yaXBwbGVDb250YWluZXIgfHwgdGhpcyk7XG4gICAgICAgIHZhciB0YXJnZXQgPSBkb20ob3B0VHJpZ2dlcmluZ0V2ZW50KS5yb290VGFyZ2V0O1xuICAgICAgICBpZiAoZG9tQ29udGFpbmVyLmRlZXBDb250YWlucygvKiogQHR5cGUge05vZGV9ICovICh0YXJnZXQpKSkge1xuICAgICAgICAgIHRoaXMuX3JpcHBsZS51aURvd25BY3Rpb24ob3B0VHJpZ2dlcmluZ0V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYDxwYXBlci1yaXBwbGU+YCBlbGVtZW50IHVzZWQgYnkgdGhpcyBlbGVtZW50IHRvIGNyZWF0ZVxuICAgKiByaXBwbGUgZWZmZWN0cy4gVGhlIGVsZW1lbnQncyByaXBwbGUgaXMgY3JlYXRlZCBvbiBkZW1hbmQsIHdoZW5cbiAgICogbmVjZXNzYXJ5LCBhbmQgY2FsbGluZyB0aGlzIG1ldGhvZCB3aWxsIGZvcmNlIHRoZVxuICAgKiByaXBwbGUgdG8gYmUgY3JlYXRlZC5cbiAgICovXG4gIGdldFJpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5lbnN1cmVSaXBwbGUoKTtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBlbGVtZW50IGN1cnJlbnRseSBjb250YWlucyBhIHJpcHBsZSBlZmZlY3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNSaXBwbGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuX3JpcHBsZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgZWxlbWVudCdzIHJpcHBsZSBlZmZlY3QgdmlhIGNyZWF0aW5nIGEgYDxwYXBlci1yaXBwbGU+YC5cbiAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY3VzdG9taXplIHRoZSByaXBwbGUgZWxlbWVudC5cbiAgICogQHJldHVybiB7IVBhcGVyUmlwcGxlRWxlbWVudH0gUmV0dXJucyBhIGA8cGFwZXItcmlwcGxlPmAgZWxlbWVudC5cbiAgICovXG4gIF9jcmVhdGVSaXBwbGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshUGFwZXJSaXBwbGVFbGVtZW50fSAqLyAoXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhcGVyLXJpcHBsZScpKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSxcblxuICBfbm9pbmtDaGFuZ2VkOiBmdW5jdGlvbihub2luaykge1xuICAgIGlmICh0aGlzLmhhc1JpcHBsZSgpKSB7XG4gICAgICB0aGlzLl9yaXBwbGUubm9pbmsgPSBub2luaztcbiAgICB9XG4gIH1cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTQgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkExMXlLZXlzQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxudmFyIFV0aWxpdHkgPSB7XG4gIGRpc3RhbmNlOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5Mikge1xuICAgIHZhciB4RGVsdGEgPSAoeDEgLSB4Mik7XG4gICAgdmFyIHlEZWx0YSA9ICh5MSAtIHkyKTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoeERlbHRhICogeERlbHRhICsgeURlbHRhICogeURlbHRhKTtcbiAgfSxcblxuICBub3c6IHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID9cbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cuYmluZCh3aW5kb3cucGVyZm9ybWFuY2UpIDpcbiAgICAgIERhdGUubm93XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBFbGVtZW50TWV0cmljcyhlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kaW5nUmVjdC53aWR0aDtcbiAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kaW5nUmVjdC5oZWlnaHQ7XG5cbiAgdGhpcy5zaXplID0gTWF0aC5tYXgodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xufVxuXG5FbGVtZW50TWV0cmljcy5wcm90b3R5cGUgPSB7XG4gIGdldCBib3VuZGluZ1JlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfSxcblxuICBmdXJ0aGVzdENvcm5lckRpc3RhbmNlRnJvbTogZnVuY3Rpb24oeCwgeSkge1xuICAgIHZhciB0b3BMZWZ0ID0gVXRpbGl0eS5kaXN0YW5jZSh4LCB5LCAwLCAwKTtcbiAgICB2YXIgdG9wUmlnaHQgPSBVdGlsaXR5LmRpc3RhbmNlKHgsIHksIHRoaXMud2lkdGgsIDApO1xuICAgIHZhciBib3R0b21MZWZ0ID0gVXRpbGl0eS5kaXN0YW5jZSh4LCB5LCAwLCB0aGlzLmhlaWdodCk7XG4gICAgdmFyIGJvdHRvbVJpZ2h0ID0gVXRpbGl0eS5kaXN0YW5jZSh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICByZXR1cm4gTWF0aC5tYXgodG9wTGVmdCwgdG9wUmlnaHQsIGJvdHRvbUxlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUmlwcGxlKGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgdGhpcy5jb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmNvbG9yO1xuXG4gIHRoaXMud2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aGlzLndhdmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGhpcy53YXZlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3I7XG4gIHRoaXMud2F2ZS5jbGFzc0xpc3QuYWRkKCd3YXZlJyk7XG4gIHRoaXMud2F2ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3YXZlLWNvbnRhaW5lcicpO1xuICBkb20odGhpcy53YXZlQ29udGFpbmVyKS5hcHBlbmRDaGlsZCh0aGlzLndhdmUpO1xuXG4gIHRoaXMucmVzZXRJbnRlcmFjdGlvblN0YXRlKCk7XG59XG5cblJpcHBsZS5NQVhfUkFESVVTID0gMzAwO1xuXG5SaXBwbGUucHJvdG90eXBlID0ge1xuICBnZXQgcmVjZW50ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQucmVjZW50ZXJzO1xuICB9LFxuXG4gIGdldCBjZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jZW50ZXI7XG4gIH0sXG5cbiAgZ2V0IG1vdXNlRG93bkVsYXBzZWQoKSB7XG4gICAgdmFyIGVsYXBzZWQ7XG5cbiAgICBpZiAoIXRoaXMubW91c2VEb3duU3RhcnQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGVsYXBzZWQgPSBVdGlsaXR5Lm5vdygpIC0gdGhpcy5tb3VzZURvd25TdGFydDtcblxuICAgIGlmICh0aGlzLm1vdXNlVXBTdGFydCkge1xuICAgICAgZWxhcHNlZCAtPSB0aGlzLm1vdXNlVXBFbGFwc2VkO1xuICAgIH1cblxuICAgIHJldHVybiBlbGFwc2VkO1xuICB9LFxuXG4gIGdldCBtb3VzZVVwRWxhcHNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZVVwU3RhcnQgPyBVdGlsaXR5Lm5vdygpIC0gdGhpcy5tb3VzZVVwU3RhcnQgOiAwO1xuICB9LFxuXG4gIGdldCBtb3VzZURvd25FbGFwc2VkU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZURvd25FbGFwc2VkIC8gMTAwMDtcbiAgfSxcblxuICBnZXQgbW91c2VVcEVsYXBzZWRTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLm1vdXNlVXBFbGFwc2VkIC8gMTAwMDtcbiAgfSxcblxuICBnZXQgbW91c2VJbnRlcmFjdGlvblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VEb3duRWxhcHNlZFNlY29uZHMgKyB0aGlzLm1vdXNlVXBFbGFwc2VkU2Vjb25kcztcbiAgfSxcblxuICBnZXQgaW5pdGlhbE9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5pbml0aWFsT3BhY2l0eTtcbiAgfSxcblxuICBnZXQgb3BhY2l0eURlY2F5VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5vcGFjaXR5RGVjYXlWZWxvY2l0eTtcbiAgfSxcblxuICBnZXQgcmFkaXVzKCkge1xuICAgIHZhciB3aWR0aDIgPSB0aGlzLmNvbnRhaW5lck1ldHJpY3Mud2lkdGggKiB0aGlzLmNvbnRhaW5lck1ldHJpY3Mud2lkdGg7XG4gICAgdmFyIGhlaWdodDIgPSB0aGlzLmNvbnRhaW5lck1ldHJpY3MuaGVpZ2h0ICogdGhpcy5jb250YWluZXJNZXRyaWNzLmhlaWdodDtcbiAgICB2YXIgd2F2ZVJhZGl1cyA9XG4gICAgICAgIE1hdGgubWluKE1hdGguc3FydCh3aWR0aDIgKyBoZWlnaHQyKSwgUmlwcGxlLk1BWF9SQURJVVMpICogMS4xICsgNTtcblxuICAgIHZhciBkdXJhdGlvbiA9IDEuMSAtIDAuMiAqICh3YXZlUmFkaXVzIC8gUmlwcGxlLk1BWF9SQURJVVMpO1xuICAgIHZhciB0aW1lTm93ID0gdGhpcy5tb3VzZUludGVyYWN0aW9uU2Vjb25kcyAvIGR1cmF0aW9uO1xuICAgIHZhciBzaXplID0gd2F2ZVJhZGl1cyAqICgxIC0gTWF0aC5wb3coODAsIC10aW1lTm93KSk7XG5cbiAgICByZXR1cm4gTWF0aC5hYnMoc2l6ZSk7XG4gIH0sXG5cbiAgZ2V0IG9wYWNpdHkoKSB7XG4gICAgaWYgKCF0aGlzLm1vdXNlVXBTdGFydCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbE9wYWNpdHk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgubWF4KFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLmluaXRpYWxPcGFjaXR5IC1cbiAgICAgICAgICAgIHRoaXMubW91c2VVcEVsYXBzZWRTZWNvbmRzICogdGhpcy5vcGFjaXR5RGVjYXlWZWxvY2l0eSk7XG4gIH0sXG5cbiAgZ2V0IG91dGVyT3BhY2l0eSgpIHtcbiAgICAvLyBMaW5lYXIgaW5jcmVhc2UgaW4gYmFja2dyb3VuZCBvcGFjaXR5LCBjYXBwZWQgYXQgdGhlIG9wYWNpdHlcbiAgICAvLyBvZiB0aGUgd2F2ZWZyb250ICh3YXZlT3BhY2l0eSkuXG4gICAgdmFyIG91dGVyT3BhY2l0eSA9IHRoaXMubW91c2VVcEVsYXBzZWRTZWNvbmRzICogMC4zO1xuICAgIHZhciB3YXZlT3BhY2l0eSA9IHRoaXMub3BhY2l0eTtcblxuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihvdXRlck9wYWNpdHksIHdhdmVPcGFjaXR5KSk7XG4gIH0sXG5cbiAgZ2V0IGlzT3BhY2l0eUZ1bGx5RGVjYXllZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcGFjaXR5IDwgMC4wMSAmJlxuICAgICAgICB0aGlzLnJhZGl1cyA+PSBNYXRoLm1pbih0aGlzLm1heFJhZGl1cywgUmlwcGxlLk1BWF9SQURJVVMpO1xuICB9LFxuXG4gIGdldCBpc1Jlc3RpbmdBdE1heFJhZGl1cygpIHtcbiAgICByZXR1cm4gdGhpcy5vcGFjaXR5ID49IHRoaXMuaW5pdGlhbE9wYWNpdHkgJiZcbiAgICAgICAgdGhpcy5yYWRpdXMgPj0gTWF0aC5taW4odGhpcy5tYXhSYWRpdXMsIFJpcHBsZS5NQVhfUkFESVVTKTtcbiAgfSxcblxuICBnZXQgaXNBbmltYXRpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZVVwU3RhcnQgPyB0aGlzLmlzT3BhY2l0eUZ1bGx5RGVjYXllZCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Jlc3RpbmdBdE1heFJhZGl1cztcbiAgfSxcblxuICBnZXQgdHJhbnNsYXRpb25GcmFjdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5taW4oXG4gICAgICAgIDEsIHRoaXMucmFkaXVzIC8gdGhpcy5jb250YWluZXJNZXRyaWNzLnNpemUgKiAyIC8gTWF0aC5zcXJ0KDIpKTtcbiAgfSxcblxuICBnZXQgeE5vdygpIHtcbiAgICBpZiAodGhpcy54RW5kKSB7XG4gICAgICByZXR1cm4gdGhpcy54U3RhcnQgKyB0aGlzLnRyYW5zbGF0aW9uRnJhY3Rpb24gKiAodGhpcy54RW5kIC0gdGhpcy54U3RhcnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnhTdGFydDtcbiAgfSxcblxuICBnZXQgeU5vdygpIHtcbiAgICBpZiAodGhpcy55RW5kKSB7XG4gICAgICByZXR1cm4gdGhpcy55U3RhcnQgKyB0aGlzLnRyYW5zbGF0aW9uRnJhY3Rpb24gKiAodGhpcy55RW5kIC0gdGhpcy55U3RhcnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnlTdGFydDtcbiAgfSxcblxuICBnZXQgaXNNb3VzZURvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VEb3duU3RhcnQgJiYgIXRoaXMubW91c2VVcFN0YXJ0O1xuICB9LFxuXG4gIHJlc2V0SW50ZXJhY3Rpb25TdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYXhSYWRpdXMgPSAwO1xuICAgIHRoaXMubW91c2VEb3duU3RhcnQgPSAwO1xuICAgIHRoaXMubW91c2VVcFN0YXJ0ID0gMDtcblxuICAgIHRoaXMueFN0YXJ0ID0gMDtcbiAgICB0aGlzLnlTdGFydCA9IDA7XG4gICAgdGhpcy54RW5kID0gMDtcbiAgICB0aGlzLnlFbmQgPSAwO1xuICAgIHRoaXMuc2xpZGVEaXN0YW5jZSA9IDA7XG5cbiAgICB0aGlzLmNvbnRhaW5lck1ldHJpY3MgPSBuZXcgRWxlbWVudE1ldHJpY3ModGhpcy5lbGVtZW50KTtcbiAgfSxcblxuICBkcmF3OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NhbGU7XG4gICAgdmFyIGR4O1xuICAgIHZhciBkeTtcblxuICAgIHRoaXMud2F2ZS5zdHlsZS5vcGFjaXR5ID0gdGhpcy5vcGFjaXR5O1xuXG4gICAgc2NhbGUgPSB0aGlzLnJhZGl1cyAvICh0aGlzLmNvbnRhaW5lck1ldHJpY3Muc2l6ZSAvIDIpO1xuICAgIGR4ID0gdGhpcy54Tm93IC0gKHRoaXMuY29udGFpbmVyTWV0cmljcy53aWR0aCAvIDIpO1xuICAgIGR5ID0gdGhpcy55Tm93IC0gKHRoaXMuY29udGFpbmVyTWV0cmljcy5oZWlnaHQgLyAyKTtcblxuXG4gICAgLy8gMmQgdHJhbnNmb3JtIGZvciBzYWZhcmkgYmVjYXVzZSBvZiBib3JkZXItcmFkaXVzIGFuZCBvdmVyZmxvdzpoaWRkZW5cbiAgICAvLyBjbGlwcGluZyBidWcuIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD05ODUzOFxuICAgIHRoaXMud2F2ZUNvbnRhaW5lci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPVxuICAgICAgICAndHJhbnNsYXRlKCcgKyBkeCArICdweCwgJyArIGR5ICsgJ3B4KSc7XG4gICAgdGhpcy53YXZlQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICd0cmFuc2xhdGUzZCgnICsgZHggKyAncHgsICcgKyBkeSArICdweCwgMCknO1xuICAgIHRoaXMud2F2ZS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnc2NhbGUoJyArIHNjYWxlICsgJywnICsgc2NhbGUgKyAnKSc7XG4gICAgdGhpcy53YXZlLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZTNkKCcgKyBzY2FsZSArICcsJyArIHNjYWxlICsgJywxKSc7XG4gIH0sXG5cbiAgLyoqIEBwYXJhbSB7RXZlbnQ9fSBldmVudCAqL1xuICBkb3duQWN0aW9uOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciB4Q2VudGVyID0gdGhpcy5jb250YWluZXJNZXRyaWNzLndpZHRoIC8gMjtcbiAgICB2YXIgeUNlbnRlciA9IHRoaXMuY29udGFpbmVyTWV0cmljcy5oZWlnaHQgLyAyO1xuXG4gICAgdGhpcy5yZXNldEludGVyYWN0aW9uU3RhdGUoKTtcbiAgICB0aGlzLm1vdXNlRG93blN0YXJ0ID0gVXRpbGl0eS5ub3coKTtcblxuICAgIGlmICh0aGlzLmNlbnRlcikge1xuICAgICAgdGhpcy54U3RhcnQgPSB4Q2VudGVyO1xuICAgICAgdGhpcy55U3RhcnQgPSB5Q2VudGVyO1xuICAgICAgdGhpcy5zbGlkZURpc3RhbmNlID1cbiAgICAgICAgICBVdGlsaXR5LmRpc3RhbmNlKHRoaXMueFN0YXJ0LCB0aGlzLnlTdGFydCwgdGhpcy54RW5kLCB0aGlzLnlFbmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnhTdGFydCA9IGV2ZW50ID9cbiAgICAgICAgICBldmVudC5kZXRhaWwueCAtIHRoaXMuY29udGFpbmVyTWV0cmljcy5ib3VuZGluZ1JlY3QubGVmdCA6XG4gICAgICAgICAgdGhpcy5jb250YWluZXJNZXRyaWNzLndpZHRoIC8gMjtcbiAgICAgIHRoaXMueVN0YXJ0ID0gZXZlbnQgP1xuICAgICAgICAgIGV2ZW50LmRldGFpbC55IC0gdGhpcy5jb250YWluZXJNZXRyaWNzLmJvdW5kaW5nUmVjdC50b3AgOlxuICAgICAgICAgIHRoaXMuY29udGFpbmVyTWV0cmljcy5oZWlnaHQgLyAyO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlY2VudGVycykge1xuICAgICAgdGhpcy54RW5kID0geENlbnRlcjtcbiAgICAgIHRoaXMueUVuZCA9IHlDZW50ZXI7XG4gICAgICB0aGlzLnNsaWRlRGlzdGFuY2UgPVxuICAgICAgICAgIFV0aWxpdHkuZGlzdGFuY2UodGhpcy54U3RhcnQsIHRoaXMueVN0YXJ0LCB0aGlzLnhFbmQsIHRoaXMueUVuZCk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXhSYWRpdXMgPSB0aGlzLmNvbnRhaW5lck1ldHJpY3MuZnVydGhlc3RDb3JuZXJEaXN0YW5jZUZyb20oXG4gICAgICAgIHRoaXMueFN0YXJ0LCB0aGlzLnlTdGFydCk7XG5cbiAgICB0aGlzLndhdmVDb250YWluZXIuc3R5bGUudG9wID1cbiAgICAgICAgKHRoaXMuY29udGFpbmVyTWV0cmljcy5oZWlnaHQgLSB0aGlzLmNvbnRhaW5lck1ldHJpY3Muc2l6ZSkgLyAyICsgJ3B4JztcbiAgICB0aGlzLndhdmVDb250YWluZXIuc3R5bGUubGVmdCA9XG4gICAgICAgICh0aGlzLmNvbnRhaW5lck1ldHJpY3Mud2lkdGggLSB0aGlzLmNvbnRhaW5lck1ldHJpY3Muc2l6ZSkgLyAyICsgJ3B4JztcblxuICAgIHRoaXMud2F2ZUNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMuY29udGFpbmVyTWV0cmljcy5zaXplICsgJ3B4JztcbiAgICB0aGlzLndhdmVDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5jb250YWluZXJNZXRyaWNzLnNpemUgKyAncHgnO1xuICB9LFxuXG4gIC8qKiBAcGFyYW0ge0V2ZW50PX0gZXZlbnQgKi9cbiAgdXBBY3Rpb246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzTW91c2VEb3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tb3VzZVVwU3RhcnQgPSBVdGlsaXR5Lm5vdygpO1xuICB9LFxuXG4gIHJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgZG9tKHRoaXMud2F2ZUNvbnRhaW5lci5wYXJlbnROb2RlKS5yZW1vdmVDaGlsZCh0aGlzLndhdmVDb250YWluZXIpO1xuICB9XG59O1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1N1cmZhY2VcbnJlYWN0aW9uXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2FuaW1hdGlvbi9yZXNwb25zaXZlLWludGVyYWN0aW9uLmh0bWwjcmVzcG9uc2l2ZS1pbnRlcmFjdGlvbi1zdXJmYWNlLXJlYWN0aW9uKVxuXG5gcGFwZXItcmlwcGxlYCBwcm92aWRlcyBhIHZpc3VhbCBlZmZlY3QgdGhhdCBvdGhlciBwYXBlciBlbGVtZW50cyBjYW5cbnVzZSB0byBzaW11bGF0ZSBhIHJpcHBsaW5nIGVmZmVjdCBlbWFuYXRpbmcgZnJvbSB0aGUgcG9pbnQgb2YgY29udGFjdC4gIFRoZVxuZWZmZWN0IGNhbiBiZSB2aXN1YWxpemVkIGFzIGEgY29uY2VudHJpYyBjaXJjbGUgd2l0aCBtb3Rpb24uXG5cbkV4YW1wbGU6XG5cbiAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmVcIj5cbiAgICAgIDxwYXBlci1yaXBwbGU+PC9wYXBlci1yaXBwbGU+XG4gICAgPC9kaXY+XG5cbk5vdGUsIGl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIHBhcmVudCBjb250YWluZXIgb2YgdGhlIHJpcHBsZSBiZSByZWxhdGl2ZVxucG9zaXRpb24sIG90aGVyd2lzZSB0aGUgcmlwcGxlIHdpbGwgZW1hbmF0ZSBvdXRzaWRlIG9mIHRoZSBkZXNpcmVkIGNvbnRhaW5lci5cblxuYHBhcGVyLXJpcHBsZWAgbGlzdGVucyB0byBcIm1vdXNlZG93blwiIGFuZCBcIm1vdXNldXBcIiBldmVudHMgc28gaXQgd291bGQgZGlzcGxheVxucmlwcGxlIGVmZmVjdCB3aGVuIHRvdWNoZXMgb24gaXQuICBZb3UgY2FuIGFsc28gZGVmZWF0IHRoZSBkZWZhdWx0IGJlaGF2aW9yIGFuZFxubWFudWFsbHkgcm91dGUgdGhlIGRvd24gYW5kIHVwIGFjdGlvbnMgdG8gdGhlIHJpcHBsZSBlbGVtZW50LiAgTm90ZSB0aGF0IGl0IGlzXG5pbXBvcnRhbnQgaWYgeW91IGNhbGwgYGRvd25BY3Rpb24oKWAgeW91IHdpbGwgaGF2ZSB0byBtYWtlIHN1cmUgdG8gY2FsbFxuYHVwQWN0aW9uKClgIHNvIHRoYXQgYHBhcGVyLXJpcHBsZWAgd291bGQgZW5kIHRoZSBhbmltYXRpb24gbG9vcC5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1yaXBwbGUgaWQ9XCJyaXBwbGVcIiBzdHlsZT1cInBvaW50ZXItZXZlbnRzOiBub25lO1wiPjwvcGFwZXItcmlwcGxlPlxuICAgIC4uLlxuICAgIGRvd25BY3Rpb246IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuJC5yaXBwbGUuZG93bkFjdGlvbihlLmRldGFpbCk7XG4gICAgfSxcbiAgICB1cEFjdGlvbjogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy4kLnJpcHBsZS51cEFjdGlvbigpO1xuICAgIH1cblxuU3R5bGluZyByaXBwbGUgZWZmZWN0OlxuXG4gIFVzZSBDU1MgY29sb3IgcHJvcGVydHkgdG8gc3R5bGUgdGhlIHJpcHBsZTpcblxuICAgIHBhcGVyLXJpcHBsZSB7XG4gICAgICBjb2xvcjogIzQyODVmNDtcbiAgICB9XG5cbiAgTm90ZSB0aGF0IENTUyBjb2xvciBwcm9wZXJ0eSBpcyBpbmhlcml0ZWQgc28gaXQgaXMgbm90IHJlcXVpcmVkIHRvIHNldCBpdCBvblxuICB0aGUgYHBhcGVyLXJpcHBsZWAgZWxlbWVudCBkaXJlY3RseS5cblxuQnkgZGVmYXVsdCwgdGhlIHJpcHBsZSBpcyBjZW50ZXJlZCBvbiB0aGUgcG9pbnQgb2YgY29udGFjdC4gIEFwcGx5IHRoZVxuYHJlY2VudGVyc2AgYXR0cmlidXRlIHRvIGhhdmUgdGhlIHJpcHBsZSBncm93IHRvd2FyZCB0aGUgY2VudGVyIG9mIGl0c1xuY29udGFpbmVyLlxuXG4gICAgPHBhcGVyLXJpcHBsZSByZWNlbnRlcnM+PC9wYXBlci1yaXBwbGU+XG5cbllvdSBjYW4gYWxzbyAgY2VudGVyIHRoZSByaXBwbGUgaW5zaWRlIGl0cyBjb250YWluZXIgZnJvbSB0aGUgc3RhcnQuXG5cbiAgICA8cGFwZXItcmlwcGxlIGNlbnRlcj48L3BhcGVyLXJpcHBsZT5cblxuQXBwbHkgYGNpcmNsZWAgY2xhc3MgdG8gbWFrZSB0aGUgcmlwcGxpbmcgZWZmZWN0IHdpdGhpbiBhIGNpcmNsZS5cblxuICAgIDxwYXBlci1yaXBwbGUgY2xhc3M9XCJjaXJjbGVcIj48L3BhcGVyLXJpcHBsZT5cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1yaXBwbGVcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgIC8qIFNlZSBQb2x5bWVyRWxlbWVudHMvcGFwZXItYmVoYXZpb3JzL2lzc3Vlcy8zNC4gT24gbm9uLUNocm9tZSBicm93c2VycyxcbiAgICAgICAgICogY3JlYXRpbmcgYSBub2RlICh3aXRoIGEgcG9zaXRpb246YWJzb2x1dGUpIGluIHRoZSBtaWRkbGUgb2YgYW4gZXZlbnRcbiAgICAgICAgICogaGFuZGxlciBcImludGVycnVwdHNcIiB0aGF0IGV2ZW50IGhhbmRsZXIgKHdoaWNoIGhhcHBlbnMgd2hlbiB0aGVcbiAgICAgICAgICogcmlwcGxlIGlzIGNyZWF0ZWQgb24gZGVtYW5kKSAqL1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2FuaW1hdGluZ10pIHtcbiAgICAgICAgLyogVGhpcyByZXNvbHZlcyBhIHJlbmRlcmluZyBpc3N1ZSBpbiBDaHJvbWUgKGFzIG9mIDQwKSB3aGVyZSB0aGVcbiAgICAgICAgICAgcmlwcGxlIGlzIG5vdCBwcm9wZXJseSBjbGlwcGVkIGJ5IGl0cyBwYXJlbnQgKHdoaWNoIG1heSBoYXZlXG4gICAgICAgICAgIHJvdW5kZWQgY29ybmVycykuIFNlZTogaHR0cDovL2pzYmluLmNvbS90ZW1leGEvNFxuXG4gICAgICAgICAgIE5vdGU6IFdlIG9ubHkgYXBwbHkgdGhpcyBzdHlsZSBjb25kaXRpb25hbGx5LiBPdGhlcndpc2UsIHRoZSBicm93c2VyXG4gICAgICAgICAgIHdpbGwgY3JlYXRlIGEgbmV3IGNvbXBvc2l0aW5nIGxheWVyIGZvciBldmVyeSByaXBwbGUgZWxlbWVudCBvbiB0aGVcbiAgICAgICAgICAgcGFnZSwgYW5kIHRoYXQgd291bGQgYmUgYmFkLiAqL1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICAjYmFja2dyb3VuZCxcbiAgICAgICN3YXZlcyxcbiAgICAgIC53YXZlLWNvbnRhaW5lcixcbiAgICAgIC53YXZlIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAjYmFja2dyb3VuZCxcbiAgICAgIC53YXZlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgI3dhdmVzLFxuICAgICAgLndhdmUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAud2F2ZS1jb250YWluZXIsXG4gICAgICAud2F2ZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmNpcmNsZSkgI2JhY2tncm91bmQsXG4gICAgICA6aG9zdCguY2lyY2xlKSAjd2F2ZXMge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5jaXJjbGUpIC53YXZlLWNvbnRhaW5lciB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cIndhdmVzXCI+PC9kaXY+XG5gLFxuXG4gIGlzOiAncGFwZXItcmlwcGxlJyxcbiAgYmVoYXZpb3JzOiBbSXJvbkExMXlLZXlzQmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBvcGFjaXR5IHNldCBvbiB0aGUgd2F2ZS5cbiAgICAgKlxuICAgICAqIEBhdHRyaWJ1dGUgaW5pdGlhbE9wYWNpdHlcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjI1XG4gICAgICovXG4gICAgaW5pdGlhbE9wYWNpdHk6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAwLjI1fSxcblxuICAgIC8qKlxuICAgICAqIEhvdyBmYXN0IChvcGFjaXR5IHBlciBzZWNvbmQpIHRoZSB3YXZlIGZhZGVzIG91dC5cbiAgICAgKlxuICAgICAqIEBhdHRyaWJ1dGUgb3BhY2l0eURlY2F5VmVsb2NpdHlcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjhcbiAgICAgKi9cbiAgICBvcGFjaXR5RGVjYXlWZWxvY2l0eToge3R5cGU6IE51bWJlciwgdmFsdWU6IDAuOH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCByaXBwbGVzIHdpbGwgZXhoaWJpdCBhIGdyYXZpdGF0aW9uYWwgcHVsbCB0b3dhcmRzXG4gICAgICogdGhlIGNlbnRlciBvZiB0aGVpciBjb250YWluZXIgYXMgdGhleSBmYWRlIGF3YXkuXG4gICAgICpcbiAgICAgKiBAYXR0cmlidXRlIHJlY2VudGVyc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHJlY2VudGVyczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCByaXBwbGVzIHdpbGwgY2VudGVyIGluc2lkZSBpdHMgY29udGFpbmVyXG4gICAgICpcbiAgICAgKiBAYXR0cmlidXRlIHJlY2VudGVyc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGNlbnRlcjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2YgdGhlIHZpc3VhbCByaXBwbGVzLlxuICAgICAqXG4gICAgICogQGF0dHJpYnV0ZSByaXBwbGVzXG4gICAgICogQHR5cGUgQXJyYXlcbiAgICAgKiBAZGVmYXVsdCBbXVxuICAgICAqL1xuICAgIHJpcHBsZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRydWUgd2hlbiB0aGVyZSBhcmUgdmlzaWJsZSByaXBwbGVzIGFuaW1hdGluZyB3aXRoaW4gdGhlXG4gICAgICogZWxlbWVudC5cbiAgICAgKi9cbiAgICBhbmltYXRpbmc6XG4gICAgICAgIHt0eXBlOiBCb29sZWFuLCByZWFkT25seTogdHJ1ZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIHJpcHBsZSB3aWxsIHJlbWFpbiBpbiB0aGUgXCJkb3duXCIgc3RhdGUgdW50aWwgYGhvbGREb3duYFxuICAgICAqIGlzIHNldCB0byBmYWxzZSBhZ2Fpbi5cbiAgICAgKi9cbiAgICBob2xkRG93bjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgb2JzZXJ2ZXI6ICdfaG9sZERvd25DaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgcmlwcGxlIHdpbGwgbm90IGdlbmVyYXRlIGEgcmlwcGxlIGVmZmVjdFxuICAgICAqIHZpYSBwb2ludGVyIGludGVyYWN0aW9uLlxuICAgICAqIENhbGxpbmcgcmlwcGxlJ3MgaW1wZXJhdGl2ZSBhcGkgbGlrZSBgc2ltdWxhdGVkUmlwcGxlYCB3aWxsXG4gICAgICogc3RpbGwgZ2VuZXJhdGUgdGhlIHJpcHBsZSBlZmZlY3QuXG4gICAgICovXG4gICAgbm9pbms6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgX2FuaW1hdGluZzoge3R5cGU6IEJvb2xlYW59LFxuXG4gICAgX2JvdW5kQW5pbWF0ZToge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5rZXlFdmVudFRhcmdldDtcbiAgfSxcblxuICAvKipcbiAgICogQHR5cGUgeyFPYmplY3R9XG4gICAqL1xuICBrZXlCaW5kaW5nczoge1xuICAgICdlbnRlcjprZXlkb3duJzogJ19vbkVudGVyS2V5ZG93bicsXG4gICAgJ3NwYWNlOmtleWRvd24nOiAnX29uU3BhY2VLZXlkb3duJyxcbiAgICAnc3BhY2U6a2V5dXAnOiAnX29uU3BhY2VLZXl1cCdcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gU2V0IHVwIGExMXlLZXlzQmVoYXZpb3IgdG8gbGlzdGVuIHRvIGtleSBldmVudHMgb24gdGhlIHRhcmdldCxcbiAgICAvLyBzbyB0aGF0IHNwYWNlIGFuZCBlbnRlciBhY3RpdmF0ZSB0aGUgcmlwcGxlIGV2ZW4gaWYgdGhlIHRhcmdldCBkb2Vzbid0XG4gICAgLy8gaGFuZGxlIGtleSBldmVudHMuIFRoZSBrZXkgaGFuZGxlcnMgZGVhbCB3aXRoIGBub2lua2AgdGhlbXNlbHZlcy5cbiAgICBpZiAodGhpcy5wYXJlbnROb2RlLm5vZGVUeXBlID09IDExKSB7ICAvLyBET0NVTUVOVF9GUkFHTUVOVF9OT0RFXG4gICAgICB0aGlzLmtleUV2ZW50VGFyZ2V0ID0gZG9tKHRoaXMpLmdldE93bmVyUm9vdCgpLmhvc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMua2V5RXZlbnRUYXJnZXQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHZhciBrZXlFdmVudFRhcmdldCA9IC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAodGhpcy5rZXlFdmVudFRhcmdldCk7XG4gICAgdGhpcy5saXN0ZW4oa2V5RXZlbnRUYXJnZXQsICd1cCcsICd1aVVwQWN0aW9uJyk7XG4gICAgdGhpcy5saXN0ZW4oa2V5RXZlbnRUYXJnZXQsICdkb3duJywgJ3VpRG93bkFjdGlvbicpO1xuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVubGlzdGVuKHRoaXMua2V5RXZlbnRUYXJnZXQsICd1cCcsICd1aVVwQWN0aW9uJyk7XG4gICAgdGhpcy51bmxpc3Rlbih0aGlzLmtleUV2ZW50VGFyZ2V0LCAnZG93bicsICd1aURvd25BY3Rpb24nKTtcbiAgICB0aGlzLmtleUV2ZW50VGFyZ2V0ID0gbnVsbDtcbiAgfSxcblxuICBnZXQgc2hvdWxkS2VlcEFuaW1hdGluZygpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5yaXBwbGVzLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgaWYgKCF0aGlzLnJpcHBsZXNbaW5kZXhdLmlzQW5pbWF0aW9uQ29tcGxldGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIHNpbXVsYXRlZFJpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kb3duQWN0aW9uKG51bGwpO1xuXG4gICAgLy8gUGxlYXNlIHNlZSBwb2x5bWVyL3BvbHltZXIjMTMwNVxuICAgIHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnVwQWN0aW9uKCk7XG4gICAgfSwgMSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFByb3Zva2VzIGEgcmlwcGxlIGRvd24gZWZmZWN0IHZpYSBhIFVJIGV2ZW50LFxuICAgKiByZXNwZWN0aW5nIHRoZSBgbm9pbmtgIHByb3BlcnR5LlxuICAgKiBAcGFyYW0ge0V2ZW50PX0gZXZlbnRcbiAgICovXG4gIHVpRG93bkFjdGlvbjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMubm9pbmspIHtcbiAgICAgIHRoaXMuZG93bkFjdGlvbihldmVudCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBQcm92b2tlcyBhIHJpcHBsZSBkb3duIGVmZmVjdCB2aWEgYSBVSSBldmVudCxcbiAgICogKm5vdCogcmVzcGVjdGluZyB0aGUgYG5vaW5rYCBwcm9wZXJ0eS5cbiAgICogQHBhcmFtIHtFdmVudD19IGV2ZW50XG4gICAqL1xuICBkb3duQWN0aW9uOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLmhvbGREb3duICYmIHRoaXMucmlwcGxlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJpcHBsZSA9IHRoaXMuYWRkUmlwcGxlKCk7XG5cbiAgICByaXBwbGUuZG93bkFjdGlvbihldmVudCk7XG5cbiAgICBpZiAoIXRoaXMuX2FuaW1hdGluZykge1xuICAgICAgdGhpcy5fYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUHJvdm9rZXMgYSByaXBwbGUgdXAgZWZmZWN0IHZpYSBhIFVJIGV2ZW50LFxuICAgKiByZXNwZWN0aW5nIHRoZSBgbm9pbmtgIHByb3BlcnR5LlxuICAgKiBAcGFyYW0ge0V2ZW50PX0gZXZlbnRcbiAgICovXG4gIHVpVXBBY3Rpb246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm5vaW5rKSB7XG4gICAgICB0aGlzLnVwQWN0aW9uKGV2ZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFByb3Zva2VzIGEgcmlwcGxlIHVwIGVmZmVjdCB2aWEgYSBVSSBldmVudCxcbiAgICogKm5vdCogcmVzcGVjdGluZyB0aGUgYG5vaW5rYCBwcm9wZXJ0eS5cbiAgICogQHBhcmFtIHtFdmVudD19IGV2ZW50XG4gICAqL1xuICB1cEFjdGlvbjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5ob2xkRG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmlwcGxlcy5mb3JFYWNoKGZ1bmN0aW9uKHJpcHBsZSkge1xuICAgICAgcmlwcGxlLnVwQWN0aW9uKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2FuaW1hdGluZyA9IHRydWU7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gIH0sXG5cbiAgb25BbmltYXRpb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy4kLmJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbnVsbDtcbiAgICB0aGlzLmZpcmUoJ3RyYW5zaXRpb25lbmQnKTtcbiAgfSxcblxuICBhZGRSaXBwbGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByaXBwbGUgPSBuZXcgUmlwcGxlKHRoaXMpO1xuXG4gICAgZG9tKHRoaXMuJC53YXZlcykuYXBwZW5kQ2hpbGQocmlwcGxlLndhdmVDb250YWluZXIpO1xuICAgIHRoaXMuJC5iYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJpcHBsZS5jb2xvcjtcbiAgICB0aGlzLnJpcHBsZXMucHVzaChyaXBwbGUpO1xuXG4gICAgdGhpcy5fc2V0QW5pbWF0aW5nKHRydWUpO1xuXG4gICAgcmV0dXJuIHJpcHBsZTtcbiAgfSxcblxuICByZW1vdmVSaXBwbGU6IGZ1bmN0aW9uKHJpcHBsZSkge1xuICAgIHZhciByaXBwbGVJbmRleCA9IHRoaXMucmlwcGxlcy5pbmRleE9mKHJpcHBsZSk7XG5cbiAgICBpZiAocmlwcGxlSW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yaXBwbGVzLnNwbGljZShyaXBwbGVJbmRleCwgMSk7XG5cbiAgICByaXBwbGUucmVtb3ZlKCk7XG5cbiAgICBpZiAoIXRoaXMucmlwcGxlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3NldEFuaW1hdGluZyhmYWxzZSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBEZXByZWNhdGVkLiBQbGVhc2UgdXNlIGFuaW1hdGVSaXBwbGUoKSBpbnN0ZWFkLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBuYW1lIGNvbmZsaWN0cyB3aXRoIEVsZW1lbnQjYW5pbWF0ZSgpLlxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9hbmltYXRlLlxuICAgKlxuICAgKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9XG4gICAqL1xuICBhbmltYXRlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX2FuaW1hdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaW5kZXg7XG4gICAgdmFyIHJpcHBsZTtcblxuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRoaXMucmlwcGxlcy5sZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgIHJpcHBsZSA9IHRoaXMucmlwcGxlc1tpbmRleF07XG5cbiAgICAgIHJpcHBsZS5kcmF3KCk7XG5cbiAgICAgIHRoaXMuJC5iYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSByaXBwbGUub3V0ZXJPcGFjaXR5O1xuXG4gICAgICBpZiAocmlwcGxlLmlzT3BhY2l0eUZ1bGx5RGVjYXllZCAmJiAhcmlwcGxlLmlzUmVzdGluZ0F0TWF4UmFkaXVzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUmlwcGxlKHJpcHBsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnNob3VsZEtlZXBBbmltYXRpbmcgJiYgdGhpcy5yaXBwbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYm91bmRBbmltYXRlKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFuIGFsaWFzIGZvciBhbmltYXRlKCkgd2hvc2UgbmFtZSBkb2VzIG5vdCBjb25mbGljdCB3aXRoIHRoZSBwbGF0Zm9ybVxuICAgKiBFbGVtZW50LmFuaW1hdGUoKSBtZXRob2QuXG4gICAqL1xuICBhbmltYXRlUmlwcGxlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRlKCk7XG4gIH0sXG5cbiAgX29uRW50ZXJLZXlkb3duOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVpRG93bkFjdGlvbigpO1xuICAgIHRoaXMuYXN5bmModGhpcy51aVVwQWN0aW9uLCAxKTtcbiAgfSxcblxuICBfb25TcGFjZUtleWRvd246IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudWlEb3duQWN0aW9uKCk7XG4gIH0sXG5cbiAgX29uU3BhY2VLZXl1cDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy51aVVwQWN0aW9uKCk7XG4gIH0sXG5cbiAgLy8gbm90ZTogaG9sZERvd24gZG9lcyBub3QgcmVzcGVjdCBub2luayBzaW5jZSBpdCBjYW4gYmUgYSBmb2N1cyBiYXNlZFxuICAvLyBlZmZlY3QuXG4gIF9ob2xkRG93bkNoYW5nZWQ6IGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgaWYgKG9sZFZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuZG93bkFjdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwQWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gIEZpcmVkIHdoZW4gdGhlIGFuaW1hdGlvbiBmaW5pc2hlcy5cbiAgVGhpcyBpcyB1c2VmdWwgaWYgeW91IHdhbnQgdG8gd2FpdCB1bnRpbFxuICB0aGUgcmlwcGxlIGFuaW1hdGlvbiBmaW5pc2hlcyB0byBwZXJmb3JtIHNvbWUgYWN0aW9uLlxuXG4gIEBldmVudCB0cmFuc2l0aW9uZW5kXG4gIEBwYXJhbSB7e25vZGU6IE9iamVjdH19IGRldGFpbCBDb250YWlucyB0aGUgYW5pbWF0ZWQgbm9kZS5cbiAgKi9cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUExQ0E7QUFpREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBMUxBO0FBOExBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDbk5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFxQkE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBREE7QUFWQTtBQUNBO0FBY0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsR0E7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVJBO0FBYUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFaQTtBQWVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFsTkE7QUFxTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQXlFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQTNFQTtBQUNBO0FBa0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQXJYQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
