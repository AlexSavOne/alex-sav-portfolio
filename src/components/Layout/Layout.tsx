import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            alex-sav-portfolio
          </Typography>
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
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
      <Box component="footer" sx={{ p: 2, textAlign: "center", mt: 4 }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} alex-sav-portfolio
        </Typography>
      </Box>
    </>
  );
}
