import { createApi, fetchBaseQuery }from "@reduxjs/toolkit/query/react";

type CinemaType = {
    id: string,
    name: string, 
    movieIds: string[];
}

export const cinemaApi = createApi({
    reducerPath: "cinemas",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api"}),
    endpoints: (builder) => ({
        getCinemas: builder.query<CinemaType[],void>({query: () => "cinemas"}),
    })
});

export const { useGetCinemasQuery } = cinemaApi;