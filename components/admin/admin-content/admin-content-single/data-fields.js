// COMPONENT IMPORT
import SingleField from "./single-field";

export default function DataFields({ layout, values }) {
  // Handle

  return layout.map((field) => (
    <SingleField key={field._id} field={field} values={values} />
  ));
}
