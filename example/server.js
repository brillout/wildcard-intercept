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
