import propTypes from 'prop-types'

// MUI IMPORTS
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';

function FeaturedItems({ items, color }) {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      spacing={{ xs: 2, md: 4 }}
      my={4}
    >

      {items.map(item => (
        <Stack
          width={{ xs: '100%', md: '30%' }}
          alignItems="center"
          key={item.id}
        >
          <Box 
          p={3}
          sx={{
            background: `url(/images/misc/blob-lighter-${color}.svg) no-repeat center center`,
          }}>
            <Icon style={{ fontSize: 50 }} color={color}>{item.icon}</Icon>
          </Box>
          <Typography variant="h6" my={2} color={color}>{item.title}</Typography>
          <Typography variant="body1" align="center">{item.description}</Typography>
        </Stack>
      ))}

    </Stack>
  )
}

FeaturedItems.propTypes = {
  items: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  })).isRequired,
  color: propTypes.string,
}

FeaturedItems.defaultProps = {
  color: 'primary',
}

export default FeaturedItems
