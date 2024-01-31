import { Box, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import BalanceBox from "./BalanceBox";

interface CardProps {
    total: number,
    budget: number,
    dateOfCreation: Date,
    dateOfFulfillment?: Date,
}
export default function ({ dateOfCreation, dateOfFulfillment, ...rest }: CardProps) {
    return (
        <Card sx={{ m: 2, minWidth: 275 }}>
            <CardContent>
                <BalanceBox {...rest} />
            </CardContent>
            <Box display="flex" justifyContent="space-evenly">
                <Typography variant="body2">Created on: {dateOfCreation.toLocaleDateString()}</Typography>
                {dateOfFulfillment && <Typography variant="body2"> fulfilled on: {dateOfFulfillment.toLocaleDateString()}</Typography>}
            </Box>
        </Card>
    );
}