import propTypes from 'prop-types';

// MUI IMPORTS
import TableCell from '@mui/material/TableCell';

// COMPONENTS IMPORTS
import TableCellDelete from './table-cell-delete';
import TableCellBool from './table-cell-bool';
import TableCellText from './table-cell-text';

function TableRow({ value, element, id, keysToDisplay, tableData, endpoint, editableFields, setError }) {
  const specialElements = ['$deletable'];

  // Check if the element is editable
  const isEditable = editableFields.includes(element);

  // If element is a key in keysToDisplay, display it.
  // Ignore if keysToDisplay is not defined, or if element is a special $element.
  if (keysToDisplay.length > 0 &&
    !keysToDisplay.includes(element) &&
    !specialElements.includes(element)) {
    return null;
  }

  // If value is $deletable, replate the bool by a delete button (with automated deletion handling)
  if (element === '$deletable') {
    return (
      <TableCellDelete id={id} endpoint={endpoint} tableData={tableData} setError={setError} />
    );
  }

  // If value is a boolean, replace raw bool with custom UI icon button
  if (typeof value === 'boolean') {
    return (
      <TableCellBool
        value={value}
        isEditable={isEditable}
        id={id}
        element={element}
        tableData={tableData}
        endpoint={endpoint}
        setError={setError}
      />
    )
  }

  // If value is a string or a number and is editable, replace raw string with custom input
  if ((typeof value === 'string' || typeof value === 'number')) {
    return (
      <TableCellText
        value={value}
        isEditable={isEditable}
        id={id}
        element={element}
        tableData={tableData}
        endpoint={endpoint}
        setError={setError}
      />
    );
  }

  return (
    <TableCell>
      {value}
    </TableCell>
  )
}

TableRow.propTypes = {
  value: propTypes.any.isRequired,
  element: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  showId: propTypes.bool,
  keysToDisplay: propTypes.array.isRequired,
  editableFields: propTypes.arrayOf(propTypes.string).isRequired,
};

TableRow.defaultProps = {
  showId: false,
};

export default TableRow
