import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

import { Fragment } from 'react'

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
