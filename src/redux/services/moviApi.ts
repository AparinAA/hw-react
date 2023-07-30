import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { movieOption } from "@/types/types";

type Review = {
    id: string;
    name: string;
    text: string;
    rating: number;
};

const ruGenre = new Map([
    ["fantasy", "Фэнтези"],
    ["horror", "Ужасы"],
    ["action", "Триллер"],
    ["comedy", "Комедия"],
]);

const movieGenreTranslate = (movieOption: movieOption) => {
    const { genre } = movieOption;
    return { ...movieOption, genre: genre && ruGenre.get(genre) };
};

const moviesGenreTranslate = (moviesOption: movieOption[]) => {
    return moviesOption.map((movie) => movieGenreTranslate(movie));
};

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
    endpoints: (builder) => ({
        getMovies: builder.query<movieOption[], string>({
            query: () => "movies",
            transformResponse: (rawResult: movieOption[], meta) =>
                moviesGenreTranslate(rawResult),
        }),
        getMoviesCinema: builder.query<movieOption[], string>({
            query: (cinemaId) => ({
                url: "movies",
                params: {
                    cinemaId,
                },
            }),
            transformResponse: (rawResult: movieOption[], meta) =>
                moviesGenreTranslate(rawResult),
        }),
        getRevie: builder.query<Review[], string>({
            query: (movieId) => ({
                url: "reviews",
                params: {
                    movieId,
                },
            }),
        }),
    }),
});

export const {
    useGetMoviesQuery,
    // useGetMovieQuery,
    useGetRevieQuery,
    useGetMoviesCinemaQuery,
} = movieApi;
