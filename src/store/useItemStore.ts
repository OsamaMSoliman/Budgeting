import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface IStoreState {
    budget: number;
    items: Record<string, IItem>;
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
    id: string;
    name: string;
    quantity: number;
    price: number;
}

const initialState: IStoreState = {
    budget: 0,
    items: {},
};

// const useItemStore: UseBoundStore<StoreApi<IStoreState & IStoreActions>>
export const useItemStore = create<IStoreState & IStoreActions>()(
    persist(
        immer(
            devtools(
                (set, get) => ({
                    ...initialState,
                    setBudget: (budget: number) => set({ budget }),
                    upsertItem: (item: IItem) => set(state => { state.items[item.id] = item }),
                    deleteItem: (item: IItem) => set(state => { delete state.items[item.id] }),
                    count: () => Object.keys(get().items).length,
                    total: () => Object.values(get().items).reduce((sum, item) => sum + item.price * item.quantity, 0),
                    clear: () => set(initialState),
                    setStore: (storeState: IStoreState) => set(storeState),
                }), {
                enabled: import.meta.env.DEV
            })
        ), {
        name: "BUDGETING_CHECKOUT_KEY",
    })
);