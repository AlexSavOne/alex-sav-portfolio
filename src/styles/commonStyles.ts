// src\styles\commonStyles.ts

import { SxProps, Theme } from "@mui/material";

export const containerStyles: SxProps<Theme> = {
  py: { xs: 4, sm: 6, md: 8 },
  px: { xs: 2, sm: 3, md: 4 },
  maxWidth: "lg",
};

export const sectionStyles: SxProps<Theme> = {
  mb: { xs: 4, sm: 6, md: 8 },
};

export const cardStyles: SxProps<Theme> = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: (theme) => theme.palette.mode === "light" 
      ? "0 12px 24px rgba(0,0,0,0.1)"
      : "0 12px 24px rgba(0,0,0,0.4)",
  },
};

export const cardMediaStyles: SxProps<Theme> = {
  position: "relative",
  height: { xs: 200, sm: 240, md: 280 },
  overflow: "hidden",
  "& img": {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    transition: "transform 0.3s ease-in-out",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  },
  "&:hover::after": {
    opacity: 1,
  },
};

export const cardContentStyles: SxProps<Theme> = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  p: { xs: 2, sm: 2.5, md: 3 },
  gap: 2,
};

export const cardTitleStyles: SxProps<Theme> = {
  fontSize: { xs: "1.25rem", sm: "1.5rem" },
  fontWeight: 600,
  lineHeight: 1.3,
  mb: 1,
};

export const cardDescriptionStyles: SxProps<Theme> = {
  fontSize: { xs: "0.875rem", sm: "1rem" },
  lineHeight: 1.6,
  color: "text.secondary",
  mb: 2,
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

export const buttonStyles: SxProps<Theme> = {
  mt: "auto",
  alignSelf: "flex-start",
  px: 3,
  py: 1,
  borderRadius: 2,
  textTransform: "none",
  fontWeight: 500,
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
  },
}; 
