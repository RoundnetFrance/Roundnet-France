import propTypes from 'prop-types';
import { useState } from 'react';

// MUI IMPORTS
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';

// COMPONENT IMPORTS
import TableBody from './table-body.js';
import TableHead from './table-head.js';

function AdminTable({ name, tableHead, tableData, deletable, error, loading, keysToDisplay }) {

  // Return an Alert if there's an error
  if (error) return (
    <Container maxWidth="sm">
      <Alert severity="error" variant="filled">Une erreur est survenue lors du chargement des données.</Alert>
    </Container>
  )

  // If deletable option, add a new '$deletable' element on the tableHead object and on each tableData object.
  if (deletable && !tableHead.find(item => item._id === '$deletable')) {
    tableHead.push({
      _id: '$deletable',
      name: 'Supprimer',
      align: 'right',
    });

    tableData.map(item => {
      item.$deletable = true;
      return item;
    });
  }

  // Used for width of loading skeleton animation
  const nbOfElements = keysToDisplay.length;

  return (
    <TableContainer component={Paper}>
      <Table aria-label={name}>

        <TableHead tableHead={tableHead} deletable={deletable} />

        {
          loading ?
            <TableBody loading={loading} nbOfElements={nbOfElements} /> : <TableBody tableData={tableData} deletable={deletable} keysToDisplay={keysToDisplay} />
        }

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
  deletable: propTypes.bool,
  keysToDisplay: propTypes.arrayOf(propTypes.string),
}

AdminTable.defaultProps = {
  name: 'Administration table',
  isError: false,
  tableData: [],
  deletable: false,
  keysToDisplay: [],
}

export default AdminTable
