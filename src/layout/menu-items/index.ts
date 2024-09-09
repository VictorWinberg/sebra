import main from './main';
import dev from './dev';
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
  items: [main, ...(process.env.NODE_ENV === 'development' ? [dev] : [])]
};

export default menuItems;
