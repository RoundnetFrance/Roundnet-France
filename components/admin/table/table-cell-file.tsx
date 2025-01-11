import Image from "next/image";
import { type Dispatch, Fragment, type SetStateAction, useState } from "react";
import uploadFileTableCell from "../../../helpers/mutaters/upload-file-table-cell";
import { useSWRConfig } from "swr";
import { uploadFileToStorage } from "../../../helpers/form/upload-file";

import {
  Box,
  Avatar,
  IconButton,
  TableCell,
  Stack,
  Button,
  Typography,
  LinearProgress,
  Tooltip,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import FileUploadIcon from "@mui/icons-material/FileUpload";

import { Link, Dialog } from "../../../components/ui";

interface TableCellFileProps {
  value: string;
  isEditable: boolean;
  id: string;
  element: string;
  endpoint: string;
  tableData: any;
  isImage: boolean;
  setError: Dispatch<SetStateAction<Error>>;
  setSuccess: Dispatch<SetStateAction<{ name: string; message: string }>>;
}

function TableCellFile({
  value,
  isEditable,
  id,
  element,
  endpoint,
  tableData,
  isImage,
  setError,
  setSuccess,
}: Readonly<TableCellFileProps>) {
  const { mutate } = useSWRConfig();

  // Handle file upload state
  const [file, setFile] = useState<File | null>(null);
  const [uploadingValue, setUploadingValue] = useState(0);

  // Handle loading state
  const [loading, setLoading] = useState(false);

  // Handle modal state and open/close functions
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setLoading(false);
    setFile(null);
  };

  // Handle file upload
  const handleUpload = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!file) {
      setLoading(false);
      setError({
        name: "Error",
        message: "Veuillez sélectionner un fichier.",
      });
      return;
    }

    // Function to handle upload state change
    const handleUploadStateChange = (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setUploadingValue(progress);
    };

    try {
      // Upload file to storage and get download url
      const url = await uploadFileToStorage({
        file,
        endpoint,
        fieldId: id,
        handleStateChange: handleUploadStateChange,
      });

      // Patch database with download url and mutate local state
      await uploadFileTableCell({
        endpoint,
        id,
        tableData,
        url,
        element,
        mutate,
        setError,
      });

      // Update success state, init the others
      setLoading(false);
      setFile(null);
      setOpen(false);
      setUploadingValue(0);
      setSuccess({
        name: "Success",
        message: "Le fichier a bien été uploadé.",
      });
    } catch (error) {
      setLoading(false);
      setError({
        name: "Error",
        message:
          error.message ||
          "Une erreur est survenue lors de l'upload du fichier.",
      });
    }
  };

  return (
    <Fragment>
      <TableCell>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='flex-start'
          spacing={1}
        >
          {isEditable && (
            <Tooltip title='Modifier'>
              <IconButton
                component='label'
                color='primary'
                onClick={handleClickOpen}
              >
                <FileUploadIcon />
              </IconButton>
            </Tooltip>
          )}
          {isImage ? (
            <Avatar>
              <Image
                src={value}
                fill
                style={{ objectFit: "cover" }}
                alt={element}
              />
            </Avatar>
          ) : (
            <Link href={value}>Télécharger le fichier</Link>
          )}
        </Stack>
      </TableCell>

      {/* Dialog component */}
      <Dialog
        title='Uploader'
        open={open}
        handleClose={handleClose}
        cancelText='Annuler'
        confirmButton={
          <LoadingButton
            loading={loading}
            variant='contained'
            onClick={handleUpload}
          >
            Modifier
          </LoadingButton>
        }
      >
        <Button
          variant='contained'
          component='label'
          color='primary'
          startIcon={<FileUploadIcon />}
        >
          Envoyer un fichier{" "}
          <input
            type='file'
            name='file'
            accept={isImage ? "image/*" : "*"}
            hidden
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          />
        </Button>
        <Typography variant='body2' mt={2} pl={2}>
          {file ? file.name : "Aucun fichier sélectionné"}
        </Typography>

        {loading && (
          <Box sx={{ width: "100%" }} mt={2}>
            <Typography variant='body2'>Upload en cours...</Typography>
            <LinearProgress variant='determinate' value={uploadingValue} />
          </Box>
        )}
      </Dialog>
    </Fragment>
  );
}

export default TableCellFile;
