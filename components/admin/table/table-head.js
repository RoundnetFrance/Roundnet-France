import propTypes from 'prop-types';

// MUI IMPORTS
import MUITableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function TableHead({ tableHead, showId, deletable }) {
  return (
    <MUITableHead>
      <TableRow>
        {tableHead.map(item => {
          if (item.name === 'ID' && !showId) {
            return null;
          }

          const align = item.align ? item.align : 'left';
          return (
            <TableCell key={item._id} align={align}><strong>{item.name}</strong></TableCell>
          )
        }
        )}
      </TableRow>
    </MUITableHead>
  )
};

TableHead.propTypes = {
  tableHead: propTypes.array.isRequired,
  showId: propTypes.bool,
  deletable: propTypes.bool
};

TableHead.defaultProps = {
  showId: false,
  deletable: false,
};

export default TableHead
