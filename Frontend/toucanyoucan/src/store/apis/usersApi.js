import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://89.105.243.157:80",
  }),
  endpoints(builder) {
    return {
      signIn: builder.mutation({
        query: (form) => {
          return {
            url: "/user/Authentication/signIn",
            params: {
              email: form.email,
              password: form.hashedPassword,
            },
            method: "get",
          };
        },
      }),
      signUp: builder.mutation({
        query: (form) => {
          return {
            url: "/user/Authentication/signUp",
            params: {
              email: form.email,
              password: form.hashedPassword,
            },
            method: "get",
          };
        },
      }),
    };
  },
});

export const { useSignInMutation, useSignUpMutation } = usersApi;
export { usersApi };
