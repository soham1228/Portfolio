import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ navItems, scrollToSection, isMobile, setMobileOpen }) => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(10, 14, 39, 0.9)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: '"Orbitron", sans-serif' }}>
          Soham Shukla
        </Typography>
        
        {isMobile ? (
          <IconButton color="inherit" onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                onClick={() => scrollToSection(item.ref)}
                sx={{
                  '&:hover': {
                    color: '#00d9ff',
                  }
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