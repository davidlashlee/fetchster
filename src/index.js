export default class Fetchster {

    static _checkStatus(response) {
        if (response.ok) {
            return response
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error
        }
    }

    static _errorHandler(err) {
      console.error(err)
    }

    static _fetch(method, url, options = {headers: {'Content-Type': 'application/json'}}, errorHandler = this._errorHandler) {
      options.method = method;
      return fetch(url, options).then(result => this._checkStatus(result))
          .then(result => result.json())
          .catch(err => errorHandler(err));
    }

    static seralize(urlParams) {
      var str = [];
      for(var key in urlParams)
        if (urlParams.hasOwnProperty(key)) {
          str.push(encodeURIComponent(key) + "=" + encodeURIComponent(urlParams[key]));
        }
      return str.join("&");
    }

    static get(url, options, errorHandler) {
      return this._fetch("get", url, options, errorHandler)
    }

    static put(url, body, options = {headers: {'Content-Type': 'application/json'}}, errorHandler) {
      options.body = JSON.stringify(body)
      return this._fetch("put", url, options, errorHandler)
    }

    static post(url, body, options = {headers: {'Content-Type': 'application/json'}}, errorHandler) {
      options.body = JSON.stringify(body)
      return this._fetch("post", url, options, errorHandler)
    }

    static delete(url, body, options = {headers: {'Content-Type': 'application/json'}}, errorHandler) {
      options.body = JSON.stringify(body)
      return this._fetch("delete", url, options, errorHandler)
    }

    static head(url, options, errorHandler) {
      return this._fetch("head", url, options, errorHandler)
    }
};
