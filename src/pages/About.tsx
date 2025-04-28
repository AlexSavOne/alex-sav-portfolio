// src/pages/About.tsx
import React from "react";
import { Box, Container } from "@mui/material";
import AboutSection from "../features/about/AboutSection";
import { containerStyles } from "../styles/commonStyles";

export default function About() {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container sx={containerStyles}>
        <AboutSection />
      </Container>
    </Box>
  );
}
