// material-ui
import { Divider, List, Typography, useTheme } from '@mui/material';

// project imports
import { MenuItem } from '@/layout/menu-items';
import NavCollapse from './NavCollapse';
import NavItem from './NavItem';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

interface NavGroupProps {
  item: MenuItem;
}

const NavGroup = ({ item }: NavGroupProps) => {
  const theme = useTheme();

  // menu list collapse & items
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />;
      case 'divider':
        return <Divider key={menu.id} sx={{ my: 1 }} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        disablePadding
        subheader={
          item.title && (
            <Typography variant="caption" sx={{ ...theme.typography.menuCaption }} display="block" gutterBottom>
              {item.title}
              {item.caption && (
                <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};

export default NavGroup;
