// COMPONENT IMPORTS
import FormBuilder from '../../form-builder';

export default function CreateOfficialDocForm() {
  const formConfig = {
    name: 'Ajouter une version des statuts',
    fields: [
      {
        id: 'url',
        label: 'Fichier de statuts (format pdf)',
        type: 'file',
        options: {
          required: true,
          fileConfig: {
            type: 'pdf',
          }
        }
      },
      {
        id: 'version',
        label: 'Nom de version',
        type: 'text',
        options: {
          required: true,
        }
      },
      {
        id: 'description',
        label: 'Description',
        type: 'longtext'
      }
    ],
    endpoint: 'official-docs',
    submitText: 'Ajouter les statuts'
  }

  return (
    <FormBuilder formConfig={formConfig} />
  )
}
