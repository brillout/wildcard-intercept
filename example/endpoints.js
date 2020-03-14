const {endpoints} = require('@wildcard-api/server');
const intercept = require('..'); // npm install @brillout/wildcard-intercept

endpoints.hello = intercept(function(name) {
  return 'Hi '+name+'!';
}, myListener);

endpoints.mirror = intercept(function(msg) {
  return msg.split('').reverse().join('');
}, myListener);

function myListener({endpointName, endpointArgs, endpointResult, endpointError, context}) {
  console.log({endpointName, endpointArgs, endpointResult, endpointError, context});
}
