import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

import { Fragment } from 'react'

function Layout({ children, adminLayout }) {
  return (
    <Fragment>
      <Header adminLayout={adminLayout} />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
