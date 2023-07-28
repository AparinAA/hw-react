import FilterCinema from "./FilterCinema";
import FilterGenge from "./FilterGenge";
import FilterInput from "./FilterInput";

import styles from "./index.module.css";

const Filter = ({ cinemas }: { cinemas: any[] }) => {
    return (
        <div className={styles.filter}>
            <FilterInput />
            <FilterGenge />
            <FilterCinema data={cinemas} />
        </div>
    );
};

export { Filter };
