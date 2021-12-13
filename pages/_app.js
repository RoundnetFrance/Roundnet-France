// Reset margins and paddings
import '../styles/globals.css';

// Create a layout for all front pages (header + footer)
import Layout from '../layout'
import Head from 'next/head'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { frFR } from '@mui/material/locale';

// Create a theme instance. Affet colors, typography, and localization (frFR, imported from @mui/material/locale)
const muiTheme = createTheme(
  {
    typography: {
      fontFamily: 'Urbanist, sans-serif',
    },
    palette: {
      type: 'dark',
      primary: {
        lighter: '#c1cdf0',
        light: '#778edc',
        main: '#315bcd',
        dark: '#1e48b6',
        analogous: '#31a9cd',
      },
      secondary: {
        light: '#fb5d89',
        main: '#f50057',
        dark: '#cf0051',
      },
    },
  },
  frFR,
);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Layout>
        <Head>
          <title>Roundnet France - Fédération française de roundnet</title>
          <meta name="description" content="Site officiel de la fédération française de roundnet" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
