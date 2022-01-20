import propTypes from 'prop-types'

// MUI IMPORTS
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// COMPONENTS IMPORTS
import InfoBlock from './info-block';

function CrossingItems({ items, roundedItems, height, roundedEverywhere }) {
  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={{ xs: 2, md: 4 }}
    >

      {
        items.map((item, index) => (
          <Box
            key={item._id}
            sx={{
              position: 'relative',
              left: { xs: 0, md: index % 2 === 0 ? '2.5rem' : '-2.5rem' },
            }}
          >
            <InfoBlock
              title={item.title}
              chip={item.chip}
              image={item.image}
              description={item.description}
              links={item.links}
              height={roundedItems ? 260 : height}
              imageToLeft={index % 2 === 0}
              roundedImage={roundedItems}
              roundedEverywhere={roundedEverywhere}
            />
          </Box>
        ))
      }
    </Stack>
  )
}

CrossingItems.propTypes = {
  items: propTypes.arrayOf(propTypes.shape({
    _id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    chip: propTypes.string,
    image: propTypes.string,
    description: propTypes.string.isRequired,
    link: propTypes.shape({
      url: propTypes.string.isRequired,
      text: propTypes.string,
      outLink: propTypes.bool,
    }),
  })).isRequired,
  roundedItems: propTypes.bool,
  height: propTypes.number,
  roundedEverywhere: propTypes.bool,
}

CrossingItems.defaultProps = {
  roundedItems: false,
  height: 400,
  roundedEverywhere: false,
}

export default CrossingItems
