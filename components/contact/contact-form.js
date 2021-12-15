// MUI IMPORTS
import {
  Container, TextField, Typography, Button,
} from '@mui/material';

// OWN IMPORTS
import FormWrapper from '../ui/form-wrapper';

// FUNCTIONAL COMPONENT
function ContactForm() {
  return (
    <Container maxWidth="lg">
      <FormWrapper title="Contactez Roundnet France" size="sm">
        <Typography>Une question à nous poser, une demande spécifique ? N&apos;hésitez pas à contacter Roundnet France, si vous souhaitez trouver de nouveaux joueurs, rejoindre une ligue en France, importer le Roundnet dans votre école, organiser un tournoi... </Typography>

        <TextField id="name" label="Nom & Prénom*" variant="outlined" />
        <TextField id="email" label="Email*" variant="outlined" />
        <TextField id="subject" label="Objet*" variant="outlined" />
        <TextField id="message" label="Message*" variant="outlined" multiline rows={4} />

        <Typography variant="body2" >
          * Champs obligatoires
        </Typography>
        <Button variant="contained" color="primary">Envoyer</Button>
      </FormWrapper>
    </Container>
  )
}

export default ContactForm
