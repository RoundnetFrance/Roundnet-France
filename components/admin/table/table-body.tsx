import MUITableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import MUITableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";

import TableRow from "./table-row.js";
import type { Dispatch, SetStateAction } from "react";

type LoadingProps = {
  type: "loading";
  nbOfElements: number;
};

type TableDataProps = {
  type: "data";
  tableData: any[];
  keysToDisplay: string[];
  endpoint: string;
  editableFields: string[];
  imageFields: string[];
  fileFields: string[];
  arrayFields: string[];
  arrayValues: any;
  dateFields: string[];
  tableOrder: any;
  setError: Dispatch<SetStateAction<Error>>;
  setSuccess: Dispatch<SetStateAction<{ name: string; message: string }>>;
};

type TableBodyProps = LoadingProps | TableDataProps;

function TableBody(props: Readonly<TableBodyProps>) {
  // Handle loading skeleton animation
  if (props.type === "loading") {
    return (
      <MUITableBody>
        <MUITableRow>
          <TableCell colSpan={props.nbOfElements}>
            <Skeleton animation='wave' />
            <Skeleton animation='wave' />
            <Skeleton animation='wave' />
            <Skeleton animation='wave' />
          </TableCell>
        </MUITableRow>
      </MUITableBody>
    );
  }

  const {
    tableData,
    keysToDisplay,
    endpoint,
    editableFields,
    imageFields,
    fileFields,
    arrayFields,
    arrayValues,
    dateFields,
    tableOrder,
    setError,
    setSuccess,
  } = props;

  return (
    <MUITableBody>
      {tableData?.map((item) => {
        // Reassign order of keys to display (avoid mismathing columns when key is missing in data object - for example, when a field is not required)
        const orderedData = Object.assign(tableOrder, item);

        return (
          <MUITableRow
            key={item._id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            {Object.keys(orderedData).map((key) => {
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
              );
            })}
          </MUITableRow>
        );
      })}
    </MUITableBody>
  );
}

export default TableBody;
