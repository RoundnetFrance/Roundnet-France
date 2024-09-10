import {
  type Dispatch,
  Fragment,
  type SetStateAction,
  useState,
  type ChangeEvent,
} from "react";
import { useSWRConfig } from "swr";
import patchTableCell from "../../../helpers/mutaters/patch-table-cell";

import {
  TableCell,
  Stack,
  IconButton,
  Box,
  Tooltip,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import EditIcon from "@mui/icons-material/Edit";
import { Dialog } from "../../ui";

interface TableCellArrayProps {
  values: any;
  id: string;
  element: string;
  isEditable: boolean;
  arrayValues: any;
  endpoint: string;
  tableData: any;
  setError: Dispatch<SetStateAction<Error>>;
  setSuccess: Dispatch<
    SetStateAction<{
      name: string;
      message: string;
    }>
  >;
}

export default function TableCellArray({
  values,
  id,
  element,
  isEditable,
  arrayValues,
  endpoint,
  tableData,
  setError,
  setSuccess,
}: Readonly<TableCellArrayProps>) {
  const { mutate } = useSWRConfig();

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
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value,
  ) {
    const newValue = event.target.value;
    setControlledArrayValues((prev) =>
      prev.map((item) => {
        if (item[arrayValues.key] === value[arrayValues.key]) {
          item[arrayValues.value] = newValue;
        }
        return item;
      }),
    );
  }

  const inputs = controlledArrayValues.map((value) => {
    return isEditable ? (
      <TextField
        key={value[arrayValues.key]}
        value={value[arrayValues.value]}
        label={value[arrayValues.key]}
        onChange={(event) => handleChange(event, value)}
      />
    ) : (
      <Typography variant='body1' key={value[arrayValues.value]}>
        {value[arrayValues.value]}
      </Typography>
    );
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
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='flex-start'
          spacing={1}
        >
          <Tooltip title='Modifier'>
            <IconButton
              aria-label={`${element}-edit`}
              size='small'
              onClick={handleClickOpen}
            >
              <EditIcon color='primary' fontSize='inherit' />
            </IconButton>
          </Tooltip>
          <Box>Liste ({values.length} éléments)</Box>
        </Stack>
      </TableCell>

      {/* Dialog component */}
      <Dialog
        open={open}
        handleClose={handleClose}
        title={isEditable ? "Modifier" : "Elements"}
        cancelText='Annuler'
        confirmButton={
          <LoadingButton
            loading={loading}
            variant='contained'
            onClick={handleClick}
          >
            Modifier
          </LoadingButton>
        }
      >
        <Stack direction='column' spacing={2} my={2}>
          {inputs}
        </Stack>
      </Dialog>
    </Fragment>
  );
}
