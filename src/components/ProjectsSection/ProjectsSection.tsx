// src/components/ProjectsSection/ProjectsSection.tsx

import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
} from "@mui/material";

const projects = [
  {
    title: "Онлайн-магазин бургеров",
    description:
      "React, TypeScript, Jest, Cypress, Webpack, Git, npm. Реализовал функционал регистрации профиля, создания заказа, управления ингредиентами и авторизацию.",
    image: "https://i.postimg.cc/fLVksjd1/stellarburger.png",
    link: "https://github.com/AlexSavOne/stellar-burger",
  },
  {
    title: "Вычислитель отличий",
    description:
      "JavaScript, Node.js, Commander.js, Jest, ESLint, Git, Make. Разработал консольную утилиту для нахождения различий между структурами данных с поддержкой форматов yaml и json.",
    image: "https://i.postimg.cc/QMxH4rd8/gendiff.png",
    link: "https://github.com/AlexSavOne/gendiffer",
  },
  {
    title: "Аналог Instagram",
    description:
      "HTML, CSS, JavaScript, npm, Webpack, Babel, Git. Реализовал редактирование профиля, добавление фото и систему лайков.",
    image: "https://i.postimg.cc/BvYtRwjx/mesto.png",
    link: "https://github.com/AlexSavOne/mesto-project-ff",
  },
];

export default function ProjectsSection() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Интересные проекты
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "scale(1.02)", // Уменьшили эффект
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Снижение интенсивности тени
                },
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "background.paper", // Добавляем фон для карт
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{
                  transition: "transform 0.2s ease", // Снижение интенсивности анимации
                  "&:hover": {
                    transform: "scale(1.05)", // Более мягкое увеличение изображения
                  },
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    display: "inline-block",
                    marginTop: 1,
                    fontWeight: "bold",
                    color: "#1976d2",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Смотреть на GitHub
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
