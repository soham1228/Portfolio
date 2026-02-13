import { createTheme } from '@mui/material/styles';

// Premium AI Engineer Theme
export const premiumTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f0ff', // Electric cyan
      light: '#5ffbff',
      dark: '#00b8cc',
      contrastText: '#000000',
    },
    secondary: {
      main: '#a855f7', // Electric purple
      light: '#c084fc',
      dark: '#7c3aed',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a0e1a',
      paper: 'rgba(15, 23, 42, 0.7)',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
    error: {
      main: '#f43f5e',
    },
    warning: {
      main: '#f59e0b',
    },
    success: {
      main: '#10b981',
    },
    divider: 'rgba(0, 240, 255, 0.1)',
  },
  typography: {
    fontFamily: '"Space Grotesk", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Orbitron", "Space Grotesk", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"Orbitron", "Space Grotesk", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Orbitron", "Space Grotesk", sans-serif',
      fontWeight: 700,
      letterSpacing: '0em',
    },
    h4: {
      fontFamily: '"Orbitron", "Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      letterSpacing: '0.01em',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      letterSpacing: '0.01em',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0, 240, 255, 0.05)',
    '0 4px 8px rgba(0, 240, 255, 0.08)',
    '0 8px 16px rgba(0, 240, 255, 0.12)',
    '0 12px 24px rgba(0, 240, 255, 0.15)',
    '0 16px 32px rgba(0, 240, 255, 0.18)',
    '0 20px 40px rgba(0, 240, 255, 0.20)',
    '0 24px 48px rgba(0, 240, 255, 0.22)',
    '0 0 40px rgba(0, 240, 255, 0.3)',
    '0 0 60px rgba(0, 240, 255, 0.4)',
    '0 0 80px rgba(0, 240, 255, 0.5)',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #0a0e1a 0%, #0f172a 50%, #1e1b4b 100%)',
          backgroundAttachment: 'fixed',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            width: '12px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#0a0e1a',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(180deg, #00f0ff 0%, #a855f7 100%)',
            borderRadius: '6px',
            border: '2px solid #0a0e1a',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'linear-gradient(180deg, #5ffbff 0%, #c084fc 100%)',
          },
          '& ::selection': {
            background: 'rgba(0, 240, 255, 0.3)',
            color: '#ffffff',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transition: 'left 0.5s',
          },
          '&:hover::before': {
            left: '100%',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)',
          boxShadow: '0 4px 20px rgba(0, 240, 255, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5ffbff 0%, #c084fc 100%)',
            boxShadow: '0 8px 30px rgba(0, 240, 255, 0.5)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: '#00f0ff',
          color: '#00f0ff',
          '&:hover': {
            borderWidth: 2,
            borderColor: '#5ffbff',
            background: 'rgba(0, 240, 255, 0.1)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 240, 255, 0.1)',
          borderRadius: 16,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)',
            opacity: 0,
            transition: 'opacity 0.3s',
          },
          '&:hover': {
            transform: 'translateY(-8px)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 240, 255, 0.2), 0 0 40px rgba(168, 85, 247, 0.1)',
            '&::before': {
              opacity: 1,
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            background: 'rgba(15, 23, 42, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: 12,
            transition: 'all 0.3s',
            '& fieldset': {
              borderColor: 'rgba(0, 240, 255, 0.2)',
              borderWidth: 1.5,
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 240, 255, 0.4)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00f0ff',
              borderWidth: 2,
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#cbd5e1',
            '&.Mui-focused': {
              color: '#00f0ff',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'rgba(0, 240, 255, 0.1)',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          color: '#5ffbff',
          fontWeight: 500,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s',
          '&:hover': {
            background: 'rgba(0, 240, 255, 0.2)',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 240, 255, 0.3)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 14, 26, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 240, 255, 0.1)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s',
          '&:hover': {
            background: 'rgba(0, 240, 255, 0.1)',
            transform: 'scale(1.1) rotate(5deg)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          background: 'linear-gradient(135deg, #ffffff 0%, #00f0ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
        h2: {
          background: 'linear-gradient(135deg, #ffffff 0%, #00f0ff 50%, #a855f7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
      },
    },
  },
});

// Export helper functions for common styles
export const glassEffect = {
  background: 'rgba(15, 23, 42, 0.6)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 240, 255, 0.1)',
  borderRadius: '16px',
};

export const glowEffect = {
  boxShadow: '0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(168, 85, 247, 0.1)',
};

export const gradientText = {
  background: 'linear-gradient(135deg, #ffffff 0%, #00f0ff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

export const neonBorder = {
  border: '1px solid rgba(0, 240, 255, 0.3)',
  boxShadow: '0 0 10px rgba(0, 240, 255, 0.2)',
};