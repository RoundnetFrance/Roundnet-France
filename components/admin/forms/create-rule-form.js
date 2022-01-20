// COMPONENT IMPORTS
import FormBuilder from '../../form-builder';

export default function CreateRuleForm() {
  const formConfig = {
    name: 'Ajouter une version de fichier de règles',
    fields: [
      {
        id: 'url',
        label: 'Fichier de règles (format pdf)',
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
    endpoint: 'rules',
    submitText: 'Ajouter une règle'
  }

  return (
    <FormBuilder formConfig={formConfig} />
  )
}
