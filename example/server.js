// Server

const express = require('express');
const wildcard = require('@wildcard-api/server/express');

const app = express();

app.use(wildcard(getContext));
function getContext(req) {
  const {headers} = req;
  return {headers};
}

app.listen(3000);
