// src/main.tsx
import React, { StrictMode, useState, useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import theme, { ColorModeContext } from "./styles/theme";
import NeonCursor from "./components/NeonCursor/NeonCursor"; // ← импорт
import './index.css';


const AppEntry = () => {
  const [mode, setMode] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const muiTheme = useMemo(() => theme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {/* Неоновый курсор поверх всего UI */}
        <NeonCursor />
        {/* Сам роутер с вашими страницами */}
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppEntry />
  </StrictMode>
);
