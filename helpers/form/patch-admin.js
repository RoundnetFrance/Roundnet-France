import handleFormUpload from "./handle-form-upload";

export default async function patchAdmin({
  setLoading,
  setSnackbarState,
  mutate,
  tabs,
  contentToSlug,
  values,
  endpoint,
  documentId,
}) {
  setLoading(true);

  // Actual SWR FUNCTION
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
          contentToSlug: values[contentToSlug || "title"],
          form: values,
          endpoint,
        });
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
    try {
      const response = await fetch(`/api/${endpoint}/${documentId}`, {
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

      setSnackbarState({
        open: true,
        message: "Vos modifications ont bien été enregistrées",
        severity: "success",
      });

      // Send back the updated values to SWR /api/${endpoint}/${documentId) key to update local state
      return values;
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
  }

  // Actual action of mutate via SWR
  mutate(patchData);
}
