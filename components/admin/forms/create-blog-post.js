import { useMemo } from "react";

// COMPONENT IMPORTS
import FormBuilder from "../../form-builder";

// CONTENT IMPORTS
import getBlogFormConfig from "../../../contents/forms/form-blog-config";

export default function CreateFederationMemberForm() {
  const formConfig = useMemo(() => getBlogFormConfig(), []);

  return <FormBuilder formConfig={formConfig} />;
}
