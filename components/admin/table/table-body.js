import React from 'react'

// MUI IMPORTS
import MUITableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import MUITableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';

// COMPONENT IMPORTS
import TableRow from './table-row.js';

function TableBody({ tableData, loading, nbOfElements, keysToDisplay, endpoint, editableFields, imageFields, fileFields, arrayFields, arrayValues, dateFields, tableOrder, setError, setSuccess }) {

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
        // Reassign order of keys to display (avoid mismathing columns when key is missing in data object - for example, when a field is not required)
        const orderedData = Object.assign(tableOrder, item);

        return (
          <MUITableRow
            key={item._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {Object.keys(orderedData).map(
              key => {
                return (
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
                    arrayFields={arrayFields}
                    arrayValues={arrayValues}
                    setError={setError}
                    setSuccess={setSuccess}
                  />
                )
              }
            )}
          </MUITableRow>
        )
      }
      )}
    </MUITableBody>
  )
}

export default TableBody
