import { configureStore } from "@reduxjs/toolkit";
import cineVaultReducer from "./cineVaultSlice";
export const store = configureStore({
  reducer: {
    cineVaultData: cineVaultReducer,
  },
});
