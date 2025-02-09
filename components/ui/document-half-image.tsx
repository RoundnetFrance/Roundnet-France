import { Fragment } from "react";
import { Typography, Divider, Box, Button, Container } from "@mui/material";

import HalfImage from "./half-image";
import type { FileDocument } from "../../models/DB";

interface DocumentHalfImageProps {
  buttonText?: string;
  description?: string;
  document: FileDocument;
  image?: string;
  title: string;
}

export default function DocumentHalfImage({
  buttonText = "Télécharger le fichier",
  description = "",
  document,
  image = "/images/pages/competition/regles/regles-pdf.jpg",
  title,
}: DocumentHalfImageProps) {
  // TODO : refactor this in utils
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
          <br />
          Description : {document.description || document.description}
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
