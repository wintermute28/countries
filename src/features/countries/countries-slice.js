import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";

// export const loadCountries = createAsyncThunk(
//   "@@countries/load-countries",
//   (__, { extra: { client, api } }) => {
//     return client.get(api.ALL_COUNTRIES);
//   }
// );
export const loadCountries = createAsyncThunk(
  "@@countries/load-countries",
  async (__, { extra: { client, api } }) => {
    const response = await client.get(api.ALL_COUNTRIES);
    return {
      data: response.data, // Сохраняем только данные
      // headers: { ...response.headers } // Можно добавить, если нужно, но не рекомендуется
    };
  }
);

const initialState = {
  status: "idle",
  error: null,
  list: [],
};

const countriesSlice = createSlice({
  name: "@@countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data;
      });
  },
});

export const countriesReducer = countriesSlice.reducer;

//selectors
// export const selectCountriesInfo = (state) => ({
//   status: state.countries.status,
//   error: state.countries.error,
//   qty: state.countries.list.length,
// });

// export const selectAllCountries = (state) => state.countries.list;
// export const selectVisibleCountries = (state, { search = "", region = "" }) => {
//   return state.countries.list.filter(
//     (country) =>
//       country.name.toLowerCase().includes(search.toLowerCase()) &&
//       country.region.includes(region)
//   );
// };
export const selectCountriesInfo = createSelector(
  [(state) => state.countries],
  (countries) => ({
    status: countries.status,
    error: countries.error,
    qty: countries.list.length,
  })
);

export const selectAllCountries = (state) => state.countries.list;

export const selectVisibleCountries = createSelector(
  [selectAllCountries, (_, filters) => filters], // Второй аргумент - объект с фильтрами
  (countries, { search = "", region = "" }) =>
    countries.filter(
      (country) =>
        country.name.toLowerCase().includes(search.toLowerCase()) &&
        country.region.includes(region)
    )
);
