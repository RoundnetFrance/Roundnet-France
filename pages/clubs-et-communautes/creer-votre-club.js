import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import PageTitle from '../../components/ui/page-title';
import CreateClubForm from '../../components/clubs/create-club-form';

function CreateClubPage() {
  return (
    <Fragment>

      <Hero
        title="Créer votre club"
        image="/images/hero/liste-clubs.jpg"
        imagePosition='center 60%'
        mini />

      <Container maxWidth="md" sx={{ my: 4 }}>
        <PageTitle title="Devenez club officiel affilié à Roundnet France" />
        <Typography variant="body1" sx={{ pb: 4 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti amet esse ad culpa suscipit recusandae ut aperiam quibusdam doloremque, optio accusamus temporibus alias illo quae cupiditate libero dolores, perferendis quo dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem soluta ipsam quas necessitatibus, laboriosam adipisci blanditiis dignissimos recusandae harum quaerat nostrum exercitationem aut nihil a veritatis quisquam minus sint eos ducimus.
        </Typography>
      </Container>

      <CreateClubForm />

    </Fragment>
  )
}

export default CreateClubPage
