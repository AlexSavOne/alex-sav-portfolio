// src/features/contact/ContactSection.tsx
import React from "react";
import { Box, Typography, Grid, Paper, Button, Stack, Alert } from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from "@mui/icons-material/GitHub";
import ConstructionIcon from '@mui/icons-material/Construction';

export default function ContactSection() {
  const mailtoLink = `mailto:AlexSavOne@yandex.ru?subject=Сообщение с портфолио&body=Здравствуйте!%0A%0AЯ хотел(а) бы связаться с вами.%0A%0AС уважением,`;

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
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            mb: { xs: 2, sm: 3 },
            textAlign: 'center',
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
              height: '100%',
              backgroundColor: 'background.paper',
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              Напишите мне
            </Typography>
            <Stack spacing={{ xs: 2, sm: 2.5 }}>
              <Alert 
                severity="info" 
                icon={<ConstructionIcon />}
                sx={{ mb: 2 }}
              >
                Функционал отправки сообщений находится в разработке. Пожалуйста, используйте прямые контакты справа.
              </Alert>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                В ближайшее время здесь появится форма для отправки сообщений. А пока вы можете связаться со мной через контакты справа.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<EmailIcon />}
                href={mailtoLink}
                sx={{
                  mt: { xs: 1, sm: 2 },
                  py: { xs: 1, sm: 1.5 },
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                }}
              >
                Написать на почту
              </Button>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              height: '100%',
              backgroundColor: 'background.paper',
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              Контакты
            </Typography>
            <Stack spacing={{ xs: 2, sm: 3 }}>
              <Button
                startIcon={<EmailIcon />}
                href={mailtoLink}
                sx={{
                  justifyContent: 'flex-start',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
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
                  justifyContent: 'flex-start',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                @alex_sav_one
              </Button>
              <Button
                startIcon={<GitHubIcon />}
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  justifyContent: 'flex-start',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
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
