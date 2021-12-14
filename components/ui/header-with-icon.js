import { Fragment } from 'react';
import propTypes from 'prop-types';

// MUI IMPORTS
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
            {icon}
          </Box>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="secondary" mb={4}>
          {children}
        </Typography>
    </Fragment>
  )
}

HeaderWithIcon.propTypes = {
  icon: propTypes.element.isRequired,
  title: propTypes.string.isRequired,
  children: propTypes.element,
}

HeaderWithIcon.defaultProps = {
  children: null,
}

export default HeaderWithIcon
