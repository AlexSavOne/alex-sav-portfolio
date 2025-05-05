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
import { Outlet, useLocation, Link as RouterLink } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../../styles/theme";
import { NavItem } from "../Navigation/NavItem";
import { NavItem as NavItemType } from "../../types/navigation.types";

const navItems: NavItemType[] = [
  { label: "Главная", path: "/" },
  { label: "Обо мне", path: "/about" },
  { label: "Проекты", path: "/projects" },
  { label: "Контакты", path: "/contact" },
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
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            alex-sav-portfolio
          </Typography>

          <Box sx={{ 
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', 
            alignItems: 'center',
            gap: 2,
          }}>
            {navLinks}
            <IconButton
              onClick={colorMode.toggleColorMode}
              aria-label="Переключить тему"
              sx={{ ml: 1 }}
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
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
