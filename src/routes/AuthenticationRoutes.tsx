import { lazy } from 'react';

// project imports
import Loadable from '@/ui-component/Loadable';
import MinimalLayout from '@/layout/MinimalLayout';

// login option routing
const AuthLogin = Loadable(lazy(() => import('@/features/authentication/pages/Login')));
const AuthRegister = Loadable(lazy(() => import('@/features/authentication/pages/Register')));
const ModuleComponent = Loadable(lazy(() => import('@/features/modules/components/Module')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthLogin />
    },
    {
      path: '/register',
      element: <AuthRegister />
    },
    {
      path: '/module',
      element: <ModuleComponent />
    }
  ]
};

export default AuthenticationRoutes;
