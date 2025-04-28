// src/features/about/AboutSection.tsx
import React from "react";
import { Container, Typography } from "@mui/material";

export default function AboutSection() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" align="center">
        Обо мне
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Я начинающий Frontend-разработчик, увлечён созданием адаптивных,
        доступных и красивых интерфейсов. В настоящее время изучаю React,
        TypeScript, Material UI и другие современные технологии.
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Цель — стать профессиональным разработчиком, готовым решать реальные
        задачи и создавать ценные продукты.
      </Typography>
    </Container>
  );
}
