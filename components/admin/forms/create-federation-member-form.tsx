import { useMemo } from "react";
import {FormBuilder} from "../../form-builder";
import {getFederationMemberFormConfig} from "../../../contents/forms/form-federation-member-config";

export default function CreateFederationMemberForm() {
  const formConfig = useMemo(() => getFederationMemberFormConfig(), []);

  return <FormBuilder formConfig={formConfig} />;
}
