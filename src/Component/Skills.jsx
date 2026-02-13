import React, { useRef, useEffect } from "react";
import { Box, Container, Typography, Grid, Card } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFadeInUp, useStaggerChildren } from "../GsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ skillsRef }) => {
  const titleRef = useFadeInUp();
  const skillCardsRef = useStaggerChildren(0.1);
  const progressRefs = useRef([]);

  const skills = [
    { name: "Python Programming", level: 90 },
    { name: "React & React Native", level: 88 },
    { name: "Node.js & APIs", level: 85 },
    { name: "UI/UX Design", level: 87 },
    { name: "Flutter", level: 80 },
  ];

  useEffect(() => {
    progressRefs.current.forEach((bar, index) => {
      if (!bar) return;

      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${skills[index].level}%`,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [skills]);

  return (
    <Box
      ref={skillsRef}
      sx={{
        py: { xs: 8, md: 12 },
        background: "#0a0e27",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          ref={titleRef}
          variant="h2"
          sx={{
            mb: 6,
            textAlign: "center",
            fontFamily: '"Orbitron", sans-serif',
          }}
        >
          Skills & Technologies
        </Typography>

        <Grid container spacing={4} ref={skillCardsRef}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ p: 3, background: "#11142c" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                  <Typography variant="h6">{skill.name}</Typography>
                  <Typography sx={{ color: "#00f0ff" }}>
                    {skill.level}%
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    height: 10,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 5,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    ref={(el) => (progressRefs.current[index] = el)}
                    sx={{
                      height: "100%",
                      width: "0%",
                      background:
                        "linear-gradient(90deg, #00f0ff 0%, #a855f7 100%)",
                      borderRadius: 5,
                      boxShadow: "0 0 20px rgba(0,240,255,0.5)",
                    }}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
