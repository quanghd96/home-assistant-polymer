(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["vendors~dialog-config-flow~more-info-dialog"],
  {
    /***/ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js ***!
  \**********************************************************************************/
      /*! exports provided: IronResizableBehavior */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "IronResizableBehavior",
          function() {
            return IronResizableBehavior;
          }
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/settings.js */ "./node_modules/@polymer/polymer/lib/utils/settings.js"
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

        // Contains all connected resizables that do not have a parent.

        var ORPHANS = new Set();
        /**
         * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
         * coordinate the flow of resize events between "resizers" (elements that
         *control the size or hidden state of their children) and "resizables" (elements
         *that need to be notified when they are resized or un-hidden by their parents
         *in order to take action on their new measurements).
         *
         * Elements that perform measurement should add the `IronResizableBehavior`
         *behavior to their element definition and listen for the `iron-resize` event on
         *themselves. This event will be fired when they become showing after having
         *been hidden, when they are resized explicitly by another resizable, or when
         *the window has been resized.
         *
         * Note, the `iron-resize` event is non-bubbling.
         *
         * @polymerBehavior
         * @demo demo/index.html
         **/

        const IronResizableBehavior = {
          properties: {
            /**
             * The closest ancestor element that implements `IronResizableBehavior`.
             */
            _parentResizable: {
              type: Object,
              observer: "_parentResizableChanged",
            },

            /**
             * True if this element is currently notifying its descendant elements of
             * resize.
             */
            _notifyingDescendant: {
              type: Boolean,
              value: false,
            },
          },
          listeners: {
            "iron-request-resize-notifications":
              "_onIronRequestResizeNotifications",
          },
          created: function() {
            // We don't really need property effects on these, and also we want them
            // to be created before the `_parentResizable` observer fires:
            this._interestedResizables = [];
            this._boundNotifyResize = this.notifyResize.bind(this);
            this._boundOnDescendantIronResize = this._onDescendantIronResize.bind(
              this
            );
          },
          attached: function() {
            this._requestResizeNotifications();
          },
          detached: function() {
            if (this._parentResizable) {
              this._parentResizable.stopResizeNotificationsFor(this);
            } else {
              ORPHANS.delete(this);
              window.removeEventListener("resize", this._boundNotifyResize);
            }

            this._parentResizable = null;
          },

          /**
           * Can be called to manually notify a resizable and its descendant
           * resizables of a resize change.
           */
          notifyResize: function() {
            if (!this.isAttached) {
              return;
            }

            this._interestedResizables.forEach(function(resizable) {
              if (this.resizerShouldNotify(resizable)) {
                this._notifyDescendant(resizable);
              }
            }, this);

            this._fireResize();
          },

          /**
           * Used to assign the closest resizable ancestor to this resizable
           * if the ancestor detects a request for notifications.
           */
          assignParentResizable: function(parentResizable) {
            if (this._parentResizable) {
              this._parentResizable.stopResizeNotificationsFor(this);
            }

            this._parentResizable = parentResizable;

            if (
              parentResizable &&
              parentResizable._interestedResizables.indexOf(this) === -1
            ) {
              parentResizable._interestedResizables.push(this);

              parentResizable._subscribeIronResize(this);
            }
          },

          /**
           * Used to remove a resizable descendant from the list of descendants
           * that should be notified of a resize change.
           */
          stopResizeNotificationsFor: function(target) {
            var index = this._interestedResizables.indexOf(target);

            if (index > -1) {
              this._interestedResizables.splice(index, 1);

              this._unsubscribeIronResize(target);
            }
          },

          /**
           * Subscribe this element to listen to iron-resize events on the given target.
           *
           * Preferred over target.listen because the property renamer does not
           * understand to rename when the target is not specifically "this"
           *
           * @param {!HTMLElement} target Element to listen to for iron-resize events.
           */
          _subscribeIronResize: function(target) {
            target.addEventListener(
              "iron-resize",
              this._boundOnDescendantIronResize
            );
          },

          /**
           * Unsubscribe this element from listening to to iron-resize events on the
           * given target.
           *
           * Preferred over target.unlisten because the property renamer does not
           * understand to rename when the target is not specifically "this"
           *
           * @param {!HTMLElement} target Element to listen to for iron-resize events.
           */
          _unsubscribeIronResize: function(target) {
            target.removeEventListener(
              "iron-resize",
              this._boundOnDescendantIronResize
            );
          },

          /**
           * This method can be overridden to filter nested elements that should or
           * should not be notified by the current element. Return true if an element
           * should be notified, or false if it should not be notified.
           *
           * @param {HTMLElement} element A candidate descendant element that
           * implements `IronResizableBehavior`.
           * @return {boolean} True if the `element` should be notified of resize.
           */
          resizerShouldNotify: function(element) {
            return true;
          },
          _onDescendantIronResize: function(event) {
            if (this._notifyingDescendant) {
              event.stopPropagation();
              return;
            } // no need to use this during shadow dom because of event retargeting

            if (
              !_polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_2__[
                "useShadow"
              ]
            ) {
              this._fireResize();
            }
          },
          _fireResize: function() {
            this.fire("iron-resize", null, {
              node: this,
              bubbles: false,
            });
          },
          _onIronRequestResizeNotifications: function(event) {
            var target =
              /** @type {!EventTarget} */
              Object(
                _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__[
                  "dom"
                ]
              )(event).rootTarget;

            if (target === this) {
              return;
            }

            target.assignParentResizable(this);

            this._notifyDescendant(target);

            event.stopPropagation();
          },
          _parentResizableChanged: function(parentResizable) {
            if (parentResizable) {
              window.removeEventListener("resize", this._boundNotifyResize);
            }
          },
          _notifyDescendant: function(descendant) {
            // NOTE(cdata): In IE10, attached is fired on children first, so it's
            // important not to notify them if the parent is not attached yet (or
            // else they will get redundantly notified when the parent attaches).
            if (!this.isAttached) {
              return;
            }

            this._notifyingDescendant = true;
            descendant.notifyResize();
            this._notifyingDescendant = false;
          },
          _requestResizeNotifications: function() {
            if (!this.isAttached) {
              return;
            }

            if (document.readyState === "loading") {
              var _requestResizeNotifications = this._requestResizeNotifications.bind(
                this
              );

              document.addEventListener(
                "readystatechange",
                function readystatechanged() {
                  document.removeEventListener(
                    "readystatechange",
                    readystatechanged
                  );

                  _requestResizeNotifications();
                }
              );
            } else {
              this._findParent();

              if (!this._parentResizable) {
                // If this resizable is an orphan, tell other orphans to try to find
                // their parent again, in case it's this resizable.
                ORPHANS.forEach(function(orphan) {
                  if (orphan !== this) {
                    orphan._findParent();
                  }
                }, this);
                window.addEventListener("resize", this._boundNotifyResize);
                this.notifyResize();
              } else {
                // If this resizable has a parent, tell other child resizables of
                // that parent to try finding their parent again, in case it's this
                // resizable.
                this._parentResizable._interestedResizables.forEach(function(
                  resizable
                ) {
                  if (resizable !== this) {
                    resizable._findParent();
                  }
                },
                this);
              }
            }
          },
          _findParent: function() {
            this.assignParentResizable(null);
            this.fire("iron-request-resize-notifications", null, {
              node: this,
              bubbles: true,
              cancelable: true,
            });

            if (!this._parentResizable) {
              ORPHANS.add(this);
            } else {
              ORPHANS.delete(this);
            }
          },
        };

        /***/
      },

    /***/ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-icon-button/paper-icon-button.js ***!
  \**********************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /* harmony import */ var _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-behaviors/paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
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
Material design: [Icon
toggles](https://www.google.com/design/spec/components/buttons.html#buttons-toggle-buttons)

`paper-icon-button` is a button with an image placed at the center. When the
user touches the button, a ripple effect emanates from the center of the button.

`paper-icon-button` does not include a default icon set. To use icons from the
default set, include `PolymerElements/iron-icons/iron-icons.html`, and use the
`icon` attribute to specify which icon from the icon set to use.

    <paper-icon-button icon="menu"></paper-icon-button>

See [`iron-iconset`](iron-iconset) for more information about
how to use a custom icon set.

Example:

    <script type="module">
      import '@polymer/iron-icons/iron-icons.js';
    </script>

    <paper-icon-button icon="favorite"></paper-icon-button>
    <paper-icon-button src="star.png"></paper-icon-button>

To use `paper-icon-button` as a link, wrap it in an anchor tag. Since
`paper-icon-button` will already receive focus, you may want to prevent the
anchor tag from receiving focus as well by setting its tabindex to -1.

    <a href="https://www.polymer-project.org" tabindex="-1">
      <paper-icon-button icon="polymer"></paper-icon-button>
    </a>

### Styling

Style the button with CSS as you would a normal DOM element. If you are using
the icons provided by `iron-icons`, they will inherit the foreground color of
the button.

    /* make a red "favorite" button *\/
    <paper-icon-button icon="favorite" style="color: red;"></paper-icon-button>

By default, the ripple is the same color as the foreground at 25% opacity. You
may customize the color using the `--paper-icon-button-ink-color` custom
property.

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-icon-button-disabled-text` | The color of the disabled button | `--disabled-text-color`
`--paper-icon-button-ink-color` | Selected/focus ripple color | `--primary-text-color`
`--paper-icon-button` | Mixin for a button | `{}`
`--paper-icon-button-disabled` | Mixin for a disabled button | `{}`
`--paper-icon-button-hover` | Mixin for button on hover | `{}`

@group Paper Elements
@element paper-icon-button
@demo demo/index.html
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__[
            "Polymer"
          ]
        )({
          is: "paper-icon-button",
          _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__[
            "html"
          ]`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,
          hostAttributes: {
            role: "button",
            tabindex: "0",
          },
          behaviors: [
            _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__[
              "PaperInkyFocusBehavior"
            ],
          ],
          registered: function() {
            this._template.setAttribute("strip-whitespace", "");
          },
          properties: {
            /**
             * The URL of an image for the icon. If the src property is specified,
             * the icon property should not be.
             */
            src: {
              type: String,
            },

            /**
             * Specifies the icon name or index in the set of icons available in
             * the icon's icon set. If the icon property is specified,
             * the src property should not be.
             */
            icon: {
              type: String,
            },

            /**
             * Specifies the alternate text for the button, for accessibility.
             */
            alt: {
              type: String,
              observer: "_altChanged",
            },
          },
          _altChanged: function(newValue, oldValue) {
            var label = this.getAttribute("aria-label"); // Don't stomp over a user-set aria-label.

            if (!label || oldValue == label) {
              this.setAttribute("aria-label", newValue);
            }
          },
        });

        /***/
      },

    /***/ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js ***!
  \***********************************************************************/
      /*! exports provided: PaperSpinnerBehavior */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperSpinnerBehavior",
          function() {
            return PaperSpinnerBehavior;
          }
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
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

        /** @polymerBehavior */

        const PaperSpinnerBehavior = {
          properties: {
            /**
             * Displays the spinner.
             */
            active: {
              type: Boolean,
              value: false,
              reflectToAttribute: true,
              observer: "__activeChanged",
            },

            /**
             * Alternative text content for accessibility support.
             * If alt is present, it will add an aria-label whose content matches alt
             * when active. If alt is not present, it will default to 'loading' as the
             * alt value.
             */
            alt: {
              type: String,
              value: "loading",
              observer: "__altChanged",
            },
            __coolingDown: {
              type: Boolean,
              value: false,
            },
          },
          __computeContainerClasses: function(active, coolingDown) {
            return [
              active || coolingDown ? "active" : "",
              coolingDown ? "cooldown" : "",
            ].join(" ");
          },
          __activeChanged: function(active, old) {
            this.__setAriaHidden(!active);

            this.__coolingDown = !active && old;
          },
          __altChanged: function(alt) {
            // user-provided `aria-label` takes precedence over prototype default
            if (alt === "loading") {
              this.alt = this.getAttribute("aria-label") || alt;
            } else {
              this.__setAriaHidden(alt === "");

              this.setAttribute("aria-label", alt);
            }
          },
          __setAriaHidden: function(hidden) {
            var attr = "aria-hidden";

            if (hidden) {
              this.setAttribute(attr, "true");
            } else {
              this.removeAttribute(attr);
            }
          },
          __reset: function() {
            this.active = false;
            this.__coolingDown = false;
          },
        };

        /***/
      },

    /***/ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner-styles.js ***!
  \*********************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
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
        const $_documentContainer = document.createElement("template");
        $_documentContainer.setAttribute("style", "display: none;");
        $_documentContainer.innerHTML = `<dom-module id="paper-spinner-styles">
  <template>
    <style>
      /*
      /**************************/
      /* STYLES FOR THE SPINNER */
      /**************************/

      /*
       * Constants:
       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
       *      ARCSTARTROT = 216 degrees (how much the start location of the arc
       *                                should rotate each time, 216 gives us a
       *                                5 pointed star shape (it's 360/5 * 3).
       *                                For a 7 pointed star, we might do
       *                                360/7 * 3 = 154.286)
       *      SHRINK_TIME = 400ms
       */

      :host {
        display: inline-block;
        position: relative;
        width: 28px;
        height: 28px;

        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
        --paper-spinner-container-rotation-duration: 1568ms;

        /* ARCTIME */
        --paper-spinner-expand-contract-duration: 1333ms;

        /* 4 * ARCTIME */
        --paper-spinner-full-cycle-duration: 5332ms;

        /* SHRINK_TIME */
        --paper-spinner-cooldown-duration: 400ms;
      }

      #spinnerContainer {
        width: 100%;
        height: 100%;

        /* The spinner does not have any contents that would have to be
         * flipped if the direction changes. Always use ltr so that the
         * style works out correctly in both cases. */
        direction: ltr;
      }

      #spinnerContainer.active {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
      }

      @-webkit-keyframes container-rotate {
        to { -webkit-transform: rotate(360deg) }
      }

      @keyframes container-rotate {
        to { transform: rotate(360deg) }
      }

      .spinner-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        white-space: nowrap;
        color: var(--paper-spinner-color, var(--google-blue-500));
      }

      .layer-1 {
        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));
      }

      .layer-2 {
        color: var(--paper-spinner-layer-2-color, var(--google-red-500));
      }

      .layer-3 {
        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));
      }

      .layer-4 {
        color: var(--paper-spinner-layer-4-color, var(--google-green-500));
      }

      /**
       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
       *
       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
       * guarantee that the animation will start _exactly_ after that value. So we avoid using
       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it
       * seems).
       */
      .active .spinner-layer {
        -webkit-animation-name: fill-unfill-rotate;
        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-name: fill-unfill-rotate;
        animation-duration: var(--paper-spinner-full-cycle-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
        opacity: 1;
      }

      .active .spinner-layer.layer-1 {
        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;
        animation-name: fill-unfill-rotate, layer-1-fade-in-out;
      }

      .active .spinner-layer.layer-2 {
        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;
        animation-name: fill-unfill-rotate, layer-2-fade-in-out;
      }

      .active .spinner-layer.layer-3 {
        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;
        animation-name: fill-unfill-rotate, layer-3-fade-in-out;
      }

      .active .spinner-layer.layer-4 {
        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;
        animation-name: fill-unfill-rotate, layer-4-fade-in-out;
      }

      @-webkit-keyframes fill-unfill-rotate {
        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @keyframes fill-unfill-rotate {
        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @-webkit-keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @-webkit-keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      .circle-clipper {
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;
      }

      /**
       * Patch the gap that appear between the two adjacent div.circle-clipper while the
       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).
       */
      .spinner-layer::after {
        content: '';
        left: 45%;
        width: 10%;
        border-top-style: solid;
      }

      .spinner-layer::after,
      .circle-clipper .circle {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        border-width: var(--paper-spinner-stroke-width, 3px);
        border-radius: 50%;
      }

      .circle-clipper .circle {
        bottom: 0;
        width: 200%;
        border-style: solid;
        border-bottom-color: transparent !important;
      }

      .circle-clipper.left .circle {
        left: 0;
        border-right-color: transparent !important;
        -webkit-transform: rotate(129deg);
        transform: rotate(129deg);
      }

      .circle-clipper.right .circle {
        left: -100%;
        border-left-color: transparent !important;
        -webkit-transform: rotate(-129deg);
        transform: rotate(-129deg);
      }

      .active .gap-patch::after,
      .active .circle-clipper .circle {
        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-duration: var(--paper-spinner-expand-contract-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
      }

      .active .circle-clipper.left .circle {
        -webkit-animation-name: left-spin;
        animation-name: left-spin;
      }

      .active .circle-clipper.right .circle {
        -webkit-animation-name: right-spin;
        animation-name: right-spin;
      }

      @-webkit-keyframes left-spin {
        0% { -webkit-transform: rotate(130deg) }
        50% { -webkit-transform: rotate(-5deg) }
        to { -webkit-transform: rotate(130deg) }
      }

      @keyframes left-spin {
        0% { transform: rotate(130deg) }
        50% { transform: rotate(-5deg) }
        to { transform: rotate(130deg) }
      }

      @-webkit-keyframes right-spin {
        0% { -webkit-transform: rotate(-130deg) }
        50% { -webkit-transform: rotate(5deg) }
        to { -webkit-transform: rotate(-130deg) }
      }

      @keyframes right-spin {
        0% { transform: rotate(-130deg) }
        50% { transform: rotate(5deg) }
        to { transform: rotate(-130deg) }
      }

      #spinnerContainer.cooldown {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      @-webkit-keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }
    </style>
  </template>
</dom-module>`;
        document.head.appendChild($_documentContainer.content);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+bW9yZS1pbmZvLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLXN0eWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHt1c2VTaGFkb3d9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3NldHRpbmdzLmpzJztcblxuLy8gQ29udGFpbnMgYWxsIGNvbm5lY3RlZCByZXNpemFibGVzIHRoYXQgZG8gbm90IGhhdmUgYSBwYXJlbnQuXG52YXIgT1JQSEFOUyA9IG5ldyBTZXQoKTtcblxuLyoqXG4gKiBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYCBpcyBhIGJlaGF2aW9yIHRoYXQgY2FuIGJlIHVzZWQgaW4gUG9seW1lciBlbGVtZW50cyB0b1xuICogY29vcmRpbmF0ZSB0aGUgZmxvdyBvZiByZXNpemUgZXZlbnRzIGJldHdlZW4gXCJyZXNpemVyc1wiIChlbGVtZW50cyB0aGF0XG4gKmNvbnRyb2wgdGhlIHNpemUgb3IgaGlkZGVuIHN0YXRlIG9mIHRoZWlyIGNoaWxkcmVuKSBhbmQgXCJyZXNpemFibGVzXCIgKGVsZW1lbnRzXG4gKnRoYXQgbmVlZCB0byBiZSBub3RpZmllZCB3aGVuIHRoZXkgYXJlIHJlc2l6ZWQgb3IgdW4taGlkZGVuIGJ5IHRoZWlyIHBhcmVudHNcbiAqaW4gb3JkZXIgdG8gdGFrZSBhY3Rpb24gb24gdGhlaXIgbmV3IG1lYXN1cmVtZW50cykuXG4gKlxuICogRWxlbWVudHMgdGhhdCBwZXJmb3JtIG1lYXN1cmVtZW50IHNob3VsZCBhZGQgdGhlIGBJcm9uUmVzaXphYmxlQmVoYXZpb3JgXG4gKmJlaGF2aW9yIHRvIHRoZWlyIGVsZW1lbnQgZGVmaW5pdGlvbiBhbmQgbGlzdGVuIGZvciB0aGUgYGlyb24tcmVzaXplYCBldmVudCBvblxuICp0aGVtc2VsdmVzLiBUaGlzIGV2ZW50IHdpbGwgYmUgZmlyZWQgd2hlbiB0aGV5IGJlY29tZSBzaG93aW5nIGFmdGVyIGhhdmluZ1xuICpiZWVuIGhpZGRlbiwgd2hlbiB0aGV5IGFyZSByZXNpemVkIGV4cGxpY2l0bHkgYnkgYW5vdGhlciByZXNpemFibGUsIG9yIHdoZW5cbiAqdGhlIHdpbmRvdyBoYXMgYmVlbiByZXNpemVkLlxuICpcbiAqIE5vdGUsIHRoZSBgaXJvbi1yZXNpemVgIGV2ZW50IGlzIG5vbi1idWJibGluZy5cbiAqXG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqKi9cbmV4cG9ydCBjb25zdCBJcm9uUmVzaXphYmxlQmVoYXZpb3IgPSB7XG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY2xvc2VzdCBhbmNlc3RvciBlbGVtZW50IHRoYXQgaW1wbGVtZW50cyBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYC5cbiAgICAgKi9cbiAgICBfcGFyZW50UmVzaXphYmxlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBvYnNlcnZlcjogJ19wYXJlbnRSZXNpemFibGVDaGFuZ2VkJyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGlzIGVsZW1lbnQgaXMgY3VycmVudGx5IG5vdGlmeWluZyBpdHMgZGVzY2VuZGFudCBlbGVtZW50cyBvZlxuICAgICAqIHJlc2l6ZS5cbiAgICAgKi9cbiAgICBfbm90aWZ5aW5nRGVzY2VuZGFudDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICB9XG4gIH0sXG5cbiAgbGlzdGVuZXJzOiB7XG4gICAgJ2lyb24tcmVxdWVzdC1yZXNpemUtbm90aWZpY2F0aW9ucyc6ICdfb25Jcm9uUmVxdWVzdFJlc2l6ZU5vdGlmaWNhdGlvbnMnXG4gIH0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gV2UgZG9uJ3QgcmVhbGx5IG5lZWQgcHJvcGVydHkgZWZmZWN0cyBvbiB0aGVzZSwgYW5kIGFsc28gd2Ugd2FudCB0aGVtXG4gICAgLy8gdG8gYmUgY3JlYXRlZCBiZWZvcmUgdGhlIGBfcGFyZW50UmVzaXphYmxlYCBvYnNlcnZlciBmaXJlczpcbiAgICB0aGlzLl9pbnRlcmVzdGVkUmVzaXphYmxlcyA9IFtdO1xuICAgIHRoaXMuX2JvdW5kTm90aWZ5UmVzaXplID0gdGhpcy5ub3RpZnlSZXNpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZE9uRGVzY2VuZGFudElyb25SZXNpemUgPSB0aGlzLl9vbkRlc2NlbmRhbnRJcm9uUmVzaXplLmJpbmQodGhpcyk7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3JlcXVlc3RSZXNpemVOb3RpZmljYXRpb25zKCk7XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9wYXJlbnRSZXNpemFibGUpIHtcbiAgICAgIHRoaXMuX3BhcmVudFJlc2l6YWJsZS5zdG9wUmVzaXplTm90aWZpY2F0aW9uc0Zvcih0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT1JQSEFOUy5kZWxldGUodGhpcyk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fYm91bmROb3RpZnlSZXNpemUpO1xuICAgIH1cblxuICAgIHRoaXMuX3BhcmVudFJlc2l6YWJsZSA9IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbiBiZSBjYWxsZWQgdG8gbWFudWFsbHkgbm90aWZ5IGEgcmVzaXphYmxlIGFuZCBpdHMgZGVzY2VuZGFudFxuICAgKiByZXNpemFibGVzIG9mIGEgcmVzaXplIGNoYW5nZS5cbiAgICovXG4gIG5vdGlmeVJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pbnRlcmVzdGVkUmVzaXphYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKHJlc2l6YWJsZSkge1xuICAgICAgaWYgKHRoaXMucmVzaXplclNob3VsZE5vdGlmeShyZXNpemFibGUpKSB7XG4gICAgICAgIHRoaXMuX25vdGlmeURlc2NlbmRhbnQocmVzaXphYmxlKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIHRoaXMuX2ZpcmVSZXNpemUoKTtcbiAgfSxcblxuICAvKipcbiAgICogVXNlZCB0byBhc3NpZ24gdGhlIGNsb3Nlc3QgcmVzaXphYmxlIGFuY2VzdG9yIHRvIHRoaXMgcmVzaXphYmxlXG4gICAqIGlmIHRoZSBhbmNlc3RvciBkZXRlY3RzIGEgcmVxdWVzdCBmb3Igbm90aWZpY2F0aW9ucy5cbiAgICovXG4gIGFzc2lnblBhcmVudFJlc2l6YWJsZTogZnVuY3Rpb24ocGFyZW50UmVzaXphYmxlKSB7XG4gICAgaWYgKHRoaXMuX3BhcmVudFJlc2l6YWJsZSkge1xuICAgICAgdGhpcy5fcGFyZW50UmVzaXphYmxlLnN0b3BSZXNpemVOb3RpZmljYXRpb25zRm9yKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuX3BhcmVudFJlc2l6YWJsZSA9IHBhcmVudFJlc2l6YWJsZTtcblxuICAgIGlmIChwYXJlbnRSZXNpemFibGUgJiZcbiAgICAgICAgcGFyZW50UmVzaXphYmxlLl9pbnRlcmVzdGVkUmVzaXphYmxlcy5pbmRleE9mKHRoaXMpID09PSAtMSkge1xuICAgICAgcGFyZW50UmVzaXphYmxlLl9pbnRlcmVzdGVkUmVzaXphYmxlcy5wdXNoKHRoaXMpO1xuICAgICAgcGFyZW50UmVzaXphYmxlLl9zdWJzY3JpYmVJcm9uUmVzaXplKHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVXNlZCB0byByZW1vdmUgYSByZXNpemFibGUgZGVzY2VuZGFudCBmcm9tIHRoZSBsaXN0IG9mIGRlc2NlbmRhbnRzXG4gICAqIHRoYXQgc2hvdWxkIGJlIG5vdGlmaWVkIG9mIGEgcmVzaXplIGNoYW5nZS5cbiAgICovXG4gIHN0b3BSZXNpemVOb3RpZmljYXRpb25zRm9yOiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9pbnRlcmVzdGVkUmVzaXphYmxlcy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5faW50ZXJlc3RlZFJlc2l6YWJsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlSXJvblJlc2l6ZSh0YXJnZXQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRoaXMgZWxlbWVudCB0byBsaXN0ZW4gdG8gaXJvbi1yZXNpemUgZXZlbnRzIG9uIHRoZSBnaXZlbiB0YXJnZXQuXG4gICAqXG4gICAqIFByZWZlcnJlZCBvdmVyIHRhcmdldC5saXN0ZW4gYmVjYXVzZSB0aGUgcHJvcGVydHkgcmVuYW1lciBkb2VzIG5vdFxuICAgKiB1bmRlcnN0YW5kIHRvIHJlbmFtZSB3aGVuIHRoZSB0YXJnZXQgaXMgbm90IHNwZWNpZmljYWxseSBcInRoaXNcIlxuICAgKlxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gdGFyZ2V0IEVsZW1lbnQgdG8gbGlzdGVuIHRvIGZvciBpcm9uLXJlc2l6ZSBldmVudHMuXG4gICAqL1xuICBfc3Vic2NyaWJlSXJvblJlc2l6ZTogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2lyb24tcmVzaXplJywgdGhpcy5fYm91bmRPbkRlc2NlbmRhbnRJcm9uUmVzaXplKTtcbiAgfSxcblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdGhpcyBlbGVtZW50IGZyb20gbGlzdGVuaW5nIHRvIHRvIGlyb24tcmVzaXplIGV2ZW50cyBvbiB0aGVcbiAgICogZ2l2ZW4gdGFyZ2V0LlxuICAgKlxuICAgKiBQcmVmZXJyZWQgb3ZlciB0YXJnZXQudW5saXN0ZW4gYmVjYXVzZSB0aGUgcHJvcGVydHkgcmVuYW1lciBkb2VzIG5vdFxuICAgKiB1bmRlcnN0YW5kIHRvIHJlbmFtZSB3aGVuIHRoZSB0YXJnZXQgaXMgbm90IHNwZWNpZmljYWxseSBcInRoaXNcIlxuICAgKlxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gdGFyZ2V0IEVsZW1lbnQgdG8gbGlzdGVuIHRvIGZvciBpcm9uLXJlc2l6ZSBldmVudHMuXG4gICAqL1xuICBfdW5zdWJzY3JpYmVJcm9uUmVzaXplOiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2lyb24tcmVzaXplJywgdGhpcy5fYm91bmRPbkRlc2NlbmRhbnRJcm9uUmVzaXplKTtcbiAgfSxcblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRkZW4gdG8gZmlsdGVyIG5lc3RlZCBlbGVtZW50cyB0aGF0IHNob3VsZCBvclxuICAgKiBzaG91bGQgbm90IGJlIG5vdGlmaWVkIGJ5IHRoZSBjdXJyZW50IGVsZW1lbnQuIFJldHVybiB0cnVlIGlmIGFuIGVsZW1lbnRcbiAgICogc2hvdWxkIGJlIG5vdGlmaWVkLCBvciBmYWxzZSBpZiBpdCBzaG91bGQgbm90IGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IEEgY2FuZGlkYXRlIGRlc2NlbmRhbnQgZWxlbWVudCB0aGF0XG4gICAqIGltcGxlbWVudHMgYElyb25SZXNpemFibGVCZWhhdmlvcmAuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGBlbGVtZW50YCBzaG91bGQgYmUgbm90aWZpZWQgb2YgcmVzaXplLlxuICAgKi9cbiAgcmVzaXplclNob3VsZE5vdGlmeTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIF9vbkRlc2NlbmRhbnRJcm9uUmVzaXplOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLl9ub3RpZnlpbmdEZXNjZW5kYW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBubyBuZWVkIHRvIHVzZSB0aGlzIGR1cmluZyBzaGFkb3cgZG9tIGJlY2F1c2Ugb2YgZXZlbnQgcmV0YXJnZXRpbmdcbiAgICBpZiAoIXVzZVNoYWRvdykge1xuICAgICAgdGhpcy5fZmlyZVJlc2l6ZSgpO1xuICAgIH1cbiAgfSxcblxuICBfZmlyZVJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5maXJlKCdpcm9uLXJlc2l6ZScsIG51bGwsIHtub2RlOiB0aGlzLCBidWJibGVzOiBmYWxzZX0pO1xuICB9LFxuXG4gIF9vbklyb25SZXF1ZXN0UmVzaXplTm90aWZpY2F0aW9uczogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshRXZlbnRUYXJnZXR9ICovIChkb20oZXZlbnQpLnJvb3RUYXJnZXQpO1xuICAgIGlmICh0YXJnZXQgPT09IHRoaXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXNzaWduUGFyZW50UmVzaXphYmxlKHRoaXMpO1xuICAgIHRoaXMuX25vdGlmeURlc2NlbmRhbnQodGFyZ2V0KTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9LFxuXG4gIF9wYXJlbnRSZXNpemFibGVDaGFuZ2VkOiBmdW5jdGlvbihwYXJlbnRSZXNpemFibGUpIHtcbiAgICBpZiAocGFyZW50UmVzaXphYmxlKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fYm91bmROb3RpZnlSZXNpemUpO1xuICAgIH1cbiAgfSxcblxuICBfbm90aWZ5RGVzY2VuZGFudDogZnVuY3Rpb24oZGVzY2VuZGFudCkge1xuICAgIC8vIE5PVEUoY2RhdGEpOiBJbiBJRTEwLCBhdHRhY2hlZCBpcyBmaXJlZCBvbiBjaGlsZHJlbiBmaXJzdCwgc28gaXQnc1xuICAgIC8vIGltcG9ydGFudCBub3QgdG8gbm90aWZ5IHRoZW0gaWYgdGhlIHBhcmVudCBpcyBub3QgYXR0YWNoZWQgeWV0IChvclxuICAgIC8vIGVsc2UgdGhleSB3aWxsIGdldCByZWR1bmRhbnRseSBub3RpZmllZCB3aGVuIHRoZSBwYXJlbnQgYXR0YWNoZXMpLlxuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbm90aWZ5aW5nRGVzY2VuZGFudCA9IHRydWU7XG4gICAgZGVzY2VuZGFudC5ub3RpZnlSZXNpemUoKTtcbiAgICB0aGlzLl9ub3RpZnlpbmdEZXNjZW5kYW50ID0gZmFsc2U7XG4gIH0sXG5cbiAgX3JlcXVlc3RSZXNpemVOb3RpZmljYXRpb25zOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgIHZhciBfcmVxdWVzdFJlc2l6ZU5vdGlmaWNhdGlvbnMgPVxuICAgICAgICAgIHRoaXMuX3JlcXVlc3RSZXNpemVOb3RpZmljYXRpb25zLmJpbmQodGhpcyk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdyZWFkeXN0YXRlY2hhbmdlJywgZnVuY3Rpb24gcmVhZHlzdGF0ZWNoYW5nZWQoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgcmVhZHlzdGF0ZWNoYW5nZWQpO1xuICAgICAgICAgICAgX3JlcXVlc3RSZXNpemVOb3RpZmljYXRpb25zKCk7XG4gICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpbmRQYXJlbnQoKTtcblxuICAgICAgaWYgKCF0aGlzLl9wYXJlbnRSZXNpemFibGUpIHtcbiAgICAgICAgLy8gSWYgdGhpcyByZXNpemFibGUgaXMgYW4gb3JwaGFuLCB0ZWxsIG90aGVyIG9ycGhhbnMgdG8gdHJ5IHRvIGZpbmRcbiAgICAgICAgLy8gdGhlaXIgcGFyZW50IGFnYWluLCBpbiBjYXNlIGl0J3MgdGhpcyByZXNpemFibGUuXG4gICAgICAgIE9SUEhBTlMuZm9yRWFjaChmdW5jdGlvbihvcnBoYW4pIHtcbiAgICAgICAgICBpZiAob3JwaGFuICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBvcnBoYW4uX2ZpbmRQYXJlbnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9ib3VuZE5vdGlmeVJlc2l6ZSk7XG4gICAgICAgIHRoaXMubm90aWZ5UmVzaXplKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGlzIHJlc2l6YWJsZSBoYXMgYSBwYXJlbnQsIHRlbGwgb3RoZXIgY2hpbGQgcmVzaXphYmxlcyBvZlxuICAgICAgICAvLyB0aGF0IHBhcmVudCB0byB0cnkgZmluZGluZyB0aGVpciBwYXJlbnQgYWdhaW4sIGluIGNhc2UgaXQncyB0aGlzXG4gICAgICAgIC8vIHJlc2l6YWJsZS5cbiAgICAgICAgdGhpcy5fcGFyZW50UmVzaXphYmxlLl9pbnRlcmVzdGVkUmVzaXphYmxlc1xuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24ocmVzaXphYmxlKSB7XG4gICAgICAgICAgICAgIGlmIChyZXNpemFibGUgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICByZXNpemFibGUuX2ZpbmRQYXJlbnQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9maW5kUGFyZW50OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFzc2lnblBhcmVudFJlc2l6YWJsZShudWxsKTtcbiAgICB0aGlzLmZpcmUoXG4gICAgICAgICdpcm9uLXJlcXVlc3QtcmVzaXplLW5vdGlmaWNhdGlvbnMnLFxuICAgICAgICBudWxsLFxuICAgICAgICB7bm9kZTogdGhpcywgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZX0pO1xuXG4gICAgaWYgKCF0aGlzLl9wYXJlbnRSZXNpemFibGUpIHtcbiAgICAgIE9SUEhBTlMuYWRkKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBPUlBIQU5TLmRlbGV0ZSh0aGlzKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb24uanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5cbmltcG9ydCB7UGFwZXJJbmt5Rm9jdXNCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLWlua3ktZm9jdXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtJY29uXG50b2dnbGVzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvYnV0dG9ucy5odG1sI2J1dHRvbnMtdG9nZ2xlLWJ1dHRvbnMpXG5cbmBwYXBlci1pY29uLWJ1dHRvbmAgaXMgYSBidXR0b24gd2l0aCBhbiBpbWFnZSBwbGFjZWQgYXQgdGhlIGNlbnRlci4gV2hlbiB0aGVcbnVzZXIgdG91Y2hlcyB0aGUgYnV0dG9uLCBhIHJpcHBsZSBlZmZlY3QgZW1hbmF0ZXMgZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBidXR0b24uXG5cbmBwYXBlci1pY29uLWJ1dHRvbmAgZG9lcyBub3QgaW5jbHVkZSBhIGRlZmF1bHQgaWNvbiBzZXQuIFRvIHVzZSBpY29ucyBmcm9tIHRoZVxuZGVmYXVsdCBzZXQsIGluY2x1ZGUgYFBvbHltZXJFbGVtZW50cy9pcm9uLWljb25zL2lyb24taWNvbnMuaHRtbGAsIGFuZCB1c2UgdGhlXG5gaWNvbmAgYXR0cmlidXRlIHRvIHNwZWNpZnkgd2hpY2ggaWNvbiBmcm9tIHRoZSBpY29uIHNldCB0byB1c2UuXG5cbiAgICA8cGFwZXItaWNvbi1idXR0b24gaWNvbj1cIm1lbnVcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuXG5TZWUgW2Bpcm9uLWljb25zZXRgXShpcm9uLWljb25zZXQpIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0XG5ob3cgdG8gdXNlIGEgY3VzdG9tIGljb24gc2V0LlxuXG5FeGFtcGxlOlxuXG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XG4gICAgICBpbXBvcnQgJ0Bwb2x5bWVyL2lyb24taWNvbnMvaXJvbi1pY29ucy5qcyc7XG4gICAgPC9zY3JpcHQ+XG5cbiAgICA8cGFwZXItaWNvbi1idXR0b24gaWNvbj1cImZhdm9yaXRlXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICA8cGFwZXItaWNvbi1idXR0b24gc3JjPVwic3Rhci5wbmdcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuXG5UbyB1c2UgYHBhcGVyLWljb24tYnV0dG9uYCBhcyBhIGxpbmssIHdyYXAgaXQgaW4gYW4gYW5jaG9yIHRhZy4gU2luY2VcbmBwYXBlci1pY29uLWJ1dHRvbmAgd2lsbCBhbHJlYWR5IHJlY2VpdmUgZm9jdXMsIHlvdSBtYXkgd2FudCB0byBwcmV2ZW50IHRoZVxuYW5jaG9yIHRhZyBmcm9tIHJlY2VpdmluZyBmb2N1cyBhcyB3ZWxsIGJ5IHNldHRpbmcgaXRzIHRhYmluZGV4IHRvIC0xLlxuXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmdcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICA8cGFwZXItaWNvbi1idXR0b24gaWNvbj1cInBvbHltZXJcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIDwvYT5cblxuIyMjIFN0eWxpbmdcblxuU3R5bGUgdGhlIGJ1dHRvbiB3aXRoIENTUyBhcyB5b3Ugd291bGQgYSBub3JtYWwgRE9NIGVsZW1lbnQuIElmIHlvdSBhcmUgdXNpbmdcbnRoZSBpY29ucyBwcm92aWRlZCBieSBgaXJvbi1pY29uc2AsIHRoZXkgd2lsbCBpbmhlcml0IHRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mXG50aGUgYnV0dG9uLlxuXG4gICAgLyogbWFrZSBhIHJlZCBcImZhdm9yaXRlXCIgYnV0dG9uICpcXC9cbiAgICA8cGFwZXItaWNvbi1idXR0b24gaWNvbj1cImZhdm9yaXRlXCIgc3R5bGU9XCJjb2xvcjogcmVkO1wiPjwvcGFwZXItaWNvbi1idXR0b24+XG5cbkJ5IGRlZmF1bHQsIHRoZSByaXBwbGUgaXMgdGhlIHNhbWUgY29sb3IgYXMgdGhlIGZvcmVncm91bmQgYXQgMjUlIG9wYWNpdHkuIFlvdVxubWF5IGN1c3RvbWl6ZSB0aGUgY29sb3IgdXNpbmcgdGhlIGAtLXBhcGVyLWljb24tYnV0dG9uLWluay1jb2xvcmAgY3VzdG9tXG5wcm9wZXJ0eS5cblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWljb24tYnV0dG9uLWRpc2FibGVkLXRleHRgIHwgVGhlIGNvbG9yIG9mIHRoZSBkaXNhYmxlZCBidXR0b24gfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaWNvbi1idXR0b24taW5rLWNvbG9yYCB8IFNlbGVjdGVkL2ZvY3VzIHJpcHBsZSBjb2xvciB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWljb24tYnV0dG9uYCB8IE1peGluIGZvciBhIGJ1dHRvbiB8IGB7fWBcbmAtLXBhcGVyLWljb24tYnV0dG9uLWRpc2FibGVkYCB8IE1peGluIGZvciBhIGRpc2FibGVkIGJ1dHRvbiB8IGB7fWBcbmAtLXBhcGVyLWljb24tYnV0dG9uLWhvdmVyYCB8IE1peGluIGZvciBidXR0b24gb24gaG92ZXIgfCBge31gXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaWNvbi1idXR0b25cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBpczogJ3BhcGVyLWljb24tYnV0dG9uJyxcblxuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG5cbiAgICAgICAgLypcbiAgICAgICAgICBOT1RFOiBCb3RoIHZhbHVlcyBhcmUgbmVlZGVkLCBzaW5jZSBzb21lIHBob25lcyByZXF1aXJlIHRoZSB2YWx1ZSB0b1xuICAgICAgICAgIGJlIFxcYHRyYW5zcGFyZW50XFxgLlxuICAgICAgICAqL1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgLyogQmVjYXVzZSBvZiBwb2x5bWVyLzI1NTgsIHRoaXMgc3R5bGUgaGFzIGxvd2VyIHNwZWNpZmljaXR5IHRoYW4gKiAqL1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaWNvbi1idXR0b247XG4gICAgICB9XG5cbiAgICAgIDpob3N0ICNpbmsge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaWNvbi1idXR0b24taW5rLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pY29uLWJ1dHRvbi1kaXNhYmxlZC10ZXh0LCB2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjdXJzb3I6IGF1dG87XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaWNvbi1idXR0b24tZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmhvdmVyKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24tYnV0dG9uLWhvdmVyO1xuICAgICAgfVxuXG4gICAgICBpcm9uLWljb24ge1xuICAgICAgICAtLWlyb24taWNvbi13aWR0aDogMTAwJTtcbiAgICAgICAgLS1pcm9uLWljb24taGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8aXJvbi1pY29uIGlkPVwiaWNvblwiIHNyYz1cIltbc3JjXV1cIiBpY29uPVwiW1tpY29uXV1cIlxuICAgICAgICAgICAgICAgYWx0JD1cIltbYWx0XV1cIj48L2lyb24taWNvbj5cbiAgYCxcblxuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICdidXR0b24nLCB0YWJpbmRleDogJzAnfSxcblxuICBiZWhhdmlvcnM6IFtQYXBlcklua3lGb2N1c0JlaGF2aW9yXSxcblxuICByZWdpc3RlcmVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG4gIH0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBVUkwgb2YgYW4gaW1hZ2UgZm9yIHRoZSBpY29uLiBJZiB0aGUgc3JjIHByb3BlcnR5IGlzIHNwZWNpZmllZCxcbiAgICAgKiB0aGUgaWNvbiBwcm9wZXJ0eSBzaG91bGQgbm90IGJlLlxuICAgICAqL1xuICAgIHNyYzoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGljb24gbmFtZSBvciBpbmRleCBpbiB0aGUgc2V0IG9mIGljb25zIGF2YWlsYWJsZSBpblxuICAgICAqIHRoZSBpY29uJ3MgaWNvbiBzZXQuIElmIHRoZSBpY29uIHByb3BlcnR5IGlzIHNwZWNpZmllZCxcbiAgICAgKiB0aGUgc3JjIHByb3BlcnR5IHNob3VsZCBub3QgYmUuXG4gICAgICovXG4gICAgaWNvbjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGFsdGVybmF0ZSB0ZXh0IGZvciB0aGUgYnV0dG9uLCBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICAgKi9cbiAgICBhbHQ6IHt0eXBlOiBTdHJpbmcsIG9ic2VydmVyOiAnX2FsdENoYW5nZWQnfVxuICB9LFxuXG4gIF9hbHRDaGFuZ2VkOiBmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICB2YXIgbGFiZWwgPSB0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXG4gICAgLy8gRG9uJ3Qgc3RvbXAgb3ZlciBhIHVzZXItc2V0IGFyaWEtbGFiZWwuXG4gICAgaWYgKCFsYWJlbCB8fCBvbGRWYWx1ZSA9PSBsYWJlbCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlclNwaW5uZXJCZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogRGlzcGxheXMgdGhlIHNwaW5uZXIuXG4gICAgICovXG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfX2FjdGl2ZUNoYW5nZWQnXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFsdGVybmF0aXZlIHRleHQgY29udGVudCBmb3IgYWNjZXNzaWJpbGl0eSBzdXBwb3J0LlxuICAgICAqIElmIGFsdCBpcyBwcmVzZW50LCBpdCB3aWxsIGFkZCBhbiBhcmlhLWxhYmVsIHdob3NlIGNvbnRlbnQgbWF0Y2hlcyBhbHRcbiAgICAgKiB3aGVuIGFjdGl2ZS4gSWYgYWx0IGlzIG5vdCBwcmVzZW50LCBpdCB3aWxsIGRlZmF1bHQgdG8gJ2xvYWRpbmcnIGFzIHRoZVxuICAgICAqIGFsdCB2YWx1ZS5cbiAgICAgKi9cbiAgICBhbHQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnbG9hZGluZycsIG9ic2VydmVyOiAnX19hbHRDaGFuZ2VkJ30sXG5cbiAgICBfX2Nvb2xpbmdEb3duOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfVxuICB9LFxuXG4gIF9fY29tcHV0ZUNvbnRhaW5lckNsYXNzZXM6IGZ1bmN0aW9uKGFjdGl2ZSwgY29vbGluZ0Rvd24pIHtcbiAgICByZXR1cm4gW1xuICAgICAgYWN0aXZlIHx8IGNvb2xpbmdEb3duID8gJ2FjdGl2ZScgOiAnJyxcbiAgICAgIGNvb2xpbmdEb3duID8gJ2Nvb2xkb3duJyA6ICcnXG4gICAgXS5qb2luKCcgJyk7XG4gIH0sXG5cbiAgX19hY3RpdmVDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmUsIG9sZCkge1xuICAgIHRoaXMuX19zZXRBcmlhSGlkZGVuKCFhY3RpdmUpO1xuICAgIHRoaXMuX19jb29saW5nRG93biA9ICFhY3RpdmUgJiYgb2xkO1xuICB9LFxuXG4gIF9fYWx0Q2hhbmdlZDogZnVuY3Rpb24oYWx0KSB7XG4gICAgLy8gdXNlci1wcm92aWRlZCBgYXJpYS1sYWJlbGAgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHByb3RvdHlwZSBkZWZhdWx0XG4gICAgaWYgKGFsdCA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICB0aGlzLmFsdCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgYWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9fc2V0QXJpYUhpZGRlbihhbHQgPT09ICcnKTtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgYWx0KTtcbiAgICB9XG4gIH0sXG5cbiAgX19zZXRBcmlhSGlkZGVuOiBmdW5jdGlvbihoaWRkZW4pIHtcbiAgICB2YXIgYXR0ciA9ICdhcmlhLWhpZGRlbic7XG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ciwgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgfVxuICB9LFxuXG4gIF9fcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fX2Nvb2xpbmdEb3duID0gZmFsc2U7XG4gIH1cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwicGFwZXItc3Bpbm5lci1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC8qXG4gICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICAvKiBTVFlMRVMgRk9SIFRIRSBTUElOTkVSICovXG4gICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgIC8qXG4gICAgICAgKiBDb25zdGFudHM6XG4gICAgICAgKiAgICAgIEFSQ1NJWkUgICAgID0gMjcwIGRlZ3JlZXMgKGFtb3VudCBvZiBjaXJjbGUgdGhlIGFyYyB0YWtlcyB1cClcbiAgICAgICAqICAgICAgQVJDVElNRSAgICAgPSAxMzMzbXMgKHRpbWUgaXQgdGFrZXMgdG8gZXhwYW5kIGFuZCBjb250cmFjdCBhcmMpXG4gICAgICAgKiAgICAgIEFSQ1NUQVJUUk9UID0gMjE2IGRlZ3JlZXMgKGhvdyBtdWNoIHRoZSBzdGFydCBsb2NhdGlvbiBvZiB0aGUgYXJjXG4gICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkIHJvdGF0ZSBlYWNoIHRpbWUsIDIxNiBnaXZlcyB1cyBhXG4gICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNSBwb2ludGVkIHN0YXIgc2hhcGUgKGl0J3MgMzYwLzUgKiAzKS5cbiAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgYSA3IHBvaW50ZWQgc3Rhciwgd2UgbWlnaHQgZG9cbiAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzNjAvNyAqIDMgPSAxNTQuMjg2KVxuICAgICAgICogICAgICBTSFJJTktfVElNRSA9IDQwMG1zXG4gICAgICAgKi9cblxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcblxuICAgICAgICAvKiAzNjAgKiBBUkNUSU1FIC8gKEFSQ1NUQVJUUk9UICsgKDM2MC1BUkNTSVpFKSkgKi9cbiAgICAgICAgLS1wYXBlci1zcGlubmVyLWNvbnRhaW5lci1yb3RhdGlvbi1kdXJhdGlvbjogMTU2OG1zO1xuXG4gICAgICAgIC8qIEFSQ1RJTUUgKi9cbiAgICAgICAgLS1wYXBlci1zcGlubmVyLWV4cGFuZC1jb250cmFjdC1kdXJhdGlvbjogMTMzM21zO1xuXG4gICAgICAgIC8qIDQgKiBBUkNUSU1FICovXG4gICAgICAgIC0tcGFwZXItc3Bpbm5lci1mdWxsLWN5Y2xlLWR1cmF0aW9uOiA1MzMybXM7XG5cbiAgICAgICAgLyogU0hSSU5LX1RJTUUgKi9cbiAgICAgICAgLS1wYXBlci1zcGlubmVyLWNvb2xkb3duLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgIH1cblxuICAgICAgI3NwaW5uZXJDb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIC8qIFRoZSBzcGlubmVyIGRvZXMgbm90IGhhdmUgYW55IGNvbnRlbnRzIHRoYXQgd291bGQgaGF2ZSB0byBiZVxuICAgICAgICAgKiBmbGlwcGVkIGlmIHRoZSBkaXJlY3Rpb24gY2hhbmdlcy4gQWx3YXlzIHVzZSBsdHIgc28gdGhhdCB0aGVcbiAgICAgICAgICogc3R5bGUgd29ya3Mgb3V0IGNvcnJlY3RseSBpbiBib3RoIGNhc2VzLiAqL1xuICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgIH1cblxuICAgICAgI3NwaW5uZXJDb250YWluZXIuYWN0aXZlIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGNvbnRhaW5lci1yb3RhdGUgdmFyKC0tcGFwZXItc3Bpbm5lci1jb250YWluZXItcm90YXRpb24tZHVyYXRpb24pIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgYW5pbWF0aW9uOiBjb250YWluZXItcm90YXRlIHZhcigtLXBhcGVyLXNwaW5uZXItY29udGFpbmVyLXJvdGF0aW9uLWR1cmF0aW9uKSBsaW5lYXIgaW5maW5pdGU7XG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBjb250YWluZXItcm90YXRlIHtcbiAgICAgICAgdG8geyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGNvbnRhaW5lci1yb3RhdGUge1xuICAgICAgICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfVxuICAgICAgfVxuXG4gICAgICAuc3Bpbm5lci1sYXllciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLXNwaW5uZXItY29sb3IsIHZhcigtLWdvb2dsZS1ibHVlLTUwMCkpO1xuICAgICAgfVxuXG4gICAgICAubGF5ZXItMSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1zcGlubmVyLWxheWVyLTEtY29sb3IsIHZhcigtLWdvb2dsZS1ibHVlLTUwMCkpO1xuICAgICAgfVxuXG4gICAgICAubGF5ZXItMiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1zcGlubmVyLWxheWVyLTItY29sb3IsIHZhcigtLWdvb2dsZS1yZWQtNTAwKSk7XG4gICAgICB9XG5cbiAgICAgIC5sYXllci0zIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLXNwaW5uZXItbGF5ZXItMy1jb2xvciwgdmFyKC0tZ29vZ2xlLXllbGxvdy01MDApKTtcbiAgICAgIH1cblxuICAgICAgLmxheWVyLTQge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItc3Bpbm5lci1sYXllci00LWNvbG9yLCB2YXIoLS1nb29nbGUtZ3JlZW4tNTAwKSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSU1QT1JUQU5UIE5PVEUgQUJPVVQgQ1NTIEFOSU1BVElPTiBQUk9QRVJUSUVTIChrZWFudWxlZSk6XG4gICAgICAgKlxuICAgICAgICogaU9TIFNhZmFyaSAodGVzdGVkIG9uIGlPUyA4LjEpIGRvZXMgbm90IGhhbmRsZSBhbmltYXRpb24tZGVsYXkgdmVyeSB3ZWxsIC0gaXQgZG9lc24ndFxuICAgICAgICogZ3VhcmFudGVlIHRoYXQgdGhlIGFuaW1hdGlvbiB3aWxsIHN0YXJ0IF9leGFjdGx5XyBhZnRlciB0aGF0IHZhbHVlLiBTbyB3ZSBhdm9pZCB1c2luZ1xuICAgICAgICogYW5pbWF0aW9uLWRlbGF5IGFuZCBpbnN0ZWFkIHNldCBjdXN0b20ga2V5ZnJhbWVzIGZvciBlYWNoIGNvbG9yIChhcyBsYXllci0ydW5kYW50IGFzIGl0XG4gICAgICAgKiBzZWVtcykuXG4gICAgICAgKi9cbiAgICAgIC5hY3RpdmUgLnNwaW5uZXItbGF5ZXIge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmaWxsLXVuZmlsbC1yb3RhdGU7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci1zcGlubmVyLWZ1bGwtY3ljbGUtZHVyYXRpb24pO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZpbGwtdW5maWxsLXJvdGF0ZTtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci1zcGlubmVyLWZ1bGwtY3ljbGUtZHVyYXRpb24pO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSk7XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICAuYWN0aXZlIC5zcGlubmVyLWxheWVyLmxheWVyLTEge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmaWxsLXVuZmlsbC1yb3RhdGUsIGxheWVyLTEtZmFkZS1pbi1vdXQ7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmaWxsLXVuZmlsbC1yb3RhdGUsIGxheWVyLTEtZmFkZS1pbi1vdXQ7XG4gICAgICB9XG5cbiAgICAgIC5hY3RpdmUgLnNwaW5uZXItbGF5ZXIubGF5ZXItMiB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZpbGwtdW5maWxsLXJvdGF0ZSwgbGF5ZXItMi1mYWRlLWluLW91dDtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZpbGwtdW5maWxsLXJvdGF0ZSwgbGF5ZXItMi1mYWRlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgLmFjdGl2ZSAuc3Bpbm5lci1sYXllci5sYXllci0zIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmlsbC11bmZpbGwtcm90YXRlLCBsYXllci0zLWZhZGUtaW4tb3V0O1xuICAgICAgICBhbmltYXRpb24tbmFtZTogZmlsbC11bmZpbGwtcm90YXRlLCBsYXllci0zLWZhZGUtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAuYWN0aXZlIC5zcGlubmVyLWxheWVyLmxheWVyLTQge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmaWxsLXVuZmlsbC1yb3RhdGUsIGxheWVyLTQtZmFkZS1pbi1vdXQ7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmaWxsLXVuZmlsbC1yb3RhdGUsIGxheWVyLTQtZmFkZS1pbi1vdXQ7XG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmaWxsLXVuZmlsbC1yb3RhdGUge1xuICAgICAgICAxMi41JSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKSB9IC8qIDAuNSAqIEFSQ1NJWkUgKi9cbiAgICAgICAgMjUlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgfSAvKiAxICAgKiBBUkNTSVpFICovXG4gICAgICAgIDM3LjUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0MDVkZWcpIH0gLyogMS41ICogQVJDU0laRSAqL1xuICAgICAgICA1MCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKSB9IC8qIDIgICAqIEFSQ1NJWkUgKi9cbiAgICAgICAgNjIuNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDY3NWRlZykgfSAvKiAyLjUgKiBBUkNTSVpFICovXG4gICAgICAgIDc1JSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4MTBkZWcpIH0gLyogMyAgICogQVJDU0laRSAqL1xuICAgICAgICA4Ny41JSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTQ1ZGVnKSB9IC8qIDMuNSAqIEFSQ1NJWkUgKi9cbiAgICAgICAgdG8gICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwODBkZWcpIH0gLyogNCAgICogQVJDU0laRSAqL1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGZpbGwtdW5maWxsLXJvdGF0ZSB7XG4gICAgICAgIDEyLjUlIHsgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKSB9IC8qIDAuNSAqIEFSQ1NJWkUgKi9cbiAgICAgICAgMjUlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpIH0gLyogMSAgICogQVJDU0laRSAqL1xuICAgICAgICAzNy41JSB7IHRyYW5zZm9ybTogcm90YXRlKDQwNWRlZykgfSAvKiAxLjUgKiBBUkNTSVpFICovXG4gICAgICAgIDUwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKSB9IC8qIDIgICAqIEFSQ1NJWkUgKi9cbiAgICAgICAgNjIuNSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSg2NzVkZWcpIH0gLyogMi41ICogQVJDU0laRSAqL1xuICAgICAgICA3NSUgICB7IHRyYW5zZm9ybTogcm90YXRlKDgxMGRlZykgfSAvKiAzICAgKiBBUkNTSVpFICovXG4gICAgICAgIDg3LjUlIHsgdHJhbnNmb3JtOiByb3RhdGUoOTQ1ZGVnKSB9IC8qIDMuNSAqIEFSQ1NJWkUgKi9cbiAgICAgICAgdG8gICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMDgwZGVnKSB9IC8qIDQgICAqIEFSQ1NJWkUgKi9cbiAgICAgIH1cblxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGxheWVyLTEtZmFkZS1pbi1vdXQge1xuICAgICAgICAwJSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICAyNSUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgMjYlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDg5JSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICA5MCUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAxIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBsYXllci0xLWZhZGUtaW4tb3V0IHtcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgMjUlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDI2JSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICA4OSUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgOTAlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIHRvIHsgb3BhY2l0eTogMSB9XG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBsYXllci0yLWZhZGUtaW4tb3V0IHtcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgMTUlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDI1JSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICA1MCUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgNTElIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIHRvIHsgb3BhY2l0eTogMCB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgbGF5ZXItMi1mYWRlLWluLW91dCB7XG4gICAgICAgIDAlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDE1JSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICAyNSUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgNTAlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDUxJSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICB0byB7IG9wYWNpdHk6IDAgfVxuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbGF5ZXItMy1mYWRlLWluLW91dCB7XG4gICAgICAgIDAlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDQwJSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICA1MCUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgNzUlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDc2JSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICB0byB7IG9wYWNpdHk6IDAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGxheWVyLTMtZmFkZS1pbi1vdXQge1xuICAgICAgICAwJSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICA0MCUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgNTAlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDc1JSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICA3NiUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAwIH1cbiAgICAgIH1cblxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGxheWVyLTQtZmFkZS1pbi1vdXQge1xuICAgICAgICAwJSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICA2NSUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgNzUlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDkwJSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICB0byB7IG9wYWNpdHk6IDAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGxheWVyLTQtZmFkZS1pbi1vdXQge1xuICAgICAgICAwJSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICA2NSUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgNzUlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDkwJSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICB0byB7IG9wYWNpdHk6IDAgfVxuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLWNsaXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFBhdGNoIHRoZSBnYXAgdGhhdCBhcHBlYXIgYmV0d2VlbiB0aGUgdHdvIGFkamFjZW50IGRpdi5jaXJjbGUtY2xpcHBlciB3aGlsZSB0aGVcbiAgICAgICAqIHNwaW5uZXIgaXMgcm90YXRpbmcgKGFwcGVhcnMgb24gQ2hyb21lIDUwLCBTYWZhcmkgOS4xLjEsIGFuZCBFZGdlKS5cbiAgICAgICAqL1xuICAgICAgLnNwaW5uZXItbGF5ZXI6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGxlZnQ6IDQ1JTtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gICAgICB9XG5cbiAgICAgIC5zcGlubmVyLWxheWVyOjphZnRlcixcbiAgICAgIC5jaXJjbGUtY2xpcHBlciAuY2lyY2xlIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvcmRlci13aWR0aDogdmFyKC0tcGFwZXItc3Bpbm5lci1zdHJva2Utd2lkdGgsIDNweCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cblxuICAgICAgLmNpcmNsZS1jbGlwcGVyIC5jaXJjbGUge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAyMDAlO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLWNsaXBwZXIubGVmdCAuY2lyY2xlIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyOWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyOWRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtY2xpcHBlci5yaWdodCAuY2lyY2xlIHtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMjlkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTI5ZGVnKTtcbiAgICAgIH1cblxuICAgICAgLmFjdGl2ZSAuZ2FwLXBhdGNoOjphZnRlcixcbiAgICAgIC5hY3RpdmUgLmNpcmNsZS1jbGlwcGVyIC5jaXJjbGUge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItc3Bpbm5lci1leHBhbmQtY29udHJhY3QtZHVyYXRpb24pO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci1zcGlubmVyLWV4cGFuZC1jb250cmFjdC1kdXJhdGlvbik7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKTtcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICB9XG5cbiAgICAgIC5hY3RpdmUgLmNpcmNsZS1jbGlwcGVyLmxlZnQgLmNpcmNsZSB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGxlZnQtc3BpbjtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGxlZnQtc3BpbjtcbiAgICAgIH1cblxuICAgICAgLmFjdGl2ZSAuY2lyY2xlLWNsaXBwZXIucmlnaHQgLmNpcmNsZSB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJpZ2h0LXNwaW47XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiByaWdodC1zcGluO1xuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbGVmdC1zcGluIHtcbiAgICAgICAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzMGRlZykgfVxuICAgICAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKSB9XG4gICAgICAgIHRvIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBsZWZ0LXNwaW4ge1xuICAgICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZykgfVxuICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZykgfVxuICAgICAgICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZykgfVxuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgcmlnaHQtc3BpbiB7XG4gICAgICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKSB9XG4gICAgICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNWRlZykgfVxuICAgICAgICB0byB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZykgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHJpZ2h0LXNwaW4ge1xuICAgICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpIH1cbiAgICAgICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoNWRlZykgfVxuICAgICAgICB0byB7IHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpIH1cbiAgICAgIH1cblxuICAgICAgI3NwaW5uZXJDb250YWluZXIuY29vbGRvd24ge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogY29udGFpbmVyLXJvdGF0ZSB2YXIoLS1wYXBlci1zcGlubmVyLWNvbnRhaW5lci1yb3RhdGlvbi1kdXJhdGlvbikgbGluZWFyIGluZmluaXRlLCBmYWRlLW91dCB2YXIoLS1wYXBlci1zcGlubmVyLWNvb2xkb3duLWR1cmF0aW9uKSBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSk7XG4gICAgICAgIGFuaW1hdGlvbjogY29udGFpbmVyLXJvdGF0ZSB2YXIoLS1wYXBlci1zcGlubmVyLWNvbnRhaW5lci1yb3RhdGlvbi1kdXJhdGlvbikgbGluZWFyIGluZmluaXRlLCBmYWRlLW91dCB2YXIoLS1wYXBlci1zcGlubmVyLWNvb2xkb3duLWR1cmF0aW9uKSBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSk7XG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlLW91dCB7XG4gICAgICAgIDAlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIHRvIHsgb3BhY2l0eTogMCB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAgICAgICAwJSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICB0byB7IG9wYWNpdHk6IDAgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuXG5leHBvcnQge307XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBbUJBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM09BOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7QUFpRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBakJBO0FBb0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBcEdBOzs7Ozs7Ozs7Ozs7QUM5RUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQW5CQTtBQXNCQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQTFEQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMFVBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
