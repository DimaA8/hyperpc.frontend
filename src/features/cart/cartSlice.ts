import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { IComputer } from "types/computer";
import { api, EndPoints } from "api";
import { AxiosError } from "axios";
import { CartFormType } from "app/organisms/CartForm";

export const NAMESPACE = "cart";

type Status = "success" | "error" | null;

export interface CartState {
  productIds: IComputer["id"][];
  isSending: boolean;
  status: "success" | "error" | null;
}

const cart = JSON.parse(
  localStorage.getItem(NAMESPACE) || '{ "productIds": [] }'
);

const initialState: CartState = {
  productIds: cart.productIds,
  isSending: false,
  status: null,
};

export const sendToServer = createAsyncThunk(
  "send",
  async (form: CartFormType, { getState, rejectWithValue }) => {
    console.log("send");
    const { productIds } = (getState() as RootState).cart;
    const response = await api.post(EndPoints.ORDER, {
      ...form,
      productIds,
    });
    return response.data.status;
  }
);

const cartSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    // Добавить товар с указанным id в корзину
    addProduct(state, { payload: id }: PayloadAction<IComputer["id"]>) {
      if (!state.productIds.includes(id)) {
        state.productIds.push(id);
        localStorage.setItem(NAMESPACE, JSON.stringify(state));
      }
    },

    // Удалить товар с указанным id из корзины
    removeProduct(state, { payload: id }: PayloadAction<IComputer["id"]>) {
      if (state.productIds.includes(id)) {
        state.productIds = state.productIds.filter(
          (productId) => productId !== id
        );
        localStorage.setItem(NAMESPACE, JSON.stringify(state));
      }
    },
  },

  extraReducers(builder) {
    builder.addCase(sendToServer.pending, (state) => {
      state.isSending = true;
    });

    builder.addCase(sendToServer.fulfilled, (state) => {
      state.isSending = false;
      state.productIds = [];
      state.status = "success";
    });

    builder.addCase(sendToServer.rejected, (state) => {
      state.isSending = false;
      state.status = "error";
    });
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
