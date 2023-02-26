import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const NAMESCACE = 'compare'

interface ICompareSlice {
  productIds: string[];
}

const initialState: ICompareSlice = {
  productIds: []
}

const compareSlice = createSlice({
  name: NAMESCACE,
  initialState,
  reducers: {
    // Добавить товар в сравнение
    addProduct(state, { payload: id }: PayloadAction<string>) {
      if (!state.productIds.includes(id)) {
        state.productIds.push(id);
      }
    },

    // Удалить товар из сравнения
    removeProduct(state, { payload: id }: PayloadAction<string>) {
      state.productIds = state.productIds.filter((productId) => productId !== id);
    }
  }
})

export const { addProduct, removeProduct } = compareSlice.actions;
export const compareReducer = compareSlice.reducer;