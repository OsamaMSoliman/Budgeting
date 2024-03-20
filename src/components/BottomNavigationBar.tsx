import ChecklistIcon from '@mui/icons-material/Checklist';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useLocation, useNavigate } from "react-router-dom";

export default function BottomNavigationBar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const value = pathname === "/" ? "/items" : pathname === "/import" ? "/export" : pathname;

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
            <BottomNavigation
                value={value}
                onChange={(_, newValue) => {
                    navigate(newValue);
                }}
            >
                <BottomNavigationAction label="Checkout" value={"/items"} icon={<ChecklistIcon fontSize={value === "/items" ? "large" : "medium"} />} />
                <BottomNavigationAction label="Export/Import" value={"/export"} icon={<ImportExportIcon fontSize={value === "/export" ? "large" : "medium"} />} />
            </BottomNavigation>
        </Paper>
    );
}