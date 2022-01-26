const clubConfig = {
  title: "Modification de club",
  endpoint: "clubs",
  adminEndpoint: "/rf-admin/clubs-et-communautes/liste-des-clubs",
  tabs: [
    // GENERAL INFO
    {
      _id: "main",
      name: "Général",
      description: "Informations générales du club",
      layout: [
        {
          _id: "title",
          name: "Club",
          type: "text",
          editable: true,
        },
        {
          _id: "chip",
          name: "Ville",
          type: "text",
          editable: true,
        },
        {
          _id: "description",
          name: "Description du club",
          type: "longtext",
          editable: true,
        },
        {
          _id: "validated",
          name: "Validé",
          align: "right",
          type: "boolean",
          editable: true,
        },
      ],
    },
    // Contact
    {
      _id: "contact",
      name: "Contact",
      description:
        "Contact et personnes référentes de l'association ou du club",
      layout: [
        {
          _id: "referer",
          name: "Référent",
          type: "text",
          editable: true,
        },
        {
          _id: "email",
          name: "Email",
          type: "text",
        },
        {
          _id: "phone",
          name: "Téléphone",
          type: "text",
        },
      ],
    },
    // Extras
    {
      _id: "extras",
      name: "Extras",
      description: "Informations additionnelles",
      layout: [
        {
          _id: "players",
          name: "Joueurs",
          type: "text",
          editable: true,
        },
        {
          _id: "links",
          name: "Liens",
          editable: false,
          type: "array",
          options: {
            array: {
              key: "source",
              value: "url",
            },
          },
        },
        {
          _id: "discord",
          name: "Discord",
          editable: true,
        },
      ],
    },
  ],
};

export default clubConfig;
