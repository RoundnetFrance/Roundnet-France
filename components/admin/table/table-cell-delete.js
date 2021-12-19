import { useSWRConfig } from 'swr';

// MUI IMPORTS
import IconButton from '@mui/material/IconButton';

// MUI ICONS
import DeleteIcon from '@mui/icons-material/Delete';

function TableCellDelete({ id, endpoint, tableData }) {
  const { mutate } = useSWRConfig();

  const handleDelete = async () => {
    // Fetch API to delete element, then mutate tableData and return it for SWR to handle
    // We're using the endpoint specified in the tableConfig object to fetch and mutate dynamically
    const deleteRow = async () => {
      // Fetch API to delete element
      await fetch(`/api/${endpoint}/${id}`, {
        method: 'DELETE'
      });

      // Send back the updated tableData (minus the deleted element) to SWR /api/${component}' key
      const newRows = tableData.filter(row => row._id !== id);
      return newRows;
    };

    // Actual action of mutate via SWR
    mutate(`/api/${endpoint}`, deleteRow);
  };

  return (
    <IconButton aria-label="delete" size="medium" color="error" onClick={handleDelete}>
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
}

export default TableCellDelete
