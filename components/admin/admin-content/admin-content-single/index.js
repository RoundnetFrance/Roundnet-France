import { useState, Fragment } from "react";
import propTypes from "prop-types";
// MUI IMPORTS
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
  Stack,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

// COMPONENT IMPORTS
import PageTitle from "../../../ui/page-title";
import DataTabs from "./data-tabs";
import DataFields from "./data-fields";

export default function AdminContentSingle({
  config: { title, tabs, endpoint },
  data,
  mutate,
  documentId,
}) {
  // Handle tab state
  const [currentTab, setCurrentTab] = useState(0);
  function handleTabChange(event, newValue) {
    setCurrentTab(newValue);
  }

  // Handle values state
  const [values, setValues] = useState(data);
  function handleValuesChange(id, value) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  // Extract tab names from config data
  const tabNames = tabs.map((tab) => tab.name);

  // Patch click button function
  function handleUpdate(event) {
    event.preventDefault();
    const patchData = async (originalData) => {
      // Fetch API to patch element
      let response;
      try {
        response = await fetch(`/api/${endpoint}/${documentId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        // If response is not ok, manually throw an error
        if (!response.ok) {
          throw new Error(response.statusText);
        }
      } catch (error) {
        // If error, set error state and return original data for mutate function
        // setError(error);
        console.log("error", error);
        return originalData;
      }

      // Send back the updated values to SWR /api/${endpoint}/${documentId' key to update local state
      return values;
    };

    // Actual action of mutate via SWR
    mutate(patchData);
    // setSuccess({
    //   name: "Success",
    //   message: "Mise à jour effectuée",
    // });
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 2 }}>
      <PageTitle title={title} />

      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        sx={{ mb: { xs: 2, sm: 4 } }}
        spacing={1}
      >
        <Box sx={{ flexGrow: 1 }}>
          <DataTabs
            currentTab={currentTab}
            handleTabChange={handleTabChange}
            tabs={tabNames}
          />
        </Box>
        <Button variant="contained" onClick={handleUpdate}>
          Enregistrer
        </Button>
      </Stack>

      <Card>
        <CardHeader
          title={tabs[currentTab].name}
          titleTypographyProps={{ mb: 0 }}
          subheader={tabs[currentTab].description}
        />
        <Divider />
        <CardContent sx={{ p: { xs: 2, md: 2, lg: 4 } }}>
          <Box my={2}>
            <DataFields
              layout={tabs[currentTab].layout}
              values={values}
              handleValuesChange={handleValuesChange}
            />
          </Box>
        </CardContent>
      </Card>

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
          severity={
            errorSnackbar?.name.toLowerCase() ||
            successSnackbar?.name.toLowerCase()
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
    </Container>
  );
}

AdminContentSingle.propTypes = {
  config: propTypes.shape({
    title: propTypes.string.isRequired,
    endpoint: propTypes.string.isRequired,
    tabs: propTypes.arrayOf(
      propTypes.shape({
        name: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        layout: propTypes.array.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
