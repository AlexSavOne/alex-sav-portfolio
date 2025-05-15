// src/features/about/AboutSection.tsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
          Обо мне
        </Typography>

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
                Кто я
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: { xs: 1.5, sm: 1.6 },
                }}
              >
                Привет! Меня зовут Саша, я начинающий frontend-разработчик.
                Учусь самостоятельно и постоянно совершенствую навыки в HTML, CSS,
                JavaScript, TypeScript и React.
                Пришёл во фронтенд, потому что мне нравится создавать удобные и современные интерфейсы,
                видеть результат своей работы и делать веб более комфортным для пользователей.
                Закончил обучение в Яндекс Практикуме, сейчас продолжаю учиться на Хекслете.
              </Typography>
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
                Мой подход
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: { xs: 1.5, sm: 1.6 },
                }}
              >
                Верю в чистый код, ответственность и постоянное обучение.
                Всегда открыт новым технологиям и стараюсь применять лучшие практики.
                Готов к профессиональному росту и стремлюсь стать Senior-разработчиком.
                В будущем хочу изучить backend и при необходимости перейти к fullstack-разработке.
                Ищу команду, где смогу развиваться, приносить пользу и расти вместе с проектами.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}
