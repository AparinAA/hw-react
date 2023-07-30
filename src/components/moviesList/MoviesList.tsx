import React from "react";
import { CardFilm } from "../card/CardFilm";
import type { movieOption } from "@/types/types";

interface PropsMoviesList {
    movieOptions?: movieOption[];
    cart?: boolean;
}

export const MoviesList = ({ movieOptions, cart }: PropsMoviesList) => {
    return (
        <>
            {movieOptions?.map((movieOption: any) => (
                <CardFilm
                    movie={movieOption}
                    key={movieOption.id}
                    cart={cart}
                />
            ))}
        </>
    );
};
