import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TActiveFilterIds } from "types/computer";

const NAMESPACE = 'catalog';

interface CatalogStore {
  activeFilterIds: TActiveFilterIds
}

const initialState: CatalogStore = {
  activeFilterIds: { 
    videocards: [],
    processors: [],
    boards: [],
    stylings: []
  }
}

const catalogSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    // Обновить фильтры
    toggleFilter(state, { payload: { filter, id } }: PayloadAction<{ id: string, filter: keyof TActiveFilterIds }>) {
      if (!state.activeFilterIds[filter].includes(id)) {
        state.activeFilterIds[filter].push(id);
      } else {
        state.activeFilterIds[filter] = state.activeFilterIds[filter].filter((filterId) => filterId !== id);
      }
    },

    // Сбросить фильтры
    reset(state) {
      state = initialState;
    }
  }
});

export const catalogReducer = catalogSlice.reducer;
export const { toggleFilter, reset } = catalogSlice.actions;