import Image from "next/image";
import Link from "next/link";
import propTypes from "prop-types";
import { useState } from "react";

// MUI IMPORTS
import { Box, Container, Stack, Button, Typography } from "@mui/material";

// MUI ICONS
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function HomeIntro({
  image,
  imagePosition,
  title,
  subtitle,
  mainButtonText,
  mainButtonLink,
  altButtonText,
  altButtonLink,
  mini,
  half,
}) {
  const styles = {
    container: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    title: {
      textShadow: "black 3px 2px 3px",
      zIndex: 1,
    },
  };

  // Handle image error
  const [imageUrl, setImageUrl] = useState(image);

  return (
    <Box
      style={styles.container}
      sx={{
        bgcolor: "primary.main",
        height: mini ? "20vh" : half ? "60vh" : "70vh",
        width: "100%",
        position: "relative",
      }}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        objectPosition={imagePosition}
        priority={true}
        onError={() => setImageUrl("/images/misc/placeholder.jpg")}
      />

      <Container sx={{ height: "100%" }}>
        <Stack justifyContent="center" minHeight="100%" spacing={1}>
          {title && (
            <Typography
              style={styles.title}
              pt={4}
              variant="h4"
              component="h2"
              color="primary.contrastText"
              lineHeight={{ xs: "1.1em", sm: "1.25em", md: "1.5em" }}
              letterSpacing="0.03em"
            >
              {title} <br />
              {subtitle} <br />
            </Typography>
          )}
          <Stack
            width="fit-content"
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            {mainButtonText && mainButtonLink && (
              <Link href={mainButtonLink} passHref legacyBehavior>
                <Button
                  startIcon={<InfoIcon />}
                  size="large"
                  variant="contained"
                >
                  {mainButtonText}
                </Button>
              </Link>
            )}

            {altButtonText && altButtonLink && (
              <Link href={altButtonLink} passHref legacyBehavior>
                <Button
                  startIcon={<ArrowForwardIcon />}
                  color="secondary"
                  size="large"
                  variant="contained"
                >
                  {altButtonText}
                </Button>
              </Link>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

HomeIntro.propTypes = {
  image: propTypes.string,
  imagePosition: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
  mainButtonText: propTypes.string,
  mainButtonLink: propTypes.string,
  altButtonText: propTypes.string,
  altButtonLink: propTypes.string,
  mini: propTypes.bool,
  half: propTypes.bool,
};

HomeIntro.defaultProps = {
  image: "/images/misc/placeholder.jpg",
  imagePosition: "center",
  title: null,
  subtitle: null,
  mainButtonText: null,
  mainButtonLink: null,
  altButtonText: null,
  altButtonLink: null,
  mini: false,
  half: false,
};

export default HomeIntro;
