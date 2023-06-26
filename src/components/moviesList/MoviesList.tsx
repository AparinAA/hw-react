import React from "react";
import { CardFilm } from "../card/CardFilm";

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

interface PropsMoviesList {
    movieOptions: movieOption[];
    cart?: boolean;
}

const MoviesList = ({ movieOptions, cart }: PropsMoviesList) => {
    return (
        <>
            {movieOptions?.map((movieOption: any) => (
                <CardFilm
                    movieOption={movieOption}
                    key={movieOption.id}
                    cart={cart}
                />
            ))}
        </>
    );
};

export { MoviesList };
