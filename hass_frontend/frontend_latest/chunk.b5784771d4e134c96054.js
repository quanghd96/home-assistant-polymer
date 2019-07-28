/*! For license information please see chunk.b5784771d4e134c96054.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    189: function(e, a, t) {
      "use strict";
      t(187);
      var i = t(70),
        r = t(1),
        s = t(123);
      const n = {
          getTabbableNodes: function(e) {
            var a = [];
            return this._collectTabbableNodes(e, a)
              ? s.a._sortByTabIndex(a)
              : a;
          },
          _collectTabbableNodes: function(e, a) {
            if (e.nodeType !== Node.ELEMENT_NODE || !s.a._isVisible(e))
              return !1;
            var t,
              i = e,
              n = s.a._normalizedTabIndex(i),
              o = n > 0;
            n >= 0 && a.push(i),
              (t =
                "content" === i.localName || "slot" === i.localName
                  ? Object(r.a)(i).getDistributedNodes()
                  : Object(r.a)(i.shadowRoot || i.root || i).children);
            for (var d = 0; d < t.length; d++)
              o = this._collectTabbableNodes(t[d], a) || o;
            return o;
          },
        },
        o = customElements.get("paper-dialog"),
        d = {
          get _focusableNodes() {
            return n.getTabbableNodes(this);
          },
        };
      customElements.define(
        "ha-paper-dialog",
        class extends Object(i.b)([d], o) {}
      );
    },
    696: function(e, a, t) {
      "use strict";
      t.r(a);
      var i = t(0),
        r = (t(203), t(90), t(189), t(54));
      customElements.define(
        "dialog-area-registry-detail",
        class extends i.a {
          constructor(...e) {
            super(...e),
              (this.hass = void 0),
              (this._name = void 0),
              (this._error = void 0),
              (this._params = void 0),
              (this._submitting = void 0);
          }
          static get properties() {
            return { _error: {}, _name: {}, _params: {} };
          }
          async showDialog(e) {
            (this._params = e),
              (this._error = void 0),
              (this._name = this._params.entry ? this._params.entry.name : ""),
              await this.updateComplete;
          }
          render() {
            if (!this._params) return i.f``;
            const e = this._params.entry,
              a = "" === this._name.trim();
            return i.f`
      <ha-paper-dialog
        with-backdrop
        opened
        @opened-changed="${this._openedChanged}"
      >
        <h2>
          ${
            e
              ? e.name
              : this.hass.localize(
                  "ui.panel.config.area_registry.editor.default_name"
                )
          }
        </h2>
        <paper-dialog-scrollable>
          ${
            this._error
              ? i.f`
                <div class="error">${this._error}</div>
              `
              : ""
          }
          <div class="form">
            ${
              e
                ? i.f`
                  <div>Area ID: ${e.area_id}</div>
                `
                : ""
            }

            <paper-input
              .value=${this._name}
              @value-changed=${this._nameChanged}
              label="Name"
              error-message="Name is required"
              .invalid=${a}
            ></paper-input>
          </div>
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          ${
            e
              ? i.f`
                <mwc-button
                  class="warning"
                  @click="${this._deleteEntry}"
                  .disabled=${this._submitting}
                >
                  ${this.hass.localize(
                    "ui.panel.config.area_registry.editor.delete"
                  )}
                </mwc-button>
              `
              : i.f``
          }
          <mwc-button
            @click="${this._updateEntry}"
            .disabled=${a || this._submitting}
          >
            ${
              e
                ? this.hass.localize(
                    "ui.panel.config.area_registry.editor.update"
                  )
                : this.hass.localize(
                    "ui.panel.config.area_registry.editor.create"
                  )
            }
          </mwc-button>
        </div>
      </ha-paper-dialog>
    `;
          }
          _nameChanged(e) {
            (this._error = void 0), (this._name = e.detail.value);
          }
          async _updateEntry() {
            this._submitting = !0;
            try {
              const a = { name: this._name.trim() };
              this._params.entry
                ? await this._params.updateEntry(a)
                : await this._params.createEntry(a),
                (this._params = void 0);
            } catch (e) {
              this._error = e.message || "Unknown error";
            } finally {
              this._submitting = !1;
            }
          }
          async _deleteEntry() {
            this._submitting = !0;
            try {
              (await this._params.removeEntry()) && (this._params = void 0);
            } finally {
              this._submitting = !1;
            }
          }
          _openedChanged(e) {
            e.detail.value || (this._params = void 0);
          }
          static get styles() {
            return [
              r.b,
              i.c`
        ha-paper-dialog {
          min-width: 400px;
        }
        .form {
          padding-bottom: 24px;
        }
        mwc-button.warning {
          margin-right: auto;
        }
        .error {
          color: var(--google-red-500);
        }
      `,
            ];
          }
        }
      );
    },
  },
]);
//# sourceMappingURL=chunk.b5784771d4e134c96054.js.map
