import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/features/authentication/hooks/useAuthQueries';
import { useAppStore } from '@/store';

const PrivateRoute = () => {
  const { data: user, isLoading } = useAuth();
  const [state] = useAppStore();

  if (isLoading) return;

  if (user || state.isDemo) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
