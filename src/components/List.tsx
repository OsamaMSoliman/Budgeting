import { List } from '@mui/material';
import { ReactNode } from 'react';


export default function ({ nodes }: { nodes: ReactNode[] }) {
    return (
        <List>
            {...nodes}
        </List>
    );
}
