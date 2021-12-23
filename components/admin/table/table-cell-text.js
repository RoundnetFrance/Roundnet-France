import { Fragment, useState } from 'react';
import { useSWRConfig } from 'swr';
import patchTableCell from '../../../helpers/mutaters/patch-table-cell';
import { fr } from 'date-fns/locale';

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
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import Tooltip from '@mui/material/Tooltip';

// MUI ICONS
import EditIcon from '@mui/icons-material/Edit';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

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
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Modifier</DialogTitle>
          <DialogContent sx={{ minWidth: { xs: '70vw', sm: '400px', md: '500px' } }}>
            {editableField}
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
