import { Fragment } from 'react';

// MUI IMPORTS
import { Container, Typography } from '@mui/material';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import PageTitle from '../../components/ui/page-title';
import Head from '../../components/head';
import CreateClubForm from '../../components/forms/create-club-form';
import Link from '../../components/ui/link';

export default function CreateClubPage() {
  return (
    <Fragment>

      <Head
        title="Créer votre club - Roundnet France"
        description="Créez votre club et rejoignez la communauté Roundnet France."
      />

      <Hero
        title="Créer votre club"
        image="/images/hero/liste-clubs.jpg"
        imagePosition='center 60%'
        mini />

      <Container maxWidth="md" sx={{ my: 4 }}>
        <PageTitle title="Devenez club officiel affilié à Roundnet France" />
        <Typography variant="body1">
          Si vous souhaitez plus d&apos;informations sur les avantages et les accompagnements que proposent Roundnet France, vous pouvez <Link href="/clubs-et-communautes/adherer-a-roundnet-france">cliquer sur ce lien pour plus d&apos;informations.   </Link>
        </Typography>
      </Container>

      <CreateClubForm />

    </Fragment>
  )
}