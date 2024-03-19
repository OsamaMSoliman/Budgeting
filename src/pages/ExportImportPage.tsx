import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import ShareIcon from '@mui/icons-material/Share';
import { Button, Container, Divider, Paper, Stack, TextField } from "@mui/material";
import { useState } from "react";
import AlertToast from "../components/AlertToast";
import { setStore, useItemStore } from "../store/useItemStore";

export default () => {

    const store = useItemStore();

    const [alert, setAlert] = useState<{
        isVisible: boolean,
        message: string,
        status: "success" | "info" | "error"
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
            setAlert({ isVisible: true, status: "error", message: "ERROR!" });
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

    return (
        <Container >
            <Stack spacing={4} divider={<Divider />} m={2}>
                <Paper elevation={4} >
                    <TextField
                        label="Local Storage:"
                        multiline maxRows={20}
                        defaultValue={JSON.stringify(store, null, 3)}
                        disabled fullWidth
                    />
                </Paper>
                <Stack direction="row" spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Button variant="contained" size="large" fullWidth onClick={pasteImport} startIcon={<ContentPasteGoIcon />}>Import</Button>
                    <Button variant="contained" size="large" fullWidth onClick={shareExport} endIcon={<ShareIcon />}>Export</Button>
                </Stack>
                {/*
                <Stack direction="row" spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Button variant="contained" size="large" fullWidth onClick={_copy}>Copy</Button>
                    <Button variant="contained" size="large" fullWidth onClick={_paste}>Paste</Button>
                </Stack>
                */}
            </Stack>
            <AlertToast {...alert} hide={() => setAlert({ ...alert, isVisible: false })} />
        </Container>
    );
}