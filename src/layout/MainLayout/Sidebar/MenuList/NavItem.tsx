import { useLocation, useNavigate } from 'react-router-dom';

// material-ui
import { Fade, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';

// project imports
import { MenuItem } from '@/layout/menu-items';
import { useAppStore } from '@/store';
import { SET_MENU } from '@/store/actions';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

interface NavItemProps {
  item: MenuItem;
  level: number;
}

const NavItem = ({ item, level }: NavItemProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [state, dispatch] = useAppStore();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const Icon = item.icon;
  const itemIcon = Icon ? (
    <Icon stroke={1.5} size="1.3rem" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: item.url === pathname ? 8 : 6,
        height: item.url === pathname ? 8 : 6
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  const onItemClick = () => {
    if (matchDownMd) {
      dispatch({ type: SET_MENU, payload: !state.opened });
    }

    if (item.external) {
      window.open(item.url, itemTarget);
    } else {
      navigate(item.url ?? '');
    }
  };

  return (
    <ListItemButton
      disabled={item.disabled}
      sx={{
        borderRadius: '6px',
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`
      }}
      selected={pathname.startsWith(item.url || '')}
      onClick={onItemClick}
    >
      <ListItemIcon sx={{ my: 'auto', minWidth: !item.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
      <Fade in={matchDownMd || state.opened}>
        <ListItemText
          primary={
            <Typography variant={pathname.startsWith(item.url || '') ? 'h5' : 'body1'} color="inherit">
              {item.title}
            </Typography>
          }
          secondary={
            item.caption && (
              <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                {item.caption}
              </Typography>
            )
          }
          sx={{ '& p': { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }}
        />
      </Fade>
    </ListItemButton>
  );
};

export default NavItem;
