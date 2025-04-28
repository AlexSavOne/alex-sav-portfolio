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
  Box,
} from "@mui/material";
import { projects } from "../../constants/projects.data";
import { Project } from "../../types/project.types";
import { useImageCache } from "../../hooks/useImageCache";
import {
  containerStyles,
  sectionStyles,
  cardStyles,
  cardMediaStyles,
  cardContentStyles,
  buttonStyles,
} from "../../styles/commonStyles";

export default function ProjectsSection() {
  return (
    <Box component="section" sx={sectionStyles}>
      <Container sx={containerStyles}>
        <Typography
          variant="h2"
          gutterBottom
          align="center"
          sx={{ mb: { xs: 4, sm: 6 } }}
        >
          Интересные проекты
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {projects.map((project: Project) => (
            <Grid key={project.id} item xs={12} sm={6} md={4}>
              <Card sx={cardStyles}>
                <ProjectImage imageUrl={project.image} alt={project.title} />
                <CardContent sx={cardContentStyles}>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                  </Box>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                    sx={buttonStyles}
                  >
                    Смотреть на GitHub
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function ProjectImage({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  const { isLoaded, error } = useImageCache(imageUrl);

  if (error) {
    return <Skeleton variant="rectangular" sx={cardMediaStyles} />;
  }

  return isLoaded ? (
    <CardMedia
      component="img"
      sx={cardMediaStyles}
      image={imageUrl}
      alt={alt}
    />
  ) : (
    <Skeleton variant="rectangular" sx={cardMediaStyles} />
  );
}
