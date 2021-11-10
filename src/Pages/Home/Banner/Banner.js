import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";

const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter={
    display:'flex',
    alignItems: 'center',
    height: 400
}
const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
    
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
        <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                    
                </Grid>

        </Grid>
        <Grid item xs={12} md={7} style={verticalCenter}>
            <img style={{ width: '90%' }} src={chair} alt="" />
        </Grid>
      </Grid>
    
    </Container>
  );
};

export default Banner;
