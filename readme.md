<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
# Wildcard Intercept

Library for [Wildcard API](https://github.com/reframejs/wildcard-api) to intercept calls.

~~~js
// ./example/endpoints.js

const {endpoints} = require('@wildcard-api/server');
const intercept = require('@brillout/wildcard-intercept'); // npm install @brillout/wildcard-intercept

endpoints.hello = intercept(function(name) {
  return 'Hi '+name+'!';
}, myListener);

endpoints.mirror = intercept(function(msg) {
  return msg.split('').reverse().join('');
}, myListener);

function myListener({endpointName, endpointArgs, endpointResult, endpointError, context}) {
  console.log({endpointName, endpointArgs, endpointResult, endpointError, context});
}
~~~
~~~js
// ./example/client.js

// Client

const {endpoints} = require('@wildcard-api/client');
const wildcard = require('@wildcard-api/client');

wildcard.serverUrl = 'http://localhost:3000';

(async function() {
  let greeting = await endpoints.hello('Johnson');
  console.log(greeting);
  greeting = await endpoints.mirror(greeting);
  console.log(greeting);
})();
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

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
