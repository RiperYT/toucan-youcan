import { configureStore } from "@reduxjs/toolkit";
import {
  changeName,
  changeCourseName,
  changeAdminNames,
  changeConfirmPassword,
  changeEmail,
  changePassword,
  resetPasswords,
  resetForm,
  hashPassword,
  changeOldPassword,
  formsReducer,
} from "./slices/formsSlice";
import {
  usersApi,
  useSignUpMutation,
  useSignInMutation,
} from "./apis/usersApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { usersReducer, signIn } from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    form: formsReducer,
    users: usersReducer,
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
  },
});

setupListeners(store.dispatch);

export { store };
export {
  changeName,
  changeCourseName,
  changeAdminNames,
  changeConfirmPassword,
  changeEmail,
  changePassword,
  changeOldPassword,
  resetForm,
  resetPasswords,
  hashPassword,
  signIn,
  useSignUpMutation,
  useSignInMutation,
};
