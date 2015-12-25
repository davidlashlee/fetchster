# Fetchster
Fetch wrapper for easy promise based http requests

## Installation

```bash
$ npm install express
```
import Fetchster via require or es6 module loading

```require Fetchster = "fetchster"```

```import Fetchster from "fetchster"```


## Example
```js
 Fetchster = require('fetchster')

 Fetchster.get(posts/3).then((data) => {console.log(data)})
```


HTTP methods supported - get, post, put, delete, head

additionally Fetchster comes with a utility function that converts an object into a string of query params.

Fetchster.seralize(queryParams)
- *required* OBJECT object containing query params in the format {key: value, otherKey: otherValue}

```=> "key=value&otherKey=otherValue"```

GET

Fetchster.get(url, options, errorHandler)
- *required* STRING url - url of api to hit
- *optional* OBJECT options - contains configuration defaults to {headers: 'Content-Type': 'application/json'}}
- *optional* FUNCTION errorHandler - function that requires 1 param of err which contains the error object, if not supplied this defaults to console.error(err)

POST

Fetchster.post(url, data, options, errorHandler)
- *required* STRING url - url of api to hit
- *required* OBJECT data - object that contains all the information you want to send on the post body
- *optional* OBJECT options - contains configuration defaults to {headers: 'Content-Type': 'application/json'}}
- *optional* FUNCTION errorHandler - function that requires 1 param of err which contains the error object, if not supplied this defaults to console.error(err)

PUT

Fetchster.put(url, data, options, errorHandler)
- *required* STRING url - url of api to hit
- *required* OBJECT data - object that contains all the information you want to send on the post body
- *optional* OBJECT options - contains configuration defaults to {headers: 'Content-Type': 'application/json'}}
- *optional* FUNCTION errorHandler - function that requires 1 param of err which contains the error object, if not supplied this defaults to console.error(err)

DELETE

Fetchster.delete(url, options, errorHandler)
- *required* STRING url - url of api to hit
- *optional* OBJECT options - contains configuration defaults to {headers: 'Content-Type': 'application/json'}}
- *optional* FUNCTION errorHandler - function that requires 1 param of err which contains the error object, if not supplied this defaults to console.error(err)

HEAD

Fetchster.head(url, options, errorHandler)
- *required* STRING url - url of api to hit
- *required* OBJECT data - object that contains all the information you want to send on the post body
- *optional* OBJECT options - contains configuration defaults to {headers: 'Content-Type': 'application/json'}}
- *optional* FUNCTION errorHandler - function that requires 1 param of err which contains the error object, if not supplied this defaults to console.error(err)
