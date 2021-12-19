import React from 'react'

// MUI IMPORTS
import MUITableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';

// COMPONENT IMPORTS
import TableDataCell from './table-data-cell.js';

function TableBody({ tableData, loading, nbOfElements, showId }) {
  // Handle loading skeleton animation
  if (loading) {
    return (
      <MUITableBody>
        <TableRow>
          
          <TableCell colSpan={ showId ? nbOfElements : nbOfElements - 1 }>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          </TableCell>
        </TableRow>
      </MUITableBody>
    )
  }

    return (
      <MUITableBody>
        {tableData.map(item => {

          return (
            <TableRow
              key={item._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {Object.keys(item).map(
                key => (
                  <TableDataCell key={key} value={item[key]} element={key} showId={showId} />
                )
              )}
            </TableRow>
          )
        }
        )}
      </MUITableBody>
    )
  }

  export default TableBody
