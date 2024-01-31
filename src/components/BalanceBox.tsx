import { Paper, Typography } from "@mui/material";

function BalanceBox() {
    return (
        <Paper elevation={24} sx={{ p: 1 }}>
            <Typography align="center">Target € / Budget € </Typography>
        </Paper>
    );
}

export default BalanceBox;