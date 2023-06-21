const { createSlice } = require("@reduxjs/toolkit");

const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: {},
  },
  reducers: {
    signIn: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { signIn } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
