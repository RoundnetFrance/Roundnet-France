// MUI ICONS
import FaceIcon from "@mui/icons-material/Face";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GroupsIcon from "@mui/icons-material/Groups";
import ClearIcon from "@mui/icons-material/Clear";

const accountMenuElements = [
  {
    _id: "account",
    label: "Mon compte",
    icon: <FaceIcon />,
  },
  {
    _id: "password",
    label: "Mot de passe",
    icon: <VpnKeyIcon />,
  },
  {
    _id: "clubs",
    label: "Club",
    icon: <GroupsIcon />,
  },
  {
    _id: "delete",
    label: "Supprimer mon compte",
    icon: <ClearIcon />,
    color: "error",
  },
];

const dashboardElements = [
  {
    _id: "events",
    label: "Tournois & Events",
    color: "secondary",
    icon: "edit_calendar",
    description: "Validez et modifiez les tournois futurs et passés.",
    url: "/rf-admin/clubs-et-communautes/calendrier",
  },
  {
    _id: "rules",
    label: "Règles",
    icon: "rule",
    description: "Changez le document PDF des règles du site.",
    url: "/rf-admin/competition/regles",
  },
  {
    _id: "observers",
    label: "Observeurs",
    icon: "rule",
    description:
      "Changez le document PDF des directives d'observation du site.",
    url: "/rf-admin/competition/observeurs",
  },
  {
    _id: "cdf",
    label: "Coupe de France",
    icon: "emoji_events",
    description: "Changez le document PDF de la coupe de France.",
    url: "/rf-admin/competition/coupe-de-france",
  },
  {
    _id: "ric",
    label: "Rencontres inter-clubs",
    icon: "multiple_stop",
    description: "Changez le document PDF des Rencontres Inter-Clubs.",
    url: "/rf-admin/competition/ric",
  },
  {
    _id: "clubs",
    label: "Liste des clubs",
    color: "secondary",
    icon: "groups",
    description:
      "Consultez, modifiez et validez les informations des clubs pour leur affichage public sur le site.",
    url: "/rf-admin/clubs-et-communautes/liste-des-clubs",
  },
  {
    _id: "statuts",
    label: "Statuts",
    icon: "summarize",
    description: "Changez le document PDF des statuts de l'association.",
    url: "/rf-admin/association/statuts",
  },
  {
    _id: "partenaires",
    label: "Partenaires",
    color: "primary",
    icon: "group_work",
    description:
      "Administrez les partenaires de l'association et leurs informations.",
    url: "/rf-admin/association/partenaires",
  },
  {
    _id: "date-classement",
    label: "Date Classement",
    color: "primary",
    icon: "edit_calendar",
    description: "Changez la date de la dernière mise à jour du classement.",
    url: "/rf-admin/classement",
  },
  {
    _id: "account",
    label: "Mon compte",
    color: "neutralDark",
    icon: "tune",
    description:
      "Modifiez vos informations personnelles, changez votre affiliation de club.",
    url: "/rf-admin/parametres/mon-compte",
  },
  {
    _id: "support",
    label: "Support",
    color: "neutralDark",
    icon: "support",
    description:
      "Un bug, un comportement inattendu, ou une demande de fonctionnalité ? Venez nous le signaler.",
    url: "/rf-admin/support",
  },
  {
    _id: "accounts",
    label: "Admins",
    color: "neutralDark",
    icon: "manage_accounts",
    description: "Gérez les comptes des administrateurs du site.",
    url: "/rf-admin/parametres/administrateurs",
  },
  {
    _id: "team",
    label: "Equipe RF",
    color: "secondary",
    icon: "manage_accounts",
    description: "Gérez les membres de l'équipe Roundnet France",
    url: "/rf-admin/federation-members",
  },
];

export { accountMenuElements, dashboardElements };
