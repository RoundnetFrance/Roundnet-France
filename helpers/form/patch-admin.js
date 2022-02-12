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

  // Get every type=file in layout for every tab and merge into one array
  const files = [];
  tabs.forEach((tab) => {
    tab.layout.forEach((field) => {
      if (field.type === "file") {
        files.push(field);
      }
    });
  });

  //* Upload files if any
  const formToSubmit = await handleFormUpload({
    fields: files,
    contentToSlug: values[contentToSlug || "title"],
    form: values,
    endpoint,
  });

  // Actual SWR FUNCTION
  async function patchData(originalData) {
    try {
      // * Make API CALL
      const response = await fetch(`/api/${endpoint}/${documentId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formToSubmit),
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
    } catch (err) {
      console.error(err);
      setSnackbarState({
        open: true,
        message: err.message || "Une erreur est survenue.",
        severity: "error",
      });
      return originalData;
    } finally {
      setLoading(false);
    }
  }

  // Actual action of mutate via SWR
  await mutate(patchData);
}
