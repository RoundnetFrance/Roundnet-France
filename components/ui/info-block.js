import Image from "next/image";
import propTypes from "prop-types";
import { Fragment } from "react";

// MUI IMPORTS
import { Stack, Box, Typography, Paper, Chip } from "@mui/material";

// COMPONENT IMPORTS
import LinkButtons from "./link-buttons";

function InfoBlock({
  title,
  chip,
  items,
  image,
  description,
  imageToLeft,
  height,
  roundedImage,
  links,
  roundedEverywhere,
  imageFit,
}) {
  // Put the image to left or right on desktops
  const rowOrder = imageToLeft ? "row-reverse" : "row";

  // Check if description is aa string or an array
  const descriptionIsArray = Array.isArray(description);

  return (
    <Stack
      direction={{ xs: "column-reverse", md: rowOrder }}
      justifyContent="space-between"
      alignItems="center"
      spacing={{ xs: 2, md: 4 }}
      my={4}
      sx={{
        background: "url(/images/misc/blob-teams.svg) no-repeat center center",
      }}
    >
      <Stack
        alignItems={{
          xs: "center",
          md: imageToLeft ? "flex-start" : "flex-end",
        }}
        width={{ xs: "100%", md: "50%" }}
      >
        <Typography
          variant="h6"
          mb={2}
          color="secondary.main"
          sx={{
            textAlign: { xs: "center", md: imageToLeft ? "left" : "right" },
          }}
        >
          <strong>{title}</strong>
          {chip && (
            <Fragment>
              <br />
              <Chip color="default" label={chip} />
            </Fragment>
          )}

          {/* CONTENT. If rray, map of paragraphs */}
        </Typography>
        {descriptionIsArray ? (
          <Box mb={2}>
            {description.map((item) => (
              <Typography
                key={item}
                variant="body2"
                mb={2}
                sx={{
                  textAlign: {
                    xs: "center",
                    md: imageToLeft ? "left" : "right",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        ) : (
          <Typography
            variant="body2"
            mb={4}
            sx={{
              textAlign: { xs: "center", md: imageToLeft ? "left" : "right" },
            }}
          >
            {description}
          </Typography>
        )}

        {/* ITEMS DISPLAY, IF ANY */}
        {items && (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "center", sm: "flex-start" }}
            spacing={{ xs: 1, md: 2 }}
          >
            {items.map((item) => (
              <Box width={{ xs: "90%", sm: "50%" }} key={item._id}>
                <Typography variant="h6" color="secondary.main">
                  <strong>{item.title}</strong>
                </Typography>
                <Typography variant="body2">{item.text}</Typography>
              </Box>
            ))}
          </Stack>
        )}

        {/* LINK DISPLAY, IF ANY */}
        {links && <LinkButtons links={links} imageToLeft={imageToLeft} />}
      </Stack>

      <Paper
        elevation={3}
        sx={{
          minWidth: {
            xs: roundedEverywhere ? "260px" : "300px",
            md: roundedEverywhere ? "260px" : "260px",
          },
          width: {
            xs: roundedEverywhere ? "260px" : "80%",
            md: roundedEverywhere ? "260px" : "50%",
          },
          maxWidth: {
            xs: roundedEverywhere ? "260px" : "80%",
            md: roundedEverywhere ? "260px" : "50%",
          },
          height: roundedEverywhere
            ? height / 1.25
            : { xs: height / 1.5, md: height },
          position: "relative",
          overflow: "hidden",
          borderRadius: {
            xs: roundedImage && roundedEverywhere ? 60 : 2,
            md: roundedImage ? 60 : 2,
          },
        }}
      >
        <Image
          src={image || "/images/misc/placeholder.jpg"}
          layout="fill"
          alt={title}
          objectFit={imageFit}
        />
      </Paper>
    </Stack>
  );
}

InfoBlock.propTypes = {
  title: propTypes.string.isRequired,
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
  roundedEverywhere: propTypes.bool,
  imageFit: propTypes.string,
};

InfoBlock.defaultProps = {
  image: null,
  items: null,
  imageToLeft: false,
  height: 400,
  roundedImage: false,
  chip: null,
  link: null,
  roundedEverywhere: false,
  imageFit: "cover",
};

export default InfoBlock;
