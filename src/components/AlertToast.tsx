import { AlertColor } from "@mui/material";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

interface IProps {
    isVisible: boolean,
    message: string,
    status: AlertColor,
    hide(): void,
    duration?: number,
}

export default ({ isVisible, message, status, hide, duration = 1500 }: IProps) => (
    <Snackbar open={isVisible} autoHideDuration={duration} onClose={hide}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert
            onClose={hide}
            severity={status}
            sx={{ width: '100%' }}
        >
            {message}
        </Alert>
    </Snackbar>
);