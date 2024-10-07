import {createSlice} from '@reduxjs/toolkit'

interface TInitialState {
  lang: string
}

const initialState: TInitialState = {
  lang: localStorage.getItem("lang") as string || "usd"
}

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload
      localStorage.setItem("lang", action.payload)
    }
  }
})

export const { setLang } = langSlice.actions
export default langSlice.reducer