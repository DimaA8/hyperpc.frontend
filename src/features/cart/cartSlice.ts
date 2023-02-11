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
    // Добавить товар в корзину
    addProduct(state, { payload: id }: PayloadAction<number>) {
      if (!state.productIds.includes(id)) {
        state.productIds.push(id)
      }
    }
  }
})

export const { addProduct } = cartSlice.actions

export const cartReducer = cartSlice.reducer