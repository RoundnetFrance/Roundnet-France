import propTypes from 'prop-types';

// MUI IMPORTS
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';

function IconWithBackground({ color, icon, size }) {
  return (
    <Box 
    p={size/10}
    sx={{
      background: `url(/images/misc/blob-lighter-${color}.svg) no-repeat`,
    }}>
      <Icon style={{ fontSize: size }} color={color}>{icon}</Icon>
    </Box>
  )
}

IconWithBackground.propTypes = {
  color: propTypes.string,
  icon: propTypes.string.isRequired,
  size: propTypes.number,
}

IconWithBackground.defaultProps = {
  color: 'primary',
  size: 40,
}

export default IconWithBackground
