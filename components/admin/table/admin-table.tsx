import { useState, Fragment } from "react";

import {
  Table,
  TableContainer,
  Paper,
  Alert,
  Slide,
  Snackbar,
  Container,
} from "@mui/material";

import TableBody from "./table-body.js";
import TableHead from "./table-head.js";
import type { AdminTableConfig } from "../../../models/Admin.js";

interface AdminTableProps {
  tableConfig: AdminTableConfig;
}

function AdminTable({
  tableConfig: {
    name = "Administration table",
    tableHead,
    tableData = [],
    endpoint,
    deletable = false,
    error = false,
    loading,
  },
}: Readonly<AdminTableProps>) {
  // State to handle errors & success messages
  const [errorSnackbar, setErrorSnackbar] = useState<Error | null>(null);
  const [successSnackbar, setSuccessSnackbar] = useState<{
    name: string;
    message: string;
  } | null>(null);
  const handleSnackbarClose = () => {
    setErrorSnackbar(null);
    setSuccessSnackbar(null);
  };

  // Return an Alert if there's an error
  if (error)
    return (
      <Container maxWidth='sm'>
        <Alert severity='error' variant='filled'>
          Une erreur est survenue lors du chargement des données.
        </Alert>
      </Container>
    );

  // Gather the actual keys to display in the table by checking hidden key. Will be used to filter the data in Head and Body.
  const keysToDisplay = tableHead.map((key) => key._id);

  // Gather the editable fields in the table by checking editable key. Will be used to dynamically add editable fields in Body by checking its value type (input for string, clickable icon button for bool...)
  const editableFields = tableHead
    .filter((key) => key.editable)
    .map((key) => key._id);

  // Gather the image fields in the table by checking image key. Will be used to dynamically add image fields in Body.
  const imageFields = tableHead
    .filter((key) => key.image)
    .map((key) => key._id);

  // Gather the file fields in the table by checking file key. Will be used to dynamically add file fields in Body.
  const fileFields = tableHead.filter((key) => key.file).map((key) => key._id);

  // Gather the array fields in the table by checking array key. Will be used to dynamically add array fields in Body.
  const arrayFields = tableHead
    .filter((key) => key.array)
    .map((key) => key._id);
  const arrayValues = tableHead
    .filter((key) => key.array)
    .map((key) => ({
      key: key._id,
      array: key.array,
    }));

  // Gather the date fields in the table by checking date key. Will be used to dynamically add date fields in Body.
  const dateFields = tableHead.filter((key) => key.date).map((key) => key._id);

  // Check if every item of tableData has every keysToDisplay keys in it. If not, add them with a '$empty' value.
  for (const item of tableData) {
    for (const key of keysToDisplay) {
      if (!(key in item)) item[key] = "$empty";
    }
  }

  // Create the order of the table by creating an object with values from keysToDisplay, having null values (erased later in TableBody)
  const tableOrder = keysToDisplay.reduce(
    (acc, key) => ({ ...acc, [key]: null }),
    {},
  );

  // If deletable option, add a new '$deletable' element on the tableHead object and on each tableData object.
  if (
    !loading &&
    deletable &&
    !tableHead.find((item) => item._id === "$deletable")
  ) {
    tableHead.push({
      _id: "$deletable",
      name: "Supprimer",
      align: "right",
    });

    tableData.map((item) => {
      item.$deletable = true;
      return item;
    });
  }

  // Used for width of loading skeleton animation
  const nbOfElements = keysToDisplay.length;

  return (
    <Fragment>
      <Container maxWidth='lg' sx={{ py: 4 }}>
        <TableContainer component={Paper}>
          <Table aria-label={name}>
            <TableHead tableHead={tableHead} />
            {loading ? (
              <TableBody type='loading' nbOfElements={nbOfElements} />
            ) : (
              <TableBody
                type='data'
                tableData={tableData}
                keysToDisplay={keysToDisplay}
                endpoint={endpoint}
                editableFields={editableFields}
                fileFields={fileFields}
                imageFields={imageFields}
                dateFields={dateFields}
                arrayFields={arrayFields}
                arrayValues={arrayValues}
                setError={setErrorSnackbar}
                setSuccess={setSuccessSnackbar}
                tableOrder={tableOrder}
              />
            )}
          </Table>
        </TableContainer>
      </Container>

      {/* Snackbar for error display */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={
          errorSnackbar?.name === "Error" || successSnackbar?.name === "Success"
        }
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        TransitionComponent={Slide}
      >
        <Alert
          onClose={handleSnackbarClose}
          // @ts-ignore
          severity={
            errorSnackbar?.name.toLowerCase() ||
            successSnackbar?.name.toLowerCase() ||
            "info"
          }
          sx={{ width: "100%" }}
        >
          {errorSnackbar && (
            <Fragment>
              <strong>Une erreur est survenue :</strong> <br />
            </Fragment>
          )}
          {errorSnackbar?.message || successSnackbar?.message}
        </Alert>
      </Snackbar>
    </Fragment>
  );
}

export default AdminTable;
