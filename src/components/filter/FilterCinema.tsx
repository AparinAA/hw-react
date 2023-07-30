import Dropdown, { Item, Selected } from "./Dropdown";
import FilterDefault from "./FilterDefault";
import styles from "./index.module.css";
import type { Cinema } from "@/types/types";

interface Props {
    data: Cinema[];
}

const FilterCinema = ({ data }: Props) => {
    const name = "Кинотеатр";

    if (!data) {
        return (
            <label className={styles.labelDropdown}>
                <span className={styles.nameDropdown}>{name}</span>
                <Dropdown>
                    <Selected>
                        <Item key="key-none" title="Не выбран" id="Не выбран" />
                    </Selected>
                </Dropdown>
            </label>
        );
    }

    return (
        <FilterDefault
            defaultTitle="Выберите кинотеатр"
            options={data.map((item) => ({ id: item.id, name: item.name }))}
            type="cinema"
            name={name}
        />
    );
};

export default FilterCinema;
