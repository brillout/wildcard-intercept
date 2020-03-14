# Wildcard Intercept

Library for [Wildcard API](https://github.com/reframejs/wildcard-api) to intercept calls.

~~~js
!INLINE ./example/server.js
~~~
~~~js
!INLINE ./example/client.js
~~~
`console.log` result:
~~~shell
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
Hi Johnson!
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
!nosnhoJ iH
~~~

The [source code of `@brillout/wildcard-intercept`](/index.js) is only 42 LOC; you may want to implement your own interceptor!
