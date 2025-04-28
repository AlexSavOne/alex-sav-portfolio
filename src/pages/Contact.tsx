// src/pages/Contact.tsx

import React from "react";
import { Box, Container } from "@mui/material";
import ContactSection from "../features/contact/ContactSection";
import { containerStyles } from "../styles/commonStyles";

export default function Contact() {
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
        <ContactSection />
      </Container>
    </Box>
  );
}
