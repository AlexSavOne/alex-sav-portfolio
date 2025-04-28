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
};

export const cardMediaStyles: SxProps<Theme> = {
  pt: "56.25%", // 16:9 aspect ratio
  position: "relative",
};

export const cardContentStyles: SxProps<Theme> = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const buttonStyles: SxProps<Theme> = {
  mt: 2,
  alignSelf: "flex-start",
}; 
