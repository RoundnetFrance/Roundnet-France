// COMPONENT IMPORTS
import FormBuilder from "../../form-builder";

export default function CreatePartnerForm() {
  const formConfig = {
    name: "Ajouter un nouveau partenaire",
    fields: [
      {
        id: "title",
        label: "Nom du partenaire",
        type: "text",
        options: {
          required: true,
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
      {
        id: "image",
        label: "Image",
        type: "file",
        options: {
          required: true,
          fileConfig: {
            type: "image",
          },
        },
      },
      {
        id: "links",
        label: "Lien",
        type: "url",
      },
    ],
    endpoint: "partners",
    submitText: "Ajouter un partenaire",
  };

  return <FormBuilder formConfig={formConfig} />;
}
