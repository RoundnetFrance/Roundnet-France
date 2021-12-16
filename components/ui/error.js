import React from 'react';
import propTypes from 'prop-types';

import Alert from '@mui/material/Alert';

function Error({ message }) {
  return (
    <Alert severity="error">
      {message}
    </Alert>
  )
}

Error.propTypes = {
  message: propTypes.string,
}

Error.defaultProps = {
  message: "Une erreur est survenue."
}

export default Error
