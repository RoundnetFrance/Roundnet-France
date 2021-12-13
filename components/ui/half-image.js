import Image from 'next/image'

// MUI IMPORTS
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function HalfImage() {
  // Render a box with half a background image, and half a text
  return (
    <Stack
      direction={{xs: 'column', sm: 'row'}}
      justifyContent="center"
      alignItems="center"
      spacing={0}
      backgroundColor="secondary.main"
    >

      <Box
        width={{xs: '100%', sm: '50%'}}
      >
        <Image
          src="/images/home-slide.jpg"
          alt="Placeholder"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
        />
      </Box>

      <Box
        width={{xs: '100%', sm: '50%'}}
        sx={{
          p: 4,
        }}
      >
        <Typography
          variant="h5"
          color="white"
        >
          Welcome to the home page!
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
          }}>
          Les nouvelles règles ajoutées en 2021 (consecutive blocks, 7 feet serve...) sont surlignées en jaune dans le document.
        </Typography>
      </Box>

    </Stack>
  )
}

export default HalfImage
