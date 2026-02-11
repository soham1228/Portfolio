import React, { useEffect, useRef } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({
  navItems = [],
  scrollToSection = () => {},
  isMobile = false,
  setMobileOpen = () => {},
}) => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial load animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from(logoRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      }).from(
        buttonsRef.current?.children || [],
        {
          y: -50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        '-=0.6'
      );

      // Navbar background change on scroll
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top -100',
        end: 'bottom top',
        onEnter: () => {
          gsap.to(navbarRef.current, {
            background: 'rgba(10, 14, 39, 0.95)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
            duration: 0.3,
          });
        },
        onLeaveBack: () => {
          gsap.to(navbarRef.current, {
            background: 'rgba(10, 14, 39, 0.9)',
            boxShadow: 'none',
            duration: 0.3,
          });
        },
      });
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  return (
    <AppBar 
      ref={navbarRef}
      position="fixed" 
      sx={{ 
        background: 'rgba(10, 14, 39, 0.9)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
      }}
    >
      <Toolbar>
        <Typography 
          ref={logoRef}
          variant="h6" 
          sx={{ 
            flexGrow: 1, 
            fontFamily: '"Orbitron", sans-serif',
            background: 'linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            cursor: 'pointer',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease',
            }
          }}
        >
          Soham Shukla
        </Typography>
        
        {isMobile ? (
          <IconButton 
            color="inherit" 
            onClick={() => setMobileOpen(true)}
            sx={{
              '&:hover': {
                transform: 'rotate(90deg)',
                transition: 'transform 0.3s ease',
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box ref={buttonsRef} sx={{ display: 'flex', gap: 2 }}>
            {navItems?.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                onClick={() => scrollToSection(item.ref)}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    color: '#00d9ff',
                    transform: 'translateY(-2px)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'right',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'left',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;