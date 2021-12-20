import { useSWRConfig } from 'swr';
import patchTableCell from '../../../helpers/mutaters/patch-table-cell';

// MUI IMPORTS
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

// MUI ICONS IMPORTS
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function TableEditBool({ value, isEditable, id, element, endpoint, tableData }) {
  const { mutate } = useSWRConfig();

  const handleChange = async () => {
    await patchTableCell(endpoint, id, { [element]: !value }, tableData, element, !value, mutate);
  };

  let uneditableIcon;
  if (!isEditable) {
    uneditableIcon = value ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />;
  }

  return (
    isEditable ? (
      <Box component="form" aria-label="editable-item" size="medium" color="primary" >
        <Checkbox checked={value} onChange={handleChange} />
      </Box >
    ) : uneditableIcon
  )
}

export default TableEditBool
