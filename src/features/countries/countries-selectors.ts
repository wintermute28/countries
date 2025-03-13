import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store";

export const selectCountriesInfo = createSelector(
  [(state: RootState) => state.countries],
  (countries) => ({
    status: countries.status,
    error: countries.error,
    qty: countries.list.length,
  })
);

export const selectAllCountries = (state: RootState) => state.countries.list;

export const selectVisibleCountries = createSelector(
  [selectAllCountries, (_, filters) => filters],
  (countries, { search = "", region = "" }) =>
    countries.filter(
      (country) =>
        country.name.toLowerCase().includes(search.toLowerCase()) &&
        country.region.includes(region)
    )
);
