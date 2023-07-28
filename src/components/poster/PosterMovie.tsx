// import { useGetMoviesQuery } from "@/redux/services/moviApi";

import styles from "./index.module.css";
import Image from "next/image";
import { CountTicket } from "../countTicket/CountTicket";
import { ReviewContainer } from "../rewievs/ReviewContainer";

type Params = {
    movie: any;
};

function PosterMovie({ movie }: Params) {
    const {
        posterUrl,
        title,
        releaseYear,
        director,
        genre,
        rating,
        description,
    } = movie;

    return (
        <div className={styles.movie}>
            <Image
                src={posterUrl}
                width={400}
                height={500}
                alt={`poster-for-${title}`}
                className={styles.poster}
                priority={true}
            />
            <div className={styles.movieInfo}>
                <div className={styles.title}>
                    <div className={styles.titleText}>{title}</div>
                    <CountTicket id={movie.id} />
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
                    <div className={styles.descriptionText}>{description}</div>
                </div>
            </div>
        </div>
    );
}

export { PosterMovie };
