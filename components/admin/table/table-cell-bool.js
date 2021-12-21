import { useSWRConfig } from 'swr';
import patchTableCell from '../../../helpers/mutaters/patch-table-cell';

// MUI IMPORTS
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';

// MUI ICONS IMPORTS
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function TableCellBool({ value, isEditable, id, element, endpoint, tableData, setError }) {
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
      setError
    });
  };

  let uneditableIcon;
  if (!isEditable) {
    uneditableIcon = value ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />;
  }

  return (
    <TableCell align="right">
      {isEditable ? (
        <Box component="form" aria-label="editable-item" size="medium" color="primary">
          <Checkbox checked={value} onChange={handleChange} />
        </Box >
      ) : uneditableIcon}
    </TableCell>
  )
}

export default TableCellBool
