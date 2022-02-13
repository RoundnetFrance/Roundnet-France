import { useMemo } from "react";

// COMPONENT IMPORTS
import FormBuilder from "../../form-builder";

// CONTENT IMPORTS
import getFederationMemberFormConfig from "../../../contents/forms/form-federation-member-config";

export default function CreateFederationMemberForm() {
  const formConfig = useMemo(() => getFederationMemberFormConfig(), []);

  return <FormBuilder formConfig={formConfig} />;
}
