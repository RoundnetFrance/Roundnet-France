import Image from "next/image";
import Slider from "react-slick";

import { Box, Container, Stack, Typography } from "@mui/material";

import Link from "../ui/link";
import { FC } from "react";

interface Logo {
  src: string;
  alt: string;
  link?: string;
}

interface LogoCarouselProps {
  title: string;
  logos: Logo[];
}

const LogoCarousel: FC<LogoCarouselProps> = ({ title, logos }) => {
  if (!logos) return null;

  const logosSlider = logos.map((logo) => {
    const image = (
      <Image
        src={logo.src}
        alt={logo.alt}
        width={150}
        height={150}
        title={logo.alt}
        style={{ objectFit: "cover" }}
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
  const logosOnMultipleSlides = numberOfLogos > 5;

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
        dots={logosOnMultipleSlides}
        arrows={logosOnMultipleSlides}
        autoplay
        infinite={logosOnMultipleSlides}
        speed={800}
        slidesToShow={logosOnMultipleSlides ? 5 : numberOfLogos}
      >
        {logosSlider}
      </Slider>
    </Container>
  );
};

export default LogoCarousel;
