import Check from '@mui/icons-material/Check';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { IItem } from '../store/useItemStore';

interface IProps {
    onClick(item: IItem): void;
}

export default ({ id, name, quantity, price, onClick, }: IItem & IProps) => (
    <Paper elevation={3} sx={{ my: 2 }} >
        <ListItem disablePadding>
            <ListItemButton sx={{ p: 0 }} onClick={() => onClick({ id, name, quantity, price })}>
                <Grid container alignItems="center" gap={1} padding={0}>
                    <Grid item xs="auto" paddingLeft={1}>
                        {price > 0 ?
                            <Avatar sx={{ bgcolor: "green" }}>
                                <Check />
                            </Avatar>
                            :
                            <Avatar >
                                {quantity}x
                            </Avatar>
                        }
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <ListItemText
                            primary={name}
                            primaryTypographyProps={{
                                variant: "h4",
                                noWrap: true,
                            }}
                            secondary={name}
                            secondaryTypographyProps={{
                                variant: "caption",
                                noWrap: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs="auto">
                        <Badge badgeContent={price && quantity} color="primary">
                            <Typography variant="h4" p={1}>
                                {price}€
                            </Typography>
                        </Badge>
                    </Grid>
                </Grid>
            </ListItemButton>
        </ListItem>
    </Paper>
);
