import { useSWRConfig } from "swr";
import patchTableCell from "../../../helpers/mutaters/patch-table-cell";

import { Box, Checkbox, TableCell, Tooltip } from "@mui/material";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import type { SetStateAction, Dispatch } from "react";

interface TableCellBoolProps {
  value: boolean;
  isEditable: boolean;
  id: string;
  element: string;
  endpoint: string;
  tableData: any;
  setError: Dispatch<SetStateAction<Error>>;
  setSuccess: Dispatch<SetStateAction<{ name: string; message: string }>>;
}

function TableCellBool({
  value,
  isEditable,
  id,
  element,
  endpoint,
  tableData,
  setError,
  setSuccess,
}: Readonly<TableCellBoolProps>) {
  const { mutate } = useSWRConfig();

  const handleChange = async () => {
    await patchTableCell({
      endpoint,
      id,
      body: { [element]: !value },
      tableData,
      element,
      value: !value,
      mutate,
      setError,
      setSuccess,
    });
  };

  return (
    <TableCell align='right'>
      {isEditable ? (
        <Box component='form' aria-label='editable-item' color='primary'>
          <Tooltip title='Modifier'>
            <Checkbox checked={value} onChange={handleChange} />
          </Tooltip>
        </Box>
      ) : value ? (
        <CheckBoxIcon />
      ) : (
        <CheckBoxOutlineBlankIcon />
      )}
    </TableCell>
  );
}

export default TableCellBool;
