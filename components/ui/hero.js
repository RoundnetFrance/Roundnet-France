import Image from 'next/image';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

// MUI IMPORTS
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// MATERIAL ICONS
import EqualizerIcon from '@mui/icons-material/Equalizer';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

function HomeIntro({ image, imagePosition, title, subtitle, mainButtonText, mainButtonLink, altButtonText, altButtonLink, mini }) {
  const styles = {
    container: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    title: {
      textShadow: 'black 3px 2px 3px',
      zIndex: 1,
    },
  };

  return (

    <Box
      style={styles.container}
      sx={{
        bgcolor: 'primary.main',
        height: mini ? '20vh' : '70vh',
        width: '100%',
        position: 'relative',
      }}
    >

        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition={imagePosition}
          priority={true}
        />

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
            {mainButtonText && mainButtonLink && (
              <Button sx={{ justifyContent: 'flex-start' }} href={mainButtonLink} size="large" variant="contained">
                <QueryStatsIcon sx={{ mr: 2 }} />
                {mainButtonText}
              </Button>
            )}


            {altButtonText && altButtonLink && (
              <Button sx={{ justifyContent: 'flex-start' }} href={altButtonLink} color="secondary" size="large" variant="contained">
                <EqualizerIcon sx={{ mr: 2 }} />
                {altButtonText}
              </Button>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

HomeIntro.propTypes = {
  image: PropTypes.string,
  imagePosition: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  mainButtonText: PropTypes.string,
  mainButtonLink: PropTypes.string,
  altButtonText: PropTypes.string,
  altButtonLink: PropTypes.string,
  mini: PropTypes.bool,
};

HomeIntro.defaultProps = {
  image: '/images/home-slide.jpg',
  imagePosition: 'center',
  subtitle: null,
  mainButtonText: null,
  mainButtonLink: null,
  altButtonText: null,
  altButtonLink: null,
  mini: false,
};

export default HomeIntro;