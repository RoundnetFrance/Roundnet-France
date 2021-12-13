import Image from 'next/image'

// MUI IMPORTS
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function HalfImage() {
  // Render a box with half a background image, and half a text
  return (
    <Stack
      direction={{xs: 'column', md: 'row'}}
      justifyContent="center"
      alignItems="center"
      spacing={0}
      backgroundColor="secondary.main"
      minHeight="300px"
      maxHeight={{lg: "700px"}}
    >

      <Box
        width={{xs: '100%', md: '50%'}}
      >
        <Image
          src="/images/home-slide.jpg"
          alt="Placeholder"
          width="1000"
          height="700"
          layout="responsive"
          objectFit="cover"
        />
      </Box>

      <Box
        width={{xs: 'inherit', md: '50%'}}
        sx={{
          p: {
            xs: 4,
            lg: 6,
          },
        }}
      >
        <Typography
          variant="h5"
          color="white"
        >
          Règles officielles 2021 de Roundnet
        </Typography>
        <Divider 
        color="white" 
        sx={{
          mb: 4,
        }} />

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: "white",
          }}>
          Distance au service, gênes, cas particuliers : pour ceux qui souhaitent être incollables, vous pouvez télécharger les règles officielles de roundnet, éditées par Spikeball et valables en tournoi, en cliquant sur le bouton ci-dessous (et en français !).
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "white",
            mb: 4,
          }}>
          Les nouvelles règles ajoutées en 2021 (consecutive blocks, 7 feet serve...) sont surlignées en jaune dans le document.
        </Typography>

        <Button variant="contained" href="/docs/regles-2021.pdf">Télécharger les règles 2021</Button>
      </Box>

    </Stack>
  )
}

export default HalfImage
