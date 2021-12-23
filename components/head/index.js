import NextHead from 'next/head';
import propTypes from 'prop-types';
import { Fragment } from 'react';

export default function Head({ title, description, url, ogImage }) {
  return (
    <NextHead>
      <title>{title}</title>
      {description && (
        <Fragment>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Fragment>
      )}
      <meta property="og:title" content={title} />


    </NextHead>
  )
}

Head.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
}

Head.defaultProps = {
  title: 'Fédération Française de Roundnet - Site Officiel',
  description: null,
}





