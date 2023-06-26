"use client";

import styles from "./page.module.css";
import { Filter, MoviesList } from "@/components";
import { useFilter } from "@/hooks/useFilter";

export default function Main() {
    const { data, isLoading, error } = useFilter();

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (!data || error) {
        return <span>Not found</span>;
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.side}>
                    <div className={styles.filters}>
                        <h2 className={styles.filterHeader}>Фильтр поиска</h2>
                        <Filter />
                    </div>
                </div>
                <div className={styles.listFilms}>
                    <MoviesList movieOptions={data} />
                </div>
            </div>
        </>
    );
}
