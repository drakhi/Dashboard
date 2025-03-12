
import { Grid,Box, Button, Container, Typography, Avatar} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import nagesh from '../Images/Nag1.jpg';
export default function HeroSection() {
  return (
    <Box sx={{ backgroundColor: "#57B956", minHeight: "100vh", display: "flex", alignItems: "center",
 }}>
      <Container maxWidth={false} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",  px: 5 }}>
        {/* Left Content */}
        <Grid item xs={12} sm={12} md={7} sx={{ width:'100%', marginLeft:'40px' }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
          We have <br/> experience in web development.
          </Typography>
          <Typography variant="body1" color="white" mb={3}>
          <strong>Hi! I'm a Frontend and Backend Developer Creating bold and innovative interface designs.</strong>
          </Typography>
          <Box display="flex" gap={2}>
            <Button variant="contained" sx={{ backgroundColor: "#8a7aff", color: "white" }}>
              Let's Talk
            </Button>
            <Button variant="text">Portfolio</Button>
          </Box>
          <Box sx={{ display: "flex", gap: 2, mt: 5}}>
              <a href="https://github.com/Nagesh-12A?tab=repositories"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/nagesh-vandana-9b4653275/"><LinkedInIcon/></a>
              <a href="https://x.com/home"><XIcon/></a>
              <a href="https://www.instagram.com/vandananagesh2001/"><InstagramIcon/></a>
            </Box>
        </Grid>

        {/* Right Image Section */}
        <Grid item xs={12} sm={12} md={5} sx={{ position: "relative",marginRight:'80px' }}>
          <Box
            sx={{
              width: 350,
              height: 350,
              backgroundColor: "#478F48",
              // clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius:'85px'
            }}
          >
            <Avatar
              src={nagesh}
              alt="Profile"
              sx={{ width: 280, height: 330, borderRadius: 25 }}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

// import {
//   Box,
//   Grid,
//   Button,
//   Container,
//   Typography,
//   Avatar,
// } from "@mui/material";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import XIcon from "@mui/icons-material/X";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import nagesh from "../Images/Nag1.jpg";

// export default function HeroSection() {
//   return (
//     <Grid
//       container
//       spacing={2}
//       sx={{ backgroundColor: "#57B956",minHeight: "100vh", display: "flex", alignItems: "center",width:'100vw' }}
//     >
//       <Container
//         maxWidth={false}
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: "100%",
//           px: 5,
//         }}
//       >
//         {/* Left Content Section */}
//         <Grid size={{ xs: 6, sm: 6, md: 7 }} sx={{ maxWidth: 500, marginLeft:'40px' }}>
//           <Typography variant="h3" fontWeight="bold" gutterBottom>
//             We have <br /> experience in web development.
//           </Typography>
//           <Typography variant="body1" color="white" mb={3}>
//             Hi! I'm a Frontend and Backend Developer—creating bold and
//             innovative interface designs.
//           </Typography>

//           <Box display="flex" gap={2}>
//             <Button
//               variant="contained"
//               sx={{ backgroundColor: "#8a7aff", color: "white" }}
//             >
//               Let's Talk
//             </Button>
//             <Button variant="text">Portfolio</Button>
//           </Box>
//           <Box sx={{ display: "flex", gap: 2, mt: 5 }}>
//             <a href="https://github.com/Nagesh-12A?tab=repositories">
//               <GitHubIcon />
//             </a>
//             <a href="https://www.linkedin.com/in/nagesh-vandana-9b4653275/">
//               <LinkedInIcon />
//             </a>
//             <a href="https://x.com/home">
//               <XIcon />
//             </a>
//             <a href="https://www.instagram.com/vandananagesh2001/">
//               <InstagramIcon />
//             </a>
//           </Box>
//         </Grid>

//         {/* Right Image Section */}
//         <Grid size={{ xs: 6, sm: 6, md: 4 }}>
//           <Box
//             sx={{
//               width: 350,
//               height: 350,
//               backgroundColor: "#478F48",
//               // clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: "85px",
//             }}
//           >
//             <Avatar
//               src={nagesh}
//               alt="Profile"
//               sx={{ width: 280, height: 330, borderRadius: 25 }}
//             />
//           </Box>
//         </Grid>
//     </Container>
//     </Grid>
//   );
// }
