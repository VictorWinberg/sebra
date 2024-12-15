import { Outlet } from 'react-router-dom';

// material-ui
import { CssBaseline, styled, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// project imports
import { useAppStore } from '@/store';
import { drawerWidthCollapsed, drawerWidthExpanded, headerHeight } from '@/store/constant';
import Breadcrumbs from '@/ui-component/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';

// assets
import { IconChevronRight } from '@tabler/icons-react';

interface MainProps {
  open: boolean;
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'theme' })<MainProps>(
  ({ theme, open }) => ({
    ...theme.typography.mainContent,
    transition: theme.transitions.create('margin'),
    [theme.breakpoints.up('md')]: {
      marginLeft: open ? drawerWidthExpanded : drawerWidthCollapsed
    },
    [theme.breakpoints.down('md')]: {
      width: `calc(100% - ${drawerWidthExpanded}px)`,
      padding: '16px'
    }
  })
);

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const [state] = useAppStore();
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          borderBottom: `1px solid ${theme.palette.divider}`,
          transition: state.opened ? theme.transitions.create('width') : 'none'
        }}
      >
        <Toolbar sx={{ height: `${headerHeight}px` }}>
          <Header />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar />

      {/* main content */}
      <Main theme={theme} open={state.opened}>
        {/* breadcrumb */}
        <Breadcrumbs separator={IconChevronRight} icon title rightAlign />
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainLayout;
