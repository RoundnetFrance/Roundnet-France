import { useSWRConfig } from 'swr';

// MUI IMPORTS
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

// MUI ICONS IMPORTS
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function TableEditBool({ value, isEditable, id, element, endpoint, tableData }) {
  const { mutate } = useSWRConfig();

  const handleChange = async () => {
    // Fetch API to patch element, then mutate tableData and return it for SWR to handle
    // We're using the endpoint specified in the tableConfig object to fetch and mutate dynamically
    const patchRow = async () => {
      // Fetch API to patch element
      await fetch(`/api/${endpoint}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          [element]: !value,
        }),
      });

      // Mutate tableData to update the element
      const newRows = tableData.map((row) => {
        if (row._id === id) {
          row[element] = !value;
        }
        return row;
      });

      // Send back the updated tableData (with the patched row on authorized) to SWR /api/${component}' key
      return newRows;
    };

    // Actual action of mutate via SWR
    mutate(`/api/${endpoint}`, patchRow);
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
