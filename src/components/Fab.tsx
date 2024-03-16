import { Add } from "@mui/icons-material";
import { Fab, Zoom } from "@mui/material";

interface IProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function ({ onClick }: IProps) {
    return (
        <Zoom in={true}>
            <Fab color="secondary" sx={{ position: "fixed", bottom: 30, right: 0, left: 0, margin: '0 auto' }} onClick={onClick}>
                <Add />
            </Fab >
        </Zoom>
    );
}