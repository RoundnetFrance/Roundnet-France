import propTypes from 'prop-types';

// COMPONENT IMPORTS
import FormBuilder from '../../form-builder';

export default function CreateOfficialDocForm({ doctype }) {
  const formConfig = {
    name: 'Ajouter une version de fichier',
    fields: [
      {
        id: 'url',
        label: 'Fichier (format pdf)',
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
      },
      {
        id: 'doctype',
        type: 'text',
        options: {
          hidden: true,
          defaultValue: doctype,
        }
      }
    ],
    endpoint: 'official-docs',
    submitText: 'Ajouter le fichier'
  }

  return (
    <FormBuilder formConfig={formConfig} />
  )
}

CreateOfficialDocForm.propTypes = {
  doctype: propTypes.string,
}

CreateOfficialDocForm.defaultProps = {
  docType: '',
}
