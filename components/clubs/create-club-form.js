import { Fragment } from 'react';

// COMPONENT IMPORTS
import FormBuilder from '../../components/form-builder';
import Link from '../../components/ui/link';

function CreateClubForm() {
  const descriptionAfter = <Fragment>Cette demande sera soumise à validation par la fédération française de Roundnet, dans le respect des <Link href="/clubs-et-communautes/adherer-a-roundnet-france">règles d&apos;affiliation de l&apos;association</Link>.</Fragment>;

  const formConfig = {
    name: 'Formulaire de demande d\'affiliation pour la saison 2022',
    fields: [
      {
        id: 'image',
        label: 'Logo du club',
        type: 'file',
        options: {
          required:true,
          fileConfig: {
            type: 'image',
          }
        }
      },
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
          required: true,
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
      image: "image",
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
    descriptionAfter,
  };

  return (
    <FormBuilder formConfig={formConfig} />
  )
}

export default CreateClubForm
