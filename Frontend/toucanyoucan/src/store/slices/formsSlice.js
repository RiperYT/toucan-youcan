import { createSlice } from "@reduxjs/toolkit";
import { sha256 } from "js-sha256";

const formsSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    courseName: "",
    adminNames: "",
    email: "",
    oldPassword: "",
    password: "",
    confirmPassword: "",
    hashedPassword: "",
  },
  reducers: {
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCourseName(state, action) {
      state.courseName = action.payload;
    },
    changeAdminNames(state, action) {
      state.adminNames = action.payload;
    },
    changeOldPassword(state, action) {
      state.oldPassword = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    },
    changeConfirmPassword(state, action) {
      state.confirmPassword = action.payload;
    },
    resetPasswords(state, action) {
      return {
        ...state,
        password: "",
        confirmPassword: "",
        hashedPassword: "",
      };
    },
    hashPassword(state, action) {
      state.hashedPassword = sha256(state.password);
    },
    resetForm(state, action) {
      return {
        ...state,
        email: "",
        password: "",
        confirmPassword: "",
        hashedPassword: "",
      };
    },
  },
});

export const formsReducer = formsSlice.reducer;
export const {
  changeName,
  changeCourseName,
  changeAdminNames,
  changeEmail,
  changeOldPassword,
  changePassword,
  changeConfirmPassword,
  resetPasswords,
  hashPassword,
  resetForm,
} = formsSlice.actions;
