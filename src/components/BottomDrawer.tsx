import { Autocomplete, Button, Container, Drawer, Grid, TextField } from '@mui/material';
import { useState } from 'react';

const data = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6", "item 7"];

interface IBottomDrawerProps {
    drawerState: boolean;
    setDrawerState(newDrawerState: boolean): void;
}

export function BottomDrawer({ drawerState, setDrawerState }: IBottomDrawerProps) {
    return (
        <Drawer
            anchor={"bottom"}
            open={drawerState}
            onClose={() => setDrawerState(false)}
        >
            <Container sx={{ padding: 2, marginBottom: 25 }}>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <Autocomplete
                            options={data}
                            renderInput={(params) => <TextField {...params} label="Category" />}
                            freeSolo
                            disableClearable
                            defaultValue={data[0]}
                            disablePortal
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField type='number' label="Quantity" />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            options={data}
                            renderInput={(params) => <TextField {...params} label="Item" />}
                            freeSolo
                            autoSelect
                            disablePortal
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained">add</Button>
                    </Grid>
                </Grid>
            </Container>
        </Drawer>
    )
}
