// src/features/contact/ContactSection.tsx
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
      }}
    >
      <Typography variant="h4" gutterBottom fontWeight="bold">
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
            underline="none"
          >
            alexsavone@yandex.ru
          </Link>
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>Telegram:</strong>{" "}
          <Link
            href="https://t.me/alex_sav_one"
            color="primary"
            underline="none"
          >
            @alex_sav_one
          </Link>
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        href="mailto:alexsavone@yandex.ru"
        sx={{
          mt: 4,
          textTransform: "none",
        }}
      >
        Написать мне
      </Button>
    </Box>
  );
}
