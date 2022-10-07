import propTypes from "prop-types";
import { useMemo } from "react";
import getFormEventConfig from "../../contents/forms/form-event-config";

// COMPONENT IMPORTS
import FormBuilder from "../form-builder";

export default function CreateEventForm({ isAdmin }) {
  const formConfig = useMemo(() => getFormEventConfig(isAdmin), [isAdmin]);
  return <FormBuilder formConfig={formConfig} />;
}

CreateEventForm.propTypes = {
  isAdmin: propTypes.bool,
};

CreateEventForm.defaultProps = {
  isAdmin: false,
};
