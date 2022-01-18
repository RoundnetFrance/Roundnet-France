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
          padding: { xs: 2, sm: 4, md: 6 },
          borderRadius: 2,
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
            Roundnet France est la fédération française de Roundnet. Les objectifs de la fédération sont de développer le roundnet en France, d’organiser des compétitions et des rencontres, de faire rayonner nos clubs et nos joueurs français au niveau national, européen et international, et de rendre le roundnet un sport reconnu par l’Etat.
          </Typography>
          <Typography align="center" variant="body1" component="div">
            Depuis quelques années, le roundnet se développe énormément. Il y a plus d’une dizaine de clubs qui adhèrent à la fédération française et participent à l’organisation de tournois. Cette année, Roundnet France organise deux séries de tournois: des Tour Stops pour nommer les champions et championnes de France et des tournois inter-clubs pour organiser plus de rencontres et nommer un club champion de France ! La fédération aide notamment les clubs à s’assurer que les compétitions suivent les règles officielles de roundnet et commence à former des observateurs pour les tournois.
          </Typography>

          <Typography align="center" variant="body1" component="div">
            Dans les villes françaises où le roundnet commence à se développer, Roundnet France propose un accompagnement des clubs pour les aider à construire leurs associations et rejoindre la communauté.
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
}

export default HomeInfoBlock;