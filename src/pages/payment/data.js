

export const headCells = [ 
    {
        id: 'Date',
        align: 'left',
        disablePadding: true,
        label: 'Date'
    },                                                                            // columns for dashboard table
    {
        id: '$',
        align: 'left',
        disablePadding: false,
        label: 'Amount'
    },

    {
        id: 'Method',
        align: 'left',
        disablePadding: false,
        label: 'Method'
    },
    {
        id: 'Reference',
        align: 'left',
        disablePadding: false,
        label: 'Reference'
    }
];

function createData(amount, debtorName, clientName, phoneNumber, status) {
return { amount, debtorName, clientName, phoneNumber, status };
}

export const rows = [
    createData('22-11-2022', '$' + '2,000', 'Check', '2345'),
    createData('12-11-2022', '$' + '1,000', 'Check', '3453'),
    createData('11-09-2022', '$' + '4,000', 'Check', '4575'),
    createData('05-06-2021' ,'$' + '2,000',  'Check', '5743'),
];




