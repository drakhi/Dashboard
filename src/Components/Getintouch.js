// import React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import { ListItem, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import XIcon from '@mui/icons-material/X';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import RocketTwoToneIcon from '@mui/icons-material/RocketTwoTone';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import MenuItem from "@mui/material/MenuItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemIcon from "@mui/material/ListItemIcon";

// function Getintouch() {
//   return (
//     <div>
//       <CssBaseline />
//       <Container fixed sx={{ background: "rgb(33, 38, 49)" }}>
//         <Box sx={{ color: "white", textAlign: "center" }}>
//           <Grid container spacing={2}>
//             <Grid size={{ xs: 12, sm: 12, md: 12 }}>
//               <Typography variant="h4">Get In Touch</Typography>
//               <Typography variant="h6">
//                 What's next? Feel free to reach out to me if you're looking for
//                 a developer, have a query, or simply want to connect.
//               </Typography>
//             </Grid>
//             <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{}}>
//             <MenuItem>
//                 <ListItemIcon>
//                   <PhoneIcon fontSize="small" />
//                 </ListItemIcon>
//                 <ListItemText>
//                 <a href="tel:7729884738" class="text-decoration-none text-white">
//                 {" "}
//                 <i class="fa-solid fa-phone me-3"></i>7729884738
//               </a>
//                   <br />
//                 </ListItemText>
//               </MenuItem>
//               <br />
//               <MenuItem>
//                 <ListItemIcon>
//                   <EmailOutlinedIcon fontSize="small" />
//                 </ListItemIcon>
//                 <ListItemText>
//                 <a
//                 href="mailto:vandananagesh2001@gmail.com"
//               >
//                 {" "}
//                 <i class="fa-solid fa-envelope me-3"></i>
//                 vandananagesh2001@gmail.com
//               </a>
//                   <br />
//                 </ListItemText>
//               </MenuItem>
            
//             </Grid>
//             <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ color: "white" }}>
//               <MenuItem>
//                 <ListItemIcon>
//                   <GitHubIcon fontSize="small"  />
//                 </ListItemIcon>
//                 <ListItemText>
//                   <a href="https://github.com/Nagesh-12A?tab=repositories">
//                     {" "}
//                     Github
//                   </a>
//                   <br />
//                 </ListItemText>
//               </MenuItem>

//               <MenuItem>
//                 <ListItemIcon>
//                   <LinkedInIcon fontSize="small" />
//                 </ListItemIcon>
//                 <ListItemText>
//                   <a href="https://github.com/Nagesh-12A?tab=repositories">
//                     {" "}
//                     LinkedIn
//                   </a>
//                   <br />
//                 </ListItemText>
//               </MenuItem>

//               <MenuItem>
//                 <ListItemIcon>
//                   <RocketTwoToneIcon fontSize="small" />
//                 </ListItemIcon>
//                 <ListItemText>
//                   <a href="https://www.naukri.com/mnjuser/recommendedjobs">
//                     {" "}
//                    Naukri
//                   </a>
//                   <br />
//                 </ListItemText>
//               </MenuItem>

//               <MenuItem>
//                 <ListItemIcon>
//                   <XIcon fontSize="small" />
//                 </ListItemIcon>
//                 <ListItemText>
//                   <a href="https://x.com/home">
//                     {" "}
//                    X
//                   </a>
//                   <br />
//                 </ListItemText>
//               </MenuItem>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </div>
//   );
// }

// export default Getintouch;





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
