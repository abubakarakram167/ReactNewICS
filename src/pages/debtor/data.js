

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
createData('$' + '2,000', 'Taylor', '(130) 123-8473', 'Payment Plan Followup'),
createData('$' + '1,000', 'mcullum', '(120) 523-3434', 'Payment Plan Followup'),
createData('$' + '4,000', 'nova', '(530) 343-1438', 'Payment Plan Followup'),
createData('$' + '2,000', 'Emma',  '(230) 123-3789', 'Payment Plan Followup'),
createData('$' + '2,000', 'Davis', '(830) 123-3434', 'Payment Plan Followup'),
createData('$' + '2,000', 'Daemon', '(230) 123-3434', 'Payment Plan Followup'),
createData('$' + '2,000', 'Trooper', '(130) 123-3434', 'Payment Plan Followup'),
createData('$' + '2,000', 'Gwen',  '(130) 125-3434', 'Payment Plan Followup'),
];




