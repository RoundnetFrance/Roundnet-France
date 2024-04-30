import { type FC, Fragment, useState } from "react";
import Image from "next/image";

import {
  Stack,
  Tooltip,
  Typography,
  IconButton,
  Avatar,
  Button,
  Link,
} from "@mui/material";

import FileUploadIcon from "@mui/icons-material/FileUpload";

import { Dialog } from "../../../../ui";

interface AdminFileFieldProps {
  id: string;
  value: File | string;
  image: string;
  setImage: (value: string) => void;
  editable: boolean;
  handleChange: (id: string, value: any) => void;
  fileType: string;
  label: string;
}

export const AdminFileField: FC<AdminFileFieldProps> = ({
  id,
  value,
  image,
  setImage,
  editable = false,
  handleChange,
  fileType,
  label,
}) => {
  // Handle modal state and open/close functions
  const [dialogOpen, setDialogOpen] = useState(false);
  function handleDialogOpen() {
    setDialogOpen(true);
  }
  function handleDialogClose() {
    setDialogOpen(false);
  }
  function handleDialogCancel() {
    setDialogOpen(false);
    handleChange(id, image);
  }

  // Handle HTML validation of file type
  let accept: string;
  switch (fileType) {
    case "image":
      accept = "image/*";
      break;

    case "pdf":
      accept = "application/pdf";
      break;

    default:
      accept = "*";
      break;
  }

  return (
    <Fragment>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='flex-start'
        spacing={1}
      >
        {editable && (
          <Tooltip title='Modifier'>
            <IconButton
              component='label'
              color='primary'
              onClick={handleDialogOpen}
            >
              <FileUploadIcon />
            </IconButton>
          </Tooltip>
        )}
        {/* Image Avatar (conditional) */}
        {fileType === "image" && (
          <Avatar sx={{ width: 60, height: 60 }}>
            <Image
              src={image || "/images/misc/placeholder.jpg"}
              width={60}
              height={60}
              style={{ objectFit: "cover" }}
              alt={label}
              onError={() => setImage("/images/misc/placeholder.jpg")}
            />
          </Avatar>
        )}
        {/* Display download link if image or value is defined */}
        {(image || value) && (
          <Typography sx={{ my: { xs: 0, sm: 1 } }}>
            <Link
              href={
                fileType === "image"
                  ? image
                  : typeof value === "string"
                  ? value
                  : undefined
              }
              target='_blank'
            >
              Télécharger le fichier
            </Link>
          </Typography>
        )}
      </Stack>

      {/* Dialog component */}
      <Dialog
        open={dialogOpen}
        title='Uploader'
        handleClose={handleDialogCancel}
        cancelText='Annuler'
        confirmButton={
          <Button variant='contained' onClick={handleDialogClose}>
            Choisir ce fichier
          </Button>
        }
      >
        <Button variant='contained' component='label' color='primary'>
          Envoyer un fichier{" "}
          <input
            type='file'
            name='file'
            accept={accept}
            hidden
            onChange={(event) => handleChange(id, event.target.files?.[0])}
          />
        </Button>
        <Typography variant='body2' mt={2} pl={2}>
          {value && typeof value === "object"
            ? value.name
            : "Aucun fichier sélectionné"}
        </Typography>
      </Dialog>
    </Fragment>
  );
};
