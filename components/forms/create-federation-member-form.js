import propTypes from "prop-types";
import { useMemo } from "react";
import getFormRFMemberConfig from "../../contents/forms/form-federation-member-config";

// COMPONENT IMPORTS
import FormBuilder from "../form-builder";

export default function CreateRFMemberForm({ isAdmin }) {
  const formConfig = useMemo(() => getFormRFMemberConfig(isAdmin), [isAdmin]);
  return <FormBuilder formConfig={formConfig} />;
}

CreateRFMemberForm.propTypes = {
  isAdmin: propTypes.bool,
};

CreateRFMemberForm.defaultProps = {
  isAdmin: false,
};
