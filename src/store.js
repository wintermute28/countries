import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from "./config";
import { themeReduser } from "./features/theme/theme-slice";
import { controlsReduser } from "./features/controls/controls-slice";

export const store = configureStore({
  reduser: {
    theme: themeReduser,
    controls: controlsReduser,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
        serializableCheck: false,
      },
    }),
});
