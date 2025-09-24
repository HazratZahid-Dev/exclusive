"use wishlistSlice";

import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";



export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
   wishlist: wishlistReducer,
  },
});
