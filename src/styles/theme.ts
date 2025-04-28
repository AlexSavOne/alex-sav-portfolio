// src/styles/theme.ts
import { createTheme, ThemeOptions, responsiveFontSizes } from "@mui/material/styles";
import { grey, blue, purple } from "@mui/material/colors";
import React from "react";
import { ColorModeContextType } from "../types/theme.types";

// Создаем более мягкую цветовую палитру
const softBlue = {
  50: '#f0f7ff',
  100: '#e0f0ff',
  200: '#c7e3ff',
  300: '#a3d1ff',
  400: '#7ab9ff',
  500: '#4a9eff',
  600: '#2d8aff',
  700: '#1a7aff',
  800: '#0066ff',
  900: '#0052cc',
};

const softPurple = {
  50: '#f5f0ff',
  100: '#e9e0ff',
  200: '#d4c7ff',
  300: '#b8a3ff',
  400: '#9b7aff',
  500: '#7d4aff',
  600: '#6b3aff',
  700: '#5a2aff',
  800: '#4a1aff',
  900: '#3a0aff',
};

const getDesignTokens = (mode: "light" | "dark"): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? softBlue[600] : softBlue[300],
      light: mode === "light" ? softBlue[400] : softBlue[200],
      dark: mode === "light" ? softBlue[800] : softBlue[400],
    },
    secondary: {
      main: mode === "light" ? softPurple[500] : softPurple[300],
      light: mode === "light" ? softPurple[300] : softPurple[200],
      dark: mode === "light" ? softPurple[700] : softPurple[400],
    },
    background: {
      default: mode === "light" ? '#fafafa' : grey[900],
      paper: mode === "light" ? '#ffffff' : grey[800],
    },
    text: {
      primary: mode === "light" ? grey[800] : grey[100],
      secondary: mode === "light" ? grey[600] : grey[300],
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: "-0.01em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.01em",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      letterSpacing: "0.01em",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
      letterSpacing: "0.01em",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "8px 16px",
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: mode === "light" 
              ? "0 8px 24px rgba(0,0,0,0.08)"
              : "0 8px 24px rgba(0,0,0,0.3)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === "light" ? "#fff" : grey[900],
          color: mode === "light" ? grey[800] : grey[100],
          boxShadow: mode === "light" 
            ? "0 1px 3px rgba(0,0,0,0.08)"
            : "0 1px 3px rgba(0,0,0,0.3)",
        },
      },
    },
  },
});

export const ColorModeContext = React.createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

export default function theme(mode: "light" | "dark") {
  return responsiveFontSizes(createTheme(getDesignTokens(mode)));
}
