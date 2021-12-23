// COMPONENT IMPORTS
import FormBuilder from '../components/form-builder'

function Test() {
  const descriptionBefore = "Pré-description";
  const descriptionAfter = "Après-description";

  const formConfig = {
    name: 'Formulaire de demande d\'affiliation pour la saison 2022',
    fields: [
      {
        id: 'organization',
        label: 'Nom du club',
        type: 'password',
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
      },
      {
        id: 'website',
        label: 'Site internet',
        type: 'text',
      },
      {
        id: 'facebook',
        label: 'Facebook',
        type: 'text',
      },
      {
        id: 'instagram',
        label: 'Instagram',
        type: 'text',
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
    endpoint: '/clubs',
    descriptionBefore,
    descriptionAfter,
  };


  return (
    <FormBuilder formConfig={formConfig} />
  )
}

export default Test
