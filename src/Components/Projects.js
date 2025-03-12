

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Box, Button, Typography, Card, CardMedia, CardContent, Container, Grid } from "@mui/material";
import CardActions from '@mui/material/CardActions';

const projects = [
  { title: "Attendance Management System", year: 2021, image: "https://jpinfotech.org/wp-content/uploads/2023/12/JC04-Employee-Attendance-System-using-QR-Code.jpg" },
  { title: "E-commerce Application", year: 2022, image: "https://echopx.com/wp-content/uploads/2024/01/ecommerce-website-banner-1455x471.png" },
  { title: "Sastho Ticket Designing", year: 2021, image: "https://5.imimg.com/data5/SELLER/Default/2022/8/NN/FR/VD/89061528/two-way-domestic-flight-tiket-booking-500x500.jpg" },
  { title: "Traviling Application", year: 2023, image: "https://wallpaperaccess.com/full/1318015.jpg" },
  { title: "RBAC Designing", year: 2021, image: "https://framerusercontent.com/images/I0eGnSvx4sBUsH2XWtTWLN24WM.png" },
  { title: "Social Snap", year: 2023, image: "https://lh4.googleusercontent.com/lwVQnauu36XszUtmYsTc9ob4kEROK_GNFTTSWBnzdgMDSDcIaczRGBba4PIKfIM60QoOEBvImtt7hJS35xQN3NSpUMTyBFg0ThsNBtHvBv4jb6TFlYK0cVm3YOylun9XF4fEDGX4UaUAvOmBpHmJ460" },
];

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Box sx={{ backgroundColor: "#EB5757", py: 10, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center",  }}>
      {/* <Typography variant="h3" mb={4}><b>Projects</b></Typography> */}
      <Container maxWidth={false} sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        <Button onClick={prevSlide} sx={{ position: "absolute", left: 0, backgroundColor: "#A5D6A7", '&:hover': { backgroundColor: "#81C784" } }}>
          <ChevronLeft size={28} />
        </Button>
        <Grid container spacing={3} justifyContent="center" sx={{ width: "100%" }}>
          {projects.slice(index, index + itemsPerPage).map((project, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ boxShadow: 3, transition: "transform 0.3s", '&:hover': { transform: "scale(1.05)" } }}>
                <CardMedia component="img" height="200" image={project.image} alt={project.title} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{project.title}</Typography>
                  <Typography color="textSecondary">{project.year}</Typography>
                </CardContent>
                <CardActions>
      <Button sx={{background:'green',width:'100%',color:'black',fontWeight:'bold'}} >View</Button>
    </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button onClick={nextSlide} sx={{ position: "absolute", right: 0, backgroundColor: "#A5D6A7", '&:hover': { backgroundColor: "#81C784" } }}>
          <ChevronRight size={28} />
        </Button>
      </Container>
    </Box>
  );
}
