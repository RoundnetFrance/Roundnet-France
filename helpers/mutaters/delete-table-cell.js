export default async function deleteTableCell({
  endpoint,
  id,
  data,
  mutate,
  setError,
  setSuccess,
}) {
  // Fetch API to delete element, then mutate data and return it for SWR to handle
  // We're using the endpoint specified in the tableConfig object to fetch and mutate dynamically
  const deleteData = async () => {
    // Fetch API to delete element
    try {
      const response = await fetch(`/api/${endpoint}/${id}`, {
        method: 'DELETE',
      });

      // If response is not ok, manually throw an error
      if (!response.ok) {
        throw new Error(response.statusText);
      }

    } catch (error) {
      // If error, set error state and return original data for mutate function
      setError(error);
      return data;
    }

    // Send back the updated tableData (minus the deleted element) to SWR /api/${component}' key
    const newRows = data.filter(row => row._id !== id);
    return newRows;
  };

  // Actual action of mutate via SWR 
  mutate(`/api/${endpoint}`, deleteData);
  setSuccess({
    name: 'Success',
    message: 'Suppression effectuée',
  });
};
