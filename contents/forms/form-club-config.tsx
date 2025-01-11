import { Fragment } from "react";
import { Link } from "../../components/ui";
import type { FormConfig } from "../../models/Form";

const descriptionAfter = (
  <Fragment>
    Cette demande sera soumise à validation par la fédération française de
    Roundnet, dans le respect des{" "}
    <Link href='/clubs-et-communautes/adherer-a-roundnet-france'>
      règles d&apos;affiliation de l&apos;association
    </Link>
    .
  </Fragment>
);

export const getClubFormConfig: () => FormConfig = () => {
  return {
    name: "Formulaire de demande d'affiliation pour la saison 2023",
    fields: [
      {
        id: "image",
        label: "Logo du club",
        type: "file",
        options: {
          required: true,
          fileConfig: {
            type: "image",
            imageMaxWidth: 600,
          },
        },
      },
      {
        id: "organization",
        label: "Nom du club",
        type: "text",
        options: {
          required: true,
        },
      },
      {
        id: "rna",
        label: "Numéro RNA",
        type: "text",
        options: {
          required: true,
          helperText:
            "Le Répertoire National des Associations (RNA) vous a communiqué un numéro unique à la création de votre club.",
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
        id: "clubCreated",
        label: "Date de création du club",
        type: "date",
        options: {
          // required: true,
          dateConfig: {
            disableFuture: true,
            clearable: true,
            openTo: "month",
            views: ["year", "month", "day"],
          },
        },
      },
      {
        id: "description",
        label: "Description",
        type: "longtext",
        options: {
          helperText: "Veuillez indiquer la description de votre club.",
          required: true,
          multilineRows: 6,
        },
      },
      {
        id: "name",
        label: "Nom & prénom du référent",
        type: "text",
        options: {
          required: true,
        },
      },
      {
        id: "email",
        label: "Email",
        type: "email",
        options: {
          required: true,
        },
      },
      {
        id: "phone",
        label: "Téléphone",
        type: "phone",
        options: {
          required: true,
          dividerBottom: true,
        },
      },
      {
        id: "players",
        label: "Nombre de joueurs",
        type: "text",
        options: {
          helperText: "Estimation du nombre de joueurs de votre communauté",
        },
      },
      {
        id: "website",
        label: "Site internet",
        type: "url",
      },
      {
        id: "facebook",
        label: "Facebook",
        type: "url",
      },
      {
        id: "instagram",
        label: "Instagram",
        type: "url",
      },
      {
        id: "discord",
        label: "Discord",
        type: "text",
        options: {
          helperText:
            "Si vous souhaitez être ajouté au serveur Discord Roundnet France, veuillez renseigner le nom d'utilisateur de votre compte Discord.",
        },
      },
    ],
    endpoint: "clubs",
    sendNotification: "club",
    apiSchema: {
      image: "image",
      title: "organization",
      chip: "city",
      description: "description",
      clubCreated: "clubCreated",
      referer: "name",
      email: "email",
      phone: "phone",
      players: "players",
      links: [
        {
          source: "website",
          key: "url",
        },
        {
          source: "instagram",
          key: "url",
        },
        {
          source: "facebook",
          key: "url",
        },
      ],
      discord: "discord",
    },
    descriptionAfter,
  };
};
