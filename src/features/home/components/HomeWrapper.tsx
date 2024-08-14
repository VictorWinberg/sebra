import { Link, Outlet, useLocation } from 'react-router-dom';
import { Chip, Box, Grid, useTheme } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import FlexGrow from '@/ui-component/extended/FlexGrow';

type TabItem = {
  id: string;
  title: string;
  url: string;
};

const tabItems: TabItem[] = [
  { id: 'assignments', title: 'Uppdrag', url: '/home/assignments' },
  { id: 'contacts', title: 'Kontakter', url: '/home/contacts' },
  { id: 'companies', title: 'Bolag', url: '/home/companies' },
  { id: 'seeking', title: 'Söker', url: '/home/seeking' },
  { id: 'reports', title: 'Rapport', url: '/home/reports' },
  { id: 'leads', title: 'Leads', url: '/home/leads' }
];

const HomeWrapper = () => {
  const { pathname } = useLocation();
  const theme = useTheme();

  return (
    <FlexGrow>
      <Grid container alignItems="flex-start" justifyContent="space-between">
        <Grid item sm="auto">
          <PerfectScrollbar style={{ width: '100%', maxWidth: 'calc(100vw - 52px)', overflowX: 'hidden' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {tabItems.map((item) => (
                <Chip
                  key={item.id}
                  component={Link}
                  label={item.title}
                  to={item.url}
                  color="primary"
                  variant={pathname.startsWith(item.url) ? 'filled' : 'outlined'}
                  sx={{ borderColor: theme.palette.grey[200], px: 1, mb: 1 }}
                  clickable
                />
              ))}
            </Box>
          </PerfectScrollbar>
        </Grid>
      </Grid>
      <Outlet />
    </FlexGrow>
  );
};

export default HomeWrapper;
