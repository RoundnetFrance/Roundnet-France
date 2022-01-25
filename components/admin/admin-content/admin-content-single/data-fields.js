// COMPONENT IMPORT
import SingleField from "./single-field";

export default function DataFields({ layout, values, handleValuesChange }) {
  // Filter only values that are in layout
  const filteredValues = layout.reduce((acc, field) => {
    console.log(field._id);
    if (values[field._id] !== null || values[field._id] !== undefined) {
      acc[field._id] = values[field._id];
    }
    return acc;
  }, {});

  // Return fields corresponding to selected tab
  return Object.keys(filteredValues).map((key) => {
    const fieldOptions = layout.find((field) => field._id === key);
    return (
      <SingleField
        key={key}
        id={key}
        fieldOptions={fieldOptions}
        value={filteredValues[key]}
        handleValuesChange={handleValuesChange}
      />
    );
  });
}
