import propTypes from 'prop-types'

// MUI IMPORTS
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// COMPONENT IMPORTS
import IconWithBackground from './icon-with-background';

function FeaturedItems({ items, color }) {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
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
          <IconWithBackground icon={item.icon} color={color} />
          <Typography variant="h6" component="h3" my={2} color={color}><strong>{item.title}</strong></Typography>
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
