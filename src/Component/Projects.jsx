import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';

const Projects = ({ projectsRef }) => {
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

  return (
    <Box ref={projectsRef} sx={{ py: 12, background: '#0a0e27' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={{ 
            mb: 6, 
            textAlign: 'center', 
            fontSize: { xs: '2rem', md: '3rem' },
            fontFamily: '"Orbitron", sans-serif'
          }}
        >
          Featured Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  }
                }}
              >
                <CardMedia 
                  component="img" 
                  height="200" 
                  image={project.image} 
                  alt={project.title} 
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2, flexGrow: 1 }}>
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
                          color: '#4dffff' 
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