import { combineReducers } from "redux";

import { themeReducer } from "./theme/theme-reducer";
import { countiesReducer } from "./countries/countries-reducer";
import { controlReducer } from "./controls/controls-reducer";
import { delailsReducer } from "./details/details-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countiesReducer,
  controls: controlReducer,
  details: delailsReducer,
});
