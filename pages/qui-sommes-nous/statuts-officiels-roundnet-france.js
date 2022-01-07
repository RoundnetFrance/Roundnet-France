import { Fragment } from 'react';
import { getDocument } from '../../helpers/db';

// MUI IMPORTS
import { Container, Typography, Divider, Box, Button } from '@mui/material'

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import HalfImage from '../../components/ui/half-image';
import PageTitle from '../../components/ui/page-title';
import Head from '../../components/head';
import CTAFooter from '../../components/ui/cta-footer';

// MUI ICONS

function RulesPage({ rule }) {
  let readableUpdateDate;
  if (rule) {
    readableUpdateDate = new Date(rule.createdAt).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <Fragment>
      <Head
        title="Comment jouer au roundnet ? Les règles du roundnet"
        description="Réputé pour sa facilité de prise en main, le roundnet est un sport populaire qui emprunte au meilleur des mondes de nombreux sports pour le plaisir de tous les joueurs. "
      />

      <Hero
        title="Statuts officiels"
        image="/images/hero/statuts.jpg"
        imagePosition='center 20%'
        mini />

      <Container maxWidth="md" sx={{ py: 4 }}>
        <PageTitle title="Comment est constituée la fédération française de roundnet ?" />
        <Typography variant="body1" sx={{ pb: 4 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae accusantium a aperiam debitis sapiente optio officia neque, eligendi sed quas fugiat vero placeat natus laudantium recusandae vitae deleniti, veritatis minima nihil. Molestias incidunt enim omnis cum corporis culpa alias, commodi quisquam, quasi modi, unde minima voluptates similique dolorum! Suscipit sint dolor ut omnis velit. Eos, quisquam laboriosam voluptatem reprehenderit ab minus id consequuntur quod, a cupiditate soluta blanditiis modi voluptatum molestiae in expedita, iusto deleniti eveniet ullam? Aut distinctio omnis, quasi similique ea ut labore ex dolorem architecto nesciunt doloribus optio assumenda totam aliquid deserunt doloremque quae necessitatibus. Nostrum aspernatur quidem tenetur assumenda quae laborum aperiam mollitia fuga, ex placeat expedita, consequuntur culpa rem ea, error eveniet aut deserunt sint quo accusantium voluptatem recusandae. Eos impedit vero optio!
        </Typography>
      </Container>

      <HalfImage
        image='/images/pages/statuts/telecharger-statuts.jpg'>

        <Typography
          variant="h5"
          color="white"
        >
          <strong>Télécharger les statuts officiels 2021 de Roundnet</strong>
        </Typography>

        <Box width="50%">
          <Divider
            color="white"
            sx={{
              mb: 4,
            }} />
        </Box>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: "white",
          }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid porro necessitatibus eius quisquam suscipit laborum, odit in, cumque alias quam quibusdam! Assumenda consequatur delectus dolorum est consequuntur, veniam aperiam saepe voluptate, commodi ducimus beatae dolores dolorem odio velit ullam fuga minima doloribus voluptatem.
        </Typography>

        {rule?.description && (
          <Typography
            variant="body1"
            sx={{
              color: "white",
              mb: 4,
            }}>
            {rule.description}
          </Typography>
        )}


        <Button color="secondary" size="large" variant="contained" href={rule?.url || '/docs/regles-2021.pdf'} target="_blank">
          Télécharger les statuts
        </Button>

        <Typography variant="body2" mt={1} color="white">
          Version {rule?.version || 'officielle'}
          <br />
          Dernière mise à jour : {readableUpdateDate || new Date().toLocaleDateString('fr-FR', { year: 'numeric' })}
        </Typography>
      </HalfImage>

      <CTAFooter
        title="Vous avez une question précise à nous demander ?"
        subtitle="Contactez-nous directement via le formulaire du site."
        mainLink={{
          url: '/contact',
          text: 'Nous écrire'
        }}
      />

    </Fragment >
  )
}

export async function getStaticProps() {
  // Try to fetch latest rule document on DB
  try {
    const ruleDocument = await getDocument('rules', null, null, { _id: -1 });
    const rule = JSON.parse(JSON.stringify(ruleDocument));
    return {
      props: {
        rule,
      },
      revalidate: 3600,
    }
  }
  // Return an error on props to display error message in UI
  catch (e) {
    return {
      props: { error: true },
    }
  }
}

export default RulesPage;


