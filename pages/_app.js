// Reset margins and paddings
import '../styles/globals.css';

// Create a layout and theme for all front pages (header + footer)
import Layout from '../layout'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles';
import rfMuiTheme from '../styles/rf-mui-theme';

// Import Provider from next/auth client to share session
import { SessionProvider } from 'next-auth/react';

// Render app
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={rfMuiTheme}>
        <Layout adminLayout={pageProps.adminLayout}>
          <Head>
            <title>Roundnet France - Fédération française de roundnet</title>
            <meta name="description" content="Site officiel de la fédération française de roundnet" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
