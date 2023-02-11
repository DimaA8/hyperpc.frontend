import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../features/counter/counterSlice'
import { computersApi } from 'features/computers/computersApi'
import { cartReducer } from 'features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    [computersApi.reducerPath]: computersApi.reducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(computersApi.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;

