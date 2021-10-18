import React from 'react';
import Button from '@mui/material/Button';
import useAuth from '../../context/AuthContext.jsx';

const UserAccountPage = () => {
  const { logoutUser, currentUser } = useAuth();

  const name = currentUser.displayName || 'Anonymous'; // stored in Firebase
  const joinDate = '7 days ago';

  return (
    <>
      <h1>Account Details</h1>

      <figure>
        <img></img>
        <button>Remove</button>
      </figure>

      <figure>
        <h4>Referall Coupon: ${'$20'}</h4>
        <button>Share Code</button>
      </figure>

      <h5>{name}</h5>

      <p>Joined: {joinDate}</p>

      <Button onClick={() => logoutUser()}>Log Out</Button>
    </>
  );
};

export default UserAccountPage;
