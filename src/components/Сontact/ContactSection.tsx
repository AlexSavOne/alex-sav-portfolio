// src/components/Сontact/ContactSection.tsx

import React from "react";
import { Box, Typography, Link, Button } from "@mui/material";

export default function ContactSection() {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
        backgroundColor: "background.default",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Контакты
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Вы можете связаться со мной через следующие каналы:
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>Email:</strong>{" "}
          <Link
            href="mailto:alexsavone@yandex.ru"
            color="primary"
            sx={{ textDecoration: "none" }}
          >
            alexsavone@yandex.ru
          </Link>
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>Telegram:</strong>{" "}
          <Link
            href="https://t.me/alex_sav_one"
            color="primary"
            sx={{ textDecoration: "none" }}
          >
            @alex_sav_one
          </Link>
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{
          mt: 4,
          textTransform: "none",
          boxShadow: 2,
          "&:hover": { boxShadow: 6 },
        }}
        href="mailto:alexsavone@yandex.ru"
      >
        Написать мне
      </Button>
    </Box>
  );
}
