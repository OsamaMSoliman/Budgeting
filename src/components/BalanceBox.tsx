import { AppBar, Paper, Toolbar, Typography } from "@mui/material";
import { useItemStore } from "../store/useItemStore";

export default () => {
    const { total, budget } = useItemStore();

    const color = total < budget ? "success" : total == budget ? "warning" : "error";

    return (<>
        <AppBar position="sticky" elevation={24} color={color}>
            <Toolbar >
                <Paper sx={{ p: 1, m: 1, flexGrow: 1 }}>
                    <Typography variant="h4" align="center">{total} € / {budget} € </Typography>
                </Paper>
            </Toolbar>
        </AppBar>
    </>);
};