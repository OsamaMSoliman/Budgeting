import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { useState } from 'react';

function BottomNavigationBar() {
    const [value, setValue] = useState(0);

    return (
        <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }} elevation={5}>
            <BottomNavigation
                value={value}
                onChange={(_, newValue) => {
                    setValue(newValue);
                }}
            >

                <BottomNavigationAction label="Checkout" icon={<ChecklistIcon />} />
                <BottomNavigationAction label="Export/Import" icon={<ImportExportIcon />} />
            </BottomNavigation>
        </Paper>
    );
}

export default BottomNavigationBar;
