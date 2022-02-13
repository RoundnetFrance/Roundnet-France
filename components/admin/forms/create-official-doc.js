import propTypes from "prop-types";
import { useMemo } from "react";
import getOfficialDocFormConfig from "../../../contents/forms/form-official-doc-config";

// COMPONENT IMPORTS
import FormBuilder from "../../form-builder";

export default function CreateOfficialDocForm({ doctype }) {
  const formConfig = useMemo(
    () => getOfficialDocFormConfig(doctype),
    [doctype]
  );

  return <FormBuilder formConfig={formConfig} />;
}

CreateOfficialDocForm.propTypes = {
  doctype: propTypes.string,
};

CreateOfficialDocForm.defaultProps = {
  docType: "",
};
