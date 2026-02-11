import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Skills = ({ skillsRef }) => {
  const skills = [
    { name: 'Python Programming', level: 90 },
    { name: 'React & React Native', level: 88 },
    { name: 'Node.js & APIs', level: 85 },
    { name: 'UI/UX Design', level: 87 },
    { name: 'WordPress & PHP', level: 82 },
    { name: 'Flutter', level: 80 },
    { name: 'AI & NLP', level: 85 },
    { name: 'SQL & Data Handling', level: 83 },
  ];

  return (
    <Box ref={skillsRef} sx={{ py: 12, background: '#1a1f3a' }}>
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
          Skills & Technologies
        </Typography>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {skill.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#00d9ff', fontWeight: 'bold' }}>
                    {skill.level}%
                  </Typography>
                </Box>
                <Box sx={{ 
                  position: 'relative', 
                  height: 8, 
                  bgcolor: 'rgba(99, 102, 241, 0.1)', 
                  borderRadius: 4 
                }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: `${skill.level}%`,
                      background: 'linear-gradient(90deg, #00d9ff 0%, #6366f1 100%)',
                      borderRadius: 4,
                      transition: 'width 1.5s ease-out'
                    }}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Tech Stack */}
        <Box sx={{ mt: 6 }}>
          <Card sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#00d9ff', mb: 3 }}>
              Tech Stack
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Languages & Frameworks
                </Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Python • JavaScript • ReactJS • React Native • Flutter • Node.js • PHP • HTML & CSS • SQL
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Tools & Technologies
                </Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Git • GitHub • Postman • Figma • Android Studio • Appium • Selenium • MUI • Flask
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Design Tools
                </Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Canva • Adobe Photoshop • Photopea • Midjourney • Figma
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;