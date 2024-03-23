import type { AdminSingleConfig } from "../../models/Admin";

const federationMembersConfig: AdminSingleConfig = {
  title: "Modification d'un document",
  endpoint: "official-docs",
  adminEndpoint: "/rf-admin/dashboard",
  tabs: [
    // GENERAL INFO
    {
      _id: "main",
      name: "Détail du fichier",
      description: "Informations générales sur le document",
      layout: [
        {
          id: "url",
          name: "Fichier",
          type: "file",
          editable: true,
          options: {
            fileConfig: {
              type: "pdf",
            },
          },
        },
        {
          id: "version",
          name: "Version",
          type: "text",
          editable: true,
        },
        {
          id: "description",
          name: "Description",
          type: "longtext",
          editable: true,
        },
      ],
    },
  ],
};

export default federationMembersConfig;
