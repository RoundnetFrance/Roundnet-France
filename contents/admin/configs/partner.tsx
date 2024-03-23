import type { AdminSingleConfig } from "../../../models/Admin";

const partnersConfig: AdminSingleConfig = {
  title: "Modification d'un partenaire",
  endpoint: "partners",
  adminEndpoint: "/rf-admin/association/partenaires",
  tabs: [
    {
      _id: "main",
      name: "Détail du partenaire",
      description: "Informations générales sur le partenaire",
      layout: [
        {
          _id: "image",
          name: "Image",
          type: "file",
          editable: true,
          options: {
            fileConfig: {
              type: "image",
            },
          },
        },
        {
          _id: "title",
          name: "Nom du partenaire",
          type: "text",
          editable: true,
        },
        {
          _id: "description",
          name: "Description",
          type: "longtext",
          editable: true,
        },
      ],
    },
    {
      _id: "link",
      name: "Lien vers le site",
      description: "Lien externe vers le site du partenaire",
      layout: [
        {
          _id: "links",
          name: "Lien",
          type: "text",
          editable: true,
        },
      ],
    },
  ],
};

export default partnersConfig;
