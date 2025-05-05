// src/features/about/AboutSection.tsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutSection() {
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
        Обо мне
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
              Кто я
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                lineHeight: { xs: 1.5, sm: 1.6 },
              }}
            >
              Я Frontend-разработчик с опытом создания современных веб-приложений.
              Специализируюсь на React, TypeScript и современных инструментах разработки.
              Стремлюсь создавать качественные, производительные и удобные пользовательские интерфейсы.
            </Typography>
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
              Мой подход
      </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                lineHeight: { xs: 1.5, sm: 1.6 },
              }}
            >
              Я верю в чистый код, тестирование и постоянное обучение.
              Всегда слежу за новыми технологиями и лучшими практиками в разработке.
              Работаю над улучшением пользовательского опыта и производительности приложений.
      </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
