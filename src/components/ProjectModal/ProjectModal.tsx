import React from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Link,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Project } from '../../types/project.types';
import { projects } from '../../constants/projects.data';

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: Project | null;
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function ProjectModal({ 
  open, 
  onClose, 
  project,
  onNext,
  onPrevious,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          bgcolor: 'background.paper',
          position: 'relative',
        }
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'text.primary',
          zIndex: 1,
          bgcolor: 'background.paper',
          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      <Box sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
        <IconButton
          onClick={onPrevious}
          sx={{
            color: 'text.primary',
            bgcolor: 'background.paper',
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>
      </Box>

      <Box sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
        <IconButton
          onClick={onNext}
          sx={{
            color: 'text.primary',
            bgcolor: 'background.paper',
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: 0, position: 'relative' }}>
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '70vh',
            objectFit: 'contain',
          }}
        />
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {project.description}
          </Typography>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener"
            underline="hover"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              color: 'primary.main',
              '&:hover': {
                color: 'primary.dark',
              },
            }}
          >
            <GitHubIcon />
            Открыть на GitHub
          </Link>
        </Box>
      </DialogContent>
    </Dialog>
  );
} 
