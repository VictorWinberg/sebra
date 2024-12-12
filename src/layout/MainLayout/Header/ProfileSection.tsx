import { useEffect, useRef, useState } from 'react';

// material-ui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// third-party

// project imports
import { useAuthLogout } from '@/features/authentication/hooks/useAuthMutations';
import { useAuth } from '@/features/authentication/hooks/useAuthQueries';
import MainCard from '@/ui-component/cards/MainCard';
import Transitions from '@/ui-component/extended/Transitions';

// assets
import User1 from '@/assets/images/users/user-round.svg';
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { workspace } = useParams();
  const { data: user } = useAuth();
  const { mutate: logoutUser } = useAuthLogout();

  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef<HTMLDivElement>(null);
  const handleLogout = () => logoutUser();

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current?.contains(event.target as Node)) {
      return;
    }
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

  if (!user || workspace === 'demo') return null;

  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light
            }
          },
          '& .MuiChip-label': {
            lineHeight: 0
          }
        }}
        icon={
          <Avatar
            src={User1}
            sx={{
              ...theme.typography.mediumAvatar,
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer'
            }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.primary.main} />}
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard border={false} elevation={16} cardContent={false} boxShadow shadow={theme.shadows[16]}>
                  <Box sx={{ p: 2, pb: 0 }}>
                    <Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                          {user.email}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                  <Box sx={{ p: 2, pt: 0 }}>
                    <List
                      component="nav"
                      sx={{
                        width: '100%',
                        maxWidth: 350,
                        minWidth: 300,
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: '10px',
                        [theme.breakpoints.down('md')]: {
                          minWidth: '100%'
                        },
                        '& .MuiListItemButton-root': {
                          mt: 0.5
                        }
                      }}
                    >
                      <ListItemButton sx={{ borderRadius: '6px' }} selected={false} onClick={console.log}>
                        <ListItemIcon>
                          <IconSettings stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
                      </ListItemButton>
                      <ListItemButton sx={{ borderRadius: '6px' }} selected={false} onClick={console.log}>
                        <ListItemIcon>
                          <IconUser stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Grid container spacing={1} justifyContent="space-between">
                              <Grid item>
                                <Typography variant="body2">Social Profile</Typography>
                              </Grid>
                            </Grid>
                          }
                        />
                      </ListItemButton>
                      <ListItemButton sx={{ borderRadius: '6px' }} selected={false} onClick={handleLogout}>
                        <ListItemIcon>
                          <IconLogout stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                      </ListItemButton>
                    </List>
                  </Box>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
