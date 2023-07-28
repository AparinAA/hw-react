import { fetchMovies } from "@/services/api";
import React from "react";
import { MoviesListMain } from "./MoviesListFilter";

interface PropsContainter {
    cinemaId?: string;
}

async function MoviesContainer({ cinemaId }: PropsContainter) {
    const movies = await fetchMovies(cinemaId);
    return <MoviesListMain movieOptions={movies} />;
}

export { MoviesContainer };
