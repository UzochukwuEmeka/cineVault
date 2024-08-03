import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  imgURL: "",
};

export const cineVaultSlice = createSlice({
  name: "cineVault",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImageURL: (state, action) => {
      state.imgURL = action.payload;
    },
  },
});

export const { setBannerData, setImageURL } = cineVaultSlice.actions;

export default cineVaultSlice.reducer;
