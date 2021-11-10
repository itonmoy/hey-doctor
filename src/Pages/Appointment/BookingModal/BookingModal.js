import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button  from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking, handleBookingClose, booking, date}) => {
 const{name, time} =booking;
 const handleBookingSubmit = e => {
    alert('submitting');

    // collect data
    // send to the server

    // handleBookingClose();
    e.preventDefault();
}
        
    return (
        <Modal
        keepMounted
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          
          <form onSubmit={handleBookingSubmit}>
                <TextField
                disabled
                sx={{width: '90%' , margin:'10px' }}
                id="outline-size-small"
                defaultValue={time}
                size="small"
                />
                <TextField
                
                sx={{width: '90%' , margin:'10px' }}
                id="outline-size-small"
                defaultValue="Your name"
                size="small"
                />
                <TextField
                
                sx={{width: '90%' , margin:'10px' }}
                id="outline-size-small"
                defaultValue="Phone Number"
                size="small"
                />
                <TextField
                
                sx={{width: '90%' , margin:'10px' }}
                id="outline-size-small"
                defaultValue="Email"
                size="small"
                />
                <TextField
                disabled
                sx={{width: '90%' , margin:'10px' }}
                id="outline-size-small"
                defaultValue={date.toDateString()}
                size="small"
                />
                <Button  type="submit"
                    style={{ backgroundColor: "#5CE7ED" }}
                    variant="contained"
                >
                SUBMIT
                </Button>
          </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;