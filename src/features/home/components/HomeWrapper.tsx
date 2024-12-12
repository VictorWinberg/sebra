import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

// material-ui
import { Chip, Fade, Tab, Tabs } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';

// project imports
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { setCookieWorkspace } from '@/utils/cookie';

type TabItem = {
  id: string;
  title: string;
  url: string;
};

const tabItems: TabItem[] = [
  { id: 'home', title: 'Hem', url: '/home' },
  { id: 'assignments', title: 'Uppdrag', url: '/home/assignments' },
  { id: 'contacts', title: 'Kontakter', url: '/home/contacts' },
  { id: 'companies', title: 'Bolag', url: '/home/companies' },
  { id: 'leads', title: 'Leads', url: '/home/leads' }
];

const HomeWrapper = () => {
  const queryClient = useQueryClient();
  const { pathname } = useLocation();
  const { workspace } = useParams();
  const selected = tabItems.findLastIndex((item) => pathname.startsWith(`/${workspace}${item.url}`));

  useEffect(() => {
    setCookieWorkspace(workspace);
    queryClient.invalidateQueries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workspace]);

  return (
    <FlexGrow>
      <Tabs variant="scrollable" value={selected} sx={{ minHeight: 0 }} TabIndicatorProps={{ sx: { display: 'none' } }}>
        {tabItems.map((item, index) => (
          <Tab
            key={item.id}
            component="div"
            sx={{ p: 0, m: 0, mr: 1, minHeight: 0, minWidth: 0, fontWeight: 400 }}
            disableRipple
            label={
              <>
                <Fade in={index === selected} timeout={300}>
                  <Chip
                    component={Link}
                    label={item.title}
                    to={`/${workspace}${item.url}`}
                    color="primary"
                    variant="filled"
                    sx={{ px: 1, '&:hover': { backgroundColor: 'primary.main' } }}
                    clickable
                  />
                </Fade>
                <Fade in={index !== selected} timeout={300}>
                  <Chip
                    component={Link}
                    label={item.title}
                    to={`/${workspace}${item.url}`}
                    color="primary"
                    variant="outlined"
                    sx={{ px: 1, position: 'absolute', top: 0, left: 0 }}
                    style={{ boxShadow: 'none' }}
                    clickable
                  />
                </Fade>
              </>
            }
          />
        ))}
      </Tabs>
      <Outlet />
    </FlexGrow>
  );
};

export default HomeWrapper;
