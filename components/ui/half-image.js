import Image from 'next/image';
import propTypes from 'prop-types';

// MUI IMPORTS
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function HalfImage({ image, children }) {
  // Render a box with half a background image, and half a text
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      spacing={0}
      backgroundColor="secondary.main"
      minHeight="300px"
      maxHeight={{ lg: "700px" }}
    >

      <Box
        width={{ xs: '100%', md: '50%' }}
        height={{ xs: '300px', md: '500px' }}
        position="relative"
      >
        <Image
          src={image}
          alt="Placeholder"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </Box>

      <Box
        width={{ xs: 'inherit', md: '50%' }}
        sx={{
          p: {
            xs: 4,
            lg: 6,
          },
        }}
      >
        {children}
      </Box>

    </Stack>
  )
}

HalfImage.propTypes = {
  image: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
}

export default HalfImage
