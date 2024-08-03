// material-ui
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

// third-party
import { BrowserView, MobileView } from 'react-device-detect';
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import { useAppStore } from '@/store';
import { SET_MENU } from '@/store/actions';
import { drawerWidthCollapsed, drawerWidthExpanded, headerHeight } from '@/store/constant';
import Chip from '@/ui-component/extended/Chip';
import LogoSection from '../LogoSection';
import MenuList from './MenuList';

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = () => {
  const [state, dispatch] = useAppStore();
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
          <LogoSection />
        </Box>
      </Box>
      <BrowserView>
        <PerfectScrollbar component="div" style={{ height: `calc(100vh - ${headerHeight}px)` }}>
          <Box
            sx={{
              px: state.opened ? 2 : 1,
              width: state.opened ? drawerWidthExpanded : drawerWidthCollapsed,
              overflow: 'hidden',
              transition: theme.transitions.create(['width', 'padding'])
            }}
          >
            <MenuList />
            <Stack direction="column" justifyContent="center" sx={{ mb: 2 }}>
              <Chip label={`v${__APP_VERSION__}`} disabled size="small" />
              <Chip label={__COMMIT_HASH__} disabled size="small" />
            </Stack>
          </Box>
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList />
          <Stack direction="column" justifyContent="center" sx={{ mb: 2 }}>
            <Chip label={`v${__APP_VERSION__}`} disabled size="small" />
            <Chip label={__COMMIT_HASH__} disabled size="small" />
          </Stack>
        </Box>
      </MobileView>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        width: 'auto'
      }}
    >
      <Drawer
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={state.opened || matchUpMd}
        onClose={() => dispatch({ type: SET_MENU, payload: false })}
        sx={{
          '& .MuiDrawer-paper': {
            background: theme.palette.grey[100],
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: `${headerHeight}px`
            }
          }
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
