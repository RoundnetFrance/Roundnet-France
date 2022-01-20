import { useSWRConfig } from 'swr';
import { Fragment, useState } from 'react';
import deleteTableData from '../../../helpers/mutaters/delete-table-cell';

// MUI IMPORTS
import { IconButton, TableCell, Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Alert, Tooltip } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// MUI ICONS
import DeleteIcon from '@mui/icons-material/Delete';

function TableCellDelete({ id, endpoint, tableData, setError, setSuccess }) {
  const { mutate } = useSWRConfig();

  // Define a state for the loading
  const [loading, setLoading] = useState(false);

  // Handle modal state and open/close functions
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    setLoading(true);

    await deleteTableData({
      endpoint,
      id,
      data: tableData,
      mutate,
      setError,
      setSuccess
    })

    setLoading(false);
  };

  return (
    <Fragment>
      <TableCell align="right">
        <Tooltip title="Supprimer">
          <IconButton aria-label="delete" size="medium" color="error" onClick={handleClickOpen}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </TableCell>

      {/* Dialog component */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Supprimer</DialogTitle>
        <DialogContent sx={{ minWidth: { xs: '70vw', sm: '400px', md: '500px' } }}>
          <Typography mb={2}>Êtes-vous sûr de vouloir supprimer cet élément ?</Typography>
          <Alert severity="error">Toute suppression est définitive. Si des fichiers sont liés à la suppression (images, documents), ils seront également supprimés.</Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">Annuler</Button>
          <LoadingButton loading={loading} variant="contained" color="error" onClick={handleDelete}>Supprimer</LoadingButton>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default TableCellDelete
