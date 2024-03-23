import EqualizerIcon from "@mui/icons-material/Equalizer";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EventIcon from "@mui/icons-material/Event";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MapIcon from "@mui/icons-material/Map";
import PeopleIcon from "@mui/icons-material/People";

const contactElements = [
  {
    _id: "regles",
    title: "Toutes les règles officielles de la compétition",
    content:
      "Parce qu'on ne finit jamais vraiment d'en débattre, autant au moins les connaître. Dans le détail, une bible pour les plus minutieux : dans la pratique, de quoi être certain de bien s'entraîner et de bien se préparer pour les tournois officiels. Les règles officielles de roundnet, mises à jour par la fédération.",
    href: "/regles",
    icon: <EqualizerIcon color="primary" sx={{ fontSize: 80 }} />,
  },
  {
    _id: "adhesion",
    title: "Les avantages de l'adhésion à la Roundnet France",
    content:
      "Accompagnement, communication, et tout simplement esprit de communauté : il y a mille raisons d'adhérer à Roundnet France. On vous explique pourquoi en détail.",
    href: "/clubs-et-communautes/adherer-a-roundnet-france",
    icon: <PeopleAltIcon color="primary" sx={{ fontSize: 80 }} />,
  },
  {
    _id: "acheter",
    title: "Le partenaire privilégié de Spikeball en France",
    content:
      "Alors que le roundnet grimpe en flèche parmi les sports de haut niveau, Spikeball est le partenaire privilégié de la compétition. On vous explique pourquoi, et comment vous procurer l'équipement officiel des tournois français.",
    href: "/boutique",
    icon: <ShoppingBasketIcon color="primary" sx={{ fontSize: 80 }} />,
  },
  {
    _id: "calendrier",
    title: "Toutes les dates importantes de la saison",
    content:
      "Vous voulez être sûrs de ne rien rater pour terminer la saison au plus haut dans les points ? Vous avez besoin d'un calendrier des tournois officiels français ? Voici qui est fait pour vous.",
    href: "/competition/calendrier",
    icon: <EventIcon color="primary" sx={{ fontSize: 80 }} />,
  },
  {
    _id: "ric",
    title: "Qui sera le prochain club champion de France ?",
    content:
      "Marre de jouer contre les mêmes têtes, encore et encore ? Venez défier, communauté contre communauté, l'ensemble des joueurs de France et faire briller les couleurs de votre ville ou de votre région !",
    href: "/competiton/rencontres-inter-clubs",
    icon: <LocalActivityIcon color="primary" sx={{ fontSize: 80 }} />,
  },
  {
    _id: "cdf",
    title: "Le plus grand tournoi officiel de roundnet de France",
    content:
      "La coupe de France est sans hésitation le tournoi majeur pour désigner la meilleure équipe de roundnet de l'héxagone. Vous pensez avoir votre chance et défier les meilleurs joueurs du pays ? La compétition n'attend que vous !",
    href: "/competition/coupe-de-france-de-roundnet",
    icon: <EmojiEventsIcon color="primary" sx={{ fontSize: 80 }} />,
  },
  {
    _id: "clubs",
    title: "Il y a forcément des joueurs près de chez vous",
    content:
      "Le roundnet possède de très nombreuses communautés locales dans un nombre croissant de villes en France. Il est plus que probable qu'une communauté nattende que vous, à côté de chez vous ! Retrouvez l'ensemble des clubs et communautés de roundnet en France.",
    href: "/clubs-et-communautes/liste-des-clubs",
    icon: <MapIcon color="primary" sx={{ fontSize: 80 }} />,
  },
  {
    _id: "equipe",
    title: "Les figures derrière Roundnet France",
    content:
      "Fédération de passionnés pour des passionnés, Roundnet France est composé de membres provenant de tous les coins de la France. Retrouvez toutes les informations sur les membres de la Fédération Roundnet France.",
    href: "/clubs-et-communautes/liste-des-clubs",
    icon: <PeopleIcon color="primary" sx={{ fontSize: 80 }} />,
  },
  {
    _id: "statuts",
    title: "Les statuts officiels de la fédération",
    content:
      "Tous les documents officiels de la fédération française de roundnet disponibles pour tous, en toute transparence.",
    href: "/clubs-et-communautes/liste-des-clubs",
    icon: <PeopleIcon color="primary" sx={{ fontSize: 80 }} />,
  },
];

export { contactElements };
