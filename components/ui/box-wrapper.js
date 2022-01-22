import PropTypes from 'prop-types';

// MUI IMPORTS
import { Paper, Container, Stack, Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


function BoxWrapper({ children, title, size, onSubmit, noValidate }) {
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        py: 4,
      }}
    >
      <Container maxWidth={size} disableGutters={smallDevice}>
        <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
          {title}/
        </Typography>
        <Paper variant="outlined" sx={{ p: 4 }}>
          <Box component={onSubmit ? 'form' : 'div'} onSubmit={onSubmit} noValidate={noValidate}>
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
  noValidate: PropTypes.bool,
};

BoxWrapper.defaultProps = {
  size: 'md',
  onSubmit: null,
  noValidate: false,
};

export default BoxWrapper;