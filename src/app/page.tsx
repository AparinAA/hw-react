import ContainerFilter from "@/components/filter/ContainerFilter";
import styles from "./index.module.css";
import { Filter, MoviesContainer } from "@/components";

export default function Main({ searchParams }: any) {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.side}>
                    <div className={styles.filters}>
                        <h2 className={styles.filterHeader}>Фильтр поиска</h2>
                        <ContainerFilter />
                    </div>
                </div>
                <div className={styles.listFilms}>
                    <MoviesContainer cinemaId={searchParams.cinema} />
                </div>
            </div>
        </>
    );
}
