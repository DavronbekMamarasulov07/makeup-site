import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

interface TInitialState {
  cartProducts: IProduct[]
}

const initialState: TInitialState = {
  cartProducts: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartProducts.push(action.payload)
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts))
    }
  }
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer