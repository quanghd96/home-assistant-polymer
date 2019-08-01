(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["hui-unused-entities"],
  {
    /***/ "./src/panels/lovelace/common/compute-unused-entities.ts":
      /*!***************************************************************!*\
  !*** ./src/panels/lovelace/common/compute-unused-entities.ts ***!
  \***************************************************************/
      /*! exports provided: computeUnusedEntities */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "computeUnusedEntities",
          function() {
            return computeUnusedEntities;
          }
        );
        var EXCLUDED_DOMAINS = ["zone"];

        var addFromAction = function addFromAction(entities, actionConfig) {
          if (
            actionConfig.action !== "call-service" ||
            !actionConfig.service_data ||
            !actionConfig.service_data.entity_id
          ) {
            return;
          }

          var entityIds = actionConfig.service_data.entity_id;

          if (!Array.isArray(entityIds)) {
            entityIds = [entityIds];
          }

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (
              var _iterator = entityIds[Symbol.iterator](), _step;
              !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
              _iteratorNormalCompletion = true
            ) {
              var entityId = _step.value;
              entities.add(entityId);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        };

        var addEntityId = function addEntityId(entities, entity) {
          if (typeof entity === "string") {
            entities.add(entity);
            return;
          }

          if (entity.entity) {
            entities.add(entity.entity);
          }

          if (entity.camera_image) {
            entities.add(entity.camera_image);
          }

          if (entity.tap_action) {
            addFromAction(entities, entity.tap_action);
          }

          if (entity.hold_action) {
            addFromAction(entities, entity.hold_action);
          }
        };

        var addEntities = function addEntities(entities, obj) {
          if (obj.entity) {
            addEntityId(entities, obj.entity);
          }

          if (obj.entities) {
            obj.entities.forEach(function(entity) {
              return addEntityId(entities, entity);
            });
          }

          if (obj.card) {
            addEntities(entities, obj.card);
          }

          if (obj.cards) {
            obj.cards.forEach(function(card) {
              return addEntities(entities, card);
            });
          }

          if (obj.elements) {
            obj.elements.forEach(function(card) {
              return addEntities(entities, card);
            });
          }

          if (obj.badges) {
            obj.badges.forEach(function(badge) {
              return addEntityId(entities, badge);
            });
          }
        };

        var computeUsedEntities = function computeUsedEntities(config) {
          var entities = new Set();
          config.views.forEach(function(view) {
            return addEntities(entities, view);
          });
          return entities;
        };

        var computeUnusedEntities = function computeUnusedEntities(
          hass,
          config
        ) {
          var usedEntities = computeUsedEntities(config);
          return Object.keys(hass.states)
            .filter(function(entity) {
              return (
                !usedEntities.has(entity) &&
                !EXCLUDED_DOMAINS.includes(entity.split(".", 1)[0])
              );
            })
            .sort();
        };

        /***/
      },

    /***/ "./src/panels/lovelace/hui-unused-entities.ts":
      /*!****************************************************!*\
  !*** ./src/panels/lovelace/hui-unused-entities.ts ***!
  \****************************************************/
      /*! exports provided: HuiUnusedEntities */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiUnusedEntities",
          function() {
            return HuiUnusedEntities;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _cards_hui_entities_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./cards/hui-entities-card */ "./src/panels/lovelace/cards/hui-entities-card.ts"
        );
        /* harmony import */ var _common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./common/compute-unused-entities */ "./src/panels/lovelace/common/compute-unused-entities.ts"
        );
        /* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts"
        );
        /* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts"
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
            "\n      <style>\n        #root {\n          padding: 4px;\n          display: flex;\n          flex-wrap: wrap;\n        }\n        hui-entities-card {\n          max-width: 400px;\n          padding: 4px;\n          flex: 1 auto;\n        }\n      </style>\n    ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n      ",
            '\n      <div id="root">',
            "</div>\n    ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([""]);

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

        var HuiUnusedEntities =
          /*#__PURE__*/
          (function(_LitElement) {
            _inherits(HuiUnusedEntities, _LitElement);

            function HuiUnusedEntities() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, HuiUnusedEntities);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(
                  HuiUnusedEntities
                )).call.apply(_getPrototypeOf2, [this].concat(args))
              );
              _this._hass = void 0;
              _this._config = void 0;
              _this._elements = void 0;
              return _this;
            }

            _createClass(
              HuiUnusedEntities,
              [
                {
                  key: "setConfig",
                  value: function setConfig(config) {
                    this._config = config;

                    this._createElements();
                  },
                },
                {
                  key: "render",
                  value: function render() {
                    if (!this._config || !this._hass) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(_templateObject2(), this.renderStyle(), this._elements);
                  },
                },
                {
                  key: "renderStyle",
                  value: function renderStyle() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(_templateObject3());
                  },
                },
                {
                  key: "_createElements",
                  value: function _createElements() {
                    var _this2 = this;

                    if (!this._hass) {
                      return;
                    }

                    var domains = {};
                    Object(
                      _common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_2__[
                        "computeUnusedEntities"
                      ]
                    )(this._hass, this._config).forEach(function(entity) {
                      var domain = Object(
                        _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__[
                          "default"
                        ]
                      )(entity);

                      if (!(domain in domains)) {
                        domains[domain] = [];
                      }

                      domains[domain].push(entity);
                    });
                    this._elements = Object.keys(domains)
                      .sort()
                      .map(function(domain) {
                        var el = Object(
                          _common_create_card_element__WEBPACK_IMPORTED_MODULE_3__[
                            "createCardElement"
                          ]
                        )({
                          type: "entities",
                          title:
                            _this2._hass.localize("domain.".concat(domain)) ||
                            domain,
                          entities: domains[domain].map(function(entity) {
                            return {
                              entity: entity,
                              secondary_info: "entity-id",
                            };
                          }),
                          show_header_toggle: false,
                        });
                        el.hass = _this2._hass;
                        return el;
                      });
                  },
                },
                {
                  key: "hass",
                  set: function set(hass) {
                    this._hass = hass;

                    if (!this._elements) {
                      this._createElements();

                      return;
                    }

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                      for (
                        var _iterator = this._elements[Symbol.iterator](),
                          _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next())
                          .done);
                        _iteratorNormalCompletion = true
                      ) {
                        var element = _step.value;
                        element.hass = this._hass;
                      }
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (
                          !_iteratorNormalCompletion &&
                          _iterator.return != null
                        ) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      _hass: {},
                      _config: {},
                    };
                  },
                },
              ]
            );

            return HuiUnusedEntities;
          })(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
        customElements.define("hui-unused-entities", HuiUnusedEntities);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXVudXNlZC1lbnRpdGllcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL2NvbXB1dGUtdW51c2VkLWVudGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvaHVpLXVudXNlZC1lbnRpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb3ZlbGFjZUNvbmZpZywgQWN0aW9uQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgRVhDTFVERURfRE9NQUlOUyA9IFtcInpvbmVcIl07XG5cbmNvbnN0IGFkZEZyb21BY3Rpb24gPSAoZW50aXRpZXM6IFNldDxzdHJpbmc+LCBhY3Rpb25Db25maWc6IEFjdGlvbkNvbmZpZykgPT4ge1xuICBpZiAoXG4gICAgYWN0aW9uQ29uZmlnLmFjdGlvbiAhPT0gXCJjYWxsLXNlcnZpY2VcIiB8fFxuICAgICFhY3Rpb25Db25maWcuc2VydmljZV9kYXRhIHx8XG4gICAgIWFjdGlvbkNvbmZpZy5zZXJ2aWNlX2RhdGEuZW50aXR5X2lkXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZW50aXR5SWRzID0gYWN0aW9uQ29uZmlnLnNlcnZpY2VfZGF0YS5lbnRpdHlfaWQ7XG4gIGlmICghQXJyYXkuaXNBcnJheShlbnRpdHlJZHMpKSB7XG4gICAgZW50aXR5SWRzID0gW2VudGl0eUlkc107XG4gIH1cbiAgZm9yIChjb25zdCBlbnRpdHlJZCBvZiBlbnRpdHlJZHMpIHtcbiAgICBlbnRpdGllcy5hZGQoZW50aXR5SWQpO1xuICB9XG59O1xuXG5jb25zdCBhZGRFbnRpdHlJZCA9IChlbnRpdGllczogU2V0PHN0cmluZz4sIGVudGl0eSkgPT4ge1xuICBpZiAodHlwZW9mIGVudGl0eSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGVudGl0aWVzLmFkZChlbnRpdHkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbnRpdHkuZW50aXR5KSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eS5lbnRpdHkpO1xuICB9XG4gIGlmIChlbnRpdHkuY2FtZXJhX2ltYWdlKSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eS5jYW1lcmFfaW1hZ2UpO1xuICB9XG4gIGlmIChlbnRpdHkudGFwX2FjdGlvbikge1xuICAgIGFkZEZyb21BY3Rpb24oZW50aXRpZXMsIGVudGl0eS50YXBfYWN0aW9uKTtcbiAgfVxuICBpZiAoZW50aXR5LmhvbGRfYWN0aW9uKSB7XG4gICAgYWRkRnJvbUFjdGlvbihlbnRpdGllcywgZW50aXR5LmhvbGRfYWN0aW9uKTtcbiAgfVxufTtcblxuY29uc3QgYWRkRW50aXRpZXMgPSAoZW50aXRpZXM6IFNldDxzdHJpbmc+LCBvYmopID0+IHtcbiAgaWYgKG9iai5lbnRpdHkpIHtcbiAgICBhZGRFbnRpdHlJZChlbnRpdGllcywgb2JqLmVudGl0eSk7XG4gIH1cbiAgaWYgKG9iai5lbnRpdGllcykge1xuICAgIG9iai5lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IGFkZEVudGl0eUlkKGVudGl0aWVzLCBlbnRpdHkpKTtcbiAgfVxuICBpZiAob2JqLmNhcmQpIHtcbiAgICBhZGRFbnRpdGllcyhlbnRpdGllcywgb2JqLmNhcmQpO1xuICB9XG4gIGlmIChvYmouY2FyZHMpIHtcbiAgICBvYmouY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4gYWRkRW50aXRpZXMoZW50aXRpZXMsIGNhcmQpKTtcbiAgfVxuICBpZiAob2JqLmVsZW1lbnRzKSB7XG4gICAgb2JqLmVsZW1lbnRzLmZvckVhY2goKGNhcmQpID0+IGFkZEVudGl0aWVzKGVudGl0aWVzLCBjYXJkKSk7XG4gIH1cbiAgaWYgKG9iai5iYWRnZXMpIHtcbiAgICBvYmouYmFkZ2VzLmZvckVhY2goKGJhZGdlKSA9PiBhZGRFbnRpdHlJZChlbnRpdGllcywgYmFkZ2UpKTtcbiAgfVxufTtcblxuY29uc3QgY29tcHV0ZVVzZWRFbnRpdGllcyA9IChjb25maWcpID0+IHtcbiAgY29uc3QgZW50aXRpZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uZmlnLnZpZXdzLmZvckVhY2goKHZpZXcpID0+IGFkZEVudGl0aWVzKGVudGl0aWVzLCB2aWV3KSk7XG4gIHJldHVybiBlbnRpdGllcztcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlVW51c2VkRW50aXRpZXMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbmZpZzogTG92ZWxhY2VDb25maWdcbik6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgdXNlZEVudGl0aWVzID0gY29tcHV0ZVVzZWRFbnRpdGllcyhjb25maWcpO1xuICByZXR1cm4gT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpXG4gICAgLmZpbHRlcihcbiAgICAgIChlbnRpdHkpID0+XG4gICAgICAgICF1c2VkRW50aXRpZXMuaGFzKGVudGl0eSkgJiZcbiAgICAgICAgIUVYQ0xVREVEX0RPTUFJTlMuaW5jbHVkZXMoZW50aXR5LnNwbGl0KFwiLlwiLCAxKVswXSlcbiAgICApXG4gICAgLnNvcnQoKTtcbn07XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBQcm9wZXJ0eURlY2xhcmF0aW9ucyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2NhcmRzL2h1aS1lbnRpdGllcy1jYXJkXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVVbnVzZWRFbnRpdGllcyB9IGZyb20gXCIuL2NvbW1vbi9jb21wdXRlLXVudXNlZC1lbnRpdGllc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2FyZEVsZW1lbnQgfSBmcm9tIFwiLi9jb21tb24vY3JlYXRlLWNhcmQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCBjbGFzcyBIdWlVbnVzZWRFbnRpdGllcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwcml2YXRlIF9oYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHJpdmF0ZSBfY29uZmlnPzogTG92ZWxhY2VDb25maWc7XG4gIHByaXZhdGUgX2VsZW1lbnRzPzogTG92ZWxhY2VDYXJkW107XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgX2hhc3M6IHt9LFxuICAgICAgX2NvbmZpZzoge30sXG4gICAgfTtcbiAgfVxuXG4gIHNldCBoYXNzKGhhc3M6IEhvbWVBc3Npc3RhbnQpIHtcbiAgICB0aGlzLl9oYXNzID0gaGFzcztcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnRzKSB7XG4gICAgICB0aGlzLl9jcmVhdGVFbGVtZW50cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdGhpcy5fZWxlbWVudHMpIHtcbiAgICAgIGVsZW1lbnQuaGFzcyA9IHRoaXMuX2hhc3M7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IExvdmVsYWNlQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnRzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuX2hhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMucmVuZGVyU3R5bGUoKX1cbiAgICAgIDxkaXYgaWQ9XCJyb290XCI+JHt0aGlzLl9lbGVtZW50c308L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdHlsZSgpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgICNyb290IHtcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cbiAgICAgICAgaHVpLWVudGl0aWVzLWNhcmQge1xuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgIGZsZXg6IDEgYXV0bztcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRWxlbWVudHMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRvbWFpbnM6IHsgW2RvbWFpbjogc3RyaW5nXTogc3RyaW5nW10gfSA9IHt9O1xuICAgIGNvbXB1dGVVbnVzZWRFbnRpdGllcyh0aGlzLl9oYXNzLCB0aGlzLl9jb25maWchKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVEb21haW4oZW50aXR5KTtcblxuICAgICAgaWYgKCEoZG9tYWluIGluIGRvbWFpbnMpKSB7XG4gICAgICAgIGRvbWFpbnNbZG9tYWluXSA9IFtdO1xuICAgICAgfVxuICAgICAgZG9tYWluc1tkb21haW5dLnB1c2goZW50aXR5KTtcbiAgICB9KTtcbiAgICB0aGlzLl9lbGVtZW50cyA9IE9iamVjdC5rZXlzKGRvbWFpbnMpXG4gICAgICAuc29ydCgpXG4gICAgICAubWFwKChkb21haW4pID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBjcmVhdGVDYXJkRWxlbWVudCh7XG4gICAgICAgICAgdHlwZTogXCJlbnRpdGllc1wiLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLl9oYXNzIS5sb2NhbGl6ZShgZG9tYWluLiR7ZG9tYWlufWApIHx8IGRvbWFpbixcbiAgICAgICAgICBlbnRpdGllczogZG9tYWluc1tkb21haW5dLm1hcCgoZW50aXR5KSA9PiAoe1xuICAgICAgICAgICAgZW50aXR5LFxuICAgICAgICAgICAgc2Vjb25kYXJ5X2luZm86IFwiZW50aXR5LWlkXCIsXG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIHNob3dfaGVhZGVyX3RvZ2dsZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBlbC5oYXNzID0gdGhpcy5faGFzcztcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS11bnVzZWQtZW50aXRpZXNcIjogSHVpVW51c2VkRW50aXRpZXM7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImh1aS11bnVzZWQtZW50aXRpZXNcIiwgSHVpVW51c2VkRW50aXRpZXMpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVlBO0FBQUE7QUFDQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFPQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUF3QkE7QUFDQTtBQUFBO0FBQ0E7QUExQkE7QUFBQTtBQUFBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQXJDQTtBQUFBO0FBQUE7QUF3Q0E7QUFjQTtBQXREQTtBQUFBO0FBQUE7QUF3REE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUlBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQXBGQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBckJBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFWQTtBQUNBO0FBREE7QUFBQTtBQTRGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
