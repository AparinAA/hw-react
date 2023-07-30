import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type CinemaType = {
    id: string;
    name: string;
    movieIds: string[];
};

export const cinemaApi = createApi({
    reducerPath: "cinemas",
    tagTypes: ["CINEMA"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
    endpoints: (builder) => ({
        getCinemas: builder.query<CinemaType[] | any, void>({
            query: () => ({ url: "cinemas" }),
            providesTags: (result) =>
                result
                    ?.map(({ id }: { id: string }) => ({
                        id,
                        type: "CINEMA",
                    }))
                    ?.concat([{ type: "CINEMA", id: "LIST" }]),
        }),
        updateCinemas: builder.mutation<CinemaType[] | any, any>({
            query: (body) => ({ url: "cinemas", method: "PATCH", body }),
            invalidatesTags: (result) => {
                return [{ type: "CINEMA", id: result?.id }];
            },
        }),
        createCinemas: builder.mutation<CinemaType[] | any, any>({
            query: (body) => ({ url: "cinemas", method: "POST", body }),
            invalidatesTags: (result) => {
                return [{ type: "CINEMA", id: "LIST" }];
            },
        }),
    }),
});

export const { useGetCinemasQuery } = cinemaApi;
