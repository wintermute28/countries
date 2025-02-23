import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import axios from "axios";
import * as api from "../config";

// Конфигурируем store с использованием redux-toolkit
const store = configureStore({
  reducer: rootReducer, // Указываем корневой редьюсер
  // Дополнительные middleware, если нужно
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { client: axios, api }, // Указываем extraArgument
      },
    }),
});

export default store;
