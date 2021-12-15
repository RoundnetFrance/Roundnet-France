import React from 'react';

// MUI IMPORTS
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// COMPONENT IMPORTS
import IconWithBackground from './icon-with-background';

function PaperGrid({ items }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>

        {items.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={3} sx={{
            background: `url(/images/misc/blob-lighter-secondary.svg) no-repeat bottom right`,
          }}>
            <Stack component={Paper} p={4} elevation={4} sx={{
              borderRadius: 2,
            }}>
              <IconWithBackground icon={item.icon} size={30} />
              <Typography variant="h5" my={2}>
                <strong>{item.title}</strong>
              </Typography>
              <Typography variant="body1">
                {item.description}
              </Typography>
            </Stack>
          </Grid>
        ))}

      </Grid>
    </Box>
  )
}

export default PaperGrid
