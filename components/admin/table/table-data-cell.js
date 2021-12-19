import propTypes from 'prop-types';
import { useSWRConfig } from 'swr';

// MUI IMPORTS
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';

// MUI ICONS
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';

// COMPONENTS IMPORTS
import TableDelete from './table-delete';

function TableDataCell({ value, element, id, keysToDisplay, tableData, endpoint }) {
  const { mutate } = useSWRConfig();
  const specialElements = ['$deletable'];

  // If element is a key in keysToDisplay, display it.
  // Ignore if keysToDisplay is not defined, or if element is a special $element.
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

  // If value is $deletable, replate the bool by a delete button (with automated deletion handling)
  if (element === '$deletable') {
    value = (
      <TableDelete id={id} endpoint={endpoint} tableData={tableData} />
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
