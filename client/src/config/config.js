const envVars = import.meta.env;

const config = {
  DATABASE_URL: envVars.VITE_APP_DATABASE_URL,
  FIREBASE_CONFIG: {
    apiKey: envVars.VITE_APP_FIREBASE_apiKey,
    authDomain: envVars.VITE_APP_FIREBASE_authDomain,
    projectId: envVars.VITE_APP_FIREBASE_projectId,
    storageBucket: envVars.VITE_APP_FIREBASE_storageBucket,
    messagingSenderId: envVars.VITE_APP_FIREBASE_messagingSenderId,
    appId: envVars.VITE_APP_FIREBASE_appId,
    measurementId: envVars.VITE_APP_FIREBASE_measurementId,
  },
};

export default config;
