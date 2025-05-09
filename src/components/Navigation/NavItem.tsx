// src/components/Navigation/NavItem.tsx
import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { NavItemProps } from "../../types/navigation.types";

export const NavItem: React.FC<NavItemProps> = ({
  item,
  isMobile,
  isActive,
}) => {
  return (
    <Button
      component={NavLink}
      to={item.path}
      end={item.path === "/"}
      sx={{
        // Базовые стили
        textTransform: "none",
        fontWeight: isActive ? 600 : 400,
        color: isActive ? "#fff" : "text.primary",
        mx: isMobile ? 0 : 2,
        px: 2,
        py: 1,
        borderRadius: 2,
        position: "relative",
        overflow: "hidden",

        // Более мягкая и медленная анимация
        transition: "all 0.6s ease",
        background: isActive
          ? "linear-gradient(45deg, #ff416c, #ff4b2b)"
          : "transparent",
        backgroundSize: "200% 200%",

        // Неоновое свечение для активного состояния
        boxShadow: isActive
          ? "0 0 8px rgba(255,65,108,0.6), 0 0 16px rgba(255,75,43,0.6)"
          : "none",
        textShadow: isActive ? "0 0 6px rgba(255,255,255,0.8)" : "none",

        "&:hover": {
          color: "#fff",
          background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
          backgroundPosition: "right center",
          transform: "scale(1.02)",
          boxShadow:
            "0 0 8px rgba(255,65,108,0.6), 0 0 16px rgba(255,75,43,0.6)",
        },
      }}
    >
      {item.label}
    </Button>
  );
};
