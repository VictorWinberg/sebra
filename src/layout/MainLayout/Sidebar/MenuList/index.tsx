// material-ui
import { Divider, Typography } from '@mui/material';

// project imports
import menuItem from '@/layout/menu-items';
import NavCollapse from './NavCollapse';
import NavGroup from './NavGroup';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const navItems = menuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      case 'collapse':
        return <NavCollapse key={item.id} menu={item} level={0} />;
      case 'divider':
        return <Divider key={item.id} sx={{ my: 1 }} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default MenuList;
