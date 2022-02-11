// COMPONENT IMPORTS
import FormBuilder from "../../form-builder";

export default function CreateFederationMemberForm() {
  const formConfig = {
    name: "Ajouter un membre de la fédération",
    fields: [
      {
        id: "name",
        label: "Nom et Prénom",
        type: "text",
        options: {
          required: true,
        },
      },
      {
        id: "role",
        label: "Fonction",
        type: "text",
        options: {
          required: true,
        },
      },
      {
        id: "image",
        label: "Photo de profil",
        type: "file",
        options: {
          required: true,
          fileConfig: {
            type: "image",
            imageMaxWidth: 800,
          },
        },
      },
      {
        id: "description",
        label: "Description",
        type: "longtext",
        options: {
          required: true,
        },
      },
    ],
    endpoint: "federation-members",
    submitText: "Ajouter un membre",
    apiSchema: {
      title: "name",
      chip: "role",
      image: "image",
      description: "description",
    },
  };

  return <FormBuilder formConfig={formConfig} />;
}
