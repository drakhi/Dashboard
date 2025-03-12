

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
