import { lazy } from 'react';

// project imports
import MainLayout from '@/layout/MainLayout';
import Loadable from '@/ui-component/Loadable';
import { Navigate } from 'react-router-dom';

// home routing
const HomeWrapper = Loadable(lazy(() => import('@/features/home/components/HomeWrapper')));
const HomePage = Loadable(lazy(() => import('@/features/home/pages/HomePage')));
const AssignmentsPage = Loadable(lazy(() => import('@/features/assignments/pages/AssignmentsPage')));
const AssignmentEdit = Loadable(lazy(() => import('@/features/assignments/components/AssignmentEdit')));
const ContactsPage = Loadable(lazy(() => import('@/features/contacts/pages/ContactsPage')));
const ContactEdit = Loadable(lazy(() => import('@/features/contacts/components/ContactEdit')));
const CompaniesPage = Loadable(lazy(() => import('@/features/companies/pages/CompaniesPage')));
const CompanyEdit = Loadable(lazy(() => import('@/features/companies/components/CompanyEdit')));
const Seeking = Loadable(lazy(() => import('@/dummy-views/seeking/Seeking')));
const NewSeeking = Loadable(lazy(() => import('@/dummy-views/seeking/NewSeeking')));
const Reports = Loadable(lazy(() => import('@/dummy-views/reports/Reports')));
const LeadsPage = Loadable(lazy(() => import('@/features/leads/pages/LeadsPage')));

// main routing
const DocumentsPage = Loadable(lazy(() => import('@/features/documents/pages/DocumentsPage')));
const DocumentEdit = Loadable(lazy(() => import('@/features/documents/components/DocumentEdit')));
const Mailing = Loadable(lazy(() => import('@/dummy-views/mailing/Mailing')));
const Results = Loadable(lazy(() => import('@/dummy-views/results/Results')));
const Organization = Loadable(lazy(() => import('@/dummy-views/organization/Organization')));
const ModulesPage = Loadable(lazy(() => import('@/features/modules/pages/ModulesPage')));

// other routing
const Settings = Loadable(lazy(() => import('@/dummy-views/settings/Settings')));
const Account = Loadable(lazy(() => import('@/dummy-views/account/Account')));
const Help = Loadable(lazy(() => import('@/dummy-views/help/Help')));

// dev routing
const DevPage = Loadable(lazy(() => import('@/features/dev/pages/DevPage')));
const TypographyPage = Loadable(lazy(() => import('@/features/dev/pages/TypographyPage')));
const ColorPage = Loadable(lazy(() => import('@/features/dev/pages/ColorPage')));
const ShadowPage = Loadable(lazy(() => import('@/features/dev/pages/ShadowPage')));
const SamplePage = Loadable(lazy(() => import('@/features/dev/pages/SamplePage')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
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
          path: 'seeking',
          children: [
            {
              path: '',
              element: <Seeking />
            },
            {
              path: 'new',
              element: <NewSeeking />
            }
          ]
        },
        {
          path: 'reports',
          element: <Reports />
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
      path: 'mailing',
      element: <Mailing />
    },
    {
      path: 'results',
      element: <Results />
    },
    {
      path: 'organization',
      element: <Organization />
    },
    {
      path: 'modules',
      element: <ModulesPage />
    },
    {
      path: 'settings',
      element: <Settings />
    },
    {
      path: 'my-account',
      element: <Account />
    },
    {
      path: 'help',
      element: <Help />
    },
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
};

export default MainRoutes;
