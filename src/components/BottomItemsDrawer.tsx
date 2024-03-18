import { Button, Container, Drawer, Grid, TextField } from '@mui/material';
import AutoCompleteTextField from './AutoCompleteTextField';
import { IItem, useItemStore } from '../store/useItemStore';

interface IProps {
    isOpen: boolean;
    close(): void;
    selectedItem?: IItem;
}


export default function ({ isOpen, close, selectedItem }: IProps) {
    const { upsertItem, count } = useItemStore();

    const handleAdd = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        upsertItem(selectedItem ? {
            ...selectedItem,
            price: Number(formData.get('price')),
        } : {
            id: count(),
            name: formData.get('itemName') as string,
            quantity: Number(formData.get('quantity')),
            price: 0,
        });

        close();
    };

    return (
        <Drawer
            anchor={"bottom"}
            open={isOpen}
            onClose={close}
        >
            <Container sx={{ padding: 2 }}>
                <form onSubmit={handleAdd}>
                    <Grid container spacing={1}>
                        {!selectedItem ? (
                            <>
                                <Grid item xs={9}>
                                    <AutoCompleteTextField name="itemName" type="search" label="Item name" />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField name="quantity" type="number" label="Quantity" defaultValue={1} />
                                </Grid>
                            </>
                        ) : (
                            <Grid item xs={12}>
                                <TextField name="price" type="number" label="Price" fullWidth
                                    InputProps={{ endAdornment: "€" }} inputProps={{ step: 0.01 }} />
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <Button fullWidth size='large' variant="contained" type="submit">{selectedItem ? "update" : "add"}</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Drawer>
    );
}
