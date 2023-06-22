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
import {
  categoriesApi,
  useFetchNextCategoriesQuery,
} from "./apis/categoriesApi";
import { usersReducer, signIn } from "./slices/usersSlice";
import { calendarApi, useFetchCalendarDataQuery } from "./apis/calendarApi";
import {
  categoriesReducer,
  addCategories,
  createOrganization,
  navToOrganization,
  navToCategory,
  navReturn,
} from "./slices/categoriesSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    form: formsReducer,
    users: usersReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [calendarApi.reducerPath]: calendarApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(calendarApi.middleware);
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
  addCategories,
  createOrganization,
  navToOrganization,
  navToCategory,
  navReturn,
  useSignUpMutation,
  useSignInMutation,
  useFetchNextCategoriesQuery,
  useFetchCalendarDataQuery,
};
