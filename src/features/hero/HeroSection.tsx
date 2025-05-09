// src/features/hero/HeroSection.tsx
import React from "react";
import { Box, Typography, Button, Icon } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";

// плавное появление
const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  buttonIcon?: string;
}

export default React.memo(function HeroSection({
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
        position: "relative",
        textAlign: "center",
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        borderRadius: { xs: 1, sm: 2 },
        // тёмный градиент от насыщенного синего к фиолетовому
        background: "linear-gradient(135deg,rgb(81, 160, 200) 0%,rgb(51, 66, 163) 100%)",
        color: "#fff",
      }}
    >
      <motion.div {...fadeInUp}>
        <Typography
          variant="h2"
          gutterBottom
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
            lineHeight: 1.2,
            // лёгкая тень для читаемости
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </Typography>
      </motion.div>

      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
          color: "rgba(255,255,255,0.85)",
          mb: { xs: 2, sm: 3 },
          textShadow: "0 1px 3px rgba(0,0,0,0.3)",
        }}
      >
        {subtitle}
      </Typography>

      <motion.div {...fadeInUp} transition={{ duration: 0.7 }}>
        <Button
          variant="contained"
          component={Link}
          to={buttonLink}
          startIcon={buttonIcon ? <Icon>{buttonIcon}</Icon> : undefined}
          aria-label={buttonText}
          sx={{
            mt: { xs: 2, sm: 3, md: 4 },
            px: { xs: 3, sm: 4 },
            py: { xs: 1.25, sm: 1.5 },
            fontSize: { xs: "1rem", sm: "1.1rem" },
            textTransform: "none",
            borderRadius: 3,
            // более яркий контрастный градиент
            background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
            },
            // лёгкий pulse при ожидании
            animation: "pulse 2.5s ease-in-out infinite",
          }}
        >
          {buttonText}
        </Button>
      </motion.div>

      {/* Определяем анимацию pulse прямо в Box */}
      <Box
        component="style"
        children={`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      />
    </Box>
  );
});
