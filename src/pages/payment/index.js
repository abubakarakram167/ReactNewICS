import { useState } from 'react';
import {
    Button,
    Grid,
    Typography
} from '@mui/material';
import OrdersTable from '../reusableComponents/Table';
import MainCard from 'components/MainCard';
import { headCells, rows } from './data';


const DashboardDefault = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');

    return (
        <Grid justifyContent = "center" alignItems = "center" container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
           
            {/* row 3 */}
            <Grid item xs={12} md={10} lg={10}>
                <Grid item>
                    <Typography variant="h5">Payments</Typography>
                </Grid>
                <Grid container alignItems="center">
                    <Button style = {{ textDecoration: "underline", padding: 0 }} variant="text">Add Payment</Button>
                </Grid>
                <Grid item>
                    <Typography style ={{ fontSize: 11 }} variant="h7">Payment's made by the client</Typography>
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <OrdersTable rows = {rows} headCells = {headCells} />
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default DashboardDefault;
