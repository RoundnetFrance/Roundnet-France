const adminConfig = {
  title: "Modification d'administrateur",
  endpoint: "users",
  adminEndpoint: "/rf-admin/parametres/administrateurs",
  tabs: [
    // GENERAL INFO
    {
      _id: "main",
      name: "Autorisations",
      description:
        "Informations générales des droits des utilisateurs enregistrés",
      layout: [
        {
          _id: "name",
          name: "Nom & Prénom",
          type: "text",
        },
        {
          _id: "email",
          name: "Email",
          type: "text",
        },
        {
          _id: "authorized",
          name: "Administrateur",
          type: "boolean",
          editable: true,
        },
      ],
    },
  ],
};

export default adminConfig;
