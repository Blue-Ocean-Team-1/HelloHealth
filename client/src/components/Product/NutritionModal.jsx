<<<<<<< HEAD
import * as React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> main
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Nutrition from './Nutrition.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
<<<<<<< HEAD
  width: '70%',
=======
  width: '40vmax',
>>>>>>> main
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NutritionModal() {
<<<<<<< HEAD
  const [open, setOpen] = React.useState(false);
=======
  const [open, setOpen] = useState(false);
>>>>>>> main
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
<<<<<<< HEAD
      <Button onClick={handleOpen} jus='center'>Nutrition</Button>
=======
      <Button onClick={handleOpen}>Nutrition</Button>
>>>>>>> main
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Nutrition />
        </Box>
      </Modal>
    </div>
  );
}
