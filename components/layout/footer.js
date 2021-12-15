// IMPORT FROM NEXT
import Image from 'next/image';

// IMPORT FROM MATERIAL
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
  const rawLogos = [
    {
      src: '/images/logos/roundnet-france-tp-blanc.png',
      alt: 'Roundnet France',
      height: '80px',
      width: '80px',
    },
    {
      src: '/images/logos/eusra.png',
      alt: 'EUSRA',
      height: '80px',
      width: '80px',
    },
    {
      src: '/images/logos/sra.png',
      alt: 'SRA',
      height: '80px',
      width: '150px',
    },
  ];

  return (
    <Box bgcolor="primary.dark" py={4}>
      <Container maxWidth="lg">
        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'flex-start', sm: 'center' }} justifyContent="space-between">
          <Box>
            <Typography variant="h6" color="white">
              Roundnet France
              {' '}
              <br />
              {' '}
              Ranking
            </Typography>
            <Typography variant="body2" color="white">
              <Link sx={{ color: 'white' }} href="mailto:contact@roundnetfrance.fr">contact@roundnetfrance.fr</Link>
            </Typography>
          </Box>
          <Box>
            {rawLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                height={logo.height}
                width={logo.width}
              />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;