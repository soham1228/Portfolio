import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const Hero = ({ heroRef }) => {
  return (
    <Box
      ref={heroRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#0a0e27",
        color: "white",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Orbitron", sans-serif',
            mb: 3,
          }}
        >
          Hi, I'm Soham 👋
        </Typography>

        <Typography variant="h5" sx={{ color: "#94a3b8", mb: 4 }}>
          Full Stack Developer | AI Automation Builder | App Developer
        </Typography>

        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)",
          }}
        >
          View My Work
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
