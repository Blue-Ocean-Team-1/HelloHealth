import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import config from '../config/config';
import { auth, db } from '../config/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (config.NODE_ENV !== 'test') {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);

  // const signInWithGoogle = async () => {
  //   try {
  //     const res = await auth.signInWithPopup(googleProvider);
  //     const user = res.user;
  //     const query = await db
  //       .collection("users")
  //       .where("uid", "==", user.uid)
  //       .get();
  //     if (query.docs.length === 0) {
  //       await db.collection("users").add({
  //         uid: user.uid,
  //         name: user.displayName,
  //         authProvider: "google",
  //         email: user.email,
  //       });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }
  // };

  const loginUser = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const signupUser = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const { user } = res;
      await db.collection('users').add({
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert('Password reset link sent!');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logoutUser = () => {
    auth.signOut();
  };

  const value = {
    loading,
    sendPasswordResetEmail,
    currentUser,
    loginUser,
    logoutUser,
    signupUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export default useAuth;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
