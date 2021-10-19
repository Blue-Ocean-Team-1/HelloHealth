import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
  Box,
  withStyles,
} from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import useMainContext from '../../../context/MainContext.jsx';
import useAuth from '../../../context/AuthContext.jsx';
import { HOME } from '../../../config/pageRoutes';
import useStyles from '../../styles';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
`;

const FormFields = ({ formEntries, fieldsArr, handleChange }) => (
  <Grid>
    {fieldsArr.map(({ name, placeholder }, i) => (
      <Grid container spacing={8} alignItems="flex-end">
        <Grid item md={true} sm={true} xs={true}>
          <TextField
            key={i}
            onChange={handleChange}
            type={name}
            name={name}
            value={formEntries[name] || ''}
            placeholder={placeholder}
            required
            fullWidth
          />
        </Grid>
      </Grid>
    ))}
  </Grid>
);

const AccountForm = (props) => {
  const {
    fieldsArr,
    handleChange,
    formEntries,
    title,
    handleTypeChange,
    customerType,
    toggleLoginSignup,
    typeMessage,
    redirectName,
    handleEmailPassSubmit,
    handleAccountSubmit,
    signInWithGoogle,
    signInWithFacebook,
  } = props;

  return (
    <Paper style={{ marginTop: '3em' }}>
      <Grid container spacing={8} justify="center" direction="row">
        <Grid item style={{ backgroundColor: '#f4f4f4' }} justify="center">
          <Grid container spacing={2} alignItems="flex-end">
            <Typography variant="h4" gutterBottom component="div">
              {title}
            </Typography>
          </Grid>

          <FormFields
            fieldsArr={fieldsArr}
            handleChange={handleChange}
            formEntries={formEntries}
          />

          <Grid container justify="center" style={{ marginTop: '10px' }}>
            <Button variant="contained" onClick={handleEmailPassSubmit}>Continue</Button>
          </Grid>

          <hr></hr>

          <Grid container justify="center" style={{ marginTop: '10px' }}>
            <Typography onClick={toggleLoginSignup} variant="body1">{typeMessage} <a href="#">{redirectName}</a></Typography>
          </Grid>

          <Grid container justify="center" style={{ marginTop: '10px' }}>
            {props.children && (<>{props.children}</>)}
          </Grid>

          <Grid >
            <FormContainer>
              <Typography variant="body1">OR</Typography>
              <Stack spacing={2}>
                <Button variant="outlined" size="small" style={{ maxWidth: '200px' }} onClick={() => handleAccountSubmit(signInWithGoogle)}>
                  Sign In With Google
                </Button>
                <Button variant="outlined" size="small" style={{ maxWidth: '200px' }} onClick={() => handleAccountSubmit(signInWithFacebook)}>
                  Sign In With Facebook
                </Button>
                {/* <button onClick={signInWithTwitter}> Sign In With Twitter</button> */}
              </Stack>
            </FormContainer>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AccountForm;
