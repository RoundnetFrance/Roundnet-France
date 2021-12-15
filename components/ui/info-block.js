import Image from 'next/image';
import propTypes from 'prop-types';
import { Fragment } from 'react';

// MUI IMPORTS
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button';

// MUI ICONS
import InsertLinkIcon from '@mui/icons-material/InsertLink';

function InfoBlock({ title, chip, items, image, description, imageToLeft, height, roundedImage, link }) {
  // Put the image to left or right on desktops
  const rowOrder = imageToLeft ? 'row-reverse' : 'row';

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
                      {item.title}
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
        {
          link && (
            <Button
              sx={{
                width: 'fit-content',
              }}
              variant="contained"
              color="secondary"
              href={link.url}
              target={link.outLink ? '_blank' : '_self'}
              rel={link.outLink ? 'noopener noreferrer' : ''}
              startIcon={link.outLink ? <InsertLinkIcon /> : null}
            >
              {link.text ? link.text : 'Site'}
            </Button>
          )
        }


      </Stack>

      <Paper elevation={3} sx={{ width: { xs: '100%', md: '50%' }, height: { xs: height / 1.25, md: height }, position: 'relative', overflow: 'hidden', borderRadius: { xs: 2, md: roundedImage ? 60 : 2 } }}>
        <Image
          src={image}
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
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
  }),
  image: propTypes.string.isRequired,
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
  items: null,
  imageToLeft: false,
  height: 400,
  roundedImage: false,
  chip: null,
  link: null,
}

export default InfoBlock
