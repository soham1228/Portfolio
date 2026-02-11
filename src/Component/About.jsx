import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = ({ aboutRef }) => {
  const titleRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const achievementsRef = useRef([]);

  const achievements = [
    '🏆 2x Gold Medalist in College Science Fest',
    '🚀 Google x Nudge Hackathon Pre-Finals',
    '💡 AI Voice Assistant in Production',
    '🎨 Active E-commerce Materials',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Left card animation
      gsap.from(leftCardRef.current, {
        scrollTrigger: {
          trigger: leftCardRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Right card animation
      gsap.from(rightCardRef.current, {
        scrollTrigger: {
          trigger: rightCardRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Achievement items stagger animation
      gsap.from(achievementsRef.current, {
        scrollTrigger: {
          trigger: rightCardRef.current,
          start: 'top 70%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // Parallax effect on scroll
      gsap.to(leftCardRef.current, {
        scrollTrigger: {
          trigger: aboutRef?.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -30,
      });

      gsap.to(rightCardRef.current, {
        scrollTrigger: {
          trigger: aboutRef?.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: 30,
      });
    }, aboutRef);

    return () => ctx.revert();
  }, [aboutRef]);

  return (
    <Box 
      ref={aboutRef} 
      sx={{ 
        py: 12, 
        background: '#1a1f3a',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          ref={titleRef}
          variant="h2" 
          sx={{ 
            mb: 6, 
            textAlign: 'center', 
            fontSize: { xs: '2rem', md: '3rem' },
            fontFamily: '"Orbitron", sans-serif',
            background: 'linear-gradient(135deg, #fff 0%, #00d9ff 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
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
                p: 3,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 60px rgba(0, 217, 255, 0.2)',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                },
              }}
            >
              <CardContent>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    color: '#00d9ff', 
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  Who I Am
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    color: '#94a3b8', 
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                  }}
                >
                  A passionate Software Developer and Creative Technologist from Vadodara, Gujarat. 
                  I transform ideas into production-ready applications.
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#94a3b8', 
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
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
                p: 3,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 60px rgba(99, 102, 241, 0.2)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                },
              }}
            >
              <CardContent>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    color: '#00d9ff', 
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  🏆 Achievements
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {achievements.map((item, index) => (
                    <Typography 
                      key={index} 
                      ref={(el) => (achievementsRef.current[index] = el)}
                      variant="body1" 
                      sx={{ 
                        color: '#94a3b8',
                        fontSize: '1.05rem',
                        padding: '12px',
                        borderRadius: '8px',
                        background: 'rgba(0, 217, 255, 0.05)',
                        border: '1px solid rgba(0, 217, 255, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(0, 217, 255, 0.1)',
                          transform: 'translateX(10px)',
                          borderLeft: '3px solid #00d9ff',
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