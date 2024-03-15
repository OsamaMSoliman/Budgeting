import { useState } from "react";
import BalanceBox from "../components/BalanceBox";
import List from "../components/List";
import Fab from "../components/Fab";
import Item from "../components/Item";
import BottomItemsDrawer from "../components/BottomItemsDrawer";
import { IItem, useItemStore } from "../store/useItemStore";

export default () => {
    const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<IItem>();
    const { items } = useItemStore();

    const handleItemClicked = (item: IItem) => {
        setSelectedItem(item);
        setIsBottomDrawerOpen(true);
    };

    const nodes = items.map((item, index) => (
        <Item
            key={index}
            {...item}
            onClick={handleItemClicked}
        />
    ));

    return (
        <>
            <BalanceBox />
            <List nodes={nodes} />
            <Fab onClick={() => setIsBottomDrawerOpen(true)} />
            <BottomItemsDrawer close={() => setIsBottomDrawerOpen(false)} isOpen={isBottomDrawerOpen} selectedItem={selectedItem} />
        </>
    );
}