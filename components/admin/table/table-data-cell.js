import propTypes from 'prop-types';
import { useSWRConfig } from 'swr';

// MUI IMPORTS
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';

// MUI ICONS
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';

function TableDataCell({ value, element, id, keysToDisplay, tableData }) {
  const { mutate } = useSWRConfig();

  // If element is a key in keysToDisplay, display it.
  // Ignore if keysToDisplay is not defined, or if element is a special $element.
  const specialElements = ['$deletable'];
  if (keysToDisplay.length > 0 &&
    !keysToDisplay.includes(element) &&
    !specialElements.includes(element)) {
    return null;
  }

  const smallCell = (typeof value === 'number' || typeof value === 'boolean');

  // If value is a boolean, replace raw bool with custom UI icon button
  if (typeof value === 'boolean') {
    value = value ?
      (
        <IconButton aria-label="delete" size="medium" color="primary">
          <CheckBoxIcon fontSize="inherit" />
        </IconButton>
      )
      :
      (
        <IconButton aria-label="delete" size="medium" color="primary">
          <CheckBoxOutlineBlankIcon fontSize="inherit" />
        </IconButton>
      );
  }

  // If value is $deletable, add a delete button
  if (element === '$deletable') {
    
    const handleDelete = async () => {
      console.log('to delete : ', id);
      const deleteRow = async () => {
        const response = await fetch(`/api/users/${id}`, {
          method: 'DELETE'
        });
        console.log('response from delete : ', response);
        const newRows = tableData.filter(row => row._id !== id);
        console.log(newRows);
        return newRows;
      };
      mutate(`/api/users/${id}`, deleteRow);
    };

    value = (
      <IconButton aria-label="delete" size="medium" color="error" onClick={handleDelete}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    );
  }

  return (
    <TableCell
      align={smallCell ? 'right' : 'left'}
      padding={smallCell ? 'checkbox' : 'normal'}
    >
      {value}
    </TableCell>
  )
}

TableDataCell.propTypes = {
  value: propTypes.any.isRequired,
  element: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  showId: propTypes.bool,
  keysToDisplay: propTypes.array.isRequired,
};

TableDataCell.defaultProps = {
  showId: false,
};

export default TableDataCell
