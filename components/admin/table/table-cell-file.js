import Image from 'next/image';
import { Fragment, useState } from 'react';
import uploadFileTableCell from '../../../helpers/mutaters/upload-file-table-cell';
// import storage from '../../../lib/init-firebase';
import { getDownloadURL } from 'firebase/storage';
import { useSWRConfig } from 'swr';
import uploadFileToStorage from '../../../helpers/form/upload-file';

// MUI IMPORTS
import { Box, Avatar, IconButton, TableCell, Stack, Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, LinearProgress } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// MUI ICONS
import FileUploadIcon from '@mui/icons-material/FileUpload';

function TableCellFile({ value, isEditable, id, element, endpoint, tableData, setError, setSuccess }) {
  const { mutate } = useSWRConfig();

  // Handle file upload state
  const [file, setFile] = useState(null);
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
        name: 'Error',
        message: 'Veuillez sélectionner un fichier.',
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
      const url = await uploadFileToStorage({ file, endpoint, handleStateChange: handleUploadStateChange });

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
        name: 'Success',
        message: 'Le fichier a bien été uploadé.',
      });

    } catch (error) {
      setLoading(false);
      setError({
        name: 'Error',
        message: error.message || 'Une erreur est survenue lors de l\'upload du fichier.',
      });
    }
  }

  return (
    <Fragment>
      <TableCell>
        <Stack direction="row" alignItems="center"
          justifyContent="flex-start" spacing={1}>
          {isEditable && (
            <IconButton
              variant="contained"
              component="label"
              color="primary"
              onClick={handleClickOpen}
            >
              <FileUploadIcon />
            </IconButton>
          )}
          <Avatar>
            <Image
              src={value}
              layout='fill'
              objectFit='cover'
              alt={element}
            />
          </Avatar>
        </Stack>
      </TableCell>

      {/* Dialog component */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Uploader</DialogTitle>
        <DialogContent sx={{ minWidth: { xs: '70vw', sm: '400px', md: '500px' } }}>
          <Button
            variant="contained"
            component="label"
            color="primary"
            startIcon={<FileUploadIcon />}
          >
            Envoyer un fichier
            <input
              type="file"
              name="file"
              hidden
              onChange={(event) => setFile(event.target.files[0])}
            />
          </Button>
          <Typography variant="body2" mt={2} pl={2}>{file ? file.name : 'Aucun fichier sélectionné'}</Typography>

          {loading && <Box sx={{ width: '100%' }} mt={2}>
            <Typography variant="body2">Upload en cours...</Typography>
            <LinearProgress variant="determinate" value={uploadingValue} />
          </Box>}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <LoadingButton loading={loading} variant="contained" onClick={handleUpload}>Modifier</LoadingButton>
        </DialogActions>
      </Dialog>

    </Fragment>
  )

};


export default TableCellFile
