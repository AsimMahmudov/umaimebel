import { create } from "zustand";

interface FilterStore {
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  sortOrder: "asc", // Начнем с сортировки по возрастанию
  setSortOrder: (order) => set({ sortOrder: order }),
  resetFilters: () => set({ sortOrder: "asc" }),
}));
