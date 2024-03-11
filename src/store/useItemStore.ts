import { create } from "zustand";

interface IStoreState {
    total: number;
    budget: number;
    items: Array<IItem>;
}

export interface IItem {
    name: string;
    quantitiy: number;
    price: number;
}

const LOCAL_STORAGE_KEY = "BUDGETING_CHECKOUT_KEY";

const initialState: IStoreState = {
    total: 0,
    budget: 0,
    items: [],
}

export const useItemStore = create<IStoreState>()(
    (set, get) => ({
        ...initialState,
        setTotal: (total: number) => set({ total }),
        setBudget: (budget: number) => set({ budget }),
        upsertItem: (item: IItem) => set({ items: [...get().items, item] }),
        deleteItem: (item: IItem) => set({ items: get().items.filter(i => i !== item) }),
        clear: () => set(initialState),
        save: () => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(get())),
        load: () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || 'null') ?? initialState,
    })
);