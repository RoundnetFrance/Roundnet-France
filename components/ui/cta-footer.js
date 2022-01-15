import propTypes from 'prop-types';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MUILink from '@mui/material/Link';

// CONTENT IMPORTS
import Link from '../ui/link';

function CTAFooter({ title, subtitle, mainLink, altLink }) {
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
          {mainLink.outLink ? (
            <MUILink href={mainLink.url} target="_blank" color="#fff" underline="none">{mainLink.text}</MUILink>
          ) : (
            <Link href={mainLink.url}>{mainLink.text}</Link>
          )}

        </Button>
        {altLink && (
          <Button variant="contained" color="secondary" size="large" >
            <Link href={altLink.url} passHref>
              <MUILink color="#fff" underline='none'>{altLink.text}</MUILink>
            </Link>
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
