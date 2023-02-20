import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../features/counter/counterSlice'
import { catalogApi } from 'features/catalog/catalogApi'
import { cartReducer } from 'features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    [catalogApi.reducerPath]: catalogApi.reducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(catalogApi.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;

