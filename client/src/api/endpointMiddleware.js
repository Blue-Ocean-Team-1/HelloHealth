import axios from 'axios';

import routes from './routes';
import config from '../config/config';

const handleError = (errStr) => {
  throw new Error(errStr);
};

const isConstructor = (f) => {
  try {
    new f();
  } catch (err) {
    // verify err is the expected error and then
    return false;
  }
  return true;
}

const validDataObject = (object, expectedObj) => {
  // iterate over expected keys
  const keys = Object.keys(expectedObj);
  for (let i = 0; i < keys.length; i += 1) {
    const expectedKey = keys[i];

    const expectedDataType = expectedObj[expectedKey];
    if (expectedDataType instanceof Array) {
      const bodyVal = expectedObj[expectedKey];

      const oneValidType = expectedDataType.some((type) => {
        if (isConstructor(type)) {
          return bodyVal.constructor === type;
        } else if (type === undefined) {
          return bodyVal.constructor === undefined;
        }
      })

      if (!oneValidType) {
        handleError(`Body should have key "${expectedKey}" with type of "${type}"`);
      }


      //   if (!validDataType(object[expectedKey], expectedObj[expectedKey])) {
      //     handleError(`Body should have key "${expectedKey}" with type of "${expectedObj[expectedKey].join(',')}"`)
      //   }
      // } else {
      //   if (!validDataType(object[expectedKey], expectedObj[expectedKey])) {
      //     handleError(`Body should have key "${expectedKey}" with type of "${expectedObj[expectedKey].join(',')}"`)
      //   }
    }



    if (object[expectedKey])
  }
  return true;
};

/*
 * @params
 *
 * [endpointKeys] strings
 * {data} key/val pairs
 *
 */
const endpointMiddleware = (endpointKeys, data, method) => {
  if (!config.SERVER_URL) {
    throw Error('No SERVER_URL found');
  }

  // Traverse nested endpoints IN route config object
  let endpointUrl = config.SERVER_URL;
  let endpointObj = routes;
  endpointKeys.forEach((endpointKey) => {
    if (endpointObj[endpointKey] === undefined || endpointObj[endpointKey].ENDPOINT === undefined) {
      handleError(`Route config missing: ${endpointUrl} + ${endpointKey}`);
    }
    const innerEndpoint = endpointObj[endpointKey];
    endpointUrl += innerEndpoint.ENDPOINT;
    endpointObj = innerEndpoint;
  });

  const { METHOD: expectedMethod, PARAMS: expectedParams, BODY: expectedBody } = endpointObj;

  if (expectedMethod instanceof Array) {
    if (!(expectedMethod.includes(method))) {
      handleError(`${endpointUrl}: Expected method: ${expectedMethod}`)
    }
  } else if (expectedMethod !== method) {
    handleError(`${endpointUrl}: Expected method: ${expectedMethod}`)
  }

  let requestBody = {};

  // Verify the parameters object
  if (expectedParams) {
    if (!data.params) {
      handleError(`No parameters given, expected => ${JSON.stringify(Object.keys(expectedParams))}`);
    } else if (validDataObject(data.params, expectedParams)) {
      // Should match key/value pairs
      requestBody.params = data.params;
    }
  }

  // Verify the entire body (data) object
  if (expectedBody && validDataObject(data, expectedBody)) {
    requestBody = {
      ...data,
    };
  }

  const options = {
    method: method,
    url: endpointUrl,
    data: requestBody,
  };

  return (
    axios(options)
      .then((res) => res)
      .catch((err) => {
        // Handle the error, warning pop-up?
        console.log(err);
        // error(err);
        return 'bad response';
      })
      .then((response) => (
        response !== 'bad response' ? response : undefined
      ))
  );
};

export default endpointMiddleware;
