import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  token: string 
}

const initialState: TInitialState = {
    token: localStorage.getItem("token") as string,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      state.token = ""
      localStorage.removeItem("token")
    }
  }
})

export const {signOut} = authSlice.actions;
export default authSlice.reducer