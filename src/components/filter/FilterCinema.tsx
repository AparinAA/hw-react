import { useGetCinemasQuery } from "@/redux/services/cinemaApi";
import Dropdown from "./Dropdown";
import FilterDefault from "./FilterDefault";
import styles from "./index.module.css";

const FilterCinema = () => {
    const { data, isLoading, error } = useGetCinemasQuery();
    const name = "Кинотеатр";
    if (isLoading) {
        return (
            <label className={styles.labelDropdown}>
                <span className={styles.nameDropdown}>{name}</span>
                <Dropdown>
                    <Dropdown.Selected defaultTitle="Выберите кинотеатр">
                        <Dropdown.Item
                            key="id-none"
                            title="Не выбран"
                            id="Не выбран"
                        />
                        <Dropdown.Item
                            key="key-loading"
                            title="Загрузка..."
                            id="Загрузка"
                        />
                    </Dropdown.Selected>
                </Dropdown>
            </label>
        );
    }

    if (!data || error) {
        return (
            <label className={styles.labelDropdown}>
                <span className={styles.nameDropdown}>{name}</span>
                <Dropdown>
                    <Dropdown.Selected defaultTitle="Выберите кинотеатр">
                        <Dropdown.Item
                            key="key-none"
                            title="Не выбран"
                            id="Не выбран"
                        />
                    </Dropdown.Selected>
                </Dropdown>
            </label>
        );
    }

    return (
        <FilterDefault
            defaultTitle="Выберите кинотеатр"
            options={data}
            type="cinema"
            name={name}
        />
    );
};

export default FilterCinema;
