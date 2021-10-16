import React from 'react';
import Button from '@mui/material/Button';
import useAuth from '../../context/AuthContext.jsx';

const UserAccountPage = () => {
  const { logoutUser } = useAuth();

  return (
    <>
      <h1>UserAccountPage</h1>

      <Button onClick={() => logoutUser()}>Log Out</Button>
    </>
  );
};

export default UserAccountPage;
