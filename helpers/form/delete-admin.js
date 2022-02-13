export default async function handleDelete({
  setLoading,
  endpoint,
  documentId,
  setSnackbarState,
  adminEndpoint,
  router,
}) {
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
      message:
        error.message || "Une erreur est survenue lors de la suppression",
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
