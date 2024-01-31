import { Button, Container, Drawer, Grid, TextField } from '@mui/material';
import FreeSoloCreateOption from './FreeSoloCreateOption';
import FreeSoloCreateOptionDialog from './FreeSoloCreateOptionDialog';

interface IBottomItemsDrawerProps {
    drawerState: boolean;
    setDrawerState(newDrawerState: boolean): void;
}

export default function ({ drawerState, setDrawerState }: IBottomItemsDrawerProps) {
    return (
        <Drawer
            anchor={"bottom"}
            open={drawerState}
            onClose={() => setDrawerState(false)}
        >
            <Container sx={{ padding: 2 }}>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <FreeSoloCreateOptionDialog />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField type='number' label="Quantity" />
                    </Grid>
                    <Grid item xs={12}>
                        <FreeSoloCreateOption />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth size='large' variant="contained">add</Button>
                    </Grid>
                </Grid>
            </Container>
        </Drawer>
    )
}
