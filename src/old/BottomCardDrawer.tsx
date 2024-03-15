import { Box, Button, Drawer, InputAdornment, TextField } from '@mui/material';

interface IBottomCardDrawerProps {
    drawerState: boolean;
    setDrawerState(newDrawerState: boolean): void;
}

export default function ({ drawerState, setDrawerState }: IBottomCardDrawerProps) {
    return (
        <Drawer
            anchor={"bottom"}
            open={drawerState}
            onClose={() => setDrawerState(false)}
        >
            <Box display="flex" flexDirection="column" alignItems="stretch" p={2}>
                <TextField label="Budget" type='number' sx={{ mb: 1 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="start">€</InputAdornment>,
                    }} />
                <Button variant="contained" size='large'>Submit</Button>
            </Box>
        </Drawer>
    )
}
