import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./CartReducer";

export const store = configureStore(
    {
        reducer: {
            cart: cartSlice.reducer,
        }
    }
)