const {endpoints} = require('@wildcard-api/client');
const wildcard = require('@wildcard-api/client');

wildcard.serverUrl = 'http://localhost:3000';

(async function() {
  const greetings = await endpoints.hello('Johnson');
  console.log(greetings);
  console.log(await endpoints.mirror(greetings));
})();
