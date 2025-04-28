// src/styles/theme.ts
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import React from "react";

const getDesignTokens = (mode: "light" | "dark"): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#1976d2" },
          secondary: { main: "#9c27b0" },
          background: { default: grey[100] },
        }
      : {
          primary: { main: "#90caf9" },
          secondary: { main: "#f48fb1" },
          background: { default: grey[900], paper: grey[800] },
        }),
  },
  typography: { fontFamily: "Roboto, sans-serif" },
});

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function theme(mode: "light" | "dark") {
  return createTheme(getDesignTokens(mode));
}
