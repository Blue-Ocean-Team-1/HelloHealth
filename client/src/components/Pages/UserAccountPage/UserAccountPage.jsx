import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid, Paper, Box } from '@material-ui/core';
import useAuth from '../../../context/AuthContext.jsx';
import { TRANSACTION } from '../../../config/pageRoutes';

const UserAccountPage = () => {
  const { logoutUser, currentUser } = useAuth();

  const name = currentUser.displayName || 'Anonymous'; // stored in Firebase
  // const joinDate = '7 days ago';
  const joinDate = '7 days ago';
  const transactionId = '1241350';

  // HERE
  const transactions = [
    {
      id: '132135',
      price: '$20',
    },
  ];

  return (
    <Paper style={{ padding: '0.5em' }}>
      <Box sx={{ x: 2, float: 'right' }}>
        <Button variant="contained" onClick={() => logoutUser()}>
          Log Out
        </Button>
      </Box>

      <h1>Account Details</h1>
      <figure>
        <h4>Available Credit: {'$20'}</h4>
        <button>Share Code</button>
      </figure>

      <h5>{name}</h5>

      <Box component={Grid} container boxShadow={1}>
        <Grid>
          <h3>Subscription</h3>
        </Grid>

        <Grid item>
          <select>
            <option value={'active'}>Active</option>
            <option value={'deactived'}>Deactived</option>
          </select>
        </Grid>
      </Box>

      <Box component={Grid} container boxShadow={1}>
        <Grid container>
          <h3>Transactions</h3>
        </Grid>

        {transactions.length === 0 ? (
          <Grid item>
            <p>No transactions found..</p>
          </Grid>
        ) : (
          <>
            {transactions.map(({ id }) => (
              <Box key={id}>
                <p>Transaction ID: {id}</p>
                <p>Total: {'$14.99'}</p>
                <Link to={`${TRANSACTION}?=${id}`}>View</Link>
              </Box>
            ))}
          </>
        )}
      </Box>
    </Paper>
  );
};

export default UserAccountPage;
