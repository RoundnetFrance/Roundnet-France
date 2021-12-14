import propTypes from 'prop-types'

// MUI IMPORTS
import Stack from '@mui/material/Stack';

// COMPONENTS IMPORTS
import InfoBlock from './info-block';

function CrossingItems({ items }) {

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={4}
    >

      {
        items.map((item, index) => (
          <InfoBlock
            key={item.id}
            title={item.title}
            chip={item.chip}
            image={item.image}
            description={item.description}
            height={260}
            imageToLeft={index % 2}
            roundedImage
          />
        ))
      }

    </Stack>
  )
}

CrossingItems.propTypes = {
  items: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    chip: propTypes.string,
    image: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  })).isRequired,
}

export default CrossingItems
