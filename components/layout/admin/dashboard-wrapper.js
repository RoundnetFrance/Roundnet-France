import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function DashboardWrapper({ children }) {
  return (
      <Box sx={{ backgroundColor: 'neutral.lightGrey', minHeight: '80vh' }}>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          {children}
        </Container>
      </Box>
  )
}

export default DashboardWrapper
