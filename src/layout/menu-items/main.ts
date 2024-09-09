// assets
import {
  IconDashboard,
  IconFile,
  IconLogin2,
  IconMail,
  IconMessageCircle,
  IconSettings,
  IconUser
} from '@tabler/icons-react';
import { MenuItem } from '.';

// constant
const icons = { IconDashboard, IconFile, IconLogin2, IconMail, IconMessageCircle, IconUser, IconSettings };

// ==============================|| MAIN MENU ITEMS ||============================== //

const main: MenuItem = {
  id: 'main',
  title: 'Meny',
  type: 'group',
  children: [
    {
      id: 'home',
      title: 'Hem',
      type: 'item',
      url: '/home',
      icon: icons.IconDashboard,
      breadcrumbs: false
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
      id: 'modules',
      title: 'Moduler',
      type: 'item',
      url: '/modules',
      icon: icons.IconSettings,
      breadcrumbs: true
    },
    { id: 'divider', type: 'divider' },
    {
      id: 'login',
      title: 'Login',
      type: 'item',
      url: '/pages/login',
      icon: icons.IconLogin2
    }
  ]
};

export default main;
