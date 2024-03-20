import { darken, lighten, styled } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useItemStore } from "../store/useItemStore";

interface IProps {
    name: string;
    type: string;
    label: string;
    defaultValue?: string;
}

export default (textFieldProps: IProps) => {
    const items = useItemStore(state => state.items);
    const { defaultValue, ...rest } = textFieldProps;

    return (
        <Autocomplete
            id="item-name"
            freeSolo
            disableClearable
            options={Object.values(items).map((item) => item.name).sort((a, b) => a[0].localeCompare(b[0]))}
            groupBy={(option) => option[0].toUpperCase()}
            renderInput={(params) => <TextField {...params} {...rest} />}
            renderGroup={(params) => (
                <li key={params.key}>
                    <GroupHeader>{params.group}</GroupHeader>
                    <GroupItems>{params.children}</GroupItems>
                </li>
            )}
            defaultValue={defaultValue}
        />
    );
};

const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor:
        theme.palette.mode === 'light'
            ? lighten(theme.palette.primary.light, 0.85)
            : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled('ul')({
    padding: 0,
});