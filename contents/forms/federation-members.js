const federationMembersConfig = {
  title: "Modification des membres de la fédération",
  endpoint: "federation-members",
  adminEndpoint: "/rf-admin/association/equipe-roundnet-france",
  tabs: [
    // GENERAL INFO
    {
      _id: "main",
      name: "Informations",
      description: "Informations générales sur les membres de la fédération",
      layout: [
        {
          _id: "image",
          name: "Photo",
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
          name: "Nom & Prénom",
          type: "text",
          editable: true,
        },
        {
          _id: "chip",
          name: "Rôle",
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
