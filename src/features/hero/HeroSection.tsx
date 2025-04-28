// src/features/hero/HeroSection.tsx
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Icon } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  buttonIcon?: string;
}

export default function HeroSection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  buttonIcon,
}: HeroSectionProps) {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 10,
        px: 2,
        backgroundColor: "background.default",
        borderRadius: 2,
        boxShadow: 3,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...(backgroundImage && { backgroundImage: `url(${backgroundImage})` }),
      }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom fontWeight="bold">
          {title}
        </Typography>
      </motion.div>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        {subtitle}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={buttonLink}
        startIcon={buttonIcon ? <Icon>{buttonIcon}</Icon> : null}
        sx={{
          mt: 4,
          textTransform: "none",
          boxShadow: 2,
          "&:hover": { boxShadow: 6 },
        }}
        aria-label={buttonText}
      >
        {buttonText}
      </Button>
    </Box>
  );
}
