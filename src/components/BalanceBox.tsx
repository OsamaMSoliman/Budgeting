import { Paper, Typography } from "@mui/material";
import React from "react";

interface IBalanceBoxProps {
    budget: number,
    total: number,
}

const BalanceBox: React.FC<IBalanceBoxProps> = ({ budget, total }) => (
    <Paper elevation={24} sx={{ p: 1 }}>
        <Typography align="center">{total} € / {budget} € </Typography>
    </Paper>
);
export default BalanceBox;