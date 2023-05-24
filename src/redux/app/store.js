import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../features/User/UserSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
