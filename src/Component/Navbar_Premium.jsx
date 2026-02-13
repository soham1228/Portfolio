import React, { useEffect, useRef, useState } from 'react';
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
  const navLinksRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Navbar entrance animation
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(
      logoRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.2 }
    );

    if (navLinksRef.current && navLinksRef.current.children.length > 0) {
      tl.fromTo(
        Array.from(navLinksRef.current.children),
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        '-=0.6'
      );
    }

    // Scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar 
      ref={navbarRef}
      position="fixed" 
      sx={{ 
        background: scrolled 
          ? 'rgba(10, 14, 26, 0.95)' 
          : 'rgba(10, 14, 26, 0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled 
          ? '1px solid rgba(0, 240, 255, 0.2)' 
          : '1px solid rgba(0, 240, 255, 0.1)',
        boxShadow: scrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.6)' 
          : '0 4px 24px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Toolbar sx={{ minHeight: { xs: 64, sm: 70 } }}>
        <Typography 
          ref={logoRef}
          variant="h6" 
          sx={{ 
            flexGrow: 1, 
            fontFamily: '"Orbitron", sans-serif',
            fontWeight: 800,
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
            background: 'linear-gradient(135deg, #ffffff 0%, #00f0ff 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer',
            position: 'relative',
            letterSpacing: '0.05em',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -4,
              left: 0,
              width: '0%',
              height: '2px',
              background: 'linear-gradient(90deg, #00f0ff, #a855f7)',
              transition: 'width 0.4s ease',
            },
            '&:hover::after': {
              width: '100%',
            },
            '&:hover': {
              textShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
            },
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Soham Shukla
        </Typography>
        
        {isMobile ? (
          <IconButton 
            color="inherit" 
            onClick={() => setMobileOpen(true)}
            sx={{
              color: '#00f0ff',
              '&:hover': {
                background: 'rgba(0, 240, 255, 0.1)',
                transform: 'rotate(90deg) scale(1.1)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box ref={navLinksRef} sx={{ display: 'flex', gap: 1 }}>
            {navItems?.map((item, index) => (
              <Button
                key={item.label}
                color="inherit"
                onClick={() => scrollToSection(item.ref)}
                sx={{
                  color: '#cbd5e1',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '8px 20px',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: '0%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #00f0ff, #a855f7)',
                    transform: 'translateX(-50%)',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover': {
                    color: '#00f0ff',
                    background: 'rgba(0, 240, 255, 0.05)',
                    transform: 'translateY(-2px)',
                    '&::before': {
                      width: '80%',
                    },
                  },
                  '&:active': {
                    transform: 'translateY(0)',
                  },
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