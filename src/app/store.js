"use cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import cartReducer from "./slices/cartSlice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});
