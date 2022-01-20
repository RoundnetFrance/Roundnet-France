import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

import { Fragment } from 'react'

function Layout({ children, session, adminLayout }) {
  return (
    <Stack direction="column" sx={{ minHeight: '100vh' }}>
      <Header adminLayout={adminLayout} session={session} />
      <Box flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  )
}

export default Layout
