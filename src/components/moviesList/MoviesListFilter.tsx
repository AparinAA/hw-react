"use client";

import React from "react";
import { MoviesList } from "./MoviesList";
import { useSearchParams } from "next/navigation";
import type { movieOption } from "@/types/types";

interface PropsMoviesList {
    movieOptions: movieOption[];
}

function MoviesListMain({ movieOptions }: PropsMoviesList) {
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
    return <MoviesList movieOptions={filtermovieOptions} />;
}

export { MoviesListMain };
