import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useFadeInUp, useSlideInLeft, useSlideInRight } from '../GsapAnimations';

gsap.registerPlugin(ScrollTrigger);

const About = ({ aboutRef }) => {
  const titleRef = useFadeInUp();
  const leftCardRef = useSlideInLeft();
  const rightCardRef = useSlideInRight();

  const achievements = [
    '🏆 2x Gold Medalist in College Science Fest',
    '🚀 Google x Nudge Hackathon Pre-Finals',
    '💡 AI Voice Assistant in Production',
    '🎨 Active E-commerce Materials',
  ];

  return (
    <Box 
      ref={aboutRef} 
      sx={{ 
        py: { xs: 8, md: 12 },
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          ref={titleRef}
          variant="h2" 
          sx={{ 
            mb: { xs: 4, md: 8 },
            textAlign: 'center', 
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            fontFamily: '"Orbitron", sans-serif',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ffffff 0%, #00f0ff 50%, #a855f7 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 40px rgba(0, 240, 255, 0.3)',
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card 
              ref={leftCardRef}
              sx={{ 
                height: '100%',
                p: { xs: 2, sm: 3 },
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0, 240, 255, 0.1)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                },
                '&:hover': {
                  transform: 'translateY(-10px)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  boxShadow: '0 20px 60px rgba(0, 240, 255, 0.2)',
                  '&::before': {
                    opacity: 1,
                  },
                },
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <CardContent>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    color: '#00f0ff',
                    mb: 3,
                    fontWeight: 700,
                    fontFamily: '"Space Grotesk", sans-serif',
                  }}
                >
                  Who I Am
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    color: '#cbd5e1',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  }}
                >
                  A passionate Software Developer and Creative Technologist from Vadodara, Gujarat. 
                  I transform ideas into production-ready applications.
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#cbd5e1',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  }}
                >
                  Currently pursuing B.Tech in Computer Science from Neotech Institute of Technology (GTU), 
                  with hands-on experience in AI automation, full-stack development, and UI/UX design.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card 
              ref={rightCardRef}
              sx={{ 
                height: '100%',
                p: { xs: 2, sm: 3 },
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(168, 85, 247, 0.1)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #a855f7, transparent)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                },
                '&:hover': {
                  transform: 'translateY(-10px)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  boxShadow: '0 20px 60px rgba(168, 85, 247, 0.2)',
                  '&::before': {
                    opacity: 1,
                  },
                },
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <CardContent>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    color: '#a855f7',
                    mb: 3,
                    fontWeight: 700,
                    fontFamily: '"Space Grotesk", sans-serif',
                  }}
                >
                  🏆 Achievements
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {achievements.map((item, index) => (
                    <Typography 
                      key={index}
                      variant="body1" 
                      sx={{ 
                        color: '#cbd5e1',
                        fontSize: { xs: '0.95rem', sm: '1.05rem' },
                        padding: '14px 18px',
                        borderRadius: '12px',
                        background: 'rgba(168, 85, 247, 0.05)',
                        border: '1px solid rgba(168, 85, 247, 0.1)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          background: 'rgba(168, 85, 247, 0.15)',
                          transform: 'translateX(10px)',
                          borderLeft: '3px solid #a855f7',
                          boxShadow: '0 4px 12px rgba(168, 85, 247, 0.2)',
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;