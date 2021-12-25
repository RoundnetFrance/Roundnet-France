import { Fragment } from 'react';

// MUI IMPORTS
import { Container, Typography } from '@mui/material';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import PageTitle from '../../components/ui/page-title';
import Head from '../../components/head';
import FormBuilder from '../../components/form-builder';
import Link from '../../components/ui/link';

function CreateClubPage() {
  // Configs for the form
  const descriptionBefore = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti amet esse ad culpa suscipit recusandae ut aperiam quibusdam doloremque, optio accusamus temporibus alias illo quae cupiditate libero dolores, perferendis quo dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem soluta ipsam quas necessitatibus, laboriosam adipisci blanditiis dignissimos recusandae harum quaerat nostrum exercitationem aut nihil a veritatis quisquam minus sint eos ducimus.";
  const descriptionAfter = <Fragment>Cette demande sera soumise à validation par la fédération française de Roundnet, dans le respect des <Link href="/clubs-et-communautes/adherer-a-roundnet-france">règles d&apos;affiliation de l&apos;association</Link>.</Fragment>;

  const formConfig = {
    name: 'Formulaire de demande d\'affiliation pour la saison 2022',
    fields: [
      {
        id: 'organization',
        label: 'Nom du club',
        type: 'text',
        options: {
          required: true,
        }
      },
      {
        id: 'city',
        label: 'Ville',
        type: 'text',
        options: {
          required: true,
        }
      },
      {
        id: 'clubCreated',
        label: 'Date de création du club',
        type: 'date',
        options: {
          dateConfig: {
            disableFuture: true,
            clearable: true,
            openTo: 'month',
            views: ['year', 'month', 'day'],
          },
        }
      },
      {
        id: 'description',
        label: 'Description',
        type: 'longtext',
        options: {
          required: true,
          multilineRows: 6,
        },
      },
      {
        id: 'name',
        label: 'Nom & prénom du président du club',
        type: 'text',
        options: {
          required: true,
        }
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        options: {
          required: true,
          dividerBottom: true,
        }
      },
      {
        id: 'website',
        label: 'Site internet',
        type: 'url',
      },
      {
        id: 'facebook',
        label: 'Facebook',
        type: 'url',
      },
      {
        id: 'instagram',
        label: 'Instagram',
        type: 'url',
      },
    ],
    endpoint: '/api/clubs',
    apiSchema: {
      title: "organization",
      chip: "city",
      description: "description",
      clubCreated: "clubCreated",
      president: "name",
      email: "email",
      links: [
        {
          source: "website",
          key: 'url',
        },
        {
          source: "instagram",
          key: 'url'
        },
        {
          source: "facebook",
          key: 'url'
        }
      ],
    },
    descriptionBefore,
    descriptionAfter,
  };

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti amet esse ad culpa suscipit recusandae ut aperiam quibusdam doloremque, optio accusamus temporibus alias illo quae cupiditate libero dolores, perferendis quo dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem soluta ipsam quas necessitatibus, laboriosam adipisci blanditiis dignissimos recusandae harum quaerat nostrum exercitationem aut nihil a veritatis quisquam minus sint eos ducimus.
        </Typography>
      </Container>

      <FormBuilder formConfig={formConfig} />

    </Fragment>
  )
}

export default CreateClubPage
