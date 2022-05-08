import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MSManager from './MSManager.js';
import { textAlign } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button color="inherit" onClick={handleOpen}>+ Add Widgets</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MSManager handleClose={handleClose} widgetsList={props.widgetsList} onChange={props.onChange} userId={props.userId} />
          <br></br>
          <Box display="flex" justifyContent="flex-end">
            {/* <Button onClick={handleClose}> Add Widgets</Button> */}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}