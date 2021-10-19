import * as React from 'react';
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

export default function FarmEdit() {
  const [open, setOpen] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button alignSelf="end" onClick={handleOpen} startIcon={<EditRoundedIcon />}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <FormLabel>Banner:
          <TextField
            id="banner-image"
            label="Banner Link"
            multiline
            maxRows={1}
            fullWidth
          />
         </FormLabel>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Button>Update</Button>
        </div>
        <FormLabel>About:
          <TextField
            id="outlined-multiline-flexible"
            label="About"
            multiline
            maxRows={8}
            fullWidth
          />
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Button>Update</Button>
        </div>
        </FormLabel>
        <FormLabel>Video:
          <TextField
            id="livestream-link"
            label="YouTube Live Link"
            multiline
            maxRows={1}
            fullWidth
          />
         </FormLabel>
         <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Button>Update</Button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}
