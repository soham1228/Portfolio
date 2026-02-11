import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ projectsRef }) => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: 'Voice Assistant with Android Automation',
      description: 'AI-powered voice assistant using Python, Appium, and Flask to automate Android apps.',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop',
      tags: ['Python', 'Appium', 'Flask', 'AI', 'NLP'],
    },
    {
      title: 'AI Hand Gesture Control System',
      description: 'Raspberry Pi prototype using OpenCV. Selected for Google x Nudge Hackathon.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      tags: ['Raspberry Pi', 'OpenCV', 'NumPy', 'AI'],
    },
    {
      title: 'Cross-Platform Connecting Platform',
      description: 'Full-stack platform with React Native mobile and React web apps.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      tags: ['React Native', 'React', 'Node.js', 'API'],
    },
    {
      title: 'TheWallOfDreams E-commerce',
      description: 'WordPress e-commerce platform with promotional banners and SEO.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      tags: ['WordPress', 'E-commerce', 'SEO', 'UI/UX'],
    },
    {
      title: 'Trading App',
      description: 'Trading application with API integration and data management.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      tags: ['API Integration', 'React', 'Analytics'],
    },
    {
      title: 'Management & Analysis Platform',
      description: 'Live management and analysis platform with integrated APIs.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['API', 'Analytics', 'Web Development'],
    },
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

      // Project cards stagger animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
          });

          // Parallax effect for individual cards
          gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
            y: -20,
          });
        }
      });
    }, projectsRef);

    return () => ctx.revert();
  }, [projectsRef]);

  return (
    <Box 
      ref={projectsRef} 
      sx={{ 
        py: 12, 
        background: '#0a0e27',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '30%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.08) 0%, transparent 70%)',
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
            background: 'linear-gradient(135deg, #fff 0%, #6366f1 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
          }}
        >
          Featured Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                ref={(el) => (cardsRef.current[index] = el)}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.5s ease',
                    pointerEvents: 'none',
                  },
                  '&:hover': {
                    transform: 'translateY(-15px) scale(1.02)',
                    boxShadow: '0 25px 70px rgba(0, 217, 255, 0.3)',
                    border: '1px solid rgba(0, 217, 255, 0.4)',
                    '&::before': {
                      opacity: 1,
                    },
                    '& .project-image': {
                      transform: 'scale(1.1)',
                    },
                  }
                }}
              >
                <Box 
                  sx={{ 
                    overflow: 'hidden',
                    height: '200px',
                    position: 'relative',
                  }}
                >
                  <CardMedia 
                    className="project-image"
                    component="img" 
                    height="200" 
                    image={project.image} 
                    alt={project.title}
                    sx={{
                      transition: 'transform 0.5s ease',
                      willChange: 'transform',
                    }}
                  />
                  <Box 
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(10, 14, 39, 0.8) 100%)',
                    }}
                  />
                </Box>
                
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    position: 'relative',
                    zIndex: 1,
                    p: 3,
                  }}
                >
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      mb: 1.5,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#94a3b8', 
                      mb: 2, 
                      flexGrow: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{ 
                          bgcolor: 'rgba(99, 102, 241, 0.2)', 
                          color: '#4dffff',
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                          fontWeight: 500,
                          fontSize: '0.75rem',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(99, 102, 241, 0.3)',
                            transform: 'translateY(-2px)',
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;