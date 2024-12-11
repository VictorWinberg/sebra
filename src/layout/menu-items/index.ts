import main from './main';
import { Icon } from '@tabler/icons-react';

// ==============================|| MENU ITEMS ||============================== //

export interface MenuItem {
  id: string;
  type: string;
  title?: string;
  caption?: string;
  url?: string;
  icon?: Icon;
  breadcrumbs?: boolean;
  target?: boolean;
  external?: boolean;
  disabled?: boolean;
  children?: MenuItem[];
}

const menuItems: { items: MenuItem[] } = {
  items: [main]
};

export default menuItems;
