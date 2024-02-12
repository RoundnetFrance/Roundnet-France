export default function getEventFormConfig(isAdmin) {
  return {
    name: "Détails de l'événement",
    sendNotification: "event",
    endpoint: "events",
    fields: [
      {
        id: "banner",
        label: "Bannière",
        type: "file",
        options: {
          helperText: "1500~1800px de largeur, format bannière 16/9, paysage",
          fileConfig: {
            type: "image",
            imageMaxWidth: 1800,
          },
        },
      },
      {
        id: "image",
        label: "Image de l'événement",
        type: "file",
        options: {
          helperText: "300~800px de largeur, format carré",
          fileConfig: {
            type: "image",
            imageMaxWidth: 600,
          },
        },
      },
      {
        id: "title",
        label: "Titre de l'événement",
        type: "text",
        options: {
          required: true,
          helperText: "Max. 80 caractères",
        },
      },
      {
        id: "city",
        label: "Ville",
        type: "text",
        options: {
          required: true,
        },
      },
      {
        id: "address",
        label: "Adresse",
        type: "text",
      },
      {
        id: "date",
        label: "Date",
        type: "date",
        options: {
          required: true,
          dateConfig: {
            clearable: true,
            openTo: "month",
            views: ["year", "month", "day"],
          },
          optional: {
            isParent: true,
            parentText: "Tournoi sur plusieurs jours",
          },
        },
      },
      {
        id: "dateEnd",
        label: "Date de fin",
        type: "date",
        options: {
          dateConfig: {
            clearable: true,
            openTo: "month",
            views: ["year", "month", "day"],
          },
          optional: {
            isChild: true,
            parent: "date",
          },
        },
      },
      {
        id: "organization",
        label: "Organisateur",
        type: "text",
      },
      {
        id: "description",
        label: "Description",
        type: "longtext",
        options: {
          required: true,
          multilineRows: 6,
          dividerBottom: true,
          maxLength: 600,
        },
      },
      {
        id: "participants",
        label: "Participants",
        type: "number",
        options: {
          required: true,
          helperText: "Nombre maximum d'équipes autorisées (nombre uniquement)",
        },
      },
      {
        id: "price",
        label: "Prix",
        type: "number",
        options: {
          helperText: "Par équipe (nombre uniquement)",
        },
      },
      {
        id: "field",
        label: "Type de terrain",
        type: "select",
        options: {
          required: true,
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
        id: "format",
        label: "Format",
        type: "select",
        options: {
          required: true,
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
        id: "category",
        label: "Catégorie",
        type: "select",
        options: {
          required: true,
          selectValues: [
            {
              label: "Libre",
              value: "free",
            },
            {
              label: "Mixte & Non-Mixte",
              value: "mixed-non-mixed",
            },
            {
              label: "Mixte",
              value: "mixed",
            },
            {
              label: "Non-Mixte",
              value: "non-mixed",
            },
          ],
        },
      },
      {
        id: "type",
        label: "Type d'événement",
        type: "select",
        options: {
          required: true,
          selectValues: [
            {
              label: "Open",
              value: "open",
            },
            {
              label: "Tour Stop",
              value: "tourStop",
              hide: !isAdmin,
            },
            {
              label: "Rencontres Inter-Clubs",
              value: "ric",
            },
            {
              label: "Championnat de France",
              value: "cdf",
              hide: !isAdmin,
            },
            {
              label: "Championnat de France des Clubs",
              value: "cdfSquads",
              hide: !isAdmin,
            },
            {
              label: "ETS - Tournoi européen",
              value: "ets",
              hide: !isAdmin,
            },
            {
              label: "Autres",
              value: "other",
            },
          ],
        },
      },
      {
        id: "beginnerFriendly",
        label: "Ouvert aux débutants",
        type: "boolean",
        options: {
          required: true,
        },
      },
      {
        id: "inscriptionUrl",
        label: "Lien d'inscription",
        type: "url",
        options: {
          required: true,
        },
      },
    ],
  };
}
