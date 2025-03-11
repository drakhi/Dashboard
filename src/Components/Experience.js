// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Box, Button, Typography, Card, CardMedia, CardContent, Container, Grid } from "@mui/material";

// const projects = [
//   { title: "Attendance Management System", year: 2021, image: "https://jpinfotech.org/wp-content/uploads/2023/12/JC04-Employee-Attendance-System-using-QR-Code.jpg" },
//   { title: "E-commerce Application", year: 2022, image: "https://echopx.com/wp-content/uploads/2024/01/ecommerce-website-banner-1455x471.png" },
//   { title: "Sastho Ticket Designing", year: 2021, image: "https://5.imimg.com/data5/SELLER/Default/2022/8/NN/FR/VD/89061528/two-way-domestic-flight-tiket-booking-500x500.jpg" },
//   { title: "Traviling Application", year: 2023, image: "https://assets.thehansindia.com/h-upload/2019/12/27/248830-worldtour.webp" },
//   { title: "RBAC Designing", year: 2021, image: "https://framerusercontent.com/images/I0eGnSvx4sBUsH2XWtTWLN24WM.png" },
//   { title: "Social Snap", year: 2023, image: "https://lh4.googleusercontent.com/lwVQnauu36XszUtmYsTc9ob4kEROK_GNFTTSWBnzdgMDSDcIaczRGBba4PIKfIM60QoOEBvImtt7hJS35xQN3NSpUMTyBFg0ThsNBtHvBv4jb6TFlYK0cVm3YOylun9XF4fEDGX4UaUAvOmBpHmJ460" },
// ];

// export default function Portfolio() {
//   const [index, setIndex] = useState(0);
//   const itemsPerPage = 3;

//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % projects.length);
//   };

//   const prevSlide = () => {
//     setIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   return (
//     <Box sx={{ backgroundColor: "#E8F5E9", py: 10, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", width: "100vw" }}>
//       <Typography variant="h3" fontWeight="bold" color="green" mb={4}>Projects</Typography>
//       <Container maxWidth={false} sx={{ position: "relative", display: "flex", alignItems: "center", width: "90vw" }}>
//         <Button onClick={prevSlide} sx={{ position: "absolute", left: 0, backgroundColor: "#A5D6A7", '&:hover': { backgroundColor: "#81C784" } }}>
//           <ChevronLeft size={28} />
//         </Button>
//         <Grid container spacing={3} justifyContent="center" sx={{ width: "100%" }}>
//           {projects.slice(index, index + itemsPerPage).map((project, i) => (
//             <Grid item xs={12} sm={6} md={4} key={i}>
//               <Card sx={{ boxShadow: 3, transition: "transform 0.3s", '&:hover': { transform: "scale(1.05)" } }}>
//                 <CardMedia component="img" height="200" image={project.image} alt={project.title} />
//                 <CardContent>
//                   <Typography variant="h6" fontWeight="bold">{project.title}</Typography>
//                   <Typography color="textSecondary">{project.year}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//         <Button onClick={nextSlide} sx={{ position: "absolute", right: 0, backgroundColor: "#A5D6A7", '&:hover': { backgroundColor: "#81C784" } }}>
//           <ChevronRight size={28} />
//         </Button>
//       </Container>
//     </Box>
//   );
// }

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
