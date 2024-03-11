import { create } from "zustand";

interface IStoreState {
    total: number;
    budget: number;
    items: Array<IItem>;
}

interface IItem {
    name: string;
    quantitiy: number;
    price: number;
}

export const useItemStore = create<IStoreState>()(
    (set) => ({
        total: 0,
        budget: 0,
        items: [],
        setTotal: (total: number) => set({ total }),
        setBudget: (budget: number) => set({ budget }),
        upsertItem: (item: IItem) => set(prevState => ({ items: [...prevState.items, item] })),
        deleteItem: (item: IItem) => set(prevState => ({ items: prevState.items.filter(i => i !== item) })),
    })
);