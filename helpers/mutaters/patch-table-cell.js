export default async function patchTableCell({
  endpoint,
  id,
  body,
  tableData,
  element,
  value,
  mutate,
  setError,
}) {
  // Fetch API to patch element, then mutate tableData and return it for SWR to handle
  // We're using the endpoint specified in the tableConfig object to fetch and mutate dynamically
  let response;
  const patchData = async () => {
    // Fetch API to patch element
    try {
      response = await fetch(`/api/${endpoint}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      // If response is not ok, manually throw an error
      if (!response.ok) {
        throw new Error(response.statusText);
      }

    } catch (error) {
      // If error, set error state and return original tableData for mutate function
      setError(error);
      return tableData;
    }

    // Mutate tableData to update the element
    const newRows = tableData.map((row) => {
      if (row._id === id) {
        row[element] = value;
      }
      return row;
    });

    // Send back the updated tableData (with patched row) to SWR /api/${component}' key to update local state
    return newRows;
  };

  // Actual action of mutate via SWR 
  mutate(`/api/${endpoint}`, patchData);
};
