// src/pages/Projects.tsx

import React from "react";
import { Box, Container } from "@mui/material";
import ProjectsSection from "../features/projects/ProjectsSection";
import { containerStyles } from "../styles/commonStyles";

export default function Projects() {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        py: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 12, sm: 14, md: 16 }, // Увеличиваем нижний отступ для футера
      }}
    >
      <Container sx={containerStyles}>
        <ProjectsSection />
      </Container>
    </Box>
  );
}
