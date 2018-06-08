/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactBrServer = _interopRequireDefault(__webpack_require__(/*! react-br-server */ "./temporary/ReactBRServer.js"));

var _compression = _interopRequireDefault(__webpack_require__(/*! compression */ "compression"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var application = _reactBrServer.default.application();

application.port(4000).charset('UTF-8').use((0, _compression.default)()).listen(function () {
  return console.log("Listening on port ".concat(application.port(), "."));
});

/***/ }),

/***/ "./temporary/ReactBRServer.js":
/*!************************************!*\
  !*** ./temporary/ReactBRServer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Server = _interopRequireDefault(__webpack_require__(/*! ./Server */ "./temporary/Server.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReactBRServer =
/*#__PURE__*/
function () {
  function ReactBRServer() {
    _classCallCheck(this, ReactBRServer);
  }

  _createClass(ReactBRServer, [{
    key: "application",
    value: function application() {
      return new _Server.default();
    }
  }]);

  return ReactBRServer;
}();

var _default = new ReactBRServer();

exports.default = _default;

/***/ }),

/***/ "./temporary/Server.js":
/*!*****************************!*\
  !*** ./temporary/Server.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(__webpack_require__(/*! http */ "http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Server =
/*#__PURE__*/
function () {
  function Server() {
    _classCallCheck(this, Server);

    this.__middlewares__ = [];
    this.__charset__ = 'UTF-8';
    this.__port__ = 3000;
  }

  _createClass(Server, [{
    key: "charset",
    value: function charset(_charset) {
      if (_charset != null) {
        this.__charset__ = _charset;
        return this;
      }

      return this.__charset__;
    }
  }, {
    key: "port",
    value: function port(_port) {
      if (_port != null) {
        this.__port__ = _port;
        return this;
      }

      return this.__port__;
    }
  }, {
    key: "use",
    value: function use() {
      var _ref = arguments.length > 1 ? [arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]] : [null, arguments.length <= 0 ? undefined : arguments[0]],
          _ref2 = _slicedToArray(_ref, 2),
          path = _ref2[0],
          middleware = _ref2[1];

      if (typeof middleware === 'function') {
        this.__middlewares__.push({
          path: path,
          fn: middleware
        });

        return this;
      }
    }
  }, {
    key: "dequeueMiddlewares",
    value: function dequeueMiddlewares(request, response) {
      var _this = this;

      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var middleware = this.__middlewares__[index];

      var next = function next() {
        var nextIndex = index + 1;
        if (nextIndex < _this.__middlewares__.length) _this.dequeueMiddlewares(request, response, nextIndex);else {
          response.writeHead(200, {
            'Content-Type': 'text/html'
          });
          response.end(request.url, _this.__charset__);
        }
      };

      if (middleware.path && /(?:)/.test(request.url)) next();else middleware.fn(request, response, next);
    }
  }, {
    key: "listen",
    value: function listen(callback) {
      var _this2 = this;

      _http.default.createServer(function (request, response) {
        return _this2.dequeueMiddlewares(request, response);
      }).listen(this.__port__);

      callback();
    }
  }]);

  return Server;
}();

exports.default = Server;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })

/******/ });
//# sourceMappingURL=server.bundler.js.map