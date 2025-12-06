import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cart/cartSlice";
import landingReducer from "../slices/landing/landingSlice";

export const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    landing: landingReducer,
  },
});
