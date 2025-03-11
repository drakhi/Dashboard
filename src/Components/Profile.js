// import { Box, Container, Typography } from "@mui/material";
// import React from "react";
// import Grid from '@mui/material/Grid2';
// import Button from "@mui/material/Button";
// import nagesh from '../Images/Nag.jpg'
// function Profile() {
//   return (
//     <Container fixed>
//       <Grid container spacing={2} sx={{background:'rgb(33, 38, 49)', padding:'15px',alignContent:'center'}}>
//         <Grid size={{ xs: 12, sm:12 ,md: 6 }}>
//           <Box sx={{marginTop:'30px',mb:'50px', marginLeft:'100px'}}>
//         <img height="450px" width="380px" src={nagesh} alt="Nagesh"/>
//           </Box>
//         </Grid>
//         <Grid size={{ xs: 12,sm:12, md: 6 }}>
//           <Box sx={{color:'white', marginTop:'65px'}}>
//             <Typography variant="h3" sx={{textAlign:'center' , mb:'20px', color:'rgb(219,93,93)'}}>NAGESH VANDANA</Typography>
//             <Typography variant="h6" sx={{textAlign: 'center', marginBottom:'20px'}}>I’m NAGESH VANDANA, a frontend developer as well as Backend developer with a knack for HTML, CSS, and 
//             JavaScript,React js,node js . I love creating responsive, user-friendly interfaces. Recently, I collaborated on a 
//             team project that improved website load times by optimizing code. Let's build amazing web experiences together!”
//             </Typography>
//             <Box sx={{marginTop:'40px', textAlign:'center'}}>
//             <a href="https://nageshvandana.42web.io/?i=2" style={{background:'blue', color:'white', borderRadius:'15px', border:'none', textAlign:'center',fontSize:'20px', padding: '15px 32px'}}>Portfilio</a>
//             </Box>
          
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default Profile;


import React from 'react'
import { Box, Typography, Button,Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import nagesh from '../Images/Nag1.jpg';
function Profile() {
  return (
    <Box sx={{ backgroundColor: "#E2A36C",height:'100vh', width:'100%', py: 10, display: "flex", flexDirection: "column", alignItems: "center"  }}>
      <Grid container spacing={2}>
  <Grid item xs={2}>
   
  </Grid>
  <Grid item xs={8}>
  <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 4,
        boxShadow: 3,
        p: 5,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",

        overflow:'hidden'
      }}
    >

      <Grid  spacing={3} justifyContent="center"  sx={{ textAlign: { xs: "center", md: "left" }, flex: 1,width:'100%', marginLeft:'40px' }}>
        <Typography variant="h4" fontWeight="bold">
          Hello, <br /> I am <span style={{ color: "black" }}>Nagesh Vandana.</span>
        </Typography>
        <Typography variant="h6" sx={{ color: "#E2A36C", fontWeight: "bold", mt: 1 }}>
          Frontend Developer
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          <strong>Hello, I am ability to translate the designs into
          functional Front-end.</strong>
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E2A36C",
            color: "white",
            mt: 3,
            px: 4,
            "&:hover": { backgroundColor: "#D68B5A" },
          }}
        >
          <a href="tel:+91-7729884738"><b>Hire Me</b></a>
        </Button>
      </Grid>

  
      <Grid
        sx={{
          backgroundColor: "#E2A36C",
          borderRadius: "50%",
          width: 200,
          height: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 4, md: 0 },
          ml: { md: 4 },
        }}
      >
        <img
          src={nagesh} // Replace with actual image path
          alt="Profile"
          style={{ width: 180, height: 180, borderRadius: "50%", objectFit: "cover",position:'relative' }}
        />
      </Grid>
    </Box>
  </Grid>
  <Grid item xs={2}>
   
  </Grid>

</Grid>
      {/* <Container maxWidth={false} sx={{ position: "relative", display: "flex", alignItems: "center" }}>
    
    <Grid size={{ xs: 12, sm: 12, md: 6 }} >
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 4,
        boxShadow: 3,
        p: 5,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",

        overflow:'hidden'
      }}
    >

      <Grid  spacing={3} justifyContent="center"  sx={{ textAlign: { xs: "center", md: "left" }, flex: 1,width:'100%', marginLeft:'40px' }}>
        <Typography variant="h4" fontWeight="bold">
          Hello, <br /> I am <span style={{ color: "black" }}>Nagesh Vandana.</span>
        </Typography>
        <Typography variant="h6" sx={{ color: "#E2A36C", fontWeight: "bold", mt: 1 }}>
          Frontend Developer
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          <strong>Hello, I am ability to translate the designs into
          functional Front-end.</strong>
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E2A36C",
            color: "white",
            mt: 3,
            px: 4,
            "&:hover": { backgroundColor: "#D68B5A" },
          }}
        >
          <a href="tel:+91-7729884738"><b>Hire Me</b></a>
        </Button>
      </Grid>

  
      <Grid
        sx={{
          backgroundColor: "#E2A36C",
          borderRadius: "50%",
          width: 200,
          height: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 4, md: 0 },
          ml: { md: 4 },
        }}
      >
        <img
          src={nagesh} // Replace with actual image path
          alt="Profile"
          style={{ width: 180, height: 180, borderRadius: "50%", objectFit: "cover",position:'relative' }}
        />
      </Grid>
    </Box>
    </Grid>
  </Container> */}
  </Box>
  )
}

export default Profile
