const federationMembersConfig = {
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
          _id: "url",
          name: "Fichier",
          type: "file",
          options: {
            fileConfig: {
              type: "pdf",
            },
          },
        },
        {
          _id: "version",
          name: "Version",
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
  ],
};

export default federationMembersConfig;
