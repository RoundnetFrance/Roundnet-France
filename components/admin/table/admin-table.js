import propTypes from 'prop-types'

// MUI IMPORTS
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

// COMPONENT IMPORTS
import TableBody from './table-body.js';
import TableHead from './table-head.js';

function AdminTable({ name, tableHead, tableData }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label={name}>

        <TableHead tableHead={tableHead} />

        <TableBody tableData={tableData} />

      </Table>
    </TableContainer>
  )
}

AdminTable.propTypes = {
  name: propTypes.string,
  tableHead: propTypes.array.isRequired,
  tableData: propTypes.array.isRequired,
}

AdminTable.defaultProps = {
  name: 'Administration table',
}

export default AdminTable
