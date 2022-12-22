

export const headCells = [                                                                             // columns for dashboard table
{
    id: '$',
    align: 'left',
    disablePadding: false,
    label: '$'
},
{
    id: 'Client',
    align: 'left',
    disablePadding: true,
    label: 'Client Name'
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
createData('$' + '2,000', 'Shane', '(130) 123-8473', 'Payment Plan Followup'),
createData('$' + '1,000', 'Wade', '(120) 523-3434', 'Payment Plan Followup'),
createData('$' + '4,000', 'Mark', '(530) 343-1438', 'Payment Plan Followup'),
createData('$' + '2,000', 'Watson', '(230) 123-3789', 'Payment Plan Followup'),
createData('$' + '2,000', 'Kuhlian', '(830) 123-3434', 'Payment Plan Followup'),
createData('$' + '2,000', 'Starc', '(230) 123-3434', 'Payment Plan Followup'),
createData('$' + '2,000', 'Trooper', '(130) 123-3434', 'Payment Plan Followup'),
createData('$' + '2,000', 'Mitchell', '(130) 125-3434', 'Payment Plan Followup'),
];




