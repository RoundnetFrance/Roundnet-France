import propTypes from 'prop-types'

// MUI IMPORTS
import Stack from '@mui/material/Stack';

// COMPONENTS IMPORTS
import InfoBlock from './info-block';

function CrossingItems({ items, roundedItems, height }) {
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
            height={roundedItems ? 260 : height}
            imageToLeft={index % 2 === 0}
            roundedImage={roundedItems}
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
  roundedItems: propTypes.bool,
  height: propTypes.number,
}

CrossingItems.defaultProps = {
  roundedItems: false,
  height: 400,
}

export default CrossingItems
