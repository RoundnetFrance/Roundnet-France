import Image from "next/image";
import { FC, Fragment } from "react";

import { Box, Chip, Paper, Stack, Typography } from "@mui/material";

import LinkButtons from "./link-buttons";

interface InfoBlockProps {
  title: string;
  image?: string;
  description: string | string[];
  imageToLeft?: boolean;
  height?: number;
  roundedImage?: boolean;
  chip?: string;
  items?: { _id: string; title: string; text: string }[];
  links?: string | { url: string; text?: string; outLink?: boolean }[];
  roundedEverywhere?: boolean;
  imageFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
}

const InfoBlock: FC<InfoBlockProps> = ({
  title,
  chip,
  items,
  image,
  description,
  imageToLeft = false,
  height = 400,
  roundedImage = false,
  links,
  roundedEverywhere = false,
  imageFit = "cover",
}) => {
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
        {links && (
          <LinkButtons
            links={typeof links === "string" ? links : [...links]}
            imageToLeft={imageToLeft}
          />
        )}
      </Stack>

      <Paper
        elevation={3}
        sx={{
          minWidth: {
            xs: roundedEverywhere ? "210px" : "300px",
            md: roundedEverywhere ? "210px" : "210px",
          },
          width: {
            xs: roundedEverywhere ? "210px" : "80%",
            md: roundedEverywhere ? "210px" : "50%",
          },
          maxWidth: {
            xs: roundedEverywhere ? "210px" : "80%",
            md: roundedEverywhere ? "210px" : "50%",
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
          fill
          alt={title}
          style={{ objectFit: imageFit }}
        />
      </Paper>
    </Stack>
  );
};

export default InfoBlock;
