// src/features/projects/ProjectsSection.tsx
import React from "react";
import {
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
  cardStyles,
  cardMediaStyles,
  cardContentStyles,
  cardTitleStyles,
  cardDescriptionStyles,
  buttonStyles,
} from "../../styles/commonStyles";

export default function ProjectsSection() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h2"
        gutterBottom
        align="center"
        sx={{ 
          mb: { xs: 4, sm: 6 },
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          fontWeight: 700,
        }}
      >
        Интересные проекты
      </Typography>
      <Grid 
        container 
        spacing={{ xs: 3, sm: 4, md: 5 }}
        sx={{ 
          justifyContent: "center",
          "& > *": {
            minWidth: { xs: "100%", sm: "calc(50% - 24px)", md: "calc(33.33% - 32px)" },
            maxWidth: { xs: "100%", sm: "calc(50% - 24px)", md: "calc(33.33% - 32px)" },
          }
        }}
      >
        {projects.map((project: Project) => (
          <Grid key={project.id} item>
            <Card sx={cardStyles}>
              <ProjectImage imageUrl={project.image} alt={project.title} />
              <CardContent sx={cardContentStyles}>
                <Box>
                  <Typography sx={cardTitleStyles}>
                    {project.title}
                  </Typography>
                  <Typography sx={cardDescriptionStyles}>
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
