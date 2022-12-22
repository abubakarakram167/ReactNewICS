// assets
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Start Page',
            type: 'item',
            url: '/',
            icon: DashboardCustomizeOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'clients',
            title: 'Clients',
            type: 'item',
            url: '/client',
            icon: FileCopyOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'debtors',
            title: 'Debtors',
            type: 'item',
            url: '/debtors',
            icon: ShoppingCartOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'payments',
            title: 'Payments',
            type: 'item',
            url: '/payments',
            icon: GroupOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'reports',
            title: 'Reports',
            type: 'item',
            url: '/reports',
            icon: AssessmentOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'integrations',
            title: 'Integrations',
            type: 'item',
            url: '/integrations',
            icon: HorizontalSplitOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
