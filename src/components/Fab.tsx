import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";


interface FabProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}


export default function ({ onClick }: FabProps) {
    return (
        <Fab color="secondary" sx={{ position: "fixed", bottom: 60, right: 10 }} onClick={onClick}>
            <Add />
        </Fab >
    );
}