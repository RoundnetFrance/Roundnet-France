// MUI ICONS
import FaceIcon from '@mui/icons-material/Face';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GroupsIcon from '@mui/icons-material/Groups';
import ClearIcon from '@mui/icons-material/Clear';

const accountMenuElements = [
  {
    _id: 'account',
    label: 'Mon compte',
    icon: <FaceIcon />,
  },
  {
    _id: 'password',
    label: 'Mot de passe',
    icon: <VpnKeyIcon />,
  },
  {
    _id: 'clubs',
    label: 'Club',
    icon: <GroupsIcon />,
  },
  {
    _id: 'delete',
    label: 'Supprimer mon compte',
    icon: <ClearIcon />,
    color: 'error',
  }
];

const dashboardElements = [
  {
    _id: 'rules',
    label: 'Règles',
    icon: 'rule',
    description: 'Changez le document PDF des règles du site.',
    url: '/rf-admin/competition/regles'
  },
  {
    _id: 'cdf',
    label: 'Coupe de France',
    icon: 'emoji_events',
    description: 'Changez le document PDF de la coupe de France.',
    url: '/rf-admin/competition/coupe-de-france'
  },
  {
    _id: 'ric',
    label: 'Rencontres inter-clubs',
    icon: 'multiple_stop',
    description: 'Changez le document PDF des Rencontres Inter-Clubs.',
    url: '/rf-admin/competition/ric'
  },
]

export { accountMenuElements, dashboardElements };