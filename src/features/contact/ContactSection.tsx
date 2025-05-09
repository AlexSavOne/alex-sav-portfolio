// src/features/contact/ContactSection.tsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Сообщение от ${form.name}`);
    const body = encodeURIComponent(
      `Имя: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:AlexSavOne@yandex.ru?subject=${subject}&body=${body}`;
  };

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
            mb: { xs: 2, sm: 3 },
            textAlign: "center",
          }}
        >
          Связаться со мной
        </Typography>
      </motion.div>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              height: "100%",
              backgroundColor: "background.paper",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              Напишите мне
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Stack spacing={2}>
                <TextField
                  label="Имя"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  label="Сообщение"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  fullWidth
                />

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<EmailIcon />}
                  type="submit"
                  sx={{
                    mt: { xs: 1, sm: 2 },
                    py: { xs: 1, sm: 1.5 },
                    textTransform: "none",
                  }}
                >
                  Отправить через почту
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              height: "100%",
              backgroundColor: "background.paper",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              Контакты
            </Typography>
            <Stack spacing={{ xs: 2, sm: 3 }}>
              <Button
                startIcon={<EmailIcon />}
                href="mailto:AlexSavOne@yandex.ru"
                sx={{
                  justifyContent: "flex-start",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  textTransform: "none",
                }}
              >
                AlexSavOne@yandex.ru
              </Button>
              <Button
                startIcon={<TelegramIcon />}
                href="https://t.me/alex_sav_one"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  justifyContent: "flex-start",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  textTransform: "none",
                }}
              >
                @alex_sav_one
              </Button>
              <Button
                startIcon={<GitHubIcon />}
                href="https://github.com/AlexSavOne"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  justifyContent: "flex-start",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  textTransform: "none",
                }}
              >
                GitHub
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
