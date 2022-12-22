import { useState } from 'react';
import {
    Grid,
    Typography
} from '@mui/material';


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
                        <Typography style = {{  marginBottom: 30}} variant="h5">Reports</Typography>
                    </Grid>
                </Grid>   
            </Grid>
        </Grid>
    );
};

export default DashboardDefault;
