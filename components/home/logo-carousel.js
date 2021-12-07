import Slider from 'react-slick';
import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function LogoCarousel() {

  const rawLogos = [
    {
      src: '/images/logos/roundnet-france.jpg',
      alt: 'Roundnet France',
    },
    {
      src: '/images/logos/roundnet-coc.jpg',
      alt: 'Roundnet COC',
    },
    {
      src: '/images/logos/roundnet-lyon.jpg',
      alt: 'Roundnet Lyon',
    },
    {
      src: '/images/logos/roundnet-paris.jpg',
      alt: 'Roundnet Paris',
    },
    {
      src: '/images/logos/roundnet-toulouse.jpg',
      alt: 'Roundnet Toulouse',
    },
    {
      src: '/images/logos/spikebees.jpg',
      alt: 'Roundnet Abbeville - Spikebees',
    },
    {
      src: '/images/logos/titans-roundnet.jpg',
      alt: 'Roundnet Nantes - Titans Roundnet',
    },
  ];

  const logos = rawLogos.map((logo) => (
    <Box key={logo.alt}>
      <Image src={logo.src} alt={logo.alt} width="150px" height="150px" title={logo.alt} />
    </Box>
  ));

  // RETURN
  return (
    <Container
      maxWidth="md"
      sx={{
        mb: 6,
      }}
    >
      <Box mb={2}>
        <Typography align="center" variant="h5" component="h2"> Application officielle du roundnet français </Typography>
      </Box>
      <Slider
        dots
        arrows={false}
        autoplay
        infinite
        speed={800}
        slidesToShow={4}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              centerMode: false,
            },
          },
        ]}
      >
        {logos}

      </Slider>
    </Container>
  );
}

export default LogoCarousel;