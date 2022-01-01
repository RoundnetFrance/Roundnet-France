export default async function uploadFileTableCell({
  endpoint,
  id,
  tableData,
  url,
  element,
  mutate,
  setError,
}) {
  // Fetch API to patch element
  try {
    const response = await fetch(`/api/${endpoint}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        [element]: url,
      }),
    });

    // If response is not ok, manually throw an error
    if (!response.ok) {
      throw new Error(response.statusText);
    }

  } catch (error) {
    // If error, set error state and return original tableData for mutate function
    setError({
      name: 'Error',
      message: error.message || 'Une erreur est survenue lors de l\'upload du fichier.',
    });
    return tableData;
  }

  const patchFileData = async () => {
    // Mutate tableData to update the element. We update the value with the url of the Cloud Storage file
    const newRows = tableData.map((row) => {
      if (row._id === id) {
        row[element] = url;
      }
      return row;
    });

    // Send back the updated tableData (with patched row) to SWR /api/${component}' key to update local state
    return newRows;
  };

  // Actual action of mutate via SWR 
  mutate(`/api/${endpoint}`, patchFileData);
};
