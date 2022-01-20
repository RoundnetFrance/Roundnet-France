import propTypes from 'prop-types';

// MUI IMPORTS
import { Container, Typography, Stack, Button, Link as MUILink } from '@mui/material';

// CONTENT IMPORTS
import Link from '../ui/link';

function CTAFooter({ title, subtitle, mainLink, altLink }) {
  const isExternalLink = mainLink?.url.startsWith('http');

  return (
    <Container maxWidth="sm" align="center" sx={{
      my: 4,
      p: 10,
      overflow: 'visible',
      backgroundImage: 'url(/images/misc/cta-footer.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    }}>
      <Typography variant="h4" my={2}>
        <strong>{title}</strong>
      </Typography>
      <Typography variant="h6">
        {subtitle}
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          my: 4,
          mt: 8,
        }}
      >
        <Button variant="contained" color="primary" size="large">
          {isExternalLink ? (
            <MUILink href={mainLink.url} target="_blank" color="#fff" underline="none">{mainLink.text}</MUILink>
          ) : (
            <Link href={mainLink.url} color="#fff" underline="none">{mainLink.text}</Link>
          )}

        </Button>
        {altLink && (
          <Button variant="contained" color="secondary" size="large" >
            <Link href={altLink.url} color="#fff" underline="none">{altLink.text}</Link>
          </Button>
        )}

      </Stack>
    </Container>
  )
}

CTAFooter.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  mainLink: propTypes.shape({
    url: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    outLink: propTypes.bool,
  }).isRequired,
  altLink: propTypes.shape({
    url: propTypes.string,
    text: propTypes.string,
    outLink: propTypes.bool,
  }),
}

CTAFooter.defaultProps = {
  altLink: null,
}

export default CTAFooter
