import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "./setpropertiesSlice";

export const store = configureStore({
  reducer: {
    properties: propertiesReducer, // Use your Redux slice reducer here

  },
});
