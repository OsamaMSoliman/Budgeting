import { Check } from '@mui/icons-material';
import {
    ListItem,
    ListItemText,
    ListItemButton,
    Typography,
    Paper,
    Badge,
    Chip,
    Avatar,
    Grid,
} from '@mui/material';

interface ListItemProps {
    index: number;
    text: string;
    quantity: number;
    category: string;
    price: number;
}

const Item: React.FC<ListItemProps> = ({ text, quantity, category, price }) => (
    <Paper elevation={3} sx={{ margin: 2 }}>
        <ListItem disablePadding>
            <Grid container alignItems="center" gap={1}>
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
                        disableTypography
                        primary={
                            <Typography variant="h4" noWrap>
                                {text}
                            </Typography>
                        }
                        secondary={<Chip label={category} size="small" />}
                    />
                </Grid>
                <Grid item xs="auto">
                    <Badge badgeContent={price == 0 ? 0 : quantity} color="primary">
                        <ListItemButton disableGutters>
                            <Typography variant="h4" p={1}>
                                {price}€
                            </Typography>
                        </ListItemButton>
                    </Badge>
                </Grid>
            </Grid>
        </ListItem>
    </Paper>
);


export default Item;
