import { Navigate, Outlet, useParams } from 'react-router-dom';

import { useAuth } from '@/features/authentication/hooks/useAuthQueries';

const PrivateRoute = () => {
  const { data: user, isLoading } = useAuth();
  const { workspace } = useParams();

  if (isLoading) return;

  if (user || workspace === 'demo') {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
