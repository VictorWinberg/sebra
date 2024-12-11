// material-ui
import { Avatar, Box, ButtonBase, useMediaQuery, useTheme } from '@mui/material';

// project imports
import { useAppStore } from '@/store';
import { SET_MENU } from '@/store/actions';
import LogoSection from '../LogoSection';
import NotificationSection from './NotificationSection';
import ProfileSection from './ProfileSection';
import SearchSection from './SearchSection';

// assets
import { IconLayoutSidebarLeftCollapse, IconLayoutSidebarLeftExpand, IconMenu2 } from '@tabler/icons-react';
import DemoSection from './DemoSection';
import { WorkspaceSelector } from '@/features/workspaces/components/WorkspaceSelect';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
  const theme = useTheme();
  const [state, dispatch] = useAppStore();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: '8px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: 'transparent',
              color: theme.palette.primary.dark,
              '&:hover': {
                background: theme.palette.primary.light,
                color: theme.palette.primary.main
              }
            }}
            onClick={() => dispatch({ type: SET_MENU, payload: !state.opened })}
            color="inherit"
          >
            {matchDownMd ? (
              <IconMenu2 stroke={1.5} size="1.3rem" />
            ) : state.opened ? (
              <IconLayoutSidebarLeftCollapse stroke={1.5} />
            ) : (
              <IconLayoutSidebarLeftExpand stroke={1.5} />
            )}
          </Avatar>
        </ButtonBase>
      </Box>

      {/* header search */}
      <SearchSection />
      <Box sx={{ flexGrow: 1 }} />
      <WorkspaceSelector />

      {/* notification & profile */}
      <DemoSection />
      <ProfileSection />
      <NotificationSection />
    </>
  );
};

export default Header;
