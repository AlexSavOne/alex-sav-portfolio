// src\components\HeroSection\HeroSection.tsx

import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 10,
        px: 2,
        backgroundColor: "background.default",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
        Привет, я Александр 👋
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Frontend-разработчик. Создаю красивые и функциональные веб-интерфейсы.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/projects"
        sx={{
          mt: 4,
          textTransform: "none",
          boxShadow: 2,
          "&:hover": { boxShadow: 6 },
        }}
      >
        Посмотреть проекты
      </Button>
    </Box>
  );
}
