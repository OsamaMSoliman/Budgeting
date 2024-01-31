import { Paper, Typography } from "@mui/material";
import React from "react";

interface IBalanceBoxProps {
    budget: number,
    total: number,
    isLarge?: boolean,
}

const BalanceBox: React.FC<IBalanceBoxProps> = ({ budget, total, isLarge = false }) => (
    <Paper elevation={24} sx={{ p: 1 }}>
        <Typography variant={isLarge ? "h4" : "body1"} align="center">{total} € / {budget} € </Typography>
    </Paper>
);
export default BalanceBox;