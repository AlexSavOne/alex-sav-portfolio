// src/components/Layout/Layout.tsx
import React, { useContext, useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import { Outlet, useLocation, Link as RouterLink } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { ColorModeContext } from "../../styles/theme";
import { NavItem } from "../Navigation/NavItem";
import { NavItem as NavItemType } from "../../types/navigation.types";

const navItems: NavItemType[] = [
  { label: "Главная", path: "" },
  { label: "Обо мне", path: "about" },
  { label: "Проекты", path: "projects" },
  { label: "Контакты", path: "contact" },
];

export default function Layout() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = useMemo(() => 
    navItems.map((item) => (
      <NavItem
        key={item.path}
        item={item}
        isMobile={isMobile}
        isActive={location.pathname === item.path}
      />
    )), [isMobile, location.pathname]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.path} 
            component={RouterLink} 
            to={item.path}
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              backgroundColor: location.pathname === item.path ? 'action.selected' : 'transparent',
              py: 2,
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            <ListItemText 
              primary={item.label} 
              primaryTypographyProps={{
                fontSize: { xs: '1.1rem', sm: '1.2rem' },
                fontWeight: location.pathname === item.path ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <AppBar position="sticky" elevation={1}>
        <Container maxWidth="xl">
          <Toolbar 
            sx={{ 
              justifyContent: 'space-between',
              px: { xs: 1, sm: 2 },
              py: { xs: 1, sm: 1.5 },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 1.5 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              
              <Typography
                variant="h6"
                noWrap
                component={RouterLink}
                to=""
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: { xs: '.05rem', sm: '.1rem', md: '.3rem' },
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' },
                }}
              >
            alex-sav-portfolio
          </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: { sm: 1, md: 2 },
              }}>
                {navLinks}
              </Box>
            )}

          <IconButton
            onClick={colorMode.toggleColorMode}
            aria-label="Переключить тему"
              size={isMobile ? "small" : "medium"}
          >
            {theme.palette.mode === "dark" ? (
                <Brightness7Icon fontSize={isMobile ? "small" : "medium"} />
            ) : (
                <Brightness4Icon fontSize={isMobile ? "small" : "medium"} />
            )}
          </IconButton>
        </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: { xs: '100%', sm: 240 },
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box 
        component="main" 
        sx={{ 
          flex: 1,
          display: "flex",
          flexDirection: "column",
          width: '100%',
        }}
      >
        <Container 
          maxWidth="xl" 
          sx={{ 
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 2, sm: 3, md: 4 },
            height: '100%',
        }}
      >
        <Outlet />
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: { xs: 2, sm: 3 },
          px: { xs: 2, sm: 3 },
          backgroundColor: "background.paper",
          borderTop: 1,
          borderColor: "divider",
          textAlign: 'center',
        }}
      >
        <Container maxWidth="xl">
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
            }}
          >
          © {new Date().getFullYear()} alex-sav-portfolio
        </Typography>
        </Container>
      </Box>
    </Box>
  );
}
