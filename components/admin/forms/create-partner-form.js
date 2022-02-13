import { useMemo } from "react";

// COMPONENT IMPORTS
import FormBuilder from "../../form-builder";

// CONTENTS
import getPartnerFormConfig from "../../../contents/forms/form-partner-config";

export default function CreatePartnerForm() {
  const formConfig = useMemo(() => getPartnerFormConfig(), []);
  return <FormBuilder formConfig={formConfig} />;
}
