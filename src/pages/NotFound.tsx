// src/pages/NotFound.tsx

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { containerStyles, sectionStyles } from '../styles/commonStyles';
import { Link as RouterLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container sx={containerStyles}>
        <Box sx={sectionStyles}>
          <Typography variant="h3" component="h1" gutterBottom>
            404: Страница не найдена
          </Typography>
          <Typography variant="body1" paragraph>
            Извините, такой страницы не существует.
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/"
            sx={{ mt: 2 }}
          >
            ← Вернуться на главную
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
