// src/features/projects/ProjectsSection.tsx
import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  Skeleton,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import { projects } from "../../constants/projects.data";
import { Project } from "../../types/project.types";
import { useImageCache } from "../../hooks/useImageCache";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  cardStyles,
  cardMediaStyles,
  cardContentStyles,
  cardTitleStyles,
  cardDescriptionStyles,
  buttonStyles,
} from "../../styles/commonStyles";

const getProjectTechnologies = (projectId: string) => {
  switch (projectId) {
    case "stellar-burger":
      return [
        { label: "React", color: "primary" },
        { label: "TypeScript", color: "secondary" },
        { label: "Jest", color: "success" },
        { label: "Cypress", color: "info" },
      ];
    case "gendiff":
      return [
        { label: "JavaScript", color: "warning" },
        { label: "Node.js", color: "success" },
        { label: "Jest", color: "success" },
        { label: "ESLint", color: "error" },
      ];
    case "mesto":
      return [
        { label: "HTML", color: "primary" },
        { label: "CSS", color: "secondary" },
        { label: "JavaScript", color: "warning" },
        { label: "Webpack", color: "info" },
      ];
    default:
      return [];
  }
};

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
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePreviousProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[previousIndex]);
  };

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
        {projects.map((project: Project, index: number) => (
          <Grid key={project.id} item>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                sx={{
                  ...cardStyles,
                  cursor: 'pointer',
                  position: 'relative',
                  height: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 'inherit',
                    boxShadow: '0 0 0 0 rgba(0,0,0,0)',
                    transition: 'box-shadow 0.3s ease-in-out',
                  },
                  '&:hover::after': {
                    boxShadow: '0 0 0 4px rgba(0,0,0,0.1)',
                  },
                }}
                onClick={() => handleCardClick(project)}
              >
                <ProjectImage 
                  imageUrl={project.image} 
                  alt={project.title}
                />
                <CardContent sx={{
                  ...cardContentStyles,
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 2,
                  height: '100%',
                  '& > *': {
                    width: '100%',
                  }
                }}>
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{
                      ...cardTitleStyles,
                      mb: 1,
                      fontSize: '1.25rem',
                      lineHeight: 1.4,
                    }}>
                      {project.title}
                    </Typography>
                    <Typography sx={{
                      ...cardDescriptionStyles,
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      mb: 2,
                    }}>
                      {project.description}
                    </Typography>
                    <Stack 
                      direction="row" 
                      spacing={1} 
                      sx={{ 
                        flexWrap: 'wrap',
                        gap: 1,
                      }}
                    >
                      {getProjectTechnologies(project.id).map((tech) => (
                        <Chip 
                          key={tech.label}
                          label={tech.label} 
                          size="small"
                          color={tech.color as any}
                          sx={{ 
                            color: 'white',
                            '&:hover': {
                              opacity: 0.8,
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                    sx={{
                      ...buttonStyles,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      width: '100%',
                      mt: 'auto',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GitHubIcon sx={{ fontSize: 20 }} />
                    Открыть на GitHub
                  </Link>
                </CardContent>
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

function ProjectImage({ 
  imageUrl, 
  alt,
}: { 
  imageUrl: string; 
  alt: string;
}) {
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
