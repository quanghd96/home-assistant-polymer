/*! For license information please see chunk.87d4e7382294ffe3e7cc.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    220: function(e, t, i) {
      "use strict";
      i(202), i(194), i(195), i(325);
      var s = i(3);
      const o = s.a`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;
      document.head.appendChild(o.content);
      var n = i(250);
      i(290);
      const l = s.a`<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      [part="content"] {
        padding: 0;
      }

      :host {
        /* TODO: using a legacy mixin (unsupported) */
        --iron-list-items-container: {
          border-width: var(--lumo-space-xs);
          border-style: solid;
          border-color: transparent;
        };
      }

      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */
      :host([opened]) {
        --iron-list-items-container_-_border-width: var(--lumo-space-xs);
        --iron-list-items-container_-_border-style: solid;
        --iron-list-items-container_-_border-color: transparent;
      }

      /* Loading state */

      /* When items are empty, the sinner needs some room */
      :host(:not([closing])) [part~="content"] {
        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
      }

      [part~="overlay"] {
        position: relative;
      }

      :host([loading]) [part~="loader"] {
        box-sizing: border-box;
        width: var(--lumo-icon-size-s);
        height: var(--lumo-icon-size-s);
        position: absolute;
        z-index: 1;
        left: var(--lumo-space-s);
        right: var(--lumo-space-s);
        top: var(--lumo-space-s);
        margin-left: auto;
        margin-inline-start: auto;
        margin-inline-end: 0;
        border: 2px solid transparent;
        border-color:
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color)
          var(--lumo-primary-color);
        border-radius: calc(0.5 * var(--lumo-icon-size-s));
        opacity: 0;
        animation:
          1s linear infinite lumo-combo-box-loader-rotate,
          .3s .1s lumo-combo-box-loader-fade-in both;
        pointer-events: none;
      }

      @keyframes lumo-combo-box-loader-fade-in {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @keyframes lumo-combo-box-loader-rotate {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  </template>
</dom-module>`;
      document.head.appendChild(l.content);
      i(237), i(213), i(219);
      const a = document.createElement("template");
      (a.innerHTML =
        '<dom-module id="lumo-item" theme-for="vaadin-item">\n  <template>\n    <style>\n      :host {\n        display: flex;\n        align-items: center;\n        box-sizing: border-box;\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        line-height: var(--lumo-line-height-xs);\n        padding: 0.5em 1em;\n        min-height: var(--lumo-size-m);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      /* Selectable items have a checkmark icon */\n      :host([tabindex])::before {\n        display: var(--_lumo-item-selected-icon-display, none);\n        content: var(--lumo-icons-checkmark);\n        font-family: lumo-icons;\n        font-size: var(--lumo-icon-size-m);\n        line-height: 1;\n        font-weight: normal;\n        width: 1em;\n        height: 1em;\n        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;\n        color: var(--lumo-primary-text-color);\n        flex: none;\n        opacity: 0;\n        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;\n      }\n\n      :host([selected])::before {\n        opacity: 1;\n      }\n\n      :host([active]:not([selected]))::before {\n        transform: scale(0.8);\n        opacity: 0;\n        transition-duration: 0s;\n      }\n\n      [part="content"] {\n        flex: auto;\n      }\n\n      /* Disabled item */\n\n      :host([disabled]) {\n        color: var(--lumo-disabled-text-color);\n        cursor: default;\n        pointer-events: none;\n      }\n\n      /* Slotted icons */\n\n      :host ::slotted(iron-icon) {\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(a.content);
      var r = i(25),
        h = i(197);
      const d = (e) =>
        class extends e {
          static get properties() {
            return {
              _hasVaadinItemMixin: { value: !0 },
              disabled: {
                type: Boolean,
                value: !1,
                observer: "_disabledChanged",
                reflectToAttribute: !0,
              },
              selected: {
                type: Boolean,
                value: !1,
                reflectToAttribute: !0,
                observer: "_selectedChanged",
              },
              _value: String,
            };
          }
          constructor() {
            super(), this.value;
          }
          get value() {
            return void 0 !== this._value
              ? this._value
              : this.textContent.trim();
          }
          set value(e) {
            this._value = e;
          }
          ready() {
            super.ready();
            const e = this.getAttribute("value");
            null !== e && (this.value = e),
              this.addEventListener("focus", (e) => this._setFocused(!0), !0),
              this.addEventListener("blur", (e) => this._setFocused(!1), !0),
              this.addEventListener("mousedown", (e) => {
                this._setActive((this._mousedown = !0));
                const t = () => {
                  this._setActive((this._mousedown = !1)),
                    document.removeEventListener("mouseup", t);
                };
                document.addEventListener("mouseup", t);
              }),
              this.addEventListener("keydown", (e) => this._onKeydown(e)),
              this.addEventListener("keyup", (e) => this._onKeyup(e));
          }
          disconnectedCallback() {
            super.disconnectedCallback(),
              this.hasAttribute("active") && this._setFocused(!1);
          }
          _selectedChanged(e) {
            this.setAttribute("aria-selected", e);
          }
          _disabledChanged(e) {
            e
              ? ((this.selected = !1),
                this.setAttribute("aria-disabled", "true"),
                this.blur())
              : this.removeAttribute("aria-disabled");
          }
          _setFocused(e) {
            e
              ? (this.setAttribute("focused", ""),
                this._mousedown || this.setAttribute("focus-ring", ""))
              : (this.removeAttribute("focused"),
                this.removeAttribute("focus-ring"),
                this._setActive(!1));
          }
          _setActive(e) {
            e
              ? this.setAttribute("active", "")
              : this.removeAttribute("active");
          }
          _onKeydown(e) {
            /^( |SpaceBar|Enter)$/.test(e.key) &&
              !e.defaultPrevented &&
              (e.preventDefault(), this._setActive(!0));
          }
          _onKeyup(e) {
            this.hasAttribute("active") && (this._setActive(!1), this.click());
          }
        };
      class c extends d(Object(h.a)(r.a)) {
        static get template() {
          return s.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`;
        }
        static get is() {
          return "vaadin-item";
        }
        static get version() {
          return "2.1.0";
        }
      }
      customElements.define(c.is, c);
      const u = s.a`<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">
  <template>
    <style include="lumo-item">
      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */

      :host {
        cursor: default;
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        transition: background-color 100ms;
        border-radius: var(--lumo-border-radius);
        overflow: hidden;
        --_lumo-item-selected-icon-display: block;
      }

      /* ShadyCSS workaround (show the selected item checkmark) */
      :host::before {
        display: block;
      }

      :host(:hover) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([focused]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        :host(:hover) {
          background-color: transparent;
        }

        :host([focused]:not([disabled])) {
          box-shadow: none;
        }
      }
    </style>
  </template>
</dom-module>`;
      document.head.appendChild(u.content);
      var _ = i(248),
        m = i(11),
        p = i(24),
        v = i(32),
        f = i(91),
        g = i(31),
        y = i(62);
      const b = class {
          toString() {
            return "";
          }
        },
        I = (e) =>
          class extends e {
            static get properties() {
              return {
                opened: {
                  type: Boolean,
                  notify: !0,
                  value: !1,
                  reflectToAttribute: !0,
                  observer: "_openedChanged",
                },
                disabled: { type: Boolean, value: !1, reflectToAttribute: !0 },
                readonly: { type: Boolean, value: !1, reflectToAttribute: !0 },
                renderer: Function,
                items: { type: Array, observer: "_itemsChanged" },
                allowCustomValue: { type: Boolean, value: !1 },
                filteredItems: { type: Array },
                value: {
                  type: String,
                  observer: "_valueChanged",
                  notify: !0,
                  value: "",
                },
                _lastCommittedValue: String,
                loading: { type: Boolean, value: !1, reflectToAttribute: !0 },
                _focusedIndex: { type: Number, value: -1 },
                filter: { type: String, value: "", notify: !0 },
                selectedItem: { type: Object, notify: !0 },
                itemLabelPath: {
                  type: String,
                  value: "label",
                  observer: "_itemLabelPathChanged",
                },
                itemValuePath: { type: String, value: "value" },
                itemIdPath: String,
                name: { type: String },
                invalid: {
                  type: Boolean,
                  reflectToAttribute: !0,
                  notify: !0,
                  value: !1,
                },
                _toggleElement: Object,
                _clearElement: Object,
                _inputElementValue: String,
                _closeOnBlurIsPrevented: Boolean,
                _previousDocumentPointerEvents: String,
                _itemTemplate: Object,
              };
            }
            static get observers() {
              return [
                "_filterChanged(filter, itemValuePath, itemLabelPath)",
                "_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)",
                "_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)",
                "_templateOrRendererChanged(_itemTemplate, renderer)",
                "_loadingChanged(loading)",
                "_selectedItemChanged(selectedItem, itemLabelPath)",
                "_toggleElementChanged(_toggleElement)",
              ];
            }
            ready() {
              super.ready(),
                this.addEventListener("focusout", (e) => {
                  const t = this.$.overlay.$.dropdown;
                  t && t.$ && e.relatedTarget === t.$.overlay
                    ? e.composedPath()[0].focus()
                    : this._closeOnBlurIsPrevented || this.close();
                }),
                (this._lastCommittedValue = this.value),
                f.a.requestAvailability(),
                this.$.overlay.addEventListener(
                  "selection-changed",
                  this._overlaySelectedItemChanged.bind(this)
                ),
                this.addEventListener(
                  "vaadin-combo-box-dropdown-closed",
                  this._onClosed.bind(this)
                ),
                this.addEventListener(
                  "vaadin-combo-box-dropdown-opened",
                  this._onOpened.bind(this)
                ),
                this.addEventListener("keydown", this._onKeyDown.bind(this)),
                this.addEventListener("click", this._onClick.bind(this)),
                this.$.overlay.addEventListener(
                  "vaadin-overlay-touch-action",
                  this._onOverlayTouchAction.bind(this)
                ),
                this.addEventListener("touchend", (e) => {
                  this._clearElement &&
                    e.composedPath()[0] === this._clearElement &&
                    (e.preventDefault(), this._clear());
                }),
                (this._observer = new y.a(this, (e) => {
                  this._setTemplateFromNodes(e.addedNodes);
                }));
            }
            render() {
              this.$.overlay._selector &&
                this.$.overlay._selector
                  .querySelectorAll("vaadin-combo-box-item")
                  .forEach((e) => e._render());
            }
            _setTemplateFromNodes(e) {
              this._itemTemplate =
                e.filter((e) => e.localName && "template" === e.localName)[0] ||
                this._itemTemplate;
            }
            _removeNewRendererOrTemplate(e, t, i, s) {
              e !== t
                ? (this._itemTemplate = void 0)
                : i !== s && (this.renderer = void 0);
            }
            _templateOrRendererChanged(e, t) {
              if (e && t)
                throw (this._removeNewRendererOrTemplate(
                  e,
                  this._oldTemplate,
                  t,
                  this._oldRenderer
                ),
                new Error(
                  "You should only use either a renderer or a template for combo box items"
                ));
              (this._oldTemplate = e), (this._oldRenderer = t);
            }
            open() {
              this.disabled || this.readonly || (this.opened = !0);
            }
            close() {
              this.opened = !1;
            }
            _openedChanged(e, t) {
              void 0 !== t &&
                (this.opened
                  ? ((this._openedWithFocusRing =
                      this.hasAttribute("focus-ring") ||
                      (this.focusElement &&
                        this.focusElement.hasAttribute("focus-ring"))),
                    this.$.overlay.touchDevice || this.focused || this.focus())
                  : (this._openedWithFocusRing &&
                      this.hasAttribute("focused") &&
                      this.focusElement.setAttribute("focus-ring", ""),
                    this._onClosed()));
            }
            _onOverlayTouchAction(e) {
              (this._closeOnBlurIsPrevented = !0),
                this.inputElement.blur(),
                (this._closeOnBlurIsPrevented = !1);
            }
            _onClick(e) {
              this._closeOnBlurIsPrevented = !0;
              const t = e.composedPath();
              -1 !== t.indexOf(this._clearElement)
                ? (this._clear(), this.focus())
                : -1 !== t.indexOf(this.inputElement) &&
                  (t.indexOf(this._toggleElement) > -1 && this.opened
                    ? this.close()
                    : this.open()),
                (this._closeOnBlurIsPrevented = !1);
            }
            _onKeyDown(e) {
              this._isEventKey(e, "down")
                ? ((this._closeOnBlurIsPrevented = !0),
                  this._onArrowDown(),
                  (this._closeOnBlurIsPrevented = !1),
                  e.preventDefault())
                : this._isEventKey(e, "up")
                ? ((this._closeOnBlurIsPrevented = !0),
                  this._onArrowUp(),
                  (this._closeOnBlurIsPrevented = !1),
                  e.preventDefault())
                : this._isEventKey(e, "enter")
                ? this._onEnter(e)
                : this._isEventKey(e, "esc") && this._onEscape(e);
            }
            _isEventKey(e, t) {
              return g.a.keyboardEventMatchesKeys(e, t);
            }
            _getItemLabel(e) {
              return this.$.overlay.getItemLabel(e);
            }
            _getItemValue(e) {
              let t =
                e && this.itemValuePath
                  ? this.get(this.itemValuePath, e)
                  : void 0;
              return void 0 === t && (t = e ? e.toString() : ""), t;
            }
            _onArrowDown() {
              this.opened
                ? this.$.overlay._items &&
                  ((this._focusedIndex = Math.min(
                    this.$.overlay._items.length - 1,
                    this._focusedIndex + 1
                  )),
                  this._prefillFocusedItemLabel())
                : this.open();
            }
            _onArrowUp() {
              this.opened
                ? (this._focusedIndex > -1
                    ? (this._focusedIndex = Math.max(0, this._focusedIndex - 1))
                    : this.$.overlay._items &&
                      (this._focusedIndex = this.$.overlay._items.length - 1),
                  this._prefillFocusedItemLabel())
                : this.open();
            }
            _prefillFocusedItemLabel() {
              this._focusedIndex > -1 &&
                ((this._inputElementValue = ""),
                setTimeout(() => {
                  (this._inputElementValue = this._getItemLabel(
                    this.$.overlay._focusedItem
                  )),
                    this._markAllSelectionRange();
                }, 1));
            }
            _setSelectionRange(e, t) {
              const i = this._nativeInput || this.inputElement;
              if (this.hasAttribute("focused") && i && i.setSelectionRange)
                try {
                  i.setSelectionRange(e, t);
                } catch (s) {}
            }
            _markAllSelectionRange() {
              void 0 !== this._inputElementValue &&
                this._setSelectionRange(0, this._inputElementValue.length);
            }
            _clearSelectionRange() {
              if (void 0 !== this._inputElementValue) {
                const e = this._inputElementValue
                  ? this._inputElementValue.length
                  : 0;
                this._setSelectionRange(e, e);
              }
            }
            _onEnter(e) {
              this.opened &&
                (this.allowCustomValue ||
                  "" === this._inputElementValue ||
                  this._focusedIndex > -1) &&
                (this.close(), e.preventDefault());
            }
            _onEscape(e) {
              this.opened &&
                (this._stopPropagation(e),
                this._focusedIndex > -1
                  ? ((this._focusedIndex = -1), this._revertInputValue())
                  : this.cancel());
            }
            _toggleElementChanged(e) {
              e && e.addEventListener("mousedown", (e) => e.preventDefault());
            }
            _clear() {
              (this.selectedItem = null),
                this.allowCustomValue && (this.value = ""),
                this.opened || this._detectAndDispatchChange();
            }
            cancel() {
              this._revertInputValueToValue(),
                (this._lastCommittedValue = this.value),
                this.close();
            }
            _onOpened() {
              Object(p.b)(),
                this.$.overlay.ensureItemsRendered(),
                this.$.overlay._selector.toggleScrollListener(!0),
                this.$.overlay.updateViewportBoundaries(),
                this.$.overlay._selector._increasePoolIfNeeded(),
                setTimeout(() => this._resizeDropdown(), 1),
                window.requestAnimationFrame(() =>
                  this.$.overlay.adjustScrollPosition()
                ),
                (this._lastCommittedValue = this.value);
            }
            _onClosed() {
              if (
                (this.opened && this.close(),
                this.$.overlay._items && this._focusedIndex > -1)
              ) {
                const e = this.$.overlay._items[this._focusedIndex];
                this.selectedItem !== e && (this.selectedItem = e),
                  (this._inputElementValue = this._getItemLabel(
                    this.selectedItem
                  ));
              } else if (
                "" === this._inputElementValue ||
                void 0 === this._inputElementValue
              )
                (this.selectedItem = null),
                  this.allowCustomValue && (this.value = "");
              else if (this.allowCustomValue) {
                const e = new CustomEvent("custom-value-set", {
                  detail: this._inputElementValue,
                  composed: !0,
                  cancelable: !0,
                  bubbles: !0,
                });
                if ((this.dispatchEvent(e), !e.defaultPrevented)) {
                  const e = this._inputElementValue;
                  this._selectItemForValue(e), (this.value = e);
                }
              } else
                this._inputElementValue = this.selectedItem
                  ? this._getItemLabel(this.selectedItem)
                  : "";
              this._detectAndDispatchChange(),
                this._clearSelectionRange(),
                this.dataProvider || (this.filter = "");
            }
            get _propertyForValue() {
              return "value";
            }
            _inputValueChanged(e) {
              -1 !== e.composedPath().indexOf(this.inputElement) &&
                ((this._inputElementValue = this.inputElement[
                  this._propertyForValue
                ]),
                this._filterFromInput());
            }
            _filterFromInput(e) {
              this.opened || this.open(),
                this.filter === this._inputElementValue
                  ? this._filterChanged(
                      this.filter,
                      this.itemValuePath,
                      this.itemLabelPath
                    )
                  : (this.filter = this._inputElementValue);
            }
            _itemLabelPathChanged(e, t) {
              "string" != typeof e &&
                console.error("You should set itemLabelPath to a valid string");
            }
            _filterChanged(e, t, i) {
              void 0 !== e &&
                (this.items
                  ? (this.filteredItems = this._filterItems(this.items, e))
                  : this._filteredItemsChanged(
                      { path: "filteredItems", value: this.filteredItems },
                      t,
                      i
                    ));
            }
            _loadingChanged(e) {
              e && (this._focusedIndex = -1);
            }
            _revertInputValue() {
              "" !== this.filter
                ? (this._inputElementValue = this.filter)
                : this._revertInputValueToValue(),
                this._clearSelectionRange();
            }
            _revertInputValueToValue() {
              this.allowCustomValue && !this.selectedItem
                ? (this._inputElementValue = this.value)
                : (this._inputElementValue = this._getItemLabel(
                    this.selectedItem
                  ));
            }
            _resizeDropdown() {
              this.$.overlay.$.dropdown.notifyResize();
            }
            _updateHasValue(e) {
              e
                ? this.setAttribute("has-value", "")
                : this.removeAttribute("has-value");
            }
            _selectedItemChanged(e, t) {
              if (null == e)
                this.filteredItems &&
                  (this.allowCustomValue || (this.value = ""),
                  this._updateHasValue("" !== this.value),
                  (this._inputElementValue = this.value));
              else {
                const t = this._getItemValue(e);
                this.value !== t && (this.value = t),
                  this._updateHasValue(!0),
                  (this._inputElementValue = this._getItemLabel(e)),
                  this.inputElement &&
                    (this.inputElement[
                      this._propertyForValue
                    ] = this._inputElementValue);
              }
              (this.$.overlay._selectedItem = e),
                this.filteredItems &&
                  this.$.overlay._items &&
                  (this._focusedIndex = this.filteredItems.indexOf(e));
            }
            _valueChanged(e, t) {
              if ("" !== e || void 0 !== t) {
                if (this._isValidValue(e)) {
                  let t;
                  this._getItemValue(this.selectedItem) !== e
                    ? this._selectItemForValue(e)
                    : (t = this.selectedItem),
                    !t &&
                      this.allowCustomValue &&
                      (this._inputElementValue = e),
                    this._updateHasValue("" !== this.value);
                } else this.selectedItem = null;
                this._lastCommittedValue = void 0;
              }
            }
            _detectAndDispatchChange() {
              this.value !== this._lastCommittedValue &&
                (this.dispatchEvent(new CustomEvent("change", { bubbles: !0 })),
                (this._lastCommittedValue = this.value));
            }
            _itemsChanged(e, t) {
              this._ensureItemsOrDataProvider(() => {
                this.items = t;
              });
            }
            _itemsOrPathsChanged(e, t, i) {
              if (
                void 0 !== e.value &&
                ("items" === e.path || "items.splices" === e.path)
              ) {
                this.filteredItems = this.items
                  ? this.items.slice(0)
                  : this.items;
                const e = this._indexOfValue(this.value, this.items);
                this._focusedIndex = e;
                const t = e > -1 && this.items[e];
                t && (this.selectedItem = t);
              }
            }
            _filteredItemsChanged(e, t, i) {
              void 0 !== e.value &&
                (("filteredItems" !== e.path &&
                  "filteredItems.splices" !== e.path) ||
                  (this._setOverlayItems(this.filteredItems),
                  (this._focusedIndex = this.opened
                    ? this.$.overlay.indexOfLabel(this.filter)
                    : this._indexOfValue(this.value, this.filteredItems)),
                  this.opened && this._repositionOverlay()));
            }
            _filterItems(e, t) {
              return e
                ? e.filter(
                    (e) => (
                      (t = t ? t.toString().toLowerCase() : ""),
                      this._getItemLabel(e)
                        .toString()
                        .toLowerCase()
                        .indexOf(t) > -1
                    )
                  )
                : e;
            }
            _selectItemForValue(e) {
              const t = this._indexOfValue(e, this.filteredItems),
                i = this.selectedItem;
              (this.selectedItem =
                t >= 0
                  ? this.filteredItems[t]
                  : this.dataProvider && void 0 === this.selectedItem
                  ? void 0
                  : null),
                null === this.selectedItem &&
                  null === i &&
                  this._selectedItemChanged(this.selectedItem);
            }
            _setOverlayItems(e) {
              this.$.overlay.set("_items", e),
                this.opened && this._resizeDropdown();
            }
            _repositionOverlay() {
              setTimeout(() => {
                this._resizeDropdown(),
                  this.$.overlay.updateViewportBoundaries(),
                  this.$.overlay.ensureItemsRendered(),
                  this.$.overlay._selector.notifyResize(),
                  Object(p.b)();
              }, 1);
            }
            _indexOfValue(e, t) {
              if (t && this._isValidValue(e))
                for (let i = 0; i < t.length; i++)
                  if (this._getItemValue(t[i]) === e) return i;
              return -1;
            }
            _isValidValue(e) {
              return null != e;
            }
            _overlaySelectedItemChanged(e) {
              e.stopPropagation(),
                e.detail.item instanceof b ||
                  (this.opened && this.close(),
                  this.selectedItem !== e.detail.item &&
                    ((this.selectedItem = e.detail.item),
                    this._detectAndDispatchChange()));
            }
            validate() {
              return !(this.invalid = !this.checkValidity());
            }
            checkValidity() {
              if (this.inputElement.validate)
                return this.inputElement.validate();
            }
            get _instanceProps() {
              return { item: !0, index: !0, selected: !0, focused: !0 };
            }
            _ensureTemplatized() {
              if (!this._TemplateClass) {
                const e = this._itemTemplate || this._getRootTemplate();
                e &&
                  (this._TemplateClass = Object(v.b)(e, this, {
                    instanceProps: this._instanceProps,
                    forwardHostProp: function(e, t) {
                      const i = this.$.overlay._selector.querySelectorAll(
                        "vaadin-combo-box-item"
                      );
                      Array.prototype.forEach.call(i, (i) => {
                        i._itemTemplateInstance &&
                          (i._itemTemplateInstance.set(e, t),
                          i._itemTemplateInstance.notifyPath(e, t, !0));
                      });
                    },
                  }));
              }
            }
            _getRootTemplate() {
              return Array.prototype.filter.call(
                this.children,
                (e) => "TEMPLATE" === e.tagName
              )[0];
            }
            _preventInputBlur() {
              this._toggleElement &&
                this._toggleElement.addEventListener(
                  "click",
                  this._preventDefault
                ),
                this._clearElement &&
                  this._clearElement.addEventListener(
                    "click",
                    this._preventDefault
                  );
            }
            _restoreInputBlur() {
              this._toggleElement &&
                this._toggleElement.removeEventListener(
                  "click",
                  this._preventDefault
                ),
                this._clearElement &&
                  this._clearElement.removeEventListener(
                    "click",
                    this._preventDefault
                  );
            }
            _preventDefault(e) {
              e.preventDefault();
            }
            _stopPropagation(e) {
              e.stopPropagation();
            }
          },
        x = (e) =>
          class extends e {
            static get properties() {
              return {
                pageSize: {
                  type: Number,
                  value: 50,
                  observer: "_pageSizeChanged",
                },
                size: { type: Number, observer: "_sizeChanged" },
                dataProvider: {
                  type: Object,
                  observer: "_dataProviderChanged",
                },
                _pendingRequests: { value: () => ({}) },
                __placeHolder: { value: new b() },
              };
            }
            static get observers() {
              return [
                "_dataProviderFilterChanged(filter, dataProvider)",
                "_dataProviderClearFilter(dataProvider, opened, value)",
                "_warnDataProviderValue(dataProvider, value)",
                "_ensureFirstPage(opened)",
              ];
            }
            _dataProviderClearFilter(e, t, i) {
              e &&
                this.filter &&
                ((this.size = void 0),
                (this._pendingRequests = {}),
                (this.filter = ""),
                this.clearCache());
            }
            ready() {
              super.ready(),
                this.clearCache(),
                this.$.overlay.addEventListener("index-requested", (e) => {
                  const t = e.detail.index;
                  if (void 0 !== t) {
                    const e = this._getPageForIndex(t);
                    this._shouldLoadPage(e) && this._loadPage(e);
                  }
                });
            }
            _dataProviderFilterChanged() {
              this.dataProvider &&
                this.opened &&
                ((this.size = void 0),
                (this._pendingRequests = {}),
                this.clearCache());
            }
            _ensureFirstPage(e) {
              e && this._shouldLoadPage(0) && this._loadPage(0);
            }
            _shouldLoadPage(e) {
              if (!this.filteredItems || this._forceNextRequest)
                return (this._forceNextRequest = !1), !0;
              const t = this.filteredItems[e * this.pageSize];
              return void 0 !== t ? t instanceof b : void 0 === this.size;
            }
            _loadPage(e) {
              if (!this._pendingRequests[e] && this.dataProvider) {
                this.loading = !0;
                const t = {
                    page: e,
                    pageSize: this.pageSize,
                    filter: this.filter,
                  },
                  i = (s, o) => {
                    if (this._pendingRequests[e] === i) {
                      if (this.filteredItems)
                        this.splice(
                          "filteredItems",
                          t.page * t.pageSize,
                          s.length,
                          ...s
                        );
                      else {
                        const e = [];
                        e.splice(t.page * t.pageSize, s.length, ...s),
                          (this.filteredItems = e);
                      }
                      this._isValidValue(this.value) &&
                        this._getItemValue(this.selectedItem) !== this.value &&
                        this._selectItemForValue(this.value),
                        (this.size = o),
                        delete this._pendingRequests[e],
                        0 === Object.keys(this._pendingRequests).length &&
                          (this.loading = !1);
                    }
                  };
                (this._pendingRequests[e] = i), this.dataProvider(t, i);
              }
            }
            _getPageForIndex(e) {
              return Math.floor(e / this.pageSize);
            }
            clearCache() {
              if (!this.dataProvider) return;
              this._pendingRequests = {};
              const e = [];
              for (let t = 0; t < (this.size || 0); t++)
                e.push(this.__placeHolder);
              (this.filteredItems = e),
                this.opened ? this._loadPage(0) : (this._forceNextRequest = !0);
            }
            _sizeChanged(e = 0) {
              const t = (this.filteredItems || []).slice(0, e);
              for (let i = 0; i < e; i++)
                t[i] = void 0 !== t[i] ? t[i] : this.__placeHolder;
              this.filteredItems = t;
            }
            _pageSizeChanged(e, t) {
              if (Math.floor(e) !== e || 0 === e)
                throw ((this.pageSize = t),
                new Error("`pageSize` value must be an integer > 0"));
              this.clearCache();
            }
            _dataProviderChanged(e, t) {
              this._ensureItemsOrDataProvider(() => {
                this.dataProvider = t;
              });
            }
            _ensureItemsOrDataProvider(e) {
              if (void 0 !== this.items && void 0 !== this.dataProvider)
                throw (e(),
                new Error(
                  "Using `items` and `dataProvider` together is not supported"
                ));
            }
            _warnDataProviderValue(e, t) {
              if (
                e &&
                "" !== t &&
                (void 0 === this.selectedItem || null === this.selectedItem)
              ) {
                const e = this._indexOfValue(t, this.filteredItems);
                (e < 0 || !this._getItemLabel(this.filteredItems[e])) &&
                  console.warn(
                    "Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`"
                  );
              }
            }
          };
      i(4);
      var w = i(95),
        P = i(241),
        S = i(98),
        C = i(5),
        V = i(1),
        E = i(97),
        T = i(21),
        O = i(2),
        A = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),
        R = A && A[1] >= 8;
      Object(C.a)({
        _template: s.a`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,
        is: "iron-list",
        properties: {
          items: { type: Array },
          as: { type: String, value: "item" },
          indexAs: { type: String, value: "index" },
          selectedAs: { type: String, value: "selected" },
          grid: {
            type: Boolean,
            value: !1,
            reflectToAttribute: !0,
            observer: "_gridChanged",
          },
          selectionEnabled: { type: Boolean, value: !1 },
          selectedItem: { type: Object, notify: !0 },
          selectedItems: { type: Object, notify: !0 },
          multiSelection: { type: Boolean, value: !1 },
          scrollOffset: { type: Number, value: 0 },
        },
        observers: [
          "_itemsChanged(items.*)",
          "_selectionEnabledChanged(selectionEnabled)",
          "_multiSelectionChanged(multiSelection)",
          "_setOverflow(scrollTarget, scrollOffset)",
        ],
        behaviors: [E.a, w.a, P.a, S.a],
        _ratio: 0.5,
        _scrollerPaddingTop: 0,
        _scrollPosition: 0,
        _physicalSize: 0,
        _physicalAverage: 0,
        _physicalAverageCount: 0,
        _physicalTop: 0,
        _virtualCount: 0,
        _estScrollHeight: 0,
        _scrollHeight: 0,
        _viewportHeight: 0,
        _viewportWidth: 0,
        _physicalItems: null,
        _physicalSizes: null,
        _firstVisibleIndexVal: null,
        _lastVisibleIndexVal: null,
        _maxPages: 2,
        _focusedItem: null,
        _focusedVirtualIndex: -1,
        _focusedPhysicalIndex: -1,
        _offscreenFocusedItem: null,
        _focusBackfillItem: null,
        _itemsPerRow: 1,
        _itemWidth: 0,
        _rowHeight: 0,
        _templateCost: 0,
        _parentModel: !0,
        get _physicalBottom() {
          return this._physicalTop + this._physicalSize;
        },
        get _scrollBottom() {
          return this._scrollPosition + this._viewportHeight;
        },
        get _virtualEnd() {
          return this._virtualStart + this._physicalCount - 1;
        },
        get _hiddenContentSize() {
          return (
            (this.grid
              ? this._physicalRows * this._rowHeight
              : this._physicalSize) - this._viewportHeight
          );
        },
        get _itemsParent() {
          return Object(V.a)(Object(V.a)(this._userTemplate).parentNode);
        },
        get _maxScrollTop() {
          return (
            this._estScrollHeight - this._viewportHeight + this._scrollOffset
          );
        },
        get _maxVirtualStart() {
          var e = this._convertIndexToCompleteRow(this._virtualCount);
          return Math.max(0, e - this._physicalCount);
        },
        set _virtualStart(e) {
          (e = this._clamp(e, 0, this._maxVirtualStart)),
            this.grid && (e -= e % this._itemsPerRow),
            (this._virtualStartVal = e);
        },
        get _virtualStart() {
          return this._virtualStartVal || 0;
        },
        set _physicalStart(e) {
          (e %= this._physicalCount) < 0 && (e = this._physicalCount + e),
            this.grid && (e -= e % this._itemsPerRow),
            (this._physicalStartVal = e);
        },
        get _physicalStart() {
          return this._physicalStartVal || 0;
        },
        get _physicalEnd() {
          return (
            (this._physicalStart + this._physicalCount - 1) %
            this._physicalCount
          );
        },
        set _physicalCount(e) {
          this._physicalCountVal = e;
        },
        get _physicalCount() {
          return this._physicalCountVal || 0;
        },
        get _optPhysicalSize() {
          return 0 === this._viewportHeight
            ? 1 / 0
            : this._viewportHeight * this._maxPages;
        },
        get _isVisible() {
          return Boolean(this.offsetWidth || this.offsetHeight);
        },
        get firstVisibleIndex() {
          var e = this._firstVisibleIndexVal;
          if (null == e) {
            var t = this._physicalTop + this._scrollOffset;
            (e =
              this._iterateItems(function(e, i) {
                return (t += this._getPhysicalSizeIncrement(e)) >
                  this._scrollPosition
                  ? this.grid
                    ? i - (i % this._itemsPerRow)
                    : i
                  : this.grid && this._virtualCount - 1 === i
                  ? i - (i % this._itemsPerRow)
                  : void 0;
              }) || 0),
              (this._firstVisibleIndexVal = e);
          }
          return e;
        },
        get lastVisibleIndex() {
          var e = this._lastVisibleIndexVal;
          if (null == e) {
            if (this.grid)
              e = Math.min(
                this._virtualCount,
                this.firstVisibleIndex +
                  this._estRowsInView * this._itemsPerRow -
                  1
              );
            else {
              var t = this._physicalTop + this._scrollOffset;
              this._iterateItems(function(i, s) {
                t < this._scrollBottom && (e = s),
                  (t += this._getPhysicalSizeIncrement(i));
              });
            }
            this._lastVisibleIndexVal = e;
          }
          return e;
        },
        get _defaultScrollTarget() {
          return this;
        },
        get _virtualRowCount() {
          return Math.ceil(this._virtualCount / this._itemsPerRow);
        },
        get _estRowsInView() {
          return Math.ceil(this._viewportHeight / this._rowHeight);
        },
        get _physicalRows() {
          return Math.ceil(this._physicalCount / this._itemsPerRow);
        },
        get _scrollOffset() {
          return this._scrollerPaddingTop + this.scrollOffset;
        },
        ready: function() {
          this.addEventListener("focus", this._didFocus.bind(this), !0);
        },
        attached: function() {
          this._debounce("_render", this._render, m.a),
            this.listen(this, "iron-resize", "_resizeHandler"),
            this.listen(this, "keydown", "_keydownHandler");
        },
        detached: function() {
          this.unlisten(this, "iron-resize", "_resizeHandler"),
            this.unlisten(this, "keydown", "_keydownHandler");
        },
        _setOverflow: function(e) {
          (this.style.webkitOverflowScrolling = e === this ? "touch" : ""),
            (this.style.overflowY = e === this ? "auto" : ""),
            (this._lastVisibleIndexVal = null),
            (this._firstVisibleIndexVal = null),
            this._debounce("_render", this._render, m.a);
        },
        updateViewportBoundaries: function() {
          var e = window.getComputedStyle(this);
          (this._scrollerPaddingTop =
            this.scrollTarget === this ? 0 : parseInt(e["padding-top"], 10)),
            (this._isRTL = Boolean("rtl" === e.direction)),
            (this._viewportWidth = this.$.items.offsetWidth),
            (this._viewportHeight = this._scrollTargetHeight),
            this.grid && this._updateGridMetrics();
        },
        _scrollHandler: function() {
          var e = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop)),
            t = e - this._scrollPosition,
            i = t >= 0;
          if (
            ((this._scrollPosition = e),
            (this._firstVisibleIndexVal = null),
            (this._lastVisibleIndexVal = null),
            Math.abs(t) > this._physicalSize && this._physicalSize > 0)
          ) {
            t -= this._scrollOffset;
            var s = Math.round(t / this._physicalAverage) * this._itemsPerRow;
            (this._virtualStart = this._virtualStart + s),
              (this._physicalStart = this._physicalStart + s),
              (this._physicalTop =
                Math.floor(this._virtualStart / this._itemsPerRow) *
                this._physicalAverage),
              this._update();
          } else if (this._physicalCount > 0) {
            var o = this._getReusables(i);
            i
              ? ((this._physicalTop = o.physicalTop),
                (this._virtualStart = this._virtualStart + o.indexes.length),
                (this._physicalStart = this._physicalStart + o.indexes.length))
              : ((this._virtualStart = this._virtualStart - o.indexes.length),
                (this._physicalStart = this._physicalStart - o.indexes.length)),
              this._update(o.indexes, i ? null : o.indexes),
              this._debounce(
                "_increasePoolIfNeeded",
                this._increasePoolIfNeeded.bind(this, 0),
                m.c
              );
          }
        },
        _getReusables: function(e) {
          var t,
            i,
            s,
            o = [],
            n = this._hiddenContentSize * this._ratio,
            l = this._virtualStart,
            a = this._virtualEnd,
            r = this._physicalCount,
            h = this._physicalTop + this._scrollOffset,
            d = this._physicalBottom + this._scrollOffset,
            c = this._scrollTop,
            u = this._scrollBottom;
          for (
            e
              ? ((t = this._physicalStart), this._physicalEnd, (i = c - h))
              : ((t = this._physicalEnd), this._physicalStart, (i = d - u));
            (i -= s = this._getPhysicalSizeIncrement(t)),
              !(o.length >= r || i <= n);

          )
            if (e) {
              if (a + o.length + 1 >= this._virtualCount) break;
              if (h + s >= c - this._scrollOffset) break;
              o.push(t), (h += s), (t = (t + 1) % r);
            } else {
              if (l - o.length <= 0) break;
              if (h + this._physicalSize - s <= u) break;
              o.push(t), (h -= s), (t = 0 === t ? r - 1 : t - 1);
            }
          return { indexes: o, physicalTop: h - this._scrollOffset };
        },
        _update: function(e, t) {
          if (!((e && 0 === e.length) || 0 === this._physicalCount)) {
            if (
              (this._manageFocus(),
              this._assignModels(e),
              this._updateMetrics(e),
              t)
            )
              for (; t.length; ) {
                var i = t.pop();
                this._physicalTop -= this._getPhysicalSizeIncrement(i);
              }
            this._positionItems(), this._updateScrollerSize();
          }
        },
        _createPool: function(e) {
          var t, i;
          this._ensureTemplatized();
          var s = new Array(e);
          for (t = 0; t < e; t++)
            (i = this.stamp(null)),
              (s[t] = i.root.querySelector("*")),
              this._itemsParent.appendChild(i.root);
          return s;
        },
        _isClientFull: function() {
          return (
            0 != this._scrollBottom &&
            this._physicalBottom - 1 >= this._scrollBottom &&
            this._physicalTop <= this._scrollPosition
          );
        },
        _increasePoolIfNeeded: function(e) {
          var t = this._clamp(
            this._physicalCount + e,
            3,
            this._virtualCount - this._virtualStart
          );
          if (((t = this._convertIndexToCompleteRow(t)), this.grid)) {
            var i = t % this._itemsPerRow;
            i && t - i <= this._physicalCount && (t += this._itemsPerRow),
              (t -= i);
          }
          var s = t - this._physicalCount,
            o = Math.round(0.5 * this._physicalCount);
          if (!(s < 0)) {
            if (s > 0) {
              var n = window.performance.now();
              [].push.apply(this._physicalItems, this._createPool(s));
              for (var l = 0; l < s; l++) this._physicalSizes.push(0);
              (this._physicalCount = this._physicalCount + s),
                this._physicalStart > this._physicalEnd &&
                  this._isIndexRendered(this._focusedVirtualIndex) &&
                  this._getPhysicalIndex(this._focusedVirtualIndex) <
                    this._physicalEnd &&
                  (this._physicalStart = this._physicalStart + s),
                this._update(),
                (this._templateCost = (window.performance.now() - n) / s),
                (o = Math.round(0.5 * this._physicalCount));
            }
            this._virtualEnd >= this._virtualCount - 1 ||
              0 === o ||
              (this._isClientFull()
                ? this._physicalSize < this._optPhysicalSize &&
                  this._debounce(
                    "_increasePoolIfNeeded",
                    this._increasePoolIfNeeded.bind(
                      this,
                      this._clamp(Math.round(50 / this._templateCost), 1, o)
                    ),
                    m.b
                  )
                : this._debounce(
                    "_increasePoolIfNeeded",
                    this._increasePoolIfNeeded.bind(this, o),
                    m.c
                  ));
          }
        },
        _render: function() {
          if (this.isAttached && this._isVisible)
            if (0 !== this._physicalCount) {
              var e = this._getReusables(!0);
              (this._physicalTop = e.physicalTop),
                (this._virtualStart = this._virtualStart + e.indexes.length),
                (this._physicalStart = this._physicalStart + e.indexes.length),
                this._update(e.indexes),
                this._update(),
                this._increasePoolIfNeeded(0);
            } else
              this._virtualCount > 0 &&
                (this.updateViewportBoundaries(),
                this._increasePoolIfNeeded(3));
        },
        _ensureTemplatized: function() {
          if (!this.ctor) {
            (this._userTemplate = this.queryEffectiveChildren("template")),
              this._userTemplate ||
                console.warn(
                  "iron-list requires a template to be provided in light-dom"
                );
            var e = { __key__: !0 };
            (e[this.as] = !0),
              (e[this.indexAs] = !0),
              (e[this.selectedAs] = !0),
              (e.tabIndex = !0),
              (this._instanceProps = e),
              this.templatize(this._userTemplate, this.mutableData);
          }
        },
        _gridChanged: function(e, t) {
          void 0 !== t &&
            (this.notifyResize(),
            Object(p.b)(),
            e && this._updateGridMetrics());
        },
        _itemsChanged: function(e) {
          if ("items" === e.path)
            (this._virtualStart = 0),
              (this._physicalTop = 0),
              (this._virtualCount = this.items ? this.items.length : 0),
              (this._physicalIndexForKey = {}),
              (this._firstVisibleIndexVal = null),
              (this._lastVisibleIndexVal = null),
              (this._physicalCount = this._physicalCount || 0),
              (this._physicalItems = this._physicalItems || []),
              (this._physicalSizes = this._physicalSizes || []),
              (this._physicalStart = 0),
              this._scrollTop > this._scrollOffset &&
                this._resetScrollPosition(0),
              this._removeFocusedItem(),
              this._debounce("_render", this._render, m.a);
          else if ("items.splices" === e.path) {
            if (
              (this._adjustVirtualIndex(e.value.indexSplices),
              (this._virtualCount = this.items ? this.items.length : 0),
              e.value.indexSplices.some(function(e) {
                return e.addedCount > 0 || e.removed.length > 0;
              }))
            ) {
              var t = this._getActiveElement();
              this.contains(t) && t.blur();
            }
            var i = e.value.indexSplices.some(function(e) {
              return (
                e.index + e.addedCount >= this._virtualStart &&
                e.index <= this._virtualEnd
              );
            }, this);
            (this._isClientFull() && !i) ||
              this._debounce("_render", this._render, m.a);
          } else
            "items.length" !== e.path && this._forwardItemPath(e.path, e.value);
        },
        _forwardItemPath: function(e, t) {
          var i,
            s,
            o,
            n = (e = e.slice(6)).indexOf(".");
          -1 === n && (n = e.length);
          var l = this.modelForElement(this._offscreenFocusedItem),
            a = parseInt(e.substring(0, n), 10);
          (i = this._isIndexRendered(a))
            ? ((s = this._getPhysicalIndex(a)),
              (o = this.modelForElement(this._physicalItems[s])))
            : l && (o = l),
            o &&
              o[this.indexAs] === a &&
              ((e = e.substring(n + 1)),
              (e = this.as + (e ? "." + e : "")),
              o._setPendingPropertyOrPath(e, t, !1, !0),
              o._flushProperties && o._flushProperties(!0),
              i &&
                (this._updateMetrics([s]),
                this._positionItems(),
                this._updateScrollerSize()));
        },
        _adjustVirtualIndex: function(e) {
          e.forEach(function(e) {
            if (
              (e.removed.forEach(this._removeItem, this),
              e.index < this._virtualStart)
            ) {
              var t = Math.max(
                e.addedCount - e.removed.length,
                e.index - this._virtualStart
              );
              (this._virtualStart = this._virtualStart + t),
                this._focusedVirtualIndex >= 0 &&
                  (this._focusedVirtualIndex = this._focusedVirtualIndex + t);
            }
          }, this);
        },
        _removeItem: function(e) {
          this.$.selector.deselect(e),
            this._focusedItem &&
              this.modelForElement(this._focusedItem)[this.as] === e &&
              this._removeFocusedItem();
        },
        _iterateItems: function(e, t) {
          var i, s, o, n;
          if (2 === arguments.length && t) {
            for (n = 0; n < t.length; n++)
              if (
                ((i = t[n]),
                (s = this._computeVidx(i)),
                null != (o = e.call(this, i, s)))
              )
                return o;
          } else {
            for (
              i = this._physicalStart, s = this._virtualStart;
              i < this._physicalCount;
              i++, s++
            )
              if (null != (o = e.call(this, i, s))) return o;
            for (i = 0; i < this._physicalStart; i++, s++)
              if (null != (o = e.call(this, i, s))) return o;
          }
        },
        _computeVidx: function(e) {
          return e >= this._physicalStart
            ? this._virtualStart + (e - this._physicalStart)
            : this._virtualStart +
                (this._physicalCount - this._physicalStart) +
                e;
        },
        _assignModels: function(e) {
          this._iterateItems(function(e, t) {
            var i = this._physicalItems[e],
              s = this.items && this.items[t];
            if (null != s) {
              var o = this.modelForElement(i);
              (o.__key__ = null),
                this._forwardProperty(o, this.as, s),
                this._forwardProperty(
                  o,
                  this.selectedAs,
                  this.$.selector.isSelected(s)
                ),
                this._forwardProperty(o, this.indexAs, t),
                this._forwardProperty(
                  o,
                  "tabIndex",
                  this._focusedVirtualIndex === t ? 0 : -1
                ),
                (this._physicalIndexForKey[o.__key__] = e),
                o._flushProperties && o._flushProperties(!0),
                i.removeAttribute("hidden");
            } else i.setAttribute("hidden", "");
          }, e);
        },
        _updateMetrics: function(e) {
          Object(p.b)();
          var t = 0,
            i = 0,
            s = this._physicalAverageCount,
            o = this._physicalAverage;
          this._iterateItems(function(e, s) {
            (i += this._physicalSizes[e]),
              (this._physicalSizes[e] = this._physicalItems[e].offsetHeight),
              (t += this._physicalSizes[e]),
              (this._physicalAverageCount += this._physicalSizes[e] ? 1 : 0);
          }, e),
            this.grid
              ? (this._updateGridMetrics(),
                (this._physicalSize =
                  Math.ceil(this._physicalCount / this._itemsPerRow) *
                  this._rowHeight))
              : ((i =
                  1 === this._itemsPerRow
                    ? i
                    : Math.ceil(this._physicalCount / this._itemsPerRow) *
                      this._rowHeight),
                (this._physicalSize = this._physicalSize + t - i),
                (this._itemsPerRow = 1)),
            this._physicalAverageCount !== s &&
              (this._physicalAverage = Math.round(
                (o * s + t) / this._physicalAverageCount
              ));
        },
        _updateGridMetrics: function() {
          (this._itemWidth =
            this._physicalCount > 0
              ? this._physicalItems[0].getBoundingClientRect().width
              : 200),
            (this._rowHeight =
              this._physicalCount > 0
                ? this._physicalItems[0].offsetHeight
                : 200),
            (this._itemsPerRow = this._itemWidth
              ? Math.floor(this._viewportWidth / this._itemWidth)
              : this._itemsPerRow);
        },
        _positionItems: function() {
          this._adjustScrollPosition();
          var e = this._physicalTop;
          if (this.grid) {
            var t = this._itemsPerRow * this._itemWidth,
              i = (this._viewportWidth - t) / 2;
            this._iterateItems(function(t, s) {
              var o = s % this._itemsPerRow,
                n = Math.floor(o * this._itemWidth + i);
              this._isRTL && (n *= -1),
                this.translate3d(n + "px", e + "px", 0, this._physicalItems[t]),
                this._shouldRenderNextRow(s) && (e += this._rowHeight);
            });
          } else
            this._iterateItems(function(t, i) {
              this.translate3d(0, e + "px", 0, this._physicalItems[t]),
                (e += this._physicalSizes[t]);
            });
        },
        _getPhysicalSizeIncrement: function(e) {
          return this.grid
            ? this._computeVidx(e) % this._itemsPerRow != this._itemsPerRow - 1
              ? 0
              : this._rowHeight
            : this._physicalSizes[e];
        },
        _shouldRenderNextRow: function(e) {
          return e % this._itemsPerRow == this._itemsPerRow - 1;
        },
        _adjustScrollPosition: function() {
          var e =
            0 === this._virtualStart
              ? this._physicalTop
              : Math.min(this._scrollPosition + this._physicalTop, 0);
          if (0 !== e) {
            this._physicalTop = this._physicalTop - e;
            var t = this._scrollTop;
            !R && t > 0 && this._resetScrollPosition(t - e);
          }
        },
        _resetScrollPosition: function(e) {
          this.scrollTarget &&
            e >= 0 &&
            ((this._scrollTop = e), (this._scrollPosition = this._scrollTop));
        },
        _updateScrollerSize: function(e) {
          this.grid
            ? (this._estScrollHeight = this._virtualRowCount * this._rowHeight)
            : (this._estScrollHeight =
                this._physicalBottom +
                Math.max(
                  this._virtualCount - this._physicalCount - this._virtualStart,
                  0
                ) *
                  this._physicalAverage),
            ((e =
              (e =
                (e = e || 0 === this._scrollHeight) ||
                this._scrollPosition >=
                  this._estScrollHeight - this._physicalSize) ||
              (this.grid &&
                this.$.items.style.height < this._estScrollHeight)) ||
              Math.abs(this._estScrollHeight - this._scrollHeight) >=
                this._viewportHeight) &&
              ((this.$.items.style.height = this._estScrollHeight + "px"),
              (this._scrollHeight = this._estScrollHeight));
        },
        scrollToItem: function(e) {
          return this.scrollToIndex(this.items.indexOf(e));
        },
        scrollToIndex: function(e) {
          if (
            !("number" != typeof e || e < 0 || e > this.items.length - 1) &&
            (Object(p.b)(), 0 !== this._physicalCount)
          ) {
            (e = this._clamp(e, 0, this._virtualCount - 1)),
              (!this._isIndexRendered(e) || e >= this._maxVirtualStart) &&
                (this._virtualStart = this.grid
                  ? e - 2 * this._itemsPerRow
                  : e - 1),
              this._manageFocus(),
              this._assignModels(),
              this._updateMetrics(),
              (this._physicalTop =
                Math.floor(this._virtualStart / this._itemsPerRow) *
                this._physicalAverage);
            for (
              var t = this._physicalStart,
                i = this._virtualStart,
                s = 0,
                o = this._hiddenContentSize;
              i < e && s <= o;

            )
              (s += this._getPhysicalSizeIncrement(t)),
                (t = (t + 1) % this._physicalCount),
                i++;
            this._updateScrollerSize(!0),
              this._positionItems(),
              this._resetScrollPosition(
                this._physicalTop + this._scrollOffset + s
              ),
              this._increasePoolIfNeeded(0),
              (this._firstVisibleIndexVal = null),
              (this._lastVisibleIndexVal = null);
          }
        },
        _resetAverage: function() {
          (this._physicalAverage = 0), (this._physicalAverageCount = 0);
        },
        _resizeHandler: function() {
          this._debounce(
            "_render",
            function() {
              (this._firstVisibleIndexVal = null),
                (this._lastVisibleIndexVal = null),
                this._isVisible
                  ? (this.updateViewportBoundaries(),
                    this.toggleScrollListener(!0),
                    this._resetAverage(),
                    this._render())
                  : this.toggleScrollListener(!1);
            },
            m.a
          );
        },
        selectItem: function(e) {
          return this.selectIndex(this.items.indexOf(e));
        },
        selectIndex: function(e) {
          if (!(e < 0 || e >= this._virtualCount)) {
            if (
              (!this.multiSelection &&
                this.selectedItem &&
                this.clearSelection(),
              this._isIndexRendered(e))
            ) {
              var t = this.modelForElement(
                this._physicalItems[this._getPhysicalIndex(e)]
              );
              t && (t[this.selectedAs] = !0), this.updateSizeForIndex(e);
            }
            this.$.selector.selectIndex(e);
          }
        },
        deselectItem: function(e) {
          return this.deselectIndex(this.items.indexOf(e));
        },
        deselectIndex: function(e) {
          if (!(e < 0 || e >= this._virtualCount)) {
            if (this._isIndexRendered(e))
              (this.modelForElement(
                this._physicalItems[this._getPhysicalIndex(e)]
              )[this.selectedAs] = !1),
                this.updateSizeForIndex(e);
            this.$.selector.deselectIndex(e);
          }
        },
        toggleSelectionForItem: function(e) {
          return this.toggleSelectionForIndex(this.items.indexOf(e));
        },
        toggleSelectionForIndex: function(e) {
          (this.$.selector.isIndexSelected
          ? this.$.selector.isIndexSelected(e)
          : this.$.selector.isSelected(this.items[e]))
            ? this.deselectIndex(e)
            : this.selectIndex(e);
        },
        clearSelection: function() {
          this._iterateItems(function(e, t) {
            this.modelForElement(this._physicalItems[e])[this.selectedAs] = !1;
          }),
            this.$.selector.clearSelection();
        },
        _selectionEnabledChanged: function(e) {
          (e ? this.listen : this.unlisten).call(
            this,
            this,
            "tap",
            "_selectionHandler"
          );
        },
        _selectionHandler: function(e) {
          var t = this.modelForElement(e.target);
          if (t) {
            var i,
              s,
              o = Object(V.a)(e).path[0],
              n = this._getActiveElement(),
              l = this._physicalItems[this._getPhysicalIndex(t[this.indexAs])];
            "input" !== o.localName &&
              "button" !== o.localName &&
              "select" !== o.localName &&
              ((i = t.tabIndex),
              (t.tabIndex = -100),
              (s = n ? n.tabIndex : -1),
              (t.tabIndex = i),
              (n && l !== n && l.contains(n) && -100 !== s) ||
                this.toggleSelectionForItem(t[this.as]));
          }
        },
        _multiSelectionChanged: function(e) {
          this.clearSelection(), (this.$.selector.multi = e);
        },
        updateSizeForItem: function(e) {
          return this.updateSizeForIndex(this.items.indexOf(e));
        },
        updateSizeForIndex: function(e) {
          return this._isIndexRendered(e)
            ? (this._updateMetrics([this._getPhysicalIndex(e)]),
              this._positionItems(),
              null)
            : null;
        },
        _manageFocus: function() {
          var e = this._focusedVirtualIndex;
          e >= 0 && e < this._virtualCount
            ? this._isIndexRendered(e)
              ? this._restoreFocusedItem()
              : this._createFocusBackfillItem()
            : this._virtualCount > 0 &&
              this._physicalCount > 0 &&
              ((this._focusedPhysicalIndex = this._physicalStart),
              (this._focusedVirtualIndex = this._virtualStart),
              (this._focusedItem = this._physicalItems[this._physicalStart]));
        },
        _convertIndexToCompleteRow: function(e) {
          return (
            (this._itemsPerRow = this._itemsPerRow || 1),
            this.grid ? Math.ceil(e / this._itemsPerRow) * this._itemsPerRow : e
          );
        },
        _isIndexRendered: function(e) {
          return e >= this._virtualStart && e <= this._virtualEnd;
        },
        _isIndexVisible: function(e) {
          return e >= this.firstVisibleIndex && e <= this.lastVisibleIndex;
        },
        _getPhysicalIndex: function(e) {
          return (
            (this._physicalStart + (e - this._virtualStart)) %
            this._physicalCount
          );
        },
        focusItem: function(e) {
          this._focusPhysicalItem(e);
        },
        _focusPhysicalItem: function(e) {
          if (!(e < 0 || e >= this._virtualCount)) {
            this._restoreFocusedItem(),
              this._isIndexRendered(e) || this.scrollToIndex(e);
            var t,
              i = this._physicalItems[this._getPhysicalIndex(e)],
              s = this.modelForElement(i);
            (s.tabIndex = -100),
              -100 === i.tabIndex && (t = i),
              t || (t = Object(V.a)(i).querySelector('[tabindex="-100"]')),
              (s.tabIndex = 0),
              (this._focusedVirtualIndex = e),
              t && t.focus();
          }
        },
        _removeFocusedItem: function() {
          this._offscreenFocusedItem &&
            this._itemsParent.removeChild(this._offscreenFocusedItem),
            (this._offscreenFocusedItem = null),
            (this._focusBackfillItem = null),
            (this._focusedItem = null),
            (this._focusedVirtualIndex = -1),
            (this._focusedPhysicalIndex = -1);
        },
        _createFocusBackfillItem: function() {
          var e = this._focusedPhysicalIndex;
          if (!(this._offscreenFocusedItem || this._focusedVirtualIndex < 0)) {
            if (!this._focusBackfillItem) {
              var t = this.stamp(null);
              (this._focusBackfillItem = t.root.querySelector("*")),
                this._itemsParent.appendChild(t.root);
            }
            (this._offscreenFocusedItem = this._physicalItems[e]),
              (this.modelForElement(this._offscreenFocusedItem).tabIndex = 0),
              (this._physicalItems[e] = this._focusBackfillItem),
              (this._focusedPhysicalIndex = e),
              this.translate3d(0, "-10000px", 0, this._offscreenFocusedItem);
          }
        },
        _restoreFocusedItem: function() {
          if (this._offscreenFocusedItem && !(this._focusedVirtualIndex < 0)) {
            this._assignModels();
            var e = (this._focusedPhysicalIndex = this._getPhysicalIndex(
                this._focusedVirtualIndex
              )),
              t = this._physicalItems[e];
            if (t) {
              var i = this.modelForElement(t),
                s = this.modelForElement(this._offscreenFocusedItem);
              i[this.as] === s[this.as]
                ? ((this._focusBackfillItem = t),
                  (i.tabIndex = -1),
                  (this._physicalItems[e] = this._offscreenFocusedItem),
                  this.translate3d(0, "-10000px", 0, this._focusBackfillItem))
                : (this._removeFocusedItem(), (this._focusBackfillItem = null)),
                (this._offscreenFocusedItem = null);
            }
          }
        },
        _didFocus: function(e) {
          var t = this.modelForElement(e.target),
            i = this.modelForElement(this._focusedItem),
            s = null !== this._offscreenFocusedItem,
            o = this._focusedVirtualIndex;
          t &&
            (i === t
              ? this._isIndexVisible(o) || this.scrollToIndex(o)
              : (this._restoreFocusedItem(),
                i && (i.tabIndex = -1),
                (t.tabIndex = 0),
                (o = t[this.indexAs]),
                (this._focusedVirtualIndex = o),
                (this._focusedPhysicalIndex = this._getPhysicalIndex(o)),
                (this._focusedItem = this._physicalItems[
                  this._focusedPhysicalIndex
                ]),
                s && !this._offscreenFocusedItem && this._update()));
        },
        _keydownHandler: function(e) {
          switch (e.keyCode) {
            case 40:
              this._focusedVirtualIndex < this._virtualCount - 1 &&
                e.preventDefault(),
                this._focusPhysicalItem(
                  this._focusedVirtualIndex +
                    (this.grid ? this._itemsPerRow : 1)
                );
              break;
            case 39:
              this.grid &&
                this._focusPhysicalItem(
                  this._focusedVirtualIndex + (this._isRTL ? -1 : 1)
                );
              break;
            case 38:
              this._focusedVirtualIndex > 0 && e.preventDefault(),
                this._focusPhysicalItem(
                  this._focusedVirtualIndex -
                    (this.grid ? this._itemsPerRow : 1)
                );
              break;
            case 37:
              this.grid &&
                this._focusPhysicalItem(
                  this._focusedVirtualIndex + (this._isRTL ? 1 : -1)
                );
              break;
            case 13:
              this._focusPhysicalItem(this._focusedVirtualIndex),
                this.selectionEnabled && this._selectionHandler(e);
          }
        },
        _clamp: function(e, t, i) {
          return Math.min(i, Math.max(t, e));
        },
        _debounce: function(e, t, i) {
          (this._debouncers = this._debouncers || {}),
            (this._debouncers[e] = T.a.debounce(
              this._debouncers[e],
              i,
              t.bind(this)
            )),
            Object(p.a)(this._debouncers[e]);
        },
        _forwardProperty: function(e, t, i) {
          e._setPendingProperty(t, i);
        },
        _forwardHostPropV2: function(e, t) {
          (this._physicalItems || [])
            .concat([this._offscreenFocusedItem, this._focusBackfillItem])
            .forEach(function(i) {
              i && this.modelForElement(i).forwardHostProp(e, t);
            }, this);
        },
        _notifyInstancePropV2: function(e, t, i) {
          if (Object(O.e)(this.as, t)) {
            var s = e[this.indexAs];
            t == this.as && (this.items[s] = i),
              this.notifyPath(Object(O.i)(this.as, "items." + s, t), i);
          }
        },
        _getStampedChildren: function() {
          return this._physicalItems;
        },
        _forwardInstancePath: function(e, t, i) {
          0 === t.indexOf(this.as + ".") &&
            this.notifyPath(
              "items." + e.__key__ + "." + t.slice(this.as.length + 1),
              i
            );
        },
        _forwardParentPath: function(e, t) {
          (this._physicalItems || [])
            .concat([this._offscreenFocusedItem, this._focusBackfillItem])
            .forEach(function(i) {
              i && this.modelForElement(i).notifyPath(e, t, !0);
            }, this);
        },
        _forwardParentProp: function(e, t) {
          (this._physicalItems || [])
            .concat([this._offscreenFocusedItem, this._focusBackfillItem])
            .forEach(function(i) {
              i && (this.modelForElement(i)[e] = t);
            }, this);
        },
        _getActiveElement: function() {
          var e = this._itemsParent.node.domHost;
          return Object(V.a)(e ? e.root : document).activeElement;
        },
      });
      class F extends Object(h.a)(r.a) {
        static get template() {
          return s.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
         display: none;
      }
    </style>
    <div part="content" id="content"></div>
`;
        }
        static get is() {
          return "vaadin-combo-box-item";
        }
        static get properties() {
          return {
            index: Number,
            item: Object,
            label: String,
            selected: { type: Boolean, value: !1, reflectToAttribute: !0 },
            focused: { type: Boolean, value: !1, reflectToAttribute: !0 },
            _itemTemplateInstance: Object,
            renderer: Function,
            _oldRenderer: Function,
          };
        }
        static get observers() {
          return [
            "_rendererOrItemChanged(renderer, index, item.*)",
            "_updateLabel(label, _itemTemplateInstance)",
            '_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)',
            '_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)',
            '_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)',
            '_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)',
          ];
        }
        connectedCallback() {
          if ((super.connectedCallback(), !this._itemTemplateInstance)) {
            const e = this.getRootNode()
              .host.getRootNode()
              .host.__dataHost.getRootNode().host;
            (this._comboBox = e.getRootNode().host),
              this._comboBox._ensureTemplatized(),
              this._comboBox._TemplateClass &&
                ((this._itemTemplateInstance = new this._comboBox._TemplateClass(
                  {}
                )),
                (this.$.content.textContent = ""),
                this.$.content.appendChild(this._itemTemplateInstance.root));
          }
        }
        _render() {
          if (!this.renderer) return;
          const e = { index: this.index, item: this.item };
          this.renderer(this.$.content, this._comboBox, e);
        }
        _rendererOrItemChanged(e, t, i) {
          void 0 !== i &&
            void 0 !== t &&
            (this._oldRenderer !== e && (this.$.content.innerHTML = ""),
            e && ((this._oldRenderer = e), this._render()));
        }
        _updateLabel(e, t) {
          void 0 === t &&
            this.$.content &&
            !this.renderer &&
            (this.$.content.textContent = e);
        }
        _updateTemplateInstanceVariable(e, t, i) {
          void 0 !== e && void 0 !== t && void 0 !== i && (i[e] = t);
        }
      }
      customElements.define(F.is, F);
      var k = i(291),
        z = i(70);
      class $ extends n.a {
        static get is() {
          return "vaadin-combo-box-overlay";
        }
        ready() {
          super.ready();
          const e = document.createElement("div");
          e.setAttribute("part", "loader");
          const t = this.shadowRoot.querySelector(['[part~="content"]']);
          t.parentNode.insertBefore(e, t);
        }
      }
      customElements.define($.is, $);
      class L extends Object(k.a)(Object(z.b)(w.a, r.a)) {
        static get template() {
          return s.a`
    <style>
      :host {
        display: block;
      }

      :host > #overlay {
        display: none;
      }
    </style>
    <vaadin-combo-box-overlay id="overlay" hidden\$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme\$="[[theme]]">
      <slot></slot>
    </vaadin-combo-box-overlay>
`;
        }
        static get is() {
          return "vaadin-combo-box-dropdown";
        }
        static get properties() {
          return {
            opened: { type: Boolean, observer: "_openedChanged" },
            template: { type: Object, notify: !0 },
            positionTarget: { type: Object },
            alignedAbove: { type: Boolean, value: !1 },
            theme: String,
          };
        }
        constructor() {
          super(),
            (this._boundSetPosition = this._setPosition.bind(this)),
            (this._boundOutsideClickListener = this._outsideClickListener.bind(
              this
            ));
        }
        connectedCallback() {
          super.connectedCallback(),
            this.addEventListener("iron-resize", this._boundSetPosition);
        }
        ready() {
          super.ready(),
            this.$.overlay.addEventListener(
              "vaadin-overlay-outside-click",
              (e) => {
                e.preventDefault();
              }
            );
        }
        disconnectedCallback() {
          super.disconnectedCallback(),
            this.removeEventListener("iron-resize", this._boundSetPosition),
            (this.opened = !1);
        }
        notifyResize() {
          super.notifyResize(),
            this.positionTarget &&
              this.opened &&
              (this._setPosition(),
              requestAnimationFrame(this._setPosition.bind(this)));
        }
        _openedChanged(e, t) {
          !!e != !!t &&
            (e
              ? ((this.$.overlay.style.position = this._isPositionFixed(
                  this.positionTarget
                )
                  ? "fixed"
                  : "absolute"),
                this._setPosition(),
                window.addEventListener("scroll", this._boundSetPosition, !0),
                document.addEventListener(
                  "click",
                  this._boundOutsideClickListener,
                  !0
                ),
                this.dispatchEvent(
                  new CustomEvent("vaadin-combo-box-dropdown-opened", {
                    bubbles: !0,
                    composed: !0,
                  })
                ))
              : (window.removeEventListener(
                  "scroll",
                  this._boundSetPosition,
                  !0
                ),
                document.removeEventListener(
                  "click",
                  this._boundOutsideClickListener,
                  !0
                ),
                this.dispatchEvent(
                  new CustomEvent("vaadin-combo-box-dropdown-closed", {
                    bubbles: !0,
                    composed: !0,
                  })
                )));
        }
        _outsideClickListener(e) {
          const t = e.composedPath();
          t.indexOf(this.positionTarget) < 0 &&
            t.indexOf(this.$.overlay) < 0 &&
            (this.opened = !1);
        }
        _isPositionFixed(e) {
          const t = this._getOffsetParent(e);
          return (
            "fixed" === window.getComputedStyle(e).position ||
            (t && this._isPositionFixed(t))
          );
        }
        _getOffsetParent(e) {
          if (e.assignedSlot) return e.assignedSlot.parentElement;
          if (e.parentElement) return e.offsetParent;
          const t = e.parentNode;
          return t && 11 === t.nodeType && t.host ? t.host : void 0;
        }
        _verticalOffset(e, t) {
          return this.alignedAbove ? -e.height : t.height;
        }
        _shouldAlignAbove(e) {
          return (
            (window.innerHeight -
              e.bottom -
              Math.min(document.body.scrollTop, 0)) /
              window.innerHeight <
            0.3
          );
        }
        _setPosition(e) {
          if (e && e.target) {
            const t = e.target === document ? document.body : e.target,
              i = this.$.overlay.parentElement;
            if (
              (!t.contains(this.$.overlay) &&
                !t.contains(this.positionTarget)) ||
              i !== document.body
            )
              return;
          }
          const t = this.positionTarget.getBoundingClientRect();
          this.alignedAbove = this._shouldAlignAbove(t);
          const i = this.$.overlay.getBoundingClientRect();
          (this._translateX = t.left - i.left + (this._translateX || 0)),
            (this._translateY =
              t.top -
              i.top +
              (this._translateY || 0) +
              this._verticalOffset(i, t));
          const s = window.devicePixelRatio || 1;
          (this._translateX = Math.round(this._translateX * s) / s),
            (this._translateY = Math.round(this._translateY * s) / s),
            (this.$.overlay.style.transform = `translate3d(${
              this._translateX
            }px, ${this._translateY}px, 0)`),
            (this.$.overlay.style.width =
              this.positionTarget.clientWidth + "px"),
            (this.$.overlay.style.justifyContent = this.alignedAbove
              ? "flex-end"
              : "flex-start"),
            this.dispatchEvent(new CustomEvent("position-changed"));
        }
      }
      customElements.define(L.is, L);
      const B = (() => {
        try {
          return document.createEvent("TouchEvent"), !0;
        } catch (e) {
          return !1;
        }
      })();
      class H extends class extends r.a {} {
        static get template() {
          return s.a`
    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">
      <template>
        <style>
          #scroller {
            overflow: auto;

            /* Fixes item background from getting on top of scrollbars on Safari */
            transform: translate3d(0, 0, 0);

            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */
            -webkit-overflow-scrolling: touch;

            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
            box-shadow: 0 0 0 white;
          }
        </style>
        <div id="scroller" on-click="_stopPropagation">
          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">
            <template>
              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role\$="[[_getAriaRole(index)]]" aria-selected\$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme\$="[[theme]]">
              </vaadin-combo-box-item>
            </template>
          </iron-list>
        </div>
      </template>
    </vaadin-combo-box-dropdown>
`;
        }
        static get is() {
          return "vaadin-combo-box-dropdown-wrapper";
        }
        static get properties() {
          return {
            touchDevice: { type: Boolean, value: B },
            opened: Boolean,
            positionTarget: { type: Object },
            renderer: Function,
            loading: {
              type: Boolean,
              value: !1,
              reflectToAttribute: !0,
              observer: "_setOverlayHeight",
            },
            theme: String,
            _selectedItem: { type: Object },
            _items: { type: Object },
            _focusedIndex: {
              type: Number,
              value: -1,
              observer: "_focusedIndexChanged",
            },
            _focusedItem: {
              type: String,
              computed: "_getFocusedItem(_focusedIndex)",
            },
            _itemLabelPath: { type: String, value: "label" },
            _itemValuePath: { type: String, value: "value" },
            _selector: Object,
            _itemIdPath: String,
          };
        }
        static get observers() {
          return [
            "_selectorChanged(_selector)",
            "_loadingChanged(loading)",
            "_openedChanged(opened, _items, loading)",
          ];
        }
        _fireTouchAction(e) {
          this.dispatchEvent(
            new CustomEvent("vaadin-overlay-touch-action", {
              detail: { sourceEvent: e },
            })
          );
        }
        _getItems(e, t) {
          return e ? t : [];
        }
        _openedChanged(e, t, i) {
          if (this.$.dropdown.hasAttribute("disable-upgrade")) {
            if (!e) return;
            this._initDropdown();
          }
          this.$.dropdown.opened = !(
            !e || !(i || this.$.dropdown.opened || (t && t.length))
          );
        }
        _initDropdown() {
          this.$.dropdown.removeAttribute("disable-upgrade"),
            this._templateChanged(),
            this._loadingChanged(this.loading),
            this.$.dropdown.$.overlay.addEventListener("touchend", (e) =>
              this._fireTouchAction(e)
            ),
            this.$.dropdown.$.overlay.addEventListener("touchmove", (e) =>
              this._fireTouchAction(e)
            ),
            this.$.dropdown.$.overlay.addEventListener("mousedown", (e) =>
              e.preventDefault()
            ),
            /Trident/.test(navigator.userAgent) &&
              this._scroller.setAttribute("unselectable", "on");
        }
        _templateChanged(e) {
          this.$.dropdown.hasAttribute("disable-upgrade") ||
            ((this._selector = this.$.dropdown.$.overlay.content.querySelector(
              "#selector"
            )),
            (this._scroller = this.$.dropdown.$.overlay.content.querySelector(
              "#scroller"
            )));
        }
        _loadingChanged(e) {
          this.$.dropdown.hasAttribute("disable-upgrade") ||
            (e
              ? this.$.dropdown.$.overlay.setAttribute("loading", "")
              : this.$.dropdown.$.overlay.removeAttribute("loading"));
        }
        _selectorChanged(e) {
          this._patchWheelOverScrolling();
        }
        _setOverlayHeight() {
          if (!this.opened || !this.positionTarget || !this._selector) return;
          const e = this.positionTarget.getBoundingClientRect();
          this._scroller.style.maxHeight =
            (window.ShadyCSS
              ? window.ShadyCSS.getComputedStyleValue(
                  this,
                  "--vaadin-combo-box-overlay-max-height"
                )
              : getComputedStyle(this).getPropertyValue(
                  "--vaadin-combo-box-overlay-max-height"
                )) || "65vh";
          const t = this._maxOverlayHeight(e);
          (this.$.dropdown.$.overlay.style.maxHeight = t),
            (this._selector.style.maxHeight = t),
            this.updateViewportBoundaries();
        }
        _maxOverlayHeight(e) {
          const t = Math.min(
            window.innerHeight,
            document.body.scrollHeight - document.body.scrollTop
          );
          return this.$.dropdown.alignedAbove
            ? Math.max(e.top - 8 + Math.min(document.body.scrollTop, 0), 116) +
                "px"
            : Math.max(t - e.bottom - 8, 116) + "px";
        }
        _getFocusedItem(e) {
          if (e >= 0) return this._items[e];
        }
        _isItemSelected(e, t, i) {
          return (
            !(e instanceof b) &&
            (i && void 0 !== e && void 0 !== t
              ? this.get(i, e) === this.get(i, t)
              : e === t)
          );
        }
        _onItemClick(e) {
          e.detail &&
            e.detail.sourceEvent &&
            e.detail.sourceEvent.stopPropagation &&
            this._stopPropagation(e.detail.sourceEvent),
            this.dispatchEvent(
              new CustomEvent("selection-changed", {
                detail: { item: e.model.item },
              })
            );
        }
        indexOfLabel(e) {
          if (this._items && e)
            for (let t = 0; t < this._items.length; t++)
              if (
                this.getItemLabel(this._items[t])
                  .toString()
                  .toLowerCase() === e.toString().toLowerCase()
              )
                return t;
          return -1;
        }
        __requestItemByIndex(e, t) {
          return (
            e instanceof b &&
              void 0 !== t &&
              this.dispatchEvent(
                new CustomEvent("index-requested", { detail: { index: t } })
              ),
            t
          );
        }
        getItemLabel(e, t) {
          t = t || this._itemLabelPath;
          let i = e && t ? this.get(t, e) : void 0;
          return null == i && (i = e ? e.toString() : ""), i;
        }
        _isItemFocused(e, t) {
          return e == t;
        }
        _getAriaSelected(e, t) {
          return this._isItemFocused(e, t).toString();
        }
        _getAriaRole(e) {
          return void 0 !== e && "option";
        }
        _focusedIndexChanged(e) {
          e >= 0 && this._scrollIntoView(e);
        }
        _scrollIntoView(e) {
          const t = this._visibleItemsCount();
          if (void 0 === t) return;
          let i = e;
          e > this._selector.lastVisibleIndex - 1
            ? (i = e - t + 1)
            : e > this._selector.firstVisibleIndex &&
              (i = this._selector.firstVisibleIndex),
            this._selector.scrollToIndex(Math.max(0, i));
          const s = this._selector._getPhysicalIndex(e),
            o = this._selector._physicalItems[s];
          if (!o) return;
          const n = o.getBoundingClientRect(),
            l = this._scroller.getBoundingClientRect(),
            a = n.bottom - l.bottom + this._viewportTotalPaddingBottom;
          a > 0 && (this._scroller.scrollTop += a);
        }
        ensureItemsRendered() {
          this._selector._render();
        }
        adjustScrollPosition() {
          this.opened &&
            this._items &&
            this._scrollIntoView(this._focusedIndex);
        }
        _patchWheelOverScrolling() {
          const e = this._selector;
          e.addEventListener("wheel", (t) => {
            const i = e._scroller || e.scrollTarget,
              s = 0 === i.scrollTop,
              o = i.scrollHeight - i.scrollTop - i.clientHeight <= 1;
            s && t.deltaY < 0
              ? t.preventDefault()
              : o && t.deltaY > 0 && t.preventDefault();
          });
        }
        updateViewportBoundaries() {
          (this._cachedViewportTotalPaddingBottom = void 0),
            this._selector.updateViewportBoundaries();
        }
        get _viewportTotalPaddingBottom() {
          if (void 0 === this._cachedViewportTotalPaddingBottom) {
            const e = window.getComputedStyle(this._selector.$.items);
            this._cachedViewportTotalPaddingBottom = [
              e.paddingBottom,
              e.borderBottomWidth,
            ]
              .map((e) => parseInt(e, 10))
              .reduce((e, t) => e + t);
          }
          return this._cachedViewportTotalPaddingBottom;
        }
        _visibleItemsCount() {
          if (this._selector)
            return (
              this._selector.flushDebouncer("_debounceTemplate"),
              this._selector.scrollToIndex(this._selector.firstVisibleIndex),
              this.updateViewportBoundaries(),
              this._selector.lastVisibleIndex -
                this._selector.firstVisibleIndex +
                1
            );
        }
        _selectItem(e) {
          (e = "number" == typeof e ? this._items[e] : e),
            this._selector.selectedItem !== e && this._selector.selectItem(e);
        }
        _preventDefault(e) {
          e.cancelable && e.preventDefault();
        }
        _stopPropagation(e) {
          e.stopPropagation();
        }
        _hidden(e) {
          return !(this.loading || (this._items && this._items.length));
        }
      }
      customElements.define(H.is, H);
      var M = i(22);
      class D extends Object(_.a)(Object(h.a)(x(I(r.a)))) {
        static get template() {
          return s.a`
    <slot></slot>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" position-target="[[inputElement]]" renderer="[[renderer]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`;
        }
        static get is() {
          return "vaadin-combo-box-light";
        }
        static get properties() {
          return {
            attrForValue: { type: String, value: "value" },
            inputElement: { type: Element, readOnly: !0 },
          };
        }
        constructor() {
          super(),
            (this._boundInputValueChanged = this._inputValueChanged.bind(this));
        }
        ready() {
          super.ready(),
            (this._toggleElement = this.querySelector(".toggle-button")),
            (this._clearElement = this.querySelector(".clear-button"));
        }
        get focused() {
          return this.getRootNode().activeElement === this.inputElement;
        }
        connectedCallback() {
          super.connectedCallback();
          this._setInputElement(
            this.querySelector(
              "vaadin-text-field,iron-input,paper-input,.paper-input-input,.input"
            )
          ),
            this._revertInputValue(),
            this.inputElement.addEventListener(
              "input",
              this._boundInputValueChanged
            ),
            this._preventInputBlur();
        }
        disconnectedCallback() {
          super.disconnectedCallback(),
            this.inputElement.removeEventListener(
              "input",
              this._boundInputValueChanged
            ),
            this._restoreInputBlur();
        }
        get _propertyForValue() {
          return Object(M.b)(this.attrForValue);
        }
        get _inputElementValue() {
          return this.inputElement && this.inputElement[this._propertyForValue];
        }
        set _inputElementValue(e) {
          this.inputElement && (this.inputElement[this._propertyForValue] = e);
        }
      }
      customElements.define(D.is, D);
    },
  },
]);
//# sourceMappingURL=chunk.87d4e7382294ffe3e7cc.js.map
