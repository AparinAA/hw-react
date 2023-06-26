import { createApi, fetchBaseQuery }from "@reduxjs/toolkit/query/react";

type movieOption = {
    title: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    genre?: string;
    id: string;
    rating: number;
    director: string;
    reviewIds: string[];
};

type Review = {
    id: string,
    name: string,
    text: string,
    rating: number
}

const ruGenre = new Map([
    ["fantasy", "Фэнтези"],
    ["horror", "Ужасы"],
    ["action", "Триллер"],
    ["comedy", "Комедия"]
])

const movieGenreTranslate = (movieOption: movieOption) => {
    const { genre }= movieOption;
    return {...movieOption, genre: genre && ruGenre.get(genre)}
}

const moviesGenreTranslate = (moviesOption: movieOption[]) => {
    return moviesOption.map( movie => movieGenreTranslate(movie));
}

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api"}),
    endpoints: (builder) => ({
        getMovies: builder.query<movieOption[],void>({
            query: () => "movies",
            transformResponse: (rawResult: movieOption[], meta) => moviesGenreTranslate(rawResult),
        }),
        getMovie: builder.query<movieOption, string>({
            query: (movieId) => `movie?movieId=${movieId}`,
            transformResponse: (rawResult: movieOption, meta) => movieGenreTranslate(rawResult),
        }),
        getMoviesCinema: builder.query<movieOption[], string>({
            query: (cinemaId) => `movies?cinemaId=${cinemaId}`,
            transformResponse: (rawResult: movieOption[], meta) => moviesGenreTranslate(rawResult),
        }),
        getRevies: builder.query<Review[], void>({query: () => "reviews"}),
        getRevie: builder.query<Review[], string>({ query: (movieId) => `reviews?movieId=${movieId}`}),
    })
});

export const { useGetMoviesQuery, useGetMovieQuery, useGetReviesQuery, useGetRevieQuery, useGetMoviesCinemaQuery } = movieApi;