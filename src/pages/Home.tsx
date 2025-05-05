// src/pages/Home.tsx
import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "../features/hero/HeroSection";
import { containerStyles } from "../styles/commonStyles";

export default function Home() {
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
        <HeroSection
          title="Привет, я Александр 👋"
          subtitle="Frontend-разработчик"
          buttonText="Посмотреть проекты"
          buttonLink="/projects"
        />
      </Container>
    </Box>
  );
}
