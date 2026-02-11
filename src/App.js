import React from "react";
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles } from "@mui/material";
import Portfolio from "./Portfolio";

// Create custom MUI theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00d9ff",
      light: "#4dffff",
      dark: "#00a6cc",
    },
    secondary: {
      main: "#6366f1",
      light: "#8b8dff",
      dark: "#4548be",
    },
    background: {
      default: "#0a0e27",
      paper: "#1a1f3a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#94a3b8",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
      },
    },
  },
});

// Global styles
const globalStyles = {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    margin: 0,
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    overflowX: "hidden",
  },
  "::-webkit-scrollbar": {
    width: "10px",
  },
  "::-webkit-scrollbar-track": {
    background: "#0a0e27",
  },
  "::-webkit-scrollbar-thumb": {
    background: "linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)",
    borderRadius: "5px",
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "linear-gradient(135deg, #00a6cc 0%, #4548be 100%)",
  },
  // Selection color
  "::selection": {
    background: "rgba(0, 217, 255, 0.3)",
    color: "#ffffff",
  },
  "::-moz-selection": {
    background: "rgba(0, 217, 255, 0.3)",
    color: "#ffffff",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;