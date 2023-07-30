"use client";

import React from "react";
import { CardFilm } from "../card/CardFilm";
import { useSearchParams } from "next/navigation";

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
