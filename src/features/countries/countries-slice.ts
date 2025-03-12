import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";

import { Status, Country, Extra } from "../../types";

// export const loadCountries = createAsyncThunk<
//   Country[],
//   undefined,
//   { extra: Extra }
// >("@@countries/load-countries", async (__, { extra: { client, api } }) => {
//   const response = await client.get(api.ALL_COUNTRIES);
//   return {
//     data: response.data,
//   };
// });

export const loadCountries = createAsyncThunk<
  Country[], // Тип возвращаемого значения
  undefined, // Тип аргументов (нет аргументов - используем undefined)
  { extra: Extra } // Тип для дополнительных настроек thunkAPI
>(
  "@@countries/load-countries",
  async (_, { extra: { client, api }, rejectWithValue }) => {
    try {
      const response = await client.get<Country[]>(api.ALL_COUNTRIES);
      return response.data; // Возвращаем массив стран напрямую
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Unknown error");
    }
  }
);

type CountrySlice = {
  status: Status;
  error: string | null;
  list: Country[];
};

const initialState: CountrySlice = {
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
        state.error =
          typeof action.payload === "string" ? action.payload : "Unknown error"; // ✅ Теперь всегда есть значение!
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload;
      });
  },
});

export const countriesReducer = countriesSlice.reducer;
