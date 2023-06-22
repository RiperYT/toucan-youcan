import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const calendarApi = createApi({
  reducerPath: "calendarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://89.105.243.157:80/",
  }),
  endpoints(builder) {
    return {
      fetchCalendarData: builder.query({
        query: ({ userId, date }) => {
          return {
            url: "/calendar",
            params: {
              userId: userId,
              date: date,
            },
          };
        },
      }),
    };
  },
});

export const { useFetchCalendarDataQuery } = calendarApi;
export { calendarApi };
