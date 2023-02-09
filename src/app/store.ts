import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../features/counter/counterSlice'
import { computersApi } from 'features/computers/computersApi'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [computersApi.reducerPath]: computersApi.reducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(computersApi.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;

