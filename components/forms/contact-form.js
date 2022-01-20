// COMPONENT IMPORTS
import FormBuilder from '../../components/form-builder';

function ContactForm({ subject }) {
  const descriptionBefore = 'Une question à nous poser, une demande spécifique ? N\'hésitez pas à contacter Roundnet France via ce formulaire.';

  const formConfig = {
    name: 'Contactez Roundnet France',
    fields: [
      {
        id: 'name',
        label: 'Nom & Prénom',
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
        }
      },
      // {
      //   id: 'subject',
      //   label: 'Objet',
      //   type: 'select',
      //   options: {
      //     required: true,
      //     selectValues: [
      //       {
      //         value: 'competition',
      //         label: 'Organiser une compétition',
      //         default: true,
      //       },
      //       {
      //         value: 'clubs',
      //         label: 'Créer une association, gérer un club',
      //       },
      //       {
      //         value: 'achat',
      //         label: 'Acheter des équipements de roundnet',
      //       },
      //       {
      //         value: 'partenariat',
      //         label: 'Réaliser un partenariat avec Roundnet France',
      //       },
      //       {
      //         value: 'autre',
      //         label: 'Autres demandes',
      //       }
      //     ],
      //   }
      // },
      {
        id: 'subject',
        label: 'Objet',
        type: 'text',
        options: {
          required: true,
        }
      },
      {
        id: 'message',
        label: 'Message',
        type: 'longtext',
        options: {
          required: true,
        }
      },
    ],
    endpoint: 'send-mail',
    descriptionBefore,
  };

  return (
    <FormBuilder formConfig={formConfig} />
  )
}

export default ContactForm
