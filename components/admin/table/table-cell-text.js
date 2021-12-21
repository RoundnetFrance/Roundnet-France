import { Fragment, useState } from 'react';
import { useSWRConfig } from 'swr';
import patchTableCell from '../../../helpers/mutaters/patch-table-cell';

// MUI IMPORTS
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// MUI ICONS
import EditIcon from '@mui/icons-material/Edit';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function TableCellText({ value, id, element, isEditable, tableData, endpoint }) {
  // Get the mutate function from swr
  const { mutate } = useSWRConfig();

  // Define a state for the editable text field
  const [controlledValue, setControlledElement] = useState(value);
  const [loading, setLoading] = useState(false);

  // Handle modal state and open/close functions
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // If value is too long, cut it into ellipsis
  const isLongString = value.length > 60;
  if (isLongString) {
    value = value.substring(0, 60) + '...';
  }

  // If element is editable, add an edit icon button with onClick event
  if (isEditable) {
    // Handle change on confirm button click (patch and mutate)
    const handleClick = async () => {
      setLoading(true);
      await patchTableCell({
        endpoint, 
        id, 
        body: { [element]: controlledValue }, 
        tableData, 
        element, 
        value: controlledValue, 
        mutate});
      // Close the modal
      setLoading(false);
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
              multiline={isLongString}
              value={controlledValue}
              onChange={(event) => setControlledElement(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Annuler</Button>
            <LoadingButton loading={loading} variant="contained" onClick={handleClick}>Modifier</LoadingButton>
          </DialogActions>
        </Dialog>

      </Fragment>
    )
  }

  // Handle click for displaying long strings
  const handleDisplayClick = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <TableCell>
      {
        isLongString ? (
          <Stack direction="row" alignItems="center"
            justifyContent="flex-start" spacing={1}>
            <IconButton aria-label={`${element}-see-more`} size="small" onClick={handleDisplayClick}>
              {open ? <ArrowDropDownIcon color="primary" fontSize="inherit" /> : <ArrowDropUpIcon color="primary" fontSize="inherit" />}
            </IconButton>
            <Box>{open ? value : controlledValue}</Box>
          </Stack>
        ) : value
      }
    </TableCell>
  )
}

export default TableCellText
