import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const ClientPage = Loadable(lazy(() => import('pages/client')));
const DebtorPage = Loadable(lazy(() => import('pages/debtor')));
const PaymentPage = Loadable(lazy(() => import('pages/payment')));
const ReportsPage = Loadable(lazy(() => import('pages/reports')));
const IntegrationPage = Loadable(lazy(() => import('pages/integrations')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'client',
            element: <ClientPage />
        },
        {
            path: 'debtors',
            element: <DebtorPage />
        },
        {
            path: 'payments',
            element: <PaymentPage />
        },
        {
            path: 'reports',
            element: <ReportsPage />
        },
        {
            path: 'integrations',
            element: <IntegrationPage />
        },
    ]
};

export default MainRoutes;
