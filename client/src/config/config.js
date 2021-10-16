import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

console.log(import.meta.env);

const config = {
  SERVER_URL: process.env.REACT_APP_SERVER_URL,
  firebaseConfig: {
    apiKey: process.env.REACT_APP_FIREBASE_apiKey,
    authDomain: process.env.REACT_APP_FIREBASE_authDomain,
    projectId: process.env.REACT_APP_FIREBASE_projectId,
    storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
    appId: process.env.REACT_APP_FIREBASE_appId,
    measurementId: process.env.REACT_APP_FIREBASE_measurementId,
  },
};

export default config;
