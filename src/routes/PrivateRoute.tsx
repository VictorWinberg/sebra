import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';

import { useAuth } from '@/features/authentication/hooks/useAuthQueries';

const PrivateRoute = () => {
  const { data: user, isLoading } = useAuth();
  const { workspace } = useParams();
  const { pathname } = useLocation();

  if (isLoading) return;

  if (workspace === 'demo') {
    return <Outlet />;
  }

  if (!user) {
    return <Navigate to={{ pathname: '/login', search: `redirect=${pathname}` }} replace />;
  }

  if (workspace && !user.workspaces.find((w) => w.slug === workspace)) {
    return <Navigate to={{ pathname: '/login', search: `redirect=${pathname}&code=403` }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
