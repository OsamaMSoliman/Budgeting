import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface IStoreState {
    budget: number;
    items: Array<IItem>;
}

interface IStoreActions {
    setBudget: (budget: number) => void;
    upsertItem: (item: IItem) => void;
    deleteItem: (item: IItem) => void;
    count: () => number;
    total: () => number;
    clear: () => void;
    setStore: (storeState: IStoreState) => void,
}

export interface IItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

const initialState: IStoreState = {
    budget: 0,
    items: [],
};

// const useItemStore: UseBoundStore<StoreApi<IStoreState & IStoreActions>>
export const useItemStore = create<IStoreState & IStoreActions>()(
    persist(
        immer(
            devtools(
                (set, get) => ({
                    ...initialState,
                    setBudget: (budget: number) => set({ budget }),
                    // upsertItem: (item: IItem) => get().items[item.id] ? get().items[item.id] = item : get().items.push(item);
                    upsertItem: (item: IItem) => set(state => {
                        try {
                            state.items[item.id] = item
                        } catch (error) {
                            state.items.push(item);
                        }
                    }),
                    // TODO: using the index will introduce bugs when deleteItem is being utilized, Solution: maybe use dictionary instead of Array!
                    // deleteItem: (item: IItem) => delete get().items[item.id],
                    deleteItem: (item: IItem) => set(state => delete state.items[item.id]),
                    count: () => get().items.length,
                    total: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
                    clear: () => set(initialState),
                    setStore: (storeState: IStoreState) => set(storeState),
                }), {
                enabled: import.meta.env.DEV
            })
        ), {
        name: "BUDGETING_CHECKOUT_KEY",
    })
);