import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Country, Extra, Status } from "../../types";

export const loadCountryByName = createAsyncThunk<
  Country[],
  string,
  { extra: Extra }
>(
  "@@details/load-country-by-name",
  async (name, { extra: { client, api } }) => {
    const response = await client.get(api.searchByCountry(name));
    return response.data;
  }
);

export const loadNeighborsByBorder = createAsyncThunk<
  string[],
  string[],
  { extra: Extra }
>("@@details/load-neighbors", async (borders, { extra: { client, api } }) => {
  const response = await client.get(api.filterByCode(borders));
  return response.data.map((country: Country) => country.name);
});

type DetailsSlice = {
  currentCountry: Country | null;
  neighbors: string[];
  status: Status;
  error: string | null;
};

const initialState: DetailsSlice = {
  currentCountry: null,
  neighbors: [],
  status: "idle",
  error: null,
};

const detailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state) => {
        state.status = "rejected";
        state.error = "Can not load data";
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.status = "idle";
        state.currentCountry = action.payload[0];
      })
      .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
        state.neighbors = action.payload;
      });
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;
