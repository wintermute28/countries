import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Region } from "../../types";

interface IControlsSlice {
  search: string;
  region: Region | "";
}

const initialState: IControlsSlice = {
  search: "",
  region: "",
};

const controlsSlise = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<Region | "">) => {
      state.region = action.payload;
    },
    clearControls: () => {
      initialState;
    },
  },
});

export const { setRegion, setSearch, clearControls } = controlsSlise.actions;
export const controlsReducer = controlsSlise.reducer;
