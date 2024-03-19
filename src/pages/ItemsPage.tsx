import { Collapse } from "@mui/material";
import { useState } from "react";
import BalanceBox from "../components/BalanceBox";
import BottomItemsDrawer from "../components/BottomItemsDrawer";
import Fab from "../components/Fab";
import Item from "../components/Item";
import List from "../components/List";
import { IItem, deleteItem, useItemStore } from "../store/useItemStore";

export default () => {
    const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<IItem>();
    const items = useItemStore(state => state.items);

    const handleItemClicked = (item?: IItem) => {
        setSelectedItem(item);
        setIsBottomDrawerOpen(true);
    };

    const handleItemDelete = (item: IItem) => {
        console.log(item, items);
        deleteItem(item);
    };

    const nodes = Object.entries(items).map(([id, item]) => (
        <Collapse key={id}>
            <Item {...item} onClick={handleItemClicked} onSlide={handleItemDelete} />
        </Collapse>
    ));

    return (
        <>
            <BalanceBox />
            <List nodes={nodes} />
            <Fab onClick={() => handleItemClicked(undefined)} />
            <BottomItemsDrawer close={() => setIsBottomDrawerOpen(false)} isOpen={isBottomDrawerOpen} selectedItem={selectedItem} />
        </>
    );
}