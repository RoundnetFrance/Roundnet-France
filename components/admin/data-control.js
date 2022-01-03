import { useSWRConfig } from 'swr';
import { Fragment, useState } from 'react'

// MUI IMPORTS
import { Button, Stack, Dialog, DialogContent, DialogActions } from '@mui/material';

// MUI ICONS
import { Add as AddIcon, Cached as CachedIcon } from '@mui/icons-material';

export default function DataControl({ endpoint, createForm }) {

  // Handle refresh button
  const { mutate } = useSWRConfig();
  const handleRefresh = async () => {
    await mutate(`/api/${endpoint}`);
  };

  // Handle dialog
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (

    <Fragment>
      {/* Button Stack */}
      <Stack spacing={2} direction="row" mb={4}>
        <Button color="primary" variant='contained' startIcon={<AddIcon />} aria-label="create rule" onClick={handleClickOpen}>
          Ajouter
        </Button>
        <Button color="primary" variant='outlined' startIcon={<CachedIcon />} aria-label="create rule" onClick={handleRefresh}>
          Actualiser les données
        </Button>
      </Stack>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ minWidth: { xs: '70vw', sm: '400px', md: '500px' } }}>
          {createForm}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          {/* <Button onClick={handleClose}>Créer</Button> */}
        </DialogActions>
      </Dialog>
    </Fragment>

  )
}
