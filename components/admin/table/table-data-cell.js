import propTypes from 'prop-types';

// MUI IMPORTS
import TableCell from '@mui/material/TableCell';

// MUI ICONS
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

function TableDataCell({ item, element, showId }) {
  let value = item[element];
  if (element === '_id' && !showId) {
    return null;
  }

  if (typeof item[element] === 'boolean') {
    value = item[element] ? <CheckBoxIcon fontSize="small" sx={{ cursor: 'pointer' }} /> : <CheckBoxOutlineBlankIcon fontSize="small" sx={{ cursor: 'pointer' }} />;
  }

  const align = typeof item[element] === 'number' || typeof item[element] === 'boolean'  ? 'right' : 'left';

  return (
    <TableCell
      align={align}
    >
      {value}
    </TableCell>
  )
}

TableDataCell.propTypes = {
  item: propTypes.object.isRequired,
  element: propTypes.string.isRequired,
  showId: propTypes.bool,
};

TableDataCell.defaultProps = {
  showId: false,
};

export default TableDataCell
