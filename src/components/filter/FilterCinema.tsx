import Dropdown, { Item, Selected } from "./Dropdown";
import FilterDefault from "./FilterDefault";
import styles from "./index.module.css";
type Data = any;

interface Props {
    data: Data;
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
            options={data}
            type="cinema"
            name={name}
        />
    );
};

export default FilterCinema;
