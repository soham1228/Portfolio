import React from 'react';
import { Box, Container, Typography, Card, TextField, Button, IconButton } from '@mui/material';
import { Send as SendIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Twitter as TwitterIcon, Email as EmailIcon } from '@mui/icons-material';

const Contact = ({ contactRef }) => {
  return (
    <Box ref={contactRef} sx={{ py: 12, background: '#0a0e27' }}>
      <Container maxWidth="md">
        <Typography 
          variant="h2" 
          sx={{ 
            mb: 6, 
            textAlign: 'center', 
            fontSize: { xs: '2rem', md: '3rem' },
            fontFamily: '"Orbitron", sans-serif'
          }}
        >
          Get In Touch
        </Typography>

        <Card sx={{ p: 4 }}>
          <Typography variant="body1" sx={{ color: '#94a3b8', mb: 4, textAlign: 'center' }}>
            Have a project in mind? Let's collaborate!
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#00d9ff' }}>
                📧 Email
              </Typography>
              <Typography variant="body1" sx={{ color: '#94a3b8' }}>
                shuklasoham2812@gmail.com
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#00d9ff' }}>
                📱 Phone
              </Typography>
              <Typography variant="body1" sx={{ color: '#94a3b8' }}>
                +91 7990741519
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#00d9ff' }}>
                📍 Location
              </Typography>
              <Typography variant="body1" sx={{ color: '#94a3b8' }}>
                Vadodara, Gujarat, India
              </Typography>
            </Box>
          </Box>

          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField fullWidth label="Name" variant="outlined" required />
            <TextField fullWidth label="Email" type="email" variant="outlined" required />
            <TextField fullWidth label="Subject" variant="outlined" required />
            <TextField fullWidth label="Message" multiline rows={6} variant="outlined" required />
            <Button
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              sx={{
                py: 1.5,
                background: 'linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease',
                }
              }}
            >
              Send Message
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            <IconButton 
              href="https://github.com/sohamshukla" 
              target="_blank" 
              sx={{ 
                color: '#94a3b8',
                '&:hover': { color: '#00d9ff' }
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton 
              href="https://linkedin.com/in/sohamshukla" 
              target="_blank" 
              sx={{ 
                color: '#94a3b8',
                '&:hover': { color: '#00d9ff' }
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton 
              href="https://twitter.com/sohamshukla" 
              target="_blank" 
              sx={{ 
                color: '#94a3b8',
                '&:hover': { color: '#00d9ff' }
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton 
              href="mailto:shuklasoham2812@gmail.com" 
              sx={{ 
                color: '#94a3b8',
                '&:hover': { color: '#00d9ff' }
              }}
            >
              <EmailIcon />
            </IconButton>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default Contact;