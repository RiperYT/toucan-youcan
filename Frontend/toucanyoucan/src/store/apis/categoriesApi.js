import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://89.105.243.157:80/",
  }),
  endpoints(builder) {
    return {
      fetchNextCategories: builder.query({
        query: (parentCategoryId) => {
          return {
            url: "/categories",
            params: {
              id: parentCategoryId,
            },
          };
        },
      }),
    };
  },
});

export const { useFetchNextCategoriesQuery } = categoriesApi;
export { categoriesApi };
