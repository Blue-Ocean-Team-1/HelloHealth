import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ToggleButton from '@mui/material/ToggleButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Nutrition from '../../Product/Nutrition.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProductEdit({ info, product }) {
  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [image, setImage] = useState(product.product_image);
  const [name, setName] = useState(product.product_name);
  const [description, setDescription] = useState(product.product_description);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onType = (e, set) => {
    set(e.target.value);
  };

  const handleImagePreview = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <Button onClick={handleOpen} startIcon={<EditRoundedIcon />}>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormLabel>
            Name:
            <TextField
              id="banner-image"
              value={name}
              multiline
              maxRows={1}
              fullWidth
              onChange={(e) => onType(e, setName)}
            />
          </FormLabel>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <Button>Update</Button>
          </div>
          <FormLabel>
            Description:
            <TextField
              id="outlined-multiline-flexible"
              multiline
              maxRows={8}
              fullWidth
              placeholder={description}
              value={description}
              onChange={(e) => onType(e, setDescription)}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}
            >
              <Button>Update</Button>
            </div>
          </FormLabel>
          <FormLabel>
            Product Image Link:
            <TextField
              id="outlined-multiline-flexible"
              multiline
              maxRows={8}
              fullWidth
              value={image}
              onChange={(e) => onType(e, setImage)}
            />
          </FormLabel>
          <FormLabel>
            Product Image:{' '}
            {/* <input
              type="file"
              onChange={handleImagePreview}
              accept=".jpg,.png"
            /> */}
            <div>
              <img
                style={{ objectFit: 'cover', width: '100px', height: '100px' }}
                src={image}
              />
            </div>
          </FormLabel>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <Button>Update</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
