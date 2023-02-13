import { 
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";

export const NAMESPACE = 'cart'

export interface CartState {
  productIds: number[]
}

const cart = JSON.parse(localStorage.getItem(NAMESPACE) || '{ "productIds": [] }')

const initialState: CartState = {
  productIds: cart.productIds
}

const cartSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    // Добавить товар с указанным id в корзину
    addProduct(state, { payload: id }: PayloadAction<number>) {
      if (!state.productIds.includes(id)) {
        state.productIds.push(id)
        localStorage.setItem(NAMESPACE, JSON.stringify(state))
      }
    },

    // Удалить товар с указанным id из корзины
    removeProduct(state, { payload: id }: PayloadAction<number>) {
      if (state.productIds.includes(id)) {
        state.productIds = state.productIds.filter((productId) => productId !== id)
        localStorage.setItem(NAMESPACE, JSON.stringify(state))
      }
    }
  }
})

export const { addProduct, removeProduct } = cartSlice.actions

export const cartReducer = cartSlice.reducer