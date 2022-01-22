import propTypes from 'prop-types';

// MUI IMPORTS
import TableCell from '@mui/material/TableCell';

// COMPONENTS IMPORTS
import TableCellDelete from './table-cell-delete';
import TableCellBool from './table-cell-bool';
import TableCellText from './table-cell-text';
import TableCellFile from './table-cell-file';
import TableCellArray from './table-cell-array';

function TableRow({ value, element, id, keysToDisplay, tableData, endpoint, editableFields, imageFields, fileFields, dateFields, arrayFields, arrayValues, setError, setSuccess }) {
  console.log(element);
  const specialElements = ['$deletable'];

  // Check if the element is editable
  const isEditable = editableFields.includes(element);

  // Check if element is an image
  const isImage = imageFields.includes(element);

  // Check if the element is a file
  const isFile = fileFields.includes(element);

  // Check if the value is a date
  const isDate = dateFields.includes(element);

  // Check if the value is an array
  const isArray = arrayFields.includes(element);

  arrayValues = arrayValues.find(arrayValue => arrayValue.key === element);

  // If element is a key in keysToDisplay, display it.
  // Ignore if keysToDisplay is not defined, or if element is a special $element.
  if (keysToDisplay.length > 0 &&
    !keysToDisplay.includes(element) &&
    !specialElements.includes(element)) {
    return null;
  }

  // If element is $deletable, replate the bool by a delete button (with automated deletion handling)
  if (element === '$deletable') {
    return (
      <TableCellDelete
        id={id}
        endpoint={endpoint}
        tableData={tableData}
        setError={setError}
        setSuccess={setSuccess}
      />
    );
  }

  // If element is a file, display it as an image
  if (isFile || isImage) {
    return (
      <TableCellFile
        value={value}
        isEditable={isEditable}
        isImage={isImage}
        id={id}
        element={element}
        endpoint={endpoint}
        tableData={tableData}
        setError={setError}
        setSuccess={setSuccess}
      />
    );
  }

  // if element is an array, display it as a list
  if (isArray) {
    return (
      <TableCellArray
        id={id}
        element={element}
        isEditable={isEditable}
        values={value}
        endpoint={endpoint}
        arrayValues={arrayValues.array}
        tableData={tableData}
        setError={setError}
        setSuccess={setSuccess}
      />
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
        setSuccess={setSuccess}
      />
    )
  }

  // If value is a string or a number and is editable, replace raw string with custom input
  if ((typeof value === 'string' || typeof value === 'number')) {
    return (
      <TableCellText
        value={value === '$empty' ? 'N/A' : value}
        isEditable={isEditable}
        id={id}
        element={element}
        tableData={tableData}
        endpoint={endpoint}
        setError={setError}
        setSuccess={setSuccess}
        isDate={isDate}
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
