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

const MoviesList = ({ movieOptions, cart }: PropsMoviesList) => {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const genre = searchParams.get("genre");

    const filtermovieOptions = movieOptions
        ?.filter((d) => {
            if (name && name.toLowerCase() !== "Введите название") {
                return d.title.toLowerCase().startsWith(name.toLowerCase());
            }
            return true;
        })
        ?.filter((d) => {
            if (genre && genre !== "Выберите жанр" && genre !== "Не выбран") {
                return d.genre === genre;
            }

            return true;
        });
    return (
        <>
            {filtermovieOptions?.map((movieOption: any) => (
                <CardFilm
                    movie={movieOption}
                    key={movieOption.id}
                    cart={cart}
                />
            ))}
        </>
    );
};

export { MoviesList };
