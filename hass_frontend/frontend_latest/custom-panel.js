/******/ (function(modules) {
  // webpackBootstrap
  /******/ // install a JSONP callback for chunk loading
  /******/ function webpackJsonpCallback(data) {
    /******/ var chunkIds = data[0];
    /******/ var moreModules = data[1]; // add "moreModules" to the modules object, // then flag all "chunkIds" as loaded and fire callback
    /******/
    /******/
    /******/ /******/ /******/ var moduleId,
      chunkId,
      i = 0,
      resolves = [];
    /******/ for (; i < chunkIds.length; i++) {
      /******/ chunkId = chunkIds[i];
      /******/ if (installedChunks[chunkId]) {
        /******/ resolves.push(installedChunks[chunkId][0]);
        /******/
      }
      /******/ installedChunks[chunkId] = 0;
      /******/
    }
    /******/ for (moduleId in moreModules) {
      /******/ if (
        Object.prototype.hasOwnProperty.call(moreModules, moduleId)
      ) {
        /******/ modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/
    }
    /******/ if (parentJsonpFunction) parentJsonpFunction(data);
    /******/
    /******/ while (resolves.length) {
      /******/ resolves.shift()();
      /******/
    }
    /******/
    /******/
  } // The module cache
  /******/
  /******/
  /******/ /******/ var installedModules = {}; // object to store loaded and loading chunks // undefined = chunk not loaded, null = chunk preloaded/prefetched // Promise = chunk loading, 0 = chunk loaded
  /******/
  /******/ /******/ /******/ /******/ var installedChunks = {
    /******/ "custom-panel": 0,
    /******/
  }; // script path function
  /******/
  /******/
  /******/
  /******/ /******/ function jsonpScriptSrc(chunkId) {
    /******/ return (
      __webpack_require__.p +
      "" +
      ({
        "import-href-polyfill": "import-href-polyfill",
        "vendors~compat": "vendors~compat",
        compat: "compat",
        "vendors~legacy-support": "vendors~legacy-support",
        "legacy-support": "legacy-support",
      }[chunkId] || chunkId) +
      ".chunk.js"
    );
    /******/
  } // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // This file contains only the entry chunk. // The chunk loading function for additional chunks
  /******/
  /******/ /******/ /******/ __webpack_require__.e = function requireEnsure(
    chunkId
  ) {
    /******/ var promises = []; // JSONP chunk loading for javascript
    /******/
    /******/
    /******/ /******/
    /******/ var installedChunkData = installedChunks[chunkId];
    /******/ if (installedChunkData !== 0) {
      // 0 means "already installed".
      /******/
      /******/ // a Promise means "currently loading".
      /******/ if (installedChunkData) {
        /******/ promises.push(installedChunkData[2]);
        /******/
      } else {
        /******/ // setup Promise in chunk cache
        /******/ var promise = new Promise(function(resolve, reject) {
          /******/ installedChunkData = installedChunks[chunkId] = [
            resolve,
            reject,
          ];
          /******/
        });
        /******/ promises.push((installedChunkData[2] = promise)); // start chunk loading
        /******/
        /******/ /******/ var script = document.createElement("script");
        /******/ var onScriptComplete;
        /******/
        /******/ script.charset = "utf-8";
        /******/ script.timeout = 120;
        /******/ if (__webpack_require__.nc) {
          /******/ script.setAttribute("nonce", __webpack_require__.nc);
          /******/
        }
        /******/ script.src = jsonpScriptSrc(chunkId);
        /******/
        /******/ onScriptComplete = function(event) {
          /******/ // avoid mem leaks in IE.
          /******/ script.onerror = script.onload = null;
          /******/ clearTimeout(timeout);
          /******/ var chunk = installedChunks[chunkId];
          /******/ if (chunk !== 0) {
            /******/ if (chunk) {
              /******/ var errorType =
                event && (event.type === "load" ? "missing" : event.type);
              /******/ var realSrc = event && event.target && event.target.src;
              /******/ var error = new Error(
                "Loading chunk " +
                  chunkId +
                  " failed.\n(" +
                  errorType +
                  ": " +
                  realSrc +
                  ")"
              );
              /******/ error.type = errorType;
              /******/ error.request = realSrc;
              /******/ chunk[1](error);
              /******/
            }
            /******/ installedChunks[chunkId] = undefined;
            /******/
          }
          /******/
        };
        /******/ var timeout = setTimeout(function() {
          /******/ onScriptComplete({ type: "timeout", target: script });
          /******/
        }, 120000);
        /******/ script.onerror = script.onload = onScriptComplete;
        /******/ document.head.appendChild(script);
        /******/
      }
      /******/
    }
    /******/ return Promise.all(promises);
    /******/
  }; // expose the modules object (__webpack_modules__)
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = "/frontend_latest/"; // on error function for async loading
  /******/
  /******/ /******/ __webpack_require__.oe = function(err) {
    console.error(err);
    throw err;
  };
  /******/
  /******/ var jsonpArray = (window["webpackJsonp"] =
    window["webpackJsonp"] || []);
  /******/ var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/ jsonpArray.push = webpackJsonpCallback;
  /******/ jsonpArray = jsonpArray.slice();
  /******/ for (var i = 0; i < jsonpArray.length; i++)
    webpackJsonpCallback(jsonpArray[i]);
  /******/ var parentJsonpFunction = oldJsonpFunction; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/entrypoints/custom-panel.ts")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./src/common/dom/fire_event.ts":
      /*!**************************************!*\
  !*** ./src/common/dom/fire_event.ts ***!
  \**************************************/
      /*! exports provided: fireEvent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fireEvent",
          function() {
            return fireEvent;
          }
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

        /**
         * Dispatches a custom event with an optional detail value.
         *
         * @param {string} type Name of event type.
         * @param {*=} detail Detail value containing event-specific
         *   payload.
         * @param {{ bubbles: (boolean|undefined),
         *           cancelable: (boolean|undefined),
         *           composed: (boolean|undefined) }=}
         *  options Object specifying options.  These may include:
         *  `bubbles` (boolean, defaults to `true`),
         *  `cancelable` (boolean, defaults to false), and
         *  `node` on which to fire the event (HTMLElement, defaults to `this`).
         * @return {Event} The new event that was fired.
         */
        const fireEvent = (node, type, detail, options) => {
          options = options || {}; // @ts-ignore

          detail = detail === null || detail === undefined ? {} : detail;
          const event = new Event(type, {
            bubbles: options.bubbles === undefined ? true : options.bubbles,
            cancelable: Boolean(options.cancelable),
            composed: options.composed === undefined ? true : options.composed,
          });
          event.detail = detail;
          node.dispatchEvent(event);
          return event;
        };

        /***/
      },

    /***/ "./src/common/dom/load_resource.ts":
      /*!*****************************************!*\
  !*** ./src/common/dom/load_resource.ts ***!
  \*****************************************/
      /*! exports provided: loadCSS, loadJS, loadImg, loadModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadCSS",
          function() {
            return loadCSS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadJS",
          function() {
            return loadJS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadImg",
          function() {
            return loadImg;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadModule",
          function() {
            return loadModule;
          }
        );
        // Load a resource and get a promise when loading done.
        // From: https://davidwalsh.name/javascript-loader
        const _load = (tag, url, type) => {
          // This promise will be used by Promise.all to determine success or failure
          return new Promise((resolve, reject) => {
            const element = document.createElement(tag);
            let attr = "src";
            let parent = "body"; // Important success and error for the promise

            element.onload = () => resolve(url);

            element.onerror = () => reject(url); // Need to set different attributes depending on tag type

            switch (tag) {
              case "script":
                element.async = true;

                if (type) {
                  element.type = type;
                }

                break;

              case "link":
                element.type = "text/css";
                element.rel = "stylesheet";
                attr = "href";
                parent = "head";
            } // Inject into document to kick off loading

            element[attr] = url;
            document[parent].appendChild(element);
          });
        };

        const loadCSS = (url) => _load("link", url);
        const loadJS = (url) => _load("script", url);
        const loadImg = (url) => _load("img", url);
        const loadModule = (url) => _load("script", url, "module");

        /***/
      },

    /***/ "./src/common/feature-detect/support-web-components.ts":
      /*!*************************************************************!*\
  !*** ./src/common/feature-detect/support-web-components.ts ***!
  \*************************************************************/
      /*! exports provided: webComponentsSupported */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "webComponentsSupported",
          function() {
            return webComponentsSupported;
          }
        );
        const webComponentsSupported =
          "customElements" in window &&
          "content" in document.createElement("template");

        /***/
      },

    /***/ "./src/entrypoints/custom-panel.ts":
      /*!*****************************************!*\
  !*** ./src/entrypoints/custom-panel.ts ***!
  \*****************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../common/dom/load_resource */ "./src/common/dom/load_resource.ts"
        );
        /* harmony import */ var _util_custom_panel_load_custom_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/custom-panel/load-custom-panel */ "./src/util/custom-panel/load-custom-panel.ts"
        );
        /* harmony import */ var _util_custom_panel_create_custom_panel_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../util/custom-panel/create-custom-panel-element */ "./src/util/custom-panel/create-custom-panel-element.ts"
        );
        /* harmony import */ var _util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../util/custom-panel/set-custom-panel-properties */ "./src/util/custom-panel/set-custom-panel-properties.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _common_feature_detect_support_web_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../common/feature-detect/support-web-components */ "./src/common/feature-detect/support-web-components.ts"
        );

        let es5Loaded;

        window.loadES5Adapter = () => {
          if (!es5Loaded) {
            es5Loaded = Promise.all([
              Object(
                _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"]
              )(`${/static/}polyfills/custom-elements-es5-adapter.js`).catch(),
              Promise.all(
                /*! import() | compat */ [
                  __webpack_require__.e("vendors~compat"),
                  __webpack_require__.e("compat"),
                ]
              ).then(
                __webpack_require__.bind(
                  null,
                  /*! ./compatibility */ "./src/entrypoints/compatibility.ts"
                )
              ),
            ]);
          }

          return es5Loaded;
        };

        let panelEl;

        function setProperties(properties) {
          if (!panelEl) {
            return;
          }

          Object(
            _util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_3__[
              "setCustomPanelProperties"
            ]
          )(panelEl, properties);
        }

        function initialize(panel, properties) {
          const style = document.createElement("style");
          style.innerHTML = "body{margin:0}";
          document.head.appendChild(style);
          const config = panel.config._panel_custom;
          let start = Promise.resolve();

          if (
            !_common_feature_detect_support_web_components__WEBPACK_IMPORTED_MODULE_5__[
              "webComponentsSupported"
            ]
          ) {
            start = start.then(() =>
              Object(
                _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"]
              )(`${/static/}polyfills/webcomponents-bundle.js`)
            );
          }

          if (false) {
          }

          start
            .then(() =>
              Object(
                _util_custom_panel_load_custom_panel__WEBPACK_IMPORTED_MODULE_1__[
                  "loadCustomPanel"
                ]
              )(config)
            ) // If our element is using es5, let it finish loading that and define element
            // This avoids elements getting upgraded after being added to the DOM
            .then(() => es5Loaded || Promise.resolve())
            .then(
              () => {
                panelEl = Object(
                  _util_custom_panel_create_custom_panel_element__WEBPACK_IMPORTED_MODULE_2__[
                    "createCustomPanelElement"
                  ]
                )(config);

                const forwardEvent = (ev) => {
                  if (window.parent.customPanel) {
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__[
                        "fireEvent"
                      ]
                    )(window.parent.customPanel, ev.type, ev.detail);
                  }
                };

                panelEl.addEventListener("hass-toggle-menu", forwardEvent);
                window.addEventListener("location-changed", (ev) => {
                  if (window.parent.customPanel) {
                    window.parent.customPanel.navigate(
                      window.location.pathname,
                      ev.detail ? ev.detail.replace : false
                    );
                  }
                });
                setProperties(
                  Object.assign(
                    {
                      panel,
                    },
                    properties
                  )
                );
                document.body.appendChild(panelEl);
              },
              (err) => {
                // tslint:disable-next-line
                console.error(err, panel);
                alert(`Unable to load the panel source: ${err}.`);
              }
            );
        }

        document.addEventListener(
          "DOMContentLoaded",
          () =>
            window.parent.customPanel.registerIframe(initialize, setProperties),
          {
            once: true,
          }
        );

        /***/
      },

    /***/ "./src/util/custom-panel/create-custom-panel-element.ts":
      /*!**************************************************************!*\
  !*** ./src/util/custom-panel/create-custom-panel-element.ts ***!
  \**************************************************************/
      /*! exports provided: createCustomPanelElement */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createCustomPanelElement",
          function() {
            return createCustomPanelElement;
          }
        );
        const createCustomPanelElement = (panelConfig) => {
          // Legacy support. Custom panels used to have to define element ha-panel-{name}
          const tagName =
            "html_url" in panelConfig
              ? `ha-panel-${panelConfig.name}`
              : panelConfig.name;
          return document.createElement(tagName);
        };

        /***/
      },

    /***/ "./src/util/custom-panel/load-custom-panel.ts":
      /*!****************************************************!*\
  !*** ./src/util/custom-panel/load-custom-panel.ts ***!
  \****************************************************/
      /*! exports provided: loadCustomPanel */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadCustomPanel",
          function() {
            return loadCustomPanel;
          }
        );
        /* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../common/dom/load_resource */ "./src/common/dom/load_resource.ts"
        );
        // Make sure we only import every JS-based panel once (HTML import has this built-in)

        const JS_CACHE = {};
        const loadCustomPanel = (panelConfig) => {
          if (panelConfig.html_url) {
            const toLoad = [
              __webpack_require__
                .e(
                  /*! import() | import-href-polyfill */ "import-href-polyfill"
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ../../resources/html-import/import-href */ "./src/resources/html-import/import-href.js"
                  )
                ),
            ];

            if (!panelConfig.embed_iframe) {
              toLoad.push(
                Promise.all(
                  /*! import() | legacy-support */ [
                    __webpack_require__.e("vendors~legacy-support"),
                    __webpack_require__.e("legacy-support"),
                  ]
                ).then(
                  __webpack_require__.bind(
                    null,
                    /*! ../legacy-support */ "./src/util/legacy-support.js"
                  )
                )
              );
            }

            return Promise.all(toLoad).then(([{ importHrefPromise }]) =>
              importHrefPromise(panelConfig.html_url)
            );
          }

          if (panelConfig.js_url) {
            if (!(panelConfig.js_url in JS_CACHE)) {
              JS_CACHE[panelConfig.js_url] = Object(
                _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"]
              )(panelConfig.js_url);
            }

            return JS_CACHE[panelConfig.js_url];
          }

          if (panelConfig.module_url) {
            return Object(
              _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__[
                "loadModule"
              ]
            )(panelConfig.module_url);
          }

          return Promise.reject("No valid url found in panel config.");
        };

        /***/
      },

    /***/ "./src/util/custom-panel/set-custom-panel-properties.ts":
      /*!**************************************************************!*\
  !*** ./src/util/custom-panel/set-custom-panel-properties.ts ***!
  \**************************************************************/
      /*! exports provided: setCustomPanelProperties */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setCustomPanelProperties",
          function() {
            return setCustomPanelProperties;
          }
        );
        const setCustomPanelProperties = (root, properties) => {
          if ("setProperties" in root) {
            root.setProperties(properties);
          } else {
            Object.keys(properties).forEach((key) => {
              root[key] = properties[key];
            });
          }
        };

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXBhbmVsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZG9tL2ZpcmVfZXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vbG9hZF9yZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ZlYXR1cmUtZGV0ZWN0L3N1cHBvcnQtd2ViLWNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5cG9pbnRzL2N1c3RvbS1wYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jdXN0b20tcGFuZWwvY3JlYXRlLWN1c3RvbS1wYW5lbC1lbGVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2N1c3RvbS1wYW5lbC9sb2FkLWN1c3RvbS1wYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jdXN0b20tcGFuZWwvc2V0LWN1c3RvbS1wYW5lbC1wcm9wZXJ0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY3VzdG9tLXBhbmVsXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCJpbXBvcnQtaHJlZi1wb2x5ZmlsbFwiOlwiaW1wb3J0LWhyZWYtcG9seWZpbGxcIixcInZlbmRvcnN+Y29tcGF0XCI6XCJ2ZW5kb3JzfmNvbXBhdFwiLFwiY29tcGF0XCI6XCJjb21wYXRcIixcInZlbmRvcnN+bGVnYWN5LXN1cHBvcnRcIjpcInZlbmRvcnN+bGVnYWN5LXN1cHBvcnRcIixcImxlZ2FjeS1zdXBwb3J0XCI6XCJsZWdhY3ktc3VwcG9ydFwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5jaHVuay5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKScpO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZnJvbnRlbmRfbGF0ZXN0L1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeXBvaW50cy9jdXN0b20tcGFuZWwudHNcIik7XG4iLCIvLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7fVxufVxuXG5leHBvcnQgdHlwZSBWYWxpZEhhc3NEb21FdmVudCA9IGtleW9mIEhBU1NEb21FdmVudHM7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50PFQ+IGV4dGVuZHMgRXZlbnQge1xuICBkZXRhaWw6IFQ7XG59XG5cbi8qKlxuICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAqICAgcGF5bG9hZC5cbiAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBmaXJlRXZlbnQgPSA8SGFzc0V2ZW50IGV4dGVuZHMgVmFsaWRIYXNzRG9tRXZlbnQ+KFxuICBub2RlOiBIVE1MRWxlbWVudCB8IFdpbmRvdyxcbiAgdHlwZTogSGFzc0V2ZW50LFxuICBkZXRhaWw/OiBIQVNTRG9tRXZlbnRzW0hhc3NFdmVudF0sXG4gIG9wdGlvbnM/OiB7XG4gICAgYnViYmxlcz86IGJvb2xlYW47XG4gICAgY2FuY2VsYWJsZT86IGJvb2xlYW47XG4gICAgY29tcG9zZWQ/OiBib29sZWFuO1xuICB9XG4pID0+IHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIC8vIEB0cy1pZ25vcmVcbiAgZGV0YWlsID0gZGV0YWlsID09PSBudWxsIHx8IGRldGFpbCA9PT0gdW5kZWZpbmVkID8ge30gOiBkZXRhaWw7XG4gIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUsIHtcbiAgICBidWJibGVzOiBvcHRpb25zLmJ1YmJsZXMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmJ1YmJsZXMsXG4gICAgY2FuY2VsYWJsZTogQm9vbGVhbihvcHRpb25zLmNhbmNlbGFibGUpLFxuICAgIGNvbXBvc2VkOiBvcHRpb25zLmNvbXBvc2VkID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0aW9ucy5jb21wb3NlZCxcbiAgfSk7XG4gIChldmVudCBhcyBhbnkpLmRldGFpbCA9IGRldGFpbDtcbiAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgcmV0dXJuIGV2ZW50O1xufTtcbiIsIi8vIExvYWQgYSByZXNvdXJjZSBhbmQgZ2V0IGEgcHJvbWlzZSB3aGVuIGxvYWRpbmcgZG9uZS5cbi8vIEZyb206IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtbG9hZGVyXG5cbmNvbnN0IF9sb2FkID0gKFxuICB0YWc6IFwibGlua1wiIHwgXCJzY3JpcHRcIiB8IFwiaW1nXCIsXG4gIHVybDogc3RyaW5nLFxuICB0eXBlPzogXCJtb2R1bGVcIlxuKSA9PiB7XG4gIC8vIFRoaXMgcHJvbWlzZSB3aWxsIGJlIHVzZWQgYnkgUHJvbWlzZS5hbGwgdG8gZGV0ZXJtaW5lIHN1Y2Nlc3Mgb3IgZmFpbHVyZVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgbGV0IGF0dHIgPSBcInNyY1wiO1xuICAgIGxldCBwYXJlbnQgPSBcImJvZHlcIjtcblxuICAgIC8vIEltcG9ydGFudCBzdWNjZXNzIGFuZCBlcnJvciBmb3IgdGhlIHByb21pc2VcbiAgICBlbGVtZW50Lm9ubG9hZCA9ICgpID0+IHJlc29sdmUodXJsKTtcbiAgICBlbGVtZW50Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QodXJsKTtcblxuICAgIC8vIE5lZWQgdG8gc2V0IGRpZmZlcmVudCBhdHRyaWJ1dGVzIGRlcGVuZGluZyBvbiB0YWcgdHlwZVxuICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICBjYXNlIFwic2NyaXB0XCI6XG4gICAgICAgIChlbGVtZW50IGFzIEhUTUxTY3JpcHRFbGVtZW50KS5hc3luYyA9IHRydWU7XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgKGVsZW1lbnQgYXMgSFRNTFNjcmlwdEVsZW1lbnQpLnR5cGUgPSB0eXBlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxpbmtcIjpcbiAgICAgICAgKGVsZW1lbnQgYXMgSFRNTExpbmtFbGVtZW50KS50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgICAoZWxlbWVudCBhcyBIVE1MTGlua0VsZW1lbnQpLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuICAgICAgICBhdHRyID0gXCJocmVmXCI7XG4gICAgICAgIHBhcmVudCA9IFwiaGVhZFwiO1xuICAgIH1cblxuICAgIC8vIEluamVjdCBpbnRvIGRvY3VtZW50IHRvIGtpY2sgb2ZmIGxvYWRpbmdcbiAgICBlbGVtZW50W2F0dHJdID0gdXJsO1xuICAgIGRvY3VtZW50W3BhcmVudF0uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRDU1MgPSAodXJsOiBzdHJpbmcpID0+IF9sb2FkKFwibGlua1wiLCB1cmwpO1xuZXhwb3J0IGNvbnN0IGxvYWRKUyA9ICh1cmw6IHN0cmluZykgPT4gX2xvYWQoXCJzY3JpcHRcIiwgdXJsKTtcbmV4cG9ydCBjb25zdCBsb2FkSW1nID0gKHVybDogc3RyaW5nKSA9PiBfbG9hZChcImltZ1wiLCB1cmwpO1xuZXhwb3J0IGNvbnN0IGxvYWRNb2R1bGUgPSAodXJsOiBzdHJpbmcpID0+IF9sb2FkKFwic2NyaXB0XCIsIHVybCwgXCJtb2R1bGVcIik7XG4iLCJleHBvcnQgY29uc3Qgd2ViQ29tcG9uZW50c1N1cHBvcnRlZCA9XG4gIFwiY3VzdG9tRWxlbWVudHNcIiBpbiB3aW5kb3cgJiYgXCJjb250ZW50XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuIiwiaW1wb3J0IHsgbG9hZEpTIH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vbG9hZF9yZXNvdXJjZVwiO1xuaW1wb3J0IHsgbG9hZEN1c3RvbVBhbmVsIH0gZnJvbSBcIi4uL3V0aWwvY3VzdG9tLXBhbmVsL2xvYWQtY3VzdG9tLXBhbmVsXCI7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21QYW5lbEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbC9jdXN0b20tcGFuZWwvY3JlYXRlLWN1c3RvbS1wYW5lbC1lbGVtZW50XCI7XG5pbXBvcnQgeyBzZXRDdXN0b21QYW5lbFByb3BlcnRpZXMgfSBmcm9tIFwiLi4vdXRpbC9jdXN0b20tcGFuZWwvc2V0LWN1c3RvbS1wYW5lbC1wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyXCI7XG5pbXBvcnQgeyBDdXN0b21QYW5lbEluZm8gfSBmcm9tIFwiLi4vZGF0YS9wYW5lbF9jdXN0b21cIjtcbmltcG9ydCB7IHdlYkNvbXBvbmVudHNTdXBwb3J0ZWQgfSBmcm9tIFwiLi4vY29tbW9uL2ZlYXR1cmUtZGV0ZWN0L3N1cHBvcnQtd2ViLWNvbXBvbmVudHNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBsb2FkRVM1QWRhcHRlcjogKCkgPT4gUHJvbWlzZTx1bmtub3duPjtcbiAgfVxufVxuXG5sZXQgZXM1TG9hZGVkOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkO1xuXG53aW5kb3cubG9hZEVTNUFkYXB0ZXIgPSAoKSA9PiB7XG4gIGlmICghZXM1TG9hZGVkKSB7XG4gICAgZXM1TG9hZGVkID0gUHJvbWlzZS5hbGwoW1xuICAgICAgbG9hZEpTKFxuICAgICAgICBgJHtfX1NUQVRJQ19QQVRIX199cG9seWZpbGxzL2N1c3RvbS1lbGVtZW50cy1lczUtYWRhcHRlci5qc2BcbiAgICAgICkuY2F0Y2goKSxcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbXBhdFwiICovIFwiLi9jb21wYXRpYmlsaXR5XCIpLFxuICAgIF0pO1xuICB9XG4gIHJldHVybiBlczVMb2FkZWQ7XG59O1xuXG5sZXQgcGFuZWxFbDogSFRNTEVsZW1lbnQgfCBQb2x5bWVyRWxlbWVudCB8IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGlmICghcGFuZWxFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBzZXRDdXN0b21QYW5lbFByb3BlcnRpZXMocGFuZWxFbCwgcHJvcGVydGllcyk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUocGFuZWw6IEN1c3RvbVBhbmVsSW5mbywgcHJvcGVydGllczoge30pIHtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIHN0eWxlLmlubmVySFRNTCA9IFwiYm9keXttYXJnaW46MH1cIjtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgY29uc3QgY29uZmlnID0gcGFuZWwuY29uZmlnLl9wYW5lbF9jdXN0b207XG4gIGxldCBzdGFydDogUHJvbWlzZTx1bmtub3duPiA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gIGlmICghd2ViQ29tcG9uZW50c1N1cHBvcnRlZCkge1xuICAgIHN0YXJ0ID0gc3RhcnQudGhlbigoKSA9PlxuICAgICAgbG9hZEpTKGAke19fU1RBVElDX1BBVEhfX31wb2x5ZmlsbHMvd2ViY29tcG9uZW50cy1idW5kbGUuanNgKVxuICAgICk7XG4gIH1cblxuICBpZiAoX19CVUlMRF9fID09PSBcImVzNVwiKSB7XG4gICAgLy8gTG9hZCBFUzUgYWRhcHRlci4gU3dhbGxvdyBlcnJvcnMgYXMgaXQgcmFpc2VzIGVycm9ycyBvbiBvbGQgYnJvd3NlcnMuXG4gICAgc3RhcnQgPSBzdGFydC50aGVuKCgpID0+IHdpbmRvdy5sb2FkRVM1QWRhcHRlcigpKTtcbiAgfVxuXG4gIHN0YXJ0XG4gICAgLnRoZW4oKCkgPT4gbG9hZEN1c3RvbVBhbmVsKGNvbmZpZykpXG4gICAgLy8gSWYgb3VyIGVsZW1lbnQgaXMgdXNpbmcgZXM1LCBsZXQgaXQgZmluaXNoIGxvYWRpbmcgdGhhdCBhbmQgZGVmaW5lIGVsZW1lbnRcbiAgICAvLyBUaGlzIGF2b2lkcyBlbGVtZW50cyBnZXR0aW5nIHVwZ3JhZGVkIGFmdGVyIGJlaW5nIGFkZGVkIHRvIHRoZSBET01cbiAgICAudGhlbigoKSA9PiBlczVMb2FkZWQgfHwgUHJvbWlzZS5yZXNvbHZlKCkpXG4gICAgLnRoZW4oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHBhbmVsRWwgPSBjcmVhdGVDdXN0b21QYW5lbEVsZW1lbnQoY29uZmlnKTtcblxuICAgICAgICBjb25zdCBmb3J3YXJkRXZlbnQgPSAoZXYpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LnBhcmVudC5jdXN0b21QYW5lbCkge1xuICAgICAgICAgICAgZmlyZUV2ZW50KHdpbmRvdy5wYXJlbnQuY3VzdG9tUGFuZWwsIGV2LnR5cGUsIGV2LmRldGFpbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwYW5lbEVsIS5hZGRFdmVudExpc3RlbmVyKFwiaGFzcy10b2dnbGUtbWVudVwiLCBmb3J3YXJkRXZlbnQpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvY2F0aW9uLWNoYW5nZWRcIiwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LnBhcmVudC5jdXN0b21QYW5lbCkge1xuICAgICAgICAgICAgd2luZG93LnBhcmVudC5jdXN0b21QYW5lbC5uYXZpZ2F0ZShcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBldi5kZXRhaWwgPyBldi5kZXRhaWwucmVwbGFjZSA6IGZhbHNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNldFByb3BlcnRpZXMoeyBwYW5lbCwgLi4ucHJvcGVydGllcyB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYW5lbEVsISk7XG4gICAgICB9LFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIsIHBhbmVsKTtcbiAgICAgICAgYWxlcnQoYFVuYWJsZSB0byBsb2FkIHRoZSBwYW5lbCBzb3VyY2U6ICR7ZXJyfS5gKTtcbiAgICAgIH1cbiAgICApO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICBcIkRPTUNvbnRlbnRMb2FkZWRcIixcbiAgKCkgPT4gd2luZG93LnBhcmVudC5jdXN0b21QYW5lbCEucmVnaXN0ZXJJZnJhbWUoaW5pdGlhbGl6ZSwgc2V0UHJvcGVydGllcyksXG4gIHsgb25jZTogdHJ1ZSB9XG4pO1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUN1c3RvbVBhbmVsRWxlbWVudCA9IChwYW5lbENvbmZpZykgPT4ge1xuICAvLyBMZWdhY3kgc3VwcG9ydC4gQ3VzdG9tIHBhbmVscyB1c2VkIHRvIGhhdmUgdG8gZGVmaW5lIGVsZW1lbnQgaGEtcGFuZWwte25hbWV9XG4gIGNvbnN0IHRhZ05hbWUgPVxuICAgIFwiaHRtbF91cmxcIiBpbiBwYW5lbENvbmZpZ1xuICAgICAgPyBgaGEtcGFuZWwtJHtwYW5lbENvbmZpZy5uYW1lfWBcbiAgICAgIDogcGFuZWxDb25maWcubmFtZTtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG59O1xuIiwiaW1wb3J0IHsgbG9hZEpTLCBsb2FkTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vbG9hZF9yZXNvdXJjZVwiO1xuXG4vLyBNYWtlIHN1cmUgd2Ugb25seSBpbXBvcnQgZXZlcnkgSlMtYmFzZWQgcGFuZWwgb25jZSAoSFRNTCBpbXBvcnQgaGFzIHRoaXMgYnVpbHQtaW4pXG5jb25zdCBKU19DQUNIRSA9IHt9O1xuXG5leHBvcnQgY29uc3QgbG9hZEN1c3RvbVBhbmVsID0gKHBhbmVsQ29uZmlnKTogUHJvbWlzZTx1bmtub3duPiA9PiB7XG4gIGlmIChwYW5lbENvbmZpZy5odG1sX3VybCkge1xuICAgIGNvbnN0IHRvTG9hZCA9IFtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImltcG9ydC1ocmVmLXBvbHlmaWxsXCIgKi8gXCIuLi8uLi9yZXNvdXJjZXMvaHRtbC1pbXBvcnQvaW1wb3J0LWhyZWZcIiksXG4gICAgXTtcblxuICAgIGlmICghcGFuZWxDb25maWcuZW1iZWRfaWZyYW1lKSB7XG4gICAgICB0b0xvYWQucHVzaChcbiAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibGVnYWN5LXN1cHBvcnRcIiAqLyBcIi4uL2xlZ2FjeS1zdXBwb3J0XCIpXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbCh0b0xvYWQpLnRoZW4oKFt7IGltcG9ydEhyZWZQcm9taXNlIH1dKSA9PlxuICAgICAgaW1wb3J0SHJlZlByb21pc2UocGFuZWxDb25maWcuaHRtbF91cmwpXG4gICAgKTtcbiAgfVxuICBpZiAocGFuZWxDb25maWcuanNfdXJsKSB7XG4gICAgaWYgKCEocGFuZWxDb25maWcuanNfdXJsIGluIEpTX0NBQ0hFKSkge1xuICAgICAgSlNfQ0FDSEVbcGFuZWxDb25maWcuanNfdXJsXSA9IGxvYWRKUyhwYW5lbENvbmZpZy5qc191cmwpO1xuICAgIH1cbiAgICByZXR1cm4gSlNfQ0FDSEVbcGFuZWxDb25maWcuanNfdXJsXTtcbiAgfVxuICBpZiAocGFuZWxDb25maWcubW9kdWxlX3VybCkge1xuICAgIHJldHVybiBsb2FkTW9kdWxlKHBhbmVsQ29uZmlnLm1vZHVsZV91cmwpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChcIk5vIHZhbGlkIHVybCBmb3VuZCBpbiBwYW5lbCBjb25maWcuXCIpO1xufTtcbiIsImV4cG9ydCBjb25zdCBzZXRDdXN0b21QYW5lbFByb3BlcnRpZXMgPSAocm9vdCwgcHJvcGVydGllcykgPT4ge1xuICBpZiAoXCJzZXRQcm9wZXJ0aWVzXCIgaW4gcm9vdCkge1xuICAgIHJvb3Quc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHJvb3Rba2V5XSA9IHByb3BlcnRpZXNba2V5XTtcbiAgICB9KTtcbiAgfVxufTtcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1WEFJQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQSxlQUdBO0FBQ0E7QUFDQTtBQUdBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0EsME9BQ0E7QUFDQTtBQUVBO0FBQ0EsdVBBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
