import { Fragment, useState } from 'react';
import { useSWRConfig } from 'swr';
import patchTableCell from '../../../helpers/mutaters/patch-table-cell';

// MUI IMPORTS
import { TableCell, Stack, IconButton, Box, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// MUI ICONS
import EditIcon from '@mui/icons-material/Edit';

export default function TableCellArray({ values, id, element, isEditable, arrayValues, endpoint, tableData, setError, setSuccess }) {
  const { mutate } = useSWRConfig();
  console.log(isEditable)

  // Handle modal state and open/close functions
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [controlledArrayValues, setControlledArrayValues] = useState(values);

  // Map values to a list of inputs.
  function handleChange(event, value) {
    const newValue = event.target.value;
    setControlledArrayValues(prev => prev.map(item => {
      if (item[arrayValues.key] === value[arrayValues.key]) {
        item[arrayValues.value] = newValue;
      }
      return item;
    }))
  }

  const inputs = controlledArrayValues.map((value) => {
    return (
      <TextField
        key={value[arrayValues.key]}
        value={value[arrayValues.value]}
        label={value[arrayValues.key]}
        onChange={(event) => handleChange(event, value)}
      />
    )
  });

  // Handle send
  const [loading, setLoading] = useState(false);
  // Handle change on confirm button click (patch and mutate)
  const handleClick = async () => {
    setLoading(true);

    // Patch values
    await patchTableCell({
      endpoint,
      id,
      body: { [element]: controlledArrayValues },
      tableData,
      element,
      value: controlledArrayValues,
      mutate,
      setError,
      setSuccess,
    });

    // Close the modal
    setLoading(false);
    setOpen(false);
  };

  return (
    <Fragment>
      <TableCell>
        <Stack direction="row" alignItems="center"
          justifyContent="flex-start" spacing={1}>
          <Tooltip title="Modifier">
            <IconButton aria-label={`${element}-edit`} size="small" onClick={handleClickOpen}>
              <EditIcon color="primary" fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Box>
            Liste ({values.length} éléments)
          </Box>
        </Stack>
      </TableCell>

      {/* Dialog component */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modifier</DialogTitle>
        <DialogContent sx={{ minWidth: { xs: '70vw', sm: '400px', md: '500px' } }}>
          <Stack direction="column" spacing={2} my={2}>
            {inputs}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <LoadingButton loading={loading} variant="contained" onClick={handleClick}>Modifier</LoadingButton>
        </DialogActions>
      </Dialog>

    </Fragment>
  )
}
