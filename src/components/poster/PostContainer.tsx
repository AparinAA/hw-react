import { fetchMovie } from "@/services/api";
import React from "react";
import { PosterMovie } from "./PosterMovie";

type Params = {
    movieId: string;
};

async function PostContainer({ movieId }: Params) {
    const movie = await fetchMovie(movieId);
    return <PosterMovie movie={movie} />;
}

export { PostContainer };
