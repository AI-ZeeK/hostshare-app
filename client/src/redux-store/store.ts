import App from "@/redux-actions/AppSlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    App,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
