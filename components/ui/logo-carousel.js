import Slider from "react-slick";
import Image from "next/image";

// MUI IMPORTS
import { Container, Box, Typography, Stack } from "@mui/material";

// COMPONENT IMPORTS
import Link from "../ui/link";

function LogoCarousel({ title, logos }) {
  if (!logos) return null;
  console.log(logos);

  const logosSlider = logos.map((logo) => {
    // Generating the image
    const image = (
      <Image
        src={logo.src}
        alt={logo.alt}
        width="150px"
        height="150px"
        title={logo.alt}
        objectFit="cover"
      />
    );

    // Return with link condition
    return (
      <Box key={logo.alt} sx={{ textAlign: "center", position: "relative" }}>
        {logo.link ? <Link href={logo.link}>{image}</Link> : image}
      </Box>
    );
  });

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
        <Typography align="center" variant="h4" component="h2">
          {title}
        </Typography>
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
