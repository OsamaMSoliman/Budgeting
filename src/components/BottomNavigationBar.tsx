import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { useState } from 'react';

function BottomNavigationBar() {
    const [value, setValue] = useState(0);

    return (
        <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }} elevation={5}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Recent list" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Cards" icon={<FormatListBulletedIcon />} />
                <BottomNavigationAction label="Analytics" icon={<QueryStatsIcon />} />
            </BottomNavigation>
        </Paper>
    );
}

export default BottomNavigationBar;
