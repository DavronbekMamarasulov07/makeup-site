import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

type TInitialState = {
  likedProducts: IProduct[]
}

const initialState: TInitialState = {
  likedProducts: JSON.parse(localStorage.getItem("likedProducts") as string) || []
}

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLike: (state, action) => {
    const existingProductsIndex = state.likedProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductsIndex === -1) {
        state.likedProducts.push(action.payload);
      } else {
        state.likedProducts = state.likedProducts.filter(
          (product) => product.id !== action.payload.id
        );
      }

      localStorage.setItem("likedProducts", JSON.stringify(state.likedProducts))
    },
    removeLike: (state, action) => {
      state.likedProducts = state.likedProducts.filter((product) => product.id !== action.payload.id)
      localStorage.setItem("likedProducts", JSON.stringify(state.likedProducts))
    }
  }
})

export const { addLike, removeLike } = likeSlice.actions
export default likeSlice.reducer