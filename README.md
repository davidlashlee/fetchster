# Fetchster
Fetch wrapper for easy promise based http requests

## Installation

```bash
$ npm install fetchster
```
import Fetchster via require or es6 module loading

```require Fetchster = "fetchster"```

```import Fetchster from "fetchster"```


HTTP methods supported - get, post, put, delete, head

additionally Fetchster comes with a utility function that converts an object into a string of query params.

```js
var queryParams = {page: 3, resultsPerPage: 30, sort: "asscending"}
var sample = Fetchster.seralize(queryParams)
console.log(sample) //=> "page=3&resultsPerPage=30&sort=asscending"
```

Fetchster.seralize(queryParams)
- *required* OBJECT object containing query params in the format {key: value, otherKey: otherValue}

## http methods

GET, DELETE

```js
...

 Fetchster.get('http://someapi.org/posts/3').then((response) => {console.log(response)})
```

```js
 Fetchster = require('fetchster')

 Fetchster.delete('http://someapi.org/posts/3').then((response) => {console.log(response)})
```

Fetchster.get(url, options, errorHandler)

Fetchster.delete(url, options, errorHandler)

- *required* STRING url - url of api to hit
- *optional* OBJECT options - contains configuration defaults to {headers: 'Content-Type': 'application/json'}}
- *optional* FUNCTION errorHandler - function that requires 1 param of err which contains the error object, if not supplied this defaults to console.error(err)

POST, PUT, HEAD

```js
 ...
 
 var body = {sticks: 3, hipster: "dan"}
 
 Fetchster.post('http://someapi.co/hipsters', body).then((response) => console.log(response)}
 
 var body = {name: "dan", hasDog: true}
 
 Fetchster.put('http://someapi.co/hipsters/1', body).then((response) => console.log(response)}
 
 var body = {name: "dan"}
 
  Fetchster.put('http://someapi.co/hipsters', body).then((response) => console.log(response)}
```

Fetchster.post(url, data, options, errorHandler)

Fetchster.put(url, data, options, errorHandler)

Fetchster.head(url,data, options, errorHandler)

- *required* STRING url - url of api to hit
- *required* OBJECT data - object that contains all the information you want to send on the post body
- *optional* OBJECT options - contains configuration defaults to {headers: 'Content-Type': 'application/json'}}
- *optional* FUNCTION errorHandler - function that requires 1 param of err which contains the error object, if not supplied this defaults to console.error(err)

