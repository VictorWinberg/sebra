import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import MainLayout from '@/layout/MainLayout';
import Loadable from '@/ui-component/Loadable';
import PrivateRoute from './PrivateRoute';

// home routing
const HomeWrapper = Loadable(lazy(() => import('@/features/home/components/HomeWrapper')));
const HomePage = Loadable(lazy(() => import('@/features/home/pages/HomePage')));
const AssignmentsPage = Loadable(lazy(() => import('@/features/assignments/pages/AssignmentsPage')));
const AssignmentEdit = Loadable(lazy(() => import('@/features/assignments/components/AssignmentEdit')));
const ContactsPage = Loadable(lazy(() => import('@/features/contacts/pages/ContactsPage')));
const ContactEdit = Loadable(lazy(() => import('@/features/contacts/components/ContactEdit')));
const CompaniesPage = Loadable(lazy(() => import('@/features/companies/pages/CompaniesPage')));
const CompanyEdit = Loadable(lazy(() => import('@/features/companies/components/CompanyEdit')));
const LeadsPage = Loadable(lazy(() => import('@/features/leads/pages/LeadsPage')));

// main routing
const DocumentsPage = Loadable(lazy(() => import('@/features/documents/pages/DocumentsPage')));
const DocumentEdit = Loadable(lazy(() => import('@/features/documents/components/DocumentEdit')));
const ModulesPage = Loadable(lazy(() => import('@/features/modules/pages/ModulesPage')));

// dev routing
const DevPage = Loadable(lazy(() => import('@/features/dev/pages/DevPage')));
const TypographyPage = Loadable(lazy(() => import('@/features/dev/pages/TypographyPage')));
const ColorPage = Loadable(lazy(() => import('@/features/dev/pages/ColorPage')));
const ShadowPage = Loadable(lazy(() => import('@/features/dev/pages/ShadowPage')));
const SamplePage = Loadable(lazy(() => import('@/features/dev/pages/SamplePage')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <PrivateRoute />,
  children: [
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Navigate to="/home" />
        },
        {
          path: 'home',
          element: <HomeWrapper />,
          children: [
            {
              path: '',
              element: <HomePage />
            },
            {
              path: 'assignments',
              children: [
                {
                  path: '',
                  element: <AssignmentsPage />
                },
                {
                  path: ':id',
                  element: <AssignmentEdit />
                }
              ]
            },
            {
              path: 'contacts',
              children: [
                {
                  path: '',
                  element: <ContactsPage />
                },
                {
                  path: ':id',
                  element: <ContactEdit />
                }
              ]
            },
            {
              path: 'companies',
              children: [
                {
                  path: '',
                  element: <CompaniesPage />
                },
                {
                  path: ':id',
                  element: <CompanyEdit />
                }
              ]
            },
            {
              path: 'leads',
              element: <LeadsPage />
            }
          ]
        },
        {
          path: 'documents',
          children: [
            {
              path: '',
              element: <DocumentsPage />
            },
            {
              path: ':id',
              element: <DocumentEdit />
            }
          ]
        },
        {
          path: 'modules',
          element: <ModulesPage />
        },
        ...(process.env.NODE_ENV === 'development'
          ? [
              {
                path: 'dev',
                children: [
                  {
                    path: 'sample',
                    element: <DevPage />
                  },
                  {
                    path: 'util-typography',
                    element: <TypographyPage />
                  },
                  {
                    path: 'util-color',
                    element: <ColorPage />
                  },
                  {
                    path: 'util-shadow',
                    element: <ShadowPage />
                  },
                  {
                    path: 'sample-page',
                    element: <SamplePage />
                  }
                ]
              }
            ]
          : [])
      ]
    }
  ]
};

export default MainRoutes;
