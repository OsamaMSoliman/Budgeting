import { create } from "zustand";

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
    save: () => void;
    load: () => void;
}

export interface IItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

const LOCAL_STORAGE_KEY = "BUDGETING_CHECKOUT_KEY";

const initialState: IStoreState = {
    total: 0,
    budget: 0,
    items: [],
};

// const useItemStore: UseBoundStore<StoreApi<IStoreState & IStoreActions>>
export const useItemStore = create<IStoreState & IStoreActions>()(
    (set, get) => ({
        ...initialState,
        setTotal: (total: number) => set({ total }),
        setBudget: (budget: number) => set({ budget }),
        upsertItem: (item: IItem) => {
            const index = get().items.findIndex(i => i.id === item.id);
            set({
                items: index === -1 ? [...get().items, { ...item }]
                    : [...get().items.slice(0, index), { ...item }, ...get().items.slice(index + 1)]
            });
        },
        deleteItem: (item: IItem) => set({ items: get().items.filter(i => i.id !== item.id) }),
        count: () => get().items.length,
        clear: () => set(initialState),
        save: () => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(get())),
        load: () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || 'null') ?? initialState,
    })
);