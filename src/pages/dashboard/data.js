

export const headCells = [                                                                             // columns for dashboard table
    {
        id: '$',
        align: 'left',
        disablePadding: false,
        label: '$'
    },
    {
        id: 'Debtor Name',
        align: 'left',
        disablePadding: true,
        label: 'Debtor Name'
    },
    {
        id: 'Client',
        align: 'left',
        disablePadding: true,
        label: 'Client'
    },
    {
        id: 'Phone Number',
        align: 'left',
        disablePadding: false,
        label: 'phone Number'
    },
    {
        id: 'status',
        align: 'left',
        disablePadding: false,
        label: 'Status'
    }
];

function createData(amount, debtorName, clientName, phoneNumber, status) {
    return { amount, debtorName, clientName, phoneNumber, status };
}

export const rows = [
    createData('$' + '2,000', 'Paul', 'Shane', '(130) 123-8473', 'Payment Plan Followup'),
    createData('$' + '1,000', 'Michale', 'Wade', '(120) 523-3434', 'Payment Plan Followup'),
    createData('$' + '4,000', 'mark', 'Fredrick', '(530) 343-1438', 'Payment Plan Followup'),
    createData('$' + '2,000', 'Shane', 'Geoff', '(230) 123-3789', 'Payment Plan Followup'),
    createData('$' + '2,000', 'John', 'Davis', '(830) 123-3434', 'Payment Plan Followup'),
    createData('$' + '2,000', 'kale', 'Daemon', '(230) 123-3434', 'Payment Plan Followup'),
    createData('$' + '2,000', 'Sky', 'Trooper', '(130) 123-3434', 'Payment Plan Followup'),
    createData('$' + '2,000', 'Gwen', 'Mitchell', '(130) 125-3434', 'Payment Plan Followup'),
];




