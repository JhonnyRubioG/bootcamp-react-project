import { create } from "zustand";
import { useFetchCity } from "../../hook/useFetchCity";

const initialState = {
    searchResults: []
}

const useCityStore = create ((set, get) => ({
    ...initialState,
    onSearchResults: async (searchText: any) => {
        try {
            console.log(searchText);
            const data = await useFetchCity(searchText);
            set({ searchResults: data});
        } catch (error) {
            
        }
    }
}));

export default useCityStore;
