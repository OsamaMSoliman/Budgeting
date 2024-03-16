import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function BottomNavigationBar() {
    const navigate = useNavigate();
    const [value, setValue] = useState("/items");

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
            <BottomNavigation
                value={value}
                onChange={(_, newValue) => {
                    setValue(newValue);
                    navigate(newValue);
                }}
            >
                <BottomNavigationAction label="Checkout" value={"/items"} icon={<ChecklistIcon fontSize={value === "/items" ? "large" : "medium"} />} />
                <BottomNavigationAction label="Export/Import" value={"/export"} icon={<ImportExportIcon fontSize={value === "/export" ? "large" : "medium"} />} />
            </BottomNavigation>
        </Paper>
    );
}