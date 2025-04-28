// src/layout/Layout.tsx
import React, { useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../styles/theme";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Layout() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            alex-sav-portfolio
          </Typography>
          <IconButton
            onClick={colorMode.toggleColorMode}
            aria-label="Переключить тему"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
                color: "inherit",
                marginLeft: isMobile ? 0 : 16,
              })}
            >
              <Button color="inherit">{item.label}</Button>
            </NavLink>
          ))}
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ mt: 2 }}>
        <Outlet />
      </Box>
      <Box component="footer" sx={{ p: 2, textAlign: "center", mt: 4 }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} alex-sav-portfolio
        </Typography>
      </Box>
    </>
  );
}
