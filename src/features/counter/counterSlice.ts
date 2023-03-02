import { 
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const INITIAL_STATE: CounterState = {
  value: 0,
}

const NAME = 'counter'

const counterSlice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
  reducers: {
    inc(state) {
      state.value++
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload
    }
  }
})

export const { inc, amountAdded } = counterSlice.actions 
export const counterReducer = counterSlice.reducer