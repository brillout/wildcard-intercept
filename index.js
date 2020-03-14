const {endpoints} = require('@wildcard-api/server');
const assert = require('@brillout/assert');

module.exports = intercept;

function intercept(endpointFunction, callListener) {
  return async function endpointWrapper(...endpointArgs) {
    const context = this;

    const ret = {};
    try {
      ret.endpointResult = await endpointFunction.bind(context)(...endpointArgs);
    } catch(err) {
      ret.endpointError = err;
    }

    const endpointName = getEndpointName(endpointWrapper);

    const listenerRet = callListener({endpointName, endpointArgs, context, ...ret});
    if( listenerRet ){
      return listenerRet;
    }

    if( ret.endpointError ){
      throw ret.endpointError;
    } else {
      return ret.endpointResult;
    }
  };
}

function getEndpointName(endpointFunction) {
  for([endpointName, _endpointFunction] of Object.entries(endpoints)) {
    if( endpointFunction===_endpointFunction ){
      return endpointName;
    }
  }
  assert.usage(
    false,
    "The function returned by `intercet` should not be wrapped."
  );
}
