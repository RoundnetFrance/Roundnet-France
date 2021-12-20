import { Fragment, useState } from 'react';
import { useSWRConfig } from 'swr';
import patchTableCell from '../../../helpers/mutaters/patch-table-cell';

// MUI IMPORTS
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// MUI ICONS
import EditIcon from '@mui/icons-material/Edit';

function TableCellText({ value, id, element, isEditable, tableData, endpoint }) {
  // Get the mutate function from swr
  const { mutate } = useSWRConfig();

  // Define a state for the editable text field
  const [controlledElement, setControlledElement] = useState(value);

  // Handle modal state and open/close functions
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // If value is too long, cut it into ellipsis
  const stringLength = value.length;
  if (stringLength > 60) {
    value = value.substring(0, 60) + '...';
  }

  // If element is editable, add an edit icon button with onClick event
  if (isEditable) {
    // Handle change on confirm button click (patch and mutate)
    const handleClick = async () => {
      await patchTableCell(endpoint, id, { [element]: controlledElement }, tableData, element, controlledElement, mutate);
      // Close the modal
      setOpen(false);
    };

    return (
      <Fragment>
        <TableCell>
          <Stack direction="row" alignItems="center"
            justifyContent="flex-start" spacing={1}>

            <IconButton aria-label={`${element}-edit`} size="small" onClick={handleClickOpen}>
              <EditIcon color="primary" fontSize="inherit" />
            </IconButton>
            <Box>{value}</Box>
          </Stack>
        </TableCell>

        {/* Dialog component */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Modifier</DialogTitle>
          <DialogContent sx={{ minWidth: { xs: '70vw', sm: '400px', md: '500px' } }}>
            <TextField
              autoFocus
              margin="dense"
              id={element}
              fullWidth
              variant="standard"
              multiline={stringLength > 60}
              value={controlledElement}
              onChange={(event) => setControlledElement(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Annuler</Button>
            <Button variant="contained" onClick={handleClick}>Modifier</Button>
          </DialogActions>
        </Dialog>

      </Fragment>
    )
  }

  return (
    <TableCell>
      {value}
    </TableCell>
  )
}

export default TableCellText
