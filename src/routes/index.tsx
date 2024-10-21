import { createBrowserRouter } from 'react-router-dom';

// routes
import { BASE_URL } from '@/config';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([MainRoutes, AuthenticationRoutes], {
  basename: BASE_URL
});

export default router;
