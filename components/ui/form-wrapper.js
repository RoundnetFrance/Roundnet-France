import PropTypes from 'prop-types';

// MUI IMPORTS
import { 
  Paper, Container, Stack, Typography,
} from '@mui/material';

function FormWrapper({ children, title, size }) {
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
              <Stack direction="column" spacing={2}>
                {children}
              </Stack>
          </Paper>
        </Container>
      </Stack>
  );
}

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
};

FormWrapper.defaultProps = {
  size: 'md',
};

export default FormWrapper;