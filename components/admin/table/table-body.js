import React from 'react'

// MUI IMPORTS
import MUITableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

// COMPONENT IMPORTS
import TableDataCell from './table-data-cell.js';

function TableBody({ tableData, showId }) {
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
                <TableDataCell key={key} item={item} element={key} showId={showId} />
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
