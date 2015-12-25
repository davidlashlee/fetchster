'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fetchster = (function () {
  function Fetchster() {
    _classCallCheck(this, Fetchster);
  }

  _createClass(Fetchster, null, [{
    key: '_checkStatus',
    value: function _checkStatus(response) {
      if (response.ok) {
        return response;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }
  }, {
    key: '_errorHandler',
    value: function _errorHandler(err) {
      console.error(err);
    }
  }, {
    key: '_fetch',
    value: function _fetch(method, url) {
      var _this = this;

      var options = arguments.length <= 2 || arguments[2] === undefined ? { headers: { 'Content-Type': 'application/json' } } : arguments[2];
      var errorHandler = arguments.length <= 3 || arguments[3] === undefined ? this._errorHandler : arguments[3];

      options.method = method;
      return fetch(url, options).then(function (result) {
        return _this._checkStatus(result);
      }).then(function (result) {
        return result.json();
      }).catch(function (err) {
        return errorHandler(err);
      });
    }
  }, {
    key: 'seralize',
    value: function seralize(urlParams) {
      var str = [];
      for (var key in urlParams) {
        if (urlParams.hasOwnProperty(key)) {
          str.push(encodeURIComponent(key) + "=" + encodeURIComponent(urlParams[key]));
        }
      }return str.join("&");
    }
  }, {
    key: 'get',
    value: function get(url, options, errorHandler) {
      return this._fetch("get", url, options, errorHandler);
    }
  }, {
    key: 'put',
    value: function put(url, options, errorHandler) {
      return this._fetch("put", url, options, errorHandler);
    }
  }, {
    key: 'post',
    value: function post(url, body) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? { headers: { 'Content-Type': 'application/json' } } : arguments[2];
      var errorHandler = arguments[3];

      options.body = JSON.stringify(body);
      return this._fetch("post", url, options, errorHandler);
    }
  }, {
    key: 'delete',
    value: function _delete(url, options, errorHandler) {
      return this._fetch("delete", url, options, errorHandler);
    }
  }, {
    key: 'head',
    value: function head(url, options, errorHandler) {
      return this._fetch("head", url, options, errorHandler);
    }
  }]);

  return Fetchster;
})();

exports.default = Fetchster;
;