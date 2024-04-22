import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./CartReducer";
import { StoreSlice } from "./StoreReducer";

export const store = configureStore(
    {
        reducer: {
            cart: cartSlice.reducer,
            store: StoreSlice.reducer
        }
    }
)