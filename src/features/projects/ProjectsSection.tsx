// src/features/projects/ProjectsSection.tsx
import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Box,
  Chip,
  Stack,
  CardActions,
  Button,
} from "@mui/material";
import { projects } from "../../constants/projects.data";
import { Project } from "../../types/project.types";
import { useImageCache } from "../../hooks/useImageCache";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import { cardMediaStyles } from "../../styles/commonStyles";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePreviousProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const previousIndex =
      (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[previousIndex]);
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
          Мои проекты
        </Typography>
      </motion.div>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                  cursor: "pointer",
                }}
                onClick={() => handleCardClick(project)}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: "contain",
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{
                      fontSize: { xs: "1.25rem", sm: "1.5rem" },
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      mb: 2,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ gap: 1 }}
                  >
                    {project.technologies?.map((tech) => (
                      <Chip
                        key={tech.label}
                        label={tech.label}
                        size="small"
                        color={tech.color as any}
                        sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    size="small"
                    startIcon={<GitHubIcon />}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                    }}
                  >
                    Смотреть на GitHub
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <ProjectModal
        open={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
        onNext={handleNextProject}
        onPrevious={handlePreviousProject}
      />
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
