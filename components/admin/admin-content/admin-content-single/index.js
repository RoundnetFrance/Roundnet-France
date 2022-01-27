import { useState, useEffect } from "react";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import handleFormUpload from "../../../../helpers/form/handle-form-upload";
import { useTheme } from "@mui/material/styles";

// MUI IMPORTS
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
  Stack,
  Typography,
  Snackbar,
  Alert,
  Slide,
  Button,
  Skeleton,
  useMediaQuery,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

// COMPONENT IMPORTS
import PageTitle from "../../../ui/page-title";
import DataTabs from "./data-tabs";
import DataFields from "./data-fields";
import Dialog from "../../../ui/dialog";
import DataFieldsLoader from "./data-fields-loader";

export default function AdminContentSingle({
  config: { title, tabs, endpoint, adminEndpoint },
  data,
  mutate,
  documentId,
  isLoading,
}) {
  const router = useRouter();
  const theme = useTheme();
  const higherThanSm = useMediaQuery(theme.breakpoints.up("sm"));

  // Handle tab state
  const [currentTab, setCurrentTab] = useState(0);
  function handleTabChange(event, newValue) {
    setCurrentTab(newValue);
  }

  // Handle values state
  const [values, setValues] = useState(data);
  useEffect(() => {
    setValues(data);
  }, [data]);
  function handleValuesChange(id, value) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  // Handle loading state on submit/delete button
  const [loading, setLoading] = useState(false);

  // Handle snackbar state
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: "",
    severity: "",
  });
  function handleSnackbarClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarState((prev) => ({
      ...prev,
      open: false,
    }));
  }

  // Handle modal state and open/close functions
  const [dialogOpen, setDialogOpen] = useState(false);
  function handleDialogOpen() {
    setDialogOpen(true);
  }
  function handleDialogClose() {
    setDialogOpen(false);
  }

  // Extract tab names from config data
  const tabNames = tabs.map((tab) => tab.name);

  // Patch click button function
  function handleUpdate(event) {
    event.preventDefault();
    setLoading(true);
    async function patchData(originalData) {
      // Get every type=file in layout for every tab and merge into one array
      const files = [];
      tabs.forEach((tab) => {
        tab.layout.forEach((field) => {
          if (field.type === "file") {
            files.push(field);
          }
        });
      });

      let formToSubmit;
      //* Upload files if any
      if (files.length > 0) {
        try {
          formToSubmit = await handleFormUpload({
            fields: files,
            form: values,
            endpoint,
          });
          console.log(formToSubmit);
        } catch (err) {
          console.error(err);
          setSnackbarState({
            open: true,
            message: err.message || "Une erreur est survenue lors de l'upload",
            severity: "error",
          });
        }
      }

      //* Fetch API to patch element
      let response;
      try {
        response = await fetch(`/api/${endpoint}/${documentId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formToSubmit || values),
        });
        // If response is not ok, manually throw an error
        if (!response.ok) {
          throw new Error(response.statusText);
        }
      } catch (error) {
        // If error, set error state and return original data for mutate function
        setSnackbarState({
          open: true,
          message: error.message,
          severity: "error",
        });
        console.error("error", error);
        return originalData;
      } finally {
        setLoading(false);
      }

      // Send back the updated values to SWR /api/${endpoint}/${documentId' key to update local state
      return values;
    }

    // Actual action of mutate via SWR
    mutate(patchData);
    setSnackbarState({
      open: true,
      message: "Vos modifications ont bien été enregistrées",
      severity: "success",
    });
  }

  // Delete click button function
  async function handleDelete(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`/api/${endpoint}/${documentId}`, {
        method: "DELETE",
      });

      // If response is not ok, manually throw an error
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      // If error, set error state and return original data for mutate function
      setSnackbarState({
        open: true,
        message: error.message,
        severity: "error",
      });
      return originalData;
    } finally {
      setLoading(false);
    }

    setSnackbarState({
      open: true,
      message: "Suppression effectuée. Redirection...",
      severity: "success",
    });
    // Redirect to ${adminEndpoint} after 1.5 seconds
    setTimeout(() => {
      router.push(adminEndpoint);
    }, 1500);
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 2 }}>
      <PageTitle title={title} />

      <Alert severity="info" variant="filled" sx={{ my: 4 }}>
        <Typography variant="body1">
          Les modifications peuvent mettre jusqu&apos;à 10 minutes pour
          s&apos;appliquer complètement. Lorsque ce délai est passé, rechargez
          le cache de la page pour voir les modifications.
        </Typography>
      </Alert>

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
            isLoading={isLoading}
          />
        </Box>
        <LoadingButton
          variant="contained"
          onClick={handleUpdate}
          loading={loading}
          disabled={isLoading}
          sx={{ minWidth: "150px" }}
          fullWidth={!higherThanSm}
        >
          {isLoading ? <Skeleton sx={{ width: "100%" }} /> : "Enregistrer"}
        </LoadingButton>
      </Stack>

      <Card>
        {isLoading ? (
          <Box px={2} py={2}>
            <Skeleton variant="rectangular" width={140} height={30} />
            <Skeleton
              variant="rectangular"
              width={340}
              height={20}
              sx={{ mt: 1 }}
            />
          </Box>
        ) : (
          <CardHeader
            title={tabs[currentTab].name}
            titleTypographyProps={{ mb: 0 }}
            subheader={tabs[currentTab].description}
          />
        )}
        <Divider />
        <CardContent sx={{ p: { xs: 2, md: 2, lg: 4 } }}>
          <Box my={2}>
            {isLoading ? (
              <DataFieldsLoader />
            ) : (
              <DataFields
                layout={tabs[currentTab].layout}
                values={values}
                handleValuesChange={handleValuesChange}
              />
            )}
          </Box>
        </CardContent>
      </Card>

      <Divider sx={{ my: 4 }} />

      <Button
        variant="contained"
        color="error"
        fullWidth
        onClick={handleDialogOpen}
      >
        Supprimer l&apos;élément
      </Button>

      {/* Snackbar for error display */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbarState.open}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        TransitionComponent={Slide}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarState.severity || "info"}
          sx={{ width: "100%" }}
        >
          {snackbarState.message}
        </Alert>
      </Snackbar>

      <Dialog
        title="Supprimer"
        open={dialogOpen}
        handleClose={handleDialogClose}
        cancelText="Annuler"
        confirmButton={
          <LoadingButton
            loading={loading}
            variant="contained"
            color="error"
            onClick={handleDelete}
          >
            Supprimer
          </LoadingButton>
        }
        color="error"
      >
        <Typography mb={2}>
          Êtes-vous sûr de vouloir supprimer cet élément ?
        </Typography>
        <Alert severity="error">
          Toute suppression est définitive. Si des fichiers sont liés à la
          suppression (images, documents), ils seront également supprimés.
        </Alert>
      </Dialog>
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
  documentId: propTypes.string.isRequired,
  mutate: propTypes.func.isRequired,
  isLoading: propTypes.bool.isRequired,
};
