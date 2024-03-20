import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { setBudget, useItemStore } from "../store/useItemStore";

export default () => {
    const budget = useItemStore(state => state.budget);
    const total = useItemStore(state => state.totalSum)();
    const color = total < budget ? "success" : total == budget ? "warning" : "error";
    const [edit, setEdit] = useState(budget === 0);

    const countItems = useItemStore(state => state.countItems)();
    const countLeft = useItemStore(state => state.countLeft)();

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
                                onKeyDown={handleKeyDown} defaultValue={budget} onFocus={(e) => e.target.select()}
                            />
                            :
                            <Typography variant="h4" align="center">{round(total)} € / {budget} €</Typography>
                    }
                </Paper>
                <Badge badgeContent={countItems} color="info" showZero overlap="circular">
                    <Paper sx={{ p: 1, m: 1, flexGrow: 1 }}>
                        <Typography variant="h6" align="center">{countLeft}</Typography>
                    </Paper>
                </Badge>
            </Toolbar>
        </AppBar >
    );
};

function round(num: number) { return Math.round((num + Number.EPSILON) * 100) / 100 }