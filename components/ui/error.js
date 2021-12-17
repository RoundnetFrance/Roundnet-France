import React from 'react';
import propTypes from 'prop-types';

import Alert from '@mui/material/Alert';

function Error({ message }) {
  return (
    <Alert severity="error" sx={{ my: 2 }}>
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
