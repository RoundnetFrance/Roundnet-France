// COMPONENT IMPORTS
import FormBuilder from "../form-builder";

export default function CreateEventForm() {
  const formConfig = {
    name: "Détails de l'événement",
    fields: [
      {
        id: "image",
        label: "Image de l'événement",
        type: "file",
        options: {
          fileConfig: {
            type: "image",
          },
        },
      },
      {
        id: "title",
        label: "Titre de l'événement",
        type: "text",
        options: {
          required: true,
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
        },
      },
      {
        id: "participants",
        label: "Participants",
        type: "text",
        options: {
          required: true,
          helperText: "Nombre maximum autorisé",
        },
      },
      {
        id: "price",
        label: "Prix",
        type: "text",
        options: {
          helperText: "Par équipe",
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
              value: "outdoor",
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
              value: "tour-stop",
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
        id: "inscriptionUrl",
        label: "Lien d'inscription",
        type: "url",
        options: {
          required: true,
        },
      },
    ],
    endpoint: "events",
  };

  return <FormBuilder formConfig={formConfig} />;
}
