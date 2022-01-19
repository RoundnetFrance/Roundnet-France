import Slider from 'react-slick';
import Image from 'next/image';

// MUI IMPORTS
import { Container, Box, Typography, Stack } from '@mui/material';

function LogoCarousel({ logos }) {
  const logosSlider = logos.map((logo) => (
    <Box key={logo.alt} sx={{ textAlign: "center" }}>
      <Image src={logo.src} alt={logo.alt} width="150px" height="150px" title={logo.alt} />
    </Box>
  ));

  const numberOfLogos = logos.length;

  // RETURN
  return (
    <Container
      maxWidth="md"
      sx={{
        mb: 6,
      }}
    >
      <Stack mb={2} sx={{ textAlign: "center" }}>
        <Typography align="center" variant="h5" component="h2"> Ils adhèrent à Roundnet France </Typography>
      </Stack>
      <Slider
        dots
        arrows={false}
        autoplay
        infinite={false}
        speed={800}
        slidesToShow={numberOfLogos}
      >
        {logosSlider}
      </Slider>
    </Container>
  );
}

export default LogoCarousel;