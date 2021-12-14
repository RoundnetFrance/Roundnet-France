import Image from 'next/image';
import propTypes from 'prop-types';

// MUI IMPORTS
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

function InfoBlock({ title, items, image, description, imageToLeft }) {
  // Put the image to left or right on desktops
  const rowOrder = imageToLeft ? 'row-reverse' : 'row';

  return (
    <Stack
      direction={{ xs: 'column', md: rowOrder }}
      justifyContent="space-between"
      alignItems="center"
      spacing={{ xs: 2, md: 4 }}
      my={4}
    >
      <Stack width={{ xs: '100%', md: '50%' }}>
        <Typography variant="h6" mb={2} color="secondary.main">{title}</Typography>
        <Typography variant="body2" mb={4}>
          {description}
        </Typography>

        {
          items && (
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={2}
            >
              {
                items.map((item, index) => (
                  <Box width="50%" key={index}>
                    <Typography variant="h6" color="secondary.main"> {item.title} </Typography>
                    <Typography variant="body2">
                      {item.text}
                    </Typography>
                  </Box>
                ))

              }
              {/* <Box width="50%">
                <Typography variant="h6" color="secondary.main"> 24+ </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptate. Numquam, tempora?
                </Typography>
              </Box>
              <Box width="50%">
                <Typography variant="h6" color="secondary.main"> 6+ </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptate. Numquam, tempora?
                </Typography>
              </Box> */}

            </Stack>
          )
        }


      </Stack>

      <Paper elevation={3} sx={{ width: { xs: '100%', md: '50%' }, height: '400px', position: 'relative', overflow: 'hidden', borderRadius: 2 }}>
        <Image
          src={image}
          layout='fill'
          alt="home-slide"
          objectFit="cover"
        />
      </Paper>

    </Stack>
  )
}

InfoBlock.propTypes = {
  title: propTypes.string.isRequired,
  items: propTypes.array,
  image: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  imageToLeft: propTypes.bool,
}

InfoBlock.defaultProps = {
  items: null,
  imageToLeft: false,
}

export default InfoBlock
