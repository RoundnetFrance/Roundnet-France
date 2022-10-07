// MUI IMPORTS
import { Box, Container, Typography, CardMedia, Stack } from '@mui/material';

// MUI ICONS
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

// COMPONENT IMPORTS
import ColoredBackground from '../ui/colored-background';
import Timeliner from '../ui/timeliner';

// CONTENT
import { rulesItems } from '../../contents/home';

export default function RulesDemo() {
  return (
    <ColoredBackground>
      <Box sx={{
        pb: 4,
      }}>
        <Container maxWidth="sm">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Typography variant="h4" align="center" color="white">
              <strong>Les règles du roundnet sont aussi simples à appréhender que passionnantes à maîtriser.</strong>
            </Typography>
            <Typography variant="h4" align="center" color="white">
              <strong>En quelques mots, <br />voici comment on joue !</strong>
            </Typography>
            <ArrowCircleDownIcon sx={{ fontSize: 80, color: 'secondary.lightest', mb: 4 }} />
          </Stack>
        </Container>
      </Box>

      <Box sx={{
        pb: 4,
      }}>
        <Container maxWidth="sm">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Typography variant="h4" align="center" color="white">
              <strong>Première chose à savoir : vous pouvez jouer sur n&apos;importe quel terrain. Indoor, gazon, synthétique, terre battue,  neige, boue, béton... Soyez créatifs.</strong>
            </Typography>
            <ArrowCircleDownIcon sx={{ fontSize: 80, color: 'secondary.lightest', mb: 4 }} />
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{
        mb: 4,
        p: { xs: 0, sm: 20 },
        py: { xs: 2, sm: 20 },
        background: { xs: 'white', sm: `url(/images/misc/blob-lighter-neutral.svg) no-repeat center center` },
        backgroundSize: 'cover',
      }}>
        <Container maxWidth="sm">
          <Timeliner items={rulesItems} color='black' position="alternate" />
        </Container>
      </Container>

      <Container maxWidth="sm">
        <Typography align="center" variant="h4" color="white">
          <strong>Si tout cela n&apos;est pas clair, <br />la vidéo ci-dessous devrait faire l&apos;affaire.</strong>
        </Typography>
      </Container>


      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{
          my: 4,
        }}
      >
        <ArrowCircleDownIcon align="center" sx={{ fontSize: 80, color: 'secondary.lightest', mb: 4 }} />
        <CardMedia
          component="iframe"
          src="https://www.youtube.com/embed/vGIrNrLyZZg"
          sx={{
            width: ['100%', '100%', 1000, 1200],
            height: [310, 430, 563.5, 675],
            border: 'none',
            boxShadow: 8
          }}
        />

      </Stack>

    </ColoredBackground>
  )
}
