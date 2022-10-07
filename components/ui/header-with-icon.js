import { Fragment } from 'react';
import propTypes from 'prop-types';

// MUI IMPORTS
import { Typography, Box, Icon } from '@mui/material';

function HeaderWithIcon({ icon, title, color, children }) {
  return (
    <Fragment>
      <Typography
        variant="h4"
        align="center"
        color={color}
        mt={4}
      >
        <Box textAlign="center">
          <Icon style={{ fontSize: 80 }} color={color}>{icon}</Icon>
        </Box>
        <strong>{title}</strong>
      </Typography>
      {children && (
        <Typography variant="h6" align="center" color={color} mb={4}>
          {children}
        </Typography>
      )}

    </Fragment>
  )
}

HeaderWithIcon.propTypes = {
  icon: propTypes.string,
  title: propTypes.string.isRequired,
  color: propTypes.string,
  children: propTypes.node,
}

HeaderWithIcon.defaultProps = {
  icon: null,
  children: null,
  color: 'primary',
}

export default HeaderWithIcon
