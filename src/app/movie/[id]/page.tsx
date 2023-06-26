"use client";

import { useGetMovieQuery, useGetRevieQuery } from "@/redux/services/moviApi";
import React from "react";

import styles from "./index.module.css";
import Image from "next/image";
import { CountTicket } from "@/components";

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

type Review = {
    id: string;
    name: string;
    text: string;
    rating: number;
};

const picIcon = (
    <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M27 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V7C29 6.46957 28.7893 5.96086 28.4142 5.58579C28.0391 5.21071 27.5304 5 27 5ZM27 7V19.8438L23.7412 16.5863C23.5555 16.4005 23.335 16.2531 23.0923 16.1526C22.8497 16.052 22.5896 16.0003 22.3269 16.0003C22.0642 16.0003 21.8041 16.052 21.5614 16.1526C21.3187 16.2531 21.0982 16.4005 20.9125 16.5863L18.4125 19.0863L12.9125 13.5863C12.5375 13.2115 12.029 13.0009 11.4987 13.0009C10.9685 13.0009 10.46 13.2115 10.085 13.5863L5 18.6712V7H27ZM5 21.5L11.5 15L21.5 25H5V21.5ZM27 25H24.3288L19.8288 20.5L22.3288 18L27 22.6725V25ZM18 12.5C18 12.2033 18.088 11.9133 18.2528 11.6666C18.4176 11.42 18.6519 11.2277 18.926 11.1142C19.2001 11.0006 19.5017 10.9709 19.7926 11.0288C20.0836 11.0867 20.3509 11.2296 20.5607 11.4393C20.7704 11.6491 20.9133 11.9164 20.9712 12.2074C21.0291 12.4983 20.9993 12.7999 20.8858 13.074C20.7723 13.3481 20.58 13.5824 20.3334 13.7472C20.0867 13.912 19.7967 14 19.5 14C19.1022 14 18.7206 13.842 18.4393 13.5607C18.158 13.2794 18 12.8978 18 12.5Z"
            fill="#828282"
        />
    </svg>
);

function Review({ review }: { review: Review }) {
    return (
        <div className={styles.review}>
            <div className={styles.reviewPic}>{picIcon}</div>
            <div className={styles.reviewInfo}>
                <div className={styles.titleReview}>
                    <div className={styles.nameReviewer}>{review.name}</div>
                    <div className={styles.ratingReview}>
                        Оценка: <span>{review.rating}</span>
                    </div>
                </div>
                <div>{review.text}</div>
            </div>
        </div>
    );
}

function Reviews({ id }: Params) {
    const { data, isLoading, error } = useGetRevieQuery(id);
    if (isLoading) {
        return <div>Loading revies...</div>;
    }

    if (!data || error) {
        return <div>Not found</div>;
    }

    return (
        <div className={styles.reviews}>
            {data.map((review) => (
                <Review review={review} key={review.id} />
            ))}
        </div>
    );
}

function PosterMovie({ id }: Params) {
    const { data, isLoading, error } = useGetMovieQuery(id);

    if (isLoading) {
        return <div>Loading film...</div>;
    }

    if (!data || error) {
        return <div>Not found</div>;
    }

    const {
        posterUrl,
        title,
        releaseYear,
        director,
        genre,
        rating,
        description,
    } = data;

    return (
        <div className={styles.moviePage}>
            <div className={styles.movie}>
                <Image
                    src={posterUrl}
                    width={400}
                    height={500}
                    alt={`poster-for-${title}`}
                    className={styles.poster}
                />
                <div className={styles.movieInfo}>
                    <div className={styles.title}>
                        <div className={styles.titleText}>{title}</div>
                        <CountTicket id={id} />
                    </div>
                    <div className={styles.movieOptions}>
                        {!!genre && (
                            <div className={styles.optionName}>
                                <span>Жанр:</span> {genre}
                            </div>
                        )}
                        <div className={styles.optionName}>
                            <span>Год выпуска:</span> {releaseYear}
                        </div>
                        <div className={styles.optionName}>
                            <span>Рейтинг:</span> {rating}
                        </div>
                        <div className={styles.optionName}>
                            <span>Режиссер:</span> {director}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.descriptionTitle}>Описание</div>
                        <div className={styles.descriptionText}>
                            {description}
                        </div>
                    </div>
                </div>
            </div>
            <Reviews id={id} />
        </div>
    );
}

export async function generateStaticParams() {
    const movies = await fetch("https://localhost:3001/movies").then((res) =>
        res.json()
    );

    return movies.map((movie: any) => ({ id: movie.id }));
}

type Params = {
    id: string;
};

interface PropsParams {
    params: Params;
}

export default function Page({ params }: PropsParams) {
    const { id } = params;
    return <PosterMovie id={id} />;
}
