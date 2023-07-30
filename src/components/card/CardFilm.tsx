"use client";

import React, { useState } from "react";

import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { CountTicket } from "../countTicket/CountTicket";
import Modal from "../modal/Modal";
import { createPortal } from "react-dom";
// import { useGetMoviesCinemaQuery } from "@/redux/services/moviApi";
import type { movieOption } from "@/types/types";

interface Props {
    movie: movieOption;
    cart?: boolean;
}

const iconClose = (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16.0673 15.1829C16.1254 15.241 16.1714 15.3099 16.2028 15.3858C16.2343 15.4617 16.2505 15.543 16.2505 15.6251C16.2505 15.7072 16.2343 15.7885 16.2028 15.8644C16.1714 15.9403 16.1254 16.0092 16.0673 16.0673C16.0092 16.1254 15.9403 16.1714 15.8644 16.2028C15.7885 16.2343 15.7072 16.2505 15.6251 16.2505C15.543 16.2505 15.4617 16.2343 15.3858 16.2028C15.3099 16.1714 15.241 16.1254 15.1829 16.0673L10.0001 10.8837L4.81729 16.0673C4.70002 16.1846 4.54096 16.2505 4.3751 16.2505C4.20925 16.2505 4.05019 16.1846 3.93292 16.0673C3.81564 15.95 3.74976 15.791 3.74976 15.6251C3.74976 15.4593 3.81564 15.3002 3.93292 15.1829L9.11651 10.0001L3.93292 4.81729C3.81564 4.70002 3.74976 4.54096 3.74976 4.3751C3.74976 4.20925 3.81564 4.05019 3.93292 3.93292C4.05019 3.81564 4.20925 3.74976 4.3751 3.74976C4.54096 3.74976 4.70002 3.81564 4.81729 3.93292L10.0001 9.11651L15.1829 3.93292C15.3002 3.81564 15.4593 3.74976 15.6251 3.74976C15.791 3.74976 15.95 3.81564 16.0673 3.93292C16.1846 4.05019 16.2505 4.20925 16.2505 4.3751C16.2505 4.54096 16.1846 4.70002 16.0673 4.81729L10.8837 10.0001L16.0673 15.1829Z"
            fill="#333333"
        />
    </svg>
);

function CardFilmR({ movie, cart }: Props) {
    console.info("RENDER CARD");
    const [isOpen, setOpen] = useState(false);

    const { posterUrl, title, genre, id } = movie;
    const isModalOpen =
        isOpen &&
        createPortal(
            <Modal id={id} setOpen={setOpen} />,
            document.getElementById("modalContainer") || document.body
        );

    const deleteIcon = !!cart && (
        <button
            className={styles.close}
            onClick={() => setOpen((isOpen) => !isOpen)}
        >
            {iconClose}
        </button>
    );

    return (
        <div className={styles.card}>
            <Image
                src={posterUrl}
                alt={`poster ${title}`}
                width={100}
                height={120}
                className={styles.poster}
            />

            <div className={styles.main}>
                <div className={styles.blockName}>
                    <div className={styles.blockHeader}>
                        <Link href={`/movie/${id}`} className={styles.nameFilm}>
                            {title}
                        </Link>
                        <div className={styles.countAndDelete}>
                            <CountTicket
                                id={id}
                                cart={cart}
                                setOpen={setOpen}
                            />
                            {deleteIcon}
                        </div>
                    </div>
                    {!!genre && <span className={styles.genre}>{genre}</span>}
                </div>

                {!!cart && isModalOpen}
            </div>
        </div>
    );
}

export const CardFilm = CardFilmR;
