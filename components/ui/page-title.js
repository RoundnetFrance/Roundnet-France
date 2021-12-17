import propTypes from 'prop-types';

// MUI IMPORTS
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

function PageTitle({ title }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      <Divider sx={{ pb: 2 }} />
    </Box>
  )
}

PageTitle.propTypes = {
  title: propTypes.string.isRequired,
}

export default PageTitle
