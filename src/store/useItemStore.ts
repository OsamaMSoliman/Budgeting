import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface IStoreState {
    total: number;
    budget: number;
    items: Array<IItem>;
}

interface IStoreActions {
    setTotal: (total: number) => void;
    setBudget: (budget: number) => void;
    upsertItem: (item: IItem) => void;
    deleteItem: (item: IItem) => void;
    count: () => number;
    clear: () => void;
}

export interface IItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

const initialState: IStoreState = {
    total: 0,
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
                    setTotal: (total: number) => set({ total }),
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
                    clear: () => set(initialState),
                }), {
                enabled: import.meta.env.DEV
            })
        ), {
        name: "BUDGETING_CHECKOUT_KEY"
    })
);