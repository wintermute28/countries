import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  region: "",
};

const controlsSlise = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    clearControls: () => {
      initialState;
    },
  },
});

export const { setRegion, setSearch, clearControls } = controlsSlise.actions;
export const controlsReduser = controlsSlise.reduser;

export const selectSearch = (state) => state.controls.search;
export const selectRegion = (state) => state.controls.region;
export const selectControls = (state) => state.controls;
