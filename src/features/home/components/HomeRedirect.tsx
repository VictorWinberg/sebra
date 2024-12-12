import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project imports
import { useAuth } from '@/features/authentication/hooks/useAuthQueries';

const HomeRedirect = () => {
  const { data: user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;

    if (user?.workspaces.length) {
      navigate(`/${user.workspaces[0].slug}`);
    } else {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoading]);

  return null;
};

export default HomeRedirect;
