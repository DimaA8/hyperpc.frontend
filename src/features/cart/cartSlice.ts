import { 
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";

export const NAMESPACE = 'cart'

export interface CartState {
  productIds: number[]
}

const initialState: CartState = {
  productIds: []
}

const cartSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    // Добавить товар с указанным id в корзину
    addProduct(state, { payload: id }: PayloadAction<number>) {
      if (!state.productIds.includes(id)) {
        state.productIds.push(id)
      }
    },

    // Удалить товар с указанным id из корзины
    removeProduct(state, { payload: id }: PayloadAction<number>) {
      if (state.productIds.includes(id)) {
        state.productIds = state.productIds.filter((productId) => productId !== id)
      }
    }
  }
})

export const { addProduct, removeProduct } = cartSlice.actions

export const cartReducer = cartSlice.reducer