
import React from "react";
import { Box, Grid, TextField, Typography, Button, MenuItem } from "@mui/material";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
const Getintouch = () => {
  return (
    <Box sx={{ backgroundColor: "#0D0D52", color: "white", py: 6, px: 3 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Left Side - Heading & Description */}
        <Grid item xs={12} md={5}>
          <Typography variant="h4" fontWeight="bold" sx={{marginTop:'70px'}}>
            Need a quote for a project? Get in touch...
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: "#b0b0b0" }}>
            <strong>
            If you're here it means you want to start a journey. We would love to
            get to know you and take you on that journey. We'll be perfect for
            each other - you'll see... </strong>
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 5}}>
              <a href="https://github.com/Nagesh-12A?tab=repositories"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/nagesh-vandana-9b4653275/"><LinkedInIcon/></a>
              <a href="https://x.com/home"><XIcon/></a>
              <a href="https://www.instagram.com/vandananagesh2001/"><InstagramIcon/></a>
            </Box>
        </Grid>

        {/* Right Side - Form */}
        <Grid item xs={12} md={5}>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2}}>
            <TextField label="Name" variant="outlined" fullWidth sx={{ background: "white",borderRadius:'10px' }} />
            <TextField label="Phone Number" variant="outlined" fullWidth sx={{ background: "white",borderRadius:'10px' }} />
            <TextField label="Email" variant="outlined" fullWidth sx={{ background: "white",borderRadius:'10px' }} />
            <TextField
              select
              label="Subject"
              variant="outlined"
              fullWidth
              sx={{ background: "white",borderRadius:'10px'}}
            >
              <MenuItem value="web">Web Development</MenuItem>
              <MenuItem value="design">UI/UX Design</MenuItem>
              <MenuItem value="branding">Branding</MenuItem>
            </TextField>
            <TextField
              label="Your Enquiry"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{ background: "white",borderRadius:'10px' }}
            />
            <Button variant="contained" sx={{ background: "#FF4C61", color: "white", mt: 2 ,borderRadius:'10px'}}>
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Section */}
      <Box sx={{ backgroundColor: "#FF4C61", color: "white", py: 4, mt: 6, textAlign: "center", borderRadius:'20px' }}>
        <Grid container spacing={3} justifyContent="center">
          {/* Left - Contact Details */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold">
              Get in touch
            </Typography>
            <Typography sx={{mt:'2'}}>Email: <a href="mailto:vandananagesh2001@gmail.com">vandananagesh2001@gmail.com</a></Typography>
            <Typography sx={{mt:'5'}}>Phone:  <a href="tel:+91-7729884738"> +91-7729884738 </a></Typography>
          </Grid>

          {/* Middle - Social Media */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold">Social Media</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
              <a href="https://github.com/Nagesh-12A?tab=repositories"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/nagesh-vandana-9b4653275/"><LinkedInIcon/></a>
              <a href="https://x.com/home"><XIcon/></a>
              <a href="https://www.instagram.com/vandananagesh2001/"><InstagramIcon/></a>
            </Box>
          </Grid>

          {/* Right - Address */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold">Where we are</Typography>
            <Typography>India</Typography>
            <Typography>Hyderabad</Typography> 
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Getintouch;
