import { Fragment } from 'react';

// COMPONENT IMPORTS
import FormBuilder from '../components/form-builder'
import Link from '../components/ui/link';

function Test() {
  const descriptionBefore = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti amet esse ad culpa suscipit recusandae ut aperiam quibusdam doloremque, optio accusamus temporibus alias illo quae cupiditate libero dolores, perferendis quo dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem soluta ipsam quas necessitatibus, laboriosam adipisci blanditiis dignissimos recusandae harum quaerat nostrum exercitationem aut nihil a veritatis quisquam minus sint eos ducimus.";
  const descriptionAfter = <Fragment>Cette demande sera soumise à validation par la fédération française de Roundnet, dans le respect des <Link href="/clubs-et-communautes/adherer-a-roundnet-france">règles d&apos;affiliation de l&apos;association</Link>.</Fragment>;

  const formConfig = {
    name: 'Formulaire de demande d\'affiliation pour la saison 2022',
    fields: [
      {
        id: 'organization',
        label: 'Nom du club',
        type: 'text',
        passwordConfig: {
          confirm: true,
        },
        required: true,
      },
      {
        id: 'city',
        label: 'Ville',
        type: 'text',
        required: true,
      },
      {
        id: 'clubCreated',
        label: 'Date de création du club',
        type: 'date',
        dateConfig: {
          disableFuture: true,
          clearable: true,
          openTo: 'month',
          views: ['year', 'month', 'day'],
        },
        options: {
          dividerBottom: true,
        }
      },
      {
        id: 'description',
        label: 'Description',
        type: 'text',
        required: true,
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
        dividerBottom: true,
      },
      {
        id: 'name',
        label: 'Nom & prénom du président du club',
        type: 'text',
        required: true,
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        required: true,
      },
    ],
    endpoint: '/api/clubs',
    descriptionBefore,
    descriptionAfter,
  };


  return (
    <FormBuilder formConfig={formConfig} />
  )
}

export default Test
