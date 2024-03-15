import { useState } from "react";
import { TabsSerrated } from "./TabsSerrated";
import { Paper } from "@mui/material";
import BalanceBox from "../components/BalanceBox";
import List from "../components/List";
import Card from "./Card";
import Fab from "../components/Fab";
import BottomCardDrawer from "./BottomCardDrawer";

export default () => {
    const [open, setOpen] = useState(false);
    const nodes = Array.from({ length: 10 }, (_, key) => (<Card key={key} total={10} budget={50} dateOfCreation={new Date()} />));

    return (
        <>
            <TabsSerrated />
            <Paper elevation={24} sx={{ m: 2 }}>
                <BalanceBox budget={200} total={147} isLarge />
            </Paper>
            <List nodes={nodes} />
            <Fab onClick={() => setOpen(true)} />
            <BottomCardDrawer drawerState={open} setDrawerState={setOpen} />
        </>
    );
}