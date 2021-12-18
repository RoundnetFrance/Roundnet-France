import Link from 'next/link';

// MUI IMPORTS
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MUILink from '@mui/material/Link';

// COMPONENT IMPORTS
import BoxWrapper from '../ui/box-wrapper';

function CreateClubForm() {
  return (

    <BoxWrapper title="Formulaire de demande d'affiliation pour la saison 2022" size="sm">

      <TextField id="city" label="Ville*" variant="outlined" />
      <TextField id="clubCreated" label="Date de création*" variant="outlined" />
      <TextField id="website" label="Site internet" variant="outlined" />
      <TextField id="facebook" label="Facebook" variant="outlined" />
      <TextField id="instagram" label="Instagram" variant="outlined" />
      <Divider />
      <TextField id="name" label="Nom & Prénom du président*" variant="outlined" />
      <TextField id="email" label="Email*" variant="outlined" />
      <TextField id="message" label="Message complémentaire" variant="outlined" multiline rows={4} />

      <Divider />
      <Typography variant="body2" >
        * Champs obligatoires
      </Typography>
      <Typography variant="body2">
        Cette demande sera soumise à validation par la fédération française de Roundnet, dans le respect des <Link href="/clubs-et-communautes/adherer-a-roundnet-france" passHref><MUILink>règles d&apos;affiliation de l&apos;association</MUILink></Link>.
      </Typography>
      <Button variant="contained" color="primary">Envoyer</Button>
    </BoxWrapper>
  )
}

export default CreateClubForm
