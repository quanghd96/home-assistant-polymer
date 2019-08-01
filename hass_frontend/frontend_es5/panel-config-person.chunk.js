(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-person"],
  {
    /***/ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js":
      /*!************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js ***!
  \************************************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _shadow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../shadow.js */ "./node_modules/@polymer/paper-styles/shadow.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n<dom-module id="paper-material-styles">\n  <template>\n    <style>\n      html {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      .paper-material {\n        @apply --paper-material;\n      }\n      .paper-material[elevation="1"] {\n        @apply --paper-material-elevation-1;\n      }\n      .paper-material[elevation="2"] {\n        @apply --paper-material-elevation-2;\n      }\n      .paper-material[elevation="3"] {\n        @apply --paper-material-elevation-3;\n      }\n      .paper-material[elevation="4"] {\n        @apply --paper-material-elevation-4;\n      }\n      .paper-material[elevation="5"] {\n        @apply --paper-material-elevation-5;\n      }\n\n      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */\n      :host {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      :host(.paper-material) {\n        @apply --paper-material;\n      }\n      :host(.paper-material[elevation="1"]) {\n        @apply --paper-material-elevation-1;\n      }\n      :host(.paper-material[elevation="2"]) {\n        @apply --paper-material-elevation-2;\n      }\n      :host(.paper-material[elevation="3"]) {\n        @apply --paper-material-elevation-3;\n      }\n      :host(.paper-material[elevation="4"]) {\n        @apply --paper-material-elevation-4;\n      }\n      :host(.paper-material[elevation="5"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n  </template>\n</dom-module>',
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

        /**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        /**
Material design:
[Cards](https://www.google.com/design/spec/components/cards.html)

Shared styles that you can apply to an element to renders two shadows on top
of each other,that create the effect of a lifted piece of paper.

Example:

    <custom-style>
      <style is="custom-style" include="paper-material-styles"></style>
    </custom-style>

    <div class="paper-material" elevation="1">
      ... content ...
    </div>

@group Paper Elements
@demo demo/index.html
*/

        var template = Object(
          _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__[
            "html"
          ]
        )(_templateObject());
        template.setAttribute("style", "display: none;");
        document.head.appendChild(template.content);

        /***/
      },

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

    /***/ "./src/data/person.ts":
      /*!****************************!*\
  !*** ./src/data/person.ts ***!
  \****************************/
      /*! exports provided: fetchPersons, createPerson, updatePerson, deletePerson */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchPersons",
          function() {
            return fetchPersons;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createPerson",
          function() {
            return createPerson;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updatePerson",
          function() {
            return updatePerson;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deletePerson",
          function() {
            return deletePerson;
          }
        );
        var fetchPersons = function fetchPersons(hass) {
          return hass.callWS({
            type: "person/list",
          });
        };
        var createPerson = function createPerson(hass, values) {
          return hass.callWS(
            Object.assign(
              {
                type: "person/create",
              },
              values
            )
          );
        };
        var updatePerson = function updatePerson(hass, personId, updates) {
          return hass.callWS(
            Object.assign(
              {
                type: "person/update",
                person_id: personId,
              },
              updates
            )
          );
        };
        var deletePerson = function deletePerson(hass, personId) {
          return hass.callWS({
            type: "person/delete",
            person_id: personId,
          });
        };

        /***/
      },

    /***/ "./src/data/user.ts":
      /*!**************************!*\
  !*** ./src/data/user.ts ***!
  \**************************/
      /*! exports provided: SYSTEM_GROUP_ID_ADMIN, SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_READ_ONLY, fetchUsers, createUser, updateUser, deleteUser */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SYSTEM_GROUP_ID_ADMIN",
          function() {
            return SYSTEM_GROUP_ID_ADMIN;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SYSTEM_GROUP_ID_USER",
          function() {
            return SYSTEM_GROUP_ID_USER;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SYSTEM_GROUP_ID_READ_ONLY",
          function() {
            return SYSTEM_GROUP_ID_READ_ONLY;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchUsers",
          function() {
            return fetchUsers;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createUser",
          function() {
            return createUser;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateUser",
          function() {
            return updateUser;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteUser",
          function() {
            return deleteUser;
          }
        );
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

        var SYSTEM_GROUP_ID_ADMIN = "system-admin";
        var SYSTEM_GROUP_ID_USER = "system-users";
        var SYSTEM_GROUP_ID_READ_ONLY = "system-read-only";
        var fetchUsers =
          /*#__PURE__*/
          (function() {
            var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(hass) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        return _context.abrupt(
                          "return",
                          hass.callWS({
                            type: "config/auth/list",
                          })
                        );

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })
            );

            return function fetchUsers(_x) {
              return _ref.apply(this, arguments);
            };
          })();
        var createUser =
          /*#__PURE__*/
          (function() {
            var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(hass, name) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        return _context2.abrupt(
                          "return",
                          hass.callWS({
                            type: "config/auth/create",
                            name: name,
                          })
                        );

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })
            );

            return function createUser(_x2, _x3) {
              return _ref2.apply(this, arguments);
            };
          })();
        var updateUser =
          /*#__PURE__*/
          (function() {
            var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3(hass, userId, params) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        return _context3.abrupt(
                          "return",
                          hass.callWS(
                            Object.assign({}, params, {
                              type: "config/auth/update",
                              user_id: userId,
                            })
                          )
                        );

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              })
            );

            return function updateUser(_x4, _x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          })();
        var deleteUser =
          /*#__PURE__*/
          (function() {
            var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4(hass, userId) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        return _context4.abrupt(
                          "return",
                          hass.callWS({
                            type: "config/auth/delete",
                            user_id: userId,
                          })
                        );

                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              })
            );

            return function deleteUser(_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          })();

        /***/
      },

    /***/ "./src/panels/config/ha-config-section.js":
      /*!************************************************!*\
  !*** ./src/panels/config/ha-config-section.js ***!
  \************************************************/
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
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
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
            '\n      <style include="iron-flex ha-style">\n        .content {\n          padding: 28px 20px 0;\n          max-width: 1040px;\n          margin: 0 auto;\n        }\n\n        .header {\n          @apply --paper-font-display1;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .together {\n          margin-top: 32px;\n        }\n\n        .intro {\n          @apply --paper-font-subhead;\n          width: 100%;\n          max-width: 400px;\n          margin-right: 40px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .panel {\n          margin-top: -24px;\n        }\n\n        .panel ::slotted(*) {\n          margin-top: 24px;\n          display: block;\n        }\n\n        .narrow.content {\n          max-width: 640px;\n        }\n        .narrow .together {\n          margin-top: 20px;\n        }\n        .narrow .header {\n          @apply --paper-font-headline;\n        }\n        .narrow .intro {\n          font-size: 14px;\n          padding-bottom: 20px;\n          margin-right: 0;\n          max-width: 500px;\n        }\n      </style>\n      <div class$="[[computeContentClasses(isWide)]]">\n        <div class="header"><slot name="header"></slot></div>\n        <div class$="[[computeClasses(isWide)]]">\n          <div class="intro"><slot name="introduction"></slot></div>\n          <div class="panel flex-auto"><slot></slot></div>\n        </div>\n      </div>\n    ',
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

        var HaConfigSection =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaConfigSection, _PolymerElement);

            function HaConfigSection() {
              _classCallCheck(this, HaConfigSection);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaConfigSection).apply(this, arguments)
              );
            }

            _createClass(
              HaConfigSection,
              [
                {
                  key: "computeContentClasses",
                  value: function computeContentClasses(isWide) {
                    var classes = "content ";
                    return isWide ? classes : classes + "narrow";
                  },
                },
                {
                  key: "computeClasses",
                  value: function computeClasses(isWide) {
                    var classes = "together layout ";
                    return (
                      classes + (isWide ? "horizontal" : "vertical narrow")
                    );
                  },
                },
              ],
              [
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
                      hass: {
                        type: Object,
                      },
                      narrow: {
                        type: Boolean,
                      },
                      isWide: {
                        type: Boolean,
                        value: false,
                      },
                    };
                  },
                },
              ]
            );

            return HaConfigSection;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-config-section", HaConfigSection);

        /***/
      },

    /***/ "./src/panels/config/person/ha-config-person.ts":
      /*!******************************************************!*\
  !*** ./src/panels/config/person/ha-config-person.ts ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js"
        );
        /* harmony import */ var _data_person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../data/person */ "./src/data/person.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts"
        );
        /* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../common/string/compare */ "./src/common/string/compare.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _show_dialog_person_detail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./show-dialog-person-detail */ "./src/panels/config/person/show-dialog-person-detail.ts"
        );
        /* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../data/user */ "./src/data/user.ts"
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

        function _templateObject9() {
          var data = _taggedTemplateLiteral([
            "\n      a {\n        color: var(--primary-color);\n      }\n      ha-card {\n        max-width: 600px;\n        margin: 16px auto;\n        overflow: hidden;\n      }\n      .empty {\n        text-align: center;\n        padding: 8px;\n      }\n      paper-item {\n        padding-top: 4px;\n        padding-bottom: 4px;\n      }\n      ha-card.storage paper-item {\n        cursor: pointer;\n      }\n      paper-fab {\n        position: fixed;\n        bottom: 16px;\n        right: 16px;\n        z-index: 1;\n      }\n\n      paper-fab[is-wide] {\n        bottom: 24px;\n        right: 24px;\n      }\n    ",
          ]);

          _templateObject9 = function _templateObject9() {
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

        function _templateObject8() {
          var data = _taggedTemplateLiteral([
            "\n                      <paper-item>\n                        <paper-item-body>\n                          ",
            "\n                        </paper-item-body>\n                      </paper-item>\n                    ",
          ]);

          _templateObject8 = function _templateObject8() {
            return data;
          };

          return data;
        }

        function _templateObject7() {
          var data = _taggedTemplateLiteral([
            '\n                <ha-card header="Configuration.yaml persons">\n                  ',
            "\n                </ha-card>\n              ",
          ]);

          _templateObject7 = function _templateObject7() {
            return data;
          };

          return data;
        }

        function _templateObject6() {
          var data = _taggedTemplateLiteral([""]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            '\n                  <div class="empty">\n                    Looks like you have not created any persons yet.\n                    <mwc-button @click=',
            ">\n                      CREATE PERSON</mwc-button\n                    >\n                  </div>\n                ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            "\n                <paper-item @click=",
            " .entry=",
            ">\n                  <paper-item-body>\n                    ",
            "\n                  </paper-item-body>\n                </paper-item>\n              ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n                  <p>\n                    Note: persons configured via configuration.yaml cannot be\n                    edited via the UI.\n                  </p>\n                ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n      <hass-subpage header="Persons">\n        <ha-config-section .isWide=',
            '>\n          <span slot="header">Persons</span>\n          <span slot="introduction">\n            Here you can define each person of interest in JAVIS Home.\n            ',
            '\n          </span>\n          <ha-card class="storage">\n            ',
            "\n            ",
            "\n          </ha-card>\n          ",
            "\n        </ha-config-section>\n      </hass-subpage>\n\n      <paper-fab\n        ?is-wide=",
            '\n        icon="hass:plus"\n        title="Add Person"\n        @click=',
            "\n      ></paper-fab>\n    ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n        <hass-loading-screen></hass-loading-screen>\n      ",
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

        var HaConfigPerson =
          /*#__PURE__*/
          (function(_LitElement) {
            _inherits(HaConfigPerson, _LitElement);

            function HaConfigPerson() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, HaConfigPerson);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(HaConfigPerson)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args)
                )
              );
              _this.hass = void 0;
              _this.isWide = void 0;
              _this._storageItems = void 0;
              _this._configItems = void 0;
              _this._usersLoad = void 0;
              return _this;
            }

            _createClass(
              HaConfigPerson,
              [
                {
                  key: "render",
                  value: function render() {
                    var _this2 = this;

                    if (
                      !this.hass ||
                      this._storageItems === undefined ||
                      this._configItems === undefined
                    ) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject2(),
                      this.isWide,
                      this._configItems.length > 0
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject3())
                        : "",
                      this._storageItems.map(function(entry) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(_templateObject4(), _this2._openEditEntry, entry, entry.name);
                      }),
                      this._storageItems.length === 0
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject5(), this._createPerson)
                        : Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject6()),
                      this._configItems.length > 0
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject7(),
                            this._configItems.map(function(entry) {
                              return Object(
                                lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                              )(_templateObject8(), entry.name);
                            })
                          )
                        : "",
                      this.isWide,
                      this._createPerson
                    );
                  },
                },
                {
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(HaConfigPerson.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this._fetchData();

                    Object(
                      _show_dialog_person_detail__WEBPACK_IMPORTED_MODULE_10__[
                        "loadPersonDetailDialog"
                      ]
                    )();
                  },
                },
                {
                  key: "_fetchData",
                  value: (function() {
                    var _fetchData2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var personData;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  this._usersLoad = Object(
                                    _data_user__WEBPACK_IMPORTED_MODULE_11__[
                                      "fetchUsers"
                                    ]
                                  )(this.hass);
                                  _context.next = 3;
                                  return Object(
                                    _data_person__WEBPACK_IMPORTED_MODULE_4__[
                                      "fetchPersons"
                                    ]
                                  )(this.hass);

                                case 3:
                                  personData = _context.sent;
                                  this._storageItems = personData.storage.sort(
                                    function(ent1, ent2) {
                                      return Object(
                                        _common_string_compare__WEBPACK_IMPORTED_MODULE_8__[
                                          "compare"
                                        ]
                                      )(ent1.name, ent2.name);
                                    }
                                  );
                                  this._configItems = personData.config.sort(
                                    function(ent1, ent2) {
                                      return Object(
                                        _common_string_compare__WEBPACK_IMPORTED_MODULE_8__[
                                          "compare"
                                        ]
                                      )(ent1.name, ent2.name);
                                    }
                                  );

                                case 6:
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

                    function _fetchData() {
                      return _fetchData2.apply(this, arguments);
                    }

                    return _fetchData;
                  })(),
                },
                {
                  key: "_createPerson",
                  value: function _createPerson() {
                    this._openDialog();
                  },
                },
                {
                  key: "_openEditEntry",
                  value: function _openEditEntry(ev) {
                    var entry = ev.currentTarget.entry;

                    this._openDialog(entry);
                  },
                },
                {
                  key: "_allowedUsers",
                  value: function _allowedUsers(users, currentPerson) {
                    var used = new Set();
                    var _arr = [this._configItems, this._storageItems];

                    for (var _i = 0; _i < _arr.length; _i++) {
                      var coll = _arr[_i];
                      var _iteratorNormalCompletion = true;
                      var _didIteratorError = false;
                      var _iteratorError = undefined;

                      try {
                        for (
                          var _iterator = coll[Symbol.iterator](), _step;
                          !(_iteratorNormalCompletion = (_step = _iterator.next())
                            .done);
                          _iteratorNormalCompletion = true
                        ) {
                          var pers = _step.value;

                          if (pers.user_id) {
                            used.add(pers.user_id);
                          }
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
                    }

                    var currentUserId = currentPerson
                      ? currentPerson.user_id
                      : undefined;
                    return users.filter(function(user) {
                      return user.id === currentUserId || !used.has(user.id);
                    });
                  },
                },
                {
                  key: "_openDialog",
                  value: (function() {
                    var _openDialog2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee5(entry) {
                        var _this3 = this;

                        var users;
                        return regeneratorRuntime.wrap(
                          function _callee5$(_context5) {
                            while (1) {
                              switch ((_context5.prev = _context5.next)) {
                                case 0:
                                  _context5.next = 2;
                                  return this._usersLoad;

                                case 2:
                                  users = _context5.sent;
                                  Object(
                                    _show_dialog_person_detail__WEBPACK_IMPORTED_MODULE_10__[
                                      "showPersonDetailDialog"
                                    ]
                                  )(this, {
                                    entry: entry,
                                    users: this._allowedUsers(users, entry),
                                    createEntry: (function() {
                                      var _createEntry = _asyncToGenerator(
                                        /*#__PURE__*/
                                        regeneratorRuntime.mark(
                                          function _callee2(values) {
                                            var created;
                                            return regeneratorRuntime.wrap(
                                              function _callee2$(_context2) {
                                                while (1) {
                                                  switch (
                                                    (_context2.prev =
                                                      _context2.next)
                                                  ) {
                                                    case 0:
                                                      _context2.next = 2;
                                                      return Object(
                                                        _data_person__WEBPACK_IMPORTED_MODULE_4__[
                                                          "createPerson"
                                                        ]
                                                      )(_this3.hass, values);

                                                    case 2:
                                                      created = _context2.sent;
                                                      _this3._storageItems = _this3._storageItems
                                                        .concat(created)
                                                        .sort(function(
                                                          ent1,
                                                          ent2
                                                        ) {
                                                          return Object(
                                                            _common_string_compare__WEBPACK_IMPORTED_MODULE_8__[
                                                              "compare"
                                                            ]
                                                          )(
                                                            ent1.name,
                                                            ent2.name
                                                          );
                                                        });

                                                    case 4:
                                                    case "end":
                                                      return _context2.stop();
                                                  }
                                                }
                                              },
                                              _callee2
                                            );
                                          }
                                        )
                                      );

                                      function createEntry(_x2) {
                                        return _createEntry.apply(
                                          this,
                                          arguments
                                        );
                                      }

                                      return createEntry;
                                    })(),
                                    updateEntry: (function() {
                                      var _updateEntry = _asyncToGenerator(
                                        /*#__PURE__*/
                                        regeneratorRuntime.mark(
                                          function _callee3(values) {
                                            var updated;
                                            return regeneratorRuntime.wrap(
                                              function _callee3$(_context3) {
                                                while (1) {
                                                  switch (
                                                    (_context3.prev =
                                                      _context3.next)
                                                  ) {
                                                    case 0:
                                                      _context3.next = 2;
                                                      return Object(
                                                        _data_person__WEBPACK_IMPORTED_MODULE_4__[
                                                          "updatePerson"
                                                        ]
                                                      )(
                                                        _this3.hass,
                                                        entry.id,
                                                        values
                                                      );

                                                    case 2:
                                                      updated = _context3.sent;
                                                      _this3._storageItems = _this3._storageItems.map(
                                                        function(ent) {
                                                          return ent === entry
                                                            ? updated
                                                            : ent;
                                                        }
                                                      );

                                                    case 4:
                                                    case "end":
                                                      return _context3.stop();
                                                  }
                                                }
                                              },
                                              _callee3
                                            );
                                          }
                                        )
                                      );

                                      function updateEntry(_x3) {
                                        return _updateEntry.apply(
                                          this,
                                          arguments
                                        );
                                      }

                                      return updateEntry;
                                    })(),
                                    removeEntry: (function() {
                                      var _removeEntry = _asyncToGenerator(
                                        /*#__PURE__*/
                                        regeneratorRuntime.mark(
                                          function _callee4() {
                                            return regeneratorRuntime.wrap(
                                              function _callee4$(_context4) {
                                                while (1) {
                                                  switch (
                                                    (_context4.prev =
                                                      _context4.next)
                                                  ) {
                                                    case 0:
                                                      if (
                                                        confirm(
                                                          "Are you sure you want to delete this person?\n\nAll devices belonging to this person will become unassigned."
                                                        )
                                                      ) {
                                                        _context4.next = 2;
                                                        break;
                                                      }

                                                      return _context4.abrupt(
                                                        "return",
                                                        false
                                                      );

                                                    case 2:
                                                      _context4.prev = 2;
                                                      _context4.next = 5;
                                                      return Object(
                                                        _data_person__WEBPACK_IMPORTED_MODULE_4__[
                                                          "deletePerson"
                                                        ]
                                                      )(_this3.hass, entry.id);

                                                    case 5:
                                                      _this3._storageItems = _this3._storageItems.filter(
                                                        function(ent) {
                                                          return ent !== entry;
                                                        }
                                                      );
                                                      return _context4.abrupt(
                                                        "return",
                                                        true
                                                      );

                                                    case 9:
                                                      _context4.prev = 9;
                                                      _context4.t0 = _context4[
                                                        "catch"
                                                      ](2);
                                                      return _context4.abrupt(
                                                        "return",
                                                        false
                                                      );

                                                    case 12:
                                                    case "end":
                                                      return _context4.stop();
                                                  }
                                                }
                                              },
                                              _callee4,
                                              null,
                                              [[2, 9]]
                                            );
                                          }
                                        )
                                      );

                                      function removeEntry() {
                                        return _removeEntry.apply(
                                          this,
                                          arguments
                                        );
                                      }

                                      return removeEntry;
                                    })(),
                                  });

                                case 4:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          },
                          _callee5,
                          this
                        );
                      })
                    );

                    function _openDialog(_x) {
                      return _openDialog2.apply(this, arguments);
                    }

                    return _openDialog;
                  })(),
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: {},
                      isWide: {},
                      _storageItems: {},
                      _configItems: {},
                    };
                  },
                },
                {
                  key: "styles",
                  get: function get() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject9());
                  },
                },
              ]
            );

            return HaConfigPerson;
          })(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

        customElements.define("ha-config-person", HaConfigPerson);

        /***/
      },

    /***/ "./src/panels/config/person/show-dialog-person-detail.ts":
      /*!***************************************************************!*\
  !*** ./src/panels/config/person/show-dialog-person-detail.ts ***!
  \***************************************************************/
      /*! exports provided: loadPersonDetailDialog, showPersonDetailDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadPersonDetailDialog",
          function() {
            return loadPersonDetailDialog;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showPersonDetailDialog",
          function() {
            return showPersonDetailDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        var loadPersonDetailDialog = function loadPersonDetailDialog() {
          return Promise.all(
            /*! import() | person-detail-dialog */ [
              __webpack_require__.e(0),
              __webpack_require__.e(
                "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
              ),
              __webpack_require__.e(2),
              __webpack_require__.e(3),
              __webpack_require__.e(
                "vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~2ef54234"
              ),
              __webpack_require__.e(4),
              __webpack_require__.e(
                "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
              ),
              __webpack_require__.e(
                "vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"
              ),
              __webpack_require__.e(
                "vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"
              ),
              __webpack_require__.e("vendors~person-detail-dialog"),
              __webpack_require__.e(5),
              __webpack_require__.e(6),
              __webpack_require__.e("person-detail-dialog"),
            ]
          ).then(
            __webpack_require__.bind(
              null,
              /*! ./dialog-person-detail */ "./src/panels/config/person/dialog-person-detail.ts"
            )
          );
        };
        var showPersonDetailDialog = function showPersonDetailDialog(
          element,
          systemLogDetailParams
        ) {
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-dialog", {
            dialogTag: "dialog-person-detail",
            dialogImport: loadPersonDetailDialog,
            dialogParams: systemLogDetailParams,
          });
        };

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXBlcnNvbi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvcGVyc29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaGEtY29uZmlnLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvcGVyc29uL2hhLWNvbmZpZy1wZXJzb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvcGVyc29uL3Nob3ctZGlhbG9nLXBlcnNvbi1kZXRhaWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltDYXJkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2NhcmRzLmh0bWwpXG5cblNoYXJlZCBzdHlsZXMgdGhhdCB5b3UgY2FuIGFwcGx5IHRvIGFuIGVsZW1lbnQgdG8gcmVuZGVycyB0d28gc2hhZG93cyBvbiB0b3Bcbm9mIGVhY2ggb3RoZXIsdGhhdCBjcmVhdGUgdGhlIGVmZmVjdCBvZiBhIGxpZnRlZCBwaWVjZSBvZiBwYXBlci5cblxuRXhhbXBsZTpcblxuICAgIDxjdXN0b20tc3R5bGU+XG4gICAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwicGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8L2N1c3RvbS1zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJwYXBlci1tYXRlcmlhbFwiIGVsZXZhdGlvbj1cIjFcIj5cbiAgICAgIC4uLiBjb250ZW50IC4uLlxuICAgIDwvZGl2PlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblxuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnLi4vc2hhZG93LmpzJztcblxuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLW1hdGVyaWFsLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgaHRtbCB7XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTE6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTJkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMjoge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNGRwO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zOiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi02ZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTQ6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLThkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNToge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMTZkcDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC5wYXBlci1tYXRlcmlhbCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsO1xuICAgICAgfVxuICAgICAgLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjFcIl0ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgIH1cbiAgICAgIC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCIyXCJdIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI7XG4gICAgICB9XG4gICAgICAucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiM1wiXSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zO1xuICAgICAgfVxuICAgICAgLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjRcIl0ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICAgIH1cbiAgICAgIC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCI1XCJdIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU7XG4gICAgICB9XG5cbiAgICAgIC8qIER1cGxpY2F0ZSB0aGUgc3R5bGVzIGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvc2hhZHljc3MvaXNzdWVzLzE5MyAqL1xuICAgICAgOmhvc3Qge1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsOiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xOiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0yZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTRkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMzoge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNmRwO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi00OiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi04ZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTE2ZHA7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICA6aG9zdCgucGFwZXItbWF0ZXJpYWwpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWw7XG4gICAgICB9XG4gICAgICA6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiMVwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCIyXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0yO1xuICAgICAgfVxuICAgICAgOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjNcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTM7XG4gICAgICB9XG4gICAgICA6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiNFwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCI1XCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi01O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudCk7XG4iLCJleHBvcnQgY29uc3QgY29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEgPiBiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXNlSW5zZW5zaXRpdmVDb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PlxuICBjb21wYXJlKGEudG9Mb3dlckNhc2UoKSwgYi50b0xvd2VyQ2FzZSgpKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQZXJzb24ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHVzZXJfaWQ/OiBzdHJpbmc7XG4gIGRldmljZV90cmFja2Vycz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNvbk11dGFibGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVzZXJfaWQ6IHN0cmluZyB8IG51bGw7XG4gIGRldmljZV90cmFja2Vyczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBlcnNvbnMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8e1xuICAgIHN0b3JhZ2U6IFBlcnNvbltdO1xuICAgIGNvbmZpZzogUGVyc29uW107XG4gIH0+KHsgdHlwZTogXCJwZXJzb24vbGlzdFwiIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUGVyc29uID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB2YWx1ZXM6IFBlcnNvbk11dGFibGVQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8UGVyc29uPih7XG4gICAgdHlwZTogXCJwZXJzb24vY3JlYXRlXCIsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcnNvbiA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgcGVyc29uSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxQZXJzb25NdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxQZXJzb24+KHtcbiAgICB0eXBlOiBcInBlcnNvbi91cGRhdGVcIixcbiAgICBwZXJzb25faWQ6IHBlcnNvbklkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUGVyc29uID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIHBlcnNvbklkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInBlcnNvbi9kZWxldGVcIixcbiAgICBwZXJzb25faWQ6IHBlcnNvbklkLFxuICB9KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IENyZWRlbnRpYWwgfSBmcm9tIFwiLi9hdXRoXCI7XG5cbmV4cG9ydCBjb25zdCBTWVNURU1fR1JPVVBfSURfQURNSU4gPSBcInN5c3RlbS1hZG1pblwiO1xuZXhwb3J0IGNvbnN0IFNZU1RFTV9HUk9VUF9JRF9VU0VSID0gXCJzeXN0ZW0tdXNlcnNcIjtcbmV4cG9ydCBjb25zdCBTWVNURU1fR1JPVVBfSURfUkVBRF9PTkxZID0gXCJzeXN0ZW0tcmVhZC1vbmx5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNfb3duZXI6IGJvb2xlYW47XG4gIGlzX2FjdGl2ZTogYm9vbGVhbjtcbiAgc3lzdGVtX2dlbmVyYXRlZDogYm9vbGVhbjtcbiAgZ3JvdXBfaWRzOiBzdHJpbmdbXTtcbiAgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxbXTtcbn1cblxuaW50ZXJmYWNlIFVwZGF0ZVVzZXJQYXJhbXMge1xuICBuYW1lPzogVXNlcltcIm5hbWVcIl07XG4gIGdyb3VwX2lkcz86IFVzZXJbXCJncm91cF9pZHNcIl07XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPFVzZXJbXT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvbGlzdFwiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAoaGFzczogSG9tZUFzc2lzdGFudCwgbmFtZTogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzx7IHVzZXI6IFVzZXIgfT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvY3JlYXRlXCIsXG4gICAgbmFtZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB1c2VySWQ6IHN0cmluZyxcbiAgcGFyYW1zOiBVcGRhdGVVc2VyUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPHsgdXNlcjogVXNlciB9Pih7XG4gICAgLi4ucGFyYW1zLFxuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvdXBkYXRlXCIsXG4gICAgdXNlcl9pZDogdXNlcklkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoaGFzczogSG9tZUFzc2lzdGFudCwgdXNlcklkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPHZvaWQ+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hdXRoL2RlbGV0ZVwiLFxuICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgfSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuY2xhc3MgSGFDb25maWdTZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDI4cHggMjBweCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1kaXNwbGF5MTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXJyb3cuY29udGVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaW50cm8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvXCI+PHNsb3QgbmFtZT1cImludHJvZHVjdGlvblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZmxleC1hdXRvXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJjb250ZW50IFwiO1xuXG4gICAgcmV0dXJuIGlzV2lkZSA/IGNsYXNzZXMgOiBjbGFzc2VzICsgXCJuYXJyb3dcIjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJ0b2dldGhlciBsYXlvdXQgXCI7XG5cbiAgICByZXR1cm4gY2xhc3NlcyArIChpc1dpZGUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWwgbmFycm93XCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1zZWN0aW9uXCIsIEhhQ29uZmlnU2VjdGlvbik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWZhYi9wYXBlci1mYWJcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgUGVyc29uLFxuICBmZXRjaFBlcnNvbnMsXG4gIHVwZGF0ZVBlcnNvbixcbiAgZGVsZXRlUGVyc29uLFxuICBjcmVhdGVQZXJzb24sXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3BlcnNvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCB7XG4gIHNob3dQZXJzb25EZXRhaWxEaWFsb2csXG4gIGxvYWRQZXJzb25EZXRhaWxEaWFsb2csXG59IGZyb20gXCIuL3Nob3ctZGlhbG9nLXBlcnNvbi1kZXRhaWxcIjtcbmltcG9ydCB7IFVzZXIsIGZldGNoVXNlcnMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS91c2VyXCI7XG5cbmNsYXNzIEhhQ29uZmlnUGVyc29uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHVibGljIGlzV2lkZT86IGJvb2xlYW47XG4gIHByaXZhdGUgX3N0b3JhZ2VJdGVtcz86IFBlcnNvbltdO1xuICBwcml2YXRlIF9jb25maWdJdGVtcz86IFBlcnNvbltdO1xuICBwcml2YXRlIF91c2Vyc0xvYWQ/OiBQcm9taXNlPFVzZXJbXT47XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBpc1dpZGU6IHt9LFxuICAgICAgX3N0b3JhZ2VJdGVtczoge30sXG4gICAgICBfY29uZmlnSXRlbXM6IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuaGFzcyB8fFxuICAgICAgdGhpcy5fc3RvcmFnZUl0ZW1zID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2NvbmZpZ0l0ZW1zID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGFzcy1sb2FkaW5nLXNjcmVlbj48L2hhc3MtbG9hZGluZy1zY3JlZW4+XG4gICAgICBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2UgaGVhZGVyPVwiUGVyc29uc1wiPlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT0ke3RoaXMuaXNXaWRlfT5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+UGVyc29uczwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICBIZXJlIHlvdSBjYW4gZGVmaW5lIGVhY2ggcGVyc29uIG9mIGludGVyZXN0IGluIEpBVklTIEhvbWUuXG4gICAgICAgICAgICAke3RoaXMuX2NvbmZpZ0l0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIE5vdGU6IHBlcnNvbnMgY29uZmlndXJlZCB2aWEgY29uZmlndXJhdGlvbi55YW1sIGNhbm5vdCBiZVxuICAgICAgICAgICAgICAgICAgICBlZGl0ZWQgdmlhIHRoZSBVSS5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJzdG9yYWdlXCI+XG4gICAgICAgICAgICAke3RoaXMuX3N0b3JhZ2VJdGVtcy5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIEBjbGljaz0ke3RoaXMuX29wZW5FZGl0RW50cnl9IC5lbnRyeT0ke2VudHJ5fT5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICR7ZW50cnkubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgJHt0aGlzLl9zdG9yYWdlSXRlbXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eVwiPlxuICAgICAgICAgICAgICAgICAgICBMb29rcyBsaWtlIHlvdSBoYXZlIG5vdCBjcmVhdGVkIGFueSBwZXJzb25zIHlldC5cbiAgICAgICAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fY3JlYXRlUGVyc29ufT5cbiAgICAgICAgICAgICAgICAgICAgICBDUkVBVEUgUEVSU09OPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBodG1sYGB9XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgICR7dGhpcy5fY29uZmlnSXRlbXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIkNvbmZpZ3VyYXRpb24ueWFtbCBwZXJzb25zXCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuX2NvbmZpZ0l0ZW1zLm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke2VudHJ5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuXG4gICAgICA8cGFwZXItZmFiXG4gICAgICAgID9pcy13aWRlPSR7dGhpcy5pc1dpZGV9XG4gICAgICAgIGljb249XCJoYXNzOnBsdXNcIlxuICAgICAgICB0aXRsZT1cIkFkZCBQZXJzb25cIlxuICAgICAgICBAY2xpY2s9JHt0aGlzLl9jcmVhdGVQZXJzb259XG4gICAgICA+PC9wYXBlci1mYWI+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gICAgbG9hZFBlcnNvbkRldGFpbERpYWxvZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hEYXRhKCkge1xuICAgIHRoaXMuX3VzZXJzTG9hZCA9IGZldGNoVXNlcnModGhpcy5oYXNzISk7XG4gICAgY29uc3QgcGVyc29uRGF0YSA9IGF3YWl0IGZldGNoUGVyc29ucyh0aGlzLmhhc3MhKTtcblxuICAgIHRoaXMuX3N0b3JhZ2VJdGVtcyA9IHBlcnNvbkRhdGEuc3RvcmFnZS5zb3J0KChlbnQxLCBlbnQyKSA9PlxuICAgICAgY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSlcbiAgICApO1xuICAgIHRoaXMuX2NvbmZpZ0l0ZW1zID0gcGVyc29uRGF0YS5jb25maWcuc29ydCgoZW50MSwgZW50MikgPT5cbiAgICAgIGNvbXBhcmUoZW50MS5uYW1lLCBlbnQyLm5hbWUpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVBlcnNvbigpIHtcbiAgICB0aGlzLl9vcGVuRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuRWRpdEVudHJ5KGV2OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZW50cnk6IFBlcnNvbiA9IChldi5jdXJyZW50VGFyZ2V0ISBhcyBhbnkpLmVudHJ5O1xuICAgIHRoaXMuX29wZW5EaWFsb2coZW50cnkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWxsb3dlZFVzZXJzKHVzZXJzOiBVc2VyW10sIGN1cnJlbnRQZXJzb24/OiBQZXJzb24pIHtcbiAgICBjb25zdCB1c2VkID0gbmV3IFNldCgpO1xuICAgIGZvciAoY29uc3QgY29sbCBvZiBbdGhpcy5fY29uZmlnSXRlbXMsIHRoaXMuX3N0b3JhZ2VJdGVtc10pIHtcbiAgICAgIGZvciAoY29uc3QgcGVycyBvZiBjb2xsISkge1xuICAgICAgICBpZiAocGVycy51c2VyX2lkKSB7XG4gICAgICAgICAgdXNlZC5hZGQocGVycy51c2VyX2lkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjdXJyZW50VXNlcklkID0gY3VycmVudFBlcnNvbiA/IGN1cnJlbnRQZXJzb24udXNlcl9pZCA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdXNlcnMuZmlsdGVyKFxuICAgICAgKHVzZXIpID0+IHVzZXIuaWQgPT09IGN1cnJlbnRVc2VySWQgfHwgIXVzZWQuaGFzKHVzZXIuaWQpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX29wZW5EaWFsb2coZW50cnk/OiBQZXJzb24pIHtcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHRoaXMuX3VzZXJzTG9hZCE7XG5cbiAgICBzaG93UGVyc29uRGV0YWlsRGlhbG9nKHRoaXMsIHtcbiAgICAgIGVudHJ5LFxuICAgICAgdXNlcnM6IHRoaXMuX2FsbG93ZWRVc2Vycyh1c2VycywgZW50cnkpLFxuICAgICAgY3JlYXRlRW50cnk6IGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlZCA9IGF3YWl0IGNyZWF0ZVBlcnNvbih0aGlzLmhhc3MhLCB2YWx1ZXMpO1xuICAgICAgICB0aGlzLl9zdG9yYWdlSXRlbXMgPSB0aGlzLl9zdG9yYWdlSXRlbXMhLmNvbmNhdChjcmVhdGVkKS5zb3J0KFxuICAgICAgICAgIChlbnQxLCBlbnQyKSA9PiBjb21wYXJlKGVudDEubmFtZSwgZW50Mi5uYW1lKVxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZUVudHJ5OiBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCB1cGRhdGVQZXJzb24odGhpcy5oYXNzISwgZW50cnkhLmlkLCB2YWx1ZXMpO1xuICAgICAgICB0aGlzLl9zdG9yYWdlSXRlbXMgPSB0aGlzLl9zdG9yYWdlSXRlbXMhLm1hcCgoZW50KSA9PlxuICAgICAgICAgIGVudCA9PT0gZW50cnkgPyB1cGRhdGVkIDogZW50XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlRW50cnk6IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcGVyc29uP1xuXG5BbGwgZGV2aWNlcyBiZWxvbmdpbmcgdG8gdGhpcyBwZXJzb24gd2lsbCBiZWNvbWUgdW5hc3NpZ25lZC5gKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGRlbGV0ZVBlcnNvbih0aGlzLmhhc3MhLCBlbnRyeSEuaWQpO1xuICAgICAgICAgIHRoaXMuX3N0b3JhZ2VJdGVtcyA9IHRoaXMuX3N0b3JhZ2VJdGVtcyEuZmlsdGVyKFxuICAgICAgICAgICAgKGVudCkgPT4gZW50ICE9PSBlbnRyeVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAuZW1wdHkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgfVxuICAgICAgaGEtY2FyZC5zdG9yYWdlIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBwYXBlci1mYWIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWZhYltpcy13aWRlXSB7XG4gICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctcGVyc29uXCIsIEhhQ29uZmlnUGVyc29uKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IFBlcnNvbiwgUGVyc29uTXV0YWJsZVBhcmFtcyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3BlcnNvblwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3VzZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQZXJzb25EZXRhaWxEaWFsb2dQYXJhbXMge1xuICBlbnRyeT86IFBlcnNvbjtcbiAgdXNlcnM6IFVzZXJbXTtcbiAgY3JlYXRlRW50cnk6ICh2YWx1ZXM6IFBlcnNvbk11dGFibGVQYXJhbXMpID0+IFByb21pc2U8dW5rbm93bj47XG4gIHVwZGF0ZUVudHJ5OiAodXBkYXRlczogUGFydGlhbDxQZXJzb25NdXRhYmxlUGFyYW1zPikgPT4gUHJvbWlzZTx1bmtub3duPjtcbiAgcmVtb3ZlRW50cnk6ICgpID0+IFByb21pc2U8Ym9vbGVhbj47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkUGVyc29uRGV0YWlsRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGVyc29uLWRldGFpbC1kaWFsb2dcIiAqLyBcIi4vZGlhbG9nLXBlcnNvbi1kZXRhaWxcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93UGVyc29uRGV0YWlsRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgc3lzdGVtTG9nRGV0YWlsUGFyYW1zOiBQZXJzb25EZXRhaWxEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1wZXJzb24tZGV0YWlsXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkUGVyc29uRGV0YWlsRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczogc3lzdGVtTG9nRGV0YWlsUGFyYW1zLFxuICB9KTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFFQTtBQUNBO0FBdUZBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFLQTtBQURBO0FBSkE7QUFTQTtBQUFBO0FBTUE7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBSEE7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBK0VBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBeEZBO0FBQ0E7QUEwREE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBY0E7Ozs7QUE3RUE7QUFDQTtBQTJGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFRQTtBQUNBO0FBQ0E7QUFHQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBR0E7QUFDQTtBQUFBO0FBaUJBO0FBT0E7QUFnQkE7QUFPQTtBQWNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0E7O0FBQ0E7QUFDQTs7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7QUFFQTs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBV0E7QUFDQTtBQUFBO0FBWkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBZkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFoSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7O0FBNkpBO0FBQ0E7QUFnQ0E7Ozs7QUE1TUE7QUFDQTtBQThNQTs7Ozs7Ozs7Ozs7O0FDOU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUFBLCtsQ0FDQTtBQURBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
