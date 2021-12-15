import { Fragment } from 'react';
import propTypes from 'prop-types';

// MUI IMPORTS
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';

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
        <Typography variant="subtitle1" align="center" color="secondary" mb={4}>
          {children}
        </Typography>
      )}

    </Fragment>
  )
}

HeaderWithIcon.propTypes = {
  icon: propTypes.string,
  title: propTypes.string.isRequired,
}

HeaderWithIcon.defaultProps = {
  icon: null,
}

export default HeaderWithIcon
