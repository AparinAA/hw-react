import React from "react";
import { MoviesList } from "./MoviesList";

interface PropsMoviesList {
    movieOptions: any;
}

function MoviesListMain({ movieOptions }: PropsMoviesList) {
    return <MoviesList movieOptions={movieOptions} />;
}

export { MoviesListMain };
