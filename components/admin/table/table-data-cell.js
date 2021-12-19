import propTypes from 'prop-types';

// MUI IMPORTS
import TableCell from '@mui/material/TableCell';

// MUI ICONS
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

function TableDataCell({ value, element, showId }) {
  console.log(typeof value);
  if (element === '_id' && !showId) {
    return null;
  }
  
  const align = (typeof value === 'number' || typeof value === 'boolean')  ? 'right' : 'left';


  if (typeof value === 'boolean') {
    value = value ? <CheckBoxIcon fontSize="small" sx={{ cursor: 'pointer' }} color="primary" /> : <CheckBoxOutlineBlankIcon fontSize="small" sx={{ cursor: 'pointer' }} />;
  }

  

  return (
    <TableCell
      align={align}
    >
      {value}
    </TableCell>
  )
}

TableDataCell.propTypes = {
  value: propTypes.any.isRequired,
  element: propTypes.string.isRequired,
  showId: propTypes.bool,
};

TableDataCell.defaultProps = {
  showId: false,
};

export default TableDataCell
