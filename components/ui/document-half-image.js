import { Fragment } from "react";
import propTypes from "prop-types";

// MUI IMPORTS
import { Typography, Divider, Box, Button, Container } from "@mui/material";

// COMPONENT IMPORTS
import HalfImage from "./half-image";

export default function DocumentHalfImage({
  image,
  title,
  description,
  document,
  buttonText,
}) {
  const readableUpdateDate = new Date(document.createdAt).toLocaleDateString(
    "fr-FR",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <Fragment>
      <HalfImage image={image}>
        <Typography variant="h5" color="white">
          <strong>{title}</strong>
        </Typography>
        <Box width="50%">
          <Divider
            color="white"
            sx={{
              mb: 4,
            }}
          />
        </Box>
        {description && (
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              color: "white",
              whiteSpace: "pre-line",
            }}
          >
            {description}
          </Typography>
        )}
        {document.description && (
          <Typography
            variant="body1"
            sx={{
              color: "white",
              mb: 4,
              whiteSpace: "pre-line",
            }}
          >
            {document.description}
          </Typography>
        )}
        <Button
          color="secondary"
          size="large"
          variant="contained"
          href={document.url}
          target="_blank"
        >
          {buttonText}
        </Button>
        <Typography variant="body2" mt={1} color="white">
          Version : {document.version}
          <br />
          Dernière mise à jour :{" "}
          {readableUpdateDate ||
            new Date().toLocaleDateString("fr-FR", { year: "numeric" })}
        </Typography>
      </HalfImage>

      <Container maxWidth="md" sx={{ my: 8 }}>
        <iframe
          src={`${document.url}#view=fitH`}
          title="testPdf"
          height="500px"
          width="100%"
        />
      </Container>
    </Fragment>
  );
}

DocumentHalfImage.propTypes = {
  image: propTypes.string,
  title: propTypes.string.isRequired,
  description: propTypes.string,
  document: propTypes.object.isRequired,
  buttonText: propTypes.string,
};

DocumentHalfImage.defaultProps = {
  image: "/images/pages/competition/regles/regles-pdf.jpg",
  description: null,
  buttonText: "Télécharger le fichier",
};
