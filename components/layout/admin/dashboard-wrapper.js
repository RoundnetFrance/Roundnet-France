import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

// COMPONENT IMPORTS
import DashboardDrawer from './dashboard-drawer';

function DashboardWrapper({ children }) {
  return (
    <Stack>
      <Container maxWidth="xl" sx={{ my: 4 }}>
        {children}
      </Container>
    </Stack>
  )
}

export default DashboardWrapper
