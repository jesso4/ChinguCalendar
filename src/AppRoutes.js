import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import usersReducer from "../features/users/UsersSlice"

const store = configureStore({
  reducer: {
    // users: usersReducer
  },
  // testing it without the logger
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
export * from "../features/auth/authSlice";
