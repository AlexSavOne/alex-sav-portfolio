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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        height: "100%",
      }}
    >
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
      <Box 
        component="main" 
        sx={{ 
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Box>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          backgroundColor: "background.paper",
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} alex-sav-portfolio
        </Typography>
      </Box>
    </Box>
  );
}
