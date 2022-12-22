// assets
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';


// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'savedReports',
    title: 'SAVED REPORTS',
    type: 'group',
    children: [
        {
            id: 'CurrentMonth',
            title: 'Current Month',
            type: 'item',
            url: '/',
            icon: TextSnippetOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'LastQuarter',
            title: 'Last Quarter',
            type: 'item',
            url: '/',
            icon: TextSnippetOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'SocialEngagement',
            title: 'Social engagement',
            type: 'item',
            url: '/',
            icon: TextSnippetOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'Attempted Account Lookups',
            title: 'Attempted Account Lookups',
            type: 'item',
            url: '/',
            icon: TextSnippetOutlinedIcon,
            breadcrumbs: false
        },


    ]
};

export default pages;
