export default async function patchTableCell({
  endpoint,
  id,
  body,
  tableData,
  element,
  value,
  mutate }) {
  // Fetch API to patch element, then mutate tableData and return it for SWR to handle
  // We're using the endpoint specified in the tableConfig object to fetch and mutate dynamically
  const patchData = async () => {
    // Fetch API to patch element
    await fetch(`/api/${endpoint}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

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
