# Wildcard Intercept

Library for [Wildcard API](https://github.com/reframejs/wildcard-api) to intercept calls.

~~~js
!INLINE ./example/endpoints.js
~~~
~~~js
!INLINE ./example/client.js
~~~
Client `console.log` result:
~~~shell
Hi Johnson!
!nosnhoJ iH
~~~
Server `console.log` result:
~~~js
{
  endpointName: 'hello',
  endpointArgs: [ 'Johnson' ],
  endpointResult: 'Hi Johnson!',
  endpointError: undefined,
  context: {
    headers: {
      'content-type': 'application/json',
      'accept-encoding': 'gzip,deflate',
      'user-agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
      connection: 'close',
      accept: '*/*',
      'content-length': '0',
      host: 'localhost:3000'
    }
  }
}
{
  endpointName: 'mirror',
  endpointArgs: [ 'Hi Johnson!' ],
  endpointResult: '!nosnhoJ iH',
  endpointError: undefined,
  context: {
    headers: {
      'content-type': 'application/json',
      'accept-encoding': 'gzip,deflate',
      'user-agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
      connection: 'close',
      accept: '*/*',
      'content-length': '0',
      host: 'localhost:3000'
    }
  }
}
~~~

The [source code of `@brillout/wildcard-intercept`](/index.js) is only 42 LOC; you may want to implement your own interceptor!
