import getClubFormConfig from "../../contents/forms/form-club-config";
import { useMemo } from "react";

// COMPONENT IMPORTS
import FormBuilder from "../../components/form-builder";

function CreateClubForm() {
  const formConfig = useMemo(() => getClubFormConfig(), []);
  console.log("formConfig", formConfig);
  return <FormBuilder formConfig={formConfig} />;
}

export default CreateClubForm;
