// src/features/projects/ProjectsSection.tsx
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  Skeleton,
} from "@mui/material";
import { projects } from "../../constants/projects.data";
import { Project } from "../../types/project.types";
import { useImageCache } from "../../hooks/useImageCache";

export default function ProjectsSection() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
        Интересные проекты
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project: Project) => (
          <Grid key={project.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                },
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "background.paper",
              }}
            >
              <ProjectImage imageUrl={project.image} alt={project.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  underline="hover"
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

function ProjectImage({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  const { isLoaded, error } = useImageCache(imageUrl);

  if (error) {
    return (
      <Skeleton variant="rectangular" width="100%" height={200} />
    );
  }

  return isLoaded ? (
    <CardMedia
      component="img"
      height="200"
      image={imageUrl}
      alt={alt}
    />
  ) : (
    <Skeleton variant="rectangular" width="100%" height={200} />
  );
}
