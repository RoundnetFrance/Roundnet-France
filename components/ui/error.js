import propTypes from "prop-types";

import { Alert } from "@mui/material";

function Error({ message, returnLink }) {
  return (
    <Alert severity="error" sx={{ my: 2 }}>
      {message}
    </Alert>
  );
}

Error.propTypes = {
  message: propTypes.string,
  returnLink: propTypes.string,
};

Error.defaultProps = {
  message: "Une erreur est survenue.",
  returnLink: null,
};

export default Error;
