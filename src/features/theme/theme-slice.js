import { createSlice } from "@reduxjs/toolkit";

const themeSlise = createSlice({
  name: "@@theme",
  initialState: "light",
  reduser: {
    setTheme: (_, action) => action.payload,
  },
});

export const { setTheme } = themeSlise.actions;
export const themeReduser = themeSlise.reduser;
