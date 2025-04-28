// src/styles/theme.ts
import { createTheme, ThemeOptions, responsiveFontSizes } from "@mui/material/styles";
import { grey, blue, purple } from "@mui/material/colors";
import React from "react";
import { ColorModeContextType } from "../types/theme.types";

const getDesignTokens = (mode: "light" | "dark"): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? blue[700] : blue[200],
      light: mode === "light" ? blue[400] : blue[50],
      dark: mode === "light" ? blue[900] : blue[400],
    },
    secondary: {
      main: mode === "light" ? purple[500] : purple[200],
      light: mode === "light" ? purple[300] : purple[50],
      dark: mode === "light" ? purple[700] : purple[400],
    },
    background: {
      default: mode === "light" ? grey[50] : grey[900],
      paper: mode === "light" ? "#fff" : grey[800],
    },
    text: {
      primary: mode === "light" ? grey[900] : grey[100],
      secondary: mode === "light" ? grey[700] : grey[300],
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "8px 16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: mode === "light" 
              ? "0 6px 20px rgba(0,0,0,0.1)"
              : "0 6px 20px rgba(0,0,0,0.4)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === "light" ? "#fff" : grey[900],
          color: mode === "light" ? grey[900] : grey[100],
          boxShadow: mode === "light" 
            ? "0 1px 3px rgba(0,0,0,0.12)"
            : "0 1px 3px rgba(0,0,0,0.4)",
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
