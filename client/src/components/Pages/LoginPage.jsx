import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useMainContext from '../../context/MainContext.jsx';
import useAuth from '../../context/AuthContext.jsx';
import { HOME } from '../../config/pageRoutes';

const LoginFormFields = [
  {
    name: 'email',
    placeholder: 'Email',
  },
  {
    name: 'password',
    placeholder: 'Password',
  },
];

const SignupFormFields = [
  {
    name: 'name',
    placeholder: 'Name',
  },
  {
    name: 'email',
    placeholder: 'Email',
  },
  {
    name: 'password',
    placeholder: 'Password',
  },
];

const FormFields = ({ formEntries, fieldsArr, handleChange }) => (
  <>
    {fieldsArr.map(({ name, placeholder }, i) => (
      <input
        key={i}
        onChange={handleChange}
        type={name}
        name={name}
        value={formEntries[name] || ''}
        placeholder={placeholder}
      ></input>
    ))}
  </>
)

const LoginPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formEntries, setFormEntries] = useState({});
  // const [isFarmerUser, setIsFarmerUser] = useState(false);
  const history = useHistory();

  const { loginUser,
    signupUser,
    sendPasswordResetEmail,
    signInWithGoogle,
    signInWithFacebook,
    currentUser,
  } = useAuth();

  const { userType, setUserType } = useMainContext();

  const toggleLoginSignup = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormEntries((prevEntries) => ({
      ...prevEntries,
      [name]: value,
    }));
  };

  const handleEmailPassSubmit = () => {
    const { email, password, name } = formEntries;

    if (isLoginForm) {
      loginUser(email, password, () => {
        history.push(HOME);
      });
    } else {
      signupUser(name, email, password, () => {
        history.push(HOME);
      });
    }
  };

  const handleAccountSubmit = (accountFunction) => {
    accountFunction((successfulSignin) => {
      history.push(HOME);
    });
  };

  const handleForgotPassword = () => {
    const { email } = formEntries;
    sendPasswordResetEmail(email || window.prompt('Enter your email:'));
  };

  return (
    <>
      {!isLoginForm ? (
        <>
          <h1>Sign Up Page</h1>

          <form>
            <FormFields
              fieldsArr={SignupFormFields}
              handleChange={handleChange}
              formEntries={formEntries}
            />
            <button onClick={handleEmailPassSubmit}>Continue</button>
          </form>

          <p className="accSwitchButton">Already have an account? <a href="/" onClick={(e) => { e.preventDefault(); toggleLoginSignup(); }}>Sign up</a></p>
        </>
      ) : (
        <>
          <h1>Login Page</h1>

          <form>
            <FormFields
              fieldsArr={LoginFormFields}
              handleChange={handleChange}
              formEntries={formEntries}
            />
            <button onClick={handleEmailPassSubmit}>Continue</button>
          </form>

          <p className="accSwitchButton">{'Don\'t'} have an account? <a href="/" onClick={(e) => { e.preventDefault(); toggleLoginSignup(); }}>Log in</a></p>
          <p><a href="/" onClick={(e) => { e.preventDefault(); handleForgotPassword(); }}>Forgot your password?</a></p>
        </>
      )}

      <hr></hr>

      <p>OR</p>

      <button onClick={() => handleAccountSubmit(signInWithGoogle)}>
        Sign In With Google
      </button>
      <button onClick={() => handleAccountSubmit(signInWithFacebook)}>
        Sign In With Facebook
      </button >
      {/* <button onClick={signInWithTwitter}> Sign In With Twitter</button> */}
    </>
  );
};

export default LoginPage;
