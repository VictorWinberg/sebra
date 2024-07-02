// assets
import { IconDashboard, IconFile, IconMail, IconMessageCircle, IconSettings, IconUser } from '@tabler/icons-react';
import { MenuItem } from '.';

// constant
const icons = { IconDashboard, IconFile, IconMail, IconMessageCircle, IconUser, IconSettings };

// ==============================|| MAIN MENU ITEMS ||============================== //

const main: MenuItem = {
  id: 'main',
  title: 'Meny',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: true
    },
    {
      id: 'documents',
      title: 'Dokument',
      type: 'item',
      url: '/documents',
      icon: icons.IconFile,
      breadcrumbs: true
    },
    {
      id: 'mailing',
      title: 'Utskick',
      type: 'item',
      url: '/mailing',
      icon: icons.IconMail,
      breadcrumbs: true
    },
    {
      id: 'results',
      title: 'Resultat',
      type: 'item',
      url: '/results',
      icon: icons.IconMessageCircle,
      breadcrumbs: true
    },
    {
      id: 'organization',
      title: 'Organisation',
      type: 'item',
      url: '/organization',
      icon: icons.IconUser,
      breadcrumbs: true
    },
    {
      id: 'modules',
      title: 'Moduler',
      type: 'item',
      url: '/modules',
      icon: icons.IconSettings,
      breadcrumbs: true
    }
  ]
};

export default main;
