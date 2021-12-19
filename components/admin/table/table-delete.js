import { useSWRConfig } from 'swr';

// MUI IMPORTS
import IconButton from '@mui/material/IconButton';

// MUI ICONS
import DeleteIcon from '@mui/icons-material/Delete';

function TableDelete({ id, endpoint, tableData }) {
  const { mutate } = useSWRConfig();

  const handleDelete = async () => {
    // Fetch API to delete element, then mutate tableData and return it for SWR to handle
    const deleteRow = async () => {
      const response = await fetch(`/api/${endpoint}/${id}`, {
        method: 'DELETE'
      });
      console.log('response from delete : ', response);
      const newRows = tableData.filter(row => row._id !== id);
      return newRows;
    };

    // Actual action of mutate via SWR
    mutate(`/api/users`, deleteRow);
  };

  return(
    <IconButton aria-label="delete" size="medium" color="error" onClick={handleDelete}>
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
}

export default TableDelete
