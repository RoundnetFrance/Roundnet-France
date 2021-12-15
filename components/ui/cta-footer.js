import Link from 'next/link';
import propTypes from 'prop-types';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MUILink from '@mui/material/Link';

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
        {title}
      </Typography>
      <Typography variant="h6">
        {subtitle}
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          my: 4,
          mt: 8,
        }}
      >
        <Button variant="contained" color="primary" size="large">
          <Link href={mainLink.url} passHref>
            <MUILink color="#fff" underline='none'>{mainLink.text}</MUILink>
          </Link>
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
  }).isRequired,
  altLink: propTypes.shape({
    url: propTypes.string,
    text: propTypes.string,
  }),
}

CTAFooter.defaultProps = {
  altLink: null,
}

export default CTAFooter
