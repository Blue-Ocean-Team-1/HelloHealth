import React from 'react';
import { Button } from '@mui/material';

export default function AddToCart({ item, quantity, cartList }) {
  // adding cart to database?

  // or store it on cookie?
  const addItem = () => {

  };
  return (
    <Button variant="outlined" onClick={ (e) => addItem() }>
      Add to Cart
    </Button>
  );
}
