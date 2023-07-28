"use client";

import { MoviesList } from "@/components";
import React from "react";

import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { selectTicketBooking } from "@/redux/features/cart/selector";

import type { movieOption } from "@/types/types";

function PageContainer({ movieOptions }: { movieOptions: movieOption[] }) {
    const ticketsBooking = useSelector((state) => selectTicketBooking(state));
    const totalBooking = Object.values<number>(ticketsBooking).reduce(
        (cur, acc) => cur + acc,
        0
    );

    const movieOption = movieOptions.filter((movie) =>
        ticketsBooking.hasOwnProperty(movie.id)
    );

    return (
        <>
            <div className={styles.cart}>
                <main className={styles.mainCart}>
                    <MoviesList
                        movieOptions={movieOption}
                        cart={Boolean(true)}
                    />
                </main>
                <footer className={styles.totalCart}>
                    <span>Итого билетов:</span>
                    <span>{totalBooking}</span>
                </footer>
            </div>
        </>
    );
}

export default PageContainer;
