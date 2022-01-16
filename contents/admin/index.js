// MUI ICONS
import FaceIcon from '@mui/icons-material/Face';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GroupsIcon from '@mui/icons-material/Groups';
import SupportIcon from '@mui/icons-material/Support';
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
    label: 'Clubs',
    icon: <GroupsIcon />,
  },
  {
    _id: 'support',
    label: 'Support',
    icon: <SupportIcon />,
  },
  {
    _id: 'delete',
    label: 'Supprimer mon compte',
    icon: <ClearIcon />,
    color: 'error',
  }
];

export { accountMenuElements };