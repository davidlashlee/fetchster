# fetchster
Fetch wrapper for easy promise based http requests

import Fetcher via require or es6 module loading

```require Fetcher = "Fetcher"```

```import Fetcher from "Fetcher"```


HTTP methods supported - get, post, put, delete, head

additionally Fetcher comes with a utility function that converts an object into a string of query params.

Fetcher.seralize(queryParams)
- *required* OBJECT object containing query params in the format {key: value, otherKey: otherValue}

```=> "key=value&otherKey=otherValue"```

GET

Fetcher.get(url, options, errorHandler)
- *required* STRING url - url of api to hit
- *optional* OBJECT options - contains configuration defaults to {headers: 'Content-Type': 'application/json'}}
- *optional* FUNCTION errorHandler - function that requires 1 param of err which contains the error object, if not supplied this defaults to console.error(err)

POST

Fetcher.post(url, data, options, errorHandler)
- *required* STRING url - url of api to hit
- *required* OBJECT data - object that contains all the information you want to send on the post body
- *optional* OBJECT options - contains configuration defaults to {headers: 'Content-Type': 'application/json'}}
- *optional* FUNCTION errorHandler - function that requires 1 param of err which contains the error object, if not supplied this defaults to console.error(err)

PUT

Fetcher.put(url, data, options, errorHandler)
- *required* STRING url - url of api to hit
- *required* OBJECT data - object that contains all the information you want to send on the post body
- *optional* OBJECT options - contains configuration defaults to {headers: 'Content-Type': 'application/json'}}
- *optional* FUNCTION errorHandler - function that requires 1 param of err which contains the error object, if not supplied this defaults to console.error(err)

DELETE

Fetcher.delete(url, options, errorHandler)
- *required* STRING url - url of api to hit
- *optional* OBJECT options - contains configuration defaults to {headers: 'Content-Type': 'application/json'}}
- *optional* FUNCTION errorHandler - function that requires 1 param of err which contains the error object, if not supplied this defaults to console.error(err)

HEAD

Fetcher.head(url, options, errorHandler)
- *required* STRING url - url of api to hit
- *required* OBJECT data - object that contains all the information you want to send on the post body
- *optional* OBJECT options - contains configuration defaults to {headers: 'Content-Type': 'application/json'}}
- *optional* FUNCTION errorHandler - function that requires 1 param of err which contains the error object, if not supplied this defaults to console.error(err)
