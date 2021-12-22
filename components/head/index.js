import NextHead from 'next/head';
import propTypes from 'prop-types';

export default function Head({ title, description, url, ogImage }) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
    </NextHead>
  )
}

Head.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
}




