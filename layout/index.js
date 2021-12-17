import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

import { Fragment } from 'react'

function Layout({ children, session, adminLayout }) {
  return (
    <Fragment>
      <Header adminLayout={adminLayout} session={session}/>
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
