const eventConfig = {
  title: "Modification d'événement",
  endpoint: "events",
  adminEndpoint: "/rf-admin/clubs-et-communautes/calendrier",
  frontEndpoint: "calendrier",
  tabs: [
    // GENERAL INFO
    {
      _id: "main",
      name: "Général",
      description: "Informations générales de l'événement",
      layout: [
        {
          _id: "title",
          name: "Titre",
          type: "text",
          editable: true,
        },
        {
          _id: "image",
          name: "Image",
          type: "file",
          editable: true,
          options: {
            required: true,
            fileConfig: {
              type: "image",
              imageMaxWidth: 1800,
            },
          },
        },
        {
          _id: "description",
          name: "Description",
          type: "longtext",
          editable: true,
        },
        {
          _id: "validated",
          name: "Validé",
          type: "boolean",
          editable: true,
        },
        {
          _id: "slug",
          name: "Slug",
          type: "text",
          editable: true,
          options: {
            helperText:
              "Ce slug sera utilisé pour générer l'URL de l'événement. Attention : le changer entraîne une erreur 404 sur l'ancienne URL.",
          },
        },
      ],
    },
    // Lieu & Date
    {
      _id: "dateTime",
      name: "Lieu & Date",
      description: "Dates et lieux de l'événement",
      layout: [
        {
          _id: "city",
          name: "Ville",
          type: "text",
          editable: true,
        },
        {
          _id: "address",
          name: "Adresse",
          type: "text",
          editable: true,
        },
        {
          _id: "date",
          name: "Date",
          type: "date",
          editable: true,
        },
        {
          _id: "dateEnd",
          name: "Date de fin d'événement",
          type: "date",
          editable: true,
        },
      ],
    },
    // Evenement
    {
      _id: "event",
      name: "Evenement",
      description: "Détails techniques de l'événement",
      layout: [
        {
          _id: "participants",
          name: "Participants",
          type: "text",
          editable: true,
        },
        {
          _id: "price",
          name: "Prix",
          type: "text",
          editable: true,
        },
        {
          _id: "field",
          name: "Terrain",
          type: "select",
          editable: true,
          options: {
            selectValues: [
              {
                value: "indoor",
                label: "Indoor",
              },
              {
                value: "grass",
                label: "Herbe",
              },
              {
                value: "sand",
                label: "Sable",
              },
              {
                value: "turf",
                label: "Synthétique",
              },
              {
                value: "urban",
                label: "Urban",
              },
              {
                value: "other",
                label: "Autre",
              },
            ],
          },
        },
        {
          _id: "format",
          name: "Format",
          type: "select",
          editable: true,
          options: {
            selectValues: [
              {
                label: "2v2",
                value: "2v2",
              },
              {
                label: "3v3",
                value: "3v3",
              },
              {
                label: "Autre",
                value: "other",
              },
            ],
          },
        },
        {
          _id: "category",
          name: "Catégorie",
          type: "select",
          editable: true,
          options: {
            selectValues: [
              {
                label: "Mixte",
                value: "mixed",
              },
              {
                label: "Masculin",
                value: "male",
              },
              {
                label: "Féminin",
                value: "female",
              },
            ],
          },
        },
        {
          _id: "type",
          name: "Type",
          type: "select",
          editable: true,
          options: {
            selectValues: [
              {
                label: "Open",
                value: "open",
              },
              {
                label: "Tour Stop",
                value: "tourStop",
              },
              {
                label: "Rencontres Inter-Clubs",
                value: "ric",
              },
              {
                label: "Coupe de France",
                value: "cdf",
              },
              {
                label: "Autres",
                value: "other",
              },
            ],
          },
        },
        {
          _id: "beginnerFriendly",
          name: "Ouvert aux débutants",
          type: "boolean",
          editable: true,
        },
      ],
    },
  ],
};

export default eventConfig;
