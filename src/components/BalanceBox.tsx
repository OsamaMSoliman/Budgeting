import { AppBar, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { useItemStore } from "../store/useItemStore";
import { useState } from "react";

export default () => {
    const budget = useItemStore(state => state.budget);
    const setBudget = useItemStore(state => state.setBudget);
    const total = useItemStore(state => state.total)();
    const color = total < budget ? "success" : total == budget ? "warning" : "error";
    const [edit, setEdit] = useState(budget === 0);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            setBudget(Number((event.target as HTMLInputElement).value));
            setEdit(false);
        }
    };

    return (
        <AppBar position="sticky" elevation={24} color={color}>
            <Toolbar >
                <Paper sx={{ p: 1, m: 1, flexGrow: 1 }} onClick={() => setEdit(true)}>
                    {
                        edit ?
                            <TextField label="Budget" type="number" fullWidth
                                InputProps={{ endAdornment: "€" }} inputProps={{ step: 0.01 }}
                                onKeyDown={handleKeyDown}
                            />
                            :
                            <Typography variant="h4" align="center">{round(total)} € / {budget} €</Typography>
                    }
                </Paper>
            </Toolbar>
        </AppBar >
    );
};

function round(num: number) { return Math.round((num + Number.EPSILON) * 100) / 100 }