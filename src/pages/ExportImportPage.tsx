import { Button, Container, Divider, Paper, Stack, TextField } from "@mui/material"
import { useItemStore } from "../store/useItemStore";

export default () => {

    const store = useItemStore();

    function _export() { console.log("_export") }
    function _import() { console.log("_import") }
    function _copy() { console.log("_copy") }
    function _paste() { console.log("_paste") }

    return (
        <Container >
            <Stack spacing={4} divider={<Divider />} m={2}>
                <Paper elevation={4} >
                    <TextField
                        label="Local Storage:"
                        multiline maxRows={16}
                        defaultValue={JSON.stringify(store, null, 3)}
                        disabled fullWidth
                    />
                </Paper>
                <Stack direction="row" spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Button variant="contained" size="large" fullWidth onClick={_export}>Export</Button>
                    <Button variant="contained" size="large" fullWidth onClick={_import}>Import</Button>
                </Stack>
                <Stack direction="row" spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Button variant="contained" size="large" fullWidth onClick={_copy}>Copy</Button>
                    <Button variant="contained" size="large" fullWidth onClick={_paste}>Paste</Button>
                </Stack>
            </Stack>
        </Container>
    );
}