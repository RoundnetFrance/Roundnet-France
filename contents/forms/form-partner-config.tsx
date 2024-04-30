import type { FormConfig } from "../../models/Form";

export const getPartnerFormConfig: () => FormConfig = () => {
  return {
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
};
