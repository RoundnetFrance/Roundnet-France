import PropTypes from 'prop-types';

// MUI IMPORTS
import { 
  Paper, Container, Stack, Typography, Box
} from '@mui/material';

function FormWrapper({ children, title, size, onSubmit }) {
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
          <Typography variant="h6" sx={{ mb: 1 }}>
            {title}/
          </Typography>
          <Paper variant="outlined" sx={{ p: 4 }}>
              <Box component="form" onSubmit={onSubmit}>
                <Stack direction="column" spacing={2}>
                  {children}
                </Stack>
              </Box>
          </Paper>
        </Container>
      </Stack>
  );
}

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

FormWrapper.defaultProps = {
  size: 'md',
};

export default FormWrapper;