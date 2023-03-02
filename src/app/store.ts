import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../features/counter/counterSlice'
import { catalogApi } from 'features/catalog/catalogApi'
import { cartReducer } from 'features/cart/cartSlice'
import { compareReducer } from 'features/compare/compareSlice'
import { catalogReducer } from './organisms/Catalog/feature/catalogSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    compare: compareReducer,
    catalog: catalogReducer,
    [catalogApi.reducerPath]: catalogApi.reducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(catalogApi.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;

