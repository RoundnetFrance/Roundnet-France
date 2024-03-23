import { useMemo } from "react";

import {FormBuilder} from "../../form-builder";

import {getPartnerFormConfig} from "../../../contents/forms/form-partner-config";

export default function CreatePartnerForm() {
  const formConfig = useMemo(() => getPartnerFormConfig(), []);
  return <FormBuilder formConfig={formConfig} />;
}
