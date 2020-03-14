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
