import { combineReducers } from "redux";

import { themeReducer } from "./theme/theme-reducer";
import { countiesReducer } from "./countries/countries-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countiesReducer,
});
