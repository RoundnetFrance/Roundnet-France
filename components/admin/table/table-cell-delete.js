import { useSWRConfig } from 'swr';
import { Fragment, useState } from 'react';

// MUI IMPORTS
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

// MUI ICONS
import DeleteIcon from '@mui/icons-material/Delete';

function TableCellDelete({ id, endpoint, tableData }) {
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
    // Fetch API to delete element, then mutate tableData and return it for SWR to handle
    // We're using the endpoint specified in the tableConfig object to fetch and mutate dynamically
    const deleteRow = async () => {
      // Fetch API to delete element
      await fetch(`/api/${endpoint}/${id}`, {
        method: 'DELETE'
      });

      // Send back the updated tableData (minus the deleted element) to SWR /api/${component}' key
      const newRows = tableData.filter(row => row._id !== id);
      return newRows;
    };

    // Actual action of mutate via SWR
    await mutate(`/api/${endpoint}`, deleteRow);
    setLoading(false);
  };

  return (
    <Fragment>
      <TableCell align="right">
        <IconButton aria-label="delete" size="medium" color="error" onClick={handleClickOpen}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </TableCell>

      {/* Dialog component */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Supprimer</DialogTitle>
        <DialogContent sx={{ minWidth: { xs: '70vw', sm: '400px', md: '500px' } }}>
          <Typography mb={2}>Êtes-vous sûr de vouloir supprimer cet élément ?</Typography>
          <Alert severity="error">Toute suppression est définitive.</Alert>
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
