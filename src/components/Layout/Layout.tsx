// src/components/Layout/Layout.tsx
import React, { useContext, useMemo } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../../styles/theme";
import { NavItem } from "../Navigation/NavItem";
import { NavItem as NavItemType } from "../../types/navigation.types";

const navItems: NavItemType[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Layout() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const navLinks = useMemo(() => 
    navItems.map((item) => (
      <NavItem
        key={item.path}
        item={item}
        isMobile={isMobile}
        isActive={location.pathname === item.path}
      />
    )), [isMobile, location.pathname]);

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
          {navLinks}
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
