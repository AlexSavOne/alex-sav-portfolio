// src/features/hero/HeroSection.tsx
import React from "react";
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
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: "background.default",
        borderRadius: { xs: 1, sm: 2 },
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
        <Typography 
          variant="h2" 
          gutterBottom 
          fontWeight="bold"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
            lineHeight: { xs: 1.2, sm: 1.3 },
            mb: { xs: 1, sm: 2 },
          }}
        >
          {title}
        </Typography>
      </motion.div>
      <Typography 
        variant="h5" 
        color="text.secondary" 
        gutterBottom
        sx={{
          fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
          mb: { xs: 2, sm: 3 },
          px: { xs: 1, sm: 2 },
        }}
      >
        {subtitle}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={buttonLink}
        startIcon={buttonIcon ? <Icon>{buttonIcon}</Icon> : null}
        sx={{
          mt: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 3 },
          py: { xs: 1, sm: 1.5 },
          fontSize: { xs: '1rem', sm: '1.1rem' },
          textTransform: "none",
          borderRadius: 2,
        }}
        aria-label={buttonText}
      >
        {buttonText}
      </Button>
    </Box>
  );
}
