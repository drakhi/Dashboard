// import { Box, Typography } from "@mui/material";
// import React from "react";
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid2';
// import ht from '../Images/html.png';
// import CSS from '../Images/css.png';
// import JAVASCRIPT from '../Images/javaScript.png';
// import REACTJS from '../Images/Reactjs.png';
// import TYPESCRIPT from '../Images/ts.jpeg';
// import JAVA from '../Images/java.png';
// import BOOTSTRAP from '../Images/bootstrap.png';
// import GIT from '../Images/git.png';
// import MUI from '../Images/UI.png';
// import VUEJS from '../Images/Vue.jpg';
// import SQL from  '../Images/sql.jpeg';
// function Skills() {
//   return (
//     <Container fixed sx={{background:'rgb(33, 38, 49)'}}>
//       <Box sx={{padding:'15px',background:'#212529', color:'white',textAlign:'center'}}>
//         <Typography variant="h4" sx={{mt:'10px', mb:'7px',color:'rgb(219,69,69)'}} >Skills</Typography>
//         <Typography variant="h6" sx={{mb:'20px',color:'orangered'}}>The Skills,tools and technologies I am really good At</Typography>
//         <Grid container spacing={2}>
//           <Grid size={{ xs: 6, md: 3 }}>
//             <img height="80px" width="80px" src={ht} alt="html"/>
//            <Typography variant="h6">HTML</Typography>
//           </Grid>
//           <Grid size={{ xs: 6, md: 3 }}>
//             <img  height="80px" width="80px" src={CSS} alt="Nagesh"/>
//           <Typography variant="h6">CSS</Typography>
//           </Grid>
//           <Grid size={{ xs: 6, md: 3 }}>
//             <img height="80px" width="80px" src={JAVASCRIPT} alt="Nagesh"/>
//           <Typography variant="h6">JavaScript</Typography>
//           </Grid>
//           <Grid size={{ xs: 6, md: 3 }}>
//             <img height="80px" width="80px" src={REACTJS} alt="Nagesh"/>
//           <Typography variant="h6">REACT JS</Typography>
//           </Grid>
//           <Grid size={{ xs: 6, md: 3 }}>
//             <img height="80px" width="80px" src={TYPESCRIPT} alt="Nagesh"/>
//            <Typography variant="h6">Typescript</Typography>
//           </Grid>
//           <Grid size={{ xs: 6, md: 3 }}>
//             <img height="80px" width="80px" src={JAVA} alt="java"/>
//           <Typography variant="h6">JAVA</Typography>
//           </Grid>
//           <Grid size={{ xs: 6, md: 3 }}>
//             <img height="80px" width="80px" src={SQL} alt="sql"/>
//           <Typography variant="h6">JAVA</Typography>
//           </Grid>
//           <Grid size={{ xs: 6, md: 3 }}>
//            <img height="80px" width="80px" src={BOOTSTRAP} alt="Bootstrap"/>
//           <Typography variant="h6">Bootstrap</Typography>
//           </Grid>
//           <Grid size={{ xs: 6, md: 3 }}>
//             <img height="80px" width="80px" src={GIT} alt="Git"/>
//           <Typography variant="h6">git</Typography>
//           </Grid>
//           <Grid size={{ xs: 6, md: 3 }}>
//             <img height="80px" width="80px" src={MUI} alt="Nagesh"/>
//            <Typography variant="h6">Material UI</Typography>
//           </Grid>
//           <Grid size={{ xs: 6, md: 3 }}>
//             <img height="80px" width="80px" src={VUEJS} alt="Nagesh"/>
//           <Typography variant="h6">vue js</Typography>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// }

// export default Skills;
   


import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

// Skills Data
const skills = [
  { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
  { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/919/919826.png" },
  { name: "SASS", icon: "https://cdn-icons-png.flaticon.com/512/919/919831.png" },
  { name: "JAVASCRIPT", icon: "https://cdn-icons-png.flaticon.com/512/919/919828.png" },
  { name: "REACT JS", icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
  { name: "GITHUB", icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
  { name: "NODE JS", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
 { name: "JAVA", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
  { name: "SQL", icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
  { name: "BOOTSTRAP", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
  { name: "TYPESCRIPT", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
  { name: "MATERIAL UI", icon: "https://cdn-icons-png.flaticon.com/512/919/919826.png" }, 
  { name: "VUE JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
];

const Skills = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0D0D0D",
        color: "#FFD700",
        textAlign: "center",
        py: 5,
        px: 2,
      }}
    >
      {/* Heading */}
      <Typography variant="h4" fontWeight="bold">
        What I Do
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          color: "#b0b0b0",
          maxWidth: "600px",
          mx: "auto",
          mt: 2,
        }}
      >
       <strong> I am a UI/UX designer and software engineer currently working as a freelancer.</strong>
      </Typography>

      {/* Skills Section */}
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: "#181818",
                color: "white",
                textAlign: "center",
                p: 2,
                borderRadius: 2,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)", backgroundColor: "#222222" },
              }}
            >
              <CardContent>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width="50"
                  height="50"
                  style={{ marginBottom: "10px" }}
                />
                <Typography>{skill.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
