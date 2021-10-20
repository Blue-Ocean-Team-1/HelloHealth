import axios from 'axios';
import endpointMiddleware from '../endpointMiddleware';

export const uploadUserAccountType = (typeString, callback = () => {}) => {
  endpointMiddleware(
    ['USER', 'ACCOUNT_TYPE'],
    {
      accountType: typeString,
    },
    'POST',
  ).then((res) => {
    // HERE, decide how to handle account type result
    console.log(res);
    callback(res);
  });
};

export const fetchUserAccountType = (userId, callback = () => {}) => {
  endpointMiddleware(
    ['USER', 'ACCOUNT_TYPE'],
    {
      params: {
        userId,
      },
    },
    'GET',
  ).then((res = {}) => {
    callback(res.data);
  });
};

export const fetchAccountDetails = (typeString, callback = () => {}) => {
  // TODO
};
