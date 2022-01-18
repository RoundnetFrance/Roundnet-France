import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const contactElements = [
  {
    _id: 'regles',
    title: 'Toutes les règles officielles de la compétition',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit corporis accusamus nihil ipsa quisquam ullam exercitationem adipisci deserunt fugiat reprehenderit velit ratione ex, beatae deleniti eius et quia facilis nesciunt incidunt.',
    href: '/regles',
    icon: <EqualizerIcon color="primary" sx={{ fontSize: 80 }} />,
  },
  {
    _id: 'adhesion',
    title: 'Les avantages de l\'adhésion à la Roundnet France',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit corporis accusamus nihil ipsa quisquam ullam exercitationem adipisci deserunt fugiat reprehenderit velit ratione ex, beatae deleniti eius et quia facilis nesciunt incidunt.',
    href: '/clubs-et-communautes/adherer-a-roundnet-france',
    icon: <PeopleAltIcon color="primary" sx={{ fontSize: 80 }} />,
  },
  {
    _id: 'acheter',
    title: 'Le partenaire privilégié de Spikeball en France',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit corporis accusamus nihil ipsa quisquam ullam exercitationem adipisci deserunt fugiat reprehenderit velit ratione ex, beatae deleniti eius et quia facilis nesciunt incidunt.',
    href: '/boutique',
    icon: <ShoppingBasketIcon color="primary" sx={{ fontSize: 80 }} />,
  }
];

export { contactElements };