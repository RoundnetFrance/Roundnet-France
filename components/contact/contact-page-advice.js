// import React from 'react'

// MUI IMPORTS
import { Container, Paper, Box, Typography, Divider, Stack, Button } from '@mui/material';

// MUI ICONS
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

// COMPONENT IMPORTS
import Link from '../../components/ui/link';

export default function ContactPageAdvice({ value }) {
  // If value is null, aka the user has not selected a value, display nothing
  if (!value) return null;

  // Display content based on value selected by the user
  let title; let content; let href; let icon;
  switch (value) {
    case 'competition': {
      title = 'Découvrez toutes les possibilités d\'organisation de compétitions';
      content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit corporis accusamus nihil ipsa quisquam ullam exercitationem adipisci deserunt fugiat reprehenderit velit ratione ex, beatae deleniti eius et quia facilis nesciunt incidunt.';
      href = '/competition/rencontres-inter-clubs';
      icon = <EqualizerIcon color="primary" sx={{ fontSize: 80 }} />;
      break;
    }

    case 'adhesion':
      title = 'Les avantages de l\'adhésion à la Roundnet France';
      content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit corporis accusamus nihil ipsa quisquam ullam exercitationem adipisci deserunt fugiat reprehenderit velit ratione ex, beatae deleniti eius et quia facilis nesciunt incidunt.';
      href = '/clubs-et-communautes/adherer-a-roundnet-france'
      icon = <PeopleAltIcon color="primary" sx={{ fontSize: 80 }} />;
      break;

    case 'acheter':
      title = 'Le partenaire privilégié de Spikeball en France';
      content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit corporis accusamus nihil ipsa quisquam ullam exercitationem adipisci deserunt fugiat reprehenderit velit ratione ex, beatae deleniti eius et quia facilis nesciunt incidunt.'
      href = '/boutique'
      icon = <ShoppingBasketIcon color="primary" sx={{ fontSize: 80 }} />;
      break;

    default:
      href = '/'
      break;
  }

  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <Paper
        id="who-are-we"
        sx={{
          margin: '0 auto',
          padding: { xs: 2, sm: 4 },
        }}
      >
        <Box textAlign="center">
          {icon}
        </Box>
        <Box mb={3}>
          <Typography align="center" variant="h4">
            {title}
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Stack spacing={2} mt={4}>
          <Typography align="center" variant="body1" component="div">
            {content}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
          >
            <Link href={href} color="#fff" underline="none">
              En savoir plus
            </Link>
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}
