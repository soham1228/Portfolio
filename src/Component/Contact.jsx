import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Card, TextField, Button, IconButton } from '@mui/material';
import { Send as SendIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Twitter as TwitterIcon, Email as EmailIcon } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ contactRef }) => {
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const infoItemsRef = useRef([]);
  const formFieldsRef = useRef([]);
  const socialIconsRef = useRef([]);

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

      // Card animation
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.2)',
      });

      // Info items stagger
      gsap.from(infoItemsRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 75%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // Form fields stagger
      gsap.from(formFieldsRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 70%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });

      // Social icons animation
      gsap.from(socialIconsRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 65%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, contactRef);

    return () => ctx.revert();
  }, [contactRef]);

  return (
    <Box 
      ref={contactRef} 
      sx={{ 
        py: 12, 
        background: '#0a0e27',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md">
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
          Get In Touch
        </Typography>

        <Card 
          ref={cardRef}
          sx={{ 
            p: { xs: 3, sm: 4 },
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#94a3b8', 
              mb: 4, 
              textAlign: 'center',
              fontSize: '1.1rem',
            }}
          >
            Have a project in mind? Let's collaborate!
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
            {[
              { icon: '📧', title: 'Email', content: 'shuklasoham2812@gmail.com' },
              { icon: '📱', title: 'Phone', content: '+91 7990741519' },
              { icon: '📍', title: 'Location', content: 'Vadodara, Gujarat, India' },
            ].map((item, index) => (
              <Box 
                key={index}
                ref={(el) => (infoItemsRef.current[index] = el)}
                sx={{ 
                  textAlign: 'center',
                  p: 2,
                  borderRadius: '12px',
                  background: 'rgba(0, 217, 255, 0.05)',
                  border: '1px solid rgba(0, 217, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(0, 217, 255, 0.1)',
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0, 217, 255, 0.2)',
                  },
                }}
              >
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    color: '#00d9ff',
                    fontWeight: 600,
                  }}
                >
                  {item.icon} {item.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ color: '#94a3b8' }}
                >
                  {item.content}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {[
              { label: 'Name', type: 'text' },
              { label: 'Email', type: 'email' },
              { label: 'Subject', type: 'text' },
              { label: 'Message', type: 'text', multiline: true, rows: 6 },
            ].map((field, index) => (
              <TextField
                key={index}
                ref={(el) => (formFieldsRef.current[index] = el)}
                fullWidth
                label={field.label}
                type={field.type}
                multiline={field.multiline}
                rows={field.rows}
                variant="outlined"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(0, 217, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00d9ff',
                      borderWidth: '2px',
                    },
                    '&.Mui-focused': {
                      background: 'rgba(0, 217, 255, 0.05)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#94a3b8',
                    '&.Mui-focused': {
                      color: '#00d9ff',
                    },
                  },
                }}
              />
            ))}
            
            <Button
              ref={(el) => (formFieldsRef.current[4] = el)}
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              sx={{
                py: 1.5,
                background: 'linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 4px 20px rgba(0, 217, 255, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 30px rgba(0, 217, 255, 0.4)',
                },
                '&:active': {
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Send Message
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            {[
              { Icon: GitHubIcon, href: 'https://github.com/sohamshukla' },
              { Icon: LinkedInIcon, href: 'https://linkedin.com/in/sohamshukla' },
              { Icon: TwitterIcon, href: 'https://twitter.com/sohamshukla' },
              { Icon: EmailIcon, href: 'mailto:shuklasoham2812@gmail.com' },
            ].map((social, index) => {
              const { Icon, href } = social;
              return (
                <IconButton
                  key={index}
                  ref={(el) => (socialIconsRef.current[index] = el)}
                  href={href}
                  target={href.includes('mailto') ? undefined : '_blank'}
                  sx={{
                    color: '#94a3b8',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    width: '50px',
                    height: '50px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#00d9ff',
                      background: 'rgba(0, 217, 255, 0.1)',
                      border: '1px solid rgba(0, 217, 255, 0.3)',
                      transform: 'translateY(-5px) rotate(10deg)',
                      boxShadow: '0 10px 25px rgba(0, 217, 255, 0.3)',
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              );
            })}
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default Contact;