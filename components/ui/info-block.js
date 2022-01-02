import Image from 'next/image';
import propTypes from 'prop-types';
import { Fragment } from 'react';

// MUI IMPORTS
import { Stack, Box, Typography, Paper, Chip, Button, IconButton, Icon } from '@mui/material';

// MUI ICONS
import { InsertLink, Facebook, Instagram } from '@mui/icons-material';

function InfoBlock({ title, chip, items, image, description, imageToLeft, height, roundedImage, link }) {
  // Put the image to left or right on desktops
  const rowOrder = imageToLeft ? 'row-reverse' : 'row';

  // * Handle link display
  let linkComponent;

  // Dummy data
  const links = [
    {
      source: 'website',
      url: 'https://www.google.com',
    },
    {
      source: 'facebook',
      url: 'https://www.facebook.com',
    },
    {
      source: 'instagram',
      url: 'https://www.instagram.com',
    },
  ]

  // If link is a string
  if (typeof links === 'string') {
    // Check if link is an external link
    const isExternal = link.startsWith('http');

    linkComponent = (
      <Button
        sx={{
          width: 'fit-content',
        }}
        variant="contained"
        color="secondary"
        href={link}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : ''}
        startIcon={isExternal ? <InsertLink /> : null}
      >
        Lien
      </Button>
    );
  } else {
    linkComponent = links.map(link => {
      const isExternal = link.url.startsWith('http');

      switch (link.source) {
        case 'website':
          return (
            <Button
              key={link.url}
              sx={{
                width: 'fit-content',
                mr: 1
              }}
              variant="contained"
              size="small"
              color="secondary"
              href={link.url}
              target={isExternal ? '_blank' : '_self'}
              rel={isExternal ? 'noopener noreferrer' : ''}
              startIcon={isExternal ? <InsertLink /> : null}
            >
              Site
            </Button>
          );

        default:
          return (
            <IconButton
              key={link.url}
              aria-label={link.source + ' icon'}
              href={link.url}
              color="secondary"
              size="small"
            >
              {link.source === 'facebook' ? <Facebook /> : <Instagram />}
            </IconButton>
          );
      }
    });
  }

  return (
    <Stack
      direction={{ xs: 'column-reverse', md: rowOrder }}
      justifyContent="space-between"
      alignItems="center"
      spacing={{ xs: 2, md: 4 }}
      my={4}
      sx={{
        background: 'url(/images/misc/blob-teams.svg) no-repeat center center',
      }}
    >
      <Stack
        alignItems={{ xs: 'center', md: imageToLeft ? 'flex-start' : 'flex-end' }}
        width={{ xs: '100%', md: '50%' }}>
        <Typography
          variant="h6"
          mb={2}
          color="secondary.main"
          sx={{ textAlign: { xs: 'center', md: imageToLeft ? 'left' : 'right' } }}
        >
          {title}
          {chip && (
            <Fragment>
              <br />
              <Chip color="default" label={chip} />
            </Fragment>
          )
          }

        </Typography>
        <Typography
          variant="body2"
          mb={4}
          sx={{ textAlign: { xs: 'center', md: imageToLeft ? 'left' : 'right' } }}
        >
          {description}
        </Typography>

        {/* ITEMS DISPLAY, IF ANY */}
        {
          items && (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={{ xs: 1, md: 2 }}
            >
              {
                items.map((item) => (
                  <Box width="50%" key={item.id}>
                    <Typography
                      variant="h6"
                      color="secondary.main"
                    >
                      <strong>{item.title}</strong>
                    </Typography>
                    <Typography variant="body2">
                      {item.text}
                    </Typography>
                  </Box>
                ))

              }

            </Stack>
          )
        }

        {/* LINK DISPLAY, IF ANY */}
        <Stack direction="row" spacing={0}>
          {linkComponent}
        </Stack>

      </Stack>

      <Paper elevation={3} sx={{
        minWidth: { xs: height, md: '260px' },
        width: { xs: height, md: '50%' },
        height: { xs: height / 1.25, md: height },
        position: 'relative',
        overflow: 'hidden',
        borderRadius: { xs: 2, md: roundedImage ? 60 : 2 }
      }}>
        <Image
          src={image || '/images/misc/placeholder.jpg'}
          layout='fill'
          alt={title}
          objectFit="cover"
        />
      </Paper>

    </Stack>
  )
}

InfoBlock.propTypes = {
  title: propTypes.string.isRequired,
  items: propTypes.arrayOf({
    _id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
  }),
  image: propTypes.string,
  description: propTypes.string.isRequired,
  imageToLeft: propTypes.bool,
  height: propTypes.number,
  roundedImage: propTypes.bool,
  chip: propTypes.string,
  link: propTypes.shape({
    url: propTypes.string.isRequired,
    text: propTypes.string,
    outLink: propTypes.bool,
  }),
}

InfoBlock.defaultProps = {
  image: null,
  items: null,
  imageToLeft: false,
  height: 400,
  roundedImage: false,
  chip: null,
  link: null,
}

export default InfoBlock
