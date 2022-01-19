import { Fragment } from 'react';
import propTypes from 'prop-types';

// MUI IMPORTS
import { Typography, Box, Icon } from '@mui/material';

function HeaderWithIcon({ icon, title, children }) {
  return (
    <Fragment>
      <Typography
        variant="h4"
        align="center"
        color="primary"
        mt={4}
      >
        <Box textAlign="center">
          <Icon style={{ fontSize: 80 }} color="primary">{icon}</Icon>
        </Box>
        <strong>{title}</strong>
      </Typography>
      {children && (
        <Typography variant="h6" align="center" color="primary" mb={4}>
          {children}
        </Typography>
      )}

    </Fragment>
  )
}

HeaderWithIcon.propTypes = {
  icon: propTypes.string,
  title: propTypes.string.isRequired,
  children: propTypes.node,
}

HeaderWithIcon.defaultProps = {
  icon: null,
  children: null,
}

export default HeaderWithIcon
