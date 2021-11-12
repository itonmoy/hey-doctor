import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space } = booking;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ p: 5 }}>
          <Typography variant="h5" gutterBottom component="div">
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" gutterBottom component="div">
            {space} SPACES AVAILABLE
          </Typography>
          <Button
            onClick={handleBookingOpen}
            style={{ backgroundColor: "#5CE7ED" }}
            variant="contained"
          >
            BOOK APPOINMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
      date={date}
      booking={booking}
      openBooking={openBooking}
      handleBookingClose={handleBookingClose}
      setBookingSuccess={setBookingSuccess}
      >

      </BookingModal>
    </>
  );
};

export default Booking;
