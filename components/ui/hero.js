import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// MATERIAL ICONS
import EqualizerIcon from '@mui/icons-material/Equalizer';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

function HomeIntro({ image, title, subtitle, mainButtonText, mainButtonLink, altButtonText, altButtonLink }) {
  const styles = {
    container: {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    title: {
      textShadow: 'black 3px 2px 3px',
    },
  };
  return (
    <Box
      style={styles.container}
      sx={{
        bgcolor: 'primary.dark',
        height: '70vh',
        width: '100%',
      }}
    >
      <Container sx={{ height: '100%' }}>
        <Stack justifyContent="center" minHeight="100%" spacing={1}>
          <Typography
            style={styles.title}
            pt={4}
            variant="h4"
            component="h2"
            color="primary.contrastText"
            lineHeight={{ xs: '1.1em', sm: '1.25em', md: '1.5em' }}
            letterSpacing="0.03em"
          >
            {title}
            {' '}
            <br />
            {subtitle}
            {' '}
            <br />
          </Typography>
          <Stack
            width="fit-content"
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
          >

            <Button sx={{ justifyContent: 'flex-start' }} href={mainButtonLink} size="large" variant="contained">
              <QueryStatsIcon sx={{ mr: 2 }} />
              {mainButtonText}
            </Button>

            {altButtonText && altButtonLink && (
              <Button sx={{ justifyContent: 'flex-start' }} href={altButtonText} color="secondary" size="large" variant="contained">
                <EqualizerIcon sx={{ mr: 2 }} />
                {altButtonText}
              </Button>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default HomeIntro;