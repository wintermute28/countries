import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const loadCountryByName = createAsyncThunk(
//   "@@details/load-country-by-name",
//   (name, { extra: { client, api } }) => {
//     return client.get(api.searchByCountry(name));
//   }
// );

// export const loadNeighborsByBorder = createAsyncThunk(
//   "@@details/load-neighbors",
//   (borders, { extra: { client, api } }) => {
//     return client.get(api.filterByCode(borders));
//   }
// );

export const loadCountryByName = createAsyncThunk(
  "@@details/load-country-by-name",
  async (name, { extra: { client, api } }) => {
    const response = await client.get(api.searchByCountry(name));
    return response.data; // Возвращаем только данные
  }
);

export const loadNeighborsByBorder = createAsyncThunk(
  "@@details/load-neighbors",
  async (borders, { extra: { client, api } }) => {
    const response = await client.get(api.filterByCode(borders));
    return response.data; // Возвращаем только данные
  }
);

const initialState = {
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
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.status = "idle";
        state.currentCountry = action.payload[0]; // Теперь action.payload — это уже data
      })
      .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
        state.neighbors = action.payload.map((country) => country.name); // payload — это уже data
      });
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;

//selectors
export const selectCurrentCountry = (state) => state.details.currentCountry;
export const selectDetails = (state) => state.details;
export const selectNeighbors = (state) => state.details.neighbors;
