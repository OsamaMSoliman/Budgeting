import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface IItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

const initialState: {
    budget: number;
    items: Record<string, IItem>;
} = {
    budget: 0,
    items: {},
};

interface IComputedValues {
    countItems: () => number;
    countLeft: () => number;
    totalSum: () => number;
}

export const useItemStore = create<typeof initialState & IComputedValues>()(
    persist(
        immer(
            devtools(
                (_, get) => ({
                    ...initialState,
                    countItems: () => Object.keys(get().items).length,
                    countLeft: () => Object.values(get().items).reduce((sum, item) => item.price === 0 ? sum + 1 : sum, 0),
                    totalSum: () => Object.values(get().items).reduce((sum, item) => sum + item.price * item.quantity, 0),
                }), {
                enabled: import.meta.env.DEV
            })
        ), {
        name: "BUDGETING_CHECKOUT_KEY",
        version: 1,
    })
);

export const clearStore = () => useItemStore.setState(initialState);
export const setBudget = (budget: number) => useItemStore.setState({ budget });
export const upsertItem = (item: IItem) => useItemStore.setState(state => { state.items[item.id] = item; });
export const deleteItem = (item: IItem) => useItemStore.setState(state => { delete state.items[item.id] });
export const setStore = (storeState: typeof initialState) => useItemStore.setState(storeState);