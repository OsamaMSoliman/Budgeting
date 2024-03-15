import { Autocomplete, TextField } from "@mui/material";
import { useItemStore } from "../store/useItemStore";

interface IProps {
    name: string;
    type: string;
    label: string;
}

export default (textFieldProps: IProps) => {
    const { items } = useItemStore();

    return (
        <Autocomplete
            id="item-name"
            freeSolo
            disableClearable
            options={items.map((item) => item.name)}
            renderInput={(params) => <TextField {...params} {...textFieldProps}/>}
        />
    );
};