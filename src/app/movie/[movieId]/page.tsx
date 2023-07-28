import { PostContainer, ReviewContainer } from "@/components";
import styles from "./index.module.css";
import { fetchMovie, fetchMovies } from "@/services/api";

import { Metadata } from "next";

type Props = {
    params: { movieId: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
    params,
    searchParams,
}: Props): Promise<Metadata> {
    const id = params.movieId;
    const movie = await fetchMovie(id || "");
    return {
        title: movie?.title,
    };
}

type Params = {
    movieId: string;
};

interface PropsParams {
    params: Params;
}

export async function generateStaticParams() {
    const movies = await fetchMovies("");
    return (movies || []).slice(0, 3).map(({ id }) => ({ movieId: id }));
}

export default function Page({ params }: PropsParams) {
    const { movieId } = params;
    return (
        <div className={styles.moviePage}>
            <PostContainer movieId={movieId} />;
            <ReviewContainer movieId={movieId} />
        </div>
    );
}
