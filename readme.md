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
// ./example/server.js

const express = require('express');
const wildcardMiddleware = require('@wildcard-api/server/express');
const {endpoints} = require('@wildcard-api/server');
const intercept = require('../');

endpoints.hello = intercept(function(name) {
  return 'Hi '+name+'!';
}, myListener);

endpoints.mirror = intercept(function(msg) {
  return msg.split('').reverse().join('');
}, myListener);

const app = express();

app.use(wildcardMiddleware(getContext));
app.listen(3000);

function myListener({endpointName, endpointArgs, endpointResult, endpointError, context}) {
  console.log({endpointName, endpointArgs, endpointResult, endpointError, context});
}

function getContext(req) {
  const {headers} = req;
  return {headers};
}
~~~
~~~js
// ./example/client.js

const {endpoints} = require('@wildcard-api/client');
const wildcard = require('@wildcard-api/client');

wildcard.serverUrl = 'http://localhost:3000';

(async function() {
  const greetings = await endpoints.hello('Johnson');
  console.log(greetings);
  console.log(await endpoints.mirror(greetings));
})();
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
