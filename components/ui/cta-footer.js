import Link from 'next/link';

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
      py: 6,
      overflow: 'visible',
      backgroundImage: 'url(/images/misc/cta-footer.svg)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
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
        <Button variant="contained" color="primary" >
          <Link href={mainLink.url} passHref>
            <MUILink color="#fff" underline='none'>{mainLink.text}</MUILink>
          </Link>
        </Button>
        <Button variant="contained" color="secondary" >
          <Link href={altLink.url} passHref>
            <MUILink color="#fff" underline='none'>{altLink.text}</MUILink>
          </Link>
        </Button>
      </Stack>


    </Container>
  )
}

export default CTAFooter
