import { Fragment, useState } from 'react';
import { useSWRConfig } from 'swr';
import patchTableCell from '../../../helpers/mutaters/patch-table-cell';
import { fr } from 'date-fns/locale';

// MUI IMPORTS
import { TableCell, Box, Stack, IconButton, Button, TextField, Tooltip } from '@mui/material';
import { LoadingButton, DatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';

// MUI ICONS
import EditIcon from '@mui/icons-material/Edit';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// COMPONENT IMPORTS
import Dialog from '../../ui/dialog';

function TableCellText({ value, id, element, isEditable, tableData, endpoint, isDate, setError, setSuccess }) {
  // Get the mutate function from swr
  const { mutate } = useSWRConfig();

  // Define a state for the editable text field
  const [controlledValue, setControlledElement] = useState(value);
  const [controlledDate, setControlledDate] = useState(value);
  const [loading, setLoading] = useState(false);

  // Handle modal state and open/close functions
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Make readable value if value is a date
  if (isDate) {
    value = new Date(value).toLocaleDateString();
  }

  // If value is too long, cut it into ellipsis
  const isLongString = value.length > 60;
  if (isLongString) {
    value = value.substring(0, 60) + '...';
  }

  // If element is editable, add an edit icon button with onClick event
  if (isEditable) {

    let date;
    if (isDate) {
      date = new Date(value).toLocaleDateString('fr-FR');
    }

    // Handle change on confirm button click (patch and mutate)
    const handleClick = async () => {
      setLoading(true);
      await patchTableCell({
        endpoint,
        id,
        body: { [element]: isDate ? controlledDate : controlledValue },
        tableData,
        element,
        value: isDate ? date : controlledValue,
        mutate,
        setError,
        setSuccess,
      });
      // Close the modal
      setLoading(false);
      setOpen(false);
    };

    // Generate specific editable field if value is a date or a string/number
    const editableField = isDate ? (
      <LocalizationProvider dateAdapter={DateAdapter} locale={fr}>
        <DatePicker
          openTo="month"
          views={['year', 'month', 'day']}
          value={controlledDate}
          onChange={(newValue) => {
            setControlledDate(newValue);
          }}
          renderInput={(params) => <TextField label="Date" {...params} />}
        />
      </LocalizationProvider>

    ) : (
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
    );


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
            <Box>{value}</Box>
          </Stack>
        </TableCell>

        {/* Dialog component */}
        <Dialog
          title="Modifier"
          open={open}
          handleClose={handleClose}
          cancelText="Annuler"
          confirmButton={<LoadingButton loading={loading} variant="contained" onClick={handleClick}>Modifier</LoadingButton>}
        >
          {editableField}
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
