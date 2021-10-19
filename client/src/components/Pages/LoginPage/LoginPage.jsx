import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import useMainContext from '../../../context/MainContext.jsx';
import useAuth from '../../../context/AuthContext.jsx';
import { HOME } from '../../../config/pageRoutes';
import useStyles from '../../styles';
import AccountForm from './AccountForm.jsx';

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

const LoginPage = () => {
  const classes = useStyles();

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formEntries, setFormEntries] = useState({});
  const [customerType, setCustomerType] = useState('');
  const [typeSelection, setTypeSelection] = useState('');
  const history = useHistory();

  const {
    loginUser,
    signupUser,
    sendPasswordResetEmail,
    signInWithGoogle,
    signInWithFacebook,
    currentUser,
  } = useAuth();

  const { userType, setUserType } = useMainContext();

  const handleTypeChoose = () => {
    setCustomerType(typeSelection);
  };

  const handleTypeChange = (e) => {
    setTypeSelection(e.target.value);
  };

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

  const formProps = {
    handleChange,
    formEntries,
    handleTypeChange,
    customerType,
    handleAccountSubmit,
    signInWithGoogle,
    signInWithFacebook,
    toggleLoginSignup,
  };

  return (
    <>
      {!customerType ? (
        <Grid container alignItems="center" justify="space-between">
          <Grid style={{ margin: '2em' }}>
            <label>
              <Grid container xs={9} direction={'column'} spacing={2} >
                <Grid spacing={3} >
                  <Typography variant="body1">To log in or sign up, please select account type below: </Typography>
                </Grid>
                <Select sx={{ mt: 2 }} label="Customer Type" value={typeSelection} onChange={handleTypeChange} >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'customer'}>
                    Customer
                  </MenuItem>
                  <MenuItem value={'farmer'}>
                    Farmer
                  </MenuItem>
                  <MenuItem value={'nutritionist'}>
                    Nutritionist
                  </MenuItem>
                </Select>
              </Grid>
            </label>
            <Button sx={{ mt: 3 }} onClick={handleTypeChoose} variant="contained">Continue</Button>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid style={{ margin: '2em' }}>
            <Button size="small" onClick={() => setCustomerType('')} variant="contained" >Back</Button>
          </Grid>
          {!isLoginForm ? (
            <AccountForm
              fieldsArr={SignupFormFields}
              title="Sign Up"
              typeMessage="Already have an account?"
              redirectName="Log In"
              {...formProps}
            >
            </AccountForm>
          ) : (
            <AccountForm
              fieldsArr={LoginFormFields}
              title="Log In"
              typeMessage="No account?"
              redirectName="Sign Up"
              {...formProps}
            >
              <Button onClick={(e) => { e.preventDefault(); handleForgotPassword(); }}>
                Forgot your password?
              </Button>
            </AccountForm>
          )}
        </>
      )
      }
    </>);
};

export default LoginPage;
