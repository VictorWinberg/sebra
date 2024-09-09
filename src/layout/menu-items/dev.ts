// assets
import {
  IconBrandChrome,
  IconCode,
  IconHelp,
  IconKey,
  IconNote,
  IconPalette,
  IconShadow,
  IconTypography,
  IconWindmill
} from '@tabler/icons-react';
import { MenuItem } from '.';

// constant
const icons = {
  IconBrandChrome,
  IconCode,
  IconHelp,
  IconKey,
  IconNote,
  IconPalette,
  IconShadow,
  IconTypography,
  IconWindmill
};

// ==============================|| DEV MENU ITEMS ||============================== //

const dev: MenuItem = {
  id: 'dev',
  title: 'Dev',
  type: 'collapse',
  icon: icons.IconCode,
  children: [
    {
      id: 'default',
      title: 'Dev Page',
      type: 'item',
      url: '/dev/sample',
      icon: icons.IconBrandChrome,
      breadcrumbs: true
    },
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
      url: '/dev/util-typography',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/dev/util-color',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/dev/util-shadow',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'collapse',
      icon: icons.IconNote,

      children: [
        {
          id: 'default',
          title: 'Sample Page',
          type: 'item',
          url: '/dev/sample-page',
          icon: icons.IconBrandChrome,
          breadcrumbs: true
        },
        {
          id: 'documentation',
          title: 'Documentation',
          type: 'item',
          url: 'https://codedthemes.gitbook.io/berry/',
          icon: icons.IconHelp,
          external: true,
          target: true
        }
      ]
    }
  ]
};

export default dev;
