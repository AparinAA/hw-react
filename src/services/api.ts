import type { movieOption } from "@/types/types";

export async function fetchCinemas() {
    const result = await fetch("http://localhost:3001/api/cinemas");

    return await result.json();
}

const ruGenre = new Map([
    ["fantasy", "Фэнтези"],
    ["horror", "Ужасы"],
    ["action", "Триллер"],
    ["comedy", "Комедия"],
]);

const movieGenreTranslate = (movieOption: movieOption) => {
    const { genre } = movieOption;
    return { ...movieOption, genre: genre && ruGenre.get(genre) };
};

const moviesGenreTranslate = (moviesOption: movieOption[]) => {
    return moviesOption.map((movie) => movieGenreTranslate(movie));
};

export async function fetchReviews(movieId: string) {
    const result = await fetch(
        `http://localhost:3001/api/reviews?movieId=${movieId}`
    );

    return await result.json();
}

export async function fetchMovie(movieId: string) {
    const result = await fetch(
        `http://localhost:3001/api/movie?movieId=${movieId}`,
        {
            next: { tags: [`movie-${movieId}`] },
        }
    );
    const data = await result.json();
    return movieGenreTranslate(data);
}

export async function fetchMovies(cinemaId: string | undefined) {
    console.info("GET MOVIES", cinemaId);
    const result = await fetch(
        `http://localhost:3001/api/movies?cinemaId=${cinemaId}`,
        { next: { tags: ["top10"] } }
    );
    const data = await result.json();
    return moviesGenreTranslate(data);
}
