import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShareIcon from '@mui/icons-material/Share';
import { AlertColor } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import AlertToast from "../components/AlertToast";
import { clearStore, setStore, useItemStore } from "../store/useItemStore";

export default () => {

    const store = useItemStore();

    const [alert, setAlert] = useState<{
        isVisible: boolean,
        message: string,
        status: AlertColor
        ,
    }>({
        isVisible: false,
        status: "info",
        message: "",
    });

    function shareExport() {
        if (navigator.share) {
            navigator.share({
                text: JSON.stringify(store),
            }).catch((reason: any) => setAlert({ isVisible: true, status: "error", message: reason.message }));
        } else if (navigator.clipboard) {
            navigator.clipboard.writeText(JSON.stringify(store)).then(() => setAlert({ isVisible: true, status: "info", message: "Copied to clipboard!" }));
        } else {
            setAlert({ isVisible: true, status: "warning", message: "couldn't share nor copy, make sure you are using HTTPS" });
        }
    }

    function pasteImport() {
        navigator.clipboard.readText().then(str => {
            try {
                const parsedStore = JSON.parse(str);
                if (Object.keys(parsedStore).every(key => ["budget", "items"].includes(key))) {
                    setStore(parsedStore);
                    setAlert({ isVisible: true, status: "success", message: "Imported successfully!" });
                } else {
                    throw new Error("NOT the correct fomrat");
                }
            } catch (error: any) {
                setAlert({ isVisible: true, status: "error", message: error.message });
            }
        });
    }

    function clear() {
        clearStore();
        setAlert({ isVisible: true, status: "error", message: "Cache cleared!" });
    }

    return (
        <Container maxWidth="lg">
            <Stack spacing={4} divider={<Divider />} m={2}>
                <Paper elevation={4} >
                    <TextField
                        label="Local Storage:"
                        multiline maxRows={20}
                        value={JSON.stringify(store, null, 3)}
                        disabled fullWidth
                    />
                </Paper>
                <Stack direction="row" spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Button variant="contained" size="large" fullWidth onClick={pasteImport} startIcon={<ContentPasteGoIcon />}>Import</Button>
                    <Button variant="contained" size="large" fullWidth onClick={shareExport} endIcon={<ShareIcon />}>Export</Button>
                </Stack>
                <Button color="error" variant="outlined" size="large" fullWidth onClick={clear} startIcon={<DeleteForeverIcon />}>Clear</Button>
            </Stack>
            <AlertToast {...alert} hide={() => setAlert({ ...alert, isVisible: false })} />
        </Container>
    );
}