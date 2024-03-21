import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { IItem, deleteItem, upsertItem } from '../store/useItemStore';
import newId from '../utils/newId';
import AutoCompleteTextField from './AutoCompleteTextField';

interface IProps {
    isOpen: boolean;
    close(): void;
    selectedItem?: IItem;
}


export default function ({ isOpen, close, selectedItem }: IProps) {

    const [edit, setEdit] = useState(false);

    const handleAdd = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        upsertItem({
            id: selectedItem?.id ?? newId(formData.get('itemName') as string),
            name: formData.get('itemName') ? formData.get('itemName') as string : selectedItem!.name,
            quantity: formData.get('quantity') ? Number(formData.get('quantity')) : selectedItem!.quantity,
            price: formData.get('price') ? Number(formData.get('price')) : selectedItem?.price ?? 0,
        });

        setEdit(false);
        close();
    };

    const handleDelete = () => {
        deleteItem(selectedItem!);
        setEdit(false);
        close();
    };

    const handleEditBtn = () => setEdit(prev => !prev);

    return (
        <Drawer
            anchor={"bottom"}
            open={isOpen}
            onClose={() => { close(); setEdit(false); }}
        >
            <Container sx={{ padding: 2 }}>
                <form onSubmit={handleAdd}>
                    <Grid container spacing={1} alignItems="baseline">
                        {selectedItem ? (
                            <>{edit && <NameAndQuantity selectedItem={selectedItem} />}<Price defaultPriceValue={selectedItem.price || undefined} /></>
                        ) : <NameAndQuantity />
                        }
                        {
                            selectedItem &&
                            <Grid item xs="auto">
                                <IconButton color="secondary" onClick={handleEditBtn}>
                                    <EditIcon fontSize="large" />
                                </IconButton>
                            </Grid>
                        }
                        <Grid item xs>
                            <Button fullWidth size='large' variant="contained" type="submit">{selectedItem ? "update" : "add"}</Button>
                        </Grid>
                        {
                            selectedItem &&
                            <Grid item xs="auto">
                                <IconButton color="error" sx={{ border: 1 }} onClick={handleDelete}>
                                    <DeleteIcon fontSize="large" />
                                </IconButton>
                            </Grid>
                        }
                    </Grid>
                </form>
            </Container>
        </Drawer>
    );
}


const NameAndQuantity = ({ selectedItem }: { selectedItem?: IItem }) => (
    <>
        <Grid item xs={9}>
            <AutoCompleteTextField name="itemName" type="search" label="Item name" defaultValue={selectedItem?.name} />
        </Grid>
        <Grid item xs={3}>
            <TextField name="quantity" type="number" label="Quantity" fullWidth defaultValue={selectedItem ? selectedItem.quantity : 1} />
        </Grid>
    </>
);

const Price = ({ defaultPriceValue }: { defaultPriceValue?: number }) => (
    <Grid item xs={12}>
        <TextField name="price" type="number" label="Price" fullWidth defaultValue={defaultPriceValue}
            InputProps={{ endAdornment: "€" }} inputProps={{ step: 0.01 }} />
    </Grid>
);