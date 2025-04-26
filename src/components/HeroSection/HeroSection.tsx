// src\components\HeroSection\HeroSection.tsx

import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icon } from "@mui/material";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  buttonIcon?: string;
}

const styles = {
  container: {
    textAlign: "center",
    py: 10,
    px: 2,
    backgroundColor: "background.default",
    borderRadius: 2,
    boxShadow: 3,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  title: {
    fontWeight: "bold",
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  },
  titleVisible: {
    opacity: 1,
    transform: "translateY(0)",
  },
  button: {
    mt: 4,
    textTransform: "none",
    boxShadow: 2,
    "&:hover": { boxShadow: 6 },
  },
};

export default function HeroSection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  buttonIcon,
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        ...styles.container,
        ...(backgroundImage && { backgroundImage: `url(${backgroundImage})` }),
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          ...styles.title,
          ...(isVisible && styles.titleVisible),
        }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        {subtitle}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={buttonLink}
        sx={styles.button}
        startIcon={buttonIcon ? <Icon>{buttonIcon}</Icon> : null}
      >
        {buttonText}
      </Button>
    </Box>
  );
}
