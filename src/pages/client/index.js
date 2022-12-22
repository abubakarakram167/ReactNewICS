import { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    Stack,
    Typography
} from '@mui/material';
import OrdersTable from '../reusableComponents/Table';
import IncomeAreaChart from '../reusableComponents/IncomeAreaChart';
import MainCard from 'components/MainCard';
import { headCells, rows } from './data';


const DashboardDefault = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');

    return (
        <Grid justifyContent = "center" alignItems = "center" container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

            {/* row 2 */}
            <Grid item xs={12} md={10} lg={10}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography style = {{  marginBottom: 30}} variant="h5">Clients</Typography>
                        <Typography variant="h5">{ slot == 'week' ? 'This Week' : "Month" } Collections</Typography>
                    </Grid>
                    <Grid item>
                        <Stack direction="row" alignItems="center" spacing={0}>
                            <Button
                                size="small"
                                onClick={() => setSlot('month')}
                                color={slot === 'month' ? 'primary' : 'secondary'}
                                variant={slot === 'month' ? 'outlined' : 'text'}
                            >
                                Month
                            </Button>
                            <Button
                                size="small"
                                onClick={() => setSlot('week')}
                                color={slot === 'week' ? 'primary' : 'secondary'}
                                variant={slot === 'week' ? 'outlined' : 'text'}
                            >
                                Week
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
                <MainCard content={false} sx={{ mt: 1.5 }}>
                    <Box sx={{ pt: 1, pr: 2 }}>
                        <IncomeAreaChart slot={slot} />
                    </Box>
                </MainCard>
            </Grid>
           
            {/* row 3 */}
            <Grid item xs={12} md={10} lg={10}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Today's Queue</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <OrdersTable rows = {rows} headCells = {headCells} />
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default DashboardDefault;
