import React from 'react';

// MUI IMPORTS
import {
  Typography, Box, Container, Paper, Divider, Stack,
} from '@mui/material';

// MATERIAL UI ICONS
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

function HomeInfoBlock() {
  return (
      <Container maxWidth="sm">
        <Paper
          id="who-are-we"
          sx={{
            margin: '0 auto',
            position: 'relative',
            top: '-4rem',
            padding: '2rem',
          }}
        >
          <Box textAlign="center">
            <LiveHelpIcon color="primary" sx={{ fontSize: 80 }} />
          </Box>
          <Box mb={3}>
            <Typography align="center" variant="h4">
              {' '}
              Qu&apos;est-ce que
              {' '}
              <br />
              {' '}
              Roundnet France ?
              {' '}
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Stack spacing={2} mt={4}>
            <Typography align="center" variant="body1" component="div">
              Le classement officiel de roundnet est créé et géré par Roundnet France.
              Il permet d&apos;agréger les différents résultats officiels des joueurs et
              constitue la base pour le seeding des tournois officiels.
            </Typography>
            <Typography align="center" variant="body1" component="div">
              Il sert de seeding pour les championnats de France
              et les différents tournois français.
              Enfin, il sert à structurer notre communauté,
              et à la motiver pour participer à un maximum de tournois !
            </Typography>
          </Stack>
        </Paper>
      </Container>
  );
}

export default HomeInfoBlock;