import PropTypes from 'prop-types';

// MUI IMPORTS
import { 
  Paper, Container, Stack, Typography, Box
} from '@mui/material';

function BoxWrapper({ children, title, size, onSubmit }) {
  return (
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          // width: '100vw',
          py: 4,
        }}
      >
        <Container maxWidth={size}>
          <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
            {title}/
          </Typography>
          <Paper variant="outlined" sx={{ p: 4 }}>
              <Box component={onSubmit ? 'form' : 'div'} onSubmit={onSubmit}>
                <Stack direction="column" spacing={2}>
                  {children}
                </Stack>
              </Box>
          </Paper>
        </Container>
      </Stack>
  );
}

BoxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  onSubmit: PropTypes.func,
};

BoxWrapper.defaultProps = {
  size: 'md',
  onSubmit: null,
};

export default BoxWrapper;