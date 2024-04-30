import { useMemo } from "react";
import { getOfficialDocFormConfig } from "../../../contents/forms/form-official-doc-config";

import { FormBuilder } from "../../form-builder";
import type { DocType } from "../../../models/collections/OfficialDocs";

interface CreateOfficialDocFormProps {
  doctype: DocType;
}

export default function CreateOfficialDocForm({
  doctype,
}: Readonly<CreateOfficialDocFormProps>) {
  const formConfig = useMemo(
    () => getOfficialDocFormConfig(doctype),
    [doctype],
  );

  return <FormBuilder formConfig={formConfig} />;
}
