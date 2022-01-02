import React from 'react'

// MUI IMPORTS
import MUITableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import MUITableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';

// COMPONENT IMPORTS
import TableRow from './table-row.js';

function TableBody({ tableData, loading, nbOfElements, keysToDisplay, endpoint, editableFields, imageFields, fileFields, dateFields, setError, setSuccess }) {

  // Handle loading skeleton animation
  if (loading) {
    return (
      <MUITableBody>
        <MUITableRow>
          <TableCell colSpan={nbOfElements}>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </TableCell>
        </MUITableRow>
      </MUITableBody>
    )
  }

  return (
    <MUITableBody>
      {tableData?.map(item => {

        return (
          <MUITableRow
            key={item._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {Object.keys(item).map(
              key => (
                <TableRow
                  key={key}
                  id={item._id}
                  value={item[key]}
                  element={key}
                  keysToDisplay={keysToDisplay}
                  tableData={tableData}
                  endpoint={endpoint}
                  editableFields={editableFields}
                  imageFields={imageFields}
                  fileFields={fileFields}
                  dateFields={dateFields}
                  setError={setError}
                  setSuccess={setSuccess}
                />
              )
            )}
          </MUITableRow>
        )
      }
      )}
    </MUITableBody>
  )
}

export default TableBody
