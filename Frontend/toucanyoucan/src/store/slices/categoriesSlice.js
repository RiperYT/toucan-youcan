import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    all: [
      {
        name: "KMA",
        id: "ag2g1d2x",
      },
      {
        name: "KNU",
        id: "23saqw2r",
      },
      {
        name: "LNZ",
        id: "kfla1382190fda",
      },
      {
        name: "PZNKfadfa",
        id: "fjdakl123",
      },
      {
        name: "Cs Fac",
        id: "fda123s1",
        parentId: "ag2g1d2x",
      },
      {
        name: "Buss Fac",
        id: "af2gp4s1",
        parentId: "ag2g1d2x",
      },
      {
        name: "Fil Fac",
        id: "jkl3uid5",
        parentId: "ag2g1d2x",
      },
      {
        name: "C#",
        id: "lkjpfa21",
        parentId: "fda123s1",
      },
      {
        name: "Java",
        id: "67895134",
        parentId: "fda123s1",
      },
      {
        name: "Swift",
        id: "uyio4298",
        parentId: "fda123s1",
      },
      {
        name: "Marketing",
        id: "9763ghdf435",
        parentId: "af2gp4s1",
      },
      {
        name: "Business Analytics",
        id: "642535642",
        parentId: "af2gp4s1",
      },
      {
        name: "Something",
        id: "1235134214",
        parentId: "af2gp4s1",
      },
      {
        name: "English",
        id: "213254efda134",
        parentId: "jkl3uid5",
      },
      {
        name: "Ukrainian",
        id: "4322t34gfsdhs",
        parentId: "jkl3uid5",
      },
      {
        name: "Organic",
        id: "hgadfda2312145s",
        parentId: "23saqw2r",
      },
      {
        name: "Inorganic",
        id: "gha234fsw342",
        parentId: "23saqw2r",
      },
      {
        name: "Analytical",
        id: "jkkadf4312",
        parentId: "23saqw2r",
      },
      {
        name: "VMS",
        id: "89052kafjasd",
        parentId: "23saqw2r",
      },
    ],
    path: [],
  },
  reducers: {
    addCategories(state, action) {
      return [...state, ...action.payload];
    },
    createOrganization(state, action) {},
    navToOrganization(state, action) {
      state.path = [action.payload];
    },
    navReturn(state, action) {
      state.path.pop();
    },
    navToCategory(state, action) {
      state.path.push(action.payload);
    },
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const {
  addCategories,
  createOrganization,
  navToOrganization,
  navReturn,
  navToCategory,
} = categoriesSlice.actions;
