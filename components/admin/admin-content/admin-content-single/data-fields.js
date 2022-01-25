// COMPONENT IMPORT
import SingleField from "./single-field";

export default function DataFields({ layout, values, handleValuesChange }) {
  console.log(values);
  // Filter only values that are in layout
  const filteredValues = layout.reduce((acc, field) => {
    if (values[field._id] !== null || values[field._id] !== undefined) {
      acc[field._id] = values[field._id];
    }
    return acc;
  }, {});

  // Return fields corresponding to selected tab
  return Object.keys(filteredValues).map((key) => {
    // Get field layout through its key/_id
    const fieldLayout = layout.find((field) => field._id === key);

    return (
      <SingleField
        key={key}
        id={key}
        fieldLayout={fieldLayout}
        value={filteredValues[key]}
        handleValuesChange={handleValuesChange}
      />
    );
  });
}
