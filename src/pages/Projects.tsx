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
        minHeight: 0,
        overflow: "auto",
      }}
    >
      <Container 
        sx={{ 
          ...containerStyles,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <ProjectsSection />
      </Container>
    </Box>
  );
}
