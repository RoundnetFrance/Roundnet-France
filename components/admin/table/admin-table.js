import propTypes from 'prop-types'

// MUI IMPORTS
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';

// COMPONENT IMPORTS
import TableBody from './table-body.js';
import TableHead from './table-head.js';

function AdminTable({ name, tableHead, tableData, error, loading }) {
  // Return an Alert if there's an error
  if (error) return (
    <Container maxWidth="sm">
      <Alert severity="error" variant="filled">Une erreur est survenue lors du chargement des données.</Alert>
    </Container>
  )

  const nbOfElements = tableHead.length;

  return (
    <TableContainer component={Paper}>
      <Table aria-label={name}>

        <TableHead tableHead={tableHead} />

        {loading ? <TableBody loading={loading} nbOfElements={nbOfElements} /> : <TableBody tableData={tableData} />}

      </Table>
    </TableContainer>
  )
}

AdminTable.propTypes = {
  name: propTypes.string,
  tableHead: propTypes.array.isRequired,
  tableData: propTypes.array,
  error: propTypes.bool,
  loading: propTypes.bool,
}

AdminTable.defaultProps = {
  name: 'Administration table',
  isError: false,
  tableData: [],
}

export default AdminTable
