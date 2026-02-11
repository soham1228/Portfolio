import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const About = ({ aboutRef }) => {
  const achievements = [
    '🏆 2x Gold Medalist in College Science Fest',
    '🚀 Google x Nudge Hackathon Pre-Finals',
    '💡 AI Voice Assistant in Production',
    '🎨 Active E-commerce Materials',
  ];

  return (
    <Box ref={aboutRef} sx={{ py: 12, background: '#1a1f3a' }}>
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
          About Me
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', p: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ color: '#00d9ff', mb: 2 }}>
                  Who I Am
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#94a3b8', lineHeight: 1.8 }}>
                  A passionate Software Developer and Creative Technologist from Vadodara, Gujarat. 
                  I transform ideas into production-ready applications.
                </Typography>
                <Typography variant="body1" sx={{ color: '#94a3b8', lineHeight: 1.8 }}>
                  Currently pursuing B.Tech in Computer Science from Neotech Institute of Technology (GTU), 
                  with hands-on experience in AI automation, full-stack development, and UI/UX design.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', p: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ color: '#00d9ff', mb: 2 }}>
                  🏆 Achievements
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {achievements.map((item, index) => (
                    <Typography key={index} variant="body1" sx={{ color: '#94a3b8' }}>
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