import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import { api } from "../api";
import likeSlice from "../slices/likeSlice";
import langSlice from "../slices/langSlice";
import cartSlice from "../slices/cartSlice";
const store = configureStore({
    reducer: {
        auth: authReducer,
        like: likeSlice,
        lang: langSlice,
        cart: cartSlice,
        [api.reducerPath] : api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export  {store}