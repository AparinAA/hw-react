"use client";

import {
    selectIdsBookingFilms,
    selectTicketBooking,
} from "@/redux/features/cart/selector";
import { useSelector } from "react-redux";
import { MoviesList } from "./MoviesList";
import { movieOption } from "@/types/types";

import styles from "./index.module.css";

export function MainCartList({
    movieOptions,
}: {
    movieOptions: movieOption[];
}) {
    const idsBookingFilms = useSelector((state) =>
        selectIdsBookingFilms(state)
    );

    const setIdsBookingFilms = new Set(idsBookingFilms.split(";"));

    const selectMovies = movieOptions.filter((movie) =>
        setIdsBookingFilms.has(movie.id)
    );

    return (
        <main className={styles.mainCart}>
            <MoviesList movieOptions={selectMovies} cart={Boolean(true)} />
        </main>
    );
}

function CountTotalBooking() {
    const ticketsBooking = useSelector((state) => selectTicketBooking(state));
    const totalBooking = Object.values<number>(ticketsBooking).reduce(
        (cur, acc) => cur + acc,
        0
    );

    return <>{totalBooking}</>;
}

export function FooterTotal() {
    return (
        <footer className={styles.totalCart}>
            <span>Итого билетов:</span>
            <span>
                <CountTotalBooking />
            </span>
        </footer>
    );
}
